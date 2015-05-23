/*!
 * tmp-filepath <https://github.com/tunnckoCore/tmp-filepath>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict'

var fath = require('path')
var cuid = require('cuid')
var osTmpdir = require('os-tmpdir')

module.exports = function (ext) {
  return fath.join(osTmpdir(), cuid() + (ext || ''))
}
