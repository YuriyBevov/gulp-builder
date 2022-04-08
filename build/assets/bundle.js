/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/classes/Modal.js":
/*!**************************************!*\
  !*** ./src/scripts/classes/Modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = /*#__PURE__*/function () {
  function Modal(modal) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Modal);

    _defineProperty(this, "bodyLocker", function (bool) {
      if (_this.isInited) {
        var body = document.querySelector('body');

        if (bool) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = 'auto';
        }
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    _defineProperty(this, "focusTrap", function () {
      if (_this.isInited) {
        var focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

        var firstFocusableElement = _this.modal.querySelectorAll(focusableElements)[0];

        var focusableContent = _this.modal.querySelectorAll(focusableElements);

        var lastFocusableElement = focusableContent[focusableContent.length - 1];

        var onBtnClickHandler = function onBtnClickHandler(evt) {
          var isTabPressed = evt.key === 'Tab' || evt.key === 9;

          if (evt.key === 'Escape') {
            document.removeEventListener('keydown', onBtnClickHandler);
          }

          if (!isTabPressed) {
            return;
          }

          if (evt.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              evt.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              evt.preventDefault();
            }
          }
        };

        document.addEventListener('keydown', onBtnClickHandler);
        firstFocusableElement.focus();
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    _defineProperty(this, "addListeners", function () {
      if (_this.isInited) {
        _this.openers.forEach(function (opener) {
          opener.removeEventListener('click', _this.openModal);
        });

        document.addEventListener('click', _this.closeByOverlayClick);
        document.addEventListener('keydown', _this.closeByEscBtn);

        _this.close.addEventListener('click', _this.closeByBtnClick);
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    _defineProperty(this, "refresh", function () {
      if (_this.isInited) {
        _this.isBodyLocked ? _this.bodyLocker(false) : null;
        document.removeEventListener('click', _this.closeByOverlayClick);
        document.removeEventListener('keydown', _this.closeByEscBtn);

        _this.close.removeEventListener('click', _this.closeByBtnClick);

        _this.overlay.classList.remove('is-opened');

        _this.modal.classList.remove('is-active');

        _this.openers.forEach(function (opener) {
          opener.addEventListener('click', _this.openModal);
        });
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    _defineProperty(this, "closeByOverlayClick", function (evt) {
      if (_this.isInited) {
        if (evt.target === _this.overlay) {
          _this.refresh();
        }
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    _defineProperty(this, "closeByEscBtn", function (evt) {
      if (_this.isInited) {
        if (evt.key === "Escape") {
          _this.refresh();
        }
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    _defineProperty(this, "closeByBtnClick", function () {
      if (_this.isInited) {
        _this.refresh();
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    _defineProperty(this, "openModal", function (evt) {
      evt.preventDefault();

      if (_this.isInited) {
        _this.isBodyLocked ? _this.bodyLocker(true) : null;

        _this.overlay.classList.add('is-opened');

        _this.modal.classList.add('is-active');

        _this.addListeners();

        _this.focusTrap();
      } else {
        console.error('Для инициализации используй new Modal(_modal-selector_).init()');
      }
    });

    this.isBodyLocked = options.isBodyLocked ? true : false, this.modal = modal;
    this.id = this.modal.getAttribute('id');
    this.openers = document.querySelectorAll('[data-modal-anchor="' + this.id + '"]');
    this.isInited = false;
    this.overlay = this.modal.parentNode;
    this.close = this.modal.querySelector('.modal__close');
  }

  _createClass(Modal, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      if (this.openers) {
        this.isInited = true;
        this.openers.forEach(function (opener) {
          opener.addEventListener('click', _this2.openModal, _this2.modal, _this2.overlay);
        });
      } else {
        console.error('Не добавлена кнопка открытия модального окна, либо в ней не прописан аттр-т: data-modal-anchor={modal-id} ');
      }
    }
  }]);

  return Modal;
}();

/***/ }),

/***/ "./src/scripts/modules/testModule.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/testModule.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Modal.js */ "./src/scripts/classes/Modal.js");

var modals = document.querySelectorAll('.modal');
modals.forEach(function (modal) {
  new _classes_Modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal(modal).init();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_testModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/testModule.js */ "./src/scripts/modules/testModule.js");
 //import "./vue/main.js";
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map