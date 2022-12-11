webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _infact = __webpack_require__(2);
	
	var _demo = __webpack_require__(168);
	
	var _demo2 = _interopRequireDefault(_demo);
	
	__webpack_require__(191);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_infact.ReactDOM.render(_infact.React.createElement(_demo2.default, null), document.getElementById('root'));

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// // infact = inferno + react
	
	if (false) {
	    exports.Inferno = require('inferno');
	    exports.ReactDOM = exports.Inferno;
	    exports.Component = require('inferno-component');
	    exports.PropTypes = {};
	}
	if (true) {
	    exports.React = __webpack_require__(3);
	    exports.ReactDOM = __webpack_require__(30);
	    exports.Component = exports.React.Component;
	    exports.PropTypes = exports.React.PropTypes;
	}

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _infact = __webpack_require__(2);
	
	var _infact2 = __webpack_require__(169);
	
	var _infact3 = _interopRequireDefault(_infact2);
	
	var _pigeonCluster = __webpack_require__(175);
	
	var _pigeonCluster2 = _interopRequireDefault(_pigeonCluster);
	
	var _infact4 = __webpack_require__(183);
	
	var _infact5 = _interopRequireDefault(_infact4);
	
	var _coords = __webpack_require__(190);
	
	var _coords2 = _interopRequireDefault(_coords);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function TestMarker(_ref) {
	    var pixelOffset = _ref.pixelOffset,
	        count = _ref.count;
	
	    return _infact.React.createElement(
	        'div',
	        { style: {
	                position: 'absolute',
	                left: pixelOffset[0],
	                top: pixelOffset[1],
	                width: 0,
	                height: 0,
	                borderLeft: '15px solid transparent',
	                borderRight: '15px solid transparent',
	                borderBottom: '30px solid rgba(0, 0, 0, 0.5)',
	                display: 'flex',
	                justifyContent: 'center',
	                alignItems: 'baseline',
	                lineHeight: '34px',
	                color: 'white'
	            } },
	        count
	    );
	}
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));
	
	        _this.addPoints = function () {
	            _this.updatePointsCount(100);
	        };
	
	        _this.removePoints = function () {
	            _this.updatePointsCount(-100);
	        };
	
	        _this.state = {
	            displayPoints: _coords2.default.features.length
	        };
	        return _this;
	    }
	
	    _createClass(Demo, [{
	        key: 'updatePointsCount',
	        value: function updatePointsCount(diff) {
	            this.setState({
	                displayPoints: Math.max(0, Math.min(this.state.displayPoints + diff, _coords2.default.features.length))
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var pointsToDisplay = _coords2.default.features.slice(0, this.state.displayPoints);
	            return _infact.React.createElement(
	                'div',
	                { style: { textAlign: 'center' } },
	                _infact.React.createElement(
	                    'div',
	                    { style: { display: 'flex', justifyContent: 'space-between', width: 500, margin: '0 auto', padding: 16 } },
	                    _infact.React.createElement(
	                        'button',
	                        { onClick: this.addPoints },
	                        'Add points'
	                    ),
	                    _infact.React.createElement(
	                        'button',
	                        { onClick: this.removePoints },
	                        'Remove points'
	                    ),
	                    _infact.React.createElement(
	                        'span',
	                        null,
	                        this.state.displayPoints,
	                        ' Points'
	                    )
	                ),
	                _infact.React.createElement(
	                    _infact3.default,
	                    { center: [50.879, 4.6997],
	                        zoom: 4,
	                        width: 600,
	                        height: 400 },
	                    _infact.React.createElement(
	                        _pigeonCluster2.default,
	                        { component: TestMarker },
	                        pointsToDisplay.map(function (f) {
	                            return _infact.React.createElement(_infact5.default, { key: f.toString(), anchor: f, payload: 1 });
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Demo;
	}(_infact.Component);
	
	exports.default = Demo;

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.exports = require('./lib/inferno/index.js')
	}
	if (true) {
	  module.exports = __webpack_require__(170)
	}


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _infact = __webpack_require__(171);
	
	var _parentPosition = __webpack_require__(172);
	
	var _parentPosition2 = _interopRequireDefault(_parentPosition);
	
	var _parentHasClass = __webpack_require__(173);
	
	var _parentHasClass2 = _interopRequireDefault(_parentHasClass);
	
	var _debounce = __webpack_require__(174);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var ANIMATION_TIME = 300;
	var DIAGONAL_THROW_TIME = 1500;
	var SCROLL_PIXELS_FOR_ZOOM_LEVEL = 150;
	var MIN_DRAG_FOR_THROW = 40;
	var CLICK_TOLERANCE = 2;
	var DOUBLE_CLICK_DELAY = 300;
	var DEBOUNCE_DELAY = 60;
	
	var NOOP = function () {};
	
	function wikimedia(x, y, z) {
	  var retina = typeof window !== 'undefined' && window.devicePixelRatio >= 2;
	  return 'https://maps.wikimedia.org/osm-intl/' + z + '/' + x + '/' + y + (retina ? '@2x' : '') + '.png';
	}
	
	// https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
	var lng2tile = function (lon, zoom) {
	  return (lon + 180) / 360 * Math.pow(2, zoom);
	};
	var lat2tile = function (lat, zoom) {
	  return (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom);
	};
	
	function tile2lng(x, z) {
	  return x / Math.pow(2, z) * 360 - 180;
	}
	
	function tile2lat(y, z) {
	  var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
	  return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
	}
	
	function getMousePixel(dom, event) {
	  var parent = (0, _parentPosition2.default)(dom);
	  return [event.clientX - parent.x, event.clientY - parent.y];
	}
	
	function easeOutQuad(t) {
	  return t * (2 - t);
	}
	
	var minLng = tile2lng(0, 10);
	var minLat = tile2lat(Math.pow(2, 10), 10);
	
	var maxLng = tile2lng(Math.pow(2, 10), 10);
	var maxLat = tile2lat(0, 10);
	
	var Map = function (_Component) {
	  _inherits(Map, _Component);
	
	  function Map(props) {
	    _classCallCheck(this, Map);
	
	    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));
	
	    _this.setCenterZoomTarget = function (center, zoom, fromProps) {
	      var zoomAround = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	      var animationDuration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : ANIMATION_TIME;
	
	      // TODO: if center diff is more than 2 screens, no animation
	      if (_this.props.animate) {
	        if (_this._isAnimating) {
	          window.cancelAnimationFrame(_this._animFrame);
	
	          var _this$animationStep = _this.animationStep(window.performance.now()),
	              centerStep = _this$animationStep.centerStep,
	              zoomStep = _this$animationStep.zoomStep;
	
	          _this._centerStart = centerStep;
	          _this._zoomStart = zoomStep;
	        } else {
	          _this._isAnimating = true;
	          _this._centerStart = _this.limitCenterAtZoom([_this._lastCenter[0], _this._lastCenter[1]], _this._lastZoom);
	          _this._zoomStart = _this._lastZoom;
	        }
	
	        _this._animationStart = window.performance.now();
	        _this._animationEnd = _this._animationStart + animationDuration;
	
	        if (zoomAround) {
	          _this._zoomAround = zoomAround;
	          _this._centerTarget = _this.calculateZoomCenter(_this._lastCenter, zoomAround, _this._lastZoom, zoom);
	        } else {
	          _this._zoomAround = null;
	          _this._centerTarget = center;
	        }
	        _this._zoomTarget = zoom;
	
	        _this._animFrame = window.requestAnimationFrame(_this.animate);
	      } else {
	        if (zoomAround) {
	          var _center = _this.calculateZoomCenter(_this._lastCenter, zoomAround, _this._lastZoom, zoom);
	          _this.setCenterZoom(_center, zoom, fromProps);
	        } else {
	          _this.setCenterZoom(center, zoom, fromProps);
	        }
	      }
	    };
	
	    _this.animationStep = function (timestamp) {
	      var length = _this._animationEnd - _this._animationStart;
	      var progress = Math.max(timestamp - _this._animationStart, 0);
	      var percentage = easeOutQuad(progress / length);
	
	      var zoomDiff = (_this._zoomTarget - _this._zoomStart) * percentage;
	      var zoomStep = _this._zoomStart + zoomDiff;
	
	      if (_this._zoomAround) {
	        var centerStep = _this.calculateZoomCenter(_this._centerStart, _this._zoomAround, _this._zoomStart, zoomStep);
	
	        return { centerStep: centerStep, zoomStep: zoomStep };
	      } else {
	        var _centerStep = [_this._centerStart[0] + (_this._centerTarget[0] - _this._centerStart[0]) * percentage, _this._centerStart[1] + (_this._centerTarget[1] - _this._centerStart[1]) * percentage];
	
	        return { centerStep: _centerStep, zoomStep: zoomStep };
	      }
	    };
	
	    _this.animate = function (timestamp) {
	      if (timestamp >= _this._animationEnd) {
	        _this._isAnimating = false;
	        _this.setCenterZoom(_this._centerTarget, _this._zoomTarget);
	      } else {
	        var _this$animationStep2 = _this.animationStep(timestamp),
	            centerStep = _this$animationStep2.centerStep,
	            zoomStep = _this$animationStep2.zoomStep;
	
	        _this.setCenterZoom(centerStep, zoomStep);
	        _this._animFrame = window.requestAnimationFrame(_this.animate);
	      }
	    };
	
	    _this.stopAnimating = function () {
	      if (_this._isAnimating) {
	        _this._isAnimating = false;
	        window.cancelAnimationFrame(_this._animFrame);
	      }
	    };
	
	    _this.limitCenterAtZoom = function (center) {
	      // TODO: use zoom to hide the gray area of the map - adjust the center
	      return [Math.max(Math.min(isNaN(center[0]) ? _this.state.center[0] : center[0], maxLat), minLat), Math.max(Math.min(isNaN(center[1]) ? _this.state.center[1] : center[1], maxLng), minLng)];
	    };
	
	    _this.setCenterZoom = function (center, zoom) {
	      var limitedCenter = _this.limitCenterAtZoom(center, zoom);
	
	      if (Math.round(_this.state.zoom) !== Math.round(zoom)) {
	        (function () {
	          var tileValues = _this.tileValues(_this.props, _this.state);
	          var nextValues = _this.tileValues(_this.props, { center: limitedCenter, zoom: zoom });
	          var oldTiles = _this.state.oldTiles;
	
	          _this.setState({
	            oldTiles: oldTiles.filter(function (o) {
	              return o.roundedZoom !== tileValues.roundedZoom;
	            }).concat(tileValues)
	          }, NOOP);
	
	          var loadTracker = {};
	
	          for (var x = nextValues.tileMinX; x <= nextValues.tileMaxX; x++) {
	            for (var y = nextValues.tileMinY; y <= nextValues.tileMaxY; y++) {
	              var key = x + '-' + y + '-' + nextValues.roundedZoom;
	              loadTracker[key] = false;
	            }
	          }
	
	          _this._loadTracker = loadTracker;
	        })();
	      }
	
	      _this.setState({ center: limitedCenter, zoom: zoom }, NOOP);
	
	      var maybeZoom = _this.props.zoom ? _this.props.zoom : _this._lastZoom;
	      var maybeCenter = _this.props.center ? _this.props.center : _this._lastCenter;
	      if (Math.abs(maybeZoom - zoom) > 0.001 || Math.abs(maybeCenter[0] - limitedCenter[0]) > 0.00001 || Math.abs(maybeCenter[1] - limitedCenter[1]) > 0.00001) {
	        _this._lastZoom = zoom;
	        _this._lastCenter = [].concat(_toConsumableArray(limitedCenter));
	        _this.syncToProps(limitedCenter, zoom);
	      }
	    };
	
	    _this.imageLoaded = function (key) {
	      if (_this._loadTracker && key in _this._loadTracker) {
	        _this._loadTracker[key] = true;
	
	        var unloadedCount = Object.keys(_this._loadTracker).filter(function (k) {
	          return !_this._loadTracker[k];
	        }).length;
	
	        if (unloadedCount === 0) {
	          _this.setState({ oldTiles: [] }, NOOP);
	        }
	      }
	    };
	
	    _this.handleTouchStart = function (event) {
	      var _this$props = _this.props,
	          width = _this$props.width,
	          height = _this$props.height;
	
	      if (event.touches.length === 1) {
	        var touch = event.touches[0];
	        var pixel = getMousePixel(_this._containerRef, touch);
	
	        if (pixel[0] >= 0 && pixel[1] >= 0 && pixel[0] < width && pixel[1] < height) {
	          _this._touchStartCoords = [[touch.clientX, touch.clientY]];
	
	          _this.stopAnimating();
	          event.preventDefault();
	
	          if (_this._lastTap && window.performance.now() - _this._lastTap < DOUBLE_CLICK_DELAY) {
	            var latLngNow = _this.pixelToLatLng(_this._touchStartCoords[0]);
	            _this.setCenterZoomTarget(null, Math.max(1, Math.min(_this.state.zoom + 1, 18)), false, latLngNow);
	          } else {
	            _this._lastTap = window.performance.now();
	            _this.startTrackingMoveEvents(pixel);
	          }
	        }
	        // added second finger and first one was in the area
	      } else if (event.touches.length === 2 && _this._touchStartCoords) {
	        event.preventDefault();
	
	        _this.stopTrackingMoveEvents();
	
	        if (_this.state.pixelDelta || _this.state.zoomDelta) {
	          _this.sendDeltaChange();
	        }
	
	        var t1 = event.touches[0];
	        var t2 = event.touches[1];
	
	        _this._touchStartCoords = [[t1.clientX, t1.clientY], [t2.clientX, t2.clientY]];
	        _this._touchStartMidPoint = [(t1.clientX + t2.clientX) / 2, (t1.clientY + t2.clientY) / 2];
	        _this._touchStartDistance = Math.sqrt(Math.pow(t1.clientX - t2.clientX, 2) + Math.pow(t1.clientY - t2.clientY, 2));
	      }
	    };
	
	    _this.handleTouchMove = function (event) {
	      if (event.touches.length === 1 && _this._touchStartCoords) {
	        event.preventDefault();
	        var touch = event.touches[0];
	        var pixel = getMousePixel(_this._containerRef, touch);
	        _this.trackMoveEvents(pixel);
	
	        _this.setState({
	          pixelDelta: [touch.clientX - _this._touchStartCoords[0][0], touch.clientY - _this._touchStartCoords[0][1]]
	        }, NOOP);
	      } else if (event.touches.length === 2 && _this._touchStartCoords) {
	        var _this$props2 = _this.props,
	            width = _this$props2.width,
	            height = _this$props2.height;
	        var zoom = _this.state.zoom;
	
	        event.preventDefault();
	
	        var t1 = event.touches[0];
	        var t2 = event.touches[1];
	
	        var parent = (0, _parentPosition2.default)(_this._containerRef);
	
	        var midPoint = [(t1.clientX + t2.clientX) / 2, (t1.clientY + t2.clientY) / 2];
	        var midPointDiff = [midPoint[0] - _this._touchStartMidPoint[0], midPoint[1] - _this._touchStartMidPoint[1]];
	
	        var distance = Math.sqrt(Math.pow(t1.clientX - t2.clientX, 2) + Math.pow(t1.clientY - t2.clientY, 2));
	
	        var zoomDelta = Math.min(18, zoom + Math.log2(distance / _this._touchStartDistance)) - zoom;
	        var scale = Math.pow(2, zoomDelta);
	
	        var centerDiffDiff = [(parent.x + width / 2 - midPoint[0]) * (scale - 1), (parent.y + height / 2 - midPoint[1]) * (scale - 1)];
	
	        _this.setState({
	          zoomDelta: zoomDelta,
	          pixelDelta: [centerDiffDiff[0] + midPointDiff[0] * scale, centerDiffDiff[1] + midPointDiff[1] * scale]
	        }, NOOP);
	      }
	    };
	
	    _this.handleTouchEnd = function (event) {
	      if (_this._touchStartCoords) {
	        event.preventDefault();
	
	        var _this$sendDeltaChange = _this.sendDeltaChange(),
	            center = _this$sendDeltaChange.center,
	            zoom = _this$sendDeltaChange.zoom;
	
	        if (event.touches.length === 0) {
	          _this._touchStartCoords = null;
	          var pixel = getMousePixel(_this._containerRef, event.changedTouches[0]);
	          _this.throwAfterMoving(pixel, center, zoom);
	        } else if (event.touches.length === 1) {
	          var touch = event.touches[0];
	          var _pixel = getMousePixel(_this._containerRef, touch);
	
	          _this._touchStartCoords = [[touch.clientX, touch.clientY]];
	          _this.startTrackingMoveEvents(_pixel);
	        }
	      }
	    };
	
	    _this.handleMouseDown = function (event) {
	      var _this$props3 = _this.props,
	          width = _this$props3.width,
	          height = _this$props3.height;
	
	      var pixel = getMousePixel(_this._containerRef, event);
	
	      if (event.button === 0 && !(0, _parentHasClass2.default)(event.target, 'pigeon-drag-block') && pixel[0] >= 0 && pixel[1] >= 0 && pixel[0] < width && pixel[1] < height) {
	        _this.stopAnimating();
	        event.preventDefault();
	
	        if (_this._lastClick && window.performance.now() - _this._lastClick < DOUBLE_CLICK_DELAY) {
	          var latLngNow = _this.pixelToLatLng(_this._mousePosition);
	          _this.setCenterZoomTarget(null, Math.max(1, Math.min(_this.state.zoom + 1, 18)), false, latLngNow);
	        } else {
	          _this._lastClick = window.performance.now();
	
	          _this._mouseDown = true;
	          _this._dragStart = pixel;
	          _this.startTrackingMoveEvents(pixel);
	        }
	      }
	    };
	
	    _this.handleMouseMove = function (event) {
	      _this._mousePosition = getMousePixel(_this._containerRef, event);
	
	      if (_this._mouseDown && _this._dragStart) {
	        _this.trackMoveEvents(_this._mousePosition);
	        _this.setState({
	          pixelDelta: [_this._mousePosition[0] - _this._dragStart[0], _this._mousePosition[1] - _this._dragStart[1]]
	        }, NOOP);
	      }
	    };
	
	    _this.handleMouseUp = function (event) {
	      var pixelDelta = _this.state.pixelDelta;
	
	      if (_this._mouseDown) {
	        _this._mouseDown = false;
	
	        var pixel = getMousePixel(_this._containerRef, event);
	
	        if (_this.props.onClick && !(0, _parentHasClass2.default)(event.target, 'pigeon-click-block') && (!pixelDelta || Math.abs(pixelDelta[0]) + Math.abs(pixelDelta[1]) <= CLICK_TOLERANCE)) {
	          var latLng = _this.pixelToLatLng(pixel);
	          _this.props.onClick({ event: event, latLng: latLng, pixel: pixel });
	          _this.setState({ pixelDelta: null }, NOOP);
	        } else {
	          var _this$sendDeltaChange2 = _this.sendDeltaChange(),
	              center = _this$sendDeltaChange2.center,
	              zoom = _this$sendDeltaChange2.zoom;
	
	          _this.throwAfterMoving(pixel, center, zoom);
	        }
	      }
	    };
	
	    _this.startTrackingMoveEvents = function (coords) {
	      _this._moveEvents = [{ timestamp: window.performance.now(), coords: coords }];
	    };
	
	    _this.stopTrackingMoveEvents = function () {
	      _this._moveEvents = [];
	    };
	
	    _this.trackMoveEvents = function (coords) {
	      var timestamp = window.performance.now();
	
	      if (timestamp - _this._moveEvents[_this._moveEvents.length - 1].timestamp > 40) {
	        _this._moveEvents.push({ timestamp: timestamp, coords: coords });
	        if (_this._moveEvents.length > 2) {
	          _this._moveEvents.shift();
	        }
	      }
	    };
	
	    _this.throwAfterMoving = function (coords, center, zoom) {
	      var _this$props4 = _this.props,
	          width = _this$props4.width,
	          height = _this$props4.height,
	          animate = _this$props4.animate;
	
	      var timestamp = window.performance.now();
	      var lastEvent = _this._moveEvents.shift();
	
	      if (lastEvent && animate) {
	        var deltaMs = Math.max(timestamp - lastEvent.timestamp, 1);
	
	        var delta = [(coords[0] - lastEvent.coords[0]) / deltaMs * 120, (coords[1] - lastEvent.coords[1]) / deltaMs * 120];
	
	        var distance = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1]);
	
	        if (distance > MIN_DRAG_FOR_THROW) {
	          var diagonal = Math.sqrt(width * width + height * height);
	
	          var lng = tile2lng(lng2tile(center[1], zoom) - delta[0] / 256.0, zoom);
	          var lat = tile2lat(lat2tile(center[0], zoom) - delta[1] / 256.0, zoom);
	
	          _this.setCenterZoomTarget([lat, lng], zoom, false, null, DIAGONAL_THROW_TIME * distance / diagonal);
	        }
	      }
	
	      _this.stopTrackingMoveEvents();
	    };
	
	    _this.sendDeltaChange = function () {
	      var _this$state = _this.state,
	          center = _this$state.center,
	          zoom = _this$state.zoom,
	          pixelDelta = _this$state.pixelDelta,
	          zoomDelta = _this$state.zoomDelta;
	
	      var lat = center[0];
	      var lng = center[1];
	
	      if (pixelDelta || zoomDelta !== 0) {
	        lng = tile2lng(lng2tile(center[1], zoom + zoomDelta) - (pixelDelta ? pixelDelta[0] / 256.0 : 0), zoom + zoomDelta);
	        lat = tile2lat(lat2tile(center[0], zoom + zoomDelta) - (pixelDelta ? pixelDelta[1] / 256.0 : 0), zoom + zoomDelta);
	        _this.setCenterZoom([lat, lng], zoom + zoomDelta);
	      }
	
	      _this.setState({
	        pixelDelta: null,
	        zoomDelta: 0
	      }, NOOP);
	
	      return {
	        center: _this.limitCenterAtZoom([lat, lng], zoom + zoomDelta),
	        zoom: zoom + zoomDelta
	      };
	    };
	
	    _this.getBounds = function () {
	      var center = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.center;
	      var zoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.zoomPlusDelta();
	      var _this$props5 = _this.props,
	          width = _this$props5.width,
	          height = _this$props5.height;
	
	      return {
	        ne: _this.pixelToLatLng([width - 1, 0], center, zoom),
	        sw: _this.pixelToLatLng([0, height - 1], center, zoom)
	      };
	    };
	
	    _this.syncToProps = function () {
	      var center = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.center;
	      var zoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.zoom;
	      var onBoundsChanged = _this.props.onBoundsChanged;
	
	      if (onBoundsChanged) {
	        var bounds = _this.getBounds(center, zoom);
	
	        onBoundsChanged({ center: center, zoom: zoom, bounds: bounds, initial: !_this._boundsSynced });
	
	        _this._boundsSynced = true;
	      }
	    };
	
	    _this.handleWheel = function (event) {
	      event.preventDefault();
	
	      var addToZoom = -event.deltaY / SCROLL_PIXELS_FOR_ZOOM_LEVEL;
	
	      if (_this._zoomTarget) {
	        var stillToAdd = _this._zoomTarget - _this.state.zoom;
	        _this.zoomAroundMouse(addToZoom + stillToAdd);
	      } else {
	        _this.zoomAroundMouse(addToZoom);
	      }
	    };
	
	    _this.zoomAroundMouse = function (zoomDiff) {
	      var zoom = _this.state.zoom;
	
	      if (!_this._mousePosition || zoom === 1 && zoomDiff < 0 || zoom === 18 && zoomDiff > 0) {
	        return;
	      }
	
	      var latLngNow = _this.pixelToLatLng(_this._mousePosition);
	
	      _this.setCenterZoomTarget(null, Math.max(1, Math.min(zoom + zoomDiff, 18)), false, latLngNow);
	    };
	
	    _this.zoomPlusDelta = function () {
	      return _this.state.zoom + _this.state.zoomDelta;
	    };
	
	    _this.pixelToLatLng = function (pixel) {
	      var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.center;
	      var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.zoomPlusDelta();
	      var _this$props6 = _this.props,
	          width = _this$props6.width,
	          height = _this$props6.height;
	      var pixelDelta = _this.state.pixelDelta;
	
	      var pointDiff = [(pixel[0] - width / 2 - (pixelDelta ? pixelDelta[0] : 0)) / 256.0, (pixel[1] - height / 2 - (pixelDelta ? pixelDelta[1] : 0)) / 256.0];
	
	      var tileX = lng2tile(center[1], zoom) + pointDiff[0];
	      var tileY = lat2tile(center[0], zoom) + pointDiff[1];
	
	      return _this.limitCenterAtZoom([tile2lat(tileY, zoom), tile2lng(tileX, zoom)], zoom);
	    };
	
	    _this.latLngToPixel = function (latLng) {
	      var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.center;
	      var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.zoomPlusDelta();
	      var _this$props7 = _this.props,
	          width = _this$props7.width,
	          height = _this$props7.height;
	      var pixelDelta = _this.state.pixelDelta;
	
	      var limitedCenter = _this.limitCenterAtZoom(center);
	
	      var tileCenterX = lng2tile(limitedCenter[1], zoom);
	      var tileCenterY = lat2tile(limitedCenter[0], zoom);
	
	      var tileX = lng2tile(latLng[1], zoom);
	      var tileY = lat2tile(latLng[0], zoom);
	
	      return [(tileX - tileCenterX) * 256.0 + width / 2 + (pixelDelta ? pixelDelta[0] : 0), (tileY - tileCenterY) * 256.0 + height / 2 + (pixelDelta ? pixelDelta[1] : 0)];
	    };
	
	    _this.calculateZoomCenter = function (center, coords, oldZoom, newZoom) {
	      var _this$props8 = _this.props,
	          width = _this$props8.width,
	          height = _this$props8.height;
	
	      var pixelBefore = _this.latLngToPixel(coords, center, oldZoom);
	      var pixelAfter = _this.latLngToPixel(coords, center, newZoom);
	
	      var newCenter = _this.pixelToLatLng([width / 2 + pixelAfter[0] - pixelBefore[0], height / 2 + pixelAfter[1] - pixelBefore[1]], center, newZoom);
	
	      return _this.limitCenterAtZoom(newCenter, newZoom);
	    };
	
	    _this.setRef = function (dom) {
	      _this._containerRef = dom;
	    };
	
	    _this.syncToProps = (0, _debounce2.default)(_this.syncToProps, DEBOUNCE_DELAY);
	
	    _this._mousePosition = null;
	    _this._dragStart = null;
	    _this._mouseDown = false;
	    _this._moveEvents = [];
	    _this._lastClick = null;
	    _this._lastTap = null;
	    _this._touchStartCoords = null;
	
	    _this._isAnimating = false;
	    _this._animationStart = null;
	    _this._animationEnd = null;
	    _this._centerTarget = null;
	    _this._zoomTarget = null;
	
	    // When users are using uncontrolled components we have to keep this
	    // so we can know if we should call onBoundsChanged
	    _this._lastZoom = props.defaultZoom ? props.defaultZoom : props.zoom;
	    _this._lastCenter = props.defaultCenter ? props.defaultCenter : props.center;
	    _this._boundsSynced = false;
	
	    _this.state = {
	      zoom: _this._lastZoom,
	      center: _this._lastCenter,
	      zoomDelta: 0,
	      pixelDelta: null,
	      oldTiles: []
	    };
	    return _this;
	  }
	
	  _createClass(Map, [{
	    key: 'componentDidMount',
	    value: function () {
	      var wa = window.addEventListener;
	      wa('mousedown', this.handleMouseDown);
	      wa('mouseup', this.handleMouseUp);
	      wa('mousemove', this.handleMouseMove);
	
	      wa('touchstart', this.handleTouchStart);
	      wa('touchmove', this.handleTouchMove);
	      wa('touchend', this.handleTouchEnd);
	
	      this.syncToProps();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      var wr = window.removeEventListener;
	      wr('mousedown', this.handleMouseDown);
	      wr('mouseup', this.handleMouseUp);
	      wr('mousemove', this.handleMouseMove);
	
	      wr('touchstart', this.handleTouchStart);
	      wr('touchmove', this.handleTouchMove);
	      wr('touchend', this.handleTouchEnd);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function (nextProps) {
	      if (!nextProps.center && !nextProps.zoom) {
	        // if the user isn't controlling neither zoom nor center we don't have to update.
	        return;
	      }
	      var maybeCenter = nextProps.center ? nextProps.center : this.state.center;
	      var maybeZoom = nextProps.zoom ? nextProps.zoom : this.state.zoom;
	      if (Math.abs(maybeZoom - this.state.zoom) > 0.001 || Math.abs(maybeCenter[0] - this.state.center[0]) > 0.0001 || Math.abs(maybeCenter[1] - this.state.center[1]) > 0.0001) {
	        this.setCenterZoomTarget(maybeCenter, maybeZoom, true);
	      }
	    }
	
	    // main logic when changing coordinates
	
	
	    // https://www.bennadel.com/blog/1856-using-jquery-s-animate-step-callback-function-to-create-custom-animations.htm
	
	
	    // tools
	
	    // ref
	
	  }, {
	    key: 'tileValues',
	
	    // data to display the tiles
	
	    value: function (props, state) {
	      var width = props.width,
	          height = props.height;
	      var center = state.center,
	          zoom = state.zoom,
	          pixelDelta = state.pixelDelta,
	          zoomDelta = state.zoomDelta;
	
	      var roundedZoom = Math.round(zoom + (zoomDelta || 0));
	
	
	      var scale = Math.pow(2, zoom + (zoomDelta || 0) - roundedZoom);
	      var scaleWidth = width / scale;
	      var scaleHeight = height / scale;
	
	      var tileCenterX = lng2tile(center[1], roundedZoom) - (pixelDelta ? pixelDelta[0] / 256.0 / scale : 0);
	      var tileCenterY = lat2tile(center[0], roundedZoom) - (pixelDelta ? pixelDelta[1] / 256.0 / scale : 0);
	
	      var halfWidth = scaleWidth / 2 / 256.0;
	      var halfHeight = scaleHeight / 2 / 256.0;
	
	      var tileMinX = Math.floor(tileCenterX - halfWidth);
	      var tileMaxX = Math.floor(tileCenterX + halfWidth);
	
	      var tileMinY = Math.floor(tileCenterY - halfHeight);
	      var tileMaxY = Math.floor(tileCenterY + halfHeight);
	
	      return {
	        tileMinX: tileMinX,
	        tileMaxX: tileMaxX,
	        tileMinY: tileMinY,
	        tileMaxY: tileMaxY,
	        tileCenterX: tileCenterX,
	        tileCenterY: tileCenterY,
	        roundedZoom: roundedZoom,
	        zoomDelta: zoomDelta || 0,
	        scaleWidth: scaleWidth,
	        scaleHeight: scaleHeight,
	        scale: scale
	      };
	    }
	
	    // display the tiles
	
	  }, {
	    key: 'renderTiles',
	    value: function () {
	      var _this2 = this;
	
	      var oldTiles = this.state.oldTiles;
	
	      var mapUrl = this.props.provider || wikimedia;
	
	      var _tileValues = this.tileValues(this.props, this.state),
	          tileMinX = _tileValues.tileMinX,
	          tileMaxX = _tileValues.tileMaxX,
	          tileMinY = _tileValues.tileMinY,
	          tileMaxY = _tileValues.tileMaxY,
	          tileCenterX = _tileValues.tileCenterX,
	          tileCenterY = _tileValues.tileCenterY,
	          roundedZoom = _tileValues.roundedZoom,
	          scaleWidth = _tileValues.scaleWidth,
	          scaleHeight = _tileValues.scaleHeight,
	          scale = _tileValues.scale;
	
	      var tiles = [];
	
	      for (var i = 0; i < oldTiles.length; i++) {
	        var old = oldTiles[i];
	        var zoomDiff = old.roundedZoom - roundedZoom;
	
	        if (Math.abs(zoomDiff) > 4 || zoomDiff === 0) {
	          continue;
	        }
	
	        var pow = 1 / Math.pow(2, zoomDiff);
	        var xDiff = -(tileMinX - old.tileMinX * pow) * 256;
	        var yDiff = -(tileMinY - old.tileMinY * pow) * 256;
	
	        var _xMin = Math.max(old.tileMinX, 0);
	        var _yMin = Math.max(old.tileMinY, 0);
	        var _xMax = Math.min(old.tileMaxX, Math.pow(2, old.roundedZoom) - 1);
	        var _yMax = Math.min(old.tileMaxY, Math.pow(2, old.roundedZoom) - 1);
	
	        for (var x = _xMin; x <= _xMax; x++) {
	          for (var y = _yMin; y <= _yMax; y++) {
	            tiles.push({
	              key: x + '-' + y + '-' + old.roundedZoom,
	              url: mapUrl(x, y, old.roundedZoom),
	              left: xDiff + (x - old.tileMinX) * 256 * pow,
	              top: yDiff + (y - old.tileMinY) * 256 * pow,
	              width: 256 * pow,
	              height: 256 * pow,
	              active: false
	            });
	          }
	        }
	      }
	
	      var xMin = Math.max(tileMinX, 0);
	      var yMin = Math.max(tileMinY, 0);
	      var xMax = Math.min(tileMaxX, Math.pow(2, roundedZoom) - 1);
	      var yMax = Math.min(tileMaxY, Math.pow(2, roundedZoom) - 1);
	
	      for (var _x11 = xMin; _x11 <= xMax; _x11++) {
	        for (var _y = yMin; _y <= yMax; _y++) {
	          tiles.push({
	            key: _x11 + '-' + _y + '-' + roundedZoom,
	            url: mapUrl(_x11, _y, roundedZoom),
	            left: (_x11 - tileMinX) * 256,
	            top: (_y - tileMinY) * 256,
	            width: 256,
	            height: 256,
	            active: true
	          });
	        }
	      }
	
	      return _infact.React.createElement('div', { style: {
	          width: scaleWidth,
	          height: scaleHeight,
	          position: 'absolute',
	          top: 0,
	          left: 0,
	          overflow: 'hidden',
	          willChange: 'transform',
	          transform: 'scale(' + scale + ', ' + scale + ')',
	          transformOrigin: 'top left'
	        } }, _infact.React.createElement('div', { style: {
	          position: 'absolute',
	          width: (tileMaxX - tileMinX + 1) * 256,
	          height: (tileMaxY - tileMinY + 1) * 256,
	          willChange: 'transform',
	          transform: 'translate(' + -((tileCenterX - tileMinX) * 256 - scaleWidth / 2) + 'px, ' + -((tileCenterY - tileMinY) * 256 - scaleHeight / 2) + 'px)'
	        } }, tiles.map(function (tile) {
	        return _infact.React.createElement('img', { key: tile.key,
	          src: tile.url,
	          width: tile.width,
	          height: tile.height,
	          onLoad: function () {
	            return _this2.imageLoaded(tile.key);
	          },
	          style: { position: 'absolute', left: tile.left, top: tile.top, willChange: 'transform', transform: tile.transform, transformOrigin: 'top left', opacity: 1 } });
	      })));
	    }
	  }, {
	    key: 'renderOverlays',
	    value: function () {
	      var _this3 = this;
	
	      var _props = this.props,
	          width = _props.width,
	          height = _props.height;
	      var center = this.state.center;
	
	      var mapState = {
	        bounds: this.getBounds(),
	        zoom: this.zoomPlusDelta(),
	        center: center,
	        width: width,
	        height: height
	      };
	
	      var childrenWithProps = void 0;
	
	      childrenWithProps = _infact.React.Children.map(this.props.children, function (child) {
	        var _child$props = child.props,
	            anchor = _child$props.anchor,
	            position = _child$props.position,
	            offset = _child$props.offset;
	
	        var c = _this3.latLngToPixel(anchor || position || center);
	
	        return _infact.React.cloneElement(child, {
	          left: c[0] - (offset ? offset[0] : 0),
	          top: c[1] - (offset ? offset[1] : 0),
	          latLngToPixel: _this3.latLngToPixel,
	          pixelToLatLng: _this3.pixelToLatLng,
	          mapState: mapState
	        });
	      });
	      var childrenChecked;
	
	
	      return _infact.React.createElement('div', { style: {
	          position: 'absolute',
	          width: width,
	          height: height,
	          top: 0,
	          left: 0
	        } }, childrenWithProps);
	    }
	  }, {
	    key: 'renderAttribution',
	    value: function () {
	      var _props2 = this.props,
	          attribution = _props2.attribution,
	          attributionPrefix = _props2.attributionPrefix;
	
	      if (attribution === false) {
	        return null;
	      }
	
	      var linkStyle = {
	        color: '#0078A8',
	        textDecoration: 'none'
	      };
	
	      return _infact.React.createElement('div', { key: 'attr', className: 'pigeon-attribution', style: {
	          position: 'absolute',
	          bottom: 0,
	          right: 0,
	          fontSize: '11px',
	          padding: '2px 5px',
	          background: 'rgba(255, 255, 255, 0.7)',
	          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
	          color: '#333'
	        } }, attributionPrefix === false ? null : _infact.React.createElement('span', null, attributionPrefix || _infact.React.createElement('a', { href: 'https://github.com/mariusandra/pigeon-maps', style: linkStyle }, 'Pigeon'), ' | '), attribution || _infact.React.createElement('span', null, ' © ', _infact.React.createElement('a', { href: 'https://www.openstreetmap.org/copyright', style: linkStyle }, 'OpenStreetMap'), ' contributors'));
	    }
	  }, {
	    key: 'render',
	    value: function () {
	      var _props3 = this.props,
	          width = _props3.width,
	          height = _props3.height;
	
	      return _infact.React.createElement('div', { style: {
	          width: width,
	          height: height,
	          position: 'relative',
	          display: 'inline-block',
	          overflow: 'hidden',
	          background: '#dddddd'
	        },
	        ref: this.setRef,
	        onWheel: this.handleWheel }, this.renderTiles(), this.renderOverlays(), this.renderAttribution());
	    }
	  }]);
	
	  return Map;
	}(_infact.Component);
	
	Map.propTypes = {
	  center: _infact.PropTypes.array,
	  defaultCenter: _infact.PropTypes.array,
	  zoom: _infact.PropTypes.number,
	  defaultZoom: _infact.PropTypes.number,
	  width: _infact.PropTypes.number,
	  height: _infact.PropTypes.number,
	  provider: _infact.PropTypes.func,
	  children: _infact.PropTypes.node,
	  animate: _infact.PropTypes.bool,
	  attribution: _infact.PropTypes.any,
	  attributionPrefix: _infact.PropTypes.any,
	
	  onClick: _infact.PropTypes.func,
	  onBoundsChanged: _infact.PropTypes.func
	};
	Map.defaultProps = {
	  animate: true
	};
	exports.default = Map;

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// // infact = inferno + react
	
	exports.React = __webpack_require__(3);
	exports.ReactDOM = __webpack_require__(30);
	exports.Component = exports.React.Component;
	exports.PropTypes = exports.React.PropTypes;

/***/ },

/***/ 172:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parentPosition;
	function parentPosition(element) {
	  var x = 0;
	  var y = 0;
	  var first = true;
	
	  while (element) {
	    x += element.offsetLeft - (first ? 0 : element.scrollLeft) + element.clientLeft;
	    y += element.offsetTop - (first ? 0 : element.scrollTop) + element.clientTop;
	    element = element.offsetParent;
	    first = false;
	  }
	
	  return { x: x, y: y };
	}

/***/ },

/***/ 173:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = parentHasClass;
	function parentHasClass(element, className) {
	  while (element) {
	    if (element.classList.contains(className)) {
	      return true;
	    }
	    element = element.offsetParent;
	  }
	
	  return false;
	}

/***/ },

/***/ 174:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = debounce;
	function debounce(func, wait) {
	  var timeout = void 0;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var context = this;
	    clearTimeout(timeout);
	    timeout = setTimeout(function () {
	      return func.apply(context, args);
	    }, wait);
	  };
	}

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Cluster = __webpack_require__(176);
	
	var _Cluster2 = _interopRequireDefault(_Cluster);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Cluster2.default;

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _infact = __webpack_require__(2);
	
	var _supercluster = __webpack_require__(177);
	
	var _supercluster2 = _interopRequireDefault(_supercluster);
	
	var _DefaultClusterMarker = __webpack_require__(182);
	
	var _DefaultClusterMarker2 = _interopRequireDefault(_DefaultClusterMarker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var cloneElement = false ? _infact.Inferno.cloneVNode : _infact.React.cloneElement;
	
	var iLNG = 0,
	    iLAT = 1;
	
	
	var ensureArray = function ensureArray() {
	    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    return Array.isArray(children) ? children : [children];
	};
	
	var Cluster = function (_Component) {
	    _inherits(Cluster, _Component);
	
	    function Cluster(props) {
	        _classCallCheck(this, Cluster);
	
	        var _this = _possibleConstructorReturn(this, (Cluster.__proto__ || Object.getPrototypeOf(Cluster)).call(this, props));
	
	        _this.state = {};
	        return _this;
	    }
	
	    _createClass(Cluster, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.rebuildData(this.props);
	        }
	    }, {
	        key: 'rebuildData',
	        value: function rebuildData(props) {
	            var pointsMap = this.generatePointsMap(props.children);
	            var index = this.loadPoints(pointsMap);
	            this.setState({
	                pointsMap: pointsMap,
	                index: index
	            });
	        }
	    }, {
	        key: 'generatePointsMap',
	        value: function generatePointsMap(children) {
	            var _this2 = this;
	
	            var childrenArray = ensureArray(children);
	            var pointsMap = {};
	
	            childrenArray.forEach(function (child) {
	                var key = child.key;
	
	                if (!key) {
	                    throw new Error('Markers must have a key property', child);
	                }
	                if (!child.props.anchor) {
	                    throw new Error('Markers must have an anchor property', child);
	                }
	                pointsMap[key] = {
	                    vNode: cloneElement(child, {
	                        latLngToPixel: _this2.props.latLngToPixel,
	                        pixelToLatLng: _this2.props.pixelToLatLng
	                    }),
	                    geometry: {
	                        coordinates: child.props.anchor
	                    },
	                    id: key
	                };
	            });
	
	            return pointsMap;
	        }
	    }, {
	        key: 'loadPoints',
	        value: function loadPoints(pointsMap) {
	            var index = (0, _supercluster2.default)({
	                radius: this.props.clusterMarkerRadius || 40,
	                maxZoom: this.props.maxZoom || 16
	            });
	
	            index.load(Object.keys(pointsMap).map(function (id) {
	                return pointsMap[id];
	            }));
	            return index;
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (nextProps.children !== this.props.children) {
	                this.rebuildData(nextProps);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;
	
	            var _props = this.props,
	                latLngToPixel = _props.latLngToPixel,
	                mapState = _props.mapState,
	                className = _props.className,
	                _props$component = _props.component,
	                ClusterComponent = _props$component === undefined ? _DefaultClusterMarker2.default : _props$component;
	            var _mapState$bounds = mapState.bounds,
	                ne = _mapState$bounds.ne,
	                sw = _mapState$bounds.sw;
	            var _ref = [sw[iLNG], sw[iLAT], ne[iLNG], ne[iLAT]],
	                westLng = _ref[0],
	                southLat = _ref[1],
	                eastLng = _ref[2],
	                northLat = _ref[3];
	
	
	            var markersAndClusters = this.state.index && this.state.index.getClusters([westLng, southLat, eastLng, northLat], Math.floor(mapState.zoom));
	
	            var displayElements = (markersAndClusters || []).map(function (markerOrCluster) {
	                var displayElement = void 0;
	                var isCluster = markerOrCluster && markerOrCluster.properties && markerOrCluster.properties.cluster;
	                var pixelOffset = latLngToPixel(markerOrCluster.geometry.coordinates);
	                if (isCluster) {
	                    var clusterElementKey = markerOrCluster.geometry.coordinates.toString();
	                    displayElement = _infact.React.createElement(ClusterComponent, { key: clusterElementKey,
	                        count: markerOrCluster.properties.point_count,
	                        pixelOffset: pixelOffset });
	                } else {
	                    displayElement = cloneElement(_this3.state.pointsMap[markerOrCluster.id].vNode, {
	                        left: pixelOffset[0],
	                        top: pixelOffset[1]
	                    });
	                }
	                return displayElement;
	            });
	
	            return _infact.React.createElement(
	                'div',
	                { className: className || '',
	                    style: { position: 'absolute', height: mapState.height, width: mapState.width } },
	                displayElements
	            );
	        }
	    }]);
	
	    return Cluster;
	}(_infact.Component);
	
	exports.default = Cluster;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var kdbush = __webpack_require__(178);
	
	module.exports = supercluster;
	
	function supercluster(options) {
	    return new SuperCluster(options);
	}
	
	function SuperCluster(options) {
	    this.options = extend(Object.create(this.options), options);
	    this.trees = new Array(this.options.maxZoom + 1);
	}
	
	SuperCluster.prototype = {
	    options: {
	        minZoom: 0,   // min zoom to generate clusters on
	        maxZoom: 16,  // max zoom level to cluster the points on
	        radius: 40,   // cluster radius in pixels
	        extent: 512,  // tile extent (radius is calculated relative to it)
	        nodeSize: 64, // size of the KD-tree leaf node, affects performance
	        log: false    // whether to log timing info
	    },
	
	    load: function (points) {
	        var log = this.options.log;
	
	        if (log) console.time('total time');
	
	        var timerId = 'prepare ' + points.length + ' points';
	        if (log) console.time(timerId);
	
	        this.points = points;
	
	        // generate a cluster object for each point
	        var clusters = points.map(createPointCluster);
	        if (log) console.timeEnd(timerId);
	
	        // cluster points on max zoom, then cluster the results on previous zoom, etc.;
	        // results in a cluster hierarchy across zoom levels
	        for (var z = this.options.maxZoom; z >= this.options.minZoom; z--) {
	            var now = +Date.now();
	
	            // index input points into a KD-tree
	            this.trees[z + 1] = kdbush(clusters, getX, getY, this.options.nodeSize, Float32Array);
	
	            clusters = this._cluster(clusters, z); // create a new set of clusters for the zoom
	
	            if (log) console.log('z%d: %d clusters in %dms', z, clusters.length, +Date.now() - now);
	        }
	
	        // index top-level clusters
	        this.trees[this.options.minZoom] = kdbush(clusters, getX, getY, this.options.nodeSize, Float32Array);
	
	        if (log) console.timeEnd('total time');
	
	        return this;
	    },
	
	    getClusters: function (bbox, zoom) {
	        var tree = this.trees[this._limitZoom(zoom)];
	        var ids = tree.range(lngX(bbox[0]), latY(bbox[3]), lngX(bbox[2]), latY(bbox[1]));
	        var clusters = [];
	        for (var i = 0; i < ids.length; i++) {
	            var c = tree.points[ids[i]];
	            clusters.push(c.id !== -1 ? this.points[c.id] : getClusterJSON(c));
	        }
	        return clusters;
	    },
	
	    getTile: function (z, x, y) {
	        var tree = this.trees[this._limitZoom(z)];
	        var z2 = Math.pow(2, z);
	        var extent = this.options.extent;
	        var r = this.options.radius;
	        var p = r / extent;
	        var top = (y - p) / z2;
	        var bottom = (y + 1 + p) / z2;
	
	        var tile = {
	            features: []
	        };
	
	        this._addTileFeatures(
	            tree.range((x - p) / z2, top, (x + 1 + p) / z2, bottom),
	            tree.points, x, y, z2, tile);
	
	        if (x === 0) {
	            this._addTileFeatures(
	                tree.range(1 - p / z2, top, 1, bottom),
	                tree.points, z2, y, z2, tile);
	        }
	        if (x === z2 - 1) {
	            this._addTileFeatures(
	                tree.range(0, top, p / z2, bottom),
	                tree.points, -1, y, z2, tile);
	        }
	
	        return tile.features.length ? tile : null;
	    },
	
	    _addTileFeatures: function (ids, points, x, y, z2, tile) {
	        for (var i = 0; i < ids.length; i++) {
	            var c = points[ids[i]];
	            tile.features.push({
	                type: 1,
	                geometry: [[
	                    Math.round(this.options.extent * (c.x * z2 - x)),
	                    Math.round(this.options.extent * (c.y * z2 - y))
	                ]],
	                tags: c.id !== -1 ? this.points[c.id].properties : getClusterProperties(c)
	            });
	        }
	    },
	
	    _limitZoom: function (z) {
	        return Math.max(this.options.minZoom, Math.min(z, this.options.maxZoom + 1));
	    },
	
	    _cluster: function (points, zoom) {
	        var clusters = [];
	        var r = this.options.radius / (this.options.extent * Math.pow(2, zoom));
	
	        // loop through each point
	        for (var i = 0; i < points.length; i++) {
	            var p = points[i];
	            // if we've already visited the point at this zoom level, skip it
	            if (p.zoom <= zoom) continue;
	            p.zoom = zoom;
	
	            // find all nearby points
	            var tree = this.trees[zoom + 1];
	            var neighborIds = tree.within(p.x, p.y, r);
	
	            var foundNeighbors = false;
	            var numPoints = p.numPoints;
	            var wx = p.x * numPoints;
	            var wy = p.y * numPoints;
	
	            for (var j = 0; j < neighborIds.length; j++) {
	                var b = tree.points[neighborIds[j]];
	                // filter out neighbors that are too far or already processed
	                if (zoom < b.zoom) {
	                    foundNeighbors = true;
	                    b.zoom = zoom; // save the zoom (so it doesn't get processed twice)
	                    wx += b.x * b.numPoints; // accumulate coordinates for calculating weighted center
	                    wy += b.y * b.numPoints;
	                    numPoints += b.numPoints;
	                }
	            }
	
	            clusters.push(foundNeighbors ? createCluster(wx / numPoints, wy / numPoints, numPoints, -1) : p);
	        }
	
	        return clusters;
	    }
	};
	
	function createCluster(x, y, numPoints, id) {
	    return {
	        x: x, // weighted cluster center
	        y: y,
	        zoom: Infinity, // the last zoom the cluster was processed at
	        id: id, // index of the source feature in the original input array
	        numPoints: numPoints
	    };
	}
	
	function createPointCluster(p, i) {
	    var coords = p.geometry.coordinates;
	    return createCluster(lngX(coords[0]), latY(coords[1]), 1, i);
	}
	
	function getClusterJSON(cluster) {
	    return {
	        type: 'Feature',
	        properties: getClusterProperties(cluster),
	        geometry: {
	            type: 'Point',
	            coordinates: [xLng(cluster.x), yLat(cluster.y)]
	        }
	    };
	}
	
	function getClusterProperties(cluster) {
	    var count = cluster.numPoints;
	    var abbrev = count >= 10000 ? Math.round(count / 1000) + 'k' :
	                 count >= 1000 ? (Math.round(count / 100) / 10) + 'k' : count;
	    return {
	        cluster: true,
	        point_count: count,
	        point_count_abbreviated: abbrev
	    };
	}
	
	// longitude/latitude to spherical mercator in [0..1] range
	function lngX(lng) {
	    return lng / 360 + 0.5;
	}
	function latY(lat) {
	    var sin = Math.sin(lat * Math.PI / 180),
	        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
	    return y < 0 ? 0 :
	           y > 1 ? 1 : y;
	}
	
	// spherical mercator to longitude/latitude
	function xLng(x) {
	    return (x - 0.5) * 360;
	}
	function yLat(y) {
	    var y2 = (180 - y * 360) * Math.PI / 180;
	    return 360 * Math.atan(Math.exp(y2)) / Math.PI - 90;
	}
	
	function extend(dest, src) {
	    for (var id in src) dest[id] = src[id];
	    return dest;
	}
	
	function getX(p) {
	    return p.x;
	}
	function getY(p) {
	    return p.y;
	}


/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var sort = __webpack_require__(179);
	var range = __webpack_require__(180);
	var within = __webpack_require__(181);
	
	module.exports = kdbush;
	
	function kdbush(points, getX, getY, nodeSize, ArrayType) {
	    return new KDBush(points, getX, getY, nodeSize, ArrayType);
	}
	
	function KDBush(points, getX, getY, nodeSize, ArrayType) {
	    getX = getX || defaultGetX;
	    getY = getY || defaultGetY;
	    ArrayType = ArrayType || Array;
	
	    this.nodeSize = nodeSize || 64;
	    this.points = points;
	
	    this.ids = new ArrayType(points.length);
	    this.coords = new ArrayType(points.length * 2);
	
	    for (var i = 0; i < points.length; i++) {
	        this.ids[i] = i;
	        this.coords[2 * i] = getX(points[i]);
	        this.coords[2 * i + 1] = getY(points[i]);
	    }
	
	    sort(this.ids, this.coords, this.nodeSize, 0, this.ids.length - 1, 0);
	}
	
	KDBush.prototype = {
	    range: function (minX, minY, maxX, maxY) {
	        return range(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
	    },
	
	    within: function (x, y, r) {
	        return within(this.ids, this.coords, x, y, r, this.nodeSize);
	    }
	};
	
	function defaultGetX(p) { return p[0]; }
	function defaultGetY(p) { return p[1]; }


/***/ },

/***/ 179:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = sortKD;
	
	function sortKD(ids, coords, nodeSize, left, right, depth) {
	    if (right - left <= nodeSize) return;
	
	    var m = Math.floor((left + right) / 2);
	
	    select(ids, coords, m, left, right, depth % 2);
	
	    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
	    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
	}
	
	function select(ids, coords, k, left, right, inc) {
	
	    while (right > left) {
	        if (right - left > 600) {
	            var n = right - left + 1;
	            var m = k - left + 1;
	            var z = Math.log(n);
	            var s = 0.5 * Math.exp(2 * z / 3);
	            var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
	            var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
	            var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
	            select(ids, coords, k, newLeft, newRight, inc);
	        }
	
	        var t = coords[2 * k + inc];
	        var i = left;
	        var j = right;
	
	        swapItem(ids, coords, left, k);
	        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);
	
	        while (i < j) {
	            swapItem(ids, coords, i, j);
	            i++;
	            j--;
	            while (coords[2 * i + inc] < t) i++;
	            while (coords[2 * j + inc] > t) j--;
	        }
	
	        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);
	        else {
	            j++;
	            swapItem(ids, coords, j, right);
	        }
	
	        if (j <= k) left = j + 1;
	        if (k <= j) right = j - 1;
	    }
	}
	
	function swapItem(ids, coords, i, j) {
	    swap(ids, i, j);
	    swap(coords, 2 * i, 2 * j);
	    swap(coords, 2 * i + 1, 2 * j + 1);
	}
	
	function swap(arr, i, j) {
	    var tmp = arr[i];
	    arr[i] = arr[j];
	    arr[j] = tmp;
	}


/***/ },

/***/ 180:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = range;
	
	function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
	    var stack = [0, ids.length - 1, 0];
	    var result = [];
	    var x, y;
	
	    while (stack.length) {
	        var axis = stack.pop();
	        var right = stack.pop();
	        var left = stack.pop();
	
	        if (right - left <= nodeSize) {
	            for (var i = left; i <= right; i++) {
	                x = coords[2 * i];
	                y = coords[2 * i + 1];
	                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
	            }
	            continue;
	        }
	
	        var m = Math.floor((left + right) / 2);
	
	        x = coords[2 * m];
	        y = coords[2 * m + 1];
	
	        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);
	
	        var nextAxis = (axis + 1) % 2;
	
	        if (axis === 0 ? minX <= x : minY <= y) {
	            stack.push(left);
	            stack.push(m - 1);
	            stack.push(nextAxis);
	        }
	        if (axis === 0 ? maxX >= x : maxY >= y) {
	            stack.push(m + 1);
	            stack.push(right);
	            stack.push(nextAxis);
	        }
	    }
	
	    return result;
	}


/***/ },

/***/ 181:
/***/ function(module, exports) {

	'use strict';
	
	module.exports = within;
	
	function within(ids, coords, qx, qy, r, nodeSize) {
	    var stack = [0, ids.length - 1, 0];
	    var result = [];
	    var r2 = r * r;
	
	    while (stack.length) {
	        var axis = stack.pop();
	        var right = stack.pop();
	        var left = stack.pop();
	
	        if (right - left <= nodeSize) {
	            for (var i = left; i <= right; i++) {
	                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
	            }
	            continue;
	        }
	
	        var m = Math.floor((left + right) / 2);
	
	        var x = coords[2 * m];
	        var y = coords[2 * m + 1];
	
	        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);
	
	        var nextAxis = (axis + 1) % 2;
	
	        if (axis === 0 ? qx - r <= x : qy - r <= y) {
	            stack.push(left);
	            stack.push(m - 1);
	            stack.push(nextAxis);
	        }
	        if (axis === 0 ? qx + r >= x : qy + r >= y) {
	            stack.push(m + 1);
	            stack.push(right);
	            stack.push(nextAxis);
	        }
	    }
	
	    return result;
	}
	
	function sqDist(ax, ay, bx, by) {
	    var dx = ax - bx;
	    var dy = ay - by;
	    return dx * dx + dy * dy;
	}


/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = DefaultClusterMarker;
	
	var _infact = __webpack_require__(2);
	
	var colors = {
	    small: ['rgba(181, 226, 140, 0.6)', 'rgba(110, 204, 57, 0.7)'],
	    medium: ['rgba(241, 211, 87, 0.6)', 'rgba(240, 194, 12, 0.7)'],
	    big: ['rgba(253, 156, 115, 0.6)', 'rgba(241, 128, 23, 0.7)']
	};
	var defaultCountToColor = function defaultCountToColor(count) {
	    return count > 20 ? colors.big : count > 7 ? colors.medium : colors.small;
	};
	
	var styleFromCount = function styleFromCount(count) {
	    var colors = defaultCountToColor(count);
	    return {
	        width: 30,
	        height: 30,
	        borderRadius: '50%',
	        borderWidth: 3,
	        borderColor: colors[0],
	        borderStyle: 'solid',
	        background: colors[1],
	        position: 'absolute',
	        display: 'flex',
	        flexDirection: 'column',
	        justifyContent: 'center',
	        textAlign: 'center',
	        cursor: 'default'
	    };
	};
	
	function DefaultClusterMarker(_ref) {
	    var pixelOffset = _ref.pixelOffset,
	        count = _ref.count;
	
	    return _infact.React.createElement(
	        'div',
	        { style: Object.assign(styleFromCount(count), {
	                left: pixelOffset[0],
	                top: pixelOffset[1]
	            }) },
	        count
	    );
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	if (false) {
	  module.exports = require('./lib/inferno/index.js')
	}
	if (true) {
	  module.exports = __webpack_require__(184)
	}


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _infact = __webpack_require__(185);
	
	var _pin = __webpack_require__(186);
	
	var _pin2 = _interopRequireDefault(_pin);
	
	var _pin2x = __webpack_require__(187);
	
	var _pin2x2 = _interopRequireDefault(_pin2x);
	
	var _pinHover = __webpack_require__(188);
	
	var _pinHover2 = _interopRequireDefault(_pinHover);
	
	var _pinHover2x = __webpack_require__(189);
	
	var _pinHover2x2 = _interopRequireDefault(_pinHover2x);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var imageOffset = {
	  left: 15,
	  top: 31
	};
	
	var Marker = function (_Component) {
	  _inherits(Marker, _Component);
	
	  function Marker(props) {
	    _classCallCheck(this, Marker);
	
	    var _this = _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).call(this, props));
	
	    _this.eventParameters = function (event) {
	      return {
	        event: event,
	        anchor: _this.props.anchor,
	        payload: _this.props.payload
	      };
	    };
	
	    _this.handleClick = function () {
	      _this.props.onClick && _this.props.onClick(_this.eventParameters());
	    };
	
	    _this.handleContextMenu = function () {
	      _this.props.onContextMenu && _this.props.onContextMenu(_this.eventParameters());
	    };
	
	    _this.handleMouseOver = function () {
	      _this.props.onMouseOver && _this.props.onMouseOver(_this.eventParameters());
	      _this.setState({ hover: true });
	    };
	
	    _this.handleMouseOut = function () {
	      _this.props.onMouseOut && _this.props.onMouseOut(_this.eventParameters());
	      _this.setState({ hover: false });
	    };
	
	    _this.state = {
	      hover: false
	    };
	    return _this;
	  }
	
	  // what do you expect to get back with the event
	
	
	  _createClass(Marker, [{
	    key: 'isRetina',
	
	    // controls
	    value: function () {
	      return typeof window !== 'undefined' && window.devicePixelRatio >= 2;
	    }
	
	    // modifiers
	
	  }, {
	    key: 'isHover',
	    value: function () {
	      return typeof this.props.hover === 'boolean' ? this.props.hover : this.state.hover;
	    }
	  }, {
	    key: 'image',
	    value: function () {
	      return this.isRetina() ? this.isHover() ? _pinHover2x2.default : _pin2x2.default : this.isHover() ? _pinHover2.default : _pin2.default;
	    }
	
	    // lifecycle
	
	  }, {
	    key: 'componentDidMount',
	    value: function () {
	      var images = this.isRetina() ? [_pin2x2.default, _pinHover2x2.default] : [_pin2.default, _pinHover2.default];
	
	      images.forEach(function (image) {
	        var img = new window.Image();
	        img.src = image;
	      });
	    }
	
	    // delegators
	
	  }, {
	    key: 'render',
	
	    // render
	
	    value: function () {
	      var _props = this.props,
	          left = _props.left,
	          top = _props.top,
	          onClick = _props.onClick;
	
	      var style = {
	        position: 'absolute',
	        transform: 'translate(' + (left - imageOffset.left) + 'px, ' + (top - imageOffset.top) + 'px)',
	        cursor: onClick ? 'pointer' : 'default'
	      };
	
	      return _infact.React.createElement('div', { style: style,
	        className: 'pigeon-click-block',
	        onClick: this.handleClick,
	        onContextMenu: this.handleContextMenu,
	        onMouseOver: this.handleMouseOver,
	        onMouseOut: this.handleMouseOut }, _infact.React.createElement('img', { src: this.image(), width: 29, height: 34, alt: '' }));
	    }
	  }]);
	
	  return Marker;
	}(_infact.Component);
	
	Marker.propTypes = {
	  // input, passed to events
	  anchor: _infact.PropTypes.array.isRequired,
	  payload: _infact.PropTypes.any,
	
	  // optional modifiers
	  hover: _infact.PropTypes.bool,
	
	  // callbacks
	  onClick: _infact.PropTypes.func,
	  onContextMenu: _infact.PropTypes.func,
	  onMouseOver: _infact.PropTypes.func,
	  onMouseOut: _infact.PropTypes.func,
	
	  // pigeon variables
	  left: _infact.PropTypes.number,
	  top: _infact.PropTypes.number,
	
	  // pigeon functions
	  latLngToPixel: _infact.PropTypes.func,
	  pixelToLatLng: _infact.PropTypes.func
	};
	exports.default = Marker;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// // infact = inferno + react
	
	exports.React = __webpack_require__(3);
	exports.ReactDOM = __webpack_require__(30);
	exports.Component = exports.React.Component;
	exports.PropTypes = exports.React.PropTypes;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "pin.png";

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "pin@2x.png";

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "pin-hover.png";

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "pin-hover@2x.png";

/***/ },

/***/ 190:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { "features": [[-47.27021397371075, -4.100573605184992], [-34.04565545278822, -10.131356919280394], [-171.25749982137617, -72.45836363446065], [-26.425654762228888, -60.52512428671763], [113.74235798034711, 47.53271069804509], [85.79604250558796, 6.335773263260678], [161.7480982699067, -79.47413910361006], [72.14084515143239, -10.617196177697457], [-77.28201260604003, -40.54093134778737], [-24.13959960571063, 67.50131368749886], [164.93703635802174, -66.32716600057823], [76.10127270344893, 17.791972100021923], [39.97700444874268, -60.80028912136564], [-137.5022780002745, -56.7413315265689], [-30.075618663537107, -21.070140076711013], [126.03828428970478, 64.03339236554453], [-164.59917911508916, -23.338562327082954], [-144.02296228900883, -17.795637846893577], [170.56620169322036, -11.724939521356742], [-85.36978383504267, -58.4179294054359], [103.77138966271022, 65.11365471395052], [-105.4703334201646, -1.5107779348525963], [157.79651649124267, -19.94206957374683], [-38.02938628701099, -63.86693459752642], [-88.25813081050205, 56.22201515771414], [1.4419317995283443, 17.11446991175128], [64.36882648467336, 8.750576368492462], [152.90205228203544, 10.272735737387041], [-78.18727935508426, -31.578819286408155], [41.52070657153007, -42.015106766473814], [-156.98129981027847, -58.23047091134534], [-29.930097989187637, -85.25200429359782], [92.53972351210783, -88.19451462877608], [116.65740442279507, 25.93792293515124], [167.82724070760253, -12.846904069062957], [-92.87664446055305, 30.838207756255986], [-3.400072779364187, 79.29100936940033], [120.46601619776143, -27.889599812677858], [-78.82476872968631, 7.269246828094222], [-58.30431732568456, -42.572120121765536], [-152.15399765134993, -47.087842490964555], [-156.52396986905882, -43.2651805593156], [107.76853613203015, -73.69009194035667], [0.2884367611365857, 7.11171356022585], [-77.54048575041443, -10.295814073645673], [165.24745538467468, 3.4314897095458896], [64.54914718257542, 85.54345733139262], [150.08617570335159, -38.203798076059876], [-86.20563548110158, 60.58636217412416], [49.54770459769904, 65.50823593301435], [105.40028716778812, -15.072287193711471], [-114.55944630918671, 71.644851859846], [86.23207679588054, -49.10863695480128], [87.53697094527027, 70.78515125567289], [-167.3219531593137, -25.18112052679832], [-7.309939042004476, -57.72382211831041], [96.7006953568219, -70.92787600412123], [142.1064987290564, -61.370586529866], [55.281075073487315, 8.976861710288215], [-132.76557819397468, 36.66306443737533], [-95.15712218460945, 42.92772907629307], [-86.9081750013684, 39.39951157245675], [-51.43626001179725, 26.372114065772934], [72.55356530896901, 40.80023943330489], [74.20813576453104, 64.64803663639965], [72.8904909129661, -63.14851901448753], [-105.44899778086418, 87.35252499787121], [-80.19862951357923, 17.740871868654146], [154.81116669883326, -78.30936150283354], [128.62446487683474, -24.329466072622846], [-39.37285911837266, 61.14138181945952], [77.01644558740233, 67.23315271699806], [61.5338975542283, 83.45022736906371], [-46.69352755780582, 17.30768929455103], [-160.4616829648022, 79.73618385963566], [-84.03822610288915, -31.63530340270849], [7.2340442669180405, 59.83346660591336], [-69.4516609535319, 6.582490891594808], [29.19288944927171, -73.9145554797395], [138.74609726358335, -2.2883678930658524], [101.83518541696186, 70.86910319929407], [6.597521591254241, -83.84118893931074], [-34.438967818097375, 64.6059713675929], [-97.21519666201678, 50.587672054070225], [-118.34505439258452, -6.263987031914664], [73.39299128507673, 4.559719997571814], [-18.763473008960858, -66.48365843513035], [-18.083635035151502, 84.45235727698721], [-34.360561804799644, 67.96840589011246], [28.12421140671061, 8.249766279139386], [-22.34063292810496, -69.40403020213907], [-161.93944691456431, -41.795906703693355], [39.82145204673337, 56.234409938133496], [-102.9497415435928, 22.587707720365522], [94.51041938452028, -71.67042906285467], [170.8240780809139, 24.16760952638098], [30.627440607339498, -50.339487568195345], [-119.44749963057374, 10.42312142064116], [-147.16931970932737, -48.77129055250598], [-133.11893281437324, -13.605607644593682], [9.129800470874638, -11.230101762390863], [95.86498876026819, -77.73477855303314], [179.17800747019956, -70.95522500883453], [-71.95604740465286, 82.03915492919316], [54.11440450497855, 89.71023957875249], [141.59289049296228, -67.35388977125699], [-42.30980540104797, 31.829523944882887], [101.44326979859576, -10.394241481386874], [-73.84145533464452, 17.015156313153458], [75.88177773618968, 73.11465031157148], [37.60777478831479, 12.977189836719427], [25.80831848411045, -78.7598048019704], [-84.85877368961026, 87.67520553045034], [87.1187935374586, -9.282829250263793], [68.94259766571805, -25.99623008027855], [-147.16772053142293, -51.131176512906165], [1.8005614874290732, 0.4003957914570311], [64.58842250172835, 40.78550853700839], [62.80277069301548, 7.994087856322349], [-1.111577036375806, 8.04858830758841], [-70.45844416378587, 89.7478241315993], [173.89600980207385, -84.72330002155252], [163.19916353936117, 54.143030897711455], [-156.7867831611187, -52.92200229494138], [20.746574926879404, 58.65748013393403], [-49.90183223609201, -75.96302340130586], [65.77647283068227, 48.834311322717426], [-30.952255151231, -45.28389366948543], [65.20684618317776, -43.17395613161974], [14.820214413560953, -41.99154881925195], [-155.434984648769, 59.32362194504545], [155.20455742413554, 9.996926121968972], [-138.11237126130027, 3.540023056562789], [27.198621071953227, -21.030410716698654], [75.15845321799215, -70.80232975155731], [117.32585978712297, -79.1544283925287], [60.401273482512735, -56.01777099343828], [7.267155492320825, -19.395202320820218], [5.3968125721917914, -42.8250740305589], [-123.96744815446081, -53.162339190867904], [89.27161662301162, -24.6943760628811], [20.49701497124535, -82.95432187099411], [23.234327864092048, 53.30368440260643], [144.65881802875077, -65.7838807511436], [92.53215549446199, -50.58700041203136], [-37.372481966615005, -78.08261539130785], [29.14042917297789, 67.17754710232389], [113.23975177918703, -24.44931262485742], [-16.93457077683594, 24.611028956689207], [40.74418466762281, -63.93173740686341], [37.68062486382333, 36.70369715548119], [-90.26932166181214, -65.3689109089961], [79.38269670207745, -75.17569927671673], [-4.9485423580994325, 68.10254280782695], [-152.21869465827763, -77.58517326144435], [76.29388665508213, 54.455733437997004], [53.48538594357465, -80.10502579986621], [107.35150385155839, 65.67428737018736], [-171.3781351377013, 30.217477439792695], [-6.053170514058879, 7.018617678760433], [-104.77772083522672, -85.02489673953], [32.34234504268831, -6.2507239797570024], [101.29681639032852, 40.08872883544211], [156.89274826340494, -59.99217677267711], [77.77704413724676, 49.27347168359228], [-146.73589673838114, -22.18536730803912], [115.01975179950028, 1.2198214568364252], [-7.5013783824862035, 10.024474017975514], [170.38236398212985, -14.477619888540577], [-15.011439701209142, 36.656534239850174], [71.67860149988672, 8.772881970633279], [-116.43051316981393, 53.40068240725814], [-137.2000765767266, 44.089584785882224], [143.65221471311241, -0.31691154683068934], [-71.86057216253322, 43.76418701810074], [95.45892496580166, -26.593219615168966], [40.77228215875871, 48.23147216192255], [147.5362481564567, 45.6661665036382], [-136.60094819996854, -21.437437886348214], [74.92120213681594, 33.19139596292514], [8.640083468664388, -28.069178363586133], [141.5258698843032, 31.348202339929383], [-52.167654561575375, -49.01151836186653], [121.5686575211772, 65.73412472503313], [6.795880160769858, -52.24186894734136], [-103.09529546953853, -84.43759167944285], [-59.8295516789348, -14.554004328182636], [13.103747690557856, -31.315520889128106], [-33.40863454533707, -24.439126288518956], [40.96864318878132, -35.07468568620797], [-14.08044526932085, 86.95537562331693], [-70.91785390220679, -48.04220544000659], [-7.94455554349585, -33.65022279630087], [166.02930154528403, -28.00212759907386], [76.44917657247308, -51.803882800771525], [-109.97517414588788, 33.89116575563642], [-113.67927404269194, 86.72754426912036], [-152.7978192568728, 53.3033556590586], [15.51397509737991, -14.34751330506192], [31.118977148576157, 35.04092364396953], [-60.91360166318089, -22.638096098522244], [77.79625185141755, 27.64240179181717], [-58.94000230280558, 86.55543888332393], [0.9527273864070285, 0.7131031256507336], [94.09679474047373, 52.02838584813065], [34.78517814814574, -42.34906441012329], [1.7970738283861465, 77.9765000146833], [145.21224442088442, 20.330009527035973], [-81.61771332660003, -51.02880134405395], [-82.25994546846181, 22.727096329590193], [93.95303291259496, 17.52560640688401], [-124.88113364190711, -2.3190740408135646], [146.00781136348033, -76.8484929603125], [-90.90182057214062, -73.28288438020482], [160.05973325655145, 15.887179196599082], [-97.68046937519067, -36.70280562204703], [179.00333100512006, 53.36490579036259], [60.82070187557762, -80.68472759462067], [24.49491175200329, -69.96608113439005], [-154.3542853859593, -30.880200023390593], [126.8250178088217, -73.02700071187708], [3.1648039847489606, -79.81424926246157], [177.71155689273883, 46.00038160324516], [-122.76648622739957, -4.174825757788194], [-98.66430328641894, -16.540282632549047], [-178.36988225465208, -42.0042853237792], [34.02848727143399, 82.38146223370616], [-22.64839905181624, -37.909058808604335], [-150.68966719565216, -12.918127641183318], [-8.424115581692888, 63.83209160278031], [120.59119291606362, -50.83233040025579], [-22.533503906994508, -7.701485706072813], [-176.43656339020873, -29.360120504834327], [107.13311562124522, 8.468325123379778], [145.4198528334701, -43.993680000539634], [-43.94179359583059, 7.112243467331125], [62.32193754105636, -86.97956188778133], [-153.4351339933612, -88.42344131418398], [78.34432317737787, 74.92088336990192], [149.00036757269743, -2.834977785312618], [9.304349733729138, -79.37199341766564], [-127.57460020878598, 84.302899807785], [97.89805716255503, 12.942254138288227], [129.42564254440904, -89.56913629653667], [-41.09655824452397, -10.286809265538622], [-165.75867187699626, -6.669210288045502], [29.791924832313974, -20.67947228604965], [43.92886291500482, -31.40313250281741], [54.02211194715022, -63.26697790039414], [19.66886687857332, 77.33057720437215], [-93.0073733422171, 64.17973500740005], [137.02755606225577, 29.876062337241848], [-23.25523642246064, 61.833477312379664], [-160.61807202562375, 12.833847660594216], [166.18751088194364, 6.417583933305702], [34.66469715918741, -53.76705502220088], [56.65747380089311, 37.42755029333836], [28.090191668410753, -2.415755877480681], [-27.007463916161516, -0.7849310294396838], [111.78130707503333, 28.943093151303035], [15.955611696552578, -44.13430363632209], [-119.24957355480518, -4.8548483935500375], [46.70128446686114, -32.78113076481043], [133.64199402508902, -49.51644108208211], [27.638998673200305, 29.94575998974319], [-83.39360895664284, -8.60388858084323], [-136.171032768113, 79.7315537291961], [-108.97512207628692, -4.027599022955841], [-170.95600940992995, 36.54644245482431], [12.526950162674746, -26.366897586898155], [15.02960637926198, 77.14409099880244], [159.34915981671367, -20.88806972949405], [-45.29543683532161, -57.13660816664353], [101.90231377117291, 13.823397257399366], [-25.43203542932006, -57.45283894436933], [-66.73392684421603, -42.21161588954572], [-25.391743125225112, -83.1537609255217], [87.00682057053461, -32.32164049493228], [-157.2801229044917, 50.033969204823194], [89.37385321118487, 47.33253124508913], [-140.75907103519245, -40.784383898652386], [103.33786947170735, 68.11602569018002], [51.06596827961346, 55.173174546062505], [-58.03653604691952, 86.31016993069356], [-56.88187575058227, 7.587672901174365], [165.42986478937848, 12.841578006856729], [-132.47377354380308, 4.080820443527906], [98.28093904487878, -35.800665765094415], [139.46647254151296, -62.674756195736066], [-52.865729464805085, -22.733476360400932], [31.285702484224068, 77.00343857042265], [-13.505465395463991, -56.315743233140935], [-52.83587574946751, 71.23033719585241], [-133.05292491884234, -22.040051882625498], [-62.95600803900439, 58.62231414491879], [-120.73716711951839, -89.50416065633382], [146.93707191933652, 39.721569239647046], [-124.04611308346477, 44.13142125993548], [-178.27093740720755, -33.3521546276655], [-64.71848419891704, 1.2799609238099885], [58.11306423095685, 29.32391541064466], [82.86681853924888, 31.461315726030552], [-140.4433536705451, 14.288361018689262], [-81.3923270541566, -13.652380095377282], [-147.2635991732372, -66.70090629607442], [-151.2832842998198, -11.281575391245774], [3.8934394874336498, -65.11126569888415], [168.43854660878117, -40.3819982522489], [-168.10555255781873, 25.19830443911285], [11.689358439801678, 67.69524250809977], [122.47727239787838, 82.48690582328632], [159.2592778694848, 75.79553429522014], [-113.48015679581563, 59.06451329169028], [84.99838937296404, -18.937008027256898], [64.03999373139648, 10.453658729229458], [-178.7912080258431, 37.59196973946795], [-137.55510699670768, 53.16396466538973], [68.9808794610596, -5.484663238954273], [-128.61047851284906, -61.879688892464216], [112.16749477276058, -68.99279863207282], [-5.975346973323328, -57.35987288282202], [-72.73039809826001, 26.55980320853114], [-134.06521820594133, -54.43206732958275], [-106.70319301733107, 53.0034796906137], [-132.71567846511152, 41.774687149700426], [-32.801391293020004, -9.010929040548685], [156.87120275759722, 80.25520102200423], [-7.680112267071912, -31.240395351396366], [27.916955114529216, 21.435256579211416], [-120.42654487393025, 66.08281313299216], [138.58379925719905, 25.49738230322193], [81.31105698900375, -72.36945446631906], [161.0368341925658, 0.4026201097694493], [-48.54763124136675, -51.595477332909915], [-144.4269875653613, 13.529999783131025], [-162.0093920635248, -71.1173212591492], [-73.85557997818914, -8.000122858938195], [-91.27531224185577, -59.892506435500216], [-124.03182043550002, -79.67285262303199], [-85.07140300752823, -5.9549491561210965], [33.104791520817216, 31.416423334511183], [131.04100600887313, -19.669947298717428], [164.96861357834612, -79.57722613428868], [-162.88299227153487, -70.80210196197379], [-167.31568503636072, 20.1655697071571], [56.57865318549944, -70.90129450049365], [61.62605786899732, 17.14813572092241], [144.26567883687858, 30.720224151283148], [106.49382719158177, -22.594494160703775], [-50.49723142840552, 27.05812617471228], [-37.01701169171501, -16.165906563271996], [98.10126870594134, 66.52512368547191], [-50.37367639938421, 67.85976729830736], [160.17921730413866, -57.09944274921993], [5.766135381692061, 78.09005471645048], [114.01214648349477, -41.80359356793269], [97.37196295469504, 13.857942620470492], [33.78941045353254, 36.748094544011316], [29.842879172472323, 5.297696291272129], [-34.78471193319542, -12.585534934258483], [-7.7507491573838205, -28.289616164432193], [-79.98492482379612, 76.71318608358655], [100.88239392706103, -11.820614568085519], [71.21509329914645, -20.12031516715385], [160.91437675466048, -83.05474357735675], [-134.0087458506377, -43.5741258261603], [-148.05171767091034, 62.15433420706925], [125.82206486403206, -63.443670849569095], [81.37098263205074, 33.20742328967719], [-153.6896315250351, -60.62315463673129], [32.4259114177306, -25.856507856001336], [-151.52823132344275, 38.155988991433986], [103.07859422980702, 13.991283635487108], [-4.985531140380521, 63.57026489697243], [-71.55227897069783, -23.119269605822605], [42.44772435972858, -3.721645553704689], [-117.40283315220864, -2.2126974460056914], [-142.18131657577524, 6.49304482204021], [12.659506061122325, 39.8736818708638], [158.69839956554162, 88.46069741613347], [-146.42243591361088, -50.397782062522644], [174.34067232943534, -75.248545860145], [99.51607785215967, 77.41193586335123], [92.66857882496281, -54.22890985170612], [112.55057018773128, -83.08445658893963], [-167.04041126954104, -85.74906159376906], [-106.36568198729529, 66.93559415276653], [4.254194026523859, -70.62641547971357], [-171.61006803077137, -53.03678522112901], [-88.29561655805391, -79.79741398214874], [173.30103107427107, 41.817638496661395], [-98.9044412444006, 7.387939191237054], [-82.16692220438541, 1.4581286432128016], [64.55590354775906, 83.36978798914606], [-76.96686694447163, 34.51379921579583], [-69.91712829933229, -60.27115774388684], [135.90409323825472, -32.763110160321034], [-21.156192338575693, 8.775521340912613], [-33.68349253481833, -3.6015926617497263], [57.887073804035616, -2.131917645222501], [22.61111941054442, -35.73209534139773], [-164.2711311870457, -59.642336513987516], [153.02973475191888, 2.9298681347297073], [-2.9095304604372885, 17.926470152683475], [-13.852392215417284, 33.14899886856971], [170.77726616098573, -9.01915526324987], [-21.697610592635428, -49.21639454291322], [45.16570589225613, -66.72066200193171], [5.167608433943824, 43.33547731370237], [-63.34401836305319, 8.379094328613297], [-153.02560885082298, -20.179977685145865], [163.32404878415713, -27.623270845951975], [-63.55152292804409, -63.45021961553408], [70.05513057638845, 59.140270503743], [-131.62170332289304, -28.48651946926725], [-144.69265108853926, -2.004206541237332], [78.95052640510569, -2.2706234221600585], [98.26107536180736, 57.395765057019766], [105.95085002577794, 2.761417945003628], [-44.15669855142053, 55.091244534068515], [-13.803887670748844, -59.58976797443877], [-71.28379615450832, 78.49737491417521], [64.01330250542968, -38.81781755270915], [130.16134813128895, 67.03643193192191], [-113.78797186079196, -14.601963832336192], [-87.58712625340223, 55.60200003656866], [148.47888919140047, 76.08600964068035], [-123.82790613149498, -44.11851861337534], [-58.40433721849845, -49.4664096947247], [140.3343772862615, -44.21344005152546], [142.43450459359812, -16.597208347507944], [13.20800344841527, 69.45334018197883], [176.82884936737875, -60.07219238456865], [-149.61337859083986, -62.6926071710918], [127.40486953942202, -6.214922148925921], [66.68275548359712, 60.96003099945664], [11.390435028035713, 19.167300270942057], [-21.248959696343867, -70.44659402488739], [55.86560760181658, -49.39034260605975], [-172.53006616916988, -77.48524776426038], [-64.39122244636559, 61.5385559114718], [-55.52571170719155, -34.00092019033976], [-87.84835992196844, 17.805100841529384], [108.25256286471051, -75.38569775957838], [-48.99833495514487, -28.173257124927503], [175.98119292204336, 1.2160097960790806], [128.5488649543066, 73.04823654887701], [-135.83203415446775, 13.454001509076633], [154.53555784399484, -4.1434793711711615], [-121.00039693315895, 65.52232796231102], [142.85600655168216, 12.115356458366895], [-96.08980289447946, -8.236083935889278], [164.80304349376215, -61.28492947073306], [63.267064518732205, 1.8472696421496382], [-5.137080398690186, -54.43273303015162], [37.20524961645136, -5.486422130329021], [168.26149026586455, -26.61768153846158], [34.91982167494471, -33.98598655067957], [5.263150976343933, -1.8870592980121925], [70.05527627381937, 66.70982955316805], [155.6600787023111, -50.1309359055188], [-93.61210092800236, -45.82099622337405], [-84.48944582525147, -20.95048579022724], [15.971623599578928, 13.18143940333318], [23.76388115948678, 78.94320904316731], [-109.55619443074772, -88.24719569321354], [-88.76195408937163, 6.922657400364529], [54.82914271250689, 68.0413934406724], [-10.0472217528697, 53.550104358012646], [155.55355513831088, 15.88454390310266], [-85.48523719441563, 63.03215630013922], [22.687926550292758, -42.11811524078578], [79.30472362220819, -82.8721403854126], [-116.53902806308058, -11.582357181144317], [53.203209994047214, -67.42322230317905], [85.15506066296632, -58.584563988258], [179.98800871457473, 83.95554259996568], [-67.90839869309441, -38.649002277352224], [-78.74200434779335, 61.60718328307508], [102.8102610946303, -7.529807705188936], [161.0862793114749, -73.25514775834021], [76.89980950815061, -42.47622888143542], [-130.79097793685844, -88.88682731645476], [85.3612001547434, 24.14573221055513], [-165.47063984664345, 41.791424488535164], [68.90586325565833, 66.5841915423178], [166.84393564417093, -51.332698292228756], [110.608224566452, -86.24315989718355], [-60.73208448424451, 84.88585644900857], [155.56921894829395, -28.780926330997243], [117.00336011740038, 9.250990488936717], [-5.017264937088521, 67.47015385662024], [162.19071008601546, 16.54788825541535], [-69.00716913897799, -14.576230123525363], [-124.02409752135463, 67.61840611311247], [-5.162983664762288, -89.52594296775301], [-0.10639412163002682, -84.00370358003016], [-145.6757743321674, -51.72337725747126], [-21.79123919561203, 41.71988371960686], [74.80168399168852, 62.05953807521331], [51.23969747498467, -56.18903188068445], [147.38697333195626, -14.528985415446893], [18.445660953285596, -68.49544320497397], [-83.10109770297736, -36.23671096541744], [-66.1551979648887, -65.13409542006886], [-3.5609684251767515, -56.59776106276588], [80.78266758618406, 12.915030208287908], [-51.51079394897397, 83.16108953250868], [-23.658798530426175, -33.23177517649579], [-160.33006679774084, -59.78336102150698], [5.246385771126478, 27.599666442241222], [-9.25592373920269, -41.69175109347376], [-165.4247798410576, 20.578166827242338], [-60.418957670517976, 86.91218155982185], [-47.19880171331862, 69.25870317647225], [-148.45425776651825, 2.987941810520116], [40.66249471703138, 72.73054459894323], [6.983617204592578, -60.59960875071555], [148.7794215796907, -30.682251202776627], [-87.6450382253516, -62.4247485496093], [3.8921276656948134, 62.13801780280116], [-143.94290330899958, -59.47671843621595], [-49.7336798374114, -6.891062267537107], [-139.67073482661033, 54.927003999825395], [-147.97454758333845, 59.26043662537607], [48.74058541795503, -71.18681524519197], [172.77625308624843, -34.76869079368757], [65.47808833560941, -1.3352752646303223], [162.79021074676416, -8.63469634217353], [-54.58742301652035, -16.694743665425772], [-146.98299182640253, -3.5073466172191603], [-37.73434422712732, 65.37601367377715], [-9.727278529176058, 60.76719891875864], [-83.70487618986442, 43.63640398518668], [153.2106770197773, 34.094663731438864], [-35.195532862587925, -79.85141358036721], [-153.28653277552775, 16.21827862899253], [154.17090281785784, 56.606528122604104], [-162.84055330880284, 43.467267722660466], [17.789604815125976, -43.07731610699549], [139.36130850290934, 73.44671964266237], [104.65442053750778, -53.035185912699596], [-117.86520143682999, -13.194206007552802], [-37.01543324707274, 9.720962870907295], [50.70819102174361, 66.1091086477815], [-102.98909707731879, -41.71506151930947], [54.08225595767068, -37.59498092957881], [148.12691319644452, 33.95146777811844], [-155.05188076507704, -83.21826736472333], [81.64091030555949, -1.0280437404064369], [72.17446985941314, -27.48103986888821], [-172.05094575849267, 50.73008062610736], [30.27715508302237, 55.9331771380344], [-138.7544220434575, -44.00226178689954], [-67.19704606405355, 8.851609924044501], [-2.402024403767875, 33.37639547357344], [133.6516682513833, 78.00399681440855], [125.89788247597181, 52.949646416386656], [-169.82018528016798, 51.54126713693662], [68.06849720063391, 24.383249327235205], [51.265223875194096, -83.05402336631414], [9.772976867228058, -53.470795316077485], [135.7588474257435, -70.72194357497156], [140.0706114707627, -36.86373338284846], [117.90331747258134, -25.959989212883286], [-113.3115900244706, -24.178621304131664], [69.56858264673858, -73.44476792122262], [8.906827744652173, -22.579156641157883], [-66.40078632029231, -65.21967005639262], [-170.3256061588999, 79.24670349038172], [-37.19230356253839, 32.69294619923235], [87.44738009570521, -45.13049895424785], [1.0503108014054963, -37.453058523348886], [145.139132438853, 87.73435644433847], [17.13869142990002, -39.10781494331016], [30.278099551746642, -16.601734805695216], [-71.8584625162653, -78.50249788803154], [-48.55320181717259, -88.5170480887804], [94.23419476653754, -50.68333201224719], [11.414576824821303, -45.06643460796117], [104.90410947194947, -39.65037249824841], [92.9822830939344, 20.881820596416564], [30.210419015690615, 69.81761809692276], [-124.87335802094394, -9.653502297208396], [152.62516883246798, -19.364756087238575], [179.86415206254773, 88.99190939178929], [-133.24708499774167, -33.299295931588716], [-37.02530843922547, -34.009386276882495], [-38.537012732832814, -65.22050458792485], [-24.717337394629013, -10.049928958055645], [-133.11611727273436, -15.862974855493128], [-151.78168917574675, -47.30706074266854], [171.95117044793764, -24.14933604069484], [-75.63108755126802, -24.975580732676733], [-75.50646732706682, -42.138624043721215], [20.454133181099536, 34.60804109601142], [108.57601850665208, 64.38577807916927], [-162.77043416953057, 48.85563342961747], [172.39245030279756, 13.403527291683194], [-101.31766056054614, -10.295427636332523], [84.79825299275464, 86.95655814021309], [54.01143389836616, -29.76330757957239], [101.48398095118829, 12.101163448933207], [82.76202401359765, -45.81303484643855], [110.77554230271862, 15.63345895945174], [175.04189243844638, -19.08239418936514], [-145.75924526163115, -21.304694177723903], [93.70323017016177, 72.7777818944981], [153.75667747205102, -64.00032645424945], [3.078325737748555, -78.26962027446648], [145.60063128021383, -58.5773029205718], [136.05922196043122, -48.65440284066758], [-95.85549317146062, -2.3492616758060647], [122.46727601669845, -10.688622352265199], [-84.6397330961595, 86.96350720947738], [-143.17684999519304, -72.8153868605106], [-159.22549014255873, 29.73740881482732], [-129.50534379591804, 24.21260437370023], [-6.2443549145527655, 37.52777563911542], [-1.759775434110935, -18.393444091013915], [-39.53571953880279, -68.44087556713923], [-133.2119816406022, -6.207094889023175], [117.64600040867363, -82.45907239801146], [-126.38761802656842, -31.092856994480872], [76.37907854905595, -43.711196045496784], [131.65175258437543, -12.617907069403831], [56.19570513535527, 78.34223312675023], [-170.34468064101168, -55.374164685226916], [-162.52968371352125, 50.28414910716238], [121.51020016630756, -9.00127277445356], [102.34120037065713, 80.22333457104588], [-141.93924087706347, 54.40240001835133], [1.4864087154036643, 22.71575835291895], [94.32160182512814, 22.68679971174057], [-133.7020804620306, 19.110827239989682], [77.99107404652065, -49.59885386844606], [-45.80618003270739, 72.89962480606013], [-112.8855185047455, 89.57572582554744], [145.21041381001208, -20.6804439341862], [-161.82988154995357, 73.55796733228614], [-43.26495484284645, -70.34567081349996], [-63.756340572536665, -13.787634743197476], [150.42854107734072, 67.97306926954936], [-54.029609100551916, 40.03145987351505], [-155.09591823250082, -20.283723492524274], [84.19629395573801, -6.371568966696648], [-19.066763666382975, 86.9171760959486], [82.22626367519726, -48.69753249875665], [102.88598319903738, 6.106316545230501], [7.015168800323712, 48.545714810545554], [-62.00484648428687, -27.53385873148212], [-62.52750460956545, 70.13963811227373], [-94.28692930800841, -64.13663471120782], [-90.79765205640473, -77.18637863106889], [103.91650263343163, -31.04054891894265], [110.49170467043587, -80.55691751920793], [39.496526268472955, 31.723663730099354], [-42.40711113591931, 29.45198133760347], [-59.13644038343608, 49.21527566492696], [-54.62960697618684, 83.51468732925807], [156.53533505754643, -59.28845071653042], [41.42684185733777, 48.26374560482415], [-7.6823528304172495, 50.680681600045446], [-75.40075923561433, 42.678220062666185], [147.1027483076571, -71.33079101684422], [166.87518970680702, 58.92898995273998], [-6.425718765450963, -79.2211530730385], [23.390195195257874, -73.55047016400516], [20.920930422962954, 0.20096909891550663], [-16.03366807887678, 48.977355212095055], [103.46689869047553, 82.64945318740637], [-60.279612106966965, -13.447027015496765], [59.89491081120043, -5.297765584887895], [67.26268409623187, -76.3337989667352], [-15.767181148580631, 50.69389325648786], [-8.517476383694413, 23.326698595843908], [100.44785340650468, 87.25720089110597], [-83.69269169013701, -55.02944237461993], [50.15166297317997, 68.56072941168868], [28.515762700900353, -41.661970447057904], [72.39349845752702, -49.04765300742155], [145.17276680495166, -43.08669251114236], [-178.9530974714307, -29.210469284738984], [-45.09037857408203, -71.43929207129898], [-73.13033507327916, -50.52500667966021], [-159.52829165977508, -34.86244009483047], [75.87267720929545, 66.65028885518048], [55.43763408629918, -19.03521729031918], [52.50725996784551, -4.847646916392874], [169.01512488184068, 11.367970338737328], [155.201852777734, -19.379519101484814], [-98.49320922089446, -9.188553677931864], [158.41771622426216, -52.71219244958819], [-116.98072752530385, 50.93745216692495], [88.86840318464456, -2.942844817589374], [155.59746444474212, 38.835012421666356], [-18.72332425040608, -79.5232076242625], [36.89659646455134, 54.15036113215805], [77.31866794399784, 30.76443896792555], [-87.37390893425057, -15.689460202971514], [-57.931683135981125, 53.70956909088156], [50.345413580520315, -46.776151348623635], [-12.02180424575289, 43.73484518523382], [-165.1719888877125, 60.22444022809132], [-37.77036808942274, 76.97112969388141], [47.34317425282137, -57.230647576992375], [-63.44436156538208, -86.37775959594987], [171.88173778684975, -23.774807762831575], [-53.79781831115707, 18.24327166559715], [-134.00788855673463, -17.591967823816304], [1.9087765334225537, 55.77439663822502], [-84.47014271700772, 19.02815178343102], [57.74366618653325, -5.832097380957375], [176.67313374334506, 37.99882723879711], [-80.62331516359423, 71.5101422353643], [-116.68478398457493, -47.25974869652922], [107.06895455405507, -2.931833464698994], [131.41803494017256, -62.617784618468065], [81.90201600430679, 50.59209060507471], [158.30604129483405, -40.51706035539349], [91.14303096258199, 68.98344638335465], [-37.226369783466716, 56.55368311884376], [111.74355690872697, -80.8618632314347], [167.41538772775252, -83.56117742729691], [-79.83222986163003, -86.25220733987162], [154.970749948906, -58.658696402426514], [-113.00571641327785, 13.872885339988432], [77.25462873516612, 4.7901490875241315], [-145.19699829387946, -50.98456336642966], [-63.95219648067646, 54.726521971090435], [129.42279148308705, -4.667068433600825], [31.073583412980533, -71.29629151300814], [109.8104855910965, 2.9617284508698383], [-7.112783095051354, -3.5799023769048244], [-18.297707175026822, -34.624773894038064], [-9.25827319627694, -87.82802866404054], [-68.41898028714148, -32.46672197567079], [0.5299875995759074, 37.371314265730064], [-155.13832055329036, -30.750348658294765], [-134.343915680757, 84.61138443867652], [-35.21378064816858, -10.193315695734464], [-62.555956321424745, 38.72452783861427], [-115.41855300199205, -5.4571572872192275], [-57.51119494235573, -54.32890931159146], [139.81788087717487, -1.8557033599860961], [55.13767454897082, 25.41758831802538], [-151.65115812677357, 24.105542231150025], [-32.011803837709074, 36.20862381399214], [-109.31134601067376, 51.78010207296333], [93.22488173148872, 65.95015718929402], [127.66575864224829, -42.54624473028455], [-130.0754739541453, -4.41301375546534], [3.5493061832228445, -80.68453765688825], [-74.51450262089281, 32.328269734157686], [148.00586151371053, 52.737259485214125], [-81.81957901608864, 42.8216662780303], [13.369069352868301, -76.12826206712101], [-138.74248765602275, 85.22328711042032], [120.68631559436128, 1.972831351020714], [83.58771647745723, -25.27364817809594], [-116.99385636016464, -75.31041544627003], [-129.25212910197774, 55.37100203756743], [-102.36949342379884, -17.801924290828307], [-179.5365387908954, -64.60824720409595], [117.57241988494455, 46.07947295045272], [-140.90810447548844, 28.307491080953614], [100.95503163120932, 71.74850710504457], [-90.64823087359977, -85.62575041717147], [-16.47879790584815, 60.04750390210522], [-83.53995277788358, 46.83914446261748], [111.76148397288732, 69.23761888740168], [-178.71249393694092, -72.86692782652496], [-6.260687368775821, -74.83662844352428], [-109.83127826979506, -20.676712978780934], [-124.971497863332, 16.840438201012205], [137.49896344428632, 57.43482973459336], [-136.8193663531344, 55.72095026392567], [-132.84863619244047, -7.6038357208241525], [32.20443548849049, -46.1390351816557], [35.100504352250816, -63.738679844856904], [-2.81348911685666, 43.65165534686101], [72.64919991971678, -68.9709723969106], [-110.74268962519606, -46.22111382884088], [-42.220922992086216, -69.55663104220166], [-74.83377794513079, 69.29437240945943], [85.85459770507441, 43.288689165476825], [70.7888092195685, 34.47043652047473], [-57.91813394262809, 75.42929207848647], [162.79006206956785, 28.763905202208612], [-116.085175578852, -43.94482407100567], [-29.276818166590985, 73.34696359381603], [81.75702568766715, 33.19485086156776], [-140.16952952771365, -66.78109082517926], [-11.666479627589892, -6.12344816880821], [125.41289869150116, -86.696014507473], [12.125500066037356, 10.55944989921655], [46.76762533376284, 82.99366441168928], [-129.2952979410673, 54.821066488717044], [-70.26463993390455, -69.25939705724461], [113.765316288206, -51.37282493635121], [105.58636670955588, 29.510094418356974], [136.39024917221934, -60.471560327201594], [23.577570758335177, -15.913341458577946], [88.389091077928, 22.835237545040595], [22.611551320824923, 89.54700865087484], [-21.107268463740986, 22.451391318285573], [-104.5369405369127, -55.83471016087258], [-24.21663372975968, -29.752818551508604], [-136.40448760216793, 38.8694419617685], [10.1929913713185, 5.08551823177851], [173.24014999593632, 76.57016809064967], [125.62432432593504, 54.271578458599045], [36.00269624375102, 83.00008136985868], [154.43522470458277, 83.14277149183754], [-164.9535792669118, 73.28358966500458], [-98.10329319255553, 85.33775786437117], [58.13492910280816, 59.565132427590505], [-159.58511247391112, -67.89703062801736], [-81.5643962283851, -80.2410955115668], [12.161619352321802, 50.062544609940055], [-110.97774736038991, -11.812126062094768], [-124.15722510237181, 41.463131985009134], [41.86498915413236, -88.46816635485676], [-126.42314434929796, 63.148120617399975], [57.07628436789761, -19.802028300931948], [114.7057471859399, -31.34957621982631], [130.84984033464465, -55.2274745829621], [-29.286449120084654, 34.191608744891425], [-25.396475241617846, -84.52454781984359], [-42.63155448317872, -82.99642641167569], [16.966536627831008, 73.5272979307896], [85.04489207262095, 75.32232649387318], [-98.33540366862006, -6.57259705827363], [173.85526243597417, 16.218844329889855], [172.78847884246582, 65.57381924191435], [167.33014892306178, 77.31971885009342], [-152.84746926661586, -88.63510137841827], [131.45007654128852, -52.09507390776754], [4.241686721220814, -41.730815876571704], [-80.700309869399, -87.70488766318135], [99.81954248212352, -20.711527314041504], [178.45178016325576, -68.08305922302543], [-177.16047002427464, 70.21044682634214], [38.83255995489761, -31.509290764004582], [94.22257054320221, -77.5196637936403], [-179.25476748455455, -59.9013923349304], [31.092395412068143, -72.34339556359339], [143.34444291880243, 57.82312537837136], [122.94683225230085, 82.28950611435799], [-159.26206418921734, -32.53868963841475], [39.685337520121806, 58.26871012317565], [11.999191284806825, -58.11210815781999], [-123.72537540273593, 35.42015182366303], [18.886528023751346, 31.837974827971042], [-26.58690114736112, 66.02593531646437], [-9.240619673041381, -34.935572652627044], [160.02378172201213, -17.3584360400651], [53.88465959971022, -65.42985150976185], [-119.48542491834998, 59.32043887556582], [-85.77019388199928, 50.78687845939], [-68.28681933986687, -71.38796205198452], [19.88751686674707, -47.902132659097816], [10.207592625977933, 17.94139422424156], [-23.64659625634453, 72.44496494016786], [-16.82680604329387, -34.52022864691933], [-91.92453359823917, -39.43070025359938], [60.91549382019852, -1.0074566853552946], [129.43761160538267, -58.272086500015604], [53.14897499166139, -32.07502048419512], [85.03478343387258, 0.14704578191462314], [165.70459047892066, 71.80051591884519], [163.28224333363596, 89.97358746602465], [-49.828117231434376, 62.881182811322155], [25.1971028742759, -79.89994323504943], [-55.49926592823787, -14.847290265298781], [105.01344594466731, -36.99968839506897], [-1.3256561450562554, -77.29922219271982], [89.68015977597035, 20.346573676566088], [97.09943643199013, 75.41856077034608], [-11.519687675039716, 87.83995388997783], [167.03542658991702, -75.4503433978301], [70.02700771754557, 33.373504732937214], [-132.15758289763073, 38.2474578968803], [48.024847294002306, 19.72948887129504], [174.30783814037227, -63.53092659519662], [25.811713959843516, 66.47354940620795], [-12.916475607280562, -83.65632808626827], [-107.07049660079728, 39.37892236043645], [-162.7406708016458, -66.17071469293299], [-9.828884326344669, -39.32388619083669], [50.15540343672726, 88.68634304909531], [-0.6894844617714568, 42.031325735002866], [121.60238420263354, 17.48563210266353], [43.51096152004901, 70.57404482508936], [-45.0443497849202, -15.855807942374796], [-100.50758349939058, 15.555369679732012], [-53.65683931946316, -37.73193210819169], [-11.599266126609757, -42.8606934548167], [176.07158542614212, -66.73326113855731], [-49.79123165266646, 68.75755943373781], [15.187524478606838, 45.1131211343869], [113.3085415099784, -39.78651203037959], [178.13358677226566, -69.42838818000294], [36.77078990057099, 48.99147511467637], [-42.65140571783832, -12.163927280504087], [-29.53311232954234, 52.20922068445813], [-163.29221154209927, -86.79445457329234], [94.03538074409039, 9.7433427121206], [-123.32683810488015, -36.50787437200768], [-158.94508890219308, 22.78984753631986], [169.18757918618155, -89.19971170678278], [-151.20865633476072, -22.90632681688262], [60.07411635885283, 52.49865171128802], [149.8317911187268, -79.39423857761888], [156.39378098027288, -24.65618650261037], [106.46992823884337, -59.226686755154454], [-137.18756294153397, -47.32760448487677], [-35.33807078211738, -66.71068308200726], [-19.297459690527923, 27.12907114539005], [-169.34889588643455, 1.6591046981445512], [100.75259839758638, -86.42203476730066], [22.612366430539286, 4.622262015022942], [-63.45181279838493, 88.25989384512934], [-28.549593678794423, -77.33582381902671], [23.322256841134468, -10.47342695538751], [88.24390904855628, 85.8690940934328], [65.08848205624847, -22.550555537996292], [115.54961212260524, 89.07225090704705], [72.2856377298614, -59.8467964002508], [-93.20204740848357, -88.01737452579418], [-170.4906008966732, 19.29807985909958], [163.92590167172804, 74.09560429525732], [-148.65059336809702, -28.178860431925017], [96.70708890217895, 84.73386964303776], [159.66921038829358, -64.79077865315207], [53.253889385026774, 67.44333822648261], [-18.56730129759101, 74.58138193356105], [-33.76639693128331, -70.98129034755861], [-62.15143391184186, -8.672959397521964], [70.09433150301373, -37.66679884727972], [93.00078167054173, 84.7954528364333], [14.504730087794355, 5.839576600622611], [-173.49587755274254, -17.410237021225676], [-91.14054539492254, 0.7024564131469591], [135.36488224005691, 36.500142093328655], [143.04826122070494, 18.43732033021923], [-73.2170813352485, 76.56470473310733], [-108.17995066288952, 82.61830763585967], [-117.10684803711929, -21.652529830547916], [18.51494062360719, -30.273903491394783], [-45.597752832752214, 80.73644019133845], [-112.65357387842595, -40.08451716852973], [-65.02617738312269, 83.6901318397747], [89.80133756741887, 70.66124832576352], [-133.93741854846573, -74.27561627774645], [-138.35524056262543, 15.746080423175798], [152.80396449818795, -32.39823175059313], [151.1054196186821, 58.657609141197426], [-178.14197330949744, -54.9368548331873], [36.18387342887502, -15.922107242641239], [-20.68911682941307, 87.98480638442729], [-132.72170476675961, -28.073403713527426], [131.71513694813984, -1.8388148511344182], [166.66189551790325, 31.195736550496164], [-149.46439758964587, -35.67020615109586], [44.21033590855331, -65.13622896619766], [-34.356786808390176, -34.75873283386752], [-155.94682461965644, -36.77457717582552], [124.20858857047313, 55.04938465796313], [50.937954352082045, -18.979451332175188], [-90.36802017086755, 51.546126448556784], [126.51036591843453, -25.355467738922233], [49.18296489180315, -71.45935150519986], [-16.633430320591174, 65.15125431799933], [139.5004239477062, 83.4782661499454], [30.919149875818075, 30.952256082892944], [2.4909866368751654, 89.60890842436748], [67.24550482935649, -81.63558108967597], [146.65387986394722, -54.18923594630458], [-29.334488889608643, 77.30085017211196], [178.63985817597944, 26.329387412188595], [-146.09531356200398, 12.339065008676382], [11.88587373185583, 45.657893576549824], [-100.49091343398851, -52.48345499948243], [-80.28853338788163, -63.391497842639694], [167.61983976054873, -17.207543266158275], [-126.88710306023243, 42.63394848519483], [117.51814403964951, 62.44815049478543], [-176.90893674567866, 9.070729445984004], [108.95153863481173, -37.01184385538639], [-22.49795382059233, -82.51412706612514], [-76.38998171493402, 24.27697656866346], [88.81171787554649, 33.85437192689344], [69.87636205343394, -70.29758419713932], [-178.35120691961455, 27.597940813383058], [116.56709594031652, 48.924707405847705], [-166.84677627925, -40.187044447494486], [30.45068249268761, 85.54091164239017], [150.3968460206759, 89.65826405878471], [47.86328696321428, -9.179336859891801], [92.22327474060876, -83.5032560284612], [-133.7378222040716, -82.07947906113459], [-100.50281902497358, -12.728900556679319], [40.66158707703374, -12.254202819151296], [37.40964279649842, -22.93511707245394], [91.71094914308773, -73.56675368699918], [-87.53262868746391, -83.51887903276572], [-58.86000621361897, -27.461034292766392], [175.44338713865295, -56.42263632723555], [-31.9181505314417, -19.43265444769628], [97.44719367710319, -44.15299881594767], [75.94013252873644, 34.12053623499443], [-129.7499003612309, 53.48872143961542], [-161.04594698483044, 83.94855598754009], [-74.63808218228954, 55.8256424835728], [13.19183337038095, -70.2818448955157], [40.536850673714525, -23.38027084936067], [-36.55153090041224, 47.24624759997621], [-106.20991335015906, -88.37568515579693], [-97.88330954586894, -2.7523922252146305], [-60.09260078223731, -39.10917263165902], [81.13625568932991, 89.01025566638717], [163.76428003659035, -51.263049506583975], [-73.6577128246982, 37.121264502262555], [-77.4867924359732, -89.57932146152588], [91.2316694117246, 65.39303663626765], [-75.28411051141794, 36.79491264689725], [2.649875589375812, 49.33831177502824], [158.37614647829508, -62.37614458116597], [109.15123306382084, 49.66837203931576], [-126.77995577966088, 78.47380916185243], [-115.56104447799855, -7.613272357447869], [-169.17365002508646, -59.86324499260713], [-146.70816560412382, -57.81785304316646], [14.495148511646256, -81.39952189455262], [-144.0602669690266, 83.29838629468433], [-41.136565290785484, 50.64327621419575], [-29.323194571158318, 25.039644670956143], [-157.89605861027795, 74.2469677516751], [81.9690953354273, 41.0619175516115], [107.15333568323048, 5.760170923811909], [-33.722906963626336, -32.706968202604926], [88.79644059409243, 25.924242853851077], [138.86280927672615, -84.0490805118805], [-146.13923839167222, 36.431793099374275], [53.205974786688046, 38.29181136321199], [80.20130654475957, 63.301679696557265], [-24.28387146407859, -31.07707655632691], [10.63604817747942, -86.85294676755004], [-35.21550978322756, -63.11124566604877], [137.72749169236238, -58.89484200502984], [-135.03444454621487, -70.62000848283952], [-18.597071482342457, -43.28518939710036], [87.39926868858929, -1.915461790367301], [-53.64120560954732, 65.72878957276563], [-70.16398259938444, 27.759324280011604], [-145.32982039914313, -82.0736306891076], [133.61803688226362, 63.08785136304521], [9.973602203458167, 86.4555507806285], [-11.21725617635855, 35.41843688155878], [-95.82052305804328, 16.11252952180748], [82.95597717918179, -85.89825611742613], [-19.387483523628887, -50.60804204684086], [-36.494881597548236, 38.24187434311779], [53.754486848280926, -46.644142041077515], [-114.89534629456288, -84.5243449575764], [-86.17583282599013, 54.50994219636727], [84.72824403817638, -18.66627363537862], [-163.8116075351725, 19.096921650966905], [126.03956617307159, -41.9205230225691], [-106.35148450051379, 29.439142424369514], [95.63252903115773, -7.066823933982449], [-0.3945077541023867, -56.98634425980237], [179.040205617412, -24.46969582883902], [62.18670598789306, 75.26886744825164], [175.09716829936772, -79.3774649019106], [-60.62031626743377, 73.82328029779475], [16.547510644399736, 72.3885671789656], [-123.61147237339533, 30.659141136282756], [-20.220741506147295, 66.5608573672386], [84.40968914260088, -1.2545577866445745], [162.9722566016562, -25.35082013030579], [-121.18060695094313, 53.16198314628061], [102.09188474354458, 86.78019033255364], [-176.30716484913805, 74.73130246533107], [90.32391771053193, 31.610774966161173], [-126.49969725693126, 26.499953425190895], [-117.55594977518533, -57.5358540255573], [-171.16085653185476, 74.92544773237346], [-60.733213031674175, -10.566059351909264], [-71.87772280477066, 75.40762521983379], [-37.16562299593611, 72.82396118879362], [-85.60762335911568, 59.619049649955755], [-50.94271164872171, -60.605780732572185], [-46.6352273118045, 36.55379459470701], [-119.64841766315365, -70.57040934764542], [-67.5416629565791, -50.37643441372524], [-62.50673698975952, -67.36451583903195], [-107.29847397830162, 52.676050804315324], [11.560452209391086, 2.2426111065031407], [-147.08183135928567, 56.049513665535585], [-133.17727755850544, -58.64760194098273], [-98.43783896771869, 44.916652370538316], [12.15946143349873, 25.64441419698668], [25.64318518928971, -22.522864619994824], [-24.318897809613134, -57.85617396353771], [85.33501679285509, 46.06497272716411], [-32.92054884769793, -82.49941088672307], [-103.52883492773317, 19.752528787451688], [-62.585428388169994, 25.69118459862231], [-1.6142345732075203, 44.0560151285037], [-37.98540716509293, -32.70124336939656], [149.0380404923647, -3.737574861372086], [-42.099901084801516, -5.5539223866963106], [-112.86125752478826, 88.80821319456818], [-30.50875913845836, -74.28426168498436], [145.53622155553117, -42.328314147124196], [139.55342415908146, 5.362354513592398], [15.514713960980453, -49.233155366953135], [-48.5511247133821, 47.8650200230829], [178.07661563226128, -40.63812658507394], [-176.77294633360032, -78.7768718236647], [-99.66534173277256, -87.52912262524927], [-88.21800329828956, -32.0352766038527], [-148.36040521194056, -63.73551142359491], [121.23921520685731, -36.89578809343877], [133.39910294415768, 63.75858598018204], [112.8860219450053, 84.5026942818247], [81.14190158794462, -26.656192299284026], [-31.953995577751417, 11.419697967547307], [134.61602172274476, -44.724569672997646], [90.68847623176222, -37.895928656689364], [-156.2069005047689, -87.64931938705979], [-30.315032847551198, -12.439079181419377], [-114.81343331191759, -75.72942878123399], [3.632971509445424, 51.59912794695538], [-25.705420462885282, -59.52973071400324], [-64.81617969913621, 43.55756991178818], [-101.90108246485761, 46.04512084818655], [-106.01512009953883, 28.525125821817866], [16.569715633868796, -49.11177591434289], [127.73397262835405, 75.05216531206091], [136.17155848520952, -51.27345680417682], [140.3139300280494, -51.97362458063813], [-96.92318174980643, 9.190139495504202], [-62.71214997316849, -82.74341808855196], [87.04227521971866, 26.22267110944254], [138.99729615788817, 49.64481194442682], [-134.293215751491, -74.89638968147746], [-6.496503176016724, -83.30816143379313], [28.73322941809179, -14.07447636430084], [-48.1775557116341, 13.61334013595953], [-157.02706690931683, 6.440329218655081], [3.927054784653601, -60.07234519292191], [-70.26655385136954, 72.3500729652396], [25.77992712911658, -58.612286377822905], [-111.68347026191837, 39.99968960787513], [-87.70850447198812, 18.600624912879752], [-111.6615539904094, 60.77097597905053], [162.34236737933725, 40.79767861721051], [-141.39266376584197, -72.17749325375547], [-60.15248195410453, 70.38696557837766], [145.88428304316452, -45.69788449563994], [159.91370494052296, -61.90903941237099], [41.41929526094629, -46.65281538515502], [133.42475957932757, 83.80793622432654], [-100.59000916752353, 42.13107690762526], [-65.9019310140405, -7.644679345592698], [-27.213230526619494, -52.881257922657426], [101.32226962435324, 9.953891877541515], [-113.30382732140018, -23.28456186680874], [-124.0336259829443, 34.22949342910987], [-67.9836679522968, 28.53825317694104], [74.2532389007633, 72.09068269295607], [-122.98791635129105, 83.86020065587694], [20.00759586495967, 57.72446205979517], [41.123210907186454, -29.453883728249288], [-103.21942064882164, -27.396009725925367], [-133.00560863341332, -1.3762932082179669], [-26.238873321378684, 29.499423158901486], [107.11333231961306, -30.568965931567668], [-95.3583913309511, 19.496015325021517], [88.26607533729815, -67.29420934106453], [-158.0533481149942, -83.2311586631765], [93.18110896713705, -47.67923900228369], [-42.73031022736747, 5.457465475201562], [-52.826397881164766, 24.77954414448505], [-164.06000551868198, -47.87200436357565], [-133.14335092491288, 1.316956754200893], [74.83237186120246, 2.4428629785467537], [-177.77144130278234, 28.75947815388692], [19.179770254791215, 42.28608295171626], [27.542859708545812, 23.264324472288326], [146.68970660286718, 69.18958960325074], [25.055335725011822, 10.262906506363816], [71.18940724307984, -60.43617554358204], [-161.23060510763327, -69.28150629499693], [-162.0837448006569, -72.60992765197466], [-104.34262233900677, 73.16290628370369], [118.96317323516179, -30.869446740895427], [-124.70667852293802, 39.641239391663994], [-47.040037989948324, -36.60235532242147], [-166.73719024212167, -52.72633714420449], [-67.00980499262054, -45.877402215590465], [32.165816876661765, -54.67858826726635], [-37.122682289335536, -61.144538640606406], [86.09736536229116, 81.82650687401801], [46.217108176583906, 81.14569461032544], [129.24181283300962, 3.2435116755302085], [19.114250856768436, -25.858433120909154], [13.790018860176874, -1.4793394388027226], [142.61893028366828, -19.972591143413364], [34.00315445273346, -74.30220806556733], [136.9501423583065, -12.08722293959871], [-38.133147009534405, 6.238789678020833], [-146.31218126421166, 44.44808020006257], [80.93940964316774, 35.03960315587282], [60.583202778296965, 8.935868873396453], [-78.53985875833666, 21.23638156336154], [-70.8860621430454, -34.19088765118104], [-82.89181373568319, -59.69208389816119], [148.77788573311167, -32.49323625173625], [95.55921150164033, -48.60113998040892], [-102.84860696141793, -5.230812622629557], [-178.14351487107, -12.739289293993163], [-5.079843663454557, 40.15439292760772], [-5.843085321706889, -83.87135283966035], [-83.6609442536282, 1.906219522851873], [23.129839187106967, 83.66030899152555], [-120.09081911599256, -55.36635231782827], [103.75392863549922, 81.90735956033173], [169.7555610525853, -0.9382264222707626], [-154.07443045146866, -66.05303494719013], [163.46638702350452, 65.66144456099644], [53.04677045305691, 52.59387021101471], [66.67514178897467, -79.83894286873135], [-139.90508487262238, -1.7877818862838346], [-121.69464595307714, 7.918607701847438], [164.49989736081554, -41.57515687723243], [-41.553129204752935, 56.793319782503275], [-122.38389159364971, 61.642583852443984], [7.2067293837687085, 64.62119156018844], [-175.6576689820787, -11.80977223700381], [54.693296125400074, -60.13254437669601], [103.37914883603618, -1.6629350936226706], [-136.18366496923727, 40.63603901275022], [-92.08051753985748, -31.423286939577242], [-109.79328171638711, -3.785811893850246], [165.220655274163, -22.06329016095164], [-32.96842574381523, -82.59351966792121], [4.9655260065050655, 24.72509281284268], [-149.4450556453325, -16.40014361802428], [75.64406092312498, 8.069092312869692], [13.890939134960547, 23.81184430091398], [-80.72247099367283, 22.205922996415563], [-163.96656650235758, 0.6429326059866858], [-131.25969906406786, 31.14654009182651], [98.61597261041749, 57.45545479970132], [-99.04750536825, 76.13562996077935], [-47.3617353285604, -71.54909268196037], [-7.703636704929444, -35.47139791677645], [-75.71123335261915, -69.0038979742644], [120.31672853272867, 84.51127211795435], [-147.27142985373507, 17.390595043811842], [-173.4710555509166, 32.36290659605337], [61.98954067827418, -6.0029666551858085], [-108.03737802693281, -9.148806468112909], [-73.19989445708752, 43.079534840900614], [-19.86701490111212, 52.91494475509976], [-136.27635449187895, -11.971714657628961], [38.84957891122271, 15.24729301231278], [9.407823904834993, -77.9825849523564], [-88.86587064537491, -61.37069040407512], [29.434305916460104, -88.79070416610857], [-98.48117866423901, 69.4046240489733], [95.91150954420199, 79.65953533417695], [54.485643743967756, -76.6893320983547], [29.044019308646387, -7.2464931889546635], [34.01612556613803, -70.2140743478235], [81.15082580697494, -60.26282240030352], [96.26390522112528, 49.094652574163305], [146.1343395998681, -59.25343393179706], [-69.77355433167803, -0.6044653885152051], [161.96762624814326, -43.01933200359299], [132.33682144882934, 3.638048204143609], [-88.41258719772891, 41.08047737703692], [-7.931916215883001, -9.519411626043702], [-129.4703668483624, -16.59146450127598], [23.45755077078797, 89.53176964884486], [88.4681657751789, -86.09583620683557], [127.07432739380634, 89.97174396632839], [-0.35200660396448313, 0.41123665357874817], [79.67801436717401, 62.86991471532588], [138.6230309416951, 21.748776149567966], [72.35698587295911, 88.97249614098232], [106.56933501809718, -18.68539170964131], [144.74313724656454, 56.12600821248544], [-138.38995650041926, -28.293158707974303], [60.79274215099148, -86.99294957085343], [-126.7583328562243, 0.28606504210565653], [-53.021050755041315, 39.50144159284643], [136.80860395505135, -55.658625656815275], [-179.2254950095092, -80.67977992589876], [-141.63132395993236, 64.63836840671509], [-151.91442642950875, -44.49186176428368], [165.9999295800461, 23.34292515386316], [-147.30238870357022, -36.68774905688845], [-127.73898324710092, -3.2745561752937657], [146.63667128019813, -89.54341389062897], [124.63986096928386, -66.12869505978674], [104.6098635874893, -53.125579143165375], [-65.8701648647626, 36.27437782534392], [142.70302368083324, -57.15454899407345], [-34.39449729294441, -83.99929121332643], [-2.146449894026743, 58.41655186643879], [166.0437851785099, -61.55156881392991], [122.62571004189327, 86.32552536172571], [67.10348259249312, 10.778255573095471], [11.774155510871216, 10.612848708020799], [-169.22803389701232, 70.12289006816364], [-71.17880900889558, 18.908525794654945], [111.42224432835856, -55.920754065514984], [70.79037492949854, -88.80247965331493], [154.64236849855757, -46.964711815507094], [127.40344530756221, 15.087297985587202], [-84.35708170886484, 32.8715440552122], [-44.16203707119982, -71.28379581170206], [-64.15982724198844, -14.643491269494412], [-99.04570224398243, -22.270771198120535], [-84.35177702707149, -52.41515841586316], [135.5226258804663, 24.111150422907052], [122.4013503374279, -61.40705502737195], [-164.05842095365173, -42.894902853935925], [110.18267269992369, -25.290729011542425], [-161.8909468971566, 88.93946713975512], [-72.7955121083514, 77.51724878143021], [-62.68832295067761, -66.70480557878437], [157.98417682369973, -78.47374832145363], [-58.239430480126586, -33.46740142402269], [-84.14307165361136, 56.765555259755594], [106.49143311552757, 4.238825168656111], [-66.86320735460755, -23.03579211624762], [153.21614245677398, -70.85667529206336], [-121.52299398694598, -20.367979669279954], [-65.91736541948605, -43.519277637555035], [-59.76491323702504, 20.702930951481235], [76.07386655301627, -35.15165317113716], [-17.068897322518115, 55.10981233634199], [89.97967806040624, 85.50028229526318], [93.60388151612516, 56.341119293463905], [-21.143064822756344, 27.91340543540338], [135.02456038175652, -18.772156331194985], [159.51750679135435, 9.872567828058937], [81.73660873399591, -59.3722413584013], [56.90605082863496, 53.22500827575717], [13.331248343990296, -13.17184663410002], [104.9665749254588, 74.25965100136034], [60.67721357733972, -86.05951796610829], [43.27002825226878, -80.2199083510413], [-105.21914361915563, -64.55624336760265], [27.06175590392408, 35.91522436459202], [73.20144671715713, -62.53686450802686], [-167.17530026803252, -14.002473910292132], [-40.50577709555899, -56.26592792954262], [155.66602129300406, 9.60693628379136], [-117.19251294192426, 32.552447827291516], [-3.6231292107112445, -52.89967171133338], [143.04432926077556, 86.28408818617672], [37.667119628164095, -65.46543693925904], [-174.70044748255793, 18.9188060842308], [-86.56039254877965, 65.24117925489588], [26.244491138399695, 60.746216628083346], [-62.49633059713558, 22.96441100665423], [-38.279879697767605, 35.708159041919075], [-29.859165064640443, -67.99867073374281], [26.988059585724898, -66.3447903577529], [-134.54511206419093, -18.343614698997328], [138.9634291387454, -19.56034039036394], [-127.75356802368961, 61.948146802078895], [78.98230041126338, 24.977829974951486], [67.24685133004871, 13.78321713818388], [100.86886469126553, -13.695243977084445], [51.64011976633998, 21.895212521671453], [31.479723451865603, -31.998626471154267], [-24.47939721183576, -76.7462839516292], [154.7152378329841, -5.236715207883806], [-177.35192753360798, -71.2243342483648], [63.0767632581508, -20.724987625111208], [-119.76099835385007, -54.59624747272743], [81.37748098065948, 40.67697222391854], [-158.0419378488012, 73.42315728882528], [-33.05909312931773, 32.19332406028764], [-164.53026213006078, 10.842007601920137], [-78.97458666172946, 60.8168873748714], [-126.04151430426667, 16.71731341539576], [-66.42992111182116, -32.68999506091423], [-49.63089381541164, 9.728211103416488], [-173.99549731064104, -17.720560001159065], [60.18141985285786, -34.60963636810676], [-100.02126690540979, -42.17466140500296], [45.45539140981826, 86.65356080778298], [-18.69083687929904, 23.59502416395849], [158.79024076828696, -82.53184488042078], [76.44304718318887, -44.01961344936719], [-27.211005363934746, 86.80436936565087], [136.59742539608578, 42.25576091285393], [10.882502235659448, -48.630454212887585], [36.96616636468743, -60.70534318089499], [-140.05651907410135, 22.15099744395278], [41.455841288066765, -25.764873642125163], [74.48434464315493, -6.319802066525986], [-98.0573353195687, 10.410419467101267], [107.1283959795596, 36.76133867304663], [173.7645286441876, 50.21319501687947], [177.00632056125903, -45.349310167296615], [-155.4757829024077, -39.395244384883384], [-36.44610499186616, 12.898302451434782], [59.91387642544375, -89.78295616502349], [50.839605774676464, 25.99000364879263], [143.60960630229536, -55.89668204944696], [-162.75548944643535, -23.329499818898025], [42.26224571029128, -70.14970305264019], [-154.36431835556382, 79.5395778174768], [126.10489524043058, 50.02278968333181], [-74.03295493898919, -54.13684221801287], [-157.33972756044628, -78.89668598863062], [-51.1133144627034, 9.288927128028446], [-87.96010200930706, 36.839432808260725], [-61.14861441562002, 86.30172401448871], [50.155934793974666, -16.390866700546752], [-11.408836156453912, 15.75951290530519], [20.172204514532925, -27.403885229341576], [-80.54701099536057, -23.857142660051508], [-75.6468697916709, 29.082974449051562], [153.70943886392442, 34.13594432891127], [132.99748625011432, 86.19813435726519], [153.90391258506435, -85.7618560271479], [160.0037172987851, -16.08699921216028], [-27.278234018346907, -62.61584513718689], [79.60431488190326, -42.98927029276011], [115.82185254282099, -24.572769180514147], [-116.60934276894272, -69.66618793972954], [-64.40128200039352, -46.48635606512493], [-30.902202807019144, 42.881839566994394], [26.255060641347843, 67.02114689920099], [2.8352914129914453, 52.81144789635402], [-141.61059025053282, -34.12501577707027], [126.97908899763644, -77.37268467781057], [65.18744428560818, -47.30124672708737], [-175.42818488504633, -78.98762976450242], [24.708830139233513, 55.562170263177926], [-160.96207528291677, -64.73140075787241], [-18.10845792936803, 24.977777243045566], [5.6603796341951895, 9.938105556397861], [139.81202415139083, -46.3368543477563], [143.53304951151108, 41.87282466238883], [43.3610717001398, 53.599872438809776], [-144.2947900462493, 11.558316647806075], [72.54172658405973, -59.952971934811586], [-56.103190110025956, -10.410923864013064], [33.031187560851414, 2.2830394585151037], [-54.33221814385025, 78.82117999179154], [-172.89795307375144, -66.22277633725658], [-31.223727100670704, 71.41268573409316], [58.461199577460256, -82.35074724311751], [-37.27513000132258, 45.35955308958441], [131.67434000742657, 17.882598630820755], [158.3670064306003, 24.905302452172556], [-62.04968190082815, 25.90043873945546], [107.26842784801599, 15.873432212866927], [42.7186975806514, 19.86999107814998], [121.29434066511425, -65.27968933679864], [169.46702312531292, 66.39351474633997], [-164.24525732802664, -26.591405158759606], [8.070317652925754, -61.13187775284521], [83.16559112523059, 15.985580340045464], [-15.65347450978929, -47.60312431558937], [128.97169907402483, -56.04920549869762], [12.51167996440329, -2.6336578201564897], [-17.131913017147482, -23.366752607151597], [-52.49476573865402, 25.49510804525722], [104.52939726732541, 59.326274034263605], [-154.26886238857833, -85.2491594183981], [0.09026810421342013, -71.98226376102097], [-101.31359543788788, -82.54168800975538], [25.850841346513622, -63.20390808543899], [98.00762036560099, 52.77688959785432], [-139.99039786960884, 75.06255094230076], [138.82013720627538, -4.021858817801958], [-166.75552760400515, -53.4829008799114], [-152.0713360274825, -23.421296155687372], [-95.31387191441758, -41.24092892004291], [97.49223693806589, 89.20794447443095], [146.8564445094728, -20.32439941189681], [42.15370936305867, 64.93436152970966], [-89.43476385713224, -35.27817213462945], [90.01363182045891, 42.59116559061267], [125.94377475754442, 51.308846507595376], [-67.83881159334474, 43.91982689717609], [-139.10322994488828, 81.8186280625484], [94.39384180944903, -12.95998619895007], [23.102965746991686, -64.48826530112856], [42.4201952150453, 15.021854018236214], [151.70977243801295, -87.16135803650475], [-85.42458754112127, 68.5626884805228], [-109.9151361985638, -18.865927284684723], [-168.85802241822591, 10.061784774341316], [-43.27865801489928, 7.3203018586119795], [132.26902565398478, 42.81019167496095], [136.5696724551229, -56.18830970266111], [31.07763268417265, -31.484160070930574], [-48.461846905012095, 35.24927617143239], [-27.065918865966523, 34.6031988544744], [-11.999379625292992, 41.420494641939214], [19.437702271559303, -67.98831687258341], [-103.28421430763369, -28.66629686429993], [129.42261843057656, -42.41933313284635], [166.41233543857646, 54.5626126657113], [-10.828834500242301, 41.3776457892996], [-172.3805348947638, 21.78681524072113], [-145.49295257588463, -25.545876032738594], [-123.74798809910652, 59.29321609974117], [-3.1030664082828174, -80.45509868455935], [84.27846930834251, -38.20149370312744], [162.91657608519722, 78.71269770198366], [94.61284535034876, 56.55849643926076], [-85.53134117489049, -42.68972369870149], [36.397078582599306, -73.91126821201763], [7.861576690523835, -30.52752640526193], [-35.53457625172715, -38.75102976237947], [50.491438010143355, 21.436734721747506], [-27.972551032458178, -40.79033826580057], [-178.54592799197582, 5.0835849108757], [-42.27366922616292, -16.0927938076231], [-13.833532826991624, 6.324294818515583], [-14.88078264854857, -74.13699061831365], [-9.672910686010656, 84.42691335175137], [-154.8576881595994, -32.83331104156189], [43.09963886329764, 32.4925991704118], [-6.116127406757963, 10.707222697741008], [155.9547590060455, -46.01234347902877], [-51.281607257881404, 57.767390675686705], [44.65458035877405, 2.45957537603378], [92.06268879248984, -49.28076177669758], [95.4568696828687, -51.69799410176309], [-4.207286528466696, 60.77581914126456], [-97.1148327349769, 38.61460827628135], [46.75964213092932, -6.04912348159421], [-80.59022875181428, 36.36646106693974], [-63.7427170952009, 23.910605712596844], [23.328724002428636, -22.263972933045373], [-131.81287301289572, -2.189900168849772], [144.57743764055627, -77.38127318338154], [-25.96106991794229, -5.017537925998998], [1.6765940778619726, -82.61175965456361], [171.0454736263547, 89.24955917175426], [109.68767964865204, 24.450966791960674], [-96.92733525510397, -24.857303213555436], [-105.55963781699548, -85.98710785288891], [-122.02972298937308, 0.907984636473862], [-11.294679821975961, 34.76393312596514], [-97.79372775248825, 13.239684509088292], [-31.195246998743265, 72.23621657890646], [113.70799961856432, -60.432084744225655], [-69.72790882514639, 82.9398643294089], [39.09364472041017, -66.80671373660087], [-14.528902413064486, 12.321914424116208], [116.34089316676332, -38.887136134257666], [-129.82686868264574, 69.85278649171242], [-79.83046743622049, -70.03271896659933], [-175.2438724059897, 77.72575893874473], [65.63666865403984, -10.635973463829632], [106.19903403988735, -17.768925392037612], [162.66364200734017, -85.93650785202571], [-137.51132867472654, -14.483684210828752], [2.6266668269880444, 13.834694600953217], [-123.89303262098245, -8.487316766086366], [-68.85749379060402, -42.033064475722426], [-156.89330259728726, 11.505976055933388], [65.73364567038837, -73.31355051855553], [36.87496333982024, -48.145040976011686], [-52.12456107276352, -47.15874463605105], [81.72491881300661, 65.9998964221388], [92.25501330607527, -1.892966024707552], [6.14655937001892, -51.64933124885638], [89.69135004591455, -74.7091246396079], [-118.02376894596455, -49.461954101151214], [-115.71170352862369, -3.858152966267787], [138.2768620142617, -62.38135308966031], [-173.32161138001587, 57.630437743930074], [-146.80130913121823, -38.48560037513821], [46.06886799868529, -36.6608625853589], [154.1585351957514, -60.29216468306573], [138.87703821209882, 7.459645531888328], [-8.628770927200966, -47.71538943074142], [46.39385394392199, 49.95242243502722], [-29.759825654707637, -36.958088767031555], [-114.8202901919396, 60.34227659330801], [-22.48852936261151, 21.619978159357576], [-123.54713869343597, -44.530437349398575], [64.93548469240972, 43.35821356908589], [97.21800396864202, -54.34774860011642], [-157.9001044896813, 37.17453510458873], [-93.19007140549323, 64.69034716820263], [20.202760399552737, 14.468824721966339], [-51.213388728463116, 39.11157086593279], [-51.192255205567115, -89.88733849686312], [40.91969599951342, 11.122221064706181], [110.41971646239008, 44.27914020915184], [66.85377114742839, -4.188406339508739], [25.709050677134808, 82.22841586556771], [137.57640122318045, 73.91138137411193], [-172.79919595163474, -45.51574188057631], [114.12125261557277, -16.06602052105515], [18.21011765750681, 83.64525323216445], [81.72301746701812, -37.688500953471085], [43.27793392024856, -76.9097526770897], [-157.13776377682302, -2.8506193856279927], [-10.452512001926344, -60.36073417586133], [-170.7387631220023, 53.4455477244514], [54.327987606214364, -25.641220262360505], [-158.11236387240038, 60.72774119260585], [-10.626786821569327, 63.60413926915235], [175.2341831014885, 53.95952932284837], [90.55343431381365, -76.32378381130799], [-131.7103540428262, 38.90957449586962], [1.1799530746343034, 83.87378812132356], [17.389297924394125, -73.61422434342911], [-99.48865001491234, -86.19896872803761], [-31.70618343452153, -51.27717783021147], [-31.24430842624499, 78.73232406427738], [22.53081656457855, 86.91892836705627], [-74.56283017459745, 29.670743137527204], [-26.402065352865502, 59.91601783204508], [-75.14200470303686, -28.135855031828605], [48.14577260630819, -57.84692554464563], [-107.26386105808874, -65.46887302453746], [47.23862717108222, 32.07581445183687], [-132.1346116223143, -39.63738306981287], [53.373792216616486, 76.2354974915888], [-101.0160653881309, 4.467669330124173], [60.41599494224846, 4.05994963936156], [82.27678828633341, -64.4436321984256], [-97.7290075835304, -73.22446627038715], [-121.46100617936993, -79.43168876176262], [-42.14602339336445, -21.831644379546017], [104.59026985516995, 10.95874743889658], [-60.69385910674751, 4.345570335290603], [24.76578507421225, -12.38121400748211], [91.21520698313684, -87.43126274815032], [-126.16909064742862, -25.651612681771816], [-28.014813214367358, -18.7890392515239], [-13.267042034362655, 7.239829711169472], [-9.385270073699576, -0.9476689041680242], [-130.6293780081637, 4.551018989857765], [-175.42301939000464, -51.631014506912585], [83.0874755488775, 79.48775602830523], [-63.644823454285316, 84.48341328437883], [155.72625055591038, 58.45049245094225], [178.6347943509024, 36.59302282385277], [-110.58797079230288, 44.639216276611336], [-80.68733629249559, 14.12885663143106], [-84.16840806434584, 23.21645156162107], [112.62821152549508, 2.231025223621499], [-24.43272367021698, 71.05991434785017], [-9.334731071300935, -39.54045497954524], [130.31429184554054, -82.04395461473656], [-67.31096637146656, 4.07613722103374], [-108.63723332440318, 68.31829459491695], [27.84638794863003, 49.5347316884006], [18.731568081105845, 16.912879759662843], [-44.73851903284882, -67.13291435317153], [168.97718577159873, -36.21386449293703], [-4.884231402834356, -6.525865007121632], [172.55090948259223, -84.72154784604425], [47.77093401275082, 7.87983777050147], [24.46816905445278, -3.2712768484134003], [33.48161541122853, -41.7509299280445], [-62.59566061935362, -10.707783475739966], [-0.9292299683363048, -38.98653544454763], [-111.84258531118633, -19.014919615070998], [87.48733630044525, 73.16545769698281], [-82.35286796982243, -42.01251083103952], [165.87239944765594, 67.46574698246458], [-159.12753670808473, -17.8802876067546], [71.2288445670445, -78.45676511807181], [117.24170181310751, 86.5847808681716], [76.20689733960171, 50.53691411124468], [-10.83357417390193, -39.01544728350331], [15.220881196569183, 74.50060153246494], [-109.76388633636876, -54.68168106756122], [-164.01288261228493, -16.783546036125074], [154.31857105496053, 16.222146826242284], [-59.905348646560945, -61.90670556244699], [48.898534443430904, -75.8505189389727], [-59.409111807846415, -20.624274857369684], [96.86151135337855, -70.24963376579802], [156.47202517798982, -71.45049178364899], [84.984980101303, -33.16705535628154], [-2.3255145498418184, -70.34249631315616], [167.53482692339955, 40.27598871041236], [25.57414133993511, 78.66408131993511], [-163.3845660079714, -59.1691433337319], [129.5527232613004, -38.096242996935786], [-44.20156133004009, 5.073357191951278], [87.77444687270001, -53.68892846490804], [90.63400049767614, 75.51958212488519], [-160.53599037321965, 52.24804428801981], [-76.15728921195642, 9.698589826450306], [-106.98876028023935, -70.66100395113254], [19.736623506302784, 3.956002488463932], [-75.53157635542948, 14.981944164471868], [160.26879514297192, -5.685558093150007], [-87.52626426202477, 44.53694383966514], [118.83360338795504, -32.44924174489006], [117.66144037541397, 52.57463771941558], [23.798826046058466, -61.263528586704275], [-65.53869477630923, -52.44969424470392], [-157.22466926364797, 19.059997032256074], [28.26224439925621, 23.369673281506763], [37.728109219028624, 57.722873733171944], [-107.38539255268451, 53.773150408714564], [41.42219014619701, -70.21710056547296], [-164.03614974614464, 61.52003313527248], [46.65789885905309, 77.68415619126782], [-52.903677453008704, 86.95115597416704], [16.60838395376775, -60.62548820454176], [48.565150839895146, -34.15129191116907], [49.418217577481236, 89.06458108651309], [148.44029016607954, 52.24567913181401], [122.98065528648075, -61.845279132712186], [108.44229040929305, -79.41299441474173], [156.2106690469191, -12.816376592058084], [173.14618501238633, 46.28586876196959], [3.177613546191882, -41.67370670765994], [-151.42862829848312, -19.240078855542563], [105.16074629551854, -74.1687516358235], [-28.1907508050934, -6.244201057506502], [-21.38151271747762, -42.704418088461836], [8.798924686866041, 4.79011991613155], [83.83307464534107, -16.696424925182505], [-138.3424331381459, -2.641268833474877], [148.1216420019135, 58.31990511116254], [-57.966681104032986, -69.5239168000788], [-147.17675869511658, 20.214192404271927], [54.676468034027216, -59.26301915592544], [-64.40750503836189, 89.81779487449782], [-156.94529412068655, -75.65919392632037], [-155.27719691886384, 38.42488147277146], [-136.96656935442522, 77.44362937965722], [-44.06021651227083, -16.573562455324733], [-115.16606103220741, -37.50714163780364], [124.48811133311197, -63.71709661081147], [48.34723968653664, -46.716361678005796], [51.01840313270707, 34.34323361390926], [-44.78684628366854, -72.81990722678145], [-177.28548566502312, 62.4896346925095], [125.34447801018389, 48.84552095163756], [-114.98096604486932, 73.60396783382873], [86.39382432703123, -40.929045834986674], [115.3184768783038, 68.02482405248476], [93.6041828233532, 20.306699032729195], [-4.681285278053551, 25.704536529109866], [55.09589920858002, 43.96753720064284], [-148.45391705317553, 58.03818276599982], [0.453125933018903, 38.12315920100413], [20.208072703686682, -6.005479584962714], [134.2220358394236, 53.38318062344732], [72.64064218510191, -37.68753969994399], [132.99140236802293, -38.844940509610154], [-25.115605247007977, -60.298525638136276], [83.0668688802355, 34.72988848461614], [-164.7132523195184, -12.331572771551835], [-98.20595435031137, 65.12809020330411], [167.6867810697579, -75.98670301524558], [-119.28577092877762, 10.0454401776362], [-22.462747583011247, -51.89232681340157], [61.07477291643952, 83.00611908083273], [9.61290656258642, 12.977943085612687], [107.86957199378949, -49.58458181125391], [176.8648391459544, -20.884679344641306], [-125.05376894271012, 18.01317603693269], [-117.77211602552048, 75.43018484395625], [-36.33178082545594, -19.03873030449382], [20.498576089882114, -65.94891258298784], [-126.71354230532008, -6.13230550727716], [133.8256449482511, -88.31153042885404], [-149.1533928871324, -61.39969328344457], [163.21550364266537, -13.43691479369257], [84.60085674899955, 31.745051142659403], [-126.59021673992471, 54.66844830754092], [105.40238517625228, 25.815706002013386], [40.604993051156804, 35.97948988852156], [152.37156221625935, -11.092451718122351], [-33.04567486168439, 56.76034583686365], [-28.617625260020183, -4.023713038542027], [-63.987132046425245, -64.31604115468267], [-76.12879285899902, -74.54845714341253], [47.75892098178652, 78.64786093412148], [-165.25281799529768, 39.97599498493094], [155.58358321126008, 64.48537744895336], [-0.30694340373769613, -51.47014376465244], [69.02782799627347, 76.71367658691018], [120.4951864743906, 63.03268280761823], [32.23309463400732, 84.03933150517906], [22.79902086812183, -84.69346524090832], [-165.45364776438436, 48.01340275439155], [-149.52591603809117, 43.569940901395896], [-175.95213143101586, 24.020762099957867], [-6.444129097721483, -12.944160044403556], [9.066276488686267, -6.007425814514833], [-130.97741773934897, -87.26031812914195], [100.61262706619486, 62.58659989939986], [23.89296786847457, -60.28771818281528], [-40.29766778625793, -57.59730989424102], [131.25039731554796, -64.72143675525506], [18.035999800863785, 2.5769184955906344], [14.04333523217761, 13.77791558593088], [17.44965785211854, -40.77961358850661], [62.690178717677284, 47.39657130529115], [64.17858533295345, -26.99912823024336], [-37.87754583509554, 70.49811081142013], [-147.93836058068567, 1.291031805986389], [-71.72655704911638, 73.8245868607638], [-139.29074046484604, 64.16965905999898], [-7.448375869478614, 69.5979540866976], [-49.005844096474576, -74.54782391279416], [-57.943073264973506, 48.147078760999754], [111.50557018394706, 53.63031289076696], [-102.47117909664672, 85.44279730678171], [23.865773209110166, -77.51282206723893], [-38.37935876826752, 68.33638659036671], [140.2010117586021, 72.68434225534833], [112.92437595640735, -67.03464372350149], [81.14250272901506, -59.25309678431733], [-40.473673696503305, 48.6213403406538], [-46.52933222725661, 53.57608008202416], [159.3950723622475, -10.73583745952563], [-97.88955046796053, 49.17647843831566], [-123.69614157645309, 70.02723151232284], [3.726306848704395, 86.12362166111537], [27.299602185307805, -49.1919362089275], [107.89339879198914, 39.62743641949959], [-148.95576213555833, 88.47331629447987], [141.7689130024043, -11.501859902787261], [-169.99623851664037, 50.67943699816545], [-132.55152367246492, -69.73458554624195], [78.3766259885495, -72.95641875750081], [-10.32313267724791, -29.1437252818885], [145.06425115458, 47.127096058518326], [-23.243468184381257, 34.08375206069806], [-86.97897466681289, 51.02285356365728], [-41.56657439271791, -30.82581813187243], [-74.50406491742264, 25.426755229638932], [47.46071925886939, 24.376979955493372], [-12.18552020242039, 20.182910086571745], [-137.02906805516216, -70.33841207938214], [54.788440417362914, 23.0744431820742], [-14.439281580823327, 12.74296607505985], [50.84084148931644, 41.06269040506086], [73.8772572465007, 20.081994379830416], [-172.80503513454028, -21.646413226652616], [-163.1005133947627, -24.421122672544836], [-172.56141783007584, -54.827518994502206], [-108.44638888907468, -52.18788764032328], [-157.13019754358635, 26.339039475574218], [-129.84610656148072, -16.879606210758578], [86.89844200234151, -42.90653501192775], [156.5418724135658, 66.57058559475139], [-22.22441848484225, 61.76944682919167], [-148.76495470877038, 41.94551003705121], [-62.662762870936305, 52.03953611940634], [75.66504125387928, -23.786436911880426], [-32.602390404893924, 32.71529287535622], [-80.92739658936563, -64.1480881976419], [81.27663458702693, 85.94473759019937], [-163.88120308977284, 40.66823754704839], [-70.9072049785822, 9.047046977599846], [-177.71350329110612, -28.93802889159433], [147.9313505149014, 57.649839391357915], [92.89299983818233, 61.21804318455115], [167.24193776721006, -6.906251770263436], [146.93241415351548, 14.670634438604754], [14.40064628067411, 83.77263996354745], [-63.57642100473758, 36.610797982764694], [156.95087455105622, 28.331410845912323], [147.82641186455328, -68.44141535184349], [-69.04794945731403, 24.467055835378616], [-28.524364003950396, -18.38717338240055], [-74.35738613490453, 14.976949981478551], [-17.637393882499293, 35.998610469006444], [118.42979358819476, 87.6839966085704], [-131.03080175389644, 67.26801491699008], [-111.62549137417274, -68.79952318665967], [150.42184476395613, 43.26418043879696], [34.41118380445311, 50.414281029494376], [50.42735056793114, -50.91346875456769], [-83.19034695599927, -89.11068547483042], [3.0507335995615747, 73.80178799388777], [-176.5067513688822, -78.69466023071325], [-42.392140671414936, -21.07257268943867], [-117.57259128262683, 64.66625757454004], [86.16349431882584, -41.77759164210326], [127.8733982249602, 46.482642984769704], [90.94785727489224, 54.73117633906775], [-82.93350454832223, -57.925935948622424], [-162.57804961765606, -83.29894481800525], [21.178698858862354, -61.40714444242407], [-177.2847167727133, 73.27801333809863], [-27.266150066170177, -20.108260608061606], [51.843675194525794, 35.597343611074066], [134.51317532075169, -4.0539565907359165], [-92.49602581395861, -7.429616243847139], [162.74126092268438, 2.6616719128548016], [-57.09671868700561, -42.49365138644726], [85.01571121918359, 12.989120290676901], [-136.05280918234172, -26.203262750498677], [-30.77067963611001, 29.950440833483004], [-47.51032405876668, 15.09501885755193], [-32.89878763126854, -11.011790728572294], [-38.01845986664691, -0.4448879532424854], [-133.32132246078146, 78.15936080242547], [-38.77831774918665, -28.9641434751276], [119.00664746005623, -15.974723084952846], [-5.217774429485944, 23.20796316887889], [72.80083642003838, -55.939676299969626], [-119.78231803588385, -14.883622591999416], [28.96804054868162, 85.80998385766982], [92.39041161696203, 66.28506872877563], [-43.3058533788639, 0.6047632225057153], [-72.47440983262493, 77.44837528453695], [140.88773842746474, -29.519289878424804], [160.9868933614412, -37.45650781906945], [120.56728679503502, -52.81947327076892], [-49.647217305236595, 24.717856308765192], [-176.9881892369032, 47.52674013328186], [57.6856732730504, -19.18085164149188], [-116.41651488821118, -49.29786024132807], [151.17979756966702, -60.71404401578233], [100.33566876540458, -88.50409641649206], [-31.743667355318408, 18.179567642129292], [-169.20956408739406, 32.63810074496936], [88.93260354743519, -28.85476965497689], [172.83007421332584, 54.68155447951722], [55.84641643298289, 49.83252397203932], [95.60205732496063, 58.07363577341614], [-45.83632659244177, 2.4200614113842844], [-137.4163910088122, 65.52053543487925], [148.0514510468281, 9.09568167047234], [-41.68044447954293, 40.60173233351846], [-75.62735462046604, -57.66046912609182], [-138.45455986477526, 12.188261047440175], [83.6674374001218, -41.16381966958153], [-173.34800337233855, -28.297936319859094], [-29.864485249926844, 50.03022155883226], [6.579409405154832, 50.89463649822645], [83.36981328361003, -62.26445011074575], [139.9588025006471, 2.398392967158376], [-167.31728935231638, -86.87339203560748], [20.471931399883516, -76.76663307723103], [159.1854433710849, -39.76749666353367], [63.89434278919403, -70.55060643256412], [-55.88166316665997, -18.952485552216054], [-107.57872244287333, 17.718495016461468], [147.84299564807114, 34.8226985080854], [178.79033143569703, 23.962955364988705], [92.36107830024105, 84.99233987268971], [157.72098385985967, 67.78040768978141], [16.483488146732785, 55.778126763570626], [98.96982634919364, 34.94466064197723], [68.9607130920927, 60.44291856389216], [111.69768368733787, 72.1713766702935], [143.42564177726067, -12.70055299968551], [-51.26775263734082, 78.50993097449876], [88.03142863285566, -0.13628081165629968], [40.53247610869462, -76.60372193512104], [-132.26396636940927, 40.061411452715], [-115.67133923289408, 20.36575920746182], [24.66353991756252, 81.66451094130682], [127.6623154082391, -66.06895902913816], [-51.962019461188866, -50.858352116840095], [-171.57361998173013, 13.041699971367171], [59.563273485294374, -79.9613523546273], [-173.49376158113637, 18.823320110667705], [-84.68982107312563, -29.335123345424286], [-39.70357370725178, -77.752862500342], [95.53654756097421, -72.41943676763883], [-58.65707907746324, -85.74116019425689], [23.693268485264404, -44.64484908591289], [42.55449298355018, -26.28440396686541], [174.51740375661268, -9.901981839577596], [-163.4290696674288, 89.34544732989039], [-52.573974103251075, 47.43836213825457], [104.38198866514732, -4.909892141851859], [-68.06226029183233, -2.3782887867499847], [-18.554633627126897, -25.071452057356083], [-120.29706368744763, -18.260573445335815], [128.88480485304876, -47.13862645584498], [-45.86976436104328, -86.32470072776651], [136.77625582302977, -45.256690114084634], [138.02520899280634, -71.17843436127546], [28.718057634187232, -84.10760921124414], [-78.94293965510707, -46.01805887127429], [-45.61808308858702, 61.38811554514366], [-53.63555811771114, -15.984680639521422], [34.24187726958068, 60.19520323897911], [154.2355728256049, 9.916996748416778], [55.52849059066544, -6.226176844018649], [100.11596004102596, 1.610209569068335], [-95.4033207702015, 4.999652233357739], [137.58480494234198, 89.47631652376847], [160.94851248719664, 48.987593206001264], [-89.43345068969128, 73.0591368786734], [178.99349887952405, -21.758793837220733], [-63.38610039405425, -74.5869782773328], [-100.41422066937241, 88.18429283838879], [20.193051485776756, -9.40292632018824], [-43.84529837995445, 3.2607216535163186], [126.57280856549194, 73.50882265326801], [159.1261821717712, 68.62888572948319], [-81.5117391326013, 12.893152182467041], [28.60242617714526, -34.38742530641842], [96.97747796490563, -27.788487272902938], [-168.54299988498497, 78.59822437003504], [81.80361161730657, 56.751037386973], [-49.66226530362084, 33.21122184575939], [119.4671974272671, -74.68212547527038], [-50.99599890897596, -76.12431419787922], [-76.66248725181904, 38.74979884990824], [127.85725933417586, 65.67242381571954], [175.18069227418533, -64.38838076041891], [168.67506779034076, 36.79622032582364], [68.43988744778717, 54.976327492843055], [-113.68669370657987, -23.250932266035367], [141.0185906701906, 14.054940077508382], [100.76420434253147, 76.20596166887564], [60.95688443835661, -71.78686448193486], [-155.4546287546833, -70.18760174464558], [28.533229783824883, -16.246991041247423], [-131.82129041325453, 7.740583318644694], [-164.88690693688267, 49.19518348463567], [135.70734248272635, 46.91618268539897], [158.0002615400685, -31.11029375375781], [-179.2039425658611, 40.4744686980702], [110.24248570078367, -46.38435587191689], [-25.368934207896963, -73.60352300434637], [54.17494090481868, -76.48882026021221], [122.71330690374178, -72.25702974980501], [-81.5473439272973, -9.921217657002428], [135.4696764170438, 31.677236810978194], [-105.79083677379339, -16.91977405593356], [30.01835525569919, 26.16284368406594], [-37.36991211427344, 43.80607410818576], [-109.77038224806714, -50.275760537058716], [-51.7320739437782, 8.931469572443964], [23.50012508238173, -8.334365343905251], [99.6273755808262, 13.946232342525375], [-25.328695050777075, 32.880452316035125], [27.996624710236453, -84.51273440854915], [50.09901571490137, -54.64065010402158], [-59.84090569495465, 2.099072704806537], [-68.5760648359447, 64.82184785800348], [156.276705156184, -4.288973635206492], [162.65986588181158, 53.830574211368905], [126.82539735950498, 84.04946223154143], [153.32201202737673, -43.31820777373183], [-77.00087451465306, 14.271852281628398], [22.167871281719307, -87.52491981998874], [132.32902034638371, -47.66809319899481], [-35.084626418275995, -70.78701633799906], [-132.18205711624077, -43.081859989750114], [80.39676585829565, -13.635694144252394], [73.24589221567285, 10.61534201197154], [-149.82365694732724, -62.02697113862762], [-36.90503638051137, -29.180692939805812], [150.1442255352908, -35.15762929980029], [128.1743862798161, 70.40012422882216], [96.3947117638951, -51.16398777603473], [-94.50616346861251, 35.15253425636206], [-87.0131425287218, 16.96359797681684], [-48.75789241522771, 4.2371339027477894], [-151.22180875610724, -64.71029683631208], [108.28941415301371, -11.801422463054712], [129.0523109653356, -25.039776703098923], [39.95657145812775, 5.531732459579972], [128.34700373406528, 79.05601119603827], [-93.14587853707107, -0.06709059907456183], [-28.782984926751745, -2.0039199584905587], [155.48058165839268, 89.50757995797684], [102.0454042349421, 57.45588693888624], [145.9715381120155, 14.17872527730653], [-8.824126169736033, -61.324379929254846], [-42.944410731320914, 40.778299015927374], [165.54763231750167, 14.397247401788249], [-136.85997198635863, 87.34680829593826], [-81.33099220636606, -85.41096080306406], [71.41564729545259, -2.0150616677089106], [25.61976539176074, -76.43639074191454], [-150.7187993021819, -17.680128538606716], [78.60809668563824, 70.2513976043018], [-23.95001478433023, -11.849122220024189], [168.6980685942119, 20.710260710657728], [29.697775156713526, 60.18435813725025], [-106.45588613467544, -17.8116041579843], [-14.838721095886447, 76.01804691895234], [132.19566576018227, -77.0095978128293], [68.5003823590768, 84.39458290926238], [-141.38948968893, -62.85070180284423], [159.7028690354872, 57.016857678113354], [-68.26550051646417, -16.63242267597107], [-30.058364489435625, 75.4721010579775], [168.12478347352913, -87.08911708183454], [-13.45290478228577, -60.42391597900573], [146.55188054190393, -3.0968924437182244], [82.28411713210599, 26.104495270096404], [145.38955223297043, 74.72261293798712], [81.51667013901074, 75.39277784714425], [178.84678806680216, 16.221903616441466], [178.90782138793978, 69.89889247804363], [-43.464725311845314, -14.902743757588222], [-158.8936782098088, -59.31755771260684], [63.654160358834915, -16.535187283193604], [149.50029259932032, 69.52566001289361], [33.93103253240228, 46.00685190338747], [-139.2336825336241, -30.320226135881573], [177.8197413190653, -87.15399088496073], [127.91674083485974, -7.821115275246946], [93.99438423300543, -62.451993623337586], [177.2446906187889, -33.04963049146568], [-162.50552662900736, 9.403530948605932], [56.852052890017916, 71.9523103004608], [24.096609879844372, 55.031909682321036], [112.77391065783205, 81.95222897357674], [39.40892313327244, 82.98060965924131], [84.57514158167938, 28.538253884882504], [67.31948743443155, -58.006806681858784], [-50.38253350993248, 18.689786243726097], [-6.710072495355632, 45.01952361397174], [-14.681305161015672, -55.96528698349366], [-19.62632141544382, 0.2234663879356935], [144.67771846177592, 50.53116331174715], [-104.45755303809955, 81.81766191661151], [-36.25564360661994, -84.23750834162848], [112.93872016656438, -85.75933645515602], [-125.05955837384238, 82.64254491201243], [-10.184705267458485, 69.27116707331571], [59.67553480848787, -19.175378520383358], [-37.56556662831856, -13.925715841211087], [-93.54905706282749, 45.65173530264844], [-114.0705390593162, -28.864223041921417], [-104.35886521391537, 52.85722072370291], [-158.7544374222898, 27.81140423615357], [-141.7804305397849, -1.3289420867166646], [100.57612686516268, -44.271008776084756], [-115.30504232370973, -46.67021566266927], [156.42130562047842, -2.5050900803211062], [78.56442618304348, -44.427704277329816], [-44.50356168395992, 41.236718561245546], [113.59144635090507, -47.36855764180334], [117.17104075852022, -38.26131074572253], [-176.44062663560214, -72.4387703098548], [-157.3199774087972, 88.60112797714132], [60.55944017498935, -61.99645774567068], [1.2846778542537063, -23.918803698919792], [92.51856657540559, 17.0123348532826], [15.520144887614462, 50.93706039555664], [-86.61788811649345, 51.17479279187363], [-160.18510343213478, 38.19896277451168], [-151.30502388908442, -30.10860843654355], [8.430730147210923, 73.88795520252003], [-5.741685936123702, -45.59148713792591], [-148.94027039281258, 66.10610512441643], [46.993853984287554, -3.943887080977846], [-177.24570791635452, 83.38795902774633], [33.548098483585804, 40.21013438845528], [157.02624381221386, -70.08747453608431], [-7.955016689879875, -55.63332387107759], [51.327136126723055, -6.30192571630984], [-164.42564788193366, 13.391325209736458], [-61.52200266045682, -61.103949890148996], [-70.99251652670135, -37.82323173954194], [102.18996501896666, -83.85467211644068], [-143.17276217919868, -75.75156924939388], [5.6075058558720325, -22.700949374100084], [29.301633826883247, 3.9274526584020686], [26.708252998158173, -11.925543406595667], [97.79622031801894, -44.99587883641717], [145.63148630037168, -36.237365535934984], [131.2364300409098, 35.569859887098254], [-23.49595157358341, -57.85388714401752], [114.23820338809384, -53.38547464392222], [-2.765309797428319, 44.24225554793896], [32.60378098327141, -50.30543906631949], [-30.617189376785873, -43.693615204162604], [175.05629646141156, -67.34006233479396], [-6.0177869741090095, -36.32485500352517], [60.779150689505926, 61.914150125763314], [-116.789388509017, -41.70131373497373], [175.11447846652877, 56.2066092344958], [-94.69584560870663, 68.46131587104585], [-159.45069174640142, 31.628490839783186], [121.08718951018936, 17.64277688283945], [-36.99845895966141, -2.046685124005543], [-69.18345067840843, -2.8353809058108004], [-81.7754076113928, -57.26182835708847], [-149.67897102176266, 32.74292268318381], [-80.34689321464751, 87.76017137347068], [65.23372861928021, -67.82380811562378], [-105.03943645404743, 88.10741529074798], [19.531082160418045, -43.15216886803676], [73.19452244926079, 23.770678613732734], [-31.12385946752161, -85.99736648971474], [-145.98484912279952, 57.35600870312455], [-28.531267788555432, -25.58683126688388], [-128.75318835336867, -33.665550407284954], [-133.40308094284876, -72.28768466712961], [93.72561017267145, -50.85531728786113], [-136.0149940164809, 17.469695415429534], [-65.0246925887729, 71.63896398582534], [161.38948845114535, -31.898488782219594], [-30.80226482395032, 60.371359361368], [-44.73504200072636, 76.99152988570654], [-149.3089857036872, -53.85581725396084], [-153.70221082821752, -50.655281337534866], [-112.31134238943076, -75.41264203533177], [-162.08300807777147, 34.21892050384577], [105.34546300673205, 70.90173315904285], [-14.496958508694817, 30.837542647216623], [29.179360543784696, -11.770252044803438], [179.221085347132, -89.4528391720722], [-5.648283456685954, -13.043581816433708], [153.01371626989916, 3.8625519589282042], [-72.8274531008046, -25.461208088976505], [-23.01069879561951, 81.65020000014506], [178.16955175811088, 44.026149207617756], [-13.095026145422644, -44.0135578896309], [-110.49732953409855, 8.50692711536385], [-55.668969286805805, 32.145585835001185], [161.41856914342904, 23.83513114290013], [-166.22922059567838, -15.171260838503745], [62.862731646753254, 34.06507339529159], [109.62818397468746, 49.58372205028078], [127.80769480709279, 1.3679236409296225], [6.8567185078870185, -27.576034192143677], [52.36870751733367, 26.521456748963534], [-4.70830663868643, 24.78247791828139], [10.5004986567429, -65.57868522494151], [-148.2793583136601, -54.40038589812141], [-110.80637476228762, 49.144672254449155], [-93.30635518732531, 2.5394840211281844], [-63.756582033393336, 36.77410202910751], [29.36659176013623, -84.24888043962693], [-8.285239519944518, 48.988073292755054], [76.07772345833355, -26.382817845073077], [-20.979618243806417, -64.99891380672689], [-71.31675688487475, 14.072316078251156], [-60.630329318062415, -43.53533181995938], [-144.93458841887698, 30.121997596739384], [150.0027765282025, -14.52639959042099], [18.082029332388593, 56.900203884575205], [-67.00481748663178, -30.949842593503085], [-48.30107697687204, 56.91920502554165], [132.5304560261265, -48.65434743485508], [-149.21547480693297, -2.3167995333851232], [46.438427365966525, -53.13822614129589], [-121.4418183643768, 3.4910177108521934], [46.15243910179935, -10.869615926413134], [-120.53304962918807, -27.90259877571639], [91.42747020255153, 5.234607087151746], [-167.94582015959202, 17.122964132410928], [-116.43326140913213, 13.38615426144614], [-143.59021053899392, -8.857280219676893], [-171.8487371644625, 26.014722734523307], [-37.178966504602265, 30.030892900461737], [-137.40459909889273, -49.674323794144144], [-84.68767428594296, 4.037659135971312], [60.30410940676071, 19.222352626867455], [-81.3830136344191, 8.355706114805566], [150.47966653985617, -48.15051500941369], [129.63135069360408, 79.0630929136461], [-154.8846096984015, -33.44339351299378], [-47.45965543911359, 9.855991560420744], [99.37487992027226, -21.270876179333463], [-3.3828713942546873, -37.40420149716655], [-137.53399304490435, -53.79810988643423], [-139.309603688855, -25.73910995081129], [157.92163486019518, 15.786838338696443], [70.29465076380971, 59.08240710930655], [-1.3089010810529889, 88.2208299478337], [-145.67543236258564, 48.40563567434808], [9.574009712604612, 86.53728342308062], [-136.09891813967852, -27.123264241604986], [-173.54376111649663, -41.79344262868372], [77.17056669580728, 28.003395764457125], [-34.713445736244466, 88.9830097942543], [97.55687273461939, -44.679410901814066], [122.083604046762, 20.470941226296272], [-77.18108118895447, 35.120347788191665], [5.200390308648615, 58.65289544008399], [-44.50509244519385, 43.50835482340264], [-22.121278767463828, -65.14657750389942], [-58.328224723821656, 17.27142031780136], [151.69127145373588, -6.379561759033194], [63.00109356978634, -52.04749329609426], [-146.03758810000363, -86.06961735880367], [-176.644876755525, -40.91568917953617], [86.84149392109579, -80.13529875007667], [144.2692975209059, -70.7792097384472], [80.56057774668012, -6.7493797626702], [2.568795411299183, -75.17987320926477], [29.690036234047383, -81.92398477825711], [-64.67667055551803, 9.371086139888103], [13.829928470184205, 3.852908222556417], [-15.851185217000463, 22.93680216288086], [160.43065654761517, 12.933295944264888], [107.16665236769386, -72.93081551848371], [56.27215965247402, 5.44001283714985], [88.600783230908, -28.983556185562513], [124.63273622881977, -71.72071143216796], [102.88921734411737, -60.18672981255891], [169.17436685926495, -64.24149529267171], [1.1724764598731596, 68.40277737960169], [130.11702804714932, 77.69397820380914], [108.62582831110095, -48.93111763095455], [-44.00461896369801, -82.60821118899479], [144.46835924297096, 10.449236958495693], [-134.90541839212304, 71.0677436448427], [-65.44389778839398, -77.13115596163743], [175.18673342350164, -3.5277606605059875], [7.250503678993807, 33.407992436633464], [84.18606741016174, -77.36746001870019], [47.549294305755836, 5.927382408815154], [-66.2412215493782, -40.89882667190931], [-59.94601509061035, 84.68595005319007], [54.485106460825385, -63.14163335586446], [-135.11640277461146, -48.47808003737933], [-46.635835761160116, 63.389408748964364], [77.52147225995716, 25.899049983719728], [-140.4708442278964, -52.296697800428234], [-93.74381112379052, -6.611847676427316], [174.78716987499917, 13.99507854969087], [-85.69734268985772, -79.79080202014391], [-168.01585802127025, 71.14188099316809], [151.48914055987944, 21.998328116403037], [-35.98240157939989, -79.14779732284934], [125.77178273490254, -31.08322941202413], [25.583425307169296, 75.87757815855264], [-66.24476714933326, 88.14638903375722], [179.13090567259962, 84.33352308638501], [-159.77721710127085, -66.39177909007383], [-174.70871737406048, 74.58764105499016], [46.25991845817665, -10.605185593025798], [-38.10182803684618, 78.83306268362428], [-34.21480400370737, -20.661012633369612], [79.52980363118982, -15.624040470142475], [-59.10083843656742, 66.83930074676115], [-23.08110270682637, 31.113467322962236], [-162.34957065974982, -64.72478611831448], [-173.44678727723482, -14.922898075395125], [50.68060836548459, -52.3716761507223], [-165.06432451605306, 88.31090809505432], [-125.51189841537628, 60.61480822700518], [132.19456737596812, -18.49006778228913], [178.13998418502055, 6.989001636168544], [168.8972667415148, -3.031281635907548], [52.876161842414945, -39.093123860603406], [-109.48409982986172, 29.26272343780971], [-127.38517436331682, -85.03195860678225], [-31.925260663830954, 85.87445586354403], [-136.70620355468407, -79.50172995837116], [-162.13491068898284, 54.363381141613814], [-162.0102176402035, 18.291157756780883], [-107.38886228734992, -49.4947947036693], [14.072735422233373, 4.95699448531719], [-76.4587632181877, 12.080962484660454], [-136.59657692116875, -34.0149106226218], [-138.43713598058795, -4.684117929098637], [112.87081206194779, 59.816296727436004], [-99.2660366412838, -41.43233735298823], [-18.126639934556586, 88.6993714787507], [155.19996776114277, -25.898993965042433], [-42.28680811833925, -81.51207450676634], [-60.374190465866356, 41.29871669051222], [153.51018374941697, 17.758935866086336], [-176.08370757941395, -78.36057881840652], [-48.61357579834957, -27.431124393596434], [-33.13878499612673, -74.49148813757031], [158.18021890471633, 18.983549618043938], [-123.32584406597792, -74.42410053576958], [5.744354251063504, -83.35942128127613], [4.424956565240503, 18.736686282437162], [-67.53814256205705, -60.32924396450874], [120.83746297800404, -76.4937372651277], [-122.14595451979451, 42.40858652058455], [-29.054434833066367, 35.97207089534248], [40.07558479208606, -87.33826500565273], [-2.8454608661881853, 16.121620744441305], [159.10916073115413, -25.833255923075903], [132.41844151050466, 10.346265564340232], [-47.49564801918291, 54.308231000711146], [130.0552263860278, 56.89766244490601], [87.47696774753844, -32.20610747552799], [-20.22929041784912, -61.459215944723496], [171.46385286056667, -5.848581724026971], [5.989438437619157, -72.21811393390081], [132.7614301119974, 73.05294764403277], [-58.39423069305767, 75.94135156280973], [15.828295404178094, -47.79212863531271], [19.997548201147424, -6.636434403719904], [-128.36886042648635, 68.5089647789515], [-6.164435874617613, 13.792819230577201], [-53.15834648995078, -89.30103066058365], [143.680433697671, -14.78067844705504], [120.33721343301457, -41.03848814360424], [-159.3515769624674, -69.78752874590138], [-19.579970417213115, 49.181876459137555], [-15.730828957491063, 46.212613952726606], [-84.24818313480498, 77.82658327419041], [-118.0230968613513, 2.9179095245388487], [78.9879930048579, -2.2822772941437286], [-69.67518876469558, -8.236250965646384], [22.228688022291756, -3.390834828268501], [-89.71677178264385, 41.09532676782759], [-16.768097179713735, -70.77755997335768], [-10.560781992679127, 22.330372577662928], [-160.6559146561762, -40.91810597631468], [-18.614391335093252, -76.5144295475709], [143.81239860283205, -18.609837586717234], [67.13501797637383, 78.29589892226116], [166.2727192994401, -34.19512777200897], [-66.55659595124712, 10.379665251112208], [-113.24093150863276, 61.371727401181104], [29.07097615338664, -42.22338796448001], [-142.23593038630312, -26.998332613723694], [91.40996234204178, -32.021539356507], [-132.70387648253237, -49.62863777216374], [-18.580290685204766, -41.15817450595709], [-167.165783021556, -9.863653315789094], [165.81967830310487, -19.008174297741583], [39.83479784958693, -85.36949465756187], [103.64672039050504, -8.574390591242445], [90.01206559841654, -17.8526993592996], [-158.29841160293904, 63.72286379508509], [-79.08385924051197, -7.5915519655452], [-179.72687335291843, 20.574687287938694], [89.56074542004129, -55.03805058131023], [-109.39427008315947, 70.14757883589569], [-164.67390405155768, 10.925228638630898], [-149.20139275853455, 52.5827282813917], [151.39127906114254, -44.2366453180916], [93.91463451511628, 61.39154039254969], [-13.957567092137637, -41.654070412132945], [-65.02393627405085, 19.54385301175932], [-9.011949068526048, -26.43418888473169], [103.53973893837573, 3.731270844657084], [24.473683974623157, -66.79524276386135], [126.4303942933601, 66.68059879815604], [36.69791650047947, -34.98745450069055], [-63.38094767126549, 89.1325743452918], [165.99842747714564, 36.31823155104753], [107.36174352975854, 48.84821224138833], [-12.674553660345147, -78.4021096749506], [105.18748055768769, -2.785833420961943], [-102.42127137302772, -38.920367341437924], [-15.023283188319771, 30.416625749949276], [28.775935591287585, -24.091280727278736], [73.04778843448662, 6.481732906024922], [146.68563043955396, -28.863007565871968], [79.40524337973953, -77.31924137596671], [127.20372070032582, -7.874157149770982], [-19.179417729638306, -22.293756792784603], [108.64729157076435, -83.72174420401517], [-96.25877379694059, -58.75228689681731], [8.883071435053873, -50.94512462503671], [-33.06403300473996, -87.57207097998713], [71.75985887884757, -66.41163578331769], [-91.02843659213262, -34.401341128217226], [-7.896319003896828, 0.2398896232489145], [68.26386346850354, -33.97985147277986], [-22.677720418114244, -76.43922564567795], [-103.97059362692377, -11.660943111824364], [15.212815901793704, -41.072796969459915], [50.154761331118024, 13.420008266639641], [67.63596765230253, -48.87474312142144], [-5.0029441944666075, 82.86788427059346], [-161.25816138462318, 1.1636379231334626], [-3.6319727057378426, 79.74919815421178], [58.16646658322118, 64.79929765837524], [90.25430898843219, -16.915994683379285], [153.29887773207628, -82.03082899568804], [-79.1121562238874, -22.960232629670582], [92.56206049342475, 63.36421673053364], [124.89235322500929, -6.329123358804667], [-6.96502796241341, -89.43343148555721], [-73.93231424097533, -67.47782260824326], [38.8108862464765, -43.64507103532406], [-15.430140155418117, -74.90529783821552], [-17.969118728787976, -68.36809497814325], [-156.69444109936813, 62.95284809818778], [107.38762525484022, 73.95622609150026], [-51.23878521613357, -1.2479524394135133], [56.507428388148, 8.131092648883955], [164.86886369959257, -1.4073431802772207], [67.3441247624599, 53.254930117114085], [-38.62916059195916, 74.03157135612159], [153.76106091914968, -34.00282867702569], [-136.49402081657763, 65.87164088591622], [-170.26951724886433, -52.36142411075054], [-143.44475198097572, 62.74201782167074], [98.1886187657596, 73.49447920327272], [12.17883490074982, 79.14791771083337], [-131.63799256802173, 75.26371912167099], [147.73925442253625, -86.90801338904903], [-47.84461168286964, 49.59142283991075], [103.0613069257614, 19.212915833641844], [146.61722320474973, 35.55255794542983], [-37.25516978001671, -70.8479888370099], [-37.827147408938906, -74.60568209501797], [-10.796973377365333, 78.97057554032196], [-168.73207907427437, 37.56041904264712], [-88.32306753471275, -40.586012469088544], [-67.7073530011754, 18.282444349676837], [63.63452395250835, -20.131377508955683], [42.892805207413325, -76.35111440458728], [-135.99575793041583, -4.1705064687739], [-21.024571605148576, 86.51812956721632], [-96.03439886049651, -45.3583215525453], [176.82924299418454, -88.32774480813492], [-55.03662802894585, -2.68006082693542], [-13.040013680715337, -89.27136097793328], [-125.50183029753948, 74.94837191867437], [-44.79427922210337, -39.40583721944521], [49.746297490309665, -41.37112329920038], [157.03234391804386, 1.9086848277992985], [112.97591945657231, -46.49000100301808], [104.95559677103088, -66.73173828032623], [54.43049347599893, -64.38733696860038], [-31.05089040550179, 72.89806650673958], [36.68539362135515, -47.01531649556597], [16.606311084792402, -5.860052968163476], [-112.548159498998, -21.074889050756784], [101.20423730727265, -12.455834723103738], [133.65581464255771, 73.2505613405852], [4.6825586652323725, 66.76337429084137], [-153.59578649351886, 18.44284414070645], [38.37910902984886, 33.15004761109093], [101.4461530291309, 12.041776911202398], [-74.24660950901789, -40.37258622902482], [-159.34434673423453, -12.489851731267159], [105.40843120629425, -20.58696212839253], [-30.335743462288303, -60.34465718674463], [-76.75462827579366, -21.784638702324695], [-58.37891221971036, 77.20856817468866], [30.915183810687125, 61.04953820904448], [-8.094253792852202, 79.384966082543], [64.2591037670772, 67.67031756554921], [-137.6882993365475, 0.8311463430940913], [-85.2747574359624, -62.942397624071866], [107.88577751734289, -55.43255211282669], [56.73246494869103, 54.71869621564609], [148.16676125798082, 65.41974888113002], [46.83863685236969, -21.20169062927921], [1.5902820594998612, 57.271799940595976], [-58.94289621383943, 1.0588709251991357], [-59.43827419014693, 1.2807588466487108], [104.42622360885058, -33.730602657688465], [-28.683201765117392, 20.45153339194538], [-114.7448574749476, -87.59686008434106], [-117.27958174135114, 73.49928116420385], [-4.846804279916839, -58.385372666094504], [-104.60231241213646, -68.0985168510062], [84.30359742711339, -82.55096751228429], [-107.6147777142094, 31.58070456811838], [-135.06458184625552, 22.483177428599742], [2.8910353631171493, 9.922248806174956], [130.3774295322544, -12.643415878372553], [-93.81398534116022, 15.026909263330985], [89.98049084662186, 67.53803998468493], [89.527315269564, 25.180293892898668], [123.85518662315202, 34.85134928922452], [131.1161617774378, -36.68974106901574], [-8.1603943239175, 13.829938832606246], [87.70717793794606, 3.7584879581260644], [77.36087641281337, 11.509902536435327], [69.29121220110476, 2.646253569441952], [165.20033855637422, 70.79833892384686], [-27.80792029550468, -25.403077841532692], [-132.76189892747578, -19.466450937529146], [56.63033352374343, 21.0170683320427], [42.74993129063145, -45.89606664246003], [85.77534468426543, 59.438850029204445], [17.986227208993064, 76.23644588025763], [32.66231740586078, 17.74779485575625], [89.25345462068756, -10.45850814328254], [31.854132674835085, -48.17895184559742], [5.523896336398675, -60.79102025859082], [60.11645950413825, -86.70069965792524], [120.70908226722973, 75.39644711252018], [104.46321038037523, 7.242997713905415], [58.04995103944164, -43.511194307815835], [100.59203631272604, -88.30122781752786], [129.78618823565, 49.55031546963932], [161.95972099830612, 4.167951872841709], [-10.811143896757951, -20.658339931521056], [138.8164405936556, -76.68686947482004], [-76.69573407844271, 33.92832760737775], [24.834602873715532, -9.501255749807704], [-154.29736458374308, -7.910502595283333], [-19.367911756029656, 48.53170446795872], [-40.08988548187059, -23.668161109406356], [-115.74444111734408, -61.19284402530213], [140.11959756779402, -0.18409142602951345], [141.56530693084107, 68.7913114685063], [-16.52564622450417, -61.47754938464509], [-124.78964271711658, 54.123765382242595], [71.70016445943489, 33.672681890781845], [106.69152487390834, -83.6101617059827], [21.673265061004763, 36.418494254171044], [-0.30961840772665283, 43.49656952434398], [58.59927574678473, 69.26248952585868], [-80.82268415087361, -46.85053982850719], [128.37664351975212, 87.85951934259353], [24.99627535351963, -55.64159904489517], [102.85938378763782, 18.307943677906287], [-153.5672474606118, -5.79872105396539], [106.00388944002799, -79.74566208860806], [148.88827343854462, 63.97619995089186], [21.530826775567967, -27.22186336159705], [-103.76533842202664, 77.27980564484758], [157.95064273023925, 53.42954502698661], [46.05961106824607, -15.877294992246206], [-115.93282924917287, 62.90355257174442], [-144.53478944226552, 9.584813641156167], [-140.15390235114336, 67.05537166104651], [-83.79283270373934, 0.49418962388539267], [-164.50450213240862, -50.694841998316925], [121.79098796322877, -64.50956115696704], [85.19736864195211, -17.71267106825837], [-109.14558437446378, 73.78588293802741], [54.41631530577331, 82.61101532149942], [-107.85483558490297, 38.86957486577159], [4.057688665850145, 37.53805276089365], [-1.349676002733755, 2.378760237341231], [65.1323739193562, 29.255744257856435], [-137.14766120165982, -37.63933374240761], [-82.1684695802064, 75.84528693909591], [-166.8090523057307, 70.77648513945377], [167.90483034411136, -23.570613762117027], [-174.7559310818669, -69.92831034834877], [125.05380011096395, 35.519805420547655], [-85.55034025946175, 30.675939666376948], [-42.17115146351486, 2.519435047614369], [136.6085195316026, 26.435663264937013], [168.03643724287028, 36.59984986339446], [-9.943455139265627, 16.7766181749025], [-86.36609916900686, -9.283145715855404], [-33.232238296349095, 82.33149998166986], [33.703171134547745, -21.868420856738435], [-35.588743645779566, -25.459497969553674], [-136.56573803255108, 46.675845133946645], [97.7256800367873, -66.2896287737514], [113.50896422223346, 18.835736962471458], [-5.668653083948962, -12.993856194028744], [100.29458942213355, -53.706929817534245], [34.49997648198658, -84.30981962893524], [135.16629365515473, -41.320297802660164], [67.55109530115905, 37.81751303296062], [-112.8524992816568, -56.350171299364945], [-99.32287512938296, -30.689133087370095], [-17.635116901441272, 55.18491488620021], [66.37315428792664, 30.423968833438543], [-15.897371506483804, 21.4604372029047], [18.45155313434386, -87.6222317161476], [45.31473270145037, -71.88617299105935], [-152.7116568836978, -33.8954261805046], [-42.21934473513077, 52.10735463805975], [48.64240803985682, 28.742695574354478], [84.55638687644526, 34.24411948509234], [60.4460773010633, 75.37768981890544], [126.45225573618282, 26.263784341089988], [164.38461177345127, 47.49105173005046], [-111.65102228162043, 86.11671054387068], [165.20235606488177, 47.36845148525471], [74.22932484973506, -88.49710321545969], [-68.09309020501911, -16.8835019921005], [159.5554665588193, -6.706055035322707], [86.69864431551937, 22.700428936560783], [-125.39639489763731, 71.8939167629498], [-72.31306136405827, 46.421776763267346], [43.63766407308063, -25.547150490293124], [-3.936355848288242, 62.53727549821282], [-21.79673728095871, -81.33668639408712], [158.57217953601315, 58.91821509466293], [87.24860149935652, 59.90205046950952], [-80.520840540147, 42.74630657872591], [-7.257929081221297, -38.583800569117486], [70.66129949906315, 84.1123591591788], [-9.476416871351487, 74.94450145010497], [-172.03022020903524, -23.47525568731467], [76.47511705683914, 29.808800848742756], [-142.11956299593024, 34.19434040026105], [-3.9113649917045024, -53.77083204948677], [-134.27119405706844, -63.093301565249035], [4.645049312611329, 43.27114680104866], [49.85836358439676, 59.41552293608203], [-45.559179254989395, 3.2666952161466645], [-120.82660748640305, -11.416669285071933], [-13.296989645095767, 4.872426205923217], [153.82794219257482, -60.87249716274596], [-47.63140334228698, 16.368198878487835], [-164.30778570067778, 39.91396781189599], [73.99154482718208, -30.24507954843074], [117.75383527040664, -8.215113127951028], [-59.89307343477495, -89.91225664815083], [-166.2689079139145, -41.28866556892879], [41.83409652429204, -72.90713508972433], [18.698433116506212, 40.415563034195245], [-5.7341688965798365, -29.203390772774807], [-61.16142571447779, 70.10738717299847], [92.98565129194442, -64.4715336422361], [-60.94627098605119, -54.05167991978709], [89.61503224019015, -24.192781203207097], [-70.06913982683383, 45.074258886372824], [113.41785845772732, -37.0648275084425], [157.84703504168607, 28.76282592977063], [-104.99605867597153, -71.90615225822448], [-77.24137221334738, 85.88198947148038], [25.981812110942357, -70.32292185490044], [-136.96886322883987, 79.55901551515626], [49.27553980341024, 80.24198912827922], [-65.82158239014701, -83.18643058079078], [-24.445982418075243, 68.00776358718645], [49.032810235057404, 63.01648522044179], [-86.37982592118435, -38.9233347708223], [-102.4718710605421, 46.666528126547895], [-14.100730406469832, -65.90514391485969], [-142.3291019412538, -0.48201357846930915], [148.55431805133142, 49.598321902827976], [66.62241127533308, -67.96219414167477], [36.651121308579484, 2.662702313291656], [-115.62390413492876, -37.67653659230077], [-139.48109101737654, 68.97716923593751], [-66.54112191157431, 1.2783260625092918], [-44.82358295533045, 70.5375256946106], [-143.6129777798442, -65.82096299701328], [-71.20478449957838, 49.47344980443722], [-102.61235863005267, 54.52487008806364], [98.08319922584657, -25.752481349860773], [-39.762098045952214, 15.433295779644762], [-78.7089697138782, -39.09923723348097], [-30.3673025968697, 85.019702106662], [120.13145411485768, -50.30842153066634], [120.14199705542583, -26.182136991670188], [158.88027395771195, 8.043653677884794], [-6.439485100653064, -74.84923455902874], [-23.672544339103318, 18.869506704762262], [-86.28216479731462, 72.39677520932196], [-140.39983521778834, -12.956984533430006], [-9.110060550768848, -8.983755749327894], [-2.519291533744541, 9.395946467214639], [151.2800174261037, -1.1398347056806424], [166.44950679628346, -30.966222815911387], [-15.74314801356878, 24.11274784914462], [-155.46236356403512, -26.987006649110082], [-90.35860128102459, 26.739644774650703], [95.57377511706972, -41.96008315793277], [-138.69840725573505, 57.28880973515861], [-39.62265604449467, 1.1578140908243384], [-129.0527501014068, 43.37213755986595], [75.90075977833756, -74.9833281323838], [12.562561990233192, -84.71303428352836], [-162.9920299657451, 34.16759512720113], [107.61621659918889, -87.80613484784087], [176.26950777418904, -26.21012524018227], [-76.00125937190225, -21.724982306130748], [77.33892768876798, 76.1698341132151], [19.537723362909745, 79.93602315310261], [60.9049720268863, -32.834481049592156], [-29.634685611931122, -11.340218449127818], [-30.435966441228828, 3.3676029845973687], [-30.088433325731287, 22.130228688258743], [10.141170890598081, 17.160115083927856], [77.85095231549144, 24.074489717243917], [74.77811135770406, -52.179347190230274], [55.46195269964152, 44.978192072557995], [-174.65323966508575, -56.863858150583255], [-39.56160579758148, -36.18812485772318], [-118.88682340712819, -28.988446956346753], [143.5599894253676, -47.47267088086331], [49.080870930539795, -78.78971774911216], [70.5858299560665, 80.02518518296785], [-42.51496004834205, 72.63762203757824], [-95.89144183978274, -72.75974405229366], [47.74370256581815, 78.45527111142474], [106.38952015231267, -52.66474214461969], [18.532760636468435, -73.97918195725941], [-158.99609225158065, 38.21338334754265], [44.36060272157518, -62.50382265271039], [-143.00621848389986, -42.57831499287822], [-28.773056845402074, -88.81396194858957], [17.894247943509445, -45.02836131427572], [5.124592767908114, -76.88688794804187], [-47.099185826167655, 1.905683319633007], [-8.813453022572277, -78.14882068472923], [58.05897127153665, -73.18595037320077], [-125.26245653285974, 63.56073130991507], [148.07002829072778, 32.070189033702874], [-156.0972598231387, -66.56010541099057], [88.5304106416062, 69.10175652784926], [-110.16505355289522, -35.386383711006935], [75.97087280568678, 59.8997046150101], [-88.05391219619557, 62.96231571082049], [-149.64406635462166, 40.43579721256687], [66.49904532710431, -17.758134823874254], [49.758878927210844, -32.03756710352139], [6.036035094908314, -57.32221781836373], [-0.7679302667939858, -19.82585789723775], [-133.1818799468154, -18.557826894241348], [-163.0912830331547, 82.90192154597298], [-81.09675568231826, -73.10384736626197], [-61.448952024367344, -74.75235313751358], [26.983493918859445, -88.71292603586119], [67.56882554534637, -20.947083595944463], [-176.50355097633332, -29.984021343703354], [93.45101333684138, -89.43852950666219], [-102.96523886501876, -56.233027586475835], [90.51392025595608, 26.25951136434931], [-107.46100069642476, -53.57103889735009], [-161.02514752082106, 5.807314157424188], [-170.03112904787415, -18.946327799087932], [122.42106064385274, -16.34563930368959], [31.945282561089492, 6.678085077693594], [-179.95992497368115, 71.21027993197501], [176.1147914236234, -26.503470792020014], [67.40074682853995, 27.011085250413824], [51.999429472673555, -82.34946102171024], [-149.3931116615874, 63.83131061275966], [-15.774218875287875, 37.966853370428204], [53.47858748092917, 64.41479233712236], [-111.89849945766528, -7.8488220155635124], [166.53021735588442, -34.2418919955068], [-102.17358720178669, -13.007485020723584], [-45.3944423795176, -28.059825554380463], [179.37771921527846, 3.952398641380337], [127.9319212191559, 88.8733825556144], [149.63143685988643, 55.23621386790098], [65.46177239234152, -42.94918040510057], [45.372459428071146, 7.622083579409087], [-116.122366594838, 33.77767623063866], [172.68720518885667, -68.4408715510499], [-148.85371376819882, 48.83830130348165], [-158.45574076907673, 34.39378633163758], [-71.08586887685013, 80.92715212404603], [51.13079998032969, 8.175262340147725], [-121.53137335036479, 51.17872742667536], [67.5239443639603, -82.23058179933277], [138.0266276465712, 66.5666547008473], [-40.908522402507224, -9.053894619940364], [92.80903715544243, -52.03638685342882], [-109.06028108633406, 11.797697878512405], [-35.160194366952815, 63.13375001071182], [-66.05380102042938, -73.93648378324598], [165.64980405251345, -5.664689079630132], [-126.69213186050892, 19.108015206717525], [-50.64985280451804, -36.56830595541932], [60.79111832551132, -48.09308381075074], [95.65207222579272, 69.60858494187336], [-96.50857745048233, -88.59485728750457], [49.35926027765777, -64.05182716599168], [55.445601386403155, 1.4503241781365217], [-101.2678252931015, 81.26323543812475], [-118.51507664861425, 56.33785638176823], [64.54790146003677, 22.952409055067783], [82.85176150754847, 32.977801675775254], [-81.49433761892665, -61.596727438364915], [-151.75235605436583, -50.099548675837156], [-135.992628326993, 15.06122222458336], [-127.55587402184553, 19.867190724392657], [86.91671341532044, 32.7174232378631], [-104.94182058337002, -78.5317639203161], [82.33312615629123, -63.1129677859096], [-34.27463532295128, 26.81400893653364], [-178.88028535930573, 11.62677129457807], [178.39200035435218, 26.938007346865852], [-69.64627572074966, 85.64403512161557], [-144.63634296693618, 58.92185450361038], [-78.93760355665748, -10.932962774378776], [113.33960995349705, -43.92464081452371], [-169.17984426795812, -65.35222505483169], [-106.79942033812301, 77.1935704386854], [62.60949436097097, 49.00108020871302], [-35.100703919557255, -77.2269033983608], [58.53627271736088, 82.71905526923877], [-84.69214566230309, -30.109125765019886], [17.364084423239284, 35.95296275572626], [-43.72059320271144, -6.608631722385208], [-32.307974485445115, -80.29662958707581], [154.33882772373858, -70.69498838246773], [130.34275472094927, 19.875981359516558], [-179.26967837524543, 48.55512041911155], [145.7216624268141, -30.424290104977114], [-70.40447241177561, 51.74369158137957], [11.516549906340368, 49.977344084661596], [-118.76281175228533, 35.17515554895238], [38.669764149719114, -3.5117397901444436], [51.97517112393036, -26.48773021926352], [-8.062067163831275, 66.58146685248528], [-132.55555256504402, -42.44145174252789], [-92.53359737403764, -51.13918449007339], [127.81108469778805, 87.76073927941596], [-22.280673767201627, 31.615839227705532], [126.45382250428297, -48.0430985980175], [7.590410977212185, 19.926030662076244], [-45.39081056019728, 38.20918467731528], [176.2879193634926, -62.114743050552256], [155.67323520180614, -77.67695876336359], [-34.96515568204714, 20.257968630131558], [-143.36566499227897, 22.674518565519747], [-64.406192343405, -77.51426573463223], [-146.07922461902794, -84.63193039666199], [161.98332453419195, -37.681569487323394], [152.8422625797849, 19.63381262920381], [152.26618278747156, -69.8063504107622], [-170.71243538268348, -58.49793277451492], [-134.13302579767904, 25.284515338314595], [-18.25574934978207, 52.65350104836389], [-127.17998484725071, -2.6346022954499837], [-24.041987895176568, -5.86108758191199], [16.387589767711308, -63.403213902020795], [-53.38135617329964, 50.011341451279705], [-115.03733776414106, -64.91439970247676], [-95.81450322187469, -11.290432149661957], [6.053716303449361, 12.177818764990086], [76.88353447134598, -9.031380090247367], [-156.5792217594633, 3.831137880905011], [-56.30492812008394, 9.891034274008202], [-99.62955845854246, 71.41035517677099], [-120.07586698447875, -64.4739179625656], [-48.39064847710872, -18.679626414406172], [26.51690445387117, 63.01317240855258], [21.102559656885667, 32.250237969795556], [150.31609114465016, 1.5290244010898935], [142.0946648833688, 23.66245325066142], [58.75943499543812, 76.13930128978548], [-72.62290026214882, -54.99676875774412], [54.70487102750063, 82.00595167223535], [-74.57944364386789, -38.77304400795465], [163.98610618316718, 1.3560480655066653], [-153.46941242824474, 68.02772572771798], [137.8074863869835, -66.4793850755257], [44.82138078532945, -47.57379846084459], [-67.55962046390655, -53.401147998112926], [56.74827891067118, 48.50320809739293], [96.9392116802214, -56.256355710726716], [-60.89121513358754, 18.791517849434495], [150.3499780216814, -24.964887360072336], [15.497842244913258, -51.46262256259416], [7.784107778051839, 60.78880260410753], [138.35454493074732, -40.28499338666749], [84.91475005579349, 78.92137222183851], [-131.38291561432968, -72.26272693622415], [-142.8571608975269, 77.86631306105241], [-32.58817167193784, 76.90570092495398], [-129.8130310772191, 43.84910664815692], [-125.33540070163723, 39.13586100922742], [164.61416349965694, 45.17557745780584], [20.068511959908122, -16.783898352762257], [166.57637424714517, -0.5914150573535215], [79.7618930618511, -78.96762191522114], [-95.61899685144407, 38.192359370007196], [16.56010530285437, -68.0982754505289], [122.07125818035345, 45.15468871591471], [32.73469986547171, -85.40177779344573], [-175.55352181013234, -51.746618835194596], [-122.88676238560187, -30.028373262060857], [155.17648839812847, 29.892056097071293], [40.63237415349347, 16.62325378217778], [-51.816979972690724, 9.747912533045273], [108.88143613918592, -10.204733555087495], [-54.204538807537816, 34.53221374016885], [-112.7996872945203, -30.272595616418343], [179.08693996202518, 60.01968229324545], [16.76701174599299, -76.8561978899638], [147.82712238054316, 85.222988660176], [-159.5730687857422, 71.86095669751559], [129.795791911389, -66.07874442389216], [-57.537199993248876, -19.5441453527951], [-39.15851744259087, 11.631977154019516], [-82.07062735015288, -63.54716235930884], [49.384221918872825, -75.94289311193836], [-10.729996013027838, -5.935925500423691], [-79.45450739220975, -47.315034846338115], [17.074766718579212, -79.17744195211563], [-122.98367283945248, 57.42997288014613], [-135.36535843800576, -84.36014520033653], [-45.435913327966105, 11.353721879875751], [-126.17295630887693, 62.776614290139705], [-29.21879249631454, -45.325734029772136], [-28.592974161618354, 12.92414464119068], [175.95016614508273, -28.630712943243033], [55.396491432596456, -88.05520845917928], [-87.03892019705106, 83.91726175619863], [-173.84672032367547, -44.36258292626156], [-159.14899170059644, -16.84093804857447], [-118.2819496360999, -46.04191015563672], [-12.932577045545735, 43.15276277572331], [-27.008668911575686, -60.13552095251828], [173.98982497149066, -21.663005088000133], [-158.74233118821684, -8.547894682937894], [67.52088156202008, 64.16203110488019], [89.07696228973336, 53.19907503539605], [-157.90491012359266, 55.86990871852973], [-56.794358897884656, -1.1698947978573937], [-124.58775086253196, 1.3629018874522103], [36.46755980113174, 71.45100213692918], [98.33621314988648, -67.00595281427515], [160.07123672213842, 70.6045605948168], [-134.86585643006677, 72.32436251434929], [-124.21960820295811, -84.72103165541064], [-161.2072885602222, 22.382033638659845], [38.793538097095386, -14.948045809681334], [161.71038027382932, 0.7319226854053129], [148.3581141591469, 30.047117618121003], [118.83460814654752, -9.318867932424064], [-14.940626503619816, 16.05959390268488], [88.47307272052862, -48.116366390707526], [-176.8868565423001, 42.528936061595545], [9.955188640848531, 32.44406239194045], [-25.49496429976223, 27.93177451490566], [-119.893238363468, 28.491226443266818], [-129.64219569499323, 21.574795510717788], [-128.88929094322376, -12.244302031727464], [77.54126599679107, -61.379035469502924], [-82.42389876652248, -79.48129767170956], [94.9405824919437, -76.84952345171104], [26.54171313316885, 80.87177115812658], [-158.95119536795517, 83.24013111387], [69.44570754491829, -46.27670030440092], [-125.75307657870803, -85.1746055205481], [174.97743958293194, 58.58652834887988], [-109.01999610384627, 46.00777533790608], [32.73721833844508, 85.58939960319972], [87.83486238163846, 5.67956134167126], [-156.7658626544867, 5.308563472054217], [-85.19698874014051, -86.36523740786805], [49.65850869442185, 3.415822274707354], [-144.41066049751439, -11.25319946819566], [144.8165652133664, 73.58439833289484], [-177.84607939720428, 48.59517713363521], [16.03694014532321, 24.419198440026353], [-170.64866859133792, -82.3518978497671], [-116.2743218483743, -63.33731798978785], [-43.93662536460472, -54.80006531163012], [59.844497649183026, -43.57686711530866], [131.5260571576676, -50.26009917758327], [-12.039691457259503, 36.642782945115584], [-174.39410651801788, -44.387017170482416], [-5.420626783137568, -61.78730141795961], [-112.84415957810411, -38.725974983682804], [98.56540114864717, 85.97291160465196], [174.6096086355267, 62.91766784237835], [-164.26706689147272, -18.06862991011881], [-24.13936919922282, -52.77670736574288], [-77.52967986621373, -31.73984044917619], [-157.41125194773377, -27.94813430372586], [-69.49758002998746, 68.08639695885444], [71.83582903463105, -3.039727538508923], [-160.0732592142371, 21.139348305606113], [-51.22184901943442, -23.97196201296993], [-8.82015501452976, 57.622718108770925], [18.885677738892824, 63.3948443210183], [-132.87632053005538, 55.10743239349311], [104.58552549318763, 37.620936873882165], [-39.1743937213853, 9.54055567626499], [-116.9768379602044, -23.10210734605475], [-97.99392859344727, 36.741872485972], [-26.40394728555247, 53.422416503564776], [117.03796393090076, 59.84033708492899], [150.58625948573214, 55.54324099857334], [-156.3286508146704, -41.1295064798331], [121.26783501654643, -53.07274882266408], [170.36938440945298, -16.553899249725013], [110.7405763903491, -77.40947879695142], [-24.021859808333943, -25.359172987219573], [134.9707293654288, 21.887579814860104], [121.95339936519281, -24.98331435452397], [170.47127266908004, -44.5282444543374], [111.45794919304572, -43.935362793043865], [-94.17498851715702, -63.05767406236707], [-102.886138455834, 85.41311892912748], [146.17127820131842, 6.06246808773288], [-114.73192216625982, 80.38363060389202], [-110.32889513272961, 59.452892953474], [-122.56688895685477, -30.05464556019131], [-28.620383054541012, 47.37403939744535], [121.05300616039851, 26.518044190257797], [-34.57304826336462, -70.98046962116285], [-57.708322798108924, 46.8054172594316], [-118.7382281396643, 77.43896838864123], [-99.27840641017906, 32.61859286622729], [24.651234689139343, 28.52842657695848], [6.827972999727709, -7.353085469345251], [-78.48058897770555, -14.488999636496809], [100.04292974109723, -84.97631542900113], [-122.94315356415818, -86.84482917061052], [-46.13084135191347, 30.471879963280422], [30.11332228357862, -63.7155488499856], [-22.374649554822945, 21.15096242685444], [-17.263717243900256, 16.974226079417477], [-61.53010210881314, -12.325787750807633], [76.80101077653609, 52.33718243827999], [150.2177906282938, 5.2999361196149675], [-126.05071130592124, 71.53474488062639], [-155.01043216085725, -8.130382761426818], [-61.32360506424493, 26.366839567307025], [-80.20857032658807, -79.61478544898137], [-92.449632812539, -0.19779253889724124], [23.447773104877207, -21.45688761047068], [-103.5799678699489, 66.93978364823798], [172.55493645999786, 1.3438434823535683], [-141.8820145663191, 79.09966282087132], [-99.85904435600479, -56.63806414796616], [-25.42603723581058, -69.48337311581054], [121.98771779657565, -23.36623230421838], [-20.196399493313805, -72.54903275286401], [-158.85385641667963, -24.88420788740364], [164.06925199678435, -5.352312798846075], [-58.56553123565448, 40.69638185201547], [-96.48431163665067, -77.34672316739365], [30.084868990450524, -48.12745097416775], [39.108798125183874, -11.506586351945515], [-34.37448215345845, 53.35168039513283], [-56.8478991334393, 17.358440214653097], [-116.40616233665149, -29.047513952249403], [113.7849672399946, 33.92390193117912], [-29.47595512011553, 14.55314764198957], [104.86826275716726, 74.64909961834293], [-36.08443403648166, -59.3038810525441], [-41.122701921266966, -2.7599663648340034], [-78.61696944230556, -63.33318041201908], [-69.47859266880732, -75.80948467490668], [160.16648864522472, -53.61788172153972], [-99.35846357755146, -66.31683746203105], [-65.42322648811145, -69.08947490287252], [13.737684911816048, 29.99320705460415], [162.46628498643517, -4.285336988247601], [51.762937736846666, -28.356827353087954], [-115.6651151227532, 81.65723661267427], [143.75525078916706, -83.97562630084025], [-160.58005895798723, 43.27238455673269], [-53.371074438815434, 30.01952339898645], [-25.077866192744587, 46.02170740597709], [-158.87797924472906, -0.25910839175387057], [121.86599937300343, -22.42352407938938], [75.50943422306817, -86.21777539419824], [28.403938546972523, 77.92468658888889], [120.84638584278532, 18.317425979693613], [-141.97585387396936, 7.527458997788288], [13.917787676946274, -64.01107047554113], [-64.61598854263852, 19.47376925825565], [-140.54842128920086, 29.041244754085803], [90.99935797781642, 40.292666610398975], [161.1481310173939, -32.842770869031135], [-30.880677765135598, -31.35580093718803], [-77.64623435046188, 76.23059225338321], [14.58788710017064, -45.79113612018403], [136.12963263324934, -48.718257298962115], [151.76933586358874, -26.504358651344756], [-179.08025197312554, -69.21861955684965], [15.674542573162444, -5.494649342024811], [132.21818751199848, 25.155520880653416], [143.52844221030244, 26.26720322641907], [-60.465328462124816, -85.28044199805234], [164.41596970470172, 50.169932949657536], [-149.82015869915324, -75.646270558825], [103.80969763710294, 28.608593634339172], [-13.523494802276774, 36.998738045629025], [167.31717362394622, -60.2324116307378], [-78.48689761057342, -72.12813889151631], [39.682565015204716, -9.959279220399097], [-63.34332675298302, 23.232280818021316], [-51.654236274836364, -20.539636625405095], [-58.319841898971625, 38.8141987917796], [-68.02919223032785, -7.5276992164894985], [178.3436342498653, -4.350562938378193], [-144.66327328090813, 45.865638275170106], [-104.10603994892857, -34.87350853172825], [-103.83209358475767, -53.53876342431578], [140.91949989568604, -3.1652700739641038], [30.13249260584128, -9.851275616440738], [150.68122339533943, 74.51023379005284], [20.774875186336644, 73.14207496340579], [-114.15382359988345, -71.56945668524658], [-157.95911175536918, 1.41451180196408], [-86.54144523092505, 0.9221806090367712], [177.62468838882876, 27.443306893771204], [65.2369025928238, 10.72067398905897], [-51.39264724579399, 32.42853751276223], [-149.0852094477881, -31.193724727180104], [-34.685498899248685, 21.064644096220142], [15.11844907217105, 21.507350206933022], [25.621038925939015, -52.04747766112018], [27.92634230706131, -47.181668469981105], [-132.75498944970457, -50.105371459083806], [143.14837186855337, 13.533211166724875], [-10.906796378932224, -47.04520882007396], [129.17458180523346, 8.515011584960579], [56.075850712090826, 73.81311123722993], [-67.40026309920289, -50.03644156503887], [-70.14335257268198, -66.49541654598951], [-41.370372364714626, -29.809123632731293], [-89.0253815973781, -13.567353965654139], [116.56679830372842, -22.249033117164284], [104.04635457161623, 1.1613181755631885], [-0.7271907425392499, -83.12798823872583], [79.2778504099476, 2.119693240248939], [-7.58827704807687, 54.036601900763515], [1.9971175191741253, 8.87541149075246], [-133.2347165945694, 80.05744646649379], [94.73604946679156, -8.680661113650254], [-92.76222044679669, 5.679583295274275], [5.565936063005195, 4.51824570659761], [31.88976335984833, -72.8003905000705], [-142.38137127408723, 38.13250907098314], [42.39386812400471, -11.306296512397802], [167.61715761045966, 9.241475437119021], [-127.48194258771075, 89.92703020581737], [-54.930115910358815, -25.111656071379663], [136.52373725893605, 18.27757961934587], [-96.56731373365778, 17.13961552592732], [-91.99084793419294, 28.460683975936764], [51.89669890160268, -74.30141321691616], [118.77155744749001, -42.70631457760568], [-26.137332289490807, -17.796935059264577], [120.1188534215433, -8.77513654556251], [-36.247079089144485, -71.70941257107039], [2.4351111868043684, 42.93617089536469], [-40.531103694199366, 66.86159208686131], [-150.07189746447585, 19.750555907663752], [-27.288112771607285, 48.90199571936921], [160.17450181515304, -61.751574612363996], [-19.779072009510912, -82.42467483006888], [-117.18487760868364, -3.916985895688283], [-103.81355190924103, 14.07391237242392], [12.299534022626917, -51.95520912253061], [-75.21989673390758, 67.74523461711426], [-34.4865591192773, -62.740095694634526], [-29.5283891939362, 48.42742360449199], [-147.59343273203518, -80.31695011636366], [-151.2601887871578, 66.21863147015404], [75.82278389514256, 25.87822857964664], [-167.16319831434367, 17.081834527287427], [-78.39231217758447, 43.65486864376793], [145.58947180281936, 83.06833893591232], [-39.20478320407511, -21.891421391233116], [104.52244252716116, -17.168950089300115], [-11.672066362131117, -7.900187950013229], [20.62474795468021, 87.73312547913027], [-83.61303145641033, 65.91171046069026], [-148.60650284154642, 37.938741417102534], [175.5277978363427, -79.18374029579738], [-89.16144641024127, 39.801996507788516], [68.56186848522997, 28.747007847889577], [171.77368624561743, 9.039859388515815], [65.5698382136523, -8.330566864828771], [-20.596516955714872, -15.898233442499524], [41.609786652238476, 44.02879274422825], [44.691717448280755, 87.70693942394287], [33.933110653833694, 14.76734143797643], [-110.22832248416272, -45.50170967066152], [155.82755124311115, 65.01273266979216], [64.19986398831261, -74.30079017738403], [65.95387895119248, 50.45305255785374], [62.78379856984892, 49.93139930722681], [-126.15755246833734, -25.13540941211181], [-164.5625813482213, -35.489539406830325], [122.29802705637034, 83.53921292556878], [-134.78572339577755, 4.447347067114205], [-141.80125335315105, -49.984356365904866], [73.62824066991257, 24.844120463624442], [-97.04187359586061, -35.57352078837182], [-59.97240357586497, -17.733792639424202], [-83.31379812253533, -77.99436206578831], [36.426038850095324, 69.45667869130774], [-89.47072474290381, 28.51759411852123], [-101.7143148406191, 13.97671174103522], [129.59969805478607, -88.38283857677125], [-131.06491915505043, -54.09826930930738], [79.61522520063829, -17.07516527613249], [48.76934775323676, -85.9349524464566], [172.86109230412617, -1.836507875161364], [82.91835849526385, -80.52496377538729], [-151.12478719861448, 41.55514763884244], [-30.60534624860405, -54.01804831364113], [-132.09520597634565, 9.059249847002523], [131.03597208011865, 25.68451570832376], [-131.17216948189173, -28.476510471635823], [49.58011133623594, 58.86909190993971], [-45.628793041963895, -58.117018281376936], [-124.31511613056551, -0.3881159408237256], [152.8058950167591, -55.97789036812084], [153.75708290037377, -12.53672652237665], [61.32709282987379, 3.744972750840505], [91.02044470621534, -85.45612945156763], [79.59459707371232, -15.118089543578591], [82.4134269438355, -2.9896299221743794], [-94.33095435963475, -25.12559133797168], [15.456589721343814, -44.00992324667357], [123.78896138459946, -8.514278421627255], [6.339284558883858, 79.80765133851149], [50.18375542180461, -8.582141134641002], [-155.59611517024206, -79.52729490001423], [-31.347240471677374, 42.39423148733402], [-163.46194070334462, -81.16419587678821], [149.80961950180318, -1.245390134920532], [-37.00155939763561, -66.93138820886249], [167.24662279979668, -31.95655662067663], [-53.09758101141071, 18.23442615826139], [119.26108041795678, -25.82556141482071], [156.86096209803424, -87.40249638502725], [136.71713698496072, 85.75193702930389], [20.328288742168816, 89.37031542877841], [20.359376836884458, -21.654698457155646], [-102.59506826996179, -31.04220263610334], [132.9804504749581, -45.0705406471579], [-33.664385303283034, 13.573620450086539], [114.25539306158646, -26.668600669928203], [82.55815044356329, -60.25759231183177], [93.73960420081158, -43.75747895105786], [1.901364555661882, -42.054184029701325], [-123.58114546395585, 46.303442518117336], [107.25859105996125, 3.6918028081273357], [8.690366080393854, 8.39525972758468], [56.218516217840346, 13.829289155570358], [-7.264899928724526, 22.083212305661277], [124.8109866873347, -78.31776019451014], [-23.726772163903817, -60.87946651284418], [160.8971675245692, 41.27960350297132], [-175.9523590790549, -8.443039551006667], [144.29955958458652, 10.894084243488331], [140.79253092908243, 3.027070218882475], [-11.417247920132798, 47.38882215912112], [-37.17707385305062, 68.20496525759171], [120.92477460039937, -34.61306239158216], [3.9115427390940294, -69.22663664841922], [-162.9170509064325, -30.857022517697178], [-131.38572259132906, 61.539744306592674], [-33.571443604390126, -81.25362016738853], [-173.9256522528116, 42.81894281312794], [115.14199307093944, 67.20387446687492], [104.42997304147983, 0.6788916668633505], [-133.07784614563886, 77.82388837886091], [163.95754608178828, -6.067402716668231], [139.1132479052107, -49.87711878760945], [107.19049182290638, -39.65220696707269], [93.67438068938274, -53.82845372678878], [-85.89286433532462, -71.7306710740947], [-120.32066230159413, -30.807117636796967], [-96.96068891784913, -38.596739821932886], [-98.41032656370082, 87.59709384326332], [79.49831673183495, 49.88204814297082], [165.71789736331777, -80.85583220068888], [-108.39005732406862, 49.60295773054724], [109.49301908585454, -78.05330561502451], [69.76075027478328, -62.843054378585265], [-52.883166678327065, -11.376852143052826], [68.79618959800668, 16.90210452790087], [126.66532884780369, -79.37233865731507], [143.7572057812362, 52.30228310445647], [18.915485869932702, 72.10447568846485], [27.5054630756755, 75.55507607437194], [-107.03714070269136, -25.619857974361967], [-108.19816377683094, -89.6849804528018], [79.85357151588201, -10.880137705147618], [-155.37047098087746, -35.02438890134232], [48.10086328609981, -33.637712378703725], [-111.68428684017515, 45.55244676226688], [-152.57853204636493, 11.207272645636227], [150.50674913925565, 14.557778712334457], [104.49989776094273, 88.08258438556396], [22.335447566877676, -67.04285779732508], [153.5698742386976, 20.829913586428873], [35.931731714705286, 24.24653887837433], [116.35936371117256, 2.0609161335707515], [-149.52857660949923, -30.65969279447736], [-55.50624929275532, -34.70091173723122], [140.93565840812133, 6.031151629003575], [99.5727775991133, 63.92780168150024], [-108.50849133070602, -80.3900709393173], [-55.187308952566, 39.51792621855314], [-63.99372725963832, 1.831797704156135], [110.60243041394436, 18.537354471094012], [41.70188898118671, -45.594596737952905], [-70.65598135198412, 3.7614738401826298], [56.68767452332518, -31.556445334184104], [-73.10582235306791, 76.21087505333689], [-77.80051270890958, -46.64011493998085], [-174.64940303844418, -76.8842195471414], [109.84827129241722, -4.97691894553685], [-77.36467786924469, 26.789159868952996], [-158.09366100126033, 74.73285574322482], [53.32274036427429, -61.89333410194423], [-156.24590290848502, 80.26648131270224], [-25.32878935006505, 35.71242847090774], [91.21684308604175, -35.369620052303915], [158.11828660590666, -49.671560027256234], [171.8646526254246, -71.67453987688276], [-157.45351414548244, 6.463985903219158], [163.39217973738184, -80.12111004342847], [-23.65006241539887, 25.178319997562326], [6.465483451970364, 26.550749800236332], [-48.615069131416774, -46.72711713138851], [-151.4805091828122, 54.74193184425011], [-145.9841129135483, -84.07192638239592], [66.38198791328313, 74.5243778823644], [-177.95501224576876, 63.422575753355815], [80.72287683482615, -49.14689748297724], [34.59188445620683, -65.79579400151216], [-98.3256268135678, 29.408438819280846], [26.575954661608, 68.19709331571576], [-55.30135687880964, 8.984447637541418], [-116.2717049026075, -70.68079065866559], [-19.714664073758357, 81.32186039303967], [169.8669412188413, 12.49423260211984], [-145.26142332260144, 21.907684442942234], [70.05810600034918, -0.24258714809580972], [-80.2294828665737, -5.174349906315205], [168.51573729661973, 65.78543826598035], [-148.25945485152346, -43.69706452979844], [30.426525184262925, 50.635116572368865], [-154.09853382601875, 60.71067259893971], [62.25431909667069, -82.98200645161295], [53.054942219529046, -74.01144985689774], [2.777392369318843, -50.1994257314493], [69.81382215337086, -31.49720681351682], [29.680903970665558, 49.90821759119836], [-87.76634453092018, -74.47878799727546], [131.7867145152889, 74.11298900277335], [108.5679794297341, -49.68362518098357], [-46.5289898403035, 70.80705109704856], [131.9118484005144, 44.53551618208071], [-117.16436562130173, 54.4651563910092], [64.17389186969692, 65.57908759148599], [32.27321260279017, -17.86085766436239], [109.53622425568922, -52.460326567393636], [-20.927794745967525, 36.841590197817965], [152.40246060816514, 69.5030608780144], [-17.08337356668375, 86.29442028363779], [-150.37581997694195, 7.811242838312831], [-19.004288633468764, -29.51706840012385], [174.3473227803337, 20.49937162688179], [-23.54420289212794, 37.48312818006352], [129.2971285917998, -42.13700804967943], [-60.128858556147044, -89.33057598533799], [-41.057527649152036, -47.77106796908397], [52.41305551786131, 27.87912180815415], [-37.935601439323385, 15.68626322370104], [-128.36400191359857, 38.1564917594305], [15.511491939405069, 45.77668032777756], [-58.530119726768646, 77.31864079659755], [-111.90505323417517, 48.53666366660122], [-168.94665642448263, 1.233982203907531], [-133.15724361046333, 80.12115452557848], [49.19442368538148, -46.39162581706485], [-62.82790117012948, 16.831899250600813], [37.761371453063965, 73.47869414425887], [86.33298810842055, 69.63831997716962], [-160.6549515078755, -26.564605253186095], [-98.6078817304626, -45.06516405879933], [21.478333563430418, -62.30441326064768], [45.20865591885571, 79.50055832713984], [19.39085936679046, -43.776904639263556], [-168.053921929416, 64.07694107422338], [92.68654638574402, 22.969810213387976], [135.63702550401916, 43.12175588755755], [-134.48919107676315, 65.34536013804465], [57.88073338449454, 86.40436567514878], [176.09635249423843, 82.48938650786718], [35.88518243276737, -52.79530547398913], [-156.74604079636845, -30.763660312765243], [64.82632650063196, -79.75894459881745], [-83.89027221621647, -30.14834822108831], [-77.9934358160697, -42.1021827999387], [150.91389272979634, -20.32005671883034], [-169.71578083778405, 47.83031221484773], [-44.88418754726575, 67.58856612146724], [-72.1573472339415, 43.68317055668974], [-2.5989569593169826, -66.33155304883118], [-21.002375133918825, 5.487182414795684], [62.964426550180875, -27.822058773158595], [-170.70717258331447, 16.941994151553473], [-114.17066696253343, 33.12151075548486], [106.52996928144843, 75.57563076474746], [105.5120367581826, 17.303903654782687], [90.78152900450516, -18.63460873173755], [80.67878296453593, 20.88553076505328], [36.273274916042155, 44.00987343853864], [61.62690503586582, 49.39891233781937], [-103.36486274539267, 84.73831951312857], [-52.69483522543414, -39.84957383941237], [126.23024623712199, 80.47177185988657], [126.73391454337683, -31.796076721910772], [95.33464811794572, 19.246108394247482], [23.93397386979876, 40.5295418063892], [33.24823681092518, 1.3675219587321186], [-3.8152423840177097, 10.9747934216134], [-101.07576941028314, 35.04074511287526], [171.1568423876746, 9.769457310724379], [50.28442692121039, -89.78166677071437], [21.764552219062054, 80.94313267539393], [-101.07876604706449, -30.241363595346186], [47.624165764995496, 59.81288525862764], [104.97564346990714, -42.31632847299916], [-172.339290559082, 80.87346827113191], [172.42111033091263, -53.430785942417614], [-161.48928928144295, -83.22725465559101], [-56.3606480059792, -4.123716138784186], [-17.237149168787056, 19.06161488103294], [14.55632135560684, -75.62629691251526], [50.95270865885038, -58.13740257861933], [-26.090968945359325, 5.021744671150183], [32.884975602513975, -52.09506207795349], [-69.71554960884552, 60.27365076879203], [123.02893877477878, 11.246170138194508], [-64.44504400365189, -18.68092690037381], [57.96289405452444, -80.6475974916404], [-117.20018346845245, 2.750983793025714], [120.52544872568531, -69.57311074622675], [169.37560148722486, 2.7017852370905393], [98.27406590227581, -64.42432970202316], [-178.88488326736226, 61.84800690460751], [-107.41805268145004, -20.7091626838598], [-97.12831611380042, -77.00640649841253], [-167.4935583213227, -37.009791330608365], [-54.55722978503974, 56.37246276210108], [133.74723011856798, 9.22854899721871], [30.323468607647975, 57.95499871362041], [90.4433369461239, -81.3071875912487], [-32.06021287120198, 53.96018612850883], [176.85400051675194, 63.820853400576915], [-53.24157065873446, -68.38641399007143], [28.509038082288562, -10.70598308695303], [32.16572340965419, -55.38291616450709], [-46.62577480117747, -82.17198074371974], [70.01461988629022, 13.193376958595596], [97.58281378522156, 12.624050021493755], [-162.37785434330456, 49.84537091156095], [133.84612930152656, 77.96174592339871], [2.5439546193491225, -15.132912265669379], [-5.194239983631501, -71.46737286532587], [-79.03519847350742, 29.582480263047163], [99.05853404800321, 43.123432843154575], [126.79862088935847, 27.679745512320114], [148.73657251227573, -76.57648663735571], [-38.23361199107385, 20.833284798819637], [-23.32426074630547, 8.975299473535333], [-137.59796648384759, 75.61578266577688], [-44.023695111538245, 17.102066885748428], [-117.079153697071, 19.419708389627917], [162.80341518424112, 58.67005039702582], [17.99890774781204, 54.00988490323395], [-62.68768457261256, 6.99603803748619], [-60.2080460135004, -83.5168592468121], [-136.22493646750453, 13.009990937870013], [-90.40125542613735, -64.32430673037359], [143.13311722922725, -89.21923603655434], [-82.52981874168779, 27.76817225964613], [-6.314511957316897, 0.00835618896869228], [89.1019654987154, -22.04589390435975], [10.306284818374376, 31.597334553904144], [19.542165984082843, -4.224534605128181], [-112.37225001537588, -67.1222113428788], [137.95390866280397, 2.4451392418427664], [106.42287965310666, 67.57401459467316], [-105.84601368338839, -67.40256588302563], [-67.73644970792613, 32.30243278920462], [66.24308612372312, -9.217016560312231], [123.64528876495814, -38.26888617609353], [-118.25852035523441, 15.231812822253005], [-44.607879652117774, -58.7652823496866], [-16.5238010967834, 80.25030091226945], [-95.1155892472152, -34.193079012304445], [26.528828012610006, -37.15908699883181], [-147.14150773067055, -39.354647726264965], [-6.714311607789751, 70.9382555531961], [90.19448600684468, -38.07098353508534], [-154.31941956652713, -45.755473216354055], [17.608407054106667, -4.702562235676004], [-94.73563603481003, -44.034887618046014], [154.61077074678218, -12.995469129580384], [24.57516352550714, 55.43109370541873], [7.942826143554038, 11.589077128415838], [-60.29315850993089, -3.596958542905706], [158.11588684871737, -42.61634623133509], [164.26718510168018, 49.14594509589916], [-166.44504506624114, 38.29255909292094], [-115.11472079425015, 8.686828647487296], [-71.90915975238855, -43.851381642491674], [147.433265140513, 2.550401733034038], [-32.160322975203755, -85.30529513083742], [101.906643842318, 25.833248547049273], [-38.20141614531379, 56.324306536374806], [2.4234214416113353, -66.78218570099904], [16.02608271765068, -78.40774262232634], [-159.8278325596954, -37.62257750906536], [-18.647921284392872, -30.94964070341404], [179.95948250874517, 70.49814737774534], [-2.37027457706934, -10.697847679420672], [112.06106732382123, -84.12905818867598], [173.282643144643, -77.13868178683742], [146.63787213118454, 86.79036399587767], [136.1800995424019, 51.2373244273498], [137.2777300445213, 85.97258515126303], [-17.063329312925283, -78.33485188473655], [124.10970283639975, 44.17490927855176], [93.7018192543734, 69.48888272322387], [49.55510135112903, -28.74389076069322], [111.95141815091438, -69.37847522956446], [-160.79833472597466, -48.34036876544596], [-80.07823496387994, 44.01841250537554], [-125.69630461095929, 52.75901658436035], [-103.74683725916852, -75.35251728691155], [20.771217501365502, -54.683194687408005], [63.02770563938736, 77.05724319955583], [-40.21235844568814, 54.56751317568399], [70.06141394556573, 60.14707664073559], [-131.98150683243304, 25.119540663030516], [-84.25237381741917, 2.760243197090362], [83.21742268857447, -78.47408211794975], [85.09870776513013, 51.698508535377044], [-57.81133443843174, 76.25555288650074], [124.62381163144242, 87.19676548283633], [-5.826888779933768, -74.09640148964506], [100.60913107734726, -4.560575515536525], [115.16576686834813, -9.391677513697996], [-148.65533870746344, 28.91198505907766], [-110.764637525503, 31.6551812136121], [-10.519623397025848, 1.1816573590416235], [90.68116778255272, 76.92435579695896], [-172.55670802201692, 35.771835557333695], [-23.957374051411477, -61.09079553930057], [163.67571989187957, 9.613739520246188], [35.40108149820381, -75.71603760582867], [97.01198709074959, -33.51029903143244], [-143.60493110367793, 5.54265088317921], [-42.84126993523089, 0.9567027926562188], [84.93836621224949, 62.95024207778103], [177.51461657862058, 86.93333546079491], [-104.3833051324951, -87.10850021959206], [72.10589531425924, -40.33113948814842], [137.42781451245955, 65.72365305191549], [171.4072330176207, -59.7197288658977], [-57.180054637131875, -2.766736925165505], [107.49522793710446, 3.9204513550248965], [46.760522579103366, -15.25709810861982], [2.3537664734622066, -46.447322376799946], [75.63394310690941, -51.34359012264122], [13.121583086969375, 56.673631339484224], [86.71353215095942, 82.75148095312863], [-104.61499630170583, -45.80494374794247], [-2.593955380756947, 5.327141555363597], [-0.16545813606832382, 12.868860836183185], [179.10285185830497, -83.59468252311322], [-156.18717531121567, 24.793018210028038], [150.5809907556925, 51.30073391525036], [-140.6064302018059, -55.1175311400245], [115.08147715605855, 12.752491411124321], [-85.95074499767787, -62.34608082753196], [-2.9748744109154135, 43.164497214507605], [152.68381057393742, 54.986886324886434], [-171.6470371267668, -71.26207958732843], [3.8594006446732987, -48.742900719555074], [-53.93886353299867, -65.92528584198995], [-143.39917888100132, 62.53045466231281], [-151.2114774168568, -73.77226741294707], [-151.42691782041288, 77.66819430238772], [-177.52124332791428, -23.01320814717254], [-158.76197797967487, -60.336559717040224], [22.4677466087825, -26.56386774779306], [-13.64492023410893, 32.93287974290724], [87.6899353666115, -38.79499333314629], [-46.77879558496812, 19.97124387716504], [-162.1489907911185, 88.30740301731666], [-153.66281559811188, 29.41047719507332], [-177.37772149600303, 14.972728749394673], [116.70238848574832, -72.57188880760796], [2.5530669237945247, -24.42505244574393], [-53.27066560862188, 4.299097902508646], [-83.31182254218538, -79.25136648925083], [176.14465074473122, 56.52580363231826], [159.81396864468883, 47.023879115671804], [-74.64731526192287, -44.04705087885012], [50.21892703980977, -41.75207895378362], [-78.8040256836821, -85.0026581984612], [7.787471349300086, 63.63797669365966], [158.40059854786205, -89.93455499328194], [50.76067312601997, 38.63557038356885], [-136.95689966707303, -26.890025213931207], [83.83630530496458, 41.849888483656066], [96.56805335989677, -21.411310905858876], [-121.68129034036171, 9.184777597888893], [43.52163733621651, -66.839362497741], [36.057136695869346, 64.08421504649458], [10.56542111685026, -33.19861527597987], [70.18657409447388, -64.6351145150917], [26.203513853016254, 77.85758585463323], [-79.64726678376311, 42.21512695247843], [81.989988307048, 50.425844827875665], [141.05419945877048, -28.771932808731012], [-105.86935389798576, 73.90873949522711], [-16.402255012289864, -25.96155577824268], [102.02288850604292, 15.674140749418966], [102.97712692551917, 41.52537072954712], [49.679132667637475, -14.555693842673465], [119.25620713172574, 9.18390746982697], [135.24100246375454, 39.263567660804945], [11.066357586536055, 20.366851592850487], [121.65348979531224, -74.759626537445], [-81.21158000890313, -54.26465019676733], [-140.97498758529304, 14.064831772663835], [96.24891960739616, -69.29809445333902], [-102.50042894386358, -49.68677698127452], [-172.48273288358308, 52.23269690165708], [96.1089133521518, 69.419830491181], [14.719935548112764, -26.332526299353702], [11.19136554230372, 8.186072141856], [-115.68753324174861, -9.263232853298934], [39.05419277180562, 10.967925940465486], [-124.61510190967469, 86.133871898104], [151.46795261056704, -15.106875279167987], [-162.93391814396057, 70.92605571085419], [65.38972026313937, 57.08478891350443], [129.90595830372857, 59.83881602451656], [13.096528904481355, 81.2781483103608], [130.85654320265584, -25.902124144552502], [19.123299977154254, -1.1229054430752727], [-148.16707783022156, -68.93802278128916], [-128.23720158535087, -61.82125105960243], [44.8626005993643, -66.00117442079818], [-102.1151182664372, 53.15922253839405], [163.57291182665358, -52.515655927988476], [-175.07961603301297, 77.97329413213755], [-63.37833901660968, -8.079305570108147], [-38.72870541169769, 8.569649964863753], [-49.16512000299637, 39.630300135537894], [-128.77015912020912, -84.20639376400977], [-77.05983952437214, 27.22945548934089], [91.93987098987694, -13.482109784867152], [178.16336577115925, 51.6910341284939], [-53.81367208806235, 48.58791188204671], [-93.43630964988186, 58.453157755535], [41.39442326616927, -29.68944910794129], [71.37753122469397, -56.41445603592734], [-116.00825682659547, 63.90030108524145], [152.6696087820411, -55.48965051679264], [-92.01715095128542, 45.122111096356036], [157.13022389024727, -42.17623250841105], [-60.97673909756302, 3.5696835355759404], [-24.396568656545483, 16.157126816673856], [35.91334883616845, -67.64338325211958], [26.606653299012528, -89.96945372326216], [-94.08068299199763, -76.92845382303965], [-151.03839643943772, 17.659418650411958], [-157.1173009730036, -77.95732105403], [-88.352298027991, 37.317455735310716], [0.5060814871429908, -64.27457611493189], [89.93348493444944, -51.47380370593712], [32.28393225473955, -49.95504077756242], [30.01730759210779, -33.82447603490462], [160.16945902933261, -22.80740804308789], [-112.02532446639312, 34.64969073752683], [46.449545774057846, 24.04390716030511], [-162.1430450822264, 34.50539151327739], [-145.3296187371422, 34.947536846104455], [134.3847746538475, 89.2916165586566], [152.64323505145526, 13.235700364001248], [109.96742219024536, -32.635187869188975], [143.83319388903067, -73.3253181701236], [-1.4224483670745514, 13.465329069948133], [57.573871738880314, -30.734064942403162], [-3.1579764505708585, 25.375423609431422], [168.78616429171637, -20.15298069071852], [-23.94530387526946, -8.946729758242128], [-79.62102796281121, 36.146110886628826], [6.568014938590068, -50.71556369743884], [176.10286653289236, -70.32340781716059], [149.76360648096082, 24.103260358788997], [61.31577294415229, 40.93202898257143], [93.50026021768699, -45.27278437362176], [45.42086407294539, -6.724085440717706], [-47.05034318148595, 23.748852944184705], [-102.16762922157157, -78.95718489255239], [3.6745488313599672, -31.774410847250905], [27.75046776712122, 81.1763955612653], [76.65193747800282, -70.32844096846516], [-5.990870774904096, -33.08895478629505], [38.616782974538225, 4.80045359395215], [-146.4141581920045, 28.368889759172934], [-74.12577057870948, 88.68870304927115], [120.251192923139, -29.564777547974842], [-159.15016235125213, -35.07792095968793], [72.47279478141783, 50.57456627943833], [-178.82796310247065, -21.15533661907943], [-118.22061565839624, -57.24717761638146], [-27.99220006150137, 2.945464800280533], [80.18455839097214, -28.313735999029834], [61.78153824729308, 1.6241095747055967], [-43.74316256424606, 76.81126025889935], [-78.79449056297237, -70.30350382008079], [79.40025455591996, 54.85598753393584], [120.64673738339464, -75.65803408735707], [-130.8651335063683, 87.24292617537927], [-163.74376175868227, 32.060242728257855], [17.5344364442294, 72.29993457884353], [5.646120499537846, 73.96429077000657], [100.3305345593749, -22.719008053894267], [115.76745723289625, -87.8251242516663], [-118.93807265740926, 10.476569903394681], [-120.0159464343217, 3.250239562953383], [-109.62492288006847, 33.63990052354245], [-144.05902096591544, -72.97819884626696], [142.28479997365972, -62.104861239826036], [-169.5336440410832, -65.55044693609236], [-70.83844643878999, -36.910095529745554], [76.86034040289516, 36.990927370237806], [34.671148943982146, -43.21731021945967], [-2.9456809791573324, -68.66654344581835], [-175.9750822546299, -53.697766846768424], [-4.546742409325022, 72.27122879106638], [-42.44571755520778, -18.827028086460714], [-102.19711722491846, -32.95517585315646], [-172.65451922032793, 64.11423393423946], [-99.80345768989417, -34.855114690109055], [-41.40295214783986, -49.693096229339744], [45.76216305407604, -84.3356440721629], [160.0911596475067, 17.346707593132855], [-44.47778163111288, -46.06443968225426], [-166.5542223040482, 44.47074528070152], [-3.2853541128978225, -24.517764053769397], [-165.29608369397215, 82.18639458331356], [59.83704653603942, -13.232115725573678], [158.01934721451983, -9.725412636329867], [-99.25060767900176, 6.706181595383978], [-88.4950060301769, 29.652163666091692], [94.84708353955314, -13.93806655405637], [77.74814372041004, 68.17372649854485], [93.02470163926964, 63.96480642805871], [-135.18024384596038, 63.17747315799864], [152.1185149857721, 44.74144447416214], [-151.17671295391182, 32.623763056303396], [5.108247954164371, -48.507414667506644], [-43.11344591642013, 42.331323145407694], [-163.94074280574011, -80.8397784932613], [-42.878657330263586, 72.19254911203453], [174.75306061760804, -84.83239071496618], [137.93691519574253, -27.304362313955217], [174.913910801661, -23.394735760412615], [-11.235616651888014, -47.56112526211088], [14.447825393154305, -61.05714004802297], [-19.571377429567278, 71.18223083749646], [93.68444491400084, 62.55175343128887], [160.9327818096249, -72.25800294851747], [169.11731951254833, -36.054048470734095], [43.33235455269963, 51.03452572640249], [57.586405498505215, 88.49513336666601], [168.40600682938927, -28.848110113015807], [98.14120407352019, -45.77241021563201], [-160.83817420764348, 65.04090921932466], [-76.09531948427994, -69.36235805862376], [-128.45893640588108, -60.82076029390184], [-79.44056117786734, -40.36580988739332], [42.680484816925315, -12.421681958056382], [-107.53131721724037, -21.24896721465356], [117.2119612638522, 25.49219115640584], [162.4366328371891, 6.818598100042714], [127.04435318182338, -14.26991516288135], [-7.768055917774221, 20.228178676350097], [6.42899186740995, 20.905956839288585], [-121.16706837478378, 50.815999650431316], [62.958443040596194, -56.3674254034203], [-62.93058659327295, -7.627348004207337], [156.32545320933883, -54.893785820537786], [-89.20001644718717, -58.06677029330709], [94.82586595735306, -70.72574301064076], [-42.78458061264192, -85.76975455149243], [-9.759161232163605, 46.849408923176966], [24.654874786733654, -49.082698355635685], [-72.89103054027701, -77.44481535832561], [0.16594410376288948, 86.20983398689042], [-168.66745570116186, -3.3493405985298175], [81.60990946798103, -4.577687850904524], [170.85228264949768, -70.8372824423916], [114.52369764130623, -66.16682529453833], [85.21057421641781, -36.426152409233296], [-74.70360959171346, 63.134396409607675], [152.96757713778672, 87.51132210910463], [-156.22730305284614, 33.04364238488381], [-140.64759510078775, 38.9684774809619], [20.302886400933282, 17.72799021753112], [-132.7787519002355, 68.10892912412902], [-179.5009481455304, -28.76746868808583], [10.950840001345155, -55.07854009654904], [-38.58695746562241, -87.9234941171901], [-172.33876669687487, 2.1420023536539956], [-146.0103401679411, 17.782788815860297], [104.04382304041926, -35.72893370781711], [-75.33449789769604, 81.30555307368289], [-120.45189018787762, 31.126274658641627], [-116.0490688090335, -23.34596590555416], [105.92252163357753, 51.181732882169875], [6.603750255754335, -20.689500099427875], [124.62929329289813, 27.429000201107087], [148.90363229715146, 78.7674198407733], [-158.80441319336896, -39.669547974045344], [168.04609087804695, -22.473785754929946], [-25.63183280065129, 84.40912234970878], [87.9992787661429, 20.583168704705276], [-55.06817550651797, -60.59098570654792], [-69.38026675665765, 33.50840672122639], [139.70860643281603, -83.16386313401128], [15.728577871443257, 47.930105277202124], [-176.98546416628355, -47.14033883292059], [0.6599608755945319, -44.835720005853894], [147.65965509742978, -36.698871780187204], [54.816082036305865, -1.1681847826330527], [141.3067959210899, -19.242467575178054], [-107.02537277346173, 7.6202126231427325], [-20.562250348914333, 46.03102611654577], [81.63756375124893, -49.475946880189554], [-73.43827040217846, -32.39120942395291], [-100.96554915298657, 34.97076551276534], [-92.76096447868294, -6.274918318657492], [-81.88192056443961, 86.13245198380527], [-14.952038500573241, -13.336007918167997], [131.087798781271, 25.010125363728335], [-154.7296020214873, 27.601414613316724], [119.48935380294253, 32.851728369759535], [-125.7428976600197, 63.85843107628179], [75.9656952027591, -83.57732830955862], [-95.63508900542621, 30.367960500136565], [63.53780839594996, 10.916838804631244], [144.69333670281813, 68.15931977584964], [-107.82831050241762, 45.703021249259244], [-141.043020542236, 59.13209855424398], [44.07680158316418, -49.2585205919388], [135.2482769725873, 61.55759392351928], [100.85508978081164, 68.4039890162957], [96.49181931245843, 9.784908815231098], [98.24343170535136, -44.47044851410738], [64.00065181103332, -7.274537943879453], [-175.9280325021502, -41.89401730500842], [-72.28373160977253, -34.82210536783101], [-149.77639891713358, 57.94433997260509], [107.08799130893665, -51.06629253492801], [130.7789557500037, 6.846371283734882], [96.52056214514806, -53.91471934341076], [42.76845782188401, 23.057658750292926], [-151.34195138113438, -76.1576910679342], [-156.87618061417385, -86.7401086218403], [-128.74895943883163, -0.028787805307612935], [-154.29674385493584, 8.897528500511687], [-81.14290996170966, 56.887945190123304], [-80.80501614287691, 54.22095599395909], [-24.944065612471398, -80.50317968724099], [122.83950128093127, 50.052873225438205], [-173.36906746381123, 69.28453444563273], [153.5250494337742, 3.7130468428795593], [12.430780945577222, 76.54475621043272], [62.2108062232721, -83.32722392296394], [-29.46850487947711, 61.7990282575235], [-78.23665342673215, 67.53311834993035], [-60.60602559434096, 59.677876342473176], [142.8858940609229, -57.8597089153132], [48.18905149968023, -40.62295796436361], [-161.69649474560225, 32.832961314214735], [128.390876843088, -83.15532679546797], [141.85058576240294, 88.78101342242186], [-9.33084180784868, -34.24431661845441], [-90.64540671643005, -8.270098951073477], [-50.733655616965024, -25.63294254769327], [-70.60744818164696, 89.55880496997118], [-44.19854191017028, -61.22683370721645], [139.0164938478777, 70.83737784446147], [-66.91145086030978, -61.90245147982978], [-47.23007783266909, -2.379618983765601], [80.21673540986461, 26.848584192655238], [-98.90611576378822, -53.86292227030487], [-13.751084448315378, -26.445060771167842], [124.25502572831527, -74.07757905093085], [-25.372364475403728, 51.28921206367461], [-6.647419774520484, 59.32522425496072], [85.10513506588926, -35.20557927472465], [11.002203364400094, -12.171956515517351], [140.99776211803945, 36.3986656064452], [-129.29418512399673, -81.80771530972805], [126.8023982071069, -50.11759393138698], [-87.09689991463952, -79.16485308656331], [18.54203586756393, 65.90229139659853], [5.948015570643932, 51.92013871237356], [-164.4650234780184, -76.8693053772466], [127.34507467722918, 87.24039146099248], [159.9601132504979, -32.79214532890471], [-67.99980620318644, 53.39691908959816], [70.99890609813203, 7.1538745405505155], [-122.2404180891402, -21.526245290666832], [-29.225122188766157, -22.526397230556977], [-120.86558407021936, -67.58041580150311], [58.95600900355389, 65.88209885196093], [171.5047875216024, -81.87258366374633], [173.80207728659425, -79.25869953424011], [147.15247955079658, 78.51298054183341], [174.89448727686377, -14.185181913225847], [-166.66035197436747, -64.69684487631248], [-145.36774602434164, 81.46422421330855], [29.829714481804253, -87.00876529747214], [25.754566881166703, -63.3705653077903], [34.09740092987885, -67.79660512484737], [-154.84854095810653, 29.414813154914693], [37.833008857569126, -28.6325456071047], [43.83277191667884, 47.9048811683628], [-3.840487377955011, 71.87838777425493], [65.53845851018376, -79.04503661283039], [46.42070148491578, 15.868849336131303], [129.9312318065974, 0.6867793449096249], [152.3410907823049, 12.523059625483697], [48.324952620903154, 87.72754789756019], [-47.69916048083208, -88.7347347938212], [-85.76823098673063, -64.6746660379238], [-111.04665389892372, -73.8181483262398], [161.04577427346098, -1.0047481200269903], [-155.3033180232777, 74.26141030162785], [-166.3051050743365, -77.80588011461599], [60.18964755740281, -44.18724342440366], [-8.026085981473923, 13.64153516706478], [72.5686933504028, -65.0842091531165], [108.77054341376082, -43.16719748389242], [-50.668125206526625, -80.01467321815255], [6.746798227083781, -12.485469014316921], [121.19417440436794, 28.52042754325703], [39.19103432388437, -16.898314164035618], [94.74713904878297, -12.116547893248208], [86.86001432398677, -26.51846540005428], [-128.8030894910241, 81.70627096001772], [44.090461387950356, 68.78043920374097], [-104.90733060766978, -31.204777213499906], [-148.38654174151358, -48.913461661623984], [-1.1933206944188424, 20.463359211906266], [-31.57902178343602, 83.75401329214543], [-71.4029677002519, -21.495032981936912], [118.5323419971543, 70.59978494523425], [65.99962143937988, 56.761208158049186], [-145.08699251768184, 8.09538486426845], [-34.88043534867532, -79.72429145833085], [-166.19041772483283, 21.728754829862833], [-0.8772405764293278, -86.91505528119511], [105.15180976485483, -2.968081898800201], [64.9184704882285, -68.98164475603107], [57.75946284317992, -1.989406138748473], [170.0644899068569, 51.68710487085013], [137.3920758627002, 7.91818080456979], [34.31584587010974, -8.282196991397655], [168.20428609779523, 37.378097888771194], [151.5970873017254, -89.71524185405524], [-76.50360692109744, -63.54568146269874], [-100.27309854133117, 14.245244078706921], [-1.7826139331633506, 69.47490063489148], [-177.3710663533264, -62.51737924179717], [-59.55193544670438, -6.341603829704292], [-73.02707171642511, -87.5659237021763], [-45.989015408345566, -62.67610641565702], [-90.62941546777367, -36.901296000580665], [3.3203842867330025, 77.30212822481771], [-110.4758440536696, 31.236565423894863], [62.079285146168736, 44.26648539075366], [55.65894383917062, -16.224071041216362], [-3.052751815986996, 1.4490486900724342], [-179.28811928580328, 68.04611125286782], [-162.06653349920595, -26.352217139717542], [174.24121335513667, 58.701255019291395], [-84.3775939102119, 35.40103395214072], [-160.03389914281195, -88.18780818254811], [-114.84614837680103, 37.44660909277045], [-61.15781772277407, -51.83646555970785], [176.65045228948208, 69.54216667697014], [118.44081135935488, -75.61368139752571], [32.58265372955907, 59.071768604937354], [115.49006874891872, 14.59700308504984], [-99.5950301439432, 84.766992958093], [-166.9000987445182, -58.72932899976157], [122.94571018351816, 17.562735694133877], [-7.63967253770689, 19.612488591866672], [-150.73903975851925, 40.4096401536591], [139.9152048247935, 2.739378685055991], [-80.81807527206182, 60.85843067083924], [-86.49434513638936, 42.92074452052012], [-156.14387691879813, 28.925013118771115], [-100.06130323912865, 46.35359768072411], [83.67690906733147, 8.020392716545665], [-134.2162128119383, 29.58297760190774], [108.2437980811846, -10.358265243885887], [64.2157681849856, 1.2143387927762328], [143.38080636768876, 6.855256961659855], [22.011454591639286, -39.84355517033373], [10.554719904672991, -89.14102233928143], [34.657140100826645, 75.97458629093477], [-103.70599684355683, 24.98665748600334], [114.0936782921489, -10.205598643266027], [132.55437271655254, 1.7595113517497163], [-66.75428964943522, -63.66225153823484], [91.53567411066311, -82.69818858746665], [-117.59344359936135, -46.03999621831741], [-9.97832802707924, -4.012654064498586], [-49.94742702987398, 38.831999351278164], [-27.389669851043806, 3.968474350545539], [-106.92109556107152, 19.518691358640506], [2.9109869309688285, -77.31489316439723], [59.26578672443896, -56.60970411849378], [152.68116079245456, 3.3789990932394076], [11.029033750218131, 30.997760570865157], [-136.4104144088157, -84.89340824030305], [159.05125662510838, 47.48768012669399], [52.57141238380746, -81.76315944586834], [168.16657990392474, 66.60895036567871], [49.38495991475171, 35.725513745704525], [14.86641180113506, -17.981629901006325], [-170.3617268374416, -17.084034949933237], [-106.97877190292681, -56.327073646173666], [145.51720314130154, 85.73205278063696], [-17.888687939962118, -46.88793756649049], [163.9888385448784, 17.52692965704933], [-61.13646138940144, 23.189260735224288], [126.46210732547716, 71.49386949211437], [57.59360798843816, 38.01462557717314], [-174.12059931297654, -29.99225109639468], [165.98601802320576, -81.52352103073007], [-164.039312192128, 58.92360688643615], [13.10901851743881, -68.86087789966872], [124.87538967405145, 84.57568791583282], [-177.44743380692844, 15.560211691212459], [-81.95767749303262, -56.33541204341239], [123.6772990170181, -33.66765242218089], [169.03219049078163, 65.78428128761647], [-177.57944064627495, 71.12493614757307], [-120.60201770532417, -55.68183386710863], [7.8029331704469485, 74.25426261724759], [159.3952463449439, -59.96016821313439], [-101.40852859574909, -18.53894396926502], [-149.80596054478838, 67.23871375960599], [82.43028834295484, -3.144989216175267], [-82.87847818537412, 1.6373642148958956], [-146.53297821644563, -59.845520325318205], [-112.79812027620471, 77.86689005078564], [-111.44898282926356, 17.601820877218], [95.58458110733966, -27.92917035092288], [81.01757098584939, 66.57072171231977], [-169.97536702929372, 83.63256050050569], [-146.1142685258437, 4.8564801646879285], [101.09557482708348, -27.519103025300396], [-20.254288119249175, -85.09679179211987], [-103.31733244406662, 5.988613962563529], [26.558149925263372, 1.3207726616719384], [-17.218216771113468, 82.81835209244718], [-147.76674452742301, -27.796220923283748], [-85.75665780914294, -85.26614875988953], [15.431511254251866, -17.610286630386685], [-58.448055556786386, 3.098586131340535], [44.42401416185599, 72.00677039185945], [-16.824121856212145, -67.30102176560877], [39.65394166480428, -54.3441346659423], [104.38536622250824, 47.37652704443215], [50.756570285595366, 85.50474903351741], [-122.88876756890822, -88.55043134423886], [51.33079382575855, 74.24807921048806], [67.4240209632504, 24.662763892156224], [-41.221500416075244, 71.70996614066307], [75.38735612219944, -55.85115453306529], [-120.11100156136942, -10.043488164681884], [-56.008175718892886, -41.87834058057391], [64.7846069776481, 20.820482260795963], [54.74518590613606, 12.068900915290573], [-102.8486256351106, 78.85427395359054], [177.98189518959936, 42.31803409627062], [101.09286201378237, 5.169549300226115], [23.549185024577497, 32.619303334959376], [-157.284095130758, 56.51239390850262], [13.46806590696155, 13.078762716463572], [102.887509325238, 54.98921386644121], [34.22117076724959, 61.372312612165054], [-173.6509198889353, 1.881595663322999], [-24.03894185503125, -24.284663047017467], [120.36479018430163, 74.84722331994611], [-28.246077432560917, 82.12180094806321], [-66.86763308297844, -14.240275192530007], [13.220218985227348, 33.42368378124844], [-16.068435892867868, -14.837377523439148], [-12.646056580873779, -55.74106960724363], [-14.137788719057234, 82.82736945786775], [-91.55382365012949, -50.69873582408674], [32.60554031216918, -45.53789776188403], [-44.79261832023389, -72.30081020864536], [-13.869455482114237, -35.45841519847348], [-159.66189206756016, -42.32546210179781], [-84.24762991216247, -79.62880025553379], [172.99573068823958, -23.686575578522138], [-102.88313661803151, 27.716141281280674], [-172.23152953263775, 21.84347607335807], [73.5772276612732, 29.74811251583333], [43.8680547820171, 43.636702275442374], [22.500539550004515, -60.08678938758797], [-86.43289219015524, -29.61546661876048], [-44.86708031429338, -39.49123143320121], [-87.99387411559299, -1.713749205786761], [-108.27112094335608, -80.49624370530435], [-75.81972170442069, 44.73726159949946], [82.78018981965354, -85.77266684055829], [137.6278945435554, -29.301497093507507], [66.48867773430004, -7.819106732823484], [94.31191952470553, -60.8015431806533], [130.9458880810505, -48.09686709350941], [-92.70019815018796, 6.556231253666001], [118.97783604767427, 40.38000032370685], [134.82421874193764, 70.16082092151206], [-136.7269738398421, 47.56400861067035], [52.03657194232467, 88.07929547292058], [-2.9593185977427883, 44.07446043488335], [176.7576072459414, -10.802225223160944], [-94.34237535283441, -71.74329375545673], [-145.84746577083263, 36.28572871191239], [178.4184149558361, -69.45805211823001], [-55.54159418839696, 20.5924693229153], [167.23407822419261, 78.18631895063885], [-29.775463113314913, 82.87312333593758], [-160.71270820556668, -70.16283090741045], [168.6157645148506, 0.1928483086253241], [-150.66957558781766, 43.90359107854823], [-14.567069077463417, -62.93347289790697], [-24.46677730195337, -26.294508792152204], [-96.54251641667535, 15.602200176241276], [30.12107783032703, 36.88993316065321], [-68.4983090992194, 1.187737942656244], [157.28376085787687, -35.28012226702134], [156.12677613700765, -57.620387128304955], [-21.55310884989481, -67.86718196891299], [-31.625037125769087, 42.834544318468495], [123.33863430661829, 1.6586970218459118], [108.14769174469083, -68.81123394257015], [-30.73459238942382, -21.398941528739947], [33.15417162759111, -25.373245322865657], [92.70993250711753, 31.000387500923956], [-137.02760877160864, 82.88575694708132], [-66.35271845599613, 51.605399599086766], [170.85351651026411, -80.23991708701153], [-122.58467824540004, 17.88783099384545], [149.40713041047422, 30.43973281729114], [-163.40883314739222, -52.88758745234344], [97.28560461329775, -17.235033282867622], [100.53864295773143, -7.7359848991658176], [98.67379562067724, 71.11234485427335], [76.97044897718, 82.83275361888359], [51.64567050051915, 30.451243437827067], [18.017343191924287, 35.33083362973968], [167.42729700306523, 73.6783581338281], [161.09308757825596, 13.608726380009761], [46.5337089621432, 16.19544551910479], [4.6272841111442276, 80.37556819222368], [0.5315516940132348, -12.623696351690711], [-49.84481326186129, -6.146256013250655], [139.88184709167632, 61.72397695807408], [-122.60063214208498, 42.125859466998804], [85.63043726052649, -36.44098166225748], [-79.48082108312323, 62.605410854126866], [132.13301072036413, -53.070438751443724], [49.24141614367892, -37.80825472874287], [-58.719532894190166, 81.12971844624558], [151.585988652219, -22.91821760057138], [-123.93390077905855, -32.28492079823185], [-102.56076141195999, -4.685016330877567], [-68.32050154323544, -2.6576248447211848], [17.046648807891415, -79.86975340302466], [-41.180711686537215, -42.46883071912285], [18.927419182604083, 27.382964559434292], [-75.12333966278851, -1.4442031736301875], [-6.45675547298314, -45.49779128911913], [13.787210203248081, -71.99702835772781], [-57.29774584734683, -46.33031121884793], [96.68519086504807, 46.82989477228374], [-93.66895170459478, 37.987788472418856], [-103.47697457415941, 19.369955473759106], [9.375548406989846, 6.144498055938734], [125.80178602769837, -78.16774079408178], [74.22236609956721, -59.22850147278179], [-148.17986560355828, 62.69715196114362], [-67.35867192742525, 40.217250767027224], [-110.80690274363266, -0.20665961047259263], [57.7472147981036, -16.180763776353047], [23.76543150701969, -8.641031958216526], [86.37061892436803, 42.532741511731395], [-66.02777599751028, -64.29013431789748], [27.665645668825867, 28.859318797246893], [-26.68231068025758, 72.90228330947033], [53.48816890718901, -39.8464186072161], [140.22602866153693, -78.54622848901137], [175.42852106046615, -8.275853314851513], [-143.83591093835867, -3.1148613585054186], [59.97173505143092, 70.20430615629748], [-58.72973892429697, -50.214345189501245], [-177.28217729777407, 22.736917471707436], [-140.52344039743656, -9.61848082833001], [-87.5587623151442, -86.3371144399011], [36.86065942615799, -19.558639552952506], [-45.58533954663248, -40.97249319299783], [-8.130287054838004, 14.868270294031758], [-173.0139427691291, 18.221722502882827], [-69.59939569167823, -83.40469455306689], [9.185864578518679, 59.82917632717884], [178.87672065827073, 82.21672709189478], [-96.97783015214438, -80.5875983754193], [-129.54248127140943, 28.281690601108842], [-28.5616677141609, -71.05618885474443], [154.60974595574837, 3.936371071768039], [5.789670813699583, -33.99539669324406], [147.28519482042114, 51.34241752989004], [25.94191182227241, -1.3906674324351131], [-173.70363543607598, -48.0149039723951], [46.659940483911946, -89.74121135157402], [-151.21014260916132, 69.8525782283218], [92.610447064572, -83.39653404950832], [23.47000591207791, 78.57101529352623], [110.50301834640267, -5.647347150821513], [-126.68440052134733, -74.51940718331296], [36.557335439493144, 43.93899822253894], [102.57172476017462, -55.75207743448632], [-117.27187531584428, -67.97290226017195], [6.17489268447418, 63.55083454621467], [26.724038771661096, 40.82669712964333], [-92.0272786747046, 83.50436756711112], [59.274543050166024, 31.25357174841576], [85.57366416684626, 44.30880113532063], [-103.13195465982592, 48.31562230338628], [-31.504899308648262, -42.132490445892856], [137.69675938020734, 78.72453317109094], [70.42924575139652, -41.7123950646908], [172.87717238685977, -88.06384660352595], [-93.52884999793181, 73.85883768399661], [128.62673517027847, -89.69227657308682], [19.97849094050092, 39.02546892313107], [44.989809490376416, 12.325964563753278], [76.19761322414145, -59.224033427090916], [24.145755321590457, 8.850017687428785], [-71.75124528887564, 24.21463580033074], [-37.8646725338001, -85.22624118252321], [131.3596519648472, 14.826269290778322], [73.04200095567636, -51.89949267060023], [147.47843214758873, 60.78470685534902], [-106.57804166666793, 63.33262974946257], [-27.620533021260137, -49.59952867932427], [-103.1968310863234, 38.338481265702015], [-105.69484031678209, 84.17049678637278], [27.81889235286055, -47.262256501444796], [101.83432985976125, -67.57099093937317], [-104.25607487784396, -61.55253362993656], [122.859480376069, 38.29655949767256], [-58.33133171580383, -4.220845523607197], [-170.1907904597439, 2.637493267587745], [-124.94865110709641, 44.04572616002461], [-66.96640053589775, 28.165169355066073], [98.23612324540724, -86.734461095212], [-23.504741895389706, -37.485471985169674], [-55.20404702939544, 59.87767124244812], [-125.78437126929911, -62.19769301143295], [-127.31625928955961, -63.33864618093075], [-150.63524440160867, -8.127246069579117], [75.45343951486912, 46.90023751111567], [66.57079063261408, 20.22979881227156], [108.33755021455231, -11.268877539551422], [167.497398108028, 89.3313033737584], [177.83711248671207, -70.54152085179375], [-120.11787507290911, -28.114050385103617], [26.03294259497627, -53.97954321376812], [-101.24614397157447, -53.98949169789154], [-166.12538132199788, 35.28135009097984], [-108.28474909552868, -74.18478334403163], [-171.5482151433701, 85.49648582999906], [-97.69138342103207, 0.34749091502254803], [-8.937513803803379, 65.67253852684698], [134.65734217131063, -54.43740963892553], [-143.7339676345754, -25.85701976907111], [-14.095360922808693, -24.54588612984403], [-70.31186310418104, -39.33194498738901], [31.035256051859434, -60.26059181917076], [147.99083987890222, 76.78489948609564], [132.72660798991174, 79.60214846697238], [-146.2273364940666, 55.93362116233429], [116.36037114981738, -13.359129434106979], [118.09537336195451, 68.41565129834942], [-45.474025742471426, 40.97644493063671], [-167.46314863773864, -80.40594729606316], [22.592807334359968, 75.805550347637], [-76.01567270517899, -41.73263851343562], [3.3908006872401764, 87.28236938235696], [73.4702477536688, -32.48162778051881], [-160.59979915560072, -83.85403504070648], [99.24027755422362, -78.77185659160631], [158.4367228737252, 47.14992956475402], [167.2480116024553, 70.89201251603545], [-131.30352030774225, 55.24989131965332], [-85.46962386516542, -67.01938447803849], [166.8212511763661, 86.52819384347131], [-100.50682661089542, -32.53341292076036], [21.233703898228438, 52.94422174520688], [116.93678530149283, -31.950252252707642], [-113.72231753296441, -57.832303743051405], [-84.56016585822476, 70.95266407200187], [-139.05389117676663, 2.3520110932372695], [62.314008357960084, 19.504453833362607], [152.90822993586863, 70.78410908324737], [-31.330193391696312, -18.730661939688424], [162.89509583717157, -46.0994335007764], [133.15101018667346, 0.43916056093538547], [-123.45425210554139, -8.045364805123176], [-128.86704421619802, -13.38308065774191], [154.3237284486026, 20.837030667847838], [-158.25338516413632, -48.66603700371925], [130.78192822403508, 7.11725432711559], [174.13065381130517, -25.427125683332893], [23.86309134461441, -15.01150458751483], [13.365374506424219, 22.021526151567294], [-157.91143909496373, 77.31110160744123], [-10.636970265339167, -45.128781667464835], [8.403156994782988, 23.366988559466485], [25.48696294494136, -43.07193074052484], [0.9582856146963348, -82.29212139795551], [165.37434161422516, -17.771619486249254], [-2.1206652574497475, 70.20323288634049], [91.86001051722009, 74.44955976204255], [-170.3287557331356, 2.943232510595073], [-169.25586603149526, 26.33856069637813], [50.55161600250876, 56.68522979699724], [140.72708134124048, 38.83292765742376], [-128.26330722442597, 71.18307183837575], [31.123021144874706, 41.44218996324992], [165.63269662275167, -30.682458499379067], [-2.7359378054762473, -13.694420444788289], [89.59219479780721, 11.87347992880798], [94.72201533907162, -34.31393175238934], [-158.1868386655994, -35.58770835750222], [-86.58938814157187, -63.902013697624604], [170.9510822705641, -31.32291235057597], [123.01458106404046, 64.52352537294576], [70.49027906214579, -28.208395291079455], [20.773845947786977, -18.525396829217545], [90.5529177482566, 21.450166571315698], [-24.32748910661359, 55.5268121720284], [-79.57834260165392, -22.175835615978002], [-141.83628483607842, 4.399590783737253], [139.6788688865736, -20.1739233528305], [140.13410797992753, 57.916969918050796], [106.50626716621402, -79.25897417525891], [67.41878080596854, 58.60511220633886], [-62.5799408450233, -15.899255613268073], [129.243348281864, 20.88094045200925], [81.16763795467742, -28.771106276876854], [-151.1544304756568, -25.348514167125067], [-85.89600621009129, -67.75139334049982], [105.63057488828841, -25.05674288285423], [-71.37196424873424, -53.48101115890121], [163.94236787166696, -9.188447518029275], [47.31909768810769, 74.51319895370901], [-29.917461567706766, 2.394010941626661], [-159.9204674205814, -53.47618129854615], [-75.40285419245338, 84.13761670609514], [-1.9111827833805606, -62.08544895670291], [170.57718226821274, -24.696223755015872], [-124.86141045126298, -89.67413857397284], [101.85051795706102, 70.60662868661186], [153.5364870422184, 53.29034875530467], [-103.43574949113324, 18.993627111589184], [113.20970827714822, -73.12674050197158], [-141.4999589874248, -21.42062779404403], [156.30579651092268, 6.191182267462674], [-88.05548761689387, 87.72199440515851], [135.47871563064197, 14.532225842119523], [-104.8210070278749, -79.01858464866903], [56.39003554100234, -4.795749157821856], [115.00857389370013, -21.423619584109357], [-40.692031897139884, -59.432648078490814], [169.9099352193728, 28.66249540341993], [104.77657165561172, 78.6022813666911], [41.20604885972107, 77.66668251528786], [-74.41670126744513, 70.97173145547275], [-140.9695031748789, 72.36832858312778], [151.75415474725222, 53.49058247794034], [-51.8688800570039, -75.64778997511486], [-60.39542351882838, 66.94414167168541], [-34.3277315217982, 59.03023442334812], [64.41366494346637, -73.03266529552619], [-46.2036851186027, 4.85045856653846], [52.222073520543006, 70.59160602616716], [179.91441624822022, -46.02795461503719], [-91.47809118606743, 50.96605272797958], [24.68250373772448, -51.04008949802447], [49.98792106647811, 61.41800323762985], [158.65703085409496, 27.111759514226822], [-21.451633740759952, -42.65844165353051], [-137.561994407749, 29.193553536808672], [91.4199272153773, -69.10368235899281], [-64.51468047351564, 3.9450641325375857], [67.6809936296933, -56.108930222064565], [178.2545257961607, 9.769983914244609], [148.634832183878, -48.56486191069251], [-112.66972371169048, 56.8415911019045], [81.12185246589534, 88.71666932891979], [51.17550298460845, -32.266940206103804], [-16.690775325915695, -83.2472738772333], [-86.57787518517094, -24.54893118374638], [-144.99983358272522, 60.28254217610812], [-139.77899328290167, -50.08998898831417], [99.11685873057354, -1.6310924943276506], [-15.119578378521643, 47.597962448921905], [48.88976902588743, -66.46103570349719], [-132.2080290527212, 42.373506606201126], [157.1239040005824, -50.60513073412444], [-84.72321106174596, 15.940098692198244], [-153.88523091761948, -89.13612546734073], [-71.48698119164878, 0.6153675400912739], [124.01012613892716, 63.2791154204707], [-153.2661350806764, -31.902665535663303], [-135.26041631132904, 37.37190677155874], [36.20231154203161, 70.58687913769036], [0.8230001545780663, 7.2649683694810285], [-12.748836067521996, 76.30625036331921], [114.61385525419013, 37.98235030104556], [29.942156124853998, 0.6439367803547436], [-26.200696868935616, 40.24231791244146], [128.5477454868334, 41.04040833807895], [-82.4962276890258, 10.749690548337947], [-159.5113478279421, -59.40952772425053], [52.99510292157936, -52.174442678025116], [-0.6538518377390279, 57.370272172097245], [40.392868842369836, -43.669617486114554], [-84.65607878797535, 29.526729619408115], [-34.63216828589908, 37.76647049240281], [-179.39697717208057, -22.215816321087217], [78.43776559470454, 8.996069709662624], [-139.29478581722753, -7.280248222943251], [-60.144396841647556, 22.162572567939044], [-67.87817171232683, 75.49375849282627], [1.5313065402627313, 36.01180731840431], [115.70798056499375, -33.09652354891969], [-81.78434486542707, 87.57856125690867], [98.58551282729307, 82.46370831585227], [-12.859589860480849, -10.195783638364283], [-72.64032850716197, 2.7289582489870856], [-21.324259912932586, 17.466897737116], [103.82204921818207, 35.52818549063427], [92.14812197724743, 44.52206954721673], [11.711487569881651, 19.735588707179236], [-167.18500223385715, 64.72737227554884], [47.300945656885474, -36.359199775939416], [24.214597511601834, -75.61258638281737], [171.58289851491256, 6.2660755827148495], [-37.11829224180508, 68.31569172513976], [-35.008028570548895, -52.286058191428005], [-116.25374561168196, 44.537345160434356], [-167.30398720311274, -15.47321606563495], [134.0535225153797, -47.97010232533556], [-171.11301152087623, -30.070621986703692], [-31.731998507548287, 82.98295198568387], [-103.2202678602971, -47.522647538002474], [-150.31187611156417, -73.51065390994715], [59.48657373144709, -39.612861570568164], [-22.348157520350966, -36.255852128074125], [89.82607946526562, 58.49676008165162], [77.21894473961265, -89.65040987080236], [71.08053825545416, -89.46503197793288], [-70.6526888315459, -11.676355506845715], [-176.57516724224647, -85.95453039517658], [-64.999894092509, 19.42503118562664], [40.9843543462162, -50.9096136490711], [55.85003191444582, -39.490823560765335], [-9.513313667375964, 52.84822061931008], [161.14732653089615, 65.21950849041637], [-73.83911742694653, -59.52869507357007], [56.908029635527065, -64.24245686251457], [-49.56759244989037, -68.744461782392], [0.2876289833738266, 23.218956158787613], [-78.30745264931865, 68.7439281176247], [-2.9984575189819562, 64.8692622870705], [-2.9365348581359108, -43.45390624444115], [-23.057864672397255, -62.61041772388782], [175.93730256199993, 56.51281407471879], [177.22643331745732, 16.638806108075496], [-72.67448301896314, 0.576381951754521], [120.41802475385936, -18.247836761528703], [178.0464367194529, -57.69396422408724], [-125.97988065179554, 55.18044972785586], [22.845284598038358, 39.22211473191592], [-52.59724711034687, -88.2555153344195], [-95.99452517671446, 49.078771599867416], [-28.97658525247934, 26.653067810045926], [-48.42185034266823, 68.08208378131575], [-123.11306809850474, -62.34673879654831], [45.19627866484185, 18.086803299330356], [25.218369794246563, 49.444685100583], [-116.00339423830857, 86.5607500013519], [-86.08318137079198, 60.12838712893385], [-56.15179938454383, 40.34125410264002], [176.74628105492712, -17.451377168281304], [-163.72282610134525, -31.127157538142573], [-169.92743686948518, 20.67927662986883], [113.84504307263387, 56.33865489468813], [25.02348768848334, 79.60836424306002], [44.700483036007064, -83.12714217831653], [-27.786267533410243, 42.45238249510536], [-75.9266405550098, -53.60322515032279], [135.93589938397542, -46.82684855216199], [139.31301150612578, -52.915747093030774], [-124.92000745481748, 80.09625417648745], [-91.28232492639196, -26.219999771009324], [30.269641098551023, -60.01704671650472], [-178.89074826182707, -59.41246127858654], [31.335742054139182, 74.27138682570403], [-48.50594650576778, -6.793584870401168], [126.09683544653325, -38.30336369423174], [88.98008223004553, 63.27093086434179], [-109.14865897697365, -66.0945587342578], [-67.16384895371816, 16.951377758223522], [-79.52479288707195, -1.777155529580825], [-72.51680944536234, -26.671424443759967], [63.1457932692861, 35.942134868057096], [68.25967258851274, -33.24783079370749], [-48.7766036626324, 53.31401648369536], [-35.73694125239177, -51.71989638466443], [45.489828011610086, -59.109218627166356], [-157.11798805790002, 1.7575371998583966], [46.82925856278398, -51.818858729748534], [-5.586799687731618, 86.10582361220526], [144.23738490480892, 42.31002225129621], [-72.04737288498502, 46.908213530296756], [25.702359372230088, 59.29898418145599], [-83.82456811720486, 47.73465513340209], [89.39769303041223, -73.96207544976521], [155.67148630167884, -39.37840033912227], [-34.22850600770239, -39.48996698138211], [-85.25488571584259, -31.476233159307153], [-0.9834298027765342, 67.46921459072239], [81.89382281374127, 77.177601995519], [-83.41905817344052, -27.29153166321858], [3.817686719628508, 63.44161767677332], [111.19183398695596, -79.88885753177621], [-156.65790745423823, -32.957662774117466], [70.24646965362672, 22.50006869738194], [67.12153878290468, 2.2525922309763846], [-53.56978651561266, 50.90106286308163], [-87.05857266043546, 71.87519106173372], [-25.676499470460612, 33.61877741535239], [78.578484495934, 84.24374170935411], [-169.0659747861219, 60.9254176530675], [-172.5033261793862, 35.79642826058521], [-95.08505720074884, -17.358674277359512], [2.300769993426659, 48.221725928494195], [99.42740648465079, 47.660660075805495], [-3.655034828098289, -16.181287806393406], [-150.07902857907933, -4.305156814561402], [42.424336820467666, -41.24121391027964], [177.5261109697586, -13.831600885504276], [-145.6115637060905, 6.88534556254548], [158.68607314790503, -81.67181405858014], [140.05599516504495, -73.49520376838603], [-141.51581965903017, 78.89318555557928], [6.408642848086297, -3.3435791252636227], [-120.32583729281639, -24.12588692874786], [4.3810635481006255, 65.67127580773358], [90.72981509302545, 15.702506095051136], [86.60178712334103, 36.500475443995924], [25.97802585036913, -43.02592560463635], [36.58803072852401, 25.43726422866936], [60.53018903705559, 24.4247444588264], [59.456197960319315, -7.862720121889346], [47.76139490571751, 43.75398920787636], [162.12164605018302, -36.863897770633244], [91.16699823022732, -36.29966710894164], [-9.041379818365796, -29.718979243166], [-177.8846201114093, -66.00058970205559], [35.297584032429924, -83.84691945667014], [-124.76909597671758, 86.37483844207935], [153.6955607470533, 12.146171754669801], [12.846468629721812, 86.04661897455864], [-51.67350602960237, 36.22777955247066], [-35.972282389151275, 69.56273301572008], [-163.81088641565626, -39.52492208366924], [31.884528389517985, 86.41241201445642], [-126.08406956934175, -80.92295713009563], [-159.34700072133558, 45.63570834769067], [-97.67058241290027, -72.49050485255472], [41.34582146455386, -44.90592387057466], [-161.99919741214637, 31.901654583809073], [-73.90646000021935, -26.564292681267027], [72.33520109181099, -17.497820715981174], [5.154490229328443, 7.435632227000499], [35.161032651984684, 80.29512144130406], [-68.37388890544737, -40.41795304023964], [-74.79242434965299, -12.303740388448055], [146.87955854542756, 12.28233371271247], [-46.764262668948, 26.87659077135125], [114.96392801522714, -50.93900969310542], [-157.79880216465946, -55.719251600594355], [164.78721112942156, 26.144196810776528], [-97.99236192766064, 44.64843566230193], [113.7935645638053, -65.29614546149884], [-125.20434145684737, 76.65159044139781], [135.54446809543967, -18.569844272970883], [179.37533007171186, 55.236740270974835], [-23.00050528597266, -40.40426871934988], [-76.12937159075355, -22.229544684591612], [-158.1236442139087, -14.329720241294432], [83.35157006118362, 42.18037396162182], [148.32656206034733, -56.10337975336767], [-64.35460640814148, 62.02125897066887], [59.36023098649001, 56.68621308757365], [-117.17695825664813, 44.712282461556576], [-172.59253068083663, -5.9895400205590565], [-153.04760295815436, -22.042863973993903], [-49.30269568953291, -36.64400344177372], [145.49709448322335, -11.693876652623638], [113.29613698299049, -51.86315810234745], [-22.625827058524646, 10.07675483452159], [-80.60257916528396, 19.21983225161427], [23.40624631616756, -20.881030609154795], [102.17834526593457, -6.45311479420589], [-1.7477619891727336, -75.08041718083894], [61.66246554046246, 65.21626442736934], [-46.25579667749708, -5.6565418613079865], [-52.12442965829453, -18.828646223876735], [-18.73764072841781, -38.78531613956945], [110.40640537148073, 46.781292927535986], [-69.92456243010653, -47.432212470995466], [-151.68838641557255, 79.49116738981911], [-31.570004275016686, -76.80802522447961], [67.62184065460887, -88.03612121924796], [-94.84848587323255, -32.83266683914492], [-91.62880503621477, 72.97378858001146], [63.17426149978954, 11.884324903723842], [-103.3946078275211, -61.5408506133976], [156.45089086359792, 34.79299220448121], [-152.6622682902825, -65.31532427908338], [157.67221493925487, 79.58195392131071], [51.558081972763496, -8.458888183686453], [-99.41801154324331, -41.183441502433546], [-96.24293105593776, -82.32063516141287], [-165.46359729110344, -60.68395093089969], [92.78370855626798, 89.55469072623237], [132.73670364141773, -62.73660679068071], [134.61395924120401, 65.53877181671116], [-19.21344259076249, 86.55587965818279], [175.75908110953608, -31.055017378194414], [-66.2169327305288, 2.559695806991482], [-43.940298344198474, 49.92701272547882], [143.44245675952092, -54.044239333186766], [-124.30835875596946, -7.259290987925948], [-36.04939958044493, 35.17968735899673], [34.15848150424083, -55.0604880751124], [-154.84411826110124, 77.09435926649302], [-131.60656612294522, -56.996103984404776], [-120.97899321086634, -72.02031360868082], [109.51548974084095, 50.55740008547966], [151.82268356768762, 7.258199631119542], [-67.76005811197885, 76.33991346901354], [36.55399882450772, 80.18926888094882], [-161.443505000511, 68.01033370335925], [123.45439875891618, 15.550839409458295], [71.08699665423657, -2.354354465501185], [-22.753614156513386, 3.530789033354078], [-122.98645279775668, 6.146541925820994], [105.18013823330593, 0.9165913984568519], [60.8343040584137, -30.18474739830854], [124.53222483831094, 79.38230214903973], [-93.03716924011175, -83.23169709429234], [-94.83537664924549, -2.639008879329614], [-148.16414932740108, 78.50989543184726], [90.53099532158295, -89.51592956424928], [-88.01984235084969, 1.6533403409869107], [57.40088570335196, 36.91669240154781], [124.82261193997572, -38.030456018556734], [177.77151647011118, -62.74554707495796], [77.14636880944751, 66.46533914205358], [173.4226198249077, 87.44782714764924], [149.84536235724642, 75.43717075879215], [152.7770767302287, -14.270652661514834], [-110.34841056972658, -11.554833885757997], [39.61538435871251, 89.55617300323351], [-49.65631379469164, -7.216725217762194], [124.42300891783336, -59.037742975275535], [96.21965359711857, 42.15490912890698], [-14.186160754741568, -78.81080344879113], [53.808934906446325, -21.674184728463352], [-74.19722013421244, 49.92189950380359], [-18.785932170183244, 7.343547554305041], [6.660823545346544, -21.118182046857847], [-21.81020797711892, 48.9616698769012], [53.21552422039623, 0.5785985750826095], [-5.036057376652687, -23.714040922142313], [-68.26591883880741, 52.046978521462655], [-104.82280010942173, -82.04958159472082], [-66.59966237453084, 12.475647063798533], [15.230511875370265, -6.772503748462184], [90.86419552170625, -79.6352411055574], [-60.447468111429615, 26.53847575986574], [165.2273638462626, 63.41275155737245], [-164.46683196185077, -67.75661310060848], [-52.71423720422939, 38.518164000442965], [-152.62126158692948, -63.54133174072885], [163.7618366706466, -70.7278716631652], [8.136346839223005, 15.612448716314265], [4.397426281192773, 15.334861871639394], [-144.32722079484276, 52.42420789458454], [-34.293705659392316, -17.389409106768433], [-143.00181869138953, 70.35850694678932], [155.9044117255411, 65.65412114611168], [24.60116204672765, 52.932797405711504], [-179.72784017719346, -85.51259566705002], [-10.582813984343309, 11.988355546370064], [49.298034103616914, -57.38291929683724], [122.0290254056686, 4.038489623327677], [-99.6052065943267, 18.559274264196354], [-102.1282497302181, -32.14677572200459], [106.49820070621517, 41.159789954689955], [-55.40447740069071, 9.489031859981507], [-95.56049752009733, -39.405135062966764], [174.55743674553892, 28.111698037497874], [124.5619666905833, -85.41572225589144], [-101.91364200481294, 0.6555894941441931], [126.33592528317783, 57.95982163578478], [29.9810476074388, -63.171314034257655], [62.28922526913702, -27.269937668071414], [-173.9129591179621, -83.22951677964352], [118.9363259407816, 54.558568135629606], [-112.31154787200397, 26.194820030020868], [14.830678702434525, -25.51449111637437], [-22.271320614453167, -80.40932367395695], [-150.54674997471466, -62.183516062810945], [-84.3648645003649, 82.3208531730672], [108.4021795244271, 35.60296934531664], [174.81130331289557, -36.96528283981425], [-126.14140345094953, 41.20550851917237], [-68.93552806083063, 74.99510654866828], [34.10233432880463, 22.182390401924543], [67.21583918584935, -58.3338377536125], [96.37158722721406, -16.599254651579052], [137.47011153955492, 49.24236515672455], [86.08261792697702, 34.795305049370455], [-152.6092546697811, -56.51078990800351], [-98.87463021577302, -42.219035096463024], [-117.14196504654774, -59.17725056031992], [-69.11691314579166, 18.056103419460857], [0.731430198083789, 11.822476299096234], [-46.603722267042045, -37.281792830515826], [-134.10305983718413, -41.889076176017376], [-86.03449924290526, -78.08910518620482], [49.43989380223765, -55.08329043478937], [63.49777543069109, 59.409891445818396], [91.1504601021181, -11.081031430858488], [-167.83159983287263, -2.5640843897516774], [-45.273195118654705, 10.642910882857354], [-25.17432389986262, -26.02795039171513], [-14.802080289816324, 43.64235955040766], [-59.89347100338322, 4.384079981442732], [-4.71200293404646, -14.007476543729073], [-114.36802973639695, 58.149653892978975], [103.432420891703, -51.32033022702009], [10.86777893877425, -47.129372191049576], [74.35117643499186, 60.89321765124111], [140.79980159875348, 30.56922505317592], [-33.576551098203055, 5.735017907071827], [117.0947888896809, 31.275771957163805], [-98.6419753266282, -18.164761975669773], [-69.90672995297888, -62.57505169674108], [104.10214578069389, -66.67565077361523], [-106.15569930628888, -80.18929461407446], [149.22395072876503, 44.8184708221629], [-145.77427401791468, 47.782104415359036], [-3.156350758576796, 4.489463937052847], [-145.9283149505051, -53.93925277741301], [-156.66108851491958, -32.699937542307495], [127.20393635575414, -14.436209204285944], [155.39369194088837, 38.002724309641344], [-36.851340536670556, 47.861448678158226], [-111.87235536377773, -37.829687403814695], [42.482221675716154, -83.01683208039108], [128.89896343594214, 3.4753393505172703], [4.452943493199717, 41.4889510442813], [-143.7430946710105, -47.84468979089693], [-78.14637763120547, -72.55615649031793], [-36.904307301780705, -22.56905255110428], [85.71257446198523, -24.340960993170064], [-72.44146351270246, -11.528917915661863], [65.46034318561735, 57.406237397249356], [-35.424630919244144, -3.6767858863478597], [-36.14248326879171, 63.85997645701301], [35.503011924245484, 87.21236403951038], [-91.31338631174609, -8.788272772417391], [117.0783103325213, -17.714077405543556], [85.34561230522505, -42.3610910751942], [-45.79006381146777, 2.8214021661637467], [-129.88401895129715, -76.02081036613801], [-169.78721727526585, -70.42954836133306], [-85.8248599838386, -11.470966221575832], [174.55276983935454, -58.34801581764467], [-154.15149269037437, 38.25811359116263], [-31.82325883634924, 3.5047201192095567], [-179.85146417307868, -1.598875853274504], [-141.5801076885972, -77.90283914679286], [39.38520142946837, 80.9155172274728], [-94.89278265650049, -25.160621223371024], [-75.14822705402581, 81.99974310686214], [-147.66248620271895, -53.05659012198569], [83.77441529651948, 80.65072179342313], [-104.55195038239027, -62.635687720691294], [100.16472438158159, -53.980304185373924], [51.971049601262564, -52.84394234378139], [75.03346279219043, 57.8392312676857], [-5.498362503400225, -48.96852286046286], [102.75510053888213, 53.51349648336384], [107.86096986913034, -67.7005515144682], [-133.57658520537578, -63.468508702978504], [91.2305433063204, -83.66061848369077], [47.19511286981309, -81.84997847761281], [-147.9002573130828, -84.4252112057929], [-59.27787498665266, 55.05059142798824], [-176.95891807009554, 64.92977465570284], [72.23166900832592, 34.99764266102937], [-73.38627615097764, 54.327627169051766], [-174.43853672608543, 26.152000514004023], [124.33566884177556, 8.063226222182372], [137.04958601660093, 47.136600880332175], [134.27232591954075, 47.23721120337869], [11.442533202306846, 58.318069634774346], [-139.69228639643197, -23.531430815340283], [14.949998572844345, 34.700027406717325], [117.467051697748, -24.065192254173084], [-95.8336846660995, -81.76743612794685], [164.6760770740341, -83.90499364029887], [37.30614912831413, 23.822907105898985], [-111.99479701643841, -89.0185814839336], [-143.75783230002958, 27.89262581375113], [162.04814268992433, -74.31392106386909], [-128.79045112326267, 67.75816023138145], [66.16141893742957, 29.862801334382397], [-79.51261296060679, -7.456806936437834], [72.5397811469385, 8.369997719918395], [30.090705149018298, 20.180046876632645], [-87.68754915933228, -69.33483450363099], [-85.85272963904727, -56.41988123441655], [131.40013958835544, -89.348847023886], [-124.34399282463967, 13.187248132567714], [-144.59774178803872, 45.59209770797575], [75.64897658369237, 39.19977118869199], [-53.262293941312336, 32.77560537572276], [112.14494034866948, 20.442048964727817], [46.55393189490982, -66.98181498265836], [-61.688775479153506, 45.32310720123009], [-4.919303297764035, -24.52559572019361], [35.19271836005002, -43.79589824974852], [-36.59066406050249, -17.434004467077415], [-40.70857707869333, -87.01013522726099], [-142.52531371479898, 21.445819924679235], [106.62061414396705, -60.100816444593335], [24.21194434459774, 74.8694126486618], [-119.40100473898485, -15.946373346707459], [51.98671965384296, -37.16824623323038], [122.01245104230131, -64.61678421067516], [-61.23843489874172, -7.132011880891351], [65.15284978621864, 71.88046989841413], [1.6695208800780126, -15.139949761374204], [-59.62063806174913, -55.6844782863935], [76.4968433235805, -38.535648577420424], [52.434958192306084, 56.86326985634429], [-37.1357739949062, -2.512542704420433], [139.5370624581401, -34.716113476273634], [-4.9826454507252915, 55.67311839856565], [-88.13533551951882, -44.14699961307156], [-58.38533160622903, -65.80160315483822], [-24.235910355967984, 57.01615914712882], [161.81829975941608, -48.95754932750611], [144.99755306499367, -40.125467782954885], [120.52558037743233, 66.12227926052036], [149.10929414157417, 45.001468911448356], [135.38956099484727, 44.795392422641996], [47.06958144966822, 82.56613235866641], [29.27250232332917, 44.34131663578927], [-172.7286331402742, -10.053719856578258], [-134.2705400018382, -9.116039657933186], [4.369975537462736, -28.00855928457932], [-102.46219571565955, 8.927375094206225], [28.172324922362844, -20.824207199996533], [80.93373891241173, 41.278855207755086], [13.846311533764126, -33.274854084929856], [41.95539442499039, 88.86879586995552], [-112.08427091570466, -33.40774724466566], [54.45371760381715, 33.676847520023074]] };

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ }

});