# chai-eql-immutable

This provides a deeply equal assertion for Facebook's Immutable object.

# Motivation

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
