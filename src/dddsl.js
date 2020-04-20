/**
 * @license
 * OneDDD <https://oneddd.com/>
 * Copyright Sunzhongmou Foundation and other contributors <https://sunzhongmou.com/>
 * Released under MIT license <https://oneddd.com/license>
 */

import { hooks as ddd, setHookCallback } from './lib/utils/hooks';

ddd.version = '0.1.0';

import {
  isDDD,
  dddPrototype   as fn,
  createDefault as Default,
} from './lib/ddd/ddd';

setHookCallback(Default);

ddd.fn                    = fn;
ddd.isDDD                 = isDDD;
ddd.prototype             = fn;

export default ddd;