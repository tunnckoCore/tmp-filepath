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

/**
 * > Generate temporary filepath string.
 *
 * **Example**
 *
 * ```js
 * const tmpFilepath = require('tmp-filepath')
 *
 * console.log(tmpFilepath())
 * // => /tmp/cia0ervrm0000vppvw0t61v9m
 *
 * console.log(tmpFilepath('.js'))
 * // => /tmp/cia0ervrm0000vppvw0t61v9m.js
 * ```
 *
 * @name   tmpFilepath
 * @param  {String} `[ext]` extension to be appended to generated filepath
 * @return {String} generated filepath
 * @api public
 */

const tmpFilepath = (ext) => path.join(os.tmpdir(), cuid() + (ext || ''))

module.exports = exports.default = tmpFilepath
