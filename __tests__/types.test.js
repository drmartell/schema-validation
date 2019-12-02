const {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  CastError,
  getCaster,
  castToNumber,
  castToString,
  castToBoolean,
  castToArray,
} = require('../lib/types.js');

describe('validator module', () => {
  describe('basic validation', () => {
    it('properly determines if a value is a number', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber('hi')).toBeFalsy();
      expect(isNumber([])).toBeFalsy();
      expect(isNumber({})).toBeFalsy();
      expect(isNumber(() => {})).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });

    it('properly determines if a value is a string', () => {
      expect(isString('')).toBeTruthy();
    });

    it('propertly determines if a value is a boolean', () => {
      expect(isBoolean(true)).toBeTruthy();
    });

    it('properly determines if a value is an array', () => {
      expect(isArray([])).toBeTruthy();
    });

    it('propertly determines if a value is an object', () => {
      expect(isObject({})).toBeTruthy();
    }); 
  });

  describe('casters', () => {
    it('can cast values to a number', () => {
      expect(castToNumber(3)).toEqual(3);
      expect(castToNumber('3')).toEqual(3);
      expect(castToNumber(true)).toEqual(1);
      expect(castToNumber(false)).toEqual(0);
    });
    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });

    it('can cast values to a string', () => {
      expect(castToString(3)).toEqual('3');
      expect(castToString('3')).toEqual('3');
      expect(castToString(true)).toEqual('true');
      expect(castToString(false)).toEqual('false');
    });
    it('throws if value is not castable to number', () => {
      expect(() => castToNumber('hi')).toThrowErrorMatchingSnapshot();
      expect(() => castToNumber({})).toThrowErrorMatchingSnapshot();
    });


  });

  it('can get the right caster', () => {
    expect(getCaster(Number)).toEqual(castToNumber);
    expect(getCaster(String)).toEqual(castToString);
    expect(getCaster(Boolean)).toEqual(castToBoolean);
    expect(getCaster(Array)).toEqual(castToArray);
    expect(getCaster(Object)).toBeNull();
    expect(getCaster(Promise)).toBeNull();
  });
});
