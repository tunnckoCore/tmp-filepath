/*!
 * tmp-filepath <https://github.com/tunnckoCore/tmp-filepath>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

'use strict'

const os = require('os')
const path = require('path')
const cuid = require('cuid')

const tmpFilepath = (ext) => path.join(os.tmpdir(), cuid() + (ext || ''))

module.exports = exports.default = tmpFilepath
