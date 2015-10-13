import chai, { expect } from 'chai';
import Immutable from 'immutable';
import chaiEqlImmutable from '../src/chai-eql-immutable';
chai.use(chaiEqlImmutable);

describe('chai-eql-immutable plugin', () => {
  describe('js object', () => {
    it('{a: 1} is deeply equal to {a: 1}', () => {
      expect({a: 1}).to.eql({a: 1});
    })

    it('{a: {b: 1}} is deeply equal to {a: {b: 1}}', () => {
      expect({a: {b: 1}}).to.eql({a: {b: 1}});
    });

    it('{a: {b: 1}} is not deeply equal to {a: {b: 2}}', () => {
      expect({a: {b: 1}}).not.to.eql({a: {b: 2}});
    });
  });

  describe('Immutable object', () => {
    it('Immutable.fromJS({a: 1}) is deeply equal to Immutable.fromJS({a: 1}) in terms of original js object', () => {
      expect(Immutable.fromJS({a: 1})).to.eql(Immutable.fromJS({a: 1}));
    });

    it('Immutable.fromJS({a: {b: 1}}) is deeply equal to Immutable.fromJS({a: {b: 1}}) in terms of original js object', () => {
      expect(Immutable.fromJS({a: {b: 1}})).to.eql(Immutable.fromJS({a: {b: 1}}));
    });

    it('Immutable.fromJS({a: {b: 1}}) is deeply equal to Immutable.fromJS({a: {b: 2}}) in terms of original js object', () => {
      expect(Immutable.fromJS({a: {b: 1}})).not.to.eql(Immutable.fromJS({a: {b: 2}}));
    });
  });
});
