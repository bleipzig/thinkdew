/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/css/src/customize-controls.css":
/*!***********************************************!*\
  !*** ./assets/css/src/customize-controls.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/src/customizer/customize-controls.js":
/*!*****************************************************!*\
  !*** ./assets/src/customizer/customize-controls.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global jQuery, materialDesignThemeColorControls */

/**
 * WordPress dependencies
 */

/**
 * Customizer enhancements for a better user experience.
 *
 * Contains extra logic for our Customizer controls & settings.
 *
 * @since 1.0.0
 */

(function ($, api) {
  api.MoreOptionsControl = api.Control.extend({
    ready: function ready() {
      var control = this;
      control.container.find('.material-show-more-options').on('click', function (event) {
        event.preventDefault();

        if (control.params && Array.isArray(control.params.controls)) {
          var display = $(event.target).is('.less-options') ? 'none' : 'list-item';
          hideOrShowControls(control.params.controls, display);
        }

        control.container.parent().toggleClass('show-options');
      });

      if (control.params && Array.isArray(control.params.controls)) {
        hideOrShowControls(control.params.controls, 'none');
      }
    }
  });
  /**
   * Extends wp.customize.controlConstructor with custom controls.
   */

  $.extend(api.controlConstructor, {
    more_options: api.MoreOptionsControl
  });

  var hideOrShowControls = function hideOrShowControls(controls, display) {
    controls.forEach(function (controlId) {
      var colorControl = api.control(controlId);

      if (colorControl) {
        colorControl.container.css('display', display);
      }
    });
  };

  api.bind('ready', function () {
    api('archive_layout').bind(function (value) {
      var isCardLayout = 'card' === value;
      var controls = ['archive_card_options', 'archive_comments', 'archive_author', 'archive_excerpt', 'archive_date', 'archive_outlined'];
      controls.forEach(function (control) {
        return api.control(control).active.set(isCardLayout);
      });
    });
    var hideHeaderDescription = document.querySelector('#customize-control-header_title_display');
    var hideHeaderDescriptionEl = hideHeaderDescription.querySelector('.description');

    if (hideHeaderDescription.querySelector('input:checked')) {
      hideHeaderDescriptionEl.classList.add('-display');
    }

    api('header_title_display').bind(function (value) {
      if (value) {
        hideHeaderDescriptionEl.classList.add('-display');
      } else {
        hideHeaderDescriptionEl.classList.remove('-display');
      }
    });

    if (materialDesignThemeColorControls && materialDesignThemeColorControls.length) {
      materialDesignThemeColorControls.forEach(function (controlId) {
        var control = api.control(controlId);

        if (!control) {
          return;
        } // Update the label to `Reset`.


        control.container.find('.wp-picker-clear, .wp-picker-default').val(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Reset', 'material-design')).attr('aria-label', Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Reset to default color', 'material-design')); // Clear the color on `clear` button click.

        control.container.on('click', function (event) {
          event.preventDefault();
          control.setting.set('');
        });
      });
    }
  });
})(jQuery, wp.customize);

/***/ }),

/***/ 0:
/*!***************************************************************************************************!*\
  !*** multi ./assets/src/customizer/customize-controls.js ./assets/css/src/customize-controls.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/src/customizer/customize-controls.js */"./assets/src/customizer/customize-controls.js");
module.exports = __webpack_require__(/*! ./assets/css/src/customize-controls.css */"./assets/css/src/customize-controls.css");


/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=customize-controls.js.map