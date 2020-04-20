import { hooks } from '../utils/hooks';
import isUndefined from '../utils/is-undefined';
import getParsingFlags from '../create/parsing-flags';

const dddProperties = hooks.dddProperties = [];

export function copyConfig(to, from) {
    let i, prop, val;

    if (!isUndefined(from._isADDDObject)) {
        to._isADDDObject = from._isADDDObject;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }

    if (dddProperties.length > 0) {
        for (i = 0; i < dddProperties.length; i++) {
            prop = dddProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

export function DDD(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
}

export function isDDD (obj) {
    return obj instanceof DDD || (obj != null && obj._isADDDObject != null);
}
