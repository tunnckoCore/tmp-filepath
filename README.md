# tmp-filepath [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url]

> Generate temporary filepath string (without writing to disk), using [scaleable, secure and fast cross-platform `cuid`](https://github.com/ericelliott/cuid) and [os-tmpdir](https://github.com/sindresorhus/os-tmpdir)

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i tmp-filepath --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

- `[ext]` **{String}** extension to be appended to filepath
- `return` **{String}** generated filepath

```js
var tmpFilepath = require('tmp-filepath')

tmpFilepath()
//=> /tmp/cia0ervrm0000vppvw0t61v9m

tmpFilepath('.js')
//=> /tmp/cia0ervrm0000vppvw0t61v9m.js
```


## See also
- [koa-ip-filter](https://github.com/tunnckocore/koa-ip-filter): Filter IPs with a glob pattern, regex, string, array or… [more](https://github.com/tunnckocore/koa-ip-filter)
- [koa](https://github.com/koajs/koa): Koa web app framework
- [tempfile](https://github.com/sindresorhus/tempfile): Get a random temp file path
- [vinyl-filter-since](https://github.com/tunnckoCore/vinyl-filter-since): Vinyl adapter (gulp plugin) to filter files that have been… [more](https://github.com/tunnckoCore/vinyl-filter-since)


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/tmp-filepath/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/tmp-filepath
[npmjs-img]: https://img.shields.io/npm/v/tmp-filepath.svg?label=tmp-filepath

[license-url]: https://github.com/tunnckoCore/tmp-filepath/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/tmp-filepath
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/tmp-filepath.svg

[travis-url]: https://travis-ci.org/tunnckoCore/tmp-filepath
[travis-img]: https://img.shields.io/travis/tunnckoCore/tmp-filepath.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/tmp-filepath
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/tmp-filepath.svg

[david-url]: https://david-dm.org/tunnckoCore/tmp-filepath
[david-img]: https://img.shields.io/david/tunnckoCore/tmp-filepath.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
