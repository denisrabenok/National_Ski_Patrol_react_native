'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purgeStoredState = exports.persistStore = exports.getStoredState = exports.createTransform = exports.createPersistor = exports.autoRehydrate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxPersist = require('redux-persist');

var _reduxPersistTransformImmutable = require('redux-persist-transform-immutable');

var _reduxPersistTransformImmutable2 = _interopRequireDefault(_reduxPersistTransformImmutable);

var _operators = require('./operators');

var operators = _interopRequireWildcard(_operators);

var _reconciler = require('./reconciler');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var extendConfig = function extendConfig(config) {
  var incomingTransforms = config.transforms || [];
  var records = config.records || null;
  var transforms = incomingTransforms;
  if (!config.skipImmutableTransform) {
    transforms = [].concat(_toConsumableArray(incomingTransforms), [(0, _reduxPersistTransformImmutable2.default)({ records: records })]);
  }
  return _extends({ stateReconciler: _reconciler.stateReconciler }, config, operators, { transforms: transforms });
};

var autoRehydrate = function autoRehydrate() {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _reduxPersist.autoRehydrate.apply(undefined, [extendConfig(config)].concat(args));
};

var createPersistor = function createPersistor(store) {
  for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return _reduxPersist.createPersistor.apply(undefined, [store, extendConfig(config)].concat(args));
};

var persistStore = function persistStore(store) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return _reduxPersist.persistStore.apply(undefined, [store, extendConfig(config)].concat(args));
};

var getStoredState = function getStoredState() {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return _reduxPersist.getStoredState.apply(undefined, [extendConfig(config)].concat(args));
};

exports.autoRehydrate = autoRehydrate;
exports.createPersistor = createPersistor;
exports.createTransform = _reduxPersist.createTransform;
exports.getStoredState = getStoredState;
exports.persistStore = persistStore;
exports.purgeStoredState = _reduxPersist.purgeStoredState;