/*
 * @(#)virtualcube.js  1.0.2  2014-01-20
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 RequireJS 2.1.15 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/

/*
 * @(#)J3DI.js  2.0  2013-12-31
 *
 * Copyright (c) 2011-2013 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 *
 * Portions of this script (as marked) have been taken from the following sources:
 *
 *   David Roe
 *   http://stackoverflow.com/questions/4878145/javascript-and-webgl-external-scripts
 *
 *   Apple Inc.
 *   The J3DI.js file as linked from:
 *   https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/sdk/demos/webkit/SpinningBox.html
 *
 *     Copyright (C) 2009 Apple Inc. All Rights Reserved.
 *
 *     Redistribution and use in source and binary forms, with or without
 *     modification, are permitted provided that the following conditions
 *     are met:
 *     1. Redistributions of source code must retain the above copyright
 *        notice, this list of conditions and the following disclaimer.
 *     2. Redistributions in binary form must reproduce the above copyright
 *        notice, this list of conditions and the following disclaimer in the
 *        documentation and/or other materials provided with the distribution.
 *
 *     This software is provided by apple inc. ``as is'' and any
 *     express or implied warranties, including, but not limited to, the
 *     implied warranties of merchantability and fitness for a particular
 *     purpose are disclaimed.  in no event shall apple inc. or
 *     contributors be liable for any direct, indirect, incidental, special,
 *     exemplary, or consequential damages (including, but not limited to,
 *     procurement of substitute goods or services; loss of use, data, or
 *     profits; or business interruption) however caused and on any theory
 *     of liability, whether in contract, strict liability, or tort
 *     (including negligence or otherwise) arising in any way out of the use
 *     of this software, even if advised of the possibility of such damage.
 *
 *
 *   Google Inc.
 *   The easywebgl.js file as linked from:
 *   https://cvs.khronos.org/svn/repos/registry/trunk/public/webgl/sdk/demos/webkit/SpinningBox.html
 * 
 *     Copyright 2010, Google Inc.
 *     All rights reserved.
 *
 *     Redistribution and use in source and binary forms, with or without
 *     modification, are permitted provided that the following conditions are
 *     met:
 *
 *         * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *         * Redistributions in binary form must reproduce the above
 *     copyright notice, this list of conditions and the following disclaimer
 *     in the documentation and/or other materials provided with the
 *     distribution.
 *         * Neither the name of Google Inc. nor the names of its
 *     contributors may be used to endorse or promote products derived from
 *     this software without specific prior written permission.
 *
 *     This software is provided by the copyright holders and contributors
 *     "as is" and any express or implied warranties, including, but not
 *     limited to, the implied warranties of merchantability and fitness for
 *     a particular purpose are disclaimed. in no event shall the copyright
 *     owner or contributors be liable for any direct, indirect, incidental,
 *     special, exemplary, or consequential damages (including, but not
 *     limited to, procurement of substitute goods or services; loss of use,
 *     data, or profits; or business interruption) however caused and on any
 *     theory of liability, whether in contract, strict liability, or tort
 *     (including negligence or otherwise) arising in any way out of the use
 *     of this software, even if advised of the possibility of such damage.
 */

/*
 * Copyright (C) 2009 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * This software is provided by Apple Inc. ``as is'' and any
 * express or implied warranties, including, but not limited to, the
 * implied warranties of merchantability and fitness for a particular
 * purpose are disclaimed.  in no event shall apple inc. or
 * contributors be liable for any direct, indirect, incidental, special,
 * exemplary, or consequential damages (including, but not limited to,
 * procurement of substitute goods or services; loss of use, data, or
 * profits; or business interruption) however caused and on any theory
 * of liability, whether in contract, strict liability, or tort
 * (including negligence or otherwise) arising in any way out of the use
 * of this software, even if advised of the possibility of such damage.
 *
 * Enhancements:
 * 1.2   2014-02-02 Werner Randelshofer. Integrates now with Require.js. Adds intersection tests.
 * 1.1   2012-06-17 Werner Randelshofer. Adds world function.
 * 1.0.3 2012-06-15 Werner Randelshofer. Fixes lookAt function.
 * 1.0.2 2012-06-09 Werner Randelshofer. Fixes lookAt function.
 * 1.0.1 2011-06-22 Werner Randelshofer. Adds arithmetic functions.
 */

/*
 * @(#)node3d.js  2.0  2014-01-225
 *
 * Copyright (c) 2011-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)AbstractCanvas.js  1.0  2014-02-24
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/**
 * uses affine texture mapping to draw a textured triangle
 * at screen coordinates [x0, y0], [x1, y1], [x2, y2] from
 * img *pixel* coordinates [u0, v0], [u1, v1], [u2, v2]
 *
 * Copyright 2010 Brendan Kenny
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/*
 * @(#)scriptparser.js  0.1  2011-08-12
 *
 * Copyright (c) 2011-2012 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)Cube3d.js  1.1  2014-02-02
 *
 * Copyright (c) 2011-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)Cube.js  1.0.2  2014-01-17
 *
 * Copyright (c) 2011-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)RubiksCube.js  1.0.2  2014-01-17
 *
 * Copyright (c) 2011-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)cubeattributes.js  1.0  2011-06-23
 *
 * Copyright (c) 2011-2012 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)splineinterpolator.js  1.0  2011-06-24
 *
 * Copyright (c) 2011-2012 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)AbstractRubiksCubeCube3D.js  1.0.2  2014-01-17
 *
 * Copyright (c) 2011-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)PreloadRubiksCubeS4.js  1.0  2014-01-17
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)RubiksCubeS1Cube3D.js  1.0  2015-01-09
 *
 * Copyright (c) 2015 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)RubiksCubeS4Cube3D.js  1.0  2015-01-09
 *
 * Copyright (c) 2015 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)PocketCube.js  1.0  2014-01-17
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)AbstractPocketCubeCube3D.js  1.0  2014-01-17
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)PreloadPocketCubeS4.js  1.0  2014-03-30
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)PocketCubeS1Cube3D.js  1.0  2015-03-30
 *
 * Copyright (c) 2015 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)PreloadPocketCubeS4.js  1.0  2015-03-30
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)PocketCubeS4Cube3D.js  1.0  2015-03-30
 *
 * Copyright (c) 2015 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)Cube3DCanvas.js  2.0  2014-01-05
 *
 * Copyright (c) 2013-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)PreloadWebglShaders.js  1.0  2014-01-17
 *
 * Copyright (c) 2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)WebglCube3DCanvas.js  2.0  2014-01-05
 *
 * Copyright (c) 2013-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)TwoDCube3DCanvas.js  1.0  2013-12-30
 *
 * Copyright (c) 2013 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

/*
 * @(#)VirtualCubeMain.js  2.0  2014-01-05
 *
 * Copyright (c) 2011-2014 Werner Randelshofer, Switzerland.
 * You may not use, copy or modify this file, except in compliance with the
 * accompanying license terms.
 */

function formatNumber(e, t) {
    t === undefined && (t = 2);
    var n = e.toString().split("e"),
        r = +(+n[0]).toFixed(t);
    return n.length > 1 && (r += "e" + n[1]), r;
}
var requirejs, require, define;
(function (ba) {
    function G(e) {
        return "[object Function]" === K.call(e);
    }
    function H(e) {
        return "[object Array]" === K.call(e);
    }
    function v(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }
    function T(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; -1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }
    function t(e, t) {
        return fa.call(e, t);
    }
    function m(e, n) {
        return t(e, n) && e[n];
    }
    function B(e, n) {
        for (var r in e) if (t(e, r) && n(e[r], r)) break;
    }
    function U(e, n, r, i) {
        return (
            n &&
                B(n, function (n, s) {
                    if (r || !t(e, s)) i && "object" == typeof n && n && !H(n) && !G(n) && !(n instanceof RegExp) ? (e[s] || (e[s] = {}), U(e[s], n, r, i)) : (e[s] = n);
                }),
            e
        );
    }
    function u(e, t) {
        return function () {
            return t.apply(e, arguments);
        };
    }
    function ca(e) {
        throw e;
    }
    function da(e) {
        if (!e) return e;
        var t = ba;
        return (
            v(e.split("."), function (e) {
                t = t[e];
            }),
            t
        );
    }
    function C(e, t, n, r) {
        return (t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e)), (t.requireType = e), (t.requireModules = r), n && (t.originalError = n), t;
    }
    function ga(e) {
        function n(e, t, n) {
            var r,
                i,
                s,
                o,
                u,
                a,
                f,
                l,
                t = t && t.split("/"),
                c = A.map,
                h = c && c["*"];
            if (e) {
                (e = e.split("/")), (i = e.length - 1), A.nodeIdCompat && Q.test(e[i]) && (e[i] = e[i].replace(Q, "")), "." === e[0].charAt(0) && t && ((i = t.slice(0, t.length - 1)), (e = i.concat(e))), (i = e);
                for (s = 0; s < i.length; s++) ((o = i[s]), "." === o) ? (i.splice(s, 1), (s -= 1)) : ".." === o && 0 !== s && (1 != s || ".." !== i[2]) && ".." !== i[s - 1] && 0 < s && (i.splice(s - 1, 2), (s -= 2));
                e = e.join("/");
            }
            if (n && c && (t || h)) {
                (i = e.split("/")), (s = i.length);
                e: for (; 0 < s; s -= 1) {
                    u = i.slice(0, s).join("/");
                    if (t)
                        for (o = t.length; 0 < o; o -= 1)
                            if ((n = m(c, t.slice(0, o).join("/"))))
                                if ((n = m(n, u))) {
                                    (r = n), (a = s);
                                    break e;
                                }
                    !f && h && m(h, u) && ((f = m(h, u)), (l = s));
                }
                !r && f && ((r = f), (a = l)), r && (i.splice(0, a, r), (e = i.join("/")));
            }
            return (r = m(A.pkgs, e)) ? r : e;
        }
        function r(e) {
            z &&
                v(document.getElementsByTagName("script"), function (t) {
                    if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName) return t.parentNode.removeChild(t), !0;
                });
        }
        function i(e) {
            var t = m(A.paths, e);
            if (t && H(t) && 1 < t.length) return t.shift(), x.require.undef(e), x.makeRequire(null, { skipMap: !0 })([e]), !0;
        }
        function s(e) {
            var t,
                n = e ? e.indexOf("!") : -1;
            return -1 < n && ((t = e.substring(0, n)), (e = e.substring(n + 1, e.length))), [t, e];
        }
        function o(e, t, r, i) {
            var o,
                u,
                a = null,
                f = t ? t.name : null,
                l = e,
                c = !0,
                h = "";
            return (
                e || ((c = !1), (e = "_@r" + (q += 1))),
                (e = s(e)),
                (a = e[0]),
                (e = e[1]),
                a && ((a = n(a, f, i)), (u = m(j, a))),
                e &&
                    (a
                        ? (h =
                              u && u.normalize
                                  ? u.normalize(e, function (e) {
                                        return n(e, f, i);
                                    })
                                  : -1 === e.indexOf("!")
                                  ? n(e, f, i)
                                  : e)
                        : ((h = n(e, f, i)), (e = s(h)), (a = e[0]), (h = e[1]), (r = !0), (o = x.nameToUrl(h)))),
                (r = a && !u && !r ? "_unnormalized" + (W += 1) : ""),
                { prefix: a, name: h, parentMap: t, unnormalized: !!r, url: o, originalName: l, isDefine: c, id: (a ? a + "!" + h : h) + r }
            );
        }
        function a(e) {
            var t = e.id,
                n = m(O, t);
            return n || (n = O[t] = new x.Module(e)), n;
        }
        function f(e, n, r) {
            var i = e.id,
                s = m(O, i);
            t(j, i) && (!s || s.defineEmitComplete) ? "defined" === n && r(j[i]) : ((s = a(e)), s.error && "error" === n) ? r(s.error) : s.on(n, r);
        }
        function l(e, t) {
            var n = e.requireModules,
                r = !1;
            t
                ? t(e)
                : (v(n, function (t) {
                      if ((t = m(O, t))) (t.error = e), t.events.error && ((r = !0), t.emit("error", e));
                  }),
                  !r) && g.onError(e);
        }
        function c() {
            R.length && (ha.apply(P, [P.length, 0].concat(R)), (R = []));
        }
        function h(e) {
            delete O[e], delete _[e];
        }
        function p(e, t, n) {
            var r = e.map.id;
            e.error
                ? e.emit("error", e.error)
                : ((t[r] = !0),
                  v(e.depMaps, function (r, i) {
                      var s = r.id,
                          o = m(O, s);
                      o && !e.depMatched[i] && !n[s] && (m(t, s) ? (e.defineDep(i, j[s]), e.check()) : p(o, t, n));
                  }),
                  (n[r] = !0));
        }
        function d() {
            var e,
                t,
                n = (e = 1e3 * A.waitSeconds) && x.startTime + e < new Date().getTime(),
                s = [],
                o = [],
                u = !1,
                a = !0;
            if (!E) {
                (E = !0),
                    B(_, function (e) {
                        var f = e.map,
                            l = f.id;
                        if (e.enabled && (f.isDefine || o.push(e), !e.error))
                            if (!e.inited && n) i(l) ? (u = t = !0) : (s.push(l), r(l));
                            else if (!e.inited && e.fetched && f.isDefine && ((u = !0), !f.prefix)) return (a = !1);
                    });
                if (n && s.length) return (e = C("timeout", "Load timeout for modules: " + s, null, s)), (e.contextName = x.contextName), l(e);
                a &&
                    v(o, function (e) {
                        p(e, {}, {});
                    }),
                    (!n || t) &&
                        u &&
                        (z || ea) &&
                        !L &&
                        (L = setTimeout(function () {
                            (L = 0), d();
                        }, 50)),
                    (E = !1);
            }
        }
        function y(e) {
            t(j, e[0]) || a(o(e[0], null, !0)).init(e[1], e[2]);
        }
        function b(e) {
            var e = e.currentTarget || e.srcElement,
                t = x.onScriptLoad;
            return (
                e.detachEvent && !Y ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1),
                (t = x.onScriptError),
                (!e.detachEvent || Y) && e.removeEventListener("error", t, !1),
                { node: e, id: e && e.getAttribute("data-requiremodule") }
            );
        }
        function w() {
            var e;
            for (c(); P.length; ) {
                e = P.shift();
                if (null === e[0]) return l(C("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                y(e);
            }
        }
        var E,
            S,
            x,
            k,
            L,
            A = { waitSeconds: 7, baseUrl: "./", paths: {}, bundles: {}, pkgs: {}, shim: {}, config: {} },
            O = {},
            _ = {},
            D = {},
            P = [],
            j = {},
            F = {},
            I = {},
            q = 1,
            W = 1;
        return (
            (k = {
                require: function (e) {
                    return e.require ? e.require : (e.require = x.makeRequire(e.map));
                },
                exports: function (e) {
                    e.usingExports = !0;
                    if (e.map.isDefine) return e.exports ? (j[e.map.id] = e.exports) : (e.exports = j[e.map.id] = {});
                },
                module: function (e) {
                    return e.module
                        ? e.module
                        : (e.module = {
                              id: e.map.id,
                              uri: e.map.url,
                              config: function () {
                                  return m(A.config, e.map.id) || {};
                              },
                              exports: e.exports || (e.exports = {}),
                          });
                },
            }),
            (S = function (e) {
                (this.events = m(D, e.id) || {}), (this.map = e), (this.shim = m(A.shim, e.id)), (this.depExports = []), (this.depMaps = []), (this.depMatched = []), (this.pluginMaps = {}), (this.depCount = 0);
            }),
            (S.prototype = {
                init: function (e, t, n, r) {
                    (r = r || {}),
                        this.inited ||
                            ((this.factory = t),
                            n
                                ? this.on("error", n)
                                : this.events.error &&
                                  (n = u(this, function (e) {
                                      this.emit("error", e);
                                  })),
                            (this.depMaps = e && e.slice(0)),
                            (this.errback = n),
                            (this.inited = !0),
                            (this.ignore = r.ignore),
                            r.enabled || this.enabled ? this.enable() : this.check());
                },
                defineDep: function (e, t) {
                    this.depMatched[e] || ((this.depMatched[e] = !0), (this.depCount -= 1), (this.depExports[e] = t));
                },
                fetch: function () {
                    if (!this.fetched) {
                        (this.fetched = !0), (x.startTime = new Date().getTime());
                        var e = this.map;
                        if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                        x.makeRequire(this.map, { enableBuildCallback: !0 })(
                            this.shim.deps || [],
                            u(this, function () {
                                return e.prefix ? this.callPlugin() : this.load();
                            })
                        );
                    }
                },
                load: function () {
                    var e = this.map.url;
                    F[e] || ((F[e] = !0), x.load(this.map.id, e));
                },
                check: function () {
                    if (this.enabled && !this.enabling) {
                        var e,
                            t,
                            n = this.map.id;
                        t = this.depExports;
                        var r = this.exports,
                            i = this.factory;
                        if (this.inited) {
                            if (this.error) this.emit("error", this.error);
                            else if (!this.defining) {
                                this.defining = !0;
                                if (1 > this.depCount && !this.defined) {
                                    if (G(i)) {
                                        if ((this.events.error && this.map.isDefine) || g.onError !== ca)
                                            try {
                                                r = x.execCb(n, i, t, r);
                                            } catch (s) {
                                                e = s;
                                            }
                                        else r = x.execCb(n, i, t, r);
                                        this.map.isDefine && void 0 === r && ((t = this.module) ? (r = t.exports) : this.usingExports && (r = this.exports));
                                        if (e) return (e.requireMap = this.map), (e.requireModules = this.map.isDefine ? [this.map.id] : null), (e.requireType = this.map.isDefine ? "define" : "require"), l((this.error = e));
                                    } else r = i;
                                    (this.exports = r), this.map.isDefine && !this.ignore && ((j[n] = r), g.onResourceLoad) && g.onResourceLoad(x, this.map, this.depMaps), h(n), (this.defined = !0);
                                }
                                (this.defining = !1), this.defined && !this.defineEmitted && ((this.defineEmitted = !0), this.emit("defined", this.exports), (this.defineEmitComplete = !0));
                            }
                        } else this.fetch();
                    }
                },
                callPlugin: function () {
                    var e = this.map,
                        r = e.id,
                        i = o(e.prefix);
                    this.depMaps.push(i),
                        f(
                            i,
                            "defined",
                            u(this, function (i) {
                                var s, c;
                                c = m(I, this.map.id);
                                var p = this.map.name,
                                    d = this.map.parentMap ? this.map.parentMap.name : null,
                                    v = x.makeRequire(e.parentMap, { enableBuildCallback: !0 });
                                if (this.map.unnormalized) {
                                    if (
                                        (i.normalize &&
                                            (p =
                                                i.normalize(p, function (e) {
                                                    return n(e, d, !0);
                                                }) || ""),
                                        (i = o(e.prefix + "!" + p, this.map.parentMap)),
                                        f(
                                            i,
                                            "defined",
                                            u(this, function (e) {
                                                this.init(
                                                    [],
                                                    function () {
                                                        return e;
                                                    },
                                                    null,
                                                    { enabled: !0, ignore: !0 }
                                                );
                                            })
                                        ),
                                        (c = m(O, i.id)))
                                    )
                                        this.depMaps.push(i),
                                            this.events.error &&
                                                c.on(
                                                    "error",
                                                    u(this, function (e) {
                                                        this.emit("error", e);
                                                    })
                                                ),
                                            c.enable();
                                } else
                                    c
                                        ? ((this.map.url = x.nameToUrl(c)), this.load())
                                        : ((s = u(this, function (e) {
                                              this.init(
                                                  [],
                                                  function () {
                                                      return e;
                                                  },
                                                  null,
                                                  { enabled: !0 }
                                              );
                                          })),
                                          (s.error = u(this, function (e) {
                                              (this.inited = !0),
                                                  (this.error = e),
                                                  (e.requireModules = [r]),
                                                  B(O, function (e) {
                                                      0 === e.map.id.indexOf(r + "_unnormalized") && h(e.map.id);
                                                  }),
                                                  l(e);
                                          })),
                                          (s.fromText = u(this, function (n, i) {
                                              var u = e.name,
                                                  f = o(u),
                                                  c = M;
                                              i && (n = i), c && (M = !1), a(f), t(A.config, r) && (A.config[u] = A.config[r]);
                                              try {
                                                  g.exec(n);
                                              } catch (h) {
                                                  return l(C("fromtexteval", "fromText eval for " + r + " failed: " + h, h, [r]));
                                              }
                                              c && (M = !0), this.depMaps.push(f), x.completeLoad(u), v([u], s);
                                          })),
                                          i.load(e.name, v, s, A));
                            })
                        ),
                        x.enable(i, this),
                        (this.pluginMaps[i.id] = i);
                },
                enable: function () {
                    (_[this.map.id] = this),
                        (this.enabling = this.enabled = !0),
                        v(
                            this.depMaps,
                            u(this, function (e, n) {
                                var r, i;
                                if ("string" == typeof e) {
                                    (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap)), (this.depMaps[n] = e);
                                    if ((r = m(k, e.id))) {
                                        this.depExports[n] = r(this);
                                        return;
                                    }
                                    (this.depCount += 1),
                                        f(
                                            e,
                                            "defined",
                                            u(this, function (e) {
                                                this.defineDep(n, e), this.check();
                                            })
                                        ),
                                        this.errback && f(e, "error", u(this, this.errback));
                                }
                                (r = e.id), (i = O[r]), !t(k, r) && i && !i.enabled && x.enable(e, this);
                            })
                        ),
                        B(
                            this.pluginMaps,
                            u(this, function (e) {
                                var t = m(O, e.id);
                                t && !t.enabled && x.enable(e, this);
                            })
                        ),
                        (this.enabling = !1),
                        this.check();
                },
                on: function (e, t) {
                    var n = this.events[e];
                    n || (n = this.events[e] = []), n.push(t);
                },
                emit: function (e, t) {
                    v(this.events[e], function (e) {
                        e(t);
                    }),
                        "error" === e && delete this.events[e];
                },
            }),
            (x = {
                config: A,
                contextName: e,
                registry: O,
                defined: j,
                urlFetched: F,
                defQueue: P,
                Module: S,
                makeModuleMap: o,
                nextTick: g.nextTick,
                onError: l,
                configure: function (e) {
                    e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                    var t = A.shim,
                        n = { paths: !0, bundles: !0, config: !0, map: !0 };
                    B(e, function (e, t) {
                        n[t] ? (A[t] || (A[t] = {}), U(A[t], e, !0, !0)) : (A[t] = e);
                    }),
                        e.bundles &&
                            B(e.bundles, function (e, t) {
                                v(e, function (e) {
                                    e !== t && (I[e] = t);
                                });
                            }),
                        e.shim &&
                            (B(e.shim, function (e, n) {
                                H(e) && (e = { deps: e }), (e.exports || e.init) && !e.exportsFn && (e.exportsFn = x.makeShimExports(e)), (t[n] = e);
                            }),
                            (A.shim = t)),
                        e.packages &&
                            v(e.packages, function (e) {
                                var t,
                                    e = "string" == typeof e ? { name: e } : e;
                                (t = e.name), e.location && (A.paths[t] = e.location), (A.pkgs[t] = e.name + "/" + (e.main || "main").replace(ia, "").replace(Q, ""));
                            }),
                        B(O, function (e, t) {
                            !e.inited && !e.map.unnormalized && (e.map = o(t));
                        }),
                        (e.deps || e.callback) && x.require(e.deps || [], e.callback);
                },
                makeShimExports: function (e) {
                    return function () {
                        var t;
                        return e.init && (t = e.init.apply(ba, arguments)), t || (e.exports && da(e.exports));
                    };
                },
                makeRequire: function (i, s) {
                    function u(n, r, f) {
                        var c, h;
                        return (
                            s.enableBuildCallback && r && G(r) && (r.__requireJsBuild = !0),
                            "string" == typeof n
                                ? G(r)
                                    ? l(C("requireargs", "Invalid require call"), f)
                                    : i && t(k, n)
                                    ? k[n](O[i.id])
                                    : g.get
                                    ? g.get(x, n, i, u)
                                    : ((c = o(n, i, !1, !0)), (c = c.id), t(j, c) ? j[c] : l(C("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (i ? "" : ". Use require([])"))))
                                : (w(),
                                  x.nextTick(function () {
                                      w(), (h = a(o(null, i))), (h.skipMap = s.skipMap), h.init(n, r, f, { enabled: !0 }), d();
                                  }),
                                  u)
                        );
                    }
                    return (
                        (s = s || {}),
                        U(u, {
                            isBrowser: z,
                            toUrl: function (e) {
                                var t,
                                    r = e.lastIndexOf("."),
                                    s = e.split("/")[0];
                                return -1 !== r && (("." !== s && ".." !== s) || 1 < r) && ((t = e.substring(r, e.length)), (e = e.substring(0, r))), x.nameToUrl(n(e, i && i.id, !0), t, !0);
                            },
                            defined: function (e) {
                                return t(j, o(e, i, !1, !0).id);
                            },
                            specified: function (e) {
                                return (e = o(e, i, !1, !0).id), t(j, e) || t(O, e);
                            },
                        }),
                        i ||
                            (u.undef = function (e) {
                                c();
                                var t = o(e, i, !0),
                                    n = m(O, e);
                                r(e),
                                    delete j[e],
                                    delete F[t.url],
                                    delete D[e],
                                    T(P, function (t, n) {
                                        t[0] === e && P.splice(n, 1);
                                    }),
                                    n && (n.events.defined && (D[e] = n.events), h(e));
                            }),
                        u
                    );
                },
                enable: function (e) {
                    m(O, e.id) && a(e).enable();
                },
                completeLoad: function (e) {
                    var n,
                        r,
                        s = m(A.shim, e) || {},
                        o = s.exports;
                    for (c(); P.length; ) {
                        r = P.shift();
                        if (null === r[0]) {
                            r[0] = e;
                            if (n) break;
                            n = !0;
                        } else r[0] === e && (n = !0);
                        y(r);
                    }
                    r = m(O, e);
                    if (!n && !t(j, e) && r && !r.inited) {
                        if (A.enforceDefine && (!o || !da(o))) return i(e) ? void 0 : l(C("nodefine", "No define call for " + e, null, [e]));
                        y([e, s.deps || [], s.exportsFn]);
                    }
                    d();
                },
                nameToUrl: function (e, t, n) {
                    var r, i, s;
                    (r = m(A.pkgs, e)) && (e = r);
                    if ((r = m(I, e))) return x.nameToUrl(r, t, n);
                    if (g.jsExtRegExp.test(e)) r = e + (t || "");
                    else {
                        (r = A.paths), (e = e.split("/"));
                        for (i = e.length; 0 < i; i -= 1)
                            if (((s = e.slice(0, i).join("/")), (s = m(r, s)))) {
                                H(s) && (s = s[0]), e.splice(0, i, s);
                                break;
                            }
                        (r = e.join("/")), (r += t || (/^data\:|\?/.test(r) || n ? "" : ".js")), (r = ("/" === r.charAt(0) || r.match(/^[\w\+\.\-]+:/) ? "" : A.baseUrl) + r);
                    }
                    return A.urlArgs ? r + ((-1 === r.indexOf("?") ? "?" : "&") + A.urlArgs) : r;
                },
                load: function (e, t) {
                    g.load(x, e, t);
                },
                execCb: function (e, t, n, r) {
                    return t.apply(r, n);
                },
                onScriptLoad: function (e) {
                    if ("load" === e.type || ja.test((e.currentTarget || e.srcElement).readyState)) (N = null), (e = b(e)), x.completeLoad(e.id);
                },
                onScriptError: function (e) {
                    var t = b(e);
                    if (!i(t.id)) return l(C("scripterror", "Script error for: " + t.id, e, [t.id]));
                },
            }),
            (x.require = x.makeRequire()),
            x
        );
    }
    var g,
        x,
        y,
        D,
        I,
        E,
        N,
        J,
        s,
        O,
        ka = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        la = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        Q = /\.js$/,
        ia = /^\.\//;
    x = Object.prototype;
    var K = x.toString,
        fa = x.hasOwnProperty,
        ha = Array.prototype.splice,
        z = "undefined" != typeof window && "undefined" != typeof navigator && !!window.document,
        ea = !z && "undefined" != typeof importScripts,
        ja = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        Y = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        F = {},
        q = {},
        R = [],
        M = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (G(requirejs)) return;
            (q = requirejs), (requirejs = void 0);
        }
        "undefined" != typeof require && !G(require) && ((q = require), (require = void 0)),
            (g = requirejs = function (e, t, n, r) {
                var i,
                    s = "_";
                return !H(e) && "string" != typeof e && ((i = e), H(t) ? ((e = t), (t = n), (n = r)) : (e = [])), i && i.context && (s = i.context), (r = m(F, s)) || (r = F[s] = g.s.newContext(s)), i && r.configure(i), r.require(e, t, n);
            }),
            (g.config = function (e) {
                return g(e);
            }),
            (g.nextTick =
                "undefined" != typeof setTimeout
                    ? function (e) {
                          setTimeout(e, 4);
                      }
                    : function (e) {
                          e();
                      }),
            require || (require = g),
            (g.version = "2.1.15"),
            (g.jsExtRegExp = /^\/|:|\?|\.js$/),
            (g.isBrowser = z),
            (x = g.s = { contexts: F, newContext: ga }),
            g({}),
            v(["toUrl", "undef", "defined", "specified"], function (e) {
                g[e] = function () {
                    var t = F._;
                    return t.require[e].apply(t, arguments);
                };
            }),
            z && ((y = x.head = document.getElementsByTagName("head")[0]), (D = document.getElementsByTagName("base")[0])) && (y = x.head = D.parentNode),
            (g.onError = ca),
            (g.createNode = function (e) {
                var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                return (t.type = e.scriptType || "text/javascript"), (t.charset = "utf-8"), (t.async = !0), t;
            }),
            (g.load = function (e, t, n) {
                var r = (e && e.config) || {};
                if (z)
                    return (
                        (r = g.createNode(r, t, n)),
                        r.setAttribute("data-requirecontext", e.contextName),
                        r.setAttribute("data-requiremodule", t),
                        r.attachEvent && !(r.attachEvent.toString && 0 > r.attachEvent.toString().indexOf("[native code")) && !Y
                            ? ((M = !0), r.attachEvent("onreadystatechange", e.onScriptLoad))
                            : (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)),
                        (r.src = n),
                        (J = r),
                        D ? y.insertBefore(r, D) : y.appendChild(r),
                        (J = null),
                        r
                    );
                if (ea)
                    try {
                        importScripts(n), e.completeLoad(t);
                    } catch (i) {
                        e.onError(C("importscripts", "importScripts failed for " + t + " at " + n, i, [t]));
                    }
            }),
            z &&
                !q.skipDataMain &&
                T(document.getElementsByTagName("script"), function (e) {
                    y || (y = e.parentNode);
                    if ((I = e.getAttribute("data-main")))
                        return (
                            (s = I),
                            q.baseUrl || ((E = s.split("/")), (s = E.pop()), (O = E.length ? E.join("/") + "/" : "./"), (q.baseUrl = O)),
                            (s = s.replace(Q, "")),
                            g.jsExtRegExp.test(s) && (s = I),
                            (q.deps = q.deps ? q.deps.concat(s) : [s]),
                            !0
                        );
                }),
            (define = function (e, t, n) {
                var r, i;
                "string" != typeof e && ((n = t), (t = e), (e = null)),
                    H(t) || ((n = t), (t = null)),
                    !t &&
                        G(n) &&
                        ((t = []),
                        n.length &&
                            (n
                                .toString()
                                .replace(ka, "")
                                .replace(la, function (e, n) {
                                    t.push(n);
                                }),
                            (t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t)))),
                    M &&
                        ((r = J) ||
                            ((N && "interactive" === N.readyState) ||
                                T(document.getElementsByTagName("script"), function (e) {
                                    if ("interactive" === e.readyState) return (N = e);
                                }),
                            (r = N)),
                        r && (e || (e = r.getAttribute("data-requiremodule")), (i = F[r.getAttribute("data-requirecontext")]))),
                    (i ? i.defQueue : R).push([e, t, n]);
            }),
            (define.amd = { jQuery: !0 }),
            (g.exec = function (b) {
                return eval(b);
            }),
            g(q);
    }
})(this),
    requirejs.config({ baseUrl: "lib" }),
    requirejs(["VirtualCubeMain"], function (e) {
        e.attachVirtualCube();
    }),
    define("virtualcube", function () {}),
    define("J3DI", [], function () {
        var e = (function () {
            return function (e, t) {
                window.setTimeout(e, 1e3 / 60);
            };
        })();
        (J3DIObj = function () {}),
            (J3DIObj.prototype.loaded = !1),
            (J3DIObj.prototype.gl = null),
            (J3DIObj.prototype.url = null),
            (J3DIObj.prototype.normalArray = null),
            (J3DIObj.prototype.textureArray = null),
            (J3DIObj.prototype.vertexArray = null),
            (J3DIObj.prototype.numIndices = null),
            (J3DIObj.prototype.indexArray = null),
            (J3DIObj.prototype.groups = null),
            (J3DIObj.prototype.normalBuffer = null),
            (J3DIObj.prototype.textureBuffer = null),
            (J3DIObj.prototype.vertexBuffer = null),
            (J3DIObj.prototype.indexBuffer = null),
            (J3DIObj.prototype.textureOffsetX = 0),
            (J3DIObj.prototype.textureOffsetY = 0),
            (J3DIObj.prototype.textureScale = 1),
            (J3DIObj.prototype.setTo = function (e) {
                (this.url = e.url),
                    (this.loaded = e.loaded),
                    (this.normalArray = e.normalArray),
                    (this.textureArray = e.textureArray),
                    (this.vertexArray = e.vertexArray),
                    (this.numIndices = e.numIndices),
                    (this.indexArray = e.indexArray),
                    (this.polyIndexArray = e.polyIndexArray),
                    (this.groups = e.groups);
            }),
            (J3DIObj.prototype.clone = function () {
                var e = new J3DIObj();
                return e.setTo(this), e;
            }),
            (J3DIObj.prototype.bindGL = function (e) {
                if (!this.loaded) return;
                this.gl != e && ((this.gl = e), (this.normalBuffer = null), (this.textureBuffer = null), (this.vertexBuffer = null), (this.indexBuffer = null), this.updateGL());
            }),
            (J3DIObj.prototype.updateGL = function () {
                var e = this.gl;
                if (e == null || !this.loaded) return;
                this.normalBuffer == null && (this.normalBuffer = e.createBuffer()),
                    e.bindBuffer(e.ARRAY_BUFFER, this.normalBuffer),
                    e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.normalArray), e.STATIC_DRAW),
                    this.textureBuffer == null && (this.textureBuffer = e.createBuffer()),
                    e.bindBuffer(e.ARRAY_BUFFER, this.textureBuffer),
                    e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.textureArray), e.STATIC_DRAW),
                    this.vertexBuffer == null && (this.vertexBuffer = e.createBuffer()),
                    e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer),
                    e.bufferData(e.ARRAY_BUFFER, new Float32Array(this.vertexArray), e.STATIC_DRAW),
                    this.indexBuffer == null && (this.indexBuffer = e.createBuffer()),
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.indexArray), e.STREAM_DRAW);
            }),
            (J3DIObj.prototype.flipTexture = function (e, t) {
                for (var n = 0; n < this.textureArray.length; n += 2) e && (this.textureArray[n] = 1 - this.textureArray[n]), t && (this.textureArray[n + 1] = 1 - this.textureArray[n + 1]);
            }),
            (J3DIObj.prototype.rotateTexture = function (e) {
                if (!this.loaded) return;
                this.textureArray = this.textureArray.slice(0);
                switch (e % 360) {
                    case 0:
                        break;
                    default:
                    case 90:
                        for (var t = 0; t < this.textureArray.length; t += 2) {
                            var n = this.textureArray[t];
                            (this.textureArray[t] = this.textureArray[t + 1]), (this.textureArray[t + 1] = 1 - n);
                        }
                        break;
                    case 180:
                        for (var t = 0; t < this.textureArray.length; t += 2) (this.textureArray[t] = 1 - this.textureArray[t]), (this.textureArray[t + 1] = 1 - this.textureArray[t + 1]);
                        break;
                    case 270:
                        for (var t = 0; t < this.textureArray.length; t += 2) {
                            var n = this.textureArray[t];
                            (this.textureArray[t] = 1 - this.textureArray[t + 1]), (this.textureArray[t + 1] = n);
                        }
                }
            });
        var t = function (e, t, i, s, o, u, f, l, c, h) {
                var p;
                typeof e == "string" ? (p = document.getElementById(e)) : (p = e);
                var d = w(p, l, h == null);
                if (d == null || typeof d == "string" || d instanceof String) return h && h(d), null;
                n(d, "easywebgl.initWebGL setupWebGL"), (d.console = "console" in window ? window.console : { log: function () {} }), d.programs == null && (d.programs = Array());
                var v = [];
                if (typeof t != "object" || !("length" in t)) t = [t];
                if (typeof i != "object" || !("length" in i)) i = [i];
                return (
                    (v = t.concat(i)),
                    n(d, "easywebgl.initWebGL before loadFiles"),
                    a(
                        v,
                        function (e) {
                            n(d, "easywebgl.initWebGL loadFiles callback");
                            var u = e.length / 2;
                            for (var a = 0; a < u; a++) {
                                n(d, "easywebgl.initWebGL before loadShader " + a);
                                var f = r(d, t[a], e[a], d.VERTEX_SHADER),
                                    l = r(d, i[a], e[a + u], d.FRAGMENT_SHADER);
                                if (!f || !l) return h ? h("Error compiling shaders.") : d.console.log("Error compiling shaders."), null;
                                (d.programs[a] = d.createProgram()), n(d, "easywebgl.initWebGL createProgram " + a);
                                var p = d.programs[a];
                                (p.vshaderId = t[a]), (p.fshaderId = i[a]);
                                if (!p) return null;
                                d.attachShader(p, f), n(d, "easywebgl.initWebGL attach vertex shader"), d.attachShader(p, l), n(d, "easywebgl.initWebGL attach fragment shader"), d.linkProgram(p), n(d, "easywebgl.initWebGL linkProgram");
                                var v = d.getProgramParameter(p, d.LINK_STATUS);
                                if (!v) {
                                    var m = d.getProgramInfoLog(p);
                                    return d.console.log("Error in program linking:" + m), d.deleteProgram(p), d.deleteShader(l), d.deleteShader(f), null;
                                }
                                p.attribs = [];
                                for (var g = 0; g < s.length; ++g) (p.attribs[s[g]] = d.getAttribLocation(p, s[g])), p.attribs[s[g]] != -1;
                                p.uniforms = [];
                                for (var g = 0; g < o.length; ++g) p.uniforms[o[g]] = d.getUniformLocation(p, o[g]);
                                d.useProgram(d.programs[a]), n(d, "easywebgl.initWebGL useProgram " + p.vshaderId + "," + p.fshaderId);
                            }
                            c && c(d);
                        },
                        function (e) {
                            h ? h(e) : d.console.log('Failed to download "' + e + '"');
                        }
                    ),
                    n(d, "easywebgl.initWebGL before clear"),
                    d.clearColor(u[0], u[1], u[2], u[3]),
                    d.clearDepth(f),
                    d.enable(d.DEPTH_TEST),
                    d.enable(d.BLEND),
                    d.blendFunc(d.SRC_ALPHA, d.ONE_MINUS_SRC_ALPHA),
                    n(d, "easywebgl.initWebGL after clear"),
                    d
                );
            },
            n = function (e, t) {
                var n = e.getError();
                if (n != e.NO_ERROR) {
                    var r = "GL Error: " + n + (t == null ? "" : " " + t);
                    e.console.log(r);
                }
            },
            r = function (e, t, r, i) {
                n(e, "easywebgl.loadShader before createShader " + i);
                var s = e.createShader(i);
                n(e, "easywebgl.loadShader createShader " + i);
                if (s == null) return e.console.log("*** Error: unable to create shader '" + t + "' error:" + e.getError()), null;
                e.shaderSource(s, r), e.compileShader(s);
                var o = e.getShaderParameter(s, e.COMPILE_STATUS);
                if (!o) {
                    var u = e.getShaderInfoLog(s);
                    return e.console.log("*** Error compiling shader '" + t + "':" + u), e.deleteShader(s), null;
                }
                return s;
            },
            i = {},
            s = function (e, t) {
                t === null ? delete i[e] : (i[e] = t);
            },
            o = function (t, n, r, s) {
                if (t in i) {
                    var o = function () {
                        r(i[t], n);
                    };
                    e(o);
                    return;
                }
                var u = document.getElementById(t);
                if (u) {
                    if (u.text) {
                        r(u.text, n);
                        return;
                    }
                    t = u.src;
                }
                var a = new XMLHttpRequest();
                a.open("GET", t, !0),
                    (a.onreadystatechange = function () {
                        a.readyState == 4 && (a.status == 200 || a.status == 0 ? r && r(a.responseText, n) : s && s(t));
                    }),
                    a.send(null);
            },
            u = function (e, t, n, r) {
                var i = document.getElementById(e);
                if (i) {
                    if (i.text) {
                        n(i.text, t);
                        return;
                    }
                    e = i.src;
                }
                var s = new XMLHttpRequest();
                s.open("GET", e, !0),
                    (s.onreadystatechange = function () {
                        s.readyState == 4 && (s.status == 200 ? n(s.responseXML, t) : r(e));
                    }),
                    s.send(null);
            },
            a = function (e, t, n) {
                function u(e, n) {
                    (s[n] = e), i++, i == r && t(s);
                }
                var r = e.length,
                    i = 0,
                    s = [];
                for (var a = 0; a < r; a++) o(e[a], a, u, n);
            },
            f = function (e, t, n) {
                t == null && (t = new J3DIVector3(-1, -1, -1)), n == null && (n = new J3DIVector3(1, 1, 1));
                var r = new Float32Array([
                        n[0],
                        n[1],
                        n[2],
                        t[0],
                        n[1],
                        n[2],
                        t[0],
                        t[1],
                        n[2],
                        n[0],
                        t[1],
                        n[2],
                        n[0],
                        n[1],
                        n[2],
                        n[0],
                        t[1],
                        n[2],
                        n[0],
                        t[1],
                        t[2],
                        n[0],
                        n[1],
                        t[2],
                        n[0],
                        n[1],
                        n[2],
                        n[0],
                        n[1],
                        t[2],
                        t[0],
                        n[1],
                        t[2],
                        t[0],
                        n[1],
                        n[2],
                        t[0],
                        n[1],
                        n[2],
                        t[0],
                        n[1],
                        t[2],
                        t[0],
                        t[1],
                        t[2],
                        t[0],
                        t[1],
                        n[2],
                        t[0],
                        t[1],
                        t[2],
                        n[0],
                        t[1],
                        t[2],
                        n[0],
                        t[1],
                        n[2],
                        t[0],
                        t[1],
                        n[2],
                        n[0],
                        t[1],
                        t[2],
                        t[0],
                        t[1],
                        t[2],
                        t[0],
                        n[1],
                        t[2],
                        n[0],
                        n[1],
                        t[2],
                    ]),
                    i = new Float32Array([
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        0,
                        1,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                        0,
                        0,
                        -1,
                    ]),
                    s = new Float32Array([1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1]),
                    o = new Uint16Array([0, 2, 1, 0, 3, 2, 4, 6, 5, 4, 7, 6, 8, 10, 9, 8, 11, 10, 12, 14, 13, 12, 15, 14, 16, 18, 17, 16, 19, 18, 20, 22, 21, 20, 23, 22]),
                    u = {};
                return (
                    (u.normalBuffer = e.createBuffer()),
                    e.bindBuffer(e.ARRAY_BUFFER, u.normalBuffer),
                    e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW),
                    (u.texCoordObject = e.createBuffer()),
                    e.bindBuffer(e.ARRAY_BUFFER, u.texCoordObject),
                    e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW),
                    (u.vertexBuffer = e.createBuffer()),
                    e.bindBuffer(e.ARRAY_BUFFER, u.vertexBuffer),
                    e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW),
                    e.bindBuffer(e.ARRAY_BUFFER, null),
                    (u.indexBuffer = e.createBuffer()),
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, u.indexBuffer),
                    e.bufferData(e.ELEMENT_ARRAY_BUFFER, o, e.STATIC_DRAW),
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null),
                    (u.numIndices = o.length),
                    (u.loaded = !0),
                    u
                );
            },
            l = function (e, t, n, r) {
                var i = [],
                    s = [],
                    o = [],
                    u = [];
                for (var a = 0; a <= n; ++a)
                    for (var f = 0; f <= r; ++f) {
                        var l = (a * Math.PI) / n,
                            c = (f * 2 * Math.PI) / r,
                            h = Math.sin(l),
                            p = Math.sin(c),
                            d = Math.cos(l),
                            v = Math.cos(c),
                            m = v * h,
                            g = d,
                            y = p * h,
                            b = 1 - f / r,
                            w = a / n;
                        s.push(m), s.push(g), s.push(y), o.push(b), o.push(w), i.push(t * m), i.push(t * g), i.push(t * y);
                    }
                for (var a = 0; a < n; ++a)
                    for (var f = 0; f < r; ++f) {
                        var E = a * (r + 1) + f,
                            S = E + r + 1;
                        u.push(E), u.push(S), u.push(E + 1), u.push(S), u.push(S + 1), u.push(E + 1);
                    }
                var x = {};
                return (
                    e === null
                        ? ((x.normalArray = s), (x.textureArray = o), (x.vertexArray = i), (x.numIndices = u.length), (x.indexArray = u), (x.loaded = !0))
                        : ((x.normalBuffer = e.createBuffer()),
                          e.bindBuffer(e.ARRAY_BUFFER, x.normalBuffer),
                          e.bufferData(e.ARRAY_BUFFER, new Float32Array(s), e.STATIC_DRAW),
                          (x.texCoordObject = e.createBuffer()),
                          e.bindBuffer(e.ARRAY_BUFFER, x.texCoordObject),
                          e.bufferData(e.ARRAY_BUFFER, new Float32Array(o), e.STATIC_DRAW),
                          (x.vertexBuffer = e.createBuffer()),
                          e.bindBuffer(e.ARRAY_BUFFER, x.vertexBuffer),
                          e.bufferData(e.ARRAY_BUFFER, new Float32Array(i), e.STATIC_DRAW),
                          (x.numIndices = u.length),
                          (x.indexBuffer = e.createBuffer()),
                          e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, x.indexBuffer),
                          e.bufferData(e.ELEMENT_ARRAY_BUFFER, new Uint16Array(u), e.STREAM_DRAW),
                          (x.loaded = !0)),
                    x
                );
            },
            c = function (e, t, n, r) {
                var i = new J3DIObj();
                (i.gl = e), (i.url = t);
                var s = function (e, t) {
                    h(t, e, n, r);
                };
                return o(t, i, s, r), i;
            },
            h = function (e, t, r, i) {
                e.gl != null && n(e.gl, "easywebgl.doLoadObj... " + e.url);
                var s = !1,
                    o = [],
                    u = [],
                    a = [],
                    f = [],
                    l = [],
                    c = [],
                    h = [],
                    p = [],
                    d = {},
                    v = 0,
                    m = new Array(4),
                    g = {},
                    y = [0, 0];
                g._unnamed = y;
                var b = !1,
                    w = t.split("\n");
                for (var E in w) {
                    var S = w[E].replace(/[ \t]+/g, " ").replace(/\s\s*$/, "");
                    if (S[0] == "#") continue;
                    var x = S.split(" ");
                    if (x[0] == "g") (y = [f.length, 0]), x[1] in g && (x[1] += " $" + E), (g[x[1]] = y);
                    else if (x[0] == "v") c.push(parseFloat(x[1])), c.push(parseFloat(x[2])), c.push(-parseFloat(x[3]));
                    else if (x[0] == "vt") p.push(parseFloat(x[1])), p.push(parseFloat(x[2]));
                    else if (x[0] == "vn") h.push(-parseFloat(x[1])), h.push(-parseFloat(x[2])), h.push(parseFloat(x[3]));
                    else if (x[0] == "f") {
                        if (x.length < 4) {
                            console !== undefined && console.log("*** Error: face '" + S + "' not handled");
                            continue;
                        }
                        for (var T = 1; T < x.length; T++) {
                            if (!(x[T] in d)) {
                                var N = x[T].split("/"),
                                    C,
                                    k,
                                    L;
                                if (N.length == 1) (C = parseInt(N[0]) - 1), (k = C), (L = C);
                                else {
                                    if (!(N.length = 3)) return console !== undefined && console.log("*** Error: did not understand face '" + x[T] + "'"), null;
                                    (C = parseInt(N[0]) - 1), (L = parseInt(N[1]) - 1), (k = parseInt(N[2]) - 1);
                                }
                                var A = 0,
                                    O = 0,
                                    M = 0;
                                C * 3 + 2 < c.length && ((A = c[C * 3]), (O = c[C * 3 + 1]), (M = c[C * 3 + 2])),
                                    o.push(A),
                                    o.push(O),
                                    o.push(M),
                                    (A = 0),
                                    (O = 0),
                                    L * 2 + 1 < p.length && ((A = p[L * 2]), (O = p[L * 2 + 1])),
                                    a.push(A),
                                    a.push(1 - O),
                                    (A = 0),
                                    (O = 0),
                                    (M = 1),
                                    k * 3 + 2 < h.length ? ((A = h[k * 3]), (O = h[k * 3 + 1]), (M = h[k * 3 + 2])) : (b = !0),
                                    u.push(A),
                                    u.push(O),
                                    u.push(M),
                                    (d[x[T]] = v++);
                            }
                            m[T - 1] = d[x[T]];
                        }
                        var _ = new Array(x.length - 1);
                        for (var D = 0; D < x.length - 1; D++) _[D] = m[D];
                        l.push(_);
                        for (var D = 2; D < x.length - 1; D++) f.push(m[0]), f.push(m[D - 1]), f.push(m[D]), (y[1] += 3);
                    }
                }
                if (b) {
                    for (var T = 0; T < u.length; T++) u[T] = 0;
                    var P = new J3DIVector3(),
                        H = new J3DIVector3(),
                        B = new J3DIVector3(),
                        j = new J3DIVector3(),
                        F = new J3DIVector3(),
                        I = new J3DIVector3(),
                        q = new J3DIVector3(),
                        R = new J3DIVector3();
                    for (var T = 0; T < f.length; T += 3) {
                        P.load(o[f[T] * 3], o[f[T] * 3 + 1], o[f[T] * 3 + 2]),
                            H.load(o[f[T + 1] * 3], o[f[T + 1] * 3 + 1], o[f[T + 1] * 3 + 2]),
                            B.load(o[f[T + 2] * 3], o[f[T + 2] * 3 + 1], o[f[T + 2] * 3 + 2]),
                            j.load(H),
                            j.subtract(P),
                            F.load(B),
                            F.subtract(P),
                            q.load(P),
                            q.subtract(H),
                            I.load(B),
                            I.subtract(H),
                            R.load(j),
                            R.cross(F),
                            R.multiply(0.5),
                            j.normalize(),
                            F.normalize();
                        var U = Math.acos(Math.abs(j.dot(F)));
                        q.normalize(), I.normalize();
                        var z = Math.acos(Math.abs(I.dot(q))),
                            W = Math.PI - z - U;
                        (u[f[T] * 3] += R[0] * U),
                            (u[f[T] * 3 + 1] += R[1] * U),
                            (u[f[T] * 3 + 2] += R[2] * U),
                            (u[f[T + 1] * 3] += R[0] * z),
                            (u[f[T + 1] * 3 + 1] += R[1] * z),
                            (u[f[T + 1] * 3 + 2] += R[2] * z),
                            (u[f[T + 2] * 3] += R[0] * W),
                            (u[f[T + 2] * 3 + 1] += R[1] * W),
                            (u[f[T + 2] * 3 + 2] += R[2] * W);
                    }
                    for (var T = 0; T < u.length; T += 3) {
                        var X = Math.sqrt(u[T] * u[T] + u[T + 1] * u[T + 1] + u[T + 2] * u[T + 2]);
                        (u[T] /= X), (u[T + 1] /= X), (u[T + 2] /= X);
                    }
                }
                (e.normalArray = u), (e.textureArray = a), (e.vertexArray = o), (e.numIndices = f.length), (e.indexArray = f), (e.polyIndexArray = l), (e.groups = g), (e.loaded = !0), e.updateGL(), r && r(e);
            },
            p = function (e, t, n, r) {
                if (e == null) {
                    var i = {};
                    return (
                        (i.image = new Image()),
                        (i.image.onload = function () {
                            n && n();
                        }),
                        (i.image.src = t),
                        i
                    );
                }
                var i = e.createTexture();
                return (
                    (i.image = new Image()),
                    (i.image.onload = function () {
                        d(e, i.image, i, n, r);
                    }),
                    (i.image.src = t),
                    i
                );
            },
            d = function (e, t, n, r, i) {
                e.bindTexture(e.TEXTURE_2D, n),
                    e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT),
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT),
                    e.generateMipmap(e.TEXTURE_2D),
                    e.bindTexture(e.TEXTURE_2D, null),
                    r && r();
            },
            v = function (e) {
                return '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">' + e + "</div>" + "</div>" + "</td></tr></table>";
            },
            m = "This page requires a browser that supports WebGL.",
            g = "" + m + "<br/>" + '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>',
            y = "It doesn't appear your computer can support WebGL.",
            b = "" + y + "<br/>" + '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>',
            w = function (e, t, n) {
                function r(t) {
                    var n = e.parentNode;
                    n && (n.innerHTML = v(t));
                }
                if (!window.WebGLRenderingContext) return n && r(g), m;
                var i = E(e, t);
                return i ? i : (n && r(b), y);
            },
            E = function (e, t) {
                var n = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"],
                    r = null;
                for (var i = 0; i < n.length; ++i) {
                    try {
                        r = e.getContext(n[i], t);
                    } catch (s) {}
                    if (r) break;
                }
                return r;
            };
        return {
            newJ3DIObj: function () {
                return new J3DIObj();
            },
            initWebGL: t,
            checkGLError: n,
            loadShader: r,
            loadFile: o,
            loadXML: u,
            loadFiles: a,
            makeBox: f,
            makeSphere: l,
            loadObj: c,
            loadImageTexture: p,
            create3DContext: E,
            setupWebGL: w,
            setFileData: function (e, t) {
                s(e, t);
            },
            requestAnimFrame: e,
        };
    }),
    (J3DIHasCSSMatrix = !1),
    (J3DIHasCSSMatrixCopy = !1);
if (("WebKitCSSMatrix" in window && "media" in window && window.media.matchMedium("(-webkit-transform-3d)")) || ("styleMedia" in window && window.styleMedia.matchMedium("(-webkit-transform-3d)")))
    (J3DIHasCSSMatrix = !0), "copy" in WebKitCSSMatrix.prototype && (J3DIHasCSSMatrixCopy = !0);
(J3DIMatrix4 = function (e) {
    J3DIHasCSSMatrix ? (this.$matrix = new WebKitCSSMatrix()) : (this.$matrix = new Object());
    if (typeof e == "object") {
        if ("length" in e && e.length >= 16) {
            this.load(e);
            return;
        }
        if (e instanceof J3DIMatrix4) {
            this.load(e);
            return;
        }
    }
    this.makeIdentity();
}),
    (J3DIMatrix4.prototype.load = function () {
        if (arguments.length == 1 && typeof arguments[0] == "object") {
            var e;
            if (arguments[0] instanceof J3DIMatrix4) {
                (e = arguments[0].$matrix),
                    (this.$matrix.m11 = e.m11),
                    (this.$matrix.m12 = e.m12),
                    (this.$matrix.m13 = e.m13),
                    (this.$matrix.m14 = e.m14),
                    (this.$matrix.m21 = e.m21),
                    (this.$matrix.m22 = e.m22),
                    (this.$matrix.m23 = e.m23),
                    (this.$matrix.m24 = e.m24),
                    (this.$matrix.m31 = e.m31),
                    (this.$matrix.m32 = e.m32),
                    (this.$matrix.m33 = e.m33),
                    (this.$matrix.m34 = e.m34),
                    (this.$matrix.m41 = e.m41),
                    (this.$matrix.m42 = e.m42),
                    (this.$matrix.m43 = e.m43),
                    (this.$matrix.m44 = e.m44);
                return;
            }
            e = arguments[0];
            if ("length" in e && e.length >= 16) {
                (this.$matrix.m11 = e[0]),
                    (this.$matrix.m12 = e[1]),
                    (this.$matrix.m13 = e[2]),
                    (this.$matrix.m14 = e[3]),
                    (this.$matrix.m21 = e[4]),
                    (this.$matrix.m22 = e[5]),
                    (this.$matrix.m23 = e[6]),
                    (this.$matrix.m24 = e[7]),
                    (this.$matrix.m31 = e[8]),
                    (this.$matrix.m32 = e[9]),
                    (this.$matrix.m33 = e[10]),
                    (this.$matrix.m34 = e[11]),
                    (this.$matrix.m41 = e[12]),
                    (this.$matrix.m42 = e[13]),
                    (this.$matrix.m43 = e[14]),
                    (this.$matrix.m44 = e[15]);
                return;
            }
        }
        return this.makeIdentity(), this;
    }),
    (J3DIMatrix4.prototype.getAsArray = function () {
        return [
            this.$matrix.m11,
            this.$matrix.m12,
            this.$matrix.m13,
            this.$matrix.m14,
            this.$matrix.m21,
            this.$matrix.m22,
            this.$matrix.m23,
            this.$matrix.m24,
            this.$matrix.m31,
            this.$matrix.m32,
            this.$matrix.m33,
            this.$matrix.m34,
            this.$matrix.m41,
            this.$matrix.m42,
            this.$matrix.m43,
            this.$matrix.m44,
        ];
    }),
    (J3DIMatrix4.prototype.toString = function () {
        var e = this.$matrix;
        return (
            "[" +
            e.m11 +
            " " +
            e.m12 +
            " " +
            e.m13 +
            " " +
            e.m14 +
            ";" +
            e.m21 +
            " " +
            e.m22 +
            " " +
            e.m23 +
            " " +
            e.m24 +
            ";" +
            e.m31 +
            " " +
            e.m32 +
            " " +
            e.m33 +
            " " +
            e.m34 +
            ";" +
            e.m41 +
            " " +
            e.m42 +
            " " +
            e.m43 +
            " " +
            e.m44 +
            ";" +
            "]"
        );
    }),
    (J3DIMatrix4.prototype.getAsFloat32Array = function () {
        if (J3DIHasCSSMatrixCopy) {
            var e = new Float32Array(16);
            return this.$matrix.copy(e), e;
        }
        return new Float32Array(this.getAsArray());
    }),
    (J3DIMatrix4.prototype.setUniform = function (e, t, n) {
        J3DIMatrix4.setUniformArray == undefined && ((J3DIMatrix4.setUniformWebGLArray = new Float32Array(16)), (J3DIMatrix4.setUniformArray = new Array(16))),
            J3DIHasCSSMatrixCopy
                ? this.$matrix.copy(J3DIMatrix4.setUniformWebGLArray)
                : ((J3DIMatrix4.setUniformArray[0] = this.$matrix.m11),
                  (J3DIMatrix4.setUniformArray[1] = this.$matrix.m12),
                  (J3DIMatrix4.setUniformArray[2] = this.$matrix.m13),
                  (J3DIMatrix4.setUniformArray[3] = this.$matrix.m14),
                  (J3DIMatrix4.setUniformArray[4] = this.$matrix.m21),
                  (J3DIMatrix4.setUniformArray[5] = this.$matrix.m22),
                  (J3DIMatrix4.setUniformArray[6] = this.$matrix.m23),
                  (J3DIMatrix4.setUniformArray[7] = this.$matrix.m24),
                  (J3DIMatrix4.setUniformArray[8] = this.$matrix.m31),
                  (J3DIMatrix4.setUniformArray[9] = this.$matrix.m32),
                  (J3DIMatrix4.setUniformArray[10] = this.$matrix.m33),
                  (J3DIMatrix4.setUniformArray[11] = this.$matrix.m34),
                  (J3DIMatrix4.setUniformArray[12] = this.$matrix.m41),
                  (J3DIMatrix4.setUniformArray[13] = this.$matrix.m42),
                  (J3DIMatrix4.setUniformArray[14] = this.$matrix.m43),
                  (J3DIMatrix4.setUniformArray[15] = this.$matrix.m44),
                  J3DIMatrix4.setUniformWebGLArray.set(J3DIMatrix4.setUniformArray)),
            e.uniformMatrix4fv(t, n, J3DIMatrix4.setUniformWebGLArray);
    }),
    (J3DIMatrix4.prototype.makeIdentity = function () {
        (this.$matrix.m11 = 1),
            (this.$matrix.m12 = 0),
            (this.$matrix.m13 = 0),
            (this.$matrix.m14 = 0),
            (this.$matrix.m21 = 0),
            (this.$matrix.m22 = 1),
            (this.$matrix.m23 = 0),
            (this.$matrix.m24 = 0),
            (this.$matrix.m31 = 0),
            (this.$matrix.m32 = 0),
            (this.$matrix.m33 = 1),
            (this.$matrix.m34 = 0),
            (this.$matrix.m41 = 0),
            (this.$matrix.m42 = 0),
            (this.$matrix.m43 = 0),
            (this.$matrix.m44 = 1);
    }),
    (J3DIMatrix4.prototype.transpose = function () {
        var e = this.$matrix.m12;
        return (
            (this.$matrix.m12 = this.$matrix.m21),
            (this.$matrix.m21 = e),
            (e = this.$matrix.m13),
            (this.$matrix.m13 = this.$matrix.m31),
            (this.$matrix.m31 = e),
            (e = this.$matrix.m14),
            (this.$matrix.m14 = this.$matrix.m41),
            (this.$matrix.m41 = e),
            (e = this.$matrix.m23),
            (this.$matrix.m23 = this.$matrix.m32),
            (this.$matrix.m32 = e),
            (e = this.$matrix.m24),
            (this.$matrix.m24 = this.$matrix.m42),
            (this.$matrix.m42 = e),
            (e = this.$matrix.m34),
            (this.$matrix.m34 = this.$matrix.m43),
            (this.$matrix.m43 = e),
            this
        );
    }),
    (J3DIMatrix4.prototype.invert = function () {
        if (J3DIHasCSSMatrix) {
            this.$matrix = this.$matrix.inverse();
            return;
        }
        var e = this._determinant4x4();
        if (Math.abs(e) < 1e-8) return null;
        this._makeAdjoint(),
            (this.$matrix.m11 /= e),
            (this.$matrix.m12 /= e),
            (this.$matrix.m13 /= e),
            (this.$matrix.m14 /= e),
            (this.$matrix.m21 /= e),
            (this.$matrix.m22 /= e),
            (this.$matrix.m23 /= e),
            (this.$matrix.m24 /= e),
            (this.$matrix.m31 /= e),
            (this.$matrix.m32 /= e),
            (this.$matrix.m33 /= e),
            (this.$matrix.m34 /= e),
            (this.$matrix.m41 /= e),
            (this.$matrix.m42 /= e),
            (this.$matrix.m43 /= e),
            (this.$matrix.m44 /= e);
    }),
    (J3DIMatrix4.prototype.translate = function (e, t, n) {
        if (typeof e == "object" && ("length" in e || "vectorLength" in e)) {
            var r = e;
            (e = r[0]), (t = r[1]), (n = r[2]);
        } else e == undefined && (e = 0), t == undefined && (t = 0), n == undefined && (n = 0);
        if (J3DIHasCSSMatrix) {
            this.$matrix = this.$matrix.translate(e, t, n);
            return;
        }
        var i = new J3DIMatrix4();
        return (i.$matrix.m41 = e), (i.$matrix.m42 = t), (i.$matrix.m43 = n), this.multiply(i), this;
    }),
    (J3DIMatrix4.prototype.scale = function (e, t, n) {
        if (typeof e == "object" && "length" in e) {
            var r = e;
            (e = r[0]), (t = r[1]), (n = r[2]);
        } else e == undefined && (e = 1), n == undefined ? (t == undefined ? ((t = e), (n = e)) : (n = 1)) : t == undefined && (t = e);
        if (J3DIHasCSSMatrix) return (this.$matrix = this.$matrix.scale(e, t, n)), this;
        var i = new J3DIMatrix4();
        return (i.$matrix.m11 = e), (i.$matrix.m22 = t), (i.$matrix.m33 = n), this.multiply(i), this;
    }),
    (J3DIMatrix4.prototype.rotate = function (e, t, n, r) {
        if (typeof t == "object" && "length" in t) {
            var i = t;
            (t = i[0]), (n = i[1]), (r = i[2]);
        } else if (arguments.length == 1) (t = 0), (n = 0), (r = 1);
        else if (arguments.length == 3) {
            this.rotate(e, 1, 0, 0), this.rotate(t, 0, 1, 0), this.rotate(n, 0, 0, 1);
            return;
        }
        if (J3DIHasCSSMatrix) return (this.$matrix = this.$matrix.rotateAxisAngle(t, n, r, e)), this;
        (e = (e / 180) * Math.PI), (e /= 2);
        var s = Math.sin(e),
            o = Math.cos(e),
            u = s * s,
            a = Math.sqrt(t * t + n * n + r * r);
        a == 0 ? ((t = 0), (n = 0), (r = 1)) : a != 1 && ((t /= a), (n /= a), (r /= a));
        var f = new J3DIMatrix4();
        if (t == 1 && n == 0 && r == 0)
            (f.$matrix.m11 = 1),
                (f.$matrix.m12 = 0),
                (f.$matrix.m13 = 0),
                (f.$matrix.m21 = 0),
                (f.$matrix.m22 = 1 - 2 * u),
                (f.$matrix.m23 = 2 * s * o),
                (f.$matrix.m31 = 0),
                (f.$matrix.m32 = -2 * s * o),
                (f.$matrix.m33 = 1 - 2 * u),
                (f.$matrix.m14 = f.$matrix.m24 = f.$matrix.m34 = 0),
                (f.$matrix.m41 = f.$matrix.m42 = f.$matrix.m43 = 0),
                (f.$matrix.m44 = 1);
        else if (t == 0 && n == 1 && r == 0)
            (f.$matrix.m11 = 1 - 2 * u),
                (f.$matrix.m12 = 0),
                (f.$matrix.m13 = -2 * s * o),
                (f.$matrix.m21 = 0),
                (f.$matrix.m22 = 1),
                (f.$matrix.m23 = 0),
                (f.$matrix.m31 = 2 * s * o),
                (f.$matrix.m32 = 0),
                (f.$matrix.m33 = 1 - 2 * u),
                (f.$matrix.m14 = f.$matrix.m24 = f.$matrix.m34 = 0),
                (f.$matrix.m41 = f.$matrix.m42 = f.$matrix.m43 = 0),
                (f.$matrix.m44 = 1);
        else if (t == 0 && n == 0 && r == 1)
            (f.$matrix.m11 = 1 - 2 * u),
                (f.$matrix.m12 = 2 * s * o),
                (f.$matrix.m13 = 0),
                (f.$matrix.m21 = -2 * s * o),
                (f.$matrix.m22 = 1 - 2 * u),
                (f.$matrix.m23 = 0),
                (f.$matrix.m31 = 0),
                (f.$matrix.m32 = 0),
                (f.$matrix.m33 = 1),
                (f.$matrix.m14 = f.$matrix.m24 = f.$matrix.m34 = 0),
                (f.$matrix.m41 = f.$matrix.m42 = f.$matrix.m43 = 0),
                (f.$matrix.m44 = 1);
        else {
            var l = t * t,
                c = n * n,
                h = r * r;
            (f.$matrix.m11 = 1 - 2 * (c + h) * u),
                (f.$matrix.m12 = 2 * (t * n * u + r * s * o)),
                (f.$matrix.m13 = 2 * (t * r * u - n * s * o)),
                (f.$matrix.m21 = 2 * (n * t * u - r * s * o)),
                (f.$matrix.m22 = 1 - 2 * (h + l) * u),
                (f.$matrix.m23 = 2 * (n * r * u + t * s * o)),
                (f.$matrix.m31 = 2 * (r * t * u + n * s * o)),
                (f.$matrix.m32 = 2 * (r * n * u - t * s * o)),
                (f.$matrix.m33 = 1 - 2 * (l + c) * u),
                (f.$matrix.m14 = f.$matrix.m24 = f.$matrix.m34 = 0),
                (f.$matrix.m41 = f.$matrix.m42 = f.$matrix.m43 = 0),
                (f.$matrix.m44 = 1);
        }
        return this.multiply(f), this;
    }),
    (J3DIMatrix4.prototype.multiply = function (e) {
        if (typeof e == "object" && "$matrix" in e) {
            if (J3DIHasCSSMatrix) return (this.$matrix = this.$matrix.multiply(e.$matrix)), this;
            var t = e.$matrix.m11 * this.$matrix.m11 + e.$matrix.m12 * this.$matrix.m21 + e.$matrix.m13 * this.$matrix.m31 + e.$matrix.m14 * this.$matrix.m41,
                n = e.$matrix.m11 * this.$matrix.m12 + e.$matrix.m12 * this.$matrix.m22 + e.$matrix.m13 * this.$matrix.m32 + e.$matrix.m14 * this.$matrix.m42,
                r = e.$matrix.m11 * this.$matrix.m13 + e.$matrix.m12 * this.$matrix.m23 + e.$matrix.m13 * this.$matrix.m33 + e.$matrix.m14 * this.$matrix.m43,
                i = e.$matrix.m11 * this.$matrix.m14 + e.$matrix.m12 * this.$matrix.m24 + e.$matrix.m13 * this.$matrix.m34 + e.$matrix.m14 * this.$matrix.m44,
                s = e.$matrix.m21 * this.$matrix.m11 + e.$matrix.m22 * this.$matrix.m21 + e.$matrix.m23 * this.$matrix.m31 + e.$matrix.m24 * this.$matrix.m41,
                o = e.$matrix.m21 * this.$matrix.m12 + e.$matrix.m22 * this.$matrix.m22 + e.$matrix.m23 * this.$matrix.m32 + e.$matrix.m24 * this.$matrix.m42,
                u = e.$matrix.m21 * this.$matrix.m13 + e.$matrix.m22 * this.$matrix.m23 + e.$matrix.m23 * this.$matrix.m33 + e.$matrix.m24 * this.$matrix.m43,
                a = e.$matrix.m21 * this.$matrix.m14 + e.$matrix.m22 * this.$matrix.m24 + e.$matrix.m23 * this.$matrix.m34 + e.$matrix.m24 * this.$matrix.m44,
                f = e.$matrix.m31 * this.$matrix.m11 + e.$matrix.m32 * this.$matrix.m21 + e.$matrix.m33 * this.$matrix.m31 + e.$matrix.m34 * this.$matrix.m41,
                l = e.$matrix.m31 * this.$matrix.m12 + e.$matrix.m32 * this.$matrix.m22 + e.$matrix.m33 * this.$matrix.m32 + e.$matrix.m34 * this.$matrix.m42,
                c = e.$matrix.m31 * this.$matrix.m13 + e.$matrix.m32 * this.$matrix.m23 + e.$matrix.m33 * this.$matrix.m33 + e.$matrix.m34 * this.$matrix.m43,
                h = e.$matrix.m31 * this.$matrix.m14 + e.$matrix.m32 * this.$matrix.m24 + e.$matrix.m33 * this.$matrix.m34 + e.$matrix.m34 * this.$matrix.m44,
                p = e.$matrix.m41 * this.$matrix.m11 + e.$matrix.m42 * this.$matrix.m21 + e.$matrix.m43 * this.$matrix.m31 + e.$matrix.m44 * this.$matrix.m41,
                d = e.$matrix.m41 * this.$matrix.m12 + e.$matrix.m42 * this.$matrix.m22 + e.$matrix.m43 * this.$matrix.m32 + e.$matrix.m44 * this.$matrix.m42,
                v = e.$matrix.m41 * this.$matrix.m13 + e.$matrix.m42 * this.$matrix.m23 + e.$matrix.m43 * this.$matrix.m33 + e.$matrix.m44 * this.$matrix.m43,
                m = e.$matrix.m41 * this.$matrix.m14 + e.$matrix.m42 * this.$matrix.m24 + e.$matrix.m43 * this.$matrix.m34 + e.$matrix.m44 * this.$matrix.m44;
            (this.$matrix.m11 = t),
                (this.$matrix.m12 = n),
                (this.$matrix.m13 = r),
                (this.$matrix.m14 = i),
                (this.$matrix.m21 = s),
                (this.$matrix.m22 = o),
                (this.$matrix.m23 = u),
                (this.$matrix.m24 = a),
                (this.$matrix.m31 = f),
                (this.$matrix.m32 = l),
                (this.$matrix.m33 = c),
                (this.$matrix.m34 = h),
                (this.$matrix.m41 = p),
                (this.$matrix.m42 = d),
                (this.$matrix.m43 = v),
                (this.$matrix.m44 = m);
        } else
            (this.$matrix.m11 *= e),
                (this.$matrix.m12 *= e),
                (this.$matrix.m13 *= e),
                (this.$matrix.m14 *= e),
                (this.$matrix.m21 *= e),
                (this.$matrix.m22 *= e),
                (this.$matrix.m23 *= e),
                (this.$matrix.m24 *= e),
                (this.$matrix.m31 *= e),
                (this.$matrix.m32 *= e),
                (this.$matrix.m33 *= e),
                (this.$matrix.m34 *= e),
                (this.$matrix.m41 *= e),
                (this.$matrix.m42 *= e),
                (this.$matrix.m43 *= e),
                (this.$matrix.m44 *= e);
        return this;
    }),
    (J3DIMatrix4.prototype.premultiply = function (e) {
        if (typeof n == "object" && "$matrix" in e) {
            if (J3DIHasCSSMatrix) return (this.$matrix = e.$matrix.multiply(this.$matrix)), t;
            var t = e,
                n = this,
                r = n.$matrix.m11 * t.$matrix.m11 + n.$matrix.m12 * t.$matrix.m21 + n.$matrix.m13 * t.$matrix.m31 + n.$matrix.m14 * t.$matrix.m41,
                i = n.$matrix.m11 * t.$matrix.m12 + n.$matrix.m12 * t.$matrix.m22 + n.$matrix.m13 * t.$matrix.m32 + n.$matrix.m14 * t.$matrix.m42,
                s = n.$matrix.m11 * t.$matrix.m13 + n.$matrix.m12 * t.$matrix.m23 + n.$matrix.m13 * t.$matrix.m33 + n.$matrix.m14 * t.$matrix.m43,
                o = n.$matrix.m11 * t.$matrix.m14 + n.$matrix.m12 * t.$matrix.m24 + n.$matrix.m13 * t.$matrix.m34 + n.$matrix.m14 * t.$matrix.m44,
                u = n.$matrix.m21 * t.$matrix.m11 + n.$matrix.m22 * t.$matrix.m21 + n.$matrix.m23 * t.$matrix.m31 + n.$matrix.m24 * t.$matrix.m41,
                a = n.$matrix.m21 * t.$matrix.m12 + n.$matrix.m22 * t.$matrix.m22 + n.$matrix.m23 * t.$matrix.m32 + n.$matrix.m24 * t.$matrix.m42,
                f = n.$matrix.m21 * t.$matrix.m13 + n.$matrix.m22 * t.$matrix.m23 + n.$matrix.m23 * t.$matrix.m33 + n.$matrix.m24 * t.$matrix.m43,
                l = n.$matrix.m21 * t.$matrix.m14 + n.$matrix.m22 * t.$matrix.m24 + n.$matrix.m23 * t.$matrix.m34 + n.$matrix.m24 * t.$matrix.m44,
                c = n.$matrix.m31 * t.$matrix.m11 + n.$matrix.m32 * t.$matrix.m21 + n.$matrix.m33 * t.$matrix.m31 + n.$matrix.m34 * t.$matrix.m41,
                h = n.$matrix.m31 * t.$matrix.m12 + n.$matrix.m32 * t.$matrix.m22 + n.$matrix.m33 * t.$matrix.m32 + n.$matrix.m34 * t.$matrix.m42,
                p = n.$matrix.m31 * t.$matrix.m13 + n.$matrix.m32 * t.$matrix.m23 + n.$matrix.m33 * t.$matrix.m33 + n.$matrix.m34 * t.$matrix.m43,
                d = n.$matrix.m31 * t.$matrix.m14 + n.$matrix.m32 * t.$matrix.m24 + n.$matrix.m33 * t.$matrix.m34 + n.$matrix.m34 * t.$matrix.m44,
                v = n.$matrix.m41 * t.$matrix.m11 + n.$matrix.m42 * t.$matrix.m21 + n.$matrix.m43 * t.$matrix.m31 + n.$matrix.m44 * t.$matrix.m41,
                m = n.$matrix.m41 * t.$matrix.m12 + n.$matrix.m42 * t.$matrix.m22 + n.$matrix.m43 * t.$matrix.m32 + n.$matrix.m44 * t.$matrix.m42,
                g = n.$matrix.m41 * t.$matrix.m13 + n.$matrix.m42 * t.$matrix.m23 + n.$matrix.m43 * t.$matrix.m33 + n.$matrix.m44 * t.$matrix.m43,
                y = n.$matrix.m41 * t.$matrix.m14 + n.$matrix.m42 * t.$matrix.m24 + n.$matrix.m43 * t.$matrix.m34 + n.$matrix.m44 * t.$matrix.m44;
            (this.$matrix.m11 = r),
                (this.$matrix.m12 = i),
                (this.$matrix.m13 = s),
                (this.$matrix.m14 = o),
                (this.$matrix.m21 = u),
                (this.$matrix.m22 = a),
                (this.$matrix.m23 = f),
                (this.$matrix.m24 = l),
                (this.$matrix.m31 = c),
                (this.$matrix.m32 = h),
                (this.$matrix.m33 = p),
                (this.$matrix.m34 = d),
                (this.$matrix.m41 = v),
                (this.$matrix.m42 = m),
                (this.$matrix.m43 = g),
                (this.$matrix.m44 = y);
        } else
            (this.$matrix.m11 *= e),
                (this.$matrix.m12 *= e),
                (this.$matrix.m13 *= e),
                (this.$matrix.m14 *= e),
                (this.$matrix.m21 *= e),
                (this.$matrix.m22 *= e),
                (this.$matrix.m23 *= e),
                (this.$matrix.m24 *= e),
                (this.$matrix.m31 *= e),
                (this.$matrix.m32 *= e),
                (this.$matrix.m33 *= e),
                (this.$matrix.m34 *= e),
                (this.$matrix.m41 *= e),
                (this.$matrix.m42 *= e),
                (this.$matrix.m43 *= e),
                (this.$matrix.m44 *= e);
        return this;
    }),
    (J3DIMatrix4.prototype.divide = function (e) {
        return (
            (this.$matrix.m11 /= e),
            (this.$matrix.m12 /= e),
            (this.$matrix.m13 /= e),
            (this.$matrix.m14 /= e),
            (this.$matrix.m21 /= e),
            (this.$matrix.m22 /= e),
            (this.$matrix.m23 /= e),
            (this.$matrix.m24 /= e),
            (this.$matrix.m31 /= e),
            (this.$matrix.m32 /= e),
            (this.$matrix.m33 /= e),
            (this.$matrix.m34 /= e),
            (this.$matrix.m41 /= e),
            (this.$matrix.m42 /= e),
            (this.$matrix.m43 /= e),
            (this.$matrix.m44 /= e),
            this
        );
    }),
    (J3DIMatrix4.prototype.ortho = function (e, t, n, r, i, s) {
        var o = (e + t) / (e - t),
            u = (r + n) / (r - n),
            a = (s + i) / (s - i),
            f = new J3DIMatrix4();
        (f.$matrix.m11 = 2 / (e - t)),
            (f.$matrix.m12 = 0),
            (f.$matrix.m13 = 0),
            (f.$matrix.m14 = 0),
            (f.$matrix.m21 = 0),
            (f.$matrix.m22 = 2 / (r - n)),
            (f.$matrix.m23 = 0),
            (f.$matrix.m24 = 0),
            (f.$matrix.m31 = 0),
            (f.$matrix.m32 = 0),
            (f.$matrix.m33 = -2 / (s - i)),
            (f.$matrix.m34 = 0),
            (f.$matrix.m41 = o),
            (f.$matrix.m42 = u),
            (f.$matrix.m43 = a),
            (f.$matrix.m44 = 1),
            this.multiply(f);
    }),
    (J3DIMatrix4.prototype.frustum = function (e, t, n, r, i, s) {
        var o = new J3DIMatrix4(),
            u = (t + e) / (t - e),
            a = (r + n) / (r - n),
            f = -(s + i) / (s - i),
            l = -(2 * s * i) / (s - i);
        (o.$matrix.m11 = (2 * i) / (t - e)),
            (o.$matrix.m12 = 0),
            (o.$matrix.m13 = 0),
            (o.$matrix.m14 = 0),
            (o.$matrix.m21 = 0),
            (o.$matrix.m22 = (2 * i) / (r - n)),
            (o.$matrix.m23 = 0),
            (o.$matrix.m24 = 0),
            (o.$matrix.m31 = u),
            (o.$matrix.m32 = a),
            (o.$matrix.m33 = f),
            (o.$matrix.m34 = -1),
            (o.$matrix.m41 = 0),
            (o.$matrix.m42 = 0),
            (o.$matrix.m43 = l),
            (o.$matrix.m44 = 0),
            this.multiply(o);
    }),
    (J3DIMatrix4.prototype.perspective = function (e, t, n, r) {
        var i = Math.tan((e * Math.PI) / 360) * n,
            s = -i,
            o = t * s,
            u = t * i;
        this.frustum(o, u, s, i, n, r);
    }),
    (J3DIMatrix4.prototype.world = function (e, t, n, r, i, s, o, u, a) {
        if (typeof e == "object" && "length" in e) {
            var f = eyez;
            (o = f[0]), (u = f[1]), (a = f[2]), (f = eyey), (dirx = f[0]), (diry = f[1]), (dirz = f[2]), (f = eyex), (e = f[0]), (t = f[1]), (n = f[2]);
        }
        var l = new J3DIMatrix4(),
            c = new J3DIVector3(r, i, s),
            h = new J3DIVector3(o, u, a);
        c.normalize(), h.normalize();
        var p = new J3DIVector3();
        p.load(h),
            p.cross(c),
            p.normalize(),
            h.load(c),
            h.cross(p),
            (l.$matrix.m11 = p[0]),
            (l.$matrix.m21 = p[1]),
            (l.$matrix.m31 = p[2]),
            (l.$matrix.m12 = h[0]),
            (l.$matrix.m22 = h[1]),
            (l.$matrix.m32 = h[2]),
            (l.$matrix.m13 = c[0]),
            (l.$matrix.m23 = c[1]),
            (l.$matrix.m33 = c[2]),
            l.translate(-e, -t, -n),
            this.multiply(l);
    }),
    (J3DIMatrix4.prototype.lookat = function (e, t, n, r, i, s, o, u, a) {
        if (typeof n == "object" && "length" in n) {
            var f = n;
            (o = f[0]), (u = f[1]), (a = f[2]), (f = t), (r = f[0]), (i = f[1]), (s = f[2]), (f = e), (e = f[0]), (t = f[1]), (n = f[2]);
        }
        var l = new J3DIMatrix4(),
            c = r - e,
            h = i - t,
            p = s - n,
            d = Math.sqrt(c * c + h * h + p * p);
        d && ((c /= d), (h /= d), (p /= d));
        var v = o,
            m = u,
            g = a,
            y = m * p - g * h,
            b = -v * p + g * c,
            w = v * h - m * c;
        (v = h * w - p * b),
            (m = -c * w + p * y),
            (g = c * b - h * y),
            (d = Math.sqrt(y * y + b * b + w * w)),
            d && ((y /= d), (b /= d), (w /= d)),
            (d = Math.sqrt(v * v + m * m + g * g)),
            d && ((v /= d), (m /= d), (g /= d)),
            (l.$matrix.m11 = y),
            (l.$matrix.m21 = b),
            (l.$matrix.m31 = w),
            (l.$matrix.m41 = 0),
            (l.$matrix.m12 = v),
            (l.$matrix.m22 = m),
            (l.$matrix.m32 = g),
            (l.$matrix.m42 = 0),
            (l.$matrix.m13 = c),
            (l.$matrix.m23 = h),
            (l.$matrix.m33 = p),
            (l.$matrix.m43 = 0),
            (l.$matrix.m14 = 0),
            (l.$matrix.m24 = 0),
            (l.$matrix.m34 = 0),
            (l.$matrix.m44 = 1),
            l.translate(-e, -t, -n),
            this.multiply(l);
    }),
    (J3DIMatrix4.prototype.decompose = function (e, t, n, r, s) {
        if (this.$matrix.m44 == 0) return !1;
        var o,
            u,
            a,
            f,
            l,
            o = e != undefined && "length" in e ? e : new J3DIVector3(),
            u = t != undefined && "length" in t ? t : new J3DIVector3(),
            a = n != undefined && "length" in n ? n : new J3DIVector3(),
            f = r != undefined && "length" in r ? r : new J3DIVector3(),
            l = s != undefined && "length" in s ? s : new Array(4),
            c = new J3DIMatrix4(this);
        c.divide(c.$matrix.m44);
        var h = new J3DIMatrix4(c);
        (h.$matrix.m14 = 0), (h.$matrix.m24 = 0), (h.$matrix.m34 = 0), (h.$matrix.m44 = 1);
        if (h._determinant4x4() == 0) return !1;
        if (c.$matrix.m14 != 0 || c.$matrix.m24 != 0 || c.$matrix.m34 != 0) {
            var p = [c.$matrix.m14, c.$matrix.m24, c.$matrix.m34, c.$matrix.m44],
                d = new J3DIMatrix4(h);
            d.invert();
            var v = new J3DIMatrix4(d);
            v.transpose(), v.multVecMatrix(l, p), (c.$matrix.m14 = c.$matrix.m24 = c.$matrix.m34 = 0), (c.$matrix.m44 = 1);
        } else (l[0] = l[1] = l[2] = 0), (l[3] = 1);
        (o[0] = c.$matrix.m41), (c.$matrix.m41 = 0), (o[1] = c.$matrix.m42), (c.$matrix.m42 = 0), (o[2] = c.$matrix.m43), (c.$matrix.m43 = 0);
        var m = new J3DIVector3(c.$matrix.m11, c.$matrix.m12, c.$matrix.m13),
            g = new J3DIVector3(c.$matrix.m21, c.$matrix.m22, c.$matrix.m23),
            y = new J3DIVector3(c.$matrix.m31, c.$matrix.m32, c.$matrix.m33);
        (a[0] = m.vectorLength()),
            m.divide(a[0]),
            (f[0] = m.dot(g)),
            g.combine(m, 1, -f[0]),
            (a[1] = g.vectorLength()),
            g.divide(a[1]),
            (f[0] /= a[1]),
            (f[1] = g.dot(y)),
            y.combine(m, 1, -f[1]),
            (f[2] = g.dot(y)),
            y.combine(g, 1, -f[2]),
            (a[2] = y.vectorLength()),
            y.divide(a[2]),
            (f[1] /= a[2]),
            (f[2] /= a[2]);
        var b = new J3DIVector3(g);
        b.cross(y);
        if (m.dot(b) < 0) for (i = 0; i < 3; i++) (a[i] *= -1), (row[0][i] *= -1), (row[1][i] *= -1), (row[2][i] *= -1);
        (u[1] = Math.asin(-m[2])), Math.cos(u[1]) != 0 ? ((u[0] = Math.atan2(g[2], y[2])), (u[2] = Math.atan2(m[1], m[0]))) : ((u[0] = Math.atan2(-y[0], g[1])), (u[2] = 0));
        var w = 180 / Math.PI;
        return (u[0] *= w), (u[1] *= w), (u[2] *= w), !0;
    }),
    (J3DIMatrix4.prototype._determinant2x2 = function (e, t, n, r) {
        return e * r - t * n;
    }),
    (J3DIMatrix4.prototype._determinant3x3 = function (e, t, n, r, i, s, o, u, a) {
        return e * this._determinant2x2(i, s, u, a) - r * this._determinant2x2(t, n, u, a) + o * this._determinant2x2(t, n, i, s);
    }),
    (J3DIMatrix4.prototype._determinant4x4 = function () {
        var e = this.$matrix.m11,
            t = this.$matrix.m12,
            n = this.$matrix.m13,
            r = this.$matrix.m14,
            i = this.$matrix.m21,
            s = this.$matrix.m22,
            o = this.$matrix.m23,
            u = this.$matrix.m24,
            a = this.$matrix.m31,
            f = this.$matrix.m32,
            l = this.$matrix.m33,
            c = this.$matrix.m34,
            h = this.$matrix.m41,
            p = this.$matrix.m42,
            d = this.$matrix.m43,
            v = this.$matrix.m44;
        return e * this._determinant3x3(s, f, p, o, l, d, u, c, v) - t * this._determinant3x3(i, a, h, o, l, d, u, c, v) + n * this._determinant3x3(i, a, h, s, f, p, u, c, v) - r * this._determinant3x3(i, a, h, s, f, p, o, l, d);
    }),
    (J3DIMatrix4.prototype._makeAdjoint = function () {
        var e = this.$matrix.m11,
            t = this.$matrix.m12,
            n = this.$matrix.m13,
            r = this.$matrix.m14,
            i = this.$matrix.m21,
            s = this.$matrix.m22,
            o = this.$matrix.m23,
            u = this.$matrix.m24,
            a = this.$matrix.m31,
            f = this.$matrix.m32,
            l = this.$matrix.m33,
            c = this.$matrix.m34,
            h = this.$matrix.m41,
            p = this.$matrix.m42,
            d = this.$matrix.m43,
            v = this.$matrix.m44;
        (this.$matrix.m11 = this._determinant3x3(s, f, p, o, l, d, u, c, v)),
            (this.$matrix.m21 = -this._determinant3x3(i, a, h, o, l, d, u, c, v)),
            (this.$matrix.m31 = this._determinant3x3(i, a, h, s, f, p, u, c, v)),
            (this.$matrix.m41 = -this._determinant3x3(i, a, h, s, f, p, o, l, d)),
            (this.$matrix.m12 = -this._determinant3x3(t, f, p, n, l, d, r, c, v)),
            (this.$matrix.m22 = this._determinant3x3(e, a, h, n, l, d, r, c, v)),
            (this.$matrix.m32 = -this._determinant3x3(e, a, h, t, f, p, r, c, v)),
            (this.$matrix.m42 = this._determinant3x3(e, a, h, t, f, p, n, l, d)),
            (this.$matrix.m13 = this._determinant3x3(t, s, p, n, o, d, r, u, v)),
            (this.$matrix.m23 = -this._determinant3x3(e, i, h, n, o, d, r, u, v)),
            (this.$matrix.m33 = this._determinant3x3(e, i, h, t, s, p, r, u, v)),
            (this.$matrix.m43 = -this._determinant3x3(e, i, h, t, s, p, n, o, d)),
            (this.$matrix.m14 = -this._determinant3x3(t, s, f, n, o, l, r, u, c)),
            (this.$matrix.m24 = this._determinant3x3(e, i, a, n, o, l, r, u, c)),
            (this.$matrix.m34 = -this._determinant3x3(e, i, a, t, s, f, r, u, c)),
            (this.$matrix.m44 = this._determinant3x3(e, i, a, t, s, f, n, o, l));
    }),
    (J3DIMatrix4.prototype.trace = function () {
        return this.$matrix.m11 + this.$matrix.m22 + this.$matrix.m33 + this.$matrix.m44;
    }),
    (J3DIMatrix4.prototype.loghat = function () {
        var e = this.$matrix.m11,
            t = this.$matrix.m12,
            n = this.$matrix.m13,
            r = this.$matrix.m21,
            i = this.$matrix.m22,
            s = this.$matrix.m23,
            o = this.$matrix.m31,
            u = this.$matrix.m32,
            a = this.$matrix.m33,
            f = (e + i + a - 1) * 0.5,
            l = new J3DIVector3(u - s, n - o, r - t),
            c = l.norm(),
            h,
            p = function (e) {
                return e < 0 ? -1 : 1;
            };
        if (c < 1e-14)
            Math.abs(e - i) > 0.99 || Math.abs(e - a) > 0.99 || Math.abs(i - a) > 0.99
                ? Math.abs(i - a) < 1e-14
                    ? (h = new J3DIVector3(Math.PI * p(e), 0, 0))
                    : Math.abs(e - a) < 1e-14
                    ? (h = new J3DIVector3(0, Math.PI * p(i), 0))
                    : Math.abs(e - i) < 1e-14
                    ? (h = new J3DIVector3(0, 0, Math.PI * p(a)))
                    : (h = new J3DIVector3(0, 0, 0))
                : (h = new J3DIVector3(0, 0, 0));
        else {
            var d = Math.atan2(c * 0.5, f);
            h = l.multiply(d / c);
        }
        return h;
    }),
    (J3DIVector3 = function (e, t, n) {
        this.load(e, t, n);
    }),
    (J3DIVector3.prototype.load = function (e, t, n) {
        return (
            typeof e == "object" || typeof e == "array" ? ((this[0] = e[0]), (this[1] = e[1]), (this[2] = e[2])) : typeof e == "number" ? ((this[0] = e), (this[1] = t), (this[2] = n)) : ((this[0] = 0), (this[1] = 0), (this[2] = 0)), this
        );
    }),
    (J3DIVector3.prototype.getAsArray = function () {
        return [this[0], this[1], this[2]];
    }),
    (J3DIVector3.prototype.getAsFloat32Array = function () {
        return new Float32Array(this.getAsArray());
    }),
    (J3DIVector3.prototype.vectorLength = function () {
        return Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    }),
    (J3DIVector3.prototype.norm = function () {
        return Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    }),
    (J3DIVector3.prototype.cross = function (e) {
        var t = this[0],
            n = this[1],
            r = this[2];
        (this[0] = n * e[2] - r * e[1]), (this[1] = -t * e[2] + r * e[0]), (this[2] = t * e[1] - n * e[0]);
    }),
    (J3DIVector3.prototype.dot = function (e) {
        return this[0] * e[0] + this[1] * e[1] + this[2] * e[2];
    }),
    (J3DIVector3.prototype.combine = function (e, t, n) {
        (this[0] = t * this[0] + n * e[0]), (this[1] = t * this[1] + n * e[1]), (this[2] = t * this[2] + n * e[2]);
    }),
    (J3DIVector3.prototype.multiply = function (e) {
        return typeof e == "number" ? ((this[0] *= e), (this[1] *= e), (this[2] *= e)) : ((this[0] *= e[0]), (this[1] *= e[1]), (this[2] *= e[2])), this;
    }),
    (J3DIVector3.prototype.divide = function (e) {
        return typeof e == "number" ? ((this[0] /= e), (this[1] /= e), (this[2] /= e)) : ((this[0] /= e[0]), (this[1] /= e[1]), (this[2] /= e[2])), this;
    }),
    (J3DIVector3.prototype.subtract = function (e) {
        return typeof e == "number" ? ((this[0] -= e), (this[1] -= e), (this[2] -= e)) : ((this[0] -= e[0]), (this[1] -= e[1]), (this[2] -= e[2])), this;
    }),
    (J3DIVector3.prototype.add = function (e) {
        return typeof e == "number" ? ((this[0] += e), (this[1] += e), (this[2] += e), this) : ((this[0] += e[0]), (this[1] += e[1]), (this[2] += e[2]), this);
    }),
    (J3DIVector3.prototype.neg = function () {
        return (this[0] = -this[0]), (this[1] = -this[1]), (this[2] = -this[2]), this;
    }),
    (J3DIVector3.prototype.normalize = function () {
        var e = this.vectorLength();
        return (this[0] /= e), (this[1] /= e), (this[2] /= e), this;
    }),
    (J3DIVector3.prototype.reflect = function (e) {
        var t = new J3DIVector3(this);
        return this.multiply(e), this.multiply(2), this.multiply(e), this.subtract(t), this;
    }),
    (J3DIVector3.prototype.multVecMatrix = function (e) {
        var t = this[0],
            n = this[1],
            r = this[2];
        (this[0] = e.$matrix.m41 + t * e.$matrix.m11 + n * e.$matrix.m21 + r * e.$matrix.m31),
            (this[1] = e.$matrix.m42 + t * e.$matrix.m12 + n * e.$matrix.m22 + r * e.$matrix.m32),
            (this[2] = e.$matrix.m43 + t * e.$matrix.m13 + n * e.$matrix.m23 + r * e.$matrix.m33);
        var i = e.$matrix.m44 + t * e.$matrix.m14 + n * e.$matrix.m24 + r * e.$matrix.m34;
        return i != 1 && i != 0 && ((this[0] /= i), (this[1] /= i), (this[2] /= i)), this;
    }),
    (J3DIVector3.prototype.multNormalMatrix = function (e) {
        var t = this[0],
            n = this[1],
            r = this[2],
            i = new J3DIMatrix4(e);
        i.invert(),
            i.transpose(),
            (this[0] = i.$matrix.m41 + t * i.$matrix.m11 + n * i.$matrix.m21 + r * i.$matrix.m31),
            (this[1] = i.$matrix.m42 + t * i.$matrix.m12 + n * i.$matrix.m22 + r * i.$matrix.m32),
            (this[2] = i.$matrix.m43 + t * i.$matrix.m13 + n * i.$matrix.m23 + r * i.$matrix.m33);
        var s = i.$matrix.m44 + t * i.$matrix.m14 + n * i.$matrix.m24 + r * i.$matrix.m34;
        return s != 1 && s != 0 && ((this[0] /= s), (this[1] /= s), (this[2] /= s)), this;
    }),
    (J3DIVector3.prototype.hat = function () {
        var e = new J3DIMatrix4([0, -this[2], this[1], 0, this[2], 0, -this[0], 0, -this[1], this[0], 0, 0, 0, 0, 0, 1]);
        return e;
    }),
    (J3DIVector3.prototype.exphat = function () {
        var e = this,
            t = e.norm(),
            n = new J3DIMatrix4();
        if (!(Math.abs(t) < 1e-14)) {
            var r = e
                    .hat()
                    .multiply(Math.sin(t) / t)
                    .getAsArray(),
                i = e
                    .hat()
                    .multiply(e.hat())
                    .multiply((1 - Math.cos(t)) / (t * t))
                    .getAsArray();
            n.load([1 + r[0] + i[0], r[1] + i[1], r[2] + i[2], 0, r[4] + i[4], 1 + r[5] + i[5], r[6] + i[6], 0, r[8] + i[8], r[9] + i[9], 1 + r[10] + i[10], 0, 0, 0, 0, 1]);
        }
        return n;
    }),
    (J3DIVector3.prototype.toString = function () {
        return "[" + formatNumber(this[0]) + "," + formatNumber(this[1]) + "," + formatNumber(this[2]) + "]";
    }),
    (J3DIVertexArray = function (e) {
        this.load(e);
    }),
    (J3DIVertexArray.prototype.load = function (e) {
        if (e === undefined) this.length = 0;
        else {
            this.length = e.length;
            for (var t = 0; t < e.length; t++) this[t] = e[t];
        }
    }),
    (J3DIVertexArray.prototype.getAsArray = function () {
        var e = new Array(this.length);
        for (var t = 0; t < e.length; t++) e[t] = this[t];
        return e;
    }),
    (J3DIVertexArray.prototype.getAsFloat32Array = function () {
        return new Float32Array(this.getAsArray());
    }),
    (J3DIVertexArray.prototype.multVecMatrix = function (e) {
        for (var t = 0; t < this.length; t += 3) {
            var n = this[t],
                r = this[t + 1],
                i = this[t + 2];
            (this[t] = e.$matrix.m41 + n * e.$matrix.m11 + r * e.$matrix.m21 + i * e.$matrix.m31),
                (this[t + 1] = e.$matrix.m42 + n * e.$matrix.m12 + r * e.$matrix.m22 + i * e.$matrix.m32),
                (this[t + 2] = e.$matrix.m43 + n * e.$matrix.m13 + r * e.$matrix.m23 + i * e.$matrix.m33);
            var s = e.$matrix.m44 + n * e.$matrix.m14 + r * e.$matrix.m24 + i * e.$matrix.m34;
            s != 1 && s != 0 && ((this[t] /= s), (this[t + 1] /= s), (this[t + 2] /= s));
        }
    }),
    (J3DIVertexArray.prototype.normal = function (e, t, n) {
        return this.rawNormal(e, t, n).normalize();
    }),
    (J3DIVertexArray.prototype.rawNormal = function (e, t, n) {
        var r = new J3DIVector3(this[n * 3] - this[e * 3], this[n * 3 + 1] - this[e * 3 + 1], this[n * 3 + 2] - this[e * 3 + 2]);
        return r.cross(new J3DIVector3(this[t * 3] - this[e * 3], this[t * 3 + 1] - this[e * 3 + 1], this[t * 3 + 2] - this[e * 3 + 2])), r;
    });
var rawZReuse1 = new J3DIVector3(),
    rawZReuse2 = new J3DIVector3();
(J3DIVertexArray.prototype.rawZ = function (e, t, n) {
    var r = rawZReuse1.load(this[n * 3] - this[e * 3], this[n * 3 + 1] - this[e * 3 + 1], this[n * 3 + 2] - this[e * 3 + 2]);
    return r.cross(rawZReuse2.load(this[t * 3] - this[e * 3], this[t * 3 + 1] - this[e * 3 + 1], this[t * 3 + 2] - this[e * 3 + 2])), r[2];
}),
    (J3DIVertexArray.prototype.toString = function () {
        var e = "[";
        for (var t = 0; t < this.length; t++) t > 0 && ((e += ","), t % 3 == 0 && (e += " ")), (e += formatNumber(this[t]));
        return (e += "]"), e;
    }),
    define("J3DIMath", [], function () {
        var e = function (e, t, n) {
                return e === undefined || e != e ? t : Math.max(t, Math.min(n, e));
            },
            n = function (e) {
                return e < 0 ? -1 : 1;
            },
            r = function (e, t, n) {
                var r = new J3DIMatrix4(e).transpose(),
                    i = r.multiply(t).loghat().multiply(n),
                    s = new J3DIMatrix4(e);
                return s.multiply(i.exphat());
            },
            i = function (n, r, i) {
                i = e(i, 0, 1);
                var s = new J3DIVector3(n.$matrix.m41, n.$matrix.m42, n.$matrix.m43),
                    o = new J3DIMatrix4(n);
                (o.$matrix.m41 = 0), (o.$matrix.m42 = 0), (o.$matrix.m43 = 0);
                var u = new J3DIVector3(r.$matrix.m41, r.$matrix.m42, r.$matrix.m43),
                    a = new J3DIMatrix4(r);
                (a.$matrix.m41 = 0), (a.$matrix.m42 = 0), (a.$matrix.m43 = 0);
                var f = new J3DIMatrix4(o).transpose(),
                    l = new J3DIMatrix4(a).transpose();
                s.multVecMatrix(f).multiply(1 - i), u.multVecMatrix(l).multiply(i), (t = new J3DIVector3(s)), t.add(u);
                var c = f.multiply(a).loghat().multiply(i),
                    h = new J3DIMatrix4(o);
                return h.multiply(c.exphat()), t.multVecMatrix(h), (h.$matrix.m41 = t[0]), (h.$matrix.m42 = t[1]), (h.$matrix.m43 = t[2]), h;
            },
            s = function (e, t) {
                var n = t.pMin,
                    r = t.pMax,
                    i = 0,
                    s = Number.MAX_VALUE,
                    o = -1,
                    u = -1;
                for (var a = 0; a < 3; a++) {
                    var f = 1 / e.dir[a],
                        l = (n[a] - e.point[a]) * f,
                        c = (r[a] - e.point[a]) * f,
                        h = 0;
                    if (l > c) {
                        var p = l;
                        (l = c), (c = p), (h = 3);
                    }
                    l > i && ((i = l), (o = a + h)), c < s && ((s = c), (u = a + 3 - h));
                    if (i > s) return null;
                }
                var d, v;
                (i < s && o != -1) || u == -1 ? ((d = i), (v = o)) : ((d = s), (v = u));
                var m = new J3DIVector3(e.point).add(new J3DIVector3(e.dir).multiply(d)),
                    g,
                    y;
                switch (v) {
                    case 0:
                        var b = new J3DIVector3(0, 0, 1 / (r[2] - n[2])),
                            w = new J3DIVector3(0, 1 / (r[1] - n[1]), 0);
                        (g = (m[2] - n[2]) * b[2]), (y = (m[1] - n[1]) * w[1]);
                        break;
                    case 3:
                        var b = new J3DIVector3(0, 0, 1 / (r[2] - n[2])),
                            w = new J3DIVector3(0, 1 / (r[1] - n[1]), 0);
                        (g = (m[2] - n[2]) * b[2]), (y = (m[1] - n[1]) * w[1]);
                        break;
                    case 1:
                        var b = new J3DIVector3(1 / (r[0] - n[0]), 0, 0),
                            w = new J3DIVector3(0, 0, 1 / (r[2] - n[2]));
                        (g = (m[0] - n[0]) * b[0]), (y = (m[2] - n[2]) * w[2]);
                        break;
                    case 4:
                        var b = new J3DIVector3(1 / (r[0] - n[0]), 0, 0),
                            w = new J3DIVector3(0, 0, 1 / (r[2] - n[2]));
                        (g = (m[0] - n[0]) * b[0]), (y = (m[2] - n[2]) * w[2]);
                        break;
                    case 2:
                        var b = new J3DIVector3(1 / (r[0] - n[0]), 0, 0),
                            w = new J3DIVector3(0, 1 / (r[1] - n[1]), 0);
                        (g = (m[0] - n[0]) * b[0]), (y = (m[1] - n[1]) * w[1]);
                        break;
                    case 5:
                        var b = new J3DIVector3(1 / (r[0] - n[0]), 0, 0),
                            w = new J3DIVector3(0, 1 / (r[1] - n[1]), 0);
                        (g = (m[0] - n[0]) * b[0]), (y = (m[1] - n[1]) * w[1]);
                        break;
                    default:
                        return null;
                }
                return { point: m, uv: new J3DIVector3(g, y, 0), t: d, face: v };
            },
            o = function (e, n) {
                var r = e.dir.dot(n.normal);
                if (Math.abs(r) < 1e-20) return null;
                var i = -new J3DIVector3(e.point).subtract(n.point).dot(new J3DIVector3(n.normal).divide(r)),
                    s = new J3DIVector3(e.point).add(new J3DIVector3(e.dir).multiply(i)),
                    o = new J3DIVector3(n.point).subtract(s);
                if (Math.abs(n.normal[0]) > Math.abs(n.normal[1]) && Math.abs(n.normal[0]) > Math.abs(n.normal[2])) var u = new J3DIVector3(o[1], o[2], 0);
                else if (Math.abs(n.normal[1]) > Math.abs(n.normal[0]) && Math.abs(n.normal[1]) > Math.abs(n.normal[2])) var u = new J3DIVector3(o[0], o[2], 0);
                else var u = new J3DIVector3(o[0], o[1], 0);
                return { point: s, uv: u, t: t };
            };
        return { sign: n, clamp: e, rigidLerp: i, elerp: r, intersectPlane: o, intersectBox: s, formatNumber: formatNumber };
    }),
    define("Node3D", ["J3DIMath"], function (e) {
        return (
            (Node3D = function () {
                this.initNode3D();
            }),
            (Node3D.prototype.initNode3D = function () {
                (this.matrix = new J3DIMatrix4()), (this.children = []), (this.parent = null);
            }),
            (Node3D.prototype.parent = null),
            (Node3D.prototype.children = null),
            (Node3D.prototype.matrix = null),
            (Node3D.prototype.transform = function (e) {
                this.parent != null && this.parent.transform(e), e.multiply(this.matrix);
            }),
            (Node3D.prototype.add = function (e) {
                e.parent != null && e.parent.remove(e), (this.children[this.children.length] = e), (e.parent = this);
            }),
            (Node3D.prototype.remove = function (e) {
                if (e.parent == this) {
                    for (var t = 0; t < this.children.length; t++)
                        if (this.children[t] == e) {
                            this.children = this.children.slice(0, t) + this.children.slice(t + 1);
                            break;
                        }
                    e.parent = null;
                }
            }),
            {
                newNode3D: function () {
                    return new Node3D();
                },
            }
        );
    }),
    define("AbstractCanvas", ["J3DI", "J3DIMath", "Node3D"], function (e, t, n) {
        return (
            (AbstractCanvas = function () {
                this.initAbstractCanvas();
            }),
            (AbstractCanvas.prototype.initAbstractCanvas = function () {
                (this.canvas = null),
                    (this.willRepaint = !1),
                    (this.repaintCallbacks = []),
                    (this.handler = { onTouchStart: function (e) {}, onTouchEnd: function (e) {}, onTouchMove: function (e) {}, onMouseDown: function (e) {}, onMouseUp: function (e) {}, onMouseMove: function (e) {} });
                var e = this;
                (this.selectStartListener = function (e) {
                    return !1;
                }),
                    (this.touchStartListener = function (t) {
                        return e.handler.onTouchStart(t);
                    }),
                    (this.touchEndListener = function (t) {
                        return e.handler.onTouchEnd(t);
                    }),
                    (this.touchMoveListener = function (t) {
                        return e.handler.onTouchMove(t);
                    }),
                    (this.mouseDownListener = function (t) {
                        return e.handler.onMouseDown(t);
                    }),
                    (this.mouseUpListener = function (t) {
                        return e.handler.onMouseUp(t);
                    }),
                    (this.mouseMoveListener = function (t) {
                        return e.handler.onMouseMove(t);
                    });
            }),
            (AbstractCanvas.prototype.setCanvas = function (e) {
                this.canvas != null &&
                    (this.canvas.removeEventListener("selectstart", this.selectStartListener),
                    this.canvas.removeEventListener("mousedown", this.mouseDownListener),
                    document.removeEventListener("mousemove", this.mouseMoveListener),
                    document.removeEventListener("mouseup", this.mouseUpListener),
                    this.canvas.removeEventListener("touchstart", this.touchStartListener),
                    document.removeEventListener("touchmove", this.touchMoveListener),
                    document.removeEventListener("touchend", this.touchEndListener),
                    this.closeCanvas()),
                    (this.canvas = e);
                if (this.canvas != null) {
                    var t = this.openCanvas();
                    return (
                        t &&
                            (this.canvas.addEventListener("selectstart", this.selectStartListener, !1),
                            this.canvas.addEventListener("touchstart", this.touchStartListener, !1),
                            document.addEventListener("touchmove", this.touchMoveListener, !1),
                            document.addEventListener("touchend", this.touchEndListener, !1),
                            this.canvas.addEventListener("mousedown", this.mouseDownListener, !1),
                            document.addEventListener("mouseup", this.mouseUpListener, !1),
                            document.addEventListener("mousemove", this.mouseMoveListener, !1)),
                        t
                    );
                }
                return !1;
            }),
            (AbstractCanvas.prototype.getCanvas = function () {
                return this.canvas;
            }),
            (AbstractCanvas.prototype.openCanvas = function () {
                return !1;
            }),
            (AbstractCanvas.prototype.closeCanvas = function () {}),
            (AbstractCanvas.prototype.repaint = function (t) {
                t != null && (this.repaintCallbacks[this.repaintCallbacks.length] = t);
                if (this.willRepaint == 0) {
                    this.willRepaint = !0;
                    var n = this,
                        r = function () {
                            n.willRepaint = !1;
                            var e = new Date().getTime(),
                                t = n.repaintCallbacks;
                            n.repaintCallbacks = [];
                            for (var r = 0; r < t.length; r++) t[r]();
                            var i = new Date().getTime();
                            n.draw();
                            var s = new Date().getTime();
                        };
                    e.requestAnimFrame(r, this.canvas);
                }
            }),
            (AbstractCanvas.prototype.log = function (e) {
                console.log(e);
            }),
            (AbstractCanvas.prototype.pushMove = function (e) {}),
            (AbstractCanvas.prototype.mouseIntersectionTest = function (e) {}),
            (AbstractCanvas.prototype.drawObjectCanvas2D = function (e, t, n, r, i) {
                if (e == null) return;
                e.polyIndexArray && (this.faceCount += e.polyIndexArray.length);
                if (e.vertexArray === null) return;
                if (e.textureScale != null) {
                    var s = new Array(e.textureArray.length);
                    for (var o = 0; o < s.length; o += 2) (s[o] = (e.textureArray[o] + e.textureOffsetX) * e.textureScale), (s[o + 1] = (e.textureArray[o + 1] + e.textureOffsetY) * e.textureScale);
                    (e.textureArray = s), (e.textureScale = null);
                }
                var u = this.g;
                this.mvpMatrix.load(this.viewportMatrix), this.mvpMatrix.multiply(this.perspectiveMatrix), this.mvpMatrix.multiply(t);
                var a = this.mvpVertexArray;
                a.load(e.vertexArray), a.multVecMatrix(this.mvpMatrix);
                var f = this.mvVertexArray;
                f.load(e.vertexArray), f.multVecMatrix(this.mvMatrix);
                if (e.polyIndexArray !== undefined)
                    for (var l = 0; l < e.polyIndexArray.length; l++) {
                        var c = e.polyIndexArray[l],
                            h = c[0],
                            p = c[1],
                            d = c[c.length - 1],
                            v = a.rawZ(h, p, d);
                        if (v > 0) {
                            var m = Math.max(0, f.normal(h, p, d).dot(this.lightNormal)),
                                g = this.deferredFaces[this.deferredFaceCount++];
                            g === undefined && ((g = new Face()), this.deferredFaces.push(g)),
                                g.loadPoly(a, e.textureArray, e.hasTexture ? this.stickersTexture : null, c),
                                this.applyFillStyle(g, f.normal(h, p, d), this.lightNormal, this.observerNormal, r, n);
                        }
                    }
                else
                    for (var l in e.groups) {
                        var y = e.groups[l][1] == 6;
                        if (y) {
                            var o = e.groups[l][0],
                                h = e.indexArray[o],
                                p = e.indexArray[o + 1],
                                d = e.indexArray[o + 2],
                                b = e.indexArray[o + 3],
                                v = a.rawZ(h, p, d);
                            if (v > 0) {
                                var m = Math.max(0, f.normal(h, p, d).dot(this.lightNormal)),
                                    g = this.deferredFaces[this.deferredFaceCount++];
                                g === undefined && ((g = new Face()), this.deferredFaces.push(g)),
                                    g.loadQuad(a, e.textureArray, e.hasTexture ? this.stickersTexture : null, h, p, d, b),
                                    this.applyFillStyle(g, f.normal(h, p, d), this.lightNormal, this.observerNormal, r, n);
                            }
                        } else
                            for (var w = 0; w < e.groups[l][1]; w += 3) {
                                var o = e.groups[l][0] + w,
                                    h = e.indexArray[o],
                                    p = e.indexArray[o + 1],
                                    d = e.indexArray[o + 2],
                                    v = a.rawZ(h, p, d);
                                if (v > 0) {
                                    var g = this.deferredFaces[this.deferredFaceCount++];
                                    g === undefined && ((g = new Face()), this.deferredFaces.push(g)),
                                        g.loadTriangle(a, e.textureArray, e.hasTexture ? this.stickersTexture : null, h, p, d),
                                        this.applyFillStyle(g, f.normal(h, p, d), this.lightNormal, this.observerNormal, r, n);
                                }
                            }
                    }
            }),
            (AbstractCanvas.prototype.applyFillStyle = function (e, t, n, r, i, s) {
                var o = Math.pow(Math.max(0, -new J3DIVector3(n).reflect(t).dot(r)), i[3]) * i[2],
                    u = Math.max(0, n.dot(t)) * i[1],
                    a = i[0],
                    f = new Array(3),
                    l = "rgb(";
                for (var c = 0; c < 3; c++) c != 0 && (l += ","), (l += Math.round(s[c] * (u + a) + 255 * o));
                (l += ")"), (e.fillStyle = l);
                var h = u + a + o;
                h >= 1 ? (l = "rgba(255,255,255," + (h - 1) + ")") : (l = "rgba(0,0,0," + (1 - h) + ")"), (e.lightStyle = l);
            }),
            (AbstractHandler = function (e) {
                (this.canvas = e), (this.mouseDownX = undefined), (this.mouseDownY = undefined), (this.mousePrevX = undefined), (this.mousePrevY = undefined), (this.mousePrevTimestamp = undefined);
            }),
            (AbstractHandler.prototype.onTouchStart = function (e) {
                e.touches.length == 1 ? (e.preventDefault(), (e.clientX = e.touches[0].clientX), (e.clientY = e.touches[0].clientY), this.onMouseDown(e)) : (this.isMouseDrag = !1);
            }),
            (AbstractHandler.prototype.onTouchEnd = function (e) {
                (e.clientX = this.mousePrevX), (e.clientY = this.mousePrevY), this.onMouseUp(e);
            }),
            (AbstractHandler.prototype.onTouchMove = function (e) {
                (e.clientX = e.touches[0].clientX), (e.clientY = e.touches[0].clientY), this.onMouseMove(e);
            }),
            (AbstractHandler.prototype.onMouseDown = function (e) {}),
            (AbstractHandler.prototype.onMouseMove = function (e) {}),
            (AbstractHandler.prototype.onMouseOut = function (e) {}),
            (AbstractHandler.prototype.onMouseUp = function (e) {}),
            (Face = function () {
                (this.length = 0), (this.vertices = new Array(10)), (this.txCoords = new Array(10)), (this.txImage = null), (this.fillStyle = "rgb(0,0,0)"), (this.lightStyle = "rgba(0,0,0,255)"), (this.depth = 0);
            }),
            (Face.prototype.loadTriangle = function (e, t, n, r, i, s) {
                (this.length = 6),
                    (this.vertices[0] = e[r * 3]),
                    (this.vertices[1] = e[r * 3 + 1]),
                    (this.vertices[2] = e[i * 3]),
                    (this.vertices[3] = e[i * 3 + 1]),
                    (this.vertices[4] = e[s * 3]),
                    (this.vertices[5] = e[s * 3 + 1]),
                    (this.txCoords[0] = t[r * 2]),
                    (this.txCoords[1] = t[r * 2 + 1]),
                    (this.txCoords[2] = t[i * 2]),
                    (this.txCoords[3] = t[i * 2 + 1]),
                    (this.txCoords[4] = t[s * 2]),
                    (this.txCoords[5] = t[s * 2 + 1]),
                    (this.txImage = n),
                    (this.depth = (e[r * 3 + 2] + e[i * 3 + 2] + e[s * 3 + 2]) / 3);
            }),
            (Face.prototype.loadQuad = function (e, t, n, r, i, s, o) {
                (this.length = 8),
                    (this.vertices[0] = e[r * 3]),
                    (this.vertices[1] = e[r * 3 + 1]),
                    (this.vertices[2] = e[i * 3]),
                    (this.vertices[3] = e[i * 3 + 1]),
                    (this.vertices[4] = e[s * 3]),
                    (this.vertices[5] = e[s * 3 + 1]),
                    (this.vertices[6] = e[o * 3]),
                    (this.vertices[7] = e[o * 3 + 1]),
                    (this.txCoords[0] = t[r * 2]),
                    (this.txCoords[1] = t[r * 2 + 1]),
                    (this.txCoords[2] = t[i * 2]),
                    (this.txCoords[3] = t[i * 2 + 1]),
                    (this.txCoords[4] = t[s * 2]),
                    (this.txCoords[5] = t[s * 2 + 1]),
                    (this.txCoords[6] = t[o * 2]),
                    (this.txCoords[7] = t[o * 2 + 1]),
                    (this.txImage = n),
                    (this.depth = (e[r * 3 + 2] + e[i * 3 + 2] + e[s * 3 + 2] + e[o * 3 + 2]) / 4);
            }),
            (Face.prototype.loadPoly = function (e, t, n, r) {
                (this.length = r.length * 2), (this.depth = 0);
                for (var i = 0; i < r.length; i++)
                    (this.vertices[i * 2] = e[r[i] * 3]), (this.vertices[i * 2 + 1] = e[r[i] * 3 + 1]), (this.depth += e[r[i] * 3 + 2]), (this.txCoords[i * 2] = t[r[i] * 2]), (this.txCoords[i * 2 + 1] = t[r[i] * 2 + 1]);
                (this.txImage = n), (this.depth /= r.length);
            }),
            (Face.prototype.draw = function (e) {
                this.txImage != null ? this.drawTexturedFaceTriangulated(e) : this.drawColoredFace(e);
            }),
            (Face.prototype.drawTexturedFaceTriangulated = function (e) {
                var t = this.vertices,
                    n = this.txCoords;
                for (var r = 5; r < this.length; r += 2) this.drawTexturedTriangle(e, this.txImage.image, t[0], t[1], t[r - 3], t[r - 2], t[r - 1], t[r], n[0], n[1], n[r - 3], n[r - 2], n[r - 1], n[r]);
                this.applyExtendedPath(e), (e.fillStyle = this.lightStyle), e.fill();
            }),
            (Face.prototype.drawColoredFace = function (e) {
                this.applyExtendedPath(e), (e.fillStyle = this.fillStyle), e.fill();
            }),
            (Face.prototype.applyExtendedPath = function (e) {
                var t = this.vertices,
                    n = -0.25;
                e.beginPath();
                for (var r = 0; r < this.length; r += 2) {
                    var i = (r - 2 + this.length) % this.length,
                        s = (r + 2) % this.length,
                        o = t[r] - t[i],
                        u = t[r + 1] - t[i + 1],
                        a = Math.sqrt(o * o + u * u),
                        f = t[r] - t[s],
                        l = t[r + 1] - t[s + 1],
                        c = Math.sqrt(f * f + l * l);
                    r == 0
                        ? (e.moveTo(t[r] + (u * n) / a, t[r + 1] - (o * n) / a), e.lineTo(t[r] - (l * n) / c, t[r + 1] + (f * n) / c))
                        : (e.lineTo(t[r] + (u * n) / a, t[r + 1] - (o * n) / a), e.lineTo(t[r] - (l * n) / c, t[r + 1] + (f * n) / c));
                }
            }),
            (Face.prototype.applySimplePath = function (e) {
                var t = this.vertices;
                e.beginPath(), e.moveTo(t[0], t[1]);
                for (var n = 2; n < this.length; n += 2) e.lineTo(t[n], t[n + 1]);
            }),
            (Face.prototype.drawColoredFaceSimple = function (e) {
                var t = this.vertices;
                (e.fillStyle = this.fillStyle), e.beginPath(), e.moveTo(t[0], t[1]);
                for (var n = 2; n < this.length; n += 2) e.lineTo(t[n], t[n + 1]);
                e.fill();
            }),
            (Face.prototype.drawTexturedTriangle = function (e, t, n, r, i, s, o, u, a, f, l, c, h, p) {
                if (n != n || r != r || i != i || s != s || o != o || u != u) return;
                if (a != a || f != f || l != l || c != c || h != h || p != p) return;
                var d = n,
                    v = r,
                    m = i,
                    g = s,
                    y = o,
                    b = u,
                    w = a,
                    E = f,
                    S = l,
                    x = c,
                    T = h,
                    N = p;
                (a *= t.width), (f *= t.height), (l *= t.width), (c *= t.height), (h *= t.width), (p *= t.height), (i -= n), (s -= r), (o -= n), (u -= r), (l -= a), (c -= f), (h -= a), (p -= f);
                var C = 1 / (l * p - h * c),
                    k = (p * i - c * o) * C,
                    L = (p * s - c * u) * C,
                    A = (l * o - h * i) * C,
                    O = (l * u - h * s) * C,
                    M = n - k * a - A * f,
                    _ = r - L * a - O * f,
                    D = [d, v, m, g, y, b],
                    P = -0.3,
                    H = 6;
                e.beginPath();
                for (var B = 0; B < H; B += 2) {
                    var j = (B - 2 + H) % H,
                        F = (B + 2) % H,
                        I = D[B] - D[j],
                        q = D[B + 1] - D[j + 1],
                        R = Math.sqrt(I * I + q * q),
                        U = D[B] - D[F],
                        z = D[B + 1] - D[F + 1],
                        W = Math.sqrt(U * U + z * z);
                    B == 0
                        ? (e.moveTo(D[B] + (q * P) / R, D[B + 1] - (I * P) / R), e.lineTo(D[B] - (z * P) / W, D[B + 1] + (U * P) / W))
                        : (e.lineTo(D[B] + (q * P) / R, D[B + 1] - (I * P) / R), e.lineTo(D[B] - (z * P) / W, D[B + 1] + (U * P) / W));
                }
                e.closePath(), e.save(), e.transform(k, L, A, O, M, _), e.clip(), e.drawImage(t, 0, 0), e.restore();
            }),
            {
                newAbstractCanvas: function () {
                    return new AbstractCanvas();
                },
                newAbstractHandler: function (e) {
                    return new AbstractHandler(e);
                },
                newFace: function () {
                    return new Face();
                },
            }
        );
    }),
    define("ScriptParser", [], function (e) {
        return (
            (TwistNode = function (e, t, n) {
                (this.axis = e), (this.angle = n), (this.layerMask = t);
            }),
            (TwistNode.prototype.applyTo = function (e) {
                this.doesNothing() || e.transform(this.axis, this.layerMask, this.angle);
            }),
            (TwistNode.prototype.applyInverseTo = function (e) {
                this.doesNothing() || e.transform(this.axis, this.layerMask, -this.angle);
            }),
            (TwistNode.prototype.doesNothing = function () {
                return this.angle == 0 || this.layerMask == 0;
            }),
            (TwistNode.prototype.consume = function (e) {
                return e.axis == this.axis && e.layerMask == this.layerMask ? ((this.angle = (this.angle + e.angle) % 4), this.angle == 3 ? (this.angle = -1) : this.angle == -3 && (this.angle = 1), !0) : !1;
            }),
            (TwistNode.prototype.toString = function () {
                return "TwistNode{ax:" + this.axis + " an:" + this.angle + " lm:" + this.layerMask + "}";
            }),
            (ScriptParser = function () {
                this.layerCount = 3;
            }),
            (ScriptParser.prototype.createRandomScript = function (e, t) {
                e == null && (e = 21), t == null && (t = 6);
                var n = new Array(Math.floor(Math.random() * e - t) + t),
                    r = -1,
                    i,
                    s,
                    o;
                for (var u = 0; u < e; u++) {
                    while ((i = Math.floor(Math.random() * 3)) == r);
                    (r = i), (s = 1 << Math.floor(Math.random() * this.layerCount));
                    while ((o = Math.floor(Math.random() * 5) - 2) == 0);
                    n[u] = new TwistNode(i, s, o);
                }
                return n;
            }),
            {
                newTwistNode: function (e, t, n) {
                    return new TwistNode(e, t, n);
                },
                newScriptParser: function () {
                    return new ScriptParser();
                },
            }
        );
    }),
    define("Cube3D", ["Node3D", "J3DIMath"], function (e, t) {
        return (
            (ChangeEvent = function (e) {
                this.source = e;
            }),
            (Cube3D = function () {
                this.initCube3D();
            }),
            (Cube3D.prototype = e.newNode3D()),
            (Cube3D.prototype.cube = null),
            (Cube3D.prototype.parts = null),
            (Cube3D.prototype.identityPartLocations = null),
            (Cube3D.prototype.cornerCount = 0),
            (Cube3D.prototype.edgeCount = 0),
            (Cube3D.prototype.sideCount = 0),
            (Cube3D.prototype.centerCount = 0),
            (Cube3D.prototype.partCount = 0),
            (Cube3D.prototype.cornerOffset = 0),
            (Cube3D.prototype.edgeOffset = 0),
            (Cube3D.prototype.sideOffset = 0),
            (Cube3D.prototype.centerOffset = 0),
            (Cube3D.prototype.repainter = null),
            (Cube3D.prototype.isTwisting = !1),
            (Cube3D.prototype.repaintFunction = null),
            (Cube3D.prototype.initCube3D = function () {
                this.initNode3D(),
                    (this.parts = []),
                    (this.partOrientations = []),
                    (this.partExplosions = []),
                    (this.partLocations = []),
                    (this.stickers = []),
                    (this.stickerOrientations = []),
                    (this.stickerExplosions = []),
                    (this.stickerLocations = []),
                    (this.stickerTranslations = []),
                    (this.identityPartLocations = []),
                    (this.identityStickerLocations = []),
                    (this.listenerList = []),
                    (this.isCubeValid = !1),
                    (this.updateTwistRotation = new J3DIMatrix4()),
                    (this.updateTwistOrientation = new J3DIMatrix4()),
                    (this.partSize = 3),
                    (this.developedStickerTranslations = []),
                    (this.developedStickers = []),
                    (this.identityDevelopedMatrix = []),
                    (this.currentStickerTransforms = []);
            }),
            (Cube3D.prototype.cubeChanged = function (e) {
                this.updateCube();
            }),
            (Cube3D.prototype.cubeTwisted = function (e) {
                this.updateCube();
            }),
            (Cube3D.prototype.updateCube = function () {
                (this.isCubeValid = !1), this.validateCube(), this.fireStateChanged();
            }),
            (Cube3D.prototype.validateCube = function () {
                if (!this.isCubeValid) {
                    this.isCubeValid = !0;
                    var e = this.cube,
                        t = new Array(this.partCount),
                        n = new Array(this.partCount),
                        r = new Array(this.partCount);
                    for (var i = 0; i < this.partCount; i++) (n[i] = i), (t[i] = e.getPartAt(n[i])), (r[i] = e.getPartOrientation(t[i]));
                    this.validateTwist(t, n, r, this.partCount, 0, 0, 1);
                }
            }),
            (Cube3D.prototype.updateAttributes = function () {
                (this.isAttributesValid = !1), this.validateAttributes();
            }),
            (Cube3D.prototype.validateAttributes = function () {
                this.isAttributesValid || ((this.isAttributesValid = !0), this.doValidateDevelopAttributes(), this.doValidateAttributes());
            }),
            (Cube3D.prototype.doValidateAttributes = function () {}),
            (Cube3D.prototype.doValidateDevelopAttributes = function () {
                if (this.attributes.developmentFactor == this.cachedDevelopmentFactor) return;
                this.cachedDevelopmentFactor = this.attributes.developmentFactor;
                var e = new J3DIMatrix4(),
                    n = new J3DIMatrix4();
                for (var r = 0; r < this.stickerCount; r++) {
                    var i = this.stickerToPartMap[r];
                    e.load(this.partLocations[i].matrix),
                        e.multiply(this.partExplosions[i].matrix),
                        e.multiply(this.partOrientations[i].matrix),
                        e.multiply(this.parts[i].matrix),
                        n.load(this.stickerTranslations[r].matrix),
                        n.multiply(this.stickerLocations[r].matrix),
                        n.multiply(this.stickerExplosions[r].matrix),
                        n.multiply(this.stickerOrientations[r].matrix),
                        n.multiply(this.stickers[r].matrix),
                        this.currentStickerTransforms[r].matrix.load(t.rigidLerp(e, n, this.attributes.developmentFactor));
                }
            }),
            (Cube3D.prototype.addChangeListener = function (e) {
                this.listenerList[this.listenerList.length] = e;
            }),
            (Cube3D.prototype.removeChangeListener = function (e) {
                for (var t = 0; t < this.listenerList.length; t++)
                    if (this.listenerList[t] == e) {
                        this.listenerList = this.listenerList.slice(0, t) + this.listenerList.slice(t + 1);
                        break;
                    }
            }),
            (Cube3D.prototype.fireStateChanged = function () {
                var e = new ChangeEvent(this),
                    t = this.listenerList;
                for (var n = t.length - 1; n >= 0; n -= 1) t[n].stateChanged(e);
            }),
            (Cube3D.prototype.repaint = function () {
                this.repaintFunction != null && this.repaintFunction();
            }),
            (Cube3D.prototype.intersect = function (e) {
                var n = this.partSize * this.cube.layerCount,
                    r = { pMin: new J3DIVector3(-n / 2, -n / 2, -n / 2), pMax: new J3DIVector3(n / 2, n / 2, n / 2) },
                    i = t.intersectBox(e, r);
                if (i != null) {
                    var s = i.face,
                        o = Math.floor(i.uv[0] * this.cube.layerCount),
                        u = Math.floor(i.uv[1] * this.cube.layerCount);
                    (i.axis = this.boxClickToAxisMap[s][o][u]), (i.layerMask = this.boxClickToLayerMap[s][o][u]), (i.angle = this.boxClickToAngleMap[s][o][u]);
                }
                return i;
            }),
            (Cube3D.prototype.intersectDeveloped = function (e) {
                var n = null,
                    r = { point: new J3DIVector3(), normal: new J3DIVector3() },
                    i = new J3DIMatrix4(),
                    s = this.cube.layerCount,
                    o = this.partSize;
                r.point.load(0, 0, -0.5 * s * this.partSize), r.normal.load(0, 0, -1), (n = t.intersectPlane(e, r));
                if (n != null) {
                    var u = -1 - Math.floor((n.uv[0] - 1.5 * s * o) / o),
                        a = Math.floor((n.uv[1] + 1.5 * s * o) / o);
                    if (a >= 0 && a < s && u >= s && u < s * 2) n.face = 1;
                    else if (a >= s && a < s * 2 && u >= 0 && u < s * 4)
                        switch (Math.floor(u / s)) {
                            case 0:
                                n.face = 3;
                                break;
                            case 1:
                                n.face = 2;
                                break;
                            case 2:
                                n.face = 0;
                                break;
                            case 3:
                                n.face = 5;
                                break;
                            default:
                                return null;
                        }
                    else {
                        if (!(a >= s * 2 && a < s * 3 && u >= s && u < s * 2)) return null;
                        n.face = 4;
                    }
                    (n.sticker = n.face * s * s + (a % s) * s + (u % s)), (n.part = this.getPartIndexForStickerIndex(n.sticker)), (n.plane = r);
                }
                return n;
            }),
            {
                newCube3D: function () {
                    return new Cube3D();
                },
            }
        );
    }),
    define("Cube", [], function () {
        return (
            (CubeEvent = function (e, t, n, r) {
                (this.source = e), (this.axis = t), (this.angle = r), (this.layerMask = n);
            }),
            (CubeEvent.prototype.getAffectedLocations = function () {
                var e = this.source.clone();
                return e.reset(), e.transform(this.axis, this.layerMask, this.angle), e.getUnsolvedParts();
            }),
            (Cube = function () {
                this.init();
            }),
            (Cube.prototype.init = function (e) {
                if (e < 2) throw new IllegalArgumentException("this.layerCount: " + this.layerCount + " < 2");
                (this.layerCount = e),
                    (this.cornerLoc = new Array(8)),
                    (this.cornerOrient = new Array(8)),
                    (this.listenerList = []),
                    this.layerCount > 2
                        ? ((this.edgeLoc = new Array((this.layerCount - 2) * 12)),
                          (this.edgeOrient = new Array(this.edgeLoc.length)),
                          (this.sideLoc = new Array((this.layerCount - 2) * (this.layerCount - 2) * 6)),
                          (this.sideOrient = new Array(this.sideLoc.length)))
                        : (this.edgeLoc = this.edgeOrient = this.sideLoc = this.sideOrient = new Array(0)),
                    (this.owner = null),
                    (this.cancel = !1),
                    this.reset();
            }),
            (Cube.prototype.lock = function (e) {
                return this.owner == null || this.owner === e ? ((this.owner = e), !0) : !1;
            }),
            (Cube.prototype.unlock = function (e) {
                return this.owner === e ? ((this.owner = null), !0) : !1;
            }),
            (Cube.prototype.CORNER_PART = 0),
            (Cube.prototype.EDGE_PART = 1),
            (Cube.prototype.SIDE_PART = 2),
            (Cube.prototype.CENTER_PART = 3),
            (Cube.prototype.NUMBER_OF_CORNER_PARTS = 8),
            (Cube.prototype.listenerList = []),
            (Cube.prototype.quiet = !1),
            Cube.prototype.layerCount,
            (Cube.prototype.cornerLoc = []),
            (Cube.prototype.cornerOrient = []),
            (Cube.prototype.edgeLoc = []),
            (Cube.prototype.edgeOrient = []),
            (Cube.prototype.sideLoc = []),
            (Cube.prototype.sideOrient = []),
            (Cube.prototype.IDENTITY_TRANSFORM = 0),
            (Cube.prototype.SINGLE_AXIS_TRANSFORM = 1),
            (Cube.prototype.GENERAL_TRANSFORM = 2),
            (Cube.prototype.UNKNOWN_TRANSFORM = 3),
            (Cube.prototype.transformType = 0),
            (Cube.prototype.transformAxis = 0),
            (Cube.prototype.transformAngle = 0),
            (Cube.prototype.transformMask = 0),
            (Cube.prototype.CORNER_TO_FACE_MAP = [
                [1, 0, 2],
                [4, 2, 0],
                [1, 5, 0],
                [4, 0, 5],
                [1, 3, 5],
                [4, 5, 3],
                [1, 2, 3],
                [4, 3, 2],
            ]),
            (Cube.prototype.EDGE_TO_AXIS_MAP = [2, 1, 2, 0, 1, 0, 2, 1, 2, 0, 1, 0]),
            (Cube.prototype.EDGE_TO_ANGLE_MAP = [
                [1, -1],
                [1, -1],
                [-1, 1],
                [-1, 1],
                [-1, 1],
                [1, -1],
                [-1, 1],
                [1, -1],
                [1, -1],
                [1, -1],
                [-1, 1],
                [-1, 1],
            ]),
            (Cube.prototype.EDGE_TO_FACE_MAP = [
                [1, 0],
                [0, 2],
                [4, 0],
                [5, 1],
                [0, 5],
                [5, 0],
                [1, 3],
                [3, 5],
                [4, 3],
                [2, 1],
                [3, 2],
                [2, 4],
            ]),
            (Cube.prototype.CENTER_TO_SIDE_MAP = [
                [0, 1, 2, 3, 4, 5],
                [5, 1, 0, 2, 4, 3],
                [3, 1, 5, 0, 4, 2],
                [2, 1, 3, 5, 4, 0],
                [4, 0, 2, 1, 3, 5],
                [3, 4, 2, 0, 1, 5],
                [1, 3, 2, 4, 0, 5],
                [0, 2, 4, 3, 5, 1],
                [0, 4, 5, 3, 1, 2],
                [0, 5, 1, 3, 2, 4],
                [5, 0, 4, 2, 3, 1],
                [5, 4, 3, 2, 1, 0],
                [5, 3, 1, 2, 0, 4],
                [1, 0, 5, 4, 3, 2],
                [4, 3, 5, 1, 0, 2],
                [2, 0, 1, 5, 3, 4],
                [2, 4, 0, 5, 1, 3],
                [2, 3, 4, 5, 0, 1],
                [1, 2, 0, 4, 5, 3],
                [4, 5, 0, 1, 2, 3],
                [3, 2, 1, 0, 5, 4],
                [3, 5, 4, 0, 2, 1],
                [4, 2, 3, 1, 5, 0],
                [1, 5, 3, 4, 2, 0],
            ]),
            (Cube.prototype.CORNER_SWIPE_TABLE = [
                [
                    [
                        [2, 4, 1],
                        [0, 4, -1],
                        [2, 4, -1],
                        [0, 4, 1],
                    ],
                    [
                        [1, 4, 1],
                        [2, 4, -1],
                        [1, 4, -1],
                        [2, 4, 1],
                    ],
                    [
                        [0, 4, -1],
                        [1, 4, 1],
                        [0, 4, 1],
                        [1, 4, -1],
                    ],
                ],
                [
                    [
                        [0, 4, 1],
                        [2, 4, -1],
                        [0, 4, -1],
                        [2, 4, 1],
                    ],
                    [
                        [1, 1, -1],
                        [0, 4, -1],
                        [1, 1, 1],
                        [0, 4, 1],
                    ],
                    [
                        [2, 4, -1],
                        [1, 1, -1],
                        [2, 4, 1],
                        [1, 1, 1],
                    ],
                ],
                [
                    [
                        [0, 4, 1],
                        [2, 1, 1],
                        [0, 4, -1],
                        [2, 1, -1],
                    ],
                    [
                        [1, 4, 1],
                        [0, 4, -1],
                        [1, 4, -1],
                        [0, 4, 1],
                    ],
                    [
                        [2, 1, 1],
                        [1, 4, 1],
                        [2, 1, -1],
                        [1, 4, -1],
                    ],
                ],
                [
                    [
                        [2, 1, -1],
                        [0, 4, -1],
                        [2, 1, 1],
                        [0, 4, 1],
                    ],
                    [
                        [1, 1, -1],
                        [2, 1, 1],
                        [1, 1, 1],
                        [2, 1, -1],
                    ],
                    [
                        [0, 4, -1],
                        [1, 1, -1],
                        [0, 4, 1],
                        [1, 1, 1],
                    ],
                ],
                [
                    [
                        [2, 1, -1],
                        [0, 1, 1],
                        [2, 1, 1],
                        [0, 1, -1],
                    ],
                    [
                        [1, 4, 1],
                        [2, 1, 1],
                        [1, 4, -1],
                        [2, 1, -1],
                    ],
                    [
                        [0, 1, 1],
                        [1, 4, 1],
                        [0, 1, -1],
                        [1, 4, -1],
                    ],
                ],
                [
                    [
                        [0, 1, -1],
                        [2, 1, 1],
                        [0, 1, 1],
                        [2, 1, -1],
                    ],
                    [
                        [1, 1, -1],
                        [0, 1, 1],
                        [1, 1, 1],
                        [0, 1, -1],
                    ],
                    [
                        [2, 1, 1],
                        [1, 1, -1],
                        [2, 1, -1],
                        [1, 1, 1],
                    ],
                ],
                [
                    [
                        [0, 1, -1],
                        [2, 4, -1],
                        [0, 1, 1],
                        [2, 4, 1],
                    ],
                    [
                        [1, 4, 1],
                        [0, 1, 1],
                        [1, 4, -1],
                        [0, 1, -1],
                    ],
                    [
                        [2, 4, -1],
                        [1, 4, 1],
                        [2, 4, 1],
                        [1, 4, -1],
                    ],
                ],
                [
                    [
                        [2, 4, 1],
                        [0, 1, 1],
                        [2, 4, -1],
                        [0, 1, -1],
                    ],
                    [
                        [1, 1, -1],
                        [2, 4, -1],
                        [1, 1, 1],
                        [2, 4, 1],
                    ],
                    [
                        [0, 1, 1],
                        [1, 1, -1],
                        [0, 1, -1],
                        [1, 1, 1],
                    ],
                ],
            ]),
            (Cube.prototype.equals = function (e) {
                return (
                    e.getLayerCount() == this.layerCount &&
                    Arrays.equals(e.getCornerLocations(), this.cornerLoc) &&
                    Arrays.equals(e.getCornerOrientations(), this.cornerOrient) &&
                    Arrays.equals(e.getEdgeLocations(), this.edgeLoc) &&
                    Arrays.equals(e.getEdgeOrientations(), this.edgeOrient) &&
                    Arrays.equals(e.getSideLocations(), this.sideLoc) &&
                    Arrays.equals(e.getSideOrientations(), this.sideOrient)
                );
            }),
            (Cube.prototype.reset = function () {
                this.transformType = this.IDENTITY_TRANSFORM;
                var e;
                for (e = 0; e < this.cornerLoc.length; e++) (this.cornerLoc[e] = e), (this.cornerOrient[e] = 0);
                for (e = 0; e < this.edgeLoc.length; e++) (this.edgeLoc[e] = e), (this.edgeOrient[e] = 0);
                for (e = 0; e < this.sideLoc.length; e++) (this.sideLoc[e] = e), (this.sideOrient[e] = 0);
                this.fireCubeChanged(new CubeEvent(this, 0, 0, 0));
            }),
            (Cube.prototype.isSolved = function () {
                var e;
                for (e = 0; e < this.cornerLoc.length; e++) {
                    if (this.cornerLoc[e] != e) return !1;
                    if (this.cornerOrient[e] != 0) return !1;
                }
                for (e = 0; e < this.edgeLoc.length; e++) {
                    if (this.edgeLoc[e] != e) return !1;
                    if (this.edgeOrient[e] != 0) return !1;
                }
                for (e = 0; e < this.sideLoc.length; e++) {
                    if (this.sideLoc[e] != e) return !1;
                    if (this.sideOrient[e] != 0) return !1;
                }
                return !0;
            }),
            (Cube.prototype.addCubeListener = function (e) {
                this.listenerList[this.listenerList.length] = e;
            }),
            (Cube.prototype.removeCubeListener = function (e) {
                for (var t = 0; t < this.listenerList.length; t++)
                    if (this.listenerList[t] == e) {
                        this.listenerList = this.listenerList.slice(0, t) + this.listenerList.slice(t + 1);
                        break;
                    }
            }),
            (Cube.prototype.fireCubeTwisted = function (e) {
                if (!this.quiet) {
                    var t = this.listenerList;
                    for (var n = t.length - 1; n >= 0; n -= 1) t[n].cubeTwisted(e);
                }
            }),
            (Cube.prototype.fireCubeChanged = function (e) {
                if (!this.quiet) {
                    var t = this.listenerList;
                    for (var n = t.length - 1; n >= 0; n -= 1) t[n].cubeChanged(e);
                }
            }),
            (Cube.prototype.setQuiet = function (e) {
                e != this.quiet && ((this.quiet = e), this.quiet || this.fireCubeChanged(new CubeEvent(this, 0, 0, 0)));
            }),
            (Cube.prototype.isQuiet = function () {
                return this.quiet;
            }),
            (Cube.prototype.getCornerLocations = function () {
                return this.cornerLoc;
            }),
            (Cube.prototype.getCornerOrientations = function () {
                return this.cornerOrient;
            }),
            (Cube.prototype.setCorners = function (e, t) {
                (this.transformType = this.UNKNOWN_TRANSFORM), (this.cornerLoc = e.slice(0, this.cornerLoc.length)), (this.cornerOrient = t.slice(0, this.cornerOrient.length)), this.fireCubeChanged(new CubeEvent(this, 0, 0, 0));
            }),
            (Cube.prototype.getCornerAt = function (e) {
                return this.cornerLoc[e];
            }),
            (Cube.prototype.getCornerLocation = function (e) {
                var t;
                if (this.cornerLoc[e] == e) return e;
                for (t = this.cornerLoc.length - 1; t >= 0; t--) if (this.cornerLoc[t] == e) break;
                return t;
            }),
            (Cube.prototype.getCornerCount = function () {
                return this.cornerLoc.length;
            }),
            (Cube.prototype.getEdgeCount = function () {
                return this.edgeLoc.length;
            }),
            (Cube.prototype.getSideCount = function () {
                return this.sideLoc.length;
            }),
            (Cube.prototype.getCornerOrientation = function (e) {
                return this.cornerOrient[this.getCornerLocation(e)];
            }),
            (Cube.prototype.getEdgeLocations = function () {
                return this.edgeLoc;
            }),
            (Cube.prototype.getEdgeOrientations = function () {
                return this.edgeOrient;
            }),
            (Cube.prototype.setEdges = function (e, t) {
                (this.transformType = this.UNKNOWN_TRANSFORM), (this.edgeLoc = e.slice(0, this.edgeLoc.length)), (this.edgeOrientations = this.edgeOrient.slice(0, this.edgeOrient.length)), this.fireCubeChanged(new CubeEvent(this, 0, 0, 0));
            }),
            (Cube.prototype.getEdgeAt = function (e) {
                return this.edgeLoc[e];
            }),
            (Cube.prototype.getEdgeLocation = function (e) {
                var t;
                if (this.edgeLoc[e] == e) return e;
                for (t = this.edgeLoc.length - 1; t >= 0; t--) if (this.edgeLoc[t] == e) break;
                return t;
            }),
            (Cube.prototype.getEdgeOrientation = function (e) {
                return this.edgeOrient[this.getEdgeLocation(e)];
            }),
            (Cube.prototype.getSideLocations = function () {
                return this.sideLoc;
            }),
            (Cube.prototype.getSideOrientations = function () {
                return this.sideOrient;
            }),
            (Cube.prototype.setSides = function (e, t) {
                (this.transformType = this.UNKNOWN_TRANSFORM), (this.sideLoc = e.slice(0, this.sideLoc.length)), (this.sideOrient = t.slice(0, this.sideOrient.length)), this.fireCubeChanged(new CubeEvent(this, 0, 0, 0));
            }),
            (Cube.prototype.getSideAt = function (e) {
                return this.sideLoc[e];
            }),
            (Cube.prototype.getSideFace = function (e) {
                return this.getSideLocation(e) % 6;
            }),
            (Cube.prototype.getSideLocation = function (e) {
                var t;
                if (this.sideLoc[e] == e) return e;
                for (t = this.sideLoc.length - 1; t >= 0; t--) if (this.sideLoc[t] == e) break;
                return t;
            }),
            (Cube.prototype.getSideOrientation = function (e) {
                return this.sideOrient[this.getSideLocation(e)];
            }),
            (Cube.prototype.setTo = function (e) {
                if (e.getLayerCount() != this.getLayerCount()) throw "that.layers=" + e.getLayerCount() + " must match this.layers=" + this.getLayerCount();
                (this.transformType = e.transformType),
                    (this.transformAxis = e.transformAxis),
                    (this.transformAngle = e.transformAngle),
                    (this.transformMask = e.transformMask),
                    (this.sideLoc = e.getSideLocations().slice(0, this.sideLoc.length)),
                    (this.sideOrient = e.getSideOrientations().slice(0, this.sideOrient.length)),
                    (this.edgeLoc = e.getEdgeLocations().slice(0, this.edgeLoc.length)),
                    (this.edgeOrient = e.getEdgeOrientations().slice(0, this.edgeOrient.length)),
                    (this.cornerLoc = e.getCornerLocations().slice(0, this.cornerLoc.length)),
                    (this.cornerOrient = e.getCornerOrientations().slice(0, this.cornerOrient.length)),
                    this.fireCubeChanged(new CubeEvent(this, 0, 0, 0));
            }),
            (Cube.prototype.getLayerCount = function () {
                return this.layerCount;
            }),
            (Cube.prototype.transform = function (e, t, n) {
                switch (this.transformType) {
                    case this.IDENTITY_TRANSFORM:
                        (this.transformAxis = e), (this.transformMask = t), (this.transformAngle = n), (this.transformType = this.SINGLE_AXIS_TRANSFORM);
                        break;
                    case this.SINGLE_AXIS_TRANSFORM:
                        this.transformAxis == e
                            ? this.transformAngle == n
                                ? this.transformMask == t
                                    ? (this.transformAngle = (this.transformAngle + n) % 3)
                                    : (this.transformMask & t) == 0
                                    ? (this.transformMask |= t)
                                    : (this.transformType = this.GENERAL_TRANSFORM)
                                : this.transformMask == t
                                ? (this.transformAngle = (this.transformAngle + n) % 3)
                                : (this.transformType = this.GENERAL_TRANSFORM)
                            : (this.transformType = this.GENERAL_TRANSFORM);
                }
                this.transform0(e, t, n), this.isQuiet() || this.fireCubeTwisted(new CubeEvent(this, e, t, n));
            }),
            (Cube.prototype.transformFromCube = function (e) {
                if (e.getLayerCount() != this.getLayerCount()) throw "tx.layers=" + e.getLayerCount() + " must match this.layers=" + this.getLayerCount();
                var t = 0,
                    n = 0,
                    r = 0,
                    i = e;
                switch (i.transformType) {
                    case this.IDENTITY_TRANSFORM:
                        return;
                    case SINGLE_AXIS_TRANSFORM:
                        (t = i.transformAxis), (n = i.transformAngle), (r = i.transformMask);
                }
                if (r == 0) {
                    this.transformType = this.UNKNOWN_TRANSFORM;
                    var s, o;
                    (s = this.cornerLoc.slice(0)), (o = this.cornerOrient.slice(0));
                    var u = e.getCornerLocations(),
                        a = e.getCornerOrientations();
                    for (var f = 0; f < u.length; f++) (this.cornerLoc[f] = s[u[f]]), (this.cornerOrient[f] = (o[u[f]] + a[f]) % 3);
                    (s = this.edgeLoc.slice(0)), (o = this.edgeOrient.slice(0)), (u = e.getEdgeLocations()), (a = e.getEdgeOrientations());
                    for (var f = 0; f < u.length; f++) (this.edgeLoc[f] = s[u[f]]), (this.edgeOrient[f] = (o[u[f]] + a[f]) % 2);
                    (s = this.sideLoc.slice(0)), (o = this.sideOrient.slice(0)), (u = e.getSideLocations()), (a = e.getSideOrientations());
                    for (var f = 0; f < u.length; f++) (this.sideLoc[f] = s[u[f]]), (this.sideOrient[f] = (o[u[f]] + a[f]) % 4);
                }
                r == 0 ? this.fireCubeChanged(new CubeEvent(this, 0, 0, 0)) : this.transform(t, r, n);
            }),
            (Cube.prototype.twoCycle = function (e, t, n, r, i, s, o) {
                var u;
                (u = e[t]), (e[t] = e[n]), (e[n] = u), (u = r[t]), (r[t] = (r[n] + i) % o), (r[n] = (u + s) % o);
            }),
            (Cube.prototype.fourCycle = function (e, t, n, r, i, s, o, u, a, f, l) {
                var c;
                (c = e[t]), (e[t] = e[n]), (e[n] = e[r]), (e[r] = e[i]), (e[i] = c), (c = s[t]), (s[t] = (s[n] + o) % l), (s[n] = (s[r] + u) % l), (s[r] = (s[i] + a) % l), (s[i] = (c + f) % l);
            }),
            (Cube.prototype.getPartFace = function (e, t) {
                return e < this.cornerLoc.length
                    ? getCornerFace(e, t)
                    : e < this.cornerLoc.length + this.edgeLoc.length
                    ? getEdgeFace(e - this.cornerLoc.length, t)
                    : e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length
                    ? getSideFace(e - this.cornerLoc.length - this.edgeLoc.length)
                    : getCenterSide(t);
            }),
            (Cube.prototype.getPartOrientation = function (e) {
                return e < this.cornerLoc.length
                    ? this.getCornerOrientation(e)
                    : e < this.cornerLoc.length + this.edgeLoc.length
                    ? this.getEdgeOrientation(e - this.cornerLoc.length)
                    : e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length
                    ? this.getSideOrientation(e - this.cornerLoc.length - this.edgeLoc.length)
                    : this.getCubeOrientation();
            }),
            (Cube.prototype.getPartLocation = function (e) {
                return e < this.cornerLoc.length
                    ? this.getCornerLocation(e)
                    : e < this.cornerLoc.length + this.edgeLoc.length
                    ? this.cornerLoc.length + this.getEdgeLocation(e - this.cornerLoc.length)
                    : e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length
                    ? this.cornerLoc.length + this.edgeLoc.length + this.getSideLocation(e - this.cornerLoc.length - this.edgeLoc.length)
                    : 0;
            }),
            (Cube.prototype.getPartAxis = function (e, t) {
                if (e < this.cornerLoc.length) {
                    var n = getPartFace(e, t);
                    return n % 3;
                }
                if (e < this.cornerLoc.length + this.edgeLoc.length) return EDGE_TO_AXIS_MAP[getEdgeLocation(e - this.cornerLoc.length) % 12];
                if (e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length) {
                    var n = getPartFace(e, t);
                    return n % 3;
                }
                return -1;
            }),
            (Cube.prototype.getPartAngle = function (e, t) {
                if (e >= this.cornerLoc.length && e < this.cornerLoc.length + this.edgeLoc.length) return EDGE_TO_ANGLE_MAP[getEdgeLocation(e - this.cornerLoc.length) % 12][(getEdgeOrientation(e - this.cornerLoc.length) + t) % 2];
                var n = getPartFace(e, t);
                switch (n) {
                    case 0:
                    case 1:
                    case 2:
                        return 1;
                    case 3:
                    case 4:
                    case 5:
                    default:
                        return -1;
                }
            }),
            (Cube.prototype.getPartType = function (e) {
                return e < this.cornerLoc.length
                    ? this.CORNER_PART
                    : e < this.cornerLoc.length + this.edgeLoc.length
                    ? this.EDGE_PART
                    : e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length
                    ? this.SIDE_PART
                    : this.CENTER_PART;
            }),
            (Cube.prototype.getPartAt = function (e) {
                return e < this.cornerLoc.length
                    ? this.getCornerAt(e)
                    : e < this.cornerLoc.length + this.edgeLoc.length
                    ? this.cornerLoc.length + this.getEdgeAt(e - this.cornerLoc.length)
                    : e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length
                    ? this.cornerLoc.length + this.edgeLoc.length + this.getSideAt(e - this.cornerLoc.length - this.edgeLoc.length)
                    : this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length;
            }),
            (Cube.prototype.getTypedIndexForPartIndex = function (e) {
                return e < this.cornerLoc.length
                    ? e
                    : e < this.cornerLoc.length + this.edgeLoc.length
                    ? e - this.cornerLoc.length
                    : e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length
                    ? e - this.cornerLoc.length - this.edgeLoc.length
                    : e - this.cornerLoc.length - this.edgeLoc.length - this.sideLoc.length;
            }),
            (Cube.prototype.getCenterSide = function (e) {
                return this.CENTER_TO_SIDE_MAP[getCubeOrientation()][e];
            }),
            (Cube.prototype.getEdgeFace = function (e, t) {
                var n = getEdgeLocation(e) % 12,
                    r = (this.edgeOrient[n] + t) % 2;
                return this.EDGE_TO_FACE_MAP[n][r];
            }),
            (Cube.prototype.getCornerFace = function (e, t) {
                var n = getCornerLocation(e),
                    r = (3 + t - this.cornerOrient[n]) % 3;
                return this.CORNER_TO_FACE_MAP[n][r];
            }),
            (Cube.prototype.getCubeOrientation = function () {
                if (this.sideLoc.length == 0) return -1;
                switch (this.sideLoc[2] * 6 + this.sideLoc[0]) {
                    case 12:
                        return 0;
                    case 24:
                        return 1;
                    case 30:
                        return 2;
                    case 6:
                        return 3;
                    case 5:
                        return 4;
                    case 33:
                        return 5;
                    case 20:
                        return 6;
                    case 13:
                        return 7;
                    case 15:
                        return 8;
                    case 16:
                        return 9;
                    case 1:
                        return 10;
                    case 9:
                        return 11;
                    case 22:
                        return 12;
                    case 2:
                        return 13;
                    case 23:
                        return 14;
                    case 4:
                        return 15;
                    case 27:
                        return 16;
                    case 19:
                        return 17;
                    case 25:
                        return 18;
                    case 29:
                        return 19;
                    case 34:
                        return 20;
                    case 31:
                        return 21;
                    case 11:
                        return 22;
                    case 8:
                        return 23;
                    default:
                        return -1;
                }
            }),
            (Cube.prototype.getPartCount = function () {
                return getCornerCount() + getEdgeCount() + getSideCount() + 1;
            }),
            (Cube.prototype.getUnsolvedParts = function () {
                var e = new Array(this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length),
                    t = 0;
                for (var n = 0; n < this.cornerLoc.length; n++) if (this.cornerLoc[n] != n || this.cornerOrient[n] != 0) e[t++] = n;
                for (var n = 0; n < this.edgeLoc.length; n++) if (this.edgeLoc[n] != n || this.edgeOrient[n] != 0) e[t++] = n + this.cornerLoc.length;
                for (var n = 0; n < this.sideLoc.length; n++) if (this.sideLoc[n] != n || this.sideOrient[n] != 0) e[t++] = n + this.cornerLoc.length + this.edgeLoc.length;
                var r = new Array(t);
                return (r = e.slice(0, t)), r;
            }),
            (Cube.prototype.scramble = function (e) {
                e == null && (e = 21), this.setQuiet(!0);
                var t = -1,
                    n,
                    r,
                    i;
                for (var s = 0; s < e; s++) {
                    while ((n = Math.floor(Math.random() * 3)) == t);
                    (t = n), (r = 1 << Math.floor(Math.random() * this.layerCount)), console.log(r);
                    while ((i = Math.floor(Math.random() * 5) - 2) == 0);
                    this.transform(n, r, i);
                }
                this.setQuiet(!1);
            }),
            (Cube.prototype.toPermutationString = function () {
                return this.toPermutationString0("PRECIRCUMFIX", "r", "u", "f", "l", "d", "b", "+", "++", "-", "(", ")", ",");
            }),
            (Cube.prototype.toPermutationString0 = function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
                var p = this,
                    d = "",
                    v = this.toCornerPermutationString(e, t, n, r, i, s, o, u, a, f, l, c, h),
                    m = this.toEdgePermutationString(e, t, n, r, i, s, o, u, a, f, l, c, h),
                    g = this.toSidePermutationString(e, t, n, r, i, s, o, u, a, f, l, c, h);
                return (d += v), d.length > 0 && m.length > 0 && (d += "\n"), (d += m), d.length > 0 && g.length > 0 && (d += "\n"), (d += g), d.length == 0 && ((d += l), (d += c)), d;
            }),
            (Cube.prototype.toCornerPermutationString = function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
                var p = this,
                    d = p.cornerLoc,
                    v = p.edgeLoc,
                    m = p.sideLoc,
                    g = p.cornerOrient,
                    y = p.edgeOrient,
                    b = p.sideOrient,
                    w = Array(Math.max(Math.max(p.getCornerCount(), p.getEdgeCount()), p.getSideCount())),
                    E = p.getLayerCount(),
                    S = E % 2 == 0,
                    x = "",
                    T = Array(),
                    N,
                    C,
                    k,
                    L,
                    A,
                    O,
                    M,
                    _,
                    D = [
                        [n, t, r],
                        [s, r, t],
                        [n, o, t],
                        [s, t, o],
                        [n, i, o],
                        [s, o, i],
                        [n, r, i],
                        [s, i, r],
                    ];
                (T = new Array(p.getCornerCount())), (_ = !0);
                for (N = 0, O = p.getCornerCount(); N < O; N++)
                    if (!T[N]) {
                        if (d[N] == N && g[N] == 0) continue;
                        var P = 0,
                            H = 0;
                        C = N;
                        while (!T[C]) {
                            (T[C] = !0), (w[P++] = C), d[C] < d[w[H]] && (H = P - 1);
                            for (k = 0; d[k] != C; k++);
                            C = k;
                        }
                        _ ? (_ = !1) : (x += " "), e == "PREFIX" ? ((A = x.length), (x += l)) : e == "PRECIRCUMFIX" ? ((x += l), (A = x.length)) : ((x += l), (A = -1)), (M = 0);
                        for (k = 0; k < P; k++) {
                            (C = w[(H + k) % P]), k != 0 && ((x += h), (M = (M + g[C]) % 3));
                            switch (M) {
                                case 0:
                                    (x += D[C][0]), (x += D[C][1]), (x += D[C][2]);
                                    break;
                                case 2:
                                    (x += D[C][1]), (x += D[C][2]), (x += D[C][0]);
                                    break;
                                case 1:
                                    (x += D[C][2]), (x += D[C][0]), (x += D[C][1]);
                            }
                        }
                        (C = w[H]), (M = (M + g[C]) % 3), e == "POSTCIRCUMFIX" ? ((A = x.length), (x += c)) : e == "SUFFIX" ? ((x += c), (A = x.length)) : (x += c), M != 0 && (x = x.substring(0, A) + (M == 1 ? f : u) + x.substring(A));
                    }
                return x;
            }),
            (Cube.prototype.toEdgePermutationString = function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
                var p = this,
                    d = p.getCornerLocations(),
                    v = p.getEdgeLocations(),
                    m = p.getSideLocations(),
                    g = p.getCornerOrientations(),
                    y = p.getEdgeOrientations(),
                    b = p.getSideOrientations(),
                    w = Array(Math.max(Math.max(p.getCornerCount(), p.getEdgeCount()), p.getSideCount())),
                    E = p.getLayerCount(),
                    S = E % 2 == 0,
                    x = "",
                    T = Array(),
                    N,
                    C,
                    k,
                    L,
                    A,
                    O,
                    M,
                    _;
                if (v.length > 0) {
                    var D = [
                        [n, t],
                        [t, r],
                        [s, t],
                        [o, n],
                        [t, o],
                        [o, s],
                        [n, i],
                        [i, o],
                        [s, i],
                        [r, n],
                        [i, r],
                        [r, s],
                    ];
                    (T = new Array(p.getEdgeCount())), (_ = !0);
                    var P = -1;
                    for (N = 0, O = p.getEdgeCount(); N < O; N++)
                        if (!T[N]) {
                            if (v[N] == N && y[N] == 0) continue;
                            var H = 0,
                                B = 0;
                            C = N;
                            while (!T[C]) {
                                (T[C] = !0), (w[H++] = C), P == C % 12 && (B = H - 1);
                                for (k = 0; v[k] != C; k++);
                                C = k;
                            }
                            (P = w[B] % 12), _ ? (_ = !1) : (x += " "), e == "PREFIX" ? ((A = x.length), (x += l)) : e == "PRECIRCUMFIX" ? ((x += l), (A = x.length)) : ((x += l), (A = -1)), (M = 0);
                            for (k = 0; k < H; k++)
                                (C = w[(B + k) % H]), k != 0 && ((x += h), (M ^= y[C])), M == 1 ? ((x += D[C % 12][1]), (x += D[C % 12][0])) : ((x += D[C % 12][0]), (x += D[C % 12][1])), S ? (x += C / 12 + 1) : C >= 12 && (x += C / 12);
                            (C = w[B]), e == "POSTCIRCUMFIX" ? ((A = x.length), (x += c)) : e == "SUFFIX" ? ((x += c), (A = x.length)) : (x += c), (M ^ y[C]) == 1 && (x = x.substring(0, A) + u + x.substring(A));
                        }
                }
                return x;
            }),
            (Cube.prototype.toSidePermutationString = function (e, t, n, r, i, s, o, u, a, f, l, c, h) {
                var p = this,
                    d = p.getCornerLocations(),
                    v = p.getEdgeLocations(),
                    m = p.getSideLocations(),
                    g = p.getCornerOrientations(),
                    y = p.getEdgeOrientations(),
                    b = p.getSideOrientations(),
                    w = new Array(Math.max(Math.max(p.getCornerCount(), p.getEdgeCount()), p.getSideCount())),
                    E = p.getLayerCount(),
                    S = E % 2 == 0,
                    x = "",
                    T,
                    N,
                    C,
                    k,
                    L,
                    A,
                    O,
                    M,
                    _;
                if (m.length > 0) {
                    var D = [t, n, r, i, s, o],
                        P = ["", f, a, u];
                    (T = new Array(p.getSideCount())), (_ = !0);
                    var H;
                    for (var B = 0; B < 2; B++) {
                        for (N = 0; N < T.length; N++) T[N] = !1;
                        for (var j = 0, F = 6; j < F; j++) {
                            H = -1;
                            for (var I = 0, q = p.getSideCount() / 6; I < q; I++) {
                                N = I + j * q;
                                if (!T[N]) {
                                    if (m[N] == N && b[N] == 0) continue;
                                    var R = 0,
                                        U = 0,
                                        z = !0;
                                    C = N;
                                    while (!T[C]) {
                                        (T[C] = !0), (w[R++] = C), C % 6 != N % 6 && (z = !1), w[U] > C && (U = R - 1);
                                        for (k = 0; m[k] != C; k++);
                                        C = k;
                                    }
                                    H = w[U] % 6;
                                    if (z == (B == 0)) {
                                        _ ? (_ = !1) : (x += " "), e == "PREFIX" ? ((A = x.length), (x += l)) : e == "PRECIRCUMFIX" ? ((x += l), (A = x.length)) : ((x += l), (A = -1)), (M = 0);
                                        for (k = 0; k < R; k++) {
                                            (C = w[(U + k) % R]), k != 0 && ((x += h), (M = (M + b[C]) % 4));
                                            if (e == "PREFIX" || e == "PRECIRCUMFIX" || e == "POSTCIRCUMFIX") x += P[M];
                                            (x += D[C % 6]), e == "SUFFIX" && (x += P[M]), S ? (x += C / 6 + 1) : C >= 6 && (x += C / 6);
                                        }
                                        (C = w[U]), (M = (M + b[C]) % 4), e == "POSTCIRCUMFIX" ? ((A = x.length), (x += c)) : e == "SUFFIX" ? ((x += c), (A = x.length)) : (x += c), M != 0 && (x = x.substring(0, A) + P[M] + x.substring(A));
                                    }
                                }
                            }
                        }
                    }
                }
                return x;
            }),
            {
                newCube: function () {
                    return new Cube();
                },
            }
        );
    }),
    define("RubiksCube", ["Cube"], function (e) {
        return (
            (RubiksCube = function () {
                this.init(3);
            }),
            (RubiksCube.prototype = e.newCube()),
            (RubiksCube.prototype.DEBUG = !1),
            (RubiksCube.prototype.NUMBER_OF_SIDE_PARTS = 6),
            (RubiksCube.prototype.NUMBER_OF_EDGE_PARTS = 12),
            (RubiksCube.prototype.SIDE_TRANSLATION = [
                [0, 4],
                [1, 4],
                [2, 4],
                [3, 4],
                [4, 4],
                [5, 4],
            ]),
            (RubiksCube.prototype.EDGE_TRANSLATION = [
                [1, 5, 0, 1],
                [0, 3, 2, 5],
                [4, 5, 0, 7],
                [5, 1, 1, 1],
                [0, 5, 5, 3],
                [5, 7, 4, 7],
                [1, 3, 3, 1],
                [3, 3, 5, 5],
                [4, 3, 3, 7],
                [2, 1, 1, 7],
                [3, 5, 2, 3],
                [2, 7, 4, 1],
            ]),
            (RubiksCube.prototype.CORNER_TRANSLATION = [
                [1, 8, 0, 0, 2, 2],
                [4, 2, 2, 8, 0, 6],
                [1, 2, 5, 0, 0, 2],
                [4, 8, 0, 8, 5, 6],
                [1, 0, 3, 0, 5, 2],
                [4, 6, 5, 8, 3, 6],
                [1, 6, 2, 0, 3, 2],
                [4, 0, 3, 8, 2, 6],
            ]),
            (RubiksCube.prototype.EDGE_SWIPE_TABLE = [
                [
                    [
                        [2, 2, 1],
                        [0, 4, -1],
                        [2, 2, -1],
                        [0, 4, 1],
                    ],
                    [
                        [2, 2, -1],
                        [1, 4, -1],
                        [2, 2, 1],
                        [1, 4, 1],
                    ],
                ],
                [
                    [
                        [1, 2, 1],
                        [2, 4, -1],
                        [1, 2, -1],
                        [2, 4, 1],
                    ],
                    [
                        [1, 2, -1],
                        [0, 4, -1],
                        [1, 2, 1],
                        [0, 4, 1],
                    ],
                ],
                [
                    [
                        [2, 2, -1],
                        [0, 4, -1],
                        [2, 2, 1],
                        [0, 4, 1],
                    ],
                    [
                        [2, 2, 1],
                        [1, 1, 1],
                        [2, 2, -1],
                        [1, 1, -1],
                    ],
                ],
                [
                    [
                        [0, 2, -1],
                        [1, 4, -1],
                        [0, 2, 1],
                        [1, 4, 1],
                    ],
                    [
                        [0, 2, 1],
                        [2, 1, 1],
                        [0, 2, -1],
                        [2, 1, -1],
                    ],
                ],
                [
                    [
                        [1, 2, -1],
                        [2, 1, 1],
                        [1, 2, 1],
                        [2, 1, -1],
                    ],
                    [
                        [1, 2, 1],
                        [0, 4, -1],
                        [1, 2, -1],
                        [0, 4, 1],
                    ],
                ],
                [
                    [
                        [0, 2, 1],
                        [1, 1, 1],
                        [0, 2, -1],
                        [1, 1, -1],
                    ],
                    [
                        [0, 2, -1],
                        [2, 1, 1],
                        [0, 2, 1],
                        [2, 1, -1],
                    ],
                ],
                [
                    [
                        [2, 2, -1],
                        [0, 1, 1],
                        [2, 2, 1],
                        [0, 1, -1],
                    ],
                    [
                        [2, 2, 1],
                        [1, 4, -1],
                        [2, 2, -1],
                        [1, 4, 1],
                    ],
                ],
                [
                    [
                        [1, 2, 1],
                        [2, 1, 1],
                        [1, 2, -1],
                        [2, 1, -1],
                    ],
                    [
                        [1, 2, -1],
                        [0, 1, 1],
                        [1, 2, 1],
                        [0, 1, -1],
                    ],
                ],
                [
                    [
                        [2, 2, 1],
                        [0, 1, 1],
                        [2, 2, -1],
                        [0, 1, -1],
                    ],
                    [
                        [2, 2, -1],
                        [1, 1, 1],
                        [2, 2, 1],
                        [1, 1, -1],
                    ],
                ],
                [
                    [
                        [0, 2, 1],
                        [1, 4, -1],
                        [0, 2, -1],
                        [1, 4, 1],
                    ],
                    [
                        [0, 2, -1],
                        [2, 4, -1],
                        [0, 2, 1],
                        [2, 4, 1],
                    ],
                ],
                [
                    [
                        [1, 2, -1],
                        [2, 4, -1],
                        [1, 2, 1],
                        [2, 4, 1],
                    ],
                    [
                        [1, 2, 1],
                        [0, 1, 1],
                        [1, 2, -1],
                        [0, 1, -1],
                    ],
                ],
                [
                    [
                        [0, 2, -1],
                        [1, 1, 1],
                        [0, 2, 1],
                        [1, 1, -1],
                    ],
                    [
                        [0, 2, 1],
                        [2, 4, -1],
                        [0, 2, -1],
                        [2, 4, 1],
                    ],
                ],
            ]),
            (RubiksCube.prototype.SIDE_SWIPE_TABLE = [
                [
                    [1, 2, -1],
                    [2, 2, 1],
                    [1, 2, 1],
                    [2, 2, -1],
                ],
                [
                    [2, 2, -1],
                    [0, 2, 1],
                    [2, 2, 1],
                    [0, 2, -1],
                ],
                [
                    [0, 2, -1],
                    [1, 2, 1],
                    [0, 2, 1],
                    [1, 2, -1],
                ],
                [
                    [2, 2, 1],
                    [1, 2, -1],
                    [2, 2, -1],
                    [1, 2, 1],
                ],
                [
                    [0, 2, 1],
                    [2, 2, -1],
                    [0, 2, -1],
                    [2, 2, 1],
                ],
                [
                    [1, 2, 1],
                    [0, 2, -1],
                    [1, 2, -1],
                    [0, 2, 1],
                ],
            ]),
            (RubiksCube.prototype.getPartLayerMask = function (e, t) {
                var n = this.getPartFace(e, t);
                return e < this.cornerLoc.length ? (n < 3 ? 4 : 1) : e < this.cornerLoc.length + this.edgeLoc.length ? 2 : e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length ? (n < 3 ? 4 : 1) : 0;
            }),
            (RubiksCube.prototype.getPartSwipeAxis = function (e, t, n) {
                if (e < this.cornerLoc.length) {
                    var r = this.getCornerLocation(e),
                        i = (3 - this.getPartOrientation(e) + t) % 3;
                    return this.CORNER_SWIPE_TABLE[r][i][n][0];
                }
                if (e < this.cornerLoc.length + this.edgeLoc.length) {
                    var s = e - this.cornerLoc.length,
                        r = this.getEdgeLocation(s),
                        i = (2 - this.getPartOrientation(e) + t) % 2;
                    return this.EDGE_SWIPE_TABLE[r][i][n][0];
                }
                if (e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length) {
                    var r = this.getSideLocation(e - this.cornerLoc.length - this.edgeLoc.length),
                        i = (4 - this.getPartOrientation(e) + n) % 4;
                    return this.SIDE_SWIPE_TABLE[r][i][0];
                }
                return -1;
            }),
            (RubiksCube.prototype.getPartSwipeLayerMask = function (e, t, n) {
                if (e < this.cornerLoc.length) {
                    var r = this.getCornerLocation(e),
                        i = (3 - this.getPartOrientation(e) + t) % 3;
                    return this.CORNER_SWIPE_TABLE[r][i][n][1];
                }
                if (e < this.cornerLoc.length + this.edgeLoc.length) {
                    var s = e - this.cornerLoc.length,
                        r = this.getEdgeLocation(s),
                        i = (2 - this.getPartOrientation(e) + t) % 2;
                    return this.EDGE_SWIPE_TABLE[r][i][n][1];
                }
                if (e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length) {
                    var r = this.getSideLocation(e - this.cornerLoc.length - this.edgeLoc.length),
                        i = (4 - this.getPartOrientation(e) + n) % 4;
                    return this.SIDE_SWIPE_TABLE[r][i][1];
                }
                return 0;
            }),
            (RubiksCube.prototype.getPartSwipeAngle = function (e, t, n) {
                if (e < this.cornerLoc.length) {
                    var r = this.getCornerLocation(e),
                        i = this.getPartOrientation(e),
                        s = (3 - i + t) % 3,
                        o = n,
                        u = this.CORNER_SWIPE_TABLE[r][s][o][2];
                    return i != 2 || (s != 0 && s != 2) ? i == 1 && (s == 1 || s == 2) && (u = -u) : (u = -u), u;
                }
                if (e < this.cornerLoc.length + this.edgeLoc.length) {
                    var a = e - this.cornerLoc.length,
                        r = this.getEdgeLocation(a),
                        i = this.getEdgeOrientation(a),
                        s = (2 - i + t) % 2,
                        o = n,
                        u = this.EDGE_SWIPE_TABLE[r][s][o][2];
                    return u;
                }
                if (e < this.cornerLoc.length + this.edgeLoc.length + this.sideLoc.length) {
                    var r = this.getSideLocation(e - this.cornerLoc.length - this.edgeLoc.length),
                        i = (4 - this.getPartOrientation(e) + n) % 4;
                    return this.SIDE_SWIPE_TABLE[r][i][2];
                }
                return 0;
            }),
            (RubiksCube.prototype.transform0 = function (e, t, n) {
                this.DEBUG && window.console.log("RubiksCube#" + this + ".transform(ax=" + e + ",msk=" + t + ",ang:" + n + ")");
                if (e < 0 || e > 2) throw "axis: " + e;
                if (t < 0 || t >= 1 << this.layerCount) throw "layerMask: " + t;
                if (n < -2 || n > 2) throw "angle: " + n;
                if (n == 0) return;
                var r = n == -2 ? 2 : n;
                if ((t & 1) != 0)
                    switch (e) {
                        case 0:
                            switch (r) {
                                case -1:
                                    this.twistL();
                                    break;
                                case 1:
                                    this.twistL(), this.twistL(), this.twistL();
                                    break;
                                case 2:
                                    this.twistL(), this.twistL();
                            }
                            break;
                        case 1:
                            switch (r) {
                                case -1:
                                    this.twistD();
                                    break;
                                case 1:
                                    this.twistD(), this.twistD(), this.twistD();
                                    break;
                                case 2:
                                    this.twistD(), this.twistD();
                            }
                            break;
                        case 2:
                            switch (r) {
                                case -1:
                                    this.twistB();
                                    break;
                                case 1:
                                    this.twistB(), this.twistB(), this.twistB();
                                    break;
                                case 2:
                                    this.twistB(), this.twistB();
                            }
                    }
                if ((t & 2) != 0)
                    switch (e) {
                        case 0:
                            switch (r) {
                                case 1:
                                    this.twistMR();
                                    break;
                                case -1:
                                    this.twistMR(), this.twistMR(), this.twistMR();
                                    break;
                                case 2:
                                    this.twistMR(), this.twistMR();
                            }
                            break;
                        case 1:
                            switch (r) {
                                case 1:
                                    this.twistMU();
                                    break;
                                case -1:
                                    this.twistMU(), this.twistMU(), this.twistMU();
                                    break;
                                case 2:
                                    this.twistMU(), this.twistMU();
                            }
                            break;
                        case 2:
                            switch (r) {
                                case 1:
                                    this.twistMF();
                                    break;
                                case -1:
                                    this.twistMF(), this.twistMF(), this.twistMF();
                                    break;
                                case 2:
                                    this.twistMF(), this.twistMF();
                            }
                    }
                if ((t & 4) != 0)
                    switch (e) {
                        case 0:
                            switch (r) {
                                case 1:
                                    this.twistR();
                                    break;
                                case -1:
                                    this.twistR(), this.twistR(), this.twistR();
                                    break;
                                case 2:
                                    this.twistR(), this.twistR();
                            }
                            break;
                        case 1:
                            switch (r) {
                                case 1:
                                    this.twistU();
                                    break;
                                case -1:
                                    this.twistU(), this.twistU(), this.twistU();
                                    break;
                                case 2:
                                    this.twistU(), this.twistU();
                            }
                            break;
                        case 2:
                            switch (r) {
                                case 1:
                                    this.twistF();
                                    break;
                                case -1:
                                    this.twistF(), this.twistF(), this.twistF();
                                    break;
                                case 2:
                                    this.twistF(), this.twistF();
                            }
                    }
            }),
            (RubiksCube.prototype.twistR = function () {
                this.fourCycle(this.cornerLoc, 0, 1, 3, 2, this.cornerOrient, 1, 2, 1, 2, 3), this.fourCycle(this.edgeLoc, 0, 1, 2, 4, this.edgeOrient, 1, 1, 1, 1, 2), (this.sideOrient[0] = (this.sideOrient[0] + 3) % 4);
            }),
            (RubiksCube.prototype.twistU = function () {
                this.fourCycle(this.cornerLoc, 0, 2, 4, 6, this.cornerOrient, 0, 0, 0, 0, 3), this.fourCycle(this.edgeLoc, 0, 3, 6, 9, this.edgeOrient, 1, 1, 1, 1, 2), (this.sideOrient[1] = (this.sideOrient[1] + 3) % 4);
            }),
            (RubiksCube.prototype.twistF = function () {
                this.fourCycle(this.cornerLoc, 6, 7, 1, 0, this.cornerOrient, 1, 2, 1, 2, 3), this.fourCycle(this.edgeLoc, 9, 10, 11, 1, this.edgeOrient, 1, 1, 1, 1, 2), (this.sideOrient[2] = (this.sideOrient[2] + 3) % 4);
            }),
            (RubiksCube.prototype.twistL = function () {
                this.fourCycle(this.cornerLoc, 6, 4, 5, 7, this.cornerOrient, 2, 1, 2, 1, 3), this.fourCycle(this.edgeLoc, 6, 7, 8, 10, this.edgeOrient, 1, 1, 1, 1, 2), (this.sideOrient[3] = (this.sideOrient[3] + 3) % 4);
            }),
            (RubiksCube.prototype.twistD = function () {
                this.fourCycle(this.cornerLoc, 7, 5, 3, 1, this.cornerOrient, 0, 0, 0, 0, 3), this.fourCycle(this.edgeLoc, 2, 11, 8, 5, this.edgeOrient, 1, 1, 1, 1, 2), (this.sideOrient[4] = (this.sideOrient[4] + 3) % 4);
            }),
            (RubiksCube.prototype.twistB = function () {
                this.fourCycle(this.cornerLoc, 2, 3, 5, 4, this.cornerOrient, 1, 2, 1, 2, 3), this.fourCycle(this.edgeLoc, 3, 4, 5, 7, this.edgeOrient, 1, 1, 1, 1, 2), (this.sideOrient[5] = (this.sideOrient[5] + 3) % 4);
            }),
            (RubiksCube.prototype.twistMR = function () {
                this.fourCycle(this.edgeLoc, 3, 9, 11, 5, this.edgeOrient, 1, 1, 1, 1, 2), this.fourCycle(this.sideLoc, 2, 4, 5, 1, this.sideOrient, 2, 3, 2, 1, 4);
            }),
            (RubiksCube.prototype.twistMU = function () {
                this.fourCycle(this.edgeLoc, 1, 4, 7, 10, this.edgeOrient, 1, 1, 1, 1, 2), this.fourCycle(this.sideLoc, 3, 2, 0, 5, this.sideOrient, 2, 1, 2, 3, 4);
            }),
            (RubiksCube.prototype.twistMF = function () {
                this.fourCycle(this.edgeLoc, 0, 6, 8, 2, this.edgeOrient, 1, 1, 1, 1, 2), this.fourCycle(this.sideLoc, 0, 1, 3, 4, this.sideOrient, 1, 2, 3, 2, 4);
            }),
            (RubiksCube.prototype.toStickers = function () {
                var e = new Array(6);
                for (var t = 0; t < 6; t++) e[t] = new Array(9);
                for (var t = 0; t < 6; t++) {
                    var n = this.sideLoc[t];
                    e[this.SIDE_TRANSLATION[t][0]][this.SIDE_TRANSLATION[t][1]] = this.SIDE_TRANSLATION[n][0];
                }
                for (var t = 0; t < 12; t++) {
                    var n = this.edgeLoc[t],
                        r = this.edgeOrient[t];
                    (e[this.EDGE_TRANSLATION[t][0]][this.EDGE_TRANSLATION[t][1]] = r == 0 ? this.EDGE_TRANSLATION[n][0] : this.EDGE_TRANSLATION[n][2]),
                        (e[this.EDGE_TRANSLATION[t][2]][this.EDGE_TRANSLATION[t][3]] = r == 0 ? this.EDGE_TRANSLATION[n][2] : this.EDGE_TRANSLATION[n][0]);
                }
                for (var t = 0; t < 8; t++) {
                    var n = this.cornerLoc[t],
                        r = this.cornerOrient[t];
                    (e[this.CORNER_TRANSLATION[t][0]][this.CORNER_TRANSLATION[t][1]] = r == 0 ? this.CORNER_TRANSLATION[n][0] : r == 1 ? this.CORNER_TRANSLATION[n][2] : this.CORNER_TRANSLATION[n][4]),
                        (e[this.CORNER_TRANSLATION[t][2]][this.CORNER_TRANSLATION[t][3]] = r == 0 ? this.CORNER_TRANSLATION[n][2] : r == 1 ? this.CORNER_TRANSLATION[n][4] : this.CORNER_TRANSLATION[n][0]),
                        (e[this.CORNER_TRANSLATION[t][4]][this.CORNER_TRANSLATION[t][5]] = r == 0 ? this.CORNER_TRANSLATION[n][4] : r == 1 ? this.CORNER_TRANSLATION[n][0] : this.CORNER_TRANSLATION[n][2]);
                }
                return e;
            }),
            (RubiksCube.prototype.setToStickers = function (e) {
                var t = 0,
                    n = 0,
                    r,
                    i = new Array(6),
                    s = new Array(6),
                    o = new Array(12),
                    u = new Array(12),
                    a = new Array(8),
                    f = new Array(8);
                try {
                    for (t = 0; t < 6; t++)
                        for (n = 0; n < 6; n++)
                            if (this.SIDE_TRANSLATION[n][0] == e[t][this.SIDE_TRANSLATION[n][1]]) {
                                i[t] = this.SIDE_TRANSLATION[n][0];
                                break;
                            }
                } catch (l) {
                    throw "Invalid side cube " + t;
                }
                for (t = 0; t < 5; t++) for (n = t + 1; n < 6; n++) if (i[t] == i[n]) throw "Duplicate side cubes " + t + "+" + n;
                for (t = 0; t < 12; t++) {
                    var c = e[this.EDGE_TRANSLATION[t][0]][this.EDGE_TRANSLATION[t][1]],
                        h = e[this.EDGE_TRANSLATION[t][2]][this.EDGE_TRANSLATION[t][3]];
                    for (r = 0; r < 12; r++) {
                        if (this.EDGE_TRANSLATION[r][0] == c && this.EDGE_TRANSLATION[r][2] == h) {
                            u[t] = 0;
                            break;
                        }
                        if (this.EDGE_TRANSLATION[r][0] == h && this.EDGE_TRANSLATION[r][2] == c) {
                            u[t] = 1;
                            break;
                        }
                    }
                    if (r == 12) throw "Invalid edge cube " + t;
                    o[t] = r;
                }
                for (t = 0; t < 11; t++) for (n = t + 1; n < 12; n++) if (o[t] == o[n]) throw "Duplicate edge cubes tempEdgeLoc[" + t + "]=" + o[t] + " tempEdgeLoc[" + n + "]=" + o[n];
                for (t = 0; t < 8; t++) {
                    var c = e[this.CORNER_TRANSLATION[t][0]][this.CORNER_TRANSLATION[t][1]],
                        h = e[this.CORNER_TRANSLATION[t][2]][this.CORNER_TRANSLATION[t][3]],
                        p = e[this.CORNER_TRANSLATION[t][4]][this.CORNER_TRANSLATION[t][5]];
                    for (r = 0; r < 8; r++) {
                        if (this.CORNER_TRANSLATION[r][0] == c && this.CORNER_TRANSLATION[r][2] == h && this.CORNER_TRANSLATION[r][4] == p) {
                            f[t] = 0;
                            break;
                        }
                        if (this.CORNER_TRANSLATION[r][0] == p && this.CORNER_TRANSLATION[r][2] == c && this.CORNER_TRANSLATION[r][4] == h) {
                            f[t] = 1;
                            break;
                        }
                        if (this.CORNER_TRANSLATION[r][0] == h && this.CORNER_TRANSLATION[r][2] == p && this.CORNER_TRANSLATION[r][4] == c) {
                            f[t] = 2;
                            break;
                        }
                    }
                    if (r == 8) throw "Invalid corner cube " + t;
                    a[t] = r;
                }
                for (t = 0; t < 7; t++) for (n = t + 1; n < 8; n++) if (a[t] == a[n]) throw "Duplicate corner cubes tempCornerLoc[" + t + "]=" + a[t] + " tempCornerLoc[" + n + "]=" + a[n];
                (this.sideLoc = i), (this.sideOrient = s), (this.edgeLoc = o), (this.edgeOrient = u), (this.cornerLoc = a), (this.cornerOrient = f), isQuiet() || fireCubeChanged(new CubeEvent(this, 0, 0, 0));
            }),
            (RubiksCube.prototype.clone = function () {
                var e = new RubiksCube();
                return e.setTo(this), e;
            }),
            {
                newRubiksCube: function () {
                    return new RubiksCube();
                },
            }
        );
    }),
    define("CubeAttributes", [], function () {
        return (
            (CubeAttributes = function (e, t, n) {
                (this.partsVisible = new Array(e)),
                    (this.partsFillColor = new Array(e)),
                    (this.partsPhong = new Array(e)),
                    (this.stickersVisible = new Array(t)),
                    (this.stickersFillColor = new Array(t)),
                    (this.stickersPhong = new Array(t)),
                    (this.stickerCountPerFace = n),
                    (this.partExplosion = new Array(e)),
                    (this.stickerExplosion = new Array(t)),
                    (this.xRot = -40),
                    (this.yRot = -40),
                    (this.scaleFactor = 1),
                    (this.explosionFactor = 0),
                    (this.developmentFactor = 0),
                    (this.stickersImageURL = null),
                    (this.twistDuration = 500),
                    (this.userTwistDuration = 500),
                    (this.scrambleTwistDuration = 500 / 3),
                    (this.backgroundColor = [0, 0, 0, 0]);
                for (var r = 0; r < e; r++) (this.partsVisible[r] = !0), (this.stickersVisible[r] = !0), (this.partExplosion[r] = 0);
            }),
            {
                newCubeAttributes: function (e, t, n) {
                    return new CubeAttributes(e, t, n);
                },
            }
        );
    }),
    define("SplineInterpolator", [], function () {
        return (
            (SplineInterpolator = function (e, t, n, r) {
                (this.x1 = e), (this.y1 = t), (this.x2 = n), (this.y2 = r);
            }),
            (SplineInterpolator.prototype.getFraction = function (e) {
                var t = 1 - e,
                    n = 3 * e * t * t,
                    r = 3 * e * e * t,
                    i = e * e * e,
                    s = n * this.y1 + r * this.y2 + i;
                return Math.min(1, Math.max(0, s));
            }),
            {
                newSplineInterpolator: function (e, t, n, r) {
                    return new SplineInterpolator(e, t, n, r);
                },
            }
        );
    }),
    define("AbstractRubiksCubeCube3D", ["Cube3D", "RubiksCube", "CubeAttributes", "SplineInterpolator", "J3DI"], function (e, t, n, r, i) {
        return (
            (AbstractRubiksCubeCube3D = function () {}),
            (AbstractRubiksCubeCube3D.prototype = e.newCube3D()),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D = function (e, n) {
                this.initCube3D(),
                    (this.cornerCount = 8),
                    (this.edgeCount = 12),
                    (this.sideCount = 6),
                    (this.centerCount = 1),
                    (this.partCount = 27),
                    (this.cornerOffset = 0),
                    (this.edgeOffset = 8),
                    (this.sideOffset = 20),
                    (this.centerOffset = 26),
                    (this.stickerCount = 54),
                    (this.cube = t.newRubiksCube()),
                    this.cube.addCubeListener(this),
                    (this.attributes = this.createAttributes()),
                    (this.partToStickerMap = new Array(this.partCount));
                for (var r = 0; r < this.partCount; r++)
                    (this.parts[r] = new Node3D()),
                        (this.partOrientations[r] = new Node3D()),
                        (this.partExplosions[r] = new Node3D()),
                        (this.partLocations[r] = new Node3D()),
                        this.partOrientations[r].add(this.parts[r]),
                        this.partExplosions[r].add(this.partOrientations[r]),
                        this.partLocations[r].add(this.partExplosions[r]),
                        this.add(this.partLocations[r]),
                        (this.identityPartLocations[r] = new J3DIMatrix4()),
                        (this.partToStickerMap[r] = new Array(3));
                for (var r = 0; r < this.stickerCount; r++)
                    (this.partToStickerMap[this.stickerToPartMap[r]][this.stickerToFaceMap[r]] = r),
                        (this.stickers[r] = new Node3D()),
                        (this.stickerOrientations[r] = new Node3D()),
                        (this.stickerExplosions[r] = new Node3D()),
                        (this.stickerLocations[r] = new Node3D()),
                        (this.stickerTranslations[r] = new Node3D()),
                        this.stickerOrientations[r].add(this.stickers[r]),
                        this.stickerExplosions[r].add(this.stickerOrientations[r]),
                        this.stickerLocations[r].add(this.stickerExplosions[r]),
                        this.stickerTranslations[r].add(this.stickerLocations[r]),
                        this.add(this.stickerTranslations[r]),
                        (this.developedStickers[r] = new Node3D()),
                        (this.currentStickerTransforms[r] = new Node3D()),
                        this.add(this.currentStickerTransforms[r]),
                        (this.identityStickerLocations[r] = new J3DIMatrix4());
                this.partSize = n === undefined ? 2 : n;
                var s = this.cornerOffset,
                    o = this.partSize;
                this.identityPartLocations[s + 1].rotate(180, 0, 0, 1),
                    this.identityPartLocations[s + 1].rotate(90, 0, 1, 0),
                    this.identityPartLocations[s + 2].rotate(270, 0, 1, 0),
                    this.identityPartLocations[s + 3].rotate(180, 0, 0, 1),
                    this.identityPartLocations[s + 3].rotate(180, 0, 1, 0),
                    this.identityPartLocations[s + 4].rotate(180, 0, 1, 0),
                    this.identityPartLocations[s + 5].rotate(180, 1, 0, 0),
                    this.identityPartLocations[s + 5].rotate(90, 0, 1, 0),
                    this.identityPartLocations[s + 6].rotate(90, 0, 1, 0),
                    this.identityPartLocations[s + 7].rotate(180, 0, 0, 1),
                    this.stickers[0].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[0].matrix.rotate(90, 0, 0, 1),
                    this.stickers[20].matrix.rotate(90, 0, 1, 0),
                    this.stickers[20].matrix.rotate(90, 1, 0, 0),
                    this.stickers[26].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[26].matrix.rotate(90, 0, 0, 1),
                    this.stickers[6].matrix.rotate(90, 0, 1, 0),
                    this.stickers[6].matrix.rotate(90, 1, 0, 0),
                    this.stickers[45].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[45].matrix.rotate(90, 0, 0, 1),
                    this.stickers[2].matrix.rotate(90, 0, 1, 0),
                    this.stickers[2].matrix.rotate(90, 1, 0, 0),
                    this.stickers[8].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[8].matrix.rotate(90, 0, 0, 1),
                    this.stickers[51].matrix.rotate(90, 0, 1, 0),
                    this.stickers[51].matrix.rotate(90, 1, 0, 0),
                    this.stickers[27].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[27].matrix.rotate(90, 0, 0, 1),
                    this.stickers[47].matrix.rotate(90, 0, 1, 0),
                    this.stickers[47].matrix.rotate(90, 1, 0, 0),
                    this.stickers[53].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[53].matrix.rotate(90, 0, 0, 1),
                    this.stickers[33].matrix.rotate(90, 0, 1, 0),
                    this.stickers[33].matrix.rotate(90, 1, 0, 0),
                    this.stickers[18].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[18].matrix.rotate(90, 0, 0, 1),
                    this.stickers[29].matrix.rotate(90, 0, 1, 0),
                    this.stickers[29].matrix.rotate(90, 1, 0, 0),
                    this.stickers[35].matrix.rotate(-90, 0, 1, 0),
                    this.stickers[35].matrix.rotate(90, 0, 0, 1),
                    this.stickers[24].matrix.rotate(90, 0, 1, 0),
                    this.stickers[24].matrix.rotate(90, 1, 0, 0),
                    this.identityStickerLocations[17].translate(0, o * 3, 0),
                    this.identityStickerLocations[17].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[0].translate(o * 3, 0, 0),
                    this.identityStickerLocations[0].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[0].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[20].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[20].rotate(-90, 0, 1, 0),
                    this.identityStickerLocations[38].translate(0, o * -3, 0),
                    this.identityStickerLocations[38].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[38].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[26].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[6].translate(o * 3, 0, 0),
                    this.identityStickerLocations[6].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[6].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[11].translate(0, o * 3, 0),
                    this.identityStickerLocations[11].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[11].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[45].translate(o * 6, 0, 0),
                    this.identityStickerLocations[45].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[45].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[2].translate(o * 3, 0, 0),
                    this.identityStickerLocations[2].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[2].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[44].translate(0, o * -3, 0),
                    this.identityStickerLocations[44].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[8].translate(o * 3, 0, 0),
                    this.identityStickerLocations[8].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[51].translate(o * 6, 0, 0),
                    this.identityStickerLocations[51].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[51].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[9].translate(0, o * 3, 0),
                    this.identityStickerLocations[9].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[9].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[27].translate(o * -3, 0, 0),
                    this.identityStickerLocations[27].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[27].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[47].translate(o * 6, 0, 0),
                    this.identityStickerLocations[47].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[47].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[42].translate(0, o * -3, 0),
                    this.identityStickerLocations[42].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[42].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[53].translate(o * 6, 0, 0),
                    this.identityStickerLocations[53].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[33].translate(o * -3, 0, 0),
                    this.identityStickerLocations[33].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[33].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[15].translate(0, o * 3, 0),
                    this.identityStickerLocations[15].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[15].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[18].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[18].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[29].translate(o * -3, 0, 0),
                    this.identityStickerLocations[29].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[29].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[36].translate(0, o * -3, 0),
                    this.identityStickerLocations[36].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[36].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[35].translate(o * -3, 0, 0),
                    this.identityStickerLocations[35].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[24].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[24].rotate(-90, 1, 0, 0);
                var u = this.edgeOffset;
                this.identityPartLocations[u + 1].rotate(90, 0, 0, -1),
                    this.identityPartLocations[u + 1].rotate(90, 0, 1, 0),
                    this.identityPartLocations[u + 2].rotate(180, 1, 0, 0),
                    this.identityPartLocations[u + 3].rotate(90, 0, 0, 1),
                    this.identityPartLocations[u + 3].rotate(90, 1, 0, 0),
                    this.identityPartLocations[u + 4].rotate(90, 0, 0, -1),
                    this.identityPartLocations[u + 4].rotate(90, 0, -1, 0),
                    this.identityPartLocations[u + 5].rotate(90, 1, 0, 0),
                    this.identityPartLocations[u + 5].rotate(90, 0, -1, 0),
                    this.identityPartLocations[u + 6].rotate(180, 0, 1, 0),
                    this.identityPartLocations[u + 7].rotate(90, 0, 0, 1),
                    this.identityPartLocations[u + 7].rotate(90, 0, -1, 0),
                    this.identityPartLocations[u + 8].rotate(180, 0, 1, 0),
                    this.identityPartLocations[u + 8].rotate(180, 1, 0, 0),
                    this.identityPartLocations[u + 9].rotate(-90, 1, 0, 0),
                    this.identityPartLocations[u + 9].rotate(90, 0, -1, 0),
                    this.identityPartLocations[u + 10].rotate(90, 0, 1, 0),
                    this.identityPartLocations[u + 10].rotate(-90, 1, 0, 0),
                    this.identityPartLocations[u + 11].rotate(90, 0, 0, -1),
                    this.identityPartLocations[u + 11].rotate(-90, 1, 0, 0),
                    this.stickers[1].matrix.rotate(180, 0, 1, 0),
                    this.stickers[1].matrix.rotate(90, 0, 0, 1),
                    this.stickers[23].matrix.rotate(180, 0, 1, 0),
                    this.stickers[23].matrix.rotate(90, 0, 0, 1),
                    this.stickers[7].matrix.rotate(180, 0, 1, 0),
                    this.stickers[7].matrix.rotate(90, 0, 0, 1),
                    this.stickers[10].matrix.rotate(180, 0, 1, 0),
                    this.stickers[10].matrix.rotate(90, 0, 0, 1),
                    this.stickers[48].matrix.rotate(180, 0, 1, 0),
                    this.stickers[48].matrix.rotate(90, 0, 0, 1),
                    this.stickers[43].matrix.rotate(180, 0, 1, 0),
                    this.stickers[43].matrix.rotate(90, 0, 0, 1),
                    this.stickers[28].matrix.rotate(180, 0, 1, 0),
                    this.stickers[28].matrix.rotate(90, 0, 0, 1),
                    this.stickers[50].matrix.rotate(180, 0, 1, 0),
                    this.stickers[50].matrix.rotate(90, 0, 0, 1),
                    this.stickers[34].matrix.rotate(180, 0, 1, 0),
                    this.stickers[34].matrix.rotate(90, 0, 0, 1),
                    this.stickers[16].matrix.rotate(180, 0, 1, 0),
                    this.stickers[16].matrix.rotate(90, 0, 0, 1),
                    this.stickers[21].matrix.rotate(180, 0, 1, 0),
                    this.stickers[21].matrix.rotate(90, 0, 0, 1),
                    this.stickers[37].matrix.rotate(180, 0, 1, 0),
                    this.stickers[37].matrix.rotate(90, 0, 0, 1),
                    this.identityStickerLocations[14].translate(0, o * 3, 0),
                    this.identityStickerLocations[14].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[1].translate(o * 3, 0, 0),
                    this.identityStickerLocations[1].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[1].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[3].translate(o * 3, 0, 0),
                    this.identityStickerLocations[3].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[3].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[23].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[41].translate(0, o * -3, 0),
                    this.identityStickerLocations[41].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[7].translate(o * 3, 0, 0),
                    this.identityStickerLocations[7].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[7].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[46].translate(o * 6, o * 0, 0),
                    this.identityStickerLocations[46].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[46].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[10].translate(o * 0, o * 3, 0),
                    this.identityStickerLocations[10].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[10].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[5].translate(o * 3, 0, 0),
                    this.identityStickerLocations[5].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[48].translate(o * 6, 0, 0),
                    this.identityStickerLocations[48].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[48].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[52].translate(o * 6, o * 0, 0),
                    this.identityStickerLocations[52].rotate(90, 0, 0, -1),
                    this.identityStickerLocations[52].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[43].translate(o * 0, o * -3, 0),
                    this.identityStickerLocations[43].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[43].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[12].translate(o * 0, o * 3, 0),
                    this.identityStickerLocations[12].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[12].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[28].translate(o * -3, o * 0, 0),
                    this.identityStickerLocations[28].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[28].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[30].translate(o * -3, o * 0, 0),
                    this.identityStickerLocations[30].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[30].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[50].translate(o * 6, o * 0, 0),
                    this.identityStickerLocations[50].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[39].translate(o * 0, o * -3, 0),
                    this.identityStickerLocations[39].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[39].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[34].translate(o * -3, o * 0, 0),
                    this.identityStickerLocations[34].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[34].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[19].translate(o * 0, o * 0, 0),
                    this.identityStickerLocations[19].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[19].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[16].translate(o * 0, o * 3, 0),
                    this.identityStickerLocations[16].rotate(-90, 0, 0, 1),
                    this.identityStickerLocations[16].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[32].translate(o * -3, o * 0, 0),
                    this.identityStickerLocations[32].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[21].rotate(180, 0, 0, 1),
                    this.identityStickerLocations[21].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[25].rotate(90, 0, 0, -1),
                    this.identityStickerLocations[25].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[37].translate(o * 0, o * -3, 0),
                    this.identityStickerLocations[37].rotate(90, 0, 0, 1),
                    this.identityStickerLocations[37].rotate(-90, 1, 0, 0);
                var a = this.sideOffset;
                this.identityPartLocations[a + 1].rotate(90, 0, 0, 1),
                    this.identityPartLocations[a + 1].rotate(-90, 1, 0, 0),
                    this.identityPartLocations[a + 2].rotate(90, 0, 1, 0),
                    this.identityPartLocations[a + 2].rotate(90, 1, 0, 0),
                    this.identityPartLocations[a + 3].rotate(180, 0, 1, 0),
                    this.identityPartLocations[a + 3].rotate(-90, 1, 0, 0),
                    this.identityPartLocations[a + 4].rotate(90, 0, 0, -1),
                    this.identityPartLocations[a + 4].rotate(180, 1, 0, 0),
                    this.identityPartLocations[a + 5].rotate(90, 0, -1, 0),
                    this.identityPartLocations[a + 5].rotate(180, 1, 0, 0),
                    this.identityStickerLocations[4].translate(3 * n, 0, 0),
                    this.identityStickerLocations[4].rotate(90, 0, 1, 0),
                    this.identityStickerLocations[13].translate(0, 3 * n, 0),
                    this.identityStickerLocations[13].rotate(90, 0, 1, 0),
                    this.identityStickerLocations[13].rotate(180, 1, 0, 0),
                    this.identityStickerLocations[22].rotate(90, 0, 1, 0),
                    this.identityStickerLocations[22].rotate(90, 1, 0, 0),
                    this.identityStickerLocations[31].translate(-3 * n, 0, 0),
                    this.identityStickerLocations[31].rotate(90, 0, 1, 0),
                    this.identityStickerLocations[31].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[40].translate(0, -3 * n, 0),
                    this.identityStickerLocations[40].rotate(90, 0, 1, 0),
                    this.identityStickerLocations[40].rotate(-90, 1, 0, 0),
                    this.identityStickerLocations[49].translate(6 * n, 0, 0),
                    this.identityStickerLocations[49].rotate(90, 0, 1, 0),
                    this.identityStickerLocations[49].rotate(180, 1, 0, 0);
                for (var r = 0; r < this.partCount; r++) this.partLocations[r].matrix.load(this.identityPartLocations[r]);
                for (var r = 0; r < this.stickerCount; r++) this.stickerLocations[r].matrix.load(this.identityStickerLocations[r]);
                var f = this,
                    l = function () {
                        f.repaint();
                    },
                    c = this.getBaseUrl();
                if (e === !0 || e === undefined) {
                    (this.centerObj = i.loadObj(null, c + "center.obj", l)),
                        (this.cornerObj = i.loadObj(null, c + "corner.obj", l)),
                        (this.edgeObj = i.loadObj(null, c + "edge.obj", l)),
                        (this.sideObj = i.loadObj(null, c + "side.obj", l)),
                        (this.stickerObjs = new Array(this.stickerCount));
                    for (var r = 0; r < this.stickerObjs.length; r++) this.stickerObjs[r] = i.newJ3DIObj();
                    (this.corner_rObj = i.loadObj(null, c + "corner_r.obj", function () {
                        f.initAbstractRubiksCubeCube3D_corner_r(), f.repaint();
                    })),
                        (this.corner_uObj = i.loadObj(null, c + "corner_u.obj", function () {
                            f.initAbstractRubiksCubeCube3D_corner_u(), f.repaint();
                        })),
                        (this.corner_fObj = i.loadObj(null, c + "corner_f.obj", function () {
                            f.initAbstractRubiksCubeCube3D_corner_f(), f.repaint();
                        })),
                        (this.edge_rObj = i.loadObj(null, c + "edge_r.obj", function () {
                            f.initAbstractRubiksCubeCube3D_edge_r(), f.repaint();
                        })),
                        (this.edge_uObj = i.loadObj(null, c + "edge_u.obj", function () {
                            f.initAbstractRubiksCubeCube3D_edge_u(), f.repaint();
                        })),
                        (this.side_rObj = i.loadObj(null, c + "side_r.obj", function () {
                            f.initAbstractRubiksCubeCube3D_side_r(), f.repaint();
                        }));
                }
            }),
            (AbstractRubiksCubeCube3D.prototype.doValidateAttributes = function () {
                for (var e = 0; e < this.stickerObjs.length; e++) this.stickerObjs[e].hasTexture = this.attributes.stickersImageURL != null;
            }),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D_corner_r = function () {
                var e = this.corner_rObj,
                    t = new J3DIObj();
                t.setTo(e),
                    t.rotateTexture(180),
                    (this.stickerObjs[0] = e.clone()),
                    (this.stickerObjs[8] = t.clone()),
                    (this.stickerObjs[18] = e.clone()),
                    (this.stickerObjs[26] = t.clone()),
                    (this.stickerObjs[27] = e.clone()),
                    (this.stickerObjs[35] = t.clone()),
                    (this.stickerObjs[45] = e.clone()),
                    (this.stickerObjs[53] = t.clone()),
                    this.initAbstractRubiksCubeCube3D_textureScales();
            }),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D_corner_f = function () {
                var e = this.corner_fObj,
                    t = new J3DIObj();
                t.setTo(e),
                    t.rotateTexture(180),
                    (this.stickerObjs[2] = e.clone()),
                    (this.stickerObjs[6] = t.clone()),
                    (this.stickerObjs[20] = e.clone()),
                    (this.stickerObjs[24] = t.clone()),
                    (this.stickerObjs[29] = e.clone()),
                    (this.stickerObjs[33] = t.clone()),
                    (this.stickerObjs[47] = e.clone()),
                    (this.stickerObjs[51] = t.clone()),
                    this.initAbstractRubiksCubeCube3D_textureScales();
            }),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D_corner_u = function () {
                var e = this.corner_uObj,
                    t = new J3DIObj();
                t.setTo(e), t.rotateTexture(90);
                var n = new J3DIObj();
                n.setTo(e), n.rotateTexture(180);
                var r = new J3DIObj();
                r.setTo(e),
                    r.rotateTexture(270),
                    (this.stickerObjs[9] = n.clone()),
                    (this.stickerObjs[11] = t.clone()),
                    (this.stickerObjs[15] = r.clone()),
                    (this.stickerObjs[17] = e.clone()),
                    (this.stickerObjs[36] = n.clone()),
                    (this.stickerObjs[38] = t.clone()),
                    (this.stickerObjs[42] = r.clone()),
                    (this.stickerObjs[44] = e.clone()),
                    this.initAbstractRubiksCubeCube3D_textureScales();
            }),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D_edge_u = function () {
                var e = this.edge_uObj,
                    t = new J3DIObj();
                t.setTo(e), t.rotateTexture(90);
                var n = new J3DIObj();
                n.setTo(e), n.rotateTexture(180);
                var r = new J3DIObj();
                r.setTo(e),
                    r.rotateTexture(270),
                    (this.stickerObjs[12] = n.clone()),
                    (this.stickerObjs[14] = e.clone()),
                    (this.stickerObjs[19] = t.clone()),
                    (this.stickerObjs[46] = t.clone()),
                    (this.stickerObjs[30] = n.clone()),
                    (this.stickerObjs[32] = e.clone()),
                    (this.stickerObjs[3] = n.clone()),
                    (this.stickerObjs[5] = e.clone()),
                    (this.stickerObjs[25] = r.clone()),
                    (this.stickerObjs[52] = r.clone()),
                    (this.stickerObjs[39] = n.clone()),
                    (this.stickerObjs[41] = e.clone()),
                    this.initAbstractRubiksCubeCube3D_textureScales();
            }),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D_edge_r = function () {
                var e = this.edge_rObj,
                    t = new J3DIObj();
                t.setTo(e), t.rotateTexture(90);
                var n = new J3DIObj();
                n.setTo(e), n.rotateTexture(180);
                var r = new J3DIObj();
                r.setTo(e),
                    r.rotateTexture(270),
                    (this.stickerObjs[1] = e.clone()),
                    (this.stickerObjs[10] = e.clone()),
                    (this.stickerObjs[16] = n.clone()),
                    (this.stickerObjs[28] = e.clone()),
                    (this.stickerObjs[34] = n.clone()),
                    (this.stickerObjs[7] = n.clone()),
                    (this.stickerObjs[21] = t.clone()),
                    (this.stickerObjs[23] = r.clone()),
                    (this.stickerObjs[48] = t.clone()),
                    (this.stickerObjs[50] = r.clone()),
                    (this.stickerObjs[37] = e.clone()),
                    (this.stickerObjs[43] = n.clone()),
                    this.initAbstractRubiksCubeCube3D_textureScales();
            }),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D_side_r = function () {
                var e = this.side_rObj,
                    t = e.clone();
                t.rotateTexture(90);
                var n = e.clone();
                n.rotateTexture(180);
                var r = e.clone();
                r.rotateTexture(270),
                    (this.stickerObjs[4] = e.clone()),
                    (this.stickerObjs[13] = n.clone()),
                    (this.stickerObjs[22] = r.clone()),
                    (this.stickerObjs[31] = t.clone()),
                    (this.stickerObjs[40] = t.clone()),
                    (this.stickerObjs[49] = n.clone()),
                    this.initAbstractRubiksCubeCube3D_textureScales();
            }),
            (AbstractRubiksCubeCube3D.prototype.initAbstractRubiksCubeCube3D_textureScales = function () {
                var e = this.attributes;
                for (var t = 0; t < this.stickerObjs.length; t++) {
                    if (!this.stickerObjs[t].loaded) continue;
                    if (this.stickerObjs[t].isTextureScaled) continue;
                    t * 2 + 1 < this.stickerOffsets.length && ((this.stickerObjs[t].textureOffsetX = this.stickerOffsets[t * 2]), (this.stickerObjs[t].textureOffsetY = this.stickerOffsets[t * 2 + 1])),
                        (this.stickerObjs[t].textureScale = 56 / 512),
                        (this.stickerObjs[t].isTextureScaled = !0);
                }
                this.isAttributesValid = !1;
            }),
            (AbstractRubiksCubeCube3D.prototype.stickerToPartMap = [
                0,
                8,
                2,
                9,
                20,
                12,
                1,
                10,
                3,
                4,
                11,
                2,
                14,
                21,
                8,
                6,
                17,
                0,
                6,
                17,
                0,
                18,
                22,
                9,
                7,
                19,
                1,
                4,
                14,
                6,
                15,
                23,
                18,
                5,
                16,
                7,
                7,
                19,
                1,
                16,
                24,
                10,
                5,
                13,
                3,
                2,
                11,
                4,
                12,
                25,
                15,
                3,
                13,
                5,
            ]),
            (AbstractRubiksCubeCube3D.prototype.getPartIndexForStickerIndex = function (e) {
                return this.stickerToPartMap[e];
            }),
            (AbstractRubiksCubeCube3D.prototype.getPartOrientationForStickerIndex = function (e) {
                return this.stickerToFaceMap[e];
            }),
            (AbstractRubiksCubeCube3D.prototype.partToStickerMap = null),
            (AbstractRubiksCubeCube3D.prototype.getStickerIndexForPartIndex = function (e, t) {
                return this.partToStickerMap[e][t];
            }),
            (AbstractRubiksCubeCube3D.prototype.stickerToFaceMap = [1, 1, 2, 0, 0, 0, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 1, 2, 0, 0, 0, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 0, 1, 2, 0, 1]),
            (AbstractRubiksCubeCube3D.prototype.createAttributes = function () {
                var e = n.newCubeAttributes(this.partCount, 54, [9, 9, 9, 9, 9, 9]),
                    t = [0.5, 0.6, 0.4, 16];
                for (var r = 0; r < this.partCount; r++) (e.partsFillColor[r] = [40, 40, 40, 255]), (e.partsPhong[r] = t);
                e.partsFillColor[this.centerOffset] = [240, 240, 240, 255];
                var i = [
                        [255, 210, 0, 255],
                        [0, 51, 115, 255],
                        [140, 0, 15, 255],
                        [248, 248, 248, 255],
                        [0, 115, 47, 255],
                        [255, 70, 0, 255],
                    ],
                    s = [0.8, 0.2, 0.1, 8];
                for (var r = 0; r < 6; r++) for (var o = 0; o < 9; o++) (e.stickersFillColor[r * 9 + o] = i[r]), (e.stickersPhong[r * 9 + o] = s);
                return e;
            }),
            (AbstractRubiksCubeCube3D.prototype.updateExplosionFactor = function (e) {
                e == null && (e = this.attributes.explosionFactor);
                var t = this.partSize * 1.5,
                    n = t * e,
                    r = 0,
                    i = this.attributes;
                for (var s = 0; s < this.cornerCount; s++) {
                    var o = this.cornerOffset + s;
                    (r = n + i.partExplosion[o]), this.partExplosions[o].matrix.makeIdentity(), this.partExplosions[o].matrix.translate(r, r, -r);
                }
                for (var s = 0; s < this.edgeCount; s++) {
                    var o = this.edgeOffset + s;
                    (r = n + i.partExplosion[o]), this.partExplosions[o].matrix.makeIdentity(), this.partExplosions[o].matrix.translate(r, r, 0);
                }
                for (var s = 0; s < this.sideCount; s++) {
                    var o = this.sideOffset + s;
                    (r = n + i.partExplosion[o]), this.partExplosions[o].matrix.makeIdentity(), this.partExplosions[o].matrix.translate(r, 0, 0);
                }
                this.fireStateChanged();
            }),
            (AbstractRubiksCubeCube3D.prototype.validateTwist = function (e, t, n, r, i, s, o) {
                var u = this.updateTwistRotation;
                u.makeIdentity();
                var a = 90 * s * (1 - o);
                switch (i) {
                    case 0:
                        u.rotate(a, -1, 0, 0);
                        break;
                    case 1:
                        u.rotate(a, 0, -1, 0);
                        break;
                    case 2:
                        u.rotate(a, 0, 0, 1);
                }
                var f = this.updateTwistOrientation;
                for (var l = 0; l < r; l++) {
                    f.makeIdentity();
                    if (e[l] < this.edgeOffset)
                        switch (n[l]) {
                            case 0:
                                break;
                            case 1:
                                f.rotate(90, 0, 0, 1), f.rotate(90, -1, 0, 0);
                                break;
                            case 2:
                                f.rotate(90, 0, 0, -1), f.rotate(90, 0, 1, 0);
                        }
                    else e[l] < this.sideOffset ? (f.makeIdentity(), n[l] == 1 && (f.rotate(90, 0, 0, 1), f.rotate(180, 1, 0, 0))) : e[l] < this.centerOffset && n[l] > 0 && f.rotate(90 * n[l], -1, 0, 0);
                    this.partOrientations[e[l]].matrix.load(f);
                    var c = this.partLocations[e[l]].matrix;
                    c.load(u), c.multiply(this.identityPartLocations[t[l]]);
                }
            }),
            (AbstractRubiksCubeCube3D.prototype.cubeTwisted = function (e) {
                if (this.repainter == null) {
                    this.updateCube();
                    return;
                }
                var t = e.layerMask,
                    n = e.axis,
                    i = e.angle,
                    s = this.cube,
                    o = new Array(27),
                    u = new Array(27),
                    a = new Array(27),
                    f = 0,
                    l = e.getAffectedLocations();
                (t & 2) != 0 ? ((f = l.length + 1), (u = l.slice(0, f)), (u[f - 1] = this.centerOffset)) : ((f = l.length), (u = l.slice(0, f)));
                for (var c = 0; c < f; c++) (o[c] = s.getPartAt(u[c])), (a[c] = s.getPartOrientation(o[c]));
                var h = f,
                    p = this,
                    d = r.newSplineInterpolator(0, 0, 1, 1),
                    v = new Date().getTime(),
                    m = this.attributes.twistDuration * Math.abs(i);
                this.isTwisting = !0;
                var g = function () {
                    var e = new Date().getTime(),
                        t = e - v,
                        r = t / m;
                    r < 1 ? (p.validateTwist(o, u, a, h, n, i, d.getFraction(r)), p.repainter.repaint(g)) : (p.validateTwist(o, u, a, h, n, i, 1), (p.isTwisting = !1));
                };
                this.repainter.repaint(g);
            }),
            (AbstractRubiksCubeCube3D.prototype.boxClickToAxisMap = [
                [
                    [0, 1, 0],
                    [2, 0, 2],
                    [0, 1, 0],
                ],
                [
                    [1, 2, 1],
                    [0, 1, 0],
                    [1, 2, 1],
                ],
                [
                    [2, 1, 2],
                    [0, 2, 0],
                    [2, 1, 2],
                ],
                [
                    [0, 1, 0],
                    [2, 0, 2],
                    [0, 1, 0],
                ],
                [
                    [1, 2, 1],
                    [0, 1, 0],
                    [1, 2, 1],
                ],
                [
                    [2, 1, 2],
                    [0, 2, 0],
                    [2, 1, 2],
                ],
            ]),
            (AbstractRubiksCubeCube3D.prototype.boxClickToAngleMap = [
                [
                    [-1, -1, -1],
                    [-1, -1, 1],
                    [-1, 1, -1],
                ],
                [
                    [-1, 1, -1],
                    [1, -1, -1],
                    [-1, -1, -1],
                ],
                [
                    [1, 1, 1],
                    [-1, 1, 1],
                    [1, -1, 1],
                ],
                [
                    [1, 1, 1],
                    [1, 1, -1],
                    [1, -1, 1],
                ],
                [
                    [1, -1, 1],
                    [-1, 1, 1],
                    [1, 1, 1],
                ],
                [
                    [-1, -1, -1],
                    [1, -1, -1],
                    [-1, 1, -1],
                ],
            ]),
            (AbstractRubiksCubeCube3D.prototype.boxClickToLayerMap = [
                [
                    [1, 2, 1],
                    [2, 1, 2],
                    [1, 2, 1],
                ],
                [
                    [1, 2, 1],
                    [2, 1, 2],
                    [1, 2, 1],
                ],
                [
                    [4, 2, 4],
                    [2, 4, 2],
                    [4, 2, 4],
                ],
                [
                    [4, 2, 4],
                    [2, 4, 2],
                    [4, 2, 4],
                ],
                [
                    [4, 2, 4],
                    [2, 4, 2],
                    [4, 2, 4],
                ],
                [
                    [1, 2, 1],
                    [2, 1, 2],
                    [1, 2, 1],
                ],
            ]),
            (AbstractRubiksCubeCube3D.prototype.boxSwipeToAxisMap = [
                [1, 2, 1, 2],
                [2, 0, 2, 0],
                [1, 0, 1, 0],
                [1, 2, 1, 2],
                [2, 0, 2, 0],
                [1, 0, 1, 0],
            ]),
            (AbstractRubiksCubeCube3D.prototype.boxSwipeToAngleMap = [
                [-1, -1, 1, 1],
                [1, 1, -1, -1],
                [1, -1, -1, 1],
                [1, 1, -1, -1],
                [-1, -1, 1, 1],
                [-1, 1, 1, -1],
            ]),
            (AbstractRubiksCubeCube3D.prototype.boxSwipeToLayerMap = [
                [
                    [
                        [1, 4, 1, 4],
                        [2, 4, 2, 4],
                        [4, 4, 4, 4],
                    ],
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                        [4, 2, 4, 2],
                    ],
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                        [4, 1, 4, 1],
                    ],
                ],
                [
                    [
                        [4, 1, 4, 1],
                        [2, 1, 2, 1],
                        [1, 1, 1, 1],
                    ],
                    [
                        [4, 2, 4, 2],
                        [2, 2, 2, 2],
                        [1, 2, 1, 2],
                    ],
                    [
                        [4, 4, 4, 4],
                        [2, 4, 2, 4],
                        [1, 4, 1, 4],
                    ],
                ],
                [
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                        [4, 1, 4, 1],
                    ],
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                        [4, 2, 4, 2],
                    ],
                    [
                        [1, 4, 1, 4],
                        [2, 4, 2, 4],
                        [4, 4, 4, 4],
                    ],
                ],
                [
                    [
                        [1, 4, 1, 4],
                        [2, 4, 2, 4],
                        [4, 4, 4, 4],
                    ],
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                        [4, 2, 4, 2],
                    ],
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                        [4, 1, 4, 1],
                    ],
                ],
                [
                    [
                        [4, 1, 4, 1],
                        [2, 1, 2, 1],
                        [1, 1, 1, 1],
                    ],
                    [
                        [4, 2, 4, 2],
                        [2, 2, 2, 2],
                        [1, 2, 1, 2],
                    ],
                    [
                        [4, 4, 4, 4],
                        [2, 4, 2, 4],
                        [1, 4, 1, 4],
                    ],
                ],
                [
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                        [4, 1, 4, 1],
                    ],
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                        [4, 2, 4, 2],
                    ],
                    [
                        [1, 4, 1, 4],
                        [2, 4, 2, 4],
                        [4, 4, 4, 4],
                    ],
                ],
            ]),
            (AbstractRubiksCubeCube3D.prototype.stickerOffsets = [
                6,
                3,
                7,
                3,
                8,
                3,
                6,
                4,
                7,
                4,
                8,
                4,
                6,
                5,
                7,
                5,
                8,
                5,
                3,
                0,
                4,
                0,
                5,
                0,
                3,
                1,
                4,
                1,
                5,
                1,
                3,
                2,
                4,
                2,
                5,
                2,
                3,
                3,
                4,
                3,
                5,
                3,
                3,
                4,
                4,
                4,
                5,
                4,
                3,
                5,
                4,
                5,
                5,
                5,
                0,
                3,
                1,
                3,
                2,
                3,
                0,
                4,
                1,
                4,
                2,
                4,
                0,
                5,
                1,
                5,
                2,
                5,
                3,
                6,
                4,
                6,
                5,
                6,
                3,
                7,
                4,
                7,
                5,
                7,
                3,
                8,
                4,
                8,
                5,
                8,
                6,
                6,
                7,
                6,
                8,
                6,
                6,
                7,
                7,
                7,
                8,
                7,
                6,
                8,
                7,
                8,
                8,
                8,
            ]),
            {
                newAbstractRubiksCubeCube3D: function () {
                    return new AbstractRubiksCubeCube3D();
                },
            }
        );
    }),
    define("PreloadRubiksCubeS1", ["J3DI"], function (e) {
        return (
            e.setFileData(
                "lib/models/rubikscubes1/corner.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng Boole Cube\nv 1.005 0.905 2.595\nv 2.595 0.905 2.595\nv 2.595 0.905 1.005\nv 1.005 1.005 2.695\nv 2.595 1.005 2.695\nv 2.695 1.005 2.595\nv 2.695 1.005 1.005\nv 2.595 1.005 0.905\nv 0.905 1.005 2.595\nv 1.005 2.595 2.695\nv 2.595 2.595 2.695\nv 2.695 2.595 2.595\nv 2.695 2.595 1.005\nv 2.595 2.595 0.905\nv 1.005 2.595 0.905\nv 0.905 2.595 1.005\nv 0.905 2.595 2.595\nv 1.005 2.695 2.595\nv 2.595 2.695 2.595\nv 2.595 2.695 1.005\nv 1.005 2.695 1.005\nv 1.35 1.005 0.905\nv 1.35 0.905 1.005\nv 0.905 1.35 1.005\nv 1.005 1.35 0.905\nv 1.005 0.905 1.35\nv 0.905 1.35 1.35\nv 0.905 1.005 1.35\nv 1.35 1.35 0.905\nv 1.35 0.905 1.35\n\nvt 0.955045 0 0\nvt 0.91009 0 0\nvt 0 1 0\nvt 0 0 0\nvt 1 1 0\nvt 0 0 0\nvt 0.955045 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 0.955045 0 0\nvt 1 0 0\nvt 0.91009 0 0\nvt 1 0.082493 0\nvt 0 0.082493 0\nvt 0.91009 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 1 0.917507 0\nvt 0 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0 1 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0.712618 0.082493 0\nvt 0.712618 0 0\nvt 0.216981 0 0\nvt 0 0.263675 0\nvt 1 0.263675 0\nvt 0.91009 0.263675 0\nvt 0.197472 0 0\nvt 0 0.216981 0\nvt 0.197472 0.263675 0\nvt 0.197472 0.082493 0\nvt 0.712618 0.263675 0\nvt 0.216981 0.216981 0\n\nf 2/8 5/15 4/14 1/4 \nf 30/57 2/5 1/3 26/53 \nf 11/24 19/39 18/36 10/23 \nf 6/17 5/15 2/7 \nf 6/17 12/26 11/24 5/15 \nf 12/26 19/38 11/24 \nf 3/12 7/18 6/16 2/6 \nf 30/57 23/48 3/11 2/5 \nf 13/27 20/42 19/37 12/25 \nf 8/20 7/18 3/10 \nf 8/20 14/29 13/27 7/18 \nf 14/29 20/41 13/27 \nf 22/46 8/19 3/9 23/47 \nf 29/56 14/28 8/19 22/46 \nf 29/56 25/51 15/30 14/28 \nf 15/30 21/45 20/40 14/28 \nf 24/50 16/32 15/30 25/51 \nf 16/32 21/44 15/30 \nf 9/21 28/55 26/52 1/2 \nf 24/49 27/54 17/33 16/31 \nf 27/54 28/55 9/21 17/33 \nf 17/33 18/35 21/43 16/31 \nf 4/13 9/21 1/1 \nf 4/13 10/22 17/33 9/21 \nf 10/22 18/34 17/33 \n\ng Boole Cube_1\nv 0.45 0.45 1.35\nv 0.45 1.35 1.35\nv 1.35 0.45 1.35\nv 1.35 0.45 0.45\nv 1.35 1.35 0.45\nv 0.45 0.45 0.45\nv 0.45 1.35 0.45\nv 0.905 1.35 1.35\nv 1.35 1.35 0.905\nv 1.35 0.905 1.35\nv 1.35 1.005 0.905\nv 1.35 0.905 1.005\nv 1.005 1.35 0.905\nv 1.005 0.905 1.35\nv 0.905 1.005 1.35\nv 0.905 1.35 1.005\n\nvt 0 1 0\nvt 1 0 0\nvt 0 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0 0 0\nvt 1 0 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\nvt 0.505556 0 0\nvt 0.505556 1 0\nvt 1 0.494444 0\nvt 0.494444 1 0\nvt 0 0.505556 0\nvt 1 0.505556 0\nvt 0.494444 0.616667 0\nvt 0.383333 0.505556 0\nvt 0.616667 0.494444 0\nvt 0.616667 0.505556 0\nvt 0.505556 0.616667 0\nvt 0.505556 0.383333 0\n\nf 44/84 33/66 40/80 \nf 45/85 38/76 32/63 31/60 \nf 44/84 45/85 31/60 33/66 \nf 41/81 35/69 39/78 \nf 34/67 42/82 40/79 33/65 \nf 41/81 42/82 34/67 35/69 \nf 36/72 37/74 35/70 34/68 \nf 31/59 32/62 37/73 36/71 \nf 38/75 46/86 37/73 32/61 \nf 43/83 39/77 35/69 \nf 46/86 43/83 35/69 37/73 \nf 34/67 33/64 31/58 36/71 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/corner_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng StickerR\nv 2.69 1 2.6\nv 2.69 1 1\nv 2.69 2.6 2.6\nv 2.69 2.6 1\n\nvt 0.05 0.05 0.05\nvt 0.95 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.95 0.05\n\nf 2/2 4/4 3/3 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/corner_u.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng StickerU\nv 1.006716 2.69 2.595209\nv 2.606716 2.69 2.595209\nv 1.006716 2.69 0.995209\nv 2.606716 2.69 0.995209\n\nvt 0.05 0.05 0.05\nvt 0.95 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.95 0.05\n\nf 2/2 4/4 3/3 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/corner_f.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng StickerF\nv 1 1 2.69\nv 2.6 1 2.69\nv 1 2.6 2.69\nv 2.6 2.6 2.69\n\nvt 0.05 0.05 0.05\nvt 0.95 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.95 0.05\n\nf 2/2 4/4 3/3 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/edge.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng Boole Cube\nv 0.45 0.45 0.45\nv 0.45 1.35 0.45\nv 1.35 0.45 0.45\nv 1.35 0.45 -0.45\nv 0.45 0.45 -0.45\nv 0.45 1.35 -0.45\nv 1.35 0.905 0.45\nv 0.905 1.35 0.45\nv 1.35 0.905 -0.45\nv 0.905 1.35 -0.45\nv 0.905 1.005 0.45\nv 1.005 0.905 0.45\nv 0.905 1.005 -0.45\nv 1.005 0.905 -0.45\n\nvt 0 1 0\nvt 1 0 0\nvt 0 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0 0 0\nvt 1 0 0\nvt 1 0 0\nvt 0 0 0\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\nvt 0 0.505556 0\nvt 1 0.505556 0\nvt 0.505556 0 0\nvt 0.505556 1 0\nvt 0 0.505556 0\nvt 1 0.505556 0\nvt 0.505556 1 0\nvt 0.494444 1 0\nvt 0.505556 0.616667 0\nvt 0.616667 0.505556 0\nvt 0.494444 0.616667 0\nvt 0.383333 0.505556 0\n\nf 12/25 3/9 7/17 \nf 1/3 11/24 8/19 2/6 \nf 12/25 11/24 1/3 3/9 \nf 7/16 3/8 4/10 9/21 \nf 13/26 6/15 10/23 \nf 14/27 9/20 4/11 5/13 \nf 13/26 14/27 5/13 6/15 \nf 1/2 2/5 6/14 5/12 \nf 2/4 8/18 10/22 6/14 \nf 4/10 3/7 1/1 5/12 \n\ng Boole Cube_1\nv 1.005 0.905 0.795\nv 2.595 0.905 0.795\nv 2.595 0.905 -0.795\nv 1.005 0.905 -0.795\nv 1.005 1.005 0.895\nv 2.595 1.005 0.895\nv 2.695 1.005 0.795\nv 2.695 1.005 -0.795\nv 2.595 1.005 -0.895\nv 1.005 1.005 -0.895\nv 0.905 1.005 -0.795\nv 0.905 1.005 0.795\nv 1.005 2.595 0.895\nv 2.595 2.595 0.895\nv 2.695 2.595 0.795\nv 2.695 2.595 -0.795\nv 2.595 2.595 -0.895\nv 1.005 2.595 -0.895\nv 0.905 2.595 -0.795\nv 0.905 2.595 0.795\nv 1.005 2.695 0.795\nv 2.595 2.695 0.795\nv 2.595 2.695 -0.795\nv 1.005 2.695 -0.795\nv 0.905 1.005 0.45\nv 1.005 0.905 0.45\nv 0.905 1.35 -0.45\nv 1.35 0.905 0.45\nv 0.905 1.005 -0.45\nv 1.005 0.905 -0.45\nv 0.905 1.35 0.45\nv 1.35 0.905 -0.45\n\nvt 0 1 0\nvt 0.955045 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 0 0\nvt 0.955045 0 0\nvt 0.91009 0 0\nvt 1 0 0\nvt 0 0 0\nvt 0.955045 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 0.955045 0 0\nvt 0.91009 0 0\nvt 1 0.082493 0\nvt 0 0.082493 0\nvt 0.91009 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 1 0.917507 0\nvt 0 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0 1 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0.712618 0.082493 0\nvt 0 0.783019 0\nvt 0.712618 0 0\nvt 0.197472 0.263675 0\nvt 0.216981 0.783019 0\nvt 0.197472 0.082493 0\nvt 0 0.216981 0\nvt 0.197472 0 0\nvt 0.712618 0.263675 0\nvt 0.216981 0.216981 0\n\nf 16/35 20/45 19/44 15/31 \nf 20/45 28/57 27/56 19/44 \nf 28/57 36/72 35/69 27/56 \nf 21/47 20/45 16/34 \nf 21/47 29/59 28/57 20/45 \nf 29/59 36/71 28/57 \nf 17/39 22/48 21/46 16/33 \nf 42/83 46/88 17/36 16/32 \nf 30/60 37/75 36/70 29/58 \nf 23/50 22/48 17/38 \nf 23/50 31/62 30/60 22/48 \nf 31/62 37/74 30/60 \nf 18/42 24/51 23/49 17/37 \nf 24/51 32/63 31/61 23/49 \nf 32/63 38/78 37/73 31/61 \nf 25/53 24/51 18/41 \nf 25/53 33/65 32/63 24/51 \nf 33/65 38/77 32/63 \nf 26/54 39/79 40/81 15/30 \nf 18/40 44/86 43/84 25/52 \nf 43/84 41/82 33/64 25/52 \nf 45/87 39/79 26/54 34/66 \nf 41/82 45/87 34/66 33/64 \nf 34/66 35/68 38/76 33/64 \nf 19/43 26/54 15/29 \nf 19/43 27/55 34/66 26/54 \nf 27/55 35/67 34/66 \nf 17/36 46/88 44/85 18/40 \nf 42/83 16/32 15/28 40/80 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/edge_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng StickerR\nv 2.69 1 0.8\nv 2.69 1 -0.8\nv 2.69 2.6 0.8\nv 2.69 2.6 -0.8\n\nvt 0.05 0.05 0.05\nvt 0.95 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.95 0.05\n\nf 2/2 4/4 3/3 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/edge_u.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng StickerU\nv 1 2.69 0.8\nv 2.6 2.69 0.8\nv 1 2.69 -0.8\nv 2.6 2.69 -0.8\n\nvt 0.05 0.05 0.05\nvt 0.95 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.95 0.05\n\nf 2/2 4/4 3/3 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/side.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng Cylinder_Back\nv 0.9 -0.450003 0\nv 0.9 0 0.450003\nv 0.9 0 -0.450003\nv 0.9 0.450003 0\n\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 2/2 4/4 3/3 1/1 \n\ng Cylinder\nv 0.905 -0.45 0\nv 1.695 -0.45 0\nv 0.905 0 -0.45\nv 1.695 0 -0.45\nv 0.905 0.45 0\nv 1.695 0.45 0\nv 0.905 0 0.45\nv 1.695 0 0.45\n\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0.75 0 0\nvt 0.75 1 0\n\nf 7/9 8/10 6/8 5/6 \nf 9/11 10/12 8/10 7/9 \nf 11/13 12/14 10/12 9/11 \nf 5/5 6/7 12/14 11/13 \n\ng Cube\nv 1.79 -0.895 0.795\nv 2.59 -0.895 0.795\nv 2.59 -0.895 -0.795\nv 1.79 -0.895 -0.795\nv 1.79 -0.795 0.895\nv 2.59 -0.795 0.895\nv 2.69 -0.795 0.795\nv 2.69 -0.795 -0.795\nv 2.59 -0.795 -0.895\nv 1.79 -0.795 -0.895\nv 1.69 -0.795 -0.795\nv 1.69 -0.795 0.795\nv 1.79 0.795 0.895\nv 2.59 0.795 0.895\nv 2.69 0.795 0.795\nv 2.69 0.795 -0.795\nv 2.59 0.795 -0.895\nv 1.79 0.795 -0.895\nv 1.69 0.795 -0.795\nv 1.69 0.795 0.795\nv 1.79 0.895 0.795\nv 2.59 0.895 0.795\nv 2.59 0.895 -0.795\nv 1.79 0.895 -0.795\n\nvt 0.955045 0 0\nvt 0.91009 0 0\nvt 0 1 0\nvt 0 0 0\nvt 1 1 0\nvt 0 0 0\nvt 0.917938 0 0\nvt 0.835876 0 0\nvt 0 0 0\nvt 0.955045 0 0\nvt 1 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 0.917938 0 0\nvt 0.835876 0 0\nvt 1 0.082493 0\nvt 0 0.082493 0\nvt 0.835876 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.835876 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 1 0.917507 0\nvt 0 0.917507 0\nvt 0.835876 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.835876 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0 0 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 1 0 0\nvt 0 1 0\nvt 0.917938 1 0\nvt 0.835876 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.955045 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0.917938 1 0\nvt 0.835876 1 0\n\nf 14/22 18/32 17/31 13/18 \nf 18/32 26/44 25/43 17/31 \nf 26/44 34/61 33/57 25/43 \nf 19/34 18/32 14/21 \nf 19/34 27/46 26/44 18/32 \nf 27/46 34/60 26/44 \nf 15/26 20/35 19/33 14/20 \nf 16/27 15/25 14/19 13/17 \nf 28/47 35/65 34/59 27/45 \nf 21/37 20/35 15/24 \nf 21/37 29/49 28/47 20/35 \nf 29/49 35/64 28/47 \nf 16/29 22/38 21/36 15/23 \nf 22/38 30/50 29/48 21/36 \nf 30/50 36/68 35/63 29/48 \nf 23/40 22/38 16/28 \nf 23/40 31/52 30/50 22/38 \nf 31/52 36/67 30/50 \nf 13/16 24/41 23/39 16/27 \nf 24/41 32/53 31/51 23/39 \nf 32/53 33/56 36/66 31/51 \nf 17/30 24/41 13/15 \nf 17/30 25/42 32/53 24/41 \nf 25/42 33/55 32/53 \nf 34/58 35/62 36/66 33/54 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/side_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng Sticker\nv 2.69 -0.8 0.8\nv 2.69 -0.8 -0.8\nv 2.69 0.8 0.8\nv 2.69 0.8 -0.8\n\nvt 0.05 0.05 0.05\nvt 0.95 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.95 0.05\n\nf 2/2 4/4 3/3 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes1/center.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng CenterPart_Simple Plane_Front\nv 0 -0.450003 0.9\nv 0.450003 0 0.9\nv -0.450003 0 0.9\nv 0 0.450003 0.9\n\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 2/2 4/4 3/3 1/1 \n\ng CenterPart_Simple Plane_Back\nv 0.450003 0 -0.9\nv 0 -0.450003 -0.9\nv 0 0.450003 -0.9\nv -0.450003 0 -0.9\n\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 6/6 8/8 7/7 5/5 \n\ng CenterPart_Simple Plane_Right\nv 0.9 0 0.450003\nv 0.9 -0.450003 0\nv 0.9 0.450003 0\nv 0.9 0 -0.450003\n\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 10/10 12/12 11/11 9/9 \n\ng CenterPart_Simple Plane_Left\nv -0.9 -0.450003 0\nv -0.9 0 0.450003\nv -0.9 0 -0.450003\nv -0.9 0.450003 0\n\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 14/14 16/16 15/15 13/13 \n\ng CenterPart_Simple Plane_Down\nv -0.450003 -0.9 0\nv 0 -0.9 -0.450003\nv 0 -0.9 0.450003\nv 0.450003 -0.9 0\n\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 18/18 20/20 19/19 17/17 \n\ng CenterPart_Simple Plane_Up\nv 0 0.9 0.450003\nv 0.450003 0.9 0\nv -0.450003 0.9 0\nv 0 0.9 -0.450003\n\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 22/22 24/24 23/23 21/21 \n\ng CenterPart_Simple Boole\nv 0.45 -0.9 0\nv 0.45 0.9 0\nv 0 -0.9 -0.45\nv 0 0.9 -0.45\nv -0.45 -0.9 0\nv -0.45 0.9 0\nv 0 -0.9 0.45\nv 0 0.9 0.45\nv 0 -0.45 -0.45\nv 0.45 0.45 0\nv -0.45 0.45 0\nv 0 0.45 -0.45\nv 0 0.45 0.45\nv -0.45 -0.45 0\nv -0.225 -0.225 0.225\nv 0.225 0.225 -0.225\nv -0.225 0.225 0.225\nv 0.225 0.225 0.225\nv 0.45 0 0.9\nv 0.45 0 -0.9\nv 0 -0.45 0.9\nv 0 -0.45 -0.9\nv -0.45 0 0.9\nv -0.45 0 -0.9\nv 0 0.45 0.9\nv 0 0.45 -0.9\nv -0.225 -0.225 -0.225\nv -0.225 0.225 -0.225\nv 0 -0.45 0.45\nv 0.225 -0.225 0.225\nv -0.9 -0.45 0\nv 0.9 -0.45 0\nv -0.9 0 -0.45\nv 0.9 0 -0.45\nv -0.9 0.45 0\nv 0.9 0.45 0\nv -0.9 0 0.45\nv 0.9 0 0.45\nv 0.45 0 0.45\nv -0.45 0 -0.45\nv -0.45 0 0.45\nv 0.45 0 -0.45\nv 0.45 -0.45 0\nv 0.225 -0.225 -0.225\n\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0.75 0 0\nvt 0.75 1 0\nvt 0.25 0.75 0\nvt 0.25 0.25 0\nvt 0.5 0.75 0\nvt 1 0.75 0\nvt 0 0.75 0\nvt 0.5 0.25 0\nvt 0.5 0.75 0\nvt 0.75 0.75 0\nvt 0.25 0.75 0\nvt 0.75 0.25 0\nvt 0.75 0.75 0\nvt 1 0.25 0\nvt 0 0.25 0\nvt 0.5 0.25 0\nvt 0.875 0.375 0\nvt 0.375 0.375 0\nvt 0.625 0.375 0\nvt 0.375 0.625 0\nvt 0.875 0.625 0\nvt 0.125 0.625 0\nvt 0.625 0.375 0\nvt 0.625 0.375 0\nvt 0.625 0.625 0\nvt 0.625 0.625 0\nvt 0.875 0.375 0\nvt 0.875 0.625 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0.75 0 0\nvt 0.75 1 0\nvt 0.125 0.375 0\nvt 0.375 0.625 0\nvt 0.375 0.375 0\nvt 0.375 0.375 0\nvt 0.625 0.625 0\nvt 0.375 0.625 0\nvt 0.25 0.25 0\nvt 0.75 0.25 0\nvt 0.875 0.625 0\nvt 0.125 0.375 0\nvt 0.875 0.375 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0.75 0 0\nvt 0.75 1 0\nvt 0.75 0.75 0\nvt 1 0.25 0\nvt 0 0.25 0\nvt 0.25 0.25 0\nvt 0.5 0.75 0\nvt 0.75 0.25 0\nvt 0.5 0.25 0\nvt 0.25 0.75 0\nvt 1 0.75 0\nvt 0 0.75 0\nvt 1 0.75 0\nvt 0 0.75 0\nvt 1 0.25 0\nvt 0 0.25 0\nvt 0.125 0.625 0\nvt 0.125 0.625 0\nvt 0.125 0.375 0\n\nf 68/108 67/105 25/26 \nf 40/54 26/28 34/39 \nf 68/108 25/26 27/29 33/36 \nf 26/28 40/54 36/43 28/30 \nf 52/76 28/30 36/43 \nf 51/73 33/36 27/29 \nf 52/76 35/41 30/32 28/30 \nf 38/48 51/73 27/29 29/31 \nf 41/57 37/45 32/34 30/32 \nf 39/51 29/31 31/33 53/78 \nf 39/51 38/48 29/31 \nf 41/57 30/32 35/41 \nf 42/60 32/34 37/45 \nf 42/60 34/38 26/27 32/34 \nf 67/104 54/81 31/33 25/25 \nf 54/81 53/78 31/33 \nf 68/107 33/35 46/66 44/64 \nf 68/107 44/64 66/101 \nf 54/80 63/94 43/62 \nf 53/77 54/80 43/62 45/65 \nf 39/50 53/77 45/65 \nf 65/98 39/50 45/65 47/67 \nf 51/72 46/66 33/35 \nf 48/68 46/66 51/72 64/96 \nf 64/96 36/42 50/70 48/68 \nf 36/42 64/96 52/75 \nf 37/44 41/56 65/98 \nf 37/44 65/98 47/67 49/69 \nf 36/42 40/53 66/100 \nf 50/70 36/42 66/100 44/63 \nf 37/44 63/93 42/59 \nf 43/61 63/93 37/44 49/69 \nf 68/106 66/99 58/87 \nf 67/103 68/106 58/87 56/85 \nf 51/71 38/47 55/83 \nf 51/71 55/83 57/86 64/95 \nf 35/40 52/74 57/86 59/88 \nf 52/74 64/95 57/86 \nf 34/37 66/99 40/52 \nf 66/99 34/37 60/89 58/87 \nf 35/40 65/97 41/55 \nf 65/97 35/40 59/88 61/90 \nf 34/37 42/58 63/92 \nf 34/37 63/92 62/91 60/89 \nf 67/102 63/92 54/79 \nf 67/102 56/84 62/91 63/92 \nf 38/46 39/49 65/97 \nf 55/82 38/46 65/97 61/90 \n\n"
            ),
            {}
        );
    }),
    define("RubiksCubeS1Cube3D", ["AbstractRubiksCubeCube3D", "CubeAttributes", "PreloadRubiksCubeS1"], function (e, t, n) {
        return (
            (RubiksCubeS1Cube3D = function (e) {
                this.initRubiksCubeS1Cube3D(e);
            }),
            (RubiksCubeS1Cube3D.prototype = e.newAbstractRubiksCubeCube3D(!1)),
            (RubiksCubeS1Cube3D.prototype.getBaseUrl = function () {
                return "lib/models/rubikscubes1/";
            }),
            (RubiksCubeS1Cube3D.prototype.initRubiksCubeS1Cube3D = function (e) {
                this.initAbstractRubiksCubeCube3D(e, 1.8);
            }),
            (RubiksCubeS1Cube3D.prototype.getBaseUrl = function () {
                return "lib/models/rubikscubes1/";
            }),
            (RubiksCubeS1Cube3D.prototype.createAttributes = function () {
                var e = t.newCubeAttributes(this.partCount, 54, [9, 9, 9, 9, 9, 9]),
                    n = [0.5, 0.6, 0.4, 16];
                for (var r = 0; r < this.partCount; r++) (e.partsFillColor[r] = [24, 24, 24, 255]), (e.partsPhong[r] = n);
                e.partsFillColor[this.centerOffset] = [240, 240, 240, 255];
                var i = [
                        [255, 210, 0, 255],
                        [0, 51, 115, 255],
                        [140, 0, 15, 255],
                        [248, 248, 248, 255],
                        [0, 115, 47, 255],
                        [255, 70, 0, 255],
                    ],
                    s = [0.8, 0.2, 0.1, 8];
                for (var r = 0; r < 6; r++) for (var o = 0; o < 9; o++) (e.stickersFillColor[r * 9 + o] = i[r]), (e.stickersPhong[r * 9 + o] = s);
                return e;
            }),
            {
                newCube3D: function (e) {
                    return new RubiksCubeS1Cube3D(e);
                },
            }
        );
    }),
    define("PreloadRubiksCubeS4", ["J3DI"], function (e) {
        return (
            e.setFileData(
                "lib/models/rubikscubes4/corner.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner Cube_1\nv 0.45 0.45 1.35\nv 0.45 1.35 1.35\nv 1.35 0.45 1.35\nv 1.35 1.35 1.35\nv 1.35 0.45 0.45\nv 1.35 1.35 0.45\nv 0.45 0.45 0.45\nv 0.45 1.35 0.45\n\nvt 0 1 0\nvt 1 0 0\nvt 0 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0 0 0\nvt 1 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 3/9 4/12 2/6 1/3 \nf 5/13 6/15 4/11 3/8 \nf 7/18 8/20 6/16 5/14 \nf 1/2 2/5 8/19 7/17 \nf 4/10 6/15 8/19 2/4 \nf 5/13 3/7 1/1 7/17 \n\ng corner Cube\nv 1.005 0.905 2.595\nv 2.595 0.905 2.595\nv 2.595 0.905 1.005\nv 1.005 0.905 1.005\nv 1.005 0.918397 2.645\nv 2.595 0.918397 2.645\nv 2.62 0.918397 2.638301\nv 2.638301 0.918397 2.62\nv 2.645 0.918397 2.595\nv 2.645 0.918397 1.005\nv 2.638301 0.918397 0.98\nv 2.62 0.918397 0.961699\nv 2.595 0.918397 0.955\nv 1.005 0.918397 0.955\nv 0.98 0.918397 0.961699\nv 0.961699 0.918397 0.98\nv 0.955 0.918397 1.005\nv 0.955 0.918397 2.595\nv 0.961699 0.918397 2.62\nv 0.98 0.918397 2.638301\nv 1.005 0.955 2.681602\nv 2.595 0.955 2.681602\nv 2.638301 0.955 2.67\nv 2.67 0.955 2.638301\nv 2.681602 0.955 2.595\nv 2.681602 0.955 1.005\nv 2.67 0.955 0.961699\nv 2.638301 0.955 0.93\nv 2.595 0.955 0.918397\nv 1.005 0.955 0.918397\nv 0.961699 0.955 0.93\nv 0.93 0.955 0.961699\nv 0.918397 0.955 1.005\nv 0.918397 0.955 2.595\nv 0.93 0.955 2.638301\nv 0.961699 0.955 2.67\nv 1.005 1.005 2.695\nv 2.595 1.005 2.695\nv 2.645 1.005 2.681602\nv 2.681602 1.005 2.645\nv 2.695 1.005 2.595\nv 2.695 1.005 1.005\nv 2.681602 1.005 0.955\nv 2.645 1.005 0.918397\nv 2.595 1.005 0.905\nv 1.005 1.005 0.905\nv 0.955 1.005 0.918397\nv 0.918397 1.005 0.955\nv 0.905 1.005 1.005\nv 0.905 1.005 2.595\nv 0.918397 1.005 2.645\nv 0.955 1.005 2.681602\nv 1.005 2.595 2.695\nv 2.595 2.595 2.695\nv 2.645 2.595 2.681602\nv 2.681602 2.595 2.645\nv 2.695 2.595 2.595\nv 2.695 2.595 1.005\nv 2.681602 2.595 0.955\nv 2.645 2.595 0.918397\nv 2.595 2.595 0.905\nv 1.005 2.595 0.905\nv 0.955 2.595 0.918397\nv 0.918397 2.595 0.955\nv 0.905 2.595 1.005\nv 0.905 2.595 2.595\nv 0.918397 2.595 2.645\nv 0.955 2.595 2.681602\nv 1.005 2.645 2.681602\nv 2.595 2.645 2.681602\nv 2.638301 2.645 2.67\nv 2.67 2.645 2.638301\nv 2.681602 2.645 2.595\nv 2.681602 2.645 1.005\nv 2.67 2.645 0.961699\nv 2.638301 2.645 0.93\nv 2.595 2.645 0.918397\nv 1.005 2.645 0.918397\nv 0.961699 2.645 0.93\nv 0.93 2.645 0.961699\nv 0.918397 2.645 1.005\nv 0.918397 2.645 2.595\nv 0.93 2.645 2.638301\nv 0.961699 2.645 2.67\nv 1.005 2.681602 2.645\nv 2.595 2.681602 2.645\nv 2.62 2.681602 2.638301\nv 2.638301 2.681602 2.62\nv 2.645 2.681602 2.595\nv 2.645 2.681602 1.005\nv 2.638301 2.681602 0.98\nv 2.62 2.681602 0.961699\nv 2.595 2.681602 0.955\nv 1.005 2.681602 0.955\nv 0.98 2.681602 0.961699\nv 0.961699 2.681602 0.98\nv 0.955 2.681602 1.005\nv 0.955 2.681602 2.595\nv 0.961699 2.681602 2.62\nv 0.98 2.681602 2.638301\nv 1.005 2.695 2.595\nv 2.595 2.695 2.595\nv 2.595 2.695 1.005\nv 1.005 2.695 1.005\n\nvt 0 1 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 1 0 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 1 0.027498 0\nvt 0 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 1 0.054995 0\nvt 0 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 1 0.082493 0\nvt 0 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 1 0.917507 0\nvt 0 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 1 0.945005 0\nvt 0 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 1 0.972502 0\nvt 0 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 1 0 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\n\nf 10/32 14/46 13/45 9/26 \nf 14/46 30/66 29/65 13/45 \nf 30/66 46/86 45/85 29/65 \nf 46/86 62/106 61/105 45/85 \nf 62/106 78/126 77/125 61/105 \nf 78/126 94/146 93/145 77/125 \nf 94/146 110/175 109/169 93/145 \nf 15/47 14/46 10/31 \nf 15/47 31/67 30/66 14/46 \nf 31/67 47/87 46/86 30/66 \nf 47/87 63/107 62/106 46/86 \nf 63/107 79/127 78/126 62/106 \nf 79/127 95/147 94/146 78/126 \nf 95/147 110/174 94/146 \nf 16/48 15/47 10/30 \nf 16/48 32/68 31/67 15/47 \nf 32/68 48/88 47/87 31/67 \nf 48/88 64/108 63/107 47/87 \nf 64/108 80/128 79/127 63/107 \nf 80/128 96/148 95/147 79/127 \nf 96/148 110/173 95/147 \nf 17/50 16/48 10/29 \nf 17/50 33/70 32/68 16/48 \nf 33/70 49/90 48/88 32/68 \nf 49/90 65/110 64/108 48/88 \nf 65/110 81/130 80/128 64/108 \nf 81/130 97/150 96/148 80/128 \nf 97/150 110/172 96/148 \nf 11/38 18/51 17/49 10/28 \nf 18/51 34/71 33/69 17/49 \nf 34/71 50/91 49/89 33/69 \nf 50/91 66/111 65/109 49/89 \nf 66/111 82/131 81/129 65/109 \nf 82/131 98/151 97/149 81/129 \nf 98/151 111/181 110/171 97/149 \nf 19/52 18/51 11/37 \nf 19/52 35/72 34/71 18/51 \nf 35/72 51/92 50/91 34/71 \nf 51/92 67/112 66/111 50/91 \nf 67/112 83/132 82/131 66/111 \nf 83/132 99/152 98/151 82/131 \nf 99/152 111/180 98/151 \nf 20/53 19/52 11/36 \nf 20/53 36/73 35/72 19/52 \nf 36/73 52/93 51/92 35/72 \nf 52/93 68/113 67/112 51/92 \nf 68/113 84/133 83/132 67/112 \nf 84/133 100/153 99/152 83/132 \nf 100/153 111/179 99/152 \nf 21/55 20/53 11/35 \nf 21/55 37/75 36/73 20/53 \nf 37/75 53/95 52/93 36/73 \nf 53/95 69/115 68/113 52/93 \nf 69/115 85/135 84/133 68/113 \nf 85/135 101/155 100/153 84/133 \nf 101/155 111/178 100/153 \nf 12/43 22/56 21/54 11/34 \nf 22/56 38/76 37/74 21/54 \nf 38/76 54/96 53/94 37/74 \nf 54/96 70/116 69/114 53/94 \nf 70/116 86/136 85/134 69/114 \nf 86/136 102/156 101/154 85/134 \nf 102/156 112/186 111/177 101/154 \nf 23/57 22/56 12/42 \nf 23/57 39/77 38/76 22/56 \nf 39/77 55/97 54/96 38/76 \nf 55/97 71/117 70/116 54/96 \nf 71/117 87/137 86/136 70/116 \nf 87/137 103/157 102/156 86/136 \nf 103/157 112/185 102/156 \nf 24/58 23/57 12/41 \nf 24/58 40/78 39/77 23/57 \nf 40/78 56/98 55/97 39/77 \nf 56/98 72/118 71/117 55/97 \nf 72/118 88/138 87/137 71/117 \nf 88/138 104/158 103/157 87/137 \nf 104/158 112/184 103/157 \nf 25/60 24/58 12/40 \nf 25/60 41/80 40/78 24/58 \nf 41/80 57/100 56/98 40/78 \nf 57/100 73/120 72/118 56/98 \nf 73/120 89/140 88/138 72/118 \nf 89/140 105/160 104/158 88/138 \nf 105/160 112/183 104/158 \nf 9/25 26/61 25/59 12/39 \nf 26/61 42/81 41/79 25/59 \nf 42/81 58/101 57/99 41/79 \nf 58/101 74/121 73/119 57/99 \nf 74/121 90/141 89/139 73/119 \nf 90/141 106/161 105/159 89/139 \nf 106/161 109/168 112/182 105/159 \nf 27/62 26/61 9/24 \nf 27/62 43/82 42/81 26/61 \nf 43/82 59/102 58/101 42/81 \nf 59/102 75/122 74/121 58/101 \nf 75/122 91/142 90/141 74/121 \nf 91/142 107/162 106/161 90/141 \nf 107/162 109/167 106/161 \nf 28/63 27/62 9/23 \nf 28/63 44/83 43/82 27/62 \nf 44/83 60/103 59/102 43/82 \nf 60/103 76/123 75/122 59/102 \nf 76/123 92/143 91/142 75/122 \nf 92/143 108/163 107/162 91/142 \nf 108/163 109/166 107/162 \nf 13/44 28/63 9/22 \nf 13/44 29/64 44/83 28/63 \nf 29/64 45/84 60/103 44/83 \nf 45/84 61/104 76/123 60/103 \nf 61/104 77/124 92/143 76/123 \nf 77/124 93/144 108/163 92/143 \nf 93/144 109/165 108/163 \nf 110/170 111/176 112/182 109/164 \nf 12/39 11/33 10/27 9/21 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/corner_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_r StickerR\nusemtl Stickers\nv 2.61 1 2.6\nv 2.61 2.6 2.6\nv 2.71 1 2.6\nv 2.71 2.6 2.6\nv 2.71 1 1\nv 2.71 2.6 1\nv 2.61 1 1\nv 2.61 2.6 1\n\nvt 0.05 0.00 0\nvt 0.95 0.05 0\nvt 0.00 0.05 0\nvt 0.05 1.00 0\nvt 0.95 0.95 0\n#6:\nvt 0.00 0.95 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0.05\nvt 0.05 0.05 0\nvt 0.05 0.95 0\n#11:\nvt 0.05 0.95 0.05\nvt 0.05 0.95 0\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 0.95 0.95 0\n#16:\nvt 0.95 0.95 0\nvt 0.95 0.00 0\nvt 1.00 0.05 0\nvt 0.95 1.00 0\nvt 1.00 0.95 0\n\n#front:\nf 3/9 4/12 2/6 1/3 \n#right:\nf 5/13 6/15 4/11 3/8 \n#back:\nf 7/18 8/20 6/16 5/14 \n#left:\nf 1/13 2/15 8/11 7/8 \n#up:\nf 4/10 6/15 8/19 2/4 \n#down:\nf 5/13 3/7 1/1 7/17 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/corner_u.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_u StickerU\nusemtl Stickers\nv 1 2.61 2.6\nv 1 2.71 2.6\nv 2.6 2.61 2.6\nv 2.6 2.71 2.6\nv 2.6 2.61 1\nv 2.6 2.71 1\nv 1 2.61 1\nv 1 2.71 1\n\nvt 0.05 0.95 0\nvt 0.00 0.05 0 \nvt 0.05 0.00 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 1 1 0\nvt 0.95 0.05 0\nvt 0.95 0.00 0\nvt 0.95 0.05 0\n#11:\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 1.00 0.95 0\nvt 0.95 1.00 0\nvt 0.95 0.95 0\nvt 0.95 0.95 0\nvt 0.00 0.95 0\nvt 0.05 1.00 0\nvt 0.05 0.95 0\nvt 0.05 0.95 0\n\n#front:\nf 3/9 4/12 2/6 1/3 \n#right:\nf 5/13 6/15 4/11 3/8 \n#back:\nf 7/18 8/20 6/16 5/14 \n#left:\nf 1/2 2/5 8/1 7/17 \n#up:\nf 4/10 6/15 8/19 2/4 \n#down:\nf 5/10 3/15 1/19 7/4 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/corner_f.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_f StickerF\nusemtl Stickers\nv 1 1 2.71\nv 1 2.6 2.71\nv 2.6 1 2.71\nv 2.6 2.6 2.71\nv 2.6 1 2.61\nv 2.6 2.6 2.61\nv 1 1 2.61\nv 1 2.6 2.61\n\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.95 0\nvt 0.05 0.95 0\n#6:\nvt 0.05 0.95 0\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 0.95 0.95 0\n#11:\nvt 0.95 0.95 0\nvt 0.95 0.95 0\nvt 1.00 0.05 0\nvt 0.95 0.00 0\nvt 1.00 0.95 0\n#16:\nvt 0.05 0.00 0\nvt 0.05 0.05 0\nvt 0.00 0.05 0\nvt 0.00 0.95 0\nvt 0.05 1.00 0\n#21:\nvt 0.95 1.00 0\n\n#front:\nf 3/9 4/12 2/6 1/3 \n#right:\nf 5/13 6/15 4/11 3/8 \n#back:\nf 7/9 8/12 6/6 5/3 \n#front:\nf 1/2 2/5 8/19 7/17 \n#up:\nf 4/10 6/21 8/20 2/4 \n#down:\nf 5/14 3/7 1/1 7/16\n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/edge.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng edge Cube_1\nv 2.595 0.905 0.795\nv 2.595 0.905 -0.795\nv 1.005 0.905 -0.795\nv 1.005 0.905 0.795\nv 2.645 0.918397 0.795\nv 2.645 0.918397 -0.795\nv 2.638301 0.918397 -0.82\nv 2.62 0.918397 -0.838301\nv 2.595 0.918397 -0.845\nv 1.005 0.918397 -0.845\nv 0.98 0.918397 -0.838301\nv 0.961699 0.918397 -0.82\nv 0.955 0.918397 -0.795\nv 0.955 0.918397 0.795\nv 0.961699 0.918397 0.82\nv 0.98 0.918397 0.838301\nv 1.005 0.918397 0.845\nv 2.595 0.918397 0.845\nv 2.62 0.918397 0.838301\nv 2.638301 0.918397 0.82\nv 2.681602 0.955 0.795\nv 2.681602 0.955 -0.795\nv 2.67 0.955 -0.838301\nv 2.638301 0.955 -0.87\nv 2.595 0.955 -0.881603\nv 1.005 0.955 -0.881602\nv 0.961699 0.955 -0.87\nv 0.93 0.955 -0.838301\nv 0.918397 0.955 -0.795\nv 0.918397 0.955 0.795\nv 0.93 0.955 0.838301\nv 0.961699 0.955 0.87\nv 1.005 0.955 0.881603\nv 2.595 0.955 0.881602\nv 2.638301 0.955 0.87\nv 2.67 0.955 0.838301\nv 2.695 1.005 0.795\nv 2.695 1.005 -0.795\nv 2.681602 1.005 -0.845\nv 2.645 1.005 -0.881603\nv 2.595 1.005 -0.895\nv 1.005 1.005 -0.895\nv 0.955 1.005 -0.881602\nv 0.918397 1.005 -0.845\nv 0.905 1.005 -0.795\nv 0.905 1.005 0.795\nv 0.918397 1.005 0.845\nv 0.955 1.005 0.881603\nv 1.005 1.005 0.895\nv 2.595 1.005 0.895\nv 2.645 1.005 0.881602\nv 2.681602 1.005 0.845\nv 2.695 2.595 0.795\nv 2.695 2.595 -0.795\nv 2.681602 2.595 -0.845\nv 2.645 2.595 -0.881603\nv 2.595 2.595 -0.895\nv 1.005 2.595 -0.895\nv 0.955 2.595 -0.881602\nv 0.918397 2.595 -0.845\nv 0.905 2.595 -0.795\nv 0.905 2.595 0.795\nv 0.918397 2.595 0.845\nv 0.955 2.595 0.881603\nv 1.005 2.595 0.895\nv 2.595 2.595 0.895\nv 2.645 2.595 0.881602\nv 2.681602 2.595 0.845\nv 2.681602 2.645 0.795\nv 2.681602 2.645 -0.795\nv 2.67 2.645 -0.838301\nv 2.638301 2.645 -0.87\nv 2.595 2.645 -0.881603\nv 1.005 2.645 -0.881602\nv 0.961699 2.645 -0.87\nv 0.93 2.645 -0.838301\nv 0.918397 2.645 -0.795\nv 0.918397 2.645 0.795\nv 0.93 2.645 0.838301\nv 0.961699 2.645 0.87\nv 1.005 2.645 0.881603\nv 2.595 2.645 0.881602\nv 2.638301 2.645 0.87\nv 2.67 2.645 0.838301\nv 2.645 2.681602 0.795\nv 2.645 2.681602 -0.795\nv 2.638301 2.681602 -0.82\nv 2.62 2.681602 -0.838301\nv 2.595 2.681602 -0.845\nv 1.005 2.681602 -0.845\nv 0.98 2.681602 -0.838301\nv 0.961699 2.681602 -0.82\nv 0.955 2.681602 -0.795\nv 0.955 2.681602 0.795\nv 0.961699 2.681602 0.82\nv 0.98 2.681602 0.838301\nv 1.005 2.681602 0.845\nv 2.595 2.681602 0.845\nv 2.62 2.681602 0.838301\nv 2.638301 2.681602 0.82\nv 2.595 2.695 0.795\nv 2.595 2.695 -0.795\nv 1.005 2.695 -0.795\nv 1.005 2.695 0.795\n\nvt 0 1 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 1 0 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 1 0.027498 0\nvt 0 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 1 0.054995 0\nvt 0 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 1 0.082493 0\nvt 0 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 1 0.917507 0\nvt 0 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 1 0.945005 0\nvt 0 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 1 0.972502 0\nvt 0 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 1 0 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\n\nf 2/12 6/26 5/25 1/6 \nf 6/26 22/46 21/45 5/25 \nf 22/46 38/66 37/65 21/45 \nf 38/66 54/86 53/85 37/65 \nf 54/86 70/106 69/105 53/85 \nf 70/106 86/126 85/125 69/105 \nf 86/126 102/155 101/149 85/125 \nf 7/27 6/26 2/11 \nf 7/27 23/47 22/46 6/26 \nf 23/47 39/67 38/66 22/46 \nf 39/67 55/87 54/86 38/66 \nf 55/87 71/107 70/106 54/86 \nf 71/107 87/127 86/126 70/106 \nf 87/127 102/154 86/126 \nf 8/28 7/27 2/10 \nf 8/28 24/48 23/47 7/27 \nf 24/48 40/68 39/67 23/47 \nf 40/68 56/88 55/87 39/67 \nf 56/88 72/108 71/107 55/87 \nf 72/108 88/128 87/127 71/107 \nf 88/128 102/153 87/127 \nf 9/30 8/28 2/9 \nf 9/30 25/50 24/48 8/28 \nf 25/50 41/70 40/68 24/48 \nf 41/70 57/90 56/88 40/68 \nf 57/90 73/110 72/108 56/88 \nf 73/110 89/130 88/128 72/108 \nf 89/130 102/152 88/128 \nf 3/18 10/31 9/29 2/8 \nf 10/31 26/51 25/49 9/29 \nf 26/51 42/71 41/69 25/49 \nf 42/71 58/91 57/89 41/69 \nf 58/91 74/111 73/109 57/89 \nf 74/111 90/131 89/129 73/109 \nf 90/131 103/161 102/151 89/129 \nf 11/32 10/31 3/17 \nf 11/32 27/52 26/51 10/31 \nf 27/52 43/72 42/71 26/51 \nf 43/72 59/92 58/91 42/71 \nf 59/92 75/112 74/111 58/91 \nf 75/112 91/132 90/131 74/111 \nf 91/132 103/160 90/131 \nf 12/33 11/32 3/16 \nf 12/33 28/53 27/52 11/32 \nf 28/53 44/73 43/72 27/52 \nf 44/73 60/93 59/92 43/72 \nf 60/93 76/113 75/112 59/92 \nf 76/113 92/133 91/132 75/112 \nf 92/133 103/159 91/132 \nf 13/35 12/33 3/15 \nf 13/35 29/55 28/53 12/33 \nf 29/55 45/75 44/73 28/53 \nf 45/75 61/95 60/93 44/73 \nf 61/95 77/115 76/113 60/93 \nf 77/115 93/135 92/133 76/113 \nf 93/135 103/158 92/133 \nf 4/23 14/36 13/34 3/14 \nf 14/36 30/56 29/54 13/34 \nf 30/56 46/76 45/74 29/54 \nf 46/76 62/96 61/94 45/74 \nf 62/96 78/116 77/114 61/94 \nf 78/116 94/136 93/134 77/114 \nf 94/136 104/166 103/157 93/134 \nf 15/37 14/36 4/22 \nf 15/37 31/57 30/56 14/36 \nf 31/57 47/77 46/76 30/56 \nf 47/77 63/97 62/96 46/76 \nf 63/97 79/117 78/116 62/96 \nf 79/117 95/137 94/136 78/116 \nf 95/137 104/165 94/136 \nf 16/38 15/37 4/21 \nf 16/38 32/58 31/57 15/37 \nf 32/58 48/78 47/77 31/57 \nf 48/78 64/98 63/97 47/77 \nf 64/98 80/118 79/117 63/97 \nf 80/118 96/138 95/137 79/117 \nf 96/138 104/164 95/137 \nf 17/40 16/38 4/20 \nf 17/40 33/60 32/58 16/38 \nf 33/60 49/80 48/78 32/58 \nf 49/80 65/100 64/98 48/78 \nf 65/100 81/120 80/118 64/98 \nf 81/120 97/140 96/138 80/118 \nf 97/140 104/163 96/138 \nf 1/5 18/41 17/39 4/19 \nf 18/41 34/61 33/59 17/39 \nf 34/61 50/81 49/79 33/59 \nf 50/81 66/101 65/99 49/79 \nf 66/101 82/121 81/119 65/99 \nf 82/121 98/141 97/139 81/119 \nf 98/141 101/148 104/162 97/139 \nf 19/42 18/41 1/4 \nf 19/42 35/62 34/61 18/41 \nf 35/62 51/82 50/81 34/61 \nf 51/82 67/102 66/101 50/81 \nf 67/102 83/122 82/121 66/101 \nf 83/122 99/142 98/141 82/121 \nf 99/142 101/147 98/141 \nf 20/43 19/42 1/3 \nf 20/43 36/63 35/62 19/42 \nf 36/63 52/83 51/82 35/62 \nf 52/83 68/103 67/102 51/82 \nf 68/103 84/123 83/122 67/102 \nf 84/123 100/143 99/142 83/122 \nf 100/143 101/146 99/142 \nf 5/24 20/43 1/2 \nf 5/24 21/44 36/63 20/43 \nf 21/44 37/64 52/83 36/63 \nf 37/64 53/84 68/103 52/83 \nf 53/84 69/104 84/123 68/103 \nf 69/104 85/124 100/143 84/123 \nf 85/124 101/145 100/143 \nf 102/150 103/156 104/162 101/144 \nf 4/19 3/13 2/7 1/1 \n\ng edge Cube\nv 1.35 0.45 0.45\nv 1.35 1.35 0.45\nv 1.35 0.45 -0.45\nv 1.35 1.35 -0.45\nv 0.45 0.45 -0.45\nv 0.45 1.35 -0.45\nv 0.45 0.45 0.45\nv 0.45 1.35 0.45\n\nvt 0 1 0\nvt 1 0 0\nvt 0 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0 0 0\nvt 1 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0 0 0\nvt 1 0 0\nvt 0 1 0\nvt 1 1 0\n\nf 107/175 108/178 106/172 105/169 \nf 109/179 110/181 108/177 107/174 \nf 111/184 112/186 110/182 109/180 \nf 105/168 106/171 112/185 111/183 \nf 108/176 110/181 112/185 106/170 \nf 109/179 107/173 105/167 111/183 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/edge_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng edge_r StickerF\nusemtl Stickers\nv 2.71 1 0.8\nv 2.71 2.6 0.8\nv 2.71 1 -0.8\nv 2.71 2.6 -0.8\nv 2.61 1 -0.8\nv 2.61 2.6 -0.8\nv 2.61 1 0.8\nv 2.61 2.6 0.8\n\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.95 0\nvt 0.05 0.95 0\n#6:\nvt 0.05 0.95 0\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 0.95 0.95 0\n#11:\nvt 0.95 0.95 0\nvt 0.95 0.95 0\nvt 1.00 0.05 0\nvt 0.95 0.00 0\nvt 1.00 0.95 0\n#16:\nvt 0.05 0.00 0\nvt 0.05 0.05 0\nvt 0.00 0.05 0\nvt 0.00 0.95 0\nvt 0.05 1.00 0\n#21:\nvt 0.95 1.00 0\n\n#front:\nf 3/9 4/12 2/6 1/3 \n#right:\nf 5/13 6/15 4/11 3/8 \n#back:\nf 7/9 8/12 6/6 5/3 \n#front:\nf 1/2 2/5 8/19 7/17 \n#up:\nf 4/10 6/21 8/20 2/4 \n#down:\nf 5/14 3/7 1/1 7/16\n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/edge_u.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng edge_u_1 StickerU\nusemtl Stickers\nv 1 2.61 0.8\nv 1 2.71 0.8\nv 2.6 2.61 0.8\nv 2.6 2.71 0.8\nv 2.6 2.61 -0.8\nv 2.6 2.71 -0.8\nv 1 2.61 -0.8\nv 1 2.71 -0.8\n\nvt 0.05 0.95 0\nvt 0.00 0.05 0 \nvt 0.05 0.00 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 1 1 0\nvt 0.95 0.05 0\nvt 0.95 0.00 0\nvt 0.95 0.05 0\n#11:\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 1.00 0.95 0\nvt 0.95 1.00 0\nvt 0.95 0.95 0\nvt 0.95 0.95 0\nvt 0.00 0.95 0\nvt 0.05 1.00 0\nvt 0.05 0.95 0\nvt 0.05 0.95 0\n\n#front:\nf 3/9 4/12 2/6 1/3 \n#right:\nf 5/13 6/15 4/11 3/8 \n#back:\nf 7/18 8/20 6/16 5/14 \n#left:\nf 1/2 2/5 8/1 7/17 \n#up:\nf 4/10 6/15 8/19 2/4 \n#down:\nf 5/10 3/15 1/19 7/4 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/side.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng side Disc\nv 0.915 0 0\nv 0.915 0 -0.45\nv 0.915 -0.172208 -0.415746\nv 0.915 -0.318198 -0.318198\nv 0.915 -0.415746 -0.172207\nv 0.915 -0.45 0\nv 0.915 -0.415746 0.172208\nv 0.915 -0.318198 0.318198\nv 0.915 -0.172207 0.415746\nv 0.915 0 0.45\nv 0.915 0.172208 0.415746\nv 0.915 0.318198 0.318198\nv 0.915 0.415746 0.172207\nv 0.915 0.45 0\nv 0.915 0.415746 -0.172208\nv 0.915 0.318198 -0.318198\nv 0.915 0.172208 -0.415746\n\nvt 0.5 0.5 0\nvt 1 0.5 0\nvt 0.96194 0.691342 0\nvt 0.853553 0.853553 0\nvt 0.691342 0.96194 0\nvt 0.5 1 0\nvt 0.308658 0.96194 0\nvt 0.146447 0.853553 0\nvt 0.03806 0.691342 0\nvt 0 0.5 0\nvt 0.03806 0.308658 0\nvt 0.146447 0.146447 0\nvt 0.308658 0.03806 0\nvt 0.5 0 0\nvt 0.691342 0.03806 0\nvt 0.853554 0.146447 0\nvt 0.96194 0.308658 0\n\nf 3/3 1/1 2/2 \nf 4/4 1/1 3/3 \nf 5/5 1/1 4/4 \nf 6/6 1/1 5/5 \nf 7/7 1/1 6/6 \nf 8/8 1/1 7/7 \nf 9/9 1/1 8/8 \nf 10/10 1/1 9/9 \nf 11/11 1/1 10/10 \nf 12/12 1/1 11/11 \nf 13/13 1/1 12/12 \nf 14/14 1/1 13/13 \nf 15/15 1/1 14/14 \nf 16/16 1/1 15/15 \nf 17/17 1/1 16/16 \nf 2/2 1/1 17/17 \n\ng side Cylinder\nv 1.705 0 -0.45\nv 0.915 0 -0.45\nv 1.705 -0.172208 -0.415746\nv 0.915 -0.172208 -0.415746\nv 1.705 -0.318198 -0.318198\nv 0.915 -0.318198 -0.318198\nv 1.705 -0.415746 -0.172208\nv 0.915 -0.415746 -0.172208\nv 1.705 -0.45 0\nv 0.915 -0.45 0\nv 1.705 -0.415746 0.172208\nv 0.915 -0.415746 0.172208\nv 1.705 -0.318198 0.318198\nv 0.915 -0.318198 0.318198\nv 1.705 -0.172207 0.415746\nv 0.915 -0.172207 0.415746\nv 1.705 0 0.45\nv 0.915 0 0.45\nv 1.705 0.172208 0.415746\nv 0.915 0.172208 0.415746\nv 1.705 0.318198 0.318198\nv 0.915 0.318198 0.318198\nv 1.705 0.415746 0.172207\nv 0.915 0.415746 0.172207\nv 1.705 0.45 0\nv 0.915 0.45 0\nv 1.705 0.415746 -0.172208\nv 0.915 0.415746 -0.172208\nv 1.705 0.318198 -0.318198\nv 0.915 0.318198 -0.318198\nv 1.705 0.172208 -0.415746\nv 0.915 0.172208 -0.415746\n\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0.0625 0 0\nvt 0.0625 1 0\nvt 0.125 0 0\nvt 0.125 1 0\nvt 0.1875 0 0\nvt 0.1875 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.3125 0 0\nvt 0.3125 1 0\nvt 0.375 0 0\nvt 0.375 1 0\nvt 0.4375 0 0\nvt 0.4375 1 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0.5625 0 0\nvt 0.5625 1 0\nvt 0.625 0 0\nvt 0.625 1 0\nvt 0.6875 0 0\nvt 0.6875 1 0\nvt 0.75 0 0\nvt 0.75 1 0\nvt 0.8125 0 0\nvt 0.8125 1 0\nvt 0.875 0 0\nvt 0.875 1 0\nvt 0.9375 0 0\nvt 0.9375 1 0\n\nf 20/22 21/23 19/21 18/19 \nf 22/24 23/25 21/23 20/22 \nf 24/26 25/27 23/25 22/24 \nf 26/28 27/29 25/27 24/26 \nf 28/30 29/31 27/29 26/28 \nf 30/32 31/33 29/31 28/30 \nf 32/34 33/35 31/33 30/32 \nf 34/36 35/37 33/35 32/34 \nf 36/38 37/39 35/37 34/36 \nf 38/40 39/41 37/39 36/38 \nf 40/42 41/43 39/41 38/40 \nf 42/44 43/45 41/43 40/42 \nf 44/46 45/47 43/45 42/44 \nf 46/48 47/49 45/47 44/46 \nf 48/50 49/51 47/49 46/48 \nf 18/18 19/20 49/51 48/50 \n\ng side Cube\nv 2.6 -0.895 0.795\nv 2.6 -0.895 -0.795\nv 1.8 -0.895 -0.795\nv 1.8 -0.895 0.795\nv 2.65 -0.881603 0.795\nv 2.65 -0.881603 -0.795\nv 2.643301 -0.881603 -0.82\nv 2.625 -0.881603 -0.838301\nv 2.6 -0.881603 -0.845\nv 1.8 -0.881603 -0.845\nv 1.775 -0.881603 -0.838301\nv 1.756699 -0.881603 -0.82\nv 1.75 -0.881603 -0.795\nv 1.75 -0.881603 0.795\nv 1.756699 -0.881603 0.82\nv 1.775 -0.881603 0.838301\nv 1.8 -0.881603 0.845\nv 2.6 -0.881603 0.845\nv 2.625 -0.881603 0.838301\nv 2.643301 -0.881603 0.82\nv 2.686603 -0.845 0.795\nv 2.686603 -0.845 -0.795\nv 2.675 -0.845 -0.838301\nv 2.643301 -0.845 -0.87\nv 2.6 -0.845 -0.881603\nv 1.8 -0.845 -0.881603\nv 1.756699 -0.845 -0.87\nv 1.725 -0.845 -0.838301\nv 1.713398 -0.845 -0.795\nv 1.713398 -0.845 0.795\nv 1.725 -0.845 0.838301\nv 1.756699 -0.845 0.87\nv 1.8 -0.845 0.881603\nv 2.6 -0.845 0.881603\nv 2.643301 -0.845 0.87\nv 2.675 -0.845 0.838301\nv 2.7 -0.795 0.795\nv 2.7 -0.795 -0.795\nv 2.686603 -0.795 -0.845\nv 2.65 -0.795 -0.881603\nv 2.6 -0.795 -0.895\nv 1.8 -0.795 -0.895\nv 1.75 -0.795 -0.881603\nv 1.713398 -0.795 -0.845\nv 1.7 -0.795 -0.795\nv 1.7 -0.795 0.795\nv 1.713398 -0.795 0.845\nv 1.75 -0.795 0.881603\nv 1.8 -0.795 0.895\nv 2.6 -0.795 0.895\nv 2.65 -0.795 0.881603\nv 2.686603 -0.795 0.845\nv 2.7 0.795 0.795\nv 2.7 0.795 -0.795\nv 2.686603 0.795 -0.845\nv 2.65 0.795 -0.881603\nv 2.6 0.795 -0.895\nv 1.8 0.795 -0.895\nv 1.75 0.795 -0.881603\nv 1.713398 0.795 -0.845\nv 1.7 0.795 -0.795\nv 1.7 0.795 0.795\nv 1.713398 0.795 0.845\nv 1.75 0.795 0.881603\nv 1.8 0.795 0.895\nv 2.6 0.795 0.895\nv 2.65 0.795 0.881603\nv 2.686603 0.795 0.845\nv 2.686603 0.845 0.795\nv 2.686603 0.845 -0.795\nv 2.675 0.845 -0.838301\nv 2.643301 0.845 -0.87\nv 2.6 0.845 -0.881603\nv 1.8 0.845 -0.881603\nv 1.756699 0.845 -0.87\nv 1.725 0.845 -0.838301\nv 1.713398 0.845 -0.795\nv 1.713398 0.845 0.795\nv 1.725 0.845 0.838301\nv 1.756699 0.845 0.87\nv 1.8 0.845 0.881603\nv 2.6 0.845 0.881603\nv 2.643301 0.845 0.87\nv 2.675 0.845 0.838301\nv 2.65 0.881603 0.795\nv 2.65 0.881603 -0.795\nv 2.643301 0.881603 -0.82\nv 2.625 0.881603 -0.838301\nv 2.6 0.881603 -0.845\nv 1.8 0.881603 -0.845\nv 1.775 0.881603 -0.838301\nv 1.756699 0.881603 -0.82\nv 1.75 0.881603 -0.795\nv 1.75 0.881603 0.795\nv 1.756699 0.881603 0.82\nv 1.775 0.881603 0.838301\nv 1.8 0.881603 0.845\nv 2.6 0.881603 0.845\nv 2.625 0.881603 0.838301\nv 2.643301 0.881603 0.82\nv 2.6 0.895 0.795\nv 2.6 0.895 -0.795\nv 1.8 0.895 -0.795\nv 1.8 0.895 0.795\n\nvt 0 1 0\nvt 0.972646 0 0\nvt 0.917938 0 0\nvt 0.86323 0 0\nvt 0.835876 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 1 0 0\nvt 0 0 0\nvt 0.972646 0 0\nvt 0.917938 0 0\nvt 0.86323 0 0\nvt 0.835876 0 0\nvt 0 0 0\nvt 0.985015 0 0\nvt 0.955045 0 0\nvt 0.925075 0 0\nvt 0.91009 0 0\nvt 1 0.027498 0\nvt 0 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.835876 0.027498 0\nvt 0.890584 0.027498 0\nvt 0.945292 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.91009 0.027498 0\nvt 0.94006 0.027498 0\nvt 0.97003 0.027498 0\nvt 0 0.027498 0\nvt 1 0.027498 0\nvt 0.835876 0.027498 0\nvt 0.890584 0.027498 0\nvt 0.945292 0.027498 0\nvt 1 0.054995 0\nvt 0 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.835876 0.054995 0\nvt 0.890584 0.054995 0\nvt 0.945292 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.91009 0.054995 0\nvt 0.94006 0.054995 0\nvt 0.97003 0.054995 0\nvt 0 0.054995 0\nvt 1 0.054995 0\nvt 0.835876 0.054995 0\nvt 0.890584 0.054995 0\nvt 0.945292 0.054995 0\nvt 1 0.082493 0\nvt 0 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.835876 0.082493 0\nvt 0.890584 0.082493 0\nvt 0.945292 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.91009 0.082493 0\nvt 0.94006 0.082493 0\nvt 0.97003 0.082493 0\nvt 0 0.082493 0\nvt 1 0.082493 0\nvt 0.835876 0.082493 0\nvt 0.890584 0.082493 0\nvt 0.945292 0.082493 0\nvt 1 0.917507 0\nvt 0 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.835876 0.917507 0\nvt 0.890584 0.917507 0\nvt 0.945292 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.91009 0.917507 0\nvt 0.94006 0.917507 0\nvt 0.97003 0.917507 0\nvt 0 0.917507 0\nvt 1 0.917507 0\nvt 0.835876 0.917507 0\nvt 0.890584 0.917507 0\nvt 0.945292 0.917507 0\nvt 1 0.945005 0\nvt 0 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.835876 0.945005 0\nvt 0.890584 0.945005 0\nvt 0.945292 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.91009 0.945005 0\nvt 0.94006 0.945005 0\nvt 0.97003 0.945005 0\nvt 0 0.945005 0\nvt 1 0.945005 0\nvt 0.835876 0.945005 0\nvt 0.890584 0.945005 0\nvt 0.945292 0.945005 0\nvt 1 0.972502 0\nvt 0 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.835876 0.972502 0\nvt 0.890584 0.972502 0\nvt 0.945292 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.91009 0.972502 0\nvt 0.94006 0.972502 0\nvt 0.97003 0.972502 0\nvt 0 0.972502 0\nvt 1 0.972502 0\nvt 0.835876 0.972502 0\nvt 0.890584 0.972502 0\nvt 0.945292 0.972502 0\nvt 0 0 0\nvt 0.972646 1 0\nvt 0.917938 1 0\nvt 0.86323 1 0\nvt 0.835876 1 0\nvt 0 1 0\nvt 1 0 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.972646 1 0\nvt 0.917938 1 0\nvt 0.86323 1 0\nvt 0.835876 1 0\nvt 0 1 0\nvt 0.985015 1 0\nvt 0.955045 1 0\nvt 0.925075 1 0\nvt 0.91009 1 0\n\nf 51/63 55/77 54/76 50/57 \nf 55/77 71/97 70/96 54/76 \nf 71/97 87/117 86/116 70/96 \nf 87/117 103/137 102/136 86/116 \nf 103/137 119/157 118/156 102/136 \nf 119/157 135/177 134/176 118/156 \nf 135/177 151/206 150/200 134/176 \nf 56/78 55/77 51/62 \nf 56/78 72/98 71/97 55/77 \nf 72/98 88/118 87/117 71/97 \nf 88/118 104/138 103/137 87/117 \nf 104/138 120/158 119/157 103/137 \nf 120/158 136/178 135/177 119/157 \nf 136/178 151/205 135/177 \nf 57/79 56/78 51/61 \nf 57/79 73/99 72/98 56/78 \nf 73/99 89/119 88/118 72/98 \nf 89/119 105/139 104/138 88/118 \nf 105/139 121/159 120/158 104/138 \nf 121/159 137/179 136/178 120/158 \nf 137/179 151/204 136/178 \nf 58/81 57/79 51/60 \nf 58/81 74/101 73/99 57/79 \nf 74/101 90/121 89/119 73/99 \nf 90/121 106/141 105/139 89/119 \nf 106/141 122/161 121/159 105/139 \nf 122/161 138/181 137/179 121/159 \nf 138/181 151/203 137/179 \nf 52/69 59/82 58/80 51/59 \nf 59/82 75/102 74/100 58/80 \nf 75/102 91/122 90/120 74/100 \nf 91/122 107/142 106/140 90/120 \nf 107/142 123/162 122/160 106/140 \nf 123/162 139/182 138/180 122/160 \nf 139/182 152/212 151/202 138/180 \nf 60/83 59/82 52/68 \nf 60/83 76/103 75/102 59/82 \nf 76/103 92/123 91/122 75/102 \nf 92/123 108/143 107/142 91/122 \nf 108/143 124/163 123/162 107/142 \nf 124/163 140/183 139/182 123/162 \nf 140/183 152/211 139/182 \nf 61/84 60/83 52/67 \nf 61/84 77/104 76/103 60/83 \nf 77/104 93/124 92/123 76/103 \nf 93/124 109/144 108/143 92/123 \nf 109/144 125/164 124/163 108/143 \nf 125/164 141/184 140/183 124/163 \nf 141/184 152/210 140/183 \nf 62/86 61/84 52/66 \nf 62/86 78/106 77/104 61/84 \nf 78/106 94/126 93/124 77/104 \nf 94/126 110/146 109/144 93/124 \nf 110/146 126/166 125/164 109/144 \nf 126/166 142/186 141/184 125/164 \nf 142/186 152/209 141/184 \nf 53/74 63/87 62/85 52/65 \nf 63/87 79/107 78/105 62/85 \nf 79/107 95/127 94/125 78/105 \nf 95/127 111/147 110/145 94/125 \nf 111/147 127/167 126/165 110/145 \nf 127/167 143/187 142/185 126/165 \nf 143/187 153/217 152/208 142/185 \nf 64/88 63/87 53/73 \nf 64/88 80/108 79/107 63/87 \nf 80/108 96/128 95/127 79/107 \nf 96/128 112/148 111/147 95/127 \nf 112/148 128/168 127/167 111/147 \nf 128/168 144/188 143/187 127/167 \nf 144/188 153/216 143/187 \nf 65/89 64/88 53/72 \nf 65/89 81/109 80/108 64/88 \nf 81/109 97/129 96/128 80/108 \nf 97/129 113/149 112/148 96/128 \nf 113/149 129/169 128/168 112/148 \nf 129/169 145/189 144/188 128/168 \nf 145/189 153/215 144/188 \nf 66/91 65/89 53/71 \nf 66/91 82/111 81/109 65/89 \nf 82/111 98/131 97/129 81/109 \nf 98/131 114/151 113/149 97/129 \nf 114/151 130/171 129/169 113/149 \nf 130/171 146/191 145/189 129/169 \nf 146/191 153/214 145/189 \nf 50/56 67/92 66/90 53/70 \nf 67/92 83/112 82/110 66/90 \nf 83/112 99/132 98/130 82/110 \nf 99/132 115/152 114/150 98/130 \nf 115/152 131/172 130/170 114/150 \nf 131/172 147/192 146/190 130/170 \nf 147/192 150/199 153/213 146/190 \nf 68/93 67/92 50/55 \nf 68/93 84/113 83/112 67/92 \nf 84/113 100/133 99/132 83/112 \nf 100/133 116/153 115/152 99/132 \nf 116/153 132/173 131/172 115/152 \nf 132/173 148/193 147/192 131/172 \nf 148/193 150/198 147/192 \nf 69/94 68/93 50/54 \nf 69/94 85/114 84/113 68/93 \nf 85/114 101/134 100/133 84/113 \nf 101/134 117/154 116/153 100/133 \nf 117/154 133/174 132/173 116/153 \nf 133/174 149/194 148/193 132/173 \nf 149/194 150/197 148/193 \nf 54/75 69/94 50/53 \nf 54/75 70/95 85/114 69/94 \nf 70/95 86/115 101/134 85/114 \nf 86/115 102/135 117/154 101/134 \nf 102/135 118/155 133/174 117/154 \nf 118/155 134/175 149/194 133/174 \nf 134/175 150/196 149/194 \nf 151/201 152/207 153/213 150/195 \nf 53/70 52/64 51/58 50/52 \n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/side_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng side_r Sticker\nusemtl Stickers\nv 2.71 -0.8 0.8\nv 2.71 0.8 0.8\nv 2.71 -0.8 -0.8\nv 2.71 0.8 -0.8\nv 2.61 -0.8 -0.8\nv 2.61 0.8 -0.8\nv 2.61 -0.8 0.8\nv 2.61 0.8 0.8\n\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.05 0\nvt 0.05 0.95 0\nvt 0.05 0.95 0\n#6:\nvt 0.05 0.95 0\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 0.95 0.05 0\nvt 0.95 0.95 0\n#11:\nvt 0.95 0.95 0\nvt 0.95 0.95 0\nvt 1.00 0.05 0\nvt 0.95 0.00 0\nvt 1.00 0.95 0\n#16:\nvt 0.05 0.00 0\nvt 0.05 0.05 0\nvt 0.00 0.05 0\nvt 0.00 0.95 0\nvt 0.00 0.95 0\nvt 0.05 1.00 0\n#21:\nvt 0.95 1.00 0\n\n#right:\nf 3/9 4/12 2/6 1/3 \n#back:\nf 5/13 6/15 4/11 3/8 \n#left:\nf 7/9 8/12 6/6 5/3 \n#front:\nf 1/2 2/5 8/19 7/17 \n#up:\nf 4/10 6/21 8/20 2/4 \n#down:\nf 5/14 3/7 1/1 7/16\n\n"
            ),
            e.setFileData(
                "lib/models/rubikscubes4/center.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng CenterPart Cylinder_Y\nv -0.008281 -0.9 0.004201\nv -0.008281 0.9 0.004201\nv 0.441719 -0.9 0.004201\nv 0.441719 -0.9 0.004201\nv 0.441719 0.9 0.004201\nv 0.441719 0.9 0.004201\nv 0.407465 -0.9 -0.168007\nv 0.407465 -0.9 -0.168007\nv 0.407465 0.9 -0.168007\nv 0.407465 0.9 -0.168007\nv 0.309917 -0.9 -0.313997\nv 0.309917 -0.9 -0.313997\nv 0.309917 0.9 -0.313997\nv 0.309917 0.9 -0.313997\nv 0.163927 -0.9 -0.411545\nv 0.163927 -0.9 -0.411545\nv 0.163927 0.9 -0.411545\nv 0.163927 0.9 -0.411545\nv -0.008281 -0.9 -0.445799\nv -0.008281 -0.9 -0.445799\nv -0.008281 0.9 -0.445799\nv -0.008281 0.9 -0.445799\nv -0.180488 -0.9 -0.411545\nv -0.180488 -0.9 -0.411545\nv -0.180488 0.9 -0.411545\nv -0.180488 0.9 -0.411545\nv -0.326479 -0.9 -0.313997\nv -0.326479 -0.9 -0.313997\nv -0.326479 0.9 -0.313997\nv -0.326479 0.9 -0.313997\nv -0.424027 -0.9 -0.168007\nv -0.424027 -0.9 -0.168007\nv -0.424027 0.9 -0.168007\nv -0.424027 0.9 -0.168007\nv -0.458281 -0.9 0.004201\nv -0.458281 -0.9 0.004201\nv -0.458281 0.9 0.004201\nv -0.458281 0.9 0.004201\nv -0.424027 -0.9 0.176408\nv -0.424027 -0.9 0.176408\nv -0.424027 0.9 0.176408\nv -0.424027 0.9 0.176408\nv -0.326479 -0.9 0.322399\nv -0.326479 -0.9 0.322399\nv -0.326479 0.9 0.322399\nv -0.326479 0.9 0.322399\nv -0.180488 -0.9 0.419947\nv -0.180488 -0.9 0.419947\nv -0.180488 0.9 0.419947\nv -0.180488 0.9 0.419947\nv -0.008281 -0.9 0.454201\nv -0.008281 -0.9 0.454201\nv -0.008281 0.9 0.454201\nv -0.008281 0.9 0.454201\nv 0.163927 -0.9 0.419947\nv 0.163927 -0.9 0.419947\nv 0.163927 0.9 0.419947\nv 0.163927 0.9 0.419947\nv 0.309917 -0.9 0.322399\nv 0.309917 -0.9 0.322399\nv 0.309917 0.9 0.322399\nv 0.309917 0.9 0.322399\nv 0.407465 -0.9 0.176408\nv 0.407465 -0.9 0.176408\nv 0.407465 0.9 0.176408\nv 0.407465 0.9 0.176408\n\nvt 0.5 0.5 0\nvt 0.5 0.5 0\nvt 0 0.5 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 0.5 0\nvt 0.03806 0.691342 0\nvt 0.0625 0 0\nvt 0.0625 1 0\nvt 0.96194 0.691342 0\nvt 0.146447 0.853553 0\nvt 0.125 0 0\nvt 0.125 1 0\nvt 0.853553 0.853553 0\nvt 0.308658 0.96194 0\nvt 0.1875 0 0\nvt 0.1875 1 0\nvt 0.691342 0.96194 0\nvt 0.5 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.5 1 0\nvt 0.691342 0.96194 0\nvt 0.3125 0 0\nvt 0.3125 1 0\nvt 0.308658 0.96194 0\nvt 0.853553 0.853553 0\nvt 0.375 0 0\nvt 0.375 1 0\nvt 0.146447 0.853553 0\nvt 0.96194 0.691342 0\nvt 0.4375 0 0\nvt 0.4375 1 0\nvt 0.03806 0.691342 0\nvt 1 0.5 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0 0.5 0\nvt 0.96194 0.308658 0\nvt 0.5625 0 0\nvt 0.5625 1 0\nvt 0.03806 0.308658 0\nvt 0.853553 0.146447 0\nvt 0.625 0 0\nvt 0.625 1 0\nvt 0.146447 0.146447 0\nvt 0.691342 0.03806 0\nvt 0.6875 0 0\nvt 0.6875 1 0\nvt 0.308658 0.03806 0\nvt 0.5 0 0\nvt 0.75 0 0\nvt 0.75 1 0\nvt 0.5 0 0\nvt 0.308658 0.03806 0\nvt 0.8125 0 0\nvt 0.8125 1 0\nvt 0.691342 0.03806 0\nvt 0.146446 0.146447 0\nvt 0.875 0 0\nvt 0.875 1 0\nvt 0.853554 0.146447 0\nvt 0.03806 0.308658 0\nvt 0.9375 0 0\nvt 0.9375 1 0\nvt 0.96194 0.308658 0\n\nf 7/9 3/3 1/1 \nf 8/10 9/11 5/7 4/5 \nf 10/12 2/2 6/8 \nf 11/13 7/9 1/1 \nf 12/14 13/15 9/11 8/10 \nf 14/16 2/2 10/12 \nf 15/17 11/13 1/1 \nf 16/18 17/19 13/15 12/14 \nf 18/20 2/2 14/16 \nf 19/21 15/17 1/1 \nf 20/22 21/23 17/19 16/18 \nf 22/24 2/2 18/20 \nf 23/25 19/21 1/1 \nf 24/26 25/27 21/23 20/22 \nf 26/28 2/2 22/24 \nf 27/29 23/25 1/1 \nf 28/30 29/31 25/27 24/26 \nf 30/32 2/2 26/28 \nf 31/33 27/29 1/1 \nf 32/34 33/35 29/31 28/30 \nf 34/36 2/2 30/32 \nf 35/37 31/33 1/1 \nf 36/38 37/39 33/35 32/34 \nf 38/40 2/2 34/36 \nf 39/41 35/37 1/1 \nf 40/42 41/43 37/39 36/38 \nf 42/44 2/2 38/40 \nf 43/45 39/41 1/1 \nf 44/46 45/47 41/43 40/42 \nf 46/48 2/2 42/44 \nf 47/49 43/45 1/1 \nf 48/50 49/51 45/47 44/46 \nf 50/52 2/2 46/48 \nf 51/53 47/49 1/1 \nf 52/54 53/55 49/51 48/50 \nf 54/56 2/2 50/52 \nf 55/57 51/53 1/1 \nf 56/58 57/59 53/55 52/54 \nf 58/60 2/2 54/56 \nf 59/61 55/57 1/1 \nf 60/62 61/63 57/59 56/58 \nf 62/64 2/2 58/60 \nf 63/65 59/61 1/1 \nf 64/66 65/67 61/63 60/62 \nf 66/68 2/2 62/64 \nf 3/3 63/65 1/1 \nf 4/4 5/6 65/67 64/66 \nf 6/8 2/2 66/68 \n\ng CenterPart Cylinder_X\nv -0.908281 0 0.004201\nv 0.891719 0 0.004201\nv -0.908281 -0.45 0.004201\nv -0.908281 -0.45 0.004201\nv 0.891719 -0.45 0.004201\nv 0.891719 -0.45 0.004201\nv -0.908281 -0.415746 -0.168007\nv -0.908281 -0.415746 -0.168007\nv 0.891719 -0.415746 -0.168007\nv 0.891719 -0.415746 -0.168007\nv -0.908281 -0.318198 -0.313997\nv -0.908281 -0.318198 -0.313997\nv 0.891719 -0.318198 -0.313997\nv 0.891719 -0.318198 -0.313997\nv -0.908281 -0.172208 -0.411545\nv -0.908281 -0.172208 -0.411545\nv 0.891719 -0.172208 -0.411545\nv 0.891719 -0.172208 -0.411545\nv -0.908281 0 -0.445799\nv -0.908281 0 -0.445799\nv 0.891719 0 -0.445799\nv 0.891719 0 -0.445799\nv -0.908281 0.172208 -0.411545\nv -0.908281 0.172208 -0.411545\nv 0.891719 0.172208 -0.411545\nv 0.891719 0.172208 -0.411545\nv -0.908281 0.318198 -0.313997\nv -0.908281 0.318198 -0.313997\nv 0.891719 0.318198 -0.313997\nv 0.891719 0.318198 -0.313997\nv -0.908281 0.415746 -0.168007\nv -0.908281 0.415746 -0.168007\nv 0.891719 0.415746 -0.168007\nv 0.891719 0.415746 -0.168007\nv -0.908281 0.45 0.004201\nv -0.908281 0.45 0.004201\nv 0.891719 0.45 0.004201\nv 0.891719 0.45 0.004201\nv -0.908281 0.415746 0.176408\nv -0.908281 0.415746 0.176408\nv 0.891719 0.415746 0.176408\nv 0.891719 0.415746 0.176408\nv -0.908281 0.318198 0.322399\nv -0.908281 0.318198 0.322399\nv 0.891719 0.318198 0.322399\nv 0.891719 0.318198 0.322399\nv -0.908281 0.172207 0.419947\nv -0.908281 0.172207 0.419947\nv 0.891719 0.172207 0.419947\nv 0.891719 0.172207 0.419947\nv -0.908281 0 0.454201\nv -0.908281 0 0.454201\nv 0.891719 0 0.454201\nv 0.891719 0 0.454201\nv -0.908281 -0.172208 0.419947\nv -0.908281 -0.172208 0.419947\nv 0.891719 -0.172208 0.419947\nv 0.891719 -0.172208 0.419947\nv -0.908281 -0.318198 0.322399\nv -0.908281 -0.318198 0.322399\nv 0.891719 -0.318198 0.322399\nv 0.891719 -0.318198 0.322399\nv -0.908281 -0.415746 0.176408\nv -0.908281 -0.415746 0.176408\nv 0.891719 -0.415746 0.176408\nv 0.891719 -0.415746 0.176408\n\nvt 0.5 0.5 0\nvt 0.5 0.5 0\nvt 0 0.5 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 0.5 0\nvt 0.03806 0.691342 0\nvt 0.0625 0 0\nvt 0.0625 1 0\nvt 0.96194 0.691342 0\nvt 0.146447 0.853553 0\nvt 0.125 0 0\nvt 0.125 1 0\nvt 0.853553 0.853553 0\nvt 0.308658 0.96194 0\nvt 0.1875 0 0\nvt 0.1875 1 0\nvt 0.691342 0.96194 0\nvt 0.5 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.5 1 0\nvt 0.691342 0.96194 0\nvt 0.3125 0 0\nvt 0.3125 1 0\nvt 0.308658 0.96194 0\nvt 0.853553 0.853553 0\nvt 0.375 0 0\nvt 0.375 1 0\nvt 0.146447 0.853553 0\nvt 0.96194 0.691342 0\nvt 0.4375 0 0\nvt 0.4375 1 0\nvt 0.03806 0.691342 0\nvt 1 0.5 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0 0.5 0\nvt 0.96194 0.308658 0\nvt 0.5625 0 0\nvt 0.5625 1 0\nvt 0.03806 0.308658 0\nvt 0.853553 0.146447 0\nvt 0.625 0 0\nvt 0.625 1 0\nvt 0.146447 0.146447 0\nvt 0.691342 0.03806 0\nvt 0.6875 0 0\nvt 0.6875 1 0\nvt 0.308658 0.03806 0\nvt 0.5 0 0\nvt 0.75 0 0\nvt 0.75 1 0\nvt 0.5 0 0\nvt 0.308658 0.03806 0\nvt 0.8125 0 0\nvt 0.8125 1 0\nvt 0.691342 0.03806 0\nvt 0.146446 0.146447 0\nvt 0.875 0 0\nvt 0.875 1 0\nvt 0.853554 0.146447 0\nvt 0.03806 0.308658 0\nvt 0.9375 0 0\nvt 0.9375 1 0\nvt 0.96194 0.308658 0\n\nf 73/77 69/71 67/69 \nf 74/78 75/79 71/75 70/73 \nf 76/80 68/70 72/76 \nf 77/81 73/77 67/69 \nf 78/82 79/83 75/79 74/78 \nf 80/84 68/70 76/80 \nf 81/85 77/81 67/69 \nf 82/86 83/87 79/83 78/82 \nf 84/88 68/70 80/84 \nf 85/89 81/85 67/69 \nf 86/90 87/91 83/87 82/86 \nf 88/92 68/70 84/88 \nf 89/93 85/89 67/69 \nf 90/94 91/95 87/91 86/90 \nf 92/96 68/70 88/92 \nf 93/97 89/93 67/69 \nf 94/98 95/99 91/95 90/94 \nf 96/100 68/70 92/96 \nf 97/101 93/97 67/69 \nf 98/102 99/103 95/99 94/98 \nf 100/104 68/70 96/100 \nf 101/105 97/101 67/69 \nf 102/106 103/107 99/103 98/102 \nf 104/108 68/70 100/104 \nf 105/109 101/105 67/69 \nf 106/110 107/111 103/107 102/106 \nf 108/112 68/70 104/108 \nf 109/113 105/109 67/69 \nf 110/114 111/115 107/111 106/110 \nf 112/116 68/70 108/112 \nf 113/117 109/113 67/69 \nf 114/118 115/119 111/115 110/114 \nf 116/120 68/70 112/116 \nf 117/121 113/117 67/69 \nf 118/122 119/123 115/119 114/118 \nf 120/124 68/70 116/120 \nf 121/125 117/121 67/69 \nf 122/126 123/127 119/123 118/122 \nf 124/128 68/70 120/124 \nf 125/129 121/125 67/69 \nf 126/130 127/131 123/127 122/126 \nf 128/132 68/70 124/128 \nf 129/133 125/129 67/69 \nf 130/134 131/135 127/131 126/130 \nf 132/136 68/70 128/132 \nf 69/71 129/133 67/69 \nf 70/72 71/74 131/135 130/134 \nf 72/76 68/70 132/136 \n\ng CenterPart Cylinder_Z\nv -0.008281 0 0.904201\nv -0.008281 0 -0.895799\nv 0.441719 0 0.904201\nv 0.441719 0 0.904201\nv 0.441719 0 -0.895799\nv 0.441719 0 -0.895799\nv 0.407465 -0.172208 0.904201\nv 0.407465 -0.172208 0.904201\nv 0.407465 -0.172208 -0.895799\nv 0.407465 -0.172208 -0.895799\nv 0.309917 -0.318198 0.904201\nv 0.309917 -0.318198 0.904201\nv 0.309917 -0.318198 -0.895799\nv 0.309917 -0.318198 -0.895799\nv 0.163927 -0.415746 0.904201\nv 0.163927 -0.415746 0.904201\nv 0.163927 -0.415746 -0.895799\nv 0.163927 -0.415746 -0.895799\nv -0.008281 -0.45 0.904201\nv -0.008281 -0.45 0.904201\nv -0.008281 -0.45 -0.895799\nv -0.008281 -0.45 -0.895799\nv -0.180488 -0.415746 0.904201\nv -0.180488 -0.415746 0.904201\nv -0.180488 -0.415746 -0.895799\nv -0.180488 -0.415746 -0.895799\nv -0.326479 -0.318198 0.904201\nv -0.326479 -0.318198 0.904201\nv -0.326479 -0.318198 -0.895799\nv -0.326479 -0.318198 -0.895799\nv -0.424027 -0.172207 0.904201\nv -0.424027 -0.172207 0.904201\nv -0.424027 -0.172207 -0.895799\nv -0.424027 -0.172207 -0.895799\nv -0.458281 0 0.904201\nv -0.458281 0 0.904201\nv -0.458281 0 -0.895799\nv -0.458281 0 -0.895799\nv -0.424027 0.172208 0.904201\nv -0.424027 0.172208 0.904201\nv -0.424027 0.172208 -0.895799\nv -0.424027 0.172208 -0.895799\nv -0.326479 0.318198 0.904201\nv -0.326479 0.318198 0.904201\nv -0.326479 0.318198 -0.895799\nv -0.326479 0.318198 -0.895799\nv -0.180488 0.415746 0.904201\nv -0.180488 0.415746 0.904201\nv -0.180488 0.415746 -0.895799\nv -0.180488 0.415746 -0.895799\nv -0.008281 0.45 0.904201\nv -0.008281 0.45 0.904201\nv -0.008281 0.45 -0.895799\nv -0.008281 0.45 -0.895799\nv 0.163927 0.415746 0.904201\nv 0.163927 0.415746 0.904201\nv 0.163927 0.415746 -0.895799\nv 0.163927 0.415746 -0.895799\nv 0.309917 0.318198 0.904201\nv 0.309917 0.318198 0.904201\nv 0.309917 0.318198 -0.895799\nv 0.309917 0.318198 -0.895799\nv 0.407465 0.172208 0.904201\nv 0.407465 0.172208 0.904201\nv 0.407465 0.172208 -0.895799\nv 0.407465 0.172208 -0.895799\n\nvt 0.5 0.5 0\nvt 0.5 0.5 0\nvt 0 0.5 0\nvt 1 0 0\nvt 0 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 0.5 0\nvt 0.03806 0.691342 0\nvt 0.0625 0 0\nvt 0.0625 1 0\nvt 0.96194 0.691342 0\nvt 0.146447 0.853553 0\nvt 0.125 0 0\nvt 0.125 1 0\nvt 0.853553 0.853553 0\nvt 0.308658 0.96194 0\nvt 0.1875 0 0\nvt 0.1875 1 0\nvt 0.691342 0.96194 0\nvt 0.5 1 0\nvt 0.25 0 0\nvt 0.25 1 0\nvt 0.5 1 0\nvt 0.691342 0.96194 0\nvt 0.3125 0 0\nvt 0.3125 1 0\nvt 0.308658 0.96194 0\nvt 0.853553 0.853553 0\nvt 0.375 0 0\nvt 0.375 1 0\nvt 0.146447 0.853553 0\nvt 0.96194 0.691342 0\nvt 0.4375 0 0\nvt 0.4375 1 0\nvt 0.03806 0.691342 0\nvt 1 0.5 0\nvt 0.5 0 0\nvt 0.5 1 0\nvt 0 0.5 0\nvt 0.96194 0.308658 0\nvt 0.5625 0 0\nvt 0.5625 1 0\nvt 0.03806 0.308658 0\nvt 0.853553 0.146447 0\nvt 0.625 0 0\nvt 0.625 1 0\nvt 0.146447 0.146447 0\nvt 0.691342 0.03806 0\nvt 0.6875 0 0\nvt 0.6875 1 0\nvt 0.308658 0.03806 0\nvt 0.5 0 0\nvt 0.75 0 0\nvt 0.75 1 0\nvt 0.5 0 0\nvt 0.308658 0.03806 0\nvt 0.8125 0 0\nvt 0.8125 1 0\nvt 0.691342 0.03806 0\nvt 0.146446 0.146447 0\nvt 0.875 0 0\nvt 0.875 1 0\nvt 0.853554 0.146447 0\nvt 0.03806 0.308658 0\nvt 0.9375 0 0\nvt 0.9375 1 0\nvt 0.96194 0.308658 0\n\nf 139/145 135/139 133/137 \nf 140/146 141/147 137/143 136/141 \nf 142/148 134/138 138/144 \nf 143/149 139/145 133/137 \nf 144/150 145/151 141/147 140/146 \nf 146/152 134/138 142/148 \nf 147/153 143/149 133/137 \nf 148/154 149/155 145/151 144/150 \nf 150/156 134/138 146/152 \nf 151/157 147/153 133/137 \nf 152/158 153/159 149/155 148/154 \nf 154/160 134/138 150/156 \nf 155/161 151/157 133/137 \nf 156/162 157/163 153/159 152/158 \nf 158/164 134/138 154/160 \nf 159/165 155/161 133/137 \nf 160/166 161/167 157/163 156/162 \nf 162/168 134/138 158/164 \nf 163/169 159/165 133/137 \nf 164/170 165/171 161/167 160/166 \nf 166/172 134/138 162/168 \nf 167/173 163/169 133/137 \nf 168/174 169/175 165/171 164/170 \nf 170/176 134/138 166/172 \nf 171/177 167/173 133/137 \nf 172/178 173/179 169/175 168/174 \nf 174/180 134/138 170/176 \nf 175/181 171/177 133/137 \nf 176/182 177/183 173/179 172/178 \nf 178/184 134/138 174/180 \nf 179/185 175/181 133/137 \nf 180/186 181/187 177/183 176/182 \nf 182/188 134/138 178/184 \nf 183/189 179/185 133/137 \nf 184/190 185/191 181/187 180/186 \nf 186/192 134/138 182/188 \nf 187/193 183/189 133/137 \nf 188/194 189/195 185/191 184/190 \nf 190/196 134/138 186/192 \nf 191/197 187/193 133/137 \nf 192/198 193/199 189/195 188/194 \nf 194/200 134/138 190/196 \nf 195/201 191/197 133/137 \nf 196/202 197/203 193/199 192/198 \nf 198/204 134/138 194/200 \nf 135/139 195/201 133/137 \nf 136/140 137/142 197/203 196/202 \nf 138/144 134/138 198/204 \n\n"
            ),
            {}
        );
    }),
    define("RubiksCubeS4Cube3D", ["AbstractRubiksCubeCube3D", "CubeAttributes", "PreloadRubiksCubeS4"], function (e, t, n) {
        return (
            (RubiksCubeS4Cube3D = function (e) {
                this.initRubiksCubeS4Cube3D(e);
            }),
            (RubiksCubeS4Cube3D.prototype = e.newAbstractRubiksCubeCube3D(!1)),
            (RubiksCubeS4Cube3D.prototype.initRubiksCubeS4Cube3D = function (e) {
                this.initAbstractRubiksCubeCube3D(e, 1.8), (this.isDrawTwoPass = !1);
            }),
            (RubiksCubeS4Cube3D.prototype.getBaseUrl = function () {
                return "lib/models/rubikscubes4/";
            }),
            (RubiksCubeS4Cube3D.prototype.createAttributes = function () {
                var e = t.newCubeAttributes(this.partCount, 54, [9, 9, 9, 9, 9, 9]),
                    n = [0.5, 0.6, 0.4, 16];
                for (var r = 0; r < this.partCount; r++) (e.partsFillColor[r] = [24, 24, 24, 255]), (e.partsPhong[r] = n);
                e.partsFillColor[this.centerOffset] = [240, 240, 240, 255];
                var i = [
                        [255, 210, 0, 255],
                        [0, 51, 115, 255],
                        [140, 0, 15, 255],
                        [248, 248, 248, 255],
                        [0, 115, 47, 255],
                        [255, 70, 0, 255],
                    ],
                    s = [0.8, 0.2, 0.1, 8];
                for (var r = 0; r < 6; r++) for (var o = 0; o < 9; o++) (e.stickersFillColor[r * 9 + o] = i[r]), (e.stickersPhong[r * 9 + o] = s);
                return e;
            }),
            {
                newCube3D: function (e) {
                    return new RubiksCubeS4Cube3D(e);
                },
            }
        );
    }),
    define("PocketCube", ["Cube"], function (e) {
        return (
            (PocketCube = function () {
                this.init(2);
            }),
            (PocketCube.prototype = e.newCube()),
            (PocketCube.prototype.DEBUG = !1),
            (PocketCube.prototype.NUMBER_OF_SIDE_PARTS = 0),
            (PocketCube.prototype.NUMBER_OF_EDGE_PARTS = 0),
            (PocketCube.prototype.SIDE_TRANSLATION = []),
            (PocketCube.prototype.EDGE_TRANSLATION = []),
            (PocketCube.prototype.CORNER_TRANSLATION = [
                [1, 3, 0, 0, 2, 1],
                [4, 1, 2, 3, 0, 2],
                [1, 1, 5, 0, 0, 1],
                [4, 3, 0, 3, 5, 3],
                [1, 0, 3, 0, 5, 1],
                [4, 2, 5, 3, 3, 2],
                [1, 2, 2, 0, 3, 1],
                [4, 0, 3, 3, 2, 2],
            ]),
            (PocketCube.prototype.EDGE_SWIPE_TABLE = []),
            (PocketCube.prototype.SIDE_SWIPE_TABLE = []),
            (PocketCube.prototype.getPartLayerMask = function (e, t) {
                var n = this.getPartFace(e, t);
                return e < this.cornerLoc.length ? (n < 3 ? 2 : 1) : 0;
            }),
            (PocketCube.prototype.getPartSwipeAxis = function (e, t, n) {
                if (e < this.cornerLoc.length) {
                    var r = this.getCornerLocation(e),
                        i = (3 - this.getPartOrientation(e) + t) % 3;
                    return this.CORNER_SWIPE_TABLE[r][i][n][0];
                }
                return -1;
            }),
            (PocketCube.prototype.getPartSwipeLayerMask = function (e, t, n) {
                if (e < this.cornerLoc.length) {
                    var r = this.getCornerLocation(e),
                        i = (3 - this.getPartOrientation(e) + t) % 3;
                    return this.CORNER_SWIPE_TABLE[r][i][n][1];
                }
                return 0;
            }),
            (PocketCube.prototype.getPartSwipeAngle = function (e, t, n) {
                if (e < this.cornerLoc.length) {
                    var r = this.getCornerLocation(e),
                        i = this.getPartOrientation(e),
                        s = (3 - i + t) % 3,
                        o = n,
                        u = this.CORNER_SWIPE_TABLE[r][s][o][2];
                    return i != 2 || (s != 0 && s != 2) ? i == 1 && (s == 1 || s == 2) && (u = -u) : (u = -u), u;
                }
                return 0;
            }),
            (PocketCube.prototype.transform0 = function (e, t, n) {
                this.DEBUG && window.console.log("PocketCube#" + this + ".transform(ax=" + e + ",msk=" + t + ",ang:" + n + ")");
                if (e < 0 || e > 2) throw "axis: " + e;
                if (t < 0 || t >= 1 << this.layerCount) throw "layerMask: " + t;
                if (n < -2 || n > 2) throw "angle: " + n;
                if (n == 0) return;
                var r = n == -2 ? 2 : n;
                if ((t & 1) != 0)
                    switch (e) {
                        case 0:
                            switch (r) {
                                case -1:
                                    this.twistL();
                                    break;
                                case 1:
                                    this.twistL(), this.twistL(), this.twistL();
                                    break;
                                case 2:
                                    this.twistL(), this.twistL();
                            }
                            break;
                        case 1:
                            switch (r) {
                                case -1:
                                    this.twistD();
                                    break;
                                case 1:
                                    this.twistD(), this.twistD(), this.twistD();
                                    break;
                                case 2:
                                    this.twistD(), this.twistD();
                            }
                            break;
                        case 2:
                            switch (r) {
                                case -1:
                                    this.twistB();
                                    break;
                                case 1:
                                    this.twistB(), this.twistB(), this.twistB();
                                    break;
                                case 2:
                                    this.twistB(), this.twistB();
                            }
                    }
                if ((t & 2) != 0)
                    switch (e) {
                        case 0:
                            switch (r) {
                                case 1:
                                    this.twistR();
                                    break;
                                case -1:
                                    this.twistR(), this.twistR(), this.twistR();
                                    break;
                                case 2:
                                    this.twistR(), this.twistR();
                            }
                            break;
                        case 1:
                            switch (r) {
                                case 1:
                                    this.twistU();
                                    break;
                                case -1:
                                    this.twistU(), this.twistU(), this.twistU();
                                    break;
                                case 2:
                                    this.twistU(), this.twistU();
                            }
                            break;
                        case 2:
                            switch (r) {
                                case 1:
                                    this.twistF();
                                    break;
                                case -1:
                                    this.twistF(), this.twistF(), this.twistF();
                                    break;
                                case 2:
                                    this.twistF(), this.twistF();
                            }
                    }
            }),
            (PocketCube.prototype.twistR = function () {
                this.fourCycle(this.cornerLoc, 0, 1, 3, 2, this.cornerOrient, 1, 2, 1, 2, 3);
            }),
            (PocketCube.prototype.twistU = function () {
                this.fourCycle(this.cornerLoc, 0, 2, 4, 6, this.cornerOrient, 0, 0, 0, 0, 3);
            }),
            (PocketCube.prototype.twistF = function () {
                this.fourCycle(this.cornerLoc, 6, 7, 1, 0, this.cornerOrient, 1, 2, 1, 2, 3);
            }),
            (PocketCube.prototype.twistL = function () {
                this.fourCycle(this.cornerLoc, 6, 4, 5, 7, this.cornerOrient, 2, 1, 2, 1, 3);
            }),
            (PocketCube.prototype.twistD = function () {
                this.fourCycle(this.cornerLoc, 7, 5, 3, 1, this.cornerOrient, 0, 0, 0, 0, 3);
            }),
            (PocketCube.prototype.twistB = function () {
                this.fourCycle(this.cornerLoc, 2, 3, 5, 4, this.cornerOrient, 1, 2, 1, 2, 3);
            }),
            (PocketCube.prototype.toStickers = function () {
                throw "Not supported yet.";
            }),
            (PocketCube.prototype.setToStickers = function (e) {
                throw "Not supported yet.";
            }),
            (PocketCube.prototype.clone = function () {
                var e = new PocketCube();
                return e.setTo(this), e;
            }),
            {
                newPocketCube: function () {
                    return new PocketCube();
                },
            }
        );
    }),
    define("AbstractPocketCubeCube3D", ["Cube3D", "PocketCube", "CubeAttributes", "SplineInterpolator", "J3DI"], function (e, t, n, r, i) {
        return (
            (AbstractPocketCubeCube3D = function () {}),
            (AbstractPocketCubeCube3D.prototype = e.newCube3D()),
            (AbstractPocketCubeCube3D.prototype.initAbstractPocketCubeCube3D = function (e, n) {
                this.initCube3D(),
                    (this.cornerCount = 8),
                    (this.edgeCount = 0),
                    (this.sideCount = 0),
                    (this.centerCount = 0),
                    (this.partCount = 8),
                    (this.cornerOffset = 0),
                    (this.edgeOffset = 8),
                    (this.sideOffset = 8),
                    (this.centerOffset = 8),
                    (this.stickerCount = 24),
                    (this.cube = t.newPocketCube()),
                    this.cube.addCubeListener(this),
                    (this.attributes = this.createAttributes()),
                    (this.partToStickerMap = new Array(this.partCount));
                for (var r = 0; r < this.partCount; r++)
                    (this.parts[r] = new Node3D()),
                        (this.partOrientations[r] = new Node3D()),
                        (this.partExplosions[r] = new Node3D()),
                        (this.partLocations[r] = new Node3D()),
                        this.partOrientations[r].add(this.parts[r]),
                        this.partExplosions[r].add(this.partOrientations[r]),
                        this.partLocations[r].add(this.partExplosions[r]),
                        this.add(this.partLocations[r]),
                        (this.identityPartLocations[r] = new J3DIMatrix4()),
                        (this.partToStickerMap[r] = new Array(3));
                for (var r = 0; r < this.stickerCount; r++)
                    (this.partToStickerMap[this.stickerToPartMap[r]][this.stickerToFaceMap[r]] = r),
                        (this.stickers[r] = new Node3D()),
                        (this.stickerOrientations[r] = new Node3D()),
                        (this.stickerExplosions[r] = new Node3D()),
                        (this.stickerLocations[r] = new Node3D()),
                        (this.stickerTranslations[r] = new Node3D()),
                        this.stickerOrientations[r].add(this.stickers[r]),
                        this.stickerExplosions[r].add(this.stickerOrientations[r]),
                        this.stickerLocations[r].add(this.stickerExplosions[r]),
                        this.stickerTranslations[r].add(this.stickerLocations[r]),
                        this.add(this.stickerTranslations[r]),
                        (this.developedStickers[r] = new Node3D()),
                        (this.currentStickerTransforms[r] = new Node3D()),
                        this.add(this.currentStickerTransforms[r]),
                        (this.identityStickerLocations[r] = new J3DIMatrix4());
                this.partSize = 2;
                var s = this.cornerOffset;
                this.identityPartLocations[s + 1].rotate(180, 0, 0, 1),
                    this.identityPartLocations[s + 1].rotate(90, 0, 1, 0),
                    this.identityPartLocations[s + 2].rotate(270, 0, 1, 0),
                    this.identityPartLocations[s + 3].rotate(180, 0, 0, 1),
                    this.identityPartLocations[s + 3].rotate(180, 0, 1, 0),
                    this.identityPartLocations[s + 4].rotate(180, 0, 1, 0),
                    this.identityPartLocations[s + 5].rotate(180, 1, 0, 0),
                    this.identityPartLocations[s + 5].rotate(90, 0, 1, 0),
                    this.identityPartLocations[s + 6].rotate(90, 0, 1, 0),
                    this.identityPartLocations[s + 7].rotate(180, 0, 0, 1);
                for (var r = 0; r < this.partCount; r++) this.partLocations[r].matrix.load(this.identityPartLocations[r]);
                var o = this,
                    u = function () {
                        o.repaint();
                    },
                    a = this.getBaseUrl();
                if (e === !0 || e === undefined) {
                    (this.centerObj = i.loadObj(null, a + "center.obj", u)), (this.cornerObj = i.loadObj(null, a + "corner.obj", u)), (this.stickerObjs = new Array(this.stickerCount));
                    for (var r = 0; r < this.stickerObjs.length; r++) this.stickerObjs[r] = i.newJ3DIObj();
                    (this.corner_rObj = i.loadObj(null, a + "corner_r.obj", function () {
                        o.initAbstractPocketCubeCube3D_corner_r(), o.repaint();
                    })),
                        (this.corner_uObj = i.loadObj(null, a + "corner_u.obj", function () {
                            o.initAbstractPocketCubeCube3D_corner_u(), o.repaint();
                        })),
                        (this.corner_fObj = i.loadObj(null, a + "corner_f.obj", function () {
                            o.initAbstractPocketCubeCube3D_corner_f(), o.repaint();
                        }));
                }
            }),
            (AbstractPocketCubeCube3D.prototype.validateAttributes = function () {
                if (!this.isAttributesValid) {
                    this.isAttributesValid = !0;
                    for (var e = 0; e < this.stickerObjs.length; e++) this.stickerObjs[e].hasTexture = this.attributes.stickersImageURL != null;
                }
            }),
            (AbstractPocketCubeCube3D.prototype.initAbstractPocketCubeCube3D_corner_r = function () {
                var e = this.corner_rObj,
                    t = new J3DIObj();
                t.setTo(e),
                    t.rotateTexture(180),
                    (this.stickerObjs[0] = e.clone()),
                    (this.stickerObjs[3] = t.clone()),
                    (this.stickerObjs[8] = e.clone()),
                    (this.stickerObjs[11] = t.clone()),
                    (this.stickerObjs[12] = e.clone()),
                    (this.stickerObjs[15] = t.clone()),
                    (this.stickerObjs[20] = e.clone()),
                    (this.stickerObjs[23] = t.clone()),
                    this.initAbstractPocketCubeCube3D_textureScales();
            }),
            (AbstractPocketCubeCube3D.prototype.initAbstractPocketCubeCube3D_corner_f = function () {
                var e = this.corner_fObj,
                    t = new J3DIObj();
                t.setTo(e),
                    t.rotateTexture(180),
                    (this.stickerObjs[1] = e.clone()),
                    (this.stickerObjs[2] = t.clone()),
                    (this.stickerObjs[9] = e.clone()),
                    (this.stickerObjs[10] = t.clone()),
                    (this.stickerObjs[13] = e.clone()),
                    (this.stickerObjs[14] = t.clone()),
                    (this.stickerObjs[21] = e.clone()),
                    (this.stickerObjs[22] = t.clone()),
                    this.initAbstractPocketCubeCube3D_textureScales();
            }),
            (AbstractPocketCubeCube3D.prototype.initAbstractPocketCubeCube3D_corner_u = function () {
                var e = this.corner_uObj,
                    t = new J3DIObj();
                t.setTo(e), t.rotateTexture(90);
                var n = new J3DIObj();
                n.setTo(e), n.rotateTexture(180);
                var r = new J3DIObj();
                r.setTo(e),
                    r.rotateTexture(270),
                    (this.stickerObjs[4] = n.clone()),
                    (this.stickerObjs[5] = t.clone()),
                    (this.stickerObjs[6] = r.clone()),
                    (this.stickerObjs[7] = e.clone()),
                    (this.stickerObjs[16] = n.clone()),
                    (this.stickerObjs[17] = t.clone()),
                    (this.stickerObjs[18] = r.clone()),
                    (this.stickerObjs[19] = e.clone()),
                    this.initAbstractPocketCubeCube3D_textureScales();
            }),
            (AbstractPocketCubeCube3D.prototype.initAbstractPocketCubeCube3D_textureScales = function () {
                var e = this.attributes;
                for (var t = 0; t < this.stickerObjs.length; t++) {
                    if (!this.stickerObjs[t].loaded) continue;
                    if (this.stickerObjs[t].isTextureScaled) continue;
                    t * 2 + 1 < this.stickerOffsets.length && ((this.stickerObjs[t].textureOffsetX = this.stickerOffsets[t * 2]), (this.stickerObjs[t].textureOffsetY = this.stickerOffsets[t * 2 + 1])),
                        (this.stickerObjs[t].textureScale = 84 / 512),
                        (this.stickerObjs[t].isTextureScaled = !0);
                }
                this.isAttributesValid = !1;
            }),
            (AbstractPocketCubeCube3D.prototype.stickerToPartMap = [0, 2, 1, 3, 4, 2, 6, 0, 6, 0, 7, 1, 4, 6, 5, 7, 7, 1, 5, 3, 2, 4, 3, 5]),
            (AbstractPocketCubeCube3D.prototype.getPartIndexForStickerIndex = function (e) {
                return stickerToPartMap[e];
            }),
            (AbstractPocketCubeCube3D.prototype.partToStickerMap = null),
            (AbstractPocketCubeCube3D.prototype.getStickerIndexForPartIndex = function (e, t) {
                return this.partToStickerMap[e][t];
            }),
            (AbstractPocketCubeCube3D.prototype.stickerToFaceMap = [1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1]),
            (AbstractPocketCubeCube3D.prototype.createAttributes = function () {
                var e = n.newCubeAttributes(this.partCount, 24, [4, 4, 4, 4, 4, 4]),
                    t = [0.5, 0.6, 0.4, 16];
                for (var r = 0; r < this.partCount; r++) (e.partsFillColor[r] = [40, 40, 40, 255]), (e.partsPhong[r] = t);
                e.partsFillColor[this.centerOffset] = [240, 240, 240, 255];
                var i = [
                        [255, 210, 0, 255],
                        [0, 51, 115, 255],
                        [140, 0, 15, 255],
                        [248, 248, 248, 255],
                        [0, 115, 47, 255],
                        [255, 70, 0, 255],
                    ],
                    s = [0.8, 0.2, 0.1, 8];
                for (var r = 0; r < 6; r++) for (var o = 0; o < 4; o++) (e.stickersFillColor[r * 4 + o] = i[r]), (e.stickersPhong[r * 4 + o] = s);
                return e;
            }),
            (AbstractPocketCubeCube3D.prototype.updateExplosionFactor = function (e) {
                e == null && (e = this.attributes.explosionFactor);
                var t = this.partSize * 1.5,
                    n = t * e,
                    r = 0,
                    i = this.attributes;
                for (var s = 0; s < this.cornerCount; s++) {
                    var o = this.cornerOffset + s;
                    (r = n + i.partExplosion[o]), this.partExplosions[o].matrix.makeIdentity(), this.partExplosions[o].matrix.translate(r, r, -r);
                }
                this.fireStateChanged();
            }),
            (AbstractPocketCubeCube3D.prototype.validateTwist = function (e, t, n, r, i, s, o) {
                var u = this.updateTwistRotation;
                u.makeIdentity();
                var a = 90 * s * (1 - o);
                switch (i) {
                    case 0:
                        u.rotate(a, -1, 0, 0);
                        break;
                    case 1:
                        u.rotate(a, 0, -1, 0);
                        break;
                    case 2:
                        u.rotate(a, 0, 0, 1);
                }
                var f = this.updateTwistOrientation;
                for (var l = 0; l < r; l++) {
                    f.makeIdentity();
                    if (e[l] < this.edgeOffset)
                        switch (n[l]) {
                            case 0:
                                break;
                            case 1:
                                f.rotate(90, 0, 0, 1), f.rotate(90, -1, 0, 0);
                                break;
                            case 2:
                                f.rotate(90, 0, 0, -1), f.rotate(90, 0, 1, 0);
                        }
                    this.partOrientations[e[l]].matrix.load(f);
                    var c = this.partLocations[e[l]].matrix;
                    c.load(u), c.multiply(this.identityPartLocations[t[l]]);
                }
            }),
            (AbstractPocketCubeCube3D.prototype.cubeTwisted = function (e) {
                if (this.repainter == null) {
                    this.updateCube();
                    return;
                }
                var t = e.layerMask,
                    n = e.axis,
                    i = e.angle,
                    s = this.cube,
                    o = new Array(27),
                    u = new Array(27),
                    a = new Array(27),
                    f = 0,
                    l = e.getAffectedLocations();
                (f = l.length), (u = l.slice(0, f));
                for (var c = 0; c < f; c++) (o[c] = s.getPartAt(u[c])), (a[c] = s.getPartOrientation(o[c]));
                var h = f,
                    p = this,
                    d = r.newSplineInterpolator(0, 0, 1, 1),
                    v = new Date().getTime(),
                    m = this.attributes.twistDuration * Math.abs(i);
                this.isTwisting = !0;
                var g = function () {
                    var e = new Date().getTime(),
                        t = e - v,
                        r = t / m;
                    r < 1 ? (p.validateTwist(o, u, a, h, n, i, d.getFraction(r)), p.repainter.repaint(g)) : (p.validateTwist(o, u, a, h, n, i, 1), (p.isTwisting = !1));
                };
                this.repainter.repaint(g);
            }),
            (AbstractPocketCubeCube3D.prototype.boxClickToAxisMap = [
                [
                    [0, 0],
                    [0, 0],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [2, 2],
                    [2, 2],
                ],
                [
                    [0, 0],
                    [0, 0],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [2, 2],
                    [2, 2],
                ],
            ]),
            (AbstractPocketCubeCube3D.prototype.boxClickToAngleMap = [
                [
                    [-1, -1],
                    [-1, -1],
                ],
                [
                    [-1, -1],
                    [-1, -1],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [-1, -1],
                    [-1, -1],
                ],
            ]),
            (AbstractPocketCubeCube3D.prototype.boxClickToLayerMap = [
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
                [
                    [2, 2],
                    [2, 2],
                ],
                [
                    [2, 2],
                    [2, 2],
                ],
                [
                    [2, 2],
                    [2, 2],
                ],
                [
                    [1, 1],
                    [1, 1],
                ],
            ]),
            (AbstractPocketCubeCube3D.prototype.boxSwipeToAxisMap = [
                [1, 2, 1, 2],
                [2, 0, 2, 0],
                [1, 0, 1, 0],
                [1, 2, 1, 2],
                [2, 0, 2, 0],
                [1, 0, 1, 0],
            ]),
            (AbstractPocketCubeCube3D.prototype.boxSwipeToAngleMap = [
                [-1, -1, 1, 1],
                [1, 1, -1, -1],
                [1, -1, -1, 1],
                [1, 1, -1, -1],
                [-1, -1, 1, 1],
                [-1, 1, 1, -1],
            ]),
            (AbstractPocketCubeCube3D.prototype.boxSwipeToLayerMap = [
                [
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                    ],
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                    ],
                ],
                [
                    [
                        [2, 1, 2, 1],
                        [1, 1, 1, 1],
                    ],
                    [
                        [2, 2, 2, 2],
                        [1, 2, 1, 2],
                    ],
                ],
                [
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                    ],
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                    ],
                ],
                [
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                    ],
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                    ],
                ],
                [
                    [
                        [2, 1, 2, 1],
                        [1, 1, 1, 1],
                    ],
                    [
                        [2, 2, 2, 2],
                        [1, 2, 1, 2],
                    ],
                ],
                [
                    [
                        [1, 1, 1, 1],
                        [2, 1, 2, 1],
                    ],
                    [
                        [1, 2, 1, 2],
                        [2, 2, 2, 2],
                    ],
                ],
            ]),
            (AbstractPocketCubeCube3D.prototype.stickerOffsets = [4, 2, 5, 2, 4, 3, 5, 3, 2, 0, 3, 0, 2, 1, 3, 1, 2, 2, 3, 2, 2, 3, 3, 3, 0, 2, 1, 2, 0, 3, 1, 3, 2, 4, 3, 4, 2, 5, 3, 5, 4, 4, 5, 4, 4, 5, 5, 5]),
            {
                newAbstractPocketCubeCube3D: function () {
                    return new AbstractPocketCubeCube3D();
                },
            }
        );
    }),
    define("PreloadPocketCubeS1", ["J3DI"], function (e) {
        return (
            e.setFileData(
                "lib/models/pocketcubes1/corner.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner\nv 0.1 0 1.9\nv 1.9 0 1.9\nv 1.9 0 0.1\nv 0.1 0 0.1\nv 0.1 0.1 2\nv 1.9 0.1 2\nv 2 0.1 1.9\nv 2 0.1 0.1\nv 1.9 0.1 0\nv 0.1 0.1 0\nv 0 0.1 0.1\nv 0 0.1 1.9\nv 0.1 1.9 2\nv 1.9 1.9 2\nv 2 1.9 1.9\nv 2 1.9 0.1\nv 1.9 1.9 0\nv 0.1 1.9 0\nv 0 1.9 0.1\nv 0 1.9 1.9\nv 0.1 2 1.9\nv 1.9 2 1.9\nv 1.9 2 0.1\nv 0.1 2 0.1\n\nvt 0.959869 0 0\nvt 0.919738 0 0\nvt 0 1 0\nvt 0 0 0\nvt 0 0 0\nvt 0.959869 0 0\nvt 1 1 0\nvt 0.919738 0 0\nvt 0 0 0\nvt 0.959869 0 0\nvt 0.919738 0 0\nvt 1 0 0\nvt 0 0 0\nvt 0.959869 0 0\nvt 0.919738 0 0\nvt 1 0.074299 0\nvt 0 0.074299 0\nvt 0.919738 0.074299 0\nvt 0 0.074299 0\nvt 1 0.074299 0\nvt 0.919738 0.074299 0\nvt 0 0.074299 0\nvt 1 0.074299 0\nvt 0.919738 0.074299 0\nvt 0 0.074299 0\nvt 1 0.074299 0\nvt 0.919738 0.074299 0\nvt 1 0.925701 0\nvt 0 0.925701 0\nvt 0.919738 0.925701 0\nvt 0 0.925701 0\nvt 1 0.925701 0\nvt 0.919738 0.925701 0\nvt 0 0.925701 0\nvt 1 0.925701 0\nvt 0.919738 0.925701 0\nvt 0 0.925701 0\nvt 1 0.925701 0\nvt 0.919738 0.925701 0\nvt 0.919738 1 0\nvt 0.959869 1 0\nvt 0 1 0\nvt 0 1 0\nvt 0.959869 1 0\nvt 0.919738 1 0\nvt 0 1 0\nvt 0.959869 1 0\nvt 0.919738 1 0\nvt 0 1 0\nvt 0.959869 1 0\nvt 0.919738 1 0\n\nf 2/8 6/18 5/17 1/4 \nf 4/13 3/12 2/7 1/3 \nf 14/30 22/45 21/42 13/29 \nf 7/20 6/18 2/6 \nf 7/20 15/32 14/30 6/18 \nf 15/32 22/44 14/30 \nf 3/11 8/21 7/19 2/5 \nf 13/28 21/41 20/39 \nf 16/33 23/48 22/43 15/31 \nf 9/23 8/21 3/10 \nf 9/23 17/35 16/33 8/21 \nf 17/35 23/47 16/33 \nf 4/15 10/24 9/22 3/9 \nf 10/24 18/36 17/34 9/22 \nf 18/36 24/51 23/46 17/34 \nf 11/26 10/24 4/14 \nf 11/26 19/38 18/36 10/24 \nf 19/38 24/50 18/36 \nf 1/2 12/27 11/25 4/13 \nf 12/27 20/39 19/37 11/25 \nf 20/39 21/40 24/49 19/37 \nf 5/16 12/27 1/1 \nf 5/16 13/28 20/39 12/27 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes1/corner_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_r corner_f\nusemtl Stickers\nv 2 0.1 1.9\nv 2 1.9 1.9\nv 2 0.1 0.1\nv 2 1.9 0.1\nv 1.8 0.1 0.1\nv 1.8 1.9 0.1\nv 1.8 0.1 1.9\nv 1.8 1.9 1.9\n\nvt 0.05 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.05 0.05\nvt 0.95 0.95 0.05\n\nf 3/3 4/4 2/2 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes1/corner_u.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_u corner_f\nusemtl Stickers\nv 0.1 2 1.9\nv 0.1 2 0.1\nv 1.9 2 1.9\nv 1.9 2 0.1\nv 1.9 1.8 1.9\nv 1.9 1.8 0.1\nv 0.1 1.8 1.9\nv 0.1 1.8 0.1\n\nvt 0.05 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.05 0.05\nvt 0.95 0.95 0.05\n\nf 3/3 4/4 2/2 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes1/corner_f.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_f\nusemtl Stickers\nv 0.1 0.1 2\nv 0.1 1.9 2\nv 1.9 0.1 2\nv 1.9 1.9 2\nv 1.9 0.1 1.8\nv 1.9 1.9 1.8\nv 0.1 0.1 1.8\nv 0.1 1.9 1.8\n\nvt 0.05 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.05 0.05\nvt 0.95 0.95 0.05\n\nf 3/3 4/4 2/2 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes1/center.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng center\nv 0 0.525731 0.850651\nv 0 -0.525731 0.850651\nv 0.850651 0 0.525731\nv 0.850651 0 -0.525731\nv 0 0.525731 -0.850651\nv 0 -0.525731 -0.850651\nv -0.850651 0 -0.525731\nv -0.850651 0 0.525731\nv 0.525731 0.850651 0\nv -0.525731 0.850651 0\nv -0.525731 -0.850651 0\nv 0.525731 -0.850651 0\n\nvt 0.5 0 0\nvt 1 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 0 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0.5 0 0\nvt 0 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 0 1 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0 1 0\n\nf 1/1 9/25 10/26 \nf 1/1 3/8 9/24 \nf 3/7 4/11 9/24 \nf 4/9 5/14 9/24 \nf 5/13 10/27 9/24 \nf 7/20 10/27 5/12 \nf 8/23 10/27 7/19 \nf 8/23 1/2 10/26 \nf 2/5 11/29 12/32 \nf 2/5 12/31 3/6 \nf 12/30 4/11 3/6 \nf 12/30 6/16 4/10 \nf 12/30 11/29 6/17 \nf 11/28 7/18 6/17 \nf 11/28 8/21 7/19 \nf 11/28 2/3 8/22 \nf 1/1 8/21 2/4 \nf 1/1 2/3 3/6 \nf 4/9 6/16 5/12 \nf 6/15 7/18 5/12 \n\n"
            ),
            {}
        );
    }),
    define("PocketCubeS1Cube3D", ["AbstractPocketCubeCube3D", "CubeAttributes", "PreloadPocketCubeS1"], function (e, t, n) {
        return (
            (PocketCubeS1Cube3D = function (e) {
                this.initPocketCubeS1Cube3D(e);
            }),
            (PocketCubeS1Cube3D.prototype = e.newAbstractPocketCubeCube3D(!1)),
            (PocketCubeS1Cube3D.prototype.initPocketCubeS1Cube3D = function (e) {
                this.initAbstractPocketCubeCube3D(e, 2);
            }),
            (PocketCubeS1Cube3D.prototype.getBaseUrl = function () {
                return "lib/models/pocketcubes1/";
            }),
            (PocketCubeS1Cube3D.prototype.createAttributes = function () {
                var e = t.newCubeAttributes(this.partCount, 24, [4, 4, 4, 4, 4, 4]),
                    n = [0.5, 0.6, 0.4, 16];
                for (var r = 0; r < this.partCount; r++) (e.partsFillColor[r] = [24, 24, 24, 255]), (e.partsPhong[r] = n);
                e.partsFillColor[this.centerOffset] = [240, 240, 240, 255];
                var i = [
                        [255, 210, 0, 255],
                        [0, 51, 115, 255],
                        [140, 0, 15, 255],
                        [248, 248, 248, 255],
                        [0, 115, 47, 255],
                        [255, 70, 0, 255],
                    ],
                    s = [0.8, 0.2, 0.1, 8];
                for (var r = 0; r < 6; r++) for (var o = 0; o < 4; o++) (e.stickersFillColor[r * 4 + o] = i[r]), (e.stickersPhong[r * 4 + o] = s);
                return e;
            }),
            {
                newCube3D: function (e) {
                    return new PocketCubeS1Cube3D(e);
                },
            }
        );
    }),
    define("PreloadPocketCubeS4", ["J3DI"], function (e) {
        return (
            e.setFileData(
                "lib/models/pocketcubes4/corner.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner\nv 0.1 0 1.9\nv 1.9 0 1.9\nv 1.9 0 0.1\nv 0.1 0 0.1\nv 0.1 0.013397 1.95\nv 1.9 0.013397 1.95\nv 1.925 0.013397 1.943301\nv 1.943301 0.013397 1.925\nv 1.95 0.013397 1.9\nv 1.95 0.013397 0.1\nv 1.943301 0.013397 0.075\nv 1.925 0.013397 0.056699\nv 1.9 0.013397 0.05\nv 0.1 0.013397 0.05\nv 0.075 0.013397 0.056699\nv 0.056699 0.013397 0.075\nv 0.05 0.013397 0.1\nv 0.05 0.013397 1.9\nv 0.056699 0.013397 1.925\nv 0.075 0.013397 1.943301\nv 0.1 0.05 1.986603\nv 1.9 0.05 1.986603\nv 1.943301 0.05 1.975\nv 1.975 0.05 1.943301\nv 1.986603 0.05 1.9\nv 1.986603 0.05 0.1\nv 1.975 0.05 0.056699\nv 1.943301 0.05 0.025\nv 1.9 0.05 0.013397\nv 0.1 0.05 0.013397\nv 0.056699 0.05 0.025\nv 0.025 0.05 0.056699\nv 0.013397 0.05 0.1\nv 0.013397 0.05 1.9\nv 0.025 0.05 1.943301\nv 0.056699 0.05 1.975\nv 0.1 0.1 2\nv 1.9 0.1 2\nv 1.95 0.1 1.986603\nv 1.986603 0.1 1.95\nv 2 0.1 1.9\nv 2 0.1 0.1\nv 1.986603 0.1 0.05\nv 1.95 0.1 0.013397\nv 1.9 0.1 0\nv 0.1 0.1 0\nv 0.05 0.1 0.013397\nv 0.013397 0.1 0.05\nv 0 0.1 0.1\nv 0 0.1 1.9\nv 0.013397 0.1 1.95\nv 0.05 0.1 1.986603\nv 0.1 1.9 2\nv 1.9 1.9 2\nv 1.95 1.9 1.986603\nv 1.986603 1.9 1.95\nv 2 1.9 1.9\nv 2 1.9 0.1\nv 1.986603 1.9 0.05\nv 1.95 1.9 0.013397\nv 1.9 1.9 0\nv 0.1 1.9 0\nv 0.05 1.9 0.013397\nv 0.013397 1.9 0.05\nv 0 1.9 0.1\nv 0 1.9 1.9\nv 0.013397 1.9 1.95\nv 0.05 1.9 1.986603\nv 0.1 1.95 1.986603\nv 1.9 1.95 1.986603\nv 1.943301 1.95 1.975\nv 1.975 1.95 1.943301\nv 1.986603 1.95 1.9\nv 1.986603 1.95 0.1\nv 1.975 1.95 0.056699\nv 1.943301 1.95 0.025\nv 1.9 1.95 0.013397\nv 0.1 1.95 0.013397\nv 0.056699 1.95 0.025\nv 0.025 1.95 0.056699\nv 0.013397 1.95 0.1\nv 0.013397 1.95 1.9\nv 0.025 1.95 1.943301\nv 0.056699 1.95 1.975\nv 0.1 1.986603 1.95\nv 1.9 1.986603 1.95\nv 1.925 1.986603 1.943301\nv 1.943301 1.986603 1.925\nv 1.95 1.986603 1.9\nv 1.95 1.986603 0.1\nv 1.943301 1.986603 0.075\nv 1.925 1.986603 0.056699\nv 1.9 1.986603 0.05\nv 0.1 1.986603 0.05\nv 0.075 1.986603 0.056699\nv 0.056699 1.986603 0.075\nv 0.05 1.986603 0.1\nv 0.05 1.986603 1.9\nv 0.056699 1.986603 1.925\nv 0.075 1.986603 1.943301\nv 0.1 2 1.9\nv 1.9 2 1.9\nv 1.9 2 0.1\nv 0.1 2 0.1\n\nvt 0.986623 0 0\nvt 0.959869 0 0\nvt 0.933115 0 0\nvt 0.919738 0 0\nvt 0 1 0\nvt 0 0 0\nvt 1 1 0\nvt 0 0 0\nvt 0.986623 0 0\nvt 0.959869 0 0\nvt 0.933115 0 0\nvt 0.919738 0 0\nvt 0 0 0\nvt 0.986623 0 0\nvt 0.959869 0 0\nvt 0.933115 0 0\nvt 1 0 0\nvt 0.919738 0 0\nvt 0 0 0\nvt 0.986623 0 0\nvt 0.959869 0 0\nvt 0.933115 0 0\nvt 0.919738 0 0\nvt 1 0.024766 0\nvt 0 0.024766 0\nvt 0.919738 0.024766 0\nvt 0.946492 0.024766 0\nvt 0.973246 0.024766 0\nvt 0 0.024766 0\nvt 1 0.024766 0\nvt 0.919738 0.024766 0\nvt 0.946492 0.024766 0\nvt 0.973246 0.024766 0\nvt 0 0.024766 0\nvt 1 0.024766 0\nvt 0.919738 0.024766 0\nvt 0.946492 0.024766 0\nvt 0.973246 0.024766 0\nvt 0 0.024766 0\nvt 1 0.024766 0\nvt 0.919738 0.024766 0\nvt 0.946492 0.024766 0\nvt 0.973246 0.024766 0\nvt 1 0.049533 0\nvt 0 0.049533 0\nvt 0.919738 0.049533 0\nvt 0.946492 0.049533 0\nvt 0.973246 0.049533 0\nvt 0 0.049533 0\nvt 1 0.049533 0\nvt 0.919738 0.049533 0\nvt 0.946492 0.049533 0\nvt 0.973246 0.049533 0\nvt 0 0.049533 0\nvt 1 0.049533 0\nvt 0.919738 0.049533 0\nvt 0.946492 0.049533 0\nvt 0.973246 0.049533 0\nvt 0 0.049533 0\nvt 1 0.049533 0\nvt 0.919738 0.049533 0\nvt 0.946492 0.049533 0\nvt 0.973246 0.049533 0\nvt 1 0.074299 0\nvt 0 0.074299 0\nvt 0.919738 0.074299 0\nvt 0.946492 0.074299 0\nvt 0.973246 0.074299 0\nvt 0 0.074299 0\nvt 1 0.074299 0\nvt 0.919738 0.074299 0\nvt 0.946492 0.074299 0\nvt 0.973246 0.074299 0\nvt 0 0.074299 0\nvt 1 0.074299 0\nvt 0.919738 0.074299 0\nvt 0.946492 0.074299 0\nvt 0.973246 0.074299 0\nvt 0 0.074299 0\nvt 1 0.074299 0\nvt 0.919738 0.074299 0\nvt 0.946492 0.074299 0\nvt 0.973246 0.074299 0\nvt 1 0.925701 0\nvt 0 0.925701 0\nvt 0.919738 0.925701 0\nvt 0.946492 0.925701 0\nvt 0.973246 0.925701 0\nvt 0 0.925701 0\nvt 1 0.925701 0\nvt 0.919738 0.925701 0\nvt 0.946492 0.925701 0\nvt 0.973246 0.925701 0\nvt 0 0.925701 0\nvt 1 0.925701 0\nvt 0.919738 0.925701 0\nvt 0.946492 0.925701 0\nvt 0.973246 0.925701 0\nvt 0 0.925701 0\nvt 1 0.925701 0\nvt 0.919738 0.925701 0\nvt 0.946492 0.925701 0\nvt 0.973246 0.925701 0\nvt 1 0.950467 0\nvt 0 0.950467 0\nvt 0.919738 0.950467 0\nvt 0.946492 0.950467 0\nvt 0.973246 0.950467 0\nvt 0 0.950467 0\nvt 1 0.950467 0\nvt 0.919738 0.950467 0\nvt 0.946492 0.950467 0\nvt 0.973246 0.950467 0\nvt 0 0.950467 0\nvt 1 0.950467 0\nvt 0.919738 0.950467 0\nvt 0.946492 0.950467 0\nvt 0.973246 0.950467 0\nvt 0 0.950467 0\nvt 1 0.950467 0\nvt 0.919738 0.950467 0\nvt 0.946492 0.950467 0\nvt 0.973246 0.950467 0\nvt 1 0.975234 0\nvt 0 0.975234 0\nvt 0.919738 0.975234 0\nvt 0.946492 0.975234 0\nvt 0.973246 0.975234 0\nvt 0 0.975234 0\nvt 1 0.975234 0\nvt 0.919738 0.975234 0\nvt 0.946492 0.975234 0\nvt 0.973246 0.975234 0\nvt 0 0.975234 0\nvt 1 0.975234 0\nvt 0.919738 0.975234 0\nvt 0.946492 0.975234 0\nvt 0.973246 0.975234 0\nvt 0 0.975234 0\nvt 1 0.975234 0\nvt 0.919738 0.975234 0\nvt 0.946492 0.975234 0\nvt 0.973246 0.975234 0\nvt 0.959869 1 0\nvt 0.933115 1 0\nvt 0.919738 1 0\nvt 0 1 0\nvt 0.986623 1 0\nvt 0 1 0\nvt 0.986623 1 0\nvt 0.959869 1 0\nvt 0.933115 1 0\nvt 0.919738 1 0\nvt 0 1 0\nvt 0.986623 1 0\nvt 0.959869 1 0\nvt 0.933115 1 0\nvt 0.919738 1 0\nvt 0 1 0\nvt 0.986623 1 0\nvt 0.959869 1 0\nvt 0.933115 1 0\nvt 0.919738 1 0\n\nf 2/12 6/26 5/25 1/6 \nf 6/26 22/46 21/45 5/25 \nf 22/46 38/66 37/65 21/45 \nf 85/124 101/148 100/143 \nf 54/86 70/106 69/105 53/85 \nf 70/106 86/126 85/125 69/105 \nf 86/126 102/153 101/147 85/125 \nf 7/27 6/26 2/11 \nf 7/27 23/47 22/46 6/26 \nf 23/47 39/67 38/66 22/46 \nf 39/67 55/87 54/86 38/66 \nf 55/87 71/107 70/106 54/86 \nf 71/107 87/127 86/126 70/106 \nf 87/127 102/152 86/126 \nf 8/28 7/27 2/10 \nf 8/28 24/48 23/47 7/27 \nf 24/48 40/68 39/67 23/47 \nf 40/68 56/88 55/87 39/67 \nf 56/88 72/108 71/107 55/87 \nf 72/108 88/128 87/127 71/107 \nf 88/128 102/151 87/127 \nf 9/30 8/28 2/9 \nf 9/30 25/50 24/48 8/28 \nf 25/50 41/70 40/68 24/48 \nf 41/70 57/90 56/88 40/68 \nf 57/90 73/110 72/108 56/88 \nf 73/110 89/130 88/128 72/108 \nf 89/130 102/150 88/128 \nf 3/18 10/31 9/29 2/8 \nf 10/31 26/51 25/49 9/29 \nf 26/51 42/71 41/69 25/49 \nf 4/19 3/17 2/7 1/5 \nf 58/91 74/111 73/109 57/89 \nf 74/111 90/131 89/129 73/109 \nf 90/131 103/158 102/149 89/129 \nf 11/32 10/31 3/16 \nf 11/32 27/52 26/51 10/31 \nf 27/52 43/72 42/71 26/51 \nf 43/72 59/92 58/91 42/71 \nf 59/92 75/112 74/111 58/91 \nf 75/112 91/132 90/131 74/111 \nf 91/132 103/157 90/131 \nf 12/33 11/32 3/15 \nf 12/33 28/53 27/52 11/32 \nf 28/53 44/73 43/72 27/52 \nf 44/73 60/93 59/92 43/72 \nf 60/93 76/113 75/112 59/92 \nf 76/113 92/133 91/132 75/112 \nf 92/133 103/156 91/132 \nf 13/35 12/33 3/14 \nf 13/35 29/55 28/53 12/33 \nf 29/55 45/75 44/73 28/53 \nf 45/75 61/95 60/93 44/73 \nf 61/95 77/115 76/113 60/93 \nf 77/115 93/135 92/133 76/113 \nf 93/135 103/155 92/133 \nf 4/23 14/36 13/34 3/13 \nf 14/36 30/56 29/54 13/34 \nf 30/56 46/76 45/74 29/54 \nf 46/76 62/96 61/94 45/74 \nf 62/96 78/116 77/114 61/94 \nf 78/116 94/136 93/134 77/114 \nf 94/136 104/163 103/154 93/134 \nf 15/37 14/36 4/22 \nf 15/37 31/57 30/56 14/36 \nf 31/57 47/77 46/76 30/56 \nf 47/77 63/97 62/96 46/76 \nf 63/97 79/117 78/116 62/96 \nf 79/117 95/137 94/136 78/116 \nf 95/137 104/162 94/136 \nf 16/38 15/37 4/21 \nf 16/38 32/58 31/57 15/37 \nf 32/58 48/78 47/77 31/57 \nf 48/78 64/98 63/97 47/77 \nf 64/98 80/118 79/117 63/97 \nf 80/118 96/138 95/137 79/117 \nf 96/138 104/161 95/137 \nf 17/40 16/38 4/20 \nf 17/40 33/60 32/58 16/38 \nf 33/60 49/80 48/78 32/58 \nf 49/80 65/100 64/98 48/78 \nf 65/100 81/120 80/118 64/98 \nf 81/120 97/140 96/138 80/118 \nf 97/140 104/160 96/138 \nf 1/4 18/41 17/39 4/19 \nf 18/41 34/61 33/59 17/39 \nf 34/61 50/81 49/79 33/59 \nf 50/81 66/101 65/99 49/79 \nf 66/101 82/121 81/119 65/99 \nf 82/121 98/141 97/139 81/119 \nf 98/141 101/146 104/159 97/139 \nf 19/42 18/41 1/3 \nf 19/42 35/62 34/61 18/41 \nf 35/62 51/82 50/81 34/61 \nf 51/82 67/102 66/101 50/81 \nf 67/102 83/122 82/121 66/101 \nf 83/122 99/142 98/141 82/121 \nf 99/142 101/145 98/141 \nf 20/43 19/42 1/2 \nf 20/43 36/63 35/62 19/42 \nf 36/63 52/83 51/82 35/62 \nf 52/83 68/103 67/102 51/82 \nf 68/103 84/123 83/122 67/102 \nf 84/123 100/143 99/142 83/122 \nf 100/143 101/144 99/142 \nf 5/24 20/43 1/1 \nf 5/24 21/44 36/63 20/43 \nf 21/44 37/64 52/83 36/63 \nf 37/64 53/84 68/103 52/83 \nf 53/84 69/104 84/123 68/103 \nf 69/104 85/124 100/143 84/123 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes4/corner_r.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_r corner_f\nusemtl Stickers\nv 2 0.1 1.9\nv 2 1.9 1.9\nv 2 0.1 0.1\nv 2 1.9 0.1\nv 1.8 0.1 0.1\nv 1.8 1.9 0.1\nv 1.8 0.1 1.9\nv 1.8 1.9 1.9\n\nvt 0.05 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.05 0.05\nvt 0.95 0.95 0.05\n\nf 3/3 4/4 2/2 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes4/corner_u.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_u corner_f\nusemtl Stickers\nv 0.1 2 1.9\nv 0.1 2 0.1\nv 1.9 2 1.9\nv 1.9 2 0.1\nv 1.9 1.8 1.9\nv 1.9 1.8 0.1\nv 0.1 1.8 1.9\nv 0.1 1.8 0.1\n\nvt 0.05 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.05 0.05\nvt 0.95 0.95 0.05\n\nf 3/3 4/4 2/2 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes4/corner_f.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng corner_f\nusemtl Stickers\nv 0.1 0.1 2\nv 0.1 1.9 2\nv 1.9 0.1 2\nv 1.9 1.9 2\nv 1.9 0.1 1.8\nv 1.9 1.9 1.8\nv 0.1 0.1 1.8\nv 0.1 1.9 1.8\n\nvt 0.05 0.05 0.05\nvt 0.05 0.95 0.05\nvt 0.95 0.05 0.05\nvt 0.95 0.95 0.05\n\nf 3/3 4/4 2/2 1/1 \n\n"
            ),
            e.setFileData(
                "lib/models/pocketcubes4/center.obj",
                "# WaveFront *.obj file (generated by CINEMA 4D)\n\ng center\nv 0 0.525731 0.850651\nv 0 -0.525731 0.850651\nv 0.850651 0 0.525731\nv 0.850651 0 -0.525731\nv 0 0.525731 -0.850651\nv 0 -0.525731 -0.850651\nv -0.850651 0 -0.525731\nv -0.850651 0 0.525731\nv 0.525731 0.850651 0\nv -0.525731 0.850651 0\nv -0.525731 -0.850651 0\nv 0.525731 -0.850651 0\n\nvt 0.5 0 0\nvt 1 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 0 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0.5 0 0\nvt 0 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0 1 0\nvt 0.5 0 0\nvt 0 1 0\nvt 1 1 0\nvt 0 1 0\nvt 1 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0.5 0 0\nvt 1 1 0\nvt 0 1 0\n\nf 1/1 9/25 10/26 \nf 1/1 3/8 9/24 \nf 3/7 4/11 9/24 \nf 4/9 5/14 9/24 \nf 5/13 10/27 9/24 \nf 7/20 10/27 5/12 \nf 8/23 10/27 7/19 \nf 8/23 1/2 10/26 \nf 2/5 11/29 12/32 \nf 2/5 12/31 3/6 \nf 12/30 4/11 3/6 \nf 12/30 6/16 4/10 \nf 12/30 11/29 6/17 \nf 11/28 7/18 6/17 \nf 11/28 8/21 7/19 \nf 11/28 2/3 8/22 \nf 1/1 8/21 2/4 \nf 1/1 2/3 3/6 \nf 4/9 6/16 5/12 \nf 6/15 7/18 5/12 \n\n"
            ),
            {}
        );
    }),
    define("PocketCubeS4Cube3D", ["AbstractPocketCubeCube3D", "CubeAttributes", "PreloadPocketCubeS4"], function (e, t, n) {
        return (
            (PocketCubeS4Cube3D = function (e) {
                this.initPocketCubeS4Cube3D(e);
            }),
            (PocketCubeS4Cube3D.prototype = e.newAbstractPocketCubeCube3D(!1)),
            (PocketCubeS4Cube3D.prototype.initPocketCubeS4Cube3D = function (e) {
                this.initAbstractPocketCubeCube3D(e, 1.8), (this.isDrawTwoPass = !1);
            }),
            (PocketCubeS4Cube3D.prototype.getBaseUrl = function () {
                return "lib/models/pocketcubes4/";
            }),
            (PocketCubeS4Cube3D.prototype.createAttributes = function () {
                var e = t.newCubeAttributes(this.partCount, 24, [4, 4, 4, 4, 4, 4]),
                    n = [0.5, 0.6, 0.4, 16];
                for (var r = 0; r < this.partCount; r++) (e.partsFillColor[r] = [24, 24, 24, 255]), (e.partsPhong[r] = n);
                e.partsFillColor[this.centerOffset] = [240, 240, 240, 255];
                var i = [
                        [255, 210, 0, 255],
                        [0, 51, 115, 255],
                        [140, 0, 15, 255],
                        [248, 248, 248, 255],
                        [0, 115, 47, 255],
                        [255, 70, 0, 255],
                    ],
                    s = [0.8, 0.2, 0.1, 8];
                for (var r = 0; r < 6; r++) for (var o = 0; o < 4; o++) (e.stickersFillColor[r * 4 + o] = i[r]), (e.stickersPhong[r * 4 + o] = s);
                return e;
            }),
            {
                newCube3D: function (e) {
                    return new PocketCubeS4Cube3D(e);
                },
            }
        );
    }),
    define("Cube3DCanvas", ["AbstractCanvas", "Node3D", "J3DI", "J3DIMath", "ScriptParser", "RubiksCubeS1Cube3D", "RubiksCubeS4Cube3D", "PocketCubeS1Cube3D", "PocketCubeS4Cube3D"], function (e, t, n, r, i, s, o, u, a) {
        return (
            (Cube3DCanvas = function () {
                this.initCube3DCanvas();
            }),
            (Cube3DCanvas.prototype = e.newAbstractCanvas()),
            (Cube3DCanvas.prototype.initCube3DCanvas = function () {
                this.initAbstractCanvas(),
                    (this.handler = new Cube3DHandler(this)),
                    (this.canvas = null),
                    (this.cube3d = null),
                    (this.currentAngle = 0),
                    (this.autorotate = !1),
                    (this.autorotateFunction = null),
                    (this.rotateFunction = null),
                    (this.rotationMatrix = new J3DIMatrix4()),
                    (this.smoothRotationFunction = null),
                    (this.spin = new J3DIVector3()),
                    (this.useFullModel = !0),
                    (this.moves = []),
                    (this.undoList = []),
                    (this.redoIndex = 0);
            }),
            (Cube3DCanvas.prototype.createCube3D = function () {
                this.debugFPS = this.canvas.getAttribute("debug").indexOf("fps") != -1;
                var e = this.canvas.getAttribute("kind"),
                    t = e == null ? "" : e.trim();
                t.length == 0 && (t = "RubiksCube");
                var n = t.lastIndexOf(" parts") == t.length - 6;
                n && (t = t.substring(0, t.length - 6));
                var r = t.lastIndexOf(" s") == t.length - 3;
                r || (this.useFullModel ? (t += " s4") : (t += " s2"));
                var i = null;
                switch (t) {
                    case "RubiksCube s1":
                    case "RubiksCube s2":
                        i = s.newCube3D();
                        break;
                    case "RubiksCube s3":
                    case "RubiksCube s4":
                        i = o.newCube3D();
                        break;
                    case "PocketCube s1":
                    case "PocketCube s2":
                        i = u.newCube3D();
                        break;
                    case "PocketCube s3":
                    case "PocketCube s4":
                        i = a.newCube3D();
                        break;
                    default:
                        this.log("Error: illegal cube attribute :" + t), this.useFullModel ? (i = o.newCube3D()) : (i = s.newCube3D());
                }
                if (i != null) {
                    if (n) {
                        var f = i.attributes;
                        for (var l = 0; l < f.stickersFillColor.length; l++) (f.stickersFillColor[l] = f.partsFillColor[0]), (f.stickersPhong[l] = f.partsPhong[0]);
                    }
                    return i;
                }
            }),
            (Cube3DCanvas.prototype.setCube3D = function (e) {
                this.cube3d = e;
            }),
            (Cube3DCanvas.prototype.getCube3D = function () {
                return this.cube3d;
            }),
            (Cube3DCanvas.prototype.initScene = function () {
                var e = this,
                    r = function () {
                        e.repaint();
                    };
                (this.world = t.newNode3D()),
                    (this.cube3d = this.createCube3D()),
                    (this.cube3d.repaintFunction = r),
                    (this.cubeSize = this.cube3d.partSize * this.cube3d.cube.layerCount),
                    this.world.add(this.cube3d),
                    (this.cube = this.cube3d.cube),
                    this.cube3d.addChangeListener(this);
                var i = this.cube3d.attributes;
                (this.cubeSize = this.cube3d.partSize * this.cube3d.cube.layerCount),
                    (this.currentAngle = 0),
                    (this.xRot = i.xRot),
                    (this.yRot = i.yRot),
                    (this.camPos = new J3DIVector3(0, 0, -this.cubeSize * 1.35)),
                    (this.lookAtPos = new J3DIVector3(0, 0, 0)),
                    (this.up = new J3DIVector3(0, 1, 0)),
                    (this.lightPos = new J3DIVector3(4, -4, 8)),
                    (this.lightNormal = new J3DIVector3(-4, 4, -8).normalize()),
                    (this.observerNormal = new J3DIVector3(this.camPos).normalize());
                var s = this.canvas.getAttribute("stickersImage");
                s != null && s != "null" && (i.stickersImageURL = s),
                    i.stickersImageURL && (this.stickersTexture = n.loadImageTexture(this.gl, i.stickersImageURL, r)),
                    this.cube3d.validateAttributes(),
                    (this.mvMatrix = new J3DIMatrix4()),
                    (this.perspectiveMatrix = new J3DIMatrix4()),
                    (this.mvpMatrix = new J3DIMatrix4()),
                    (this.mvNormalMatrix = new J3DIMatrix4()),
                    (this.invCameraMatrix = new J3DIMatrix4()),
                    (this.cameraMatrix = new J3DIMatrix4()),
                    (this.rotationMatrix = new J3DIMatrix4()),
                    (this.viewportMatrix = new J3DIMatrix4()),
                    (this.forceColorUpdate = !1);
            }),
            (Cube3DCanvas.prototype.updateMatrices = function () {
                this.cameraMatrix.makeIdentity(), this.cameraMatrix.lookat(this.camPos[0], this.camPos[1], this.camPos[2], this.lookAtPos[0], this.lookAtPos[1], this.lookAtPos[2], this.up[0], this.up[1], this.up[2]);
                var e = new J3DIMatrix4();
                e.scale(1, 1, -1),
                    e.multiply(this.cameraMatrix),
                    this.cameraMatrix.load(e),
                    this.perspectiveMatrix.makeIdentity(),
                    this.perspectiveMatrix.perspective(30, this.width / this.height, 1, 12),
                    this.perspectiveMatrix.multiply(this.cameraMatrix),
                    this.invCameraMatrix.load(this.cameraMatrix),
                    this.invCameraMatrix.invert(),
                    (this.rasterToCameraMatrix = new J3DIMatrix4(this.perspectiveMatrix)),
                    this.rasterToCameraMatrix.invert();
                var t = this.cube3d.attributes,
                    n = this.world.matrix;
                n.makeIdentity(), n.multiply(this.rotationMatrix), n.rotate(t.xRot, 1, 0, 0), n.rotate(t.yRot, 0, -1, 0), n.rotate(this.currentAngle, 1, 1, 1);
                var r = 0.4 * t.scaleFactor;
                n.scale(r, r, r);
            }),
            (Cube3DCanvas.prototype.draw = function () {
                if (!this.camPos) return;
                this.reshape(), this.updateMatrices(), this.cube3d.doValidateDevelopAttributes();
                var e = this;
                this.clearCanvas();
                var t = new Date().getTime();
                (this.faceCount = 0), this.cube3d.isDrawTwoPass ? this.drawTwoPass(this.cube3d) : this.drawSinglePass(this.cube3d);
                if (this.debugFPS && this.g != null) {
                    var n = new Date().getTime(),
                        r = n - t,
                        i = this.g;
                    (i.fillStyle = "rgb(0,0,0)"), i.fillText("faces:" + this.faceCount + " elapsed:" + (n - t), 20, 20);
                }
            }),
            (Cube3DCanvas.prototype.drawSinglePass = function (e) {
                var t = this;
                e.repainter = this;
                var n = this.cube3d.attributes;
                e.updateAttributes();
                var r = n.partsFillColor[e.centerOffset],
                    i = n.partsFillColor[e.cornerOffset],
                    s = this.mvMatrix;
                for (var o = 0; o < e.centerCount; o++) s.makeIdentity(), e.parts[e.centerOffset + o].transform(s), this.drawObject(e.centerObj, s, r, n.partsPhong[this.cube3d.centerOffset + o]);
                for (var o = 0; o < e.sideCount; o++) {
                    s.makeIdentity(), e.parts[e.sideOffset + o].transform(s), this.drawObject(e.sideObj, s, i, n.partsPhong[this.cube3d.sideOffset + o]);
                    var u = e.getStickerIndexForPartIndex(e.sideOffset + o, 0);
                    this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u]);
                }
                for (var o = 0; o < e.edgeCount; o++) {
                    s.makeIdentity(), this.cube3d.parts[e.edgeOffset + o].transform(s), this.drawObject(e.edgeObj, s, i, n.partsPhong[this.cube3d.edgeOffset + o]);
                    var u = e.getStickerIndexForPartIndex(e.edgeOffset + o, 0);
                    this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u]),
                        (u = e.getStickerIndexForPartIndex(e.edgeOffset + o, 1)),
                        this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u]);
                }
                for (var o = 0; o < e.cornerCount; o++) {
                    s.makeIdentity(), this.cube3d.parts[e.cornerOffset + o].transform(s), this.drawObject(e.cornerObj, s, i, n.partsPhong[this.cube3d.cornerOffset + o], this.forceColorUpdate);
                    var u = e.getStickerIndexForPartIndex(e.cornerOffset + o, 1);
                    this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u], this.forceColorUpdate),
                        (u = e.getStickerIndexForPartIndex(e.cornerOffset + o, 0)),
                        this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u], this.forceColorUpdate),
                        (u = e.getStickerIndexForPartIndex(e.cornerOffset + o, 2)),
                        this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u], this.forceColorUpdate);
                }
                this.flushCanvas(), (this.forceColorUpdate = !1);
            }),
            (Cube3DCanvas.prototype.drawTwoPass = function (e) {
                if (!this.camPos) return;
                this.reshape(), this.updateMatrices();
                var t = this;
                this.clearCanvas(), (e.repainter = this), e.validateAttributes();
                var n = e.attributes,
                    r = n.partsFillColor[e.centerOffset],
                    i = n.partsFillColor[e.cornerOffset],
                    s = this.mvMatrix;
                for (var o = 0; o < this.cube3d.centerCount; o++) s.makeIdentity(), e.parts[e.centerOffset + o].transform(s), this.drawObject(e.centerObj, s, r, n.partsPhong[e.centerOffset + o]);
                for (var o = 0; o < e.sideCount; o++) s.makeIdentity(), e.parts[e.sideOffset + o].transform(s), this.drawObject(e.sideObj, s, i, n.partsPhong[e.sideOffset + o]);
                for (var o = 0; o < e.edgeCount; o++) s.makeIdentity(), this.cube3d.parts[e.edgeOffset + o].transform(s), this.drawObject(e.edgeObj, s, i, n.partsPhong[this.cube3d.edgeOffset + o]);
                for (var o = 0; o < e.cornerCount; o++) s.makeIdentity(), this.cube3d.parts[e.cornerOffset + o].transform(s), this.drawObject(e.cornerObj, s, i, n.partsPhong[this.cube3d.cornerOffset + o], this.forceColorUpdate);
                this.flushCanvas();
                for (var o = 0; o < e.sideCount; o++) {
                    s.makeIdentity(), e.parts[e.sideOffset + o].transform(s);
                    var u = e.getStickerIndexForPartIndex(e.sideOffset + o, 0);
                    this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u]);
                }
                for (var o = 0; o < e.edgeCount; o++) {
                    s.makeIdentity(), this.cube3d.parts[e.edgeOffset + o].transform(s);
                    var u = e.getStickerIndexForPartIndex(e.edgeOffset + o, 0);
                    this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u]),
                        (u = e.getStickerIndexForPartIndex(e.edgeOffset + o, 1)),
                        this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u]);
                }
                for (var o = 0; o < e.cornerCount; o++) {
                    s.makeIdentity(), this.cube3d.parts[e.cornerOffset + o].transform(s);
                    var u = e.getStickerIndexForPartIndex(e.cornerOffset + o, 1);
                    this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u], this.forceColorUpdate),
                        (u = e.getStickerIndexForPartIndex(e.cornerOffset + o, 0)),
                        this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u], this.forceColorUpdate),
                        (u = e.getStickerIndexForPartIndex(e.cornerOffset + o, 2)),
                        this.drawObject(e.stickerObjs[u], s, n.stickersFillColor[u], n.stickersPhong[u], this.forceColorUpdate);
                }
                this.flushCanvas(), (this.forceColorUpdate = !1);
            }),
            (Cube3DCanvas.prototype.reset = function () {
                (this.currentAngle = 0), (this.xRot = this.cube3d.attributes.xRot), (this.yRot = this.cube3d.attributes.yRot), this.rotationMatrix.makeIdentity(), (this.smoothRotationFunction = null), (this.moves = []);
                var e = this,
                    t = function () {
                        e.cube.cancel = !0;
                        if (e.cube3d.isTwisting) {
                            e.repaint(t);
                            return;
                        }
                        e.cube.reset(), e.clearUndoRedo(), (e.cube.cancel = !1);
                    };
                this.repaint(t);
                return;
            }),
            (Cube3DCanvas.prototype.pushMove = function (e) {
                this.moves.push(e), this.redoIndex < this.undoList.length && (this.undoList = this.undoList.splice(0, this.redoIndex)), this.undoList.push(e), (this.redoIndex = this.undoList.length);
            }),
            (Cube3DCanvas.prototype.undo = function () {
                if (this.redoIndex > 0) {
                    var e = this.undoList[--this.redoIndex];
                    e.applyInverseTo(this.cube), this.cube.isSolved() && this.wobble();
                }
            }),
            (Cube3DCanvas.prototype.redo = function () {
                if (this.redoIndex < this.undoList.length) {
                    var e = this.undoList[this.redoIndex++];
                    e.applyTo(this.cube), this.cube.isSolved() && this.wobble();
                }
            }),
            (Cube3DCanvas.prototype.clearUndoRedo = function () {
                (this.undoList = []), (this.redoIndex = 0);
            }),
            (Cube3DCanvas.prototype.play = function () {
                this.cube.isSolved() ? this.scramble() : this.solve();
            }),
            (Cube3DCanvas.prototype.solveStep = function () {
                var e = new Object();
                return this.cube.lock(e) ? (this.cube.unlock(e), this.doSolveStep()) : !1;
            }),
            (Cube3DCanvas.prototype.doSolveStep = function () {
                if (this.cube.isSolved()) return (this.moves = []), !0;
                if (this.moves.length == 0) return this.reset(), !0;
                var e = this.moves.pop();
                return e.applyInverseTo(this.cube), this.cube.isSolved() ? ((this.moves = []), this.wobble(), !0) : !1;
            }),
            (Cube3DCanvas.prototype.solve = function () {
                var e = this,
                    t = new Object(),
                    n = function () {
                        if (!e.cube.lock(t)) {
                            e.repaint(n);
                            return;
                        }
                        if (e.cube3d.isTwisting) {
                            e.repaint(n);
                            return;
                        }
                        e.cube3d.attributes.twistDuration = e.cube3d.attributes.scrambleTwistDuration;
                        if (!e.cube.cancel && !e.doSolveStep()) {
                            e.repaint(n);
                            return;
                        }
                        (e.cube3d.attributes.twistDuration = e.cube3d.attributes.userTwistDuration), e.clearUndoRedo(), e.cube.unlock(t);
                    };
                this.repaint(n);
            }),
            (Cube3DCanvas.prototype.scramble = function (e, t) {
                e == null && (e = 16), t == null && (t = !0);
                var n = this;
                this.clearUndoRedo();
                var r = i.newScriptParser();
                r.layerCount = this.cube3d.cube.layerCount;
                var s = r.createRandomScript(e);
                this.moves = this.moves.concat(s);
                if (!t) {
                    var o = function () {
                        n.cube.cancel = !0;
                        if (n.cube3d.isTwisting) {
                            n.repaint(o);
                            return;
                        }
                        for (var e = 0; e < s.length; e++) s[e].applyTo(n.cube);
                        n.cube.cancel = !1;
                    };
                    this.repaint(o);
                    return;
                }
                var u = 0,
                    a = new Object(),
                    o = function () {
                        if (!n.cube.lock(a)) {
                            n.repaint(o);
                            return;
                        }
                        if (n.cube3d.isTwisting) {
                            n.repaint(o);
                            return;
                        }
                        u == 0 && (n.cube3d.attributes.twistDuration = n.cube3d.attributes.scrambleTwistDuration),
                            n.cube.cancel && (u = s.length),
                            u < s.length ? (s[u].applyTo(n.cube), u++, n.repaint(o)) : ((n.cube3d.attributes.twistDuration = n.cube3d.attributes.userTwistDuration), n.cube.unlock(a));
                    };
                this.repaint(o);
            }),
            (Cube3DCanvas.prototype.setAutorotate = function (e) {
                if (e != this.autorotate) {
                    this.autorotate = e;
                    if (e) {
                        var t = this,
                            n = new Date().getTime(),
                            r = 20,
                            i = n,
                            s = this.currentAngle;
                        (this.autorotateFunction = function () {
                            t.autorotate && t.repaint(t.autorotateFunction);
                            var e = new Date().getTime(),
                                i = e - n;
                            t.currentAngle = (s + (i * r) / 1e3) % 360;
                        }),
                            this.repaint(this.autorotateFunction);
                    }
                }
            }),
            (Cube3DCanvas.prototype.rotate = function (e, t) {
                var n = new J3DIMatrix4();
                n.rotate(t, 0, 1, 0), n.rotate(e, 1, 0, 0), n.multiply(this.rotationMatrix), this.rotationMatrix.load(n), this.repaint();
            }),
            (Cube3DCanvas.prototype.wobble = function (e, t) {
                e == null && (e = 0.3), t == null && (t = 500);
                var n = this,
                    r = new Date().getTime(),
                    i = function () {
                        var s = new Date().getTime(),
                            o = s - r,
                            u = o / t;
                        u < 1 ? (n.repaint(i), (n.cube3d.attributes.scaleFactor = 1 + e * Math.pow(1 - Math.pow(u * 2 - 1, 2), 4))) : (n.cube3d.attributes.scaleFactor = 1);
                    };
                this.repaint(i);
            }),
            (Cube3DCanvas.prototype.explode = function (e, t) {
                e == null && (e = 2), t == null && (t = 2e3);
                var n = this,
                    r = new Date().getTime(),
                    i = function () {
                        var s = new Date().getTime(),
                            o = s - r,
                            u = o / t;
                        u < 1
                            ? (n.repaint(i), (n.cube3d.attributes.explosionFactor = e * Math.pow(1 - Math.pow(u * 2 - 1, 2), 4)), n.cube3d.updateExplosionFactor())
                            : ((n.cube3d.attributes.explosionFactor = 0), n.cube3d.updateExplosionFactor());
                    };
                this.repaint(i);
            }),
            (Cube3DCanvas.prototype.stateChanged = function (e) {
                this.repaint();
            }),
            (Cube3DCanvas.prototype.getCubeAttributes = function () {
                return this.cube3d.attributes;
            }),
            (Cube3DCanvas.prototype.setCubeAttributes = function (e) {
                (this.cube3d.attributes = e), (this.forceColorUpdate = !0);
                var t = this.gl;
                t.clearColor(e.backgroundColor[0] / 255, e.backgroundColor[1] / 255, e.backgroundColor[2] / 255, e.backgroundColor[3] / 255);
            }),
            (Cube3DCanvas.prototype.mouseIntersectionTest = function (e) {
                var t = this.canvas.getBoundingClientRect(),
                    n = new J3DIVector3(e.clientX - t.left, e.clientY - t.top, 0),
                    r = new J3DIVector3(((n[0] - this.width / 2) / this.width) * 2, ((n[1] - this.height / 2) / -this.height) * 2, 0),
                    i = new J3DIVector3(r);
                i.multVecMatrix(this.rasterToCameraMatrix);
                var s = new J3DIMatrix4(this.world.matrix);
                s.multiply(this.cube3d.matrix), s.invert();
                var o = new J3DIVector3(i);
                o.multVecMatrix(s);
                var u = { point: new J3DIVector3(), dir: new J3DIVector3() };
                u.point.load(this.camPos), u.point.multVecMatrix(s), u.dir.load(o), u.dir.subtract(u.point), u.dir.normalize();
                var a = this.cube3d.intersect(u);
                return a;
            }),
            (Cube3DHandler = function (e) {
                (this.canvas = e), (this.mouseDownX = undefined), (this.mouseDownY = undefined), (this.mousePrevX = undefined), (this.mousePrevY = undefined), (this.mousePrevTimestamp = undefined);
            }),
            (Cube3DHandler.prototype = e.newAbstractHandler(null)),
            (Cube3DHandler.prototype.onTouchStart = function (e) {
                e.touches.length == 1 ? (e.preventDefault(), (e.clientX = e.touches[0].clientX), (e.clientY = e.touches[0].clientY), this.onMouseDown(e)) : (this.isMouseDrag = !1);
            }),
            (Cube3DHandler.prototype.onTouchEnd = function (e) {
                (e.clientX = this.mousePrevX), (e.clientY = this.mousePrevY), this.onMouseUp(e);
            }),
            (Cube3DHandler.prototype.onTouchMove = function (e) {
                (e.clientX = e.touches[0].clientX), (e.clientY = e.touches[0].clientY), this.onMouseMove(e);
            }),
            (Cube3DHandler.prototype.onMouseDown = function (e) {
                (this.mouseDownX = e.clientX), (this.mouseDownY = e.clientY), (this.mousePrevX = e.clientX), (this.mousePrevY = e.clientY), (this.mousePrevTimeStamp = e.timeStamp), (this.isMouseDrag = !0);
                var t = this.canvas.mouseIntersectionTest(e);
                (this.mouseDownIsect = t), (this.isCubeSwipe = t != null);
            }),
            (Cube3DHandler.prototype.onMouseMove = function (e) {
                if (this.isMouseDrag) {
                    var t = e.clientX,
                        n = e.clientY,
                        r = this.mousePrevY - n,
                        s = this.mousePrevX - t,
                        o = r * (360 / this.canvas.width),
                        u = s * (360 / this.canvas.height),
                        a = (e.timeStamp - this.mousePrevTimeStamp) / 1e3;
                    if (this.isCubeSwipe) {
                        var f = this.canvas.cube3d,
                            l = r * r + s * s;
                        if (!f.isTwisting && l > 16) {
                            var c = this.canvas.mouseIntersectionTest(e);
                            if (c != null && c.face == this.mouseDownIsect.face) {
                                var h = Math.floor(c.uv[0] * f.cube.layerCount),
                                    p = Math.floor(c.uv[1] * f.cube.layerCount),
                                    d = c.uv[0] - this.mouseDownIsect.uv[0],
                                    v = c.uv[1] - this.mouseDownIsect.uv[1],
                                    m = (Math.atan2(v, d) * 180) / Math.PI + 180,
                                    g = Math.round(m / 90) % 4,
                                    y = c.face,
                                    b = f.boxSwipeToAxisMap[y][g],
                                    w = f.boxSwipeToLayerMap[y][h][p][g],
                                    E = f.boxSwipeToAngleMap[y][g];
                                if (e.shiftKey || e.metaKey) E = 2 * E;
                                var S = i.newTwistNode(b, w, E);
                                this.canvas.pushMove(S), S.applyTo(this.canvas.cube), this.canvas.cube.isSolved() && this.canvas.wobble(), (this.isCubeSwipe = !1), (this.isMouseDrag = !1);
                            }
                        }
                    } else {
                        var x = new J3DIMatrix4();
                        x.rotate(u, 0, 1, 0), x.rotate(o, 1, 0, 0);
                        var p = x.loghat().divide(Math.max(0.1, a));
                        x.multiply(this.canvas.rotationMatrix), this.canvas.rotationMatrix.load(x);
                        var T = this,
                            N = new Date().getTime(),
                            C = 1,
                            k = function () {
                                if (T.canvas.smoothRotationFunction != k) return;
                                var e = new Date().getTime(),
                                    t = (e - N) / 1e3;
                                if (Math.abs(p.norm()) < 0.1) T.canvas.smoothRotationFunction = null;
                                else {
                                    var n = new J3DIVector3(p).multiply(t).exphat();
                                    n.multiply(T.canvas.rotationMatrix), T.canvas.rotationMatrix.load(n);
                                    var r = new J3DIVector3(p);
                                    t * C < 1 ? p.subtract(r.multiply(t * C)) : p.load(0, 0, 0), T.canvas.repaint(k);
                                }
                                N = e;
                            };
                        (this.canvas.smoothRotationFunction = k), this.canvas.repaint(k);
                    }
                    (this.mousePrevX = e.clientX), (this.mousePrevY = e.clientY), (this.mousePrevTimeStamp = e.timeStamp);
                }
            }),
            (Cube3DHandler.prototype.onMouseOut = function (e) {
                this.isMouseDrag = !1;
            }),
            (Cube3DHandler.prototype.onMouseUp = function (e) {
                (this.isMouseDrag = !1), (this.isCubeSwipe = !1);
                if (this.mouseDownX != e.clientX || this.mouseDownY != e.clientY) return;
                var t = this.canvas.cube3d;
                if (t != null && t.isTwisting) return;
                var n = this.canvas.mouseIntersectionTest(e);
                if (n != null) {
                    if (e.altKey || e.ctrlKey) n.angle *= -1;
                    if (e.shiftKey || e.metaKey) n.angle *= 2;
                    var r = i.newTwistNode(n.axis, n.layerMask, n.angle);
                    this.canvas.pushMove(r), r.applyTo(this.canvas.cube), this.canvas.cube.isSolved() && this.canvas.wobble();
                }
                (this.mousePrevX = undefined), (this.mousePrevY = undefined), this.canvas.repaint();
            }),
            {
                newCube3DCanvas: function () {
                    return new Cube3DCanvas();
                },
                newCube3DHandler: function (e) {
                    return new Cube3DHandler(e);
                },
            }
        );
    }),
    define("PreloadWebglShaders", ["J3DI"], function (e) {
        return (
            e.setFileData(
                "lib/shaders/texture.vshader",
                "/*\n * @(#)texture.vshader  1.1  2012-07-15\n *\n * Copyright (c) 2011-2012 Werner Randelshofer, Immensee, Switzerland.\n * All rights reserved.\n *\n * You may not use, copy or modify this file, except in compliance with the\n * license agreement you entered into with Werner Randelshofer.\n * For details see accompanying license terms.\n */\n \n// WebGL Vertex Shader\n#ifdef GL_ES\n    precision mediump float;\n#endif\n\n// World information\n// -----------------\nuniform vec3 camPos;         // camera position in view coordinates\nuniform vec3 lightPos;       // light position in world coordinates\n\n// Model information\n// -----------------\nuniform mat4 mvMatrix;       // model-view matrix\nuniform mat4 mvNormalMatrix; // model-view normal matrix\nuniform mat4 mvpMatrix;      // model-view-perspective matrix\nuniform vec4 mPhong;         // vertex ambient, diffuse, specular, shininess\n\n// Vertex information\n// ------------------\nattribute vec4 vPos;         // vertex position in model coordinates\nattribute vec3 vNormal;      // vertex normal in model coordinates\nattribute vec4 vColor;       // vertex color\nattribute vec2 vTexture;     // vertex texture uv coordinates\n\n// Fragment information\n// ------------------\nvarying vec4 fPos;           // fragment position in view coordinates\nvarying vec4 fColor;         // fragment color\nvarying vec4 fNormal;        // fragment normal in view coordinates\nvarying vec2 fTexture;       // fragment texture cooordinates\n       \nvoid main() {\n fPos = mvMatrix * vPos;\n fNormal = mvNormalMatrix * vec4(vNormal, 1);\n fColor=vColor/255.0;\n gl_Position = mvpMatrix * vPos;\n fTexture=vTexture;\n}\n"
            ),
            e.setFileData(
                "lib/shaders/texture.fshader",
                "/*\n * @(#)texture.fshader  1.1  2012-07-15\n *\n * Copyright (c) 2011-2012 Werner Randelshofer, Immensee, Switzerland.\n * All rights reserved.\n *\n * You may not use, copy or modify this file, except in compliance with the\n * license agreement you entered into with Werner Randelshofer.\n * For details see accompanying license terms.\n */\n\n// WebGL Fragment Shader\n#ifdef GL_ES\n    precision mediump float;\n#endif\n\n// World information\n// -----------------\nuniform vec3 camPos;         // camera position in world coordinates\nuniform vec3 lightPos;       // light position in world coordinates\n\n// Model information\n// -----------------\nuniform vec4 mPhong;         // vertex ambient, diffuse, specular, shininess\nuniform sampler2D mTexture;  // texture\nuniform bool mHasTexture; \n\n\n// Fragment information\n// --------------------\nvarying vec4 fColor;\nvarying vec4 fNormal;\nvarying vec4 fPos;\nvarying vec2 fTexture;       // fragment texture cooordinates\n\n\nvoid main() {\n  vec3 wi = normalize(lightPos - fPos.xyz); // direction to light source\n  vec3 wo = normalize(camPos - fPos.xyz); // direction to observer\n  vec3 n = normalize(fNormal.xyz);\n  float specular=pow( max(0.0,-dot(reflect(wi, n), wo)), mPhong.w)*mPhong.z;\n  float diffuse=max(0.0,dot(wi,n))*mPhong.y;\n  float ambient=mPhong.x;\n  \n  vec4 color=(mHasTexture)?texture2D(mTexture, fTexture):fColor;\n  \n    gl_FragColor=vec4(color.rgb*(diffuse+ambient)+specular*vec3(1,1,1), color.a);\n \n//    gl_FragColor=vec4(n.x,n.y,n.z, color.a);\n}\n \n "
            ),
            {}
        );
    }),
    define("WebglCube3DCanvas", ["Cube3DCanvas", "Node3D", "J3DI", "PreloadWebglShaders"], function (e, t, n, r) {
        return (
            (WebGLCube3DCanvas = function () {
                this.initWebGLCube3DCanvas();
            }),
            (WebGLCube3DCanvas.prototype = e.newCube3DCanvas()),
            (WebGLCube3DCanvas.prototype.initWebGLCube3DCanvas = function () {
                this.initCube3DCanvas(), (this.gl = null);
            }),
            (WebGLCube3DCanvas.prototype.openCanvas = function () {
                var e = this,
                    t = this.canvas.parentNode;
                return (
                    (this.gl = n.initWebGL(
                        this.canvas,
                        ["lib/shaders/texture.vshader"],
                        ["lib/shaders/texture.fshader"],
                        ["vPos", "vNormal", "vColor", "vTexture"],
                        ["camPos", "lightPos", "mvMatrix", "mvNormalMatrix", "mvpMatrix", "mPhong", "mTexture", "mHasTexture"],
                        [0, 0, 0, 0],
                        1e4,
                        { antialias: !0 },
                        function (t) {
                            (e.gl = t), e.checkGLError("initWebGLCallback"), e.checkGLError("beforeInitScene");
                            var t = e.gl,
                                n = t.programs[0];
                            t.useProgram(n), e.initScene();
                            var r = e.cube3d.attributes;
                            t.clearColor(r.backgroundColor[0], r.backgroundColor[1], r.backgroundColor[2], r.backgroundColor[3]), e.checkGLError("afterInitScene"), e.initCallback != null && e.initCallback(e), e.draw();
                        },
                        function (t) {
                            e.gl = null;
                        }
                    )),
                    this.gl != null
                );
            }),
            (WebGLCube3DCanvas.prototype.closeCanvas = function () {}),
            (WebGLCube3DCanvas.prototype.reshape = function () {
                var e = this.gl,
                    t = this.canvas;
                if (t.clientWidth == this.width && t.clientHeight == this.height) return;
                (t.width = t.clientWidth), (t.height = t.clientHeight), (this.width = t.width), (this.height = t.height), e.viewport(0, 0, this.width, this.height), this.checkGLError("reshape");
            }),
            (WebGLCube3DCanvas.prototype.clearCanvas = function () {
                var e = this.gl;
                e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                    this.checkGLError("draw gl.clear"),
                    e.enable(e.BLEND),
                    e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA),
                    e.enable(e.CULL_FACE),
                    e.cullFace(e.BACK),
                    this.checkGLError("draw gl.cullFace");
                var t = e.programs[0];
                e.useProgram(t),
                    this.checkGLError("draw useProgram"),
                    e.uniform3f(t.uniforms.camPos, this.camPos[0], this.camPos[1], this.camPos[2]),
                    this.checkGLError("draw camPos"),
                    e.uniform3f(t.uniforms.lightPos, this.lightPos[0], this.lightPos[1], this.lightPos[2]),
                    this.checkGLError("draw lightPos");
            }),
            (WebGLCube3DCanvas.prototype.flushCanvas = function () {
                var e = this.gl;
                e.flush();
            }),
            (WebGLCube3DCanvas.prototype.drawObject = function (e, t, n, r, i) {
                if (e == null) return;
                if (!e.loaded) return;
                var s = this.gl,
                    o = s.programs[0];
                e.bindGL(s);
                if (e.textureScale != null) {
                    var u = new Array(e.textureArray.length);
                    for (var a = 0; a < u.length; a += 2) (u[a] = (e.textureArray[a] + e.textureOffsetX) * e.textureScale), (u[a + 1] = (e.textureArray[a + 1] + e.textureOffsetY) * e.textureScale);
                    s.bindBuffer(s.ARRAY_BUFFER, e.textureBuffer), s.bufferData(s.ARRAY_BUFFER, new Float32Array(u), s.STATIC_DRAW), (e.textureScale = null);
                }
                if (e.colorBuffer == null || i) {
                    var f = Array(e.numIndices * 4);
                    for (a = 0; a < e.numIndices; a++)
                        n == null
                            ? ((f[a * 4] = Math.random() * 255), (f[a * 4 + 1] = Math.random() * 255), (f[a * 4 + 2] = Math.random() * 255), (f[a * 4 + 3] = 255))
                            : ((f[a * 4] = n[0]), (f[a * 4 + 1] = n[1]), (f[a * 4 + 2] = n[2]), (f[a * 4 + 3] = n[3]), (f[a * 4 + 3] = 255));
                    (f = new Float32Array(f)), e.colorBuffer == null && (e.colorBuffer = s.createBuffer()), s.bindBuffer(s.ARRAY_BUFFER, e.colorBuffer), s.bufferData(s.ARRAY_BUFFER, f, s.STATIC_DRAW);
                }
                this.checkGLError("virtualrubik.js::drawObject.before mPhong"),
                    s.uniform4f(o.uniforms.mPhong, r[0], r[1], r[2], r[3]),
                    this.checkGLError("mPhong"),
                    s.uniformMatrix4fv(o.uniforms.mvMatrix, !1, t.getAsFloat32Array()),
                    this.checkGLError("mvMatrix"),
                    this.mvpMatrix.load(this.perspectiveMatrix),
                    this.mvpMatrix.multiply(t),
                    s.uniformMatrix4fv(o.uniforms.mvpMatrix, !1, this.mvpMatrix.getAsFloat32Array()),
                    this.checkGLError("mvpMatrix"),
                    this.mvNormalMatrix.load(t),
                    this.mvNormalMatrix.invert(),
                    this.mvNormalMatrix.transpose(),
                    s.uniformMatrix4fv(o.uniforms.mvNormalMatrix, !1, this.mvNormalMatrix.getAsFloat32Array()),
                    this.checkGLError("mvNormalMatrix");
                var o = s.programs[0];
                this.stickersTexture != null && o.uniforms.mTexture && (s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this.stickersTexture), s.uniform1i(o.uniforms.mTexture, 0), this.checkGLError("mTexture")),
                    o.uniforms.mHasTexture && (s.uniform1i(o.uniforms.mHasTexture, e.hasTexture ? 1 : 0), this.checkGLError("drawObject mHasTexture")),
                    o.attribs.vPos >= 0 && (s.bindBuffer(s.ARRAY_BUFFER, e.vertexBuffer), s.enableVertexAttribArray(o.attribs.vPos), s.vertexAttribPointer(o.attribs.vPos, 3, s.FLOAT, !1, 0, 0), this.checkGLError("drawObject vPos")),
                    o.attribs.vNormal >= 0 &&
                        (s.bindBuffer(s.ARRAY_BUFFER, e.normalBuffer), s.enableVertexAttribArray(o.attribs.vNormal), s.vertexAttribPointer(o.attribs.vNormal, 3, s.FLOAT, !1, 0, 0), this.checkGLError("drawObject vNormal")),
                    o.attribs.vColor >= 0 && (s.bindBuffer(s.ARRAY_BUFFER, e.colorBuffer), s.enableVertexAttribArray(o.attribs.vColor), s.vertexAttribPointer(o.attribs.vColor, 4, s.FLOAT, !1, 0, 0), this.checkGLError("drawObject vColor")),
                    o.attribs.vTexture >= 0 &&
                        (s.bindBuffer(s.ARRAY_BUFFER, e.textureBuffer), s.enableVertexAttribArray(o.attribs.vTexture), s.vertexAttribPointer(o.attribs.vTexture, 2, s.FLOAT, !1, 0, 0), this.checkGLError("drawObject vTexture")),
                    s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.indexBuffer),
                    s.drawElements(s.TRIANGLES, e.numIndices, s.UNSIGNED_SHORT, 0),
                    this.checkGLError("drawObject.drawElements vshader=" + o.vshaderId + " fshader=" + o.fshaderId);
            }),
            (WebGLCube3DCanvas.prototype.checkGLError = function (e) {
                if (this.checkForErrors) {
                    var t = this.gl,
                        n = t.getError();
                    if (n != t.NO_ERROR) {
                        var r = "GL Error: " + n + (e == null ? "" : " " + e);
                        t.console.log(r), (t.hasError = !0);
                    }
                }
            }),
            (WebGLCube3DCanvas.prototype.clearGLError = function (e) {
                var t = this.gl,
                    n = t.getError();
                t.hasError = !1;
            }),
            {
                newWebGLCube3DCanvas: function () {
                    return new WebGLCube3DCanvas();
                },
            }
        );
    }),
    define("TwoDCube3DCanvas", ["Cube3DCanvas", "Node3D", "J3DI"], function (e, t, n) {
        return (
            (TwoDCube3DCanvas = function () {
                this.initTwoDCube3DCanvas();
            }),
            (TwoDCube3DCanvas.prototype = e.newCube3DCanvas()),
            (TwoDCube3DCanvas.prototype.initTwoDCube3DCanvas = function () {
                this.initCube3DCanvas(), (this.g = null), (this.useFullModel = !1);
            }),
            (TwoDCube3DCanvas.prototype.openCanvas = function () {
                return (
                    (this.g = this.canvas.getContext("2d")),
                    this.g == null
                        ? !1
                        : ((this.g.imageSmoothingEnabled = !1),
                          (this.g.mozImageSmoothingEnabled = !1),
                          (this.g.webkitImageSmoothingEnabled = !1),
                          (this.deferredFaceCount = 0),
                          (this.deferredFaces = []),
                          (this.mvVertexArray = new J3DIVertexArray()),
                          (this.mvpVertexArray = new J3DIVertexArray()),
                          this.initScene(),
                          this.initCallback != null && this.initCallback(this),
                          this.draw(),
                          !0)
                );
            }),
            (TwoDCube3DCanvas.prototype.closeCanvas = function () {}),
            (TwoDCube3DCanvas.prototype.reshape = function () {
                var e = this.canvas;
                if (e.clientWidth == this.width && e.clientHeight == this.height) return;
                (e.width = e.clientWidth),
                    (e.height = e.clientHeight),
                    (this.width = e.width),
                    (this.height = e.height),
                    (this.viewportMatrix = new J3DIMatrix4()),
                    this.viewportMatrix.scale(this.canvas.width * 0.5, this.canvas.height * 0.5),
                    this.viewportMatrix.translate(1, 1),
                    this.viewportMatrix.scale(1, -1);
            }),
            (TwoDCube3DCanvas.prototype.clearCanvas = function () {
                var e = this.g;
                e.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }),
            (TwoDCube3DCanvas.prototype.flushCanvas = function () {
                var e = this.g,
                    t = this.deferredFaces.splice(0, this.deferredFaceCount);
                t.sort(function (e, t) {
                    return t.depth - e.depth;
                });
                for (var n = 0; n < t.length; n++) t[n].draw(e);
                this.deferredFaceCount = 0;
            }),
            (TwoDCube3DCanvas.prototype.drawObject = function (e, t, n, r, i) {
                this.drawObjectCanvas2D(e, t, n, r, i);
            }),
            {
                newTwoDCube3DCanvas: function () {
                    return new TwoDCube3DCanvas();
                },
            }
        );
    }),
    define("VirtualCubeMain", ["WebglCube3DCanvas", "TwoDCube3DCanvas"], function (e, t) {
        function r(e) {
            if (document.body == null) {
                var t = function () {
                    try {
                        window.removeEventListener("load", t, !1);
                    } catch (n) {
                        window.detachEvent("onload", t, !1);
                    }
                    r(e);
                };
                try {
                    window.addEventListener("load", t, !1);
                } catch (s) {
                    window.attachEvent("onload", t, !1);
                }
                return;
            }
            var o = "console" in window ? window.console : { log: function () {} };
            if (e == null) {
                try {
                    var u = document.getElementsByClassName("virtualcube");
                    if (u.length == 0) {
                        o.log('Error: virtualcube.js no canvas or div element with class name "virtualcube" found.');
                        return;
                    }
                } catch (s) {
                    return;
                }
                for (i = 0; i < u.length; i++) {
                    var a = u[i];
                    r(a);
                }
            } else {
                var f = null;
                if (e.tagName == "CANVAS") f = e;
                else {
                    if (e.tagName != "DIV") {
                        o.log("Error: virtualcube.js element " + e + " is not a canvas or a div. tagName=" + e.tagName);
                        return;
                    }
                    while (e.lastChild) e.removeChild(e.lastChild);
                    var l = "virtualcube_" + n++;
                    (f = document.createElement("canvas")),
                        f.setAttribute("class", "cube-canvas"),
                        f.setAttribute("id", l),
                        e.hasAttribute("kind") && f.setAttribute("kind", e.getAttribute("kind")),
                        e.hasAttribute("stickersImage") && f.setAttribute("stickersImage", e.getAttribute("stickersImage")),
                        f.setAttribute("debug", e.getAttribute("debug")),
                        f.setAttribute("width", "220"),
                        f.setAttribute("height", "220"),
                        e.appendChild(f);
                    var c = document.createElement("div");
                    c.setAttribute("class", "button-toolbar"), e.appendChild(c);
                    var h;
                    (h = document.createElement("button")),
                        h.setAttribute("type", "button"),
                        h.setAttribute("class", "reset-button"),
                        h.setAttribute("onclick", "document.getElementById('" + l + "').virtualcube.reset();"),
                        h.appendChild(document.createTextNode("Reset")),
                        c.appendChild(h),
                        (h = document.createElement("button")),
                        h.setAttribute("type", "button"),
                        h.setAttribute("class", "undo-button"),
                        h.setAttribute("onclick", "document.getElementById('" + l + "').virtualcube.undo();"),
                        h.appendChild(document.createTextNode("Undo")),
                        c.appendChild(h),
                        (h = document.createElement("button")),
                        h.setAttribute("type", "button"),
                        h.setAttribute("class", "redo-button"),
                        h.setAttribute("onclick", "document.getElementById('" + l + "').virtualcube.redo();"),
                        h.appendChild(document.createTextNode("Redo")),
                        c.appendChild(h),
                        (h = document.createElement("button")),
                        h.setAttribute("type", "button"),
                        h.setAttribute("class", "scramble-button"),
                        h.setAttribute("onclick", "document.getElementById('" + l + "').virtualcube.scramble();"),
                        h.appendChild(document.createTextNode("Scramble")),
                        c.appendChild(h);
                }
                var p = new VirtualCube(f);
                p.init(), (f.virtualcube = p);
            }
        }
        var n = 0;
        return (
            (VirtualCube = function (e) {
                this.canvas = e;
            }),
            (VirtualCube.prototype.init = function () {
                this.canvas3d = e.newWebGLCube3DCanvas();
                var n = this.canvas3d.setCanvas(this.canvas);
                n || ((this.canvas3d = t.newTwoDCube3DCanvas()), (n = this.canvas3d.setCanvas(this.canvas)));
            }),
            (VirtualCube.prototype.reset = function () {
                this.canvas3d.reset();
            }),
            (VirtualCube.prototype.scramble = function (e, t) {
                this.canvas3d.scramble(e, t);
            }),
            (VirtualCube.prototype.undo = function () {
                this.canvas3d.undo();
            }),
            (VirtualCube.prototype.redo = function () {
                this.canvas3d.redo();
            }),
            (VirtualCube.prototype.play = function () {
                this.canvas3d.play();
            }),
            (VirtualCube.prototype.solveStep = function () {
                this.canvas3d.solveStep();
            }),
            (VirtualCube.prototype.wobble = function () {
                this.canvas3d.wobble();
            }),
            (VirtualCube.prototype.explode = function () {
                this.canvas3d.explode();
            }),
            (VirtualCube.prototype.setAutorotate = function (e) {
                this.canvas3d.setAutorotate(e);
            }),
            { attachVirtualCube: r }
        );
    });
