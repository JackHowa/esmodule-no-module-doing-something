# esmodule-no-module-doing-something

do crazy something with nomodule/module

- [x] transpile two outputs
- [x] use nomodule/module pattern found in https://jakearchibald.com/2017/es-modules-in-browsers/#nomodule-for-backwards-compatibility
- [x] test somehow with ie 11 -> used Parallels free trial
- [x] transpile output successfully (getting require error with regenerator runtime not found)
- [x] document webpack solution with regenerator runtime
- [x] pass estimator.dev -> nearly 6% left

## Reference

- https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files
- https://jakearchibald.com/2017/es-modules-in-browsers/#nomodule-for-backwards-compatibility
- https://html.spec.whatwg.org/multipage/scripting.html#script-nomodule-example
- https://stackoverflow.com/questions/60895930/javascript-type-module-doesnt-execute

### Babel

- default broswerlistrc https://babeljs.io/docs/en/babel-preset-env#no-targets
- module https://babeljs.io/docs/en/babel-preset-env#targetsesmodules
- transform regenerator via error `SCRIPT5009: 'regeneratorRuntime' is undefined` https://stackoverflow.com/a/36821986/7491536
- https://babeljs.io/docs/en/babel-plugin-transform-runtime
- https://philipwalton.com/articles/deploying-es2015-code-in-production-today/
- https://github.com/babel/preset-modules#babelpreset-modules
- https://css-tricks.com/differential-serving/
- jason miller preset modules https://babeljs.io/blog/2020/03/16/7.9.0
