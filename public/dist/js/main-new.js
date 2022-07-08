!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function() {
    "use strict";
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i)
        }
    }
    function t() {
        return (t = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a, i = arguments[t];
                for (a in i)
                    Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
            }
            return e
        }
        ).apply(this, arguments)
    }
    function i(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function s(t, a) {
        void 0 === t && (t = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach(function(e) {
            void 0 === t[e] ? t[e] = a[e] : i(a[e]) && i(t[e]) && 0 < Object.keys(a[e]).length && s(t[e], a[e])
        })
    }
    var a = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function y() {
        var e = "undefined" != typeof document ? document : {};
        return s(e, a),
        e
    }
    var r = {
        document: a,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function K() {
        var e = "undefined" != typeof window ? window : {};
        return s(e, r),
        e
    }
    function n(e) {
        return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    function l(e, t) {
        return (l = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function o(e, t, a) {
        return (o = function() {
            if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
                if ("function" == typeof Proxy)
                    return 1;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    1
                } catch (e) {
                    return
                }
            }
        }() ? Reflect.construct : function(e, t, a) {
            var i = [null];
            i.push.apply(i, t);
            i = new (Function.bind.apply(e, i));
            return a && l(i, a.prototype),
            i
        }
        ).apply(null, arguments)
    }
    function d(e) {
        var a = "function" == typeof Map ? new Map : void 0;
        return (d = function(e) {
            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]"))
                return e;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== a) {
                if (a.has(e))
                    return a.get(e);
                a.set(e, t)
            }
            function t() {
                return o(e, arguments, n(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            l(t, e)
        }
        )(e)
    }
    var p, u = (p = d(Array),
    A = p,
    (O = c).prototype = Object.create(A.prototype),
    (O.prototype.constructor = O).__proto__ = A,
    c);
    function c(e) {
        var t = p.call.apply(p, [this].concat(e)) || this
          , e = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(t)
          , a = e.__proto__;
        return Object.defineProperty(e, "__proto__", {
            get: function() {
                return a
            },
            set: function(e) {
                a.__proto__ = e
            }
        }),
        t
    }
    function h(e) {
        var t = [];
        return (e = void 0 === e ? [] : e).forEach(function(e) {
            Array.isArray(e) ? t.push.apply(t, h(e)) : t.push(e)
        }),
        t
    }
    function m(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function C(e, s) {
        var t = K()
          , r = y()
          , a = [];
        if (!s && e instanceof u)
            return e;
        if (!e)
            return new u(a);
        if ("string" == typeof e) {
            var i = e.trim();
            if (0 <= i.indexOf("<") && 0 <= i.indexOf(">")) {
                var n = "div";
                0 === i.indexOf("<li") && (n = "ul"),
                0 === i.indexOf("<tr") && (n = "tbody"),
                0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (n = "tr"),
                0 === i.indexOf("<tbody") && (n = "table"),
                0 === i.indexOf("<option") && (n = "select");
                var l = r.createElement(n);
                l.innerHTML = i;
                for (var o = 0; o < l.childNodes.length; o += 1)
                    a.push(l.childNodes[o])
            } else
                a = function(e) {
                    if ("string" != typeof e)
                        return [e];
                    for (var t = [], a = (s || r).querySelectorAll(e), i = 0; i < a.length; i += 1)
                        t.push(a[i]);
                    return t
                }(e.trim())
        } else if (e.nodeType || e === t || e === r)
            a.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof u)
                return e;
            a = e
        }
        return new u(function(e) {
            for (var t = [], a = 0; a < e.length; a += 1)
                -1 === t.indexOf(e[a]) && t.push(e[a]);
            return t
        }(a))
    }
    C.fn = u.prototype;
    var f, w, b, v = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var i = h(t.map(function(e) {
                return e.split(" ")
            }));
            return this.forEach(function(e) {
                (e = e.classList).add.apply(e, i)
            }),
            this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var i = h(t.map(function(e) {
                return e.split(" ")
            }));
            return this.forEach(function(e) {
                (e = e.classList).remove.apply(e, i)
            }),
            this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var i = h(t.map(function(e) {
                return e.split(" ")
            }));
            return 0 < m(this, function(t) {
                return 0 < i.filter(function(e) {
                    return t.classList.contains(e)
                }).length
            }).length
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var i = h(t.map(function(e) {
                return e.split(" ")
            }));
            this.forEach(function(t) {
                i.forEach(function(e) {
                    t.classList.toggle(e)
                })
            })
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (var a = 0; a < this.length; a += 1)
                if (2 === arguments.length)
                    this[a].setAttribute(e, t);
                else
                    for (var i in e)
                        this[a][i] = e[i],
                        this[a].setAttribute(i, e[i]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (var t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var i = t[0]
              , r = t[1]
              , n = t[2]
              , s = t[3];
            function l(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e),
                    C(t).is(r))
                        n.apply(t, a);
                    else
                        for (var i = C(t).parents(), s = 0; s < i.length; s += 1)
                            C(i[s]).is(r) && n.apply(i[s], a)
                }
            }
            function o(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                n.apply(this, t)
            }
            "function" == typeof t[1] && (i = t[0],
            n = t[1],
            s = t[2],
            r = void 0);
            for (var d, s = s || !1, p = i.split(" "), u = 0; u < this.length; u += 1) {
                var c = this[u];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        c.dom7LiveListeners || (c.dom7LiveListeners = {}),
                        c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []),
                        c.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: l
                        }),
                        c.addEventListener(h, l, s)
                    }
                else
                    for (d = 0; d < p.length; d += 1) {
                        var m = p[d];
                        c.dom7Listeners || (c.dom7Listeners = {}),
                        c.dom7Listeners[m] || (c.dom7Listeners[m] = []),
                        c.dom7Listeners[m].push({
                            listener: n,
                            proxyListener: o
                        }),
                        c.addEventListener(m, o, s)
                    }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                t[a] = arguments[a];
            var i = t[0]
              , s = t[1]
              , r = t[2]
              , n = t[3];
            "function" == typeof t[1] && (i = t[0],
            r = t[1],
            n = t[2],
            s = void 0);
            for (var n = n || !1, l = i.split(" "), o = 0; o < l.length; o += 1)
                for (var d = l[o], p = 0; p < this.length; p += 1) {
                    var u = this[p]
                      , c = void 0;
                    if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]),
                    c && c.length)
                        for (var h = c.length - 1; 0 <= h; --h) {
                            var m = c[h];
                            !(r && m.listener === r || r && m.listener && m.listener.dom7proxy && m.listener.dom7proxy === r) && r || (u.removeEventListener(d, m.proxyListener, n),
                            c.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = K(), t = arguments.length, a = new Array(t), i = 0; i < t; i++)
                a[i] = arguments[i];
            for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1)
                for (var l = s[n], o = 0; o < this.length; o += 1) {
                    var d, p = this[o];
                    e.CustomEvent && (d = new e.CustomEvent(l,{
                        detail: r,
                        bubbles: !0,
                        cancelable: !0
                    }),
                    p.dom7EventData = a.filter(function(e, t) {
                        return 0 < t
                    }),
                    p.dispatchEvent(d),
                    p.dom7EventData = [],
                    delete p.dom7EventData)
                }
            return this
        },
        transitionEnd: function(a) {
            var i = this;
            return a && i.on("transitionend", function e(t) {
                t.target === this && (a.call(this, t),
                i.off("transitionend", e))
            }),
            this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            var e = K();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (0 < this.length) {
                var e = K()
                  , t = y()
                  , a = this[0]
                  , i = a.getBoundingClientRect()
                  , s = t.body
                  , r = a.clientTop || s.clientTop || 0
                  , t = a.clientLeft || s.clientLeft || 0
                  , s = a === e ? e.scrollY : a.scrollTop
                  , a = a === e ? e.scrollX : a.scrollLeft;
                return {
                    top: i.top + s - r,
                    left: i.left + a - t
                }
            }
            return null
        },
        css: function(e, t) {
            var a, i = K();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var s in e)
                            this[a].style[s] = e[s];
                    return this
                }
                if (this[0])
                    return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e)
                return this;
            for (a = 0; a < this.length; a += 1)
                this[a].style[e] = t;
            return this
        },
        each: function(a) {
            return a && this.forEach(function(e, t) {
                a.apply(e, [e, t])
            }),
            this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = K(), s = y(), r = this[0];
            if (!r || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (r.matches)
                    return r.matches(e);
                if (r.webkitMatchesSelector)
                    return r.webkitMatchesSelector(e);
                if (r.msMatchesSelector)
                    return r.msMatchesSelector(e);
                for (t = C(e),
                a = 0; a < t.length; a += 1)
                    if (t[a] === r)
                        return !0;
                return !1
            }
            if (e === s)
                return r === s;
            if (e === i)
                return r === i;
            if (e.nodeType || e instanceof u) {
                for (t = e.nodeType ? [e] : e,
                a = 0; a < t.length; a += 1)
                    if (t[a] === r)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            var t = this.length;
            if (t - 1 < e)
                return C([]);
            if (e < 0) {
                t = t + e;
                return C(t < 0 ? [] : [this[t]])
            }
            return C([this[e]])
        },
        append: function() {
            for (var e = y(), t = 0; t < arguments.length; t += 1)
                for (var a = t < 0 || arguments.length <= t ? void 0 : arguments[t], i = 0; i < this.length; i += 1)
                    if ("string" == typeof a) {
                        var s = e.createElement("div");
                        for (s.innerHTML = a; s.firstChild; )
                            this[i].appendChild(s.firstChild)
                    } else if (a instanceof u)
                        for (var r = 0; r < a.length; r += 1)
                            this[i].appendChild(a[r]);
                    else
                        this[i].appendChild(a);
            return this
        },
        prepend: function(e) {
            for (var t, a = y(), i = 0; i < this.length; i += 1)
                if ("string" == typeof e) {
                    var s = a.createElement("div");
                    for (s.innerHTML = e,
                    t = s.childNodes.length - 1; 0 <= t; --t)
                        this[i].insertBefore(s.childNodes[t], this[i].childNodes[0])
                } else if (e instanceof u)
                    for (t = 0; t < e.length; t += 1)
                        this[i].insertBefore(e[t], this[i].childNodes[0]);
                else
                    this[i].insertBefore(e, this[i].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && C(this[0].nextElementSibling).is(e) ? C([this[0].nextElementSibling]) : C([]) : this[0].nextElementSibling ? C([this[0].nextElementSibling]) : C([]) : C([])
        },
        nextAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return C([]);
            for (; a.nextElementSibling; ) {
                var i = a.nextElementSibling;
                e && !C(i).is(e) || t.push(i),
                a = i
            }
            return C(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && C(t.previousElementSibling).is(e) ? C([t.previousElementSibling]) : C([]) : t.previousElementSibling ? C([t.previousElementSibling]) : C([])
            }
            return C([])
        },
        prevAll: function(e) {
            var t = []
              , a = this[0];
            if (!a)
                return C([]);
            for (; a.previousElementSibling; ) {
                var i = a.previousElementSibling;
                e && !C(i).is(e) || t.push(i),
                a = i
            }
            return C(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                null === this[a].parentNode || e && !C(this[a].parentNode).is(e) || t.push(this[a].parentNode);
            return C(t)
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i; )
                    e && !C(i).is(e) || t.push(i),
                    i = i.parentNode;
            return C(t)
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? C([]) : t = !t.is(e) ? t.parents(e).eq(0) : t
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1)
                    t.push(i[s]);
            return C(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].children, s = 0; s < i.length; s += 1)
                    e && !C(i[s]).is(e) || t.push(i[s]);
            return C(t)
        },
        filter: function(e) {
            return C(m(this, e))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function S(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function M() {
        return Date.now()
    }
    function g(e, t) {
        void 0 === t && (t = "x");
        var a, i, s, r = K(), e = r.getComputedStyle(e, null);
        return r.WebKitCSSMatrix ? (6 < (i = e.transform || e.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
            return e.replace(",", ".")
        }).join(", ")),
        s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
        "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        (i = "y" === t ? r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5]) : i) || 0
    }
    function E(e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
    }
    function Z(e) {
        for (var t = Object(arguments.length <= 0 ? void 0 : e), a = 1; a < arguments.length; a += 1) {
            var i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i)
                for (var s = Object.keys(Object(i)), r = 0, n = s.length; r < n; r += 1) {
                    var l = s[r]
                      , o = Object.getOwnPropertyDescriptor(i, l);
                    void 0 !== o && o.enumerable && (E(t[l]) && E(i[l]) ? Z(t[l], i[l]) : !E(t[l]) && E(i[l]) ? (t[l] = {},
                    Z(t[l], i[l])) : t[l] = i[l])
                }
        }
        return t
    }
    function x(a, i) {
        Object.keys(i).forEach(function(t) {
            E(i[t]) && Object.keys(i[t]).forEach(function(e) {
                "function" == typeof i[t][e] && (i[t][e] = i[t][e].bind(a))
            }),
            a[t] = i[t]
        })
    }
    function T() {
        return f || (a = K(),
        e = y(),
        f = {
            touch: !!("ontouchstart"in a || a.DocumentTouch && e instanceof a.DocumentTouch),
            pointerEvents: !!a.PointerEvent && "maxTouchPoints"in a.navigator && 0 <= a.navigator.maxTouchPoints,
            observer: "MutationObserver"in a || "WebkitMutationObserver"in a,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    a.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart"in a
        }),
        f;
        var a, e
    }
    Object.keys(v).forEach(function(e) {
        C.fn[e] = v[e]
    });
    var z = {
        name: "resize",
        create: function() {
            var e = this;
            Z(e, {
                resize: {
                    resizeHandler: function() {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"),
                        e.emit("resize"))
                    },
                    orientationChangeHandler: function() {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function(e) {
                var t = K();
                t.addEventListener("resize", e.resize.resizeHandler),
                t.addEventListener("orientationchange", e.resize.orientationChangeHandler)
            },
            destroy: function(e) {
                var t = K();
                t.removeEventListener("resize", e.resize.resizeHandler),
                t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
            }
        }
    }
      , P = {
        attach: function(e, t) {
            void 0 === t && (t = {});
            var a = K()
              , i = this
              , s = new (a.MutationObserver || a.WebkitMutationObserver)(function(e) {
                var t;
                1 !== e.length ? (t = function() {
                    i.emit("observerUpdate", e[0])
                }
                ,
                a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)) : i.emit("observerUpdate", e[0])
            }
            );
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.observer.observers.push(s)
        },
        init: function() {
            var e = this;
            if (e.support.observer && e.params.observer) {
                if (e.params.observeParents)
                    for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
                        e.observer.attach(t[a]);
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function() {
            this.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            this.observer.observers = []
        }
    }
      , k = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create: function() {
            x(this, {
                observer: t({}, P, {
                    observers: []
                })
            })
        },
        on: {
            init: function(e) {
                e.observer.init()
            },
            destroy: function(e) {
                e.observer.destroy()
            }
        }
    };
    function $() {
        var e, t, a = this, i = a.params, s = a.el;
        s && 0 === s.offsetWidth || (i.breakpoints && a.setBreakpoint(),
        e = a.allowSlideNext,
        t = a.allowSlidePrev,
        s = a.snapGrid,
        a.allowSlideNext = !0,
        a.allowSlidePrev = !0,
        a.updateSize(),
        a.updateSlides(),
        a.updateSlidesClasses(),
        ("auto" === i.slidesPerView || 1 < i.slidesPerView) && a.isEnd && !a.isBeginning && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0),
        a.autoplay && a.autoplay.running && a.autoplay.paused && a.autoplay.run(),
        a.allowSlidePrev = t,
        a.allowSlideNext = e,
        a.params.watchOverflow && s !== a.snapGrid && a.checkOverflow())
    }
    var L = !1;
    function I() {}
    var O, A, D, G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        nested: !1,
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    }, N = {
        modular: {
            useParams: function(t) {
                var a = this;
                a.modules && Object.keys(a.modules).forEach(function(e) {
                    e = a.modules[e];
                    e.params && Z(t, e.params)
                })
            },
            useModules: function(a) {
                void 0 === a && (a = {});
                var i = this;
                i.modules && Object.keys(i.modules).forEach(function(e) {
                    var t = i.modules[e]
                      , e = a[e] || {};
                    t.on && i.on && Object.keys(t.on).forEach(function(e) {
                        i.on(e, t.on[e])
                    }),
                    t.create && t.create.bind(i)(e)
                })
            }
        },
        eventsEmitter: {
            on: function(e, t, a) {
                var i = this;
                if ("function" != typeof t)
                    return i;
                var s = a ? "unshift" : "push";
                return e.split(" ").forEach(function(e) {
                    i.eventsListeners[e] || (i.eventsListeners[e] = []),
                    i.eventsListeners[e][s](t)
                }),
                i
            },
            once: function(i, s, e) {
                var r = this;
                return "function" != typeof s ? r : (n.__emitterProxy = s,
                r.on(i, n, e));
                function n() {
                    r.off(i, n),
                    n.__emitterProxy && delete n.__emitterProxy;
                    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                        t[a] = arguments[a];
                    s.apply(r, t)
                }
            },
            onAny: function(e, t) {
                if ("function" != typeof e)
                    return this;
                t = t ? "unshift" : "push";
                return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[t](e),
                this
            },
            offAny: function(e) {
                var t = this;
                if (!t.eventsAnyListeners)
                    return t;
                e = t.eventsAnyListeners.indexOf(e);
                return 0 <= e && t.eventsAnyListeners.splice(e, 1),
                t
            },
            off: function(e, i) {
                var s = this;
                return s.eventsListeners && e.split(" ").forEach(function(a) {
                    void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].forEach(function(e, t) {
                        (e === i || e.__emitterProxy && e.__emitterProxy === i) && s.eventsListeners[a].splice(t, 1)
                    })
                }),
                s
            },
            emit: function() {
                var e, a, i, s = this;
                if (!s.eventsListeners)
                    return s;
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                return i = "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0],
                a = r.slice(1, r.length),
                s) : (e = r[0].events,
                a = r[0].data,
                r[0].context || s),
                a.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach(function(t) {
                    s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach(function(e) {
                        e.apply(i, [t].concat(a))
                    }),
                    s.eventsListeners && s.eventsListeners[t] && s.eventsListeners[t].forEach(function(e) {
                        e.apply(i, a)
                    })
                }),
                s
            }
        },
        update: {
            updateSize: function() {
                var e = this
                  , t = e.$el
                  , a = void 0 !== e.params.width && null !== e.params.width ? e.params.width : t[0].clientWidth
                  , i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : t[0].clientHeight;
                0 === a && e.isHorizontal() || 0 === i && e.isVertical() || (a = a - parseInt(t.css("padding-left") || 0, 10) - parseInt(t.css("padding-right") || 0, 10),
                i = i - parseInt(t.css("padding-top") || 0, 10) - parseInt(t.css("padding-bottom") || 0, 10),
                Z(e, {
                    width: a = Number.isNaN(a) ? 0 : a,
                    height: i = Number.isNaN(i) ? 0 : i,
                    size: e.isHorizontal() ? a : i
                }))
            },
            updateSlides: function() {
                var e = this
                  , t = K()
                  , a = e.params
                  , i = e.$wrapperEl
                  , s = e.size
                  , r = e.rtlTranslate
                  , n = e.wrongRTL
                  , l = e.virtual && a.virtual.enabled
                  , o = (l ? e.virtual : e).slides.length
                  , d = i.children("." + e.params.slideClass)
                  , p = (l ? e.virtual.slides : d).length
                  , u = []
                  , c = []
                  , h = [];
                function m(e, t) {
                    return !a.cssMode || t !== d.length - 1
                }
                var f = a.slidesOffsetBefore;
                "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                var v = a.slidesOffsetAfter;
                "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
                var g, y = e.snapGrid.length, l = e.slidesGrid.length, w = a.spaceBetween, b = -f, E = 0, x = 0;
                if (void 0 !== s) {
                    "string" == typeof w && 0 <= w.indexOf("%") && (w = parseFloat(w.replace("%", "")) / 100 * s),
                    e.virtualSize = -w,
                    r ? d.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : d.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                    1 < a.slidesPerColumn && (g = Math.floor(p / a.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / a.slidesPerColumn) * a.slidesPerColumn,
                    "auto" !== a.slidesPerView && "row" === a.slidesPerColumnFill && (g = Math.max(g, a.slidesPerView * a.slidesPerColumn)));
                    for (var T, C, S, M, z = a.slidesPerColumn, P = g / z, k = Math.floor(p / a.slidesPerColumn), $ = 0; $ < p; $ += 1) {
                        G = 0;
                        var L, I, O, A, D, G, N, B, H, X, V, Y, F, R = d.eq($);
                        1 < a.slidesPerColumn && (D = A = O = void 0,
                        "row" === a.slidesPerColumnFill && 1 < a.slidesPerGroup ? (I = Math.floor($ / (a.slidesPerGroup * a.slidesPerColumn)),
                        L = $ - a.slidesPerColumn * a.slidesPerGroup * I,
                        Y = 0 === I ? a.slidesPerGroup : Math.min(Math.ceil((p - I * z * a.slidesPerGroup) / z), a.slidesPerGroup),
                        O = (A = L - (D = Math.floor(L / Y)) * Y + I * a.slidesPerGroup) + D * g / z,
                        R.css({
                            "-webkit-box-ordinal-group": O,
                            "-moz-box-ordinal-group": O,
                            "-ms-flex-order": O,
                            "-webkit-order": O,
                            order: O
                        })) : "column" === a.slidesPerColumnFill ? (D = $ - (A = Math.floor($ / z)) * z,
                        (k < A || A === k && D === z - 1) && (D += 1) >= z && (D = 0,
                        A += 1)) : A = $ - (D = Math.floor($ / P)) * P,
                        R.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== D && a.spaceBetween && a.spaceBetween + "px")),
                        "none" !== R.css("display") && ("auto" === a.slidesPerView ? (Y = t.getComputedStyle(R[0], null),
                        I = R[0].style.transform,
                        O = R[0].style.webkitTransform,
                        I && (R[0].style.transform = "none"),
                        O && (R[0].style.webkitTransform = "none"),
                        G = a.roundLengths ? e.isHorizontal() ? R.outerWidth(!0) : R.outerHeight(!0) : e.isHorizontal() ? (A = parseFloat(Y.getPropertyValue("width") || 0),
                        N = parseFloat(Y.getPropertyValue("padding-left") || 0),
                        B = parseFloat(Y.getPropertyValue("padding-right") || 0),
                        H = parseFloat(Y.getPropertyValue("margin-left") || 0),
                        X = parseFloat(Y.getPropertyValue("margin-right") || 0),
                        (D = Y.getPropertyValue("box-sizing")) && "border-box" === D ? A + H + X : (F = (V = R[0]).clientWidth,
                        A + N + B + H + X + (V.offsetWidth - F))) : (N = parseFloat(Y.getPropertyValue("height") || 0),
                        B = parseFloat(Y.getPropertyValue("padding-top") || 0),
                        H = parseFloat(Y.getPropertyValue("padding-bottom") || 0),
                        X = parseFloat(Y.getPropertyValue("margin-top") || 0),
                        V = parseFloat(Y.getPropertyValue("margin-bottom") || 0),
                        (F = Y.getPropertyValue("box-sizing")) && "border-box" === F ? N + X + V : (F = (Y = R[0]).clientHeight,
                        N + B + H + X + V + (Y.offsetHeight - F))),
                        I && (R[0].style.transform = I),
                        O && (R[0].style.webkitTransform = O),
                        a.roundLengths && (G = Math.floor(G))) : (G = (s - (a.slidesPerView - 1) * w) / a.slidesPerView,
                        a.roundLengths && (G = Math.floor(G)),
                        d[$] && (e.isHorizontal() ? d[$].style.width = G + "px" : d[$].style.height = G + "px")),
                        d[$] && (d[$].swiperSlideSize = G),
                        h.push(G),
                        a.centeredSlides ? (b = b + G / 2 + E / 2 + w,
                        0 === E && 0 !== $ && (b = b - s / 2 - w),
                        0 === $ && (b = b - s / 2 - w),
                        Math.abs(b) < .001 && (b = 0),
                        a.roundLengths && (b = Math.floor(b)),
                        x % a.slidesPerGroup == 0 && u.push(b),
                        c.push(b)) : (a.roundLengths && (b = Math.floor(b)),
                        (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(b),
                        c.push(b),
                        b = b + G + w),
                        e.virtualSize += G + w,
                        E = G,
                        x += 1)
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, s) + v,
                    r && n && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                        width: e.virtualSize + a.spaceBetween + "px"
                    }),
                    a.setWrapperSize && (e.isHorizontal() ? i.css({
                        width: e.virtualSize + a.spaceBetween + "px"
                    }) : i.css({
                        height: e.virtualSize + a.spaceBetween + "px"
                    })),
                    1 < a.slidesPerColumn && (e.virtualSize = (G + a.spaceBetween) * g,
                    e.virtualSize = Math.ceil(e.virtualSize / a.slidesPerColumn) - a.spaceBetween,
                    e.isHorizontal() ? i.css({
                        width: e.virtualSize + a.spaceBetween + "px"
                    }) : i.css({
                        height: e.virtualSize + a.spaceBetween + "px"
                    }),
                    a.centeredSlides)) {
                        for (var W = [], q = 0; q < u.length; q += 1) {
                            var j = u[q];
                            a.roundLengths && (j = Math.floor(j)),
                            u[q] < e.virtualSize + u[0] && W.push(j)
                        }
                        u = W
                    }
                    if (!a.centeredSlides) {
                        W = [];
                        for (var _ = 0; _ < u.length; _ += 1) {
                            var U = u[_];
                            a.roundLengths && (U = Math.floor(U)),
                            u[_] <= e.virtualSize - s && W.push(U)
                        }
                        u = W,
                        !e.params.freeMode && 1 < Math.floor(e.virtualSize - s) - Math.floor(u[u.length - 1]) && u.push(e.virtualSize - s)
                    }
                    0 === u.length && (u = [0]),
                    0 !== a.spaceBetween && (e.isHorizontal() ? r ? d.filter(m).css({
                        marginLeft: w + "px"
                    }) : d.filter(m).css({
                        marginRight: w + "px"
                    }) : d.filter(m).css({
                        marginBottom: w + "px"
                    })),
                    a.centeredSlides && a.centeredSlidesBounds && (T = 0,
                    h.forEach(function(e) {
                        T += e + (a.spaceBetween || 0)
                    }),
                    C = (T -= a.spaceBetween) - s,
                    u = u.map(function(e) {
                        return e < 0 ? -f : C < e ? C + v : e
                    })),
                    a.centerInsufficientSlides && (S = 0,
                    h.forEach(function(e) {
                        S += e + (a.spaceBetween || 0)
                    }),
                    (S -= a.spaceBetween) < s && (M = (s - S) / 2,
                    u.forEach(function(e, t) {
                        u[t] = e - M
                    }),
                    c.forEach(function(e, t) {
                        c[t] = e + M
                    }))),
                    Z(e, {
                        slides: d,
                        snapGrid: u,
                        slidesGrid: c,
                        slidesSizesGrid: h
                    }),
                    p !== o && e.emit("slidesLengthChange"),
                    u.length !== y && (e.params.watchOverflow && e.checkOverflow(),
                    e.emit("snapGridLengthChange")),
                    c.length !== l && e.emit("slidesGridLengthChange"),
                    (a.watchSlidesProgress || a.watchSlidesVisibility) && e.updateSlidesOffset()
                }
            },
            updateAutoHeight: function(e) {
                var t, a, i = this, s = [], r = 0;
                if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed),
                "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                    if (i.params.centeredSlides)
                        i.visibleSlides.each(function(e) {
                            s.push(e)
                        });
                    else
                        for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                            var n = i.activeIndex + t;
                            if (n > i.slides.length)
                                break;
                            s.push(i.slides.eq(n)[0])
                        }
                else
                    s.push(i.slides.eq(i.activeIndex)[0]);
                for (t = 0; t < s.length; t += 1)
                    void 0 !== s[t] && (r = r < (a = s[t].offsetHeight) ? a : r);
                r && i.$wrapperEl.css("height", r + "px")
            },
            updateSlidesOffset: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1)
                    e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            },
            updateSlidesProgress: function(e) {
                void 0 === e && (e = this && this.translate || 0);
                var t = this
                  , a = t.params
                  , i = t.slides
                  , s = t.rtlTranslate;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = s ? e : -e;
                    i.removeClass(a.slideVisibleClass),
                    t.visibleSlidesIndexes = [],
                    t.visibleSlides = [];
                    for (var n = 0; n < i.length; n += 1) {
                        var l, o, d = i[n], p = (r + (a.centeredSlides ? t.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + a.spaceBetween);
                        (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) && (o = (l = -(r - d.swiperSlideOffset)) + t.slidesSizesGrid[n],
                        (0 <= l && l < t.size - 1 || 1 < o && o <= t.size || l <= 0 && o >= t.size) && (t.visibleSlides.push(d),
                        t.visibleSlidesIndexes.push(n),
                        i.eq(n).addClass(a.slideVisibleClass))),
                        d.progress = s ? -p : p
                    }
                    t.visibleSlides = C(t.visibleSlides)
                }
            },
            updateProgress: function(e) {
                var t = this;
                void 0 === e && (l = t.rtlTranslate ? -1 : 1,
                e = t && t.translate && t.translate * l || 0);
                var a = t.params
                  , i = t.maxTranslate() - t.minTranslate()
                  , s = t.progress
                  , r = t.isBeginning
                  , n = r
                  , l = o = t.isEnd
                  , o = 0 == i ? r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0,
                1 <= s);
                Z(t, {
                    progress: s,
                    isBeginning: r,
                    isEnd: o
                }),
                (a.watchSlidesProgress || a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) && t.updateSlidesProgress(e),
                r && !n && t.emit("reachBeginning toEdge"),
                o && !l && t.emit("reachEnd toEdge"),
                (n && !r || l && !o) && t.emit("fromEdge"),
                t.emit("progress", s)
            },
            updateSlidesClasses: function() {
                var e = this
                  , t = e.slides
                  , a = e.params
                  , i = e.$wrapperEl
                  , s = e.activeIndex
                  , r = e.realIndex
                  , n = e.virtual && a.virtual.enabled;
                t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass),
                (s = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass),
                a.loop && (s.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]') : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]')).addClass(a.slideDuplicateActiveClass);
                r = s.nextAll("." + a.slideClass).eq(0).addClass(a.slideNextClass);
                a.loop && 0 === r.length && (r = t.eq(0)).addClass(a.slideNextClass);
                s = s.prevAll("." + a.slideClass).eq(0).addClass(a.slidePrevClass);
                a.loop && 0 === s.length && (s = t.eq(-1)).addClass(a.slidePrevClass),
                a.loop && ((r.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]') : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]')).addClass(a.slideDuplicateNextClass),
                (s.hasClass(a.slideDuplicateClass) ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]') : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]')).addClass(a.slideDuplicatePrevClass)),
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                var t = this
                  , a = t.rtlTranslate ? t.translate : -t.translate
                  , i = t.slidesGrid
                  , s = t.snapGrid
                  , r = t.params
                  , n = t.activeIndex
                  , l = t.realIndex
                  , o = t.snapIndex
                  , d = e;
                if (void 0 === d) {
                    for (var p = 0; p < i.length; p += 1)
                        void 0 !== i[p + 1] ? a >= i[p] && a < i[p + 1] - (i[p + 1] - i[p]) / 2 ? d = p : a >= i[p] && a < i[p + 1] && (d = p + 1) : a >= i[p] && (d = p);
                    r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                }
                (r = 0 <= s.indexOf(a) ? s.indexOf(a) : (e = Math.min(r.slidesPerGroupSkip, d)) + Math.floor((d - e) / r.slidesPerGroup)) >= s.length && (r = s.length - 1),
                d !== n ? (s = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10),
                Z(t, {
                    snapIndex: r,
                    realIndex: s,
                    previousIndex: n,
                    activeIndex: d
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                l !== s && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")) : r !== o && (t.snapIndex = r,
                t.emit("snapIndexChange"))
            },
            updateClickedSlide: function(e) {
                var t = this
                  , a = t.params
                  , i = C(e.target).closest("." + a.slideClass)[0]
                  , s = !1;
                if (i)
                    for (var r = 0; r < t.slides.length; r += 1)
                        t.slides[r] === i && (s = !0);
                if (!i || !s)
                    return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
                t.clickedSlide = i,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(C(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = C(i).index(),
                a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function(e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params
                  , a = this.rtlTranslate
                  , i = this.translate
                  , s = this.$wrapperEl;
                if (t.virtualTranslate)
                    return a ? -i : i;
                if (t.cssMode)
                    return i;
                e = g(s[0], e);
                return (e = a ? -e : e) || 0
            },
            setTranslate: function(e, t) {
                var a = this
                  , i = a.rtlTranslate
                  , s = a.params
                  , r = a.$wrapperEl
                  , n = a.wrapperEl
                  , l = a.progress
                  , o = 0
                  , d = 0;
                a.isHorizontal() ? o = i ? -e : e : d = e,
                s.roundLengths && (o = Math.floor(o),
                d = Math.floor(d)),
                s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"),
                a.previousTranslate = a.translate,
                a.translate = a.isHorizontal() ? o : d;
                d = a.maxTranslate() - a.minTranslate();
                (0 == d ? 0 : (e - a.minTranslate()) / d) !== l && a.updateProgress(e),
                a.emit("setTranslate", a.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, a, i, s) {
                void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === a && (a = !0),
                void 0 === i && (i = !0);
                var r = this
                  , n = r.params
                  , l = r.wrapperEl;
                if (r.animating && n.preventInteractionOnTransition)
                    return !1;
                var o = r.minTranslate()
                  , d = r.maxTranslate()
                  , d = i && o < e ? o : i && e < d ? d : e;
                if (r.updateProgress(d),
                n.cssMode) {
                    e = r.isHorizontal();
                    return 0 !== t && l.scrollTo ? l.scrollTo(((n = {})[e ? "left" : "top"] = -d,
                    n.behavior = "smooth",
                    n)) : l[e ? "scrollLeft" : "scrollTop"] = -d,
                    !0
                }
                return 0 === t ? (r.setTransition(0),
                r.setTranslate(d),
                a && (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionEnd"))) : (r.setTransition(t),
                r.setTranslate(d),
                a && (r.emit("beforeTransitionStart", t, s),
                r.emit("transitionStart")),
                r.animating || (r.animating = !0,
                r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                    r.onTranslateToWrapperTransitionEnd = null,
                    delete r.onTranslateToWrapperTransitionEnd,
                    a && r.emit("transitionEnd"))
                }
                ),
                r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                !0
            }
        },
        transition: {
            setTransition: function(e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e),
                this.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                var a = this
                  , i = a.activeIndex
                  , s = a.params
                  , r = a.previousIndex;
                s.cssMode || (s.autoHeight && a.updateAutoHeight(),
                t = (t = t) || (r < i ? "next" : i < r ? "prev" : "reset"),
                a.emit("transitionStart"),
                e && i !== r && ("reset" !== t ? (a.emit("slideChangeTransitionStart"),
                "next" === t ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")) : a.emit("slideResetTransitionStart")))
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                var a = this
                  , i = a.activeIndex
                  , s = a.previousIndex
                  , r = a.params;
                a.animating = !1,
                r.cssMode || (a.setTransition(0),
                t = (t = t) || (s < i ? "next" : i < s ? "prev" : "reset"),
                a.emit("transitionEnd"),
                e && i !== s && ("reset" !== t ? (a.emit("slideChangeTransitionEnd"),
                "next" === t ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")) : a.emit("slideResetTransitionEnd")))
            }
        },
        slide: {
            slideTo: function(e, t, a, i) {
                if (void 0 === t && (t = this.params.speed),
                void 0 === a && (a = !0),
                "number" != typeof (e = void 0 === e ? 0 : e) && "string" != typeof e)
                    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                if ("string" == typeof e) {
                    var s = parseInt(e, 10);
                    if (!isFinite(s))
                        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                    e = s
                }
                var r = this
                  , n = e;
                n < 0 && (n = 0);
                var l = r.params
                  , o = r.snapGrid
                  , d = r.slidesGrid
                  , p = r.previousIndex
                  , u = r.activeIndex
                  , c = r.rtlTranslate
                  , s = r.wrapperEl;
                if (r.animating && l.preventInteractionOnTransition)
                    return !1;
                e = Math.min(r.params.slidesPerGroupSkip, n),
                e += Math.floor((n - e) / r.params.slidesPerGroup);
                e >= o.length && (e = o.length - 1),
                (u || l.initialSlide || 0) === (p || 0) && a && r.emit("beforeSlideChangeStart");
                var h, m = -o[e];
                if (r.updateProgress(m),
                l.normalizeSlideIndex)
                    for (var f = 0; f < d.length; f += 1) {
                        var v = -Math.floor(100 * m)
                          , g = Math.floor(100 * d[f])
                          , y = Math.floor(100 * d[f + 1]);
                        void 0 !== d[f + 1] ? g <= v && v < y - (y - g) / 2 ? n = f : g <= v && v < y && (n = f + 1) : g <= v && (n = f)
                    }
                if (r.initialized && n !== u) {
                    if (!r.allowSlideNext && m < r.translate && m < r.minTranslate())
                        return !1;
                    if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (u || 0) !== n)
                        return !1
                }
                if (h = u < n ? "next" : n < u ? "prev" : "reset",
                c && -m === r.translate || !c && m === r.translate)
                    return r.updateActiveIndex(n),
                    l.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    "slide" !== l.effect && r.setTranslate(m),
                    "reset" != h && (r.transitionStart(a, h),
                    r.transitionEnd(a, h)),
                    !1;
                if (l.cssMode) {
                    u = r.isHorizontal(),
                    l = -m;
                    return c && (l = s.scrollWidth - s.offsetWidth - l),
                    0 !== t && s.scrollTo ? s.scrollTo(((c = {})[u ? "left" : "top"] = l,
                    c.behavior = "smooth",
                    c)) : s[u ? "scrollLeft" : "scrollTop"] = l,
                    !0
                }
                return 0 === t ? (r.setTransition(0),
                r.setTranslate(m),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(a, h),
                r.transitionEnd(a, h)) : (r.setTransition(t),
                r.setTranslate(m),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, i),
                r.transitionStart(a, h),
                r.animating || (r.animating = !0,
                r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                    r.onSlideToWrapperTransitionEnd = null,
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(a, h))
                }
                ),
                r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                !0
            },
            slideToLoop: function(e, t, a, i) {
                void 0 === t && (t = this.params.speed);
                e = void 0 === e ? 0 : e;
                return this.params.loop && (e += this.loopedSlides),
                this.slideTo(e, t, a = void 0 === a ? !0 : a, i)
            },
            slideNext: function(e, t, a) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var i = this
                  , s = i.params
                  , r = i.animating
                  , n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                if (s.loop) {
                    if (r && s.loopPreventsSlide)
                        return !1;
                    i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return i.slideTo(i.activeIndex + n, e, t, a)
            },
            slidePrev: function(e, t, a) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0);
                var i = this
                  , s = i.params
                  , r = i.animating
                  , n = i.snapGrid
                  , l = i.slidesGrid
                  , o = i.rtlTranslate;
                if (s.loop) {
                    if (r && s.loopPreventsSlide)
                        return !1;
                    i.loopFix(),
                    i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var p = d(o ? i.translate : -i.translate)
                  , o = n.map(d);
                n[o.indexOf(p)];
                var u, c = n[o.indexOf(p) - 1];
                return void 0 === c && s.cssMode && n.forEach(function(e) {
                    !c && e <= p && (c = e)
                }),
                void 0 !== c && (u = l.indexOf(c)) < 0 && (u = i.activeIndex - 1),
                i.slideTo(u, e, t, a)
            },
            slideReset: function(e, t, a) {
                return void 0 === e && (e = this.params.speed),
                this.slideTo(this.activeIndex, e, t = void 0 === t ? !0 : t, a)
            },
            slideToClosest: function(e, t, a, i) {
                void 0 === e && (e = this.params.speed),
                void 0 === t && (t = !0),
                void 0 === i && (i = .5);
                var s = this
                  , r = s.activeIndex
                  , n = Math.min(s.params.slidesPerGroupSkip, r)
                  , l = n + Math.floor((r - n) / s.params.slidesPerGroup)
                  , o = s.rtlTranslate ? s.translate : -s.translate;
                return o >= s.snapGrid[l] ? o - (n = s.snapGrid[l]) > (s.snapGrid[l + 1] - n) * i && (r += s.params.slidesPerGroup) : o - (o = s.snapGrid[l - 1]) <= (s.snapGrid[l] - o) * i && (r -= s.params.slidesPerGroup),
                r = Math.max(r, 0),
                r = Math.min(r, s.slidesGrid.length - 1),
                s.slideTo(r, e, t, a)
            },
            slideToClickedSlide: function() {
                var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
                a.loop ? t.animating || (e = parseInt(C(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(),
                r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                S(function() {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(),
                r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(),
                S(function() {
                    t.slideTo(r)
                })) : t.slideTo(r)) : t.slideTo(r)
            }
        },
        loop: {
            loopCreate: function() {
                var i = this
                  , e = y()
                  , t = i.params
                  , a = i.$wrapperEl;
                a.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
                var s = a.children("." + t.slideClass);
                if (t.loopFillGroupWithBlank) {
                    var r = t.slidesPerGroup - s.length % t.slidesPerGroup;
                    if (r !== t.slidesPerGroup) {
                        for (var n = 0; n < r; n += 1) {
                            var l = C(e.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                            a.append(l)
                        }
                        s = a.children("." + t.slideClass)
                    }
                }
                "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length),
                i.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)),
                i.loopedSlides += t.loopAdditionalSlides,
                i.loopedSlides > s.length && (i.loopedSlides = s.length);
                var o = []
                  , d = [];
                s.each(function(e, t) {
                    var a = C(e);
                    t < i.loopedSlides && d.push(e),
                    t < s.length && t >= s.length - i.loopedSlides && o.push(e),
                    a.attr("data-swiper-slide-index", t)
                });
                for (var p = 0; p < d.length; p += 1)
                    a.append(C(d[p].cloneNode(!0)).addClass(t.slideDuplicateClass));
                for (var u = o.length - 1; 0 <= u; --u)
                    a.prepend(C(o[u].cloneNode(!0)).addClass(t.slideDuplicateClass))
            },
            loopFix: function() {
                var e = this;
                e.emit("beforeLoopFix");
                var t, a = e.activeIndex, i = e.slides, s = e.loopedSlides, r = e.allowSlidePrev, n = e.allowSlideNext, l = e.snapGrid, o = e.rtlTranslate;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                l = -l[a] - e.getTranslate();
                a < s ? (t = i.length - 3 * s + a,
                e.slideTo(t += s, 0, !1, !0) && 0 != l && e.setTranslate((o ? -e.translate : e.translate) - l)) : a >= i.length - s && (t = -i.length + a + s,
                e.slideTo(t += s, 0, !1, !0) && 0 != l && e.setTranslate((o ? -e.translate : e.translate) - l)),
                e.allowSlidePrev = r,
                e.allowSlideNext = n,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                var e = this.$wrapperEl
                  , t = this.params
                  , a = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(),
                a.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                var t = this;
                t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode || ((t = t.el).style.cursor = "move",
                t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                t.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                t.style.cursor = e ? "grabbing" : "grab")
            },
            unsetGrabCursor: function() {
                var e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
            }
        },
        manipulation: {
            appendSlide: function(e) {
                var t = this
                  , a = t.$wrapperEl
                  , i = t.params;
                if (i.loop && t.loopDestroy(),
                "object" == typeof e && "length"in e)
                    for (var s = 0; s < e.length; s += 1)
                        e[s] && a.append(e[s]);
                else
                    a.append(e);
                i.loop && t.loopCreate(),
                i.observer && t.support.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this
                  , a = t.params
                  , i = t.$wrapperEl
                  , s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length"in e) {
                    for (var n = 0; n < e.length; n += 1)
                        e[n] && i.prepend(e[n]);
                    r = s + e.length
                } else
                    i.prepend(e);
                a.loop && t.loopCreate(),
                a.observer && t.support.observer || t.update(),
                t.slideTo(r, 0, !1)
            },
            addSlide: function(e, t) {
                var a = this
                  , i = a.$wrapperEl
                  , s = a.params
                  , r = a.activeIndex;
                s.loop && (r -= a.loopedSlides,
                a.loopDestroy(),
                a.slides = i.children("." + s.slideClass));
                var n = a.slides.length;
                if (e <= 0)
                    a.prependSlide(t);
                else if (n <= e)
                    a.appendSlide(t);
                else {
                    for (var l = e < r ? r + 1 : r, o = [], d = n - 1; e <= d; --d) {
                        var p = a.slides.eq(d);
                        p.remove(),
                        o.unshift(p)
                    }
                    if ("object" == typeof t && "length"in t) {
                        for (var u = 0; u < t.length; u += 1)
                            t[u] && i.append(t[u]);
                        l = e < r ? r + t.length : r
                    } else
                        i.append(t);
                    for (var c = 0; c < o.length; c += 1)
                        i.append(o[c]);
                    s.loop && a.loopCreate(),
                    s.observer && a.support.observer || a.update(),
                    s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this
                  , a = t.params
                  , i = t.$wrapperEl
                  , s = t.activeIndex;
                a.loop && (s -= t.loopedSlides,
                t.loopDestroy(),
                t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length"in e) {
                    for (var l = 0; l < e.length; l += 1)
                        r = e[l],
                        t.slides[r] && t.slides.eq(r).remove(),
                        r < n && --n;
                    n = Math.max(n, 0)
                } else
                    t.slides[r = e] && t.slides.eq(r).remove(),
                    r < n && --n,
                    n = Math.max(n, 0);
                a.loop && t.loopCreate(),
                a.observer && t.support.observer || t.update(),
                a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1)
                    e.push(t);
                this.removeSlide(e)
            }
        },
        events: {
            attachEvents: function() {
                var e = this
                  , t = y()
                  , a = e.params
                  , i = e.touchEvents
                  , s = e.el
                  , r = e.wrapperEl
                  , n = e.device
                  , l = e.support;
                e.onTouchStart = function(e) {
                    var t = this
                      , a = y()
                      , i = K()
                      , s = t.touchEventsData
                      , r = t.params
                      , n = t.touches;
                    if (!t.animating || !r.preventInteractionOnTransition) {
                        var l = e
                          , o = C((l = l.originalEvent ? l.originalEvent : l).target);
                        if (("wrapper" !== r.touchEventsTarget || o.closest(t.wrapperEl).length) && (s.isTouchEvent = "touchstart" === l.type,
                        (s.isTouchEvent || !("which"in l) || 3 !== l.which) && !(!s.isTouchEvent && "button"in l && 0 < l.button || s.isTouched && s.isMoved)))
                            if (r.noSwipingClass && "" !== r.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (o = C(e.path[0])),
                            r.noSwiping && o.closest(r.noSwipingSelector || "." + r.noSwipingClass)[0])
                                t.allowClick = !0;
                            else if (!r.swipeHandler || o.closest(r.swipeHandler)[0]) {
                                n.currentX = ("touchstart" === l.type ? l.targetTouches[0] : l).pageX,
                                n.currentY = ("touchstart" === l.type ? l.targetTouches[0] : l).pageY;
                                var d = n.currentX
                                  , p = n.currentY
                                  , u = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection
                                  , c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                                if (u && (d <= c || d >= i.innerWidth - c)) {
                                    if ("prevent" !== u)
                                        return;
                                    e.preventDefault()
                                }
                                Z(s, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }),
                                n.startX = d,
                                n.startY = p,
                                s.touchStartTime = M(),
                                t.allowClick = !0,
                                t.updateSize(),
                                t.swipeDirection = void 0,
                                0 < r.threshold && (s.allowThresholdMove = !1),
                                "touchstart" !== l.type && (p = !0,
                                o.is(s.formElements) && (p = !1),
                                a.activeElement && C(a.activeElement).is(s.formElements) && a.activeElement !== o[0] && a.activeElement.blur(),
                                p = p && t.allowTouchMove && r.touchStartPreventDefault,
                                !r.touchStartForcePreventDefault && !p || o[0].isContentEditable || l.preventDefault()),
                                t.emit("touchStart", l)
                            }
                    }
                }
                .bind(e),
                e.onTouchMove = function(e) {
                    var t = y()
                      , a = this
                      , i = a.touchEventsData
                      , s = a.params
                      , r = a.touches
                      , n = a.rtlTranslate
                      , l = e;
                    if (l.originalEvent && (l = l.originalEvent),
                    i.isTouched) {
                        if (!i.isTouchEvent || "touchmove" === l.type) {
                            var o = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0])
                              , e = ("touchmove" === l.type ? o : l).pageX
                              , o = ("touchmove" === l.type ? o : l).pageY;
                            if (l.preventedByNestedSwiper)
                                return r.startX = e,
                                void (r.startY = o);
                            if (!a.allowTouchMove)
                                return a.allowClick = !1,
                                void (i.isTouched && (Z(r, {
                                    startX: e,
                                    startY: o,
                                    currentX: e,
                                    currentY: o
                                }),
                                i.touchStartTime = M()));
                            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                                if (a.isVertical()) {
                                    if (o < r.startY && a.translate <= a.maxTranslate() || o > r.startY && a.translate >= a.minTranslate())
                                        return i.isTouched = !1,
                                        void (i.isMoved = !1)
                                } else if (e < r.startX && a.translate <= a.maxTranslate() || e > r.startX && a.translate >= a.minTranslate())
                                    return;
                            if (i.isTouchEvent && t.activeElement && l.target === t.activeElement && C(l.target).is(i.formElements))
                                return i.isMoved = !0,
                                void (a.allowClick = !1);
                            if (i.allowTouchCallbacks && a.emit("touchMove", l),
                            !(l.targetTouches && 1 < l.targetTouches.length)) {
                                r.currentX = e,
                                r.currentY = o;
                                t = r.currentX - r.startX,
                                e = r.currentY - r.startY;
                                if (!(a.params.threshold && Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) < a.params.threshold))
                                    if (void 0 === i.isScrolling && (a.isHorizontal() && r.currentY === r.startY || a.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : 25 <= t * t + e * e && (o = 180 * Math.atan2(Math.abs(e), Math.abs(t)) / Math.PI,
                                    i.isScrolling = a.isHorizontal() ? o > s.touchAngle : 90 - o > s.touchAngle)),
                                    i.isScrolling && a.emit("touchMoveOpposite", l),
                                    void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)),
                                    i.isScrolling)
                                        i.isTouched = !1;
                                    else if (i.startMoving) {
                                        a.allowClick = !1,
                                        !s.cssMode && l.cancelable && l.preventDefault(),
                                        s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
                                        i.isMoved || (s.loop && a.loopFix(),
                                        i.startTranslate = a.getTranslate(),
                                        a.setTransition(0),
                                        a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        i.allowMomentumBounce = !1,
                                        !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0),
                                        a.emit("sliderFirstMove", l)),
                                        a.emit("sliderMove", l),
                                        i.isMoved = !0;
                                        t = a.isHorizontal() ? t : e;
                                        r.diff = t,
                                        t *= s.touchRatio,
                                        a.swipeDirection = 0 < (t = n ? -t : t) ? "prev" : "next",
                                        i.currentTranslate = t + i.startTranslate;
                                        e = !0,
                                        n = s.resistanceRatio;
                                        if (s.touchReleaseOnEdges && (n = 0),
                                        0 < t && i.currentTranslate > a.minTranslate() ? (e = !1,
                                        s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + t, n))) : t < 0 && i.currentTranslate < a.maxTranslate() && (e = !1,
                                        s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - t, n))),
                                        e && (l.preventedByNestedSwiper = !0),
                                        !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                        0 < s.threshold) {
                                            if (!(Math.abs(t) > s.threshold || i.allowThresholdMove))
                                                return void (i.currentTranslate = i.startTranslate);
                                            if (!i.allowThresholdMove)
                                                return i.allowThresholdMove = !0,
                                                r.startX = r.currentX,
                                                r.startY = r.currentY,
                                                i.currentTranslate = i.startTranslate,
                                                void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                        }
                                        s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(),
                                        a.updateSlidesClasses()),
                                        s.freeMode && (0 === i.velocities.length && i.velocities.push({
                                            position: r[a.isHorizontal() ? "startX" : "startY"],
                                            time: i.touchStartTime
                                        }),
                                        i.velocities.push({
                                            position: r[a.isHorizontal() ? "currentX" : "currentY"],
                                            time: M()
                                        })),
                                        a.updateProgress(i.currentTranslate),
                                        a.setTranslate(i.currentTranslate))
                                    }
                            }
                        }
                    } else
                        i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", l)
                }
                .bind(e),
                e.onTouchEnd = function(e) {
                    var t = this
                      , a = t.touchEventsData
                      , i = t.params
                      , s = t.touches
                      , r = t.rtlTranslate
                      , n = t.$wrapperEl
                      , l = t.slidesGrid
                      , o = t.snapGrid
                      , d = e;
                    if (d.originalEvent && (d = d.originalEvent),
                    a.allowTouchCallbacks && t.emit("touchEnd", d),
                    a.allowTouchCallbacks = !1,
                    !a.isTouched)
                        return a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                        a.isMoved = !1,
                        void (a.startMoving = !1);
                    i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                    var p, u = M(), e = u - a.touchStartTime;
                    if (t.allowClick && (t.updateClickedSlide(d),
                    t.emit("tap click", d),
                    e < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
                    a.lastClickTime = M(),
                    S(function() {
                        t.destroyed || (t.allowClick = !0)
                    }),
                    !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                        return a.isTouched = !1,
                        a.isMoved = !1,
                        void (a.startMoving = !1);
                    if (a.isTouched = !1,
                    a.isMoved = !1,
                    a.startMoving = !1,
                    p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate,
                    !i.cssMode)
                        if (i.freeMode)
                            if (p < -t.minTranslate())
                                t.slideTo(t.activeIndex);
                            else if (p > -t.maxTranslate())
                                t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (i.freeModeMomentum) {
                                    1 < a.velocities.length ? (g = a.velocities.pop(),
                                    h = a.velocities.pop(),
                                    c = g.position - h.position,
                                    h = g.time - h.time,
                                    t.velocity = c / h,
                                    t.velocity /= 2,
                                    Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                                    (150 < h || 300 < M() - g.time) && (t.velocity = 0)) : t.velocity = 0,
                                    t.velocity *= i.freeModeMomentumVelocityRatio,
                                    a.velocities.length = 0;
                                    var c = 1e3 * i.freeModeMomentumRatio
                                      , h = t.velocity * c
                                      , m = t.translate + h;
                                    r && (m = -m);
                                    var f, v, g = !1, h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                    if (m < t.maxTranslate())
                                        i.freeModeMomentumBounce ? (m + t.maxTranslate() < -h && (m = t.maxTranslate() - h),
                                        f = t.maxTranslate(),
                                        a.allowMomentumBounce = g = !0) : m = t.maxTranslate(),
                                        i.loop && i.centeredSlides && (v = !0);
                                    else if (m > t.minTranslate())
                                        i.freeModeMomentumBounce ? (m - t.minTranslate() > h && (m = t.minTranslate() + h),
                                        f = t.minTranslate(),
                                        a.allowMomentumBounce = g = !0) : m = t.minTranslate(),
                                        i.loop && i.centeredSlides && (v = !0);
                                    else if (i.freeModeSticky) {
                                        for (var y, w = 0; w < o.length; w += 1)
                                            if (o[w] > -m) {
                                                y = w;
                                                break
                                            }
                                        m = -(Math.abs(o[y] - m) < Math.abs(o[y - 1] - m) || "next" === t.swipeDirection ? o[y] : o[y - 1])
                                    }
                                    if (v && t.once("transitionEnd", function() {
                                        t.loopFix()
                                    }),
                                    0 !== t.velocity)
                                        c = r ? Math.abs((-m - t.translate) / t.velocity) : Math.abs((m - t.translate) / t.velocity),
                                        i.freeModeSticky && (c = (v = Math.abs((r ? -m : m) - t.translate)) < (r = t.slidesSizesGrid[t.activeIndex]) ? i.speed : v < 2 * r ? 1.5 * i.speed : 2.5 * i.speed);
                                    else if (i.freeModeSticky)
                                        return void t.slideToClosest();
                                    i.freeModeMomentumBounce && g ? (t.updateProgress(f),
                                    t.setTransition(c),
                                    t.setTranslate(m),
                                    t.transitionStart(!0, t.swipeDirection),
                                    t.animating = !0,
                                    n.transitionEnd(function() {
                                        t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"),
                                        t.setTransition(i.speed),
                                        setTimeout(function() {
                                            t.setTranslate(f),
                                            n.transitionEnd(function() {
                                                t && !t.destroyed && t.transitionEnd()
                                            })
                                        }, 0))
                                    })) : t.velocity ? (t.updateProgress(m),
                                    t.setTransition(c),
                                    t.setTranslate(m),
                                    t.transitionStart(!0, t.swipeDirection),
                                    t.animating || (t.animating = !0,
                                    n.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : t.updateProgress(m),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses()
                                } else if (i.freeModeSticky)
                                    return void t.slideToClosest();
                                (!i.freeModeMomentum || e >= i.longSwipesMs) && (t.updateProgress(),
                                t.updateActiveIndex(),
                                t.updateSlidesClasses())
                            }
                        else {
                            for (var b = 0, E = t.slidesSizesGrid[0], x = 0; x < l.length; x += x < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                                var T = x < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                void 0 !== l[x + T] ? p >= l[x] && p < l[x + T] && (E = l[(b = x) + T] - l[x]) : p >= l[x] && (b = x,
                                E = l[l.length - 1] - l[l.length - 2])
                            }
                            g = (p - l[b]) / E,
                            c = b < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                            e > i.longSwipesMs ? i.longSwipes ? ("next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(b + c) : t.slideTo(b)),
                            "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(b + c) : t.slideTo(b))) : t.slideTo(t.activeIndex) : i.shortSwipes ? !t.navigation || d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(b + c),
                            "prev" === t.swipeDirection && t.slideTo(b)) : d.target === t.navigation.nextEl ? t.slideTo(b + c) : t.slideTo(b) : t.slideTo(t.activeIndex)
                        }
                }
                .bind(e),
                a.cssMode && (e.onScroll = function() {
                    var e = this
                      , t = e.wrapperEl
                      , a = e.rtlTranslate;
                    e.previousTranslate = e.translate,
                    e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop,
                    -0 === e.translate && (e.translate = 0),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    (0 == (t = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / t) !== e.progress && e.updateProgress(a ? -e.translate : e.translate),
                    e.emit("setTranslate", e.translate, !1)
                }
                .bind(e)),
                e.onClick = function(e) {
                    this.allowClick || (this.params.preventClicks && e.preventDefault(),
                    this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
                    e.stopImmediatePropagation()))
                }
                .bind(e);
                var o, d = !!a.nested;
                !l.touch && l.pointerEvents ? (s.addEventListener(i.start, e.onTouchStart, !1),
                t.addEventListener(i.move, e.onTouchMove, d),
                t.addEventListener(i.end, e.onTouchEnd, !1)) : (l.touch && (o = !("touchstart" !== i.start || !l.passiveListener || !a.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                s.addEventListener(i.start, e.onTouchStart, o),
                s.addEventListener(i.move, e.onTouchMove, l.passiveListener ? {
                    passive: !1,
                    capture: d
                } : d),
                s.addEventListener(i.end, e.onTouchEnd, o),
                i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, o),
                L || (t.addEventListener("touchstart", I),
                L = !0)),
                (a.simulateTouch && !n.ios && !n.android || a.simulateTouch && !l.touch && n.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1),
                t.addEventListener("mousemove", e.onTouchMove, d),
                t.addEventListener("mouseup", e.onTouchEnd, !1))),
                (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0),
                a.cssMode && r.addEventListener("scroll", e.onScroll),
                a.updateOnWindowResize ? e.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $, !0) : e.on("observerUpdate", $, !0)
            },
            detachEvents: function() {
                var e, t = this, a = y(), i = t.params, s = t.touchEvents, r = t.el, n = t.wrapperEl, l = t.device, o = t.support, d = !!i.nested;
                !o.touch && o.pointerEvents ? (r.removeEventListener(s.start, t.onTouchStart, !1),
                a.removeEventListener(s.move, t.onTouchMove, d),
                a.removeEventListener(s.end, t.onTouchEnd, !1)) : (o.touch && (e = !("onTouchStart" !== s.start || !o.passiveListener || !i.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                r.removeEventListener(s.start, t.onTouchStart, e),
                r.removeEventListener(s.move, t.onTouchMove, d),
                r.removeEventListener(s.end, t.onTouchEnd, e),
                s.cancel && r.removeEventListener(s.cancel, t.onTouchEnd, e)),
                (i.simulateTouch && !l.ios && !l.android || i.simulateTouch && !o.touch && l.ios) && (r.removeEventListener("mousedown", t.onTouchStart, !1),
                a.removeEventListener("mousemove", t.onTouchMove, d),
                a.removeEventListener("mouseup", t.onTouchEnd, !1))),
                (i.preventClicks || i.preventClicksPropagation) && r.removeEventListener("click", t.onClick, !0),
                i.cssMode && n.removeEventListener("scroll", t.onScroll),
                t.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", $)
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                var e, a, t, i = this, s = i.activeIndex, r = i.initialized, n = i.loopedSlides, l = void 0 === n ? 0 : n, o = i.params, d = i.$el, p = o.breakpoints;
                !p || p && 0 === Object.keys(p).length || (e = i.getBreakpoint(p)) && i.currentBreakpoint !== e && ((a = e in p ? p[e] : void 0) && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(e) {
                    var t = a[e];
                    void 0 !== t && (a[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                }),
                t = a || i.originalParams,
                n = 1 < o.slidesPerColumn,
                p = 1 < t.slidesPerColumn,
                n && !p ? (d.removeClass(o.containerModifierClass + "multirow " + o.containerModifierClass + "multirow-column"),
                i.emitContainerClasses()) : !n && p && (d.addClass(o.containerModifierClass + "multirow"),
                "column" === t.slidesPerColumnFill && d.addClass(o.containerModifierClass + "multirow-column"),
                i.emitContainerClasses()),
                d = t.direction && t.direction !== o.direction,
                o = o.loop && (t.slidesPerView !== o.slidesPerView || d),
                d && r && i.changeDirection(),
                Z(i.params, t),
                Z(i, {
                    allowTouchMove: i.params.allowTouchMove,
                    allowSlideNext: i.params.allowSlideNext,
                    allowSlidePrev: i.params.allowSlidePrev
                }),
                i.currentBreakpoint = e,
                i.emit("_beforeBreakpoint", t),
                o && r && (i.loopDestroy(),
                i.loopCreate(),
                i.updateSlides(),
                i.slideTo(s - l + i.loopedSlides, 0, !1)),
                i.emit("breakpoint", t))
            },
            getBreakpoint: function(e) {
                var a = K();
                if (e) {
                    var t = !1
                      , i = Object.keys(e).map(function(e) {
                        if ("string" != typeof e || 0 !== e.indexOf("@"))
                            return {
                                value: e,
                                point: e
                            };
                        var t = parseFloat(e.substr(1));
                        return {
                            value: a.innerHeight * t,
                            point: e
                        }
                    });
                    i.sort(function(e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    });
                    for (var s = 0; s < i.length; s += 1) {
                        var r = i[s]
                          , n = r.point;
                        r.value <= a.innerWidth && (t = n)
                    }
                    return t || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                var e = this
                  , t = e.params
                  , a = e.isLocked
                  , i = 0 < e.slides.length && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length,
                e.allowSlideNext = !e.isLocked,
                e.allowSlidePrev = !e.isLocked,
                a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                a && a !== e.isLocked && (e.isEnd = !1,
                e.navigation && e.navigation.update())
            }
        },
        classes: {
            addClasses: function() {
                var e = this
                  , t = e.classNames
                  , a = e.params
                  , i = e.rtl
                  , s = e.$el
                  , r = e.device
                  , n = e.support
                  , l = [];
                l.push("initialized"),
                l.push(a.direction),
                n.pointerEvents && !n.touch && l.push("pointer-events"),
                a.freeMode && l.push("free-mode"),
                a.autoHeight && l.push("autoheight"),
                i && l.push("rtl"),
                1 < a.slidesPerColumn && (l.push("multirow"),
                "column" === a.slidesPerColumnFill && l.push("multirow-column")),
                r.android && l.push("android"),
                r.ios && l.push("ios"),
                a.cssMode && l.push("css-mode"),
                l.forEach(function(e) {
                    t.push(a.containerModifierClass + e)
                }),
                s.addClass(t.join(" ")),
                e.emitContainerClasses()
            },
            removeClasses: function() {
                var e = this.$el
                  , t = this.classNames;
                e.removeClass(t.join(" ")),
                this.emitContainerClasses()
            }
        },
        images: {
            loadImage: function(e, t, a, i, s, r) {
                var n = K();
                function l() {
                    r && r()
                }
                !(C(e).parent("picture")[0] || e.complete && s) && t ? ((n = new n.Image).onload = l,
                n.onerror = l,
                i && (n.sizes = i),
                a && (n.srcset = a),
                t && (n.src = t)) : l()
            },
            preloadImages: function() {
                var e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                    var i = e.imagesToLoad[a];
                    e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, B = {}, H = ((D = X.prototype).emitContainerClasses = function() {
        var e, t = this;
        t.params._emitClasses && t.el && (e = t.el.className.split(" ").filter(function(e) {
            return 0 === e.indexOf("swiper-container") || 0 === e.indexOf(t.params.containerModifierClass)
        }),
        t.emit("_containerClasses", e.join(" ")))
    }
    ,
    D.getSlideClasses = function(e) {
        var t = this;
        return e.className.split(" ").filter(function(e) {
            return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
        }).join(" ")
    }
    ,
    D.emitSlidesClasses = function() {
        var a, i = this;
        i.params._emitClasses && i.el && (a = [],
        i.slides.each(function(e) {
            var t = i.getSlideClasses(e);
            a.push({
                slideEl: e,
                classNames: t
            }),
            i.emit("_slideClass", e, t)
        }),
        i.emit("_slideClasses", a))
    }
    ,
    D.slidesPerViewDynamic = function() {
        var e = this
          , t = e.params
          , a = e.slides
          , i = e.slidesGrid
          , s = e.size
          , r = e.activeIndex
          , n = 1;
        if (t.centeredSlides) {
            for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1)
                a[d] && !l && (n += 1,
                (o += a[d].swiperSlideSize) > s && (l = !0));
            for (var p = r - 1; 0 <= p; --p)
                a[p] && !l && (n += 1,
                (o += a[p].swiperSlideSize) > s && (l = !0))
        } else
            for (var u = r + 1; u < a.length; u += 1)
                i[u] - i[r] < s && (n += 1);
        return n
    }
    ,
    D.update = function() {
        var e, t, a = this;
        function i() {
            var e = a.rtlTranslate ? -1 * a.translate : a.translate
              , e = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
            a.setTranslate(e),
            a.updateActiveIndex(),
            a.updateSlidesClasses()
        }
        a && !a.destroyed && (e = a.snapGrid,
        (t = a.params).breakpoints && a.setBreakpoint(),
        a.updateSize(),
        a.updateSlides(),
        a.updateProgress(),
        a.updateSlidesClasses(),
        a.params.freeMode ? (i(),
        a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
        t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
        a.emit("update"))
    }
    ,
    D.changeDirection = function(t, e) {
        void 0 === e && (e = !0);
        var a = this
          , i = a.params.direction;
        return (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== t && "vertical" !== t || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + t),
        a.emitContainerClasses(),
        a.params.direction = t,
        a.slides.each(function(e) {
            "vertical" === t ? e.style.width = "" : e.style.height = ""
        }),
        a.emit("changeDirection"),
        e && a.update()),
        a
    }
    ,
    D.mount = function(e) {
        var t, a, i = this;
        i.mounted || (e = (a = C(e || i.params.el))[0]) && (e.swiper = i,
        e && e.shadowRoot && e.shadowRoot.querySelector ? (t = C(e.shadowRoot.querySelector("." + i.params.wrapperClass))).children = function(e) {
            return a.children(e)
        }
        : t = a.children("." + i.params.wrapperClass),
        Z(i, {
            $el: a,
            el: e,
            $wrapperEl: t,
            wrapperEl: t[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
            rtlTranslate: "horizontal" === i.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
            wrongRTL: "-webkit-box" === t.css("display")
        }))
    }
    ,
    D.init = function(e) {
        var t = this;
        t.initialized || (t.mount(e),
        t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.params.loop && t.loopCreate(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.setGrabCursor(),
        t.params.preloadImages && t.preloadImages(),
        t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit),
        t.attachEvents(),
        t.initialized = !0,
        t.emit("init"),
        t.emit("afterInit"))
    }
    ,
    D.destroy = function(e, t) {
        void 0 === e && (e = !0),
        void 0 === t && (t = !0);
        var a, i = this, s = i.params, r = i.$el, n = i.$wrapperEl, l = i.slides;
        return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
        i.initialized = !1,
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        t && (i.removeClasses(),
        r.removeAttr("style"),
        n.removeAttr("style"),
        l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
        i.emit("destroy"),
        Object.keys(i.eventsListeners).forEach(function(e) {
            i.off(e)
        }),
        !1 !== e && (i.$el[0].swiper = null,
        a = i,
        Object.keys(a).forEach(function(e) {
            try {
                a[e] = null
            } catch (e) {}
            try {
                delete a[e]
            } catch (e) {}
        })),
        i.destroyed = !0),
        null
    }
    ,
    X.extendDefaults = function(e) {
        Z(B, e)
    }
    ,
    X.installModule = function(e) {
        X.prototype.modules || (X.prototype.modules = {});
        var t = e.name || Object.keys(X.prototype.modules).length + "_" + M();
        X.prototype.modules[t] = e
    }
    ,
    X.use = function(e) {
        return Array.isArray(e) ? e.forEach(function(e) {
            return X.installModule(e)
        }) : X.installModule(e),
        X
    }
    ,
    O = X,
    A = [{
        key: "extendedDefaults",
        get: function() {
            return B
        }
    }, {
        key: "defaults",
        get: function() {
            return G
        }
    }],
    (D = null) && e(O.prototype, D),
    e(O, A),
    X);
    function X() {
        for (var a, e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        if (a = Z({}, a = (a = 1 === t.length && t[0].constructor && t[0].constructor === Object ? t[0] : (g = t[0],
        t[1])) || {}),
        g && !a.el && (a.el = g),
        a.el && 1 < C(a.el).length) {
            var s = [];
            return C(a.el).each(function(e) {
                e = Z({}, a, {
                    el: e
                });
                s.push(new X(e))
            }),
            s
        }
        var r, n, l, o, d, p, u, c, h, m, f, v = this;
        v.support = T(),
        v.device = (void 0 === (r = {
            userAgent: a.userAgent
        }) && (r = {}),
        w || (n = (void 0 === r ? {} : r).userAgent,
        l = T(),
        o = K(),
        d = o.navigator.platform,
        p = n || o.navigator.userAgent,
        u = {
            ios: !1,
            android: !1
        },
        c = o.screen.width,
        h = o.screen.height,
        m = p.match(/(Android);?[\s\/]+([\d.]+)?/),
        f = p.match(/(iPad).*OS\s([\d_]+)/),
        r = p.match(/(iPod)(.*OS\s([\d_]+))?/),
        n = !f && p.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        o = "Win32" === d,
        d = "MacIntel" === d,
        !f && d && l.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(c + "x" + h) && ((f = p.match(/(Version)\/([\d.]+)/)) || (f = [0, 1, "13_0_0"]),
        d = !1),
        m && !o && (u.os = "android",
        u.android = !0),
        (f || n || r) && (u.os = "ios",
        u.ios = !0),
        w = u),
        w),
        v.browser = (b || (y = K(),
        b = {
            isEdge: !!y.navigator.userAgent.match(/Edge/g),
            isSafari: 0 <= (u = y.navigator.userAgent.toLowerCase()).indexOf("safari") && u.indexOf("chrome") < 0 && u.indexOf("android") < 0,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(y.navigator.userAgent)
        }),
        b),
        v.eventsListeners = {},
        v.eventsAnyListeners = [],
        void 0 === v.modules && (v.modules = {}),
        Object.keys(v.modules).forEach(function(e) {
            var t = v.modules[e];
            t.params && (e = Object.keys(t.params)[0],
            "object" == typeof (t = t.params[e]) && null !== t && e in a && "enabled"in t && (!0 === a[e] && (a[e] = {
                enabled: !0
            }),
            "object" != typeof a[e] || "enabled"in a[e] || (a[e].enabled = !0),
            a[e] || (a[e] = {
                enabled: !1
            })))
        });
        var g, y = Z({}, G);
        return v.useParams(y),
        v.params = Z({}, y, B, a),
        v.originalParams = Z({}, v.params),
        v.passedParams = Z({}, a),
        v.params && v.params.on && Object.keys(v.params.on).forEach(function(e) {
            v.on(e, v.params.on[e])
        }),
        v.params && v.params.onAny && v.onAny(v.params.onAny),
        v.$ = C,
        Z(v, {
            el: g,
            classNames: [],
            slides: C(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: function() {
                return "horizontal" === v.params.direction
            },
            isVertical: function() {
                return "vertical" === v.params.direction
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: v.params.allowSlideNext,
            allowSlidePrev: v.params.allowSlidePrev,
            touchEvents: (y = ["mousedown", "mousemove", "mouseup"],
            v.support.pointerEvents && (y = ["pointerdown", "pointermove", "pointerup"]),
            v.touchEventsTouch = {
                start: (g = ["touchstart", "touchmove", "touchend", "touchcancel"])[0],
                move: g[1],
                end: g[2],
                cancel: g[3]
            },
            v.touchEventsDesktop = {
                start: y[0],
                move: y[1],
                end: y[2]
            },
            v.support.touch || !v.params.simulateTouch ? v.touchEventsTouch : v.touchEventsDesktop),
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video, label",
                lastClickTime: M(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: v.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }),
        v.useModules(),
        v.emit("_swiper"),
        v.params.init && v.init(),
        v
    }
    Object.keys(N).forEach(function(t) {
        Object.keys(N[t]).forEach(function(e) {
            H.prototype[e] = N[t][e]
        })
    }),
    H.use([z, k]);
    var V = {
        update: function(e) {
            var t = this
              , a = t.params
              , i = a.slidesPerView
              , s = a.slidesPerGroup
              , r = a.centeredSlides
              , n = t.params.virtual
              , l = n.addSlidesBefore
              , o = n.addSlidesAfter
              , d = t.virtual
              , p = d.from
              , u = d.to
              , c = d.slides
              , h = d.slidesGrid
              , m = d.renderSlide
              , a = d.offset;
            t.updateActiveIndex();
            var n = t.activeIndex || 0
              , d = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"
              , l = r ? (g = Math.floor(i / 2) + s + o,
            Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o,
            s + l)
              , f = Math.max((n || 0) - l, 0)
              , v = Math.min((n || 0) + g, c.length - 1)
              , g = (t.slidesGrid[f] || 0) - (t.slidesGrid[0] || 0);
            function y() {
                t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (Z(t.virtual, {
                from: f,
                to: v,
                offset: g,
                slidesGrid: t.slidesGrid
            }),
            p === f && u === v && !e)
                return t.slidesGrid !== h && g !== a && t.slides.css(d, g + "px"),
                void t.updateProgress();
            if (t.params.virtual.renderExternal)
                return t.params.virtual.renderExternal.call(t, {
                    offset: g,
                    from: f,
                    to: v,
                    slides: function() {
                        for (var e = [], t = f; t <= v; t += 1)
                            e.push(c[t]);
                        return e
                    }()
                }),
                void (t.params.virtual.renderExternalUpdate && y());
            var w = []
              , b = [];
            if (e)
                t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (var E = p; E <= u; E += 1)
                    (E < f || v < E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + E + '"]').remove();
            for (var x = 0; x < c.length; x += 1)
                f <= x && x <= v && (void 0 === u || e ? b.push(x) : (u < x && b.push(x),
                x < p && w.push(x)));
            b.forEach(function(e) {
                t.$wrapperEl.append(m(c[e], e))
            }),
            w.sort(function(e, t) {
                return t - e
            }).forEach(function(e) {
                t.$wrapperEl.prepend(m(c[e], e))
            }),
            t.$wrapperEl.children(".swiper-slide").css(d, g + "px"),
            y()
        },
        renderSlide: function(e, t) {
            var a = this
              , i = a.params.virtual;
            if (i.cache && a.virtual.cache[t])
                return a.virtual.cache[t];
            e = i.renderSlide ? C(i.renderSlide.call(a, e, t)) : C('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return e.attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t),
            i.cache && (a.virtual.cache[t] = e),
            e
        },
        appendSlide: function(e) {
            if ("object" == typeof e && "length"in e)
                for (var t = 0; t < e.length; t += 1)
                    e[t] && this.virtual.slides.push(e[t]);
            else
                this.virtual.slides.push(e);
            this.virtual.update(!0)
        },
        prependSlide: function(e) {
            var i, s, t = this, a = t.activeIndex, r = a + 1, n = 1;
            if (Array.isArray(e)) {
                for (var l = 0; l < e.length; l += 1)
                    e[l] && t.virtual.slides.unshift(e[l]);
                r = a + e.length,
                n = e.length
            } else
                t.virtual.slides.unshift(e);
            t.params.virtual.cache && (i = t.virtual.cache,
            s = {},
            Object.keys(i).forEach(function(e) {
                var t = i[e]
                  , a = t.attr("data-swiper-slide-index");
                a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1),
                s[parseInt(e, 10) + n] = t
            }),
            t.virtual.cache = s),
            t.virtual.update(!0),
            t.slideTo(r, 0)
        },
        removeSlide: function(e) {
            var t = this;
            if (null != e) {
                var a = t.activeIndex;
                if (Array.isArray(e))
                    for (var i = e.length - 1; 0 <= i; --i)
                        t.virtual.slides.splice(e[i], 1),
                        t.params.virtual.cache && delete t.virtual.cache[e[i]],
                        e[i] < a && --a,
                        a = Math.max(a, 0);
                else
                    t.virtual.slides.splice(e, 1),
                    t.params.virtual.cache && delete t.virtual.cache[e],
                    e < a && --a,
                    a = Math.max(a, 0);
                t.virtual.update(!0),
                t.slideTo(a, 0)
            }
        },
        removeAllSlides: function() {
            var e = this;
            e.virtual.slides = [],
            e.params.virtual.cache && (e.virtual.cache = {}),
            e.virtual.update(!0),
            e.slideTo(0, 0)
        }
    }
      , z = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create: function() {
            x(this, {
                virtual: t({}, V, {
                    slides: this.params.virtual.slides,
                    cache: {}
                })
            })
        },
        on: {
            beforeInit: function(e) {
                var t;
                e.params.virtual.enabled && (e.classNames.push(e.params.containerModifierClass + "virtual"),
                Z(e.params, t = {
                    watchSlidesProgress: !0
                }),
                Z(e.originalParams, t),
                e.params.initialSlide || e.virtual.update())
            },
            setTranslate: function(e) {
                e.params.virtual.enabled && e.virtual.update()
            }
        }
    }
      , Y = {
        handle: function(e) {
            var t = this
              , a = K()
              , i = y()
              , s = t.rtlTranslate
              , r = e
              , n = (r = r.originalEvent ? r.originalEvent : r).keyCode || r.charCode
              , l = t.params.keyboard.pageUpDown
              , o = l && 33 === n
              , d = l && 34 === n
              , p = 37 === n
              , u = 39 === n
              , e = 38 === n
              , l = 40 === n;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && l || d))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && e || o))
                return !1;
            if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (o || d || p || u || e || l)) {
                    var c = !1;
                    if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length)
                        return;
                    var h = a.innerWidth
                      , m = a.innerHeight
                      , a = t.$el.offset();
                    s && (a.left -= t.$el[0].scrollLeft);
                    for (var f = [[a.left, a.top], [a.left + t.width, a.top], [a.left, a.top + t.height], [a.left + t.width, a.top + t.height]], v = 0; v < f.length; v += 1) {
                        var g = f[v];
                        0 <= g[0] && g[0] <= h && 0 <= g[1] && g[1] <= m && (0 === g[0] && 0 === g[1] || (c = !0))
                    }
                    if (!c)
                        return
                }
                t.isHorizontal() ? ((o || d || p || u) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                ((d || u) && !s || (o || p) && s) && t.slideNext(),
                ((o || p) && !s || (d || u) && s) && t.slidePrev()) : ((o || d || e || l) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                (d || l) && t.slideNext(),
                (o || e) && t.slidePrev()),
                t.emit("keyPress", n)
            }
        },
        enable: function() {
            var e = y();
            this.keyboard.enabled || (C(e).on("keydown", this.keyboard.handle),
            this.keyboard.enabled = !0)
        },
        disable: function() {
            var e = y();
            this.keyboard.enabled && (C(e).off("keydown", this.keyboard.handle),
            this.keyboard.enabled = !1)
        }
    }
      , k = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        },
        create: function() {
            x(this, {
                keyboard: t({
                    enabled: !1
                }, Y)
            })
        },
        on: {
            init: function(e) {
                e.params.keyboard.enabled && e.keyboard.enable()
            },
            destroy: function(e) {
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    }
      , F = {
        lastScrollTime: M(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function() {
            return -1 < K().navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : (t = y(),
            (i = (a = "onwheel")in t) || ((e = t.createElement("div")).setAttribute(a, "return;"),
            i = "function" == typeof e.onwheel),
            (i = !i && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") ? t.implementation.hasFeature("Events.wheel", "3.0") : i) ? "wheel" : "mousewheel");
            var e, t, a, i
        },
        normalize: function(e) {
            var t = 0
              , a = 0
              , i = 0
              , s = 0;
            return "detail"in e && (a = e.detail),
            "wheelDelta"in e && (a = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (a = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = a,
            a = 0),
            i = 10 * t,
            s = 10 * a,
            "deltaY"in e && (s = e.deltaY),
            "deltaX"in e && (i = e.deltaX),
            e.shiftKey && !i && (i = s,
            s = 0),
            (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40,
            s *= 40) : (i *= 800,
            s *= 800)),
            {
                spinX: t = i && !t ? i < 1 ? -1 : 1 : t,
                spinY: a = s && !a ? s < 1 ? -1 : 1 : a,
                pixelX: i,
                pixelY: s
            }
        },
        handleMouseEnter: function() {
            this.mouseEntered = !0
        },
        handleMouseLeave: function() {
            this.mouseEntered = !1
        },
        handle: function(e) {
            var t = e
              , a = this
              , i = a.params.mousewheel;
            a.params.cssMode && t.preventDefault();
            var s = a.$el;
            if ("container" !== a.params.mousewheel.eventsTarget && (s = C(a.params.mousewheel.eventsTarget)),
            !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges)
                return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0
              , n = a.rtlTranslate ? -1 : 1
              , s = F.normalize(t);
            if (i.forceToAxis)
                if (a.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY)))
                        return !0;
                    r = -s.pixelX * n
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX)))
                        return !0;
                    r = -s.pixelY
                }
            else
                r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * n : -s.pixelY;
            if (0 === r)
                return !0;
            i.invert && (r = -r);
            n = a.getTranslate() + r * i.sensitivity;
            if ((n = n >= a.minTranslate() ? a.minTranslate() : n) <= a.maxTranslate() && (n = a.maxTranslate()),
            (a.params.loop || n !== a.minTranslate() && n !== a.maxTranslate()) && a.params.nested && t.stopPropagation(),
            a.params.freeMode) {
                var l = {
                    time: M(),
                    delta: Math.abs(r),
                    direction: Math.sign(r)
                }
                  , s = a.mousewheel.lastEventBeforeSnap
                  , n = s && l.time < s.time + 500 && l.delta <= s.delta && l.direction === s.direction;
                if (!n) {
                    a.mousewheel.lastEventBeforeSnap = void 0,
                    a.params.loop && a.loopFix();
                    var o, d, p = a.getTranslate() + r * i.sensitivity, s = a.isBeginning, i = a.isEnd;
                    if ((p = p >= a.minTranslate() ? a.minTranslate() : p) <= a.maxTranslate() && (p = a.maxTranslate()),
                    a.setTransition(0),
                    a.setTranslate(p),
                    a.updateProgress(),
                    a.updateActiveIndex(),
                    a.updateSlidesClasses(),
                    (!s && a.isBeginning || !i && a.isEnd) && a.updateSlidesClasses(),
                    a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                    a.mousewheel.timeout = void 0,
                    15 <= (o = a.mousewheel.recentWheelEvents).length && o.shift(),
                    s = o.length ? o[o.length - 1] : void 0,
                    i = o[0],
                    o.push(l),
                    s && (l.delta > s.delta || l.direction !== s.direction) ? o.splice(0) : 15 <= o.length && l.time - i.time < 500 && 1 <= i.delta - l.delta && l.delta <= 6 && (d = 0 < r ? .8 : .2,
                    a.mousewheel.lastEventBeforeSnap = l,
                    o.splice(0),
                    a.mousewheel.timeout = S(function() {
                        a.slideToClosest(a.params.speed, !0, void 0, d)
                    }, 0)),
                    a.mousewheel.timeout || (a.mousewheel.timeout = S(function() {
                        a.mousewheel.lastEventBeforeSnap = l,
                        o.splice(0),
                        a.slideToClosest(a.params.speed, !0, void 0, .5)
                    }, 500))),
                    n || a.emit("scroll", t),
                    a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                    p === a.minTranslate() || p === a.maxTranslate())
                        return !0
                }
            } else {
                p = {
                    time: M(),
                    delta: Math.abs(r),
                    direction: Math.sign(r),
                    raw: e
                },
                r = a.mousewheel.recentWheelEvents;
                2 <= r.length && r.shift();
                e = r.length ? r[r.length - 1] : void 0;
                if (r.push(p),
                (!e || p.direction !== e.direction || p.delta > e.delta || p.time > e.time + 150) && a.mousewheel.animateSlider(p),
                a.mousewheel.releaseScroll(p))
                    return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            !1
        },
        animateSlider: function(e) {
            var t = this
              , a = K();
            return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && M() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime || !(6 <= e.delta && M() - t.mousewheel.lastScrollTime < 60) && (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
            t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
            t.emit("scroll", e.raw)),
            t.mousewheel.lastScrollTime = (new a.Date).getTime(),
            1))
        },
        releaseScroll: function(e) {
            var t = this
              , a = t.params.mousewheel;
            if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && a.releaseOnEdges)
                    return !0
            } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
                return !0;
            return !1
        },
        enable: function() {
            var e = this
              , t = F.event();
            if (e.params.cssMode)
                return e.wrapperEl.removeEventListener(t, e.mousewheel.handle),
                !0;
            if (!t)
                return !1;
            if (e.mousewheel.enabled)
                return !1;
            var a = e.$el;
            return (a = "container" !== e.params.mousewheel.eventsTarget ? C(e.params.mousewheel.eventsTarget) : a).on("mouseenter", e.mousewheel.handleMouseEnter),
            a.on("mouseleave", e.mousewheel.handleMouseLeave),
            a.on(t, e.mousewheel.handle),
            e.mousewheel.enabled = !0
        },
        disable: function() {
            var e = this
              , t = F.event();
            if (e.params.cssMode)
                return e.wrapperEl.addEventListener(t, e.mousewheel.handle),
                !0;
            if (!t)
                return !1;
            if (!e.mousewheel.enabled)
                return !1;
            var a = e.$el;
            return (a = "container" !== e.params.mousewheel.eventsTarget ? C(e.params.mousewheel.eventsTarget) : a).off(t, e.mousewheel.handle),
            !(e.mousewheel.enabled = !1)
        }
    }
      , R = {
        update: function() {
            var e, t, a = this, i = a.params.navigation;
            a.params.loop || (e = (t = a.navigation).$nextEl,
            (t = t.$prevEl) && 0 < t.length && (a.isBeginning ? t.addClass(i.disabledClass) : t.removeClass(i.disabledClass),
            t[a.params.watchOverflow && a.isLocked ? "addClass" : "removeClass"](i.lockClass)),
            e && 0 < e.length && (a.isEnd ? e.addClass(i.disabledClass) : e.removeClass(i.disabledClass),
            e[a.params.watchOverflow && a.isLocked ? "addClass" : "removeClass"](i.lockClass)))
        },
        onPrevClick: function(e) {
            e.preventDefault(),
            this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick: function(e) {
            e.preventDefault(),
            this.isEnd && !this.params.loop || this.slideNext()
        },
        init: function() {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = C(i.nextEl),
            a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))),
            i.prevEl && (t = C(i.prevEl),
            a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))),
            e && 0 < e.length && e.on("click", a.navigation.onNextClick),
            t && 0 < t.length && t.on("click", a.navigation.onPrevClick),
            Z(a.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        },
        destroy: function() {
            var e = this
              , t = e.navigation
              , a = t.$nextEl
              , t = t.$prevEl;
            a && a.length && (a.off("click", e.navigation.onNextClick),
            a.removeClass(e.params.navigation.disabledClass)),
            t && t.length && (t.off("click", e.navigation.onPrevClick),
            t.removeClass(e.params.navigation.disabledClass))
        }
    }
      , W = {
        update: function() {
            var e = this
              , t = e.rtl
              , a = e.params.pagination;
            if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var i, s = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length, r = e.pagination.$el, n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides),
                n - 1 < i && (i -= n),
                i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === a.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var l, o, d, p, u, c = e.pagination.bullets;
                    if (a.dynamicBullets && (e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"),
                    1 < a.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex,
                    e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                    l = i - e.pagination.dynamicBulletIndex,
                    d = ((o = l + (Math.min(c.length, a.dynamicMainBullets) - 1)) + l) / 2),
                    c.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"),
                    1 < r.length)
                        c.each(function(e) {
                            var t = C(e)
                              , e = t.index();
                            e === i && t.addClass(a.bulletActiveClass),
                            a.dynamicBullets && (l <= e && e <= o && t.addClass(a.bulletActiveClass + "-main"),
                            e === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"),
                            e === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"))
                        });
                    else {
                        var h = c.eq(i)
                          , m = h.index();
                        if (h.addClass(a.bulletActiveClass),
                        a.dynamicBullets) {
                            for (var s = c.eq(l), h = c.eq(o), f = l; f <= o; f += 1)
                                c.eq(f).addClass(a.bulletActiveClass + "-main");
                            if (e.params.loop)
                                if (m >= c.length - a.dynamicMainBullets) {
                                    for (var v = a.dynamicMainBullets; 0 <= v; --v)
                                        c.eq(c.length - v).addClass(a.bulletActiveClass + "-main");
                                    c.eq(c.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev")
                                } else
                                    s.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"),
                                    h.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
                            else
                                s.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"),
                                h.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next")
                        }
                    }
                    a.dynamicBullets && (u = Math.min(c.length, a.dynamicMainBullets + 4),
                    p = (e.pagination.bulletSize * u - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                    u = t ? "right" : "left",
                    c.css(e.isHorizontal() ? u : "top", p + "px"))
                }
                "fraction" === a.type && (r.find("." + a.currentClass).text(a.formatFractionCurrent(i + 1)),
                r.find("." + a.totalClass).text(a.formatFractionTotal(n))),
                "progressbar" === a.type && (d = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical",
                t = (i + 1) / n,
                p = u = 1,
                "horizontal" == d ? u = t : p = t,
                r.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + u + ") scaleY(" + p + ")").transition(e.params.speed)),
                "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)),
                e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]),
                r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](a.lockClass)
            }
        },
        render: function() {
            var e = this
              , t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length
                  , i = e.pagination.$el
                  , s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                        t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s),
                    e.pagination.bullets = i.find("." + t.bulletClass.replace(/ /g, "."))
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>',
                i.html(s)),
                "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>',
                i.html(s)),
                "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        },
        init: function() {
            var e, t = this, a = t.params.pagination;
            !a.el || 0 !== (e = C(a.el)).length && (t.params.uniqueNavElements && "string" == typeof a.el && 1 < e.length && (e = t.$el.find(a.el)),
            "bullets" === a.type && a.clickable && e.addClass(a.clickableClass),
            e.addClass(a.modifierClass + a.type),
            "bullets" === a.type && a.dynamicBullets && (e.addClass("" + a.modifierClass + a.type + "-dynamic"),
            t.pagination.dynamicBulletIndex = 0,
            a.dynamicMainBullets < 1 && (a.dynamicMainBullets = 1)),
            "progressbar" === a.type && a.progressbarOpposite && e.addClass(a.progressbarOppositeClass),
            a.clickable && e.on("click", "." + a.bulletClass.replace(/ /g, "."), function(e) {
                e.preventDefault();
                e = C(this).index() * t.params.slidesPerGroup;
                t.params.loop && (e += t.loopedSlides),
                t.slideTo(e)
            }),
            Z(t.pagination, {
                $el: e,
                el: e[0]
            }))
        },
        destroy: function() {
            var e, t = this, a = t.params.pagination;
            a.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length && ((e = t.pagination.$el).removeClass(a.hiddenClass),
            e.removeClass(a.modifierClass + a.type),
            t.pagination.bullets && t.pagination.bullets.removeClass(a.bulletActiveClass),
            a.clickable && e.off("click", "." + a.bulletClass.replace(/ /g, ".")))
        }
    }
      , q = {
        setTranslate: function() {
            var e, t, a, i, s, r, n, l, o = this;
            o.params.scrollbar.el && o.scrollbar.el && (n = o.scrollbar,
            e = o.rtlTranslate,
            l = o.progress,
            t = n.dragSize,
            a = n.trackSize,
            i = n.$dragEl,
            s = n.$el,
            r = o.params.scrollbar,
            l = (a - (n = t)) * l,
            e ? 0 < (l = -l) ? (n = t - l,
            l = 0) : a < -l + t && (n = a + l) : l < 0 ? (n = t + l,
            l = 0) : a < l + t && (n = a - l),
            o.isHorizontal() ? (i.transform("translate3d(" + l + "px, 0, 0)"),
            i[0].style.width = n + "px") : (i.transform("translate3d(0px, " + l + "px, 0)"),
            i[0].style.height = n + "px"),
            r.hide && (clearTimeout(o.scrollbar.timeout),
            s[0].style.opacity = 1,
            o.scrollbar.timeout = setTimeout(function() {
                s[0].style.opacity = 0,
                s.transition(400)
            }, 1e3)))
        },
        setTransition: function(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize: function() {
            var e, t, a, i, s, r, n, l = this;
            l.params.scrollbar.el && l.scrollbar.el && (t = (e = l.scrollbar).$dragEl,
            a = e.$el,
            t[0].style.width = "",
            t[0].style.height = "",
            i = l.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
            r = (s = l.size / l.virtualSize) * (i / l.size),
            n = "auto" === l.params.scrollbar.dragSize ? i * s : parseInt(l.params.scrollbar.dragSize, 10),
            l.isHorizontal() ? t[0].style.width = n + "px" : t[0].style.height = n + "px",
            a[0].style.display = 1 <= s ? "none" : "",
            l.params.scrollbar.hide && (a[0].style.opacity = 0),
            Z(e, {
                trackSize: i,
                divider: s,
                moveDivider: r,
                dragSize: n
            }),
            e.$el[l.params.watchOverflow && l.isLocked ? "addClass" : "removeClass"](l.params.scrollbar.lockClass))
        },
        getPointerPosition: function(e) {
            return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY
        },
        setDragPosition: function(e) {
            var t = this
              , a = t.scrollbar
              , i = t.rtlTranslate
              , s = a.$el
              , r = a.dragSize
              , n = a.trackSize
              , l = a.dragStartPos
              , r = (a.getPointerPosition(e) - s.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l ? l : r / 2)) / (n - r);
            r = Math.max(Math.min(r, 1), 0),
            i && (r = 1 - r);
            r = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(r),
            t.setTranslate(r),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        },
        onDragStart: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar
              , s = t.$wrapperEl
              , r = i.$el
              , n = i.$dragEl;
            t.scrollbar.isTouched = !0,
            t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            s.transition(100),
            n.transition(100),
            i.setDragPosition(e),
            clearTimeout(t.scrollbar.dragTimeout),
            r.transition(0),
            a.hide && r.css("opacity", 1),
            t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
            t.emit("scrollbarDragStart", e)
        },
        onDragMove: function(e) {
            var t = this.scrollbar
              , a = this.$wrapperEl
              , i = t.$el
              , s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            t.setDragPosition(e),
            a.transition(0),
            i.transition(0),
            s.transition(0),
            this.emit("scrollbarDragMove", e))
        },
        onDragEnd: function(e) {
            var t = this
              , a = t.params.scrollbar
              , i = t.scrollbar
              , s = t.$wrapperEl
              , r = i.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1,
            t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""),
            s.transition("")),
            a.hide && (clearTimeout(t.scrollbar.dragTimeout),
            t.scrollbar.dragTimeout = S(function() {
                r.css("opacity", 0),
                r.transition(400)
            }, 1e3)),
            t.emit("scrollbarDragEnd", e),
            a.snapOnRelease && t.slideToClosest())
        },
        enableDraggable: function() {
            var e, t, a, i, s, r, n, l = this;
            l.params.scrollbar.el && (e = y(),
            r = l.scrollbar,
            t = l.touchEventsTouch,
            a = l.touchEventsDesktop,
            n = l.params,
            i = l.support,
            s = r.$el[0],
            r = !(!i.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1
            },
            n = !(!i.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            },
            s && (i.touch ? (s.addEventListener(t.start, l.scrollbar.onDragStart, r),
            s.addEventListener(t.move, l.scrollbar.onDragMove, r),
            s.addEventListener(t.end, l.scrollbar.onDragEnd, n)) : (s.addEventListener(a.start, l.scrollbar.onDragStart, r),
            e.addEventListener(a.move, l.scrollbar.onDragMove, r),
            e.addEventListener(a.end, l.scrollbar.onDragEnd, n))))
        },
        disableDraggable: function() {
            var e, t, a, i, s, r, n, l = this;
            l.params.scrollbar.el && (e = y(),
            r = l.scrollbar,
            t = l.touchEventsTouch,
            a = l.touchEventsDesktop,
            n = l.params,
            i = l.support,
            s = r.$el[0],
            r = !(!i.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1
            },
            n = !(!i.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            },
            s && (i.touch ? (s.removeEventListener(t.start, l.scrollbar.onDragStart, r),
            s.removeEventListener(t.move, l.scrollbar.onDragMove, r),
            s.removeEventListener(t.end, l.scrollbar.onDragEnd, n)) : (s.removeEventListener(a.start, l.scrollbar.onDragStart, r),
            e.removeEventListener(a.move, l.scrollbar.onDragMove, r),
            e.removeEventListener(a.end, l.scrollbar.onDragEnd, n))))
        },
        init: function() {
            var e, t, a, i, s = this;
            s.params.scrollbar.el && (e = s.scrollbar,
            i = s.$el,
            a = C((t = s.params.scrollbar).el),
            0 === (i = (a = s.params.uniqueNavElements && "string" == typeof t.el && 1 < a.length && 1 === i.find(t.el).length ? i.find(t.el) : a).find("." + s.params.scrollbar.dragClass)).length && (i = C('<div class="' + s.params.scrollbar.dragClass + '"></div>'),
            a.append(i)),
            Z(e, {
                $el: a,
                el: a[0],
                $dragEl: i,
                dragEl: i[0]
            }),
            t.draggable && e.enableDraggable())
        },
        destroy: function() {
            this.scrollbar.disableDraggable()
        }
    }
      , j = {
        setTransform: function(e, t) {
            var a = this.rtl
              , i = C(e)
              , s = a ? -1 : 1
              , r = i.attr("data-swiper-parallax") || "0"
              , n = i.attr("data-swiper-parallax-x")
              , l = i.attr("data-swiper-parallax-y")
              , e = i.attr("data-swiper-parallax-scale")
              , a = i.attr("data-swiper-parallax-opacity");
            n || l ? (n = n || "0",
            l = l || "0") : this.isHorizontal() ? (n = r,
            l = "0") : (l = r,
            n = "0"),
            n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px",
            l = 0 <= l.indexOf("%") ? parseInt(l, 10) * t + "%" : l * t + "px",
            null != a && (a = a - (a - 1) * (1 - Math.abs(t)),
            i[0].style.opacity = a),
            null == e ? i.transform("translate3d(" + n + ", " + l + ", 0px)") : (t = e - (e - 1) * (1 - Math.abs(t)),
            i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + t + ")"))
        },
        setTranslate: function() {
            var i = this
              , e = i.$el
              , t = i.slides
              , s = i.progress
              , r = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                i.parallax.setTransform(e, s)
            }),
            t.each(function(e, t) {
                var a = e.progress;
                1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(t / 2) - s * (r.length - 1)),
                a = Math.min(Math.max(a, -1), 1),
                C(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                    i.parallax.setTransform(e, a)
                })
            })
        },
        setTransition: function(a) {
            void 0 === a && (a = this.params.speed),
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                var t = C(e)
                  , e = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                t.transition(e = 0 === a ? 0 : e)
            })
        }
    }
      , _ = {
        getDistanceBetweenTouches: function(e) {
            if (e.targetTouches.length < 2)
                return 1;
            var t = e.targetTouches[0].pageX
              , a = e.targetTouches[0].pageY
              , i = e.targetTouches[1].pageX
              , e = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - a, 2))
        },
        onGestureStart: function(e) {
            var t = this
              , a = t.support
              , i = t.params.zoom
              , s = t.zoom
              , r = s.gesture;
            if (s.fakeGestureTouched = !1,
            s.fakeGestureMoved = !1,
            !a.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                    return;
                s.fakeGestureTouched = !0,
                r.scaleStart = _.getDistanceBetweenTouches(e)
            }
            r.$slideEl && r.$slideEl.length || (r.$slideEl = C(e.target).closest("." + t.params.slideClass),
            0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)),
            r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass),
            r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio,
            0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0),
            t.zoom.isScaling = !0) : r.$imageEl = void 0
        },
        onGestureChange: function(e) {
            var t = this.support
              , a = this.params.zoom
              , i = this.zoom
              , s = i.gesture;
            if (!t.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                    return;
                i.fakeGestureMoved = !0,
                s.scaleMove = _.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length ? (t.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale,
            i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, .5)),
            s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")")) : "gesturechange" === e.type && i.onGestureStart(e)
        },
        onGestureEnd: function(e) {
            var t = this
              , a = t.device
              , i = t.support
              , s = t.params.zoom
              , r = t.zoom
              , n = r.gesture;
            if (!i.gestures) {
                if (!r.fakeGestureTouched || !r.fakeGestureMoved)
                    return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android)
                    return;
                r.fakeGestureTouched = !1,
                r.fakeGestureMoved = !1
            }
            n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio),
            n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"),
            r.currentScale = r.scale,
            r.isScaling = !1,
            1 === r.scale && (n.$slideEl = void 0))
        },
        onTouchStart: function(e) {
            var t = this.device
              , a = this.zoom
              , i = a.gesture
              , a = a.image;
            i.$imageEl && 0 !== i.$imageEl.length && (a.isTouched || (t.android && e.cancelable && e.preventDefault(),
            a.isTouched = !0,
            a.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX,
            a.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY))
        },
        onTouchMove: function(e) {
            var t = this
              , a = t.zoom
              , i = a.gesture
              , s = a.image
              , r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1,
            s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth,
                s.height = i.$imageEl[0].offsetHeight,
                s.startX = g(i.$imageWrapEl[0], "x") || 0,
                s.startY = g(i.$imageWrapEl[0], "y") || 0,
                i.slideWidth = i.$slideEl[0].offsetWidth,
                i.slideHeight = i.$slideEl[0].offsetHeight,
                i.$imageWrapEl.transition(0),
                t.rtl && (s.startX = -s.startX,
                s.startY = -s.startY));
                var n = s.width * a.scale
                  , l = s.height * a.scale;
                if (!(n < i.slideWidth && l < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0),
                    s.maxX = -s.minX,
                    s.minY = Math.min(i.slideHeight / 2 - l / 2, 0),
                    s.maxY = -s.minY,
                    s.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX,
                    s.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY,
                    !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
                            return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
                            return void (s.isTouched = !1)
                    }
                    e.cancelable && e.preventDefault(),
                    e.stopPropagation(),
                    s.isMoved = !0,
                    s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
                    s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
                    s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)),
                    s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)),
                    s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)),
                    s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)),
                    r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                    r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                    r.prevTime || (r.prevTime = Date.now()),
                    r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
                    r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
                    Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                    Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                    r.prevPositionX = s.touchesCurrent.x,
                    r.prevPositionY = s.touchesCurrent.y,
                    r.prevTime = Date.now(),
                    i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function() {
            var e = this.zoom
              , t = e.gesture
              , a = e.image
              , i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved)
                    return a.isTouched = !1,
                    void (a.isMoved = !1);
                a.isTouched = !1,
                a.isMoved = !1;
                var s = 300
                  , r = 300
                  , n = i.x * s
                  , l = a.currentX + n
                  , n = i.y * r
                  , n = a.currentY + n;
                0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)),
                0 !== i.y && (r = Math.abs((n - a.currentY) / i.y));
                r = Math.max(s, r);
                a.currentX = l,
                a.currentY = n;
                n = a.width * e.scale,
                e = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - n / 2, 0),
                a.maxX = -a.minX,
                a.minY = Math.min(t.slideHeight / 2 - e / 2, 0),
                a.maxY = -a.minY,
                a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
                a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
                t.$imageWrapEl.transition(r).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        },
        onTransitionEnd: function() {
            var e = this.zoom
              , t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
            e.scale = 1,
            e.currentScale = 1,
            t.$slideEl = void 0,
            t.$imageEl = void 0,
            t.$imageWrapEl = void 0)
        },
        toggle: function(e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in: function(e) {
            var t, a, i, s = this, r = K(), n = s.zoom, l = s.params.zoom, o = n.gesture, d = n.image;
            o.$slideEl || (s.params.virtual && s.params.virtual.enabled && s.virtual ? o.$slideEl = s.$wrapperEl.children("." + s.params.slideActiveClass) : o.$slideEl = s.slides.eq(s.activeIndex),
            o.$imageEl = o.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            o.$imageWrapEl = o.$imageEl.parent("." + l.containerClass)),
            o.$imageEl && 0 !== o.$imageEl.length && (o.$slideEl.addClass("" + l.zoomedSlideClass),
            d = void 0 === d.touchesStart.x && e ? (t = ("touchend" === e.type ? e.changedTouches[0] : e).pageX,
            ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : (t = d.touchesStart.x,
            d.touchesStart.y),
            n.scale = o.$imageWrapEl.attr("data-swiper-zoom") || l.maxRatio,
            n.currentScale = o.$imageWrapEl.attr("data-swiper-zoom") || l.maxRatio,
            e ? (l = o.$slideEl[0].offsetWidth,
            e = o.$slideEl[0].offsetHeight,
            a = o.$slideEl.offset().left + r.scrollX + l / 2 - t,
            i = o.$slideEl.offset().top + r.scrollY + e / 2 - d,
            r = o.$imageEl[0].offsetWidth,
            d = o.$imageEl[0].offsetHeight,
            r = r * n.scale,
            d = d * n.scale,
            r = -(l = Math.min(l / 2 - r / 2, 0)),
            d = -(e = Math.min(e / 2 - d / 2, 0)),
            r < (a = (a = a * n.scale) < l ? l : a) && (a = r),
            d < (i = (i = i * n.scale) < e ? e : i) && (i = d)) : i = a = 0,
            o.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + i + "px,0)"),
            o.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
        },
        out: function() {
            var e = this
              , t = e.zoom
              , a = e.params.zoom
              , i = t.gesture;
            i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex),
            i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"),
            i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)),
            i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1,
            t.currentScale = 1,
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + a.zoomedSlideClass),
            i.$slideEl = void 0)
        },
        toggleGestures: function(e) {
            var t = this.zoom
              , a = t.slideSelector
              , i = t.passiveListener;
            this.$wrapperEl[e]("gesturestart", a, t.onGestureStart, i),
            this.$wrapperEl[e]("gesturechange", a, t.onGestureChange, i),
            this.$wrapperEl[e]("gestureend", a, t.onGestureEnd, i)
        },
        enableGestures: function() {
            this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0,
            this.zoom.toggleGestures("on"))
        },
        disableGestures: function() {
            this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1,
            this.zoom.toggleGestures("off"))
        },
        enable: function() {
            var e, t, a, i = this, s = i.support, r = i.zoom;
            r.enabled || (r.enabled = !0,
            e = !("touchstart" !== i.touchEvents.start || !s.passiveListener || !i.params.passiveListeners) && {
                passive: !0,
                capture: !1
            },
            t = !s.passiveListener || {
                passive: !1,
                capture: !0
            },
            a = "." + i.params.slideClass,
            i.zoom.passiveListener = e,
            i.zoom.slideSelector = a,
            s.gestures ? (i.$wrapperEl.on(i.touchEvents.start, i.zoom.enableGestures, e),
            i.$wrapperEl.on(i.touchEvents.end, i.zoom.disableGestures, e)) : "touchstart" === i.touchEvents.start && (i.$wrapperEl.on(i.touchEvents.start, a, r.onGestureStart, e),
            i.$wrapperEl.on(i.touchEvents.move, a, r.onGestureChange, t),
            i.$wrapperEl.on(i.touchEvents.end, a, r.onGestureEnd, e),
            i.touchEvents.cancel && i.$wrapperEl.on(i.touchEvents.cancel, a, r.onGestureEnd, e)),
            i.$wrapperEl.on(i.touchEvents.move, "." + i.params.zoom.containerClass, r.onTouchMove, t))
        },
        disable: function() {
            var e, t, a, i, s = this, r = s.zoom;
            r.enabled && (e = s.support,
            s.zoom.enabled = !1,
            t = !("touchstart" !== s.touchEvents.start || !e.passiveListener || !s.params.passiveListeners) && {
                passive: !0,
                capture: !1
            },
            a = !e.passiveListener || {
                passive: !1,
                capture: !0
            },
            i = "." + s.params.slideClass,
            e.gestures ? (s.$wrapperEl.off(s.touchEvents.start, s.zoom.enableGestures, t),
            s.$wrapperEl.off(s.touchEvents.end, s.zoom.disableGestures, t)) : "touchstart" === s.touchEvents.start && (s.$wrapperEl.off(s.touchEvents.start, i, r.onGestureStart, t),
            s.$wrapperEl.off(s.touchEvents.move, i, r.onGestureChange, a),
            s.$wrapperEl.off(s.touchEvents.end, i, r.onGestureEnd, t),
            s.touchEvents.cancel && s.$wrapperEl.off(s.touchEvents.cancel, i, r.onGestureEnd, t)),
            s.$wrapperEl.off(s.touchEvents.move, "." + s.params.zoom.containerClass, r.onTouchMove, a))
        }
    }
      , U = {
        loadInSlide: function(e, o) {
            void 0 === o && (o = !0);
            var d, p = this, u = p.params.lazy;
            void 0 !== e && 0 !== p.slides.length && (e = (d = p.virtual && p.params.virtual.enabled ? p.$wrapperEl.children("." + p.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : p.slides.eq(e)).find("." + u.elementClass + ":not(." + u.loadedClass + "):not(." + u.loadingClass + ")"),
            !d.hasClass(u.elementClass) || d.hasClass(u.loadedClass) || d.hasClass(u.loadingClass) || e.push(d[0]),
            0 !== e.length && e.each(function(e) {
                var a = C(e);
                a.addClass(u.loadingClass);
                var i = a.attr("data-background")
                  , s = a.attr("data-src")
                  , r = a.attr("data-srcset")
                  , n = a.attr("data-sizes")
                  , l = a.parent("picture");
                p.loadImage(a[0], s || i, r, n, !1, function() {
                    var e, t;
                    null == p || !p || p && !p.params || p.destroyed || (i ? (a.css("background-image", 'url("' + i + '")'),
                    a.removeAttr("data-background")) : (r && (a.attr("srcset", r),
                    a.removeAttr("data-srcset")),
                    n && (a.attr("sizes", n),
                    a.removeAttr("data-sizes")),
                    l.length && l.children("source").each(function(e) {
                        e = C(e);
                        e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")),
                        e.removeAttr("data-srcset"))
                    }),
                    s && (a.attr("src", s),
                    a.removeAttr("data-src"))),
                    a.addClass(u.loadedClass).removeClass(u.loadingClass),
                    d.find("." + u.preloaderClass).remove(),
                    p.params.loop && o && (t = d.attr("data-swiper-slide-index"),
                    d.hasClass(p.params.slideDuplicateClass) ? (e = p.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + p.params.slideDuplicateClass + ")"),
                    p.lazy.loadInSlide(e.index(), !1)) : (t = p.$wrapperEl.children("." + p.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]'),
                    p.lazy.loadInSlide(t.index(), !1))),
                    p.emit("lazyImageReady", d[0], a[0]),
                    p.params.autoHeight && p.updateAutoHeight())
                }),
                p.emit("lazyImageLoad", d[0], a[0])
            }))
        },
        load: function() {
            var t = this
              , a = t.$wrapperEl
              , i = t.params
              , s = t.slides
              , e = t.activeIndex
              , r = t.virtual && i.virtual.enabled
              , n = i.lazy
              , l = i.slidesPerView;
            function o(e) {
                if (r) {
                    if (a.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return 1
                } else if (s[e])
                    return 1
            }
            function d(e) {
                return r ? C(e).attr("data-swiper-slide-index") : C(e).index()
            }
            if ("auto" === l && (l = 0),
            t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0),
            t.params.watchSlidesVisibility)
                a.children("." + i.slideVisibleClass).each(function(e) {
                    e = r ? C(e).attr("data-swiper-slide-index") : C(e).index();
                    t.lazy.loadInSlide(e)
                });
            else if (1 < l)
                for (var p = e; p < e + l; p += 1)
                    o(p) && t.lazy.loadInSlide(p);
            else
                t.lazy.loadInSlide(e);
            if (n.loadPrevNext)
                if (1 < l || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                    for (var u = n.loadPrevNextAmount, n = l, c = Math.min(e + n + Math.max(u, n), s.length), u = Math.max(e - Math.max(n, u), 0), h = e + l; h < c; h += 1)
                        o(h) && t.lazy.loadInSlide(h);
                    for (var m = u; m < e; m += 1)
                        o(m) && t.lazy.loadInSlide(m)
                } else {
                    u = a.children("." + i.slideNextClass);
                    0 < u.length && t.lazy.loadInSlide(d(u));
                    u = a.children("." + i.slidePrevClass);
                    0 < u.length && t.lazy.loadInSlide(d(u))
                }
        },
        checkInViewOnLoad: function() {
            var e = K()
              , t = this;
            if (t && !t.destroyed) {
                var a = t.params.lazy.scrollingElement ? C(t.params.lazy.scrollingElement) : C(e)
                  , i = a[0] === e
                  , s = i ? e.innerWidth : a[0].offsetWidth
                  , r = i ? e.innerHeight : a[0].offsetHeight
                  , e = t.$el.offset()
                  , n = !1;
                t.rtlTranslate && (e.left -= t.$el[0].scrollLeft);
                for (var l = [[e.left, e.top], [e.left + t.width, e.top], [e.left, e.top + t.height], [e.left + t.width, e.top + t.height]], o = 0; o < l.length; o += 1) {
                    var d = l[o];
                    0 <= d[0] && d[0] <= s && 0 <= d[1] && d[1] <= r && (0 === d[0] && 0 === d[1] || (n = !0))
                }
                n ? (t.lazy.load(),
                a.off("scroll", t.lazy.checkInViewOnLoad)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0,
                a.on("scroll", t.lazy.checkInViewOnLoad))
            }
        }
    }
      , J = {
        LinearSpline: function(e, t) {
            var a, i, s, r, n;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (n = function(e, t) {
                    for (i = -1,
                    a = e.length; 1 < a - i; )
                        e[s = a + i >> 1] <= t ? i = s : a = s;
                    return a
                }(this.x, e),
                r = n - 1,
                (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function(e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new J.LinearSpline(t.slidesGrid,e.slidesGrid) : new J.LinearSpline(t.snapGrid,e.snapGrid))
        },
        setTranslate: function(e, t) {
            var a, i, s = this, r = s.controller.control, n = s.constructor;
            function l(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e),
                i = -s.controller.spline.interpolate(-t)),
                i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()),
                i = (t - s.minTranslate()) * a + e.minTranslate()),
                s.params.controller.inverse && (i = e.maxTranslate() - i),
                e.updateProgress(i),
                e.setTranslate(i, s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o += 1)
                    r[o] !== t && r[o]instanceof n && l(r[o]);
            else
                r instanceof n && t !== r && l(r)
        },
        setTransition: function(t, e) {
            var a, i = this, s = i.constructor, r = i.controller.control;
            function n(e) {
                e.setTransition(t, i),
                0 !== t && (e.transitionStart(),
                e.params.autoHeight && S(function() {
                    e.updateAutoHeight()
                }),
                e.$wrapperEl.transitionEnd(function() {
                    r && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(),
                    e.transitionEnd())
                }))
            }
            if (Array.isArray(r))
                for (a = 0; a < r.length; a += 1)
                    r[a] !== e && r[a]instanceof s && n(r[a]);
            else
                r instanceof s && e !== r && n(r)
        }
    }
      , Q = {
        getRandomNumber: function(e) {
            return "x".repeat(e = void 0 === e ? 16 : e).replace(/x/g, function() {
                return Math.round(16 * Math.random()).toString(16)
            })
        },
        makeElFocusable: function(e) {
            return e.attr("tabIndex", "0"),
            e
        },
        makeElNotFocusable: function(e) {
            return e.attr("tabIndex", "-1"),
            e
        },
        addElRole: function(e, t) {
            return e.attr("role", t),
            e
        },
        addElRoleDescription: function(e, t) {
            return e.attr("aria-role-description", t),
            e
        },
        addElControls: function(e, t) {
            return e.attr("aria-controls", t),
            e
        },
        addElLabel: function(e, t) {
            return e.attr("aria-label", t),
            e
        },
        addElId: function(e, t) {
            return e.attr("id", t),
            e
        },
        addElLive: function(e, t) {
            return e.attr("aria-live", t),
            e
        },
        disableEl: function(e) {
            return e.attr("aria-disabled", !0),
            e
        },
        enableEl: function(e) {
            return e.attr("aria-disabled", !1),
            e
        },
        onEnterKey: function(e) {
            var t = this
              , a = t.params.a11y;
            13 === e.keyCode && (e = C(e.target),
            t.navigation && t.navigation.$nextEl && e.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(),
            t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
            t.navigation && t.navigation.$prevEl && e.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(),
            t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
            t.pagination && e.is("." + t.params.pagination.bulletClass.replace(/ /g, ".")) && e[0].click())
        },
        notify: function(e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""),
            t.html(e))
        },
        updateNavigation: function() {
            var e, t, a = this;
            !a.params.loop && a.navigation && (e = (t = a.navigation).$nextEl,
            (t = t.$prevEl) && 0 < t.length && (a.isBeginning ? (a.a11y.disableEl(t),
            a.a11y.makeElNotFocusable(t)) : (a.a11y.enableEl(t),
            a.a11y.makeElFocusable(t))),
            e && 0 < e.length && (a.isEnd ? (a.a11y.disableEl(e),
            a.a11y.makeElNotFocusable(e)) : (a.a11y.enableEl(e),
            a.a11y.makeElFocusable(e))))
        },
        updatePagination: function() {
            var t = this
              , a = t.params.a11y;
            t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(e) {
                e = C(e);
                t.a11y.makeElFocusable(e),
                t.params.pagination.renderBullet || (t.a11y.addElRole(e, "button"),
                t.a11y.addElLabel(e, a.paginationBulletMessage.replace(/\{\{index\}\}/, e.index() + 1)))
            })
        },
        init: function() {
            var t = this
              , e = t.params.a11y;
            t.$el.append(t.a11y.liveRegion);
            var a = t.$el;
            e.containerRoleDescriptionMessage && t.a11y.addElRoleDescription(a, e.containerRoleDescriptionMessage),
            e.containerMessage && t.a11y.addElLabel(a, e.containerMessage);
            var i, s, r = t.$wrapperEl, n = r.attr("id") || "swiper-wrapper-" + t.a11y.getRandomNumber(16);
            t.a11y.addElId(r, n),
            a = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite",
            t.a11y.addElLive(r, a),
            e.itemRoleDescriptionMessage && t.a11y.addElRoleDescription(C(t.slides), e.itemRoleDescriptionMessage),
            t.a11y.addElRole(C(t.slides), "group"),
            t.slides.each(function(e) {
                e = C(e);
                t.a11y.addElLabel(e, e.index() + 1 + " / " + t.slides.length)
            }),
            t.navigation && t.navigation.$nextEl && (i = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
            i && i.length && (t.a11y.makeElFocusable(i),
            "BUTTON" !== i[0].tagName && (t.a11y.addElRole(i, "button"),
            i.on("keydown", t.a11y.onEnterKey)),
            t.a11y.addElLabel(i, e.nextSlideMessage),
            t.a11y.addElControls(i, n)),
            s && s.length && (t.a11y.makeElFocusable(s),
            "BUTTON" !== s[0].tagName && (t.a11y.addElRole(s, "button"),
            s.on("keydown", t.a11y.onEnterKey)),
            t.a11y.addElLabel(s, e.prevSlideMessage),
            t.a11y.addElControls(s, n)),
            t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.on("keydown", "." + t.params.pagination.bulletClass.replace(/ /g, "."), t.a11y.onEnterKey)
        },
        destroy: function() {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(),
            a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
            a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
            e && e.off("keydown", a.a11y.onEnterKey),
            t && t.off("keydown", a.a11y.onEnterKey),
            a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass.replace(/ /g, "."), a.a11y.onEnterKey)
        }
    }
      , ee = {
        init: function() {
            var e = this
              , t = K();
            if (e.params.history) {
                if (!t.history || !t.history.pushState)
                    return e.params.history.enabled = !1,
                    void (e.params.hashNavigation.enabled = !0);
                var a = e.history;
                a.initialized = !0,
                a.paths = ee.getPathValues(e.params.url),
                (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState))
            }
        },
        destroy: function() {
            var e = K();
            this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function() {
            var e = this;
            e.history.paths = ee.getPathValues(e.params.url),
            e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
        },
        getPathValues: function(e) {
            var t = K()
              , e = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            })
              , t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory: function(e, t) {
            var a, i = this, s = K();
            i.history.initialized && i.params.history.enabled && (a = i.params.url ? new URL(i.params.url) : s.location,
            t = i.slides.eq(t),
            t = ee.slugify(t.attr("data-history")),
            a.pathname.includes(e) || (t = e + "/" + t),
            (e = s.history.state) && e.value === t || (i.params.history.replaceState ? s.history.replaceState({
                value: t
            }, null, t) : s.history.pushState({
                value: t
            }, null, t)))
        },
        slugify: function(e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function(e, t, a) {
            var i = this;
            if (t)
                for (var s = 0, r = i.slides.length; s < r; s += 1) {
                    var n = i.slides.eq(s);
                    ee.slugify(n.attr("data-history")) !== t || n.hasClass(i.params.slideDuplicateClass) || (n = n.index(),
                    i.slideTo(n, e, a))
                }
            else
                i.slideTo(0, e, a)
        }
    }
      , te = {
        onHashCange: function() {
            var e = this
              , t = y();
            e.emit("hashChange");
            t = t.location.hash.replace("#", "");
            t === e.slides.eq(e.activeIndex).attr("data-hash") || void 0 !== (t = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index()) && e.slideTo(t)
        },
        setHash: function() {
            var e = this
              , t = K()
              , a = y();
            e.hashNavigation.initialized && e.params.hashNavigation.enabled && (e.params.hashNavigation.replaceState && t.history && t.history.replaceState ? t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "") : (t = (t = e.slides.eq(e.activeIndex)).attr("data-hash") || t.attr("data-history"),
            a.location.hash = t || ""),
            e.emit("hashSet"))
        },
        init: function() {
            var e = this
              , t = y()
              , a = K();
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var i = t.location.hash.replace("#", "");
                if (i)
                    for (var s = 0, r = e.slides.length; s < r; s += 1) {
                        var n = e.slides.eq(s);
                        (n.attr("data-hash") || n.attr("data-history")) !== i || n.hasClass(e.params.slideDuplicateClass) || (n = n.index(),
                        e.slideTo(n, 0, e.params.runCallbacksOnInit, !0))
                    }
                e.params.hashNavigation.watchState && C(a).on("hashchange", e.hashNavigation.onHashCange)
            }
        },
        destroy: function() {
            var e = K();
            this.params.hashNavigation.watchState && C(e).off("hashchange", this.hashNavigation.onHashCange)
        }
    }
      , ae = {
        run: function() {
            var t = this
              , e = t.slides.eq(t.activeIndex)
              , a = t.params.autoplay.delay;
            e.attr("data-swiper-autoplay") && (a = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
            clearTimeout(t.autoplay.timeout),
            t.autoplay.timeout = S(function() {
                var e;
                t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(),
                e = t.slidePrev(t.params.speed, !0, !0),
                t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                t.emit("autoplay")) : (e = t.slidePrev(t.params.speed, !0, !0),
                t.emit("autoplay")) : t.params.loop ? (t.loopFix(),
                e = t.slideNext(t.params.speed, !0, !0),
                t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(0, t.params.speed, !0, !0),
                t.emit("autoplay")) : (e = t.slideNext(t.params.speed, !0, !0),
                t.emit("autoplay")),
                (t.params.cssMode && t.autoplay.running || !1 === e) && t.autoplay.run()
            }, a)
        },
        start: function() {
            var e = this;
            return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0,
            e.emit("autoplayStart"),
            e.autoplay.run(),
            !0)
        },
        stop: function() {
            var e = this;
            return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout),
            e.autoplay.timeout = void 0),
            e.autoplay.running = !1,
            e.emit("autoplayStop"),
            !0)
        },
        pause: function(e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            t.autoplay.paused = !0,
            0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1,
            t.autoplay.run())))
        },
        onVisibilityChange: function() {
            var e = this
              , t = y();
            "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(),
            "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(),
            e.autoplay.paused = !1)
        },
        onTransitionEnd: function(e) {
            var t = this;
            t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
            t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
            t.autoplay.paused = !1,
            t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
        }
    }
      , ie = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a)
                  , s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s,
                s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({
                    opacity: n
                }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function(e) {
            var a, i = this, t = i.slides, s = i.$wrapperEl;
            t.transition(e),
            i.params.virtualTranslate && 0 !== e && (a = !1,
            t.transitionEnd(function() {
                if (!a && i && !i.destroyed) {
                    a = !0,
                    i.animating = !1;
                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                        s.trigger(e[t])
                }
            }))
        }
    }
      , se = {
        setTranslate: function() {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, l = t.rtlTranslate, o = t.size, d = t.browser, p = t.params.cubeEffect, u = t.isHorizontal(), c = t.virtual && t.params.virtual.enabled, h = 0;
            p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = C('<div class="swiper-cube-shadow"></div>'),
            i.append(e)),
            e.css({
                height: r + "px"
            })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = C('<div class="swiper-cube-shadow"></div>'),
            a.append(e)));
            for (var m, f = 0; f < s.length; f += 1) {
                var v = s.eq(f)
                  , g = f
                  , y = 90 * (g = c ? parseInt(v.attr("data-swiper-slide-index"), 10) : g)
                  , w = Math.floor(y / 360);
                l && (y = -y,
                w = Math.floor(-y / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1)
                  , E = 0
                  , x = 0
                  , T = 0;
                g % 4 == 0 ? (E = 4 * -w * o,
                T = 0) : (g - 1) % 4 == 0 ? (E = 0,
                T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o,
                T = o) : (g - 3) % 4 == 0 && (E = -o,
                T = 3 * o + 4 * o * w),
                l && (E = -E),
                u || (x = E,
                E = 0),
                b <= 1 && -1 < b && (h = l ? 90 * -g - 90 * b : 90 * g + 90 * b),
                v.transform("rotateX(" + (u ? 0 : -y) + "deg) rotateY(" + (u ? y : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)"),
                p.slideShadows && (x = u ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                T = u ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom"),
                0 === x.length && (x = C('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'),
                v.append(x)),
                0 === T.length && (T = C('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'),
                v.append(T)),
                x.length && (x[0].style.opacity = Math.max(-b, 0)),
                T.length && (T[0].style.opacity = Math.max(b, 0)))
            }
            i.css({
                "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                "transform-origin": "50% 50% -" + o / 2 + "px"
            }),
            p.shadow && (u ? e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")") : (m = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            a = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2),
            r = p.shadowScale,
            m = p.shadowScale / a,
            a = p.shadowOffset,
            e.transform("scale3d(" + r + ", 1, " + m + ") translate3d(0px, " + (n / 2 + a) + "px, " + -n / 2 / m + "px) rotateX(-90deg)")));
            d = d.isSafari || d.isWebView ? -o / 2 : 0;
            i.transform("translate3d(0px,0," + d + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
        },
        setTransition: function(e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }
      , re = {
        setTranslate: function() {
            for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var s, r, n = t.eq(i), l = n[0].progress, o = -180 * (l = e.params.flipEffect.limitRotation ? Math.max(Math.min(n[0].progress, 1), -1) : l), d = 0, p = -n[0].swiperSlideOffset, u = 0;
                e.isHorizontal() ? a && (o = -o) : (u = p,
                d = -o,
                o = p = 0),
                n[0].style.zIndex = -Math.abs(Math.round(l)) + t.length,
                e.params.flipEffect.slideShadows && (s = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                r = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom"),
                0 === s.length && (s = C('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'),
                n.append(s)),
                0 === r.length && (r = C('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'),
                n.append(r)),
                s.length && (s[0].style.opacity = Math.max(-l, 0)),
                r.length && (r[0].style.opacity = Math.max(l, 0))),
                n.transform("translate3d(" + p + "px, " + u + "px, 0px) rotateX(" + d + "deg) rotateY(" + o + "deg)")
            }
        },
        setTransition: function(e) {
            var a, i = this, t = i.slides, s = i.activeIndex, r = i.$wrapperEl;
            t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
            i.params.virtualTranslate && 0 !== e && (a = !1,
            t.eq(s).transitionEnd(function() {
                if (!a && i && !i.destroyed) {
                    a = !0,
                    i.animating = !1;
                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                        r.trigger(e[t])
                }
            }))
        }
    }
      , ne = {
        setTranslate: function() {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), e = e.translate, l = n ? t / 2 - e : a / 2 - e, o = n ? r.rotate : -r.rotate, d = r.depth, p = 0, u = i.length; p < u; p += 1) {
                var c = i.eq(p)
                  , h = s[p]
                  , m = (l - c[0].swiperSlideOffset - h / 2) / h * r.modifier
                  , f = n ? o * m : 0
                  , v = n ? 0 : o * m
                  , g = -d * Math.abs(m)
                  , y = r.stretch;
                "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * h);
                var w = n ? 0 : y * m
                  , h = n ? y * m : 0
                  , y = 1 - (1 - r.scale) * Math.abs(m);
                Math.abs(h) < .001 && (h = 0),
                Math.abs(w) < .001 && (w = 0),
                Math.abs(g) < .001 && (g = 0),
                Math.abs(f) < .001 && (f = 0),
                Math.abs(v) < .001 && (v = 0),
                Math.abs(y) < .001 && (y = 0),
                c.transform("translate3d(" + h + "px," + w + "px," + g + "px)  rotateX(" + v + "deg) rotateY(" + f + "deg) scale(" + y + ")"),
                c[0].style.zIndex = 1 - Math.abs(Math.round(m)),
                r.slideShadows && (f = n ? c.find(".swiper-slide-shadow-left") : c.find(".swiper-slide-shadow-top"),
                y = n ? c.find(".swiper-slide-shadow-right") : c.find(".swiper-slide-shadow-bottom"),
                0 === f.length && (f = C('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'),
                c.append(f)),
                0 === y.length && (y = C('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'),
                c.append(y)),
                f.length && (f[0].style.opacity = 0 < m ? m : 0),
                y.length && (y[0].style.opacity = 0 < -m ? -m : 0))
            }
        },
        setTransition: function(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }
      , le = {
        init: function() {
            var e = this
              , t = e.params.thumbs;
            if (e.thumbs.initialized)
                return !1;
            e.thumbs.initialized = !0;
            var a = e.constructor;
            return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper,
            Z(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }),
            Z(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : E(t.swiper) && (e.thumbs.swiper = new a(Z({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })),
            e.thumbs.swiperCreated = !0),
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", e.thumbs.onThumbClick),
            !0
        },
        onThumbClick: function() {
            var e, t, a, i = this, s = i.thumbs.swiper;
            s && (t = s.clickedIndex,
            (e = s.clickedSlide) && C(e).hasClass(i.params.thumbs.slideThumbActiveClass) || null == t || (a = s.params.loop ? parseInt(C(s.clickedSlide).attr("data-swiper-slide-index"), 10) : t,
            i.params.loop && (e = i.activeIndex,
            i.slides.eq(e).hasClass(i.params.slideDuplicateClass) && (i.loopFix(),
            i._clientLeft = i.$wrapperEl[0].clientLeft,
            e = i.activeIndex),
            s = i.slides.eq(e).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
            t = i.slides.eq(e).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
            a = void 0 === s || void 0 !== t && t - e < e - s ? t : s),
            i.slideTo(a)))
        },
        update: function(e) {
            var t = this
              , a = t.thumbs.swiper;
            if (a) {
                var i, s, r, n = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView, l = t.params.thumbs.autoScrollOffset, o = l && !a.params.loop;
                t.realIndex === a.realIndex && !o || (i = a.activeIndex,
                r = a.params.loop ? (a.slides.eq(i).hasClass(a.params.slideDuplicateClass) && (a.loopFix(),
                a._clientLeft = a.$wrapperEl[0].clientLeft,
                i = a.activeIndex),
                r = a.slides.eq(i).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                s = a.slides.eq(i).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                s = void 0 === r ? s : void 0 === s ? r : s - i == i - r ? i : s - i < i - r ? s : r,
                t.activeIndex > t.previousIndex ? "next" : "prev") : (s = t.realIndex) > t.previousIndex ? "next" : "prev",
                o && (s += "next" === r ? l : -1 * l),
                a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = i < s ? s - Math.floor(n / 2) + 1 : s + Math.floor(n / 2) - 1 : i < s && (s = s - n + 1),
                a.slideTo(s, e ? 0 : void 0)));
                var d = 1
                  , p = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (d = t.params.slidesPerView),
                t.params.thumbs.multipleActiveThumbs || (d = 1),
                d = Math.floor(d),
                a.slides.removeClass(p),
                a.params.loop || a.params.virtual && a.params.virtual.enabled)
                    for (var u = 0; u < d; u += 1)
                        a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + u) + '"]').addClass(p);
                else
                    for (var c = 0; c < d; c += 1)
                        a.slides.eq(t.realIndex + c).addClass(p)
            }
        }
    };
    return H.use([z, k, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        },
        create: function() {
            x(this, {
                mousewheel: {
                    enabled: !1,
                    lastScrollTime: M(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: [],
                    enable: F.enable,
                    disable: F.disable,
                    handle: F.handle,
                    handleMouseEnter: F.handleMouseEnter,
                    handleMouseLeave: F.handleMouseLeave,
                    animateSlider: F.animateSlider,
                    releaseScroll: F.releaseScroll
                }
            })
        },
        on: {
            init: function(e) {
                !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(),
                e.params.mousewheel.enabled && e.mousewheel.enable()
            },
            destroy: function(e) {
                e.params.cssMode && e.mousewheel.enable(),
                e.mousewheel.enabled && e.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function() {
            x(this, {
                navigation: t({}, R)
            })
        },
        on: {
            init: function(e) {
                e.navigation.init(),
                e.navigation.update()
            },
            toEdge: function(e) {
                e.navigation.update()
            },
            fromEdge: function(e) {
                e.navigation.update()
            },
            destroy: function(e) {
                e.navigation.destroy()
            },
            click: function(e, t) {
                var a, i = e.navigation, s = i.$nextEl, i = i.$prevEl;
                !e.params.navigation.hideOnClick || C(t.target).is(i) || C(t.target).is(s) || (s ? a = s.hasClass(e.params.navigation.hiddenClass) : i && (a = i.hasClass(e.params.navigation.hiddenClass)),
                !0 === a ? e.emit("navigationShow") : e.emit("navigationHide"),
                s && s.toggleClass(e.params.navigation.hiddenClass),
                i && i.toggleClass(e.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function() {
            x(this, {
                pagination: t({
                    dynamicBulletIndex: 0
                }, W)
            })
        },
        on: {
            init: function(e) {
                e.pagination.init(),
                e.pagination.render(),
                e.pagination.update()
            },
            activeIndexChange: function(e) {
                !e.params.loop && void 0 !== e.snapIndex || e.pagination.update()
            },
            snapIndexChange: function(e) {
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange: function(e) {
                e.params.loop && (e.pagination.render(),
                e.pagination.update())
            },
            snapGridLengthChange: function(e) {
                e.params.loop || (e.pagination.render(),
                e.pagination.update())
            },
            destroy: function(e) {
                e.pagination.destroy()
            },
            click: function(e, t) {
                e.params.pagination.el && e.params.pagination.hideOnClick && 0 < e.pagination.$el.length && !C(t.target).hasClass(e.params.pagination.bulletClass) && (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"),
                e.pagination.$el.toggleClass(e.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function() {
            x(this, {
                scrollbar: t({
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }, q)
            })
        },
        on: {
            init: function(e) {
                e.scrollbar.init(),
                e.scrollbar.updateSize(),
                e.scrollbar.setTranslate()
            },
            update: function(e) {
                e.scrollbar.updateSize()
            },
            resize: function(e) {
                e.scrollbar.updateSize()
            },
            observerUpdate: function(e) {
                e.scrollbar.updateSize()
            },
            setTranslate: function(e) {
                e.scrollbar.setTranslate()
            },
            setTransition: function(e, t) {
                e.scrollbar.setTransition(t)
            },
            destroy: function(e) {
                e.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function() {
            x(this, {
                parallax: t({}, j)
            })
        },
        on: {
            beforeInit: function(e) {
                e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            init: function(e) {
                e.params.parallax.enabled && e.parallax.setTranslate()
            },
            setTranslate: function(e) {
                e.params.parallax.enabled && e.parallax.setTranslate()
            },
            setTransition: function(e, t) {
                e.params.parallax.enabled && e.parallax.setTransition(t)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function() {
            var i = this;
            x(i, {
                zoom: t({
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                }, _)
            });
            var s = 1;
            Object.defineProperty(i.zoom, "scale", {
                get: function() {
                    return s
                },
                set: function(e) {
                    var t, a;
                    s !== e && (t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                    a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0,
                    i.emit("zoomChange", e, t, a)),
                    s = e
                }
            })
        },
        on: {
            init: function(e) {
                e.params.zoom.enabled && e.zoom.enable()
            },
            destroy: function(e) {
                e.zoom.disable()
            },
            touchStart: function(e, t) {
                e.zoom.enabled && e.zoom.onTouchStart(t)
            },
            touchEnd: function(e, t) {
                e.zoom.enabled && e.zoom.onTouchEnd(t)
            },
            doubleTap: function(e, t) {
                e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
            },
            transitionEnd: function(e) {
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            },
            slideChange: function(e) {
                e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function() {
            x(this, {
                lazy: t({
                    initialImageLoaded: !1
                }, U)
            })
        },
        on: {
            beforeInit: function(e) {
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            },
            init: function(e) {
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
            },
            scroll: function(e) {
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize: function(e) {
                e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove: function(e) {
                e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart: function(e) {
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd: function(e) {
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            },
            slideChange: function(e) {
                e.params.lazy.enabled && e.params.cssMode && e.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function() {
            x(this, {
                controller: t({
                    control: this.params.controller.control
                }, J)
            })
        },
        on: {
            update: function(e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            resize: function(e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            observerUpdate: function(e) {
                e.controller.control && e.controller.spline && (e.controller.spline = void 0,
                delete e.controller.spline)
            },
            setTranslate: function(e, t, a) {
                e.controller.control && e.controller.setTranslate(t, a)
            },
            setTransition: function(e, t, a) {
                e.controller.control && e.controller.setTransition(t, a)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null
            }
        },
        create: function() {
            x(this, {
                a11y: t({}, Q, {
                    liveRegion: C('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                })
            })
        },
        on: {
            afterInit: function(e) {
                e.params.a11y.enabled && (e.a11y.init(),
                e.a11y.updateNavigation())
            },
            toEdge: function(e) {
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            fromEdge: function(e) {
                e.params.a11y.enabled && e.a11y.updateNavigation()
            },
            paginationUpdate: function(e) {
                e.params.a11y.enabled && e.a11y.updatePagination()
            },
            destroy: function(e) {
                e.params.a11y.enabled && e.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function() {
            x(this, {
                history: t({}, ee)
            })
        },
        on: {
            init: function(e) {
                e.params.history.enabled && e.history.init()
            },
            destroy: function(e) {
                e.params.history.enabled && e.history.destroy()
            },
            transitionEnd: function(e) {
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            },
            slideChange: function(e) {
                e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function() {
            x(this, {
                hashNavigation: t({
                    initialized: !1
                }, te)
            })
        },
        on: {
            init: function(e) {
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy: function(e) {
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd: function(e) {
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            },
            slideChange: function(e) {
                e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function() {
            x(this, {
                autoplay: t({}, ae, {
                    running: !1,
                    paused: !1
                })
            })
        },
        on: {
            init: function(e) {
                e.params.autoplay.enabled && (e.autoplay.start(),
                y().addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
            },
            beforeTransitionStart: function(e, t, a) {
                e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
            },
            sliderFirstMove: function(e) {
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            },
            touchEnd: function(e) {
                e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
            },
            destroy: function(e) {
                e.autoplay.running && e.autoplay.stop(),
                y().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function() {
            x(this, {
                fadeEffect: t({}, ie)
            })
        },
        on: {
            beforeInit: function(e) {
                var t;
                "fade" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "fade"),
                Z(e.params, t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                }),
                Z(e.originalParams, t))
            },
            setTranslate: function(e) {
                "fade" === e.params.effect && e.fadeEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "fade" === e.params.effect && e.fadeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function() {
            x(this, {
                cubeEffect: t({}, se)
            })
        },
        on: {
            beforeInit: function(e) {
                var t;
                "cube" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "cube"),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                Z(e.params, t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                }),
                Z(e.originalParams, t))
            },
            setTranslate: function(e) {
                "cube" === e.params.effect && e.cubeEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "cube" === e.params.effect && e.cubeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function() {
            x(this, {
                flipEffect: t({}, re)
            })
        },
        on: {
            beforeInit: function(e) {
                var t;
                "flip" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "flip"),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                Z(e.params, t = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                }),
                Z(e.originalParams, t))
            },
            setTranslate: function(e) {
                "flip" === e.params.effect && e.flipEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "flip" === e.params.effect && e.flipEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function() {
            x(this, {
                coverflowEffect: t({}, ne)
            })
        },
        on: {
            beforeInit: function(e) {
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"),
                e.classNames.push(e.params.containerModifierClass + "3d"),
                e.params.watchSlidesProgress = !0,
                e.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function(e) {
                "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
            },
            setTransition: function(e, t) {
                "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create: function() {
            x(this, {
                thumbs: t({
                    swiper: null,
                    initialized: !1
                }, le)
            })
        },
        on: {
            beforeInit: function(e) {
                var t = e.params.thumbs;
                t && t.swiper && (e.thumbs.init(),
                e.thumbs.update(!0))
            },
            slideChange: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            update: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            resize: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            observerUpdate: function(e) {
                e.thumbs.swiper && e.thumbs.update()
            },
            setTransition: function(e, t) {
                e = e.thumbs.swiper;
                e && e.setTransition(t)
            },
            beforeDestroy: function(e) {
                var t = e.thumbs.swiper;
                t && e.thumbs.swiperCreated && t && t.destroy()
            }
        }
    }]),
    H
});
const body = document.querySelector("body")
  , burger = document.querySelector(".burger-wrapper")
  , burgerInner = document.querySelector(".burger-wrapper-inner")
  , burgerClose = document.querySelector(".burger-wrapper-close")
  , activeBorder = document.querySelector(".active-border")
  , activeBorderLang = document.querySelector(".active-border-lang")
  , menuItem = document.getElementsByClassName("menu-item")
  , langItem = document.getElementsByClassName("lang-item")
  , mobileMenu = document.querySelector(".header-right")
  , desktopMenu = document.querySelector(".menu-nav")
  , coverCarouselVar = document.querySelector(".cover-carousel")
  , detectAboutPage = document.querySelector(".cooperation")
  , partnerCarouselVar = document.querySelector(".partners")
  , galleryCarouselVar = document.querySelector(".gallery-carousel")
  , brandsCarouselVar = document.querySelector(".brands-carousel")
  , search = document.querySelector(".search-form")
  , searchBtn = document.querySelector(".search-btn")
  , closeSearch = document.querySelector(".close-search")
  , searchWrapper = document.querySelector(".search-wrapper")
  , closeModal = document.querySelector(".close-modal")
  , newsLetterModal = document.querySelector(".modal.newsletter")
  , richText = document.querySelector(".richText, .blog-left")
  , playVideo = document.querySelector(".play-video")
  , blogVideo = document.querySelector(".blog-video")
  , header = document.querySelector("header")
  , brandFilter = document.querySelectorAll("#brands-filter  a")
  , priceModal = document.querySelector(".price-modal")
  , priceBtn = document.querySelector(".price-btn")
  , instagramLoad = document.querySelector(".instagram-load > button")
  , instagramLoadParent = document.querySelector(".instagram-load")
  , shareIcon = document.querySelector(".share-icon")
  , shareContainer = document.querySelector(".share-container");
var instagramLoadCount = 0;
function coverCarousel() {
    const a = [...document.querySelectorAll(".tab-item")];
    new Swiper(".cover-carousel",{
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".home-swiper-pagination",
            clickable: !0,
            renderBullet: function(e, i) {
                return '<span class="' + i + '">' + a[e].innerText + "</span>"
            }
        },
        effect: "fade",
        autoplay: !1,
        navigation: {
            nextEl: '.cover-button-next',
            prevEl: '.cover-button-prev'
        }
    })
}
function testimonialCarousel() {
    new Swiper(".testimonial-carousel",{
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 6500,
            disableOnInteraction: !1
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: !0
        }
    })
}
function galleryCarousel() {
    new Swiper(".gallery-carousel",{
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        autoplay: !1
    })
}
function partnerCarousel() {
    new Swiper(".partner-carousel",{
        slidesPerView: 8,
        spaceBetween: 0,
        autoplay: !1,
        breakpoints: {
            0: {
                slidesPerView: 4
            },
            767: {
                slidesPerView: 4
            },
            1024: {
                slidesPerView: 4
            },
            1280: {
                slidesPerView: 6
            },
            1600: {
                slidesPerView: 8
            }
        },
        navigation: {
            nextEl: '.partners-button-next',
            prevEl: '.partners-button-prev'
        }
    })
}
function brandsCarousel() {
    new Swiper(".brands-carousel",{
        autoHeight: !0,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: !0
        },
        autoplay: !1,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    })
}
function benefitCarousel() {
    new Swiper(".benefit-carousel",{
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination',
            clickable: !0
        },
        autoplay: !1
    })
}
function toggleMenu() {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle("close"),
        mobileMenu.classList.toggle("active"),
        body.classList.toggle("opened-overlay")
    })
}
function toggleMenuInner() {
    burgerInner.addEventListener("click", function(e) {
        burgerInner.classList.toggle("close"),
        desktopMenu.classList.toggle("active"),
        body.classList.toggle("opened-overlay")
    })
    burgerClose.addEventListener("click", function(e) {
        burgerInner.classList.remove("close"),
        desktopMenu.classList.remove("active"),
        body.classList.remove("opened-overlay")
    })
}
for (let e = 0; e < menuItem.length; e++)
    menuItem[e].onmouseover = function() {
        var e = this.offsetLeft + "px"
          , t = this.offsetWidth + "px";
        activeBorder.classList.add("show"),
        activeBorder.style.left = e,
        activeBorder.style.width = t
    }
    ,
    menuItem[e].onmouseleave = function() {
        activeBorder.classList.remove("show")
    }
    ;
for (let e = 0; e < langItem.length; e++)
    langItem[e].onmouseover = function() {
        var e = this.offsetLeft + "px"
          , t = this.offsetWidth + "px";
        activeBorderLang.classList.add("show"),
        activeBorderLang.style.left = e,
        activeBorderLang.style.width = t
    }
    ,
    langItem[e].onmouseleave = function() {
        activeBorderLang.classList.remove("show")
    }
    ;
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(T, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window
    }
    var t = []
      , n = Object.getPrototypeOf
      , s = t.slice
      , y = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , r = {}
      , o = r.toString
      , m = r.hasOwnProperty
      , a = m.toString
      , l = a.call(Object)
      , v = {}
      , x = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , C = T.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0"
      , E = function(e, t) {
        return new E.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = h(e);
        return !x(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = E.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {}, a = 1, s = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || x(o) || (o = {}),
        a === s && (o = this,
        a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && o !== n && (u && n && (E.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t],
                    i = r && !Array.isArray(i) ? [] : r || E.isPlainObject(i) ? i : {},
                    r = !1,
                    o[t] = E.extend(u, i, n)) : void 0 !== n && (o[t] = n));
        return o
    }
    ,
    E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== o.call(e) || (e = n(e)) && ("function" != typeof (e = m.call(e, "constructor") && e.constructor) || a.call(e) !== l))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : u.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) != a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return y(a)
        },
        guid: 1,
        support: v
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        r["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        function f(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function r() {
            T()
        }
        var e, p, b, o, i, d, h, g, w, u, l, T, C, a, E, y, s, c, m, S = "sizzle" + +new Date, v = n.document, k = 0, x = 0, A = ue(), N = ue(), j = ue(), D = ue(), q = function(e, t) {
            return e === t && (l = !0),
            0
        }, L = {}.hasOwnProperty, t = [], H = t.pop, O = t.push, P = t.push, R = t.slice, M = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", W = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", B = "\\[" + W + "*(" + F + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + W + "*\\]", $ = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", _ = new RegExp(W + "+","g"), z = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$","g"), U = new RegExp("^" + W + "*," + W + "*"), X = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"), V = new RegExp(W + "|>"), G = new RegExp($), Y = new RegExp("^" + F + "$"), Q = {
            ID: new RegExp("^#(" + F + ")"),
            CLASS: new RegExp("^\\.(" + F + ")"),
            TAG: new RegExp("^(" + F + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)","i"),
            bool: new RegExp("^(?:" + I + ")$","i"),
            needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)","i")
        }, J = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, ee = /^[^{]+\{\s*\[native \w/, te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ne = /[+~]/, re = new RegExp("\\\\[\\da-fA-F]{1,6}" + W + "?|\\\\([^\\r\\n\\f])","g"), ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, oe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ae = ve(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            P.apply(t = R.call(v.childNodes), v.childNodes),
            t[v.childNodes.length].nodeType
        } catch (e) {
            P = {
                apply: t.length ? function(e, t) {
                    O.apply(e, R.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(e, t, n, r) {
            var i, o, a, s, u, l, c = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
                return n;
            if (!r && (T(t),
            t = t || C,
            E)) {
                if (11 !== f && (s = te.exec(e)))
                    if (l = s[1]) {
                        if (9 === f) {
                            if (!(o = t.getElementById(l)))
                                return n;
                            if (o.id === l)
                                return n.push(o),
                                n
                        } else if (c && (o = c.getElementById(l)) && m(t, o) && o.id === l)
                            return n.push(o),
                            n
                    } else {
                        if (s[2])
                            return P.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((l = s[3]) && p.getElementsByClassName && t.getElementsByClassName)
                            return P.apply(n, t.getElementsByClassName(l)),
                            n
                    }
                if (p.qsa && !D[e + " "] && (!y || !y.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                    if (l = e,
                    c = t,
                    1 === f && (V.test(e) || X.test(e))) {
                        for ((c = ne.test(e) && ge(t.parentNode) || t) === t && p.scope || ((a = t.getAttribute("id")) ? a = a.replace(ie, oe) : t.setAttribute("id", a = S)),
                        i = (u = d(e)).length; i--; )
                            u[i] = (a ? "#" + a : ":scope") + " " + me(u[i]);
                        l = u.join(",")
                    }
                    try {
                        return P.apply(n, c.querySelectorAll(l)),
                        n
                    } catch (t) {
                        D(e, !0)
                    } finally {
                        a === S && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(z, "$1"), t, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function he(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !J.test(t || e && e.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, e = e ? e.ownerDocument || e : v;
            return e != C && 9 === e.nodeType && e.documentElement && (a = (C = e).documentElement,
            E = !i(C),
            v != C && (t = C.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)),
            p.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            p.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = ee.test(C.getElementsByClassName),
            p.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            p.getById ? (b.filter.ID = function(e) {
                var t = e.replace(re, f);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    e = t.getElementById(e);
                    return e ? [e] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var t = e.replace(re, f);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            b.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            y = [],
            (p.qsa = ee.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + W + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + W + "*(?:value|" + I + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || y.push("\\[" + W + "*name" + W + "*=" + W + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || y.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                y.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + W + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (p.matchesSelector = ee.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                p.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", $)
            }),
            y = y.length && new RegExp(y.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = ee.test(a.compareDocumentPosition),
            m = t || ee.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            q = t ? function(e, t) {
                return e === t ? (l = !0,
                0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == v && m(v, e) ? -1 : t == C || t.ownerDocument == v && m(v, t) ? 1 : u ? M(u, e) - M(u, t) : 0 : 4 & n ? -1 : 1);
                var n
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? M(u, e) - M(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == v ? -1 : s[r] == v ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            p.matchesSelector && E && !D[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    D(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            m(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , n = n && L.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== n ? n : p.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(ie, oe)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !p.detectDuplicates,
            u = !p.sortStable && e.slice(0),
            e.sort(q),
            l) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(re, f),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(re, f),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && G.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(re, f).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = A[e + " "];
                    return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && A(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(e) {
                        e = se.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(_, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(h, e, t, g, y) {
                    var m = "nth" !== h.slice(0, 3)
                      , v = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === y ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = m != v ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (m) {
                                for (; l; ) {
                                    for (a = e; a = a[l]; )
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [v ? c.firstChild : c.lastChild],
                            v && p) {
                                for (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop(); )
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (!1 === (d = p ? s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1] : d))
                                for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                a !== e)); )
                                    ;
                            return (d -= y) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = M(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = h(e.replace(z, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(re, f),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return Y.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(re, f).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return Z.test(e.nodeName)
                },
                input: function(e) {
                    return K.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ye() {}
        function me(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ve(a, e, t) {
            var s = e.dir
              , u = e.next
              , l = u || s
              , c = t && "parentNode" === l
              , f = x++;
            return e.first ? function(e, t, n) {
                for (; e = e[s]; )
                    if (1 === e.nodeType || c)
                        return a(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o = [k, f];
                if (n) {
                    for (; e = e[s]; )
                        if ((1 === e.nodeType || c) && a(e, t, n))
                            return !0
                } else
                    for (; e = e[s]; )
                        if (1 === e.nodeType || c)
                            if (r = (i = e[S] || (e[S] = {}))[e.uniqueID] || (i[e.uniqueID] = {}),
                            u && u === e.nodeName.toLowerCase())
                                e = e[s] || e;
                            else {
                                if ((i = r[l]) && i[0] === k && i[1] === f)
                                    return o[2] = i[2];
                                if ((r[l] = o)[2] = a(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function xe(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function be(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function we(e) {
            for (var r, t, n, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ve(function(e) {
                return e === r
            }, a, !0), l = ve(function(e) {
                return -1 < M(r, e)
            }, a, !0), c = [function(e, t, n) {
                n = !o && (n || t !== w) || ((r = t).nodeType ? u : l)(e, t, n);
                return r = null,
                n
            }
            ]; s < i; s++)
                if (t = b.relative[e[s].type])
                    c = [ve(xe(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < i && !b.relative[e[n].type]; n++)
                            ;
                        return function e(d, h, g, y, m, t) {
                            return y && !y[S] && (y = e(y)),
                            m && !m[S] && (m = e(m, t)),
                            le(function(e, t, n, r) {
                                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++)
                                        se(e, t[r], n);
                                    return n
                                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : be(c, s, d, n, r), p = g ? m || (e ? d : l || y) ? [] : t : f;
                                if (g && g(f, p, n, r),
                                y)
                                    for (i = be(p, u),
                                    y(i, [], n, r),
                                    o = i.length; o--; )
                                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                                if (e) {
                                    if (m || d) {
                                        if (m) {
                                            for (i = [],
                                            o = p.length; o--; )
                                                (a = p[o]) && i.push(f[o] = a);
                                            m(null, p = [], i, r)
                                        }
                                        for (o = p.length; o--; )
                                            (a = p[o]) && -1 < (i = m ? M(e, a) : s[o]) && (e[i] = !(t[i] = a))
                                    }
                                } else
                                    p = be(p === t ? p.splice(l, p.length) : p),
                                    m ? m(null, t, p, r) : P.apply(t, p)
                            })
                        }(1 < s && xe(c), 1 < s && me(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(z, "$1"), t, s < n && we(e.slice(s, n)), n < i && we(e = e.slice(n)), n < i && me(e))
                    }
                    c.push(t)
                }
            return xe(c)
        }
        return ye.prototype = b.filters = b.pseudos,
        b.setFilters = new ye,
        d = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = N[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            for (a = e,
            s = [],
            u = b.preFilter; a; ) {
                for (o in n && !(r = U.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = X.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = Q[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : N(e, s).slice(0)
        }
        ,
        h = se.compile = function(e, t) {
            var n, y, m, v, x, r, i = [], o = [], a = j[e + " "];
            if (!a) {
                for (n = (t = t || d(e)).length; n--; )
                    ((a = we(t[n]))[S] ? i : o).push(a);
                (a = j(e, (v = 0 < (m = i).length,
                x = 0 < (y = o).length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E); s = y[a++]; )
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        v && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    v && l !== u) {
                        for (a = 0; s = m[a++]; )
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--; )
                                    c[l] || f[l] || (f[l] = H.call(r));
                            f = be(f)
                        }
                        P.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + m.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                v ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && d(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(re, f), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = Q.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !b.relative[s = a.type]); )
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(re, f), ne.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && me(o)))
                            return P.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || h(e, c))(r, t, !E, n, !t || ne.test(e) && ge(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = S.split("").sort(q).join("") === S,
        p.detectDuplicates = !!l,
        T(),
        p.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(I, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }),
        se
    }(T);
    E.find = d,
    E.expr = d.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = d.uniqueSort,
    E.text = d.getText,
    E.isXMLDoc = d.isXML,
    E.contains = d.contains,
    E.escapeSelector = d.escape;
    function w(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && E(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function S(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var k = E.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return x(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        if (!e)
            return this;
        if (n = n || q,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : x(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !r[1] && t)
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (t = t instanceof E ? t[0] : t,
            E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)),
            N.test(r[1]) && E.isPlainObject(t))
                for (var r in t)
                    x(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (e = C.getElementById(r[2])) && (this[0] = e,
        this.length = 1),
        this
    }
    ).prototype = E.fn;
    var q = E(C)
      , L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && E(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (H[r] || E.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && x(i = e.promise) ? i.call(e).done(t).fail(n) : e && x(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var n;
        r = "string" == typeof r ? (n = {},
        E.each(r.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, r);
        function i() {
            for (a = a || r.once,
            t = o = !0; u.length; l = -1)
                for (e = u.shift(); ++l < s.length; )
                    !1 === s[l].apply(e[0], e[1]) && r.stopOnFalse && (l = s.length,
                    e = !1);
            r.memory || (e = !1),
            o = !1,
            a && (s = e ? [] : "")
        }
        var o, e, t, a, s = [], u = [], l = -1, c = {
            add: function() {
                return s && (e && !o && (l = s.length - 1,
                u.push(e)),
                function n(e) {
                    E.each(e, function(e, t) {
                        x(t) ? r.unique && c.has(t) || s.push(t) : t && t.length && "string" !== h(t) && n(t)
                    })
                }(arguments),
                e && !o && i()),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    for (var n; -1 < (n = E.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s = s && [],
                this
            },
            disable: function() {
                return a = u = [],
                s = e = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                e || o || (s = e = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                o || i()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!t
            }
        };
        return c
    }
    ,
    E.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return E.Deferred(function(r) {
                        E.each(o, function(e, t) {
                            var n = x(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && x(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    x(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                            var n = this
                              , r = arguments
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()),
                            T.setTimeout(t))
                        }
                    }
                    return E.Deferred(function(e) {
                        o[0][3].add(l(0, e, x(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, x(t) ? t : R)),
                        o[2][3].add(l(0, e, x(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, a) : a
                }
            }
              , s = {};
            return E.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this,
                    o[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || a.resolveWith(i, o)
                }
            }
            var n = arguments.length
              , r = n
              , i = Array(r)
              , o = s.call(arguments)
              , a = E.Deferred();
            if (n <= 1 && (I(e, a.done(t(r)).resolve, a.reject, !n),
            "pending" === a.state() || x(o[r] && o[r].then)))
                return a.then();
            for (; r--; )
                I(o[r], t(r), a.reject);
            return a.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && W.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    E.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = E.Deferred();
    function B() {
        C.removeEventListener("DOMContentLoaded", B),
        T.removeEventListener("load", B),
        E.ready()
    }
    E.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(C, [E])
        }
    }),
    E.ready.then = F.then,
    "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", B),
    T.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === h(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        x(r) || (a = !0),
        t = l ? a ? (t.call(e, r),
        null) : (l = t,
        function(e, t, n) {
            return l.call(E(e), n)
        }
        ) : t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function G() {
        this.expando = E.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !E.isEmptyObject(e)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    Q.set(this, n)
                }) : $(this, function(e) {
                    var t;
                    return o && void 0 === e ? void 0 !== (t = Q.get(o, n)) || void 0 !== (t = Z(o, n)) ? t : void 0 : void this.each(function() {
                        Q.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = Q.get(o),
            1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--; )
                    a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                    Z(o, r, i[r]));
                Y.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return r = Y.get(e, t = (t || "fx") + "queue"),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            var n = E.queue(e, t = t || "fx")
              , r = n.length
              , i = n.shift()
              , o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                E.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(a, [a])
            }
            var r, i = 1, o = E.Deferred(), a = this, s = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (r = Y.get(a[s], e + "queueHooks")) && r.empty && (i++,
                r.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = C.documentElement
      , ie = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    }
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return E.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3],
            c = +(u /= 2) || 1; a--; )
                E.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            E.style(e, t, (c *= 2) + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++)
            (r = e[l]).style && (n = r.style.display,
            t ? ("none" === n && (u[l] = Y.get(r, "display") || null,
            u[l] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (u[l] = (s = o = i = void 0,
            o = r.ownerDocument,
            a = r.nodeName,
            (s = ue[a]) || (i = o.body.appendChild(o.createElement(a)),
            s = E.css(i, "display"),
            i.parentNode.removeChild(i),
            ue[a] = s = "none" === s ? "block" : s)))) : "none" !== n && (u[l] = "none",
            Y.set(r, "display", n)));
        for (l = 0; l < c; l++)
            null != u[l] && (e[l].style.display = u[l]);
        return e
    }
    E.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ce = /^(?:checkbox|radio)$/i
      , fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , pe = /^$|^module$|\/(?:java|ecma)script/i
      , f = C.createDocumentFragment().appendChild(C.createElement("div"));
    (d = C.createElement("input")).setAttribute("type", "radio"),
    d.setAttribute("checked", "checked"),
    d.setAttribute("name", "t"),
    f.appendChild(d),
    v.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked,
    f.innerHTML = "<textarea>x</textarea>",
    v.noCloneChecked = !!f.cloneNode(!0).lastChild.defaultValue,
    f.innerHTML = "<option></option>",
    v.option = !!f.lastChild;
    var de = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function he(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }
    function ge(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    de.tbody = de.tfoot = de.colgroup = de.caption = de.thead,
    de.th = de.td,
    v.option || (de.optgroup = de.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;
    function me(e, t, n, r, i) {
        for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === h(o))
                    E.merge(f, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
                    for (a = a || c.appendChild(t.createElement("div")),
                    s = (fe.exec(o) || ["", ""])[1].toLowerCase(),
                    s = de[s] || de._default,
                    a.innerHTML = s[1] + E.htmlPrefilter(o) + s[2],
                    l = s[0]; l--; )
                        a = a.lastChild;
                    E.merge(f, a.childNodes),
                    (a = c.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (c.textContent = "",
        p = 0; o = f[p++]; )
            if (r && -1 < E.inArray(o, r))
                i && i.push(o);
            else if (u = ie(o),
            a = he(c.appendChild(o), "script"),
            u && ge(a),
            n)
                for (l = 0; o = a[l++]; )
                    pe.test(o.type || "") && n.push(o);
        return c
    }
    var ve = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0
    }
    function be() {
        return !1
    }
    function we(e, t) {
        return e === function() {
            try {
                return C.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Te(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Te(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = be;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return E().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    function Ce(e, i, o) {
        o ? (Y.set(e, i, !1),
        E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, xe)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h = Y.get(t);
            if (V(t))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && E.find.matchesSelector(re, i),
                n.guid || (n.guid = E.guid++),
                (s = h.events) || (s = h.events = Object.create(null)),
                (a = h.handle) || (a = h.handle = function(e) {
                    return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                u = (e = (e || "").match(P) || [""]).length; u--; )
                    f = d = (l = ve.exec(e[u]) || [])[1],
                    p = (l[2] || "").split(".").sort(),
                    f && (c = E.event.special[f] || {},
                    f = (i ? c.delegateType : c.bindType) || f,
                    c = E.event.special[f] || {},
                    l = E.extend({
                        type: f,
                        origType: d,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o),
                    (d = s[f]) || ((d = s[f] = []).delegateCount = 0,
                    c.setup && !1 !== c.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(f, a)),
                    c.add && (c.add.call(t, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
                    E.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                for (l = (t = (t || "").match(P) || [""]).length; l--; )
                    if (d = g = (s = ve.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        for (f = E.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a = new Array(arguments.length), s = E.event.fix(e), u = (Y.get(this, "events") || Object.create(null))[s.type] || [], e = E.event.special[s.type] || {};
            for (a[0] = s,
            t = 1; t < arguments.length; t++)
                a[t] = arguments[t];
            if (s.delegateTarget = this,
            !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                for (o = E.event.handlers.call(this, s, u),
                t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem,
                    n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i,
                        s.data = i.data,
                        void 0 !== (i = ((E.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(),
                        s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: x(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && A(e, "input") && Ce(e, "click", xe),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return ce.test(e.type) && e.click && A(e, "input") && Ce(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return ce.test(e.type) && e.click && A(e, "input") && Y.get(e, "click") || A(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : be,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: be,
        isPropagationStopped: be,
        isImmediatePropagationStopped: be,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = xe,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = xe,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = xe,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return Ce(this, e, we),
                !1
            },
            trigger: function() {
                return Ce(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, r) {
            return Te(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Te(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = be),
                this.each(function() {
                    E.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        }
    });
    var Ee = /<script|<style|<link/i
      , Se = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ae(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function Ne(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function De(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (o = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                o)
                    for (n = 0,
                    r = o[i].length; n < r; n++)
                        E.event.add(t, i, o[i][n]);
            Q.hasData(e) && (e = Q.access(e),
            e = E.extend({}, e),
            Q.set(t, e))
        }
    }
    function qe(n, r, i, o) {
        r = y(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = x(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Se.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                qe(t, r, i, o)
            });
        if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = E.map(he(e, "script"), Ne)).length; c < f; c++)
                u = e,
                c !== p && (u = E.clone(u, !0, !0),
                s && E.merge(a, he(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                E.map(a, je),
                c = 0; c < s; c++)
                    u = a[c],
                    pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(ke, ""), u, l))
        }
        return n
    }
    function Le(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || E.cleanData(he(r)),
            r.parentNode && (n && ie(r) && ge(he(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = he(c),
                r = 0,
                i = (o = he(e)).length; r < i; r++)
                    s = o[r],
                    "input" === (l = (u = a[r]).nodeName.toLowerCase()) && ce.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || he(e),
                    a = a || he(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        De(o[r], a[r]);
                else
                    De(e, c);
            return 0 < (a = he(c, "script")).length && ge(a, !f && he(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return Le(this, e, !0)
        },
        remove: function(e) {
            return Le(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return qe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return qe(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ae(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return qe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(he(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ee.test(e) && !de[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(he(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return qe(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(he(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                E(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function He(e, t, n) {
        var r, i = {};
        for (r in t)
            i[r] = e.style[r],
            e.style[r] = t[r];
        for (r in n = n.call(e),
        t)
            e.style[r] = i[r];
        return n
    }
    var Oe, Pe, Re, Me, Ie, We, Fe, Be, $e = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i"), _e = function(e) {
        var t = e.ownerDocument.defaultView;
        return (t = !t || !t.opener ? T : t).getComputedStyle(e)
    }, ze = new RegExp(ne.join("|"),"i");
    function Ue(e, t, n) {
        var r, i, o = e.style;
        return (n = n || _e(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || ie(e) || (i = E.style(e, t)),
        !v.pixelBoxStyles() && $e.test(i) && ze.test(t) && (r = o.width,
        e = o.minWidth,
        t = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = i,
        i = n.width,
        o.width = r,
        o.minWidth = e,
        o.maxWidth = t)),
        void 0 !== i ? i + "" : i
    }
    function Xe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function Ve() {
        var e;
        Be && (Fe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        Be.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        re.appendChild(Fe).appendChild(Be),
        e = T.getComputedStyle(Be),
        Oe = "1%" !== e.top,
        We = 12 === Ge(e.marginLeft),
        Be.style.right = "60%",
        Me = 36 === Ge(e.right),
        Pe = 36 === Ge(e.width),
        Be.style.position = "absolute",
        Re = 12 === Ge(Be.offsetWidth / 3),
        re.removeChild(Fe),
        Be = null)
    }
    function Ge(e) {
        return Math.round(parseFloat(e))
    }
    Fe = C.createElement("div"),
    (Be = C.createElement("div")).style && (Be.style.backgroundClip = "content-box",
    Be.cloneNode(!0).style.backgroundClip = "",
    v.clearCloneStyle = "content-box" === Be.style.backgroundClip,
    E.extend(v, {
        boxSizingReliable: function() {
            return Ve(),
            Pe
        },
        pixelBoxStyles: function() {
            return Ve(),
            Me
        },
        pixelPosition: function() {
            return Ve(),
            Oe
        },
        reliableMarginLeft: function() {
            return Ve(),
            We
        },
        scrollboxSize: function() {
            return Ve(),
            Re
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Ie && (e = C.createElement("table"),
            t = C.createElement("tr"),
            n = C.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            re.appendChild(e).appendChild(t).appendChild(n),
            n = T.getComputedStyle(t),
            Ie = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            re.removeChild(e)),
            Ie
        }
    }));
    var Ye = ["Webkit", "Moz", "ms"]
      , Qe = C.createElement("div").style
      , Je = {};
    function Ke(e) {
        return E.cssProps[e] || Je[e] || (e in Qe ? e : Je[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; )
                if ((e = Ye[n] + t)in Qe)
                    return e
        }(e) || e)
    }
    var Ze = /^(none|table(?!-c[ea]).+)/
      , et = /^--/
      , tt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , nt = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function rt(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function it(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += E.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function ot(e, t, n) {
        var r = _e(e)
          , i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r)
          , o = i
          , a = Ue(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function at(e, t, n, r, i) {
        return new at.prototype.init(e,t,n,r,i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Ue(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = et.test(t), l = e.style;
                if (u || (t = Ke(s)),
                a = E.cssHooks[t] || E.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o = X(t);
            return et.test(t) || (t = Ke(o)),
            "normal" === (i = void 0 === (i = (o = E.cssHooks[t] || E.cssHooks[o]) && "get"in o ? o.get(e, !0, n) : i) ? Ue(e, t, r) : i) && t in nt && (i = nt[t]),
            "" === n || n ? (t = parseFloat(i),
            !0 === n || isFinite(t) ? t || 0 : i) : i
        }
    }),
    E.each(["height", "width"], function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !Ze.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, s, n) : He(e, tt, function() {
                        return ot(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = _e(e), o = !v.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i), n = n ? it(e, s, n, a, i) : 0;
                return a && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - it(e, s, "border", !1, i) - .5)),
                n && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                t = E.css(e, s)),
                rt(0, t, n)
            }
        }
    }),
    E.cssHooks.marginLeft = Xe(v.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - He(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (E.cssHooks[i + o].set = rt)
    }),
    E.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = _e(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((E.Tween = at).prototype = {
        constructor: at,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || E.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = at.propHooks[this.prop];
            return (e && e.get ? e : at.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : at.propHooks._default).set(this),
            this
        }
    }).init.prototype = at.prototype,
    (at.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    E.fx = at.prototype.init,
    E.fx.step = {};
    var st, ut, lt = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;
    function ft() {
        ut && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(ft) : T.setTimeout(ft, E.fx.interval),
        E.fx.tick())
    }
    function pt() {
        return T.setTimeout(function() {
            st = void 0
        }),
        st = Date.now()
    }
    function dt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ht(e, t, n) {
        for (var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function gt(i, e, t) {
        var n, o, r = 0, a = gt.prefilters.length, s = E.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (o)
                return !1;
            for (var e = st || pt(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++)
                l.tweens[n].run(t);
            return s.notifyWith(i, [l, t, e]),
            t < 1 && r ? e : (r || s.notifyWith(i, [l, 1, 0]),
            s.resolveWith(i, [l]),
            !1)
        }, l = s.promise({
            elem: i,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: st || pt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                e = E.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(e),
                e
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(i, [l, 1, 0]),
                s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]),
                this
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = E.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < a; r++)
            if (n = gt.prefilters[r].call(l, i, c, l.opts))
                return x(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return E.map(c, ht, l),
        x(l.opts.start) && l.opts.start.call(i, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        E.fx.timer(E.extend(u, {
            elem: i,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    E.Animation = E.extend(gt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = x(e) ? (t = e,
            ["*"]) : e.match(P)).length; r < i; r++)
                n = e[r],
                gt.tweeners[n] = gt.tweeners[n] || [],
                gt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c = "width"in t || "height"in t, f = this, p = {}, d = e.style, h = e.nodeType && ae(e), g = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    E.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                lt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])
                            continue;
                        h = !0
                    }
                    p[r] = g && g[r] || E.style(e, r)
                }
            if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
                null == (l = g && g.display) && (l = Y.get(e, "display")),
                "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = E.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (f.done(function() {
                    d.display = l
                }),
                null == l && (c = d.display,
                l = "none" === c ? "" : c)),
                d.display = "inline-block")),
                n.overflow && (d.overflow = "hidden",
                f.always(function() {
                    d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
                })),
                u = !1,
                p)
                    u || (g ? "hidden"in g && (h = g.hidden) : g = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (g.hidden = !h),
                    h && le([e], !0),
                    f.done(function() {
                        for (r in h || le([e]),
                        Y.remove(e, "fxshow"),
                        p)
                            E.style(e, r, p[r])
                    })),
                    u = ht(h ? g[r] : 0, r, f),
                    r in g || (g[r] = u.start,
                    h && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? gt.prefilters.unshift(e) : gt.prefilters.push(e)
        }
    }),
    E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || x(e) && e,
            duration: e,
            easing: n && t || t && !x(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x(r.old) && r.old.call(this),
            r.queue && E.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = E.isEmptyObject(t)
              , o = E.speed(e, n, r)
              , r = function() {
                var e = gt(this, E.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return r.finish = r,
            i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(i, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = E.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ct.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = E.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                E.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(r, !0), e, t, n)
        }
    }),
    E.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    E.timers = [],
    E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        for (st = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(),
        st = void 0
    }
    ,
    E.fx.timer = function(e) {
        E.timers.push(e),
        E.fx.start()
    }
    ,
    E.fx.interval = 13,
    E.fx.start = function() {
        ut || (ut = !0,
        ft())
    }
    ,
    E.fx.stop = function() {
        ut = null
    }
    ,
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r,
        this.queue(e = e || "fx", function(e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }
    ,
    f = C.createElement("input"),
    ee = C.createElement("select").appendChild(C.createElement("option")),
    f.type = "checkbox",
    v.checkOn = "" !== f.value,
    v.optSelected = ee.selected,
    (f = C.createElement("input")).value = "t",
    f.type = "radio",
    v.radioValue = "t" === f.value;
    var yt, mt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return $(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : !(i && "get"in i && null !== (r = i.get(e, t))) && null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    yt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = mt[t] || E.find.attr;
        mt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = mt[o],
            mt[o] = r,
            r = null != a(e, t, n) ? o : null,
            mt[o] = i),
            r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i
      , xt = /^(?:a|area)$/i;
    function bt(e) {
        return (e.match(P) || []).join(" ")
    }
    function wt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return $(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                i = E.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s = 0;
            if (x(t))
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, wt(this)))
                });
            if ((e = Tt(t)).length)
                for (; n = this[s++]; )
                    if (a = wt(n),
                    r = 1 === n.nodeType && " " + bt(a) + " ") {
                        for (o = 0; i = e[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a !== (a = bt(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s = 0;
            if (x(t))
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, wt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = Tt(t)).length)
                for (; n = this[s++]; )
                    if (a = wt(n),
                    r = 1 === n.nodeType && " " + bt(a) + " ") {
                        for (o = 0; i = e[o++]; )
                            for (; -1 < r.indexOf(" " + i + " "); )
                                r = r.replace(" " + i + " ", " ");
                        a !== (a = bt(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" == o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : x(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, wt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0,
                    n = E(this),
                    r = Tt(i); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" != o || ((e = wt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", !e && !1 !== i && Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + bt(wt(t)) + " ").indexOf(r))
                    return !0;
            return !1
        }
    });
    var Ct = /\r/g;
    E.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = x(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(Ct, "") : null == e ? "" : e : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : bt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                        if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
                            if (t = E(t).val(),
                            i)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        v.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    v.focusin = "onfocusin"in T;
    function Et(e) {
        e.stopPropagation()
    }
    var St = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [n || C], p = m.call(e, "type") ? e.type : e, d = m.call(e, "namespace") ? e.namespace.split(".") : [], h = c = o = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(),
            d.sort()),
            s = p.indexOf(":") < 0 && "on" + p,
            (e = e[E.expando] ? e : new E.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = d.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : E.makeArray(t, [e]),
            l = E.event.special[p] || {},
            r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!r && !l.noBubble && !g(n)) {
                    for (a = l.delegateType || p,
                    St.test(a + p) || (h = h.parentNode); h; h = h.parentNode)
                        f.push(h),
                        o = h;
                    o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T)
                }
                for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
                    c = h,
                    e.type = 1 < i ? a : l.bindType || p,
                    (u = (Y.get(h, "events") || Object.create(null))[e.type] && Y.get(h, "handle")) && u.apply(h, t),
                    (u = s && h[s]) && u.apply && V(h) && (e.result = u.apply(h, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !V(n) || s && x(n[p]) && !g(n) && ((o = n[s]) && (n[s] = null),
                E.event.triggered = p,
                e.isPropagationStopped() && c.addEventListener(p, Et),
                n[p](),
                e.isPropagationStopped() && c.removeEventListener(p, Et),
                E.event.triggered = void 0,
                o && (n[s] = o)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            e = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(e, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        }
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var kt = T.location
      , At = {
        guid: Date.now()
    }
      , Nt = /\?/;
    E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var jt = /\[\]$/
      , Dt = /\r?\n/g
      , qt = /^(?:submit|button|image|reset|file)$/i
      , Lt = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        function n(e, t) {
            t = x(t) ? t() : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, i = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                !function n(r, e, i, o) {
                    if (Array.isArray(e))
                        E.each(e, function(e, t) {
                            i || jt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
                        });
                    else if (i || "object" !== h(e))
                        o(r, e);
                    else
                        for (var t in e)
                            n(r + "[" + t + "]", e[t], i, o)
                }(r, e[r], t, n);
        return i.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !ce.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var Ht = /%20/g
      , Ot = /#.*$/
      , Pt = /([?&])_=[^&]*/
      , Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Mt = /^(?:GET|HEAD)$/
      , It = /^\/\//
      , Wt = {}
      , Ft = {}
      , Bt = "*/".concat("*")
      , $t = C.createElement("a");
    function _t(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (x(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function zt(t, r, i, o) {
        var a = {}
          , s = t === Ft;
        function u(e) {
            var n;
            return a[e] = !0,
            E.each(t[e] || [], function(e, t) {
                t = t(r, i, o);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
                u(t),
                !1)
            }),
            n
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }
    function Ut(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && E.extend(!0, e, r),
        e
    }
    $t.href = kt.href,
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e)
        },
        ajaxPrefilter: _t(Wt),
        ajaxTransport: _t(Ft),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0);
            var u, l, c, n, f, p, d, r, i, h = E.ajaxSetup({}, t = t || {}), g = h.context || h, y = h.context && (g.nodeType || g.jquery) ? E(g) : E.event, m = E.Deferred(), v = E.Callbacks("once memory"), x = h.statusCode || {}, o = {}, a = {}, s = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (p) {
                        if (!n)
                            for (n = {}; t = Rt.exec(c); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return p ? c : null
                },
                setRequestHeader: function(e, t) {
                    return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e,
                    o[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == p && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (p)
                            b.always(e[b.status]);
                        else
                            for (var t in e)
                                x[t] = [x[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || s;
                    return u && u.abort(e),
                    w(0, e),
                    this
                }
            };
            if (m.promise(b),
            h.url = ((e || h.url || kt.href) + "").replace(It, kt.protocol + "//"),
            h.type = t.method || t.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""],
            null == h.crossDomain) {
                i = C.createElement("a");
                try {
                    i.href = h.url,
                    i.href = i.href,
                    h.crossDomain = $t.protocol + "//" + $t.host != i.protocol + "//" + i.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)),
            zt(Wt, h, t, b),
            p)
                return b;
            for (r in (d = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Mt.test(h.type),
            l = h.url.replace(Ot, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (i = h.url.slice(l.length),
            h.data && (h.processData || "string" == typeof h.data) && (l += (Nt.test(l) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (l = l.replace(Pt, "$1"),
            i = (Nt.test(l) ? "&" : "?") + "_=" + At.guid++ + i),
            h.url = l + i),
            h.ifModified && (E.lastModified[l] && b.setRequestHeader("If-Modified-Since", E.lastModified[l]),
            E.etag[l] && b.setRequestHeader("If-None-Match", E.etag[l])),
            (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType),
            b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                b.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p))
                return b.abort();
            if (s = "abort",
            v.add(h.complete),
            b.done(h.success),
            b.fail(h.error),
            u = zt(Ft, h, t, b)) {
                if (b.readyState = 1,
                d && y.trigger("ajaxSend", [b, h]),
                p)
                    return b;
                h.async && 0 < h.timeout && (f = T.setTimeout(function() {
                    b.abort("timeout")
                }, h.timeout));
                try {
                    p = !1,
                    u.send(o, w)
                } catch (e) {
                    if (p)
                        throw e;
                    w(-1, e)
                }
            } else
                w(-1, "No Transport");
            function w(e, t, n, r) {
                var i, o, a, s = t;
                p || (p = !0,
                f && T.clearTimeout(f),
                u = void 0,
                c = r || "",
                b.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (a = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a = a || i
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(h, b, n)),
                !r && -1 < E.inArray("script", h.dataTypes) && E.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}
                ),
                a = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, a, b, r),
                r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (E.lastModified[l] = n),
                (n = b.getResponseHeader("etag")) && (E.etag[l] = n)),
                204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state,
                i = a.data,
                r = !(o = a.error))) : (o = s,
                !e && s || (s = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || s) + "",
                r ? m.resolveWith(g, [i, s, b]) : m.rejectWith(g, [b, s, o]),
                b.statusCode(x),
                x = void 0,
                d && y.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]),
                v.fireWith(g, [b, s]),
                d && (y.trigger("ajaxComplete", [b, h]),
                --E.active || E.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }),
    E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return x(t) && (r = r || n,
            n = t,
            t = void 0),
            E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }),
    E.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }
    ,
    E.fn.extend({
        wrapAll: function(e) {
            return this[0] && (x(e) && (e = e.call(this[0])),
            e = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return x(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = x(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    E.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Xt = {
        0: 200,
        1223: 204
    }
      , Vt = E.ajaxSettings.xhr();
    v.cors = !!Vt && "withCredentials"in Vt,
    v.ajax = Vt = !!Vt,
    E.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || Vt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Xt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && T.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e),
                e
            }
        }
    }),
    E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    E.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    C.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Gt = []
      , Yt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || E.expando + "_" + At.guid++;
            return this[e] = !0,
            e
        }
    }),
    E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = x(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || E.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = T[r],
            T[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? E(T).removeProp(r) : T[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Gt.push(r)),
                o && x(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    v.createHTMLDocument = ((f = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === f.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (v.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href,
        t.head.appendChild(r)) : t = C),
        r = !n && [],
        (n = N.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, r),
        r && r.length && E(r).remove(),
        E.merge([], n.childNodes)));
        var r
    }
    ,
    E.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = bt(e.slice(s)),
        e = e.slice(0, s)),
        x(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s = E.css(e, "position"), u = E(e), l = {};
            "static" === s && (e.style.position = "relative"),
            o = u.offset(),
            r = E.css(e, "top"),
            a = E.css(e, "left"),
            a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (i = (s = u.position()).top,
            s.left) : (i = parseFloat(r) || 0,
            parseFloat(a) || 0),
            null != (t = x(t) ? t.call(e, n, E.extend({}, o)) : t).top && (l.top = t.top - o.top + i),
            null != t.left && (l.left = t.left - o.left + a),
            "using"in t ? t.using.call(e, l) : u.css(l)
        }
    },
    E.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                return g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Xe(v.pixelPosition, function(e, t) {
            if (t)
                return t = Ue(e, n),
                $e.test(t) ? E(e).position()[n] + "px" : t
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t],
        t = e,
        e = r),
        x(e))
            return n = s.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            r
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = A,
    E.isFunction = x,
    E.isWindow = g,
    E.camelCase = X,
    E.type = h,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Qt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Jt = T.jQuery
      , Kt = T.$;
    return E.noConflict = function(e) {
        return T.$ === E && (T.$ = Kt),
        e && T.jQuery === E && (T.jQuery = Jt),
        E
    }
    ,
    void 0 === e && (T.jQuery = T.$ = E),
    E
});
var target;
if (searchBtn.addEventListener("click", function(e) {
    searchWrapper.classList.add("active")
}),
instagramLoad && instagramLoad.addEventListener("click", function(e) {
    instagramLoadCount += 1,
    document.querySelector(".instagram-photos-" + instagramLoadCount).classList.remove("invisible"),
    2 == instagramLoadCount && e.target.classList.add("invisible");
    instagramLoad.classList.add("hidden");
    instagramLoadParent.classList.add("hidden");

}),
shareIcon && shareContainer && (shareIcon.addEventListener("click", function(e) {
    const t = this.querySelector(".share-container");
    t.classList.toggle("active"),
    e.stopPropagation()
}),
shareContainer.addEventListener("click", function(e) {
    e.stopPropagation()
}),
document.body.addEventListener("click", function(e) {
    const t = document.querySelectorAll(".share-container");
    for (var a = 0; a < t.length; a++)
        t[a].classList.remove("active")
})),
closeSearch.addEventListener("click", function(e) {
    searchWrapper.classList.remove("active")
}),
document.onkeydown = function(e) {
    ("key"in (e = e || window.event) ? "Escape" === e.key || "Esc" === e.key : 27 === e.keyCode) && searchWrapper.classList.remove("active")
}
,
toggleMenu(),
toggleMenuInner(),
null !== coverCarouselVar && coverCarousel(),
null !== detectAboutPage && (testimonialCarousel(),
toggleAccordion(),
benefitCarousel()),
null !== galleryCarouselVar && galleryCarousel(),
null !== brandsCarouselVar && brandsCarousel(),
null !== partnerCarouselVar && partnerCarousel(),
null !== blogVideo && playVideo.addEventListener("click", function(e) {
    blogVideo.classList.add("video-active")
}),
null !== richText && (target = document.querySelectorAll("div, p, img, strong, blockquote, b, span"),
Array.prototype.forEach.call(target, function(e) {
    e.removeAttribute("style")
})),
null !== document.getElementById("brands-filter")) {
    for (let e = 0; e < brandFilter.length; e++)
        brandFilter[e].addEventListener("click", function(e) {
            e.preventDefault();
            var t = window.location.href
              , a = e.target.getAttribute("key")
              , e = new URL(t).searchParams.get("filter");
            e && 0 < e.length ? (e = e.split(",")).includes(a) ? -1 < (t = e.indexOf(a)) && e.splice(t, 1) : e.push(a) : (e = []).push(a);
            e = e.map(function(e, t) {
                return e
            }).join(",");
            window.location = "?filter=" + e
        });
    function setBrandFilterActive() {
        var e = window.location.href
          , t = new URL(e).searchParams.getAll("filter");
        if (t && null != t[0])
            for (var t = t[0].split(","), a = 0; a < t.length; a++) {
                var n = t[a];
                document.querySelector("#brands-filter a[key=" + n + "]").classList.add("active")
            }
        else
            document.querySelector("#brands-filter a[key=all]").classList.add("active")
    }
    setBrandFilterActive()
}
null !== priceBtn && priceBtn.addEventListener("click", function(e) {
    body.classList.add("modal-opened"),
    priceModal.classList.add("active")
});
function toggleAccordion() {
    let o = document.getElementsByClassName("accordion-item")
      , e = document.getElementsByClassName("accordion-title");
    for (i = 0; i < e.length; i++)
        e[i].addEventListener("click", t, !1);
    function t() {
        var e = this.parentNode.className;
        for (i = 0; i < o.length; i++)
            o[i].className = "accordion-item close";
        "accordion-item close" == e && (this.parentNode.className = "accordion-item open")
    }
}

$('.sub-menu__brands li').hover(function() {
  var img =   $(this).find('.image-background').attr('src');
  console.log(img);
  $('.sub-menu').css('background-image', 'url(' + img + ')');
}, function () {
  //  $(this).find('.image-background').fadeOut();
}
);
$('.thank-you-modal .close-modal').click(function(){
  $('.thank-you-modal').fadeOut();
});

function categoriesDropdown(){
  $('.categories-picked').click(function(){
    $(this).siblings('.categories-items').slideToggle();
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');

  });
};
categoriesDropdown();

$('.accordion-btn').click(function(){
  $(this).fadeOut();
  $('.accordion-text').slideDown();
});
$(".requestPrice").on("submit", function(t) {
    t.preventDefault();
    var e = this
      , s = new FormData(e)
      , t = $(this).attr("action");
    $(this).find(":input[type=submit]").prop("disabled", !0),
    $.ajax({
        url: t,
        data: s,
        cache: !1,
        processData: !1,
        contentType: !1,
        method: "POST"
    }).done(function(t) {
        $(".form-message").css("display", "block"),
        setTimeout(()=>{
            $(".form-message").css("display", "none"),
            e.reset()
        }
        , 3500)
    }).fail(function(t, e, s) {}).always(function(t, e, s) {}),
    $(this).find(":input[type=submit]").prop("disabled", !1)
});



function modalToggles() {}
function setCookie(e, t) {
    let o = new Date;
    o.setTime(o.getTime() + 31536e6);
    var n = "expires=" + o.toGMTString();
    document.cookie = e + "=" + t + ";" + n + ";path=/"
}
function getCookie(e) {
    var o = e + "=";
    let t = decodeURIComponent(document.cookie);
    var n = t.split(";");
    for (let t = 0; t < n.length; t++) {
        let e = n[t];
        for (; " " == e.charAt(0); )
            e = e.substring(1);
        if (0 == e.indexOf(o))
            return e.substring(o.length, e.length)
    }
    return ""
}
function checkCookie() {




    "" == getCookie("username") && 767 < window.innerWidth && setTimeout(function () {
      newsLetterModal.classList.add("active")
      body.classList.add("modal-opened");
    }, 40000);
}
null !== newsLetterModal && checkCookie(),
closeModal.addEventListener("click", function(e) {
    body.classList.remove("modal-opened"),
    null !== newsLetterModal && newsLetterModal.classList.remove("active"),
    null !== priceBtn && priceModal.classList.remove("active"),
    null !== document.querySelector("#not-show:checked") && setCookie("username", 1)
});
