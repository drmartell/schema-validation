// is* functions
const isNumber = value => typeof value === 'number';
const isString = value => typeof value === 'string';
const isBoolean = value => typeof value === 'boolean';
const isArray = value => value !== Array.prototype && Array.isArray(value);
const isObject = value => value !== null && typeof value === 'object';

// castTo*
const castToNumber = value => {
  const number = Number(value.replace(/\D/g, ''));
  if(isNaN(number)) throw new CastError(Number, value);
  return number;
};

const castToString = value =>
const castToBoolean = value =>
const castToArray = value => 

class CastError extends Error {
  constructor(Type, value) {
    const type = Type.name;
    super(`Cannot cast >>${value}<< to ${type}`);
    this.type = type;
    this.value = value;
  }
}

const casters = {
  Number: castToNumber,
  String: castToString,
  Boolean: castToString,
  Array: castToString,
  Object: castToString,
};

const getCaster = Type => casters[`castto${ Type }`] || null;

module.exports = {
  isNumber,
  CastError,
  getCaster,
  castToNumber,
};
