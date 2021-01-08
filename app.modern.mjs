"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var destructureThisArr = ['testing', 'esmodules']; // destructure

var newThingAddedArr = [...destructureThisArr, 'tonight']; // not sure about backticks

var targetOutput = "".concat(newThingAddedArr.join(' ')); // arrow func es2017
// const check
// async

var arbitraryFlex = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (county) {
    console.log(targetOutput);
    console.log(county);
  });

  return function arbitraryFlex(_x) {
    return _ref.apply(this, arguments);
  };
}();

class Location {
  constructor(county) {
    this.county = county;
  }

}

var currentLocation = new Location('West Sussex');
arbitraryFlex(currentLocation.county);
