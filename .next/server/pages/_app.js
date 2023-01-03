(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lY": () => (/* binding */ MainProvider)
});

// UNUSED EXPORTS: MainContext, getStaticProps, useMainContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./utils/debounce.js
function debounce(fn, ms) {
    let timer;
    return ()=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}
/* harmony default export */ const utils_debounce = (debounce);

;// CONCATENATED MODULE: ./contexts/Main.context.js



const MainContext = /*#__PURE__*/ (0,external_react_.createContext)();
const MainProvider = ({ globalData , children  })=>{
    const [menuOpen, setMenuOpen] = (0,external_react_.useState)(false);
    const [allFontsLoaded, setAllFontsLoaded] = (0,external_react_.useState)(false);
    const isMenuOpenClass = "is-menu-open";
    const [windowSize, setWindowSize] = (0,external_react_.useState)({
        width: undefined,
        height: undefined
    });
    const [scrollInstance, setScrollInstance] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        document.fonts.ready.then(function() {
            setAllFontsLoaded(true);
        });
    }, []);
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        handleResize();
        const debouncedHandleResize = utils_debounce(handleResize, 200);
        window.addEventListener("resize", debouncedHandleResize);
        return ()=>window.removeEventListener("resize", debouncedHandleResize);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (menuOpen) {
            document.body.classList.add(isMenuOpenClass);
        } else {
            document.body.classList.remove(isMenuOpenClass);
        }
    }, [
        menuOpen
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MainContext.Provider, {
        value: {
            menuOpen,
            setMenuOpen,
            allFontsLoaded,
            windowSize,
            scrollInstance,
            setScrollInstance,
            globalData
        },
        children: children
    });
};
async function getStaticProps() {
    const res = await fetch(`${process.env.REST_API}/graphql`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
			query options {
			  acfOptionsGeneral {
				menu {
				  logo {
					altText
					link
					mediaDetails {
					  height
					  width
					}
				  }
				  address {
					lineOne
					lineTwo
				  }
				  available {
					titleContact
					itemsAvailable {
					  iconAv {
						altText
						id
						link
						mediaDetails {
						  height
						  width
						}
					  }
					}
				  }
				  buttonsHead {
					itemButton {
					  slugButton
					  titleButton
					}
				  }
				  contactMenu {
					titleContact
					itemsContact {
					  titleCon
					  urlCon
					}
				  }
				  menuList {
					itemMenu {
					  slugItem
					  textItem
					}
				  }
				  menuList2 {
					itemMenu {
					  slugItem
					  textItem
					}
				  }
				  socialMedia {
					titleSm
					itemsSm {
					  titleSm
					  urlSm
					}
				  }
				}
				footer {
					availableFooter {
					  title
					  icons {
						icon {
						  altText
						  link
						  mediaDetails {
							height
							width
						  }
						}
					  }
					}
					block1 {
					  title
					  slug
					}
					block2 {
					  slug
					  title
					}
					block3 {
					  title
					  slug
					}
					buttonFooter {
					  titleBtn
					  slugBtn
					}
					copyright
					credits {
					  line2
					  line1
					}
					logoFooter {
					  altText
					  link
					  mediaDetails {
						width
						height
					  }
					}
				  }
			  }
			}
			`
        })
    });
    const json = await res.json();
    return {
        props: {
            globalMenu: json.data.acfOptionsGeneral
        }
    };
}
MainContext.displayName = "MainContext";
const useMainContext = ()=>{
    return useContext(MainContext);
};


/***/ }),

/***/ 484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(544);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_Main_context_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(582);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(197);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(119);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bemit_bemit_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(497);
/* harmony import */ var _bemit_bemit_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_bemit_bemit_scss__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function MyApp({ Component , pageProps , router  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_Main_context_js__WEBPACK_IMPORTED_MODULE_4__/* .MainProvider */ .lY, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {
            mode: "wait",
            initial: false,
            children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {
                ...pageProps,
                key: router.asPath
            })
        })
    });
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 497:
/***/ (() => {



/***/ }),

/***/ 832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 342:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-ssr-error.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,736], () => (__webpack_exec__(484)));
module.exports = __webpack_exports__;

})();