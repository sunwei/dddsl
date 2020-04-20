import { DDD } from './constructor';

const proto = DDD.prototype;

import { isValid, parsingFlags, invalidAt } from './valid';

proto.isValid           = isValid;
proto.invalidAt         = invalidAt;
proto.parsingFlags      = parsingFlags;

// Entity
// import { getSetYear, getIsLeapYear } from '../units/year';
// proto.year       = getSetYear;
// proto.isLeapYear = getIsLeapYear;

export default proto;
