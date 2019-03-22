# TweenSE

> A tiny javascript tweening animation engine.

[![NPM version](https://badgen.net/npm/v/Tween)](https://npmjs.com/package/Tween) [![NPM downloads](https://badgen.net/npm/dm/Tween)](https://npmjs.com/package/Tween) [![CircleCI](https://badgen.net/circleci/github/ulivz/Tween/master)](https://circleci.com/gh/ulivz/Tween/tree/master) 

## Install

```bash
npm i tweenimate -s
```

## Usage

```js
const { animate } = require('tweense')

animate(
  0, 
  1,
  1000,
  'Quad.easeIn',
  (value, isEnding) => {
    if(!isEnding){
      arc.render(value)
    }
  }
)
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**Tween** © [ULIVZ](https://github.com/ulivz), Released under the [MIT](LICENSE) License.<br>
Authored and maintained by ULIVZ with help from contributors ([list](https://github.com/ulivz/Tween/contributors)).

> [github.com/ulivz](https://github.com/ulivz) · GitHub [@ULIVZ](https://github.com/ulivz) · Twitter [@_ulivz](https://twitter.com/_ulivz)
