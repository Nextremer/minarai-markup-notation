!function (t, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports["minarai-markup-notation"] = n() : t["minarai-markup-notation"] = n()
}(window, function () {
  return function (t) {
    var n = {};

    function r(e) {
      if (n[e]) return n[e].exports;
      var o = n[e] = {i: e, l: !1, exports: {}};
      return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = t, r.c = n, r.d = function (t, n, e) {
      r.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: e})
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, n) {
      if (1 & n && (t = r(t)), 8 & n) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (r.r(e), Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function (n) {
        return t[n]
      }.bind(null, o));
      return e
    }, r.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return r.d(n, "a", n), n
    }, r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "", r(r.s = 61)
  }([function (t, n) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, function (t, n, r) {
    var e = r(18)("wks"), o = r(14), i = r(0).Symbol, u = "function" == typeof i;
    (t.exports = function (t) {
      return e[t] || (e[t] = u && i[t] || (u ? i : o)("Symbol." + t))
    }).store = e
  }, function (t, n, r) {
    var e = r(5), o = r(39), i = r(26), u = Object.defineProperty;
    n.f = r(4) ? Object.defineProperty : function (t, n, r) {
      if (e(t), n = i(n, !0), e(r), o) try {
        return u(t, n, r)
      } catch (t) {
      }
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (t[n] = r.value), t
    }
  }, function (t, n) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, function (t, n, r) {
    t.exports = !r(7)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n, r) {
    var e = r(3);
    t.exports = function (t) {
      if (!e(t)) throw TypeError(t + " is not an object!");
      return t
    }
  }, function (t, n, r) {
    var e = r(2), o = r(13);
    t.exports = r(4) ? function (t, n, r) {
      return e.f(t, n, o(1, r))
    } : function (t, n, r) {
      return t[n] = r, t
    }
  }, function (t, n) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, function (t, n, r) {
    var e = r(0), o = r(6), i = r(9), u = r(14)("src"), c = r(63), f = ("" + c).split("toString");
    r(12).inspectSource = function (t) {
      return c.call(t)
    }, (t.exports = function (t, n, r, c) {
      var a = "function" == typeof r;
      a && (i(r, "name") || o(r, "name", n)), t[n] !== r && (a && (i(r, u) || o(r, u, t[n] ? "" + t[n] : f.join(String(n)))), t === e ? t[n] = r : c ? t[n] ? t[n] = r : o(t, n, r) : (delete t[n], o(t, n, r)))
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[u] || c.call(this)
    })
  }, function (t, n) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return r.call(t, n)
    }
  }, function (t, n, r) {
    var e = r(0), o = r(12), i = r(6), u = r(8), c = r(15), f = function (t, n, r) {
      var a, s, l, p, y = t & f.F, h = t & f.G, v = t & f.S, d = t & f.P, b = t & f.B,
        g = h ? e : v ? e[n] || (e[n] = {}) : (e[n] || {}).prototype, m = h ? o : o[n] || (o[n] = {}),
        w = m.prototype || (m.prototype = {});
      for (a in h && (r = n), r) l = ((s = !y && g && void 0 !== g[a]) ? g : r)[a], p = b && s ? c(l, e) : d && "function" == typeof l ? c(Function.call, l) : l, g && u(g, a, l, t & f.U), m[a] != l && i(m, a, p), d && w[a] != l && (w[a] = l)
    };
    e.core = o, f.F = 1, f.G = 2, f.S = 4, f.P = 8, f.B = 16, f.W = 32, f.U = 64, f.R = 128, t.exports = f
  }, function (t, n, r) {
    var e = r(66), o = r(24);
    t.exports = function (t) {
      return e(o(t))
    }
  }, function (t, n) {
    var r = t.exports = {version: "2.6.5"};
    "number" == typeof __e && (__e = r)
  }, function (t, n) {
    t.exports = function (t, n) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
    }
  }, function (t, n) {
    var r = 0, e = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + e).toString(36))
    }
  }, function (t, n, r) {
    var e = r(27);
    t.exports = function (t, n, r) {
      if (e(t), void 0 === n) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(n, r)
          };
        case 2:
          return function (r, e) {
            return t.call(n, r, e)
          };
        case 3:
          return function (r, e, o) {
            return t.call(n, r, e, o)
          }
      }
      return function () {
        return t.apply(n, arguments)
      }
    }
  }, function (t, n) {
    t.exports = {}
  }, function (t, n) {
    t.exports = !1
  }, function (t, n, r) {
    var e = r(12), o = r(0), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, n) {
      return i[t] || (i[t] = void 0 !== n ? n : {})
    })("versions", []).push({
      version: e.version,
      mode: r(17) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
  }, function (t, n, r) {
    var e = r(5), o = r(65), i = r(31), u = r(30)("IE_PROTO"), c = function () {
    }, f = function () {
      var t, n = r(40)("iframe"), e = i.length;
      for (n.style.display = "none", r(69).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), f = t.F; e--;) delete f.prototype[i[e]];
      return f()
    };
    t.exports = Object.create || function (t, n) {
      var r;
      return null !== t ? (c.prototype = e(t), r = new c, c.prototype = null, r[u] = t) : r = f(), void 0 === n ? r : o(r, n)
    }
  }, function (t, n, r) {
    var e = r(41), o = r(31);
    t.exports = Object.keys || function (t) {
      return e(t, o)
    }
  }, function (t, n, r) {
    var e = r(2).f, o = r(9), i = r(1)("toStringTag");
    t.exports = function (t, n, r) {
      t && !o(t = r ? t : t.prototype, i) && e(t, i, {configurable: !0, value: n})
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(62)(!0);
    r(25)(String, "String", function (t) {
      this._t = String(t), this._i = 0
    }, function () {
      var t, n = this._t, r = this._i;
      return r >= n.length ? {value: void 0, done: !0} : (t = e(n, r), this._i += t.length, {value: t, done: !1})
    })
  }, function (t, n) {
    var r = Math.ceil, e = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t)
    }
  }, function (t, n) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(17), o = r(10), i = r(8), u = r(6), c = r(16), f = r(64), a = r(21), s = r(70), l = r(1)("iterator"),
      p = !([].keys && "next" in [].keys()), y = function () {
        return this
      };
    t.exports = function (t, n, r, h, v, d, b) {
      f(r, n, h);
      var g, m, w, _ = function (t) {
          if (!p && t in j) return j[t];
          switch (t) {
            case"keys":
            case"values":
              return function () {
                return new r(this, t)
              }
          }
          return function () {
            return new r(this, t)
          }
        }, x = n + " Iterator", S = "values" == v, O = !1, j = t.prototype, E = j[l] || j["@@iterator"] || v && j[v],
        P = E || _(v), k = v ? S ? _("entries") : P : void 0, T = "Array" == n && j.entries || E;
      if (T && (w = s(T.call(new t))) !== Object.prototype && w.next && (a(w, x, !0), e || "function" == typeof w[l] || u(w, l, y)), S && E && "values" !== E.name && (O = !0, P = function () {
        return E.call(this)
      }), e && !b || !p && !O && j[l] || u(j, l, P), c[n] = P, c[x] = y, v) if (g = {
        values: S ? P : _("values"),
        keys: d ? P : _("keys"),
        entries: k
      }, b) for (m in g) m in j || i(j, m, g[m]); else o(o.P + o.F * (p || O), n, g);
      return g
    }
  }, function (t, n, r) {
    var e = r(3);
    t.exports = function (t, n) {
      if (!e(t)) return t;
      var r, o;
      if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
      if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
      if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
    }
  }, function (t, n) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1)
    }
  }, function (t, n, r) {
    var e = r(23), o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(e(t), 9007199254740991) : 0
    }
  }, function (t, n, r) {
    var e = r(18)("keys"), o = r(14);
    t.exports = function (t) {
      return e[t] || (e[t] = o(t))
    }
  }, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (t, n, r) {
    "use strict";
    r(73);
    var e = r(5), o = r(48), i = r(4), u = /./.toString, c = function (t) {
      r(8)(RegExp.prototype, "toString", t, !0)
    };
    r(7)(function () {
      return "/a/b" != u.call({source: "a", flags: "b"})
    }) ? c(function () {
      var t = e(this);
      return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
    }) : "toString" != u.name && c(function () {
      return u.call(this)
    })
  }, function (t, n, r) {
    r(49)("asyncIterator")
  }, function (t, n, r) {
    "use strict";
    var e = r(0), o = r(9), i = r(4), u = r(10), c = r(8), f = r(35).KEY, a = r(7), s = r(18), l = r(21), p = r(14),
      y = r(1), h = r(50), v = r(49), d = r(74), b = r(75), g = r(5), m = r(3), w = r(11), _ = r(26), x = r(13),
      S = r(19), O = r(76), j = r(53), E = r(2), P = r(20), k = j.f, T = E.f, A = O.f, M = e.Symbol, F = e.JSON,
      R = F && F.stringify, L = y("_hidden"), C = y("toPrimitive"), N = {}.propertyIsEnumerable,
      I = s("symbol-registry"), D = s("symbols"), G = s("op-symbols"), U = Object.prototype, V = "function" == typeof M,
      W = e.QObject, z = !W || !W.prototype || !W.prototype.findChild, B = i && a(function () {
        return 7 != S(T({}, "a", {
          get: function () {
            return T(this, "a", {value: 7}).a
          }
        })).a
      }) ? function (t, n, r) {
        var e = k(U, n);
        e && delete U[n], T(t, n, r), e && t !== U && T(U, n, e)
      } : T, H = function (t) {
        var n = D[t] = S(M.prototype);
        return n._k = t, n
      }, K = V && "symbol" == typeof M.iterator ? function (t) {
        return "symbol" == typeof t
      } : function (t) {
        return t instanceof M
      }, J = function (t, n, r) {
        return t === U && J(G, n, r), g(t), n = _(n, !0), g(r), o(D, n) ? (r.enumerable ? (o(t, L) && t[L][n] && (t[L][n] = !1), r = S(r, {enumerable: x(0, !1)})) : (o(t, L) || T(t, L, x(1, {})), t[L][n] = !0), B(t, n, r)) : T(t, n, r)
      }, q = function (t, n) {
        g(t);
        for (var r, e = d(n = w(n)), o = 0, i = e.length; i > o;) J(t, r = e[o++], n[r]);
        return t
      }, Y = function (t) {
        var n = N.call(this, t = _(t, !0));
        return !(this === U && o(D, t) && !o(G, t)) && (!(n || !o(this, t) || !o(D, t) || o(this, L) && this[L][t]) || n)
      }, Q = function (t, n) {
        if (t = w(t), n = _(n, !0), t !== U || !o(D, n) || o(G, n)) {
          var r = k(t, n);
          return !r || !o(D, n) || o(t, L) && t[L][n] || (r.enumerable = !0), r
        }
      }, $ = function (t) {
        for (var n, r = A(w(t)), e = [], i = 0; r.length > i;) o(D, n = r[i++]) || n == L || n == f || e.push(n);
        return e
      }, X = function (t) {
        for (var n, r = t === U, e = A(r ? G : w(t)), i = [], u = 0; e.length > u;) !o(D, n = e[u++]) || r && !o(U, n) || i.push(D[n]);
        return i
      };
    V || (c((M = function () {
      if (this instanceof M) throw TypeError("Symbol is not a constructor!");
      var t = p(arguments.length > 0 ? arguments[0] : void 0), n = function (r) {
        this === U && n.call(G, r), o(this, L) && o(this[L], t) && (this[L][t] = !1), B(this, t, x(1, r))
      };
      return i && z && B(U, t, {configurable: !0, set: n}), H(t)
    }).prototype, "toString", function () {
      return this._k
    }), j.f = Q, E.f = J, r(52).f = O.f = $, r(36).f = Y, r(51).f = X, i && !r(17) && c(U, "propertyIsEnumerable", Y, !0), h.f = function (t) {
      return H(y(t))
    }), u(u.G + u.W + u.F * !V, {Symbol: M});
    for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt;) y(Z[tt++]);
    for (var nt = P(y.store), rt = 0; nt.length > rt;) v(nt[rt++]);
    u(u.S + u.F * !V, "Symbol", {
      for: function (t) {
        return o(I, t += "") ? I[t] : I[t] = M(t)
      }, keyFor: function (t) {
        if (!K(t)) throw TypeError(t + " is not a symbol!");
        for (var n in I) if (I[n] === t) return n
      }, useSetter: function () {
        z = !0
      }, useSimple: function () {
        z = !1
      }
    }), u(u.S + u.F * !V, "Object", {
      create: function (t, n) {
        return void 0 === n ? S(t) : q(S(t), n)
      },
      defineProperty: J,
      defineProperties: q,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: $,
      getOwnPropertySymbols: X
    }), F && u(u.S + u.F * (!V || a(function () {
      var t = M();
      return "[null]" != R([t]) || "{}" != R({a: t}) || "{}" != R(Object(t))
    })), "JSON", {
      stringify: function (t) {
        for (var n, r, e = [t], o = 1; arguments.length > o;) e.push(arguments[o++]);
        if (r = n = e[1], (m(n) || void 0 !== t) && !K(t)) return b(n) || (n = function (t, n) {
          if ("function" == typeof r && (n = r.call(this, t, n)), !K(n)) return n
        }), e[1] = n, R.apply(F, e)
      }
    }), M.prototype[C] || r(6)(M.prototype, C, M.prototype.valueOf), l(M, "Symbol"), l(Math, "Math", !0), l(e.JSON, "JSON", !0)
  }, function (t, n, r) {
    var e = r(14)("meta"), o = r(3), i = r(9), u = r(2).f, c = 0, f = Object.isExtensible || function () {
      return !0
    }, a = !r(7)(function () {
      return f(Object.preventExtensions({}))
    }), s = function (t) {
      u(t, e, {value: {i: "O" + ++c, w: {}}})
    }, l = t.exports = {
      KEY: e, NEED: !1, fastKey: function (t, n) {
        if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!i(t, e)) {
          if (!f(t)) return "F";
          if (!n) return "E";
          s(t)
        }
        return t[e].i
      }, getWeak: function (t, n) {
        if (!i(t, e)) {
          if (!f(t)) return !0;
          if (!n) return !1;
          s(t)
        }
        return t[e].w
      }, onFreeze: function (t) {
        return a && l.NEED && f(t) && !i(t, e) && s(t), t
      }
    }
  }, function (t, n) {
    n.f = {}.propertyIsEnumerable
  }, function (t, n, r) {
    for (var e = r(54), o = r(20), i = r(8), u = r(0), c = r(6), f = r(16), a = r(1), s = a("iterator"), l = a("toStringTag"), p = f.Array, y = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, h = o(y), v = 0; v < h.length; v++) {
      var d, b = h[v], g = y[b], m = u[b], w = m && m.prototype;
      if (w && (w[s] || c(w, s, p), w[l] || c(w, l, b), f[b] = p, g)) for (d in e) w[d] || i(w, d, e[d], !0)
    }
  }, function (t, n, r) {
    var e = r(10);
    e(e.S, "Object", {setPrototypeOf: r(56).set})
  }, function (t, n, r) {
    t.exports = !r(4) && !r(7)(function () {
      return 7 != Object.defineProperty(r(40)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n, r) {
    var e = r(3), o = r(0).document, i = e(o) && e(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {}
    }
  }, function (t, n, r) {
    var e = r(9), o = r(11), i = r(67)(!1), u = r(30)("IE_PROTO");
    t.exports = function (t, n) {
      var r, c = o(t), f = 0, a = [];
      for (r in c) r != u && e(c, r) && a.push(r);
      for (; n.length > f;) e(c, r = n[f++]) && (~i(a, r) || a.push(r));
      return a
    }
  }, function (t, n, r) {
    var e = r(24);
    t.exports = function (t) {
      return Object(e(t))
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(15), o = r(10), i = r(42), u = r(44), c = r(45), f = r(29), a = r(71), s = r(46);
    o(o.S + o.F * !r(47)(function (t) {
      Array.from(t)
    }), "Array", {
      from: function (t) {
        var n, r, o, l, p = i(t), y = "function" == typeof this ? this : Array, h = arguments.length,
          v = h > 1 ? arguments[1] : void 0, d = void 0 !== v, b = 0, g = s(p);
        if (d && (v = e(v, h > 2 ? arguments[2] : void 0, 2)), null == g || y == Array && c(g)) for (r = new y(n = f(p.length)); n > b; b++) a(r, b, d ? v(p[b], b) : p[b]); else for (l = g.call(p), r = new y; !(o = l.next()).done; b++) a(r, b, d ? u(l, v, [o.value, b], !0) : o.value);
        return r.length = b, r
      }
    })
  }, function (t, n, r) {
    var e = r(5);
    t.exports = function (t, n, r, o) {
      try {
        return o ? n(e(r)[0], r[1]) : n(r)
      } catch (n) {
        var i = t.return;
        throw void 0 !== i && e(i.call(t)), n
      }
    }
  }, function (t, n, r) {
    var e = r(16), o = r(1)("iterator"), i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (e.Array === t || i[o] === t)
    }
  }, function (t, n, r) {
    var e = r(72), o = r(1)("iterator"), i = r(16);
    t.exports = r(12).getIteratorMethod = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || i[e(t)]
    }
  }, function (t, n, r) {
    var e = r(1)("iterator"), o = !1;
    try {
      var i = [7][e]();
      i.return = function () {
        o = !0
      }, Array.from(i, function () {
        throw 2
      })
    } catch (t) {
    }
    t.exports = function (t, n) {
      if (!n && !o) return !1;
      var r = !1;
      try {
        var i = [7], u = i[e]();
        u.next = function () {
          return {done: r = !0}
        }, i[e] = function () {
          return u
        }, t(i)
      } catch (t) {
      }
      return r
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(5);
    t.exports = function () {
      var t = e(this), n = "";
      return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
    }
  }, function (t, n, r) {
    var e = r(0), o = r(12), i = r(17), u = r(50), c = r(2).f;
    t.exports = function (t) {
      var n = o.Symbol || (o.Symbol = i ? {} : e.Symbol || {});
      "_" == t.charAt(0) || t in n || c(n, t, {value: u.f(t)})
    }
  }, function (t, n, r) {
    n.f = r(1)
  }, function (t, n) {
    n.f = Object.getOwnPropertySymbols
  }, function (t, n, r) {
    var e = r(41), o = r(31).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function (t) {
      return e(t, o)
    }
  }, function (t, n, r) {
    var e = r(36), o = r(13), i = r(11), u = r(26), c = r(9), f = r(39), a = Object.getOwnPropertyDescriptor;
    n.f = r(4) ? a : function (t, n) {
      if (t = i(t), n = u(n, !0), f) try {
        return a(t, n)
      } catch (t) {
      }
      if (c(t, n)) return o(!e.f.call(t, n), t[n])
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(77), o = r(55), i = r(16), u = r(11);
    t.exports = r(25)(Array, "Array", function (t, n) {
      this._t = u(t), this._i = 0, this._k = n
    }, function () {
      var t = this._t, n = this._k, r = this._i++;
      return !t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? r : "values" == n ? t[r] : [r, t[r]])
    }, "values"), i.Arguments = i.Array, e("keys"), e("values"), e("entries")
  }, function (t, n) {
    t.exports = function (t, n) {
      return {value: n, done: !!t}
    }
  }, function (t, n, r) {
    var e = r(3), o = r(5), i = function (t, n) {
      if (o(t), !e(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
    };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, e) {
        try {
          (e = r(15)(Function.call, r(53).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
        } catch (t) {
          n = !0
        }
        return function (t, r) {
          return i(t, r), n ? t.__proto__ = r : e(t, r), t
        }
      }({}, !1) : void 0), check: i
    }
  }, function (t, n, r) {
    var e = r(8);
    t.exports = function (t, n, r) {
      for (var o in n) e(t, o, n[o], r);
      return t
    }
  }, function (t, n) {
    t.exports = function (t, n, r, e) {
      if (!(t instanceof n) || void 0 !== e && e in t) throw TypeError(r + ": incorrect invocation!");
      return t
    }
  }, function (t, n, r) {
    var e = r(15), o = r(44), i = r(45), u = r(5), c = r(29), f = r(46), a = {}, s = {};
    (n = t.exports = function (t, n, r, l, p) {
      var y, h, v, d, b = p ? function () {
        return t
      } : f(t), g = e(r, l, n ? 2 : 1), m = 0;
      if ("function" != typeof b) throw TypeError(t + " is not iterable!");
      if (i(b)) {
        for (y = c(t.length); y > m; m++) if ((d = n ? g(u(h = t[m])[0], h[1]) : g(t[m])) === a || d === s) return d
      } else for (v = b.call(t); !(h = v.next()).done;) if ((d = o(v, g, h.value, n)) === a || d === s) return d
    }).BREAK = a, n.RETURN = s
  }, function (t, n, r) {
    var e = r(3);
    t.exports = function (t, n) {
      if (!e(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
      return t
    }
  }, function (t, n, r) {
    t.exports = r(87)
  }, function (t, n, r) {
    var e = r(23), o = r(24);
    t.exports = function (t) {
      return function (n, r) {
        var i, u, c = String(o(n)), f = e(r), a = c.length;
        return f < 0 || f >= a ? t ? "" : void 0 : (i = c.charCodeAt(f)) < 55296 || i > 56319 || f + 1 === a || (u = c.charCodeAt(f + 1)) < 56320 || u > 57343 ? t ? c.charAt(f) : i : t ? c.slice(f, f + 2) : u - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, function (t, n, r) {
    t.exports = r(18)("native-function-to-string", Function.toString)
  }, function (t, n, r) {
    "use strict";
    var e = r(19), o = r(13), i = r(21), u = {};
    r(6)(u, r(1)("iterator"), function () {
      return this
    }), t.exports = function (t, n, r) {
      t.prototype = e(u, {next: o(1, r)}), i(t, n + " Iterator")
    }
  }, function (t, n, r) {
    var e = r(2), o = r(5), i = r(20);
    t.exports = r(4) ? Object.defineProperties : function (t, n) {
      o(t);
      for (var r, u = i(n), c = u.length, f = 0; c > f;) e.f(t, r = u[f++], n[r]);
      return t
    }
  }, function (t, n, r) {
    var e = r(28);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == e(t) ? t.split("") : Object(t)
    }
  }, function (t, n, r) {
    var e = r(11), o = r(29), i = r(68);
    t.exports = function (t) {
      return function (n, r, u) {
        var c, f = e(n), a = o(f.length), s = i(u, a);
        if (t && r != r) {
          for (; a > s;) if ((c = f[s++]) != c) return !0
        } else for (; a > s; s++) if ((t || s in f) && f[s] === r) return t || s || 0;
        return !t && -1
      }
    }
  }, function (t, n, r) {
    var e = r(23), o = Math.max, i = Math.min;
    t.exports = function (t, n) {
      return (t = e(t)) < 0 ? o(t + n, 0) : i(t, n)
    }
  }, function (t, n, r) {
    var e = r(0).document;
    t.exports = e && e.documentElement
  }, function (t, n, r) {
    var e = r(9), o = r(42), i = r(30)("IE_PROTO"), u = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
      return t = o(t), e(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(2), o = r(13);
    t.exports = function (t, n, r) {
      n in t ? e.f(t, n, o(0, r)) : t[n] = r
    }
  }, function (t, n, r) {
    var e = r(28), o = r(1)("toStringTag"), i = "Arguments" == e(function () {
      return arguments
    }());
    t.exports = function (t) {
      var n, r, u;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
        try {
          return t[n]
        } catch (t) {
        }
      }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (u = e(n)) && "function" == typeof n.callee ? "Arguments" : u
    }
  }, function (t, n, r) {
    r(4) && "g" != /./g.flags && r(2).f(RegExp.prototype, "flags", {configurable: !0, get: r(48)})
  }, function (t, n, r) {
    var e = r(20), o = r(51), i = r(36);
    t.exports = function (t) {
      var n = e(t), r = o.f;
      if (r) for (var u, c = r(t), f = i.f, a = 0; c.length > a;) f.call(t, u = c[a++]) && n.push(u);
      return n
    }
  }, function (t, n, r) {
    var e = r(28);
    t.exports = Array.isArray || function (t) {
      return "Array" == e(t)
    }
  }, function (t, n, r) {
    var e = r(11), o = r(52).f, i = {}.toString,
      u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
      return u && "[object Window]" == i.call(t) ? function (t) {
        try {
          return o(t)
        } catch (t) {
          return u.slice()
        }
      }(t) : o(e(t))
    }
  }, function (t, n, r) {
    var e = r(1)("unscopables"), o = Array.prototype;
    null == o[e] && r(6)(o, e, {}), t.exports = function (t) {
      o[e][t] = !0
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(79), o = r(60);
    t.exports = r(81)("Map", function (t) {
      return function () {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    }, {
      get: function (t) {
        var n = e.getEntry(o(this, "Map"), t);
        return n && n.v
      }, set: function (t, n) {
        return e.def(o(this, "Map"), 0 === t ? 0 : t, n)
      }
    }, e, !0)
  }, function (t, n, r) {
    "use strict";
    var e = r(2).f, o = r(19), i = r(57), u = r(15), c = r(58), f = r(59), a = r(25), s = r(55), l = r(80), p = r(4),
      y = r(35).fastKey, h = r(60), v = p ? "_s" : "size", d = function (t, n) {
        var r, e = y(n);
        if ("F" !== e) return t._i[e];
        for (r = t._f; r; r = r.n) if (r.k == n) return r
      };
    t.exports = {
      getConstructor: function (t, n, r, a) {
        var s = t(function (t, e) {
          c(t, s, n, "_i"), t._t = n, t._i = o(null), t._f = void 0, t._l = void 0, t[v] = 0, null != e && f(e, r, t[a], t)
        });
        return i(s.prototype, {
          clear: function () {
            for (var t = h(this, n), r = t._i, e = t._f; e; e = e.n) e.r = !0, e.p && (e.p = e.p.n = void 0), delete r[e.i];
            t._f = t._l = void 0, t[v] = 0
          }, delete: function (t) {
            var r = h(this, n), e = d(r, t);
            if (e) {
              var o = e.n, i = e.p;
              delete r._i[e.i], e.r = !0, i && (i.n = o), o && (o.p = i), r._f == e && (r._f = o), r._l == e && (r._l = i), r[v]--
            }
            return !!e
          }, forEach: function (t) {
            h(this, n);
            for (var r, e = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); r = r ? r.n : this._f;) for (e(r.v, r.k, this); r && r.r;) r = r.p
          }, has: function (t) {
            return !!d(h(this, n), t)
          }
        }), p && e(s.prototype, "size", {
          get: function () {
            return h(this, n)[v]
          }
        }), s
      }, def: function (t, n, r) {
        var e, o, i = d(t, n);
        return i ? i.v = r : (t._l = i = {
          i: o = y(n, !0),
          k: n,
          v: r,
          p: e = t._l,
          n: void 0,
          r: !1
        }, t._f || (t._f = i), e && (e.n = i), t[v]++, "F" !== o && (t._i[o] = i)), t
      }, getEntry: d, setStrong: function (t, n, r) {
        a(t, n, function (t, r) {
          this._t = h(t, n), this._k = r, this._l = void 0
        }, function () {
          for (var t = this._k, n = this._l; n && n.r;) n = n.p;
          return this._t && (this._l = n = n ? n.n : this._t._f) ? s(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (this._t = void 0, s(1))
        }, r ? "entries" : "values", !r, !0), l(n)
      }
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(0), o = r(2), i = r(4), u = r(1)("species");
    t.exports = function (t) {
      var n = e[t];
      i && n && !n[u] && o.f(n, u, {
        configurable: !0, get: function () {
          return this
        }
      })
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(0), o = r(10), i = r(8), u = r(57), c = r(35), f = r(59), a = r(58), s = r(3), l = r(7), p = r(47),
      y = r(21), h = r(82);
    t.exports = function (t, n, r, v, d, b) {
      var g = e[t], m = g, w = d ? "set" : "add", _ = m && m.prototype, x = {}, S = function (t) {
        var n = _[t];
        i(_, t, "delete" == t ? function (t) {
          return !(b && !s(t)) && n.call(this, 0 === t ? 0 : t)
        } : "has" == t ? function (t) {
          return !(b && !s(t)) && n.call(this, 0 === t ? 0 : t)
        } : "get" == t ? function (t) {
          return b && !s(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
        } : "add" == t ? function (t) {
          return n.call(this, 0 === t ? 0 : t), this
        } : function (t, r) {
          return n.call(this, 0 === t ? 0 : t, r), this
        })
      };
      if ("function" == typeof m && (b || _.forEach && !l(function () {
        (new m).entries().next()
      }))) {
        var O = new m, j = O[w](b ? {} : -0, 1) != O, E = l(function () {
          O.has(1)
        }), P = p(function (t) {
          new m(t)
        }), k = !b && l(function () {
          for (var t = new m, n = 5; n--;) t[w](n, n);
          return !t.has(-0)
        });
        P || ((m = n(function (n, r) {
          a(n, m, t);
          var e = h(new g, n, m);
          return null != r && f(r, d, e[w], e), e
        })).prototype = _, _.constructor = m), (E || k) && (S("delete"), S("has"), d && S("get")), (k || j) && S(w), b && _.clear && delete _.clear
      } else m = v.getConstructor(n, t, d, w), u(m.prototype, r), c.NEED = !0;
      return y(m, t), x[t] = m, o(o.G + o.W + o.F * (m != g), x), b || v.setStrong(m, t, d), m
    }
  }, function (t, n, r) {
    var e = r(3), o = r(56).set;
    t.exports = function (t, n, r) {
      var i, u = n.constructor;
      return u !== r && "function" == typeof u && (i = u.prototype) !== r.prototype && e(i) && o && o(t, i), t
    }
  }, function (t, n, r) {
    var e = r(10), o = r(19), i = r(27), u = r(5), c = r(3), f = r(7), a = r(84), s = (r(0).Reflect || {}).construct,
      l = f(function () {
        function t() {
        }

        return !(s(function () {
        }, [], t) instanceof t)
      }), p = !f(function () {
        s(function () {
        })
      });
    e(e.S + e.F * (l || p), "Reflect", {
      construct: function (t, n) {
        i(t), u(n);
        var r = arguments.length < 3 ? t : i(arguments[2]);
        if (p && !l) return s(t, n, r);
        if (t == r) {
          switch (n.length) {
            case 0:
              return new t;
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3])
          }
          var e = [null];
          return e.push.apply(e, n), new (a.apply(t, e))
        }
        var f = r.prototype, y = o(c(f) ? f : Object.prototype), h = Function.apply.call(t, y, n);
        return c(h) ? h : y
      }
    })
  }, function (t, n, r) {
    "use strict";
    var e = r(27), o = r(3), i = r(85), u = [].slice, c = {};
    t.exports = Function.bind || function (t) {
      var n = e(this), r = u.call(arguments, 1), f = function () {
        var e = r.concat(u.call(arguments));
        return this instanceof f ? function (t, n, r) {
          if (!(n in c)) {
            for (var e = [], o = 0; o < n; o++) e[o] = "a[" + o + "]";
            c[n] = Function("F,a", "return new F(" + e.join(",") + ")")
          }
          return c[n](t, r)
        }(n, e.length, e) : i(n, e, t)
      };
      return o(n.prototype) && (f.prototype = n.prototype), f
    }
  }, function (t, n) {
    t.exports = function (t, n, r) {
      var e = void 0 === r;
      switch (n.length) {
        case 0:
          return e ? t() : t.call(r);
        case 1:
          return e ? t(n[0]) : t.call(r, n[0]);
        case 2:
          return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);
        case 3:
          return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);
        case 4:
          return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3])
      }
      return t.apply(r, n)
    }
  }, function (t, n, r) {
    var e = r(2).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
    "name" in o || r(4) && e(o, "name", {
      configurable: !0, get: function () {
        try {
          return ("" + this).match(i)[1]
        } catch (t) {
          return ""
        }
      }
    })
  }, function (t, n, r) {
    "use strict";
    r.r(n);
    r(22), r(43), r(32), r(33), r(34), r(37), r(38), r(54), r(78), r(83);

    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function o(t, n) {
      return !n || "object" !== e(n) && "function" != typeof n ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : n
    }

    function i(t) {
      var n = "function" == typeof Map ? new Map : void 0;
      return (i = function (t) {
        if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
        var r;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== n) {
          if (n.has(t)) return n.get(t);
          n.set(t, e)
        }

        function e() {
          return u(t, arguments, f(this).constructor)
        }

        return e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), c(e, t)
      })(t)
    }

    function u(t, n, r) {
      return (u = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
          })), !0
        } catch (t) {
          return !1
        }
      }() ? Reflect.construct : function (t, n, r) {
        var e = [null];
        e.push.apply(e, n);
        var o = new (Function.bind.apply(t, e));
        return r && c(o, r.prototype), o
      }).apply(null, arguments)
    }

    function c(t, n) {
      return (c = Object.setPrototypeOf || function (t, n) {
        return t.__proto__ = n, t
      })(t, n)
    }

    function f(t) {
      return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    var a = Symbol("lambda"), s = function (t) {
      function n() {
        return function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, n), o(this, f(n).apply(this, arguments))
      }

      return function (t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), n && c(t, n)
      }(n, i(Error)), n
    }();

    function l(t, n) {
      for (var r = 0; r < n.length; r++) {
        var e = n[r];
        e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
      }
    }

    var p = function () {
      function t(n) {
        !function (t, n) {
          if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.buffer = n, this.head = 0
      }

      var n, r, e;
      return n = t, (r = [{
        key: "peek", value: function () {
          return this.head >= this.buffer.length ? null : this.buffer[this.head]
        }
      }, {
        key: "read", value: function () {
          if (this.head >= this.buffer.length) return null;
          var t = this.buffer[this.head];
          return this.head++, t
        }
      }, {
        key: "readTo", value: function (t) {
          for (var n = [], r = this.peek(); null !== r && -1 === t.indexOf(r);) n.push(this.read()), r = this.peek();
          return n.join("")
        }
      }]) && l(n.prototype, r), e && l(n, e), t
    }();

    function y(t) {
      return (y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function h(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var n = 0, r = new Array(t.length); n < t.length; n++) r[n] = t[n];
          return r
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function v(t, n) {
      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function d(t, n) {
      return !n || "object" !== y(n) && "function" != typeof n ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : n
    }

    function b(t) {
      return (b = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function g(t, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), n && m(t, n)
    }

    function m(t, n) {
      return (m = Object.setPrototypeOf || function (t, n) {
        return t.__proto__ = n, t
      })(t, n)
    }

    var w = function (t) {
      function n() {
        return v(this, n), d(this, b(n).apply(this, arguments))
      }

      return g(n, s), n
    }(), _ = function (t) {
      function n() {
        return v(this, n), d(this, b(n).apply(this, arguments))
      }

      return g(n, w), n
    }(), x = function (t) {
      function n() {
        return v(this, n), d(this, b(n).apply(this, arguments))
      }

      return g(n, w), n
    }(), S = function (t) {
      function n() {
        return v(this, n), d(this, b(n).apply(this, arguments))
      }

      return g(n, w), n
    }(), O = function (t) {
      var n = t.readTo("[");
      if (0 === n.length) throw new _;
      if (null === t.read()) throw new x;
      var r = j(t);
      if ("]" !== t.read()) throw new S;
      return [a, n].concat(h(r))
    }, j = function (t) {
      for (var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = [], e = [], o = [], i = function () {
        r.length > 0 && (e.push(r.join("")), r = []), n || e.length > 1 ? o.push(e) : 0 !== e.length && o.push(e[0]), e = []
      }, u = function () {
        n ? r.push(t.peek()) : (t.peek(), i())
      }, c = function (t) {
        t.read(), r.length > 0 && (e.push(r.join("")), r = []);
        var n = t.peek();
        if (null === n || "#" === n) r.push("#"); else if ("." !== n) r.push("#" + t.read()); else {
          t.read();
          var o = O(t);
          "string" == typeof o ? r.push(o) : e.push(o)
        }
      }, f = t.peek(); null !== f;) {
        switch (f) {
          case"#":
            c(t);
            break;
          case";":
            u(), t.read();
            break;
          case"]":
            if (u(), !n) return o;
            t.read();
          default:
            r.push(t.read())
        }
        f = t.peek()
      }
      if (!n) throw new x;
      return i(), o
    }, E = function (t) {
      var n = j(new p(t), !0)[0];
      return 0 === n.length ? [""] : n
    }, P = (r(86), {
      name: "youtube",
      prefix: '<span data-type="video"',
      suffix: "</span>",
      url: "https://www.youtube.com/watch?v="
    });
    var k, T, A = {name: "vimeo", prefix: '<span data-type="video"', suffix: "</span>", url: "https://vimeo.com/"};

    function M(t) {
      return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function F(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var n = 0, r = new Array(t.length); n < t.length; n++) r[n] = t[n];
          return r
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }

    function R(t, n, r) {
      return n in t ? Object.defineProperty(t, n, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = r, t
    }

    function L(t, n) {
      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function C(t, n) {
      return !n || "object" !== M(n) && "function" != typeof n ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : n
    }

    function N(t) {
      return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function I(t, n) {
      if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(n && n.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), n && D(t, n)
    }

    function D(t, n) {
      return (D = Object.setPrototypeOf || function (t, n) {
        return t.__proto__ = n, t
      })(t, n)
    }

    var G = function (t) {
      function n() {
        return L(this, n), C(this, N(n).apply(this, arguments))
      }

      return I(n, s), n
    }(), U = function (t) {
      function n() {
        return L(this, n), C(this, N(n).apply(this, arguments))
      }

      return I(n, G), n
    }(), V = function (t) {
      function n() {
        return L(this, n), C(this, N(n).apply(this, arguments))
      }

      return I(n, G), n
    }(), W = function (t) {
      function n() {
        return L(this, n), C(this, N(n).apply(this, arguments))
      }

      return I(n, G), n
    }(), z = function (t) {
      function n() {
        return L(this, n), C(this, N(n).apply(this, arguments))
      }

      return I(n, G), n
    }(), B = (R(k = {
      tel: function (t) {
        var n = t;
        if (!/^\+?[0-9-]+$/.test(t)) throw new W(t);
        return '<a href="tel:'.concat(n, '">').concat(t, "</a>")
      }
    }, P.name, function (t) {
      var n = "".concat(P.url).concat(t);
      return "".concat(P.prefix, ' data-name="').concat(P.name, '" ') + 'data-value="'.concat(n, '" >').concat(n).concat(P.suffix)
    }), R(k, A.name, function (t) {
      var n = "".concat(A.url).concat(t);
      return "".concat(A.prefix, ' data-name="').concat(A.name, '" ') + 'data-value="'.concat(n, '" >').concat(n).concat(A.suffix)
    }), k), H = function (t, n) {
      var r = t[1], e = n[r];
      if (!e) throw new V(r);
      try {
        return e.apply(void 0, F(t.slice(2)))
      } catch (n) {
        throw"TypeError" == typeof n ? new MmlRendererFnValueConvertionError(t) : new z(n)
      }
    }, K = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B;
      if (Array.isArray(t)) return function (t, n) {
        return t.reduce(function (t, r) {
          if ("string" == typeof r) return t.concat(r);
          if (Array.isArray(r) && r[0] && r[0] === a) return t.concat(H(r, n));
          throw new U(r)
        }, "")
      }(t, n);
      if (Array.isArray(t) && t[0] && t[0] === a) return H(t, n);
      throw new U(t)
    }, J = (R(T = {}, P.name, P), R(T, A.name, A), T);
    r.d(n, "MmlParseError", function () {
      return w
    }), r.d(n, "MmlMarkupHasNoNameError", function () {
      return _
    }), r.d(n, "MmlUnexpectedEndOfStringError", function () {
      return x
    }), r.d(n, "MmlUnmatchedBracketError", function () {
      return S
    }), r.d(n, "MmlRendererError", function () {
      return G
    }), r.d(n, "MmlInvalidSexpError", function () {
      return U
    }), r.d(n, "MmlRendererNotFoundError", function () {
      return V
    }), r.d(n, "MmlRendererFnConvertionError", function () {
      return W
    }), r.d(n, "MmlUnknownError", function () {
      return z
    }), r.d(n, "parse", function () {
      return E
    }), r.d(n, "DEFAULT_RENDERER", function () {
      return B
    }), r.d(n, "render", function () {
      return K
    }), r.d(n, "rendererConfig", function () {
      return J
    })
  }])
});