/*!
 * tmp-filepath <https://github.com/tunnckoCore/tmp-filepath>
 *
 * Copyright (c) Charlike Mike Reagent <@tunnckoCore> (http://i.am.charlike.online)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

const os = require('os')
const test = require('mukla')
const tmpFilepath = require('./index')

test('should generate a random temp file path', (done) => {
  test.strictEqual(tmpFilepath().indexOf(os.tmpdir()) !== -1, true)
  done()
})

test('should have an option to supply an extension', (done) => {
  test.strictEqual(/png$/.test(tmpFilepath('.png')), true)
  done()
})
