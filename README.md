# chai-eql-immutable

This provides a deeply equal assertion for [Facebook's Immutable.js object](https://facebook.github.io/immutable-js).

# Motivation
chai `eql` asserts that the target is deeply equal to expected value, including values depending on Immutable.js's internal state.
It makes diff outsputs complicated like following examples.

```
const a = Immutable.fromJS({a: [{b: 1}]});
const b = Immutable.fromJS({a: [{b: 2}]});
const c = a.setIn('b', 3);

expect(a).to.eql(b);
AssertionError: expected Map { "a": List [ Map { "b": 1 } ] } to deeply equal Map { "a": List [ Map { "b": 2 } ] }
+ expected - actual

                 "_root": {
                   "entries": [
                     [
                       "b"
-                      1
+                      2
                     ]
                   ]
                   "ownerID": {}
                 }

expect(a).to.eql(c);
AssertionError: expected Map { "a": List [ Map { "b": 1 } ] } to deeply equal Map { "a": List [ Map { "b": 3 } ] }
+ expected - actual

                 "_root": {
                   "entries": [
                     [
                       "b"
-                      1
+                      3
               ]
                   ]
-                  "ownerID": {}
+                  "ownerID": [undefined]
                 }
                 "size": 1
               }
             ]
           "size": 1
         }
       ]
     ]
-    "ownerID": {}
+    "ownerID": [undefined]
   }
   "size": 1
 }
```

Immutable.js has [toJS()](http://facebook.github.io/immutable-js/docs/#/Iterable/toJS) which create equivalent JS object.In this module, if both actual and expected has `toJS()` funciton, calls `toJS()` and asserts with original `eql`. As a result, we can get pretty diff outputs like examples in Usage.

# Usage
```
npm install chai-eql-immutable
```

```
import chai from 'chai';
import chaiEqlImmutable from 'chai-eql-immutable';

chai.use(chaiEqlImmutable);
```

```
//example
const a = Immutable.fromJS({a: [{b: 1}]});
const b = Immutable.fromJS({a: [{b: 1}]});
const c = Immutable.fromJS({a: [{b: 2}]});

expect(a).to.eql(b); // success
expect(a).to.eql(c); // failed
AssertionError: expected { a: [ { b: 1 } ] } to deeply equal { a: [ { b: 2 } ] }
+ expected - actual

{
  "a": [
     {
  -    "b": 1
  +    "b": 2
     }
  ]
}
```
