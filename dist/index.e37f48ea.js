// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainScss = require("../sass/main.scss");
var _modelJs = require("./model.js");
var _modalViewJs = require("./views/modalView.js");
var _modalViewJsDefault = parcelHelpers.interopDefault(_modalViewJs);
var _navbarViewJs = require("./views/navbarView.js");
var _navbarViewJsDefault = parcelHelpers.interopDefault(_navbarViewJs);
var _imageViewJs = require("./views/imageView.js");
var _imageViewJsDefault = parcelHelpers.interopDefault(_imageViewJs);
var _servicesViewJs = require("./views/servicesView.js");
var _servicesViewJsDefault = parcelHelpers.interopDefault(_servicesViewJs);
var _weatherViewJs = require("./views/weatherView.js");
var _weatherViewJsDefault = parcelHelpers.interopDefault(_weatherViewJs);
"use strict";
const controlToggleMobileMenu = function() {
    _modelJs.toggleMenuState();
    (0, _navbarViewJsDefault.default).render(_modelJs.state.isMenuOpen);
};
const controlServices = function(clickedBtn) {
    (0, _servicesViewJsDefault.default).toggleActiveButton(clickedBtn);
};
const controlWeather = async function() {
    try {
        await _modelJs.loadWeather();
        (0, _weatherViewJsDefault.default).render(_modelJs.state.weather);
    } catch (err) {
        console.error(err);
        (0, _weatherViewJsDefault.default).renderError();
    }
};
const controlCloseModal = function() {
    (0, _modalViewJsDefault.default).closeModal();
};
const init = async function() {
    (0, _navbarViewJsDefault.default).addHandlerToggle(controlToggleMobileMenu);
    (0, _navbarViewJsDefault.default).initStickyNav();
    (0, _modalViewJsDefault.default).addHandlerCloseModal(controlCloseModal);
    (0, _imageViewJsDefault.default).initLazyLoad();
    await controlWeather();
    if (document.querySelector(".services__list")) (0, _servicesViewJsDefault.default).addClickHandler(controlServices);
};
init();

},{"../sass/main.scss":"dFl68","./model.js":"Y4A21","./views/navbarView.js":"xAXOZ","./views/imageView.js":"gCt5I","./views/servicesView.js":"2voDy","./views/weatherView.js":"jcuJR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/modalView.js":"8QpnA"}],"dFl68":[function() {},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "toggleMenuState", ()=>toggleMenuState);
parcelHelpers.export(exports, "loadWeather", ()=>loadWeather);
var _configJs = require("./config.js");
const state = {
    isMenuOpen: false,
    weather: {
        current: {},
        minutely: {}
    }
};
function toggleMenuState() {
    state.isMenuOpen = !state.isMenuOpen;
}
const createCurrentWeatherObject = function(data) {
    const { current } = data;
    return {
        feelsLike: `${Math.round(current.feels_like)}\xb0F in Canton`,
        description: current.weather[0].description,
        icon: current.weather[0].icon
    };
};
const createMinutelyWeatherString = function(data) {
    const { minutely } = data;
    const rainMinute = minutely?.find((minute)=>minute.precipitation > 0);
    if (rainMinute) {
        const currentTime = Math.floor(Date.now() / 1000);
        const minutesUntilRain = Math.round((rainMinute.dt - currentTime) / 60);
        return `Rain starting in ${minutesUntilRain} minutes.`;
    } else return "No rain expected in the next hour.";
};
const loadWeather = async function() {
    try {
        const res = await fetch(`${(0, _configJs.API_URL)}${(0, _configJs.API_KEY)}`);
        const data = await res.json();
        if (!res.ok) throw new Error("Failed to fetch weather data");
        state.weather.current = createCurrentWeatherObject(data);
        state.weather.minutely = createMinutelyWeatherString(data);
    } catch (err) {
        console.error(err);
    }
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
const API_KEY = "af60b2f2f7d84ec266abbe85e39f343e";
const API_URL = "https://api.openweathermap.org/data/3.0/onecall?lat=40.5581&lon=-90.0351&units=imperial&appid=";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"xAXOZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class NavbarView extends (0, _viewsJsDefault.default) {
    #parentElement = document.querySelector(".header");
    #toggleBtn;
    #toggleBtnIcon;
    #mobileMenu;
    #hero;
    #heroBgVideo;
    #pageHero;
    #navHeight;
    constructor(){
        super();
        this.#toggleBtn = this.#parentElement.querySelector(".navbar__toggle-btn");
        this.#toggleBtnIcon = this.#toggleBtn.querySelector(".navbar__toggle-btn-icon");
        this.#mobileMenu = this.#parentElement.querySelector(".navbar__mobile");
        this.#hero = document.querySelector(".hero");
        this.#heroBgVideo = document.querySelector(".hero__video");
        this.#pageHero = document.querySelector(".page-hero");
        this.#navHeight = this.#parentElement.getBoundingClientRect().height;
    }
    render(data) {
        this._data = data;
        this._toggleMobileMenuIcon();
    }
    _toggleMobileMenuIcon() {
        if (!this.#toggleBtnIcon || !this.#mobileMenu) return;
        this.#mobileMenu.classList.toggle("navbar__mobile--open", this._data);
        this.#toggleBtnIcon.classList = this._data ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    }
    addHandlerToggle(handler) {
        if (!this.#toggleBtn) return;
        this.#toggleBtn.addEventListener("click", handler);
    }
    initStickyNav() {
        const stickyNav = (entries)=>{
            const [entry] = entries;
            if (!entry.isIntersecting) this.#parentElement.classList.add("header--sticky");
            else this.#parentElement.classList.remove("header--sticky");
            if (this.#hero) {
                this.#hero.style.paddingTop = `${this.#navHeight}px`;
                this.#heroBgVideo.style.height = `calc(100vh - ${this.#navHeight}px)`;
            }
        };
        // IntersectionObserver configuration
        const mainObserver = new IntersectionObserver(stickyNav, {
            root: null,
            threshold: 0,
            rootMargin: `-${this.#navHeight}px`
        });
        // Observe the hero and pageHero sections
        if (this.#hero) mainObserver.observe(this.#hero);
        if (this.#pageHero) mainObserver.observe(this.#pageHero);
    }
}
exports.default = new NavbarView();

},{"./Views.js":"tgSJX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tgSJX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Views {
    _data;
    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this.clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    clear() {
        this._parentElement.innerHTML = "";
    }
}
exports.default = Views;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCt5I":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
var _helpersJs = require("../helpers.js");
class ImageView extends (0, _viewsJsDefault.default) {
    #targetImgs;
    initLazyLoad() {
        this.#targetImgs = document.querySelectorAll("img[data-src]");
        const handleLazyLoad = function(entries, observer) {
            const [entry] = entries;
            if (!entry.isIntersecting) return;
            const imageName = entry.target.getAttribute("data-src");
            const fullImagePath = (0, _helpersJs.loadImage)(imageName);
            if (!fullImagePath) return;
            entry.target.src = fullImagePath;
            entry.target.addEventListener("load", ()=>{
                entry.target.classList.replace("lazy_img", "lazy_img--loaded");
            });
            observer.unobserve(entry.target);
        };
        const imgObserver = new IntersectionObserver(handleLazyLoad, {
            root: null,
            threshold: 0,
            rootMargin: "50px"
        });
        this.#targetImgs.forEach((img)=>imgObserver.observe(img));
    }
}
exports.default = new ImageView();

},{"./Views.js":"tgSJX","../helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadImage", ()=>loadImage);
var _signJpeg = require("../assets/images/sign.jpeg");
var _signJpegDefault = parcelHelpers.interopDefault(_signJpeg);
var _ventracJpg = require("../assets/images/ventrac.jpg");
var _ventracJpgDefault = parcelHelpers.interopDefault(_ventracJpg);
var _plowWebp = require("../assets/images/plow.webp");
var _plowWebpDefault = parcelHelpers.interopDefault(_plowWebp);
var _stripes2Webp = require("../assets/images/stripes2.webp");
var _stripes2WebpDefault = parcelHelpers.interopDefault(_stripes2Webp);
var _stripes3Webp = require("../assets/images/stripes3.webp");
var _stripes3WebpDefault = parcelHelpers.interopDefault(_stripes3Webp);
const imageMap = {
    "sign.jpeg": (0, _signJpegDefault.default),
    "ventrac.jpg": (0, _ventracJpgDefault.default),
    "plow.webp": (0, _plowWebpDefault.default),
    "stripes2.webp": (0, _stripes2WebpDefault.default),
    "stripes3.webp": (0, _stripes3WebpDefault.default)
};
function loadImage(imageName) {
    if (imageMap[imageName]) return imageMap[imageName];
    else {
        console.error(`Image not found: ${imageName}`);
        return null;
    }
}

},{"../assets/images/sign.jpeg":"lLSk2","../assets/images/ventrac.jpg":"huhlA","../assets/images/plow.webp":"a2th4","../assets/images/stripes2.webp":"hhg6d","../assets/images/stripes3.webp":"8Q9il","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lLSk2":[function(require,module,exports) {
module.exports = require("240f8711a7efc17d").getBundleURL("hWUTQ") + "sign.90e0caf5.jpeg" + "?" + Date.now();

},{"240f8711a7efc17d":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"huhlA":[function(require,module,exports) {
module.exports = require("aabcbaeb1cfa3721").getBundleURL("hWUTQ") + "ventrac.cf6f68b2.jpg" + "?" + Date.now();

},{"aabcbaeb1cfa3721":"lgJ39"}],"a2th4":[function(require,module,exports) {
module.exports = require("96af6ce8319ab388").getBundleURL("hWUTQ") + "plow.668b6934.webp" + "?" + Date.now();

},{"96af6ce8319ab388":"lgJ39"}],"hhg6d":[function(require,module,exports) {
module.exports = require("d3e63ca765cbedaf").getBundleURL("hWUTQ") + "stripes2.e0ea98a8.webp" + "?" + Date.now();

},{"d3e63ca765cbedaf":"lgJ39"}],"8Q9il":[function(require,module,exports) {
module.exports = require("a1b9e5a8c42f22e7").getBundleURL("hWUTQ") + "stripes3.d7f7321b.webp" + "?" + Date.now();

},{"a1b9e5a8c42f22e7":"lgJ39"}],"2voDy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _views = require("./Views");
var _viewsDefault = parcelHelpers.interopDefault(_views);
class ServicesView extends (0, _viewsDefault.default) {
    #parentElement;
    #servicesButtons;
    #servicesDescriptions;
    constructor(){
        super();
        this.#parentElement = document.querySelector(".services__list");
        this.#servicesButtons = document.querySelectorAll(".services__list .btn");
        this.#servicesDescriptions = document.querySelectorAll(".services__description");
        if (!this.#parentElement) return;
        window.addEventListener("resize", this._handleResize.bind(this));
    }
    _handleResize() {
        if (window.innerWidth <= 1130) this.#servicesButtons.forEach((b)=>b.style.transform = "translateY(0)");
    }
    addClickHandler(handler) {
        this.#parentElement.addEventListener("click", function(e) {
            const clicked = e.target.closest(".btn");
            if (!clicked) return;
            handler(clicked);
        });
    }
    toggleActiveButton(clicked) {
        this.#servicesButtons.forEach((button)=>{
            button.classList.remove("service--active");
            button.style.transform = "translateY(0)";
        });
        clicked.classList.add("service--active");
        if (window.innerWidth >= 1130) clicked.style.transform = "translateY(-25%)";
        this.#servicesDescriptions.forEach((desc)=>{
            desc.classList.add("hidden");
        });
        const targetDescription = document.querySelector(`.services__description--${clicked.dataset.tab}`);
        if (targetDescription) targetDescription.classList.remove("hidden");
    }
}
exports.default = new ServicesView();

},{"./Views":"tgSJX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcuJR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class WeatherView extends (0, _viewsJsDefault.default) {
    _parentElement;
    constructor(){
        super();
        this._parentElement = document.querySelector(".footer__weather");
    }
    _generateMarkup() {
        return `
    <p class="footer__weather-text">Feels like ${this._data.current.feelsLike}.</p>
    <p class="footer__weather-text">${this._data.minutely}</p>
    `;
    }
    renderError(message = "Something went wrong while fetching weather data.") {
        this._parentElement.textContent = message;
    }
}
exports.default = new WeatherView();

},{"./Views.js":"tgSJX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8QpnA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewsJs = require("./Views.js");
var _viewsJsDefault = parcelHelpers.interopDefault(_viewsJs);
class ModalView extends (0, _viewsJsDefault.default) {
    modal;
    overlay;
    modalCloseBtn;
    constructor(){
        super();
        this.modal = document.querySelector(".modal");
        this.overlay = document.querySelector(".modal__overlay");
        this.modalCloseBtn = document.querySelector(".modal__close");
    }
    addHandlerCloseModal(handler) {
        if (!this.modal) return;
        this.modalCloseBtn.addEventListener("click", handler);
    }
    closeModal() {
        this.modal.classList.add("hidden");
        this.overlay.classList.add("hidden");
    }
}
exports.default = new ModalView();

},{"./Views.js":"tgSJX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire177f")

//# sourceMappingURL=index.e37f48ea.js.map
