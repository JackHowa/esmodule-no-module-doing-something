# esmodule-no-module-doing-something

do crazy something with nomodule/module

- [ ] transpile two outputs
- [ ] use nomodule/module pattern found in https://jakearchibald.com/2017/es-modules-in-browsers/#nomodule-for-backwards-compatibility
- [ ] test somehow with ie 11 (?)
- [ ] document webpack

## Reference

- https://stackoverflow.com/questions/57492546/what-is-the-difference-between-js-and-mjs-files
- https://jakearchibald.com/2017/es-modules-in-browsers/#nomodule-for-backwards-compatibility
- https://html.spec.whatwg.org/multipage/scripting.html#script-nomodule-example
- https://stackoverflow.com/questions/60895930/javascript-type-module-doesnt-execute

### Babel

- default broswerlistrc https://babeljs.io/docs/en/babel-preset-env#no-targets
- module https://babeljs.io/docs/en/babel-preset-env#targetsesmodules
- transform regenerator via error `SCRIPT5009: 'regeneratorRuntime' is undefined` https://stackoverflow.com/a/36821986/7491536
