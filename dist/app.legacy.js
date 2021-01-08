"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var destructureThisArr = ['testing', 'esmodules']; // destructure

var newThingAddedArr = [].concat(destructureThisArr, ['tonight']); // not sure about backticks

var targetOutput = "".concat(newThingAddedArr.join(' ')); // arrow func es2017
// const check
// async

var arbitraryFlex = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(county) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(targetOutput);
            console.log(county);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function arbitraryFlex(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Location = function Location(county) {
  (0, _classCallCheck2["default"])(this, Location);
  this.county = county;
};

var currentLocation = new Location('West Sussex');
arbitraryFlex(currentLocation.county);
