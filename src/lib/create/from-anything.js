import isUndefined from '../utils/is-undefined';
import isObject from "../utils/is-object";
import isArray from "../utils/is-array";
import isObjectEmpty from "../utils/is-object-empty";
import { DDD } from '../ddd/constructor';
import { configFromString } from './from-string';

function createFromConfig (config) {
    return  new DDD(prepareConfig(config));
}

export function prepareConfig (config) {
    configFromInput(config);
    return config;
}

function configFromInput(config) {
    const input = config._input;
    if (isUndefined(input)) {
        console.log('---');
    } else if (typeof input === 'string') {
        configFromString(config);
    } else {
        console.log("nothing...")
    }
}

export function create (input, version) {
    const conf = {};

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    conf._input = input;
    conf._version = version;

    return createFromConfig(conf);
}
