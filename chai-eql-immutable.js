import chai from 'chai';
import Immutable from 'immutable';

export default function(chai, utils) {
  chai.Assertion.overwriteMethod('eql', function(_super) {
    return function(expected, message) {
      const actual = utils.flag(this, 'object');
      if (actual.toJS instanceof Function && expected.toJS instanceof Function) {
        utils.flag(this, 'object', actual.toJS());
        _super.apply(this, [expected.toJS(), message]);
      } else {
        _super.apply(this, arguments); 
      }
    };
  });
}
