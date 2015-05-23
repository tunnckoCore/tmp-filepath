/*!
 * tmp-filepath <https://github.com/tunnckoCore/tmp-filepath>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var tmpFilepath = require('./index')
var tmpdir = require('os').tmpdir()

test('should generate a random temp file path', function () {
  test.ok(tmpFilepath().indexOf(tmpdir) !== -1)
})

test('should have an option to supply an extension', function () {
  test.ok(/png$/.test(tmpFilepath('.png')))
})
