/*! For license information please see widget.js.LICENSE.txt */
(() => {
  var e = {
      600: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
        const o =
          ((a = {}),
          function (e) {
            return (
              void 0 === a[e] &&
                (a[e] =
                  ((t = e),
                  r.test(t) ||
                    (111 === t.charCodeAt(0) &&
                      110 === t.charCodeAt(1) &&
                      t.charCodeAt(2) < 91))),
              a[e]
            );
            var t;
          });
        var a;
      },
      426: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => a });
        var r = n(645),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "@import url(https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);",
        ]),
          o.push([
            e.id,
            "/* Chat widget */\n\nbody {\n  font-family: Be Vietnam Pro, sans-serif;\n}\n\n#parent-box {\n  position: fixed;\n  z-index: 2147483003;\n  bottom: 0;\n  right: 0;\n  width: 300px;\n  display: flex;\n  flex-direction: column-reverse;\n  background-color: transparent;\n}\n\n#chat-widget {\n  font-family: Be Vietnam Pro, sans-serif;\n  position: absolute;\n  z-index: 2147483003;\n  bottom: 20px;\n  right: 20px;\n  border: 1px;\n  border-radius: 50px;\n  width: 60px;\n  height: 60px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  margin-top: 20%;\n}\n\n/* Chat window */\n\n#chat-window {\n  font-family: Be Vietnam Pro, sans-serif;\n  position: absolute;\n  z-index: 2147483003;\n  top: 30px;\n  bottom: 100px;\n  right: 20px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;\n  width: 380px;\n  /* border: 1px solid #dfdfdf; */\n  border-radius: 20px;\n  cursor: pointer;\n  transition: max-height 0.2s ease;\n  -webkit-tap-highlight-color: transparent;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#top-bar {\n  font-family: Be Vietnam Pro, sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  min-height: 100px;\n  width: 100%;\n  border-radius: 15px 15px 0px 0px;\n  margin-bottom: auto;\n  margin-top: 0px;\n}\n\n#header-text {\n  font-family: Be Vietnam Pro, sans-serif;\n  color: #fff;\n  margin: 0px 0px 10px 20px;\n  padding-top: 20px;\n  font-weight: 500;\n  font-size: 25px;\n}\n\n#description-text {\n  font-family: Be Vietnam Pro, sans-serif;\n  color: #fff;\n  margin: 0px 0px 0px 20px;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 400;\n}\n\n#text-window {\n  font-family: Be Vietnam Pro, sans-serif;\n  height: 60vh;\n  width: 100%;\n  margin-bottom: auto;\n  background: #fafafa;\n  border-radius: 0px;\n  overflow-y: auto;\n  overflow-y: scroll !important;\n  flex: 1 1 auto;\n}\n\n#fusion-branding {\n  font-family: Be Vietnam Pro, sans-serif;\n  height: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin-bottom: auto;\n  background: #f9f9f9;\n  border-radius: 0px;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 12px;\n  font-weight: 400;\n}\n\n#fusion-website-link {\n  font-family: Be Vietnam Pro, sans-serif;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 400;\n  color: #b0b0b0;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  backdrop-filter: blur(1px);\n  margin-bottom: 5px;\n}\n\n#fusion-website-link:hover {\n  text-decoration: none;\n  color: #1890ff;\n}\n\n#input-section {\n  font-family: Be Vietnam Pro, sans-serif;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 5px 0px 0px 0px;\n  padding: 5px 0px 5px 0px;\n  align-items: center;\n}\n\n#email-input {\n  font-family: Be Vietnam Pro, sans-serif;\n  border: transparent;\n  border-color: transparent;\n  font-size: 15px;\n  height: 10px;\n  line-height: 15px;\n  font-weight: 300;\n  width: 85%;\n  outline: none;\n  padding: 10px;\n  margin: 2px 0px 2px 0px;\n  overflow-y: scroll;\n  overflow-x: unset;\n  color: #000;\n}\n\n#divider {\n  height: 1px;\n  margin: 5px 0px 5px 0px;\n  width: 85%;\n  background-color: #ececec;\n}\n\n#input-section-2 {\n  font-family: Be Vietnam Pro, sans-serif;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 0px 5px 0px;\n}\n\n#text-input {\n  font-family: Be Vietnam Pro, sans-serif;\n  border: transparent;\n  border-color: transparent;\n  font-size: 15px;\n  height: 20px;\n  line-height: 15px;\n  font-weight: 300;\n  width: 70%;\n  outline: none;\n  padding: 10px;\n  overflow-y: scroll;\n  overflow-x: unset;\n  color: #000;\n}\n\n#text-input::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #949494;\n  font-size: 15px;\n  font-weight: 300;\n}\n#text-input::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #949494;\n  font-size: 15px;\n  font-weight: 300;\n}\n#text-input:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #949494;\n  font-size: 15px;\n  font-weight: 300;\n}\n#text-input:-moz-placeholder {\n  /* Firefox 18- */\n  color: #949494;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n#send-button {\n  height: 42px;\n  width: 42px;\n  border: transparent;\n  color: #fff;\n  margin-top: 0px;\n  margin-left: 10px;\n  border-radius: 100px;\n  cursor: pointer;\n}\n\n#fusion-website-link {\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 400;\n  color: #b0b0b0;\n  -webkit-transition: 0.5s;\n  -moz-transition: 0.5s;\n  backdrop-filter: blur(1px);\n}\n\n#fusion-website-link:hover {\n  text-decoration: none;\n  color: #1890ff;\n}\n\n/* chat-bubbules */\n#user-chat-bubble {\n  font-family: Be Vietnam Pro, sans-serif;\n  min-height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: fit-content;\n  max-width: 85%;\n  background: #eaeaea;\n  color: #000;\n  border-radius: 10px;\n  margin: 10px 10px 10px 0px;\n  margin-left: auto;\n  font-weight: 300;\n  font-size: 14px;\n  word-break: break-all;\n  padding-right: 20px;\n}\n\n#agent-chat-bubble {\n  font-family: Be Vietnam Pro, sans-serif;\n  min-height: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: fit-content;\n  max-width: 85%;\n  color: #fff;\n  border-radius: 10px;\n  margin: 10px 0px 10px 10px;\n  margin-right: auto;\n  font-weight: 300;\n  font-size: 14px;\n  word-break: break-all;\n  padding-right: 30px;\n}\n\n/* popup */\n\n#popup-container {\n  font-family: Be Vietnam Pro, sans-serif;\n  position: fixed;\n  z-index: 2147483003;\n  bottom: 90px;\n  right: 20px;\n  background: transparent;\n  height: 450px;\n  max-width: 350px;\n  transition: max-height 0.2s ease;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-end;\n  -webkit-tap-highlight-color: transparent;\n}\n\n#popup-bubble {\n  font-family: Be Vietnam Pro, sans-serif;\n  display: flex;\n  justify-content: center;\n  white-space: pre-line;\n  align-items: center;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;\n  min-height: 20px;\n  height: auto;\n  width: fit-content;\n  max-width: 90%;\n  border: 1px solid #dfdfdf;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: max-height 0.2s ease;\n  font-weight: 300;\n  font-size: 14px;\n  padding: 15px;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  word-break: break-all;\n}\n\n/* ------------------ Responsiveness --------------- */\n\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  /* #parent-box {\n    display: flex;\n    flex-direction: column-reverse;\n    height: 100vh;\n    background-color: transparent;\n  }\n\n  #chat-widget {\n    bottom: 20px;\n    right: 20px;\n  }\n  */\n  #chat-window {\n    top: 100px;\n    right: 5vw;\n    width: 90vw;\n    border: none;\n  }\n  #top-bar {\n    min-height: 100px;\n    width: 100%;\n    margin-top: 0px;\n  }\n\n  #header-text {\n    padding-top: 15px;\n    font-weight: 400;\n    font-size: 25px;\n  }\n\n  #description-text {\n    font-size: 15px;\n    font-weight: 300;\n  }\n\n  #text-window {\n    flex: 1 1 auto;\n  }\n\n  #text-input {\n    border-radius: none;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n\n  #send-button {\n    height: 40px;\n    width: 40px;\n    margin-left: 5px;\n  }\n\n  #fusion-website-link {\n    font-weight: 300;\n    font-size: 14px;\n  }\n\n  #popup-container {\n    bottom: 80px;\n    right: 10px;\n    height: 40%;\n    max-width: 60%;\n  }\n\n  #popup-bubble {\n    min-height: 15px;\n    font-size: 12px;\n    padding: 10px;\n    margin-bottom: 2px;\n    margin-top: 2px;\n  }\n}\n",
            "",
          ]);
        const a = o;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && o[u[0]]) ||
                  (n &&
                    (u[2]
                      ? (u[2] = "".concat(n, " and ").concat(u[2]))
                      : (u[2] = n)),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      284: (e) => {
        var t = function () {
          if ("object" == typeof self && self) return self;
          if ("object" == typeof window && window) return window;
          throw new Error("Unable to resolve global `this`");
        };
        e.exports = (function () {
          if (this) return this;
          if ("object" == typeof globalThis && globalThis) return globalThis;
          try {
            Object.defineProperty(Object.prototype, "__global__", {
              get: function () {
                return this;
              },
              configurable: !0,
            });
          } catch (e) {
            return t();
          }
          try {
            return __global__ || t();
          } finally {
            delete Object.prototype.__global__;
          }
        })();
      },
      422: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => r });
        const r = n.p + "index.html";
      },
      418: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null == e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, a) {
              for (var i, l, u = o(e), s = 1; s < arguments.length; s++) {
                for (var c in (i = Object(arguments[s])))
                  n.call(i, c) && (u[c] = i[c]);
                if (t) {
                  l = t(i);
                  for (var f = 0; f < l.length; f++)
                    r.call(i, l[f]) && (u[l[f]] = i[l[f]]);
                }
              }
              return u;
            };
      },
      448: (e, t, n) => {
        "use strict";
        var r = n(294),
          o = n(418),
          a = n(840);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(i(227));
        var l = new Set(),
          u = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var f = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          m = {},
          v = {};
        function h(e, t, n, r, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var o = g.hasOwnProperty(t) ? g[t] : null;
          (null !== o
            ? 0 === o.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function (e) {
                  return (
                    !!p.call(v, e) ||
                    (!p.call(m, e) &&
                      (d.test(e) ? (v[e] = !0) : ((m[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (o = o.type) || (4 === o && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          E = 60106,
          S = 60107,
          C = 60108,
          P = 60114,
          T = 60109,
          A = 60110,
          _ = 60112,
          L = 60113,
          M = 60120,
          O = 60115,
          R = 60116,
          N = 60121,
          z = 60128,
          V = 60129,
          D = 60130,
          j = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var I = Symbol.for;
          (k = I("react.element")),
            (E = I("react.portal")),
            (S = I("react.fragment")),
            (C = I("react.strict_mode")),
            (P = I("react.profiler")),
            (T = I("react.provider")),
            (A = I("react.context")),
            (_ = I("react.forward_ref")),
            (L = I("react.suspense")),
            (M = I("react.suspense_list")),
            (O = I("react.memo")),
            (R = I("react.lazy")),
            (N = I("react.block")),
            I("react.scope"),
            (z = I("react.opaque.id")),
            (V = I("react.debug_trace_mode")),
            (D = I("react.offscreen")),
            (j = I("react.legacy_hidden"));
        }
        var F,
          U = "function" == typeof Symbol && Symbol.iterator;
        function B(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (U && e[U]) || e["@@iterator"])
            ? e
            : null;
        }
        function H(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var W = !1;
        function $(e, t) {
          if (!e || W) return "";
          W = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && "string" == typeof e.stack) {
              for (
                var o = e.stack.split("\n"),
                  a = r.stack.split("\n"),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l]))
                        return "\n" + o[i].replace(" at new ", " at ");
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (W = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? H(e) : "";
        }
        function q(e) {
          switch (e.tag) {
            case 5:
              return H(e.type);
            case 16:
              return H("Lazy");
            case 13:
              return H("Suspense");
            case 19:
              return H("SuspenseList");
            case 0:
            case 2:
            case 15:
              return $(e.type, !1);
            case 11:
              return $(e.type.render, !1);
            case 22:
              return $(e.type._render, !1);
            case 1:
              return $(e.type, !0);
            default:
              return "";
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case E:
              return "Portal";
            case P:
              return "Profiler";
            case C:
              return "StrictMode";
            case L:
              return "Suspense";
            case M:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case A:
                return (e.displayName || "Context") + ".Consumer";
              case T:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case O:
                return Q(e.type);
              case N:
                return Q(e._render);
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (e) {}
            }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function X(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function K(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = X(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var o = n.get,
                  a = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Z(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = X(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? oe(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              oe(e, t.type, Y(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ae(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ie(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Y(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n)
                return (
                  (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function se(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml";
        function de(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function pe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? de(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var me,
          ve,
          he =
            ((ve = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (me = me || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = me.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ve(e, t);
                  });
                }
              : ve);
        function ge(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var ye = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          be = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (ye.hasOwnProperty(e) && ye[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function xe(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = we(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(ye).forEach(function (e) {
          be.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (ye[t] = ye[e]);
          });
        });
        var ke = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function Ee(e, t) {
          if (t) {
            if (
              ke[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(i(62));
          }
        }
        function Se(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Ce(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Pe = null,
          Te = null,
          Ae = null;
        function _e(e) {
          if ((e = Gr(e))) {
            if ("function" != typeof Pe) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = eo(t)), Pe(e.stateNode, e.type, t));
          }
        }
        function Le(e) {
          Te ? (Ae ? Ae.push(e) : (Ae = [e])) : (Te = e);
        }
        function Me() {
          if (Te) {
            var e = Te,
              t = Ae;
            if (((Ae = Te = null), _e(e), t))
              for (e = 0; e < t.length; e++) _e(t[e]);
          }
        }
        function Oe(e, t) {
          return e(t);
        }
        function Re(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Ne() {}
        var ze = Oe,
          Ve = !1,
          De = !1;
        function je() {
          (null === Te && null === Ae) || (Ne(), Me());
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = eo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Fe = !1;
        if (f)
          try {
            var Ue = {};
            Object.defineProperty(Ue, "passive", {
              get: function () {
                Fe = !0;
              },
            }),
              window.addEventListener("test", Ue, Ue),
              window.removeEventListener("test", Ue, Ue);
          } catch (ve) {
            Fe = !1;
          }
        function Be(e, t, n, r, o, a, i, l, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var He = !1,
          We = null,
          $e = !1,
          qe = null,
          Qe = {
            onError: function (e) {
              (He = !0), (We = e);
            },
          };
        function Ye(e, t, n, r, o, a, i, l, u) {
          (He = !1), (We = null), Be.apply(Qe, arguments);
        }
        function Xe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ke(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ze(e) {
          if (Xe(e) !== e) throw Error(i(188));
        }
        function Ge(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var Je,
          et,
          tt,
          nt,
          rt = !1,
          ot = [],
          at = null,
          it = null,
          lt = null,
          ut = new Map(),
          st = new Map(),
          ct = [],
          ft =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function dt(e, t, n, r, o) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: o,
            targetContainers: [r],
          };
        }
        function pt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              at = null;
              break;
            case "dragenter":
            case "dragleave":
              it = null;
              break;
            case "mouseover":
            case "mouseout":
              lt = null;
              break;
            case "pointerover":
            case "pointerout":
              ut.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              st.delete(t.pointerId);
          }
        }
        function mt(e, t, n, r, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = dt(t, n, r, o, a)),
              null !== t && null !== (t = Gr(t)) && et(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function vt(e) {
          var t = Zr(e.target);
          if (null !== t) {
            var n = Xe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ke(n)))
                  return (
                    (e.blockedOn = t),
                    void nt(e.lanePriority, function () {
                      a.unstable_runWithPriority(e.priority, function () {
                        tt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function ht(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = Gr(n)) && et(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function gt(e, t, n) {
          ht(e) && n.delete(t);
        }
        function yt() {
          for (rt = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = Gr(e.blockedOn)) && Je(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Zt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== at && ht(at) && (at = null),
            null !== it && ht(it) && (it = null),
            null !== lt && ht(lt) && (lt = null),
            ut.forEach(gt),
            st.forEach(gt);
        }
        function bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            rt ||
              ((rt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, yt)));
        }
        function wt(e) {
          function t(t) {
            return bt(t, e);
          }
          if (0 < ot.length) {
            bt(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
              var r = ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== at && bt(at, e),
              null !== it && bt(it, e),
              null !== lt && bt(lt, e),
              ut.forEach(t),
              st.forEach(t),
              n = 0;
            n < ct.length;
            n++
          )
            (r = ct[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ct.length && null === (n = ct[0]).blockedOn; )
            vt(n), null === n.blockedOn && ct.shift();
        }
        function xt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kt = {
            animationend: xt("Animation", "AnimationEnd"),
            animationiteration: xt("Animation", "AnimationIteration"),
            animationstart: xt("Animation", "AnimationStart"),
            transitionend: xt("Transition", "TransitionEnd"),
          },
          Et = {},
          St = {};
        function Ct(e) {
          if (Et[e]) return Et[e];
          if (!kt[e]) return e;
          var t,
            n = kt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in St) return (Et[e] = n[t]);
          return e;
        }
        f &&
          ((St = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kt.animationend.animation,
            delete kt.animationiteration.animation,
            delete kt.animationstart.animation),
          "TransitionEvent" in window || delete kt.transitionend.transition);
        var Pt = Ct("animationend"),
          Tt = Ct("animationiteration"),
          At = Ct("animationstart"),
          _t = Ct("transitionend"),
          Lt = new Map(),
          Mt = new Map(),
          Ot = [
            "abort",
            "abort",
            Pt,
            "animationEnd",
            Tt,
            "animationIteration",
            At,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            _t,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Rt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))),
              Mt.set(r, t),
              Lt.set(r, o),
              s(o, [r]);
          }
        }
        (0, a.unstable_now)();
        var Nt = 8;
        function zt(e) {
          if (0 != (1 & e)) return (Nt = 15), 1;
          if (0 != (2 & e)) return (Nt = 14), 2;
          if (0 != (4 & e)) return (Nt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((Nt = 12), t)
            : 0 != (32 & e)
            ? ((Nt = 11), 32)
            : 0 != (t = 192 & e)
            ? ((Nt = 10), t)
            : 0 != (256 & e)
            ? ((Nt = 9), 256)
            : 0 != (t = 3584 & e)
            ? ((Nt = 8), t)
            : 0 != (4096 & e)
            ? ((Nt = 7), 4096)
            : 0 != (t = 4186112 & e)
            ? ((Nt = 6), t)
            : 0 != (t = 62914560 & e)
            ? ((Nt = 5), t)
            : 67108864 & e
            ? ((Nt = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((Nt = 3), 134217728)
            : 0 != (t = 805306368 & e)
            ? ((Nt = 2), t)
            : 0 != (1073741824 & e)
            ? ((Nt = 1), 1073741824)
            : ((Nt = 8), e);
        }
        function Vt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (Nt = 0);
          var r = 0,
            o = 0,
            a = e.expiredLanes,
            i = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== a) (r = a), (o = Nt = 15);
          else if (0 != (a = 134217727 & n)) {
            var u = a & ~i;
            0 !== u
              ? ((r = zt(u)), (o = Nt))
              : 0 != (l &= a) && ((r = zt(l)), (o = Nt));
          } else
            0 != (a = n & ~i)
              ? ((r = zt(a)), (o = Nt))
              : 0 !== l && ((r = zt(l)), (o = Nt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Bt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 == (t & i))
          ) {
            if ((zt(t), o <= Nt)) return t;
            Nt = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (o = 1 << (n = 31 - Bt(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function Dt(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function jt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = It(24 & ~t)) ? jt(10, t) : e;
            case 10:
              return 0 === (e = It(192 & ~t)) ? jt(8, t) : e;
            case 8:
              return (
                0 === (e = It(3584 & ~t)) &&
                  0 === (e = It(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = It(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(i(358, e));
        }
        function It(e) {
          return e & -e;
        }
        function Ft(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Ut(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Bt(t))] = n);
        }
        var Bt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((Ht(e) / Wt) | 0)) | 0;
              },
          Ht = Math.log,
          Wt = Math.LN2,
          $t = a.unstable_UserBlockingPriority,
          qt = a.unstable_runWithPriority,
          Qt = !0;
        function Yt(e, t, n, r) {
          Ve || Ne();
          var o = Kt,
            a = Ve;
          Ve = !0;
          try {
            Re(o, e, t, n, r);
          } finally {
            (Ve = a) || je();
          }
        }
        function Xt(e, t, n, r) {
          qt($t, Kt.bind(null, e, t, n, r));
        }
        function Kt(e, t, n, r) {
          var o;
          if (Qt)
            if ((o = 0 == (4 & t)) && 0 < ot.length && -1 < ft.indexOf(e))
              (e = dt(null, e, t, n, r)), ot.push(e);
            else {
              var a = Zt(e, t, n, r);
              if (null === a) o && pt(e, r);
              else {
                if (o) {
                  if (-1 < ft.indexOf(e))
                    return (e = dt(a, e, t, n, r)), void ot.push(e);
                  if (
                    (function (e, t, n, r, o) {
                      switch (t) {
                        case "focusin":
                          return (at = mt(at, e, t, n, r, o)), !0;
                        case "dragenter":
                          return (it = mt(it, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (lt = mt(lt, e, t, n, r, o)), !0;
                        case "pointerover":
                          var a = o.pointerId;
                          return (
                            ut.set(a, mt(ut.get(a) || null, e, t, n, r, o)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (a = o.pointerId),
                            st.set(a, mt(st.get(a) || null, e, t, n, r, o)),
                            !0
                          );
                      }
                      return !1;
                    })(a, e, t, n, r)
                  )
                    return;
                  pt(e, r);
                }
                Lr(e, t, r, null, n);
              }
            }
        }
        function Zt(e, t, n, r) {
          var o = Ce(r);
          if (null !== (o = Zr(o))) {
            var a = Xe(o);
            if (null === a) o = null;
            else {
              var i = a.tag;
              if (13 === i) {
                if (null !== (o = Ke(a))) return o;
                o = null;
              } else if (3 === i) {
                if (a.stateNode.hydrate)
                  return 3 === a.tag ? a.stateNode.containerInfo : null;
                o = null;
              } else a !== o && (o = null);
            }
          }
          return Lr(e, t, r, o, n), null;
        }
        var Gt = null,
          Jt = null,
          en = null;
        function tn() {
          if (en) return en;
          var e,
            t,
            n = Jt,
            r = n.length,
            o = "value" in Gt ? Gt.value : Gt.textContent,
            a = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
          return (en = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function nn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rn() {
          return !0;
        }
        function on() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? rn
                : on),
              (this.isPropagationStopped = on),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = rn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = rn));
              },
              persist: function () {},
              isPersistent: rn,
            }),
            t
          );
        }
        var ln,
          un,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          fn = an(cn),
          dn = o({}, cn, { view: 0, detail: 0 }),
          pn = an(dn),
          mn = o({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (un = e.screenY - sn.screenY))
                      : (un = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : un;
            },
          }),
          vn = an(mn),
          hn = an(o({}, mn, { dataTransfer: 0 })),
          gn = an(o({}, dn, { relatedTarget: 0 })),
          yn = an(
            o({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          bn = an(
            o({}, cn, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            })
          ),
          wn = an(o({}, cn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return Sn;
        }
        var Pn = an(
            o({}, dn, {
              key: function (e) {
                if (e.key) {
                  var t = xn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = nn(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? kn[e.keyCode] || "Unidentified"
                  : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: Cn,
              charCode: function (e) {
                return "keypress" === e.type ? nn(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? nn(e)
                  : "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
            })
          ),
          Tn = an(
            o({}, mn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          An = an(
            o({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          _n = an(
            o({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = an(
            o({}, mn, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                  ? -e.wheelDeltaX
                  : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                  ? -e.wheelDelta
                  : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            })
          ),
          Mn = [9, 13, 27, 32],
          On = f && "CompositionEvent" in window,
          Rn = null;
        f && "documentMode" in document && (Rn = document.documentMode);
        var Nn = f && "TextEvent" in window && !Rn,
          zn = f && (!On || (Rn && 8 < Rn && 11 >= Rn)),
          Vn = String.fromCharCode(32),
          Dn = !1;
        function jn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function In(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Fn = !1,
          Un = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Bn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Un[e.type] : "textarea" === t;
        }
        function Hn(e, t, n, r) {
          Le(r),
            0 < (t = Or(t, "onChange")).length &&
              ((n = new fn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Wn = null,
          $n = null;
        function qn(e) {
          Sr(e, 0);
        }
        function Qn(e) {
          if (Z(Jr(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (f) {
          var Kn;
          if (f) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var Gn = document.createElement("div");
              Gn.setAttribute("oninput", "return;"),
                (Zn = "function" == typeof Gn.oninput);
            }
            Kn = Zn;
          } else Kn = !1;
          Xn = Kn && (!document.documentMode || 9 < document.documentMode);
        }
        function Jn() {
          Wn && (Wn.detachEvent("onpropertychange", er), ($n = Wn = null));
        }
        function er(e) {
          if ("value" === e.propertyName && Qn($n)) {
            var t = [];
            if ((Hn(t, $n, e, Ce(e)), (e = qn), Ve)) e(t);
            else {
              Ve = !0;
              try {
                Oe(e, t);
              } finally {
                (Ve = !1), je();
              }
            }
          }
        }
        function tr(e, t, n) {
          "focusin" === e
            ? (Jn(), ($n = n), (Wn = t).attachEvent("onpropertychange", er))
            : "focusout" === e && Jn();
        }
        function nr(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Qn($n);
        }
        function rr(e, t) {
          if ("click" === e) return Qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Qn(t);
        }
        var ar =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          ir = Object.prototype.hasOwnProperty;
        function lr(e, t) {
          if (ar(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!ir.call(t, n[r]) || !ar(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function cr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? cr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function dr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var pr = f && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          vr = null,
          hr = null,
          gr = !1;
        function yr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          gr ||
            null == mr ||
            mr !== G(r) ||
            ((r =
              "selectionStart" in (r = mr) && dr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (hr && lr(hr, r)) ||
              ((hr = r),
              0 < (r = Or(vr, "onSelect")).length &&
                ((t = new fn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        Rt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Rt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Rt(Ot, 2);
        for (
          var br =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            wr = 0;
          wr < br.length;
          wr++
        )
          Mt.set(br[wr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var xr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          kr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(xr)
          );
        function Er(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, o, a, l, u, s) {
              if ((Ye.apply(this, arguments), He)) {
                if (!He) throw Error(i(198));
                var c = We;
                (He = !1), (We = null), $e || (($e = !0), (qe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Sr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var l = r[i],
                    u = l.instance,
                    s = l.currentTarget;
                  if (((l = l.listener), u !== a && o.isPropagationStopped()))
                    break e;
                  Er(o, l, s), (a = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (l = r[i]).instance),
                    (s = l.currentTarget),
                    (l = l.listener),
                    u !== a && o.isPropagationStopped())
                  )
                    break e;
                  Er(o, l, s), (a = u);
                }
            }
          }
          if ($e) throw ((e = qe), ($e = !1), (qe = null), e);
        }
        function Cr(e, t) {
          var n = to(t),
            r = e + "__bubble";
          n.has(r) || (_r(t, e, 2, !1), n.add(r));
        }
        var Pr = "_reactListening" + Math.random().toString(36).slice(2);
        function Tr(e) {
          e[Pr] ||
            ((e[Pr] = !0),
            l.forEach(function (t) {
              kr.has(t) || Ar(t, !1, e, null), Ar(t, !0, e, null);
            }));
        }
        function Ar(e, t, n, r) {
          var o =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            a = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (a = n.ownerDocument),
            null !== r && !t && kr.has(e))
          ) {
            if ("scroll" !== e) return;
            (o |= 2), (a = r);
          }
          var i = to(a),
            l = e + "__" + (t ? "capture" : "bubble");
          i.has(l) || (t && (o |= 4), _r(a, e, o, t), i.add(l));
        }
        function _r(e, t, n, r) {
          var o = Mt.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = Yt;
              break;
            case 1:
              o = Xt;
              break;
            default:
              o = Kt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Fe ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Lr(e, t, n, r, o) {
          var a = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === o ||
                        (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = Zr(l))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (De) return e();
            De = !0;
            try {
              ze(e, t, n);
            } finally {
              (De = !1), je();
            }
          })(function () {
            var r = a,
              o = Ce(n),
              i = [];
            e: {
              var l = Lt.get(e);
              if (void 0 !== l) {
                var u = fn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === nn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Pn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = vn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = An;
                    break;
                  case Pt:
                  case Tt:
                  case At:
                    u = yn;
                    break;
                  case _t:
                    u = _n;
                    break;
                  case "scroll":
                    u = pn;
                    break;
                  case "wheel":
                    u = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Tn;
                }
                var c = 0 != (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, m = r; null !== m; ) {
                  var v = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Ie(m, d)) &&
                        c.push(Mr(m, v, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((l = new u(l, s, null, n, o)),
                  i.push({ event: l, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!Zr(s) && !s[Xr])) &&
                  (u || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? Zr(s)
                          : null) &&
                        (s !== (f = Xe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = vn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == u ? l : Jr(u)),
                  (p = null == s ? l : Jr(s)),
                  ((l = new c(v, m + "leave", u, n, o)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  Zr(o) === r &&
                    (((c = new c(d, m + "enter", s, n, o)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  u && s)
                )
                  e: {
                    for (d = s, m = 0, p = c = u; p; p = Rr(p)) m++;
                    for (p = 0, v = d; v; v = Rr(v)) p++;
                    for (; 0 < m - p; ) (c = Rr(c)), m--;
                    for (; 0 < p - m; ) (d = Rr(d)), p--;
                    for (; m--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Rr(c)), (d = Rr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Nr(i, l, u, c, !1),
                  null !== s && null !== f && Nr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (l = r ? Jr(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var h = Yn;
              else if (Bn(l))
                if (Xn) h = or;
                else {
                  h = nr;
                  var g = tr;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (h = rr);
              switch (
                (h && (h = h(e, r))
                  ? Hn(i, h, n, o)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      oe(l, "number", l.value)),
                (g = r ? Jr(r) : window),
                e)
              ) {
                case "focusin":
                  (Bn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (vr = r), (hr = null));
                  break;
                case "focusout":
                  hr = vr = mr = null;
                  break;
                case "mousedown":
                  gr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (gr = !1), yr(i, n, o);
                  break;
                case "selectionchange":
                  if (pr) break;
                case "keydown":
                case "keyup":
                  yr(i, n, o);
              }
              var y;
              if (On)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Fn
                  ? jn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (zn &&
                  "ko" !== n.locale &&
                  (Fn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Fn && (y = tn())
                    : ((Jt = "value" in (Gt = o) ? Gt.value : Gt.textContent),
                      (Fn = !0))),
                0 < (g = Or(r, b)).length &&
                  ((b = new wn(b, e, null, n, o)),
                  i.push({ event: b, listeners: g }),
                  (y || null !== (y = In(n))) && (b.data = y))),
                (y = Nn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return In(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Vn);
                        case "textInput":
                          return (e = t.data) === Vn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Fn)
                        return "compositionend" === e || (!On && jn(e, t))
                          ? ((e = tn()), (en = Jt = Gt = null), (Fn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return zn && "ko" !== t.locale ? null : t.data;
                        default:
                          return null;
                      }
                    })(e, n)) &&
                  0 < (r = Or(r, "onBeforeInput")).length &&
                  ((o = new wn("onBeforeInput", "beforeinput", null, n, o)),
                  i.push({ event: o, listeners: r }),
                  (o.data = y));
            }
            Sr(i, t);
          });
        }
        function Mr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Or(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Ie(e, n)) && r.unshift(Mr(e, a, o)),
              null != (a = Ie(e, t)) && r.push(Mr(e, a, o))),
              (e = e.return);
          }
          return r;
        }
        function Rr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Nr(e, t, n, r, o) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              s = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== s &&
              ((l = s),
              o
                ? null != (u = Ie(n, a)) && i.unshift(Mr(n, u, l))
                : o || (null != (u = Ie(n, a)) && i.push(Mr(n, u, l)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        function zr() {}
        var Vr = null,
          Dr = null;
        function jr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Ir(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Fr = "function" == typeof setTimeout ? setTimeout : void 0,
          Ur = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Br(e) {
          (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) &&
            (e.textContent = "");
        }
        function Hr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Wr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var $r = 0,
          qr = Math.random().toString(36).slice(2),
          Qr = "__reactFiber$" + qr,
          Yr = "__reactProps$" + qr,
          Xr = "__reactContainer$" + qr,
          Kr = "__reactEvents$" + qr;
        function Zr(e) {
          var t = e[Qr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Xr] || n[Qr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Wr(e); null !== e; ) {
                  if ((n = e[Qr])) return n;
                  e = Wr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function Gr(e) {
          return !(e = e[Qr] || e[Xr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function Jr(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function eo(e) {
          return e[Yr] || null;
        }
        function to(e) {
          var t = e[Kr];
          return void 0 === t && (t = e[Kr] = new Set()), t;
        }
        var no = [],
          ro = -1;
        function oo(e) {
          return { current: e };
        }
        function ao(e) {
          0 > ro || ((e.current = no[ro]), (no[ro] = null), ro--);
        }
        function io(e, t) {
          ro++, (no[ro] = e.current), (e.current = t);
        }
        var lo = {},
          uo = oo(lo),
          so = oo(!1),
          co = lo;
        function fo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return lo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in n) a[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function po(e) {
          return null != e.childContextTypes;
        }
        function mo() {
          ao(so), ao(uo);
        }
        function vo(e, t, n) {
          if (uo.current !== lo) throw Error(i(168));
          io(uo, t), io(so, n);
        }
        function ho(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in e)) throw Error(i(108, Q(t) || "Unknown", a));
          return o({}, n, r);
        }
        function go(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              lo),
            (co = uo.current),
            io(uo, e),
            io(so, so.current),
            !0
          );
        }
        function yo(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = ho(e, t, co)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ao(so),
              ao(uo),
              io(uo, e))
            : ao(so),
            io(so, n);
        }
        var bo = null,
          wo = null,
          xo = a.unstable_runWithPriority,
          ko = a.unstable_scheduleCallback,
          Eo = a.unstable_cancelCallback,
          So = a.unstable_shouldYield,
          Co = a.unstable_requestPaint,
          Po = a.unstable_now,
          To = a.unstable_getCurrentPriorityLevel,
          Ao = a.unstable_ImmediatePriority,
          _o = a.unstable_UserBlockingPriority,
          Lo = a.unstable_NormalPriority,
          Mo = a.unstable_LowPriority,
          Oo = a.unstable_IdlePriority,
          Ro = {},
          No = void 0 !== Co ? Co : function () {},
          zo = null,
          Vo = null,
          Do = !1,
          jo = Po(),
          Io =
            1e4 > jo
              ? Po
              : function () {
                  return Po() - jo;
                };
        function Fo() {
          switch (To()) {
            case Ao:
              return 99;
            case _o:
              return 98;
            case Lo:
              return 97;
            case Mo:
              return 96;
            case Oo:
              return 95;
            default:
              throw Error(i(332));
          }
        }
        function Uo(e) {
          switch (e) {
            case 99:
              return Ao;
            case 98:
              return _o;
            case 97:
              return Lo;
            case 96:
              return Mo;
            case 95:
              return Oo;
            default:
              throw Error(i(332));
          }
        }
        function Bo(e, t) {
          return (e = Uo(e)), xo(e, t);
        }
        function Ho(e, t, n) {
          return (e = Uo(e)), ko(e, t, n);
        }
        function Wo() {
          if (null !== Vo) {
            var e = Vo;
            (Vo = null), Eo(e);
          }
          $o();
        }
        function $o() {
          if (!Do && null !== zo) {
            Do = !0;
            var e = 0;
            try {
              var t = zo;
              Bo(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (zo = null);
            } catch (t) {
              throw (null !== zo && (zo = zo.slice(e + 1)), ko(Ao, Wo), t);
            } finally {
              Do = !1;
            }
          }
        }
        var qo = x.ReactCurrentBatchConfig;
        function Qo(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Yo = oo(null),
          Xo = null,
          Ko = null,
          Zo = null;
        function Go() {
          Zo = Ko = Xo = null;
        }
        function Jo(e) {
          var t = Yo.current;
          ao(Yo), (e.type._context._currentValue = t);
        }
        function ea(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ta(e, t) {
          (Xo = e),
            (Zo = Ko = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Oi = !0), (e.firstContext = null));
        }
        function na(e, t) {
          if (Zo !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((Zo = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Ko)
            ) {
              if (null === Xo) throw Error(i(308));
              (Ko = t),
                (Xo.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Ko = Ko.next = t;
          return e._currentValue;
        }
        var ra = !1;
        function oa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function aa(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ia(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function la(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function ua(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (n = n.next);
              } while (null !== n);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function sa(e, t, n, r) {
          var a = e.updateQueue;
          ra = !1;
          var i = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            u = a.shared.pending;
          if (null !== u) {
            a.shared.pending = null;
            var s = u,
              c = s.next;
            (s.next = null), null === l ? (i = c) : (l.next = c), (l = s);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l &&
                (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                (f.lastBaseUpdate = s));
            }
          }
          if (null !== i) {
            for (d = a.baseState, l = 0, f = c = s = null; ; ) {
              u = i.lane;
              var p = i.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    v = i;
                  switch (((u = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" == typeof (m = v.payload)) {
                        d = m.call(p, d, u);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-4097 & m.flags) | 64;
                    case 0:
                      if (
                        null ==
                        (u =
                          "function" == typeof (m = v.payload)
                            ? m.call(p, d, u)
                            : m)
                      )
                        break e;
                      d = o({}, d, u);
                      break e;
                    case 2:
                      ra = !0;
                  }
                }
                null !== i.callback &&
                  ((e.flags |= 32),
                  null === (u = a.effects) ? (a.effects = [i]) : u.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: u,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                  (l |= u);
              if (null === (i = i.next)) {
                if (null === (u = a.shared.pending)) break;
                (i = u.next),
                  (u.next = null),
                  (a.lastBaseUpdate = u),
                  (a.shared.pending = null);
              }
            }
            null === f && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = f),
              (Nl |= l),
              (e.lanes = l),
              (e.memoizedState = d);
          }
        }
        function ca(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o))
                  throw Error(i(191, o));
                o.call(r);
              }
            }
        }
        var fa = new r.Component().refs;
        function da(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var pa = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Xe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = au(),
              o = iu(e),
              a = ia(r, o);
            (a.payload = t),
              null != n && (a.callback = n),
              la(e, a),
              lu(e, o, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = au(),
              o = iu(e),
              a = ia(r, o);
            (a.tag = 1),
              (a.payload = t),
              null != n && (a.callback = n),
              la(e, a),
              lu(e, o, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = au(),
              r = iu(e),
              o = ia(n, r);
            (o.tag = 2), null != t && (o.callback = t), la(e, o), lu(e, r, n);
          },
        };
        function ma(e, t, n, r, o, a, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                lr(n, r) &&
                lr(o, a)
              );
        }
        function va(e, t, n) {
          var r = !1,
            o = lo,
            a = t.contextType;
          return (
            "object" == typeof a && null !== a
              ? (a = na(a))
              : ((o = po(t) ? co : uo.current),
                (a = (r = null != (r = t.contextTypes)) ? fo(e, o) : lo)),
            (t = new t(n, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = pa),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function ha(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && pa.enqueueReplaceState(t, t.state, null);
        }
        function ga(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = fa), oa(e);
          var a = t.contextType;
          "object" == typeof a && null !== a
            ? (o.context = na(a))
            : ((a = po(t) ? co : uo.current), (o.context = fo(e, a))),
            sa(e, n, o, r),
            (o.state = e.memoizedState),
            "function" == typeof (a = t.getDerivedStateFromProps) &&
              (da(e, t, a, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount &&
                "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && pa.enqueueReplaceState(o, o.state, null),
              sa(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4);
        }
        var ya = Array.isArray;
        function ba(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : (((t = function (e) {
                    var t = r.refs;
                    t === fa && (t = r.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  })._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function wa(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              i(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function xa(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
          }
          function a(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Uu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = ba(e, t, n)), (r.return = e), r)
              : (((r = ju(n.type, n.key, n.props, null, e.mode, r)).ref = ba(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, a) {
            return null === t || 7 !== t.tag
              ? (((t = Iu(n, e.mode, r, a)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Uu("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = ju(t.type, t.key, t.props, null, e.mode, n)).ref = ba(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case E:
                  return ((t = Bu(t, e.mode, n)).return = e), t;
              }
              if (ya(t) || B(t))
                return ((t = Iu(t, e.mode, n, null)).return = e), t;
              wa(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== o ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o
                    ? n.type === S
                      ? f(e, t, n.props.children, r, o)
                      : s(e, t, n, r)
                    : null;
                case E:
                  return n.key === o ? c(e, t, n, r) : null;
              }
              if (ya(n) || B(n)) return null !== o ? null : f(e, t, n, r, null);
              wa(e, n);
            }
            return null;
          }
          function m(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r)
              return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === S
                      ? f(t, e, r.props.children, o, r.key)
                      : s(t, e, r, o)
                  );
                case E:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    o
                  );
              }
              if (ya(r) || B(r))
                return f(t, (e = e.get(n) || null), r, o, null);
              wa(t, r);
            }
            return null;
          }
          function v(o, i, l, u) {
            for (
              var s = null, c = null, f = i, v = (i = 0), h = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((h = f), (f = null)) : (h = f.sibling);
              var g = p(o, f, l[v], u);
              if (null === g) {
                null === f && (f = h);
                break;
              }
              e && f && null === g.alternate && t(o, f),
                (i = a(g, i, v)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = h);
            }
            if (v === l.length) return n(o, f), s;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(o, l[v], u)) &&
                  ((i = a(f, i, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return s;
            }
            for (f = r(o, f); v < l.length; v++)
              null !== (h = m(f, o, v, l[v], u)) &&
                (e &&
                  null !== h.alternate &&
                  f.delete(null === h.key ? v : h.key),
                (i = a(h, i, v)),
                null === c ? (s = h) : (c.sibling = h),
                (c = h));
            return (
              e &&
                f.forEach(function (e) {
                  return t(o, e);
                }),
              s
            );
          }
          function h(o, l, u, s) {
            var c = B(u);
            if ("function" != typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (
              var f = (c = null), v = l, h = (l = 0), g = null, y = u.next();
              null !== v && !y.done;
              h++, y = u.next()
            ) {
              v.index > h ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(o, v, y.value, s);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(o, v),
                (l = a(b, l, h)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(o, v), c;
            if (null === v) {
              for (; !y.done; h++, y = u.next())
                null !== (y = d(o, y.value, s)) &&
                  ((l = a(y, l, h)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return c;
            }
            for (v = r(o, v); !y.done; h++, y = u.next())
              null !== (y = m(v, o, h, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? h : y.key),
                (l = a(y, l, h)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(o, e);
                }),
              c
            );
          }
          return function (e, r, a, u) {
            var s =
              "object" == typeof a &&
              null !== a &&
              a.type === S &&
              null === a.key;
            s && (a = a.props.children);
            var c = "object" == typeof a && null !== a;
            if (c)
              switch (a.$$typeof) {
                case k:
                  e: {
                    for (c = a.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        switch (s.tag) {
                          case 7:
                            if (a.type === S) {
                              n(e, s.sibling),
                                ((r = o(s, a.props.children)).return = e),
                                (e = r);
                              break e;
                            }
                            break;
                          default:
                            if (s.elementType === a.type) {
                              n(e, s.sibling),
                                ((r = o(s, a.props)).ref = ba(e, s, a)),
                                (r.return = e),
                                (e = r);
                              break e;
                            }
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    a.type === S
                      ? (((r = Iu(a.props.children, e.mode, u, a.key)).return =
                          e),
                        (e = r))
                      : (((u = ju(
                          a.type,
                          a.key,
                          a.props,
                          null,
                          e.mode,
                          u
                        )).ref = ba(e, r, a)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case E:
                  e: {
                    for (s = a.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === a.containerInfo &&
                          r.stateNode.implementation === a.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = o(r, a.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Bu(a, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof a || "number" == typeof a)
              return (
                (a = "" + a),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, a)).return = e), (e = r))
                  : (n(e, r), ((r = Uu(a, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (ya(a)) return v(e, r, a, u);
            if (B(a)) return h(e, r, a, u);
            if ((c && wa(e, a), void 0 === a && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(i(152, Q(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var ka = xa(!0),
          Ea = xa(!1),
          Sa = {},
          Ca = oo(Sa),
          Pa = oo(Sa),
          Ta = oo(Sa);
        function Aa(e) {
          if (e === Sa) throw Error(i(174));
          return e;
        }
        function _a(e, t) {
          switch ((io(Ta, t), io(Pa, e), io(Ca, Sa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
              break;
            default:
              t = pe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          ao(Ca), io(Ca, t);
        }
        function La() {
          ao(Ca), ao(Pa), ao(Ta);
        }
        function Ma(e) {
          Aa(Ta.current);
          var t = Aa(Ca.current),
            n = pe(t, e.type);
          t !== n && (io(Pa, e), io(Ca, n));
        }
        function Oa(e) {
          Pa.current === e && (ao(Ca), ao(Pa));
        }
        var Ra = oo(0);
        function Na(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var za = null,
          Va = null,
          Da = !1;
        function ja(e, t) {
          var n = zu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Ia(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            case 13:
            default:
              return !1;
          }
        }
        function Fa(e) {
          if (Da) {
            var t = Va;
            if (t) {
              var n = t;
              if (!Ia(e, t)) {
                if (!(t = Hr(n.nextSibling)) || !Ia(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Da = !1), void (za = e)
                  );
                ja(za, n);
              }
              (za = e), (Va = Hr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Da = !1), (za = e);
          }
        }
        function Ua(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          za = e;
        }
        function Ba(e) {
          if (e !== za) return !1;
          if (!Da) return Ua(e), (Da = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Ir(t, e.memoizedProps))
          )
            for (t = Va; t; ) ja(e, t), (t = Hr(t.nextSibling));
          if ((Ua(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Va = Hr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Va = null;
            }
          } else Va = za ? Hr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ha() {
          (Va = za = null), (Da = !1);
        }
        var Wa = [];
        function $a() {
          for (var e = 0; e < Wa.length; e++)
            Wa[e]._workInProgressVersionPrimary = null;
          Wa.length = 0;
        }
        var qa = x.ReactCurrentDispatcher,
          Qa = x.ReactCurrentBatchConfig,
          Ya = 0,
          Xa = null,
          Ka = null,
          Za = null,
          Ga = !1,
          Ja = !1;
        function ei() {
          throw Error(i(321));
        }
        function ti(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ar(e[n], t[n])) return !1;
          return !0;
        }
        function ni(e, t, n, r, o, a) {
          if (
            ((Ya = a),
            (Xa = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (qa.current = null === e || null === e.memoizedState ? Ai : _i),
            (e = n(r, o)),
            Ja)
          ) {
            a = 0;
            do {
              if (((Ja = !1), !(25 > a))) throw Error(i(301));
              (a += 1),
                (Za = Ka = null),
                (t.updateQueue = null),
                (qa.current = Li),
                (e = n(r, o));
            } while (Ja);
          }
          if (
            ((qa.current = Ti),
            (t = null !== Ka && null !== Ka.next),
            (Ya = 0),
            (Za = Ka = Xa = null),
            (Ga = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function ri() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Za ? (Xa.memoizedState = Za = e) : (Za = Za.next = e), Za
          );
        }
        function oi() {
          if (null === Ka) {
            var e = Xa.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Ka.next;
          var t = null === Za ? Xa.memoizedState : Za.next;
          if (null !== t) (Za = t), (Ka = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (Ka = e).memoizedState,
              baseState: Ka.baseState,
              baseQueue: Ka.baseQueue,
              queue: Ka.queue,
              next: null,
            }),
              null === Za ? (Xa.memoizedState = Za = e) : (Za = Za.next = e);
          }
          return Za;
        }
        function ai(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ii(e) {
          var t = oi(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = Ka,
            o = r.baseQueue,
            a = n.pending;
          if (null !== a) {
            if (null !== o) {
              var l = o.next;
              (o.next = a.next), (a.next = l);
            }
            (r.baseQueue = o = a), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var u = (l = a = null),
              s = o;
            do {
              var c = s.lane;
              if ((Ya & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (a = r)) : (u = u.next = f),
                  (Xa.lanes |= c),
                  (Nl |= c);
              }
              s = s.next;
            } while (null !== s && s !== o);
            null === u ? (a = r) : (u.next = l),
              ar(r, t.memoizedState) || (Oi = !0),
              (t.memoizedState = r),
              (t.baseState = a),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function li(e) {
          var t = oi(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            a = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (a = e(a, l.action)), (l = l.next);
            } while (l !== o);
            ar(a, t.memoizedState) || (Oi = !0),
              (t.memoizedState = a),
              null === t.baseQueue && (t.baseState = a),
              (n.lastRenderedState = a);
          }
          return [a, r];
        }
        function ui(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes),
                (e = (Ya & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Wa.push(t))),
            e)
          )
            return n(t._source);
          throw (Wa.push(t), Error(i(350)));
        }
        function si(e, t, n, r) {
          var o = Pl;
          if (null === o) throw Error(i(349));
          var a = t._getVersion,
            l = a(t._source),
            u = qa.current,
            s = u.useState(function () {
              return ui(o, t, n);
            }),
            c = s[1],
            f = s[0];
          s = Za;
          var d = e.memoizedState,
            p = d.refs,
            m = p.getSnapshot,
            v = d.source;
          d = d.subscribe;
          var h = Xa;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            u.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = a(t._source);
                if (!ar(l, e)) {
                  (e = n(t._source)),
                    ar(f, e) ||
                      (c(e),
                      (e = iu(h)),
                      (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, i = e; 0 < i; ) {
                    var u = 31 - Bt(i),
                      s = 1 << u;
                    (r[u] |= e), (i &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = iu(h);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (e) {
                    n(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, r]
            ),
            (ar(m, n) && ar(v, t) && ar(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ai,
                lastRenderedState: f,
              }).dispatch = c =
                Pi.bind(null, Xa, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (f = ui(o, t, n)),
              (s.memoizedState = s.baseState = f)),
            f
          );
        }
        function ci(e, t, n) {
          return si(oi(), e, t, n);
        }
        function fi(e) {
          var t = ri();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ai,
                lastRenderedState: e,
              }).dispatch =
              Pi.bind(null, Xa, e)),
            [t.memoizedState, e]
          );
        }
        function di(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Xa.updateQueue)
              ? ((t = { lastEffect: null }),
                (Xa.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function pi(e) {
          return (e = { current: e }), (ri().memoizedState = e);
        }
        function mi() {
          return oi().memoizedState;
        }
        function vi(e, t, n, r) {
          var o = ri();
          (Xa.flags |= e),
            (o.memoizedState = di(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function hi(e, t, n, r) {
          var o = oi();
          r = void 0 === r ? null : r;
          var a = void 0;
          if (null !== Ka) {
            var i = Ka.memoizedState;
            if (((a = i.destroy), null !== r && ti(r, i.deps)))
              return void di(t, n, a, r);
          }
          (Xa.flags |= e), (o.memoizedState = di(1 | t, n, a, r));
        }
        function gi(e, t) {
          return vi(516, 4, e, t);
        }
        function yi(e, t) {
          return hi(516, 4, e, t);
        }
        function bi(e, t) {
          return hi(4, 2, e, t);
        }
        function wi(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function xi(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            hi(4, 2, wi.bind(null, t, e), n)
          );
        }
        function ki() {}
        function Ei(e, t) {
          var n = oi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ti(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Si(e, t) {
          var n = oi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ti(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Ci(e, t) {
          var n = Fo();
          Bo(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Bo(97 < n ? 97 : n, function () {
              var n = Qa.transition;
              Qa.transition = 1;
              try {
                e(!1), t();
              } finally {
                Qa.transition = n;
              }
            });
        }
        function Pi(e, t, n) {
          var r = au(),
            o = iu(e),
            a = {
              lane: o,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            i = t.pending;
          if (
            (null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
            (t.pending = a),
            (i = e.alternate),
            e === Xa || (null !== i && i === Xa))
          )
            Ja = Ga = !0;
          else {
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  u = i(l, n);
                if (((a.eagerReducer = i), (a.eagerState = u), ar(u, l)))
                  return;
              } catch (e) {}
            lu(e, o, r);
          }
        }
        var Ti = {
            readContext: na,
            useCallback: ei,
            useContext: ei,
            useEffect: ei,
            useImperativeHandle: ei,
            useLayoutEffect: ei,
            useMemo: ei,
            useReducer: ei,
            useRef: ei,
            useState: ei,
            useDebugValue: ei,
            useDeferredValue: ei,
            useTransition: ei,
            useMutableSource: ei,
            useOpaqueIdentifier: ei,
            unstable_isNewReconciler: !1,
          },
          Ai = {
            readContext: na,
            useCallback: function (e, t) {
              return (ri().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: na,
            useEffect: gi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                vi(4, 2, wi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return vi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ri();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = ri();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Pi.bind(null, Xa, e)),
                [r.memoizedState, e]
              );
            },
            useRef: pi,
            useState: fi,
            useDebugValue: ki,
            useDeferredValue: function (e) {
              var t = fi(e),
                n = t[0],
                r = t[1];
              return (
                gi(
                  function () {
                    var t = Qa.transition;
                    Qa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fi(!1),
                t = e[0];
              return pi((e = Ci.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = ri();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                si(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Da) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: z, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + ($r++).toString(36))),
                      Error(i(355)))
                    );
                  }),
                  n = fi(t)[1];
                return (
                  0 == (2 & Xa.mode) &&
                    ((Xa.flags |= 516),
                    di(
                      5,
                      function () {
                        n("r:" + ($r++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return fi((t = "r:" + ($r++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          _i = {
            readContext: na,
            useCallback: Ei,
            useContext: na,
            useEffect: yi,
            useImperativeHandle: xi,
            useLayoutEffect: bi,
            useMemo: Si,
            useReducer: ii,
            useRef: mi,
            useState: function () {
              return ii(ai);
            },
            useDebugValue: ki,
            useDeferredValue: function (e) {
              var t = ii(ai),
                n = t[0],
                r = t[1];
              return (
                yi(
                  function () {
                    var t = Qa.transition;
                    Qa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = ii(ai)[0];
              return [mi().current, e];
            },
            useMutableSource: ci,
            useOpaqueIdentifier: function () {
              return ii(ai)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Li = {
            readContext: na,
            useCallback: Ei,
            useContext: na,
            useEffect: yi,
            useImperativeHandle: xi,
            useLayoutEffect: bi,
            useMemo: Si,
            useReducer: li,
            useRef: mi,
            useState: function () {
              return li(ai);
            },
            useDebugValue: ki,
            useDeferredValue: function (e) {
              var t = li(ai),
                n = t[0],
                r = t[1];
              return (
                yi(
                  function () {
                    var t = Qa.transition;
                    Qa.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Qa.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = li(ai)[0];
              return [mi().current, e];
            },
            useMutableSource: ci,
            useOpaqueIdentifier: function () {
              return li(ai)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Mi = x.ReactCurrentOwner,
          Oi = !1;
        function Ri(e, t, n, r) {
          t.child = null === e ? Ea(t, null, n, r) : ka(t, e.child, n, r);
        }
        function Ni(e, t, n, r, o) {
          n = n.render;
          var a = t.ref;
          return (
            ta(t, o),
            (r = ni(e, t, n, r, a, o)),
            null === e || Oi
              ? ((t.flags |= 1), Ri(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                Gi(e, t, o))
          );
        }
        function zi(e, t, n, r, o, a) {
          if (null === e) {
            var i = n.type;
            return "function" != typeof i ||
              Vu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = ju(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Vi(e, t, i, r, o, a));
          }
          return (
            (i = e.child),
            0 == (o & a) &&
            ((o = i.memoizedProps),
            (n = null !== (n = n.compare) ? n : lr)(o, r) && e.ref === t.ref)
              ? Gi(e, t, a)
              : ((t.flags |= 1),
                ((e = Du(i, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Vi(e, t, n, r, o, a) {
          if (null !== e && lr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Oi = !1), 0 == (a & o)))
              return (t.lanes = e.lanes), Gi(e, t, a);
            0 != (16384 & e.flags) && (Oi = !0);
          }
          return Ii(e, t, n, r, a);
        }
        function Di(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), pu(0, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== a ? a.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  pu(0, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                pu(0, null !== a ? a.baseLanes : n);
            }
          else
            null !== a
              ? ((r = a.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              pu(0, r);
          return Ri(e, t, o, n), t.child;
        }
        function ji(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Ii(e, t, n, r, o) {
          var a = po(n) ? co : uo.current;
          return (
            (a = fo(t, a)),
            ta(t, o),
            (n = ni(e, t, n, r, a, o)),
            null === e || Oi
              ? ((t.flags |= 1), Ri(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~o),
                Gi(e, t, o))
          );
        }
        function Fi(e, t, n, r, o) {
          if (po(n)) {
            var a = !0;
            go(t);
          } else a = !1;
          if ((ta(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              va(t, n, r),
              ga(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var u = i.context,
              s = n.contextType;
            s =
              "object" == typeof s && null !== s
                ? na(s)
                : fo(t, (s = po(n) ? co : uo.current));
            var c = n.getDerivedStateFromProps,
              f =
                "function" == typeof c ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== r || u !== s) && ha(t, i, r, s)),
              (ra = !1);
            var d = t.memoizedState;
            (i.state = d),
              sa(t, r, i, o),
              (u = t.memoizedState),
              l !== r || d !== u || so.current || ra
                ? ("function" == typeof c &&
                    (da(t, n, c, r), (u = t.memoizedState)),
                  (l = ra || ma(t, n, l, r, d, u, s))
                    ? (f ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = l))
                : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (i = t.stateNode),
              aa(e, t),
              (l = t.memoizedProps),
              (s = t.type === t.elementType ? l : Qo(t.type, l)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              (u =
                "object" == typeof (u = n.contextType) && null !== u
                  ? na(u)
                  : fo(t, (u = po(n) ? co : uo.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" == typeof p ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((l !== f || d !== u) && ha(t, i, r, u)),
              (ra = !1),
              (d = t.memoizedState),
              (i.state = d),
              sa(t, r, i, o);
            var m = t.memoizedState;
            l !== f || d !== m || so.current || ra
              ? ("function" == typeof p &&
                  (da(t, n, p, r), (m = t.memoizedState)),
                (s = ra || ma(t, n, s, r, d, m, u))
                  ? (c ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, u),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, u)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" != typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = u),
                (r = s))
              : ("function" != typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Ui(e, t, n, r, a, o);
        }
        function Ui(e, t, n, r, o, a) {
          ji(e, t);
          var i = 0 != (64 & t.flags);
          if (!r && !i) return o && yo(t, n, !1), Gi(e, t, a);
          (r = t.stateNode), (Mi.current = t);
          var l =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = ka(t, e.child, null, a)),
                (t.child = ka(t, null, l, a)))
              : Ri(e, t, l, a),
            (t.memoizedState = r.state),
            o && yo(t, n, !0),
            t.child
          );
        }
        function Bi(e) {
          var t = e.stateNode;
          t.pendingContext
            ? vo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && vo(0, t.context, !1),
            _a(e, t.containerInfo);
        }
        var Hi,
          Wi,
          $i,
          qi = { dehydrated: null, retryLane: 0 };
        function Qi(e, t, n) {
          var r,
            o = t.pendingProps,
            a = Ra.current,
            i = !1;
          return (
            (r = 0 != (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
            r
              ? ((i = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (a |= 1),
            io(Ra, 1 & a),
            null === e
              ? (void 0 !== o.fallback && Fa(t),
                (e = o.children),
                (a = o.fallback),
                i
                  ? ((e = Yi(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = qi),
                    e)
                  : "number" == typeof o.unstable_expectedLoadTime
                  ? ((e = Yi(t, e, a, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = qi),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Fu(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                i
                  ? ((o = (function (e, t, n, r, o) {
                      var a = t.mode,
                        i = e.child;
                      e = i.sibling;
                      var l = { mode: "hidden", children: n };
                      return (
                        0 == (2 & a) && t.child !== i
                          ? (((n = t.child).childLanes = 0),
                            (n.pendingProps = l),
                            null !== (i = n.lastEffect)
                              ? ((t.firstEffect = n.firstEffect),
                                (t.lastEffect = i),
                                (i.nextEffect = null))
                              : (t.firstEffect = t.lastEffect = null))
                          : (n = Du(i, l)),
                        null !== e
                          ? (r = Du(e, r))
                          : ((r = Iu(r, a, o, null)).flags |= 2),
                        (r.return = t),
                        (n.return = t),
                        (n.sibling = r),
                        (t.child = n),
                        r
                      );
                    })(e, t, o.children, o.fallback, n)),
                    (i = t.child),
                    (a = e.child.memoizedState),
                    (i.memoizedState =
                      null === a
                        ? { baseLanes: n }
                        : { baseLanes: a.baseLanes | n }),
                    (i.childLanes = e.childLanes & ~n),
                    (t.memoizedState = qi),
                    o)
                  : ((n = (function (e, t, n, r) {
                      var o = e.child;
                      return (
                        (e = o.sibling),
                        (n = Du(o, { mode: "visible", children: n })),
                        0 == (2 & t.mode) && (n.lanes = r),
                        (n.return = t),
                        (n.sibling = null),
                        null !== e &&
                          ((e.nextEffect = null),
                          (e.flags = 8),
                          (t.firstEffect = t.lastEffect = e)),
                        (t.child = n)
                      );
                    })(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Yi(e, t, n, r) {
          var o = e.mode,
            a = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & o) && null !== a
              ? ((a.childLanes = 0), (a.pendingProps = t))
              : (a = Fu(t, o, 0, null)),
            (n = Iu(n, o, r, null)),
            (a.return = e),
            (n.return = e),
            (a.sibling = n),
            (e.child = a),
            n
          );
        }
        function Xi(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ea(e.return, t);
        }
        function Ki(e, t, n, r, o, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = o),
              (i.lastEffect = a));
        }
        function Zi(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            a = r.tail;
          if ((Ri(e, t, r.children, n), 0 != (2 & (r = Ra.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Xi(e, n);
                else if (19 === e.tag) Xi(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((io(Ra, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === Na(e) && (o = n),
                    (n = n.sibling);
                null === (n = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = n.sibling), (n.sibling = null)),
                  Ki(t, !1, o, n, a, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Na(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                Ki(t, !0, n, null, a, t.lastEffect);
                break;
              case "together":
                Ki(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Gi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Nl |= t.lanes),
            0 != (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(i(153));
            if (null !== t.child) {
              for (
                n = Du((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = Du(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function Ji(e, t) {
          if (!Da)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function el(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
              return po(t.type) && mo(), null;
            case 3:
              return (
                La(),
                ao(so),
                ao(uo),
                $a(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Ba(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Oa(t);
              var a = Aa(Ta.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Wi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return null;
                }
                if (((e = Aa(Ca.current)), Ba(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Qr] = t), (r[Yr] = l), n)) {
                    case "dialog":
                      Cr("cancel", r), Cr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Cr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < xr.length; e++) Cr(xr[e], r);
                      break;
                    case "source":
                      Cr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Cr("error", r), Cr("load", r);
                      break;
                    case "details":
                      Cr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Cr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Cr("invalid", r);
                      break;
                    case "textarea":
                      ue(r, l), Cr("invalid", r);
                  }
                  for (var s in (Ee(n, l), (e = null), l))
                    l.hasOwnProperty(s) &&
                      ((a = l[s]),
                      "children" === s
                        ? "string" == typeof a
                          ? r.textContent !== a && (e = ["children", a])
                          : "number" == typeof a &&
                            r.textContent !== "" + a &&
                            (e = ["children", "" + a])
                        : u.hasOwnProperty(s) &&
                          null != a &&
                          "onScroll" === s &&
                          Cr("scroll", r));
                  switch (n) {
                    case "input":
                      K(r), re(r, l, !0);
                      break;
                    case "textarea":
                      K(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = zr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === a.nodeType ? a : a.ownerDocument),
                    e === fe && (e = de(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[Qr] = t),
                    (e[Yr] = r),
                    Hi(e, t),
                    (t.stateNode = e),
                    (s = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Cr("cancel", e), Cr("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Cr("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < xr.length; a++) Cr(xr[a], e);
                      a = r;
                      break;
                    case "source":
                      Cr("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Cr("error", e), Cr("load", e), (a = r);
                      break;
                    case "details":
                      Cr("toggle", e), (a = r);
                      break;
                    case "input":
                      ee(e, r), (a = J(e, r)), Cr("invalid", e);
                      break;
                    case "option":
                      a = ae(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = o({}, r, { value: void 0 })),
                        Cr("invalid", e);
                      break;
                    case "textarea":
                      ue(e, r), (a = le(e, r)), Cr("invalid", e);
                      break;
                    default:
                      a = r;
                  }
                  Ee(n, a);
                  var c = a;
                  for (l in c)
                    if (c.hasOwnProperty(l)) {
                      var f = c[l];
                      "style" === l
                        ? xe(e, f)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (f = f ? f.__html : void 0) && he(e, f)
                        : "children" === l
                        ? "string" == typeof f
                          ? ("textarea" !== n || "" !== f) && ge(e, f)
                          : "number" == typeof f && ge(e, "" + f)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (u.hasOwnProperty(l)
                            ? null != f && "onScroll" === l && Cr("scroll", e)
                            : null != f && w(e, l, f, s));
                    }
                  switch (n) {
                    case "input":
                      K(e), re(e, r, !1);
                      break;
                    case "textarea":
                      K(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + Y(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ie(e, !!r.multiple, l, !1)
                          : null != r.defaultValue &&
                            ie(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof a.onClick && (e.onclick = zr);
                  }
                  jr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) $i(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(i(166));
                (n = Aa(Ta.current)),
                  Aa(Ca.current),
                  Ba(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Qr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Qr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                ao(Ra),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Ba(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Ra.current)
                        ? 0 === Ml && (Ml = 3)
                        : ((0 !== Ml && 3 !== Ml) || (Ml = 4),
                          null === Pl ||
                            (0 == (134217727 & Nl) && 0 == (134217727 & zl)) ||
                            fu(Pl, Al))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return La(), null === e && Tr(t.stateNode.containerInfo), null;
            case 10:
              return Jo(t), null;
            case 17:
              return po(t.type) && mo(), null;
            case 19:
              if ((ao(Ra), null === (r = t.memoizedState))) return null;
              if (((l = 0 != (64 & t.flags)), null === (s = r.rendering)))
                if (l) Ji(r, !1);
                else {
                  if (0 !== Ml || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = Na(e))) {
                        for (
                          t.flags |= 64,
                            Ji(r, !1),
                            null !== (l = s.updateQueue) &&
                              ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (s = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = s.childLanes),
                                (l.lanes = s.lanes),
                                (l.child = s.child),
                                (l.memoizedProps = s.memoizedProps),
                                (l.memoizedState = s.memoizedState),
                                (l.updateQueue = s.updateQueue),
                                (l.type = s.type),
                                (e = s.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return io(Ra, (1 & Ra.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Io() > Il &&
                    ((t.flags |= 64),
                    (l = !0),
                    Ji(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Na(s))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Ji(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !s.alternate &&
                        !Da)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Io() - r.renderingStartTime > Il &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (l = !0),
                      Ji(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                    (r.last = s));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Io()),
                  (n.sibling = null),
                  (t = Ra.current),
                  io(Ra, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                mu(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(i(156, t.tag));
        }
        function tl(e) {
          switch (e.tag) {
            case 1:
              po(e.type) && mo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((La(), ao(so), ao(uo), $a(), 0 != (64 & (t = e.flags))))
                throw Error(i(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Oa(e), null;
            case 13:
              return (
                ao(Ra),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return ao(Ra), null;
            case 4:
              return La(), null;
            case 10:
              return Jo(e), null;
            case 23:
            case 24:
              return mu(), null;
            default:
              return null;
          }
        }
        function nl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += q(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function rl(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        (Hi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Wi = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Aa(Ca.current);
              var i,
                l = null;
              switch (n) {
                case "input":
                  (a = J(e, a)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (a = ae(e, a)), (r = ae(e, r)), (l = []);
                  break;
                case "select":
                  (a = o({}, a, { value: void 0 })),
                    (r = o({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = le(e, a)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" != typeof a.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = zr);
              }
              for (f in (Ee(n, r), (n = null), a))
                if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                  if ("style" === f) {
                    var s = a[f];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (u.hasOwnProperty(f)
                        ? l || (l = [])
                        : (l = l || []).push(f, null));
              for (f in r) {
                var c = r[f];
                if (
                  ((s = null != a ? a[f] : void 0),
                  r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                )
                  if ("style" === f)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (c && c.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in c)
                        c.hasOwnProperty(i) &&
                          s[i] !== c[i] &&
                          (n || (n = {}), (n[i] = c[i]));
                    } else n || (l || (l = []), l.push(f, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (l = l || []).push(f, c))
                      : "children" === f
                      ? ("string" != typeof c && "number" != typeof c) ||
                        (l = l || []).push(f, "" + c)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (u.hasOwnProperty(f)
                          ? (null != c && "onScroll" === f && Cr("scroll", e),
                            l || s === c || (l = []))
                          : "object" == typeof c &&
                            null !== c &&
                            c.$$typeof === z
                          ? c.toString()
                          : (l = l || []).push(f, c));
              }
              n && (l = l || []).push("style", n);
              var f = l;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          ($i = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var ol = "function" == typeof WeakMap ? WeakMap : Map;
        function al(e, t, n) {
          ((n = ia(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hl || ((Hl = !0), (Wl = r)), rl(0, t);
            }),
            n
          );
        }
        function il(e, t, n) {
          (n = ia(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            n.payload = function () {
              return rl(0, t), r(o);
            };
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" == typeof a.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r &&
                  (null === $l ? ($l = new Set([this])) : $l.add(this),
                  rl(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var ll = "function" == typeof WeakSet ? WeakSet : Set;
        function ul(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Mu(e, t);
              }
            else t.current = null;
        }
        function sl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Qo(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Br(t.stateNode.containerInfo));
            case 5:
            case 6:
            case 4:
            case 17:
              return;
          }
          throw Error(i(163));
        }
        function cl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next),
                    0 != (4 & (o = o.tag)) &&
                      0 != (1 & o) &&
                      (Au(n, e), Tu(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Qo(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ca(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                      e = n.child.stateNode;
                      break;
                    case 1:
                      e = n.child.stateNode;
                  }
                ca(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  jr(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && wt(n))))
              );
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
          }
          throw Error(i(163));
        }
        function fl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" == typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o =
                  null != o && o.hasOwnProperty("display") ? o.display : null),
                  (r.style.display = we("display", o));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function dl(e, t) {
          if (wo && "function" == typeof wo.onCommitFiberUnmount)
            try {
              wo.onCommitFiberUnmount(bo, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 != (4 & r)) Au(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (e) {
                        Mu(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (ul(t),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  Mu(t, e);
                }
              break;
            case 5:
              ul(t);
              break;
            case 4:
              yl(e, t);
          }
        }
        function pl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function ml(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function vl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (ml(t)) break e;
              t = t.return;
            }
            throw Error(i(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(i(161));
          }
          16 & n.flags && (ge(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || ml(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? hl(e, n, t) : gl(e, n, t);
        }
        function hl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = zr));
          else if (4 !== r && null !== (e = e.child))
            for (hl(e, t, n), e = e.sibling; null !== e; )
              hl(e, t, n), (e = e.sibling);
        }
        function gl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (gl(e, t, n), e = e.sibling; null !== e; )
              gl(e, t, n), (e = e.sibling);
        }
        function yl(e, t) {
          for (var n, r, o = t, a = !1; ; ) {
            if (!a) {
              a = o.return;
              e: for (;;) {
                if (null === a) throw Error(i(160));
                switch (((n = a.stateNode), a.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                a = a.return;
              }
              a = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var l = e, u = o, s = u; ; )
                if ((dl(l, s), null !== s.child && 4 !== s.tag))
                  (s.child.return = s), (s = s.child);
                else {
                  if (s === u) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === u) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              r
                ? ((l = n),
                  (u = o.stateNode),
                  8 === l.nodeType
                    ? l.parentNode.removeChild(u)
                    : l.removeChild(u))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo),
                  (r = !0),
                  (o.child.return = o),
                  (o = o.child);
                continue;
              }
            } else if ((dl(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (a = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function bl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var a = t.updateQueue;
                if (((t.updateQueue = null), null !== a)) {
                  for (
                    n[Yr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Se(e, o),
                      t = Se(e, r),
                      o = 0;
                    o < a.length;
                    o += 2
                  ) {
                    var l = a[o],
                      u = a[o + 1];
                    "style" === l
                      ? xe(n, u)
                      : "dangerouslySetInnerHTML" === l
                      ? he(n, u)
                      : "children" === l
                      ? ge(n, u)
                      : w(n, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      se(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (a = r.value)
                          ? ie(n, !!r.multiple, a, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ie(n, !!r.multiple, r.defaultValue, !0)
                              : ie(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(i(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), wt(n.containerInfo))
              );
            case 12:
              return;
            case 13:
              return (
                null !== t.memoizedState && ((jl = Io()), fl(t.child, !0)),
                void wl(t)
              );
            case 19:
              return void wl(t);
            case 17:
              return;
            case 23:
            case 24:
              return void fl(t, null !== t.memoizedState);
          }
          throw Error(i(163));
        }
        function wl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new ll()),
              t.forEach(function (t) {
                var r = Ru.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function xl(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var kl = Math.ceil,
          El = x.ReactCurrentDispatcher,
          Sl = x.ReactCurrentOwner,
          Cl = 0,
          Pl = null,
          Tl = null,
          Al = 0,
          _l = 0,
          Ll = oo(0),
          Ml = 0,
          Ol = null,
          Rl = 0,
          Nl = 0,
          zl = 0,
          Vl = 0,
          Dl = null,
          jl = 0,
          Il = 1 / 0;
        function Fl() {
          Il = Io() + 500;
        }
        var Ul,
          Bl = null,
          Hl = !1,
          Wl = null,
          $l = null,
          ql = !1,
          Ql = null,
          Yl = 90,
          Xl = [],
          Kl = [],
          Zl = null,
          Gl = 0,
          Jl = null,
          eu = -1,
          tu = 0,
          nu = 0,
          ru = null,
          ou = !1;
        function au() {
          return 0 != (48 & Cl) ? Io() : -1 !== eu ? eu : (eu = Io());
        }
        function iu(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Fo() ? 1 : 2;
          if ((0 === tu && (tu = Rl), 0 !== qo.transition)) {
            0 !== nu && (nu = null !== Dl ? Dl.pendingLanes : 0), (e = tu);
            var t = 4186112 & ~nu;
            return (
              0 == (t &= -t) &&
                0 == (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Fo()),
            (e = jt(
              0 != (4 & Cl) && 98 === e
                ? 12
                : (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
              tu
            ))
          );
        }
        function lu(e, t, n) {
          if (50 < Gl) throw ((Gl = 0), (Jl = null), Error(i(185)));
          if (null === (e = uu(e, t))) return null;
          Ut(e, t, n), e === Pl && ((zl |= t), 4 === Ml && fu(e, Al));
          var r = Fo();
          1 === t
            ? 0 != (8 & Cl) && 0 == (48 & Cl)
              ? du(e)
              : (su(e, n), 0 === Cl && (Fl(), Wo()))
            : (0 == (4 & Cl) ||
                (98 !== r && 99 !== r) ||
                (null === Zl ? (Zl = new Set([e])) : Zl.add(e)),
              su(e, n)),
            (Dl = e);
        }
        function uu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function su(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              o = e.pingedLanes,
              a = e.expirationTimes,
              l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Bt(l),
              s = 1 << u,
              c = a[u];
            if (-1 === c) {
              if (0 == (s & r) || 0 != (s & o)) {
                (c = t), zt(s);
                var f = Nt;
                a[u] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            l &= ~s;
          }
          if (((r = Vt(e, e === Pl ? Al : 0)), (t = Nt), 0 === r))
            null !== n &&
              (n !== Ro && Eo(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Ro && Eo(n);
            }
            15 === t
              ? ((n = du.bind(null, e)),
                null === zo ? ((zo = [n]), (Vo = ko(Ao, $o))) : zo.push(n),
                (n = Ro))
              : (n =
                  14 === t
                    ? Ho(99, du.bind(null, e))
                    : Ho(
                        (n = (function (e) {
                          switch (e) {
                            case 15:
                            case 14:
                              return 99;
                            case 13:
                            case 12:
                            case 11:
                            case 10:
                              return 98;
                            case 9:
                            case 8:
                            case 7:
                            case 6:
                            case 4:
                            case 5:
                              return 97;
                            case 3:
                            case 2:
                            case 1:
                              return 95;
                            case 0:
                              return 90;
                            default:
                              throw Error(i(358, e));
                          }
                        })(t)),
                        cu.bind(null, e)
                      )),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function cu(e) {
          if (((eu = -1), (nu = tu = 0), 0 != (48 & Cl))) throw Error(i(327));
          var t = e.callbackNode;
          if (Pu() && e.callbackNode !== t) return null;
          var n = Vt(e, e === Pl ? Al : 0);
          if (0 === n) return null;
          var r = n,
            o = Cl;
          Cl |= 16;
          var a = gu();
          for ((Pl === e && Al === r) || (Fl(), vu(e, r)); ; )
            try {
              wu();
              break;
            } catch (t) {
              hu(e, t);
            }
          if (
            (Go(),
            (El.current = a),
            (Cl = o),
            null !== Tl ? (r = 0) : ((Pl = null), (Al = 0), (r = Ml)),
            0 != (Rl & zl))
          )
            vu(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Cl |= 64),
                e.hydrate && ((e.hydrate = !1), Br(e.containerInfo)),
                0 !== (n = Dt(e)) && (r = yu(e, n))),
              1 === r)
            )
              throw ((t = Ol), vu(e, 0), fu(e, n), su(e, Io()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(i(345));
              case 2:
                Eu(e);
                break;
              case 3:
                if (
                  (fu(e, n), (62914560 & n) === n && 10 < (r = jl + 500 - Io()))
                ) {
                  if (0 !== Vt(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    au(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Fr(Eu.bind(null, e), r);
                  break;
                }
                Eu(e);
                break;
              case 4:
                if ((fu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var l = 31 - Bt(n);
                  (a = 1 << l), (l = r[l]) > o && (o = l), (n &= ~a);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Io() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * kl(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Fr(Eu.bind(null, e), n);
                  break;
                }
                Eu(e);
                break;
              case 5:
                Eu(e);
                break;
              default:
                throw Error(i(329));
            }
          }
          return su(e, Io()), e.callbackNode === t ? cu.bind(null, e) : null;
        }
        function fu(e, t) {
          for (
            t &= ~Vl,
              t &= ~zl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Bt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function du(e) {
          if (0 != (48 & Cl)) throw Error(i(327));
          if ((Pu(), e === Pl && 0 != (e.expiredLanes & Al))) {
            var t = Al,
              n = yu(e, t);
            0 != (Rl & zl) && (n = yu(e, (t = Vt(e, t))));
          } else n = yu(e, (t = Vt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Cl |= 64),
              e.hydrate && ((e.hydrate = !1), Br(e.containerInfo)),
              0 !== (t = Dt(e)) && (n = yu(e, t))),
            1 === n)
          )
            throw ((n = Ol), vu(e, 0), fu(e, t), su(e, Io()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Eu(e),
            su(e, Io()),
            null
          );
        }
        function pu(e, t) {
          io(Ll, _l), (_l |= t), (Rl |= t);
        }
        function mu() {
          (_l = Ll.current), ao(Ll);
        }
        function vu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Ur(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && mo();
                  break;
                case 3:
                  La(), ao(so), ao(uo), $a();
                  break;
                case 5:
                  Oa(r);
                  break;
                case 4:
                  La();
                  break;
                case 13:
                case 19:
                  ao(Ra);
                  break;
                case 10:
                  Jo(r);
                  break;
                case 23:
                case 24:
                  mu();
              }
              n = n.return;
            }
          (Pl = e),
            (Tl = Du(e.current, null)),
            (Al = _l = Rl = t),
            (Ml = 0),
            (Ol = null),
            (Vl = zl = Nl = 0);
        }
        function hu(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((Go(), (qa.current = Ti), Ga)) {
                for (var r = Xa.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                Ga = !1;
              }
              if (
                ((Ya = 0),
                (Za = Ka = Xa = null),
                (Ja = !1),
                (Sl.current = null),
                null === n || null === n.return)
              ) {
                (Ml = 1), (Ol = t), (Tl = null);
                break;
              }
              e: {
                var a = e,
                  i = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Al),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var s = u;
                  if (0 == (2 & l.mode)) {
                    var c = l.alternate;
                    c
                      ? ((l.updateQueue = c.updateQueue),
                        (l.memoizedState = c.memoizedState),
                        (l.lanes = c.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 != (1 & Ra.current),
                    d = i;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var m = d.memoizedState;
                      if (null !== m) p = null !== m.dehydrated;
                      else {
                        var v = d.memoizedProps;
                        p =
                          void 0 !== v.fallback &&
                          (!0 !== v.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var h = d.updateQueue;
                      if (null === h) {
                        var g = new Set();
                        g.add(s), (d.updateQueue = g);
                      } else h.add(s);
                      if (0 == (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (l.flags |= 16384),
                          (l.flags &= -2981),
                          1 === l.tag)
                        )
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var y = ia(-1, 1);
                            (y.tag = 2), la(l, y);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var b = a.pingCache;
                      if (
                        (null === b
                          ? ((b = a.pingCache = new ol()),
                            (u = new Set()),
                            b.set(s, u))
                          : void 0 === (u = b.get(s)) &&
                            ((u = new Set()), b.set(s, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var w = Ou.bind(null, a, s, l);
                        s.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    (Q(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== Ml && (Ml = 2), (u = nl(u, l)), (d = i);
                do {
                  switch (d.tag) {
                    case 3:
                      (a = u),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        ua(d, al(0, a, t));
                      break e;
                    case 1:
                      a = u;
                      var x = d.type,
                        k = d.stateNode;
                      if (
                        0 == (64 & d.flags) &&
                        ("function" == typeof x.getDerivedStateFromError ||
                          (null !== k &&
                            "function" == typeof k.componentDidCatch &&
                            (null === $l || !$l.has(k))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          ua(d, il(d, a, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              ku(n);
            } catch (e) {
              (t = e), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function gu() {
          var e = El.current;
          return (El.current = Ti), null === e ? Ti : e;
        }
        function yu(e, t) {
          var n = Cl;
          Cl |= 16;
          var r = gu();
          for ((Pl === e && Al === t) || vu(e, t); ; )
            try {
              bu();
              break;
            } catch (t) {
              hu(e, t);
            }
          if ((Go(), (Cl = n), (El.current = r), null !== Tl))
            throw Error(i(261));
          return (Pl = null), (Al = 0), Ml;
        }
        function bu() {
          for (; null !== Tl; ) xu(Tl);
        }
        function wu() {
          for (; null !== Tl && !So(); ) xu(Tl);
        }
        function xu(e) {
          var t = Ul(e.alternate, e, _l);
          (e.memoizedProps = e.pendingProps),
            null === t ? ku(e) : (Tl = t),
            (Sl.current = null);
        }
        function ku(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = el(n, t, _l))) return void (Tl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & _l) ||
                0 == (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; )
                  (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = tl(t))) return (n.flags &= 2047), void (Tl = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === Ml && (Ml = 5);
        }
        function Eu(e) {
          var t = Fo();
          return Bo(99, Su.bind(null, e, t)), null;
        }
        function Su(e, t) {
          do {
            Pu();
          } while (null !== Ql);
          if (0 != (48 & Cl)) throw Error(i(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(i(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            a = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < a; ) {
            var s = 31 - Bt(a),
              c = 1 << s;
            (o[s] = 0), (l[s] = -1), (u[s] = -1), (a &= ~c);
          }
          if (
            (null !== Zl && 0 == (24 & r) && Zl.has(e) && Zl.delete(e),
            e === Pl && ((Tl = Pl = null), (Al = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((o = Cl),
              (Cl |= 32),
              (Sl.current = null),
              (Vr = Qt),
              dr((l = fr())))
            ) {
              if ("selectionStart" in l)
                u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (c = u.getSelection && u.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (u = c.anchorNode),
                    (a = c.anchorOffset),
                    (s = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    u.nodeType, s.nodeType;
                  } catch (e) {
                    u = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    m = 0,
                    v = 0,
                    h = l,
                    g = null;
                  t: for (;;) {
                    for (
                      var y;
                      h !== u || (0 !== a && 3 !== h.nodeType) || (d = f + a),
                        h !== s || (0 !== c && 3 !== h.nodeType) || (p = f + c),
                        3 === h.nodeType && (f += h.nodeValue.length),
                        null !== (y = h.firstChild);

                    )
                      (g = h), (h = y);
                    for (;;) {
                      if (h === l) break t;
                      if (
                        (g === u && ++m === a && (d = f),
                        g === s && ++v === c && (p = f),
                        null !== (y = h.nextSibling))
                      )
                        break;
                      g = (h = g).parentNode;
                    }
                    h = y;
                  }
                  u = -1 === d || -1 === p ? null : { start: d, end: p };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Dr = { focusedElem: l, selectionRange: u }),
              (Qt = !1),
              (ru = null),
              (ou = !1),
              (Bl = r);
            do {
              try {
                Cu();
              } catch (e) {
                if (null === Bl) throw Error(i(330));
                Mu(Bl, e), (Bl = Bl.nextEffect);
              }
            } while (null !== Bl);
            (ru = null), (Bl = r);
            do {
              try {
                for (l = e; null !== Bl; ) {
                  var b = Bl.flags;
                  if ((16 & b && ge(Bl.stateNode, ""), 128 & b)) {
                    var w = Bl.alternate;
                    if (null !== w) {
                      var x = w.ref;
                      null !== x &&
                        ("function" == typeof x ? x(null) : (x.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      vl(Bl), (Bl.flags &= -3);
                      break;
                    case 6:
                      vl(Bl), (Bl.flags &= -3), bl(Bl.alternate, Bl);
                      break;
                    case 1024:
                      Bl.flags &= -1025;
                      break;
                    case 1028:
                      (Bl.flags &= -1025), bl(Bl.alternate, Bl);
                      break;
                    case 4:
                      bl(Bl.alternate, Bl);
                      break;
                    case 8:
                      yl(l, (u = Bl));
                      var k = u.alternate;
                      pl(u), null !== k && pl(k);
                  }
                  Bl = Bl.nextEffect;
                }
              } catch (e) {
                if (null === Bl) throw Error(i(330));
                Mu(Bl, e), (Bl = Bl.nextEffect);
              }
            } while (null !== Bl);
            if (
              ((x = Dr),
              (w = fr()),
              (b = x.focusedElem),
              (l = x.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                cr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                dr(b) &&
                ((w = l.start),
                void 0 === (x = l.end) && (x = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(x, b.value.length)))
                  : (x =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((x = x.getSelection()),
                    (u = b.textContent.length),
                    (k = Math.min(l.start, u)),
                    (l = void 0 === l.end ? k : Math.min(l.end, u)),
                    !x.extend && k > l && ((u = l), (l = k), (k = u)),
                    (u = sr(b, k)),
                    (a = sr(b, l)),
                    u &&
                      a &&
                      (1 !== x.rangeCount ||
                        x.anchorNode !== u.node ||
                        x.anchorOffset !== u.offset ||
                        x.focusNode !== a.node ||
                        x.focusOffset !== a.offset) &&
                      ((w = w.createRange()).setStart(u.node, u.offset),
                      x.removeAllRanges(),
                      k > l
                        ? (x.addRange(w), x.extend(a.node, a.offset))
                        : (w.setEnd(a.node, a.offset), x.addRange(w))))),
                (w = []);
              for (x = b; (x = x.parentNode); )
                1 === x.nodeType &&
                  w.push({ element: x, left: x.scrollLeft, top: x.scrollTop });
              for (
                "function" == typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((x = w[b]).element.scrollLeft = x.left),
                  (x.element.scrollTop = x.top);
            }
            (Qt = !!Vr), (Dr = Vr = null), (e.current = n), (Bl = r);
            do {
              try {
                for (b = e; null !== Bl; ) {
                  var E = Bl.flags;
                  if ((36 & E && cl(b, Bl.alternate, Bl), 128 & E)) {
                    w = void 0;
                    var S = Bl.ref;
                    if (null !== S) {
                      var C = Bl.stateNode;
                      switch (Bl.tag) {
                        case 5:
                          w = C;
                          break;
                        default:
                          w = C;
                      }
                      "function" == typeof S ? S(w) : (S.current = w);
                    }
                  }
                  Bl = Bl.nextEffect;
                }
              } catch (e) {
                if (null === Bl) throw Error(i(330));
                Mu(Bl, e), (Bl = Bl.nextEffect);
              }
            } while (null !== Bl);
            (Bl = null), No(), (Cl = o);
          } else e.current = n;
          if (ql) (ql = !1), (Ql = e), (Yl = t);
          else
            for (Bl = r; null !== Bl; )
              (t = Bl.nextEffect),
                (Bl.nextEffect = null),
                8 & Bl.flags &&
                  (((E = Bl).sibling = null), (E.stateNode = null)),
                (Bl = t);
          if (
            (0 === (r = e.pendingLanes) && ($l = null),
            1 === r ? (e === Jl ? Gl++ : ((Gl = 0), (Jl = e))) : (Gl = 0),
            (n = n.stateNode),
            wo && "function" == typeof wo.onCommitFiberRoot)
          )
            try {
              wo.onCommitFiberRoot(bo, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((su(e, Io()), Hl)) throw ((Hl = !1), (e = Wl), (Wl = null), e);
          return 0 != (8 & Cl) || Wo(), null;
        }
        function Cu() {
          for (; null !== Bl; ) {
            var e = Bl.alternate;
            ou ||
              null === ru ||
              (0 != (8 & Bl.flags)
                ? Ge(Bl, ru) && (ou = !0)
                : 13 === Bl.tag && xl(e, Bl) && Ge(Bl, ru) && (ou = !0));
            var t = Bl.flags;
            0 != (256 & t) && sl(e, Bl),
              0 == (512 & t) ||
                ql ||
                ((ql = !0),
                Ho(97, function () {
                  return Pu(), null;
                })),
              (Bl = Bl.nextEffect);
          }
        }
        function Pu() {
          if (90 !== Yl) {
            var e = 97 < Yl ? 97 : Yl;
            return (Yl = 90), Bo(e, _u);
          }
          return !1;
        }
        function Tu(e, t) {
          Xl.push(t, e),
            ql ||
              ((ql = !0),
              Ho(97, function () {
                return Pu(), null;
              }));
        }
        function Au(e, t) {
          Kl.push(t, e),
            ql ||
              ((ql = !0),
              Ho(97, function () {
                return Pu(), null;
              }));
        }
        function _u() {
          if (null === Ql) return !1;
          var e = Ql;
          if (((Ql = null), 0 != (48 & Cl))) throw Error(i(331));
          var t = Cl;
          Cl |= 32;
          var n = Kl;
          Kl = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              a = n[r + 1],
              l = o.destroy;
            if (((o.destroy = void 0), "function" == typeof l))
              try {
                l();
              } catch (e) {
                if (null === a) throw Error(i(330));
                Mu(a, e);
              }
          }
          for (n = Xl, Xl = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (a = n[r + 1]);
            try {
              var u = o.create;
              o.destroy = u();
            } catch (e) {
              if (null === a) throw Error(i(330));
              Mu(a, e);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Cl = t), Wo(), !0;
        }
        function Lu(e, t, n) {
          la(e, (t = al(0, (t = nl(n, t)), 1))),
            (t = au()),
            null !== (e = uu(e, 1)) && (Ut(e, 1, t), su(e, t));
        }
        function Mu(e, t) {
          if (3 === e.tag) Lu(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Lu(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === $l || !$l.has(r)))
                ) {
                  var o = il(n, (e = nl(t, e)), 1);
                  if ((la(n, o), (o = au()), null !== (n = uu(n, 1))))
                    Ut(n, 1, o), su(n, o);
                  else if (
                    "function" == typeof r.componentDidCatch &&
                    (null === $l || !$l.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Ou(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = au()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Pl === e &&
              (Al & n) === n &&
              (4 === Ml ||
              (3 === Ml && (62914560 & Al) === Al && 500 > Io() - jl)
                ? vu(e, 0)
                : (Vl |= n)),
            su(e, t);
        }
        function Ru(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 == (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Fo() ? 1 : 2)
                : (0 === tu && (tu = Rl),
                  0 === (t = It(62914560 & ~tu)) && (t = 4194304))),
            (n = au()),
            null !== (e = uu(e, t)) && (Ut(e, t, n), su(e, n));
        }
        function Nu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function zu(e, t, n, r) {
          return new Nu(e, t, n, r);
        }
        function Vu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Du(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = zu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function ju(e, t, n, r, o, a) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Vu(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Iu(n.children, o, a, t);
              case V:
                (l = 8), (o |= 16);
                break;
              case C:
                (l = 8), (o |= 1);
                break;
              case P:
                return (
                  ((e = zu(12, n, t, 8 | o)).elementType = P),
                  (e.type = P),
                  (e.lanes = a),
                  e
                );
              case L:
                return (
                  ((e = zu(13, n, t, o)).type = L),
                  (e.elementType = L),
                  (e.lanes = a),
                  e
                );
              case M:
                return (
                  ((e = zu(19, n, t, o)).elementType = M), (e.lanes = a), e
                );
              case D:
                return Fu(n, o, a, t);
              case j:
                return (
                  ((e = zu(24, n, t, o)).elementType = j), (e.lanes = a), e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case T:
                      l = 10;
                      break e;
                    case A:
                      l = 9;
                      break e;
                    case _:
                      l = 11;
                      break e;
                    case O:
                      l = 14;
                      break e;
                    case R:
                      (l = 16), (r = null);
                      break e;
                    case N:
                      l = 22;
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = zu(l, n, t, o)).elementType = e),
            (t.type = r),
            (t.lanes = a),
            t
          );
        }
        function Iu(e, t, n, r) {
          return ((e = zu(7, e, r, t)).lanes = n), e;
        }
        function Fu(e, t, n, r) {
          return ((e = zu(23, e, r, t)).elementType = D), (e.lanes = n), e;
        }
        function Uu(e, t, n) {
          return ((e = zu(6, e, null, t)).lanes = n), e;
        }
        function Bu(e, t, n) {
          return (
            ((t = zu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Hu(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ft(0)),
            (this.expirationTimes = Ft(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ft(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Wu(e, t, n, r) {
          var o = t.current,
            a = au(),
            l = iu(o);
          e: if (n) {
            t: {
              if (Xe((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(i(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (po(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(i(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (po(s)) {
                n = ho(n, s, u);
                break e;
              }
            }
            n = u;
          } else n = lo;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ia(a, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            la(o, t),
            lu(o, l, a),
            l
          );
        }
        function $u(e) {
          if (!(e = e.current).child) return null;
          switch (e.child.tag) {
            case 5:
            default:
              return e.child.stateNode;
          }
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Qu(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        function Yu(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Hu(e, t, null != n && !0 === n.hydrate)),
            (t = zu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            oa(t),
            (e[Xr] = n.current),
            Tr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ku(e, t, n, r, o) {
          var a = n._reactRootContainer;
          if (a) {
            var i = a._internalRoot;
            if ("function" == typeof o) {
              var l = o;
              o = function () {
                var e = $u(i);
                l.call(e);
              };
            }
            Wu(t, i, e, o);
          } else {
            if (
              ((a = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new Yu(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (i = a._internalRoot),
              "function" == typeof o)
            ) {
              var u = o;
              o = function () {
                var e = $u(i);
                u.call(e);
              };
            }
            !(function (e, t) {
              var n = Cl;
              (Cl &= -2), (Cl |= 8);
              try {
                e(t);
              } finally {
                0 === (Cl = n) && (Fl(), Wo());
              }
            })(function () {
              Wu(t, i, e, o);
            });
          }
          return $u(i);
        }
        (Ul = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || so.current) Oi = !0;
            else {
              if (0 == (n & r)) {
                switch (((Oi = !1), t.tag)) {
                  case 3:
                    Bi(t), Ha();
                    break;
                  case 5:
                    Ma(t);
                    break;
                  case 1:
                    po(t.type) && go(t);
                    break;
                  case 4:
                    _a(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    io(Yo, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? Qi(e, t, n)
                        : (io(Ra, 1 & Ra.current),
                          null !== (t = Gi(e, t, n)) ? t.sibling : null);
                    io(Ra, 1 & Ra.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return Zi(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      io(Ra, Ra.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Di(e, t, n);
                }
                return Gi(e, t, n);
              }
              Oi = 0 != (16384 & e.flags);
            }
          else Oi = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = fo(t, uo.current)),
                ta(t, n),
                (o = ni(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" == typeof o &&
                  null !== o &&
                  "function" == typeof o.render &&
                  void 0 === o.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  po(r))
                ) {
                  var a = !0;
                  go(t);
                } else a = !1;
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                  oa(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && da(t, r, l, e),
                  (o.updater = pa),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  ga(t, r, e, n),
                  (t = Ui(null, t, r, !0, a, n));
              } else (t.tag = 0), Ri(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (a = o._init)(o._payload)),
                  (t.type = o),
                  (a = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Vu(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(o)),
                  (e = Qo(o, e)),
                  a)
                ) {
                  case 0:
                    t = Ii(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Fi(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Ni(null, t, o, e, n);
                    break e;
                  case 14:
                    t = zi(null, t, o, Qo(o.type, e), r, n);
                    break e;
                }
                throw Error(i(306, o, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ii(e, t, r, (o = t.elementType === r ? o : Qo(r, o)), n)
              );
            case 1:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Fi(e, t, r, (o = t.elementType === r ? o : Qo(r, o)), n)
              );
            case 3:
              if ((Bi(t), (r = t.updateQueue), null === e || null === r))
                throw Error(i(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                aa(e, t),
                sa(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                Ha(), (t = Gi(e, t, n));
              else {
                if (
                  ((a = (o = t.stateNode).hydrate) &&
                    ((Va = Hr(t.stateNode.containerInfo.firstChild)),
                    (za = t),
                    (a = Da = !0)),
                  a)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2)
                      ((a = e[o])._workInProgressVersionPrimary = e[o + 1]),
                        Wa.push(a);
                  for (n = Ea(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Ri(e, t, r, n), Ha();
                t = t.child;
              }
              return t;
            case 5:
              return (
                Ma(t),
                null === e && Fa(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = null !== e ? e.memoizedProps : null),
                (l = o.children),
                Ir(r, o)
                  ? (l = null)
                  : null !== a && Ir(r, a) && (t.flags |= 16),
                ji(e, t),
                Ri(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Fa(t), null;
            case 13:
              return Qi(e, t, n);
            case 4:
              return (
                _a(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = ka(t, null, r, n)) : Ri(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (o = t.pendingProps),
                Ni(e, t, r, (o = t.elementType === r ? o : Qo(r, o)), n)
              );
            case 7:
              return Ri(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ri(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (o = t.pendingProps),
                  (l = t.memoizedProps),
                  (a = o.value);
                var u = t.type._context;
                if (
                  (io(Yo, u._currentValue), (u._currentValue = a), null !== l)
                )
                  if (
                    ((u = l.value),
                    0 ==
                      (a = ar(u, a)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(u, a)
                            : 1073741823)))
                  ) {
                    if (l.children === o.children && !so.current) {
                      t = Gi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (u = t.child) && (u.return = t);
                      null !== u;

                    ) {
                      var s = u.dependencies;
                      if (null !== s) {
                        l = u.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 != (c.observedBits & a)) {
                            1 === u.tag &&
                              (((c = ia(-1, n & -n)).tag = 2), la(u, c)),
                              (u.lanes |= n),
                              null !== (c = u.alternate) && (c.lanes |= n),
                              ea(u.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                Ri(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (a = t.pendingProps).children),
                ta(t, n),
                (r = r((o = na(o, a.unstable_observedBits)))),
                (t.flags |= 1),
                Ri(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Qo((o = t.type), t.pendingProps)),
                zi(e, t, o, (a = Qo(o.type, a)), r, n)
              );
            case 15:
              return Vi(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Qo(r, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                po(r) ? ((e = !0), go(t)) : (e = !1),
                ta(t, n),
                va(t, r, o),
                ga(t, r, o, n),
                Ui(null, t, r, !0, e, n)
              );
            case 19:
              return Zi(e, t, n);
            case 23:
            case 24:
              return Di(e, t, n);
          }
          throw Error(i(156, t.tag));
        }),
          (Yu.prototype.render = function (e) {
            Wu(e, this._internalRoot, null, null);
          }),
          (Yu.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Wu(null, e, null, function () {
              t[Xr] = null;
            });
          }),
          (Je = function (e) {
            13 === e.tag && (lu(e, 4, au()), Qu(e, 4));
          }),
          (et = function (e) {
            13 === e.tag && (lu(e, 67108864, au()), Qu(e, 67108864));
          }),
          (tt = function (e) {
            if (13 === e.tag) {
              var t = au(),
                n = iu(e);
              lu(e, n, t), Qu(e, n);
            }
          }),
          (nt = function (e, t) {
            return t();
          }),
          (Pe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = eo(r);
                      if (!o) throw Error(i(90));
                      Z(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, n);
                break;
              case "select":
                null != (t = n.value) && ie(e, !!n.multiple, t, !1);
            }
          }),
          (Oe = function (e, t) {
            var n = Cl;
            Cl |= 1;
            try {
              return e(t);
            } finally {
              0 === (Cl = n) && (Fl(), Wo());
            }
          }),
          (Re = function (e, t, n, r, o) {
            var a = Cl;
            Cl |= 4;
            try {
              return Bo(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Cl = a) && (Fl(), Wo());
            }
          }),
          (Ne = function () {
            0 == (49 & Cl) &&
              ((function () {
                if (null !== Zl) {
                  var e = Zl;
                  (Zl = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), su(e, Io());
                    });
                }
                Wo();
              })(),
              Pu());
          }),
          (ze = function (e, t) {
            var n = Cl;
            Cl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Cl = n) && (Fl(), Wo());
            }
          });
        var Zu = {
            findFiberByHostInstance: Zr,
            bundleType: 0,
            version: "17.0.1",
            rendererPackageName: "react-dom",
          },
          Gu = {
            bundleType: Zu.bundleType,
            version: Zu.version,
            rendererPackageName: Zu.rendererPackageName,
            rendererConfig: Zu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null ===
                (e = (function (e) {
                  if (
                    !(e = (function (e) {
                      var t = e.alternate;
                      if (!t) {
                        if (null === (t = Xe(e))) throw Error(i(188));
                        return t !== e ? null : e;
                      }
                      for (var n = e, r = t; ; ) {
                        var o = n.return;
                        if (null === o) break;
                        var a = o.alternate;
                        if (null === a) {
                          if (null !== (r = o.return)) {
                            n = r;
                            continue;
                          }
                          break;
                        }
                        if (o.child === a.child) {
                          for (a = o.child; a; ) {
                            if (a === n) return Ze(o), e;
                            if (a === r) return Ze(o), t;
                            a = a.sibling;
                          }
                          throw Error(i(188));
                        }
                        if (n.return !== r.return) (n = o), (r = a);
                        else {
                          for (var l = !1, u = o.child; u; ) {
                            if (u === n) {
                              (l = !0), (n = o), (r = a);
                              break;
                            }
                            if (u === r) {
                              (l = !0), (r = o), (n = a);
                              break;
                            }
                            u = u.sibling;
                          }
                          if (!l) {
                            for (u = a.child; u; ) {
                              if (u === n) {
                                (l = !0), (n = a), (r = o);
                                break;
                              }
                              if (u === r) {
                                (l = !0), (r = a), (n = o);
                                break;
                              }
                              u = u.sibling;
                            }
                            if (!l) throw Error(i(189));
                          }
                        }
                        if (n.alternate !== r) throw Error(i(190));
                      }
                      if (3 !== n.tag) throw Error(i(188));
                      return n.stateNode.current === n ? e : t;
                    })(e))
                  )
                    return null;
                  for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag) return t;
                    if (t.child) (t.child.return = t), (t = t.child);
                    else {
                      if (t === e) break;
                      for (; !t.sibling; ) {
                        if (!t.return || t.return === e) return null;
                        t = t.return;
                      }
                      (t.sibling.return = t.return), (t = t.sibling);
                    }
                  }
                  return null;
                })(e))
                ? null
                : e.stateNode;
            },
            findFiberByHostInstance:
              Zu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Ju.isDisabled && Ju.supportsFiber)
            try {
              (bo = Ju.inject(Gu)), (wo = Ju);
            } catch (ve) {}
        }
        t.render = function (e, t, n) {
          if (!Xu(t)) throw Error(i(200));
          return Ku(null, e, t, !1, n);
        };
      },
      935: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      408: (e, t, n) => {
        "use strict";
        var r = n(418),
          o = 60103,
          a = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var i = 60109,
          l = 60110,
          u = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (o = f("react.element")),
            (a = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (i = f("react.provider")),
            (l = f("react.context")),
            (u = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (s = f("react.memo")),
            (c = f("react.lazy"));
        }
        var d = "function" == typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = {};
        function h(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m);
        }
        function g() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m);
        }
        (h.prototype.isReactComponent = {}),
          (h.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (h.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = h.prototype);
        var b = (y.prototype = new g());
        (b.constructor = y), r(b, h.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          x = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var r,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              x.call(t, r) && !k.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: w.current,
          };
        }
        function S(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, n, r, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === r ? "." + P(u, 0) : r),
              Array.isArray(i)
                ? ((n = ""),
                  null != e && (n = e.replace(C, "$&/") + "/"),
                  T(i, t, n, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (S(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      n +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = r + P((l = e[s]), s);
              u += T(l, t, n, c, i);
            }
          else if (
            "function" ==
            typeof (c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e))
          )
            for (e = c.call(e), s = 0; !(l = e.next()).done; )
              u += T((l = l.value), t, n, (c = r + P(l, s++)), i);
          else if ("object" === l)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return u;
        }
        function A(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function _(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var L = { current: null };
        function M() {
          var e = L.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var O = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: A,
          forEach: function (e, t, n) {
            A(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              A(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              A(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!S(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = h),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(p(267, e));
            var a = r({}, e.props),
              i = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                x.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              a.children = s;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: _,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return M().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return M().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return M().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M().useRef(e);
          }),
          (t.useState = function (e) {
            return M().useState(e);
          }),
          (t.version = "17.0.1");
      },
      294: (e, t, n) => {
        "use strict";
        e.exports = n(408);
      },
      53: (e, t) => {
        "use strict";
        var n, r, o, a;
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function () {
            return l.now() - u;
          };
        }
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var s = null,
            c = null,
            f = function () {
              if (null !== s)
                try {
                  var e = t.unstable_now();
                  s(!0, e), (s = null);
                } catch (e) {
                  throw (setTimeout(f, 0), e);
                }
            };
          (n = function (e) {
            null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (o = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (a = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" != typeof console) {
            var m = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" != typeof m &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var v = !1,
            h = null,
            g = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (a = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            x = w.port2;
          (w.port1.onmessage = function () {
            if (null !== h) {
              var e = t.unstable_now();
              b = e + y;
              try {
                h(!0, e) ? x.postMessage(null) : ((v = !1), (h = null));
              } catch (e) {
                throw (x.postMessage(null), e);
              }
            } else v = !1;
          }),
            (n = function (e) {
              (h = e), v || ((v = !0), x.postMessage(null));
            }),
            (r = function (e, n) {
              g = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (o = function () {
              p(g), (g = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < C(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function E(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function S(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var a = 2 * (r + 1) - 1,
                  i = e[a],
                  l = a + 1,
                  u = e[l];
                if (void 0 !== i && 0 > C(i, n))
                  void 0 !== u && 0 > C(u, i)
                    ? ((e[r] = u), (e[l] = n), (r = l))
                    : ((e[r] = i), (e[a] = n), (r = a));
                else {
                  if (!(void 0 !== u && 0 > C(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function C(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var P = [],
          T = [],
          A = 1,
          _ = null,
          L = 3,
          M = !1,
          O = !1,
          R = !1;
        function N(e) {
          for (var t = E(T); null !== t; ) {
            if (null === t.callback) S(T);
            else {
              if (!(t.startTime <= e)) break;
              S(T), (t.sortIndex = t.expirationTime), k(P, t);
            }
            t = E(T);
          }
        }
        function z(e) {
          if (((R = !1), N(e), !O))
            if (null !== E(P)) (O = !0), n(V);
            else {
              var t = E(T);
              null !== t && r(z, t.startTime - e);
            }
        }
        function V(e, n) {
          (O = !1), R && ((R = !1), o()), (M = !0);
          var a = L;
          try {
            for (
              N(n), _ = E(P);
              null !== _ &&
              (!(_.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var i = _.callback;
              if ("function" == typeof i) {
                (_.callback = null), (L = _.priorityLevel);
                var l = i(_.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof l
                    ? (_.callback = l)
                    : _ === E(P) && S(P),
                  N(n);
              } else S(P);
              _ = E(P);
            }
            if (null !== _) var u = !0;
            else {
              var s = E(T);
              null !== s && r(z, s.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (_ = null), (L = a), (M = !1);
          }
        }
        var D = a;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            O || M || ((O = !0), n(V));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return L;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return E(P);
          }),
          (t.unstable_next = function (e) {
            switch (L) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = L;
            }
            var n = L;
            L = t;
            try {
              return e();
            } finally {
              L = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = D),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = L;
            L = e;
            try {
              return t();
            } finally {
              L = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var l = t.unstable_now();
            switch (
              ((i =
                "object" == typeof i &&
                null !== i &&
                "number" == typeof (i = i.delay) &&
                0 < i
                  ? l + i
                  : l),
              e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: A++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (u = i + u),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  k(T, e),
                  null === E(P) &&
                    e === E(T) &&
                    (R ? o() : (R = !0), r(z, i - l)))
                : ((e.sortIndex = u), k(P, e), O || M || ((O = !0), n(V))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = L;
            return function () {
              var n = L;
              L = t;
              try {
                return e.apply(this, arguments);
              } finally {
                L = n;
              }
            };
          });
      },
      840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      379: (e, t, n) => {
        "use strict";
        var r,
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          a = [];
        function i(e) {
          for (var t = -1, n = 0; n < a.length; n++)
            if (a[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function l(e, t) {
          for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var l = e[o],
              u = t.base ? l[0] + t.base : l[0],
              s = n[u] || 0,
              c = "".concat(u, " ").concat(s);
            n[u] = s + 1;
            var f = i(c),
              d = { css: l[1], media: l[2], sourceMap: l[3] };
            -1 !== f
              ? (a[f].references++, a[f].updater(d))
              : a.push({ identifier: c, updater: v(d, t), references: 1 }),
              r.push(c);
          }
          return r;
        }
        function u(e) {
          var t = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var a = n.nc;
            a && (r.nonce = a);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var i = o(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(t);
          }
          return t;
        }
        var s,
          c =
            ((s = []),
            function (e, t) {
              return (s[e] = t), s.filter(Boolean).join("\n");
            });
        function f(e, t, n, r) {
          var o = n
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = c(t, o);
          else {
            var a = document.createTextNode(o),
              i = e.childNodes;
            i[t] && e.removeChild(i[t]),
              i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
          }
        }
        function d(e, t, n) {
          var r = n.css,
            o = n.media,
            a = n.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            a &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          m = 0;
        function v(e, t) {
          var n, r, o;
          if (t.singleton) {
            var a = m++;
            (n = p || (p = u(t))),
              (r = f.bind(null, n, a, !1)),
              (o = f.bind(null, n, a, !0));
          } else
            (n = u(t)),
              (r = d.bind(null, n, t)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            r(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var n = l((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < n.length; r++) {
                var o = i(n[r]);
                a[o].references--;
              }
              for (var u = l(e, t), s = 0; s < n.length; s++) {
                var c = i(n[s]);
                0 === a[c].references && (a[c].updater(), a.splice(c, 1));
              }
              n = u;
            }
          };
        };
      },
      578: (e, t, n) => {
        var r;
        if ("object" == typeof globalThis) r = globalThis;
        else
          try {
            r = n(284);
          } catch (e) {
          } finally {
            if ((r || "undefined" == typeof window || (r = window), !r))
              throw new Error("Could not determine global this");
          }
        var o = r.WebSocket || r.MozWebSocket,
          a = n(387);
        function i(e, t) {
          return t ? new o(e, t) : new o(e);
        }
        o &&
          ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
            Object.defineProperty(i, e, {
              get: function () {
                return o[e];
              },
            });
          }),
          (e.exports = { w3cwebsocket: o ? i : null, version: a });
      },
      387: (e, t, n) => {
        e.exports = n(847).version;
      },
      847: (e) => {
        "use strict";
        e.exports = { version: "1.0.34" };
      },
    },
    t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      n.g.importScripts && (e = n.g.location + "");
      var t = n.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (() => {
      "use strict";
      var e = n(294),
        t = n(935),
        r = n(379),
        o = n.n(r),
        a = n(426);
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      o()(a.Z, { insert: "head", singleton: !1 }), a.Z.locals;
      var l = (0, e.createContext)(),
        u = function (t) {
          var n,
            r,
            o =
              ((n = (0, e.useState)([])),
              (r = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(n) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      a = void 0;
                    try {
                      for (
                        var i, l = e[Symbol.iterator]();
                        !(r = (i = l.next()).done) &&
                        (n.push(i.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (o = !0), (a = e);
                    } finally {
                      try {
                        r || null == l.return || l.return();
                      } finally {
                        if (o) throw a;
                      }
                    }
                    return n;
                  }
                })(n, r) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return i(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? i(e, t)
                        : void 0
                    );
                  }
                })(n, r) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            a = o[0],
            u = o[1];
          return e.createElement(l.Provider, { value: [a, u] }, t.children);
        };
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var c = (0, e.createContext)(),
        f = function (t) {
          var n,
            r,
            o =
              ((n = (0, e.useState)("")),
              (r = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(n) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      a = void 0;
                    try {
                      for (
                        var i, l = e[Symbol.iterator]();
                        !(r = (i = l.next()).done) &&
                        (n.push(i.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (o = !0), (a = e);
                    } finally {
                      try {
                        r || null == l.return || l.return();
                      } finally {
                        if (o) throw a;
                      }
                    }
                    return n;
                  }
                })(n, r) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return s(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? s(e, t)
                        : void 0
                    );
                  }
                })(n, r) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            a = o[0],
            i = o[1];
          return e.createElement(c.Provider, { value: [a, i] }, t.children);
        };
      function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var p = (0, e.createContext)(),
        m = function (t) {
          var n,
            r,
            o =
              ((n = (0, e.useState)("")),
              (r = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(n) ||
                (function (e, t) {
                  if (
                    "undefined" != typeof Symbol &&
                    Symbol.iterator in Object(e)
                  ) {
                    var n = [],
                      r = !0,
                      o = !1,
                      a = void 0;
                    try {
                      for (
                        var i, l = e[Symbol.iterator]();
                        !(r = (i = l.next()).done) &&
                        (n.push(i.value), !t || n.length !== t);
                        r = !0
                      );
                    } catch (e) {
                      (o = !0), (a = e);
                    } finally {
                      try {
                        r || null == l.return || l.return();
                      } finally {
                        if (o) throw a;
                      }
                    }
                    return n;
                  }
                })(n, r) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? d(e, t)
                        : void 0
                    );
                  }
                })(n, r) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            a = o[0],
            i = o[1];
          return e.createElement(p.Provider, { value: [a, i] }, t.children);
        },
        v = function (e, t) {
          return (v =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function h(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        v(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var g = function () {
        return (g =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function y(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      }
      function b(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          o,
          a = n.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; )
            i.push(r.value);
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a);
          } finally {
            if (o) throw o.error;
          }
        }
        return i;
      }
      function w(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create, Object.create;
      var x = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        k = {
          measureLayout: x([
            "layout",
            "layoutId",
            "drag",
            "_layoutResetTransform",
          ]),
          animation: x([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
          ]),
          exit: x(["exit"]),
          drag: x(["drag", "dragControls"]),
          focus: x(["whileFocus"]),
          hover: x(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: x(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: x(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          layoutAnimation: x(["layout", "layoutId"]),
        },
        E = (0, e.createContext)({ strict: !1 }),
        S = Object.keys(k),
        C = S.length,
        P = (0, e.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
        }),
        T = (0, e.createContext)({}),
        A = (0, e.createContext)(null);
      function _(t) {
        var n = (0, e.useRef)(null);
        return null === n.current && (n.current = t()), n.current;
      }
      function L() {
        var t = (0, e.useContext)(A);
        if (null === t) return [!0, null];
        var n = t.isPresent,
          r = t.onExitComplete,
          o = t.register,
          a = R();
        return (
          (0, e.useEffect)(function () {
            return o(a);
          }, []),
          !n && r
            ? [
                !1,
                function () {
                  return null == r ? void 0 : r(a);
                },
              ]
            : [!0]
        );
      }
      var M = 0,
        O = function () {
          return M++;
        },
        R = function () {
          return _(O);
        },
        N = (0, e.createContext)(null),
        z = "undefined" != typeof window,
        V = z ? e.useLayoutEffect : e.useEffect;
      function D(e) {
        return (
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function j(e) {
        return Array.isArray(e);
      }
      function I(e) {
        return "string" == typeof e || j(e);
      }
      function F(e, t, n, r, o) {
        var a;
        return (
          void 0 === r && (r = {}),
          void 0 === o && (o = {}),
          "string" == typeof t &&
            (t = null === (a = e.variants) || void 0 === a ? void 0 : a[t]),
          "function" == typeof t ? t(null != n ? n : e.custom, r, o) : t
        );
      }
      function U(e, t, n) {
        var r = e.getProps();
        return F(
          r,
          t,
          null != n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.forEachValue(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      function B(e) {
        var t;
        return (
          "function" ==
            typeof (null === (t = e.animate) || void 0 === t
              ? void 0
              : t.start) ||
          I(e.initial) ||
          I(e.animate) ||
          I(e.whileHover) ||
          I(e.whileDrag) ||
          I(e.whileTap) ||
          I(e.whileFocus) ||
          I(e.exit)
        );
      }
      function H(e) {
        return Boolean(B(e) || e.variants);
      }
      function W(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      function $(t) {
        var n = t.preloadedFeatures,
          r = t.createVisualElement,
          o = t.useRender,
          a = t.useVisualState,
          i = t.Component;
        return (
          n &&
            (function (e) {
              for (var t in e) {
                var n = e[t];
                null !== n && (k[t].Component = n);
              }
            })(n),
          (0, e.forwardRef)(function (t, n) {
            var l = (0, e.useContext)(P).isStatic,
              u = null,
              s = (function (t, n) {
                var r = (function (e, t) {
                    if (B(e)) {
                      var n = e.initial,
                        r = e.animate;
                      return {
                        initial: !1 === n || I(n) ? n : void 0,
                        animate: I(r) ? r : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(t, (0, e.useContext)(T)),
                  o = r.initial,
                  a = r.animate;
                return (0, e.useMemo)(
                  function () {
                    return { initial: o, animate: a };
                  },
                  n ? [W(o), W(a)] : []
                );
              })(t, l),
              c = a(t, l);
            return (
              !l &&
                z &&
                ((s.visualElement = (function (t, n, r, o) {
                  var a = (0, e.useContext)(P),
                    i = (0, e.useContext)(E),
                    l = (0, e.useContext)(T).visualElement,
                    u = (0, e.useContext)(A),
                    s = (function (t) {
                      var n = t.layoutId,
                        r = (0, e.useContext)(N);
                      return r && void 0 !== n ? r + "-" + n : n;
                    })(r),
                    c = (0, e.useRef)(void 0);
                  o || (o = i.renderer),
                    !c.current &&
                      o &&
                      (c.current = o(t, {
                        visualState: n,
                        parent: l,
                        props: g(g({}, r), { layoutId: s }),
                        presenceId: null == u ? void 0 : u.id,
                        blockInitialAnimation:
                          !1 === (null == u ? void 0 : u.initial),
                      }));
                  var f = c.current;
                  return (
                    V(function () {
                      var e;
                      f &&
                        (f.setProps(g(g(g({}, a), r), { layoutId: s })),
                        (f.isPresent = null === (e = u) || e.isPresent),
                        (f.isPresenceRoot =
                          !l || l.presenceId !== (null == u ? void 0 : u.id)),
                        f.syncRender());
                    }),
                    (0, e.useEffect)(function () {
                      var e;
                      f &&
                        (null === (e = f.animationState) ||
                          void 0 === e ||
                          e.animateChanges());
                    }),
                    V(function () {
                      return function () {
                        return null == f ? void 0 : f.notifyUnmount();
                      };
                    }, []),
                    f
                  );
                })(i, c, t, r)),
                (u = (function (t, n, r) {
                  var o = [];
                  if (((0, e.useContext)(E), !n)) return null;
                  for (var a = 0; a < C; a++) {
                    var i = S[a],
                      l = k[i],
                      u = l.isEnabled,
                      s = l.Component;
                    u(t) &&
                      s &&
                      o.push(
                        e.createElement(
                          s,
                          g({ key: i }, t, { visualElement: n })
                        )
                      );
                  }
                  return o;
                })(t, s.visualElement))),
              e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  T.Provider,
                  { value: s },
                  o(
                    i,
                    t,
                    (function (t, n, r) {
                      return (0, e.useCallback)(
                        function (e) {
                          var o;
                          e &&
                            (null === (o = t.mount) ||
                              void 0 === o ||
                              o.call(t, e)),
                            n && (e ? n.mount(e) : n.unmount()),
                            r &&
                              ("function" == typeof r
                                ? r(e)
                                : D(r) && (r.current = e));
                        },
                        [n]
                      );
                    })(c, s.visualElement, n),
                    c,
                    l
                  )
                ),
                u
              )
            );
          })
        );
      }
      function q(e) {
        function t(t, n) {
          return void 0 === n && (n = {}), $(e(t, n));
        }
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var Q = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "svg",
        "switch",
        "symbol",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function Y(e) {
        return (
          "string" == typeof e &&
          !e.includes("-") &&
          !!(Q.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var X = {},
        K = ["", "X", "Y", "Z"],
        Z = ["transformPerspective", "x", "y", "z"];
      function G(e, t) {
        return Z.indexOf(e) - Z.indexOf(t);
      }
      ["translate", "scale", "rotate", "skew"].forEach(function (e) {
        return K.forEach(function (t) {
          return Z.push(e + t);
        });
      });
      var J = new Set(Z);
      function ee(e) {
        return J.has(e);
      }
      var te = new Set(["originX", "originY", "originZ"]);
      function ne(e) {
        return te.has(e);
      }
      function re(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          ee(e) || ne(e) || ((n || void 0 !== r) && (!!X[e] || "opacity" === e))
        );
      }
      var oe = function (e) {
          return null !== e && "object" == typeof e && e.getVelocity;
        },
        ae = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        };
      function ie(e) {
        return e.startsWith("--");
      }
      var le = function (e, t) {
          return t && "number" == typeof e ? t.transform(e) : e;
        },
        ue = function () {
          return (ue =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      Object.create, Object.create;
      var se = function (e, t) {
          return function (n) {
            return Math.max(Math.min(n, t), e);
          };
        },
        ce = function (e) {
          return e % 1 ? Number(e.toFixed(5)) : e;
        },
        fe = /(-)?([\d]*\.?[\d])+/g,
        de =
          /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
        pe =
          /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
      function me(e) {
        return "string" == typeof e;
      }
      var ve = function (e) {
          return {
            test: function (t) {
              return me(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "" + t + e;
            },
          };
        },
        he = ve("deg"),
        ge = ve("%"),
        ye = ve("px"),
        be = ve("vh"),
        we = ve("vw"),
        xe = ue(ue({}, ge), {
          parse: function (e) {
            return ge.parse(e) / 100;
          },
          transform: function (e) {
            return ge.transform(100 * e);
          },
        }),
        ke = {
          test: function (e) {
            return "number" == typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Ee = ue(ue({}, ke), { transform: se(0, 1) }),
        Se = ue(ue({}, ke), { default: 1 }),
        Ce = g(g({}, ke), { transform: Math.round }),
        Pe = {
          borderWidth: ye,
          borderTopWidth: ye,
          borderRightWidth: ye,
          borderBottomWidth: ye,
          borderLeftWidth: ye,
          borderRadius: ye,
          radius: ye,
          borderTopLeftRadius: ye,
          borderTopRightRadius: ye,
          borderBottomRightRadius: ye,
          borderBottomLeftRadius: ye,
          width: ye,
          maxWidth: ye,
          height: ye,
          maxHeight: ye,
          size: ye,
          top: ye,
          right: ye,
          bottom: ye,
          left: ye,
          padding: ye,
          paddingTop: ye,
          paddingRight: ye,
          paddingBottom: ye,
          paddingLeft: ye,
          margin: ye,
          marginTop: ye,
          marginRight: ye,
          marginBottom: ye,
          marginLeft: ye,
          rotate: he,
          rotateX: he,
          rotateY: he,
          rotateZ: he,
          scale: Se,
          scaleX: Se,
          scaleY: Se,
          scaleZ: Se,
          skew: he,
          skewX: he,
          skewY: he,
          distance: ye,
          translateX: ye,
          translateY: ye,
          translateZ: ye,
          x: ye,
          y: ye,
          z: ye,
          perspective: ye,
          transformPerspective: ye,
          opacity: Ee,
          originX: xe,
          originY: xe,
          originZ: ye,
          zIndex: Ce,
          fillOpacity: Ee,
          strokeOpacity: Ee,
          numOctaves: Ce,
        };
      function Te(e, t, n, r, o, a, i, l) {
        var u,
          s = e.style,
          c = e.vars,
          f = e.transform,
          d = e.transformKeys,
          p = e.transformOrigin;
        d.length = 0;
        var m = !1,
          v = !1,
          h = !0;
        for (var g in t) {
          var y = t[g];
          if (ie(g)) c[g] = y;
          else {
            var b = Pe[g],
              w = le(y, b);
            if (ee(g)) {
              if (((m = !0), (f[g] = w), d.push(g), !h)) continue;
              y !== (null !== (u = b.default) && void 0 !== u ? u : 0) &&
                (h = !1);
            } else if (ne(g)) (p[g] = w), (v = !0);
            else if (
              (null == n ? void 0 : n.isHydrated) &&
              (null == r ? void 0 : r.isHydrated) &&
              X[g]
            ) {
              var x = X[g].process(y, r, n),
                k = X[g].applyTo;
              if (k) for (var E = k.length, S = 0; S < E; S++) s[k[S]] = x;
              else s[g] = x;
            } else s[g] = w;
          }
        }
        r && n && i && l
          ? ((s.transform = i(r.deltaFinal, r.treeScale, m ? f : void 0)),
            a && (s.transform = a(f, s.transform)),
            (s.transformOrigin = l(r)))
          : (m &&
              (s.transform = (function (e, t, n, r) {
                var o = e.transform,
                  a = e.transformKeys,
                  i = t.enableHardwareAcceleration,
                  l = void 0 === i || i,
                  u = t.allowTransformNone,
                  s = void 0 === u || u,
                  c = "";
                a.sort(G);
                for (var f = !1, d = a.length, p = 0; p < d; p++) {
                  var m = a[p];
                  (c += (ae[m] || m) + "(" + o[m] + ") "),
                    "z" === m && (f = !0);
                }
                return (
                  !f && l ? (c += "translateZ(0)") : (c = c.trim()),
                  r ? (c = r(o, n ? "" : c)) : s && n && (c = "none"),
                  c
                );
              })(e, o, h, a)),
            v &&
              (s.transformOrigin = (function (e) {
                var t = e.originX,
                  n = void 0 === t ? "50%" : t,
                  r = e.originY,
                  o = void 0 === r ? "50%" : r,
                  a = e.originZ;
                return n + " " + o + " " + (void 0 === a ? 0 : a);
              })(p)));
      }
      function Ae(e, t, n) {
        for (var r in t) oe(t[r]) || re(r, n) || (e[r] = t[r]);
      }
      function _e(t, n, r) {
        var o = {},
          a = (function (t, n, r) {
            var o = {};
            return (
              Ae(o, t.style || {}, t),
              Object.assign(
                o,
                (function (t, n, r) {
                  var o = t.transformTemplate;
                  return (0, e.useMemo)(
                    function () {
                      var e = {
                        style: {},
                        transform: {},
                        transformKeys: [],
                        transformOrigin: {},
                        vars: {},
                      };
                      Te(
                        e,
                        n,
                        void 0,
                        void 0,
                        { enableHardwareAcceleration: !r },
                        o
                      );
                      var t = e.style;
                      return g(g({}, e.vars), t);
                    },
                    [n]
                  );
                })(t, n, r)
              ),
              t.transformValues && (o = t.transformValues(o)),
              o
            );
          })(t, n, r);
        return (
          Boolean(t.drag) &&
            ((o.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))),
          (o.style = a),
          o
        );
      }
      var Le = new Set([
        "initial",
        "animate",
        "exit",
        "style",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "layout",
        "layoutId",
        "_layoutResetTransform",
        "onLayoutAnimationComplete",
        "onViewportBoxUpdate",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "drag",
        "dragControls",
        "dragListener",
        "dragConstraints",
        "dragDirectionLock",
        "_dragX",
        "_dragY",
        "dragElastic",
        "dragMomentum",
        "dragPropagation",
        "dragTransition",
        "whileDrag",
        "onPan",
        "onPanStart",
        "onPanEnd",
        "onPanSessionStart",
        "onTap",
        "onTapStart",
        "onTapCancel",
        "onHoverStart",
        "onHoverEnd",
        "whileFocus",
        "whileTap",
        "whileHover",
      ]);
      function Me(e) {
        return Le.has(e);
      }
      var Oe = function (e) {
        return !Me(e);
      };
      try {
        var Re = n(600).Z;
        Oe = function (e) {
          return e.startsWith("on") ? !Me(e) : Re(e);
        };
      } catch (e) {}
      function Ne(e, t, n) {
        return "string" == typeof e ? e : ye.transform(t + n * e);
      }
      var ze = function (e, t) {
          return ye.transform(e * t);
        },
        Ve = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        De = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function je(e, t, n, r, o, a, i, l) {
        var u = t.attrX,
          s = t.attrY,
          c = t.originX,
          f = t.originY,
          d = t.pathLength,
          p = t.pathSpacing,
          m = void 0 === p ? 1 : p,
          v = t.pathOffset,
          h = void 0 === v ? 0 : v;
        Te(
          e,
          y(t, [
            "attrX",
            "attrY",
            "originX",
            "originY",
            "pathLength",
            "pathSpacing",
            "pathOffset",
          ]),
          n,
          r,
          o,
          a,
          i,
          l
        ),
          (e.attrs = e.style),
          (e.style = {});
        var g = e.attrs,
          b = e.style,
          w = e.dimensions,
          x = e.totalPathLength;
        g.transform && (w && (b.transform = g.transform), delete g.transform),
          w &&
            (void 0 !== c || void 0 !== f || b.transform) &&
            (b.transformOrigin = (function (e, t, n) {
              return Ne(t, e.x, e.width) + " " + Ne(n, e.y, e.height);
            })(w, void 0 !== c ? c : 0.5, void 0 !== f ? f : 0.5)),
          void 0 !== u && (g.x = u),
          void 0 !== s && (g.y = s),
          void 0 !== x &&
            void 0 !== d &&
            (function (e, t, n, r, o, a) {
              void 0 === r && (r = 1),
                void 0 === o && (o = 0),
                void 0 === a && (a = !0);
              var i = a ? Ve : De;
              e[i.offset] = ze(-o, t);
              var l = ze(n, t),
                u = ze(r, t);
              e[i.array] = l + " " + u;
            })(g, x, d, m, h, !1);
      }
      var Ie = function () {
        return g(
          g(
            {},
            {
              style: {},
              transform: {},
              transformKeys: [],
              transformOrigin: {},
              vars: {},
            }
          ),
          { attrs: {} }
        );
      };
      function Fe(t, n) {
        var r = (0, e.useMemo)(
          function () {
            var e = Ie();
            return (
              je(
                e,
                n,
                void 0,
                void 0,
                { enableHardwareAcceleration: !1 },
                t.transformTemplate
              ),
              g(g({}, e.attrs), { style: g({}, e.style) })
            );
          },
          [n]
        );
        if (t.style) {
          var o = {};
          Ae(o, t.style, t), (r.style = g(g({}, o), r.style));
        }
        return r;
      }
      function Ue(t) {
        return (
          void 0 === t && (t = !1),
          function (n, r, o, a, i) {
            var l = a.latestValues,
              u = (Y(n) ? Fe : _e)(r, l, i),
              s = (function (e, t, n) {
                var r = {};
                for (var o in e)
                  (Oe(o) || (!0 === n && Me(o)) || (!t && !Me(o))) &&
                    (r[o] = e[o]);
                return r;
              })(r, "string" == typeof n, t),
              c = g(g(g({}, s), u), { ref: o });
            return (0, e.createElement)(n, c);
          }
        );
      }
      var Be = /([a-z])([A-Z])/g,
        He = function (e) {
          return e.replace(Be, "$1-$2").toLowerCase();
        };
      function We(e, t) {
        var n = t.style,
          r = t.vars;
        for (var o in (Object.assign(e.style, n), r))
          e.style.setProperty(o, r[o]);
      }
      var $e = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
      ]);
      function qe(e, t) {
        for (var n in (We(e, t), t.attrs))
          e.setAttribute($e.has(n) ? n : He(n), t.attrs[n]);
      }
      function Qe(e) {
        var t = e.style,
          n = {};
        for (var r in t) (oe(t[r]) || re(r, e)) && (n[r] = t[r]);
        return n;
      }
      function Ye(e) {
        var t = Qe(e);
        for (var n in e)
          oe(e[n]) &&
            (t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]);
        return t;
      }
      function Xe(e) {
        return "object" == typeof e && "function" == typeof e.start;
      }
      var Ke = function (e) {
        return Array.isArray(e);
      };
      function Ze(e, t, n, r) {
        var o = e.scrapeMotionValuesFromProps,
          a = e.createRenderState,
          i = e.onMount,
          l = { latestValues: Je(t, n, r, o), renderState: a() };
        return (
          i &&
            (l.mount = function (e) {
              return i(t, e, l);
            }),
          l
        );
      }
      var Ge = function (t) {
        return function (n, r) {
          var o = (0, e.useContext)(T),
            a = (0, e.useContext)(A);
          return r
            ? Ze(t, n, o, a)
            : _(function () {
                return Ze(t, n, o, a);
              });
        };
      };
      function Je(e, t, n, r) {
        var o,
          a,
          i,
          l = {},
          u = !1 === (null == n ? void 0 : n.initial),
          s = r(e);
        for (var c in s)
          l[c] =
            ((o = s[c]),
            (a = void 0),
            (i = void 0),
            (i = oe(o) ? o.get() : o),
            (a = i),
            Boolean(a && "object" == typeof a && a.mix && a.toValue)
              ? i.toValue()
              : i);
        var f = e.initial,
          d = e.animate,
          p = B(e),
          m = H(e);
        t &&
          m &&
          !p &&
          !1 !== e.inherit &&
          (null != f || (f = t.initial), null != d || (d = t.animate));
        var v = u || !1 === f ? d : f;
        return (
          v &&
            "boolean" != typeof v &&
            !Xe(v) &&
            (Array.isArray(v) ? v : [v]).forEach(function (t) {
              var n = F(e, t);
              if (n) {
                var r = n.transitionEnd;
                n.transition;
                var o = y(n, ["transitionEnd", "transition"]);
                for (var a in o) l[a] = o[a];
                for (var a in r) l[a] = r[a];
              }
            }),
          l
        );
      }
      var et,
        tt = {
          useVisualState: Ge({
            scrapeMotionValuesFromProps: Ye,
            createRenderState: Ie,
            onMount: function (e, t, n) {
              var r = n.renderState,
                o = n.latestValues;
              try {
                r.dimensions =
                  "function" == typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (e) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              "path" === t.tagName && (r.totalPathLength = t.getTotalLength()),
                je(
                  r,
                  o,
                  void 0,
                  void 0,
                  { enableHardwareAcceleration: !1 },
                  e.transformTemplate
                ),
                qe(t, r);
            },
          }),
        },
        nt = {
          useVisualState: Ge({
            scrapeMotionValuesFromProps: Qe,
            createRenderState: function () {
              return {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {},
              };
            },
          }),
        };
      function rt(e, t, n, r) {
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n, r);
          }
        );
      }
      function ot(t, n, r, o) {
        (0, e.useEffect)(
          function () {
            var e = t.current;
            if (r && e) return rt(e, n, r, o);
          },
          [t, n, r, o]
        );
      }
      function at(e) {
        return "undefined" != typeof PointerEvent && e instanceof PointerEvent
          ? !("mouse" !== e.pointerType)
          : e instanceof MouseEvent;
      }
      function it(e) {
        return !!e.touches;
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.Exit = "exit");
      })(et || (et = {}));
      var lt = { pageX: 0, pageY: 0 };
      function ut(e, t) {
        void 0 === t && (t = "page");
        var n = e.touches[0] || e.changedTouches[0] || lt;
        return { x: n[t + "X"], y: n[t + "Y"] };
      }
      function st(e, t) {
        return void 0 === t && (t = "page"), { x: e[t + "X"], y: e[t + "Y"] };
      }
      function ct(e, t) {
        return (
          void 0 === t && (t = "page"), { point: it(e) ? ut(e, t) : st(e, t) }
        );
      }
      var ft = function (e, t) {
          void 0 === t && (t = !1);
          var n,
            r = function (t) {
              return e(t, ct(t));
            };
          return t
            ? ((n = r),
              function (e) {
                var t = e instanceof MouseEvent;
                (!t || (t && 0 === e.button)) && n(e);
              })
            : r;
        },
        dt = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave",
        },
        pt = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel",
        };
      function mt(e) {
        return z && null === window.onpointerdown
          ? e
          : z && null === window.ontouchstart
          ? pt[e]
          : z && null === window.onmousedown
          ? dt[e]
          : e;
      }
      function vt(e, t, n, r) {
        return rt(e, mt(t), ft(n, "pointerdown" === t), r);
      }
      function ht(e, t, n, r) {
        return ot(e, mt(t), n && ft(n, "pointerdown" === t), r);
      }
      function gt(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var yt = gt("dragHorizontal"),
        bt = gt("dragVertical");
      function wt(e) {
        var t = !1;
        if ("y" === e) t = bt();
        else if ("x" === e) t = yt();
        else {
          var n = yt(),
            r = bt();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function xt() {
        var e = wt(!0);
        return !e || (e(), !1);
      }
      function kt(e, t, n) {
        return function (r, o) {
          var a;
          at(r) &&
            !xt() &&
            (null == n || n(r, o),
            null === (a = e.animationState) ||
              void 0 === a ||
              a.setActive(et.Hover, t));
        };
      }
      var Et = function (e, t) {
        return !!t && (e === t || Et(e, t.parentElement));
      };
      function St(t) {
        return (0, e.useEffect)(function () {
          return function () {
            return t();
          };
        }, []);
      }
      var Ct = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        Pt = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return e.reduce(Ct);
        },
        Tt = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        At = {
          tap: Tt(function (t) {
            var n = t.onTap,
              r = t.onTapStart,
              o = t.onTapCancel,
              a = t.whileTap,
              i = t.visualElement,
              l = n || r || o || a,
              u = (0, e.useRef)(!1),
              s = (0, e.useRef)(null);
            function c() {
              var e;
              null === (e = s.current) || void 0 === e || e.call(s),
                (s.current = null);
            }
            function f() {
              var e;
              return (
                c(),
                (u.current = !1),
                null === (e = i.animationState) ||
                  void 0 === e ||
                  e.setActive(et.Tap, !1),
                !xt()
              );
            }
            function d(e, t) {
              f() &&
                (Et(i.getInstance(), e.target)
                  ? null == n || n(e, t)
                  : null == o || o(e, t));
            }
            function p(e, t) {
              f() && (null == o || o(e, t));
            }
            ht(
              i,
              "pointerdown",
              l
                ? function (e, t) {
                    var n;
                    c(),
                      u.current ||
                        ((u.current = !0),
                        (s.current = Pt(
                          vt(window, "pointerup", d),
                          vt(window, "pointercancel", p)
                        )),
                        null == r || r(e, t),
                        null === (n = i.animationState) ||
                          void 0 === n ||
                          n.setActive(et.Tap, !0));
                  }
                : void 0
            ),
              St(c);
          }),
          focus: Tt(function (e) {
            var t = e.whileFocus,
              n = e.visualElement;
            ot(
              n,
              "focus",
              t
                ? function () {
                    var e;
                    null === (e = n.animationState) ||
                      void 0 === e ||
                      e.setActive(et.Focus, !0);
                  }
                : void 0
            ),
              ot(
                n,
                "blur",
                t
                  ? function () {
                      var e;
                      null === (e = n.animationState) ||
                        void 0 === e ||
                        e.setActive(et.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: Tt(function (e) {
            var t = e.onHoverStart,
              n = e.onHoverEnd,
              r = e.whileHover,
              o = e.visualElement;
            ht(o, "pointerenter", t || r ? kt(o, !0, t) : void 0),
              ht(o, "pointerleave", n || r ? kt(o, !1, n) : void 0);
          }),
        };
      function _t(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var Lt = function () {
        return (Lt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function Mt(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      }
      Object.create, Object.create;
      var Ot = function (e, t, n) {
        return Math.min(Math.max(n, e), t);
      };
      function Rt(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var Nt = ["duration", "bounce"],
        zt = ["stiffness", "damping", "mass"];
      function Vt(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function Dt(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          o = void 0 === r ? 1 : r,
          a = e.restSpeed,
          i = void 0 === a ? 2 : a,
          l = e.restDelta,
          u = Mt(e, ["from", "to", "restSpeed", "restDelta"]),
          s = { done: !1, value: n },
          c = (function (e) {
            var t = Lt(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!Vt(e, zt) && Vt(e, Nt)) {
              var n = (function (e) {
                var t,
                  n,
                  r = e.duration,
                  o = void 0 === r ? 800 : r,
                  a = e.bounce,
                  i = void 0 === a ? 0.25 : a,
                  l = e.velocity,
                  u = void 0 === l ? 0 : l,
                  s = e.mass,
                  c = void 0 === s ? 1 : s,
                  f = 1 - i;
                (f = Ot(0.05, 1, f)),
                  (o = Ot(0.01, 10, o / 1e3)),
                  f < 1
                    ? ((t = function (e) {
                        var t = e * f,
                          n = t * o;
                        return 0.001 - ((t - u) / Rt(e, f)) * Math.exp(-n);
                      }),
                      (n = function (e) {
                        var n = e * f * o,
                          r = n * u + u,
                          a = Math.pow(f, 2) * Math.pow(e, 2) * o,
                          i = Math.exp(-n),
                          l = Rt(Math.pow(e, 2), f);
                        return (
                          ((0.001 - t(e) > 0 ? -1 : 1) * ((r - a) * i)) / l
                        );
                      }))
                    : ((t = function (e) {
                        return Math.exp(-e * o) * ((e - u) * o + 1) - 0.001;
                      }),
                      (n = function (e) {
                        return Math.exp(-e * o) * (o * o * (u - e));
                      }));
                var d = (function (e, t, n) {
                  for (var r = n, o = 1; o < 12; o++) r -= e(r) / t(r);
                  return r;
                })(t, n, 5 / o);
                if (((o *= 1e3), isNaN(d)))
                  return { stiffness: 100, damping: 10, duration: o };
                var p = Math.pow(d, 2) * c;
                return {
                  stiffness: p,
                  damping: 2 * f * Math.sqrt(c * p),
                  duration: o,
                };
              })(e);
              (t = Lt(Lt(Lt({}, t), n), {
                velocity: 0,
                mass: 1,
              })).isResolvedFromDuration = !0;
            }
            return t;
          })(u),
          f = c.stiffness,
          d = c.damping,
          p = c.mass,
          m = c.velocity,
          v = c.duration,
          h = c.isResolvedFromDuration,
          g = jt,
          y = jt;
        function b() {
          var e = m ? -m / 1e3 : 0,
            t = o - n,
            r = d / (2 * Math.sqrt(f * p)),
            a = Math.sqrt(f / p) / 1e3;
          if ((null != l || (l = Math.abs(o - n) <= 1 ? 0.01 : 0.4), r < 1)) {
            var i = Rt(a, r);
            (g = function (n) {
              var l = Math.exp(-r * a * n);
              return (
                o -
                l *
                  (((e + r * a * t) / i) * Math.sin(i * n) +
                    t * Math.cos(i * n))
              );
            }),
              (y = function (n) {
                var o = Math.exp(-r * a * n);
                return (
                  r *
                    a *
                    o *
                    ((Math.sin(i * n) * (e + r * a * t)) / i +
                      t * Math.cos(i * n)) -
                  o *
                    (Math.cos(i * n) * (e + r * a * t) -
                      i * t * Math.sin(i * n))
                );
              });
          } else if (1 === r)
            g = function (n) {
              return o - Math.exp(-a * n) * (t + (e + a * t) * n);
            };
          else {
            var u = a * Math.sqrt(r * r - 1);
            g = function (n) {
              var i = Math.exp(-r * a * n),
                l = Math.min(u * n, 300);
              return (
                o -
                (i * ((e + r * a * t) * Math.sinh(l) + u * t * Math.cosh(l))) /
                  u
              );
            };
          }
        }
        return (
          b(),
          {
            next: function (e) {
              var t = g(e);
              if (h) s.done = e >= v;
              else {
                var n = 1e3 * y(e),
                  r = Math.abs(n) <= i,
                  a = Math.abs(o - t) <= l;
                s.done = r && a;
              }
              return (s.value = s.done ? o : t), s;
            },
            flipTarget: function () {
              var e;
              (m = -m), (n = (e = [o, n])[0]), (o = e[1]), b();
            },
          }
        );
      }
      Dt.needsInterpolation = function (e, t) {
        return "string" == typeof e || "string" == typeof t;
      };
      var jt = function (e) {
          return 0;
        },
        It = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        Ft = function (e, t, n) {
          return -n * e + n * t + e;
        },
        Ut = function (e, t) {
          return function (n) {
            return Boolean(
              (me(n) && pe.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Bt = function (e, t, n) {
          return function (r) {
            var o;
            if (!me(r)) return r;
            var a = r.match(fe),
              i = a[0],
              l = a[1],
              u = a[2],
              s = a[3];
            return (
              ((o = {})[e] = parseFloat(i)),
              (o[t] = parseFloat(l)),
              (o[n] = parseFloat(u)),
              (o.alpha = void 0 !== s ? parseFloat(s) : 1),
              o
            );
          };
        },
        Ht = se(0, 255),
        Wt = ue(ue({}, ke), {
          transform: function (e) {
            return Math.round(Ht(e));
          },
        }),
        $t = {
          test: Ut("rgb", "red"),
          parse: Bt("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              o = e.alpha,
              a = void 0 === o ? 1 : o;
            return (
              "rgba(" +
              Wt.transform(t) +
              ", " +
              Wt.transform(n) +
              ", " +
              Wt.transform(r) +
              ", " +
              ce(Ee.transform(a)) +
              ")"
            );
          },
        },
        qt = {
          test: Ut("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              o = "";
            return (
              e.length > 5
                ? ((t = e.substr(1, 2)),
                  (n = e.substr(3, 2)),
                  (r = e.substr(5, 2)),
                  (o = e.substr(7, 2)))
                : ((t = e.substr(1, 1)),
                  (n = e.substr(2, 1)),
                  (r = e.substr(3, 1)),
                  (o = e.substr(4, 1)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (o += o)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: o ? parseInt(o, 16) / 255 : 1,
              }
            );
          },
          transform: $t.transform,
        },
        Qt = {
          test: Ut("hsl", "hue"),
          parse: Bt("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              o = e.alpha,
              a = void 0 === o ? 1 : o;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              ge.transform(ce(n)) +
              ", " +
              ge.transform(ce(r)) +
              ", " +
              ce(Ee.transform(a)) +
              ")"
            );
          },
        },
        Yt = function (e, t, n) {
          var r = e * e,
            o = t * t;
          return Math.sqrt(Math.max(0, n * (o - r) + r));
        },
        Xt = [qt, $t, Qt],
        Kt = function (e) {
          return Xt.find(function (t) {
            return t.test(e);
          });
        },
        Zt = function (e) {
          return (
            "'" +
            e +
            "' is not an animatable color. Use the equivalent color code instead."
          );
        },
        Gt = function (e, t) {
          var n = Kt(e),
            r = Kt(t);
          Zt(e), Zt(t), n.transform, r.transform;
          var o = n.parse(e),
            a = r.parse(t),
            i = Lt({}, o),
            l = n === Qt ? Ft : Yt;
          return function (e) {
            for (var t in i) "alpha" !== t && (i[t] = l(o[t], a[t], e));
            return (i.alpha = Ft(o.alpha, a.alpha, e)), n.transform(i);
          };
        },
        Jt = {
          test: function (e) {
            return $t.test(e) || qt.test(e) || Qt.test(e);
          },
          parse: function (e) {
            return $t.test(e)
              ? $t.parse(e)
              : Qt.test(e)
              ? Qt.parse(e)
              : qt.parse(e);
          },
          transform: function (e) {
            return me(e)
              ? e
              : e.hasOwnProperty("red")
              ? $t.transform(e)
              : Qt.transform(e);
          },
        },
        en = "${c}",
        tn = "${n}";
      function nn(e) {
        var t = [],
          n = 0,
          r = e.match(de);
        r &&
          ((n = r.length),
          (e = e.replace(de, en)),
          t.push.apply(t, r.map(Jt.parse)));
        var o = e.match(fe);
        return (
          o && ((e = e.replace(fe, tn)), t.push.apply(t, o.map(ke.parse))),
          { values: t, numColors: n, tokenised: e }
        );
      }
      function rn(e) {
        return nn(e).values;
      }
      function on(e) {
        var t = nn(e),
          n = t.values,
          r = t.numColors,
          o = t.tokenised,
          a = n.length;
        return function (e) {
          for (var t = o, n = 0; n < a; n++)
            t = t.replace(
              n < r ? en : tn,
              n < r ? Jt.transform(e[n]) : ce(e[n])
            );
          return t;
        };
      }
      var an = function (e) {
          return "number" == typeof e ? 0 : e;
        },
        ln = {
          test: function (e) {
            var t, n, r, o;
            return (
              isNaN(e) &&
              me(e) &&
              (null !==
                (n =
                  null === (t = e.match(fe)) || void 0 === t
                    ? void 0
                    : t.length) && void 0 !== n
                ? n
                : 0) +
                (null !==
                  (o =
                    null === (r = e.match(de)) || void 0 === r
                      ? void 0
                      : r.length) && void 0 !== o
                  ? o
                  : 0) >
                0
            );
          },
          parse: rn,
          createTransformer: on,
          getAnimatableNone: function (e) {
            var t = rn(e);
            return on(e)(t.map(an));
          },
        },
        un = function (e) {
          return "number" == typeof e;
        };
      function sn(e, t) {
        return un(e)
          ? function (n) {
              return Ft(e, t, n);
            }
          : Jt.test(e)
          ? Gt(e, t)
          : pn(e, t);
      }
      var cn = function (e, t) {
          var n = (function (e, t, n) {
              if (n || 2 === arguments.length)
                for (var r, o = 0, a = t.length; o < a; o++)
                  (!r && o in t) ||
                    (r || (r = Array.prototype.slice.call(t, 0, o)),
                    (r[o] = t[o]));
              return e.concat(r || Array.prototype.slice.call(t));
            })([], e),
            r = n.length,
            o = e.map(function (e, n) {
              return sn(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = o[t](e);
            return n;
          };
        },
        fn = function (e, t) {
          var n = Lt(Lt({}, e), t),
            r = {};
          for (var o in n)
            void 0 !== e[o] && void 0 !== t[o] && (r[o] = sn(e[o], t[o]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        };
      function dn(e) {
        for (
          var t = ln.parse(e), n = t.length, r = 0, o = 0, a = 0, i = 0;
          i < n;
          i++
        )
          r || "number" == typeof t[i] ? r++ : void 0 !== t[i].hue ? a++ : o++;
        return { parsed: t, numNumbers: r, numRGB: o, numHSL: a };
      }
      var pn = function (e, t) {
          var n = ln.createTransformer(t),
            r = dn(e),
            o = dn(t);
          return (
            r.numHSL === o.numHSL &&
              r.numRGB === o.numRGB &&
              (r.numNumbers, o.numNumbers),
            Pt(cn(r.parsed, o.parsed), n)
          );
        },
        mn = function (e, t) {
          return function (n) {
            return Ft(e, t, n);
          };
        };
      function vn(e, t, n) {
        var r = void 0 === n ? {} : n,
          o = r.clamp,
          a = void 0 === o || o,
          i = r.ease,
          l = r.mixer,
          u = e.length;
        t.length,
          !i || !Array.isArray(i) || i.length,
          e[0] > e[u - 1] &&
            ((e = [].concat(e)), (t = [].concat(t)), e.reverse(), t.reverse());
        var s = (function (e, t, n) {
            for (
              var r,
                o = [],
                a =
                  n ||
                  ("number" == typeof (r = e[0])
                    ? mn
                    : "string" == typeof r
                    ? Jt.test(r)
                      ? Gt
                      : pn
                    : Array.isArray(r)
                    ? cn
                    : "object" == typeof r
                    ? fn
                    : void 0),
                i = e.length - 1,
                l = 0;
              l < i;
              l++
            ) {
              var u = a(e[l], e[l + 1]);
              if (t) {
                var s = Array.isArray(t) ? t[l] : t;
                u = Pt(s, u);
              }
              o.push(u);
            }
            return o;
          })(t, i, l),
          c =
            2 === u
              ? (function (e, t) {
                  var n = e[0],
                    r = e[1],
                    o = t[0];
                  return function (e) {
                    return o(It(n, r, e));
                  };
                })(e, s)
              : (function (e, t) {
                  var n = e.length,
                    r = n - 1;
                  return function (o) {
                    var a = 0,
                      i = !1;
                    if (
                      (o <= e[0]
                        ? (i = !0)
                        : o >= e[r] && ((a = r - 1), (i = !0)),
                      !i)
                    ) {
                      for (var l = 1; l < n && !(e[l] > o || l === r); l++);
                      a = l - 1;
                    }
                    var u = It(e[a], e[a + 1], o);
                    return t[a](u);
                  };
                })(e, s);
        return a
          ? function (t) {
              return c(Ot(e[0], e[u - 1], t));
            }
          : c;
      }
      var hn,
        gn = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        yn = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        bn = function (e) {
          return function (t) {
            return t * t * ((e + 1) * t - e);
          };
        },
        wn = function (e) {
          return e;
        },
        xn =
          (2,
          function (e) {
            return Math.pow(e, 2);
          }),
        kn = gn(xn),
        En = yn(xn),
        Sn = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Cn = gn(Sn),
        Pn = yn(Cn),
        Tn = bn(1.525),
        An = gn(Tn),
        _n = yn(Tn),
        Ln =
          ((hn = bn(1.525)),
          function (e) {
            return (e *= 2) < 1
              ? 0.5 * hn(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          }),
        Mn = function (e) {
          if (1 === e || 0 === e) return e;
          var t = e * e;
          return e < 0.36363636363636365
            ? 7.5625 * t
            : e < 0.7272727272727273
            ? 9.075 * t - 9.9 * e + 3.4
            : e < 0.9
            ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255
            : 10.8 * e * e - 20.52 * e + 10.72;
        },
        On = gn(Mn);
      function Rn(e, t) {
        return e
          .map(function () {
            return t || En;
          })
          .splice(0, e.length - 1);
      }
      function Nn(e) {
        var t = e.from,
          n = void 0 === t ? 0 : t,
          r = e.to,
          o = void 0 === r ? 1 : r,
          a = e.ease,
          i = e.offset,
          l = e.duration,
          u = void 0 === l ? 300 : l,
          s = { done: !1, value: n },
          c = Array.isArray(o) ? o : [n, o],
          f = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            i && i.length === c.length
              ? i
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(c),
            u
          );
        function d() {
          return vn(f, c, { ease: Array.isArray(a) ? a : Rn(c, a) });
        }
        var p = d();
        return {
          next: function (e) {
            return (s.value = p(e)), (s.done = e >= u), s;
          },
          flipTarget: function () {
            c.reverse(), (p = d());
          },
        };
      }
      var zn = {
          keyframes: Nn,
          spring: Dt,
          decay: function (e) {
            var t = e.velocity,
              n = void 0 === t ? 0 : t,
              r = e.from,
              o = void 0 === r ? 0 : r,
              a = e.power,
              i = void 0 === a ? 0.8 : a,
              l = e.timeConstant,
              u = void 0 === l ? 350 : l,
              s = e.restDelta,
              c = void 0 === s ? 0.5 : s,
              f = e.modifyTarget,
              d = { done: !1, value: o },
              p = i * n,
              m = o + p,
              v = void 0 === f ? m : f(m);
            return (
              v !== m && (p = v - o),
              {
                next: function (e) {
                  var t = -p * Math.exp(-e / u);
                  return (
                    (d.done = !(t > c || t < -c)),
                    (d.value = d.done ? v : v + t),
                    d
                  );
                },
                flipTarget: function () {},
              }
            );
          },
        },
        Vn = (1 / 60) * 1e3,
        Dn =
          "undefined" != typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        jn =
          "undefined" != typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(Dn());
                }, Vn);
              },
        In = !0,
        Fn = !1,
        Un = !1,
        Bn = { delta: 0, timestamp: 0 },
        Hn = ["read", "update", "preRender", "render", "postRender"],
        Wn = Hn.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                o = !1,
                a = new WeakSet(),
                i = {
                  schedule: function (e, i, l) {
                    void 0 === i && (i = !1), void 0 === l && (l = !1);
                    var u = l && o,
                      s = u ? t : n;
                    return (
                      i && a.add(e),
                      -1 === s.indexOf(e) &&
                        (s.push(e), u && o && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), a.delete(e);
                  },
                  process: function (l) {
                    var u;
                    if (
                      ((o = !0),
                      (t = (u = [n, t])[0]),
                      ((n = u[1]).length = 0),
                      (r = t.length))
                    )
                      for (var s = 0; s < r; s++) {
                        var c = t[s];
                        c(l), a.has(c) && (i.schedule(c), e());
                      }
                    o = !1;
                  },
                };
              return i;
            })(function () {
              return (Fn = !0);
            })),
            e
          );
        }, {}),
        $n = Hn.reduce(function (e, t) {
          var n = Wn[t];
          return (
            (e[t] = function (e, t, r) {
              return (
                void 0 === t && (t = !1),
                void 0 === r && (r = !1),
                Fn || Kn(),
                n.schedule(e, t, r)
              );
            }),
            e
          );
        }, {}),
        qn = Hn.reduce(function (e, t) {
          return (e[t] = Wn[t].cancel), e;
        }, {}),
        Qn = Hn.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return Wn[t].process(Bn);
            }),
            e
          );
        }, {}),
        Yn = function (e) {
          return Wn[e].process(Bn);
        },
        Xn = function (e) {
          (Fn = !1),
            (Bn.delta = In ? Vn : Math.max(Math.min(e - Bn.timestamp, 40), 1)),
            (Bn.timestamp = e),
            (Un = !0),
            Hn.forEach(Yn),
            (Un = !1),
            Fn && ((In = !1), jn(Xn));
        },
        Kn = function () {
          (Fn = !0), (In = !0), Un || jn(Xn);
        },
        Zn = function () {
          return Bn;
        };
      const Gn = $n;
      function Jn(e, t, n) {
        return void 0 === n && (n = 0), e - t - n;
      }
      var er = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return Gn.update(t, !0);
          },
          stop: function () {
            return qn.update(t);
          },
        };
      };
      function tr(e) {
        var t,
          n,
          r,
          o,
          a,
          i = e.from,
          l = e.autoplay,
          u = void 0 === l || l,
          s = e.driver,
          c = void 0 === s ? er : s,
          f = e.elapsed,
          d = void 0 === f ? 0 : f,
          p = e.repeat,
          m = void 0 === p ? 0 : p,
          v = e.repeatType,
          h = void 0 === v ? "loop" : v,
          g = e.repeatDelay,
          y = void 0 === g ? 0 : g,
          b = e.onPlay,
          w = e.onStop,
          x = e.onComplete,
          k = e.onRepeat,
          E = e.onUpdate,
          S = Mt(e, [
            "from",
            "autoplay",
            "driver",
            "elapsed",
            "repeat",
            "repeatType",
            "repeatDelay",
            "onPlay",
            "onStop",
            "onComplete",
            "onRepeat",
            "onUpdate",
          ]),
          C = S.to,
          P = 0,
          T = S.duration,
          A = !1,
          _ = !0,
          L = (function (e) {
            if (Array.isArray(e.to)) return Nn;
            if (zn[e.type]) return zn[e.type];
            var t = new Set(Object.keys(e));
            return t.has("ease") ||
              (t.has("duration") && !t.has("dampingRatio"))
              ? Nn
              : t.has("dampingRatio") ||
                t.has("stiffness") ||
                t.has("mass") ||
                t.has("damping") ||
                t.has("restSpeed") ||
                t.has("restDelta")
              ? Dt
              : Nn;
          })(S);
        (null === (n = (t = L).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, i, C)) &&
          ((a = vn([0, 100], [i, C], { clamp: !1 })), (i = 0), (C = 100));
        var M = L(Lt(Lt({}, S), { from: i, to: C }));
        return (
          u &&
            (null == b || b(),
            (r = c(function (e) {
              if ((_ || (e = -e), (d += e), !A)) {
                var t = M.next(Math.max(0, d));
                (o = t.value), a && (o = a(o)), (A = _ ? t.done : d <= 0);
              }
              null == E || E(o),
                A &&
                  (0 === P && (null != T || (T = d)),
                  P < m
                    ? (function (e, t, n, r) {
                        return r ? e >= t + n : e <= -n;
                      })(d, T, y, _) &&
                      (P++,
                      "reverse" === h
                        ? (d = (function (e, t, n, r) {
                            return (
                              void 0 === n && (n = 0),
                              void 0 === r && (r = !0),
                              r ? Jn(t + -e, t, n) : t - (e - t) + n
                            );
                          })(d, T, y, (_ = P % 2 == 0)))
                        : ((d = Jn(d, T, y)), "mirror" === h && M.flipTarget()),
                      (A = !1),
                      k && k())
                    : (r.stop(), x && x()));
            })).start()),
          {
            stop: function () {
              null == w || w(), r.stop();
            },
          }
        );
      }
      function nr(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var rr = function (e) {
          return 1e3 * e;
        },
        or = function (e, t) {
          return 1 - 3 * t + 3 * e;
        },
        ar = function (e, t) {
          return 3 * t - 6 * e;
        },
        ir = function (e) {
          return 3 * e;
        },
        lr = function (e, t, n) {
          return ((or(t, n) * e + ar(t, n)) * e + ir(t)) * e;
        },
        ur = function (e, t, n) {
          return 3 * or(t, n) * e * e + 2 * ar(t, n) * e + ir(t);
        },
        sr = 0.1;
      function cr(e, t, n, r) {
        if (e === t && n === r) return wn;
        for (var o = new Float32Array(11), a = 0; a < 11; ++a)
          o[a] = lr(a * sr, e, n);
        return function (a) {
          return 0 === a || 1 === a
            ? a
            : lr(
                (function (t) {
                  for (var r = 0, a = 1; 10 !== a && o[a] <= t; ++a) r += sr;
                  --a;
                  var i = r + ((t - o[a]) / (o[a + 1] - o[a])) * sr,
                    l = ur(i, e, n);
                  return l >= 0.001
                    ? (function (e, t, n, r) {
                        for (var o = 0; o < 8; ++o) {
                          var a = ur(t, n, r);
                          if (0 === a) return t;
                          t -= (lr(t, n, r) - e) / a;
                        }
                        return t;
                      })(t, i, e, n)
                    : 0 === l
                    ? i
                    : (function (e, t, n, r, o) {
                        var a,
                          i,
                          l = 0;
                        do {
                          (a = lr((i = t + (n - t) / 2), r, o) - e) > 0
                            ? (n = i)
                            : (t = i);
                        } while (Math.abs(a) > 1e-7 && ++l < 10);
                        return i;
                      })(t, r, r + sr, e, n);
                })(a),
                t,
                r
              );
        };
      }
      var fr = {
          linear: wn,
          easeIn: xn,
          easeInOut: En,
          easeOut: kn,
          circIn: Sn,
          circInOut: Pn,
          circOut: Cn,
          backIn: Tn,
          backInOut: _n,
          backOut: An,
          anticipate: Ln,
          bounceIn: On,
          bounceInOut: function (e) {
            return e < 0.5
              ? 0.5 * (1 - Mn(1 - 2 * e))
              : 0.5 * Mn(2 * e - 1) + 0.5;
          },
          bounceOut: Mn,
        },
        dr = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = b(e, 4);
            return cr(t[0], t[1], t[2], t[3]);
          }
          return "string" == typeof e ? fr[e] : e;
        },
        pr = function (e, t) {
          return !(
            "zIndex" === e ||
            ("number" != typeof t &&
              !Array.isArray(t) &&
              ("string" != typeof t || !ln.test(t) || t.startsWith("url(")))
          );
        },
        mr = function () {
          return {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restDelta: 0.5,
            restSpeed: 10,
          };
        },
        vr = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restDelta: 0.01,
            restSpeed: 10,
          };
        },
        hr = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        gr = function (e) {
          return { type: "keyframes", duration: 0.8, values: e };
        },
        yr = {
          x: mr,
          y: mr,
          z: mr,
          rotate: mr,
          rotateX: mr,
          rotateY: mr,
          rotateZ: mr,
          scaleX: vr,
          scaleY: vr,
          scale: vr,
          opacity: hr,
          backgroundColor: hr,
          color: hr,
          default: vr,
        },
        br = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function wr(e) {
        var t = e.slice(0, -1).split("("),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var o = (r.match(fe) || [])[0];
        if (!o) return e;
        var a = r.replace(o, ""),
          i = br.has(n) ? 1 : 0;
        return o !== r && (i *= 100), n + "(" + i + a + ")";
      }
      var xr = /([a-z-]*)\(.*?\)/g,
        kr = ue(ue({}, ln), {
          getAnimatableNone: function (e) {
            var t = e.match(xr);
            return t ? t.map(wr).join(" ") : e;
          },
        }),
        Er = g(g({}, Pe), {
          color: Jt,
          backgroundColor: Jt,
          outlineColor: Jt,
          fill: Jt,
          stroke: Jt,
          borderColor: Jt,
          borderTopColor: Jt,
          borderRightColor: Jt,
          borderBottomColor: Jt,
          borderLeftColor: Jt,
          filter: kr,
          WebkitFilter: kr,
        }),
        Sr = function (e) {
          return Er[e];
        };
      function Cr(e, t) {
        var n,
          r = Sr(e);
        return (
          r !== kr && (r = ln),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      function Pr(e, t, n) {
        var r, o, a, i;
        return (
          Array.isArray(t.to) &&
            ((null !== (r = e.duration) && void 0 !== r) || (e.duration = 0.8)),
          (function (e) {
            Array.isArray(e.to) &&
              null === e.to[0] &&
              ((e.to = w([], b(e.to))), (e.to[0] = e.from));
          })(t),
          (function (e) {
            e.when,
              e.delay,
              e.delayChildren,
              e.staggerChildren,
              e.staggerDirection,
              e.repeat,
              e.repeatType,
              e.repeatDelay,
              e.from;
            var t = y(e, [
              "when",
              "delay",
              "delayChildren",
              "staggerChildren",
              "staggerDirection",
              "repeat",
              "repeatType",
              "repeatDelay",
              "from",
            ]);
            return !!Object.keys(t).length;
          })(e) ||
            (e = g(
              g({}, e),
              ((o = n),
              (a = t.to),
              (i = Ke(a) ? gr : yr[o] || yr.default),
              g({ to: a }, i(a)))
            )),
          g(
            g({}, t),
            (function (e) {
              var t = e.ease,
                n = e.times,
                r = e.yoyo,
                o = e.flip,
                a = e.loop,
                i = y(e, ["ease", "times", "yoyo", "flip", "loop"]),
                l = g({}, i);
              return (
                n && (l.offset = n),
                i.duration && (l.duration = rr(i.duration)),
                i.repeatDelay && (l.repeatDelay = rr(i.repeatDelay)),
                t &&
                  (l.ease = (function (e) {
                    return Array.isArray(e) && "number" != typeof e[0];
                  })(t)
                    ? t.map(dr)
                    : dr(t)),
                "tween" === i.type && (l.type = "keyframes"),
                (r || a || o) &&
                  (r
                    ? (l.repeatType = "reverse")
                    : a
                    ? (l.repeatType = "loop")
                    : o && (l.repeatType = "mirror"),
                  (l.repeat = a || r || o || i.repeat)),
                "spring" !== i.type && (l.type = "keyframes"),
                l
              );
            })(e)
          )
        );
      }
      function Tr(e) {
        return (
          0 === e ||
          ("string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" "))
        );
      }
      function Ar(e) {
        return "number" == typeof e ? 0 : Cr("", e);
      }
      function _r(e, t) {
        return e[t] || e.default || e;
      }
      function Lr(e, t, n, r) {
        return (
          void 0 === r && (r = {}),
          t.start(function (o) {
            var a,
              i,
              l = (function (e, t, n, r, o) {
                var a,
                  i = _r(r, e),
                  l = null !== (a = i.from) && void 0 !== a ? a : t.get(),
                  u = pr(e, n);
                return (
                  "none" === l && u && "string" == typeof n
                    ? (l = Cr(e, n))
                    : Tr(l) && "string" == typeof n
                    ? (l = Ar(n))
                    : !Array.isArray(n) &&
                      Tr(n) &&
                      "string" == typeof l &&
                      (n = Ar(l)),
                  pr(e, l) && u && !1 !== i.type
                    ? function () {
                        var r = {
                          from: l,
                          to: n,
                          velocity: t.getVelocity(),
                          onComplete: o,
                          onUpdate: function (e) {
                            return t.set(e);
                          },
                        };
                        return "inertia" === i.type || "decay" === i.type
                          ? (function (e) {
                              var t,
                                n = e.from,
                                r = void 0 === n ? 0 : n,
                                o = e.velocity,
                                a = void 0 === o ? 0 : o,
                                i = e.min,
                                l = e.max,
                                u = e.power,
                                s = void 0 === u ? 0.8 : u,
                                c = e.timeConstant,
                                f = void 0 === c ? 750 : c,
                                d = e.bounceStiffness,
                                p = void 0 === d ? 500 : d,
                                m = e.bounceDamping,
                                v = void 0 === m ? 10 : m,
                                h = e.restDelta,
                                g = void 0 === h ? 1 : h,
                                y = e.modifyTarget,
                                b = e.driver,
                                w = e.onUpdate,
                                x = e.onComplete;
                              function k(e) {
                                return (
                                  (void 0 !== i && e < i) ||
                                  (void 0 !== l && e > l)
                                );
                              }
                              function E(e) {
                                return void 0 === i
                                  ? l
                                  : void 0 === l ||
                                    Math.abs(i - e) < Math.abs(l - e)
                                  ? i
                                  : l;
                              }
                              function S(e) {
                                null == t || t.stop(),
                                  (t = tr(
                                    Lt(Lt({}, e), {
                                      driver: b,
                                      onUpdate: function (t) {
                                        var n;
                                        null == w || w(t),
                                          null === (n = e.onUpdate) ||
                                            void 0 === n ||
                                            n.call(e, t);
                                      },
                                      onComplete: x,
                                    })
                                  ));
                              }
                              function C(e) {
                                S(
                                  Lt(
                                    {
                                      type: "spring",
                                      stiffness: p,
                                      damping: v,
                                      restDelta: g,
                                    },
                                    e
                                  )
                                );
                              }
                              if (k(r)) C({ from: r, velocity: a, to: E(r) });
                              else {
                                var P = s * a + r;
                                void 0 !== y && (P = y(P));
                                var T,
                                  A,
                                  _ = E(P),
                                  L = _ === i ? -1 : 1;
                                S({
                                  type: "decay",
                                  from: r,
                                  velocity: a,
                                  timeConstant: f,
                                  power: s,
                                  restDelta: g,
                                  modifyTarget: y,
                                  onUpdate: k(P)
                                    ? function (e) {
                                        (T = A),
                                          (A = e),
                                          (a = nr(e - T, Zn().delta)),
                                          ((1 === L && e > _) ||
                                            (-1 === L && e < _)) &&
                                            C({ from: e, to: _, velocity: a });
                                      }
                                    : void 0,
                                });
                              }
                              return {
                                stop: function () {
                                  return null == t ? void 0 : t.stop();
                                },
                              };
                            })(g(g({}, r), i))
                          : tr(
                              g(g({}, Pr(i, r, e)), {
                                onUpdate: function (e) {
                                  var t;
                                  r.onUpdate(e),
                                    null === (t = i.onUpdate) ||
                                      void 0 === t ||
                                      t.call(i, e);
                                },
                                onComplete: function () {
                                  var e;
                                  r.onComplete(),
                                    null === (e = i.onComplete) ||
                                      void 0 === e ||
                                      e.call(i);
                                },
                              })
                            );
                      }
                    : function () {
                        var e;
                        return (
                          t.set(n),
                          o(),
                          null === (e = null == i ? void 0 : i.onComplete) ||
                            void 0 === e ||
                            e.call(i),
                          { stop: function () {} }
                        );
                      }
                );
              })(e, t, n, r, o),
              u = (function (e, t) {
                var n;
                return null !== (n = (_r(e, t) || {}).delay) && void 0 !== n
                  ? n
                  : 0;
              })(r, e),
              s = function () {
                return (i = l());
              };
            return (
              u ? (a = setTimeout(s, rr(u))) : s(),
              function () {
                clearTimeout(a), null == i || i.stop();
              }
            );
          })
        );
      }
      function Mr(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Or(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var Rr = (function () {
          function e() {
            this.subscriptions = [];
          }
          return (
            (e.prototype.add = function (e) {
              var t = this;
              return (
                Mr(this.subscriptions, e),
                function () {
                  return Or(t.subscriptions, e);
                }
              );
            }),
            (e.prototype.notify = function (e, t, n) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](e, t, n);
                else
                  for (var o = 0; o < r; o++) {
                    var a = this.subscriptions[o];
                    a && a(e, t, n);
                  }
            }),
            (e.prototype.getSize = function () {
              return this.subscriptions.length;
            }),
            (e.prototype.clear = function () {
              this.subscriptions.length = 0;
            }),
            e
          );
        })(),
        Nr = (function () {
          function e(e) {
            var t,
              n = this;
            (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new Rr()),
              (this.velocityUpdateSubscribers = new Rr()),
              (this.renderSubscribers = new Rr()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function (e, t) {
                void 0 === t && (t = !0), (n.prev = n.current), (n.current = e);
                var r = Zn(),
                  o = r.delta,
                  a = r.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = o),
                  (n.lastUpdated = a),
                  Gn.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current && n.updateSubscribers.notify(n.current),
                  n.velocityUpdateSubscribers.getSize() &&
                    n.velocityUpdateSubscribers.notify(n.getVelocity()),
                  t && n.renderSubscribers.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return Gn.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.velocityUpdateSubscribers.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity =
                ((t = this.current), !isNaN(parseFloat(t))));
          }
          return (
            (e.prototype.onChange = function (e) {
              return this.updateSubscribers.add(e);
            }),
            (e.prototype.clearListeners = function () {
              this.updateSubscribers.clear();
            }),
            (e.prototype.onRenderRequest = function (e) {
              return e(this.get()), this.renderSubscribers.add(e);
            }),
            (e.prototype.attach = function (e) {
              this.passiveEffect = e;
            }),
            (e.prototype.set = function (e, t) {
              void 0 === t && (t = !0),
                t && this.passiveEffect
                  ? this.passiveEffect(e, this.updateAndNotify)
                  : this.updateAndNotify(e, t);
            }),
            (e.prototype.get = function () {
              return this.current;
            }),
            (e.prototype.getPrevious = function () {
              return this.prev;
            }),
            (e.prototype.getVelocity = function () {
              return this.canTrackVelocity
                ? nr(
                    parseFloat(this.current) - parseFloat(this.prev),
                    this.timeDelta
                  )
                : 0;
            }),
            (e.prototype.start = function (e) {
              var t = this;
              return (
                this.stop(),
                new Promise(function (n) {
                  (t.hasAnimated = !0), (t.stopAnimation = e(n));
                }).then(function () {
                  return t.clearAnimation();
                })
              );
            }),
            (e.prototype.stop = function () {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (e.prototype.isAnimating = function () {
              return !!this.stopAnimation;
            }),
            (e.prototype.clearAnimation = function () {
              this.stopAnimation = null;
            }),
            (e.prototype.destroy = function () {
              this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop();
            }),
            e
          );
        })();
      function zr(e) {
        return new Nr(e);
      }
      var Vr = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        Dr = [
          ke,
          ye,
          ge,
          he,
          we,
          be,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        jr = function (e) {
          return Dr.find(Vr(e));
        },
        Ir = w(w([], b(Dr)), [Jt, ln]);
      function Fr(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, zr(n));
      }
      function Ur(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function Br(e, t, n) {
        var r;
        void 0 === n && (n = {});
        var o = U(e, t, n.custom),
          a = (o || {}).transition,
          i = void 0 === a ? e.getDefaultTransition() || {} : a;
        n.transitionOverride && (i = n.transitionOverride);
        var l = o
            ? function () {
                return Hr(e, o, n);
              }
            : function () {
                return Promise.resolve();
              },
          u = (
            null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size
          )
            ? function (r) {
                void 0 === r && (r = 0);
                var o = i.delayChildren,
                  a = void 0 === o ? 0 : o,
                  l = i.staggerChildren,
                  u = i.staggerDirection;
                return (function (e, t, n, r, o, a) {
                  void 0 === n && (n = 0),
                    void 0 === r && (r = 0),
                    void 0 === o && (o = 1);
                  var i = [],
                    l = (e.variantChildren.size - 1) * r,
                    u =
                      1 === o
                        ? function (e) {
                            return void 0 === e && (e = 0), e * r;
                          }
                        : function (e) {
                            return void 0 === e && (e = 0), l - e * r;
                          };
                  return (
                    Array.from(e.variantChildren)
                      .sort(Wr)
                      .forEach(function (e, r) {
                        i.push(
                          Br(e, t, g(g({}, a), { delay: n + u(r) })).then(
                            function () {
                              return e.notifyAnimationComplete(t);
                            }
                          )
                        );
                      }),
                    Promise.all(i)
                  );
                })(e, t, a + r, l, u, n);
              }
            : function () {
                return Promise.resolve();
              },
          s = i.when;
        if (s) {
          var c = b("beforeChildren" === s ? [l, u] : [u, l], 2),
            f = c[0],
            d = c[1];
          return f().then(d);
        }
        return Promise.all([l(), u(n.delay)]);
      }
      function Hr(e, t, n) {
        var r,
          o = void 0 === n ? {} : n,
          a = o.delay,
          i = void 0 === a ? 0 : a,
          l = o.transitionOverride,
          u = o.type,
          s = e.makeTargetAnimatable(t),
          c = s.transition,
          f = void 0 === c ? e.getDefaultTransition() : c,
          d = s.transitionEnd,
          p = y(s, ["transition", "transitionEnd"]);
        l && (f = l);
        var m = [],
          v =
            u &&
            (null === (r = e.animationState) || void 0 === r
              ? void 0
              : r.getState()[u]);
        for (var h in p) {
          var b = e.getValue(h),
            w = p[h];
          if (!(!b || void 0 === w || (v && $r(v, h)))) {
            var x = Lr(h, b, w, g({ delay: i }, f));
            m.push(x);
          }
        }
        return Promise.all(m).then(function () {
          d &&
            (function (e, t) {
              var n = U(e, t),
                r = n ? e.makeTargetAnimatable(n, !1) : {},
                o = r.transitionEnd,
                a = void 0 === o ? {} : o;
              r.transition;
              var i,
                l = y(r, ["transitionEnd", "transition"]);
              for (var u in (l = g(g({}, l), a)))
                Fr(e, u, ((i = l[u]), Ke(i) ? i[i.length - 1] || 0 : i));
            })(e, d);
        });
      }
      function Wr(e, t) {
        return e.sortNodePosition(t);
      }
      function $r(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          o = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), o;
      }
      var qr = [et.Animate, et.Hover, et.Tap, et.Drag, et.Focus, et.Exit],
        Qr = w([], b(qr)).reverse(),
        Yr = qr.length;
      function Xr(e) {
        var t,
          n = (function (e) {
            return function (t) {
              return Promise.all(
                t.map(function (t) {
                  var n = t.animation,
                    r = t.options;
                  return (function (e, t, n) {
                    var r;
                    if (
                      (void 0 === n && (n = {}),
                      e.notifyAnimationStart(),
                      Array.isArray(t))
                    ) {
                      var o = t.map(function (t) {
                        return Br(e, t, n);
                      });
                      r = Promise.all(o);
                    } else if ("string" == typeof t) r = Br(e, t, n);
                    else {
                      var a = "function" == typeof t ? U(e, t, n.custom) : t;
                      r = Hr(e, a, n);
                    }
                    return r.then(function () {
                      return e.notifyAnimationComplete(t);
                    });
                  })(e, n, r);
                })
              );
            };
          })(e),
          r =
            (((t = {})[et.Animate] = Kr(!0)),
            (t[et.Hover] = Kr()),
            (t[et.Tap] = Kr()),
            (t[et.Drag] = Kr()),
            (t[et.Focus] = Kr()),
            (t[et.Exit] = Kr()),
            t),
          o = {},
          a = !0,
          i = function (t, n) {
            var r = U(e, n);
            if (r) {
              r.transition;
              var o = r.transitionEnd,
                a = y(r, ["transition", "transitionEnd"]);
              t = g(g(g({}, t), a), o);
            }
            return t;
          };
        function l(t, l) {
          for (
            var u,
              s = e.getProps(),
              c = e.getVariantContext(!0) || {},
              f = [],
              d = new Set(),
              p = {},
              m = 1 / 0,
              v = function (n) {
                var o = Qr[n],
                  v = r[o],
                  h = null !== (u = s[o]) && void 0 !== u ? u : c[o],
                  y = I(h),
                  x = o === l ? v.isActive : null;
                !1 === x && (m = n);
                var k = h === c[o] && h !== s[o] && y;
                if (
                  (k && a && e.manuallyAnimateOnMount && (k = !1),
                  (v.protectedKeys = g({}, p)),
                  (!v.isActive && null === x) ||
                    (!h && !v.prevProp) ||
                    Xe(h) ||
                    "boolean" == typeof h)
                )
                  return "continue";
                var E =
                    (function (e, t) {
                      return "string" == typeof t
                        ? t !== e
                        : !!j(t) && !_t(t, e);
                    })(v.prevProp, h) ||
                    (o === l && v.isActive && !k && y) ||
                    (n > m && y),
                  S = Array.isArray(h) ? h : [h],
                  C = S.reduce(i, {});
                !1 === x && (C = {});
                var P = v.prevResolvedValues,
                  T = void 0 === P ? {} : P,
                  A = g(g({}, T), C),
                  _ = function (e) {
                    (E = !0), d.delete(e), (v.needsAnimating[e] = !0);
                  };
                for (var L in A) {
                  var M = C[L],
                    O = T[L];
                  p.hasOwnProperty(L) ||
                    (M !== O
                      ? Ke(M) && Ke(O)
                        ? _t(M, O)
                          ? (v.protectedKeys[L] = !0)
                          : _(L)
                        : void 0 !== M
                        ? _(L)
                        : d.add(L)
                      : void 0 !== M && d.has(L)
                      ? _(L)
                      : (v.protectedKeys[L] = !0));
                }
                (v.prevProp = h),
                  (v.prevResolvedValues = C),
                  v.isActive && (p = g(g({}, p), C)),
                  a && e.blockInitialAnimation && (E = !1),
                  E &&
                    !k &&
                    f.push.apply(
                      f,
                      w(
                        [],
                        b(
                          S.map(function (e) {
                            return { animation: e, options: g({ type: o }, t) };
                          })
                        )
                      )
                    );
              },
              h = 0;
            h < Yr;
            h++
          )
            v(h);
          if (((o = g({}, p)), d.size)) {
            var y = {};
            d.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (y[t] = n);
            }),
              f.push({ animation: y });
          }
          var x = Boolean(f.length);
          return (
            a && !1 === s.initial && !e.manuallyAnimateOnMount && (x = !1),
            (a = !1),
            x ? n(f) : Promise.resolve()
          );
        }
        return {
          isAnimated: function (e) {
            return void 0 !== o[e];
          },
          animateChanges: l,
          setActive: function (t, n, o) {
            var a;
            return r[t].isActive === n
              ? Promise.resolve()
              : (null === (a = e.variantChildren) ||
                  void 0 === a ||
                  a.forEach(function (e) {
                    var r;
                    return null === (r = e.animationState) || void 0 === r
                      ? void 0
                      : r.setActive(t, n);
                  }),
                (r[t].isActive = n),
                l(o, t));
          },
          setAnimateFunction: function (t) {
            n = t(e);
          },
          getState: function () {
            return r;
          },
        };
      }
      function Kr(e) {
        return (
          void 0 === e && (e = !1),
          {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          }
        );
      }
      var Zr = {
          animation: Tt(function (t) {
            var n = t.visualElement,
              r = t.animate;
            n.animationState || (n.animationState = Xr(n)),
              Xe(r) &&
                (0, e.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: Tt(function (t) {
            var n = t.custom,
              r = t.visualElement,
              o = b(L(), 2),
              a = o[0],
              i = o[1],
              l = (0, e.useContext)(A);
            (0, e.useEffect)(
              function () {
                var e,
                  t,
                  o =
                    null === (e = r.animationState) || void 0 === e
                      ? void 0
                      : e.setActive(et.Exit, !a, {
                          custom:
                            null !== (t = null == l ? void 0 : l.custom) &&
                            void 0 !== t
                              ? t
                              : n,
                        });
                !a && (null == o || o.then(i));
              },
              [a]
            );
          }),
        },
        Gr = function (e) {
          return e.hasOwnProperty("x") && e.hasOwnProperty("y");
        },
        Jr = function (e) {
          return Gr(e) && e.hasOwnProperty("z");
        },
        eo = function (e, t) {
          return Math.abs(e - t);
        };
      function to(e, t) {
        if (un(e) && un(t)) return eo(e, t);
        if (Gr(e) && Gr(t)) {
          var n = eo(e.x, t.x),
            r = eo(e.y, t.y),
            o = Jr(e) && Jr(t) ? eo(e.z, t.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2));
        }
      }
      var no = (function () {
        function e(e, t, n) {
          var r = this,
            o = (void 0 === n ? {} : n).transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = ao(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n = to(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var o = e.point,
                    a = Zn().timestamp;
                  r.history.push(g(g({}, o), { timestamp: a }));
                  var i = r.handlers,
                    l = i.onStart,
                    u = i.onMove;
                  t ||
                    (l && l(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    u && u(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = ro(t, r.transformPagePoint)),
                at(e) && 0 === e.buttons
                  ? r.handlePointerUp(e, t)
                  : Gn.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              r.end();
              var n = r.handlers,
                o = n.onEnd,
                a = n.onSessionEnd,
                i = ao(ro(t, r.transformPagePoint), r.history);
              r.startEvent && o && o(e, i), a && a(e, i);
            }),
            !(it(e) && e.touches.length > 1))
          ) {
            (this.handlers = t), (this.transformPagePoint = o);
            var a = ro(ct(e), this.transformPagePoint),
              i = a.point,
              l = Zn().timestamp;
            this.history = [g(g({}, i), { timestamp: l })];
            var u = t.onSessionStart;
            u && u(e, ao(a, this.history)),
              (this.removeListeners = Pt(
                vt(window, "pointermove", this.handlePointerMove),
                vt(window, "pointerup", this.handlePointerUp),
                vt(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          (e.prototype.updateHandlers = function (e) {
            this.handlers = e;
          }),
          (e.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              qn.update(this.updatePoint);
          }),
          e
        );
      })();
      function ro(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function oo(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function ao(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: oo(n, lo(t)),
          offset: oo(n, io(t)),
          velocity: uo(t, 0.1),
        };
      }
      function io(e) {
        return e[0];
      }
      function lo(e) {
        return e[e.length - 1];
      }
      function uo(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, o = lo(e);
          n >= 0 && ((r = e[n]), !(o.timestamp - r.timestamp > rr(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var a = (o.timestamp - r.timestamp) / 1e3;
        if (0 === a) return { x: 0, y: 0 };
        var i = { x: (o.x - r.x) / a, y: (o.y - r.y) / a };
        return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
      }
      function so(e) {
        return e;
      }
      function co(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      var fo = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
      function po() {
        return { x: g({}, fo), y: g({}, fo) };
      }
      function mo(e) {
        return [e("x"), e("y")];
      }
      function vo(e, t, n) {
        var r = t.min,
          o = t.max;
        return (
          void 0 !== r && e < r
            ? (e = n ? Ft(r, e, n.min) : Math.max(e, r))
            : void 0 !== o &&
              e > o &&
              (e = n ? Ft(o, e, n.max) : Math.min(e, o)),
          e
        );
      }
      function ho(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function go(e, t) {
        var n,
          r = t.min - e.min,
          o = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min &&
            ((r = (n = b([o, r], 2))[0]), (o = n[1])),
          { min: e.min + r, max: e.min + o }
        );
      }
      function yo(e, t, n) {
        return { min: bo(e, t), max: bo(e, n) };
      }
      function bo(e, t) {
        var n;
        return "number" == typeof e
          ? e
          : null !== (n = e[t]) && void 0 !== n
          ? n
          : 0;
      }
      function wo(e, t) {
        return co(
          (function (e, t) {
            var n = e.top,
              r = e.left,
              o = e.bottom,
              a = e.right;
            void 0 === t && (t = so);
            var i = t({ x: r, y: n }),
              l = t({ x: a, y: o });
            return { top: i.y, left: i.x, bottom: l.y, right: l.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      function xo(e, t, n) {
        return (
          void 0 === t && (t = 0), void 0 === n && (n = 0.01), to(e, t) < n
        );
      }
      function ko(e) {
        return e.max - e.min;
      }
      function Eo(e, t, n, r) {
        void 0 === r && (r = 0.5),
          (e.origin = r),
          (e.originPoint = Ft(t.min, t.max, e.origin)),
          (e.scale = ko(n) / ko(t)),
          xo(e.scale, 1, 1e-4) && (e.scale = 1),
          (e.translate = Ft(n.min, n.max, e.origin) - e.originPoint),
          xo(e.translate) && (e.translate = 0);
      }
      function So(e, t, n, r) {
        Eo(e.x, t.x, n.x, Co(r.originX)), Eo(e.y, t.y, n.y, Co(r.originY));
      }
      function Co(e) {
        return "number" == typeof e ? e : 0.5;
      }
      function Po(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + ko(t));
      }
      var To = function (e, t) {
        return e.depth - t.depth;
      };
      function Ao(e) {
        return e.projection.isEnabled || e.shouldResetTransform();
      }
      function _o(e, t) {
        void 0 === t && (t = []);
        var n = e.parent;
        return n && _o(n, t), Ao(e) && t.push(e), t;
      }
      function Lo(e) {
        if (!e.shouldResetTransform()) {
          var t,
            n = e.getLayoutState();
          e.notifyBeforeLayoutMeasure(n.layout),
            (n.isHydrated = !0),
            (n.layout = e.measureViewportBox()),
            (n.layoutCorrected =
              ((t = n.layout), { x: g({}, t.x), y: g({}, t.y) })),
            e.notifyLayoutMeasure(n.layout, e.prevViewportBox || n.layout),
            Gn.update(function () {
              return e.rebaseProjectionTarget();
            });
        }
      }
      function Mo(e, t) {
        return { min: t.min - e.min, max: t.max - e.min };
      }
      function Oo(e, t) {
        return { x: Mo(e.x, t.x), y: Mo(e.y, t.y) };
      }
      function Ro(e, t) {
        var n = e.getLayoutId(),
          r = t.getLayoutId();
        return n !== r || (void 0 === r && e !== t);
      }
      function No(e) {
        var t = e.getProps(),
          n = t.drag,
          r = t._dragX;
        return n && !r;
      }
      function zo(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function Vo(e, t, n) {
        return n + t * (e - n);
      }
      function Do(e, t, n, r, o) {
        return void 0 !== o && (e = Vo(e, o, r)), Vo(e, n, r) + t;
      }
      function jo(e, t, n, r, o) {
        void 0 === t && (t = 0),
          void 0 === n && (n = 1),
          (e.min = Do(e.min, t, n, r, o)),
          (e.max = Do(e.max, t, n, r, o));
      }
      function Io(e, t) {
        var n = t.x,
          r = t.y;
        jo(e.x, n.translate, n.scale, n.originPoint),
          jo(e.y, r.translate, r.scale, r.originPoint);
      }
      function Fo(e, t, n, r) {
        var o = b(r, 3),
          a = o[0],
          i = o[1],
          l = o[2];
        (e.min = t.min), (e.max = t.max);
        var u = void 0 !== n[l] ? n[l] : 0.5,
          s = Ft(t.min, t.max, u);
        jo(e, n[a], n[i], s, n.scale);
      }
      var Uo = ["x", "scaleX", "originX"],
        Bo = ["y", "scaleY", "originY"];
      function Ho(e, t, n) {
        Fo(e.x, t.x, n, Uo), Fo(e.y, t.y, n, Bo);
      }
      function Wo(e, t, n, r, o) {
        return (
          (e = Vo((e -= t), 1 / n, r)), void 0 !== o && (e = Vo(e, 1 / o, r)), e
        );
      }
      function $o(e, t, n) {
        var r = b(n, 3),
          o = r[0],
          a = r[1],
          i = r[2];
        !(function (e, t, n, r, o) {
          void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            void 0 === r && (r = 0.5);
          var a = Ft(e.min, e.max, r) - t;
          (e.min = Wo(e.min, t, n, a, o)), (e.max = Wo(e.max, t, n, a, o));
        })(e, t[o], t[a], t[i], t.scale);
      }
      function qo(e, t) {
        $o(e.x, t, Uo), $o(e.y, t, Bo);
      }
      var Qo = new Set();
      function Yo(e, t, n) {
        e[n] || (e[n] = []), e[n].push(t);
      }
      function Xo(e) {
        return (
          Qo.add(e),
          function () {
            return Qo.delete(e);
          }
        );
      }
      function Ko() {
        if (Qo.size) {
          var e = 0,
            t = [[]],
            n = [],
            r = function (n) {
              return Yo(t, n, e);
            },
            o = function (t) {
              Yo(n, t, e), e++;
            };
          Qo.forEach(function (t) {
            t(r, o), (e = 0);
          }),
            Qo.clear();
          for (var a = n.length, i = 0; i <= a; i++)
            t[i] && t[i].forEach(Go), n[i] && n[i].forEach(Go);
        }
      }
      var Zo,
        Go = function (e) {
          return e();
        },
        Jo = new WeakMap(),
        ea = (function () {
          function e(e) {
            var t = e.visualElement;
            (this.isDragging = !1),
              (this.currentDirection = null),
              (this.constraints = !1),
              (this.elastic = { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } }),
              (this.props = {}),
              (this.hasMutatedConstraints = !1),
              (this.cursorProgress = { x: 0.5, y: 0.5 }),
              (this.originPoint = {}),
              (this.openGlobalLock = null),
              (this.panSession = null),
              (this.visualElement = t),
              this.visualElement.enableLayoutProjection(),
              Jo.set(t, this);
          }
          return (
            (e.prototype.start = function (e, t) {
              var n = this,
                r = void 0 === t ? {} : t,
                o = r.snapToCursor,
                a = void 0 !== o && o,
                i = r.cursorProgress,
                l = this.props.transformPagePoint;
              this.panSession = new no(
                e,
                {
                  onSessionStart: function (e) {
                    var t;
                    n.stopMotion();
                    var r = (function (e) {
                      return ct(e, "client");
                    })(e).point;
                    null === (t = n.cancelLayout) || void 0 === t || t.call(n),
                      (n.cancelLayout = Xo(function (e, t) {
                        var o = _o(n.visualElement),
                          l = (function (e) {
                            var t = [],
                              n = function (e) {
                                Ao(e) && t.push(e), e.children.forEach(n);
                              };
                            return e.children.forEach(n), t.sort(To);
                          })(n.visualElement),
                          u = w(w([], b(o)), b(l)),
                          s = !1;
                        n.isLayoutDrag() &&
                          n.visualElement.lockProjectionTarget(),
                          t(function () {
                            u.forEach(function (e) {
                              return e.resetTransform();
                            });
                          }),
                          e(function () {
                            Lo(n.visualElement), l.forEach(Lo);
                          }),
                          t(function () {
                            u.forEach(function (e) {
                              return e.restoreTransform();
                            }),
                              a && (s = n.snapToCursor(r));
                          }),
                          e(function () {
                            Boolean(
                              n.getAxisMotionValue("x") && !n.isExternalDrag()
                            ) ||
                              n.visualElement.rebaseProjectionTarget(
                                !0,
                                n.visualElement.measureViewportBox(!1)
                              ),
                              n.visualElement.scheduleUpdateLayoutProjection();
                            var e = n.visualElement.projection;
                            mo(function (t) {
                              if (!s) {
                                var o = e.target[t],
                                  a = o.min,
                                  l = o.max;
                                n.cursorProgress[t] = i ? i[t] : It(a, l, r[t]);
                              }
                              var u = n.getAxisMotionValue(t);
                              u && (n.originPoint[t] = u.get());
                            });
                          }),
                          t(function () {
                            Qn.update(),
                              Qn.preRender(),
                              Qn.render(),
                              Qn.postRender();
                          }),
                          e(function () {
                            return n.resolveDragConstraints();
                          });
                      }));
                  },
                  onStart: function (e, t) {
                    var r,
                      o,
                      a,
                      i = n.props,
                      l = i.drag,
                      u = i.dragPropagation;
                    (!l ||
                      u ||
                      (n.openGlobalLock && n.openGlobalLock(),
                      (n.openGlobalLock = wt(l)),
                      n.openGlobalLock)) &&
                      (Ko(),
                      (n.isDragging = !0),
                      (n.currentDirection = null),
                      null === (o = (r = n.props).onDragStart) ||
                        void 0 === o ||
                        o.call(r, e, t),
                      null === (a = n.visualElement.animationState) ||
                        void 0 === a ||
                        a.setActive(et.Drag, !0));
                  },
                  onMove: function (e, t) {
                    var r,
                      o,
                      a,
                      i,
                      l = n.props,
                      u = l.dragPropagation,
                      s = l.dragDirectionLock;
                    if (u || n.openGlobalLock) {
                      var c = t.offset;
                      if (s && null === n.currentDirection)
                        return (
                          (n.currentDirection = (function (e, t) {
                            void 0 === t && (t = 10);
                            var n = null;
                            return (
                              Math.abs(e.y) > t
                                ? (n = "y")
                                : Math.abs(e.x) > t && (n = "x"),
                              n
                            );
                          })(c)),
                          void (
                            null !== n.currentDirection &&
                            (null === (o = (r = n.props).onDirectionLock) ||
                              void 0 === o ||
                              o.call(r, n.currentDirection))
                          )
                        );
                      n.updateAxis("x", t.point, c),
                        n.updateAxis("y", t.point, c),
                        null === (i = (a = n.props).onDrag) ||
                          void 0 === i ||
                          i.call(a, e, t),
                        (Zo = e);
                    }
                  },
                  onSessionEnd: function (e, t) {
                    return n.stop(e, t);
                  },
                },
                { transformPagePoint: l }
              );
            }),
            (e.prototype.resolveDragConstraints = function () {
              var e = this,
                t = this.props,
                n = t.dragConstraints,
                r = t.dragElastic,
                o = this.visualElement.getLayoutState().layoutCorrected;
              (this.constraints =
                !!n &&
                (D(n)
                  ? this.resolveRefConstraints(o, n)
                  : (function (e, t) {
                      var n = t.top,
                        r = t.left,
                        o = t.bottom,
                        a = t.right;
                      return { x: ho(e.x, r, a), y: ho(e.y, n, o) };
                    })(o, n))),
                (this.elastic = (function (e) {
                  return (
                    !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                    { x: yo(e, "left", "right"), y: yo(e, "top", "bottom") }
                  );
                })(r)),
                this.constraints &&
                  !this.hasMutatedConstraints &&
                  mo(function (t) {
                    e.getAxisMotionValue(t) &&
                      (e.constraints[t] = (function (e, t) {
                        var n = {};
                        return (
                          void 0 !== t.min && (n.min = t.min - e.min),
                          void 0 !== t.max && (n.max = t.max - e.min),
                          n
                        );
                      })(o[t], e.constraints[t]));
                  });
            }),
            (e.prototype.resolveRefConstraints = function (e, t) {
              var n = this.props,
                r = n.onMeasureDragConstraints,
                o = n.transformPagePoint,
                a = t.current;
              this.constraintsBox = wo(a, o);
              var i = (function (e, t) {
                return { x: go(e.x, t.x), y: go(e.y, t.y) };
              })(e, this.constraintsBox);
              if (r) {
                var l = r(
                  (function (e) {
                    var t = e.x,
                      n = e.y;
                    return {
                      top: n.min,
                      bottom: n.max,
                      left: t.min,
                      right: t.max,
                    };
                  })(i)
                );
                (this.hasMutatedConstraints = !!l), l && (i = co(l));
              }
              return i;
            }),
            (e.prototype.cancelDrag = function () {
              var e, t;
              this.visualElement.unlockProjectionTarget(),
                null === (e = this.cancelLayout) ||
                  void 0 === e ||
                  e.call(this),
                (this.isDragging = !1),
                this.panSession && this.panSession.end(),
                (this.panSession = null),
                !this.props.dragPropagation &&
                  this.openGlobalLock &&
                  (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (t = this.visualElement.animationState) ||
                  void 0 === t ||
                  t.setActive(et.Drag, !1);
            }),
            (e.prototype.stop = function (e, t) {
              var n, r, o;
              null === (n = this.panSession) || void 0 === n || n.end(),
                (this.panSession = null);
              var a = this.isDragging;
              if ((this.cancelDrag(), a)) {
                var i = t.velocity;
                this.animateDragEnd(i),
                  null === (o = (r = this.props).onDragEnd) ||
                    void 0 === o ||
                    o.call(r, e, t);
              }
            }),
            (e.prototype.snapToCursor = function (e) {
              var t = this;
              return mo(function (n) {
                if (ta(n, t.props.drag, t.currentDirection)) {
                  var r = t.getAxisMotionValue(n);
                  if (!r) return (t.cursorProgress[n] = 0.5), !0;
                  var o = t.visualElement.getLayoutState().layout,
                    a = o[n].max - o[n].min,
                    i = o[n].min + a / 2,
                    l = e[n] - i;
                  (t.originPoint[n] = e[n]), r.set(l);
                }
              }).includes(!0);
            }),
            (e.prototype.updateAxis = function (e, t, n) {
              if (ta(e, this.props.drag, this.currentDirection))
                return this.getAxisMotionValue(e)
                  ? this.updateAxisMotionValue(e, n)
                  : this.updateVisualElementAxis(e, t);
            }),
            (e.prototype.updateAxisMotionValue = function (e, t) {
              var n = this.getAxisMotionValue(e);
              if (t && n) {
                var r = this.originPoint[e] + t[e],
                  o = this.constraints
                    ? vo(r, this.constraints[e], this.elastic[e])
                    : r;
                n.set(o);
              }
            }),
            (e.prototype.updateVisualElementAxis = function (e, t) {
              var n,
                r = this.visualElement.getLayoutState().layout[e],
                o = r.max - r.min,
                a = this.cursorProgress[e],
                i = (function (e, t, n, r, o) {
                  var a = e - t * n;
                  return r ? vo(a, r, o) : a;
                })(
                  t[e],
                  o,
                  a,
                  null === (n = this.constraints) || void 0 === n
                    ? void 0
                    : n[e],
                  this.elastic[e]
                );
              this.visualElement.setProjectionTargetAxis(e, i, i + o);
            }),
            (e.prototype.setProps = function (e) {
              var t = e.drag,
                n = void 0 !== t && t,
                r = e.dragDirectionLock,
                o = void 0 !== r && r,
                a = e.dragPropagation,
                i = void 0 !== a && a,
                l = e.dragConstraints,
                u = void 0 !== l && l,
                s = e.dragElastic,
                c = void 0 === s ? 0.35 : s,
                f = e.dragMomentum,
                d = void 0 === f || f,
                p = y(e, [
                  "drag",
                  "dragDirectionLock",
                  "dragPropagation",
                  "dragConstraints",
                  "dragElastic",
                  "dragMomentum",
                ]);
              this.props = g(
                {
                  drag: n,
                  dragDirectionLock: o,
                  dragPropagation: i,
                  dragConstraints: u,
                  dragElastic: c,
                  dragMomentum: d,
                },
                p
              );
            }),
            (e.prototype.getAxisMotionValue = function (e) {
              var t = this.props,
                n = t.layout,
                r = t.layoutId,
                o = "_drag" + e.toUpperCase();
              return this.props[o]
                ? this.props[o]
                : n || void 0 !== r
                ? void 0
                : this.visualElement.getValue(e, 0);
            }),
            (e.prototype.isLayoutDrag = function () {
              return !this.getAxisMotionValue("x");
            }),
            (e.prototype.isExternalDrag = function () {
              var e = this.props,
                t = e._dragX,
                n = e._dragY;
              return t || n;
            }),
            (e.prototype.animateDragEnd = function (e) {
              var t = this,
                n = this.props,
                r = n.drag,
                o = n.dragMomentum,
                a = n.dragElastic,
                i = n.dragTransition,
                l = (function (e, t) {
                  void 0 === t && (t = !0);
                  var n,
                    r = e.getProjectionParent();
                  return (
                    !!r &&
                    (t
                      ? qo(
                          (n = Oo(r.projection.target, e.projection.target)),
                          r.getLatestValues()
                        )
                      : (n = Oo(
                          r.getLayoutState().layout,
                          e.getLayoutState().layout
                        )),
                    mo(function (t) {
                      return e.setProjectionTargetAxis(
                        t,
                        n[t].min,
                        n[t].max,
                        !0
                      );
                    }),
                    !0)
                  );
                })(
                  this.visualElement,
                  this.isLayoutDrag() && !this.isExternalDrag()
                ),
                u = this.constraints || {};
              if (l && Object.keys(u).length && this.isLayoutDrag()) {
                var s = this.visualElement.getProjectionParent();
                if (s) {
                  var c = Oo(s.projection.targetFinal, u);
                  mo(function (e) {
                    var t = c[e],
                      n = t.min,
                      r = t.max;
                    u[e] = {
                      min: isNaN(n) ? void 0 : n,
                      max: isNaN(r) ? void 0 : r,
                    };
                  });
                }
              }
              var f = mo(function (n) {
                var s;
                if (ta(n, r, t.currentDirection)) {
                  var c =
                      null !== (s = null == u ? void 0 : u[n]) && void 0 !== s
                        ? s
                        : {},
                    f = a ? 200 : 1e6,
                    d = a ? 40 : 1e7,
                    p = g(
                      g(
                        {
                          type: "inertia",
                          velocity: o ? e[n] : 0,
                          bounceStiffness: f,
                          bounceDamping: d,
                          timeConstant: 750,
                          restDelta: 1,
                          restSpeed: 10,
                        },
                        i
                      ),
                      c
                    );
                  return t.getAxisMotionValue(n)
                    ? t.startAxisValueAnimation(n, p)
                    : t.visualElement.startLayoutAnimation(n, p, l);
                }
              });
              return Promise.all(f).then(function () {
                var e, n;
                null === (n = (e = t.props).onDragTransitionEnd) ||
                  void 0 === n ||
                  n.call(e);
              });
            }),
            (e.prototype.stopMotion = function () {
              var e = this;
              mo(function (t) {
                var n = e.getAxisMotionValue(t);
                n ? n.stop() : e.visualElement.stopLayoutAnimation();
              });
            }),
            (e.prototype.startAxisValueAnimation = function (e, t) {
              var n = this.getAxisMotionValue(e);
              if (n) {
                var r = n.get();
                return n.set(r), n.set(r), Lr(e, n, 0, t);
              }
            }),
            (e.prototype.scalePoint = function () {
              var e = this,
                t = this.props,
                n = t.drag;
              if (D(t.dragConstraints) && this.constraintsBox) {
                this.stopMotion();
                var r = { x: 0, y: 0 };
                mo(function (t) {
                  var n, o, a, i, l;
                  r[t] =
                    ((n = e.visualElement.projection.target[t]),
                    (o = e.constraintsBox[t]),
                    (a = 0.5),
                    (i = ko(n)),
                    (l = ko(o)) > i
                      ? (a = It(o.min, o.max - i, n.min))
                      : i > l && (a = It(n.min, n.max - l, o.min)),
                    Ot(0, 1, a));
                }),
                  this.updateConstraints(function () {
                    mo(function (t) {
                      if (ta(t, n, null)) {
                        var o = (function (e, t, n) {
                            var r = e.max - e.min,
                              o = Ft(t.min, t.max - r, n);
                            return { min: o, max: o + r };
                          })(
                            e.visualElement.projection.target[t],
                            e.constraintsBox[t],
                            r[t]
                          ),
                          a = o.min,
                          i = o.max;
                        e.visualElement.setProjectionTargetAxis(t, a, i);
                      }
                    });
                  }),
                  setTimeout(Ko, 1);
              }
            }),
            (e.prototype.updateConstraints = function (e) {
              var t = this;
              this.cancelLayout = Xo(function (n, r) {
                var o = _o(t.visualElement);
                r(function () {
                  return o.forEach(function (e) {
                    return e.resetTransform();
                  });
                }),
                  n(function () {
                    return Lo(t.visualElement);
                  }),
                  r(function () {
                    return o.forEach(function (e) {
                      return e.restoreTransform();
                    });
                  }),
                  n(function () {
                    t.resolveDragConstraints();
                  }),
                  e && r(e);
              });
            }),
            (e.prototype.mount = function (e) {
              var t = this,
                n = vt(e.getInstance(), "pointerdown", function (e) {
                  var n = t.props,
                    r = n.drag,
                    o = n.dragListener;
                  r && (void 0 === o || o) && t.start(e);
                }),
                r = rt(window, "resize", function () {
                  t.scalePoint();
                }),
                o = e.onLayoutUpdate(function () {
                  t.isDragging && t.resolveDragConstraints();
                }),
                a = e.prevDragCursor;
              return (
                a && this.start(Zo, { cursorProgress: a }),
                function () {
                  null == n || n(),
                    null == r || r(),
                    null == o || o(),
                    t.cancelDrag();
                }
              );
            }),
            e
          );
        })();
      function ta(e, t, n) {
        return !((!0 !== t && t !== e) || (null !== n && n !== e));
      }
      var na,
        ra,
        oa = {
          pan: Tt(function (t) {
            var n = t.onPan,
              r = t.onPanStart,
              o = t.onPanEnd,
              a = t.onPanSessionStart,
              i = t.visualElement,
              l = n || r || o || a,
              u = (0, e.useRef)(null),
              s = (0, e.useContext)(P).transformPagePoint,
              c = {
                onSessionStart: a,
                onStart: r,
                onMove: n,
                onEnd: function (e, t) {
                  (u.current = null), o && o(e, t);
                },
              };
            (0, e.useEffect)(function () {
              null !== u.current && u.current.updateHandlers(c);
            }),
              ht(
                i,
                "pointerdown",
                l &&
                  function (e) {
                    u.current = new no(e, c, { transformPagePoint: s });
                  }
              ),
              St(function () {
                return u.current && u.current.end();
              });
          }),
          drag: Tt(function (t) {
            var n = t.dragControls,
              r = t.visualElement,
              o = (0, e.useContext)(P).transformPagePoint,
              a = _(function () {
                return new ea({ visualElement: r });
              });
            a.setProps(g(g({}, t), { transformPagePoint: o })),
              (0, e.useEffect)(
                function () {
                  return n && n.subscribe(a);
                },
                [a]
              ),
              (0, e.useEffect)(function () {
                return a.mount(r);
              }, []);
          }),
        };
      function aa(e) {
        return "string" == typeof e && e.startsWith("var(--");
      }
      !(function (e) {
        (e[(e.Entering = 0)] = "Entering"),
          (e[(e.Present = 1)] = "Present"),
          (e[(e.Exiting = 2)] = "Exiting");
      })(na || (na = {})),
        (function (e) {
          (e[(e.Hide = 0)] = "Hide"), (e[(e.Show = 1)] = "Show");
        })(ra || (ra = {}));
      var ia = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function la(e, t, n) {
        void 0 === n && (n = 1);
        var r = b(
            (function (e) {
              var t = ia.exec(e);
              if (!t) return [,];
              var n = b(t, 3);
              return [n[1], n[2]];
            })(e),
            2
          ),
          o = r[0],
          a = r[1];
        if (o) {
          var i = window.getComputedStyle(t).getPropertyValue(o);
          return i ? i.trim() : aa(a) ? la(a, t, n + 1) : a;
        }
      }
      function ua(e, t) {
        return (e / (t.max - t.min)) * 100;
      }
      var sa = "_$css",
        ca = {
          process: function (e, t, n) {
            var r = n.target;
            if ("string" == typeof e) {
              if (!ye.test(e)) return e;
              e = parseFloat(e);
            }
            return ua(e, r.x) + "% " + ua(e, r.y) + "%";
          },
        },
        fa = {
          borderRadius: g(g({}, ca), {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }),
          borderTopLeftRadius: ca,
          borderTopRightRadius: ca,
          borderBottomLeftRadius: ca,
          borderBottomRightRadius: ca,
          boxShadow: {
            process: function (e, t) {
              var n = t.delta,
                r = t.treeScale,
                o = e,
                a = e.includes("var("),
                i = [];
              a &&
                (e = e.replace(ia, function (e) {
                  return i.push(e), sa;
                }));
              var l = ln.parse(e);
              if (l.length > 5) return o;
              var u = ln.createTransformer(e),
                s = "number" != typeof l[0] ? 1 : 0,
                c = n.x.scale * r.x,
                f = n.y.scale * r.y;
              (l[0 + s] /= c), (l[1 + s] /= f);
              var d = Ft(c, f, 0.5);
              "number" == typeof l[2 + s] && (l[2 + s] /= d),
                "number" == typeof l[3 + s] && (l[3 + s] /= d);
              var p = u(l);
              if (a) {
                var m = 0;
                p = p.replace(sa, function () {
                  var e = i[m];
                  return m++, e;
                });
              }
              return p;
            },
          },
        },
        da = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.frameTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (t.currentAnimationTarget = {
                x: { min: 0, max: 1 },
                y: { min: 0, max: 1 },
              }),
              (t.isAnimating = { x: !1, y: !1 }),
              (t.stopAxisAnimation = { x: void 0, y: void 0 }),
              (t.isAnimatingTree = !1),
              (t.animate = function (e, n, r) {
                void 0 === r && (r = {});
                var o = r.originBox,
                  a = r.targetBox,
                  i = r.visibilityAction,
                  l = r.shouldStackAnimate,
                  u = r.onComplete,
                  s = r.prevParent,
                  c = y(r, [
                    "originBox",
                    "targetBox",
                    "visibilityAction",
                    "shouldStackAnimate",
                    "onComplete",
                    "prevParent",
                  ]),
                  f = t.props,
                  d = f.visualElement,
                  p = f.layout;
                if (!1 === l) return (t.isAnimatingTree = !1), t.safeToRemove();
                if (!t.isAnimatingTree || !0 === l) {
                  l && (t.isAnimatingTree = !0), (n = o || n), (e = a || e);
                  var m = !1,
                    v = d.getProjectionParent();
                  if (v) {
                    var h = v.prevViewportBox,
                      b = v.getLayoutState().layout;
                    s &&
                      (a && (b = s.getLayoutState().layout),
                      o &&
                        !Ro(s, v) &&
                        s.prevViewportBox &&
                        (h = s.prevViewportBox)),
                      h &&
                        ya(s, o, a) &&
                        ((m = !0), (n = Oo(h, n)), (e = Oo(b, e)));
                  }
                  var w = pa(n, e),
                    x = mo(function (r) {
                      var o, a;
                      if ("position" === p) {
                        var l = e[r].max - e[r].min;
                        n[r].max = n[r].min + l;
                      }
                      if (!d.projection.isTargetLocked)
                        return void 0 === i
                          ? w
                            ? t.animateAxis(
                                r,
                                e[r],
                                n[r],
                                g(g({}, c), { isRelative: m })
                              )
                            : (null === (a = (o = t.stopAxisAnimation)[r]) ||
                                void 0 === a ||
                                a.call(o),
                              d.setProjectionTargetAxis(
                                r,
                                e[r].min,
                                e[r].max,
                                m
                              ))
                          : void d.setVisibility(i === ra.Show);
                    });
                  return (
                    d.syncRender(),
                    Promise.all(x).then(function () {
                      (t.isAnimatingTree = !1),
                        u && u(),
                        d.notifyLayoutAnimationComplete();
                    })
                  );
                }
              }),
              t
            );
          }
          return (
            h(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this,
                t = this.props.visualElement;
              (t.animateMotionValue = Lr),
                t.enableLayoutProjection(),
                (this.unsubLayoutReady = t.onLayoutUpdate(this.animate)),
                (t.layoutSafeToRemove = function () {
                  return e.safeToRemove();
                }),
                (function (e) {
                  for (var t in e) X[t] = e[t];
                })(fa);
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this;
              this.unsubLayoutReady(),
                mo(function (t) {
                  var n, r;
                  return null === (r = (n = e.stopAxisAnimation)[t]) ||
                    void 0 === r
                    ? void 0
                    : r.call(n);
                });
            }),
            (t.prototype.animateAxis = function (e, t, n, r) {
              var o,
                a,
                i = this,
                l = void 0 === r ? {} : r,
                u = l.transition,
                s = l.isRelative;
              if (
                !this.isAnimating[e] ||
                !ha(t, this.currentAnimationTarget[e])
              ) {
                null === (a = (o = this.stopAxisAnimation)[e]) ||
                  void 0 === a ||
                  a.call(o),
                  (this.isAnimating[e] = !0);
                var c = this.props.visualElement,
                  f = this.frameTarget[e],
                  d = c.getProjectionAnimationProgress()[e];
                d.clearListeners(), d.set(0), d.set(0);
                var p = function () {
                  var r = d.get() / 1e3;
                  !(function (e, t, n, r) {
                    (e.min = Ft(t.min, n.min, r)),
                      (e.max = Ft(t.max, n.max, r));
                  })(f, n, t, r),
                    c.setProjectionTargetAxis(e, f.min, f.max, s);
                };
                p();
                var m = d.onChange(p);
                (this.stopAxisAnimation[e] = function () {
                  (i.isAnimating[e] = !1), d.stop(), m();
                }),
                  (this.currentAnimationTarget[e] = t);
                var v = u || c.getDefaultTransition() || ga;
                return Lr(
                  "x" === e ? "layoutX" : "layoutY",
                  d,
                  1e3,
                  v && _r(v, "layout")
                ).then(this.stopAxisAnimation[e]);
              }
            }),
            (t.prototype.safeToRemove = function () {
              var e, t;
              null === (t = (e = this.props).safeToRemove) ||
                void 0 === t ||
                t.call(e);
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(e.Component);
      function pa(e, t) {
        return !(va(e) || va(t) || (ha(e.x, t.x) && ha(e.y, t.y)));
      }
      var ma = { min: 0, max: 0 };
      function va(e) {
        return ha(e.x, ma) && ha(e.y, ma);
      }
      function ha(e, t) {
        return e.min === t.min && e.max === t.max;
      }
      var ga = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function ya(e, t, n) {
        return e || (!e && !(t || n));
      }
      var ba = {
        layoutReady: function (e) {
          return e.notifyLayoutReady();
        },
      };
      function wa() {
        var e = new Set();
        return {
          add: function (t) {
            return e.add(t);
          },
          flush: function (t) {
            var n = void 0 === t ? ba : t,
              r = n.layoutReady,
              o = n.parent;
            Xo(function (t, n) {
              var a = Array.from(e).sort(To),
                i = o ? _o(o) : [];
              n(function () {
                w(w([], b(i)), b(a)).forEach(function (e) {
                  return e.resetTransform();
                });
              }),
                t(function () {
                  a.forEach(Lo);
                }),
                n(function () {
                  i.forEach(function (e) {
                    return e.restoreTransform();
                  }),
                    a.forEach(r);
                }),
                t(function () {
                  a.forEach(function (e) {
                    e.isPresent && (e.presence = na.Present);
                  });
                }),
                n(function () {
                  Qn.preRender(), Qn.render();
                }),
                t(function () {
                  Gn.postRender(function () {
                    return a.forEach(xa);
                  }),
                    e.clear();
                });
            }),
              Ko();
          },
        };
      }
      function xa(e) {
        e.prevViewportBox = e.projection.target;
      }
      var ka = (0, e.createContext)(wa()),
        Ea = (0, e.createContext)(wa());
      function Sa(e) {
        return !!e.forceUpdate;
      }
      var Ca = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            h(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.syncLayout,
                n = e.framerSyncLayout,
                r = e.visualElement;
              Sa(t) && t.register(r),
                Sa(n) && n.register(r),
                r.onUnmount(function () {
                  Sa(t) && t.remove(r), Sa(n) && n.remove(r);
                });
            }),
            (t.prototype.getSnapshotBeforeUpdate = function () {
              var e = this.props,
                t = e.syncLayout,
                n = e.visualElement;
              return (
                Sa(t)
                  ? t.syncUpdate()
                  : ((function (e) {
                      e.shouldResetTransform() ||
                        ((e.prevViewportBox = e.measureViewportBox(!1)),
                        e.rebaseProjectionTarget(!1, e.prevViewportBox));
                    })(n),
                    t.add(n)),
                null
              );
            }),
            (t.prototype.componentDidUpdate = function () {
              var e = this.props.syncLayout;
              Sa(e) || e.flush();
            }),
            (t.prototype.render = function () {
              return null;
            }),
            t
          );
        })(e.Component),
        Pa = {
          measureLayout: function (t) {
            var n = (0, e.useContext)(ka),
              r = (0, e.useContext)(Ea);
            return e.createElement(
              Ca,
              g({}, t, { syncLayout: n, framerSyncLayout: r })
            );
          },
          layoutAnimation: function (t) {
            var n = b(L(), 2)[1];
            return e.createElement(da, g({}, t, { safeToRemove: n }));
          },
        };
      function Ta() {
        return {
          isHydrated: !1,
          layout: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          layoutCorrected: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
          treeScale: { x: 1, y: 1 },
          delta: po(),
          deltaFinal: po(),
          deltaTransform: "",
        };
      }
      var Aa = Ta();
      function _a(e, t, n) {
        var r = e.x,
          o = e.y,
          a =
            "translate3d(" +
            r.translate / t.x +
            "px, " +
            o.translate / t.y +
            "px, 0) ";
        if (n) {
          var i = n.rotate,
            l = n.rotateX,
            u = n.rotateY;
          i && (a += "rotate(" + i + ") "),
            l && (a += "rotateX(" + l + ") "),
            u && (a += "rotateY(" + u + ") ");
        }
        return (
          (a += "scale(" + r.scale + ", " + o.scale + ")"),
          n || a !== Ma ? a : ""
        );
      }
      function La(e) {
        var t = e.deltaFinal;
        return 100 * t.x.origin + "% " + 100 * t.y.origin + "% 0";
      }
      var Ma = _a(Aa.delta, Aa.treeScale, { x: 1, y: 1 }),
        Oa = [
          "LayoutMeasure",
          "BeforeLayoutMeasure",
          "LayoutUpdate",
          "ViewportBoxUpdate",
          "Update",
          "Render",
          "AnimationComplete",
          "LayoutAnimationComplete",
          "AnimationStart",
          "SetAxisTarget",
          "Unmount",
        ];
      var Ra = (function () {
          function e() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (e.prototype.add = function (e) {
              Mr(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.remove = function (e) {
              Or(this.children, e), (this.isDirty = !0);
            }),
            (e.prototype.forEach = function (e) {
              this.isDirty && this.children.sort(To),
                (this.isDirty = !1),
                this.children.forEach(e);
            }),
            e
          );
        })(),
        Na = function (e) {
          var t = e.treeType,
            n = void 0 === t ? "" : t,
            r = e.build,
            o = e.getBaseTarget,
            a = e.makeTargetAnimatable,
            i = e.measureViewportBox,
            l = e.render,
            u = e.readValueFromInstance,
            s = e.resetTransform,
            c = e.restoreTransform,
            f = e.removeValueFromRenderState,
            d = e.sortNodePosition,
            p = e.scrapeMotionValuesFromProps;
          return function (e, t) {
            var m = e.parent,
              v = e.props,
              h = e.presenceId,
              y = e.blockInitialAnimation,
              x = e.visualState;
            void 0 === t && (t = {});
            var k,
              E,
              S,
              C,
              P,
              T,
              A = x.latestValues,
              _ = x.renderState,
              L = (function () {
                var e = Oa.map(function () {
                    return new Rr();
                  }),
                  t = {},
                  n = {
                    clearAllListeners: function () {
                      return e.forEach(function (e) {
                        return e.clear();
                      });
                    },
                    updatePropListeners: function (e) {
                      return Oa.forEach(function (r) {
                        var o;
                        null === (o = t[r]) || void 0 === o || o.call(t);
                        var a = "on" + r,
                          i = e[a];
                        i && (t[r] = n[a](i));
                      });
                    },
                  };
                return (
                  e.forEach(function (e, t) {
                    (n["on" + Oa[t]] = function (t) {
                      return e.add(t);
                    }),
                      (n["notify" + Oa[t]] = function () {
                        for (var t = [], n = 0; n < arguments.length; n++)
                          t[n] = arguments[n];
                        return e.notify.apply(e, w([], b(t)));
                      });
                  }),
                  n
                );
              })(),
              M = {
                isEnabled: !1,
                isHydrated: !1,
                isTargetLocked: !1,
                target: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
                targetFinal: { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } },
              },
              O = M,
              R = A,
              N = Ta(),
              z = !1,
              V = new Map(),
              D = new Map(),
              j = {},
              F = g({}, A);
            function U() {
              k &&
                (G.isProjectionReady() &&
                  (Ho(O.targetFinal, O.target, R),
                  So(N.deltaFinal, N.layoutCorrected, O.targetFinal, A)),
                W(),
                l(k, _));
            }
            function W() {
              var e = A;
              if (C && C.isActive()) {
                var n = C.getCrossfadeState(G);
                n && (e = n);
              }
              r(G, _, e, O, N, t, v);
            }
            function $() {
              L.notifyUpdate(A);
            }
            function q() {
              G.layoutTree.forEach(Va);
            }
            var Q = p(v);
            for (var Y in Q) {
              var X = Q[Y];
              void 0 !== A[Y] && oe(X) && X.set(A[Y], !1);
            }
            var K = B(v),
              Z = H(v),
              G = g(
                g(
                  {
                    treeType: n,
                    current: null,
                    depth: m ? m.depth + 1 : 0,
                    parent: m,
                    children: new Set(),
                    path: m ? w(w([], b(m.path)), [m]) : [],
                    layoutTree: m ? m.layoutTree : new Ra(),
                    presenceId: h,
                    projection: M,
                    variantChildren: Z ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(
                      null == m ? void 0 : m.isMounted()
                    ),
                    blockInitialAnimation: y,
                    isMounted: function () {
                      return Boolean(k);
                    },
                    mount: function (e) {
                      (k = G.current = e),
                        G.pointTo(G),
                        Z &&
                          m &&
                          !K &&
                          (T = null == m ? void 0 : m.addVariantChild(G)),
                        null == m || m.children.add(G);
                    },
                    unmount: function () {
                      qn.update($),
                        qn.render(U),
                        qn.preRender(G.updateLayoutProjection),
                        D.forEach(function (e) {
                          return e();
                        }),
                        G.stopLayoutAnimation(),
                        G.layoutTree.remove(G),
                        null == T || T(),
                        null == m || m.children.delete(G),
                        null == S || S(),
                        L.clearAllListeners();
                    },
                    addVariantChild: function (e) {
                      var t,
                        n = G.getClosestVariantNode();
                      if (n)
                        return (
                          null === (t = n.variantChildren) ||
                            void 0 === t ||
                            t.add(e),
                          function () {
                            return n.variantChildren.delete(e);
                          }
                        );
                    },
                    sortNodePosition: function (e) {
                      return d && n === e.treeType
                        ? d(G.getInstance(), e.getInstance())
                        : 0;
                    },
                    getClosestVariantNode: function () {
                      return Z
                        ? G
                        : null == m
                        ? void 0
                        : m.getClosestVariantNode();
                    },
                    scheduleUpdateLayoutProjection: m
                      ? m.scheduleUpdateLayoutProjection
                      : function () {
                          return Gn.preRender(
                            G.updateTreeLayoutProjection,
                            !1,
                            !0
                          );
                        },
                    getLayoutId: function () {
                      return v.layoutId;
                    },
                    getInstance: function () {
                      return k;
                    },
                    getStaticValue: function (e) {
                      return A[e];
                    },
                    setStaticValue: function (e, t) {
                      return (A[e] = t);
                    },
                    getLatestValues: function () {
                      return A;
                    },
                    setVisibility: function (e) {
                      G.isVisible !== e &&
                        ((G.isVisible = e), G.scheduleRender());
                    },
                    makeTargetAnimatable: function (e, t) {
                      return void 0 === t && (t = !0), a(G, e, v, t);
                    },
                    addValue: function (e, t) {
                      G.hasValue(e) && G.removeValue(e),
                        V.set(e, t),
                        (A[e] = t.get()),
                        (function (e, t) {
                          var n = t.onChange(function (t) {
                              (A[e] = t), v.onUpdate && Gn.update($, !1, !0);
                            }),
                            r = t.onRenderRequest(G.scheduleRender);
                          D.set(e, function () {
                            n(), r();
                          });
                        })(e, t);
                    },
                    removeValue: function (e) {
                      var t;
                      V.delete(e),
                        null === (t = D.get(e)) || void 0 === t || t(),
                        D.delete(e),
                        delete A[e],
                        f(e, _);
                    },
                    hasValue: function (e) {
                      return V.has(e);
                    },
                    getValue: function (e, t) {
                      var n = V.get(e);
                      return (
                        void 0 === n &&
                          void 0 !== t &&
                          ((n = zr(t)), G.addValue(e, n)),
                        n
                      );
                    },
                    forEachValue: function (e) {
                      return V.forEach(e);
                    },
                    readValue: function (e) {
                      var n;
                      return null !== (n = A[e]) && void 0 !== n
                        ? n
                        : u(k, e, t);
                    },
                    setBaseTarget: function (e, t) {
                      F[e] = t;
                    },
                    getBaseTarget: function (e) {
                      if (o) {
                        var t = o(v, e);
                        if (void 0 !== t && !oe(t)) return t;
                      }
                      return F[e];
                    },
                  },
                  L
                ),
                {
                  build: function () {
                    return W(), _;
                  },
                  scheduleRender: function () {
                    Gn.render(U, !1, !0);
                  },
                  syncRender: U,
                  setProps: function (e) {
                    (v = e),
                      L.updatePropListeners(e),
                      (j = (function (e, t, n) {
                        var r;
                        for (var o in t) {
                          var a = t[o],
                            i = n[o];
                          if (oe(a)) e.addValue(o, a);
                          else if (oe(i)) e.addValue(o, zr(a));
                          else if (i !== a)
                            if (e.hasValue(o)) {
                              var l = e.getValue(o);
                              !l.hasAnimated && l.set(a);
                            } else
                              e.addValue(
                                o,
                                zr(
                                  null !== (r = e.getStaticValue(o)) &&
                                    void 0 !== r
                                    ? r
                                    : a
                                )
                              );
                        }
                        for (var o in n) void 0 === t[o] && e.removeValue(o);
                        return t;
                      })(G, p(v), j));
                  },
                  getProps: function () {
                    return v;
                  },
                  getVariant: function (e) {
                    var t;
                    return null === (t = v.variants) || void 0 === t
                      ? void 0
                      : t[e];
                  },
                  getDefaultTransition: function () {
                    return v.transition;
                  },
                  getVariantContext: function (e) {
                    if ((void 0 === e && (e = !1), e))
                      return null == m ? void 0 : m.getVariantContext();
                    if (!K) {
                      var t =
                        (null == m ? void 0 : m.getVariantContext()) || {};
                      return void 0 !== v.initial && (t.initial = v.initial), t;
                    }
                    for (var n = {}, r = 0; r < Ia; r++) {
                      var o = ja[r],
                        a = v[o];
                      (I(a) || !1 === a) && (n[o] = a);
                    }
                    return n;
                  },
                  enableLayoutProjection: function () {
                    (M.isEnabled = !0), G.layoutTree.add(G);
                  },
                  lockProjectionTarget: function () {
                    M.isTargetLocked = !0;
                  },
                  unlockProjectionTarget: function () {
                    G.stopLayoutAnimation(), (M.isTargetLocked = !1);
                  },
                  getLayoutState: function () {
                    return N;
                  },
                  setCrossfader: function (e) {
                    C = e;
                  },
                  isProjectionReady: function () {
                    return M.isEnabled && M.isHydrated && N.isHydrated;
                  },
                  startLayoutAnimation: function (e, t, n) {
                    void 0 === n && (n = !1);
                    var r = G.getProjectionAnimationProgress()[e],
                      o = n ? M.relativeTarget[e] : M.target[e],
                      a = o.min,
                      i = o.max - a;
                    return (
                      r.clearListeners(),
                      r.set(a),
                      r.set(a),
                      r.onChange(function (t) {
                        G.setProjectionTargetAxis(e, t, t + i, n);
                      }),
                      G.animateMotionValue(e, r, 0, t)
                    );
                  },
                  stopLayoutAnimation: function () {
                    mo(function (e) {
                      return G.getProjectionAnimationProgress()[e].stop();
                    });
                  },
                  measureViewportBox: function (e) {
                    void 0 === e && (e = !0);
                    var n = i(k, t);
                    return e || qo(n, A), n;
                  },
                  getProjectionAnimationProgress: function () {
                    return P || (P = { x: zr(0), y: zr(0) }), P;
                  },
                  setProjectionTargetAxis: function (e, t, n, r) {
                    var o;
                    void 0 === r && (r = !1),
                      r
                        ? (M.relativeTarget ||
                            (M.relativeTarget = {
                              x: { min: 0, max: 1 },
                              y: { min: 0, max: 1 },
                            }),
                          (o = M.relativeTarget[e]))
                        : ((M.relativeTarget = void 0), (o = M.target[e])),
                      (M.isHydrated = !0),
                      (o.min = t),
                      (o.max = n),
                      (z = !0),
                      L.notifySetAxisTarget();
                  },
                  rebaseProjectionTarget: function (e, t) {
                    void 0 === t && (t = N.layout);
                    var n = G.getProjectionAnimationProgress(),
                      r = n.x,
                      o = n.y,
                      a = !(
                        M.relativeTarget ||
                        M.isTargetLocked ||
                        r.isAnimating() ||
                        o.isAnimating()
                      );
                    (e || a) &&
                      mo(function (e) {
                        var n = t[e],
                          r = n.min,
                          o = n.max;
                        G.setProjectionTargetAxis(e, r, o);
                      });
                  },
                  notifyLayoutReady: function (e) {
                    !(function (e) {
                      var t = e.getProjectionParent();
                      if (t) {
                        var n = Oo(
                          t.getLayoutState().layout,
                          e.getLayoutState().layout
                        );
                        mo(function (t) {
                          e.setProjectionTargetAxis(t, n[t].min, n[t].max, !0);
                        });
                      } else e.rebaseProjectionTarget();
                    })(G),
                      G.notifyLayoutUpdate(
                        N.layout,
                        G.prevViewportBox || N.layout,
                        e
                      );
                  },
                  resetTransform: function () {
                    return s(G, k, v);
                  },
                  restoreTransform: function () {
                    return c(k, _);
                  },
                  updateLayoutProjection: function () {
                    if (G.isProjectionReady()) {
                      var e = N.delta,
                        t = N.treeScale,
                        n = t.x,
                        r = t.y,
                        o = N.deltaTransform;
                      (function (e, t, n, r) {
                        var o,
                          a,
                          i = e.delta,
                          l = e.layout,
                          u = e.layoutCorrected,
                          s = e.treeScale,
                          c = t.target;
                        (a = l),
                          zo((o = u).x, a.x),
                          zo(o.y, a.y),
                          (function (e, t, n) {
                            var r = n.length;
                            if (r) {
                              var o, a;
                              t.x = t.y = 1;
                              for (var i = 0; i < r; i++)
                                (a = (o = n[i]).getLayoutState().delta),
                                  (t.x *= a.x.scale),
                                  (t.y *= a.y.scale),
                                  Io(e, a),
                                  No(o) && Ho(e, e, o.getLatestValues());
                            }
                          })(u, s, n),
                          So(i, u, c, r);
                      })(N, O, G.path, A),
                        z && G.notifyViewportBoxUpdate(O.target, e),
                        (z = !1);
                      var a = _a(e, t);
                      (a === o && n === t.x && r === t.y) || G.scheduleRender(),
                        (N.deltaTransform = a);
                    }
                  },
                  updateTreeLayoutProjection: function () {
                    G.layoutTree.forEach(za), Gn.preRender(q, !1, !0);
                  },
                  getProjectionParent: function () {
                    if (void 0 === E) {
                      for (var e = !1, t = G.path.length - 1; t >= 0; t--) {
                        var n = G.path[t];
                        if (n.projection.isEnabled) {
                          e = n;
                          break;
                        }
                      }
                      E = e;
                    }
                    return E;
                  },
                  resolveRelativeTargetBox: function () {
                    var e = G.getProjectionParent();
                    if (
                      M.relativeTarget &&
                      e &&
                      ((function (e, t) {
                        Po(e.target.x, e.relativeTarget.x, t.target.x),
                          Po(e.target.y, e.relativeTarget.y, t.target.y);
                      })(M, e.projection),
                      No(e))
                    ) {
                      var t = M.target;
                      Ho(t, t, e.getLatestValues());
                    }
                  },
                  shouldResetTransform: function () {
                    return Boolean(v._layoutResetTransform);
                  },
                  pointTo: function (e) {
                    (O = e.projection),
                      (R = e.getLatestValues()),
                      null == S || S(),
                      (S = Pt(
                        e.onSetAxisTarget(G.scheduleUpdateLayoutProjection),
                        e.onLayoutAnimationComplete(function () {
                          var e;
                          G.isPresent
                            ? (G.presence = na.Present)
                            : null === (e = G.layoutSafeToRemove) ||
                              void 0 === e ||
                              e.call(G);
                        })
                      ));
                  },
                  isPresent: !0,
                  presence: na.Entering,
                }
              );
            return G;
          };
        };
      function za(e) {
        e.resolveRelativeTargetBox();
      }
      function Va(e) {
        e.updateLayoutProjection();
      }
      var Da,
        ja = w(["initial"], b(qr)),
        Ia = ja.length,
        Fa = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        Ua = function (e) {
          return Fa.has(e);
        },
        Ba = function (e, t) {
          e.set(t, !1), e.set(t);
        },
        Ha = function (e) {
          return e === ke || e === ye;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(Da || (Da = {}));
      var Wa = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        $a = function (e, t) {
          return function (n, r) {
            var o = r.transform;
            if ("none" === o || !o) return 0;
            var a = o.match(/^matrix3d\((.+)\)$/);
            if (a) return Wa(a[1], t);
            var i = o.match(/^matrix\((.+)\)$/);
            return i ? Wa(i[1], e) : 0;
          };
        },
        qa = new Set(["x", "y", "z"]),
        Qa = Z.filter(function (e) {
          return !qa.has(e);
        }),
        Ya = {
          width: function (e) {
            var t = e.x;
            return t.max - t.min;
          },
          height: function (e) {
            var t = e.y;
            return t.max - t.min;
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: $a(4, 13),
          y: $a(5, 14),
        };
      function Xa(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(Ua);
        })(t)
          ? (function (e, t, n, r) {
              void 0 === n && (n = {}),
                void 0 === r && (r = {}),
                (t = g({}, t)),
                (r = g({}, r));
              var o = Object.keys(t).filter(Ua),
                a = [],
                i = !1,
                l = [];
              if (
                (o.forEach(function (o) {
                  var u = e.getValue(o);
                  if (e.hasValue(o)) {
                    var s,
                      c = n[o],
                      f = t[o],
                      d = jr(c);
                    if (Ke(f))
                      for (
                        var p = f.length, m = null === f[0] ? 1 : 0;
                        m < p;
                        m++
                      )
                        s ? jr(f[m]) : (s = jr(f[m])) === d || (Ha(d) && Ha(s));
                    else s = jr(f);
                    if (d !== s)
                      if (Ha(d) && Ha(s)) {
                        var v = u.get();
                        "string" == typeof v && u.set(parseFloat(v)),
                          "string" == typeof f
                            ? (t[o] = parseFloat(f))
                            : Array.isArray(f) &&
                              s === ye &&
                              (t[o] = f.map(parseFloat));
                      } else
                        (null == d ? void 0 : d.transform) &&
                        (null == s ? void 0 : s.transform) &&
                        (0 === c || 0 === f)
                          ? 0 === c
                            ? u.set(s.transform(c))
                            : (t[o] = d.transform(f))
                          : (i ||
                              ((a = (function (e) {
                                var t = [];
                                return (
                                  Qa.forEach(function (n) {
                                    var r = e.getValue(n);
                                    void 0 !== r &&
                                      (t.push([n, r.get()]),
                                      r.set(n.startsWith("scale") ? 1 : 0));
                                  }),
                                  t.length && e.syncRender(),
                                  t
                                );
                              })(e)),
                              (i = !0)),
                            l.push(o),
                            (r[o] = void 0 !== r[o] ? r[o] : t[o]),
                            Ba(u, f));
                  }
                }),
                l.length)
              ) {
                var u = (function (e, t, n) {
                  var r = t.measureViewportBox(),
                    o = t.getInstance(),
                    a = getComputedStyle(o),
                    i = a.display,
                    l = {
                      top: a.top,
                      left: a.left,
                      bottom: a.bottom,
                      right: a.right,
                      transform: a.transform,
                    };
                  "none" === i &&
                    t.setStaticValue("display", e.display || "block"),
                    t.syncRender();
                  var u = t.measureViewportBox();
                  return (
                    n.forEach(function (n) {
                      var o = t.getValue(n);
                      Ba(o, Ya[n](r, l)), (e[n] = Ya[n](u, a));
                    }),
                    e
                  );
                })(t, e, l);
                return (
                  a.length &&
                    a.forEach(function (t) {
                      var n = b(t, 2),
                        r = n[0],
                        o = n[1];
                      e.getValue(r).set(o);
                    }),
                  e.syncRender(),
                  { target: u, transitionEnd: r }
                );
              }
              return { target: t, transitionEnd: r };
            })(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var Ka = {
          treeType: "dom",
          readValueFromInstance: function (e, t) {
            if (ee(t)) {
              var n = Sr(t);
              return (n && n.default) || 0;
            }
            var r,
              o = ((r = e), window.getComputedStyle(r));
            return (ie(t) ? o.getPropertyValue(t) : o[t]) || 0;
          },
          sortNodePosition: function (e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1;
          },
          getBaseTarget: function (e, t) {
            var n;
            return null === (n = e.style) || void 0 === n ? void 0 : n[t];
          },
          measureViewportBox: function (e, t) {
            return wo(e, t.transformPagePoint);
          },
          resetTransform: function (e, t, n) {
            var r = n.transformTemplate;
            (t.style.transform = r ? r({}, "") : "none"), e.scheduleRender();
          },
          restoreTransform: function (e, t) {
            e.style.transform = t.style.transform;
          },
          removeValueFromRenderState: function (e, t) {
            var n = t.vars,
              r = t.style;
            delete n[e], delete r[e];
          },
          makeTargetAnimatable: function (e, t, n, r) {
            var o = n.transformValues;
            void 0 === r && (r = !0);
            var a = t.transition,
              i = t.transitionEnd,
              l = y(t, ["transition", "transitionEnd"]),
              u = (function (e, t, n) {
                var r,
                  o,
                  a = {};
                for (var i in e)
                  a[i] =
                    null !== (r = Ur(i, t)) && void 0 !== r
                      ? r
                      : null === (o = n.getValue(i)) || void 0 === o
                      ? void 0
                      : o.get();
                return a;
              })(l, a || {}, e);
            if ((o && (i && (i = o(i)), l && (l = o(l)), u && (u = o(u))), r)) {
              !(function (e, t, n) {
                var r,
                  o,
                  a,
                  i,
                  l,
                  u = Object.keys(t).filter(function (t) {
                    return !e.hasValue(t);
                  }),
                  s = u.length;
                if (s)
                  for (var c = 0; c < s; c++) {
                    var f = u[c],
                      d = t[f],
                      p = null;
                    Array.isArray(d) && (p = d[0]),
                      null === p &&
                        (p =
                          null !==
                            (o =
                              null !== (r = n[f]) && void 0 !== r
                                ? r
                                : e.readValue(f)) && void 0 !== o
                            ? o
                            : t[f]),
                      null != p &&
                        ("string" == typeof p && /^\-?\d*\.?\d+$/.test(p)
                          ? (p = parseFloat(p))
                          : ((l = p),
                            !Ir.find(Vr(l)) && ln.test(d) && (p = Cr(f, d))),
                        e.addValue(f, zr(p)),
                        (null !== (a = (i = n)[f]) && void 0 !== a) ||
                          (i[f] = p),
                        e.setBaseTarget(f, p));
                  }
              })(e, l, u);
              var s = (function (e, t, n, r) {
                var o = (function (e, t, n) {
                  var r,
                    o = y(t, []),
                    a = e.getInstance();
                  if (!(a instanceof HTMLElement))
                    return { target: o, transitionEnd: n };
                  for (var i in (n && (n = g({}, n)),
                  e.forEachValue(function (e) {
                    var t = e.get();
                    if (aa(t)) {
                      var n = la(t, a);
                      n && e.set(n);
                    }
                  }),
                  o)) {
                    var l = o[i];
                    if (aa(l)) {
                      var u = la(l, a);
                      u &&
                        ((o[i] = u),
                        n &&
                          ((null !== (r = n[i]) && void 0 !== r) ||
                            (n[i] = l)));
                    }
                  }
                  return { target: o, transitionEnd: n };
                })(e, t, r);
                return Xa(e, (t = o.target), n, (r = o.transitionEnd));
              })(e, l, u, i);
              (i = s.transitionEnd), (l = s.target);
            }
            return g({ transition: a, transitionEnd: i }, l);
          },
          scrapeMotionValuesFromProps: Qe,
          build: function (e, t, n, r, o, a, i) {
            void 0 !== e.isVisible &&
              (t.style.visibility = e.isVisible ? "visible" : "hidden");
            var l = r.isEnabled && o.isHydrated;
            Te(
              t,
              n,
              r,
              o,
              a,
              i.transformTemplate,
              l ? _a : void 0,
              l ? La : void 0
            );
          },
          render: We,
        },
        Za = Na(Ka),
        Ga = Na(
          g(g({}, Ka), {
            getBaseTarget: function (e, t) {
              return e[t];
            },
            readValueFromInstance: function (e, t) {
              var n;
              return ee(t)
                ? (null === (n = Sr(t)) || void 0 === n ? void 0 : n.default) ||
                    0
                : ((t = $e.has(t) ? t : He(t)), e.getAttribute(t));
            },
            scrapeMotionValuesFromProps: Ye,
            build: function (e, t, n, r, o, a, i) {
              var l = r.isEnabled && o.isHydrated;
              je(
                t,
                n,
                r,
                o,
                a,
                i.transformTemplate,
                l ? _a : void 0,
                l ? La : void 0
              );
            },
            render: qe,
          })
        ),
        Ja = function (e, t) {
          return Y(e)
            ? Ga(t, { enableHardwareAcceleration: !1 })
            : Za(t, { enableHardwareAcceleration: !0 });
        },
        ei = g(g(g(g({}, Zr), At), oa), Pa),
        ti = q(function (e, t) {
          return (function (e, t, n, r) {
            var o = t.forwardMotionProps,
              a = void 0 !== o && o,
              i = Y(e) ? tt : nt;
            return g(g({}, i), {
              preloadedFeatures: n,
              useRender: Ue(a),
              createVisualElement: r,
              Component: e,
            });
          })(e, t, ei, Ja);
        }),
        ni = {
          baseUrl: "ws://localhost:8/ws/chat/",
          token: "",
          primaryColor: "#1890ff",
          iconStyle: "square",
          title: "Welcome to Fusion!",
          subtitle: "Ask us anything in the chat window 😊",
          agentAvailableText: "Agents are online!",
          agentUnavailableText: "Agents are not available at the moment.",
          requireEmailUpfront: !1,
          showAgentAvailability: !1,
          userId: "",
          deviceId: "",
          room: "",
        };
      function ri(e) {
        for (
          var t = e + "=", n = document.cookie.split(";"), r = 0;
          r < n.length;
          r++
        ) {
          for (var o = n[r]; " " == o.charAt(0); ) o = o.substring(1, o.length);
          if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
        }
        return null;
      }
      function oi(e, t, n) {
        if (n) {
          var r = new Date();
          r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
          var o = "; expires=" + r.toGMTString();
        } else o = "";
        var a = window.location.hostname;
        document.cookie = e + "=" + t + o + "; path=/; domain=" + a;
      }
      function ai(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  r || null == l.return || l.return();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ii(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ii(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ii(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function li(t) {
        var n = ai((0, e.useContext)(c), 2),
          r = (n[0], n[1]),
          o = ai((0, e.useContext)(p), 2),
          a = (o[0], o[1]),
          i = ai((0, e.useContext)(l), 2),
          u = i[0],
          s = (i[1], ai((0, e.useState)(""), 2)),
          f = s[0],
          d = s[1],
          m = ai((0, e.useState)(""), 2),
          v = m[0],
          h = m[1],
          g = ai((0, e.useState)("block"), 2),
          y = g[0],
          b = g[1],
          w = ai((0, e.useState)("not-allowed"), 2),
          x = w[0],
          k = w[1],
          E = ai((0, e.useState)("true"), 2),
          S = (E[0], E[1], (0, e.useRef)()),
          C =
            ((0, e.useRef)(),
            function (e) {
              return !(
                localStorage.getItem("emailInput") ||
                (e.length > 0 && e.indexOf("@") > 0)
              );
            });
        return (
          (0, e.useEffect)(
            function () {
              k("pointer" === x ? "not-allowed" : "pointer");
            },
            [C(v)]
          ),
          (0, e.useEffect)(function () {
            "false" === ri("fusion_widget_".concat(ni.token))
              ? (b("block"), k("not-allowed"))
              : (b("none"), k("pointer"));
          }, []),
          (0, e.useEffect)(
            function () {
              var e;
              null === (e = S.current) ||
                void 0 === e ||
                e.scrollIntoView({ behaviour: "smooth" });
            },
            [u]
          ),
          e.createElement(
            e.Fragment,
            null,
            e.createElement(
              ti.div,
              { id: "chat-window" },
              e.createElement(
                "div",
                {
                  id: "top-bar",
                  style: { background: "".concat(ni.primaryColor) },
                },
                e.createElement("h1", { id: "header-text" }, ni.title),
                e.createElement("h1", { id: "description-text" }, ni.subtitle)
              ),
              e.createElement(
                "div",
                { id: "text-window" },
                u.map(function (t, n) {
                  return "user" == t.author
                    ? e.createElement(
                        "div",
                        { ref: S },
                        e.createElement(ui, { chat: t.content, key: n })
                      )
                    : e.createElement(
                        "div",
                        { ref: S },
                        e.createElement(si, { chat: t.content, key: n })
                      );
                })
              ),
              e.createElement(
                "div",
                { id: "fusion-branding" },
                e.createElement(
                  "a",
                  {
                    id: "fusion-website-link",
                    href: "https://fusionhq.co?ref=widget-branding",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  "Powered by Fusion"
                )
              ),
              e.createElement(
                "div",
                { id: "input-section" },
                e.createElement("input", {
                  style: { display: "".concat(y) },
                  id: "email-input",
                  onChange: function (e) {
                    e.preventDefault(), h(e.target.value);
                  },
                  type: "text",
                  autoFocus: !0,
                  placeholder: "What's your email address ?",
                }),
                e.createElement("div", {
                  id: "divider",
                  style: { display: "".concat(y) },
                }),
                e.createElement(
                  "div",
                  { id: "input-section-2" },
                  e.createElement("input", {
                    onChange: function (e) {
                      e.preventDefault(), d(e.target.value);
                    },
                    id: "text-input",
                    style: { cursor: "".concat(x) },
                    type: "text",
                    disabled: C(v),
                    placeholder: "Reply here",
                    className: "fusion-no-capture",
                  }),
                  e.createElement(
                    "button",
                    {
                      id: "send-button",
                      className: "fusion-no-capture",
                      onClick: function () {
                        if ("" !== f) {
                          var e = localStorage.getItem("emailInput");
                          r(f),
                            "" === v ||
                              e ||
                              (a(v),
                              oi(
                                "fusion_widget_".concat(ni.token),
                                "true",
                                730
                              ),
                              b("none"),
                              localStorage.setItem("emailInput", !0)),
                            (document.getElementById("text-input").value = "");
                        }
                      },
                      style: {
                        background: "".concat(ni.primaryColor),
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                    },
                    e.createElement(
                      "svg",
                      {
                        style: { background: "".concat(ni.primaryColor) },
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 26 20",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-send",
                      },
                      e.createElement("line", {
                        x1: "22",
                        y1: "2",
                        x2: "11",
                        y2: "13",
                      }),
                      e.createElement("polygon", {
                        points: "22 2 15 22 11 13 2 9 22 2",
                      })
                    )
                  )
                )
              )
            )
          )
        );
      }
      function ui(t) {
        return e.createElement(
          e.Fragment,
          null,
          e.createElement("div", { id: "user-chat-bubble" }, t.chat)
        );
      }
      function si(t) {
        return e.createElement(
          e.Fragment,
          null,
          e.createElement(
            "div",
            {
              id: "agent-chat-bubble",
              style: { background: "".concat(ni.primaryColor) },
            },
            t.chat
          )
        );
      }
      function ci(t) {
        var n = t.chats;
        return e.createElement(
          e.Fragment,
          null,
          e.createElement(
            "div",
            { id: "popup-container" },
            n.map(function (t, n) {
              if ("user" !== t.author)
                return e.createElement(fi, { chat: t.content, key: n });
            })
          )
        );
      }
      function fi(t) {
        return e.createElement("div", { id: "popup-bubble" }, t.chat);
      }
      var di,
        pi = n(578);
      function mi(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return gi(e);
          })(e) ||
          (function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          hi(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function vi(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                r = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) &&
                  (n.push(i.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  r || null == l.return || l.return();
                } finally {
                  if (o) throw a;
                }
              }
              return n;
            }
          })(e, t) ||
          hi(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function hi(e, t) {
        if (e) {
          if ("string" == typeof e) return gi(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? gi(e, t)
              : void 0
          );
        }
      }
      function gi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function yi() {
        if (null == di) {
          var t = "".concat(ni.token);
          di = new pi.w3cwebsocket(
            "".concat(ni.baseUrl, "/ws/chat/").concat(t, "/")
          );
        }
        var n = vi((0, e.useState)("none"), 2),
          r = n[0],
          o = n[1],
          a = vi((0, e.useState)("0vh"), 2),
          i = a[0],
          u = a[1],
          s = vi((0, e.useState)("block"), 2),
          f = s[0],
          d = s[1],
          m = vi((0, e.useState)([]), 2),
          v = m[0],
          h = m[1],
          g = vi((0, e.useContext)(l), 2),
          y = (g[0], g[1]),
          b = vi((0, e.useContext)(c), 2),
          w = b[0],
          x = b[1],
          k = vi((0, e.useContext)(p), 2),
          E = k[0],
          S = k[1],
          C = vi((0, e.useState)([]), 2),
          P = C[0],
          T = C[1],
          A = vi((0, e.useState)(!1), 2),
          _ = A[0],
          L = A[1];
        return (
          (0, e.useEffect)(function () {
            (di.onopen = function () {}),
              (di.onmessage = function (e) {
                var t = JSON.parse(e.data),
                  n = t.message;
                if ("new_message" === t.command) {
                  if (n.user_id == ni.userId && n.device_id == ni.deviceId) {
                    var r = [].concat(mi(v), [n]);
                    if ((h(r), y(r), "none" !== f)) {
                      var o = [].concat(mi(P), [n]);
                      T(o);
                    }
                  }
                } else if ("messages" === t.command) {
                  var a = mi(
                    t.messages
                      .slice(0)
                      .reverse()
                      .map(function (e, t) {
                        return e;
                      })
                  );
                  h(a), y(a);
                }
              });
          }),
          (0, e.useEffect)(
            function () {
              var e, t;
              "" !== (e = w) &&
                di.send(
                  JSON.stringify({
                    command: "new_message",
                    room_name: "".concat(ni.token),
                    token: "".concat(ni.token),
                    user_id: "".concat(ni.userId),
                    device_id: "".concat(ni.deviceId),
                    from: "user",
                    text: "".concat(e),
                  })
                ),
                "" !== (t = E) &&
                  di.send(
                    JSON.stringify({
                      command: "user_info",
                      room_name: "".concat(ni.token),
                      token: "".concat(ni.token),
                      email: "".concat(t),
                      user_id: "".concat(ni.userId),
                      device_id: "".concat(ni.deviceId),
                      from: "user",
                    })
                  ),
                x(""),
                S("");
            },
            [w, E]
          ),
          e.createElement(
            "div",
            { id: "parent-box", style: { height: "".concat(i) } },
            e.createElement(
              ti.div,
              {
                animate: _ ? "open" : "closed",
                initial: "closed",
                variants: { closed: { opacity: 0 }, open: { opacity: 1 } },
                transition: { duration: 0.05, ease: "easeIn" },
              },
              e.createElement(li, null)
            ),
            e.createElement(
              ti.div,
              {
                animate: _ ? "closed" : "open",
                initial: "closed",
                variants: { closed: { opacity: 0 }, open: { opacity: 1 } },
                transition: { duration: 0.05, ease: "easeIn" },
              },
              e.createElement(ci, { chats: P })
            ),
            e.createElement(
              ti.button,
              {
                animate: { Y: 0, opacity: 1 },
                initial: { opacity: 0.01, Y: 10 },
                id: "chat-widget",
                style: {
                  background: "".concat(ni.primaryColor),
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                onClick: function () {
                  "none" == r
                    ? (ni.userId,
                      ni.deviceId,
                      di.send(
                        JSON.stringify({
                          command: "fetch_messages",
                          room_name: "".concat(ni.token),
                          token: "".concat(ni.token),
                          user_id: "".concat(ni.userId),
                          device_id: "".concat(ni.deviceId),
                        })
                      ),
                      o("block"),
                      u("100vh"),
                      d("none"),
                      T([]),
                      L(!0))
                    : (o("none"), u("0vh"), d("block"), L(!1));
                },
                className: "fusion-no-capture",
              },
              "circle" === ni.iconStyle
                ? e.createElement(
                    "svg",
                    {
                      style: { display: "".concat(f) },
                      width: "32",
                      height: "32",
                      viewBox: "0 0 28 28",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    e.createElement("path", {
                      d: "M0.000260353 28L0.000260353 14L14.9336 28L0.000260353 28Z",
                      fill: "white",
                    }),
                    e.createElement("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M14 0C6.26953 0 0 6.26801 0 14C0 21.732 6.26953 28 14 28C21.7305 28 28 21.732 28 14C28 6.26801 21.7305 0 14 0ZM10.6719 20.8909C12.9531 23.5727 17.6758 26.2479 23.0781 20.9695C23.4492 20.6084 23.1875 20 22.668 20H11.1172C10.6406 20 10.3633 20.5265 10.6719 20.8909Z",
                      fill: "white",
                    })
                  )
                : e.createElement(
                    "svg",
                    {
                      style: { display: "".concat(f), marginTop: "2px" },
                      width: "29",
                      height: "34",
                      viewBox: "0 0 29 34",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                    e.createElement("path", {
                      d: "M0.669069 33.3918C0.41212 33.6253 -2.38419e-07 33.443 -2.38419e-07 33.0958L-2.38419e-07 24.4C-2.38419e-07 24.1791 0.179086 24 0.4 24H9.96536C10.331 24 10.505 24.45 10.2344 24.696L0.669069 33.3918Z",
                      fill: "white",
                    }),
                    e.createElement("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M5 0C2.23858 0 0 2.23858 0 5V24C0 26.7614 2.23858 29 5 29H24C26.7614 29 29 26.7614 29 24V5C29 2.23858 26.7614 0 24 0H5ZM7.61991 20.7588C10.1149 23.5048 15.5688 26.381 22.0771 20.8369C22.4197 20.545 22.2093 20 21.7592 20H7.9821C7.57341 20 7.34508 20.4563 7.61991 20.7588Z",
                      fill: "white",
                    })
                  ),
              e.createElement(
                "svg",
                {
                  style: { display: "".concat(r), marginTop: "3px" },
                  width: "19",
                  height: "12",
                  viewBox: "0 0 19 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                e.createElement("path", {
                  d: "M2 2L9.5 10L17 2",
                  stroke: "white",
                  strokeWidth: "3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            )
          )
        );
      }
      function bi(t) {
        return e.createElement(
          "div",
          null,
          e.createElement(
            f,
            null,
            e.createElement(
              m,
              null,
              e.createElement(u, null, e.createElement(yi, null))
            )
          )
        );
      }
      n(422),
        (window.fusionChat = function (n) {
          var r = n.token;
          (ni.baseUrl = n.baseUrl || ni.baseUrl),
            (ni.token = n.token),
            (ni.title = n.title),
            (ni.subtitle = n.subtitle),
            (ni.primaryColor = n.primaryColor),
            (ni.agentAvailableText = n.agentAvailableText),
            (ni.agentUnavailableText = n.agentAvailableText),
            (ni.showAgentAvailability = n.agentAvailableText),
            (ni.requireEmailUpfront = n.requireEmailUpfront),
            (ni.agentUnavailableText = n.showAgentAvailability),
            (ni.iconStyle = n.iconStyle);
          var o = ri("fusion_".concat(r)),
            a = JSON.parse(decodeURIComponent(o));
          (ni.userId = a.user_id),
            (ni.deviceId = a.device_id),
            null === ri("fusion_widget_".concat(ni.token)) &&
              oi("fusion_widget_".concat(ni.token), "false", 730);
          var i = document.createElement("div");
          i.setAttribute("id", "app_".concat(r)), document.body.appendChild(i);
          var l = document.getElementById("app_".concat(r));
          t.render(e.createElement(bi, { config: n }), l);
        });
    })();
})();
