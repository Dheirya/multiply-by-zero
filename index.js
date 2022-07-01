/*!
 * multiply-by-zero <https://github.com/dheirya/multiply-by-zero>
 *
 * Copyright (c) 2022-present, Dheirya Tyagi
 * Released under the MIT License.
 */

'use strict';

module.exports = function multiplyByZero(number) {
    if (isNaN(number)) throw new TypeError("Can't multiply a string by Zero");
    return 0;
}