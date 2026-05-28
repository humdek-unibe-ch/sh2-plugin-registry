import { LocalizableString as Df, Model as qf, EventBase as rc, settings as Wr, PanelModel as Wh, hasLicense as jf, Serializer as Zn, checkLibraryVersion as Wf, ItemValue as Uh } from "./survey-core-BYbqeafP.js";
function Te(n) {
  "@babel/helpers - typeof";
  return Te = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Te(n);
}
var vn = Uint8Array, Ji = Uint16Array, Il = Int32Array, Bl = new vn([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), Ol = new vn([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), zh = new vn([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), sc = function(n, t) {
  for (var e = new Ji(31), i = 0; i < 31; ++i)
    e[i] = t += 1 << n[i - 1];
  for (var r = new Il(e[30]), i = 1; i < 30; ++i)
    for (var s = e[i]; s < e[i + 1]; ++s)
      r[s] = s - e[i] << 5 | i;
  return { b: e, r };
}, oc = sc(Bl, 2), Uf = oc.b, _l = oc.r;
Uf[28] = 258, _l[258] = 28;
var zf = sc(Ol, 0), Hh = zf.r, Al = new Ji(32768);
for (var je = 0; je < 32768; ++je) {
  var pr = (je & 43690) >> 1 | (je & 21845) << 1;
  pr = (pr & 52428) >> 2 | (pr & 13107) << 2, pr = (pr & 61680) >> 4 | (pr & 3855) << 4, Al[je] = ((pr & 65280) >> 8 | (pr & 255) << 8) >> 1;
}
var oo = (function(n, t, e) {
  for (var i = n.length, r = 0, s = new Ji(t); r < i; ++r)
    n[r] && ++s[n[r] - 1];
  var u = new Ji(t);
  for (r = 1; r < t; ++r)
    u[r] = u[r - 1] + s[r - 1] << 1;
  var a;
  if (e) {
    a = new Ji(1 << t);
    var l = 15 - t;
    for (r = 0; r < i; ++r)
      if (n[r])
        for (var c = r << 4 | n[r], d = t - n[r], y = u[n[r] - 1]++ << d, A = y | (1 << d) - 1; y <= A; ++y)
          a[Al[y] >> l] = c;
  } else
    for (a = new Ji(i), r = 0; r < i; ++r)
      n[r] && (a[r] = Al[u[n[r] - 1]++] >> 15 - n[r]);
  return a;
}), Ur = new vn(288);
for (var je = 0; je < 144; ++je)
  Ur[je] = 8;
for (var je = 144; je < 256; ++je)
  Ur[je] = 9;
for (var je = 256; je < 280; ++je)
  Ur[je] = 7;
for (var je = 280; je < 288; ++je)
  Ur[je] = 8;
var la = new vn(32);
for (var je = 0; je < 32; ++je)
  la[je] = 5;
var Hf = /* @__PURE__ */ oo(Ur, 9, 0), Gf = /* @__PURE__ */ oo(la, 5, 0), ac = function(n) {
  return (n + 7) / 8 | 0;
}, Vf = function(n, t, e) {
  return (e == null || e > n.length) && (e = n.length), new vn(n.subarray(t, e));
}, Vn = function(n, t, e) {
  e <<= t & 7;
  var i = t / 8 | 0;
  n[i] |= e, n[i + 1] |= e >> 8;
}, ro = function(n, t, e) {
  e <<= t & 7;
  var i = t / 8 | 0;
  n[i] |= e, n[i + 1] |= e >> 8, n[i + 2] |= e >> 16;
}, Qa = function(n, t) {
  for (var e = [], i = 0; i < n.length; ++i)
    n[i] && e.push({ s: i, f: n[i] });
  var r = e.length, s = e.slice();
  if (!r)
    return { t: hc, l: 0 };
  if (r == 1) {
    var u = new vn(e[0].s + 1);
    return u[e[0].s] = 1, { t: u, l: 1 };
  }
  e.sort(function(vt, Ft) {
    return vt.f - Ft.f;
  }), e.push({ s: -1, f: 25001 });
  var a = e[0], l = e[1], c = 0, d = 1, y = 2;
  for (e[0] = { s: -1, f: a.f + l.f, l: a, r: l }; d != r - 1; )
    a = e[e[c].f < e[y].f ? c++ : y++], l = e[c != d && e[c].f < e[y].f ? c++ : y++], e[d++] = { s: -1, f: a.f + l.f, l: a, r: l };
  for (var A = s[0].s, i = 1; i < r; ++i)
    s[i].s > A && (A = s[i].s);
  var g = new Ji(A + 1), B = Ll(e[d - 1], g, 0);
  if (B > t) {
    var i = 0, O = 0, V = B - t, k = 1 << V;
    for (s.sort(function(Ft, lt) {
      return g[lt.s] - g[Ft.s] || Ft.f - lt.f;
    }); i < r; ++i) {
      var J = s[i].s;
      if (g[J] > t)
        O += k - (1 << B - g[J]), g[J] = t;
      else
        break;
    }
    for (O >>= V; O > 0; ) {
      var Z = s[i].s;
      g[Z] < t ? O -= 1 << t - g[Z]++ - 1 : ++i;
    }
    for (; i >= 0 && O; --i) {
      var Y = s[i].s;
      g[Y] == t && (--g[Y], ++O);
    }
    B = t;
  }
  return { t: new vn(g), l: B };
}, Ll = function(n, t, e) {
  return n.s == -1 ? Math.max(Ll(n.l, t, e + 1), Ll(n.r, t, e + 1)) : t[n.s] = e;
}, Gh = function(n) {
  for (var t = n.length; t && !n[--t]; )
    ;
  for (var e = new Ji(++t), i = 0, r = n[0], s = 1, u = function(l) {
    e[i++] = l;
  }, a = 1; a <= t; ++a)
    if (n[a] == r && a != t)
      ++s;
    else {
      if (!r && s > 2) {
        for (; s > 138; s -= 138)
          u(32754);
        s > 2 && (u(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0);
      } else if (s > 3) {
        for (u(r), --s; s > 6; s -= 6)
          u(8304);
        s > 2 && (u(s - 3 << 5 | 8208), s = 0);
      }
      for (; s--; )
        u(r);
      s = 1, r = n[a];
    }
  return { c: e.subarray(0, i), n: t };
}, so = function(n, t) {
  for (var e = 0, i = 0; i < t.length; ++i)
    e += n[i] * t[i];
  return e;
}, lc = function(n, t, e) {
  var i = e.length, r = ac(t + 2);
  n[r] = i & 255, n[r + 1] = i >> 8, n[r + 2] = n[r] ^ 255, n[r + 3] = n[r + 1] ^ 255;
  for (var s = 0; s < i; ++s)
    n[r + s + 4] = e[s];
  return (r + 4 + i) * 8;
}, Vh = function(n, t, e, i, r, s, u, a, l, c, d) {
  Vn(t, d++, e), ++r[256];
  for (var y = Qa(r, 15), A = y.t, g = y.l, B = Qa(s, 15), O = B.t, V = B.l, k = Gh(A), J = k.c, Z = k.n, Y = Gh(O), vt = Y.c, Ft = Y.n, lt = new Ji(19), M = 0; M < J.length; ++M)
    ++lt[J[M] & 31];
  for (var M = 0; M < vt.length; ++M)
    ++lt[vt[M] & 31];
  for (var b = Qa(lt, 7), H = b.t, v = b.l, F = 19; F > 4 && !H[zh[F - 1]]; --F)
    ;
  var D = c + 5 << 3, q = so(r, Ur) + so(s, la) + u, it = so(r, A) + so(s, O) + u + 14 + 3 * F + so(lt, H) + 2 * lt[16] + 3 * lt[17] + 7 * lt[18];
  if (l >= 0 && D <= q && D <= it)
    return lc(t, d, n.subarray(l, l + c));
  var ut, ot, et, ct;
  if (Vn(t, d, 1 + (it < q)), d += 2, it < q) {
    ut = oo(A, g, 0), ot = A, et = oo(O, V, 0), ct = O;
    var Nt = oo(H, v, 0);
    Vn(t, d, Z - 257), Vn(t, d + 5, Ft - 1), Vn(t, d + 10, F - 4), d += 14;
    for (var M = 0; M < F; ++M)
      Vn(t, d + 3 * M, H[zh[M]]);
    d += 3 * F;
    for (var ft = [J, vt], N = 0; N < 2; ++N)
      for (var R = ft[N], M = 0; M < R.length; ++M) {
        var z = R[M] & 31;
        Vn(t, d, Nt[z]), d += H[z], z > 15 && (Vn(t, d, R[M] >> 5 & 127), d += R[M] >> 12);
      }
  } else
    ut = Hf, ot = Ur, et = Gf, ct = la;
  for (var M = 0; M < a; ++M) {
    var X = i[M];
    if (X > 255) {
      var z = X >> 18 & 31;
      ro(t, d, ut[z + 257]), d += ot[z + 257], z > 7 && (Vn(t, d, X >> 23 & 31), d += Bl[z]);
      var Q = X & 31;
      ro(t, d, et[Q]), d += ct[Q], Q > 3 && (ro(t, d, X >> 5 & 8191), d += Ol[Q]);
    } else
      ro(t, d, ut[X]), d += ot[X];
  }
  return ro(t, d, ut[256]), d + ot[256];
}, Yf = /* @__PURE__ */ new Il([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), hc = /* @__PURE__ */ new vn(0), Kf = function(n, t, e, i, r, s) {
  var u = s.z || n.length, a = new vn(i + u + 5 * (1 + Math.ceil(u / 7e3)) + r), l = a.subarray(i, a.length - r), c = s.l, d = (s.r || 0) & 7;
  if (t) {
    d && (l[0] = s.r >> 3);
    for (var y = Yf[t - 1], A = y >> 13, g = y & 8191, B = (1 << e) - 1, O = s.p || new Ji(32768), V = s.h || new Ji(B + 1), k = Math.ceil(e / 3), J = 2 * k, Z = function(Ht) {
      return (n[Ht] ^ n[Ht + 1] << k ^ n[Ht + 2] << J) & B;
    }, Y = new Il(25e3), vt = new Ji(288), Ft = new Ji(32), lt = 0, M = 0, b = s.i || 0, H = 0, v = s.w || 0, F = 0; b + 2 < u; ++b) {
      var D = Z(b), q = b & 32767, it = V[D];
      if (O[q] = it, V[D] = q, v <= b) {
        var ut = u - b;
        if ((lt > 7e3 || H > 24576) && (ut > 423 || !c)) {
          d = Vh(n, l, 0, Y, vt, Ft, M, H, F, b - F, d), H = lt = M = 0, F = b;
          for (var ot = 0; ot < 286; ++ot)
            vt[ot] = 0;
          for (var ot = 0; ot < 30; ++ot)
            Ft[ot] = 0;
        }
        var et = 2, ct = 0, Nt = g, ft = q - it & 32767;
        if (ut > 2 && D == Z(b - ft))
          for (var N = Math.min(A, ut) - 1, R = Math.min(32767, b), z = Math.min(258, ut); ft <= R && --Nt && q != it; ) {
            if (n[b + et] == n[b + et - ft]) {
              for (var X = 0; X < z && n[b + X] == n[b + X - ft]; ++X)
                ;
              if (X > et) {
                if (et = X, ct = ft, X > N)
                  break;
                for (var Q = Math.min(ft, X - 2), st = 0, ot = 0; ot < Q; ++ot) {
                  var gt = b - ft + ot & 32767, mt = O[gt], yt = gt - mt & 32767;
                  yt > st && (st = yt, it = gt);
                }
              }
            }
            q = it, it = O[q], ft += q - it & 32767;
          }
        if (ct) {
          Y[H++] = 268435456 | _l[et] << 18 | Hh[ct];
          var Ct = _l[et] & 31, It = Hh[ct] & 31;
          M += Bl[Ct] + Ol[It], ++vt[257 + Ct], ++Ft[It], v = b + et, ++lt;
        } else
          Y[H++] = n[b], ++vt[n[b]];
      }
    }
    for (b = Math.max(b, v); b < u; ++b)
      Y[H++] = n[b], ++vt[n[b]];
    d = Vh(n, l, c, Y, vt, Ft, M, H, F, b - F, d), c || (s.r = d & 7 | l[d / 8 | 0] << 3, d -= 7, s.h = V, s.p = O, s.i = b, s.w = v);
  } else {
    for (var b = s.w || 0; b < u + c; b += 65535) {
      var Bt = b + 65535;
      Bt >= u && (l[d / 8 | 0] = c, Bt = u), d = lc(l, d + 1, n.subarray(b, Bt));
    }
    s.i = u;
  }
  return Vf(a, 0, i + ac(d) + r);
}, uc = function() {
  var n = 1, t = 0;
  return {
    p: function(e) {
      for (var i = n, r = t, s = e.length | 0, u = 0; u != s; ) {
        for (var a = Math.min(u + 2655, s); u < a; ++u)
          r += i += e[u];
        i = (i & 65535) + 15 * (i >> 16), r = (r & 65535) + 15 * (r >> 16);
      }
      n = i, t = r;
    },
    d: function() {
      return n %= 65521, t %= 65521, (n & 255) << 24 | (n & 65280) << 8 | (t & 255) << 8 | t >> 8;
    }
  };
}, Xf = function(n, t, e, i, r) {
  if (!r && (r = { l: 1 }, t.dictionary)) {
    var s = t.dictionary.subarray(-32768), u = new vn(s.length + n.length);
    u.set(s), u.set(n, s.length), n = u, r.w = s.length;
  }
  return Kf(n, t.level == null ? 6 : t.level, t.mem == null ? r.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5) : 20 : 12 + t.mem, e, i, r);
}, cc = function(n, t, e) {
  for (; e; ++t)
    n[t] = e, e >>>= 8;
}, $f = function(n, t) {
  var e = t.level, i = e == 0 ? 0 : e < 6 ? 1 : e == 9 ? 3 : 2;
  if (n[0] = 120, n[1] = i << 6 | (t.dictionary && 32), n[1] |= 31 - (n[0] << 8 | n[1]) % 31, t.dictionary) {
    var r = uc();
    r.p(t.dictionary), cc(n, 2, r.d());
  }
};
function Nl(n, t) {
  t || (t = {});
  var e = uc();
  e.p(n);
  var i = Xf(n, t, t.dictionary ? 6 : 2, 4);
  return $f(i, t), cc(i, i.length - 4, e.d()), i;
}
var Jf = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Zf = 0;
try {
  Jf.decode(hc, { stream: !0 }), Zf = 1;
} catch {
}
function Qf(n) {
  if (Array.isArray(n)) return n;
}
function td(n, t) {
  var e = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (e != null) {
    var i, r, s, u, a = [], l = !0, c = !1;
    try {
      if (s = (e = e.call(n)).next, t !== 0) for (; !(l = (i = s.call(e)).done) && (a.push(i.value), a.length !== t); l = !0) ;
    } catch (d) {
      c = !0, r = d;
    } finally {
      try {
        if (!l && e.return != null && (u = e.return(), Object(u) !== u)) return;
      } finally {
        if (c) throw r;
      }
    }
    return a;
  }
}
function Yh(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, i = Array(t); e < t; e++) i[e] = n[e];
  return i;
}
function ed(n, t) {
  if (n) {
    if (typeof n == "string") return Yh(n, t);
    var e = {}.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Yh(n, t) : void 0;
  }
}
function id() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kh(n, t) {
  return Qf(n) || td(n, t) || ed(n, t) || id();
}
function Xh(n, t = "utf8") {
  return new TextDecoder(t).decode(n);
}
const nd = new TextEncoder();
function rd(n) {
  return nd.encode(n);
}
const sd = 1024 * 8, od = (() => {
  const n = new Uint8Array(4), t = new Uint32Array(n.buffer);
  return !((t[0] = 1) & n[0]);
})(), tl = {
  int8: globalThis.Int8Array,
  uint8: globalThis.Uint8Array,
  int16: globalThis.Int16Array,
  uint16: globalThis.Uint16Array,
  int32: globalThis.Int32Array,
  uint32: globalThis.Uint32Array,
  uint64: globalThis.BigUint64Array,
  int64: globalThis.BigInt64Array,
  float32: globalThis.Float32Array,
  float64: globalThis.Float64Array
};
class Ml {
  /**
   * Reference to the internal ArrayBuffer object.
   */
  buffer;
  /**
   * Byte length of the internal ArrayBuffer.
   */
  byteLength;
  /**
   * Byte offset of the internal ArrayBuffer.
   */
  byteOffset;
  /**
   * Byte length of the internal ArrayBuffer.
   */
  length;
  /**
   * The current offset of the buffer's pointer.
   */
  offset;
  lastWrittenByte;
  littleEndian;
  _data;
  _mark;
  _marks;
  /**
   * Create a new IOBuffer.
   * @param data - The data to construct the IOBuffer with.
   * If data is a number, it will be the new buffer's length<br>
   * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
   * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
   * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
   * @param options - An object for the options.
   * @returns A new IOBuffer instance.
   */
  constructor(t = sd, e = {}) {
    let i = !1;
    typeof t == "number" ? t = new ArrayBuffer(t) : (i = !0, this.lastWrittenByte = t.byteLength);
    const r = e.offset ? e.offset >>> 0 : 0, s = t.byteLength - r;
    let u = r;
    (ArrayBuffer.isView(t) || t instanceof Ml) && (t.byteLength !== t.buffer.byteLength && (u = t.byteOffset + r), t = t.buffer), i ? this.lastWrittenByte = s : this.lastWrittenByte = 0, this.buffer = t, this.length = s, this.byteLength = s, this.byteOffset = u, this.offset = 0, this.littleEndian = !0, this._data = new DataView(this.buffer, u, s), this._mark = 0, this._marks = [];
  }
  /**
   * Checks if the memory allocated to the buffer is sufficient to store more
   * bytes after the offset.
   * @param byteLength - The needed memory in bytes.
   * @returns `true` if there is sufficient space and `false` otherwise.
   */
  available(t = 1) {
    return this.offset + t <= this.length;
  }
  /**
   * Check if little-endian mode is used for reading and writing multi-byte
   * values.
   * @returns `true` if little-endian mode is used, `false` otherwise.
   */
  isLittleEndian() {
    return this.littleEndian;
  }
  /**
   * Set little-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setLittleEndian() {
    return this.littleEndian = !0, this;
  }
  /**
   * Check if big-endian mode is used for reading and writing multi-byte values.
   * @returns `true` if big-endian mode is used, `false` otherwise.
   */
  isBigEndian() {
    return !this.littleEndian;
  }
  /**
   * Switches to big-endian mode for reading and writing multi-byte values.
   * @returns This.
   */
  setBigEndian() {
    return this.littleEndian = !1, this;
  }
  /**
   * Move the pointer n bytes forward.
   * @param n - Number of bytes to skip.
   * @returns This.
   */
  skip(t = 1) {
    return this.offset += t, this;
  }
  /**
   * Move the pointer n bytes backward.
   * @param n - Number of bytes to move back.
   * @returns This.
   */
  back(t = 1) {
    return this.offset -= t, this;
  }
  /**
   * Move the pointer to the given offset.
   * @param offset - The offset to move to.
   * @returns This.
   */
  seek(t) {
    return this.offset = t, this;
  }
  /**
   * Store the current pointer offset.
   * @see {@link IOBuffer#reset}
   * @returns This.
   */
  mark() {
    return this._mark = this.offset, this;
  }
  /**
   * Move the pointer back to the last pointer offset set by mark.
   * @see {@link IOBuffer#mark}
   * @returns This.
   */
  reset() {
    return this.offset = this._mark, this;
  }
  /**
   * Push the current pointer offset to the mark stack.
   * @see {@link IOBuffer#popMark}
   * @returns This.
   */
  pushMark() {
    return this._marks.push(this.offset), this;
  }
  /**
   * Pop the last pointer offset from the mark stack, and set the current
   * pointer offset to the popped value.
   * @see {@link IOBuffer#pushMark}
   * @returns This.
   */
  popMark() {
    const t = this._marks.pop();
    if (t === void 0)
      throw new Error("Mark stack empty");
    return this.seek(t), this;
  }
  /**
   * Move the pointer offset back to 0.
   * @returns This.
   */
  rewind() {
    return this.offset = 0, this;
  }
  /**
   * Make sure the buffer has sufficient memory to write a given byteLength at
   * the current pointer offset.
   * If the buffer's memory is insufficient, this method will create a new
   * buffer (a copy) with a length that is twice (byteLength + current offset).
   * @param byteLength - The needed memory in bytes.
   * @returns This.
   */
  ensureAvailable(t = 1) {
    if (!this.available(t)) {
      const i = (this.offset + t) * 2, r = new Uint8Array(i);
      r.set(new Uint8Array(this.buffer)), this.buffer = r.buffer, this.length = i, this.byteLength = i, this._data = new DataView(this.buffer);
    }
    return this;
  }
  /**
   * Read a byte and return false if the byte's value is 0, or true otherwise.
   * Moves pointer forward by one byte.
   * @returns The read boolean.
   */
  readBoolean() {
    return this.readUint8() !== 0;
  }
  /**
   * Read a signed 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  /**
   * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
   * @returns The read byte.
   */
  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  /**
   * Alias for {@link IOBuffer#readUint8}.
   * @returns The read byte.
   */
  readByte() {
    return this.readUint8();
  }
  /**
   * Read `n` bytes and move pointer forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The read bytes.
   */
  readBytes(t = 1) {
    return this.readArray(t, "uint8");
  }
  /**
   * Creates an array of corresponding to the type `type` and size `size`.
   * For example type `uint8` will create a `Uint8Array`.
   * @param size - size of the resulting array
   * @param type - number type of elements to read
   * @returns The read array.
   */
  readArray(t, e) {
    const i = tl[e].BYTES_PER_ELEMENT * t, r = this.byteOffset + this.offset, s = this.buffer.slice(r, r + i);
    if (this.littleEndian === od && e !== "uint8" && e !== "int8") {
      const a = new Uint8Array(this.buffer.slice(r, r + i));
      a.reverse();
      const l = new tl[e](a.buffer);
      return this.offset += i, l.reverse(), l;
    }
    const u = new tl[e](s);
    return this.offset += i, u;
  }
  /**
   * Read a 16-bit signed integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readInt16() {
    const t = this._data.getInt16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  /**
   * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
   * @returns The read value.
   */
  readUint16() {
    const t = this._data.getUint16(this.offset, this.littleEndian);
    return this.offset += 2, t;
  }
  /**
   * Read a 32-bit signed integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readInt32() {
    const t = this._data.getInt32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readUint32() {
    const t = this._data.getUint32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 32-bit floating number and move pointer forward by 4 bytes.
   * @returns The read value.
   */
  readFloat32() {
    const t = this._data.getFloat32(this.offset, this.littleEndian);
    return this.offset += 4, t;
  }
  /**
   * Read a 64-bit floating number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readFloat64() {
    const t = this._data.getFloat64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 64-bit signed integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigInt64() {
    const t = this._data.getBigInt64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 64-bit unsigned integer number and move pointer forward by 8 bytes.
   * @returns The read value.
   */
  readBigUint64() {
    const t = this._data.getBigUint64(this.offset, this.littleEndian);
    return this.offset += 8, t;
  }
  /**
   * Read a 1-byte ASCII character and move pointer forward by 1 byte.
   * @returns The read character.
   */
  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  /**
   * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
   * @param n - Number of characters to read.
   * @returns The read characters.
   */
  readChars(t = 1) {
    let e = "";
    for (let i = 0; i < t; i++)
      e += this.readChar();
    return e;
  }
  /**
   * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
   * forward by `n` bytes.
   * @param n - Number of bytes to read.
   * @returns The decoded string.
   */
  readUtf8(t = 1) {
    return Xh(this.readBytes(t));
  }
  /**
   * Read the next `n` bytes, return a string decoded with `encoding` and move pointer
   * forward by `n` bytes.
   * If no encoding is passed, the function is equivalent to @see {@link IOBuffer#readUtf8}
   * @param n - Number of bytes to read.
   * @param encoding - The encoding to use. Default is 'utf8'.
   * @returns The decoded string.
   */
  decodeText(t = 1, e = "utf8") {
    return Xh(this.readBytes(t), e);
  }
  /**
   * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
   * forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeBoolean(t) {
    return this.writeUint8(t ? 255 : 0), this;
  }
  /**
   * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt8(t) {
    return this.ensureAvailable(1), this._data.setInt8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
   * byte.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint8(t) {
    return this.ensureAvailable(1), this._data.setUint8(this.offset++, t), this._updateLastWrittenByte(), this;
  }
  /**
   * An alias for {@link IOBuffer#writeUint8}.
   * @param value - The value to write.
   * @returns This.
   */
  writeByte(t) {
    return this.writeUint8(t);
  }
  /**
   * Write all elements of `bytes` as uint8 values and move pointer forward by
   * `bytes.length` bytes.
   * @param bytes - The array of bytes to write.
   * @returns This.
   */
  writeBytes(t) {
    this.ensureAvailable(t.length);
    for (let e = 0; e < t.length; e++)
      this._data.setUint8(this.offset++, t[e]);
    return this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit signed integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt16(t) {
    return this.ensureAvailable(2), this._data.setInt16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint16(t) {
    return this.ensureAvailable(2), this._data.setUint16(this.offset, t, this.littleEndian), this.offset += 2, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit signed integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeInt32(t) {
    return this.ensureAvailable(4), this._data.setInt32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeUint32(t) {
    return this.ensureAvailable(4), this._data.setUint32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 32-bit floating number and move pointer forward by 4
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat32(t) {
    return this.ensureAvailable(4), this._data.setFloat32(this.offset, t, this.littleEndian), this.offset += 4, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit floating number and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeFloat64(t) {
    return this.ensureAvailable(8), this._data.setFloat64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit signed bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigInt64(t) {
    return this.ensureAvailable(8), this._data.setBigInt64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write `value` as a 64-bit unsigned bigint and move pointer forward by 8
   * bytes.
   * @param value - The value to write.
   * @returns This.
   */
  writeBigUint64(t) {
    return this.ensureAvailable(8), this._data.setBigUint64(this.offset, t, this.littleEndian), this.offset += 8, this._updateLastWrittenByte(), this;
  }
  /**
   * Write the charCode of `str`'s first character as an 8-bit unsigned integer
   * and move pointer forward by 1 byte.
   * @param str - The character to write.
   * @returns This.
   */
  writeChar(t) {
    return this.writeUint8(t.charCodeAt(0));
  }
  /**
   * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
   * and move pointer forward by `str.length` bytes.
   * @param str - The characters to write.
   * @returns This.
   */
  writeChars(t) {
    for (let e = 0; e < t.length; e++)
      this.writeUint8(t.charCodeAt(e));
    return this;
  }
  /**
   * UTF-8 encode and write `str` to the current pointer offset and move pointer
   * forward according to the encoded length.
   * @param str - The string to write.
   * @returns This.
   */
  writeUtf8(t) {
    return this.writeBytes(rd(t));
  }
  /**
   * Export a Uint8Array view of the internal buffer.
   * The view starts at the byte offset and its length
   * is calculated to stop at the last written byte or the original length.
   * @returns A new Uint8Array view.
   */
  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
  }
  /**
   *  Get the total number of bytes written so far, regardless of the current offset.
   * @returns - Total number of bytes.
   */
  getWrittenByteLength() {
    return this.lastWrittenByte - this.byteOffset;
  }
  /**
   * Update the last written byte offset
   * @private
   */
  _updateLastWrittenByte() {
    this.offset > this.lastWrittenByte && (this.lastWrittenByte = this.offset);
  }
}
function Cs(n) {
  let t = n.length;
  for (; --t >= 0; )
    n[t] = 0;
}
const ad = 3, ld = 258, fc = 29, hd = 256, ud = hd + 1 + fc, dc = 30, cd = 512, fd = new Array((ud + 2) * 2);
Cs(fd);
const dd = new Array(dc * 2);
Cs(dd);
const pd = new Array(cd);
Cs(pd);
const gd = new Array(ld - ad + 1);
Cs(gd);
const md = new Array(fc);
Cs(md);
const vd = new Array(dc);
Cs(vd);
const yd = (n, t, e, i) => {
  let r = n & 65535 | 0, s = n >>> 16 & 65535 | 0, u = 0;
  for (; e !== 0; ) {
    u = e > 2e3 ? 2e3 : e, e -= u;
    do
      r = r + t[i++] | 0, s = s + r | 0;
    while (--u);
    r %= 65521, s %= 65521;
  }
  return r | s << 16 | 0;
};
var Sl = yd;
const bd = () => {
  let n, t = [];
  for (var e = 0; e < 256; e++) {
    n = e;
    for (var i = 0; i < 8; i++)
      n = n & 1 ? 3988292384 ^ n >>> 1 : n >>> 1;
    t[e] = n;
  }
  return t;
}, wd = new Uint32Array(bd()), xd = (n, t, e, i) => {
  const r = wd, s = i + e;
  n ^= -1;
  for (let u = i; u < s; u++)
    n = n >>> 8 ^ r[(n ^ t[u]) & 255];
  return n ^ -1;
};
var Tn = xd, Fl = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, pc = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const _d = (n, t) => Object.prototype.hasOwnProperty.call(n, t);
var Ad = function(n) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const e = t.shift();
    if (e) {
      if (typeof e != "object")
        throw new TypeError(e + "must be non-object");
      for (const i in e)
        _d(e, i) && (n[i] = e[i]);
    }
  }
  return n;
}, Ld = (n) => {
  let t = 0;
  for (let i = 0, r = n.length; i < r; i++)
    t += n[i].length;
  const e = new Uint8Array(t);
  for (let i = 0, r = 0, s = n.length; i < s; i++) {
    let u = n[i];
    e.set(u, r), r += u.length;
  }
  return e;
}, gc = {
  assign: Ad,
  flattenChunks: Ld
};
let mc = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  mc = !1;
}
const lo = new Uint8Array(256);
for (let n = 0; n < 256; n++)
  lo[n] = n >= 252 ? 6 : n >= 248 ? 5 : n >= 240 ? 4 : n >= 224 ? 3 : n >= 192 ? 2 : 1;
lo[254] = lo[254] = 1;
var Nd = (n) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(n);
  let t, e, i, r, s, u = n.length, a = 0;
  for (r = 0; r < u; r++)
    e = n.charCodeAt(r), (e & 64512) === 55296 && r + 1 < u && (i = n.charCodeAt(r + 1), (i & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (i - 56320), r++)), a += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4;
  for (t = new Uint8Array(a), s = 0, r = 0; s < a; r++)
    e = n.charCodeAt(r), (e & 64512) === 55296 && r + 1 < u && (i = n.charCodeAt(r + 1), (i & 64512) === 56320 && (e = 65536 + (e - 55296 << 10) + (i - 56320), r++)), e < 128 ? t[s++] = e : e < 2048 ? (t[s++] = 192 | e >>> 6, t[s++] = 128 | e & 63) : e < 65536 ? (t[s++] = 224 | e >>> 12, t[s++] = 128 | e >>> 6 & 63, t[s++] = 128 | e & 63) : (t[s++] = 240 | e >>> 18, t[s++] = 128 | e >>> 12 & 63, t[s++] = 128 | e >>> 6 & 63, t[s++] = 128 | e & 63);
  return t;
};
const Sd = (n, t) => {
  if (t < 65534 && n.subarray && mc)
    return String.fromCharCode.apply(null, n.length === t ? n : n.subarray(0, t));
  let e = "";
  for (let i = 0; i < t; i++)
    e += String.fromCharCode(n[i]);
  return e;
};
var Fd = (n, t) => {
  const e = t || n.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(n.subarray(0, t));
  let i, r;
  const s = new Array(e * 2);
  for (r = 0, i = 0; i < e; ) {
    let u = n[i++];
    if (u < 128) {
      s[r++] = u;
      continue;
    }
    let a = lo[u];
    if (a > 4) {
      s[r++] = 65533, i += a - 1;
      continue;
    }
    for (u &= a === 2 ? 31 : a === 3 ? 15 : 7; a > 1 && i < e; )
      u = u << 6 | n[i++] & 63, a--;
    if (a > 1) {
      s[r++] = 65533;
      continue;
    }
    u < 65536 ? s[r++] = u : (u -= 65536, s[r++] = 55296 | u >> 10 & 1023, s[r++] = 56320 | u & 1023);
  }
  return Sd(s, r);
}, Pd = (n, t) => {
  t = t || n.length, t > n.length && (t = n.length);
  let e = t - 1;
  for (; e >= 0 && (n[e] & 192) === 128; )
    e--;
  return e < 0 || e === 0 ? t : e + lo[n[e]] > t ? e : t;
}, Pl = {
  string2buf: Nd,
  buf2string: Fd,
  utf8border: Pd
};
function Td() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var Cd = Td;
const Ko = 16209, kd = 16191;
var Rd = function(t, e) {
  let i, r, s, u, a, l, c, d, y, A, g, B, O, V, k, J, Z, Y, vt, Ft, lt, M, b, H;
  const v = t.state;
  i = t.next_in, b = t.input, r = i + (t.avail_in - 5), s = t.next_out, H = t.output, u = s - (e - t.avail_out), a = s + (t.avail_out - 257), l = v.dmax, c = v.wsize, d = v.whave, y = v.wnext, A = v.window, g = v.hold, B = v.bits, O = v.lencode, V = v.distcode, k = (1 << v.lenbits) - 1, J = (1 << v.distbits) - 1;
  t:
    do {
      B < 15 && (g += b[i++] << B, B += 8, g += b[i++] << B, B += 8), Z = O[g & k];
      e:
        for (; ; ) {
          if (Y = Z >>> 24, g >>>= Y, B -= Y, Y = Z >>> 16 & 255, Y === 0)
            H[s++] = Z & 65535;
          else if (Y & 16) {
            vt = Z & 65535, Y &= 15, Y && (B < Y && (g += b[i++] << B, B += 8), vt += g & (1 << Y) - 1, g >>>= Y, B -= Y), B < 15 && (g += b[i++] << B, B += 8, g += b[i++] << B, B += 8), Z = V[g & J];
            i:
              for (; ; ) {
                if (Y = Z >>> 24, g >>>= Y, B -= Y, Y = Z >>> 16 & 255, Y & 16) {
                  if (Ft = Z & 65535, Y &= 15, B < Y && (g += b[i++] << B, B += 8, B < Y && (g += b[i++] << B, B += 8)), Ft += g & (1 << Y) - 1, Ft > l) {
                    t.msg = "invalid distance too far back", v.mode = Ko;
                    break t;
                  }
                  if (g >>>= Y, B -= Y, Y = s - u, Ft > Y) {
                    if (Y = Ft - Y, Y > d && v.sane) {
                      t.msg = "invalid distance too far back", v.mode = Ko;
                      break t;
                    }
                    if (lt = 0, M = A, y === 0) {
                      if (lt += c - Y, Y < vt) {
                        vt -= Y;
                        do
                          H[s++] = A[lt++];
                        while (--Y);
                        lt = s - Ft, M = H;
                      }
                    } else if (y < Y) {
                      if (lt += c + y - Y, Y -= y, Y < vt) {
                        vt -= Y;
                        do
                          H[s++] = A[lt++];
                        while (--Y);
                        if (lt = 0, y < vt) {
                          Y = y, vt -= Y;
                          do
                            H[s++] = A[lt++];
                          while (--Y);
                          lt = s - Ft, M = H;
                        }
                      }
                    } else if (lt += y - Y, Y < vt) {
                      vt -= Y;
                      do
                        H[s++] = A[lt++];
                      while (--Y);
                      lt = s - Ft, M = H;
                    }
                    for (; vt > 2; )
                      H[s++] = M[lt++], H[s++] = M[lt++], H[s++] = M[lt++], vt -= 3;
                    vt && (H[s++] = M[lt++], vt > 1 && (H[s++] = M[lt++]));
                  } else {
                    lt = s - Ft;
                    do
                      H[s++] = H[lt++], H[s++] = H[lt++], H[s++] = H[lt++], vt -= 3;
                    while (vt > 2);
                    vt && (H[s++] = H[lt++], vt > 1 && (H[s++] = H[lt++]));
                  }
                } else if ((Y & 64) === 0) {
                  Z = V[(Z & 65535) + (g & (1 << Y) - 1)];
                  continue i;
                } else {
                  t.msg = "invalid distance code", v.mode = Ko;
                  break t;
                }
                break;
              }
          } else if ((Y & 64) === 0) {
            Z = O[(Z & 65535) + (g & (1 << Y) - 1)];
            continue e;
          } else if (Y & 32) {
            v.mode = kd;
            break t;
          } else {
            t.msg = "invalid literal/length code", v.mode = Ko;
            break t;
          }
          break;
        }
    } while (i < r && s < a);
  vt = B >> 3, i -= vt, B -= vt << 3, g &= (1 << B) - 1, t.next_in = i, t.next_out = s, t.avail_in = i < r ? 5 + (r - i) : 5 - (i - r), t.avail_out = s < a ? 257 + (a - s) : 257 - (s - a), v.hold = g, v.bits = B;
};
const ys = 15, $h = 852, Jh = 592, Zh = 0, el = 1, Qh = 2, Ed = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Id = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Bd = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Od = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Md = (n, t, e, i, r, s, u, a) => {
  const l = a.bits;
  let c = 0, d = 0, y = 0, A = 0, g = 0, B = 0, O = 0, V = 0, k = 0, J = 0, Z, Y, vt, Ft, lt, M = null, b;
  const H = new Uint16Array(ys + 1), v = new Uint16Array(ys + 1);
  let F = null, D, q, it;
  for (c = 0; c <= ys; c++)
    H[c] = 0;
  for (d = 0; d < i; d++)
    H[t[e + d]]++;
  for (g = l, A = ys; A >= 1 && H[A] === 0; A--)
    ;
  if (g > A && (g = A), A === 0)
    return r[s++] = 1 << 24 | 64 << 16 | 0, r[s++] = 1 << 24 | 64 << 16 | 0, a.bits = 1, 0;
  for (y = 1; y < A && H[y] === 0; y++)
    ;
  for (g < y && (g = y), V = 1, c = 1; c <= ys; c++)
    if (V <<= 1, V -= H[c], V < 0)
      return -1;
  if (V > 0 && (n === Zh || A !== 1))
    return -1;
  for (v[1] = 0, c = 1; c < ys; c++)
    v[c + 1] = v[c] + H[c];
  for (d = 0; d < i; d++)
    t[e + d] !== 0 && (u[v[t[e + d]]++] = d);
  if (n === Zh ? (M = F = u, b = 20) : n === el ? (M = Ed, F = Id, b = 257) : (M = Bd, F = Od, b = 0), J = 0, d = 0, c = y, lt = s, B = g, O = 0, vt = -1, k = 1 << g, Ft = k - 1, n === el && k > $h || n === Qh && k > Jh)
    return 1;
  for (; ; ) {
    D = c - O, u[d] + 1 < b ? (q = 0, it = u[d]) : u[d] >= b ? (q = F[u[d] - b], it = M[u[d] - b]) : (q = 96, it = 0), Z = 1 << c - O, Y = 1 << B, y = Y;
    do
      Y -= Z, r[lt + (J >> O) + Y] = D << 24 | q << 16 | it | 0;
    while (Y !== 0);
    for (Z = 1 << c - 1; J & Z; )
      Z >>= 1;
    if (Z !== 0 ? (J &= Z - 1, J += Z) : J = 0, d++, --H[c] === 0) {
      if (c === A)
        break;
      c = t[e + u[d]];
    }
    if (c > g && (J & Ft) !== vt) {
      for (O === 0 && (O = g), lt += y, B = c - O, V = 1 << B; B + O < A && (V -= H[B + O], !(V <= 0)); )
        B++, V <<= 1;
      if (k += 1 << B, n === el && k > $h || n === Qh && k > Jh)
        return 1;
      vt = J & Ft, r[vt] = g << 24 | B << 16 | lt - s | 0;
    }
  }
  return J !== 0 && (r[lt + J] = c - O << 24 | 64 << 16 | 0), a.bits = g, 0;
};
var ao = Md;
const Dd = 0, vc = 1, yc = 2, {
  Z_FINISH: tu,
  Z_BLOCK: qd,
  Z_TREES: Xo,
  Z_OK: zr,
  Z_STREAM_END: jd,
  Z_NEED_DICT: Wd,
  Z_STREAM_ERROR: on,
  Z_DATA_ERROR: bc,
  Z_MEM_ERROR: wc,
  Z_BUF_ERROR: Ud,
  Z_DEFLATED: eu
} = pc, da = 16180, iu = 16181, nu = 16182, ru = 16183, su = 16184, ou = 16185, au = 16186, lu = 16187, hu = 16188, uu = 16189, ha = 16190, Yn = 16191, il = 16192, cu = 16193, nl = 16194, fu = 16195, du = 16196, pu = 16197, gu = 16198, $o = 16199, Jo = 16200, mu = 16201, vu = 16202, yu = 16203, bu = 16204, wu = 16205, rl = 16206, xu = 16207, _u = 16208, ze = 16209, xc = 16210, _c = 16211, zd = 852, Hd = 592, Gd = 15, Vd = Gd, Au = (n) => (n >>> 24 & 255) + (n >>> 8 & 65280) + ((n & 65280) << 8) + ((n & 255) << 24);
function Yd() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Yr = (n) => {
  if (!n)
    return 1;
  const t = n.state;
  return !t || t.strm !== n || t.mode < da || t.mode > _c ? 1 : 0;
}, Ac = (n) => {
  if (Yr(n))
    return on;
  const t = n.state;
  return n.total_in = n.total_out = t.total = 0, n.msg = "", t.wrap && (n.adler = t.wrap & 1), t.mode = da, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(zd), t.distcode = t.distdyn = new Int32Array(Hd), t.sane = 1, t.back = -1, zr;
}, Lc = (n) => {
  if (Yr(n))
    return on;
  const t = n.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, Ac(n);
}, Nc = (n, t) => {
  let e;
  if (Yr(n))
    return on;
  const i = n.state;
  return t < 0 ? (e = 0, t = -t) : (e = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? on : (i.window !== null && i.wbits !== t && (i.window = null), i.wrap = e, i.wbits = t, Lc(n));
}, Sc = (n, t) => {
  if (!n)
    return on;
  const e = new Yd();
  n.state = e, e.strm = n, e.window = null, e.mode = da;
  const i = Nc(n, t);
  return i !== zr && (n.state = null), i;
}, Kd = (n) => Sc(n, Vd);
let Lu = !0, sl, ol;
const Xd = (n) => {
  if (Lu) {
    sl = new Int32Array(512), ol = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      n.lens[t++] = 8;
    for (; t < 256; )
      n.lens[t++] = 9;
    for (; t < 280; )
      n.lens[t++] = 7;
    for (; t < 288; )
      n.lens[t++] = 8;
    for (ao(vc, n.lens, 0, 288, sl, 0, n.work, { bits: 9 }), t = 0; t < 32; )
      n.lens[t++] = 5;
    ao(yc, n.lens, 0, 32, ol, 0, n.work, { bits: 5 }), Lu = !1;
  }
  n.lencode = sl, n.lenbits = 9, n.distcode = ol, n.distbits = 5;
}, Fc = (n, t, e, i) => {
  let r;
  const s = n.state;
  return s.window === null && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new Uint8Array(s.wsize)), i >= s.wsize ? (s.window.set(t.subarray(e - s.wsize, e), 0), s.wnext = 0, s.whave = s.wsize) : (r = s.wsize - s.wnext, r > i && (r = i), s.window.set(t.subarray(e - i, e - i + r), s.wnext), i -= r, i ? (s.window.set(t.subarray(e - i, e), 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += r, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += r))), 0;
}, $d = (n, t) => {
  let e, i, r, s, u, a, l, c, d, y, A, g, B, O, V = 0, k, J, Z, Y, vt, Ft, lt, M;
  const b = new Uint8Array(4);
  let H, v;
  const F = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Yr(n) || !n.output || !n.input && n.avail_in !== 0)
    return on;
  e = n.state, e.mode === Yn && (e.mode = il), u = n.next_out, r = n.output, l = n.avail_out, s = n.next_in, i = n.input, a = n.avail_in, c = e.hold, d = e.bits, y = a, A = l, M = zr;
  t:
    for (; ; )
      switch (e.mode) {
        case da:
          if (e.wrap === 0) {
            e.mode = il;
            break;
          }
          for (; d < 16; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          if (e.wrap & 2 && c === 35615) {
            e.wbits === 0 && (e.wbits = 15), e.check = 0, b[0] = c & 255, b[1] = c >>> 8 & 255, e.check = Tn(e.check, b, 2, 0), c = 0, d = 0, e.mode = iu;
            break;
          }
          if (e.head && (e.head.done = !1), !(e.wrap & 1) || /* check if zlib header allowed */
          (((c & 255) << 8) + (c >> 8)) % 31) {
            n.msg = "incorrect header check", e.mode = ze;
            break;
          }
          if ((c & 15) !== eu) {
            n.msg = "unknown compression method", e.mode = ze;
            break;
          }
          if (c >>>= 4, d -= 4, lt = (c & 15) + 8, e.wbits === 0 && (e.wbits = lt), lt > 15 || lt > e.wbits) {
            n.msg = "invalid window size", e.mode = ze;
            break;
          }
          e.dmax = 1 << e.wbits, e.flags = 0, n.adler = e.check = 1, e.mode = c & 512 ? uu : Yn, c = 0, d = 0;
          break;
        case iu:
          for (; d < 16; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          if (e.flags = c, (e.flags & 255) !== eu) {
            n.msg = "unknown compression method", e.mode = ze;
            break;
          }
          if (e.flags & 57344) {
            n.msg = "unknown header flags set", e.mode = ze;
            break;
          }
          e.head && (e.head.text = c >> 8 & 1), e.flags & 512 && e.wrap & 4 && (b[0] = c & 255, b[1] = c >>> 8 & 255, e.check = Tn(e.check, b, 2, 0)), c = 0, d = 0, e.mode = nu;
        /* falls through */
        case nu:
          for (; d < 32; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          e.head && (e.head.time = c), e.flags & 512 && e.wrap & 4 && (b[0] = c & 255, b[1] = c >>> 8 & 255, b[2] = c >>> 16 & 255, b[3] = c >>> 24 & 255, e.check = Tn(e.check, b, 4, 0)), c = 0, d = 0, e.mode = ru;
        /* falls through */
        case ru:
          for (; d < 16; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          e.head && (e.head.xflags = c & 255, e.head.os = c >> 8), e.flags & 512 && e.wrap & 4 && (b[0] = c & 255, b[1] = c >>> 8 & 255, e.check = Tn(e.check, b, 2, 0)), c = 0, d = 0, e.mode = su;
        /* falls through */
        case su:
          if (e.flags & 1024) {
            for (; d < 16; ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            e.length = c, e.head && (e.head.extra_len = c), e.flags & 512 && e.wrap & 4 && (b[0] = c & 255, b[1] = c >>> 8 & 255, e.check = Tn(e.check, b, 2, 0)), c = 0, d = 0;
          } else e.head && (e.head.extra = null);
          e.mode = ou;
        /* falls through */
        case ou:
          if (e.flags & 1024 && (g = e.length, g > a && (g = a), g && (e.head && (lt = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Uint8Array(e.head.extra_len)), e.head.extra.set(
            i.subarray(
              s,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              s + g
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            lt
          )), e.flags & 512 && e.wrap & 4 && (e.check = Tn(e.check, i, g, s)), a -= g, s += g, e.length -= g), e.length))
            break t;
          e.length = 0, e.mode = au;
        /* falls through */
        case au:
          if (e.flags & 2048) {
            if (a === 0)
              break t;
            g = 0;
            do
              lt = i[s + g++], e.head && lt && e.length < 65536 && (e.head.name += String.fromCharCode(lt));
            while (lt && g < a);
            if (e.flags & 512 && e.wrap & 4 && (e.check = Tn(e.check, i, g, s)), a -= g, s += g, lt)
              break t;
          } else e.head && (e.head.name = null);
          e.length = 0, e.mode = lu;
        /* falls through */
        case lu:
          if (e.flags & 4096) {
            if (a === 0)
              break t;
            g = 0;
            do
              lt = i[s + g++], e.head && lt && e.length < 65536 && (e.head.comment += String.fromCharCode(lt));
            while (lt && g < a);
            if (e.flags & 512 && e.wrap & 4 && (e.check = Tn(e.check, i, g, s)), a -= g, s += g, lt)
              break t;
          } else e.head && (e.head.comment = null);
          e.mode = hu;
        /* falls through */
        case hu:
          if (e.flags & 512) {
            for (; d < 16; ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            if (e.wrap & 4 && c !== (e.check & 65535)) {
              n.msg = "header crc mismatch", e.mode = ze;
              break;
            }
            c = 0, d = 0;
          }
          e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), n.adler = e.check = 0, e.mode = Yn;
          break;
        case uu:
          for (; d < 32; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          n.adler = e.check = Au(c), c = 0, d = 0, e.mode = ha;
        /* falls through */
        case ha:
          if (e.havedict === 0)
            return n.next_out = u, n.avail_out = l, n.next_in = s, n.avail_in = a, e.hold = c, e.bits = d, Wd;
          n.adler = e.check = 1, e.mode = Yn;
        /* falls through */
        case Yn:
          if (t === qd || t === Xo)
            break t;
        /* falls through */
        case il:
          if (e.last) {
            c >>>= d & 7, d -= d & 7, e.mode = rl;
            break;
          }
          for (; d < 3; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          switch (e.last = c & 1, c >>>= 1, d -= 1, c & 3) {
            case 0:
              e.mode = cu;
              break;
            case 1:
              if (Xd(e), e.mode = $o, t === Xo) {
                c >>>= 2, d -= 2;
                break t;
              }
              break;
            case 2:
              e.mode = du;
              break;
            case 3:
              n.msg = "invalid block type", e.mode = ze;
          }
          c >>>= 2, d -= 2;
          break;
        case cu:
          for (c >>>= d & 7, d -= d & 7; d < 32; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          if ((c & 65535) !== (c >>> 16 ^ 65535)) {
            n.msg = "invalid stored block lengths", e.mode = ze;
            break;
          }
          if (e.length = c & 65535, c = 0, d = 0, e.mode = nl, t === Xo)
            break t;
        /* falls through */
        case nl:
          e.mode = fu;
        /* falls through */
        case fu:
          if (g = e.length, g) {
            if (g > a && (g = a), g > l && (g = l), g === 0)
              break t;
            r.set(i.subarray(s, s + g), u), a -= g, s += g, l -= g, u += g, e.length -= g;
            break;
          }
          e.mode = Yn;
          break;
        case du:
          for (; d < 14; ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          if (e.nlen = (c & 31) + 257, c >>>= 5, d -= 5, e.ndist = (c & 31) + 1, c >>>= 5, d -= 5, e.ncode = (c & 15) + 4, c >>>= 4, d -= 4, e.nlen > 286 || e.ndist > 30) {
            n.msg = "too many length or distance symbols", e.mode = ze;
            break;
          }
          e.have = 0, e.mode = pu;
        /* falls through */
        case pu:
          for (; e.have < e.ncode; ) {
            for (; d < 3; ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            e.lens[F[e.have++]] = c & 7, c >>>= 3, d -= 3;
          }
          for (; e.have < 19; )
            e.lens[F[e.have++]] = 0;
          if (e.lencode = e.lendyn, e.lenbits = 7, H = { bits: e.lenbits }, M = ao(Dd, e.lens, 0, 19, e.lencode, 0, e.work, H), e.lenbits = H.bits, M) {
            n.msg = "invalid code lengths set", e.mode = ze;
            break;
          }
          e.have = 0, e.mode = gu;
        /* falls through */
        case gu:
          for (; e.have < e.nlen + e.ndist; ) {
            for (; V = e.lencode[c & (1 << e.lenbits) - 1], k = V >>> 24, J = V >>> 16 & 255, Z = V & 65535, !(k <= d); ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            if (Z < 16)
              c >>>= k, d -= k, e.lens[e.have++] = Z;
            else {
              if (Z === 16) {
                for (v = k + 2; d < v; ) {
                  if (a === 0)
                    break t;
                  a--, c += i[s++] << d, d += 8;
                }
                if (c >>>= k, d -= k, e.have === 0) {
                  n.msg = "invalid bit length repeat", e.mode = ze;
                  break;
                }
                lt = e.lens[e.have - 1], g = 3 + (c & 3), c >>>= 2, d -= 2;
              } else if (Z === 17) {
                for (v = k + 3; d < v; ) {
                  if (a === 0)
                    break t;
                  a--, c += i[s++] << d, d += 8;
                }
                c >>>= k, d -= k, lt = 0, g = 3 + (c & 7), c >>>= 3, d -= 3;
              } else {
                for (v = k + 7; d < v; ) {
                  if (a === 0)
                    break t;
                  a--, c += i[s++] << d, d += 8;
                }
                c >>>= k, d -= k, lt = 0, g = 11 + (c & 127), c >>>= 7, d -= 7;
              }
              if (e.have + g > e.nlen + e.ndist) {
                n.msg = "invalid bit length repeat", e.mode = ze;
                break;
              }
              for (; g--; )
                e.lens[e.have++] = lt;
            }
          }
          if (e.mode === ze)
            break;
          if (e.lens[256] === 0) {
            n.msg = "invalid code -- missing end-of-block", e.mode = ze;
            break;
          }
          if (e.lenbits = 9, H = { bits: e.lenbits }, M = ao(vc, e.lens, 0, e.nlen, e.lencode, 0, e.work, H), e.lenbits = H.bits, M) {
            n.msg = "invalid literal/lengths set", e.mode = ze;
            break;
          }
          if (e.distbits = 6, e.distcode = e.distdyn, H = { bits: e.distbits }, M = ao(yc, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, H), e.distbits = H.bits, M) {
            n.msg = "invalid distances set", e.mode = ze;
            break;
          }
          if (e.mode = $o, t === Xo)
            break t;
        /* falls through */
        case $o:
          e.mode = Jo;
        /* falls through */
        case Jo:
          if (a >= 6 && l >= 258) {
            n.next_out = u, n.avail_out = l, n.next_in = s, n.avail_in = a, e.hold = c, e.bits = d, Rd(n, A), u = n.next_out, r = n.output, l = n.avail_out, s = n.next_in, i = n.input, a = n.avail_in, c = e.hold, d = e.bits, e.mode === Yn && (e.back = -1);
            break;
          }
          for (e.back = 0; V = e.lencode[c & (1 << e.lenbits) - 1], k = V >>> 24, J = V >>> 16 & 255, Z = V & 65535, !(k <= d); ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          if (J && (J & 240) === 0) {
            for (Y = k, vt = J, Ft = Z; V = e.lencode[Ft + ((c & (1 << Y + vt) - 1) >> Y)], k = V >>> 24, J = V >>> 16 & 255, Z = V & 65535, !(Y + k <= d); ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            c >>>= Y, d -= Y, e.back += Y;
          }
          if (c >>>= k, d -= k, e.back += k, e.length = Z, J === 0) {
            e.mode = wu;
            break;
          }
          if (J & 32) {
            e.back = -1, e.mode = Yn;
            break;
          }
          if (J & 64) {
            n.msg = "invalid literal/length code", e.mode = ze;
            break;
          }
          e.extra = J & 15, e.mode = mu;
        /* falls through */
        case mu:
          if (e.extra) {
            for (v = e.extra; d < v; ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            e.length += c & (1 << e.extra) - 1, c >>>= e.extra, d -= e.extra, e.back += e.extra;
          }
          e.was = e.length, e.mode = vu;
        /* falls through */
        case vu:
          for (; V = e.distcode[c & (1 << e.distbits) - 1], k = V >>> 24, J = V >>> 16 & 255, Z = V & 65535, !(k <= d); ) {
            if (a === 0)
              break t;
            a--, c += i[s++] << d, d += 8;
          }
          if ((J & 240) === 0) {
            for (Y = k, vt = J, Ft = Z; V = e.distcode[Ft + ((c & (1 << Y + vt) - 1) >> Y)], k = V >>> 24, J = V >>> 16 & 255, Z = V & 65535, !(Y + k <= d); ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            c >>>= Y, d -= Y, e.back += Y;
          }
          if (c >>>= k, d -= k, e.back += k, J & 64) {
            n.msg = "invalid distance code", e.mode = ze;
            break;
          }
          e.offset = Z, e.extra = J & 15, e.mode = yu;
        /* falls through */
        case yu:
          if (e.extra) {
            for (v = e.extra; d < v; ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            e.offset += c & (1 << e.extra) - 1, c >>>= e.extra, d -= e.extra, e.back += e.extra;
          }
          if (e.offset > e.dmax) {
            n.msg = "invalid distance too far back", e.mode = ze;
            break;
          }
          e.mode = bu;
        /* falls through */
        case bu:
          if (l === 0)
            break t;
          if (g = A - l, e.offset > g) {
            if (g = e.offset - g, g > e.whave && e.sane) {
              n.msg = "invalid distance too far back", e.mode = ze;
              break;
            }
            g > e.wnext ? (g -= e.wnext, B = e.wsize - g) : B = e.wnext - g, g > e.length && (g = e.length), O = e.window;
          } else
            O = r, B = u - e.offset, g = e.length;
          g > l && (g = l), l -= g, e.length -= g;
          do
            r[u++] = O[B++];
          while (--g);
          e.length === 0 && (e.mode = Jo);
          break;
        case wu:
          if (l === 0)
            break t;
          r[u++] = e.length, l--, e.mode = Jo;
          break;
        case rl:
          if (e.wrap) {
            for (; d < 32; ) {
              if (a === 0)
                break t;
              a--, c |= i[s++] << d, d += 8;
            }
            if (A -= l, n.total_out += A, e.total += A, e.wrap & 4 && A && (n.adler = e.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            e.flags ? Tn(e.check, r, A, u - A) : Sl(e.check, r, A, u - A)), A = l, e.wrap & 4 && (e.flags ? c : Au(c)) !== e.check) {
              n.msg = "incorrect data check", e.mode = ze;
              break;
            }
            c = 0, d = 0;
          }
          e.mode = xu;
        /* falls through */
        case xu:
          if (e.wrap && e.flags) {
            for (; d < 32; ) {
              if (a === 0)
                break t;
              a--, c += i[s++] << d, d += 8;
            }
            if (e.wrap & 4 && c !== (e.total & 4294967295)) {
              n.msg = "incorrect length check", e.mode = ze;
              break;
            }
            c = 0, d = 0;
          }
          e.mode = _u;
        /* falls through */
        case _u:
          M = jd;
          break t;
        case ze:
          M = bc;
          break t;
        case xc:
          return wc;
        case _c:
        /* falls through */
        default:
          return on;
      }
  return n.next_out = u, n.avail_out = l, n.next_in = s, n.avail_in = a, e.hold = c, e.bits = d, (e.wsize || A !== n.avail_out && e.mode < ze && (e.mode < rl || t !== tu)) && Fc(n, n.output, n.next_out, A - n.avail_out), y -= n.avail_in, A -= n.avail_out, n.total_in += y, n.total_out += A, e.total += A, e.wrap & 4 && A && (n.adler = e.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  e.flags ? Tn(e.check, r, A, n.next_out - A) : Sl(e.check, r, A, n.next_out - A)), n.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === Yn ? 128 : 0) + (e.mode === $o || e.mode === nl ? 256 : 0), (y === 0 && A === 0 || t === tu) && M === zr && (M = Ud), M;
}, Jd = (n) => {
  if (Yr(n))
    return on;
  let t = n.state;
  return t.window && (t.window = null), n.state = null, zr;
}, Zd = (n, t) => {
  if (Yr(n))
    return on;
  const e = n.state;
  return (e.wrap & 2) === 0 ? on : (e.head = t, t.done = !1, zr);
}, Qd = (n, t) => {
  const e = t.length;
  let i, r, s;
  return Yr(n) || (i = n.state, i.wrap !== 0 && i.mode !== ha) ? on : i.mode === ha && (r = 1, r = Sl(r, t, e, 0), r !== i.check) ? bc : (s = Fc(n, t, e, e), s ? (i.mode = xc, wc) : (i.havedict = 1, zr));
};
var t1 = Lc, e1 = Nc, i1 = Ac, n1 = Kd, r1 = Sc, s1 = $d, o1 = Jd, a1 = Zd, l1 = Qd, h1 = "pako inflate (from Nodeca project)", Kn = {
  inflateReset: t1,
  inflateReset2: e1,
  inflateResetKeep: i1,
  inflateInit: n1,
  inflateInit2: r1,
  inflate: s1,
  inflateEnd: o1,
  inflateGetHeader: a1,
  inflateSetDictionary: l1,
  inflateInfo: h1
};
function u1() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var c1 = u1;
const Pc = Object.prototype.toString, {
  Z_NO_FLUSH: f1,
  Z_FINISH: d1,
  Z_OK: ho,
  Z_STREAM_END: al,
  Z_NEED_DICT: ll,
  Z_STREAM_ERROR: p1,
  Z_DATA_ERROR: Nu,
  Z_MEM_ERROR: g1
} = pc;
function uo(n) {
  this.options = gc.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, n || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(n && n.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15) === 0 && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new Cd(), this.strm.avail_out = 0;
  let e = Kn.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (e !== ho)
    throw new Error(Fl[e]);
  if (this.header = new c1(), Kn.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Pl.string2buf(t.dictionary) : Pc.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (e = Kn.inflateSetDictionary(this.strm, t.dictionary), e !== ho)))
    throw new Error(Fl[e]);
}
uo.prototype.push = function(n, t) {
  const e = this.strm, i = this.options.chunkSize, r = this.options.dictionary;
  let s, u, a;
  if (this.ended) return !1;
  for (t === ~~t ? u = t : u = t === !0 ? d1 : f1, Pc.call(n) === "[object ArrayBuffer]" ? e.input = new Uint8Array(n) : e.input = n, e.next_in = 0, e.avail_in = e.input.length; ; ) {
    for (e.avail_out === 0 && (e.output = new Uint8Array(i), e.next_out = 0, e.avail_out = i), s = Kn.inflate(e, u), s === ll && r && (s = Kn.inflateSetDictionary(e, r), s === ho ? s = Kn.inflate(e, u) : s === Nu && (s = ll)); e.avail_in > 0 && s === al && e.state.wrap > 0 && n[e.next_in] !== 0; )
      Kn.inflateReset(e), s = Kn.inflate(e, u);
    switch (s) {
      case p1:
      case Nu:
      case ll:
      case g1:
        return this.onEnd(s), this.ended = !0, !1;
    }
    if (a = e.avail_out, e.next_out && (e.avail_out === 0 || s === al))
      if (this.options.to === "string") {
        let l = Pl.utf8border(e.output, e.next_out), c = e.next_out - l, d = Pl.buf2string(e.output, l);
        e.next_out = c, e.avail_out = i - c, c && e.output.set(e.output.subarray(l, l + c), 0), this.onData(d);
      } else
        this.onData(e.output.length === e.next_out ? e.output : e.output.subarray(0, e.next_out));
    if (!(s === ho && a === 0)) {
      if (s === al)
        return s = Kn.inflateEnd(this.strm), this.onEnd(s), this.ended = !0, !0;
      if (e.avail_in === 0) break;
    }
  }
  return !0;
};
uo.prototype.onData = function(n) {
  this.chunks.push(n);
};
uo.prototype.onEnd = function(n) {
  n === ho && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = gc.flattenChunks(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
};
function m1(n, t) {
  const e = new uo(t);
  if (e.push(n), e.err) throw e.msg || Fl[e.err];
  return e.result;
}
var v1 = uo, y1 = m1, b1 = {
  Inflate: v1,
  inflate: y1
};
const { Inflate: w1, inflate: x1 } = b1;
var Su = w1, _1 = x1;
const Tc = [];
for (let n = 0; n < 256; n++) {
  let t = n;
  for (let e = 0; e < 8; e++)
    t & 1 ? t = 3988292384 ^ t >>> 1 : t = t >>> 1;
  Tc[n] = t;
}
const Fu = 4294967295;
function A1(n, t, e) {
  let i = n;
  for (let r = 0; r < e; r++)
    i = Tc[(i ^ t[r]) & 255] ^ i >>> 8;
  return i;
}
function L1(n, t) {
  return (A1(Fu, n, t) ^ Fu) >>> 0;
}
function Pu(n, t, e) {
  const i = n.readUint32(), r = L1(new Uint8Array(n.buffer, n.byteOffset + n.offset - t - 4, t), t);
  if (r !== i)
    throw new Error(`CRC mismatch for chunk ${e}. Expected ${i}, found ${r}`);
}
function Cc(n, t, e) {
  for (let i = 0; i < e; i++)
    t[i] = n[i];
}
function kc(n, t, e, i) {
  let r = 0;
  for (; r < i; r++)
    t[r] = n[r];
  for (; r < e; r++)
    t[r] = n[r] + t[r - i] & 255;
}
function Rc(n, t, e, i) {
  let r = 0;
  if (e.length === 0)
    for (; r < i; r++)
      t[r] = n[r];
  else
    for (; r < i; r++)
      t[r] = n[r] + e[r] & 255;
}
function Ec(n, t, e, i, r) {
  let s = 0;
  if (e.length === 0) {
    for (; s < r; s++)
      t[s] = n[s];
    for (; s < i; s++)
      t[s] = n[s] + (t[s - r] >> 1) & 255;
  } else {
    for (; s < r; s++)
      t[s] = n[s] + (e[s] >> 1) & 255;
    for (; s < i; s++)
      t[s] = n[s] + (t[s - r] + e[s] >> 1) & 255;
  }
}
function Ic(n, t, e, i, r) {
  let s = 0;
  if (e.length === 0) {
    for (; s < r; s++)
      t[s] = n[s];
    for (; s < i; s++)
      t[s] = n[s] + t[s - r] & 255;
  } else {
    for (; s < r; s++)
      t[s] = n[s] + e[s] & 255;
    for (; s < i; s++)
      t[s] = n[s] + N1(t[s - r], e[s], e[s - r]) & 255;
  }
}
function N1(n, t, e) {
  const i = n + t - e, r = Math.abs(i - n), s = Math.abs(i - t), u = Math.abs(i - e);
  return r <= s && r <= u ? n : s <= u ? t : e;
}
function S1(n, t, e, i, r, s) {
  switch (n) {
    case 0:
      Cc(t, e, r);
      break;
    case 1:
      kc(t, e, r, s);
      break;
    case 2:
      Rc(t, e, i, r);
      break;
    case 3:
      Ec(t, e, i, r, s);
      break;
    case 4:
      Ic(t, e, i, r, s);
      break;
    default:
      throw new Error(`Unsupported filter: ${n}`);
  }
}
const F1 = new Uint16Array([255]), P1 = new Uint8Array(F1.buffer), T1 = P1[0] === 255;
function C1(n) {
  const { data: t, width: e, height: i, channels: r, depth: s } = n, u = [
    { x: 0, y: 0, xStep: 8, yStep: 8 },
    // Pass 1
    { x: 4, y: 0, xStep: 8, yStep: 8 },
    // Pass 2
    { x: 0, y: 4, xStep: 4, yStep: 8 },
    // Pass 3
    { x: 2, y: 0, xStep: 4, yStep: 4 },
    // Pass 4
    { x: 0, y: 2, xStep: 2, yStep: 4 },
    // Pass 5
    { x: 1, y: 0, xStep: 2, yStep: 2 },
    // Pass 6
    { x: 0, y: 1, xStep: 1, yStep: 2 }
    // Pass 7
  ], a = Math.ceil(s / 8) * r, l = new Uint8Array(i * e * a);
  let c = 0;
  for (let d = 0; d < 7; d++) {
    const y = u[d], A = Math.ceil((e - y.x) / y.xStep), g = Math.ceil((i - y.y) / y.yStep);
    if (A <= 0 || g <= 0)
      continue;
    const B = A * a, O = new Uint8Array(B);
    for (let V = 0; V < g; V++) {
      const k = t[c++], J = t.subarray(c, c + B);
      c += B;
      const Z = new Uint8Array(B);
      S1(k, J, Z, O, B, a), O.set(Z);
      for (let Y = 0; Y < A; Y++) {
        const vt = y.x + Y * y.xStep, Ft = y.y + V * y.yStep;
        if (!(vt >= e || Ft >= i))
          for (let lt = 0; lt < a; lt++)
            l[(Ft * e + vt) * a + lt] = Z[Y * a + lt];
      }
    }
  }
  if (s === 16) {
    const d = new Uint16Array(l.buffer);
    if (T1)
      for (let y = 0; y < d.length; y++)
        d[y] = k1(d[y]);
    return d;
  } else
    return l;
}
function k1(n) {
  return (n & 255) << 8 | n >> 8 & 255;
}
const R1 = new Uint16Array([255]), E1 = new Uint8Array(R1.buffer), I1 = E1[0] === 255, B1 = new Uint8Array(0);
function Tu(n) {
  const { data: t, width: e, height: i, channels: r, depth: s } = n, u = Math.ceil(s / 8) * r, a = Math.ceil(s / 8 * r * e), l = new Uint8Array(i * a);
  let c = B1, d = 0, y, A;
  for (let g = 0; g < i; g++) {
    switch (y = t.subarray(d + 1, d + 1 + a), A = l.subarray(g * a, (g + 1) * a), t[d]) {
      case 0:
        Cc(y, A, a);
        break;
      case 1:
        kc(y, A, a, u);
        break;
      case 2:
        Rc(y, A, c, a);
        break;
      case 3:
        Ec(y, A, c, a, u);
        break;
      case 4:
        Ic(y, A, c, a, u);
        break;
      default:
        throw new Error(`Unsupported filter: ${t[d]}`);
    }
    c = A, d += a + 1;
  }
  if (s === 16) {
    const g = new Uint16Array(l.buffer);
    if (I1)
      for (let B = 0; B < g.length; B++)
        g[B] = O1(g[B]);
    return g;
  } else
    return l;
}
function O1(n) {
  return (n & 255) << 8 | n >> 8 & 255;
}
const ia = Uint8Array.of(137, 80, 78, 71, 13, 10, 26, 10);
function Cu(n) {
  if (!M1(n.readBytes(ia.length)))
    throw new Error("wrong PNG signature");
}
function M1(n) {
  if (n.length < ia.length)
    return !1;
  for (let t = 0; t < ia.length; t++)
    if (n[t] !== ia[t])
      return !1;
  return !0;
}
const D1 = "tEXt", q1 = 0, Bc = new TextDecoder("latin1");
function j1(n) {
  if (U1(n), n.length === 0 || n.length > 79)
    throw new Error("keyword length must be between 1 and 79");
}
const W1 = /^[\u0000-\u00FF]*$/;
function U1(n) {
  if (!W1.test(n))
    throw new Error("invalid latin1 text");
}
function z1(n, t, e) {
  const i = Oc(t);
  n[i] = H1(t, e - i.length - 1);
}
function Oc(n) {
  for (n.mark(); n.readByte() !== q1; )
    ;
  const t = n.offset;
  n.reset();
  const e = Bc.decode(n.readBytes(t - n.offset - 1));
  return n.skip(1), j1(e), e;
}
function H1(n, t) {
  return Bc.decode(n.readBytes(t));
}
const $i = {
  UNKNOWN: -1,
  GREYSCALE: 0,
  TRUECOLOUR: 2,
  INDEXED_COLOUR: 3,
  GREYSCALE_ALPHA: 4,
  TRUECOLOUR_ALPHA: 6
}, hl = {
  UNKNOWN: -1,
  DEFLATE: 0
}, ku = {
  UNKNOWN: -1,
  ADAPTIVE: 0
}, ul = {
  UNKNOWN: -1,
  NO_INTERLACE: 0,
  ADAM7: 1
}, Zo = {
  NONE: 0,
  BACKGROUND: 1,
  PREVIOUS: 2
}, cl = {
  SOURCE: 0,
  OVER: 1
};
class G1 extends Ml {
  _checkCrc;
  _inflator;
  _png;
  _apng;
  _end;
  _hasPalette;
  _palette;
  _hasTransparency;
  _transparency;
  _compressionMethod;
  _filterMethod;
  _interlaceMethod;
  _colorType;
  _isAnimated;
  _numberOfFrames;
  _numberOfPlays;
  _frames;
  _writingDataChunks;
  constructor(t, e = {}) {
    super(t);
    const { checkCrc: i = !1 } = e;
    this._checkCrc = i, this._inflator = new Su(), this._png = {
      width: -1,
      height: -1,
      channels: -1,
      data: new Uint8Array(0),
      depth: 1,
      text: {}
    }, this._apng = {
      width: -1,
      height: -1,
      channels: -1,
      depth: 1,
      numberOfFrames: 1,
      numberOfPlays: 0,
      text: {},
      frames: []
    }, this._end = !1, this._hasPalette = !1, this._palette = [], this._hasTransparency = !1, this._transparency = new Uint16Array(0), this._compressionMethod = hl.UNKNOWN, this._filterMethod = ku.UNKNOWN, this._interlaceMethod = ul.UNKNOWN, this._colorType = $i.UNKNOWN, this._isAnimated = !1, this._numberOfFrames = 1, this._numberOfPlays = 0, this._frames = [], this._writingDataChunks = !1, this.setBigEndian();
  }
  decode() {
    for (Cu(this); !this._end; ) {
      const t = this.readUint32(), e = this.readChars(4);
      this.decodeChunk(t, e);
    }
    return this.decodeImage(), this._png;
  }
  decodeApng() {
    for (Cu(this); !this._end; ) {
      const t = this.readUint32(), e = this.readChars(4);
      this.decodeApngChunk(t, e);
    }
    return this.decodeApngImage(), this._apng;
  }
  // https://www.w3.org/TR/PNG/#5Chunk-layout
  decodeChunk(t, e) {
    const i = this.offset;
    switch (e) {
      // 11.2 Critical chunks
      case "IHDR":
        this.decodeIHDR();
        break;
      case "PLTE":
        this.decodePLTE(t);
        break;
      case "IDAT":
        this.decodeIDAT(t);
        break;
      case "IEND":
        this._end = !0;
        break;
      // 11.3 Ancillary chunks
      case "tRNS":
        this.decodetRNS(t);
        break;
      case "iCCP":
        this.decodeiCCP(t);
        break;
      case D1:
        z1(this._png.text, this, t);
        break;
      case "pHYs":
        this.decodepHYs();
        break;
      default:
        this.skip(t);
        break;
    }
    if (this.offset - i !== t)
      throw new Error(`Length mismatch while decoding chunk ${e}`);
    this._checkCrc ? Pu(this, t + 4, e) : this.skip(4);
  }
  decodeApngChunk(t, e) {
    const i = this.offset;
    switch (e !== "fdAT" && e !== "IDAT" && this._writingDataChunks && this.pushDataToFrame(), e) {
      case "acTL":
        this.decodeACTL();
        break;
      case "fcTL":
        this.decodeFCTL();
        break;
      case "fdAT":
        this.decodeFDAT(t);
        break;
      default:
        this.decodeChunk(t, e), this.offset = i + t;
        break;
    }
    if (this.offset - i !== t)
      throw new Error(`Length mismatch while decoding chunk ${e}`);
    this._checkCrc ? Pu(this, t + 4, e) : this.skip(4);
  }
  // https://www.w3.org/TR/PNG/#11IHDR
  decodeIHDR() {
    const t = this._png;
    t.width = this.readUint32(), t.height = this.readUint32(), t.depth = V1(this.readUint8());
    const e = this.readUint8();
    this._colorType = e;
    let i;
    switch (e) {
      case $i.GREYSCALE:
        i = 1;
        break;
      case $i.TRUECOLOUR:
        i = 3;
        break;
      case $i.INDEXED_COLOUR:
        i = 1;
        break;
      case $i.GREYSCALE_ALPHA:
        i = 2;
        break;
      case $i.TRUECOLOUR_ALPHA:
        i = 4;
        break;
      // Kept for exhaustiveness.
      // eslint-disable-next-line unicorn/no-useless-switch-case
      case $i.UNKNOWN:
      default:
        throw new Error(`Unknown color type: ${e}`);
    }
    if (this._png.channels = i, this._compressionMethod = this.readUint8(), this._compressionMethod !== hl.DEFLATE)
      throw new Error(`Unsupported compression method: ${this._compressionMethod}`);
    this._filterMethod = this.readUint8(), this._interlaceMethod = this.readUint8();
  }
  decodeACTL() {
    this._numberOfFrames = this.readUint32(), this._numberOfPlays = this.readUint32(), this._isAnimated = !0;
  }
  decodeFCTL() {
    const t = {
      sequenceNumber: this.readUint32(),
      width: this.readUint32(),
      height: this.readUint32(),
      xOffset: this.readUint32(),
      yOffset: this.readUint32(),
      delayNumber: this.readUint16(),
      delayDenominator: this.readUint16(),
      disposeOp: this.readUint8(),
      blendOp: this.readUint8(),
      data: new Uint8Array(0)
    };
    this._frames.push(t);
  }
  // https://www.w3.org/TR/PNG/#11PLTE
  decodePLTE(t) {
    if (t % 3 !== 0)
      throw new RangeError(`PLTE field length must be a multiple of 3. Got ${t}`);
    const e = t / 3;
    this._hasPalette = !0;
    const i = [];
    this._palette = i;
    for (let r = 0; r < e; r++)
      i.push([this.readUint8(), this.readUint8(), this.readUint8()]);
  }
  // https://www.w3.org/TR/PNG/#11IDAT
  decodeIDAT(t) {
    this._writingDataChunks = !0;
    const e = t, i = this.offset + this.byteOffset;
    if (this._inflator.push(new Uint8Array(this.buffer, i, e)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  decodeFDAT(t) {
    this._writingDataChunks = !0;
    let e = t, i = this.offset + this.byteOffset;
    if (i += 4, e -= 4, this._inflator.push(new Uint8Array(this.buffer, i, e)), this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    this.skip(t);
  }
  // https://www.w3.org/TR/PNG/#11tRNS
  decodetRNS(t) {
    switch (this._colorType) {
      case $i.GREYSCALE:
      case $i.TRUECOLOUR: {
        if (t % 2 !== 0)
          throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${t}`);
        if (t / 2 > this._png.width * this._png.height)
          throw new Error(`tRNS chunk contains more alpha values than there are pixels (${t / 2} vs ${this._png.width * this._png.height})`);
        this._hasTransparency = !0, this._transparency = new Uint16Array(t / 2);
        for (let e = 0; e < t / 2; e++)
          this._transparency[e] = this.readUint16();
        break;
      }
      case $i.INDEXED_COLOUR: {
        if (t > this._palette.length)
          throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${t} vs ${this._palette.length})`);
        let e = 0;
        for (; e < t; e++) {
          const i = this.readByte();
          this._palette[e].push(i);
        }
        for (; e < this._palette.length; e++)
          this._palette[e].push(255);
        break;
      }
      // Kept for exhaustiveness.
      /* eslint-disable unicorn/no-useless-switch-case */
      case $i.UNKNOWN:
      case $i.GREYSCALE_ALPHA:
      case $i.TRUECOLOUR_ALPHA:
      default:
        throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`);
    }
  }
  // https://www.w3.org/TR/PNG/#11iCCP
  decodeiCCP(t) {
    const e = Oc(this), i = this.readUint8();
    if (i !== hl.DEFLATE)
      throw new Error(`Unsupported iCCP compression method: ${i}`);
    const r = this.readBytes(t - e.length - 2);
    this._png.iccEmbeddedProfile = {
      name: e,
      profile: _1(r)
    };
  }
  // https://www.w3.org/TR/PNG/#11pHYs
  decodepHYs() {
    const t = this.readUint32(), e = this.readUint32(), i = this.readByte();
    this._png.resolution = { x: t, y: e, unit: i };
  }
  decodeApngImage() {
    this._apng.width = this._png.width, this._apng.height = this._png.height, this._apng.channels = this._png.channels, this._apng.depth = this._png.depth, this._apng.numberOfFrames = this._numberOfFrames, this._apng.numberOfPlays = this._numberOfPlays, this._apng.text = this._png.text, this._apng.resolution = this._png.resolution;
    for (let t = 0; t < this._numberOfFrames; t++) {
      const e = {
        sequenceNumber: this._frames[t].sequenceNumber,
        delayNumber: this._frames[t].delayNumber,
        delayDenominator: this._frames[t].delayDenominator,
        data: this._apng.depth === 8 ? new Uint8Array(this._apng.width * this._apng.height * this._apng.channels) : new Uint16Array(this._apng.width * this._apng.height * this._apng.channels)
      }, i = this._frames.at(t);
      if (i) {
        if (i.data = Tu({
          data: i.data,
          width: i.width,
          height: i.height,
          channels: this._apng.channels,
          depth: this._apng.depth
        }), this._hasPalette && (this._apng.palette = this._palette), this._hasTransparency && (this._apng.transparency = this._transparency), t === 0 || i.xOffset === 0 && i.yOffset === 0 && i.width === this._png.width && i.height === this._png.height)
          e.data = i.data;
        else {
          const r = this._apng.frames.at(t - 1);
          this.disposeFrame(i, r, e), this.addFrameDataToCanvas(e, i);
        }
        this._apng.frames.push(e);
      }
    }
    return this._apng;
  }
  disposeFrame(t, e, i) {
    switch (t.disposeOp) {
      case Zo.NONE:
        break;
      case Zo.BACKGROUND:
        for (let r = 0; r < this._png.height; r++)
          for (let s = 0; s < this._png.width; s++) {
            const u = (r * t.width + s) * this._png.channels;
            for (let a = 0; a < this._png.channels; a++)
              i.data[u + a] = 0;
          }
        break;
      case Zo.PREVIOUS:
        i.data.set(e.data);
        break;
      default:
        throw new Error("Unknown disposeOp");
    }
  }
  addFrameDataToCanvas(t, e) {
    const i = 1 << this._png.depth, r = (s, u) => {
      const a = ((s + e.yOffset) * this._png.width + e.xOffset + u) * this._png.channels, l = (s * e.width + u) * this._png.channels;
      return { index: a, frameIndex: l };
    };
    switch (e.blendOp) {
      case cl.SOURCE:
        for (let s = 0; s < e.height; s++)
          for (let u = 0; u < e.width; u++) {
            const { index: a, frameIndex: l } = r(s, u);
            for (let c = 0; c < this._png.channels; c++)
              t.data[a + c] = e.data[l + c];
          }
        break;
      // https://www.w3.org/TR/png-3/#13Alpha-channel-processing
      case cl.OVER:
        for (let s = 0; s < e.height; s++)
          for (let u = 0; u < e.width; u++) {
            const { index: a, frameIndex: l } = r(s, u);
            for (let c = 0; c < this._png.channels; c++) {
              const d = e.data[l + this._png.channels - 1] / i, y = c % (this._png.channels - 1) === 0 ? 1 : e.data[l + c], A = Math.floor(d * y + (1 - d) * t.data[a + c]);
              t.data[a + c] += A;
            }
          }
        break;
      default:
        throw new Error("Unknown blendOp");
    }
  }
  decodeImage() {
    if (this._inflator.err)
      throw new Error(`Error while decompressing the data: ${this._inflator.err}`);
    const t = this._isAnimated ? (this._frames?.at(0)).data : this._inflator.result;
    if (this._filterMethod !== ku.ADAPTIVE)
      throw new Error(`Filter method ${this._filterMethod} not supported`);
    if (this._interlaceMethod === ul.NO_INTERLACE)
      this._png.data = Tu({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else if (this._interlaceMethod === ul.ADAM7)
      this._png.data = C1({
        data: t,
        width: this._png.width,
        height: this._png.height,
        channels: this._png.channels,
        depth: this._png.depth
      });
    else
      throw new Error(`Interlace method ${this._interlaceMethod} not supported`);
    this._hasPalette && (this._png.palette = this._palette), this._hasTransparency && (this._png.transparency = this._transparency);
  }
  pushDataToFrame() {
    const t = this._inflator.result, e = this._frames.at(-1);
    e ? e.data = t : this._frames.push({
      sequenceNumber: 0,
      width: this._png.width,
      height: this._png.height,
      xOffset: 0,
      yOffset: 0,
      delayNumber: 0,
      delayDenominator: 0,
      disposeOp: Zo.NONE,
      blendOp: cl.SOURCE,
      data: t
    }), this._inflator = new Su(), this._writingDataChunks = !1;
  }
}
function V1(n) {
  if (n !== 1 && n !== 2 && n !== 4 && n !== 8 && n !== 16)
    throw new Error(`invalid bit depth: ${n}`);
  return n;
}
var Ru;
(function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.METRE = 1] = "METRE";
})(Ru || (Ru = {}));
function Y1(n, t) {
  return new G1(n, t).decode();
}
var ae = /* @__PURE__ */ (function() {
  return typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this;
})();
function fl() {
  ae.console && typeof ae.console.log == "function" && ae.console.log.apply(ae.console, arguments);
}
var Ie = { log: fl, warn: function(n) {
  ae.console && (typeof ae.console.warn == "function" ? ae.console.warn.apply(ae.console, arguments) : fl.call(null, arguments));
}, error: function(n) {
  ae.console && (typeof ae.console.error == "function" ? ae.console.error.apply(ae.console, arguments) : fl(n));
} };
function dl(n, t, e) {
  var i = new XMLHttpRequest();
  i.open("GET", n), i.responseType = "blob", i.onload = function() {
    Dr(i.response, t, e);
  }, i.onerror = function() {
    Ie.error("could not download file");
  }, i.send();
}
function Eu(n) {
  var t = new XMLHttpRequest();
  t.open("HEAD", n, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Qo(n) {
  try {
    n.dispatchEvent(new MouseEvent("click"));
  } catch {
    var t = document.createEvent("MouseEvents");
    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), n.dispatchEvent(t);
  }
}
var Dr = ae.saveAs || ((typeof window > "u" ? "undefined" : Te(window)) !== "object" || window !== ae ? function() {
} : typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype ? function(n, t, e) {
  var i = ae.URL || ae.webkitURL, r = document.createElement("a");
  t = t || n.name || "download", r.download = t, r.rel = "noopener", typeof n == "string" ? (r.href = n, r.origin !== location.origin ? Eu(r.href) ? dl(n, t, e) : Qo(r, r.target = "_blank") : Qo(r)) : (r.href = i.createObjectURL(n), setTimeout(function() {
    i.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Qo(r);
  }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(n, t, e) {
  if (t = t || n.name || "download", typeof n == "string") if (Eu(n)) dl(n, t, e);
  else {
    var i = document.createElement("a");
    i.href = n, i.target = "_blank", setTimeout(function() {
      Qo(i);
    });
  }
  else navigator.msSaveOrOpenBlob((function(r, s) {
    return s === void 0 ? s = { autoBom: !1 } : Te(s) !== "object" && (Ie.warn("Deprecated: Expected third argument to be a object"), s = { autoBom: !s }), s.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type) ? new Blob(["\uFEFF", r], { type: r.type }) : r;
  })(n, e), t);
} : function(n, t, e, i) {
  if ((i = i || open("", "_blank")) && (i.document.title = i.document.body.innerText = "downloading..."), typeof n == "string") return dl(n, t, e);
  var r = n.type === "application/octet-stream", s = /constructor/i.test(ae.HTMLElement) || ae.safari, u = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((u || r && s) && (typeof FileReader > "u" ? "undefined" : Te(FileReader)) === "object") {
    var a = new FileReader();
    a.onloadend = function() {
      var d = a.result;
      d = u ? d : d.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = d : location = d, i = null;
    }, a.readAsDataURL(n);
  } else {
    var l = ae.URL || ae.webkitURL, c = l.createObjectURL(n);
    i ? i.location = c : location.href = c, i = null, setTimeout(function() {
      l.revokeObjectURL(c);
    }, 4e4);
  }
});
function Mc(n) {
  var t;
  n = n || "", this.ok = !1, n.charAt(0) == "#" && (n = n.substr(1, 6)), n = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[n = (n = n.replace(/ /g, "")).toLowerCase()] || n;
  for (var e = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(a) {
    return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])];
  } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(a) {
    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)];
  } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(a) {
    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)];
  } }], i = 0; i < e.length; i++) {
    var r = e[i].re, s = e[i].process, u = r.exec(n);
    u && (t = s(u), this.r = t[0], this.g = t[1], this.b = t[2], this.ok = !0);
  }
  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }, this.toHex = function() {
    var a = this.r.toString(16), l = this.g.toString(16), c = this.b.toString(16);
    return a.length == 1 && (a = "0" + a), l.length == 1 && (l = "0" + l), c.length == 1 && (c = "0" + c), "#" + a + l + c;
  };
}
var na = ae.atob.bind(ae), Iu = ae.btoa.bind(ae);
function pl(n, t) {
  var e = n[0], i = n[1], r = n[2], s = n[3];
  e = Ai(e, i, r, s, t[0], 7, -680876936), s = Ai(s, e, i, r, t[1], 12, -389564586), r = Ai(r, s, e, i, t[2], 17, 606105819), i = Ai(i, r, s, e, t[3], 22, -1044525330), e = Ai(e, i, r, s, t[4], 7, -176418897), s = Ai(s, e, i, r, t[5], 12, 1200080426), r = Ai(r, s, e, i, t[6], 17, -1473231341), i = Ai(i, r, s, e, t[7], 22, -45705983), e = Ai(e, i, r, s, t[8], 7, 1770035416), s = Ai(s, e, i, r, t[9], 12, -1958414417), r = Ai(r, s, e, i, t[10], 17, -42063), i = Ai(i, r, s, e, t[11], 22, -1990404162), e = Ai(e, i, r, s, t[12], 7, 1804603682), s = Ai(s, e, i, r, t[13], 12, -40341101), r = Ai(r, s, e, i, t[14], 17, -1502002290), e = Li(e, i = Ai(i, r, s, e, t[15], 22, 1236535329), r, s, t[1], 5, -165796510), s = Li(s, e, i, r, t[6], 9, -1069501632), r = Li(r, s, e, i, t[11], 14, 643717713), i = Li(i, r, s, e, t[0], 20, -373897302), e = Li(e, i, r, s, t[5], 5, -701558691), s = Li(s, e, i, r, t[10], 9, 38016083), r = Li(r, s, e, i, t[15], 14, -660478335), i = Li(i, r, s, e, t[4], 20, -405537848), e = Li(e, i, r, s, t[9], 5, 568446438), s = Li(s, e, i, r, t[14], 9, -1019803690), r = Li(r, s, e, i, t[3], 14, -187363961), i = Li(i, r, s, e, t[8], 20, 1163531501), e = Li(e, i, r, s, t[13], 5, -1444681467), s = Li(s, e, i, r, t[2], 9, -51403784), r = Li(r, s, e, i, t[7], 14, 1735328473), e = Ni(e, i = Li(i, r, s, e, t[12], 20, -1926607734), r, s, t[5], 4, -378558), s = Ni(s, e, i, r, t[8], 11, -2022574463), r = Ni(r, s, e, i, t[11], 16, 1839030562), i = Ni(i, r, s, e, t[14], 23, -35309556), e = Ni(e, i, r, s, t[1], 4, -1530992060), s = Ni(s, e, i, r, t[4], 11, 1272893353), r = Ni(r, s, e, i, t[7], 16, -155497632), i = Ni(i, r, s, e, t[10], 23, -1094730640), e = Ni(e, i, r, s, t[13], 4, 681279174), s = Ni(s, e, i, r, t[0], 11, -358537222), r = Ni(r, s, e, i, t[3], 16, -722521979), i = Ni(i, r, s, e, t[6], 23, 76029189), e = Ni(e, i, r, s, t[9], 4, -640364487), s = Ni(s, e, i, r, t[12], 11, -421815835), r = Ni(r, s, e, i, t[15], 16, 530742520), e = Si(e, i = Ni(i, r, s, e, t[2], 23, -995338651), r, s, t[0], 6, -198630844), s = Si(s, e, i, r, t[7], 10, 1126891415), r = Si(r, s, e, i, t[14], 15, -1416354905), i = Si(i, r, s, e, t[5], 21, -57434055), e = Si(e, i, r, s, t[12], 6, 1700485571), s = Si(s, e, i, r, t[3], 10, -1894986606), r = Si(r, s, e, i, t[10], 15, -1051523), i = Si(i, r, s, e, t[1], 21, -2054922799), e = Si(e, i, r, s, t[8], 6, 1873313359), s = Si(s, e, i, r, t[15], 10, -30611744), r = Si(r, s, e, i, t[6], 15, -1560198380), i = Si(i, r, s, e, t[13], 21, 1309151649), e = Si(e, i, r, s, t[4], 6, -145523070), s = Si(s, e, i, r, t[11], 10, -1120210379), r = Si(r, s, e, i, t[2], 15, 718787259), i = Si(i, r, s, e, t[9], 21, -343485551), n[0] = yr(e, n[0]), n[1] = yr(i, n[1]), n[2] = yr(r, n[2]), n[3] = yr(s, n[3]);
}
function pa(n, t, e, i, r, s) {
  return t = yr(yr(t, n), yr(i, s)), yr(t << r | t >>> 32 - r, e);
}
function Ai(n, t, e, i, r, s, u) {
  return pa(t & e | ~t & i, n, t, r, s, u);
}
function Li(n, t, e, i, r, s, u) {
  return pa(t & i | e & ~i, n, t, r, s, u);
}
function Ni(n, t, e, i, r, s, u) {
  return pa(t ^ e ^ i, n, t, r, s, u);
}
function Si(n, t, e, i, r, s, u) {
  return pa(e ^ (t | ~i), n, t, r, s, u);
}
function Dc(n) {
  var t, e = n.length, i = [1732584193, -271733879, -1732584194, 271733878];
  for (t = 64; t <= n.length; t += 64) pl(i, K1(n.substring(t - 64, t)));
  n = n.substring(t - 64);
  var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (t = 0; t < n.length; t++) r[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
  if (r[t >> 2] |= 128 << (t % 4 << 3), t > 55) for (pl(i, r), t = 0; t < 16; t++) r[t] = 0;
  return r[14] = 8 * e, pl(i, r), i;
}
function K1(n) {
  var t, e = [];
  for (t = 0; t < 64; t += 4) e[t >> 2] = n.charCodeAt(t) + (n.charCodeAt(t + 1) << 8) + (n.charCodeAt(t + 2) << 16) + (n.charCodeAt(t + 3) << 24);
  return e;
}
var Bu = "0123456789abcdef".split("");
function X1(n) {
  for (var t = "", e = 0; e < 4; e++) t += Bu[n >> 8 * e + 4 & 15] + Bu[n >> 8 * e & 15];
  return t;
}
function $1(n) {
  return String.fromCharCode(255 & n, (65280 & n) >> 8, (16711680 & n) >> 16, (4278190080 & n) >> 24);
}
function Tl(n) {
  return Dc(n).map($1).join("");
}
var J1 = (function(n) {
  for (var t = 0; t < n.length; t++) n[t] = X1(n[t]);
  return n.join("");
})(Dc("hello")) != "5d41402abc4b2a76b9719d911017c592";
function yr(n, t) {
  if (J1) {
    var e = (65535 & n) + (65535 & t);
    return (n >> 16) + (t >> 16) + (e >> 16) << 16 | 65535 & e;
  }
  return n + t & 4294967295;
}
function Cl(n, t) {
  var e, i, r, s;
  if (n !== e) {
    for (var u = (r = n, s = 1 + (256 / n.length | 0), new Array(s + 1).join(r)), a = [], l = 0; l < 256; l++) a[l] = l;
    var c = 0;
    for (l = 0; l < 256; l++) {
      var d = a[l];
      c = (c + d + u.charCodeAt(l)) % 256, a[l] = a[c], a[c] = d;
    }
    e = n, i = a;
  } else a = i;
  var y = t.length, A = 0, g = 0, B = "";
  for (l = 0; l < y; l++) g = (g + (d = a[A = (A + 1) % 256])) % 256, a[A] = a[g], a[g] = d, u = a[(a[A] + a[g]) % 256], B += String.fromCharCode(t.charCodeAt(l) ^ u);
  return B;
}
var Ou = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
function xs(n, t, e, i) {
  this.v = 1, this.r = 2;
  var r = 192;
  n.forEach(function(a) {
    if (Ou.perm !== void 0) throw new Error("Invalid permission: " + a);
    r += Ou[a];
  }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
  var s = (t + this.padding).substr(0, 32), u = (e + this.padding).substr(0, 32);
  this.O = this.processOwnerPassword(s, u), this.P = -(1 + (255 ^ r)), this.encryptionKey = Tl(s + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)).substr(0, 5), this.U = Cl(this.encryptionKey, this.padding);
}
function _s(n) {
  if (/[^\u0000-\u00ff]/.test(n)) throw new Error("Invalid PDF Name Object: " + n + ", Only accept ASCII characters.");
  for (var t = "", e = n.length, i = 0; i < e; i++) {
    var r = n.charCodeAt(i);
    t += r < 33 || r === 35 || r === 37 || r === 40 || r === 41 || r === 47 || r === 60 || r === 62 || r === 91 || r === 93 || r === 123 || r === 125 || r > 126 ? "#" + ("0" + r.toString(16)).slice(-2) : n[i];
  }
  return t;
}
function Mu(n) {
  if (Te(n) !== "object") throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
  var t = {};
  this.subscribe = function(e, i, r) {
    if (r = r || !1, typeof e != "string" || typeof i != "function" || typeof r != "boolean") throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
    t.hasOwnProperty(e) || (t[e] = {});
    var s = Math.random().toString(35);
    return t[e][s] = [i, !!r], s;
  }, this.unsubscribe = function(e) {
    for (var i in t) if (t[i][e]) return delete t[i][e], Object.keys(t[i]).length === 0 && delete t[i], !0;
    return !1;
  }, this.publish = function(e) {
    if (t.hasOwnProperty(e)) {
      var i = Array.prototype.slice.call(arguments, 1), r = [];
      for (var s in t[e]) {
        var u = t[e][s];
        try {
          u[0].apply(n, i);
        } catch (a) {
          ae.console && Ie.error("jsPDF PubSub Error", a.message, a);
        }
        u[1] && r.push(s);
      }
      r.length && r.forEach(this.unsubscribe);
    }
  }, this.getTopics = function() {
    return t;
  };
}
function ua(n) {
  if (!(this instanceof ua)) return new ua(n);
  var t = "opacity,stroke-opacity".split(",");
  for (var e in n) n.hasOwnProperty(e) && t.indexOf(e) >= 0 && (this[e] = n[e]);
  this.id = "", this.objectNumber = -1;
}
function qc(n, t) {
  this.gState = n, this.matrix = t, this.id = "", this.objectNumber = -1;
}
function qr(n, t, e, i, r) {
  if (!(this instanceof qr)) return new qr(n, t, e, i, r);
  this.type = n === "axial" ? 2 : 3, this.coords = t, this.colors = e, qc.call(this, i, r);
}
function As(n, t, e, i, r) {
  if (!(this instanceof As)) return new As(n, t, e, i, r);
  this.boundingBox = n, this.xStep = t, this.yStep = e, this.stream = "", this.cloneIndex = 0, qc.call(this, i, r);
}
function Vt(n) {
  var t, e = typeof arguments[0] == "string" ? arguments[0] : "p", i = arguments[1], r = arguments[2], s = arguments[3], u = [], a = 1, l = 16, c = "S", d = null;
  Te(n = n || {}) === "object" && (e = n.orientation, i = n.unit || i, r = n.format || r, s = n.compress || n.compressPdf || s, (d = n.encryption || null) !== null && (d.userPassword = d.userPassword || "", d.ownerPassword = d.ownerPassword || "", d.userPermissions = d.userPermissions || []), a = typeof n.userUnit == "number" ? Math.abs(n.userUnit) : 1, n.precision !== void 0 && (t = n.precision), n.floatPrecision !== void 0 && (l = n.floatPrecision), c = n.defaultPathOperation || "S"), u = n.filters || (s === !0 ? ["FlateEncode"] : u), i = i || "mm", e = ("" + (e || "P")).toLowerCase();
  var y = n.putOnlyUsedFonts || !1, A = {}, g = { internal: {}, __private__: {} };
  g.__private__.PubSub = Mu;
  var B = "1.3", O = g.__private__.getPdfVersion = function() {
    return B;
  };
  g.__private__.setPdfVersion = function(f) {
    B = f;
  };
  var V = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
  g.__private__.getPageFormats = function() {
    return V;
  };
  var k = g.__private__.getPageFormat = function(f) {
    return V[f];
  };
  r = r || "a4";
  var J = "compat", Z = "advanced", Y = J;
  function vt() {
    this.saveGraphicsState(), I(new re(Jt, 0, 0, -Jt, 0, Nr() * Jt).toString() + " cm"), this.setFontSize(this.getFontSize() / Jt), c = "n", Y = Z;
  }
  function Ft() {
    this.restoreGraphicsState(), c = "S", Y = J;
  }
  var lt = g.__private__.combineFontStyleAndFontWeight = function(f, w) {
    if (f == "bold" && w == "normal" || f == "bold" && w == 400 || f == "normal" && w == "italic" || f == "bold" && w == "italic") throw new Error("Invalid Combination of fontweight and fontstyle");
    return w && (f = w == 400 || w === "normal" ? f === "italic" ? "italic" : "normal" : w != 700 && w !== "bold" || f !== "normal" ? (w == 700 ? "bold" : w) + "" + f : "bold"), f;
  };
  g.advancedAPI = function(f) {
    var w = Y === J;
    return w && vt.call(this), typeof f != "function" || (f(this), w && Ft.call(this)), this;
  }, g.compatAPI = function(f) {
    var w = Y === Z;
    return w && Ft.call(this), typeof f != "function" || (f(this), w && vt.call(this)), this;
  }, g.isAdvancedAPI = function() {
    return Y === Z;
  };
  var M, b = function(f) {
    if (Y !== Z) throw new Error(f + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
  }, H = g.roundToPrecision = g.__private__.roundToPrecision = function(f, w) {
    var j = t || w;
    if (isNaN(f) || isNaN(j)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
    return f.toFixed(j).replace(/0+$/, "");
  };
  M = g.hpf = g.__private__.hpf = typeof l == "number" ? function(f) {
    if (isNaN(f)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return H(f, l);
  } : l === "smart" ? function(f) {
    if (isNaN(f)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return H(f, f > -1 && f < 1 ? 16 : 5);
  } : function(f) {
    if (isNaN(f)) throw new Error("Invalid argument passed to jsPDF.hpf");
    return H(f, 16);
  };
  var v = g.f2 = g.__private__.f2 = function(f) {
    if (isNaN(f)) throw new Error("Invalid argument passed to jsPDF.f2");
    return H(f, 2);
  }, F = g.__private__.f3 = function(f) {
    if (isNaN(f)) throw new Error("Invalid argument passed to jsPDF.f3");
    return H(f, 3);
  }, D = g.scale = g.__private__.scale = function(f) {
    if (isNaN(f)) throw new Error("Invalid argument passed to jsPDF.scale");
    return Y === J ? f * Jt : Y === Z ? f : void 0;
  }, q = function(f) {
    return D((function(w) {
      return Y === J ? Nr() - w : Y === Z ? w : void 0;
    })(f));
  };
  g.__private__.setPrecision = g.setPrecision = function(f) {
    typeof parseInt(f, 10) == "number" && (t = parseInt(f, 10));
  };
  var it, ut = "00000000000000000000000000000000", ot = g.__private__.getFileId = function() {
    return ut;
  }, et = g.__private__.setFileId = function(f) {
    return ut = f !== void 0 && /^[a-fA-F0-9]{32}$/.test(f) ? f.toUpperCase() : ut.split("").map(function() {
      return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
    }).join(""), d !== null && (pi = new xs(d.userPermissions, d.userPassword, d.ownerPassword, ut)), ut;
  };
  g.setFileId = function(f) {
    return et(f), this;
  }, g.getFileId = function() {
    return ot();
  };
  var ct = g.__private__.convertDateToPDFDate = function(f) {
    var w = f.getTimezoneOffset(), j = w < 0 ? "+" : "-", $ = Math.floor(Math.abs(w / 60)), rt = Math.abs(w % 60), wt = [j, z($), "'", z(rt), "'"].join("");
    return ["D:", f.getFullYear(), z(f.getMonth() + 1), z(f.getDate()), z(f.getHours()), z(f.getMinutes()), z(f.getSeconds()), wt].join("");
  }, Nt = g.__private__.convertPDFDateToDate = function(f) {
    var w = parseInt(f.substr(2, 4), 10), j = parseInt(f.substr(6, 2), 10) - 1, $ = parseInt(f.substr(8, 2), 10), rt = parseInt(f.substr(10, 2), 10), wt = parseInt(f.substr(12, 2), 10), Pt = parseInt(f.substr(14, 2), 10);
    return new Date(w, j, $, rt, wt, Pt, 0);
  }, ft = g.__private__.setCreationDate = function(f) {
    var w;
    if (f === void 0 && (f = /* @__PURE__ */ new Date()), f instanceof Date) w = ct(f);
    else {
      if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(f)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
      w = f;
    }
    return it = w;
  }, N = g.__private__.getCreationDate = function(f) {
    var w = it;
    return f === "jsDate" && (w = Nt(it)), w;
  };
  g.setCreationDate = function(f) {
    return ft(f), this;
  }, g.getCreationDate = function(f) {
    return N(f);
  };
  var R, z = g.__private__.padd2 = function(f) {
    return ("0" + parseInt(f)).slice(-2);
  }, X = g.__private__.padd2Hex = function(f) {
    return ("00" + (f = f.toString())).substr(f.length);
  }, Q = 0, st = [], gt = [], mt = 0, yt = [], Ct = [], It = !1, Bt = gt;
  g.__private__.setCustomOutputDestination = function(f) {
    It = !0, Bt = f;
  };
  var Ht = function(f) {
    It || (Bt = f);
  };
  g.__private__.resetCustomOutputDestination = function() {
    It = !1, Bt = gt;
  };
  var I = g.__private__.out = function(f) {
    return f = f.toString(), mt += f.length + 1, Bt.push(f), Bt;
  }, Et = g.__private__.write = function(f) {
    return I(arguments.length === 1 ? f.toString() : Array.prototype.join.call(arguments, " "));
  }, St = g.__private__.getArrayBuffer = function(f) {
    for (var w = f.length, j = new ArrayBuffer(w), $ = new Uint8Array(j); w--; ) $[w] = f.charCodeAt(w);
    return j;
  }, Ut = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
  g.__private__.getStandardFonts = function() {
    return Ut;
  };
  var L = n.fontSize || 16;
  g.__private__.setFontSize = g.setFontSize = function(f) {
    return L = Y === Z ? f / Jt : f, this;
  };
  var G, E = g.__private__.getFontSize = g.getFontSize = function() {
    return Y === J ? L : L * Jt;
  }, K = n.R2L || !1;
  g.__private__.setR2L = g.setR2L = function(f) {
    return K = f, this;
  }, g.__private__.getR2L = g.getR2L = function() {
    return K;
  };
  var at, Rt = g.__private__.setZoomMode = function(f) {
    if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(f)) G = f;
    else if (isNaN(f)) {
      if ([void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(f) === -1) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + f + '" is not recognized.');
      G = f;
    } else G = parseInt(f, 10);
  };
  g.__private__.getZoomMode = function() {
    return G;
  };
  var jt, Dt = g.__private__.setPageMode = function(f) {
    if ([void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(f) == -1) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + f + '" is not recognized.');
    at = f;
  };
  g.__private__.getPageMode = function() {
    return at;
  };
  var Qt = g.__private__.setLayoutMode = function(f) {
    if ([void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(f) == -1) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + f + '" is not recognized.');
    jt = f;
  };
  g.__private__.getLayoutMode = function() {
    return jt;
  }, g.__private__.setDisplayMode = g.setDisplayMode = function(f, w, j) {
    return Rt(f), Qt(w), Dt(j), this;
  };
  var te = { title: "", subject: "", author: "", keywords: "", creator: "" };
  g.__private__.getDocumentProperty = function(f) {
    if (Object.keys(te).indexOf(f) === -1) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
    return te[f];
  }, g.__private__.getDocumentProperties = function() {
    return te;
  }, g.__private__.setDocumentProperties = g.setProperties = g.setDocumentProperties = function(f) {
    for (var w in te) te.hasOwnProperty(w) && f[w] && (te[w] = f[w]);
    return this;
  }, g.__private__.setDocumentProperty = function(f, w) {
    if (Object.keys(te).indexOf(f) === -1) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
    return te[f] = w;
  };
  var Ot, Jt, qt, Ne, me, se = {}, bt = {}, Se = [], Kt = {}, ye = {}, ie = {}, ee = {}, ke = null, de = 0, ne = [], xe = new Mu(g), ii = n.hotfixes || [], Ve = {}, Fi = {}, Ui = [], re = function f(w, j, $, rt, wt, Pt) {
    if (!(this instanceof f)) return new f(w, j, $, rt, wt, Pt);
    isNaN(w) && (w = 1), isNaN(j) && (j = 0), isNaN($) && ($ = 0), isNaN(rt) && (rt = 1), isNaN(wt) && (wt = 0), isNaN(Pt) && (Pt = 0), this._matrix = [w, j, $, rt, wt, Pt];
  };
  Object.defineProperty(re.prototype, "sx", { get: function() {
    return this._matrix[0];
  }, set: function(f) {
    this._matrix[0] = f;
  } }), Object.defineProperty(re.prototype, "shy", { get: function() {
    return this._matrix[1];
  }, set: function(f) {
    this._matrix[1] = f;
  } }), Object.defineProperty(re.prototype, "shx", { get: function() {
    return this._matrix[2];
  }, set: function(f) {
    this._matrix[2] = f;
  } }), Object.defineProperty(re.prototype, "sy", { get: function() {
    return this._matrix[3];
  }, set: function(f) {
    this._matrix[3] = f;
  } }), Object.defineProperty(re.prototype, "tx", { get: function() {
    return this._matrix[4];
  }, set: function(f) {
    this._matrix[4] = f;
  } }), Object.defineProperty(re.prototype, "ty", { get: function() {
    return this._matrix[5];
  }, set: function(f) {
    this._matrix[5] = f;
  } }), Object.defineProperty(re.prototype, "a", { get: function() {
    return this._matrix[0];
  }, set: function(f) {
    this._matrix[0] = f;
  } }), Object.defineProperty(re.prototype, "b", { get: function() {
    return this._matrix[1];
  }, set: function(f) {
    this._matrix[1] = f;
  } }), Object.defineProperty(re.prototype, "c", { get: function() {
    return this._matrix[2];
  }, set: function(f) {
    this._matrix[2] = f;
  } }), Object.defineProperty(re.prototype, "d", { get: function() {
    return this._matrix[3];
  }, set: function(f) {
    this._matrix[3] = f;
  } }), Object.defineProperty(re.prototype, "e", { get: function() {
    return this._matrix[4];
  }, set: function(f) {
    this._matrix[4] = f;
  } }), Object.defineProperty(re.prototype, "f", { get: function() {
    return this._matrix[5];
  }, set: function(f) {
    this._matrix[5] = f;
  } }), Object.defineProperty(re.prototype, "rotation", { get: function() {
    return Math.atan2(this.shx, this.sx);
  } }), Object.defineProperty(re.prototype, "scaleX", { get: function() {
    return this.decompose().scale.sx;
  } }), Object.defineProperty(re.prototype, "scaleY", { get: function() {
    return this.decompose().scale.sy;
  } }), Object.defineProperty(re.prototype, "isIdentity", { get: function() {
    return this.sx === 1 && this.shy === 0 && this.shx === 0 && this.sy === 1 && this.tx === 0 && this.ty === 0;
  } }), re.prototype.join = function(f) {
    return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(M).join(f);
  }, re.prototype.multiply = function(f) {
    var w = f.sx * this.sx + f.shy * this.shx, j = f.sx * this.shy + f.shy * this.sy, $ = f.shx * this.sx + f.sy * this.shx, rt = f.shx * this.shy + f.sy * this.sy, wt = f.tx * this.sx + f.ty * this.shx + this.tx, Pt = f.tx * this.shy + f.ty * this.sy + this.ty;
    return new re(w, j, $, rt, wt, Pt);
  }, re.prototype.decompose = function() {
    var f = this.sx, w = this.shy, j = this.shx, $ = this.sy, rt = this.tx, wt = this.ty, Pt = Math.sqrt(f * f + w * w), Yt = (f /= Pt) * j + (w /= Pt) * $;
    j -= f * Yt, $ -= w * Yt;
    var Gt = Math.sqrt(j * j + $ * $);
    return Yt /= Gt, f * ($ /= Gt) < w * (j /= Gt) && (f = -f, w = -w, Yt = -Yt, Pt = -Pt), { scale: new re(Pt, 0, 0, Gt, 0, 0), translate: new re(1, 0, 0, 1, rt, wt), rotate: new re(f, w, -w, f, 0, 0), skew: new re(1, 0, Yt, 1, 0, 0) };
  }, re.prototype.toString = function(f) {
    return this.join(" ");
  }, re.prototype.inversed = function() {
    var f = this.sx, w = this.shy, j = this.shx, $ = this.sy, rt = this.tx, wt = this.ty, Pt = 1 / (f * $ - w * j), Yt = $ * Pt, Gt = -w * Pt, le = -j * Pt, ue = f * Pt;
    return new re(Yt, Gt, le, ue, -Yt * rt - le * wt, -Gt * rt - ue * wt);
  }, re.prototype.applyToPoint = function(f) {
    var w = f.x * this.sx + f.y * this.shx + this.tx, j = f.x * this.shy + f.y * this.sy + this.ty;
    return new Lr(w, j);
  }, re.prototype.applyToRectangle = function(f) {
    var w = this.applyToPoint(f), j = this.applyToPoint(new Lr(f.x + f.w, f.y + f.h));
    return new zs(w.x, w.y, j.x - w.x, j.y - w.y);
  }, re.prototype.clone = function() {
    var f = this.sx, w = this.shy, j = this.shx, $ = this.sy, rt = this.tx, wt = this.ty;
    return new re(f, w, j, $, rt, wt);
  }, g.Matrix = re;
  var yi = g.matrixMult = function(f, w) {
    return w.multiply(f);
  }, an = new re(1, 0, 0, 1, 0, 0);
  g.unitMatrix = g.identityMatrix = an;
  var Ii = function(f, w) {
    if (!ye[f]) {
      var j = (w instanceof qr ? "Sh" : "P") + (Object.keys(Kt).length + 1).toString(10);
      w.id = j, ye[f] = j, Kt[j] = w, xe.publish("addPattern", w);
    }
  };
  g.ShadingPattern = qr, g.TilingPattern = As, g.addShadingPattern = function(f, w) {
    return b("addShadingPattern()"), Ii(f, w), this;
  }, g.beginTilingPattern = function(f) {
    b("beginTilingPattern()"), Hs(f.boundingBox[0], f.boundingBox[1], f.boundingBox[2] - f.boundingBox[0], f.boundingBox[3] - f.boundingBox[1], f.matrix);
  }, g.endTilingPattern = function(f, w) {
    b("endTilingPattern()"), w.stream = Ct[R].join(`
`), Ii(f, w), xe.publish("endTilingPattern", w), Ui.pop().restore();
  };
  var Bi, Ue = g.__private__.newObject = function() {
    var f = ni();
    return di(f, !0), f;
  }, ni = g.__private__.newObjectDeferred = function() {
    return Q++, st[Q] = function() {
      return mt;
    }, Q;
  }, di = function(f, w) {
    return w = typeof w == "boolean" && w, st[f] = mt, w && I(f + " 0 obj"), f;
  }, wr = g.__private__.newAdditionalObject = function() {
    var f = { objId: ni(), content: "" };
    return yt.push(f), f;
  }, Qn = ni(), ln = ni(), wn = g.__private__.decodeColorString = function(f) {
    var w = f.split(" ");
    if (w.length !== 2 || w[1] !== "g" && w[1] !== "G") w.length !== 5 || w[4] !== "k" && w[4] !== "K" || (w = [(1 - w[0]) * (1 - w[3]), (1 - w[1]) * (1 - w[3]), (1 - w[2]) * (1 - w[3]), "r"]);
    else {
      var j = parseFloat(w[0]);
      w = [j, j, j, "r"];
    }
    for (var $ = "#", rt = 0; rt < 3; rt++) $ += ("0" + Math.floor(255 * parseFloat(w[rt])).toString(16)).slice(-2);
    return $;
  }, hn = g.__private__.encodeColorString = function(f) {
    var w;
    typeof f == "string" && (f = { ch1: f });
    var j = f.ch1, $ = f.ch2, rt = f.ch3, wt = f.ch4, Pt = f.pdfColorType === "draw" ? ["G", "RG", "K"] : ["g", "rg", "k"];
    if (typeof j == "string" && j.charAt(0) !== "#") {
      var Yt = new Mc(j);
      if (Yt.ok) j = Yt.toHex();
      else if (!/^\d*\.?\d*$/.test(j)) throw new Error('Invalid color "' + j + '" passed to jsPDF.encodeColorString.');
    }
    if (typeof j == "string" && /^#[0-9A-Fa-f]{3}$/.test(j) && (j = "#" + j[1] + j[1] + j[2] + j[2] + j[3] + j[3]), typeof j == "string" && /^#[0-9A-Fa-f]{6}$/.test(j)) {
      var Gt = parseInt(j.substr(1), 16);
      j = Gt >> 16 & 255, $ = Gt >> 8 & 255, rt = 255 & Gt;
    }
    if ($ === void 0 || wt === void 0 && j === $ && $ === rt) w = typeof j == "string" ? j + " " + Pt[0] : f.precision === 2 ? v(j / 255) + " " + Pt[0] : F(j / 255) + " " + Pt[0];
    else if (wt === void 0 || Te(wt) === "object") {
      if (wt && !isNaN(wt.a) && wt.a === 0) return ["1.", "1.", "1.", Pt[1]].join(" ");
      w = typeof j == "string" ? [j, $, rt, Pt[1]].join(" ") : f.precision === 2 ? [v(j / 255), v($ / 255), v(rt / 255), Pt[1]].join(" ") : [F(j / 255), F($ / 255), F(rt / 255), Pt[1]].join(" ");
    } else w = typeof j == "string" ? [j, $, rt, wt, Pt[2]].join(" ") : f.precision === 2 ? [v(j), v($), v(rt), v(wt), Pt[2]].join(" ") : [F(j), F($), F(rt), F(wt), Pt[2]].join(" ");
    return w;
  }, un = g.__private__.getFilters = function() {
    return u;
  }, Qi = g.__private__.putStream = function(f) {
    var w = (f = f || {}).data || "", j = f.filters || un(), $ = f.alreadyAppliedFilters || [], rt = f.addLength1 || !1, wt = w.length, Pt = f.objectId, Yt = function(De) {
      return De;
    };
    if (d !== null && Pt === void 0) throw new Error("ObjectId must be passed to putStream for file encryption");
    d !== null && (Yt = pi.encryptor(Pt, 0));
    var Gt = {};
    j === !0 && (j = ["FlateEncode"]);
    var le = f.additionalKeyValues || [], ue = (Gt = Vt.API.processDataByFilters !== void 0 ? Vt.API.processDataByFilters(w, j) : { data: w, reverseChain: [] }).reverseChain + (Array.isArray($) ? $.join(" ") : $.toString());
    if (Gt.data.length !== 0 && (le.push({ key: "Length", value: Gt.data.length }), rt === !0 && le.push({ key: "Length1", value: wt })), ue.length != 0) if (ue.split("/").length - 1 == 1) le.push({ key: "Filter", value: ue });
    else {
      le.push({ key: "Filter", value: "[" + ue + "]" });
      for (var _e = 0; _e < le.length; _e += 1) if (le[_e].key === "DecodeParms") {
        for (var si = [], Re = 0; Re < Gt.reverseChain.split("/").length - 1; Re += 1) si.push("null");
        si.push(le[_e].value), le[_e].value = "[" + si.join(" ") + "]";
      }
    }
    I("<<");
    for (var Ce = 0; Ce < le.length; Ce++) I("/" + le[Ce].key + " " + le[Ce].value);
    I(">>"), Gt.data.length !== 0 && (I("stream"), I(Yt(Gt.data)), I("endstream"));
  }, xr = g.__private__.putPage = function(f) {
    var w = f.number, j = f.data, $ = f.objId, rt = f.contentsObjId;
    di($, !0), I("<</Type /Page"), I("/Parent " + f.rootDictionaryObjId + " 0 R"), I("/Resources " + f.resourceDictionaryObjId + " 0 R"), I("/MediaBox [" + parseFloat(M(f.mediaBox.bottomLeftX)) + " " + parseFloat(M(f.mediaBox.bottomLeftY)) + " " + M(f.mediaBox.topRightX) + " " + M(f.mediaBox.topRightY) + "]"), f.cropBox !== null && I("/CropBox [" + M(f.cropBox.bottomLeftX) + " " + M(f.cropBox.bottomLeftY) + " " + M(f.cropBox.topRightX) + " " + M(f.cropBox.topRightY) + "]"), f.bleedBox !== null && I("/BleedBox [" + M(f.bleedBox.bottomLeftX) + " " + M(f.bleedBox.bottomLeftY) + " " + M(f.bleedBox.topRightX) + " " + M(f.bleedBox.topRightY) + "]"), f.trimBox !== null && I("/TrimBox [" + M(f.trimBox.bottomLeftX) + " " + M(f.trimBox.bottomLeftY) + " " + M(f.trimBox.topRightX) + " " + M(f.trimBox.topRightY) + "]"), f.artBox !== null && I("/ArtBox [" + M(f.artBox.bottomLeftX) + " " + M(f.artBox.bottomLeftY) + " " + M(f.artBox.topRightX) + " " + M(f.artBox.topRightY) + "]"), typeof f.userUnit == "number" && f.userUnit !== 1 && I("/UserUnit " + f.userUnit), xe.publish("putPage", { objId: $, pageContext: ne[w], pageNumber: w, page: j }), I("/Contents " + rt + " 0 R"), I(">>"), I("endobj");
    var wt = j.join(`
`);
    return Y === Z && (wt += `
Q`), di(rt, !0), Qi({ data: wt, filters: un(), objectId: rt }), I("endobj"), $;
  }, xn = g.__private__.putPages = function() {
    var f, w, j = [];
    for (f = 1; f <= de; f++) ne[f].objId = ni(), ne[f].contentsObjId = ni();
    for (f = 1; f <= de; f++) j.push(xr({ number: f, data: Ct[f], objId: ne[f].objId, contentsObjId: ne[f].contentsObjId, mediaBox: ne[f].mediaBox, cropBox: ne[f].cropBox, bleedBox: ne[f].bleedBox, trimBox: ne[f].trimBox, artBox: ne[f].artBox, userUnit: ne[f].userUnit, rootDictionaryObjId: Qn, resourceDictionaryObjId: ln }));
    di(Qn, !0), I("<</Type /Pages");
    var $ = "/Kids [";
    for (w = 0; w < de; w++) $ += j[w] + " 0 R ";
    I($ + "]"), I("/Count " + de), I(">>"), I("endobj"), xe.publish("postPutPages");
  }, _r = function(f) {
    xe.publish("putFont", { font: f, out: I, newObject: Ue, putStream: Qi }), f.isAlreadyPutted !== !0 && (f.objectNumber = Ue(), I("<<"), I("/Type /Font"), I("/BaseFont /" + _s(f.postScriptName)), I("/Subtype /Type1"), typeof f.encoding == "string" && I("/Encoding /" + f.encoding), I("/FirstChar 32"), I("/LastChar 255"), I(">>"), I("endobj"));
  }, $r = function(f) {
    f.objectNumber = Ue();
    var w = [];
    w.push({ key: "Type", value: "/XObject" }), w.push({ key: "Subtype", value: "/Form" }), w.push({ key: "BBox", value: "[" + [M(f.x), M(f.y), M(f.x + f.width), M(f.y + f.height)].join(" ") + "]" }), w.push({ key: "Matrix", value: "[" + f.matrix.toString() + "]" });
    var j = f.pages[1].join(`
`);
    Qi({ data: j, additionalKeyValues: w, objectId: f.objectNumber }), I("endobj");
  }, Jr = function(f, w) {
    w || (w = 21);
    var j = Ue(), $ = (function(Pt, Yt) {
      var Gt, le = [], ue = 1 / (Yt - 1);
      for (Gt = 0; Gt < 1; Gt += ue) le.push(Gt);
      if (le.push(1), Pt[0].offset != 0) {
        var _e = { offset: 0, color: Pt[0].color };
        Pt.unshift(_e);
      }
      if (Pt[Pt.length - 1].offset != 1) {
        var si = { offset: 1, color: Pt[Pt.length - 1].color };
        Pt.push(si);
      }
      for (var Re = "", Ce = 0, De = 0; De < le.length; De++) {
        for (Gt = le[De]; Gt > Pt[Ce + 1].offset; ) Ce++;
        var He = Pt[Ce].offset, Ge = (Gt - He) / (Pt[Ce + 1].offset - He), bi = Pt[Ce].color, jn = Pt[Ce + 1].color;
        Re += X(Math.round((1 - Ge) * bi[0] + Ge * jn[0]).toString(16)) + X(Math.round((1 - Ge) * bi[1] + Ge * jn[1]).toString(16)) + X(Math.round((1 - Ge) * bi[2] + Ge * jn[2]).toString(16));
      }
      return Re.trim();
    })(f.colors, w), rt = [];
    rt.push({ key: "FunctionType", value: "0" }), rt.push({ key: "Domain", value: "[0.0 1.0]" }), rt.push({ key: "Size", value: "[" + w + "]" }), rt.push({ key: "BitsPerSample", value: "8" }), rt.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), rt.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), Qi({ data: $, additionalKeyValues: rt, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: j }), I("endobj"), f.objectNumber = Ue(), I("<< /ShadingType " + f.type), I("/ColorSpace /DeviceRGB");
    var wt = "/Coords [" + M(parseFloat(f.coords[0])) + " " + M(parseFloat(f.coords[1])) + " ";
    f.type === 2 ? wt += M(parseFloat(f.coords[2])) + " " + M(parseFloat(f.coords[3])) : wt += M(parseFloat(f.coords[2])) + " " + M(parseFloat(f.coords[3])) + " " + M(parseFloat(f.coords[4])) + " " + M(parseFloat(f.coords[5])), I(wt += "]"), f.matrix && I("/Matrix [" + f.matrix.toString() + "]"), I("/Function " + j + " 0 R"), I("/Extend [true true]"), I(">>"), I("endobj");
  }, Zr = function(f, w) {
    var j = ni(), $ = Ue();
    w.push({ resourcesOid: j, objectOid: $ }), f.objectNumber = $;
    var rt = [];
    rt.push({ key: "Type", value: "/Pattern" }), rt.push({ key: "PatternType", value: "1" }), rt.push({ key: "PaintType", value: "1" }), rt.push({ key: "TilingType", value: "1" }), rt.push({ key: "BBox", value: "[" + f.boundingBox.map(M).join(" ") + "]" }), rt.push({ key: "XStep", value: M(f.xStep) }), rt.push({ key: "YStep", value: M(f.yStep) }), rt.push({ key: "Resources", value: j + " 0 R" }), f.matrix && rt.push({ key: "Matrix", value: "[" + f.matrix.toString() + "]" }), Qi({ data: f.stream, additionalKeyValues: rt, objectId: f.objectNumber }), I("endobj");
  }, ya = function(f) {
    for (var w in f.objectNumber = Ue(), I("<<"), f) switch (w) {
      case "opacity":
        I("/ca " + v(f[w]));
        break;
      case "stroke-opacity":
        I("/CA " + v(f[w]));
    }
    I(">>"), I("endobj");
  }, Bs = function(f) {
    di(f.resourcesOid, !0), I("<<"), I("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), (function() {
      for (var w in I("/Font <<"), se) se.hasOwnProperty(w) && (y === !1 || y === !0 && A.hasOwnProperty(w)) && I("/" + w + " " + se[w].objectNumber + " 0 R");
      I(">>");
    })(), (function() {
      if (Object.keys(Kt).length > 0) {
        for (var w in I("/Shading <<"), Kt) Kt.hasOwnProperty(w) && Kt[w] instanceof qr && Kt[w].objectNumber >= 0 && I("/" + w + " " + Kt[w].objectNumber + " 0 R");
        xe.publish("putShadingPatternDict"), I(">>");
      }
    })(), (function(w) {
      if (Object.keys(Kt).length > 0) {
        for (var j in I("/Pattern <<"), Kt) Kt.hasOwnProperty(j) && Kt[j] instanceof g.TilingPattern && Kt[j].objectNumber >= 0 && Kt[j].objectNumber < w && I("/" + j + " " + Kt[j].objectNumber + " 0 R");
        xe.publish("putTilingPatternDict"), I(">>");
      }
    })(f.objectOid), (function() {
      if (Object.keys(ie).length > 0) {
        var w;
        for (w in I("/ExtGState <<"), ie) ie.hasOwnProperty(w) && ie[w].objectNumber >= 0 && I("/" + w + " " + ie[w].objectNumber + " 0 R");
        xe.publish("putGStateDict"), I(">>");
      }
    })(), (function() {
      for (var w in I("/XObject <<"), Ve) Ve.hasOwnProperty(w) && Ve[w].objectNumber >= 0 && I("/" + w + " " + Ve[w].objectNumber + " 0 R");
      xe.publish("putXobjectDict"), I(">>");
    })(), I(">>"), I("endobj");
  }, po = function(f) {
    bt[f.fontName] = bt[f.fontName] || {}, bt[f.fontName][f.fontStyle] = f.id;
  }, go = function(f, w, j, $, rt) {
    var wt = { id: "F" + (Object.keys(se).length + 1).toString(10), postScriptName: f, fontName: w, fontStyle: j, encoding: $, isStandardFont: rt || !1, metadata: {} };
    return xe.publish("addFont", { font: wt, instance: this }), se[wt.id] = wt, po(wt), wt.id;
  }, tn = g.__private__.pdfEscape = g.pdfEscape = function(f, w) {
    return (function(j, $) {
      var rt, wt, Pt, Yt, Gt, le, ue, _e, si;
      if (Pt = ($ = $ || {}).sourceEncoding || "Unicode", Gt = $.outputEncoding, ($.autoencode || Gt) && se[Ot].metadata && se[Ot].metadata[Pt] && se[Ot].metadata[Pt].encoding && (Yt = se[Ot].metadata[Pt].encoding, !Gt && se[Ot].encoding && (Gt = se[Ot].encoding), !Gt && Yt.codePages && (Gt = Yt.codePages[0]), typeof Gt == "string" && (Gt = Yt[Gt]), Gt)) {
        for (ue = !1, le = [], rt = 0, wt = j.length; rt < wt; rt++) (_e = Gt[j.charCodeAt(rt)]) ? le.push(String.fromCharCode(_e)) : le.push(j[rt]), le[rt].charCodeAt(0) >> 8 && (ue = !0);
        j = le.join("");
      }
      for (rt = j.length; ue === void 0 && rt !== 0; ) j.charCodeAt(rt - 1) >> 8 && (ue = !0), rt--;
      if (!ue) return j;
      for (le = $.noBOM ? [] : [254, 255], rt = 0, wt = j.length; rt < wt; rt++) {
        if ((si = (_e = j.charCodeAt(rt)) >> 8) >> 8) throw new Error("Character at position " + rt + " of string '" + j + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
        le.push(si), le.push(_e - (si << 8));
      }
      return String.fromCharCode.apply(void 0, le);
    })(f, w).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, Os = g.__private__.beginPage = function(f) {
    Ct[++de] = [], ne[de] = { objId: 0, contentsObjId: 0, userUnit: Number(a), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(f[0]), topRightY: Number(f[1]) } }, vo(de), Ht(Ct[R]);
  }, mo = function(f, w) {
    var j, $, rt;
    switch (e = w || e, typeof f == "string" && (j = k(f.toLowerCase()), Array.isArray(j) && ($ = j[0], rt = j[1])), Array.isArray(f) && ($ = f[0] * Jt, rt = f[1] * Jt), isNaN($) && ($ = r[0], rt = r[1]), ($ > 14400 || rt > 14400) && (Ie.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), $ = Math.min(14400, $), rt = Math.min(14400, rt)), r = [$, rt], e.substr(0, 1)) {
      case "l":
        rt > $ && (r = [rt, $]);
        break;
      case "p":
        $ > rt && (r = [rt, $]);
    }
    Os(r), Pa(oe), I(rs), Ws !== 0 && I(Ws + " J"), ir !== 0 && I(ir + " j"), xe.publish("addPage", { pageNumber: de });
  }, Ms = function(f) {
    f > 0 && f <= de && (Ct.splice(f, 1), ne.splice(f, 1), de--, R > de && (R = de), this.setPage(R));
  }, vo = function(f) {
    f > 0 && f <= de && (R = f);
  }, yo = g.__private__.getNumberOfPages = g.getNumberOfPages = function() {
    return Ct.length - 1;
  }, bo = function(f, w, j) {
    var $, rt = void 0;
    return j = j || {}, f = f !== void 0 ? f : se[Ot].fontName, w = w !== void 0 ? w : se[Ot].fontStyle, $ = f.toLowerCase(), bt[$] !== void 0 && bt[$][w] !== void 0 ? rt = bt[$][w] : bt[f] !== void 0 && bt[f][w] !== void 0 ? rt = bt[f][w] : j.disableWarning === !1 && Ie.warn("Unable to look up font label for font '" + f + "', '" + w + "'. Refer to getFontList() for available fonts."), rt || j.noFallback || (rt = bt.times[w]) == null && (rt = bt.times.normal), rt;
  }, _n = g.__private__.putInfo = function() {
    var f = Ue(), w = function($) {
      return $;
    };
    for (var j in d !== null && (w = pi.encryptor(f, 0)), I("<<"), I("/Producer (" + tn(w("jsPDF " + Vt.version)) + ")"), te) te.hasOwnProperty(j) && te[j] && I("/" + j.substr(0, 1).toUpperCase() + j.substr(1) + " (" + tn(w(te[j])) + ")");
    I("/CreationDate (" + tn(w(it)) + ")"), I(">>"), I("endobj");
  }, Qr = g.__private__.putCatalog = function(f) {
    var w = (f = f || {}).rootDictionaryObjId || Qn;
    switch (Ue(), I("<<"), I("/Type /Catalog"), I("/Pages " + w + " 0 R"), G || (G = "fullwidth"), G) {
      case "fullwidth":
        I("/OpenAction [3 0 R /FitH null]");
        break;
      case "fullheight":
        I("/OpenAction [3 0 R /FitV null]");
        break;
      case "fullpage":
        I("/OpenAction [3 0 R /Fit]");
        break;
      case "original":
        I("/OpenAction [3 0 R /XYZ null null 1]");
        break;
      default:
        var j = "" + G;
        j.substr(j.length - 1) === "%" && (G = parseInt(G) / 100), typeof G == "number" && I("/OpenAction [3 0 R /XYZ null null " + v(G) + "]");
    }
    switch (jt || (jt = "continuous"), jt) {
      case "continuous":
        I("/PageLayout /OneColumn");
        break;
      case "single":
        I("/PageLayout /SinglePage");
        break;
      case "two":
      case "twoleft":
        I("/PageLayout /TwoColumnLeft");
        break;
      case "tworight":
        I("/PageLayout /TwoColumnRight");
    }
    at && I("/PageMode /" + at), xe.publish("putCatalog"), I(">>"), I("endobj");
  }, ba = g.__private__.putTrailer = function() {
    I("trailer"), I("<<"), I("/Size " + (Q + 1)), I("/Root " + Q + " 0 R"), I("/Info " + (Q - 1) + " 0 R"), d !== null && I("/Encrypt " + pi.oid + " 0 R"), I("/ID [ <" + ut + "> <" + ut + "> ]"), I(">>");
  }, ri = g.__private__.putHeader = function() {
    I("%PDF-" + B), I("%ºß¬à");
  }, wo = g.__private__.putXRef = function() {
    var f = "0000000000";
    I("xref"), I("0 " + (Q + 1)), I("0000000000 65535 f ");
    for (var w = 1; w <= Q; w++) typeof st[w] == "function" ? I((f + st[w]()).slice(-10) + " 00000 n ") : st[w] !== void 0 ? I((f + st[w]).slice(-10) + " 00000 n ") : I("0000000000 00000 n ");
  }, An = g.__private__.buildDocument = function() {
    var f;
    Q = 0, mt = 0, gt = [], st = [], yt = [], Qn = ni(), ln = ni(), Ht(gt), xe.publish("buildDocument"), ri(), xn(), (function() {
      xe.publish("putAdditionalObjects");
      for (var j = 0; j < yt.length; j++) {
        var $ = yt[j];
        di($.objId, !0), I($.content), I("endobj");
      }
      xe.publish("postPutAdditionalObjects");
    })(), f = [], (function() {
      for (var j in se) se.hasOwnProperty(j) && (y === !1 || y === !0 && A.hasOwnProperty(j)) && _r(se[j]);
    })(), (function() {
      var j;
      for (j in ie) ie.hasOwnProperty(j) && ya(ie[j]);
    })(), (function() {
      for (var j in Ve) Ve.hasOwnProperty(j) && $r(Ve[j]);
    })(), (function(j) {
      var $;
      for ($ in Kt) Kt.hasOwnProperty($) && (Kt[$] instanceof qr ? Jr(Kt[$]) : Kt[$] instanceof As && Zr(Kt[$], j));
    })(f), xe.publish("putResources"), f.forEach(Bs), Bs({ resourcesOid: ln, objectOid: Number.MAX_SAFE_INTEGER }), xe.publish("postPutResources"), d !== null && (pi.oid = Ue(), I("<<"), I("/Filter /Standard"), I("/V " + pi.v), I("/R " + pi.r), I("/U <" + pi.toHexString(pi.U) + ">"), I("/O <" + pi.toHexString(pi.O) + ">"), I("/P " + pi.P), I(">>"), I("endobj")), _n(), Qr();
    var w = mt;
    return wo(), ba(), I("startxref"), I("" + w), I("%%EOF"), Ht(Ct[R]), gt.join(`
`);
  }, ts = g.__private__.getBlob = function(f) {
    return new Blob([St(f)], { type: "application/pdf" });
  }, Ds = function(f) {
    for (; f.firstChild; ) f.removeChild(f.firstChild);
  }, zi = function(f) {
    var w, j = f.document, $ = j.documentElement, rt = j.head, wt = j.body;
    return rt || (rt = j.createElement("head"), $.appendChild(rt)), wt || (wt = j.createElement("body"), $.appendChild(wt)), Ds(rt), Ds(wt), (w = j.createElement("style")).appendChild(j.createTextNode("html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}")), rt.appendChild(w), { document: j, body: wt };
  }, es = g.output = g.__private__.output = (Bi = function(f, w) {
    switch (typeof (w = w || {}) == "string" ? w = { filename: w } : w.filename = w.filename || "generated.pdf", f) {
      case void 0:
        return An();
      case "save":
        g.save(w.filename);
        break;
      case "arraybuffer":
        return St(An());
      case "blob":
        return ts(An());
      case "bloburi":
      case "bloburl":
        if (ae.URL !== void 0 && typeof ae.URL.createObjectURL == "function") return ae.URL && ae.URL.createObjectURL(ts(An())) || void 0;
        Ie.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
        break;
      case "datauristring":
      case "dataurlstring":
        var j = "", $ = An();
        try {
          j = Iu($);
        } catch {
          j = Iu(unescape(encodeURIComponent($)));
        }
        return "data:application/pdf;filename=" + encodeURIComponent(w.filename) + ";base64," + j;
      case "pdfobjectnewwindow":
        if (Object.prototype.toString.call(ae) === "[object Window]") {
          var rt = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", wt = !w.pdfObjectUrl;
          wt || (rt = w.pdfObjectUrl);
          var Pt = ae.open();
          if (Pt !== null) {
            var Yt = zi(Pt), Gt = Yt.document.createElement("script"), le = this;
            Gt.src = rt, wt && (Gt.integrity = "sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==", Gt.crossOrigin = "anonymous"), Gt.onload = function() {
              Pt.PDFObject.embed(le.output("dataurlstring"), w);
            }, Yt.body.appendChild(Gt);
          }
          return Pt;
        }
        throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
      case "pdfjsnewwindow":
        if (Object.prototype.toString.call(ae) === "[object Window]") {
          var ue = w.pdfJsUrl || "examples/PDF.js/web/viewer.html", _e = ae.open();
          if (_e !== null) {
            var si = zi(_e), Re = si.document.createElement("iframe"), Ce = ue.indexOf("?") === -1 ? "?" : "&";
            le = this, Re.id = "pdfViewer", Re.width = "500px", Re.height = "400px", Re.src = ue + Ce + "file=&downloadName=" + encodeURIComponent(w.filename), Re.onload = function() {
              _e.document.title = w.filename, Re.contentWindow.PDFViewerApplication.open(le.output("bloburl"));
            }, si.body.appendChild(Re);
          }
          return _e;
        }
        throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
      case "dataurlnewwindow":
        if (Object.prototype.toString.call(ae) !== "[object Window]") throw new Error("The option dataurlnewwindow just works in a browser-environment.");
        var De = ae.open();
        if (De !== null) {
          var He = zi(De), Ge = He.document.createElement("iframe");
          Ge.src = this.output("datauristring", w), He.body.appendChild(Ge), De.document.title = w.filename;
        }
        if (De || typeof safari > "u") return De;
        break;
      case "datauri":
      case "dataurl":
        return ae.document.location.href = this.output("datauristring", w);
      default:
        return null;
    }
  }, Bi.foo = function() {
    try {
      return Bi.apply(this, arguments);
    } catch (j) {
      var f = j.stack || "";
      ~f.indexOf(" at ") && (f = f.split(" at ")[1]);
      var w = "Error in function " + f.split(`
`)[0].split("<")[0] + ": " + j.message;
      if (!ae.console) throw new Error(w);
      ae.console.error(w, j), ae.alert && alert(w);
    }
  }, Bi.foo.bar = Bi, Bi.foo), Bn = function(f) {
    return Array.isArray(ii) === !0 && ii.indexOf(f) > -1;
  };
  switch (i) {
    case "pt":
      Jt = 1;
      break;
    case "mm":
      Jt = 72 / 25.4;
      break;
    case "cm":
      Jt = 72 / 2.54;
      break;
    case "in":
      Jt = 72;
      break;
    case "px":
      Jt = Bn("px_scaling") == 1 ? 0.75 : 96 / 72;
      break;
    case "pc":
    case "em":
      Jt = 12;
      break;
    case "ex":
      Jt = 6;
      break;
    default:
      if (typeof i != "number") throw new Error("Invalid unit: " + i);
      Jt = i;
  }
  var pi = null;
  ft(), et();
  var xo = g.__private__.getPageInfo = g.getPageInfo = function(f) {
    if (isNaN(f) || f % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
    return { objId: ne[f].objId, pageNumber: f, pageContext: ne[f] };
  }, wa = g.__private__.getPageInfoByObjId = function(f) {
    if (isNaN(f) || f % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
    for (var w in ne) if (ne[w].objId === f) break;
    return xo(w);
  }, xa = g.__private__.getCurrentPageInfo = g.getCurrentPageInfo = function() {
    return { objId: ne[R].objId, pageNumber: R, pageContext: ne[R] };
  };
  g.addPage = function() {
    return mo.apply(this, arguments), this;
  }, g.setPage = function() {
    return vo.apply(this, arguments), Ht.call(this, Ct[R]), this;
  }, g.insertPage = function(f) {
    return this.addPage(), this.movePage(R, f), this;
  }, g.movePage = function(f, w) {
    var j, $;
    if (f > w) {
      j = Ct[f], $ = ne[f];
      for (var rt = f; rt > w; rt--) Ct[rt] = Ct[rt - 1], ne[rt] = ne[rt - 1];
      Ct[w] = j, ne[w] = $, this.setPage(w);
    } else if (f < w) {
      j = Ct[f], $ = ne[f];
      for (var wt = f; wt < w; wt++) Ct[wt] = Ct[wt + 1], ne[wt] = ne[wt + 1];
      Ct[w] = j, ne[w] = $, this.setPage(w);
    }
    return this;
  }, g.deletePage = function() {
    return Ms.apply(this, arguments), this;
  }, g.__private__.text = g.text = function(f, w, j, $, rt) {
    var wt, Pt, Yt, Gt, le, ue, _e, si, Re, Ce = ($ = $ || {}).scope || this;
    if (typeof f == "number" && typeof w == "number" && (typeof j == "string" || Array.isArray(j))) {
      var De = j;
      j = w, w = f, f = De;
    }
    if (arguments[3] instanceof re == 0 ? (Yt = arguments[4], Gt = arguments[5], Te(_e = arguments[3]) === "object" && _e !== null || (typeof Yt == "string" && (Gt = Yt, Yt = null), typeof _e == "string" && (Gt = _e, _e = null), typeof _e == "number" && (Yt = _e, _e = null), $ = { flags: _e, angle: Yt, align: Gt })) : (b("The transform parameter of text() with a Matrix value"), Re = rt), isNaN(w) || isNaN(j) || f == null) throw new Error("Invalid arguments passed to jsPDF.text");
    if (f.length === 0) return Ce;
    var He, Ge = "", bi = typeof $.lineHeightFactor == "number" ? $.lineHeightFactor : Ar, jn = Ce.internal.scaleFactor;
    function Gs(Be) {
      return Be = Be.split("	").join(Array($.TabLen || 9).join(" ")), tn(Be, _e);
    }
    function Sr(Be) {
      for (var Oe, $e = Be.concat(), ai = [], Un = $e.length; Un--; ) typeof (Oe = $e.shift()) == "string" ? ai.push(Oe) : Array.isArray(Be) && (Oe.length === 1 || Oe[1] === void 0 && Oe[2] === void 0) ? ai.push(Oe[0]) : ai.push([Oe[0], Oe[1], Oe[2]]);
      return ai;
    }
    function Fr(Be, Oe) {
      var $e;
      if (typeof Be == "string") $e = Oe(Be)[0];
      else if (Array.isArray(Be)) {
        for (var ai, Un, Js = Be.concat(), ms = [], ko = Js.length; ko--; ) typeof (ai = Js.shift()) == "string" ? ms.push(Oe(ai)[0]) : Array.isArray(ai) && typeof ai[0] == "string" && (Un = Oe(ai[0], ai[1], ai[2]), ms.push([Un[0], Un[1], Un[2]]));
        $e = ms;
      }
      return $e;
    }
    var nr = !1, Pr = !0;
    if (typeof f == "string") nr = !0;
    else if (Array.isArray(f)) {
      var ls = f.concat();
      Pt = [];
      for (var hs, wi = ls.length; wi--; ) (typeof (hs = ls.shift()) != "string" || Array.isArray(hs) && typeof hs[0] != "string") && (Pr = !1);
      nr = Pr;
    }
    if (nr === !1) throw new Error('Type of text must be string or Array. "' + f + '" is not recognized.');
    typeof f == "string" && (f = f.match(/[\r?\n]/) ? f.split(/\r\n|\r|\n/g) : [f]);
    var Tr = L / Ce.internal.scaleFactor, Cr = Tr * (bi - 1);
    switch ($.baseline) {
      case "bottom":
        j -= Cr;
        break;
      case "top":
        j += Tr - Cr;
        break;
      case "hanging":
        j += Tr - 2 * Cr;
        break;
      case "middle":
        j += Tr / 2 - Cr;
    }
    if ((ue = $.maxWidth || 0) > 0 && (typeof f == "string" ? f = Ce.splitTextToSize(f, ue) : Object.prototype.toString.call(f) === "[object Array]" && (f = f.reduce(function(Be, Oe) {
      return Be.concat(Ce.splitTextToSize(Oe, ue));
    }, []))), wt = { text: f, x: w, y: j, options: $, mutex: { pdfEscape: tn, activeFontKey: Ot, fonts: se, activeFontSize: L } }, xe.publish("preProcessText", wt), f = wt.text, Yt = ($ = wt.options).angle, Re instanceof re == 0 && Yt && typeof Yt == "number") {
      Yt *= Math.PI / 180, $.rotationDirection === 0 && (Yt = -Yt), Y === Z && (Yt = -Yt);
      var Vs = Math.cos(Yt), Sn = Math.sin(Yt);
      Re = new re(Vs, Sn, -Sn, Vs, 0, 0);
    } else Yt && Yt instanceof re && (Re = Yt);
    Y !== Z || Re || (Re = an), (le = $.charSpace || ss) !== void 0 && (Ge += M(D(le)) + ` Tc
`, this.setCharSpace(this.getCharSpace() || 0)), (si = $.horizontalScale) !== void 0 && (Ge += M(100 * si) + ` Tz
`), $.lang;
    var Pi = -1, To = $.renderingMode !== void 0 ? $.renderingMode : $.stroke, us = Ce.internal.getCurrentPageInfo().pageContext;
    switch (To) {
      case 0:
      case !1:
      case "fill":
        Pi = 0;
        break;
      case 1:
      case !0:
      case "stroke":
        Pi = 1;
        break;
      case 2:
      case "fillThenStroke":
        Pi = 2;
        break;
      case 3:
      case "invisible":
        Pi = 3;
        break;
      case 4:
      case "fillAndAddForClipping":
        Pi = 4;
        break;
      case 5:
      case "strokeAndAddPathForClipping":
        Pi = 5;
        break;
      case 6:
      case "fillThenStrokeAndAddToPathForClipping":
        Pi = 6;
        break;
      case 7:
      case "addToPathForClipping":
        Pi = 7;
    }
    var Co = us.usedRenderingMode !== void 0 ? us.usedRenderingMode : -1;
    Pi !== -1 ? Ge += Pi + ` Tr
` : Co !== -1 && (Ge += `0 Tr
`), Pi !== -1 && (us.usedRenderingMode = Pi), Gt = $.align || "left";
    var en, kr = L * bi, Ys = Ce.internal.pageSize.getWidth(), cs = se[Ot];
    le = $.charSpace || ss, ue = $.maxWidth || 0, _e = Object.assign({ autoencode: !0, noBOM: !0 }, $.flags);
    var Rr = [], Ks = function(Be) {
      return Ce.getStringUnitWidth(Be, { font: cs, charSpace: le, fontSize: L, doKerning: !1 }) * L / jn;
    };
    if (Object.prototype.toString.call(f) === "[object Array]") {
      var Ti;
      Pt = Sr(f), Gt !== "left" && (en = Pt.map(Ks));
      var Oi, fs = 0;
      if (Gt === "right") {
        w -= en[0], f = [], wi = Pt.length;
        for (var rr = 0; rr < wi; rr++) rr === 0 ? (Oi = On(w), Ti = Mn(j)) : (Oi = D(fs - en[rr]), Ti = -kr), f.push([Pt[rr], Oi, Ti]), fs = en[rr];
      } else if (Gt === "center") {
        w -= en[0] / 2, f = [], wi = Pt.length;
        for (var sr = 0; sr < wi; sr++) sr === 0 ? (Oi = On(w), Ti = Mn(j)) : (Oi = D((fs - en[sr]) / 2), Ti = -kr), f.push([Pt[sr], Oi, Ti]), fs = en[sr];
      } else if (Gt === "left") {
        f = [], wi = Pt.length;
        for (var ds = 0; ds < wi; ds++) f.push(Pt[ds]);
      } else if (Gt === "justify" && cs.encoding === "Identity-H") {
        f = [], wi = Pt.length, ue = ue !== 0 ? ue : Ys;
        for (var Er = 0, oi = 0; oi < wi; oi++) if (Ti = oi === 0 ? Mn(j) : -kr, Oi = oi === 0 ? On(w) : Er, oi < wi - 1) {
          var Oa = D((ue - en[oi]) / (Pt[oi].split(" ").length - 1)), Fn = Pt[oi].split(" ");
          f.push([Fn[0] + " ", Oi, Ti]), Er = 0;
          for (var cn = 1; cn < Fn.length; cn++) {
            var Ir = (Ks(Fn[cn - 1] + " " + Fn[cn]) - Ks(Fn[cn])) * jn + Oa;
            cn == Fn.length - 1 ? f.push([Fn[cn], Ir, 0]) : f.push([Fn[cn] + " ", Ir, 0]), Er -= Ir;
          }
        } else f.push([Pt[oi], Oi, Ti]);
        f.push(["", Er, 0]);
      } else {
        if (Gt !== "justify") throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
        for (f = [], wi = Pt.length, ue = ue !== 0 ? ue : Ys, oi = 0; oi < wi; oi++) {
          Ti = oi === 0 ? Mn(j) : -kr, Oi = oi === 0 ? On(w) : 0;
          var Xs = Pt[oi].split(" ").length - 1, $s = Xs > 0 ? (ue - en[oi]) / Xs : 0;
          oi < wi - 1 ? Rr.push(M(D($s))) : Rr.push(0), f.push([Pt[oi], Oi, Ti]);
        }
      }
    }
    (typeof $.R2L == "boolean" ? $.R2L : K) === !0 && (f = Fr(f, function(Be, Oe, $e) {
      return [Be.split("").reverse().join(""), Oe, $e];
    })), wt = { text: f, x: w, y: j, options: $, mutex: { pdfEscape: tn, activeFontKey: Ot, fonts: se, activeFontSize: L } }, xe.publish("postProcessText", wt), f = wt.text, He = wt.mutex.isHex || !1;
    var ps = se[Ot].encoding;
    ps !== "WinAnsiEncoding" && ps !== "StandardEncoding" || (f = Fr(f, function(Be, Oe, $e) {
      return [Gs(Be), Oe, $e];
    })), Pt = Sr(f), f = [];
    for (var Br, Or, or, Wn = Array.isArray(Pt[0]) ? 1 : 0, ar = "", gs = function(Be, Oe, $e) {
      var ai = "";
      return $e instanceof re ? ($e = typeof $.angle == "number" ? yi($e, new re(1, 0, 0, 1, Be, Oe)) : yi(new re(1, 0, 0, 1, Be, Oe), $e), Y === Z && ($e = yi(new re(1, 0, 0, -1, 0, 0), $e)), ai = $e.join(" ") + ` Tm
`) : ai = M(Be) + " " + M(Oe) + ` Td
`, ai;
    }, xi = 0; xi < Pt.length; xi++) {
      switch (ar = "", Wn) {
        case 1:
          or = (He ? "<" : "(") + Pt[xi][0] + (He ? ">" : ")"), Br = parseFloat(Pt[xi][1]), Or = parseFloat(Pt[xi][2]);
          break;
        case 0:
          or = (He ? "<" : "(") + Pt[xi] + (He ? ">" : ")"), Br = On(w), Or = Mn(j);
      }
      Rr !== void 0 && Rr[xi] !== void 0 && (ar = Rr[xi] + ` Tw
`), xi === 0 ? f.push(ar + gs(Br, Or, Re) + or) : Wn === 0 ? f.push(ar + or) : Wn === 1 && f.push(ar + gs(Br, Or, Re) + or);
    }
    f = Wn === 0 ? f.join(` Tj
T* `) : f.join(` Tj
`), f += ` Tj
`;
    var Pn = `BT
/`;
    return Pn += Ot + " " + L + ` Tf
`, Pn += M(L * bi) + ` TL
`, Pn += Nn + `
`, Pn += Ge, Pn += f, I(Pn += "ET"), A[Ot] = !0, Ce;
  };
  var _a = g.__private__.clip = g.clip = function(f) {
    return I(f === "evenodd" ? "W*" : "W"), this;
  };
  g.clipEvenOdd = function() {
    return _a("evenodd");
  }, g.__private__.discardPath = g.discardPath = function() {
    return I("n"), this;
  };
  var Ln = g.__private__.isValidStyle = function(f) {
    var w = !1;
    return [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(f) !== -1 && (w = !0), w;
  };
  g.__private__.setDefaultPathOperation = g.setDefaultPathOperation = function(f) {
    return Ln(f) && (c = f), this;
  };
  var _o = g.__private__.getStyle = g.getStyle = function(f) {
    var w = c;
    switch (f) {
      case "D":
      case "S":
        w = "S";
        break;
      case "F":
        w = "f";
        break;
      case "FD":
      case "DF":
        w = "B";
        break;
      case "f":
      case "f*":
      case "B":
      case "B*":
        w = f;
    }
    return w;
  }, is = g.close = function() {
    return I("h"), this;
  };
  g.stroke = function() {
    return I("S"), this;
  }, g.fill = function(f) {
    return ns("f", f), this;
  }, g.fillEvenOdd = function(f) {
    return ns("f*", f), this;
  }, g.fillStroke = function(f) {
    return ns("B", f), this;
  }, g.fillStrokeEvenOdd = function(f) {
    return ns("B*", f), this;
  };
  var ns = function(f, w) {
    Te(w) === "object" ? La(w, f) : I(f);
  }, qs = function(f) {
    f === null || Y === Z && f === void 0 || (f = _o(f), I(f));
  };
  function Aa(f, w, j, $, rt) {
    var wt = new As(w || this.boundingBox, j || this.xStep, $ || this.yStep, this.gState, rt || this.matrix);
    wt.stream = this.stream;
    var Pt = f + "$$" + this.cloneIndex++ + "$$";
    return Ii(Pt, wt), wt;
  }
  var La = function(f, w) {
    var j = ye[f.key], $ = Kt[j];
    if ($ instanceof qr) I("q"), I(Na(w)), $.gState && g.setGState($.gState), I(f.matrix.toString() + " cm"), I("/" + j + " sh"), I("Q");
    else if ($ instanceof As) {
      var rt = new re(1, 0, 0, -1, 0, Nr());
      f.matrix && (rt = rt.multiply(f.matrix || an), j = Aa.call($, f.key, f.boundingBox, f.xStep, f.yStep, rt).id), I("q"), I("/Pattern cs"), I("/" + j + " scn"), $.gState && g.setGState($.gState), I(w), I("Q");
    }
  }, Na = function(f) {
    switch (f) {
      case "f":
      case "F":
      case "n":
        return "W n";
      case "f*":
        return "W* n";
      case "B":
      case "S":
        return "W S";
      case "B*":
        return "W* S";
    }
  }, tr = g.moveTo = function(f, w) {
    return I(M(D(f)) + " " + M(q(w)) + " m"), this;
  }, Ao = g.lineTo = function(f, w) {
    return I(M(D(f)) + " " + M(q(w)) + " l"), this;
  }, er = g.curveTo = function(f, w, j, $, rt, wt) {
    return I([M(D(f)), M(q(w)), M(D(j)), M(q($)), M(D(rt)), M(q(wt)), "c"].join(" ")), this;
  };
  g.__private__.line = g.line = function(f, w, j, $, rt) {
    if (isNaN(f) || isNaN(w) || isNaN(j) || isNaN($) || !Ln(rt)) throw new Error("Invalid arguments passed to jsPDF.line");
    return Y === J ? this.lines([[j - f, $ - w]], f, w, [1, 1], rt || "S") : this.lines([[j - f, $ - w]], f, w, [1, 1]).stroke();
  }, g.__private__.lines = g.lines = function(f, w, j, $, rt, wt) {
    var Pt, Yt, Gt, le, ue, _e, si, Re, Ce, De, He, Ge;
    if (typeof f == "number" && (Ge = j, j = w, w = f, f = Ge), $ = $ || [1, 1], wt = wt || !1, isNaN(w) || isNaN(j) || !Array.isArray(f) || !Array.isArray($) || !Ln(rt) || typeof wt != "boolean") throw new Error("Invalid arguments passed to jsPDF.lines");
    for (tr(w, j), Pt = $[0], Yt = $[1], le = f.length, De = w, He = j, Gt = 0; Gt < le; Gt++) (ue = f[Gt]).length === 2 ? (De = ue[0] * Pt + De, He = ue[1] * Yt + He, Ao(De, He)) : (_e = ue[0] * Pt + De, si = ue[1] * Yt + He, Re = ue[2] * Pt + De, Ce = ue[3] * Yt + He, De = ue[4] * Pt + De, He = ue[5] * Yt + He, er(_e, si, Re, Ce, De, He));
    return wt && is(), qs(rt), this;
  }, g.path = function(f) {
    for (var w = 0; w < f.length; w++) {
      var j = f[w], $ = j.c;
      switch (j.op) {
        case "m":
          tr($[0], $[1]);
          break;
        case "l":
          Ao($[0], $[1]);
          break;
        case "c":
          er.apply(this, $);
          break;
        case "h":
          is();
      }
    }
    return this;
  }, g.__private__.rect = g.rect = function(f, w, j, $, rt) {
    if (isNaN(f) || isNaN(w) || isNaN(j) || isNaN($) || !Ln(rt)) throw new Error("Invalid arguments passed to jsPDF.rect");
    return Y === J && ($ = -$), I([M(D(f)), M(q(w)), M(D(j)), M(D($)), "re"].join(" ")), qs(rt), this;
  }, g.__private__.triangle = g.triangle = function(f, w, j, $, rt, wt, Pt) {
    if (isNaN(f) || isNaN(w) || isNaN(j) || isNaN($) || isNaN(rt) || isNaN(wt) || !Ln(Pt)) throw new Error("Invalid arguments passed to jsPDF.triangle");
    return this.lines([[j - f, $ - w], [rt - j, wt - $], [f - rt, w - wt]], f, w, [1, 1], Pt, !0), this;
  }, g.__private__.roundedRect = g.roundedRect = function(f, w, j, $, rt, wt, Pt) {
    if (isNaN(f) || isNaN(w) || isNaN(j) || isNaN($) || isNaN(rt) || isNaN(wt) || !Ln(Pt)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
    var Yt = 4 / 3 * (Math.SQRT2 - 1);
    return rt = Math.min(rt, 0.5 * j), wt = Math.min(wt, 0.5 * $), this.lines([[j - 2 * rt, 0], [rt * Yt, 0, rt, wt - wt * Yt, rt, wt], [0, $ - 2 * wt], [0, wt * Yt, -rt * Yt, wt, -rt, wt], [2 * rt - j, 0], [-rt * Yt, 0, -rt, -wt * Yt, -rt, -wt], [0, 2 * wt - $], [0, -wt * Yt, rt * Yt, -wt, rt, -wt]], f + rt, w, [1, 1], Pt, !0), this;
  }, g.__private__.ellipse = g.ellipse = function(f, w, j, $, rt) {
    if (isNaN(f) || isNaN(w) || isNaN(j) || isNaN($) || !Ln(rt)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
    var wt = 4 / 3 * (Math.SQRT2 - 1) * j, Pt = 4 / 3 * (Math.SQRT2 - 1) * $;
    return tr(f + j, w), er(f + j, w - Pt, f + wt, w - $, f, w - $), er(f - wt, w - $, f - j, w - Pt, f - j, w), er(f - j, w + Pt, f - wt, w + $, f, w + $), er(f + wt, w + $, f + j, w + Pt, f + j, w), qs(rt), this;
  }, g.__private__.circle = g.circle = function(f, w, j, $) {
    if (isNaN(f) || isNaN(w) || isNaN(j) || !Ln($)) throw new Error("Invalid arguments passed to jsPDF.circle");
    return this.ellipse(f, w, j, j, $);
  }, g.setFont = function(f, w, j) {
    return j && (w = lt(w, j)), Ot = bo(f, w, { disableWarning: !1 }), this;
  };
  var Sa = g.__private__.getFont = g.getFont = function() {
    return se[bo.apply(g, arguments)];
  };
  g.__private__.getFontList = g.getFontList = function() {
    var f, w, j = {};
    for (f in bt) if (bt.hasOwnProperty(f)) for (w in j[f] = [], bt[f]) bt[f].hasOwnProperty(w) && j[f].push(w);
    return j;
  }, g.addFont = function(f, w, j, $, rt) {
    var wt = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
    return arguments[3] && wt.indexOf(arguments[3]) !== -1 ? rt = arguments[3] : arguments[3] && wt.indexOf(arguments[3]) == -1 && (j = lt(j, $)), go.call(this, f, w, j, rt = rt || "Identity-H");
  };
  var Ar, oe = n.lineWidth || 0.200025, Fa = g.__private__.getLineWidth = g.getLineWidth = function() {
    return oe;
  }, Pa = g.__private__.setLineWidth = g.setLineWidth = function(f) {
    return oe = f, I(M(D(f)) + " w"), this;
  };
  g.__private__.setLineDash = Vt.API.setLineDash = Vt.API.setLineDashPattern = function(f, w) {
    if (f = f || [], w = w || 0, isNaN(w) || !Array.isArray(f)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
    return f = f.map(function(j) {
      return M(D(j));
    }).join(" "), w = M(D(w)), I("[" + f + "] " + w + " d"), this;
  };
  var Ta = g.__private__.getLineHeight = g.getLineHeight = function() {
    return L * Ar;
  };
  g.__private__.getLineHeight = g.getLineHeight = function() {
    return L * Ar;
  };
  var Ca = g.__private__.setLineHeightFactor = g.setLineHeightFactor = function(f) {
    return typeof (f = f || 1.15) == "number" && (Ar = f), this;
  }, ka = g.__private__.getLineHeightFactor = g.getLineHeightFactor = function() {
    return Ar;
  };
  Ca(n.lineHeight);
  var On = g.__private__.getHorizontalCoordinate = function(f) {
    return D(f);
  }, Mn = g.__private__.getVerticalCoordinate = function(f) {
    return Y === Z ? f : ne[R].mediaBox.topRightY - ne[R].mediaBox.bottomLeftY - D(f);
  }, Ra = g.__private__.getHorizontalCoordinateString = g.getHorizontalCoordinateString = function(f) {
    return M(On(f));
  }, Ea = g.__private__.getVerticalCoordinateString = g.getVerticalCoordinateString = function(f) {
    return M(Mn(f));
  }, rs = n.strokeColor || "0 G";
  g.__private__.getStrokeColor = g.getDrawColor = function() {
    return wn(rs);
  }, g.__private__.setStrokeColor = g.setDrawColor = function(f, w, j, $) {
    return rs = hn({ ch1: f, ch2: w, ch3: j, ch4: $, pdfColorType: "draw", precision: 2 }), I(rs), this;
  };
  var js = n.fillColor || "0 g";
  g.__private__.getFillColor = g.getFillColor = function() {
    return wn(js);
  }, g.__private__.setFillColor = g.setFillColor = function(f, w, j, $) {
    return js = hn({ ch1: f, ch2: w, ch3: j, ch4: $, pdfColorType: "fill", precision: 2 }), I(js), this;
  };
  var Nn = n.textColor || "0 g", Ia = g.__private__.getTextColor = g.getTextColor = function() {
    return wn(Nn);
  };
  g.__private__.setTextColor = g.setTextColor = function(f, w, j, $) {
    return Nn = hn({ ch1: f, ch2: w, ch3: j, ch4: $, pdfColorType: "text", precision: 3 }), this;
  };
  var ss = n.charSpace, Ba = g.__private__.getCharSpace = g.getCharSpace = function() {
    return parseFloat(ss || 0);
  };
  g.__private__.setCharSpace = g.setCharSpace = function(f) {
    if (isNaN(f)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
    return ss = f, this;
  };
  var Ws = 0;
  g.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, g.__private__.setLineCap = g.setLineCap = function(f) {
    var w = g.CapJoinStyles[f];
    if (w === void 0) throw new Error("Line cap style of '" + f + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return Ws = w, I(w + " J"), this;
  };
  var ir = 0;
  g.__private__.setLineJoin = g.setLineJoin = function(f) {
    var w = g.CapJoinStyles[f];
    if (w === void 0) throw new Error("Line join style of '" + f + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
    return ir = w, I(w + " j"), this;
  }, g.__private__.setLineMiterLimit = g.__private__.setMiterLimit = g.setLineMiterLimit = g.setMiterLimit = function(f) {
    if (f = f || 0, isNaN(f)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
    return I(M(D(f)) + " M"), this;
  }, g.GState = ua, g.setGState = function(f) {
    (f = typeof f == "string" ? ie[ee[f]] : Us(null, f)).equals(ke) || (I("/" + f.id + " gs"), ke = f);
  };
  var Us = function(f, w) {
    if (!f || !ee[f]) {
      var j = !1;
      for (var $ in ie) if (ie.hasOwnProperty($) && ie[$].equals(w)) {
        j = !0;
        break;
      }
      if (j) w = ie[$];
      else {
        var rt = "GS" + (Object.keys(ie).length + 1).toString(10);
        ie[rt] = w, w.id = rt;
      }
      return f && (ee[f] = w.id), xe.publish("addGState", w), w;
    }
  };
  g.addGState = function(f, w) {
    return Us(f, w), this;
  }, g.saveGraphicsState = function() {
    return I("q"), Se.push({ key: Ot, size: L, color: Nn }), this;
  }, g.restoreGraphicsState = function() {
    I("Q");
    var f = Se.pop();
    return Ot = f.key, L = f.size, Nn = f.color, ke = null, this;
  }, g.setCurrentTransformationMatrix = function(f) {
    return I(f.toString() + " cm"), this;
  }, g.comment = function(f) {
    return I("#" + f), this;
  };
  var Lr = function(f, w) {
    var j = f || 0;
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return j;
    }, set: function(wt) {
      isNaN(wt) || (j = parseFloat(wt));
    } });
    var $ = w || 0;
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return $;
    }, set: function(wt) {
      isNaN(wt) || ($ = parseFloat(wt));
    } });
    var rt = "pt";
    return Object.defineProperty(this, "type", { enumerable: !0, get: function() {
      return rt;
    }, set: function(wt) {
      rt = wt.toString();
    } }), this;
  }, zs = function(f, w, j, $) {
    Lr.call(this, f, w), this.type = "rect";
    var rt = j || 0;
    Object.defineProperty(this, "w", { enumerable: !0, get: function() {
      return rt;
    }, set: function(Pt) {
      isNaN(Pt) || (rt = parseFloat(Pt));
    } });
    var wt = $ || 0;
    return Object.defineProperty(this, "h", { enumerable: !0, get: function() {
      return wt;
    }, set: function(Pt) {
      isNaN(Pt) || (wt = parseFloat(Pt));
    } }), this;
  }, os = function() {
    this.page = de, this.currentPage = R, this.pages = Ct.slice(0), this.pagesContext = ne.slice(0), this.x = qt, this.y = Ne, this.matrix = me, this.width = Lo(R), this.height = qn(R), this.outputDestination = Bt, this.id = "", this.objectNumber = -1;
  };
  os.prototype.restore = function() {
    de = this.page, R = this.currentPage, ne = this.pagesContext, Ct = this.pages, qt = this.x, Ne = this.y, me = this.matrix, Dn(R, this.width), No(R, this.height), Bt = this.outputDestination;
  };
  var Hs = function(f, w, j, $, rt) {
    Ui.push(new os()), de = R = 0, Ct = [], qt = f, Ne = w, me = rt, Os([j, $]);
  };
  for (var as in g.beginFormObject = function(f, w, j, $, rt) {
    return Hs(f, w, j, $, rt), this;
  }, g.endFormObject = function(f) {
    return (function(w) {
      if (Fi[w]) Ui.pop().restore();
      else {
        var j = new os(), $ = "Xo" + (Object.keys(Ve).length + 1).toString(10);
        j.id = $, Fi[w] = $, Ve[$] = j, xe.publish("addFormObject", j), Ui.pop().restore();
      }
    })(f), this;
  }, g.doFormObject = function(f, w) {
    var j = Ve[Fi[f]];
    return I("q"), I(w.toString() + " cm"), I("/" + j.id + " Do"), I("Q"), this;
  }, g.getFormObject = function(f) {
    var w = Ve[Fi[f]];
    return { x: w.x, y: w.y, width: w.width, height: w.height, matrix: w.matrix };
  }, g.save = function(f, w) {
    return f = f || "generated.pdf", (w = w || {}).returnPromise = w.returnPromise || !1, w.returnPromise === !1 ? (Dr(ts(An()), f), typeof Dr.unload == "function" && ae.setTimeout && setTimeout(Dr.unload, 911), this) : new Promise(function(j, $) {
      try {
        var rt = Dr(ts(An()), f);
        typeof Dr.unload == "function" && ae.setTimeout && setTimeout(Dr.unload, 911), j(rt);
      } catch (wt) {
        $(wt.message);
      }
    });
  }, Vt.API) Vt.API.hasOwnProperty(as) && (as === "events" && Vt.API.events.length ? (function(f, w) {
    var j, $, rt;
    for (rt = w.length - 1; rt !== -1; rt--) j = w[rt][0], $ = w[rt][1], f.subscribe.apply(f, [j].concat(typeof $ == "function" ? [$] : $));
  })(xe, Vt.API.events) : g[as] = Vt.API[as]);
  function Lo(f) {
    return ne[f].mediaBox.topRightX - ne[f].mediaBox.bottomLeftX;
  }
  function Dn(f, w) {
    ne[f].mediaBox.topRightX = w + ne[f].mediaBox.bottomLeftX;
  }
  function qn(f) {
    return ne[f].mediaBox.topRightY - ne[f].mediaBox.bottomLeftY;
  }
  function No(f, w) {
    ne[f].mediaBox.topRightY = w + ne[f].mediaBox.bottomLeftY;
  }
  var So = g.getPageWidth = function(f) {
    return Lo(f = f || R) / Jt;
  }, Fo = g.setPageWidth = function(f, w) {
    Dn(f, w * Jt);
  }, Nr = g.getPageHeight = function(f) {
    return qn(f = f || R) / Jt;
  }, Po = g.setPageHeight = function(f, w) {
    No(f, w * Jt);
  };
  return g.internal = { pdfEscape: tn, getStyle: _o, getFont: Sa, getFontSize: E, getCharSpace: Ba, getTextColor: Ia, getLineHeight: Ta, getLineHeightFactor: ka, getLineWidth: Fa, write: Et, getHorizontalCoordinate: On, getVerticalCoordinate: Mn, getCoordinateString: Ra, getVerticalCoordinateString: Ea, collections: {}, newObject: Ue, newAdditionalObject: wr, newObjectDeferred: ni, newObjectDeferredBegin: di, getFilters: un, putStream: Qi, events: xe, scaleFactor: Jt, pageSize: { getWidth: function() {
    return So(R);
  }, setWidth: function(f) {
    Fo(R, f);
  }, getHeight: function() {
    return Nr(R);
  }, setHeight: function(f) {
    Po(R, f);
  } }, encryptionOptions: d, encryption: pi, getEncryptor: function(f) {
    return d !== null ? pi.encryptor(f, 0) : function(w) {
      return w;
    };
  }, output: es, getNumberOfPages: yo, get pages() {
    return Ct;
  }, out: I, f2: v, f3: F, getPageInfo: xo, getPageInfoByObjId: wa, getCurrentPageInfo: xa, getPDFVersion: O, Point: Lr, Rectangle: zs, Matrix: re, hasHotfix: Bn }, Object.defineProperty(g.internal.pageSize, "width", { get: function() {
    return So(R);
  }, set: function(f) {
    Fo(R, f);
  }, enumerable: !0, configurable: !0 }), Object.defineProperty(g.internal.pageSize, "height", { get: function() {
    return Nr(R);
  }, set: function(f) {
    Po(R, f);
  }, enumerable: !0, configurable: !0 }), function(f) {
    for (var w = 0, j = Ut.length; w < j; w++) {
      var $ = go.call(this, f[w][0], f[w][1], f[w][2], Ut[w][3], !0);
      y === !1 && (A[$] = !0);
      var rt = f[w][0].split("-");
      po({ id: $, fontName: rt[0], fontStyle: rt[1] || "" });
    }
    xe.publish("addFonts", { fonts: se, dictionary: bt });
  }.call(g, Ut), Ot = "F1", mo(r, e), xe.publish("initialized"), g;
}
xs.prototype.lsbFirstWord = function(n) {
  return String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255);
}, xs.prototype.toHexString = function(n) {
  return n.split("").map(function(t) {
    return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
  }).join("");
}, xs.prototype.hexToBytes = function(n) {
  for (var t = [], e = 0; e < n.length; e += 2) t.push(String.fromCharCode(parseInt(n.substr(e, 2), 16)));
  return t.join("");
}, xs.prototype.processOwnerPassword = function(n, t) {
  return Cl(Tl(t).substr(0, 5), n);
}, xs.prototype.encryptor = function(n, t) {
  var e = Tl(this.encryptionKey + String.fromCharCode(255 & n, n >> 8 & 255, n >> 16 & 255, 255 & t, t >> 8 & 255)).substr(0, 10);
  return function(i) {
    return Cl(e, i);
  };
}, ua.prototype.equals = function(n) {
  var t, e = "id,objectNumber,equals";
  if (!n || Te(n) !== Te(this)) return !1;
  var i = 0;
  for (t in this) if (!(e.indexOf(t) >= 0)) {
    if (this.hasOwnProperty(t) && !n.hasOwnProperty(t) || this[t] !== n[t]) return !1;
    i++;
  }
  for (t in n) n.hasOwnProperty(t) && e.indexOf(t) < 0 && i--;
  return i === 0;
}, Vt.API = { events: [] }, Vt.version = "4.2.1";
var Xe = Vt.API, Dl = 1, Kr = function(n) {
  return n.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, bs = function(n) {
  return n.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, Hr = function(n) {
  return n.toString().replace(/#/g, "#23").replace(/[\s\n\r()<>[\]{}\/%]/g, function(t) {
    var e = t.charCodeAt(0).toString(16).toUpperCase();
    return "#" + (e.length === 1 ? "0" + e : e);
  });
}, he = function(n) {
  return n.toFixed(2);
}, gr = function(n) {
  return n.toFixed(5);
};
Xe.__acroform__ = {};
var Wi = function(n, t) {
  n.prototype = Object.create(t.prototype), n.prototype.constructor = n;
}, Du = function(n) {
  return n * Dl;
}, Cn = function(n) {
  var t = new Wc(), e = zt.internal.getHeight(n) || 0, i = zt.internal.getWidth(n) || 0;
  return t.BBox = [0, 0, Number(he(i)), Number(he(e))], t;
}, Z1 = Xe.__acroform__.setBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
  return n | 1 << t;
}, Q1 = Xe.__acroform__.clearBit = function(n, t) {
  if (n = n || 0, t = t || 0, isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
  return n & ~(1 << t);
}, tp = Xe.__acroform__.getBit = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
  return n & 1 << t ? 1 : 0;
}, Qe = Xe.__acroform__.getBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
  return tp(n, t - 1);
}, ti = Xe.__acroform__.setBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
  return Z1(n, t - 1);
}, ei = Xe.__acroform__.clearBitForPdf = function(n, t) {
  if (isNaN(n) || isNaN(t)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
  return Q1(n, t - 1);
}, ep = Xe.__acroform__.calculateCoordinates = function(n, t) {
  var e = t.internal.getHorizontalCoordinate, i = t.internal.getVerticalCoordinate, r = n[0], s = n[1], u = n[2], a = n[3], l = {};
  return l.lowerLeft_X = e(r) || 0, l.lowerLeft_Y = i(s + a) || 0, l.upperRight_X = e(r + u) || 0, l.upperRight_Y = i(s) || 0, [Number(he(l.lowerLeft_X)), Number(he(l.lowerLeft_Y)), Number(he(l.upperRight_X)), Number(he(l.upperRight_Y))];
}, ip = function(n) {
  if (n.appearanceStreamContent) return n.appearanceStreamContent;
  if (n.V || n.DV) {
    var t = [], e = n._V || n.DV, i = kl(n, e), r = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
    t.push("/Tx BMC"), t.push("q"), t.push("BT"), t.push(n.scope.__private__.encodeColorString(n.color)), t.push("/" + r + " " + he(i.fontSize) + " Tf"), t.push("1 0 0 1 0 0 Tm"), t.push(i.text), t.push("ET"), t.push("Q"), t.push("EMC");
    var s = Cn(n);
    return s.scope = n.scope, s.stream = t.join(`
`), s;
  }
}, kl = function(n, t) {
  var e = n.fontSize === 0 ? n.maxFontSize : n.fontSize, i = { text: "", fontSize: "" }, r = (t = (t = t.substr(0, 1) == "(" ? t.substr(1) : t).substr(t.length - 1) == ")" ? t.substr(0, t.length - 1) : t).split(" ");
  r = n.multiline ? r.map(function(v) {
    return v.split(`
`);
  }) : r.map(function(v) {
    return [v];
  });
  var s = e, u = zt.internal.getHeight(n) || 0;
  u = u < 0 ? -u : u;
  var a = zt.internal.getWidth(n) || 0;
  a = a < 0 ? -a : a;
  var l = function(v, F, D) {
    if (v + 1 < r.length) {
      var q = F + " " + r[v + 1][0];
      return ta(q, n, D).width <= a - 4;
    }
    return !1;
  };
  s++;
  t: for (; s > 0; ) {
    t = "", s--;
    var c, d, y = ta("3", n, s).height, A = n.multiline ? u - s : (u - y) / 2, g = A += 2, B = 0, O = 0, V = 0;
    if (s <= 0) {
      t = `(...) Tj
`, t += "% Width of Text: " + ta(t, n, s = 12).width + ", FieldWidth:" + a + `
`;
      break;
    }
    for (var k = "", J = 0, Z = 0; Z < r.length; Z++) if (r.hasOwnProperty(Z)) {
      var Y = !1;
      if (r[Z].length !== 1 && V !== r[Z].length - 1) {
        if ((y + 2) * (J + 2) + 2 > u) continue t;
        k += r[Z][V], Y = !0, O = Z, Z--;
      } else {
        k = (k += r[Z][V] + " ").substr(k.length - 1) == " " ? k.substr(0, k.length - 1) : k;
        var vt = parseInt(Z), Ft = l(vt, k, s), lt = Z >= r.length - 1;
        if (Ft && !lt) {
          k += " ", V = 0;
          continue;
        }
        if (Ft || lt) {
          if (lt) O = vt;
          else if (n.multiline && (y + 2) * (J + 2) + 2 > u) continue t;
        } else {
          if (!n.multiline || (y + 2) * (J + 2) + 2 > u) continue t;
          O = vt;
        }
      }
      for (var M = "", b = B; b <= O; b++) {
        var H = r[b];
        if (n.multiline) {
          if (b === O) {
            M += H[V] + " ", V = (V + 1) % H.length;
            continue;
          }
          if (b === B) {
            M += H[H.length - 1] + " ";
            continue;
          }
        }
        M += H[0] + " ";
      }
      switch (M = M.substr(M.length - 1) == " " ? M.substr(0, M.length - 1) : M, d = ta(M, n, s).width, n.textAlign) {
        case "right":
          c = a - d - 2;
          break;
        case "center":
          c = (a - d) / 2;
          break;
        default:
          c = 2;
      }
      t += he(c) + " " + he(g) + ` Td
`, t += "(" + Kr(M) + `) Tj
`, t += -he(c) + ` 0 Td
`, g = -(s + 2), d = 0, B = Y ? O : O + 1, J++, k = "";
    }
    break;
  }
  return i.text = t, i.fontSize = s, i;
}, ta = function(n, t, e) {
  var i = t.scope.internal.getFont(t.fontName, t.fontStyle), r = t.scope.getStringUnitWidth(n, { font: i, fontSize: parseFloat(e), charSpace: 0 }) * parseFloat(e);
  return { height: t.scope.getStringUnitWidth("3", { font: i, fontSize: parseFloat(e), charSpace: 0 }) * parseFloat(e) * 1.5, width: r };
}, np = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: !1, internal: null, isInitialized: !1 }, rp = function(n, t) {
  var e = { type: "reference", object: n };
  t.internal.getPageInfo(n.page).pageContext.annotations.find(function(i) {
    return i.type === e.type && i.object === e.object;
  }) === void 0 && t.internal.getPageInfo(n.page).pageContext.annotations.push(e);
}, sp = function(n, t) {
  if (t.scope = n, n.internal !== void 0 && (n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1)) {
    if (yn.FieldNum = 0, n.internal.acroformPlugin = JSON.parse(JSON.stringify(np)), n.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
    Dl = n.internal.scaleFactor, n.internal.acroformPlugin.acroFormDictionaryRoot = new Uc(), n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n, n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe("postPutResources", function() {
      (function(e) {
        e.internal.events.unsubscribe(e.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete e.internal.acroformPlugin.acroFormDictionaryRoot._eventID, e.internal.acroformPlugin.printedOut = !0;
      })(n);
    }), n.internal.events.subscribe("buildDocument", function() {
      (function(e) {
        e.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
        var i = e.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
        for (var r in i) if (i.hasOwnProperty(r)) {
          var s = i[r];
          s.objId = void 0, s.hasAnnotation && rp(s, e);
        }
      })(n);
    }), n.internal.events.subscribe("putCatalog", function() {
      (function(e) {
        if (e.internal.acroformPlugin.acroFormDictionaryRoot === void 0) throw new Error("putCatalogCallback: Root missing.");
        e.internal.write("/AcroForm " + e.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
      })(n);
    }), n.internal.events.subscribe("postPutPages", function(e) {
      (function(i, r) {
        var s = !i;
        for (var u in i || (r.internal.newObjectDeferredBegin(r.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), r.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), i = i || r.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (i.hasOwnProperty(u)) {
          var a = i[u], l = [], c = a.Rect;
          if (a.Rect && (a.Rect = ep(a.Rect, r)), r.internal.newObjectDeferredBegin(a.objId, !0), a.DA = zt.createDefaultAppearanceStream(a), Te(a) === "object" && typeof a.getKeyValueListForStream == "function" && (l = a.getKeyValueListForStream()), a.Rect = c, a.hasAppearanceStream && !a.appearanceStreamContent) {
            var d = ip(a);
            l.push({ key: "AP", value: "<</N " + d + ">>" }), r.internal.acroformPlugin.xForms.push(d);
          }
          if (a.appearanceStreamContent) {
            var y = "";
            for (var A in a.appearanceStreamContent) if (a.appearanceStreamContent.hasOwnProperty(A)) {
              var g = a.appearanceStreamContent[A];
              if (y += "/" + A + " ", y += "<<", Object.keys(g).length >= 1 || Array.isArray(g)) {
                for (var u in g) if (g.hasOwnProperty(u)) {
                  var B = g[u];
                  typeof B == "function" && (B = B.call(r, a)), y += "/" + u + " " + B + " ", r.internal.acroformPlugin.xForms.indexOf(B) >= 0 || r.internal.acroformPlugin.xForms.push(B);
                }
              } else typeof (B = g) == "function" && (B = B.call(r, a)), y += "/" + u + " " + B, r.internal.acroformPlugin.xForms.indexOf(B) >= 0 || r.internal.acroformPlugin.xForms.push(B);
              y += ">>";
            }
            l.push({ key: "AP", value: `<<
` + y + ">>" });
          }
          r.internal.putStream({ additionalKeyValues: l, objectId: a.objId }), r.internal.out("endobj");
        }
        s && (function(O, V) {
          for (var k in O) if (O.hasOwnProperty(k)) {
            var J = k, Z = O[k];
            V.internal.newObjectDeferredBegin(Z.objId, !0), Te(Z) === "object" && typeof Z.putStream == "function" && Z.putStream(), delete O[J];
          }
        })(r.internal.acroformPlugin.xForms, r);
      })(e, n);
    }), n.internal.acroformPlugin.isInitialized = !0;
  }
}, jc = Xe.__acroform__.arrayToPdfArray = function(n, t, e) {
  var i = function(u) {
    return u;
  };
  if (Array.isArray(n)) {
    for (var r = "[", s = 0; s < n.length; s++) switch (s !== 0 && (r += " "), Te(n[s])) {
      case "boolean":
      case "number":
      case "object":
        r += n[s].toString();
        break;
      case "string":
        n[s].substr(0, 1) === "/" ? r += "/" + Hr(n[s].substr(1)) : (t !== void 0 && e && (i = e.internal.getEncryptor(t)), r += "(" + Kr(i(n[s].toString())) + ")");
    }
    return r + "]";
  }
  throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
}, gl = function(n, t, e) {
  var i = function(r) {
    return r;
  };
  return t !== void 0 && e && (i = e.internal.getEncryptor(t)), (n = n || "").toString(), "(" + Kr(i(n)) + ")";
}, Rn = function() {
  this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
    if (this._objId === void 0) {
      if (this.scope === void 0) return;
      this._objId = this.scope.internal.newObjectDeferred();
    }
    return this._objId;
  }, set: function(n) {
    this._objId = n;
  } }), Object.defineProperty(this, "scope", { value: this._scope, writable: !0 });
};
Rn.prototype.toString = function() {
  return this.objId + " 0 R";
}, Rn.prototype.putStream = function() {
  var n = this.getKeyValueListForStream();
  this.scope.internal.putStream({ data: this.stream, additionalKeyValues: n, objectId: this.objId }), this.scope.internal.out("endobj");
}, Rn.prototype.getKeyValueListForStream = function() {
  var n = [], t = Object.getOwnPropertyNames(this).filter(function(s) {
    return s != "content" && s != "appearanceStreamContent" && s != "scope" && s != "objId" && s.substring(0, 1) != "_";
  });
  for (var e in t) if (Object.getOwnPropertyDescriptor(this, t[e]).configurable === !1) {
    var i = t[e], r = this[i];
    r && (Array.isArray(r) ? n.push({ key: i, value: jc(r, this.objId, this.scope) }) : r instanceof Rn ? (r.scope = this.scope, n.push({ key: i, value: r.objId + " 0 R" })) : typeof r != "function" && n.push({ key: i, value: r }));
  }
  return n;
};
var Wc = function() {
  Rn.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: !1, writable: !0 }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: !1, writable: !0 }), Object.defineProperty(this, "FormType", { value: 1, configurable: !1, writable: !0 });
  var n, t = [];
  Object.defineProperty(this, "BBox", { configurable: !1, get: function() {
    return t;
  }, set: function(e) {
    t = e;
  } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: !1, writable: !0 }), Object.defineProperty(this, "stream", { enumerable: !1, configurable: !0, set: function(e) {
    n = e.trim();
  }, get: function() {
    return n || null;
  } });
};
Wi(Wc, Rn);
var Uc = function() {
  Rn.call(this);
  var n, t = [];
  Object.defineProperty(this, "Kids", { enumerable: !1, configurable: !0, get: function() {
    return t.length > 0 ? t : void 0;
  } }), Object.defineProperty(this, "Fields", { enumerable: !1, configurable: !1, get: function() {
    return t;
  } }), Object.defineProperty(this, "DA", { enumerable: !1, configurable: !1, get: function() {
    if (n) {
      var e = function(i) {
        return i;
      };
      return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + Kr(e(n)) + ")";
    }
  }, set: function(e) {
    n = e;
  } });
};
Wi(Uc, Rn);
var yn = function n() {
  Rn.call(this);
  var t = 4;
  Object.defineProperty(this, "F", { enumerable: !1, configurable: !1, get: function() {
    return t;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute F supplied.');
    t = k;
  } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(t, 3);
  }, set: function(k) {
    k ? this.F = ti(t, 3) : this.F = ei(t, 3);
  } });
  var e = 0;
  Object.defineProperty(this, "Ff", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(k) {
    if (isNaN(k)) throw new Error('Invalid value "' + k + '" for attribute Ff supplied.');
    e = k;
  } });
  var i = [];
  Object.defineProperty(this, "Rect", { enumerable: !1, configurable: !1, get: function() {
    if (i.length !== 0) return i;
  }, set: function(k) {
    i = k !== void 0 ? k : [];
  } }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[0]) ? 0 : i[0];
  }, set: function(k) {
    i[0] = k;
  } }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[1]) ? 0 : i[1];
  }, set: function(k) {
    i[1] = k;
  } }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[2]) ? 0 : i[2];
  }, set: function(k) {
    i[2] = k;
  } }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, get: function() {
    return !i || isNaN(i[3]) ? 0 : i[3];
  }, set: function(k) {
    i[3] = k;
  } });
  var r = "";
  Object.defineProperty(this, "FT", { enumerable: !0, configurable: !1, get: function() {
    return r;
  }, set: function(k) {
    switch (k) {
      case "/Btn":
      case "/Tx":
      case "/Ch":
      case "/Sig":
        r = k;
        break;
      default:
        throw new Error('Invalid value "' + k + '" for attribute FT supplied.');
    }
  } });
  var s = null;
  Object.defineProperty(this, "T", { enumerable: !0, configurable: !1, get: function() {
    if (!s || s.length < 1) {
      if (this instanceof ca) return;
      s = "FieldObject" + n.FieldNum++;
    }
    var k = function(J) {
      return J;
    };
    return this.scope && (k = this.scope.internal.getEncryptor(this.objId)), "(" + Kr(k(s)) + ")";
  }, set: function(k) {
    s = k.toString();
  } }), Object.defineProperty(this, "fieldName", { configurable: !0, enumerable: !0, get: function() {
    return s;
  }, set: function(k) {
    s = k;
  } });
  var u = "helvetica";
  Object.defineProperty(this, "fontName", { enumerable: !0, configurable: !0, get: function() {
    return u;
  }, set: function(k) {
    u = k;
  } });
  var a = "normal";
  Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, get: function() {
    return a;
  }, set: function(k) {
    a = k;
  } });
  var l = 0;
  Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, get: function() {
    return l;
  }, set: function(k) {
    l = k;
  } });
  var c = void 0;
  Object.defineProperty(this, "maxFontSize", { enumerable: !0, configurable: !0, get: function() {
    return c === void 0 ? 50 / Dl : c;
  }, set: function(k) {
    c = k;
  } });
  var d = "black";
  Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, get: function() {
    return d;
  }, set: function(k) {
    d = k;
  } });
  var y = "/F1 0 Tf 0 g";
  Object.defineProperty(this, "DA", { enumerable: !0, configurable: !1, get: function() {
    if (!(!y || this instanceof ca || this instanceof jr)) return gl(y, this.objId, this.scope);
  }, set: function(k) {
    k = k.toString(), y = k;
  } });
  var A = null;
  Object.defineProperty(this, "DV", { enumerable: !1, configurable: !1, get: function() {
    if (A) return this instanceof ci == 0 ? gl(A, this.objId, this.scope) : A;
  }, set: function(k) {
    k = k.toString(), A = this instanceof ci == 0 ? k.substr(0, 1) === "(" ? bs(k.substr(1, k.length - 2)) : bs(k) : k;
  } }), Object.defineProperty(this, "defaultValue", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof ci == 1 ? bs(A.substr(1, A.length - 1)) : A;
  }, set: function(k) {
    k = k.toString(), A = this instanceof ci == 1 ? "/" + Hr(k) : k;
  } });
  var g = null;
  Object.defineProperty(this, "_V", { enumerable: !1, configurable: !1, get: function() {
    if (g) return g;
  }, set: function(k) {
    this.V = k;
  } }), Object.defineProperty(this, "V", { enumerable: !1, configurable: !1, get: function() {
    if (g) return this instanceof ci == 0 ? gl(g, this.objId, this.scope) : g;
  }, set: function(k) {
    k = k.toString(), g = this instanceof ci == 0 ? k.substr(0, 1) === "(" ? bs(k.substr(1, k.length - 2)) : bs(k) : k;
  } }), Object.defineProperty(this, "value", { enumerable: !0, configurable: !0, get: function() {
    return this instanceof ci == 1 ? bs(g.substr(1, g.length - 1)) : g;
  }, set: function(k) {
    k = k.toString(), g = this instanceof ci == 1 ? "/" + Hr(k) : k;
  } }), Object.defineProperty(this, "hasAnnotation", { enumerable: !0, configurable: !0, get: function() {
    return this.Rect;
  } }), Object.defineProperty(this, "Type", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Annot" : null;
  } }), Object.defineProperty(this, "Subtype", { enumerable: !0, configurable: !1, get: function() {
    return this.hasAnnotation ? "/Widget" : null;
  } });
  var B, O = !1;
  Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return O;
  }, set: function(k) {
    k = !!k, O = k;
  } }), Object.defineProperty(this, "page", { enumerable: !0, configurable: !0, get: function() {
    if (B) return B;
  }, set: function(k) {
    B = k;
  } }), Object.defineProperty(this, "readOnly", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 1);
  }, set: function(k) {
    k ? this.Ff = ti(this.Ff, 1) : this.Ff = ei(this.Ff, 1);
  } }), Object.defineProperty(this, "required", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 2);
  }, set: function(k) {
    k ? this.Ff = ti(this.Ff, 2) : this.Ff = ei(this.Ff, 2);
  } }), Object.defineProperty(this, "noExport", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 3);
  }, set: function(k) {
    k ? this.Ff = ti(this.Ff, 3) : this.Ff = ei(this.Ff, 3);
  } });
  var V = null;
  Object.defineProperty(this, "Q", { enumerable: !0, configurable: !1, get: function() {
    if (V !== null) return V;
  }, set: function(k) {
    if ([0, 1, 2].indexOf(k) === -1) throw new Error('Invalid value "' + k + '" for attribute Q supplied.');
    V = k;
  } }), Object.defineProperty(this, "textAlign", { get: function() {
    var k;
    switch (V) {
      case 0:
      default:
        k = "left";
        break;
      case 1:
        k = "center";
        break;
      case 2:
        k = "right";
    }
    return k;
  }, configurable: !0, enumerable: !0, set: function(k) {
    switch (k) {
      case "right":
      case 2:
        V = 2;
        break;
      case "center":
      case 1:
        V = 1;
        break;
      default:
        V = 0;
    }
  } });
};
Wi(yn, Rn);
var Ls = function() {
  yn.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
  var n = 0;
  Object.defineProperty(this, "TI", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(e) {
    n = e;
  } }), Object.defineProperty(this, "topIndex", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(e) {
    n = e;
  } });
  var t = [];
  Object.defineProperty(this, "Opt", { enumerable: !0, configurable: !1, get: function() {
    return jc(t, this.objId, this.scope);
  }, set: function(e) {
    var i, r;
    r = [], typeof (i = e) == "string" && (r = (function(s, u, a) {
      a || (a = 1);
      for (var l, c = []; l = u.exec(s); ) c.push(l[a]);
      return c;
    })(i, /\((.*?)\)/g)), t = r;
  } }), this.getOptions = function() {
    return t;
  }, this.setOptions = function(e) {
    t = e, this.sort && t.sort();
  }, this.addOption = function(e) {
    e = (e = e || "").toString(), t.push(e), this.sort && t.sort();
  }, this.removeOption = function(e, i) {
    for (i = i || !1, e = (e = e || "").toString(); t.indexOf(e) !== -1 && (t.splice(t.indexOf(e), 1), i !== !1); ) ;
  }, Object.defineProperty(this, "combo", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 18);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 18) : this.Ff = ei(this.Ff, 18);
  } }), Object.defineProperty(this, "edit", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 19);
  }, set: function(e) {
    this.combo === !0 && (e ? this.Ff = ti(this.Ff, 19) : this.Ff = ei(this.Ff, 19));
  } }), Object.defineProperty(this, "sort", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 20);
  }, set: function(e) {
    e ? (this.Ff = ti(this.Ff, 20), t.sort()) : this.Ff = ei(this.Ff, 20);
  } }), Object.defineProperty(this, "multiSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 22);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 22) : this.Ff = ei(this.Ff, 22);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 23);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 23) : this.Ff = ei(this.Ff, 23);
  } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 27);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 27) : this.Ff = ei(this.Ff, 27);
  } }), this.hasAppearanceStream = !1;
};
Wi(Ls, yn);
var Ns = function() {
  Ls.call(this), this.fontName = "helvetica", this.combo = !1;
};
Wi(Ns, Ls);
var Ss = function() {
  Ns.call(this), this.combo = !0;
};
Wi(Ss, Ns);
var ra = function() {
  Ss.call(this), this.edit = !0;
};
Wi(ra, Ss);
var ci = function() {
  yn.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 15);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 15) : this.Ff = ei(this.Ff, 15);
  } }), Object.defineProperty(this, "radio", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 16);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 16) : this.Ff = ei(this.Ff, 16);
  } }), Object.defineProperty(this, "pushButton", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 17);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 17) : this.Ff = ei(this.Ff, 17);
  } }), Object.defineProperty(this, "radioIsUnison", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 26);
  }, set: function(e) {
    e ? this.Ff = ti(this.Ff, 26) : this.Ff = ei(this.Ff, 26);
  } });
  var n, t = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var e = function(s) {
      return s;
    };
    if (this.scope && (e = this.scope.internal.getEncryptor(this.objId)), Object.keys(t).length !== 0) {
      var i, r = [];
      for (i in r.push("<<"), t) r.push("/" + i + " (" + Kr(e(t[i])) + ")");
      return r.push(">>"), r.join(`
`);
    }
  }, set: function(e) {
    Te(e) === "object" && (t = e);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return t.CA || "";
  }, set: function(e) {
    typeof e == "string" && (t.CA = e);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(e) {
    var i = e == null ? "" : e.toString();
    i.substr(0, 1) === "/" && (i = i.substr(1)), n = "/" + Hr(i);
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return n.substr(1, n.length - 1);
  }, set: function(e) {
    n = "/" + Hr(e);
  } });
};
Wi(ci, yn);
var sa = function() {
  ci.call(this), this.pushButton = !0;
};
Wi(sa, ci);
var Fs = function() {
  ci.call(this), this.radio = !0, this.pushButton = !1;
  var n = [];
  Object.defineProperty(this, "Kids", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t !== void 0 ? t : [];
  } });
};
Wi(Fs, ci);
var ca = function() {
  var n, t;
  yn.call(this), Object.defineProperty(this, "Parent", { enumerable: !1, configurable: !1, get: function() {
    return n;
  }, set: function(r) {
    n = r;
  } }), Object.defineProperty(this, "optionName", { enumerable: !1, configurable: !0, get: function() {
    return t;
  }, set: function(r) {
    t = r;
  } });
  var e, i = {};
  Object.defineProperty(this, "MK", { enumerable: !1, configurable: !1, get: function() {
    var r = function(a) {
      return a;
    };
    this.scope && (r = this.scope.internal.getEncryptor(this.objId));
    var s, u = [];
    for (s in u.push("<<"), i) u.push("/" + s + " (" + Kr(r(i[s])) + ")");
    return u.push(">>"), u.join(`
`);
  }, set: function(r) {
    Te(r) === "object" && (i = r);
  } }), Object.defineProperty(this, "caption", { enumerable: !0, configurable: !0, get: function() {
    return i.CA || "";
  }, set: function(r) {
    typeof r == "string" && (i.CA = r);
  } }), Object.defineProperty(this, "AS", { enumerable: !1, configurable: !1, get: function() {
    return e;
  }, set: function(r) {
    var s = r == null ? "" : r.toString();
    s.substr(0, 1) === "/" && (s = s.substr(1)), e = "/" + Hr(s);
  } }), Object.defineProperty(this, "appearanceState", { enumerable: !0, configurable: !0, get: function() {
    return e.substr(1, e.length - 1);
  }, set: function(r) {
    var s = r == null ? "" : r.toString();
    s.substr(0, 1) === "/" && (s = s.substr(1)), e = "/" + Hr(s);
  } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = zt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
Wi(ca, yn), Fs.prototype.setAppearance = function(n) {
  if (!("createAppearanceStream" in n) || !("getCA" in n)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
  for (var t in this.Kids) if (this.Kids.hasOwnProperty(t)) {
    var e = this.Kids[t];
    e.appearanceStreamContent = n.createAppearanceStream(e.optionName), e.caption = n.getCA();
  }
}, Fs.prototype.createOption = function(n) {
  var t = new ca();
  return t.Parent = this, t.optionName = n, this.Kids.push(t), op.call(this.scope, t), t;
};
var oa = function() {
  ci.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = zt.CheckBox.createAppearanceStream();
};
Wi(oa, ci);
var jr = function() {
  yn.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 13);
  }, set: function(t) {
    t ? this.Ff = ti(this.Ff, 13) : this.Ff = ei(this.Ff, 13);
  } }), Object.defineProperty(this, "fileSelect", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 21);
  }, set: function(t) {
    t ? this.Ff = ti(this.Ff, 21) : this.Ff = ei(this.Ff, 21);
  } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 23);
  }, set: function(t) {
    t ? this.Ff = ti(this.Ff, 23) : this.Ff = ei(this.Ff, 23);
  } }), Object.defineProperty(this, "doNotScroll", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 24);
  }, set: function(t) {
    t ? this.Ff = ti(this.Ff, 24) : this.Ff = ei(this.Ff, 24);
  } }), Object.defineProperty(this, "comb", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 25);
  }, set: function(t) {
    t ? this.Ff = ti(this.Ff, 25) : this.Ff = ei(this.Ff, 25);
  } }), Object.defineProperty(this, "richText", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 26);
  }, set: function(t) {
    t ? this.Ff = ti(this.Ff, 26) : this.Ff = ei(this.Ff, 26);
  } });
  var n = null;
  Object.defineProperty(this, "MaxLen", { enumerable: !0, configurable: !1, get: function() {
    return n;
  }, set: function(t) {
    n = t;
  } }), Object.defineProperty(this, "maxLength", { enumerable: !0, configurable: !0, get: function() {
    return n;
  }, set: function(t) {
    Number.isInteger(t) && (n = t);
  } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: !0, configurable: !0, get: function() {
    return this.V || this.DV;
  } });
};
Wi(jr, yn);
var aa = function() {
  jr.call(this), Object.defineProperty(this, "password", { enumerable: !0, configurable: !0, get: function() {
    return !!Qe(this.Ff, 14);
  }, set: function(n) {
    n ? this.Ff = ti(this.Ff, 14) : this.Ff = ei(this.Ff, 14);
  } }), this.password = !0;
};
Wi(aa, jr);
var zt = { CheckBox: { createAppearanceStream: function() {
  return { N: { On: zt.CheckBox.YesNormal }, D: { On: zt.CheckBox.YesPushDown, Off: zt.CheckBox.OffPushDown } };
}, YesPushDown: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = [], i = n.scope.internal.getFont(n.fontName, n.fontStyle).id, r = n.scope.__private__.encodeColorString(n.color), s = kl(n, n.caption);
  return e.push("0.749023 g"), e.push("0 0 " + he(zt.internal.getWidth(n)) + " " + he(zt.internal.getHeight(n)) + " re"), e.push("f"), e.push("BMC"), e.push("q"), e.push("0 0 1 rg"), e.push("/" + i + " " + he(s.fontSize) + " Tf " + r), e.push("BT"), e.push(s.text), e.push("ET"), e.push("Q"), e.push("EMC"), t.stream = e.join(`
`), t;
}, YesNormal: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id, i = n.scope.__private__.encodeColorString(n.color), r = [], s = zt.internal.getHeight(n), u = zt.internal.getWidth(n), a = kl(n, n.caption);
  return r.push("1 g"), r.push("0 0 " + he(u) + " " + he(s) + " re"), r.push("f"), r.push("q"), r.push("0 0 1 rg"), r.push("0 0 " + he(u - 1) + " " + he(s - 1) + " re"), r.push("W"), r.push("n"), r.push("0 g"), r.push("BT"), r.push("/" + e + " " + he(a.fontSize) + " Tf " + i), r.push(a.text), r.push("ET"), r.push("Q"), t.stream = r.join(`
`), t;
}, OffPushDown: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = [];
  return e.push("0.749023 g"), e.push("0 0 " + he(zt.internal.getWidth(n)) + " " + he(zt.internal.getHeight(n)) + " re"), e.push("f"), t.stream = e.join(`
`), t;
} }, RadioButton: { Circle: { createAppearanceStream: function(n) {
  var t = { D: { Off: zt.RadioButton.Circle.OffPushDown }, N: {} };
  return t.N[n] = zt.RadioButton.Circle.YesNormal, t.D[n] = zt.RadioButton.Circle.YesPushDown, t;
}, getCA: function() {
  return "l";
}, YesNormal: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = [], i = zt.internal.getWidth(n) <= zt.internal.getHeight(n) ? zt.internal.getWidth(n) / 4 : zt.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var r = zt.internal.Bezier_C, s = Number((i * r).toFixed(5));
  return e.push("q"), e.push("1 0 0 1 " + gr(zt.internal.getWidth(n) / 2) + " " + gr(zt.internal.getHeight(n) / 2) + " cm"), e.push(i + " 0 m"), e.push(i + " " + s + " " + s + " " + i + " 0 " + i + " c"), e.push("-" + s + " " + i + " -" + i + " " + s + " -" + i + " 0 c"), e.push("-" + i + " -" + s + " -" + s + " -" + i + " 0 -" + i + " c"), e.push(s + " -" + i + " " + i + " -" + s + " " + i + " 0 c"), e.push("f"), e.push("Q"), t.stream = e.join(`
`), t;
}, YesPushDown: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = [], i = zt.internal.getWidth(n) <= zt.internal.getHeight(n) ? zt.internal.getWidth(n) / 4 : zt.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var r = Number((2 * i).toFixed(5)), s = Number((r * zt.internal.Bezier_C).toFixed(5)), u = Number((i * zt.internal.Bezier_C).toFixed(5));
  return e.push("0.749023 g"), e.push("q"), e.push("1 0 0 1 " + gr(zt.internal.getWidth(n) / 2) + " " + gr(zt.internal.getHeight(n) / 2) + " cm"), e.push(r + " 0 m"), e.push(r + " " + s + " " + s + " " + r + " 0 " + r + " c"), e.push("-" + s + " " + r + " -" + r + " " + s + " -" + r + " 0 c"), e.push("-" + r + " -" + s + " -" + s + " -" + r + " 0 -" + r + " c"), e.push(s + " -" + r + " " + r + " -" + s + " " + r + " 0 c"), e.push("f"), e.push("Q"), e.push("0 g"), e.push("q"), e.push("1 0 0 1 " + gr(zt.internal.getWidth(n) / 2) + " " + gr(zt.internal.getHeight(n) / 2) + " cm"), e.push(i + " 0 m"), e.push(i + " " + u + " " + u + " " + i + " 0 " + i + " c"), e.push("-" + u + " " + i + " -" + i + " " + u + " -" + i + " 0 c"), e.push("-" + i + " -" + u + " -" + u + " -" + i + " 0 -" + i + " c"), e.push(u + " -" + i + " " + i + " -" + u + " " + i + " 0 c"), e.push("f"), e.push("Q"), t.stream = e.join(`
`), t;
}, OffPushDown: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = [], i = zt.internal.getWidth(n) <= zt.internal.getHeight(n) ? zt.internal.getWidth(n) / 4 : zt.internal.getHeight(n) / 4;
  i = Number((0.9 * i).toFixed(5));
  var r = Number((2 * i).toFixed(5)), s = Number((r * zt.internal.Bezier_C).toFixed(5));
  return e.push("0.749023 g"), e.push("q"), e.push("1 0 0 1 " + gr(zt.internal.getWidth(n) / 2) + " " + gr(zt.internal.getHeight(n) / 2) + " cm"), e.push(r + " 0 m"), e.push(r + " " + s + " " + s + " " + r + " 0 " + r + " c"), e.push("-" + s + " " + r + " -" + r + " " + s + " -" + r + " 0 c"), e.push("-" + r + " -" + s + " -" + s + " -" + r + " 0 -" + r + " c"), e.push(s + " -" + r + " " + r + " -" + s + " " + r + " 0 c"), e.push("f"), e.push("Q"), t.stream = e.join(`
`), t;
} }, Cross: { createAppearanceStream: function(n) {
  var t = { D: { Off: zt.RadioButton.Cross.OffPushDown }, N: {} };
  return t.N[n] = zt.RadioButton.Cross.YesNormal, t.D[n] = zt.RadioButton.Cross.YesPushDown, t;
}, getCA: function() {
  return "8";
}, YesNormal: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = [], i = zt.internal.calculateCross(n);
  return e.push("q"), e.push("1 1 " + he(zt.internal.getWidth(n) - 2) + " " + he(zt.internal.getHeight(n) - 2) + " re"), e.push("W"), e.push("n"), e.push(he(i.x1.x) + " " + he(i.x1.y) + " m"), e.push(he(i.x2.x) + " " + he(i.x2.y) + " l"), e.push(he(i.x4.x) + " " + he(i.x4.y) + " m"), e.push(he(i.x3.x) + " " + he(i.x3.y) + " l"), e.push("s"), e.push("Q"), t.stream = e.join(`
`), t;
}, YesPushDown: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = zt.internal.calculateCross(n), i = [];
  return i.push("0.749023 g"), i.push("0 0 " + he(zt.internal.getWidth(n)) + " " + he(zt.internal.getHeight(n)) + " re"), i.push("f"), i.push("q"), i.push("1 1 " + he(zt.internal.getWidth(n) - 2) + " " + he(zt.internal.getHeight(n) - 2) + " re"), i.push("W"), i.push("n"), i.push(he(e.x1.x) + " " + he(e.x1.y) + " m"), i.push(he(e.x2.x) + " " + he(e.x2.y) + " l"), i.push(he(e.x4.x) + " " + he(e.x4.y) + " m"), i.push(he(e.x3.x) + " " + he(e.x3.y) + " l"), i.push("s"), i.push("Q"), t.stream = i.join(`
`), t;
}, OffPushDown: function(n) {
  var t = Cn(n);
  t.scope = n.scope;
  var e = [];
  return e.push("0.749023 g"), e.push("0 0 " + he(zt.internal.getWidth(n)) + " " + he(zt.internal.getHeight(n)) + " re"), e.push("f"), t.stream = e.join(`
`), t;
} } }, createDefaultAppearanceStream: function(n) {
  var t = n.scope.internal.getFont(n.fontName, n.fontStyle).id, e = n.scope.__private__.encodeColorString(n.color);
  return "/" + t + " " + n.fontSize + " Tf " + e;
} };
zt.internal = { Bezier_C: 0.551915024494, calculateCross: function(n) {
  var t = zt.internal.getWidth(n), e = zt.internal.getHeight(n), i = Math.min(t, e);
  return { x1: { x: (t - i) / 2, y: (e - i) / 2 + i }, x2: { x: (t - i) / 2 + i, y: (e - i) / 2 }, x3: { x: (t - i) / 2, y: (e - i) / 2 }, x4: { x: (t - i) / 2 + i, y: (e - i) / 2 + i } };
} }, zt.internal.getWidth = function(n) {
  var t = 0;
  return Te(n) === "object" && (t = Du(n.Rect[2])), t;
}, zt.internal.getHeight = function(n) {
  var t = 0;
  return Te(n) === "object" && (t = Du(n.Rect[3])), t;
};
var op = Xe.addField = function(n) {
  if (sp(this, n), !(n instanceof yn)) throw new Error("Invalid argument passed to jsPDF.addField.");
  var t;
  return (t = n).scope.internal.acroformPlugin.printedOut && (t.scope.internal.acroformPlugin.printedOut = !1, t.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), t.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t), n.page = n.scope.internal.getCurrentPageInfo().pageNumber, this;
};
Xe.AcroFormChoiceField = Ls, Xe.AcroFormListBox = Ns, Xe.AcroFormComboBox = Ss, Xe.AcroFormEditBox = ra, Xe.AcroFormButton = ci, Xe.AcroFormPushButton = sa, Xe.AcroFormRadioButton = Fs, Xe.AcroFormCheckBox = oa, Xe.AcroFormTextField = jr, Xe.AcroFormPasswordField = aa, Xe.AcroFormAppearance = zt, Xe.AcroForm = { ChoiceField: Ls, ListBox: Ns, ComboBox: Ss, EditBox: ra, Button: ci, PushButton: sa, RadioButton: Fs, CheckBox: oa, TextField: jr, PasswordField: aa, Appearance: zt }, Vt.AcroForm = { ChoiceField: Ls, ListBox: Ns, ComboBox: Ss, EditBox: ra, Button: ci, PushButton: sa, RadioButton: Fs, CheckBox: oa, TextField: jr, PasswordField: aa, Appearance: zt };
Vt.AcroForm;
function zc(n) {
  return n.reduce(function(t, e, i) {
    return t[e] = i, t;
  }, {});
}
(function(n) {
  var t = "addImage_";
  n.__addimage__ = {};
  var e = "UNKNOWN", i = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, r = n.__addimage__.getImageFileTypeByImageData = function(v, F) {
    var D, q, it, ut, ot, et = e;
    if ((F = F || e) === "RGBA" || v.data !== void 0 && v.data instanceof Uint8ClampedArray && "height" in v && "width" in v) return "RGBA";
    if (Ft(v)) for (ot in i) for (it = i[ot], D = 0; D < it.length; D += 1) {
      for (ut = !0, q = 0; q < it[D].length; q += 1) if (it[D][q] !== void 0 && it[D][q] !== v[q]) {
        ut = !1;
        break;
      }
      if (ut === !0) {
        et = ot;
        break;
      }
    }
    else for (ot in i) for (it = i[ot], D = 0; D < it.length; D += 1) {
      for (ut = !0, q = 0; q < it[D].length; q += 1) if (it[D][q] !== void 0 && it[D][q] !== v.charCodeAt(q)) {
        ut = !1;
        break;
      }
      if (ut === !0) {
        et = ot;
        break;
      }
    }
    return et === e && F !== e && (et = F), et;
  }, s = function v(F) {
    for (var D = this.internal.write, q = this.internal.putStream, it = (0, this.internal.getFilters)(); it.indexOf("FlateEncode") !== -1; ) it.splice(it.indexOf("FlateEncode"), 1);
    F.objectId = this.internal.newObject();
    var ut = [];
    if (ut.push({ key: "Type", value: "/XObject" }), ut.push({ key: "Subtype", value: "/Image" }), ut.push({ key: "Width", value: F.width }), ut.push({ key: "Height", value: F.height }), F.colorSpace === k.INDEXED ? ut.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (F.palette.length / 3 - 1) + " " + ("sMask" in F && F.sMask !== void 0 ? F.objectId + 2 : F.objectId + 1) + " 0 R]" }) : (ut.push({ key: "ColorSpace", value: "/" + F.colorSpace }), F.colorSpace === k.DEVICE_CMYK && ut.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), ut.push({ key: "BitsPerComponent", value: F.bitsPerComponent }), "decodeParameters" in F && F.decodeParameters !== void 0 && ut.push({ key: "DecodeParms", value: "<<" + F.decodeParameters + ">>" }), "transparency" in F && Array.isArray(F.transparency) && F.transparency.length > 0) {
      for (var ot = "", et = 0, ct = F.transparency.length; et < ct; et++) ot += F.transparency[et] + " " + F.transparency[et] + " ";
      ut.push({ key: "Mask", value: "[" + ot + "]" });
    }
    F.sMask !== void 0 && ut.push({ key: "SMask", value: F.objectId + 1 + " 0 R" });
    var Nt = F.filter !== void 0 ? ["/" + F.filter] : void 0;
    if (q({ data: F.data, additionalKeyValues: ut, alreadyAppliedFilters: Nt, objectId: F.objectId }), D("endobj"), "sMask" in F && F.sMask !== void 0) {
      var ft, N = (ft = F.sMaskBitsPerComponent) !== null && ft !== void 0 ? ft : F.bitsPerComponent, R = { width: F.width, height: F.height, colorSpace: "DeviceGray", bitsPerComponent: N, data: F.sMask };
      "filter" in F && (R.decodeParameters = "/Predictor ".concat(F.predictor, " /Colors 1 /BitsPerComponent ").concat(N, " /Columns ").concat(F.width), R.filter = F.filter), v.call(this, R);
    }
    if (F.colorSpace === k.INDEXED) {
      var z = this.internal.newObject();
      q({ data: M(new Uint8Array(F.palette)), objectId: z }), D("endobj");
    }
  }, u = function() {
    var v = this.internal.collections[t + "images"];
    for (var F in v) s.call(this, v[F]);
  }, a = function() {
    var v, F = this.internal.collections[t + "images"], D = this.internal.write;
    for (var q in F) D("/I" + (v = F[q]).index, v.objectId, "0", "R");
  }, l = function() {
    this.internal.collections[t + "images"] || (this.internal.collections[t + "images"] = {}, this.internal.events.subscribe("putResources", u), this.internal.events.subscribe("putXobjectDict", a));
  }, c = function() {
    var v = this.internal.collections[t + "images"];
    return l.call(this), v;
  }, d = function() {
    return Object.keys(this.internal.collections[t + "images"]).length;
  }, y = function(v) {
    return typeof n["process" + v.toUpperCase()] == "function";
  }, A = function(v) {
    return Te(v) === "object" && v.nodeType === 1;
  }, g = function(v, F) {
    if (v.nodeName === "IMG" && v.hasAttribute("src")) {
      var D = "" + v.getAttribute("src");
      if (D.indexOf("data:image/") === 0) return na(unescape(D).split("base64,").pop());
      var q = n.loadFile(D, !0);
      if (q !== void 0) return q;
    }
    if (v.nodeName === "CANVAS") {
      if (v.width === 0 || v.height === 0) throw new Error("Given canvas must have data. Canvas width: " + v.width + ", height: " + v.height);
      var it;
      switch (F) {
        case "PNG":
          it = "image/png";
          break;
        case "WEBP":
          it = "image/webp";
          break;
        default:
          it = "image/jpeg";
      }
      return na(v.toDataURL(it, 1).split("base64,").pop());
    }
  }, B = function(v) {
    var F = this.internal.collections[t + "images"];
    if (F) {
      for (var D in F) if (v === F[D].alias) return F[D];
    }
  }, O = function(v, F, D) {
    return v || F || (v = -96, F = -96), v < 0 && (v = -1 * D.width * 72 / v / this.internal.scaleFactor), F < 0 && (F = -1 * D.height * 72 / F / this.internal.scaleFactor), v === 0 && (v = F * D.width / D.height), F === 0 && (F = v * D.height / D.width), [v, F];
  }, V = function(v, F, D, q, it, ut) {
    var ot = O.call(this, D, q, it), et = this.internal.getCoordinateString, ct = this.internal.getVerticalCoordinateString, Nt = c.call(this);
    if (D = ot[0], q = ot[1], Nt[it.index] = it, ut) {
      ut *= Math.PI / 180;
      var ft = Math.cos(ut), N = Math.sin(ut), R = function(X) {
        return X.toFixed(4);
      }, z = [R(ft), R(N), R(-1 * N), R(ft), 0, 0, "cm"];
    }
    this.internal.write("q"), ut ? (this.internal.write([1, "0", "0", 1, et(v), ct(F + q), "cm"].join(" ")), this.internal.write(z.join(" ")), this.internal.write([et(D), "0", "0", et(q), "0", "0", "cm"].join(" "))) : this.internal.write([et(D), "0", "0", et(q), et(v), ct(F + q), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + it.index + " Do"), this.internal.write("Q");
  }, k = n.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
  n.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
  var J = n.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, Z = n.__addimage__.sHashCode = function(v) {
    var F, D, q = 0;
    if (typeof v == "string") for (D = v.length, F = 0; F < D; F++) q = (q << 5) - q + v.charCodeAt(F), q |= 0;
    else if (Ft(v)) for (D = v.byteLength / 2, F = 0; F < D; F++) q = (q << 5) - q + v[F], q |= 0;
    return q;
  }, Y = n.__addimage__.validateStringAsBase64 = function(v) {
    (v = v || "").toString().trim();
    var F = !0;
    return v.length === 0 && (F = !1), v.length % 4 != 0 && (F = !1), /^[A-Za-z0-9+/]+$/.test(v.substr(0, v.length - 2)) === !1 && (F = !1), /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(v.substr(-2)) === !1 && (F = !1), F;
  }, vt = n.__addimage__.extractImageFromDataUrl = function(v) {
    if (v == null || !(v = v.trim()).startsWith("data:")) return null;
    var F = v.indexOf(",");
    return F < 0 ? null : v.substring(0, F).trim().endsWith("base64") ? v.substring(F + 1) : null;
  };
  n.__addimage__.isArrayBuffer = function(v) {
    return v instanceof ArrayBuffer;
  };
  var Ft = n.__addimage__.isArrayBufferView = function(v) {
    return v instanceof Int8Array || v instanceof Uint8Array || v instanceof Uint8ClampedArray || v instanceof Int16Array || v instanceof Uint16Array || v instanceof Int32Array || v instanceof Uint32Array || v instanceof Float32Array || v instanceof Float64Array;
  }, lt = n.__addimage__.binaryStringToUint8Array = function(v) {
    for (var F = v.length, D = new Uint8Array(F), q = 0; q < F; q++) D[q] = v.charCodeAt(q);
    return D;
  }, M = n.__addimage__.arrayBufferToBinaryString = function(v) {
    for (var F = "", D = Ft(v) ? v : new Uint8Array(v), q = 0; q < D.length; q += 8192) F += String.fromCharCode.apply(null, D.subarray(q, q + 8192));
    return F;
  };
  n.addImage = function() {
    var v, F, D, q, it, ut, ot, et, ct;
    if (typeof arguments[1] == "number" ? (F = e, D = arguments[1], q = arguments[2], it = arguments[3], ut = arguments[4], ot = arguments[5], et = arguments[6], ct = arguments[7]) : (F = arguments[1], D = arguments[2], q = arguments[3], it = arguments[4], ut = arguments[5], ot = arguments[6], et = arguments[7], ct = arguments[8]), Te(v = arguments[0]) === "object" && !A(v) && "imageData" in v) {
      var Nt = v;
      v = Nt.imageData, F = Nt.format || F || e, D = Nt.x || D || 0, q = Nt.y || q || 0, it = Nt.w || Nt.width || it, ut = Nt.h || Nt.height || ut, ot = Nt.alias || ot, et = Nt.compression || et, ct = Nt.rotation || Nt.angle || ct;
    }
    var ft = this.internal.getFilters();
    if (et === void 0 && ft.indexOf("FlateEncode") !== -1 && (et = "SLOW"), isNaN(D) || isNaN(q)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
    l.call(this);
    var N = b.call(this, v, F, ot, et);
    return V.call(this, D, q, it, ut, N, ct), this;
  };
  var b = function(v, F, D, q) {
    var it, ut, ot;
    if (typeof v == "string" && r(v) === e) {
      v = unescape(v);
      var et = H(v, !1);
      (et !== "" || (et = n.loadFile(v, !0)) !== void 0) && (v = et);
    }
    if (A(v) && (v = g(v, F)), F = r(v, F), !y(F)) throw new Error("addImage does not support files of type '" + F + "', please ensure that a plugin for '" + F + "' support is added.");
    if (((ot = D) == null || ot.length === 0) && (D = (function(ct) {
      return typeof ct == "string" || Ft(ct) ? Z(ct) : Ft(ct.data) ? Z(ct.data) : null;
    })(v)), (it = B.call(this, D)) || (v instanceof Uint8Array || F === "RGBA" || (ut = v, v = lt(v)), it = this["process" + F.toUpperCase()](v, d.call(this), D, (function(ct) {
      return ct && typeof ct == "string" && (ct = ct.toUpperCase()), ct in n.image_compression ? ct : J.NONE;
    })(q), ut)), !it) throw new Error("An unknown error occurred whilst processing the image.");
    return it;
  }, H = n.__addimage__.convertBase64ToBinaryString = function(v, F) {
    F = typeof F != "boolean" || F;
    var D, q = "";
    if (typeof v == "string") {
      var it;
      D = (it = vt(v)) !== null && it !== void 0 ? it : v;
      try {
        q = na(D);
      } catch (ut) {
        if (F) throw Y(D) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + ut.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
      }
    }
    return q;
  };
  n.getImageProperties = function(v) {
    var F, D, q = "";
    if (A(v) && (v = g(v)), typeof v == "string" && r(v) === e && ((q = H(v, !1)) === "" && (q = n.loadFile(v) || ""), v = q), D = r(v), !y(D)) throw new Error("addImage does not support files of type '" + D + "', please ensure that a plugin for '" + D + "' support is added.");
    if (v instanceof Uint8Array || (v = lt(v)), !(F = this["process" + D.toUpperCase()](v))) throw new Error("An unknown error occurred whilst processing the image");
    return F.fileType = D, F;
  };
})(Vt.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function(e) {
    if (e !== void 0 && e != "") return !0;
  };
  Vt.API.events.push(["addPage", function(e) {
    this.internal.getPageInfo(e.pageNumber).pageContext.annotations = [];
  }]), n.events.push(["putPage", function(e) {
    for (var i, r, s, u = this.internal.getCoordinateString, a = this.internal.getVerticalCoordinateString, l = this.internal.getPageInfoByObjId(e.objId), c = e.pageContext.annotations, d = !1, y = 0; y < c.length && !d; y++) switch ((i = c[y]).type) {
      case "link":
        (t(i.options.url) || t(i.options.pageNumber)) && (d = !0);
        break;
      case "reference":
      case "text":
      case "freetext":
        d = !0;
    }
    if (d != 0) {
      this.internal.write("/Annots [");
      for (var A = 0; A < c.length; A++) {
        i = c[A];
        var g = this.internal.pdfEscape, B = this.internal.getEncryptor(e.objId);
        switch (i.type) {
          case "reference":
            this.internal.write(" " + i.object.objId + " 0 R ");
            break;
          case "text":
            var O = this.internal.newAdditionalObject(), V = this.internal.newAdditionalObject(), k = this.internal.getEncryptor(O.objId), J = i.title || "Note";
            s = "<</Type /Annot /Subtype /Text " + (r = "/Rect [" + u(i.bounds.x) + " " + a(i.bounds.y + i.bounds.h) + " " + u(i.bounds.x + i.bounds.w) + " " + a(i.bounds.y) + "] ") + "/Contents (" + g(k(i.contents)) + ")", s += " /Popup " + V.objId + " 0 R", s += " /P " + l.objId + " 0 R", s += " /T (" + g(k(J)) + ") >>", O.content = s;
            var Z = O.objId + " 0 R";
            s = "<</Type /Annot /Subtype /Popup " + (r = "/Rect [" + u(i.bounds.x + 30) + " " + a(i.bounds.y + i.bounds.h) + " " + u(i.bounds.x + i.bounds.w + 30) + " " + a(i.bounds.y) + "] ") + " /Parent " + Z, i.open && (s += " /Open true"), s += " >>", V.content = s, this.internal.write(O.objId, "0 R", V.objId, "0 R");
            break;
          case "freetext":
            r = "/Rect [" + u(i.bounds.x) + " " + a(i.bounds.y) + " " + u(i.bounds.x + i.bounds.w) + " " + a(i.bounds.y + i.bounds.h) + "] ";
            var Y = "font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + (i.color || "#000000");
            s = "<</Type /Annot /Subtype /FreeText " + r + "/Contents (" + g(B(i.contents)) + ")", s += " /DS(" + g(B(Y)) + ")", s += " /Border [0 0 0]", s += " >>", this.internal.write(s);
            break;
          case "link":
            if (i.options.name) {
              var vt = this.annotations._nameMap[i.options.name];
              i.options.pageNumber = vt.page, i.options.top = vt.y;
            } else i.options.top || (i.options.top = 0);
            if (r = "/Rect [" + i.finalBounds.x + " " + i.finalBounds.y + " " + i.finalBounds.w + " " + i.finalBounds.h + "] ", s = "", i.options.url) s = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /A <</S /URI /URI (" + g(B(i.options.url)) + ") >>";
            else if (i.options.pageNumber) switch (s = "<</Type /Annot /Subtype /Link " + r + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(i.options.pageNumber).objId + " 0 R", i.options.magFactor = i.options.magFactor || "XYZ", i.options.magFactor) {
              case "Fit":
                s += " /Fit]";
                break;
              case "FitH":
                s += " /FitH " + i.options.top + "]";
                break;
              case "FitV":
                i.options.left = i.options.left || 0, s += " /FitV " + i.options.left + "]";
                break;
              default:
                var Ft = a(i.options.top);
                i.options.left = i.options.left || 0, i.options.zoom === void 0 && (i.options.zoom = 0), s += " /XYZ " + i.options.left + " " + Ft + " " + i.options.zoom + "]";
            }
            s != "" && (s += " >>", this.internal.write(s));
        }
      }
      this.internal.write("]");
    }
  }]), n.createAnnotation = function(e) {
    var i = this.internal.getCurrentPageInfo();
    switch (e.type) {
      case "link":
        this.link(e.bounds.x, e.bounds.y, e.bounds.w, e.bounds.h, e);
        break;
      case "text":
      case "freetext":
        i.pageContext.annotations.push(e);
    }
  }, n.link = function(e, i, r, s, u) {
    var a = this.internal.getCurrentPageInfo(), l = this.internal.getCoordinateString, c = this.internal.getVerticalCoordinateString;
    a.pageContext.annotations.push({ finalBounds: { x: l(e), y: c(i), w: l(e + r), h: c(i + s) }, options: u, type: "link" });
  }, n.textWithLink = function(e, i, r, s) {
    var u, a, l = this.getTextWidth(e), c = this.internal.getLineHeight() / this.internal.scaleFactor;
    if (s.maxWidth !== void 0) {
      a = s.maxWidth;
      var d = this.splitTextToSize(e, a).length;
      u = Math.ceil(c * d);
    } else a = l, u = c;
    return this.text(e, i, r, s), r += 0.2 * c, s.align === "center" && (i -= l / 2), s.align === "right" && (i -= l), this.link(i, r - c, a, u, s), l;
  }, n.getTextWidth = function(e) {
    var i = this.internal.getFontSize();
    return this.getStringUnitWidth(e) * i / this.internal.scaleFactor;
  };
})(Vt.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, e = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, i = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, r = [1570, 1571, 1573, 1575];
  n.__arabicParser__ = {};
  var s = n.__arabicParser__.isInArabicSubstitutionA = function(O) {
    return t[O.charCodeAt(0)] !== void 0;
  }, u = n.__arabicParser__.isArabicLetter = function(O) {
    return typeof O == "string" && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(O);
  }, a = n.__arabicParser__.isArabicEndLetter = function(O) {
    return u(O) && s(O) && t[O.charCodeAt(0)].length <= 2;
  }, l = n.__arabicParser__.isArabicAlfLetter = function(O) {
    return u(O) && r.indexOf(O.charCodeAt(0)) >= 0;
  };
  n.__arabicParser__.arabicLetterHasIsolatedForm = function(O) {
    return u(O) && s(O) && t[O.charCodeAt(0)].length >= 1;
  };
  var c = n.__arabicParser__.arabicLetterHasFinalForm = function(O) {
    return u(O) && s(O) && t[O.charCodeAt(0)].length >= 2;
  };
  n.__arabicParser__.arabicLetterHasInitialForm = function(O) {
    return u(O) && s(O) && t[O.charCodeAt(0)].length >= 3;
  };
  var d = n.__arabicParser__.arabicLetterHasMedialForm = function(O) {
    return u(O) && s(O) && t[O.charCodeAt(0)].length == 4;
  }, y = n.__arabicParser__.resolveLigatures = function(O) {
    var V = 0, k = e, J = "", Z = 0;
    for (V = 0; V < O.length; V += 1) k[O.charCodeAt(V)] !== void 0 ? (Z++, typeof (k = k[O.charCodeAt(V)]) == "number" && (J += String.fromCharCode(k), k = e, Z = 0), V === O.length - 1 && (k = e, J += O.charAt(V - (Z - 1)), V -= Z - 1, Z = 0)) : (k = e, J += O.charAt(V - Z), V -= Z, Z = 0);
    return J;
  };
  n.__arabicParser__.isArabicDiacritic = function(O) {
    return O !== void 0 && i[O.charCodeAt(0)] !== void 0;
  };
  var A = n.__arabicParser__.getCorrectForm = function(O, V, k) {
    return u(O) ? s(O) === !1 ? -1 : !c(O) || !u(V) && !u(k) || !u(k) && a(V) || a(O) && !u(V) || a(O) && l(V) || a(O) && a(V) ? 0 : d(O) && u(V) && !a(V) && u(k) && c(k) ? 3 : a(O) || !u(k) ? 1 : 2 : -1;
  }, g = function(O) {
    var V = 0, k = 0, J = 0, Z = "", Y = "", vt = "", Ft = (O = O || "").split("\\s+"), lt = [];
    for (V = 0; V < Ft.length; V += 1) {
      for (lt.push(""), k = 0; k < Ft[V].length; k += 1) Z = Ft[V][k], Y = Ft[V][k - 1], vt = Ft[V][k + 1], u(Z) ? (J = A(Z, Y, vt), lt[V] += J !== -1 ? String.fromCharCode(t[Z.charCodeAt(0)][J]) : Z) : lt[V] += Z;
      lt[V] = y(lt[V]);
    }
    return lt.join(" ");
  }, B = n.__arabicParser__.processArabic = n.processArabic = function() {
    var O, V = typeof arguments[0] == "string" ? arguments[0] : arguments[0].text, k = [];
    if (Array.isArray(V)) {
      var J = 0;
      for (k = [], J = 0; J < V.length; J += 1) Array.isArray(V[J]) ? k.push([g(V[J][0]), V[J][1], V[J][2]]) : k.push([g(V[J])]);
      O = k;
    } else O = g(V);
    return typeof arguments[0] == "string" ? O : (arguments[0].text = O, arguments[0]);
  };
  n.events.push(["preProcessText", B]);
})(Vt.API), Vt.API.autoPrint = function(n) {
  var t;
  return (n = n || {}).variant = n.variant || "non-conform", n.variant === "javascript" ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
    t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    this.internal.out("/OpenAction " + t + " 0 R");
  })), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function() {
    var e = void 0;
    Object.defineProperty(this, "pdf", { get: function() {
      return e;
    }, set: function(a) {
      e = a;
    } });
    var i = 150;
    Object.defineProperty(this, "width", { get: function() {
      return i;
    }, set: function(a) {
      i = isNaN(a) || Number.isInteger(a) === !1 || a < 0 ? 150 : a, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = i + 1);
    } });
    var r = 300;
    Object.defineProperty(this, "height", { get: function() {
      return r;
    }, set: function(a) {
      r = isNaN(a) || Number.isInteger(a) === !1 || a < 0 ? 300 : a, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1);
    } });
    var s = [];
    Object.defineProperty(this, "childNodes", { get: function() {
      return s;
    }, set: function(a) {
      s = a;
    } });
    var u = {};
    Object.defineProperty(this, "style", { get: function() {
      return u;
    }, set: function(a) {
      u = a;
    } }), Object.defineProperty(this, "parentNode", {});
  };
  t.prototype.getContext = function(e, i) {
    var r;
    if ((e = e || "2d") !== "2d") return null;
    for (r in i) this.pdf.context2d.hasOwnProperty(r) && (this.pdf.context2d[r] = i[r]);
    return this.pdf.context2d._canvas = this, this.pdf.context2d;
  }, t.prototype.toDataURL = function() {
    throw new Error("toDataURL is not implemented.");
  }, n.events.push(["initialized", function() {
    this.canvas = new t(), this.canvas.pdf = this;
  }]);
})(Vt.API), (function(n) {
  var t = { left: 0, top: 0, bottom: 0, right: 0 }, e = !1, i = function() {
    this.internal.__cell__ === void 0 && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, t), this.internal.__cell__.margins.width = this.getPageWidth(), r.call(this));
  }, r = function() {
    this.internal.__cell__.lastCell = new s(), this.internal.__cell__.pages = 1;
  }, s = function() {
    var l = arguments[0];
    Object.defineProperty(this, "x", { enumerable: !0, get: function() {
      return l;
    }, set: function(O) {
      l = O;
    } });
    var c = arguments[1];
    Object.defineProperty(this, "y", { enumerable: !0, get: function() {
      return c;
    }, set: function(O) {
      c = O;
    } });
    var d = arguments[2];
    Object.defineProperty(this, "width", { enumerable: !0, get: function() {
      return d;
    }, set: function(O) {
      d = O;
    } });
    var y = arguments[3];
    Object.defineProperty(this, "height", { enumerable: !0, get: function() {
      return y;
    }, set: function(O) {
      y = O;
    } });
    var A = arguments[4];
    Object.defineProperty(this, "text", { enumerable: !0, get: function() {
      return A;
    }, set: function(O) {
      A = O;
    } });
    var g = arguments[5];
    Object.defineProperty(this, "lineNumber", { enumerable: !0, get: function() {
      return g;
    }, set: function(O) {
      g = O;
    } });
    var B = arguments[6];
    return Object.defineProperty(this, "align", { enumerable: !0, get: function() {
      return B;
    }, set: function(O) {
      B = O;
    } }), this;
  };
  s.prototype.clone = function() {
    return new s(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
  }, s.prototype.toArray = function() {
    return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
  }, n.setHeaderFunction = function(l) {
    return i.call(this), this.internal.__cell__.headerFunction = typeof l == "function" ? l : void 0, this;
  }, n.getTextDimensions = function(l, c) {
    i.call(this);
    var d = (c = c || {}).fontSize || this.getFontSize(), y = c.font || this.getFont(), A = c.scaleFactor || this.internal.scaleFactor, g = 0, B = 0, O = 0, V = this;
    if (!Array.isArray(l) && typeof l != "string") {
      if (typeof l != "number") throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
      l = String(l);
    }
    var k = c.maxWidth;
    k > 0 ? typeof l == "string" ? l = this.splitTextToSize(l, k) : Object.prototype.toString.call(l) === "[object Array]" && (l = l.reduce(function(Z, Y) {
      return Z.concat(V.splitTextToSize(Y, k));
    }, [])) : l = Array.isArray(l) ? l : [l];
    for (var J = 0; J < l.length; J++) g < (O = this.getStringUnitWidth(l[J], { font: y }) * d) && (g = O);
    return g !== 0 && (B = l.length), { w: g /= A, h: Math.max((B * d * this.getLineHeightFactor() - d * (this.getLineHeightFactor() - 1)) / A, 0) };
  }, n.cellAddPage = function() {
    i.call(this), this.addPage();
    var l = this.internal.__cell__.margins || t;
    return this.internal.__cell__.lastCell = new s(l.left, l.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
  };
  var u = n.cell = function() {
    var l;
    l = arguments[0] instanceof s ? arguments[0] : new s(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]), i.call(this);
    var c = this.internal.__cell__.lastCell, d = this.internal.__cell__.padding, y = this.internal.__cell__.margins || t, A = this.internal.__cell__.tableHeaderRow, g = this.internal.__cell__.printHeaders;
    return c.lineNumber !== void 0 && (c.lineNumber === l.lineNumber ? (l.x = (c.x || 0) + (c.width || 0), l.y = c.y || 0) : c.y + c.height + l.height + y.bottom > this.getPageHeight() ? (this.cellAddPage(), l.y = y.top, g && A && (this.printHeaderRow(l.lineNumber, !0), l.y += A[0].height)) : l.y = c.y + c.height || l.y), l.text[0] !== void 0 && (this.rect(l.x, l.y, l.width, l.height, e === !0 ? "FD" : void 0), l.align === "right" ? this.text(l.text, l.x + l.width - d, l.y + d, { align: "right", baseline: "top" }) : l.align === "center" ? this.text(l.text, l.x + l.width / 2, l.y + d, { align: "center", baseline: "top", maxWidth: l.width - d - d }) : this.text(l.text, l.x + d, l.y + d, { align: "left", baseline: "top", maxWidth: l.width - d - d })), this.internal.__cell__.lastCell = l, this;
  };
  n.table = function(l, c, d, y, A) {
    if (i.call(this), !d) throw new Error("No data for PDF table.");
    var g, B, O, V, k = [], J = [], Z = [], Y = {}, vt = {}, Ft = [], lt = [], M = (A = A || {}).autoSize || !1, b = A.printHeaders !== !1, H = A.css && A.css["font-size"] !== void 0 ? 16 * A.css["font-size"] : A.fontSize || 12, v = A.margins || Object.assign({ width: this.getPageWidth() }, t), F = typeof A.padding == "number" ? A.padding : 3, D = A.headerBackgroundColor || "#c8c8c8", q = A.headerTextColor || "#000";
    if (r.call(this), this.internal.__cell__.printHeaders = b, this.internal.__cell__.margins = v, this.internal.__cell__.table_font_size = H, this.internal.__cell__.padding = F, this.internal.__cell__.headerBackgroundColor = D, this.internal.__cell__.headerTextColor = q, this.setFontSize(H), y == null) J = k = Object.keys(d[0]), Z = k.map(function() {
      return "left";
    });
    else if (Array.isArray(y) && Te(y[0]) === "object") for (k = y.map(function(Nt) {
      return Nt.name;
    }), J = y.map(function(Nt) {
      return Nt.prompt || Nt.name || "";
    }), Z = y.map(function(Nt) {
      return Nt.align || "left";
    }), g = 0; g < y.length; g += 1) vt[y[g].name] = 0.7499990551181103 * y[g].width;
    else Array.isArray(y) && typeof y[0] == "string" && (J = k = y, Z = k.map(function() {
      return "left";
    }));
    if (M || Array.isArray(y) && typeof y[0] == "string") for (g = 0; g < k.length; g += 1) {
      for (Y[V = k[g]] = d.map(function(Nt) {
        return Nt[V];
      }), this.setFont(void 0, "bold"), Ft.push(this.getTextDimensions(J[g], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), B = Y[V], this.setFont(void 0, "normal"), O = 0; O < B.length; O += 1) Ft.push(this.getTextDimensions(B[O], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
      vt[V] = Math.max.apply(null, Ft) + F + F, Ft = [];
    }
    if (b) {
      var it = {};
      for (g = 0; g < k.length; g += 1) it[k[g]] = {}, it[k[g]].text = J[g], it[k[g]].align = Z[g];
      var ut = a.call(this, it, vt);
      lt = k.map(function(Nt) {
        return new s(l, c, vt[Nt], ut, it[Nt].text, void 0, it[Nt].align);
      }), this.setTableHeaderRow(lt), this.printHeaderRow(1, !1);
    }
    var ot = y.reduce(function(Nt, ft) {
      return Nt[ft.name] = ft.align, Nt;
    }, {});
    for (g = 0; g < d.length; g += 1) {
      "rowStart" in A && A.rowStart instanceof Function && A.rowStart({ row: g, data: d[g] }, this);
      var et = a.call(this, d[g], vt);
      for (O = 0; O < k.length; O += 1) {
        var ct = d[g][k[O]];
        "cellStart" in A && A.cellStart instanceof Function && A.cellStart({ row: g, col: O, data: ct }, this), u.call(this, new s(l, c, vt[k[O]], et, ct, g + 2, ot[k[O]]));
      }
    }
    return this.internal.__cell__.table_x = l, this.internal.__cell__.table_y = c, this;
  };
  var a = function(l, c) {
    var d = this.internal.__cell__.padding, y = this.internal.__cell__.table_font_size, A = this.internal.scaleFactor;
    return Object.keys(l).map(function(g) {
      var B = l[g];
      return this.splitTextToSize(B.hasOwnProperty("text") ? B.text : B, c[g] - d - d);
    }, this).map(function(g) {
      return this.getLineHeightFactor() * g.length * y / A + d + d;
    }, this).reduce(function(g, B) {
      return Math.max(g, B);
    }, 0);
  };
  n.setTableHeaderRow = function(l) {
    i.call(this), this.internal.__cell__.tableHeaderRow = l;
  }, n.printHeaderRow = function(l, c) {
    if (i.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
    var d;
    if (e = !0, typeof this.internal.__cell__.headerFunction == "function") {
      var y = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
      this.internal.__cell__.lastCell = new s(y[0], y[1], y[2], y[3], void 0, -1);
    }
    this.setFont(void 0, "bold");
    for (var A = [], g = 0; g < this.internal.__cell__.tableHeaderRow.length; g += 1) {
      d = this.internal.__cell__.tableHeaderRow[g].clone(), c && (d.y = this.internal.__cell__.margins.top || 0, A.push(d)), d.lineNumber = l;
      var B = this.getTextColor();
      this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), u.call(this, d), this.setTextColor(B);
    }
    A.length > 0 && this.setTableHeaderRow(A), this.setFont(void 0, "normal"), e = !1;
  };
})(Vt.API);
var Hc = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, Gc = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], Rl = zc(Gc), Vc = [100, 200, 300, 400, 500, 600, 700, 800, 900], ap = zc(Vc);
function ml(n) {
  var t = n.family.replace(/"|'/g, "").toLowerCase(), e = (function(s) {
    return Hc[s = s || "normal"] ? s : "normal";
  })(n.style), i = (function(s) {
    return s ? typeof s == "number" ? s >= 100 && s <= 900 && s % 100 == 0 ? s : 400 : /^\d00$/.test(s) ? parseInt(s) : s === "bold" ? 700 : 400 : 400;
  })(n.weight), r = (function(s) {
    return typeof Rl[s = s || "normal"] == "number" ? s : "normal";
  })(n.stretch);
  return { family: t, style: e, weight: i, stretch: r, src: n.src || [], ref: n.ref || { name: t, style: [r, e, i].join(" ") } };
}
function qu(n, t, e, i) {
  var r;
  for (r = e; r >= 0 && r < t.length; r += i) if (n[t[r]]) return n[t[r]];
  for (r = e; r >= 0 && r < t.length; r -= i) if (n[t[r]]) return n[t[r]];
}
var lp = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, ju = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
function Wu(n) {
  return [n.stretch, n.style, n.weight, n.family].join(" ");
}
function Uu(n) {
  return n.trimLeft();
}
function hp(n, t) {
  for (var e = 0; e < n.length; ) {
    if (n.charAt(e) === t) return [n.substring(0, e), n.substring(e + 1)];
    e += 1;
  }
  return null;
}
function up(n) {
  var t = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
  return t === null ? null : [t[0], n.substring(t[0].length)];
}
var ws, ea, zu, Hu, Gu, vl = ["times"];
function Vu(n, t, e, i, r) {
  var s = 4, u = Ku;
  switch (r) {
    case Vt.API.image_compression.FAST:
      s = 1, u = Yu;
      break;
    case Vt.API.image_compression.MEDIUM:
      s = 6, u = Xu;
      break;
    case Vt.API.image_compression.SLOW:
      s = 9, u = $u;
  }
  n = (function(l, c, d, y) {
    for (var A, g = l.length / c, B = new Uint8Array(l.length + g), O = [cp, Yu, Ku, Xu, $u], V = 0; V < g; V += 1) {
      var k = V * c, J = l.subarray(k, k + c);
      if (y) B.set(y(J, d, A), k + V);
      else {
        for (var Z = O.length, Y = [], vt = 0; vt < Z; vt += 1) Y[vt] = O[vt](J, d, A);
        var Ft = dp(Y.concat());
        B.set(Y[Ft], k + V);
      }
      A = J;
    }
    return B;
  })(n, t, Math.ceil(e * i / 8), u);
  var a = Nl(n, { level: s });
  return Vt.API.__addimage__.arrayBufferToBinaryString(a);
}
function cp(n) {
  var t = Array.apply([], n);
  return t.unshift(0), t;
}
function Yu(n, t) {
  var e = n.length, i = [];
  i[0] = 1;
  for (var r = 0; r < e; r += 1) {
    var s = n[r - t] || 0;
    i[r + 1] = n[r] - s + 256 & 255;
  }
  return i;
}
function Ku(n, t, e) {
  var i = n.length, r = [];
  r[0] = 2;
  for (var s = 0; s < i; s += 1) {
    var u = e && e[s] || 0;
    r[s + 1] = n[s] - u + 256 & 255;
  }
  return r;
}
function Xu(n, t, e) {
  var i = n.length, r = [];
  r[0] = 3;
  for (var s = 0; s < i; s += 1) {
    var u = n[s - t] || 0, a = e && e[s] || 0;
    r[s + 1] = n[s] + 256 - (u + a >>> 1) & 255;
  }
  return r;
}
function $u(n, t, e) {
  var i = n.length, r = [];
  r[0] = 4;
  for (var s = 0; s < i; s += 1) {
    var u = fp(n[s - t] || 0, e && e[s] || 0, e && e[s - t] || 0);
    r[s + 1] = n[s] - u + 256 & 255;
  }
  return r;
}
function fp(n, t, e) {
  if (n === t && t === e) return n;
  var i = Math.abs(t - e), r = Math.abs(n - e), s = Math.abs(n + t - e - e);
  return i <= r && i <= s ? n : r <= s ? t : e;
}
function dp(n) {
  var t = n.map(function(e) {
    return e.reduce(function(i, r) {
      return i + Math.abs(r);
    }, 0);
  });
  return t.indexOf(Math.min.apply(null, t));
}
function yl(n, t, e) {
  var i = t * e, r = Math.floor(i / 8), s = 16 - (i - 8 * r + e), u = (1 << e) - 1;
  return Yc(n, r) >> s & u;
}
function Ju(n, t, e, i) {
  var r = e * i, s = Math.floor(r / 8), u = 16 - (r - 8 * s + i), a = (1 << i) - 1, l = (t & a) << u;
  (function(c, d, y) {
    if (d + 1 < c.byteLength) c.setUint16(d, y, !1);
    else {
      var A = y >> 8 & 255;
      c.setUint8(d, A);
    }
  })(n, s, Yc(n, s) & ~(a << u) & 65535 | l);
}
function Yc(n, t) {
  return t + 1 < n.byteLength ? n.getUint16(t, !1) : n.getUint8(t) << 8;
}
function pp(n) {
  var t = 0;
  if (n[t++] !== 71 || n[t++] !== 73 || n[t++] !== 70 || n[t++] !== 56 || (n[t++] + 1 & 253) != 56 || n[t++] !== 97) throw new Error("Invalid GIF 87a/89a header.");
  var e = n[t++] | n[t++] << 8, i = n[t++] | n[t++] << 8, r = n[t++], s = r >> 7, u = 1 << 1 + (7 & r);
  n[t++], n[t++];
  var a = null, l = null;
  s && (a = t, l = u, t += 3 * u);
  var c = !0, d = [], y = 0, A = null, g = 0, B = null;
  for (this.width = e, this.height = i; c && t < n.length; ) switch (n[t++]) {
    case 33:
      switch (n[t++]) {
        case 255:
          if (n[t] !== 11 || n[t + 1] == 78 && n[t + 2] == 69 && n[t + 3] == 84 && n[t + 4] == 83 && n[t + 5] == 67 && n[t + 6] == 65 && n[t + 7] == 80 && n[t + 8] == 69 && n[t + 9] == 50 && n[t + 10] == 46 && n[t + 11] == 48 && n[t + 12] == 3 && n[t + 13] == 1 && n[t + 16] == 0) t += 14, B = n[t++] | n[t++] << 8, t++;
          else for (t += 12; ; ) {
            if (!((v = n[t++]) >= 0)) throw Error("Invalid block size");
            if (v === 0) break;
            t += v;
          }
          break;
        case 249:
          if (n[t++] !== 4 || n[t + 4] !== 0) throw new Error("Invalid graphics extension block.");
          var O = n[t++];
          y = n[t++] | n[t++] << 8, A = n[t++], 1 & O || (A = null), g = O >> 2 & 7, t++;
          break;
        case 254:
          for (; ; ) {
            if (!((v = n[t++]) >= 0)) throw Error("Invalid block size");
            if (v === 0) break;
            t += v;
          }
          break;
        default:
          throw new Error("Unknown graphic control label: 0x" + n[t - 1].toString(16));
      }
      break;
    case 44:
      var V = n[t++] | n[t++] << 8, k = n[t++] | n[t++] << 8, J = n[t++] | n[t++] << 8, Z = n[t++] | n[t++] << 8, Y = n[t++], vt = Y >> 6 & 1, Ft = 1 << 1 + (7 & Y), lt = a, M = l, b = !1;
      Y >> 7 && (b = !0, lt = t, M = Ft, t += 3 * Ft);
      var H = t;
      for (t++; ; ) {
        var v;
        if (!((v = n[t++]) >= 0)) throw Error("Invalid block size");
        if (v === 0) break;
        t += v;
      }
      d.push({ x: V, y: k, width: J, height: Z, has_local_palette: b, palette_offset: lt, palette_size: M, data_offset: H, data_length: t - H, transparent_index: A, interlaced: !!vt, delay: y, disposal: g });
      break;
    case 59:
      c = !1;
      break;
    default:
      throw new Error("Unknown gif block: 0x" + n[t - 1].toString(16));
  }
  this.numFrames = function() {
    return d.length;
  }, this.loopCount = function() {
    return B;
  }, this.frameInfo = function(F) {
    if (F < 0 || F >= d.length) throw new Error("Frame index out of range.");
    return d[F];
  }, this.decodeAndBlitFrameBGRA = function(F, D) {
    var q = this.frameInfo(F), it = q.width * q.height;
    if (it > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
    var ut = new Uint8Array(it);
    Zu(n, q.data_offset, ut, it);
    var ot = q.palette_offset, et = q.transparent_index;
    et === null && (et = 256);
    var ct = q.width, Nt = e - ct, ft = ct, N = 4 * (q.y * e + q.x), R = 4 * ((q.y + q.height) * e + q.x), z = N, X = 4 * Nt;
    q.interlaced === !0 && (X += 4 * e * 7);
    for (var Q = 8, st = 0, gt = ut.length; st < gt; ++st) {
      var mt = ut[st];
      if (ft === 0 && (ft = ct, (z += X) >= R && (X = 4 * Nt + 4 * e * (Q - 1), z = N + (ct + Nt) * (Q << 1), Q >>= 1)), mt === et) z += 4;
      else {
        var yt = n[ot + 3 * mt], Ct = n[ot + 3 * mt + 1], It = n[ot + 3 * mt + 2];
        D[z++] = It, D[z++] = Ct, D[z++] = yt, D[z++] = 255;
      }
      --ft;
    }
  }, this.decodeAndBlitFrameRGBA = function(F, D) {
    var q = this.frameInfo(F), it = q.width * q.height;
    if (it > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
    var ut = new Uint8Array(it);
    Zu(n, q.data_offset, ut, it);
    var ot = q.palette_offset, et = q.transparent_index;
    et === null && (et = 256);
    var ct = q.width, Nt = e - ct, ft = ct, N = 4 * (q.y * e + q.x), R = 4 * ((q.y + q.height) * e + q.x), z = N, X = 4 * Nt;
    q.interlaced === !0 && (X += 4 * e * 7);
    for (var Q = 8, st = 0, gt = ut.length; st < gt; ++st) {
      var mt = ut[st];
      if (ft === 0 && (ft = ct, (z += X) >= R && (X = 4 * Nt + 4 * e * (Q - 1), z = N + (ct + Nt) * (Q << 1), Q >>= 1)), mt === et) z += 4;
      else {
        var yt = n[ot + 3 * mt], Ct = n[ot + 3 * mt + 1], It = n[ot + 3 * mt + 2];
        D[z++] = yt, D[z++] = Ct, D[z++] = It, D[z++] = 255;
      }
      --ft;
    }
  };
}
function Zu(n, t, e, i) {
  for (var r = n[t++], s = 1 << r, u = s + 1, a = u + 1, l = r + 1, c = (1 << l) - 1, d = 0, y = 0, A = 0, g = n[t++], B = new Int32Array(4096), O = null; ; ) {
    for (; d < 16 && g !== 0; ) y |= n[t++] << d, d += 8, g === 1 ? g = n[t++] : --g;
    if (d < l) break;
    var V = y & c;
    if (y >>= l, d -= l, V !== s) {
      if (V === u) break;
      for (var k = V < a ? V : O, J = 0, Z = k; Z > s; ) Z = B[Z] >> 8, ++J;
      var Y = Z;
      if (A + J + (k !== V ? 1 : 0) > i) return void Ie.log("Warning, gif stream longer than expected.");
      e[A++] = Y;
      var vt = A += J;
      for (k !== V && (e[A++] = Y), Z = k; J--; ) Z = B[Z], e[--vt] = 255 & Z, Z >>= 8;
      O !== null && a < 4096 && (B[a++] = O << 8 | Y, a >= c + 1 && l < 12 && (++l, c = c << 1 | 1)), O = V;
    } else a = u + 1, c = (1 << (l = r + 1)) - 1, O = null;
  }
  return A !== i && Ie.log("Warning, gif stream shorter than expected."), e;
}
function bl(n) {
  var t, e, i, r, s, u = Math.floor, a = new Array(64), l = new Array(64), c = new Array(64), d = new Array(64), y = new Array(65535), A = new Array(65535), g = new Array(64), B = new Array(64), O = [], V = 0, k = 7, J = new Array(64), Z = new Array(64), Y = new Array(64), vt = new Array(256), Ft = new Array(2048), lt = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], M = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], H = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], v = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], F = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], D = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], q = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], it = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
  function ut(N, R) {
    for (var z = 0, X = 0, Q = new Array(), st = 1; st <= 16; st++) {
      for (var gt = 1; gt <= N[st]; gt++) Q[R[X]] = [], Q[R[X]][0] = z, Q[R[X]][1] = st, X++, z++;
      z *= 2;
    }
    return Q;
  }
  function ot(N) {
    for (var R = N[0], z = N[1] - 1; z >= 0; ) R & 1 << z && (V |= 1 << k), z--, --k < 0 && (V == 255 ? (et(255), et(0)) : et(V), k = 7, V = 0);
  }
  function et(N) {
    O.push(N);
  }
  function ct(N) {
    et(N >> 8 & 255), et(255 & N);
  }
  function Nt(N, R, z, X, Q) {
    for (var st, gt = Q[0], mt = Q[240], yt = (function(L, G) {
      var E, K, at, Rt, jt, Dt, Qt, te, Ot, Jt, qt = 0;
      for (Ot = 0; Ot < 8; ++Ot) {
        E = L[qt], K = L[qt + 1], at = L[qt + 2], Rt = L[qt + 3], jt = L[qt + 4], Dt = L[qt + 5], Qt = L[qt + 6];
        var Ne = E + (te = L[qt + 7]), me = E - te, se = K + Qt, bt = K - Qt, Se = at + Dt, Kt = at - Dt, ye = Rt + jt, ie = Rt - jt, ee = Ne + ye, ke = Ne - ye, de = se + Se, ne = se - Se;
        L[qt] = ee + de, L[qt + 4] = ee - de;
        var xe = 0.707106781 * (ne + ke);
        L[qt + 2] = ke + xe, L[qt + 6] = ke - xe;
        var ii = 0.382683433 * ((ee = ie + Kt) - (ne = bt + me)), Ve = 0.5411961 * ee + ii, Fi = 1.306562965 * ne + ii, Ui = 0.707106781 * (de = Kt + bt), re = me + Ui, yi = me - Ui;
        L[qt + 5] = yi + Ve, L[qt + 3] = yi - Ve, L[qt + 1] = re + Fi, L[qt + 7] = re - Fi, qt += 8;
      }
      for (qt = 0, Ot = 0; Ot < 8; ++Ot) {
        E = L[qt], K = L[qt + 8], at = L[qt + 16], Rt = L[qt + 24], jt = L[qt + 32], Dt = L[qt + 40], Qt = L[qt + 48];
        var an = E + (te = L[qt + 56]), Ii = E - te, Bi = K + Qt, Ue = K - Qt, ni = at + Dt, di = at - Dt, wr = Rt + jt, Qn = Rt - jt, ln = an + wr, wn = an - wr, hn = Bi + ni, un = Bi - ni;
        L[qt] = ln + hn, L[qt + 32] = ln - hn;
        var Qi = 0.707106781 * (un + wn);
        L[qt + 16] = wn + Qi, L[qt + 48] = wn - Qi;
        var xr = 0.382683433 * ((ln = Qn + di) - (un = Ue + Ii)), xn = 0.5411961 * ln + xr, _r = 1.306562965 * un + xr, $r = 0.707106781 * (hn = di + Ue), Jr = Ii + $r, Zr = Ii - $r;
        L[qt + 40] = Zr + xn, L[qt + 24] = Zr - xn, L[qt + 8] = Jr + _r, L[qt + 56] = Jr - _r, qt++;
      }
      for (Ot = 0; Ot < 64; ++Ot) Jt = L[Ot] * G[Ot], g[Ot] = Jt > 0 ? Jt + 0.5 | 0 : Jt - 0.5 | 0;
      return g;
    })(N, R), Ct = 0; Ct < 64; ++Ct) B[lt[Ct]] = yt[Ct];
    var It = B[0] - z;
    z = B[0], It == 0 ? ot(X[0]) : (ot(X[A[st = 32767 + It]]), ot(y[st]));
    for (var Bt = 63; Bt > 0 && B[Bt] == 0; ) Bt--;
    if (Bt == 0) return ot(gt), z;
    for (var Ht, I = 1; I <= Bt; ) {
      for (var Et = I; B[I] == 0 && I <= Bt; ) ++I;
      var St = I - Et;
      if (St >= 16) {
        Ht = St >> 4;
        for (var Ut = 1; Ut <= Ht; ++Ut) ot(mt);
        St &= 15;
      }
      st = 32767 + B[I], ot(Q[(St << 4) + A[st]]), ot(y[st]), I++;
    }
    return Bt != 63 && ot(gt), z;
  }
  function ft(N) {
    N = Math.min(Math.max(N, 1), 100), s != N && ((function(R) {
      for (var z = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], X = 0; X < 64; X++) {
        var Q = u((z[X] * R + 50) / 100);
        Q = Math.min(Math.max(Q, 1), 255), a[lt[X]] = Q;
      }
      for (var st = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], gt = 0; gt < 64; gt++) {
        var mt = u((st[gt] * R + 50) / 100);
        mt = Math.min(Math.max(mt, 1), 255), l[lt[gt]] = mt;
      }
      for (var yt = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], Ct = 0, It = 0; It < 8; It++) for (var Bt = 0; Bt < 8; Bt++) c[Ct] = 1 / (a[lt[Ct]] * yt[It] * yt[Bt] * 8), d[Ct] = 1 / (l[lt[Ct]] * yt[It] * yt[Bt] * 8), Ct++;
    })(N < 50 ? Math.floor(5e3 / N) : Math.floor(200 - 2 * N)), s = N);
  }
  this.encode = function(N, R) {
    R && ft(R), O = new Array(), V = 0, k = 7, ct(65496), ct(65504), ct(16), et(74), et(70), et(73), et(70), et(0), et(1), et(1), et(0), ct(1), ct(1), et(0), et(0), (function() {
      ct(65499), ct(132), et(0);
      for (var K = 0; K < 64; K++) et(a[K]);
      et(1);
      for (var at = 0; at < 64; at++) et(l[at]);
    })(), (function(K, at) {
      ct(65472), ct(17), et(8), ct(at), ct(K), et(3), et(1), et(17), et(0), et(2), et(17), et(1), et(3), et(17), et(1);
    })(N.width, N.height), (function() {
      ct(65476), ct(418), et(0);
      for (var K = 0; K < 16; K++) et(M[K + 1]);
      for (var at = 0; at <= 11; at++) et(b[at]);
      et(16);
      for (var Rt = 0; Rt < 16; Rt++) et(H[Rt + 1]);
      for (var jt = 0; jt <= 161; jt++) et(v[jt]);
      et(1);
      for (var Dt = 0; Dt < 16; Dt++) et(F[Dt + 1]);
      for (var Qt = 0; Qt <= 11; Qt++) et(D[Qt]);
      et(17);
      for (var te = 0; te < 16; te++) et(q[te + 1]);
      for (var Ot = 0; Ot <= 161; Ot++) et(it[Ot]);
    })(), ct(65498), ct(12), et(3), et(1), et(0), et(2), et(17), et(3), et(17), et(0), et(63), et(0);
    var z = 0, X = 0, Q = 0;
    V = 0, k = 7, this.encode.displayName = "_encode_";
    for (var st, gt, mt, yt, Ct, It, Bt, Ht, I, Et = N.data, St = N.width, Ut = N.height, L = 4 * St, G = 0; G < Ut; ) {
      for (st = 0; st < L; ) {
        for (Ct = L * G + st, Bt = -1, Ht = 0, I = 0; I < 64; I++) It = Ct + (Ht = I >> 3) * L + (Bt = 4 * (7 & I)), G + Ht >= Ut && (It -= L * (G + 1 + Ht - Ut)), st + Bt >= L && (It -= st + Bt - L + 4), gt = Et[It++], mt = Et[It++], yt = Et[It++], J[I] = (Ft[gt] + Ft[mt + 256 | 0] + Ft[yt + 512 | 0] >> 16) - 128, Z[I] = (Ft[gt + 768 | 0] + Ft[mt + 1024 | 0] + Ft[yt + 1280 | 0] >> 16) - 128, Y[I] = (Ft[gt + 1280 | 0] + Ft[mt + 1536 | 0] + Ft[yt + 1792 | 0] >> 16) - 128;
        z = Nt(J, c, z, t, i), X = Nt(Z, d, X, e, r), Q = Nt(Y, d, Q, e, r), st += 32;
      }
      G += 8;
    }
    if (k >= 0) {
      var E = [];
      E[1] = k + 1, E[0] = (1 << k + 1) - 1, ot(E);
    }
    return ct(65497), new Uint8Array(O);
  }, n = n || 50, (function() {
    for (var N = String.fromCharCode, R = 0; R < 256; R++) vt[R] = N(R);
  })(), t = ut(M, b), e = ut(F, D), i = ut(H, v), r = ut(q, it), (function() {
    for (var N = 1, R = 2, z = 1; z <= 15; z++) {
      for (var X = N; X < R; X++) A[32767 + X] = z, y[32767 + X] = [], y[32767 + X][1] = z, y[32767 + X][0] = X;
      for (var Q = -(R - 1); Q <= -N; Q++) A[32767 + Q] = z, y[32767 + Q] = [], y[32767 + Q][1] = z, y[32767 + Q][0] = R - 1 + Q;
      N <<= 1, R <<= 1;
    }
  })(), (function() {
    for (var N = 0; N < 256; N++) Ft[N] = 19595 * N, Ft[N + 256 | 0] = 38470 * N, Ft[N + 512 | 0] = 7471 * N + 32768, Ft[N + 768 | 0] = -11059 * N, Ft[N + 1024 | 0] = -21709 * N, Ft[N + 1280 | 0] = 32768 * N + 8421375, Ft[N + 1536 | 0] = -27439 * N, Ft[N + 1792 | 0] = -5329 * N;
  })(), ft(n);
}
function gn(n, t) {
  if (this.pos = 0, this.buffer = n, this.datav = new DataView(n.buffer), this.is_with_alpha = !!t, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag) === -1) throw new Error("Invalid BMP File");
  this.parseHeader(), this.parseBGR();
}
function Qu(n) {
  function t(b) {
    if (!b) throw Error("assert :P");
  }
  function e(b, H, v) {
    for (var F = 0; 4 > F; F++) if (b[H + F] != v.charCodeAt(F)) return !0;
    return !1;
  }
  function i(b, H, v, F, D) {
    for (var q = 0; q < D; q++) b[H + q] = v[F + q];
  }
  function r(b, H, v, F) {
    for (var D = 0; D < F; D++) b[H + D] = v;
  }
  function s(b) {
    return new Int32Array(b);
  }
  function u(b, H) {
    for (var v = [], F = 0; F < b; F++) v.push(new H());
    return v;
  }
  function a(b, H) {
    var v = [];
    return (function F(D, q, it) {
      for (var ut = it[q], ot = 0; ot < ut && (D.push(it.length > q + 1 ? [] : new H()), !(it.length < q + 1)); ot++) F(D[ot], q + 1, it);
    })(v, 0, b), v;
  }
  var l = function() {
    var b = this;
    function H(o, h) {
      for (var p = 1 << h - 1 >>> 0; o & p; ) p >>>= 1;
      return p ? (o & p - 1) + p : o;
    }
    function v(o, h, p, m, x) {
      t(!(m % p));
      do
        o[h + (m -= p)] = x;
      while (0 < m);
    }
    function F(o, h, p, m, x) {
      if (t(2328 >= x), 512 >= x) var S = s(512);
      else if ((S = s(x)) == null) return 0;
      return (function(P, T, C, W, tt, pt) {
        var U, nt, ht = T, xt = 1 << C, dt = s(16), _t = s(16);
        for (t(tt != 0), t(W != null), t(P != null), t(0 < C), nt = 0; nt < tt; ++nt) {
          if (15 < W[nt]) return 0;
          ++dt[W[nt]];
        }
        if (dt[0] == tt) return 0;
        for (_t[1] = 0, U = 1; 15 > U; ++U) {
          if (dt[U] > 1 << U) return 0;
          _t[U + 1] = _t[U] + dt[U];
        }
        for (nt = 0; nt < tt; ++nt) U = W[nt], 0 < W[nt] && (pt[_t[U]++] = nt);
        if (_t[15] == 1) return (W = new D()).g = 0, W.value = pt[0], v(P, ht, 1, xt, W), xt;
        var At, kt = -1, Tt = xt - 1, Zt = 0, Wt = 1, pe = 1, Xt = 1 << C;
        for (nt = 0, U = 1, tt = 2; U <= C; ++U, tt <<= 1) {
          if (Wt += pe <<= 1, 0 > (pe -= dt[U])) return 0;
          for (; 0 < dt[U]; --dt[U]) (W = new D()).g = U, W.value = pt[nt++], v(P, ht + Zt, tt, Xt, W), Zt = H(Zt, U);
        }
        for (U = C + 1, tt = 2; 15 >= U; ++U, tt <<= 1) {
          if (Wt += pe <<= 1, 0 > (pe -= dt[U])) return 0;
          for (; 0 < dt[U]; --dt[U]) {
            if (W = new D(), (Zt & Tt) != kt) {
              for (ht += Xt, At = 1 << (kt = U) - C; 15 > kt && !(0 >= (At -= dt[kt])); ) ++kt, At <<= 1;
              xt += Xt = 1 << (At = kt - C), P[T + (kt = Zt & Tt)].g = At + C, P[T + kt].value = ht - T - kt;
            }
            W.g = U - C, W.value = pt[nt++], v(P, ht + (Zt >> C), tt, Xt, W), Zt = H(Zt, U);
          }
        }
        return Wt != 2 * _t[15] - 1 ? 0 : xt;
      })(o, h, p, m, x, S);
    }
    function D() {
      this.value = this.g = 0;
    }
    function q() {
      this.value = this.g = 0;
    }
    function it() {
      this.G = u(5, D), this.H = s(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = u(cs, q);
    }
    function ut(o, h, p, m) {
      t(o != null), t(h != null), t(2147483648 > m), o.Ca = 254, o.I = 0, o.b = -8, o.Ka = 0, o.oa = h, o.pa = p, o.Jd = h, o.Yc = p + m, o.Zc = 4 <= m ? p + m - 4 + 1 : p, gt(o);
    }
    function ot(o, h) {
      for (var p = 0; 0 < h--; ) p |= yt(o, 128) << h;
      return p;
    }
    function et(o, h) {
      var p = ot(o, h);
      return mt(o) ? -p : p;
    }
    function ct(o, h, p, m) {
      var x, S = 0;
      for (t(o != null), t(h != null), t(4294967288 > m), o.Sb = m, o.Ra = 0, o.u = 0, o.h = 0, 4 < m && (m = 4), x = 0; x < m; ++x) S += h[p + x] << 8 * x;
      o.Ra = S, o.bb = m, o.oa = h, o.pa = p;
    }
    function Nt(o) {
      for (; 8 <= o.u && o.bb < o.Sb; ) o.Ra >>>= 8, o.Ra += o.oa[o.pa + o.bb] << Ti - 8 >>> 0, ++o.bb, o.u -= 8;
      X(o) && (o.h = 1, o.u = 0);
    }
    function ft(o, h) {
      if (t(0 <= h), !o.h && h <= Ks) {
        var p = z(o) & Rr[h];
        return o.u += h, Nt(o), p;
      }
      return o.h = 1, o.u = 0;
    }
    function N() {
      this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
    }
    function R() {
      this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
    }
    function z(o) {
      return o.Ra >>> (o.u & Ti - 1) >>> 0;
    }
    function X(o) {
      return t(o.bb <= o.Sb), o.h || o.bb == o.Sb && o.u > Ti;
    }
    function Q(o, h) {
      o.u = h, o.h = X(o);
    }
    function st(o) {
      o.u >= Oi && (t(o.u >= Oi), Nt(o));
    }
    function gt(o) {
      t(o != null && o.oa != null), o.pa < o.Zc ? (o.I = (o.oa[o.pa++] | o.I << 8) >>> 0, o.b += 8) : (t(o != null && o.oa != null), o.pa < o.Yc ? (o.b += 8, o.I = o.oa[o.pa++] | o.I << 8) : o.Ka ? o.b = 0 : (o.I <<= 8, o.b += 8, o.Ka = 1));
    }
    function mt(o) {
      return ot(o, 1);
    }
    function yt(o, h) {
      var p = o.Ca;
      0 > o.b && gt(o);
      var m = o.b, x = p * h >>> 8, S = (o.I >>> m > x) + 0;
      for (S ? (p -= x, o.I -= x + 1 << m >>> 0) : p = x + 1, m = p, x = 0; 256 <= m; ) x += 8, m >>= 8;
      return m = 7 ^ x + fs[m], o.b -= m, o.Ca = (p << m) - 1, S;
    }
    function Ct(o, h, p) {
      o[h + 0] = p >> 24 & 255, o[h + 1] = p >> 16 & 255, o[h + 2] = p >> 8 & 255, o[h + 3] = 255 & p;
    }
    function It(o, h) {
      return o[h + 0] | o[h + 1] << 8;
    }
    function Bt(o, h) {
      return It(o, h) | o[h + 2] << 16;
    }
    function Ht(o, h) {
      return It(o, h) | It(o, h + 2) << 16;
    }
    function I(o, h) {
      var p = 1 << h;
      return t(o != null), t(0 < h), o.X = s(p), o.X == null ? 0 : (o.Mb = 32 - h, o.Xa = h, 1);
    }
    function Et(o, h) {
      t(o != null), t(h != null), t(o.Xa == h.Xa), i(h.X, 0, o.X, 0, 1 << h.Xa);
    }
    function St() {
      this.X = [], this.Xa = this.Mb = 0;
    }
    function Ut(o, h, p, m) {
      t(p != null), t(m != null);
      var x = p[0], S = m[0];
      return x == 0 && (x = (o * S + h / 2) / h), S == 0 && (S = (h * x + o / 2) / o), 0 >= x || 0 >= S ? 0 : (p[0] = x, m[0] = S, 1);
    }
    function L(o, h) {
      return o + (1 << h) - 1 >>> h;
    }
    function G(o, h) {
      return ((4278255360 & o) + (4278255360 & h) >>> 0 & 4278255360) + ((16711935 & o) + (16711935 & h) >>> 0 & 16711935) >>> 0;
    }
    function E(o, h) {
      b[h] = function(p, m, x, S, P, T, C) {
        var W;
        for (W = 0; W < P; ++W) {
          var tt = b[o](T[C + W - 1], x, S + W);
          T[C + W] = G(p[m + W], tt);
        }
      };
    }
    function K() {
      this.ud = this.hd = this.jd = 0;
    }
    function at(o, h) {
      return ((4278124286 & (o ^ h)) >>> 1) + (o & h) >>> 0;
    }
    function Rt(o) {
      return 0 <= o && 256 > o ? o : 0 > o ? 0 : 255 < o ? 255 : void 0;
    }
    function jt(o, h) {
      return Rt(o + (o - h + 0.5 >> 1));
    }
    function Dt(o, h, p) {
      return Math.abs(h - p) - Math.abs(o - p);
    }
    function Qt(o, h, p, m, x, S, P) {
      for (m = S[P - 1], p = 0; p < x; ++p) S[P + p] = m = G(o[h + p], m);
    }
    function te(o, h, p, m, x) {
      var S;
      for (S = 0; S < p; ++S) {
        var P = o[h + S], T = P >> 8 & 255, C = 16711935 & (C = (C = 16711935 & P) + ((T << 16) + T));
        m[x + S] = (4278255360 & P) + C >>> 0;
      }
    }
    function Ot(o, h) {
      h.jd = 255 & o, h.hd = o >> 8 & 255, h.ud = o >> 16 & 255;
    }
    function Jt(o, h, p, m, x, S) {
      var P;
      for (P = 0; P < m; ++P) {
        var T = h[p + P], C = T >>> 8, W = T, tt = 255 & (tt = (tt = T >>> 16) + ((o.jd << 24 >> 24) * (C << 24 >> 24) >>> 5));
        W = 255 & (W = (W += (o.hd << 24 >> 24) * (C << 24 >> 24) >>> 5) + ((o.ud << 24 >> 24) * (tt << 24 >> 24) >>> 5)), x[S + P] = (4278255360 & T) + (tt << 16) + W;
      }
    }
    function qt(o, h, p, m, x) {
      b[h] = function(S, P, T, C, W, tt, pt, U, nt) {
        for (C = pt; C < U; ++C) for (pt = 0; pt < nt; ++pt) W[tt++] = x(T[m(S[P++])]);
      }, b[o] = function(S, P, T, C, W, tt, pt) {
        var U = 8 >> S.b, nt = S.Ea, ht = S.K[0], xt = S.w;
        if (8 > U) for (S = (1 << S.b) - 1, xt = (1 << U) - 1; P < T; ++P) {
          var dt, _t = 0;
          for (dt = 0; dt < nt; ++dt) dt & S || (_t = m(C[W++])), tt[pt++] = x(ht[_t & xt]), _t >>= U;
        }
        else b["VP8LMapColor" + p](C, W, ht, xt, tt, pt, P, T, nt);
      };
    }
    function Ne(o, h, p, m, x) {
      for (p = h + p; h < p; ) {
        var S = o[h++];
        m[x++] = S >> 16 & 255, m[x++] = S >> 8 & 255, m[x++] = 255 & S;
      }
    }
    function me(o, h, p, m, x) {
      for (p = h + p; h < p; ) {
        var S = o[h++];
        m[x++] = S >> 16 & 255, m[x++] = S >> 8 & 255, m[x++] = 255 & S, m[x++] = S >> 24 & 255;
      }
    }
    function se(o, h, p, m, x) {
      for (p = h + p; h < p; ) {
        var S = (P = o[h++]) >> 16 & 240 | P >> 12 & 15, P = 240 & P | P >> 28 & 15;
        m[x++] = S, m[x++] = P;
      }
    }
    function bt(o, h, p, m, x) {
      for (p = h + p; h < p; ) {
        var S = (P = o[h++]) >> 16 & 248 | P >> 13 & 7, P = P >> 5 & 224 | P >> 3 & 31;
        m[x++] = S, m[x++] = P;
      }
    }
    function Se(o, h, p, m, x) {
      for (p = h + p; h < p; ) {
        var S = o[h++];
        m[x++] = 255 & S, m[x++] = S >> 8 & 255, m[x++] = S >> 16 & 255;
      }
    }
    function Kt(o, h, p, m, x, S) {
      if (S == 0) for (p = h + p; h < p; ) Ct(m, ((S = o[h++])[0] >> 24 | S[1] >> 8 & 65280 | S[2] << 8 & 16711680 | S[3] << 24) >>> 0), x += 32;
      else i(m, x, o, h, p);
    }
    function ye(o, h) {
      b[h][0] = b[o + "0"], b[h][1] = b[o + "1"], b[h][2] = b[o + "2"], b[h][3] = b[o + "3"], b[h][4] = b[o + "4"], b[h][5] = b[o + "5"], b[h][6] = b[o + "6"], b[h][7] = b[o + "7"], b[h][8] = b[o + "8"], b[h][9] = b[o + "9"], b[h][10] = b[o + "10"], b[h][11] = b[o + "11"], b[h][12] = b[o + "12"], b[h][13] = b[o + "13"], b[h][14] = b[o + "0"], b[h][15] = b[o + "0"];
    }
    function ie(o) {
      return o == qa || o == ja || o == Mo || o == Wa;
    }
    function ee() {
      this.eb = [], this.size = this.A = this.fb = 0;
    }
    function ke() {
      this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
    }
    function de() {
      this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new ee(), this.f.kb = new ke(), this.sd = null;
    }
    function ne() {
      this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
    }
    function xe() {
      this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
    }
    function ii(o) {
      return alert("todo:WebPSamplerProcessPlane"), o.T;
    }
    function Ve(o, h) {
      var p = o.T, m = h.ba.f.RGBA, x = m.eb, S = m.fb + o.ka * m.A, P = rn[h.ba.S], T = o.y, C = o.O, W = o.f, tt = o.N, pt = o.ea, U = o.W, nt = h.cc, ht = h.dc, xt = h.Mc, dt = h.Nc, _t = o.ka, At = o.ka + o.T, kt = o.U, Tt = kt + 1 >> 1;
      for (_t == 0 ? P(T, C, null, null, W, tt, pt, U, W, tt, pt, U, x, S, null, null, kt) : (P(h.ec, h.fc, T, C, nt, ht, xt, dt, W, tt, pt, U, x, S - m.A, x, S, kt), ++p); _t + 2 < At; _t += 2) nt = W, ht = tt, xt = pt, dt = U, tt += o.Rc, U += o.Rc, S += 2 * m.A, P(T, (C += 2 * o.fa) - o.fa, T, C, nt, ht, xt, dt, W, tt, pt, U, x, S - m.A, x, S, kt);
      return C += o.fa, o.j + At < o.o ? (i(h.ec, h.fc, T, C, kt), i(h.cc, h.dc, W, tt, Tt), i(h.Mc, h.Nc, pt, U, Tt), p--) : 1 & At || P(T, C, null, null, W, tt, pt, U, W, tt, pt, U, x, S + m.A, null, null, kt), p;
    }
    function Fi(o, h, p) {
      var m = o.F, x = [o.J];
      if (m != null) {
        var S = o.U, P = h.ba.S, T = P == Oo || P == Mo;
        h = h.ba.f.RGBA;
        var C = [0], W = o.ka;
        C[0] = o.T, o.Kb && (W == 0 ? --C[0] : (--W, x[0] -= o.width), o.j + o.ka + o.T == o.o && (C[0] = o.o - o.j - W));
        var tt = h.eb;
        W = h.fb + W * h.A, o = ch(m, x[0], o.width, S, C, tt, W + (T ? 0 : 3), h.A), t(p == C), o && ie(P) && Zs(tt, W, T, S, C, h.A);
      }
      return 0;
    }
    function Ui(o) {
      var h = o.ma, p = h.ba.S, m = 11 > p, x = p == Io || p == Bo || p == Oo || p == Da || p == 12 || ie(p);
      if (h.memory = null, h.Ib = null, h.Jb = null, h.Nd = null, !en(h.Oa, o, x ? 11 : 12)) return 0;
      if (x && ie(p) && jn(), o.da) alert("todo:use_scaling");
      else {
        if (m) {
          if (h.Ib = ii, o.Kb) {
            if (p = o.U + 1 >> 1, h.memory = s(o.U + 2 * p), h.memory == null) return 0;
            h.ec = h.memory, h.fc = 0, h.cc = h.ec, h.dc = h.fc + o.U, h.Mc = h.cc, h.Nc = h.dc + p, h.Ib = Ve, jn();
          }
        } else alert("todo:EmitYUV");
        x && (h.Jb = Fi, m && Ge());
      }
      if (m && !Fh) {
        for (o = 0; 256 > o; ++o) bf[o] = 89858 * (o - 128) + qo >> Do, _f[o] = -22014 * (o - 128) + qo, xf[o] = -45773 * (o - 128), wf[o] = 113618 * (o - 128) + qo >> Do;
        for (o = to; o < Ha; ++o) h = 76283 * (o - 16) + qo >> Do, Af[o - to] = _n(h, 255), Lf[o - to] = _n(h + 8 >> 4, 15);
        Fh = 1;
      }
      return 1;
    }
    function re(o) {
      var h = o.ma, p = o.U, m = o.T;
      return t(!(1 & o.ka)), 0 >= p || 0 >= m ? 0 : (p = h.Ib(o, h), h.Jb != null && h.Jb(o, h, p), h.Dc += p, 1);
    }
    function yi(o) {
      o.ma.memory = null;
    }
    function an(o, h, p, m) {
      return ft(o, 8) != 47 ? 0 : (h[0] = ft(o, 14) + 1, p[0] = ft(o, 14) + 1, m[0] = ft(o, 1), ft(o, 3) != 0 ? 0 : !o.h);
    }
    function Ii(o, h) {
      if (4 > o) return o + 1;
      var p = o - 2 >> 1;
      return (2 + (1 & o) << p) + ft(h, p) + 1;
    }
    function Bi(o, h) {
      return 120 < h ? h - 120 : 1 <= (p = ((p = sf[h - 1]) >> 4) * o + (8 - (15 & p))) ? p : 1;
      var p;
    }
    function Ue(o, h, p) {
      var m = z(p), x = o[h += 255 & m].g - 8;
      return 0 < x && (Q(p, p.u + 8), m = z(p), h += o[h].value, h += m & (1 << x) - 1), Q(p, p.u + o[h].g), o[h].value;
    }
    function ni(o, h, p) {
      return p.g += o.g, p.value += o.value << h >>> 0, t(8 >= p.g), o.g;
    }
    function di(o, h, p) {
      var m = o.xc;
      return t((h = m == 0 ? 0 : o.vc[o.md * (p >> m) + (h >> m)]) < o.Wb), o.Ya[h];
    }
    function wr(o, h, p, m) {
      var x = o.ab, S = o.c * h, P = o.C;
      h = P + h;
      var T = p, C = m;
      for (m = o.Ta, p = o.Ua; 0 < x--; ) {
        var W = o.gc[x], tt = P, pt = h, U = T, nt = C, ht = (C = m, T = p, W.Ea);
        switch (t(tt < pt), t(pt <= W.nc), W.hc) {
          case 2:
            ds(U, nt, (pt - tt) * ht, C, T);
            break;
          case 0:
            var xt = tt, dt = pt, _t = C, At = T, kt = (Xt = W).Ea;
            xt == 0 && (rr(U, nt, null, null, 1, _t, At), Qt(U, nt + 1, 0, 0, kt - 1, _t, At + 1), nt += kt, At += kt, ++xt);
            for (var Tt = 1 << Xt.b, Zt = Tt - 1, Wt = L(kt, Xt.b), pe = Xt.K, Xt = Xt.w + (xt >> Xt.b) * Wt; xt < dt; ) {
              var we = pe, li = Xt, ge = 1;
              for (sr(U, nt, _t, At - kt, 1, _t, At); ge < kt; ) {
                var $t = (ge & ~Zt) + Tt;
                $t > kt && ($t = kt), (0, cn[we[li++] >> 8 & 15])(U, nt + +ge, _t, At + ge - kt, $t - ge, _t, At + ge), ge = $t;
              }
              nt += kt, At += kt, ++xt & Zt || (Xt += Wt);
            }
            pt != W.nc && i(C, T - ht, C, T + (pt - tt - 1) * ht, ht);
            break;
          case 1:
            for (ht = U, dt = nt, kt = (U = W.Ea) - (At = U & ~(_t = (nt = 1 << W.b) - 1)), xt = L(U, W.b), Tt = W.K, W = W.w + (tt >> W.b) * xt; tt < pt; ) {
              for (Zt = Tt, Wt = W, pe = new K(), Xt = dt + At, we = dt + U; dt < Xt; ) Ot(Zt[Wt++], pe), Ir(pe, ht, dt, nt, C, T), dt += nt, T += nt;
              dt < we && (Ot(Zt[Wt++], pe), Ir(pe, ht, dt, kt, C, T), dt += kt, T += kt), ++tt & _t || (W += xt);
            }
            break;
          case 3:
            if (U == C && nt == T && 0 < W.b) {
              for (dt = C, U = ht = T + (pt - tt) * ht - (At = (pt - tt) * L(W.Ea, W.b)), nt = C, _t = T, xt = [], At = (kt = At) - 1; 0 <= At; --At) xt[At] = nt[_t + At];
              for (At = kt - 1; 0 <= At; --At) dt[U + At] = xt[At];
              Er(W, tt, pt, C, ht, C, T);
            } else Er(W, tt, pt, U, nt, C, T);
        }
        T = m, C = p;
      }
      C != p && i(m, p, T, C, S);
    }
    function Qn(o, h) {
      var p = o.V, m = o.Ba + o.c * o.C, x = h - o.C;
      if (t(h <= o.l.o), t(16 >= x), 0 < x) {
        var S = o.l, P = o.Ta, T = o.Ua, C = S.width;
        if (wr(o, x, p, m), x = T = [T], t((p = o.C) < (m = h)), t(S.v < S.va), m > S.o && (m = S.o), p < S.j) {
          var W = S.j - p;
          p = S.j, x[0] += W * C;
        }
        if (p >= m ? p = 0 : (x[0] += 4 * S.v, S.ka = p - S.j, S.U = S.va - S.v, S.T = m - p, p = 1), p) {
          if (T = T[0], 11 > (p = o.ca).S) {
            var tt = p.f.RGBA, pt = (m = p.S, x = S.U, S = S.T, W = tt.eb, tt.A), U = S;
            for (tt = tt.fb + o.Ma * tt.A; 0 < U--; ) {
              var nt = P, ht = T, xt = x, dt = W, _t = tt;
              switch (m) {
                case Eo:
                  Xs(nt, ht, xt, dt, _t);
                  break;
                case Io:
                  $s(nt, ht, xt, dt, _t);
                  break;
                case qa:
                  $s(nt, ht, xt, dt, _t), Zs(dt, _t, 0, xt, 1, 0);
                  break;
                case yh:
                  Or(nt, ht, xt, dt, _t);
                  break;
                case Bo:
                  Kt(nt, ht, xt, dt, _t, 1);
                  break;
                case ja:
                  Kt(nt, ht, xt, dt, _t, 1), Zs(dt, _t, 0, xt, 1, 0);
                  break;
                case Oo:
                  Kt(nt, ht, xt, dt, _t, 0);
                  break;
                case Mo:
                  Kt(nt, ht, xt, dt, _t, 0), Zs(dt, _t, 1, xt, 1, 0);
                  break;
                case Da:
                  ps(nt, ht, xt, dt, _t);
                  break;
                case Wa:
                  ps(nt, ht, xt, dt, _t), uh(dt, _t, xt, 1, 0);
                  break;
                case bh:
                  Br(nt, ht, xt, dt, _t);
                  break;
                default:
                  t(0);
              }
              T += C, tt += pt;
            }
            o.Ma += S;
          } else alert("todo:EmitRescaledRowsYUVA");
          t(o.Ma <= p.height);
        }
      }
      o.C = h, t(o.C <= o.i);
    }
    function ln(o) {
      var h;
      if (0 < o.ua) return 0;
      for (h = 0; h < o.Wb; ++h) {
        var p = o.Ya[h].G, m = o.Ya[h].H;
        if (0 < p[1][m[1] + 0].g || 0 < p[2][m[2] + 0].g || 0 < p[3][m[3] + 0].g) return 0;
      }
      return 1;
    }
    function wn(o, h, p, m, x, S) {
      if (o.Z != 0) {
        var P = o.qd, T = o.rd;
        for (t(hr[o.Z] != null); h < p; ++h) hr[o.Z](P, T, m, x, m, x, S), P = m, T = x, x += S;
        o.qd = P, o.rd = T;
      }
    }
    function hn(o, h) {
      var p = o.l.ma, m = p.Z == 0 || p.Z == 1 ? o.l.j : o.C;
      if (m = o.C < m ? m : o.C, t(h <= o.l.o), h > m) {
        var x = o.l.width, S = p.ca, P = p.tb + x * m, T = o.V, C = o.Ba + o.c * m, W = o.gc;
        t(o.ab == 1), t(W[0].hc == 3), Oa(W[0], m, h, T, C, S, P), wn(p, m, h, S, P, x);
      }
      o.C = o.Ma = h;
    }
    function un(o, h, p, m, x, S, P) {
      var T = o.$ / m, C = o.$ % m, W = o.m, tt = o.s, pt = p + o.$, U = pt;
      x = p + m * x;
      var nt = p + m * S, ht = 280 + tt.ua, xt = o.Pb ? T : 16777216, dt = 0 < tt.ua ? tt.Wa : null, _t = tt.wc, At = pt < nt ? di(tt, C, T) : null;
      t(o.C < S), t(nt <= x);
      var kt = !1;
      t: for (; ; ) {
        for (; kt || pt < nt; ) {
          var Tt = 0;
          if (T >= xt) {
            var Zt = pt - p;
            t((xt = o).Pb), xt.wd = xt.m, xt.xd = Zt, 0 < xt.s.ua && Et(xt.s.Wa, xt.s.vb), xt = T + af;
          }
          if (C & _t || (At = di(tt, C, T)), t(At != null), At.Qb && (h[pt] = At.qb, kt = !0), !kt) if (st(W), At.jc) {
            Tt = W, Zt = h;
            var Wt = pt, pe = At.pd[z(Tt) & cs - 1];
            t(At.jc), 256 > pe.g ? (Q(Tt, Tt.u + pe.g), Zt[Wt] = pe.value, Tt = 0) : (Q(Tt, Tt.u + pe.g - 256), t(256 <= pe.value), Tt = pe.value), Tt == 0 && (kt = !0);
          } else Tt = Ue(At.G[0], At.H[0], W);
          if (W.h) break;
          if (kt || 256 > Tt) {
            if (!kt) if (At.nd) h[pt] = (At.qb | Tt << 8) >>> 0;
            else {
              if (st(W), kt = Ue(At.G[1], At.H[1], W), st(W), Zt = Ue(At.G[2], At.H[2], W), Wt = Ue(At.G[3], At.H[3], W), W.h) break;
              h[pt] = (Wt << 24 | kt << 16 | Tt << 8 | Zt) >>> 0;
            }
            if (kt = !1, ++pt, ++C >= m && (C = 0, ++T, P != null && T <= S && !(T % 16) && P(o, T), dt != null)) for (; U < pt; ) Tt = h[U++], dt.X[(506832829 * Tt & 4294967295) >>> dt.Mb] = Tt;
          } else if (280 > Tt) {
            if (Tt = Ii(Tt - 256, W), Zt = Ue(At.G[4], At.H[4], W), st(W), Zt = Bi(m, Zt = Ii(Zt, W)), W.h) break;
            if (pt - p < Zt || x - pt < Tt) break t;
            for (Wt = 0; Wt < Tt; ++Wt) h[pt + Wt] = h[pt + Wt - Zt];
            for (pt += Tt, C += Tt; C >= m; ) C -= m, ++T, P != null && T <= S && !(T % 16) && P(o, T);
            if (t(pt <= x), C & _t && (At = di(tt, C, T)), dt != null) for (; U < pt; ) Tt = h[U++], dt.X[(506832829 * Tt & 4294967295) >>> dt.Mb] = Tt;
          } else {
            if (!(Tt < ht)) break t;
            for (kt = Tt - 280, t(dt != null); U < pt; ) Tt = h[U++], dt.X[(506832829 * Tt & 4294967295) >>> dt.Mb] = Tt;
            Tt = pt, t(!(kt >>> (Zt = dt).Xa)), h[Tt] = Zt.X[kt], kt = !0;
          }
          kt || t(W.h == X(W));
        }
        if (o.Pb && W.h && pt < x) t(o.m.h), o.a = 5, o.m = o.wd, o.$ = o.xd, 0 < o.s.ua && Et(o.s.vb, o.s.Wa);
        else {
          if (W.h) break t;
          P?.(o, T > S ? S : T), o.a = 0, o.$ = pt - p;
        }
        return 1;
      }
      return o.a = 3, 0;
    }
    function Qi(o) {
      t(o != null), o.vc = null, o.yc = null, o.Ya = null;
      var h = o.Wa;
      h != null && (h.X = null), o.vb = null, t(o != null);
    }
    function xr() {
      var o = new Yt();
      return o == null ? null : (o.a = 0, o.xb = _h, ye("Predictor", "VP8LPredictors"), ye("Predictor", "VP8LPredictors_C"), ye("PredictorAdd", "VP8LPredictorsAdd"), ye("PredictorAdd", "VP8LPredictorsAdd_C"), ds = te, Ir = Jt, Xs = Ne, $s = me, ps = se, Br = bt, Or = Se, b.VP8LMapColor32b = oi, b.VP8LMapColor8b = Fn, o);
    }
    function xn(o, h, p, m, x) {
      var S = 1, P = [o], T = [h], C = m.m, W = m.s, tt = null, pt = 0;
      t: for (; ; ) {
        if (p) for (; S && ft(C, 1); ) {
          var U = P, nt = T, ht = m, xt = 1, dt = ht.m, _t = ht.gc[ht.ab], At = ft(dt, 2);
          if (ht.Oc & 1 << At) S = 0;
          else {
            switch (ht.Oc |= 1 << At, _t.hc = At, _t.Ea = U[0], _t.nc = nt[0], _t.K = [null], ++ht.ab, t(4 >= ht.ab), At) {
              case 0:
              case 1:
                _t.b = ft(dt, 3) + 2, xt = xn(L(_t.Ea, _t.b), L(_t.nc, _t.b), 0, ht, _t.K), _t.K = _t.K[0];
                break;
              case 3:
                var kt, Tt = ft(dt, 8) + 1, Zt = 16 < Tt ? 0 : 4 < Tt ? 1 : 2 < Tt ? 2 : 3;
                if (U[0] = L(_t.Ea, Zt), _t.b = Zt, kt = xt = xn(Tt, 1, 0, ht, _t.K)) {
                  var Wt, pe = Tt, Xt = _t, we = 1 << (8 >> Xt.b), li = s(we);
                  if (li == null) kt = 0;
                  else {
                    var ge = Xt.K[0], $t = Xt.w;
                    for (li[0] = Xt.K[0][0], Wt = 1; Wt < 1 * pe; ++Wt) li[Wt] = G(ge[$t + Wt], li[Wt - 1]);
                    for (; Wt < 4 * we; ++Wt) li[Wt] = 0;
                    Xt.K[0] = null, Xt.K[0] = li, kt = 1;
                  }
                }
                xt = kt;
                break;
              case 2:
                break;
              default:
                t(0);
            }
            S = xt;
          }
        }
        if (P = P[0], T = T[0], S && ft(C, 1) && !(S = 1 <= (pt = ft(C, 4)) && 11 >= pt)) {
          m.a = 3;
          break t;
        }
        var Mt;
        if (Mt = S) e: {
          var Je, ce, Ae, qe = m, gi = P, Ci = T, Ye = pt, _i = p, ki = qe.m, hi = qe.s, Le = [null], Fe = 1, Ke = 0, Pe = of[Ye];
          i: for (; ; ) {
            if (_i && ft(ki, 1)) {
              var mi = ft(ki, 3) + 2, dn = L(gi, mi), Ze = L(Ci, mi), Mi = dn * Ze;
              if (!xn(dn, Ze, 0, qe, Le)) break i;
              for (Le = Le[0], hi.xc = mi, Je = 0; Je < Mi; ++Je) {
                var Ee = Le[Je] >> 8 & 65535;
                Le[Je] = Ee, Ee >= Fe && (Fe = Ee + 1);
              }
            }
            if (ki.h) break i;
            for (ce = 0; 5 > ce; ++ce) {
              var ui = wh[ce];
              !ce && 0 < Ye && (ui += 1 << Ye), Ke < ui && (Ke = ui);
            }
            var Gi = u(Fe * Pe, D), Ri = Fe, Vi = u(Ri, it);
            if (Vi == null) var Yi = null;
            else t(65536 >= Ri), Yi = Vi;
            var Di = s(Ke);
            if (Yi == null || Di == null || Gi == null) {
              qe.a = 1;
              break i;
            }
            var Ki = Gi;
            for (Je = Ae = 0; Je < Fe; ++Je) {
              var Me = Yi[Je], Xi = Me.G, pn = Me.H, Mr = 0, Hn = 1, vi = 0;
              for (ce = 0; 5 > ce; ++ce) {
                ui = wh[ce], Xi[ce] = Ki, pn[ce] = Ae, !ce && 0 < Ye && (ui += 1 << Ye);
                r: {
                  var Wo, Ga = ui, Uo = qe, eo = Di, Ff = Ki, Pf = Ae, Va = 0, ur = Uo.m, Tf = ft(ur, 1);
                  if (r(eo, 0, 0, Ga), Tf) {
                    var Cf = ft(ur, 1) + 1, kf = ft(ur, 1), Ch = ft(ur, kf == 0 ? 1 : 8);
                    eo[Ch] = 1, Cf == 2 && (eo[Ch = ft(ur, 8)] = 1);
                    var zo = 1;
                  } else {
                    var kh = s(19), Rh = ft(ur, 4) + 4;
                    if (19 < Rh) {
                      Uo.a = 3;
                      var Ho = 0;
                      break r;
                    }
                    for (Wo = 0; Wo < Rh; ++Wo) kh[rf[Wo]] = ft(ur, 3);
                    var Ya = void 0, io = void 0, Eh = Uo, Rf = kh, Go = Ga, Ih = eo, Ka = 0, cr = Eh.m, Bh = 8, Oh = u(128, D);
                    n: for (; F(Oh, 0, 7, Rf, 19); ) {
                      if (ft(cr, 1)) {
                        var Ef = 2 + 2 * ft(cr, 3);
                        if ((Ya = 2 + ft(cr, Ef)) > Go) break n;
                      } else Ya = Go;
                      for (io = 0; io < Go && Ya--; ) {
                        st(cr);
                        var Mh = Oh[0 + (127 & z(cr))];
                        Q(cr, cr.u + Mh.g);
                        var vs = Mh.value;
                        if (16 > vs) Ih[io++] = vs, vs != 0 && (Bh = vs);
                        else {
                          var If = vs == 16, Dh = vs - 16, Bf = ef[Dh], qh = ft(cr, tf[Dh]) + Bf;
                          if (io + qh > Go) break n;
                          for (var Of = If ? Bh : 0; 0 < qh--; ) Ih[io++] = Of;
                        }
                      }
                      Ka = 1;
                      break n;
                    }
                    Ka || (Eh.a = 3), zo = Ka;
                  }
                  (zo = zo && !ur.h) && (Va = F(Ff, Pf, 8, eo, Ga)), zo && Va != 0 ? Ho = Va : (Uo.a = 3, Ho = 0);
                }
                if (Ho == 0) break i;
                if (Hn && nf[ce] == 1 && (Hn = Ki[Ae].g == 0), Mr += Ki[Ae].g, Ae += Ho, 3 >= ce) {
                  var no, Xa = Di[0];
                  for (no = 1; no < ui; ++no) Di[no] > Xa && (Xa = Di[no]);
                  vi += Xa;
                }
              }
              if (Me.nd = Hn, Me.Qb = 0, Hn && (Me.qb = (Xi[3][pn[3] + 0].value << 24 | Xi[1][pn[1] + 0].value << 16 | Xi[2][pn[2] + 0].value) >>> 0, Mr == 0 && 256 > Xi[0][pn[0] + 0].value && (Me.Qb = 1, Me.qb += Xi[0][pn[0] + 0].value << 8)), Me.jc = !Me.Qb && 6 > vi, Me.jc) {
                var Vo, Gn = Me;
                for (Vo = 0; Vo < cs; ++Vo) {
                  var fr = Vo, dr = Gn.pd[fr], Yo = Gn.G[0][Gn.H[0] + fr];
                  256 <= Yo.value ? (dr.g = Yo.g + 256, dr.value = Yo.value) : (dr.g = 0, dr.value = 0, fr >>= ni(Yo, 8, dr), fr >>= ni(Gn.G[1][Gn.H[1] + fr], 16, dr), fr >>= ni(Gn.G[2][Gn.H[2] + fr], 0, dr), ni(Gn.G[3][Gn.H[3] + fr], 24, dr));
                }
              }
            }
            hi.vc = Le, hi.Wb = Fe, hi.Ya = Yi, hi.yc = Gi, Mt = 1;
            break e;
          }
          Mt = 0;
        }
        if (!(S = Mt)) {
          m.a = 3;
          break t;
        }
        if (0 < pt) {
          if (W.ua = 1 << pt, !I(W.Wa, pt)) {
            m.a = 1, S = 0;
            break t;
          }
        } else W.ua = 0;
        var $a = m, jh = P, Mf = T, Ja = $a.s, Za = Ja.xc;
        if ($a.c = jh, $a.i = Mf, Ja.md = L(jh, Za), Ja.wc = Za == 0 ? -1 : (1 << Za) - 1, p) {
          m.xb = pf;
          break t;
        }
        if ((tt = s(P * T)) == null) {
          m.a = 1, S = 0;
          break t;
        }
        S = (S = un(m, tt, 0, P, T, T, null)) && !C.h;
        break t;
      }
      return S ? (x != null ? x[0] = tt : (t(tt == null), t(p)), m.$ = 0, p || Qi(W)) : Qi(W), S;
    }
    function _r(o, h) {
      var p = o.c * o.i, m = p + h + 16 * h;
      return t(o.c <= h), o.V = s(m), o.V == null ? (o.Ta = null, o.Ua = 0, o.a = 1, 0) : (o.Ta = o.V, o.Ua = o.Ba + p + h, 1);
    }
    function $r(o, h) {
      var p = o.C, m = h - p, x = o.V, S = o.Ba + o.c * p;
      for (t(h <= o.l.o); 0 < m; ) {
        var P = 16 < m ? 16 : m, T = o.l.ma, C = o.l.width, W = C * P, tt = T.ca, pt = T.tb + C * p, U = o.Ta, nt = o.Ua;
        wr(o, P, x, S), fh(U, nt, tt, pt, W), wn(T, p, p + P, tt, pt, C), m -= P, x += P * o.c, p += P;
      }
      t(p == h), o.C = o.Ma = h;
    }
    function Jr() {
      this.ub = this.yd = this.td = this.Rb = 0;
    }
    function Zr() {
      this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
    }
    function ya() {
      this.Fb = this.Bb = this.Cb = 0, this.Zb = s(4), this.Lb = s(4);
    }
    function Bs() {
      this.Yb = (function() {
        var o = [];
        return (function h(p, m, x) {
          for (var S = x[m], P = 0; P < S && (p.push(x.length > m + 1 ? [] : 0), !(x.length < m + 1)); P++) h(p[P], m + 1, x);
        })(o, 0, [3, 11]), o;
      })();
    }
    function po() {
      this.jb = s(3), this.Wc = a([4, 8], Bs), this.Xc = a([4, 17], Bs);
    }
    function go() {
      this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new s(4), this.od = new s(4);
    }
    function tn() {
      this.ld = this.La = this.dd = this.tc = 0;
    }
    function Os() {
      this.Na = this.la = 0;
    }
    function mo() {
      this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
    }
    function Ms() {
      this.ad = s(384), this.Za = 0, this.Ob = s(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
    }
    function vo() {
      this.uc = this.M = this.Nb = 0, this.wa = Array(new tn()), this.Y = 0, this.ya = Array(new Ms()), this.aa = 0, this.l = new Qr();
    }
    function yo() {
      this.y = s(16), this.f = s(8), this.ea = s(8);
    }
    function bo() {
      this.cb = this.a = 0, this.sc = "", this.m = new N(), this.Od = new Jr(), this.Kc = new Zr(), this.ed = new go(), this.Qa = new ya(), this.Ic = this.$c = this.Aa = 0, this.D = new vo(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = u(8, N), this.ia = 0, this.pb = u(4, mo), this.Pa = new po(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new yo()), this.Hd = 0, this.rb = Array(new Os()), this.sb = 0, this.wa = Array(new tn()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Ms()), this.L = this.aa = 0, this.gd = a([4, 2], tn), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
    }
    function _n(o, h) {
      return 0 > o ? 0 : o > h ? h : o;
    }
    function Qr() {
      this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
    }
    function ba() {
      var o = new bo();
      return o != null && (o.a = 0, o.sc = "OK", o.cb = 0, o.Xb = 0, Qs || (Qs = ts)), o;
    }
    function ri(o, h, p) {
      return o.a == 0 && (o.a = h, o.sc = p, o.cb = 0), 0;
    }
    function wo(o, h, p) {
      return 3 <= p && o[h + 0] == 157 && o[h + 1] == 1 && o[h + 2] == 42;
    }
    function An(o, h) {
      if (o == null) return 0;
      if (o.a = 0, o.sc = "OK", h == null) return ri(o, 2, "null VP8Io passed to VP8GetHeaders()");
      var p = h.data, m = h.w, x = h.ha;
      if (4 > x) return ri(o, 7, "Truncated header.");
      var S = p[m + 0] | p[m + 1] << 8 | p[m + 2] << 16, P = o.Od;
      if (P.Rb = !(1 & S), P.td = S >> 1 & 7, P.yd = S >> 4 & 1, P.ub = S >> 5, 3 < P.td) return ri(o, 3, "Incorrect keyframe parameters.");
      if (!P.yd) return ri(o, 4, "Frame not displayable.");
      m += 3, x -= 3;
      var T = o.Kc;
      if (P.Rb) {
        if (7 > x) return ri(o, 7, "cannot parse picture header");
        if (!wo(p, m, x)) return ri(o, 3, "Bad code word");
        T.c = 16383 & (p[m + 4] << 8 | p[m + 3]), T.Td = p[m + 4] >> 6, T.i = 16383 & (p[m + 6] << 8 | p[m + 5]), T.Ud = p[m + 6] >> 6, m += 7, x -= 7, o.za = T.c + 15 >> 4, o.Ub = T.i + 15 >> 4, h.width = T.c, h.height = T.i, h.Da = 0, h.j = 0, h.v = 0, h.va = h.width, h.o = h.height, h.da = 0, h.ib = h.width, h.hb = h.height, h.U = h.width, h.T = h.height, r((S = o.Pa).jb, 0, 255, S.jb.length), t((S = o.Qa) != null), S.Cb = 0, S.Bb = 0, S.Fb = 1, r(S.Zb, 0, 0, S.Zb.length), r(S.Lb, 0, 0, S.Lb);
      }
      if (P.ub > x) return ri(o, 7, "bad partition length");
      ut(S = o.m, p, m, P.ub), m += P.ub, x -= P.ub, P.Rb && (T.Ld = mt(S), T.Kd = mt(S)), T = o.Qa;
      var C, W = o.Pa;
      if (t(S != null), t(T != null), T.Cb = mt(S), T.Cb) {
        if (T.Bb = mt(S), mt(S)) {
          for (T.Fb = mt(S), C = 0; 4 > C; ++C) T.Zb[C] = mt(S) ? et(S, 7) : 0;
          for (C = 0; 4 > C; ++C) T.Lb[C] = mt(S) ? et(S, 6) : 0;
        }
        if (T.Bb) for (C = 0; 3 > C; ++C) W.jb[C] = mt(S) ? ot(S, 8) : 255;
      } else T.Bb = 0;
      if (S.Ka) return ri(o, 3, "cannot parse segment header");
      if ((T = o.ed).zd = mt(S), T.Tb = ot(S, 6), T.wb = ot(S, 3), T.Pc = mt(S), T.Pc && mt(S)) {
        for (W = 0; 4 > W; ++W) mt(S) && (T.vd[W] = et(S, 6));
        for (W = 0; 4 > W; ++W) mt(S) && (T.od[W] = et(S, 6));
      }
      if (o.L = T.Tb == 0 ? 0 : T.zd ? 1 : 2, S.Ka) return ri(o, 3, "cannot parse filter header");
      var tt = x;
      if (x = C = m, m = C + tt, T = tt, o.Xb = (1 << ot(o.m, 2)) - 1, tt < 3 * (W = o.Xb)) p = 7;
      else {
        for (C += 3 * W, T -= 3 * W, tt = 0; tt < W; ++tt) {
          var pt = p[x + 0] | p[x + 1] << 8 | p[x + 2] << 16;
          pt > T && (pt = T), ut(o.Jc[+tt], p, C, pt), C += pt, T -= pt, x += 3;
        }
        ut(o.Jc[+W], p, C, T), p = C < m ? 0 : 5;
      }
      if (p != 0) return ri(o, p, "cannot parse partitions");
      for (p = ot(C = o.m, 7), x = mt(C) ? et(C, 4) : 0, m = mt(C) ? et(C, 4) : 0, T = mt(C) ? et(C, 4) : 0, W = mt(C) ? et(C, 4) : 0, C = mt(C) ? et(C, 4) : 0, tt = o.Qa, pt = 0; 4 > pt; ++pt) {
        if (tt.Cb) {
          var U = tt.Zb[pt];
          tt.Fb || (U += p);
        } else {
          if (0 < pt) {
            o.pb[pt] = o.pb[0];
            continue;
          }
          U = p;
        }
        var nt = o.pb[pt];
        nt.Sc[0] = Ua[_n(U + x, 127)], nt.Sc[1] = za[_n(U + 0, 127)], nt.Eb[0] = 2 * Ua[_n(U + m, 127)], nt.Eb[1] = 101581 * za[_n(U + T, 127)] >> 16, 8 > nt.Eb[1] && (nt.Eb[1] = 8), nt.Qc[0] = Ua[_n(U + W, 117)], nt.Qc[1] = za[_n(U + C, 127)], nt.lc = U + C;
      }
      if (!P.Rb) return ri(o, 4, "Not a key frame.");
      for (mt(S), P = o.Pa, p = 0; 4 > p; ++p) {
        for (x = 0; 8 > x; ++x) for (m = 0; 3 > m; ++m) for (T = 0; 11 > T; ++T) W = yt(S, ff[p][x][m][T]) ? ot(S, 8) : uf[p][x][m][T], P.Wc[p][x].Yb[m][T] = W;
        for (x = 0; 17 > x; ++x) P.Xc[p][x] = P.Wc[p][df[x]];
      }
      return o.kc = mt(S), o.kc && (o.Bd = ot(S, 8)), o.cb = 1;
    }
    function ts(o, h, p, m, x, S, P) {
      var T = h[x].Yb[p];
      for (p = 0; 16 > x; ++x) {
        if (!yt(o, T[p + 0])) return x;
        for (; !yt(o, T[p + 1]); ) if (T = h[++x].Yb[0], p = 0, x == 16) return 16;
        var C = h[x + 1].Yb;
        if (yt(o, T[p + 2])) {
          var W = o, tt = 0;
          if (yt(W, (U = T)[(pt = p) + 3])) if (yt(W, U[pt + 6])) {
            for (T = 0, pt = 2 * (tt = yt(W, U[pt + 8])) + (U = yt(W, U[pt + 9 + tt])), tt = 0, U = lf[pt]; U[T]; ++T) tt += tt + yt(W, U[T]);
            tt += 3 + (8 << pt);
          } else yt(W, U[pt + 7]) ? (tt = 7 + 2 * yt(W, 165), tt += yt(W, 145)) : tt = 5 + yt(W, 159);
          else tt = yt(W, U[pt + 4]) ? 3 + yt(W, U[pt + 5]) : 2;
          T = C[2];
        } else tt = 1, T = C[1];
        C = P + hf[x], 0 > (W = o).b && gt(W);
        var pt, U = W.b, nt = (pt = W.Ca >> 1) - (W.I >> U) >> 31;
        --W.b, W.Ca += nt, W.Ca |= 1, W.I -= (pt + 1 & nt) << U, S[C] = ((tt ^ nt) - nt) * m[(0 < x) + 0];
      }
      return 16;
    }
    function Ds(o) {
      var h = o.rb[o.sb - 1];
      h.la = 0, h.Na = 0, r(o.zc, 0, 0, o.zc.length), o.ja = 0;
    }
    function zi(o, h, p, m, x) {
      x = o[h + p + 32 * m] + (x >> 3), o[h + p + 32 * m] = -256 & x ? 0 > x ? 0 : 255 : x;
    }
    function es(o, h, p, m, x, S) {
      zi(o, h, 0, p, m + x), zi(o, h, 1, p, m + S), zi(o, h, 2, p, m - S), zi(o, h, 3, p, m - x);
    }
    function Bn(o) {
      return (20091 * o >> 16) + o;
    }
    function pi(o, h, p, m) {
      var x, S = 0, P = s(16);
      for (x = 0; 4 > x; ++x) {
        var T = o[h + 0] + o[h + 8], C = o[h + 0] - o[h + 8], W = (35468 * o[h + 4] >> 16) - Bn(o[h + 12]), tt = Bn(o[h + 4]) + (35468 * o[h + 12] >> 16);
        P[S + 0] = T + tt, P[S + 1] = C + W, P[S + 2] = C - W, P[S + 3] = T - tt, S += 4, h++;
      }
      for (x = S = 0; 4 > x; ++x) T = (o = P[S + 0] + 4) + P[S + 8], C = o - P[S + 8], W = (35468 * P[S + 4] >> 16) - Bn(P[S + 12]), zi(p, m, 0, 0, T + (tt = Bn(P[S + 4]) + (35468 * P[S + 12] >> 16))), zi(p, m, 1, 0, C + W), zi(p, m, 2, 0, C - W), zi(p, m, 3, 0, T - tt), S++, m += 32;
    }
    function xo(o, h, p, m) {
      var x = o[h + 0] + 4, S = 35468 * o[h + 4] >> 16, P = Bn(o[h + 4]), T = 35468 * o[h + 1] >> 16;
      es(p, m, 0, x + P, o = Bn(o[h + 1]), T), es(p, m, 1, x + S, o, T), es(p, m, 2, x - S, o, T), es(p, m, 3, x - P, o, T);
    }
    function wa(o, h, p, m, x) {
      pi(o, h, p, m), x && pi(o, h + 16, p, m + 4);
    }
    function xa(o, h, p, m) {
      Wn(o, h + 0, p, m, 1), Wn(o, h + 32, p, m + 128, 1);
    }
    function _a(o, h, p, m) {
      var x;
      for (o = o[h + 0] + 4, x = 0; 4 > x; ++x) for (h = 0; 4 > h; ++h) zi(p, m, h, x, o);
    }
    function Ln(o, h, p, m) {
      o[h + 0] && xi(o, h + 0, p, m), o[h + 16] && xi(o, h + 16, p, m + 4), o[h + 32] && xi(o, h + 32, p, m + 128), o[h + 48] && xi(o, h + 48, p, m + 128 + 4);
    }
    function _o(o, h, p, m) {
      var x, S = s(16);
      for (x = 0; 4 > x; ++x) {
        var P = o[h + 0 + x] + o[h + 12 + x], T = o[h + 4 + x] + o[h + 8 + x], C = o[h + 4 + x] - o[h + 8 + x], W = o[h + 0 + x] - o[h + 12 + x];
        S[0 + x] = P + T, S[8 + x] = P - T, S[4 + x] = W + C, S[12 + x] = W - C;
      }
      for (x = 0; 4 > x; ++x) P = (o = S[0 + 4 * x] + 3) + S[3 + 4 * x], T = S[1 + 4 * x] + S[2 + 4 * x], C = S[1 + 4 * x] - S[2 + 4 * x], W = o - S[3 + 4 * x], p[m + 0] = P + T >> 3, p[m + 16] = W + C >> 3, p[m + 32] = P - T >> 3, p[m + 48] = W - C >> 3, m += 64;
    }
    function is(o, h, p) {
      var m, x = h - 32, S = Hi, P = 255 - o[x - 1];
      for (m = 0; m < p; ++m) {
        var T, C = S, W = P + o[h - 1];
        for (T = 0; T < p; ++T) o[h + T] = C[W + o[x + T]];
        h += 32;
      }
    }
    function ns(o, h) {
      is(o, h, 4);
    }
    function qs(o, h) {
      is(o, h, 8);
    }
    function Aa(o, h) {
      is(o, h, 16);
    }
    function La(o, h) {
      var p;
      for (p = 0; 16 > p; ++p) i(o, h + 32 * p, o, h - 32, 16);
    }
    function Na(o, h) {
      var p;
      for (p = 16; 0 < p; --p) r(o, h, o[h - 1], 16), h += 32;
    }
    function tr(o, h, p) {
      var m;
      for (m = 0; 16 > m; ++m) r(h, p + 32 * m, o, 16);
    }
    function Ao(o, h) {
      var p, m = 16;
      for (p = 0; 16 > p; ++p) m += o[h - 1 + 32 * p] + o[h + p - 32];
      tr(m >> 5, o, h);
    }
    function er(o, h) {
      var p, m = 8;
      for (p = 0; 16 > p; ++p) m += o[h - 1 + 32 * p];
      tr(m >> 4, o, h);
    }
    function Sa(o, h) {
      var p, m = 8;
      for (p = 0; 16 > p; ++p) m += o[h + p - 32];
      tr(m >> 4, o, h);
    }
    function Ar(o, h) {
      tr(128, o, h);
    }
    function oe(o, h, p) {
      return o + 2 * h + p + 2 >> 2;
    }
    function Fa(o, h) {
      var p, m = h - 32;
      for (m = new Uint8Array([oe(o[m - 1], o[m + 0], o[m + 1]), oe(o[m + 0], o[m + 1], o[m + 2]), oe(o[m + 1], o[m + 2], o[m + 3]), oe(o[m + 2], o[m + 3], o[m + 4])]), p = 0; 4 > p; ++p) i(o, h + 32 * p, m, 0, m.length);
    }
    function Pa(o, h) {
      var p = o[h - 1], m = o[h - 1 + 32], x = o[h - 1 + 64], S = o[h - 1 + 96];
      Ct(o, h + 0, 16843009 * oe(o[h - 1 - 32], p, m)), Ct(o, h + 32, 16843009 * oe(p, m, x)), Ct(o, h + 64, 16843009 * oe(m, x, S)), Ct(o, h + 96, 16843009 * oe(x, S, S));
    }
    function Ta(o, h) {
      var p, m = 4;
      for (p = 0; 4 > p; ++p) m += o[h + p - 32] + o[h - 1 + 32 * p];
      for (m >>= 3, p = 0; 4 > p; ++p) r(o, h + 32 * p, m, 4);
    }
    function Ca(o, h) {
      var p = o[h - 1 + 0], m = o[h - 1 + 32], x = o[h - 1 + 64], S = o[h - 1 - 32], P = o[h + 0 - 32], T = o[h + 1 - 32], C = o[h + 2 - 32], W = o[h + 3 - 32];
      o[h + 0 + 96] = oe(m, x, o[h - 1 + 96]), o[h + 1 + 96] = o[h + 0 + 64] = oe(p, m, x), o[h + 2 + 96] = o[h + 1 + 64] = o[h + 0 + 32] = oe(S, p, m), o[h + 3 + 96] = o[h + 2 + 64] = o[h + 1 + 32] = o[h + 0 + 0] = oe(P, S, p), o[h + 3 + 64] = o[h + 2 + 32] = o[h + 1 + 0] = oe(T, P, S), o[h + 3 + 32] = o[h + 2 + 0] = oe(C, T, P), o[h + 3 + 0] = oe(W, C, T);
    }
    function ka(o, h) {
      var p = o[h + 1 - 32], m = o[h + 2 - 32], x = o[h + 3 - 32], S = o[h + 4 - 32], P = o[h + 5 - 32], T = o[h + 6 - 32], C = o[h + 7 - 32];
      o[h + 0 + 0] = oe(o[h + 0 - 32], p, m), o[h + 1 + 0] = o[h + 0 + 32] = oe(p, m, x), o[h + 2 + 0] = o[h + 1 + 32] = o[h + 0 + 64] = oe(m, x, S), o[h + 3 + 0] = o[h + 2 + 32] = o[h + 1 + 64] = o[h + 0 + 96] = oe(x, S, P), o[h + 3 + 32] = o[h + 2 + 64] = o[h + 1 + 96] = oe(S, P, T), o[h + 3 + 64] = o[h + 2 + 96] = oe(P, T, C), o[h + 3 + 96] = oe(T, C, C);
    }
    function On(o, h) {
      var p = o[h - 1 + 0], m = o[h - 1 + 32], x = o[h - 1 + 64], S = o[h - 1 - 32], P = o[h + 0 - 32], T = o[h + 1 - 32], C = o[h + 2 - 32], W = o[h + 3 - 32];
      o[h + 0 + 0] = o[h + 1 + 64] = S + P + 1 >> 1, o[h + 1 + 0] = o[h + 2 + 64] = P + T + 1 >> 1, o[h + 2 + 0] = o[h + 3 + 64] = T + C + 1 >> 1, o[h + 3 + 0] = C + W + 1 >> 1, o[h + 0 + 96] = oe(x, m, p), o[h + 0 + 64] = oe(m, p, S), o[h + 0 + 32] = o[h + 1 + 96] = oe(p, S, P), o[h + 1 + 32] = o[h + 2 + 96] = oe(S, P, T), o[h + 2 + 32] = o[h + 3 + 96] = oe(P, T, C), o[h + 3 + 32] = oe(T, C, W);
    }
    function Mn(o, h) {
      var p = o[h + 0 - 32], m = o[h + 1 - 32], x = o[h + 2 - 32], S = o[h + 3 - 32], P = o[h + 4 - 32], T = o[h + 5 - 32], C = o[h + 6 - 32], W = o[h + 7 - 32];
      o[h + 0 + 0] = p + m + 1 >> 1, o[h + 1 + 0] = o[h + 0 + 64] = m + x + 1 >> 1, o[h + 2 + 0] = o[h + 1 + 64] = x + S + 1 >> 1, o[h + 3 + 0] = o[h + 2 + 64] = S + P + 1 >> 1, o[h + 0 + 32] = oe(p, m, x), o[h + 1 + 32] = o[h + 0 + 96] = oe(m, x, S), o[h + 2 + 32] = o[h + 1 + 96] = oe(x, S, P), o[h + 3 + 32] = o[h + 2 + 96] = oe(S, P, T), o[h + 3 + 64] = oe(P, T, C), o[h + 3 + 96] = oe(T, C, W);
    }
    function Ra(o, h) {
      var p = o[h - 1 + 0], m = o[h - 1 + 32], x = o[h - 1 + 64], S = o[h - 1 + 96];
      o[h + 0 + 0] = p + m + 1 >> 1, o[h + 2 + 0] = o[h + 0 + 32] = m + x + 1 >> 1, o[h + 2 + 32] = o[h + 0 + 64] = x + S + 1 >> 1, o[h + 1 + 0] = oe(p, m, x), o[h + 3 + 0] = o[h + 1 + 32] = oe(m, x, S), o[h + 3 + 32] = o[h + 1 + 64] = oe(x, S, S), o[h + 3 + 64] = o[h + 2 + 64] = o[h + 0 + 96] = o[h + 1 + 96] = o[h + 2 + 96] = o[h + 3 + 96] = S;
    }
    function Ea(o, h) {
      var p = o[h - 1 + 0], m = o[h - 1 + 32], x = o[h - 1 + 64], S = o[h - 1 + 96], P = o[h - 1 - 32], T = o[h + 0 - 32], C = o[h + 1 - 32], W = o[h + 2 - 32];
      o[h + 0 + 0] = o[h + 2 + 32] = p + P + 1 >> 1, o[h + 0 + 32] = o[h + 2 + 64] = m + p + 1 >> 1, o[h + 0 + 64] = o[h + 2 + 96] = x + m + 1 >> 1, o[h + 0 + 96] = S + x + 1 >> 1, o[h + 3 + 0] = oe(T, C, W), o[h + 2 + 0] = oe(P, T, C), o[h + 1 + 0] = o[h + 3 + 32] = oe(p, P, T), o[h + 1 + 32] = o[h + 3 + 64] = oe(m, p, P), o[h + 1 + 64] = o[h + 3 + 96] = oe(x, m, p), o[h + 1 + 96] = oe(S, x, m);
    }
    function rs(o, h) {
      var p;
      for (p = 0; 8 > p; ++p) i(o, h + 32 * p, o, h - 32, 8);
    }
    function js(o, h) {
      var p;
      for (p = 0; 8 > p; ++p) r(o, h, o[h - 1], 8), h += 32;
    }
    function Nn(o, h, p) {
      var m;
      for (m = 0; 8 > m; ++m) r(h, p + 32 * m, o, 8);
    }
    function Ia(o, h) {
      var p, m = 8;
      for (p = 0; 8 > p; ++p) m += o[h + p - 32] + o[h - 1 + 32 * p];
      Nn(m >> 4, o, h);
    }
    function ss(o, h) {
      var p, m = 4;
      for (p = 0; 8 > p; ++p) m += o[h + p - 32];
      Nn(m >> 3, o, h);
    }
    function Ba(o, h) {
      var p, m = 4;
      for (p = 0; 8 > p; ++p) m += o[h - 1 + 32 * p];
      Nn(m >> 3, o, h);
    }
    function Ws(o, h) {
      Nn(128, o, h);
    }
    function ir(o, h, p) {
      var m = o[h - p], x = o[h + 0], S = 3 * (x - m) + Ma[1020 + o[h - 2 * p] - o[h + p]], P = Ro[112 + (S + 4 >> 3)];
      o[h - p] = Hi[255 + m + Ro[112 + (S + 3 >> 3)]], o[h + 0] = Hi[255 + x - P];
    }
    function Us(o, h, p, m) {
      var x = o[h + 0], S = o[h + p];
      return nn[255 + o[h - 2 * p] - o[h - p]] > m || nn[255 + S - x] > m;
    }
    function Lr(o, h, p, m) {
      return 4 * nn[255 + o[h - p] - o[h + 0]] + nn[255 + o[h - 2 * p] - o[h + p]] <= m;
    }
    function zs(o, h, p, m, x) {
      var S = o[h - 3 * p], P = o[h - 2 * p], T = o[h - p], C = o[h + 0], W = o[h + p], tt = o[h + 2 * p], pt = o[h + 3 * p];
      return 4 * nn[255 + T - C] + nn[255 + P - W] > m ? 0 : nn[255 + o[h - 4 * p] - S] <= x && nn[255 + S - P] <= x && nn[255 + P - T] <= x && nn[255 + pt - tt] <= x && nn[255 + tt - W] <= x && nn[255 + W - C] <= x;
    }
    function os(o, h, p, m) {
      var x = 2 * m + 1;
      for (m = 0; 16 > m; ++m) Lr(o, h + m, p, x) && ir(o, h + m, p);
    }
    function Hs(o, h, p, m) {
      var x = 2 * m + 1;
      for (m = 0; 16 > m; ++m) Lr(o, h + m * p, 1, x) && ir(o, h + m * p, 1);
    }
    function as(o, h, p, m) {
      var x;
      for (x = 3; 0 < x; --x) os(o, h += 4 * p, p, m);
    }
    function Lo(o, h, p, m) {
      var x;
      for (x = 3; 0 < x; --x) Hs(o, h += 4, p, m);
    }
    function Dn(o, h, p, m, x, S, P, T) {
      for (S = 2 * S + 1; 0 < x--; ) {
        if (zs(o, h, p, S, P)) if (Us(o, h, p, T)) ir(o, h, p);
        else {
          var C = o, W = h, tt = p, pt = C[W - 2 * tt], U = C[W - tt], nt = C[W + 0], ht = C[W + tt], xt = C[W + 2 * tt], dt = 27 * (At = Ma[1020 + 3 * (nt - U) + Ma[1020 + pt - ht]]) + 63 >> 7, _t = 18 * At + 63 >> 7, At = 9 * At + 63 >> 7;
          C[W - 3 * tt] = Hi[255 + C[W - 3 * tt] + At], C[W - 2 * tt] = Hi[255 + pt + _t], C[W - tt] = Hi[255 + U + dt], C[W + 0] = Hi[255 + nt - dt], C[W + tt] = Hi[255 + ht - _t], C[W + 2 * tt] = Hi[255 + xt - At];
        }
        h += m;
      }
    }
    function qn(o, h, p, m, x, S, P, T) {
      for (S = 2 * S + 1; 0 < x--; ) {
        if (zs(o, h, p, S, P)) if (Us(o, h, p, T)) ir(o, h, p);
        else {
          var C = o, W = h, tt = p, pt = C[W - tt], U = C[W + 0], nt = C[W + tt], ht = Ro[112 + (4 + (xt = 3 * (U - pt)) >> 3)], xt = Ro[112 + (xt + 3 >> 3)], dt = ht + 1 >> 1;
          C[W - 2 * tt] = Hi[255 + C[W - 2 * tt] + dt], C[W - tt] = Hi[255 + pt + xt], C[W + 0] = Hi[255 + U - ht], C[W + tt] = Hi[255 + nt - dt];
        }
        h += m;
      }
    }
    function No(o, h, p, m, x, S) {
      Dn(o, h, p, 1, 16, m, x, S);
    }
    function So(o, h, p, m, x, S) {
      Dn(o, h, 1, p, 16, m, x, S);
    }
    function Fo(o, h, p, m, x, S) {
      var P;
      for (P = 3; 0 < P; --P) qn(o, h += 4 * p, p, 1, 16, m, x, S);
    }
    function Nr(o, h, p, m, x, S) {
      var P;
      for (P = 3; 0 < P; --P) qn(o, h += 4, 1, p, 16, m, x, S);
    }
    function Po(o, h, p, m, x, S, P, T) {
      Dn(o, h, x, 1, 8, S, P, T), Dn(p, m, x, 1, 8, S, P, T);
    }
    function f(o, h, p, m, x, S, P, T) {
      Dn(o, h, 1, x, 8, S, P, T), Dn(p, m, 1, x, 8, S, P, T);
    }
    function w(o, h, p, m, x, S, P, T) {
      qn(o, h + 4 * x, x, 1, 8, S, P, T), qn(p, m + 4 * x, x, 1, 8, S, P, T);
    }
    function j(o, h, p, m, x, S, P, T) {
      qn(o, h + 4, 1, x, 8, S, P, T), qn(p, m + 4, 1, x, 8, S, P, T);
    }
    function $() {
      this.ba = new de(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new xe(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
    }
    function rt() {
      this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
    }
    function wt() {
      this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
    }
    function Pt() {
      this.ua = 0, this.Wa = new St(), this.vb = new St(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new it(), this.yc = new D();
    }
    function Yt() {
      this.xb = this.a = 0, this.l = new Qr(), this.ca = new de(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new R(), this.Pb = 0, this.wd = new R(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new Pt(), this.ab = 0, this.gc = u(4, wt), this.Oc = 0;
    }
    function Gt() {
      this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Qr(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
    }
    function le(o, h, p, m, x, S, P) {
      for (o = o == null ? 0 : o[h + 0], h = 0; h < P; ++h) x[S + h] = o + p[m + h] & 255, o = x[S + h];
    }
    function ue(o, h, p, m, x, S, P) {
      var T;
      if (o == null) le(null, null, p, m, x, S, P);
      else for (T = 0; T < P; ++T) x[S + T] = o[h + T] + p[m + T] & 255;
    }
    function _e(o, h, p, m, x, S, P) {
      if (o == null) le(null, null, p, m, x, S, P);
      else {
        var T, C = o[h + 0], W = C, tt = C;
        for (T = 0; T < P; ++T) W = tt + (C = o[h + T]) - W, tt = p[m + T] + (-256 & W ? 0 > W ? 0 : 255 : W) & 255, W = C, x[S + T] = tt;
      }
    }
    function si(o, h, p, m) {
      var x = h.width, S = h.o;
      if (t(o != null && h != null), 0 > p || 0 >= m || p + m > S) return null;
      if (!o.Cc) {
        if (o.ga == null) {
          var P;
          if (o.ga = new Gt(), (P = o.ga == null) || (P = h.width * h.o, t(o.Gb.length == 0), o.Gb = s(P), o.Uc = 0, o.Gb == null ? P = 0 : (o.mb = o.Gb, o.nb = o.Uc, o.rc = null, P = 1), P = !P), !P) {
            P = o.ga;
            var T = o.Fa, C = o.P, W = o.qc, tt = o.mb, pt = o.nb, U = C + 1, nt = W - 1, ht = P.l;
            if (t(T != null && tt != null && h != null), hr[0] = null, hr[1] = le, hr[2] = ue, hr[3] = _e, P.ca = tt, P.tb = pt, P.c = h.width, P.i = h.height, t(0 < P.c && 0 < P.i), 1 >= W) h = 0;
            else if (P.$a = 3 & T[C + 0], P.Z = T[C + 0] >> 2 & 3, P.Lc = T[C + 0] >> 4 & 3, C = T[C + 0] >> 6 & 3, 0 > P.$a || 1 < P.$a || 4 <= P.Z || 1 < P.Lc || C) h = 0;
            else if (ht.put = re, ht.ac = Ui, ht.bc = yi, ht.ma = P, ht.width = h.width, ht.height = h.height, ht.Da = h.Da, ht.v = h.v, ht.va = h.va, ht.j = h.j, ht.o = h.o, P.$a) t: {
              t(P.$a == 1), h = xr();
              e: for (; ; ) {
                if (h == null) {
                  h = 0;
                  break t;
                }
                if (t(P != null), P.mc = h, h.c = P.c, h.i = P.i, h.l = P.l, h.l.ma = P, h.l.width = P.c, h.l.height = P.i, h.a = 0, ct(h.m, T, U, nt), !xn(P.c, P.i, 1, h, null) || (h.ab == 1 && h.gc[0].hc == 3 && ln(h.s) ? (P.ic = 1, T = h.c * h.i, h.Ta = null, h.Ua = 0, h.V = s(T), h.Ba = 0, h.V == null ? (h.a = 1, h = 0) : h = 1) : (P.ic = 0, h = _r(h, P.c)), !h)) break e;
                h = 1;
                break t;
              }
              P.mc = null, h = 0;
            }
            else h = nt >= P.c * P.i;
            P = !h;
          }
          if (P) return null;
          o.ga.Lc != 1 ? o.Ga = 0 : m = S - p;
        }
        t(o.ga != null), t(p + m <= S);
        t: {
          if (h = (T = o.ga).c, S = T.l.o, T.$a == 0) {
            if (U = o.rc, nt = o.Vc, ht = o.Fa, C = o.P + 1 + p * h, W = o.mb, tt = o.nb + p * h, t(C <= o.P + o.qc), T.Z != 0) for (t(hr[T.Z] != null), P = 0; P < m; ++P) hr[T.Z](U, nt, ht, C, W, tt, h), U = W, nt = tt, tt += h, C += h;
            else for (P = 0; P < m; ++P) i(W, tt, ht, C, h), U = W, nt = tt, tt += h, C += h;
            o.rc = U, o.Vc = nt;
          } else {
            if (t(T.mc != null), h = p + m, t((P = T.mc) != null), t(h <= P.i), P.C >= h) h = 1;
            else if (T.ic || Ge(), T.ic) {
              T = P.V, U = P.Ba, nt = P.c;
              var xt = P.i, dt = (ht = 1, C = P.$ / nt, W = P.$ % nt, tt = P.m, pt = P.s, P.$), _t = nt * xt, At = nt * h, kt = pt.wc, Tt = dt < At ? di(pt, W, C) : null;
              t(dt <= _t), t(h <= xt), t(ln(pt));
              e: for (; ; ) {
                for (; !tt.h && dt < At; ) {
                  if (W & kt || (Tt = di(pt, W, C)), t(Tt != null), st(tt), 256 > (xt = Ue(Tt.G[0], Tt.H[0], tt))) T[U + dt] = xt, ++dt, ++W >= nt && (W = 0, ++C <= h && !(C % 16) && hn(P, C));
                  else {
                    if (!(280 > xt)) {
                      ht = 0;
                      break e;
                    }
                    xt = Ii(xt - 256, tt);
                    var Zt, Wt = Ue(Tt.G[4], Tt.H[4], tt);
                    if (st(tt), !(dt >= (Wt = Bi(nt, Wt = Ii(Wt, tt))) && _t - dt >= xt)) {
                      ht = 0;
                      break e;
                    }
                    for (Zt = 0; Zt < xt; ++Zt) T[U + dt + Zt] = T[U + dt + Zt - Wt];
                    for (dt += xt, W += xt; W >= nt; ) W -= nt, ++C <= h && !(C % 16) && hn(P, C);
                    dt < At && W & kt && (Tt = di(pt, W, C));
                  }
                  t(tt.h == X(tt));
                }
                hn(P, C > h ? h : C);
                break e;
              }
              !ht || tt.h && dt < _t ? (ht = 0, P.a = tt.h ? 5 : 3) : P.$ = dt, h = ht;
            } else h = un(P, P.V, P.Ba, P.c, P.i, h, $r);
            if (!h) {
              m = 0;
              break t;
            }
          }
          p + m >= S && (o.Cc = 1), m = 1;
        }
        if (!m) return null;
        if (o.Cc && ((m = o.ga) != null && (m.mc = null), o.ga = null, 0 < o.Ga)) return alert("todo:WebPDequantizeLevels"), null;
      }
      return o.nb + p * x;
    }
    function Re(o, h, p, m, x, S) {
      for (; 0 < x--; ) {
        var P, T = o, C = h + (p ? 1 : 0), W = o, tt = h + (p ? 0 : 3);
        for (P = 0; P < m; ++P) {
          var pt = W[tt + 4 * P];
          pt != 255 && (pt *= 32897, T[C + 4 * P + 0] = T[C + 4 * P + 0] * pt >> 23, T[C + 4 * P + 1] = T[C + 4 * P + 1] * pt >> 23, T[C + 4 * P + 2] = T[C + 4 * P + 2] * pt >> 23);
        }
        h += S;
      }
    }
    function Ce(o, h, p, m, x) {
      for (; 0 < m--; ) {
        var S;
        for (S = 0; S < p; ++S) {
          var P = o[h + 2 * S + 0], T = 15 & (W = o[h + 2 * S + 1]), C = 4369 * T, W = (240 & W | W >> 4) * C >> 16;
          o[h + 2 * S + 0] = (240 & P | P >> 4) * C >> 16 & 240 | (15 & P | P << 4) * C >> 16 >> 4 & 15, o[h + 2 * S + 1] = 240 & W | T;
        }
        h += x;
      }
    }
    function De(o, h, p, m, x, S, P, T) {
      var C, W, tt = 255;
      for (W = 0; W < x; ++W) {
        for (C = 0; C < m; ++C) {
          var pt = o[h + C];
          S[P + 4 * C] = pt, tt &= pt;
        }
        h += p, P += T;
      }
      return tt != 255;
    }
    function He(o, h, p, m, x) {
      var S;
      for (S = 0; S < x; ++S) p[m + S] = o[h + S] >> 8;
    }
    function Ge() {
      Zs = Re, uh = Ce, ch = De, fh = He;
    }
    function bi(o, h, p) {
      b[o] = function(m, x, S, P, T, C, W, tt, pt, U, nt, ht, xt, dt, _t, At, kt) {
        var Tt, Zt = kt - 1 >> 1, Wt = T[C + 0] | W[tt + 0] << 16, pe = pt[U + 0] | nt[ht + 0] << 16;
        t(m != null);
        var Xt = 3 * Wt + pe + 131074 >> 2;
        for (h(m[x + 0], 255 & Xt, Xt >> 16, xt, dt), S != null && (Xt = 3 * pe + Wt + 131074 >> 2, h(S[P + 0], 255 & Xt, Xt >> 16, _t, At)), Tt = 1; Tt <= Zt; ++Tt) {
          var we = T[C + Tt] | W[tt + Tt] << 16, li = pt[U + Tt] | nt[ht + Tt] << 16, ge = Wt + we + pe + li + 524296, $t = ge + 2 * (we + pe) >> 3;
          Xt = $t + Wt >> 1, Wt = (ge = ge + 2 * (Wt + li) >> 3) + we >> 1, h(m[x + 2 * Tt - 1], 255 & Xt, Xt >> 16, xt, dt + (2 * Tt - 1) * p), h(m[x + 2 * Tt - 0], 255 & Wt, Wt >> 16, xt, dt + (2 * Tt - 0) * p), S != null && (Xt = ge + pe >> 1, Wt = $t + li >> 1, h(S[P + 2 * Tt - 1], 255 & Xt, Xt >> 16, _t, At + (2 * Tt - 1) * p), h(S[P + 2 * Tt + 0], 255 & Wt, Wt >> 16, _t, At + (2 * Tt + 0) * p)), Wt = we, pe = li;
        }
        1 & kt || (Xt = 3 * Wt + pe + 131074 >> 2, h(m[x + kt - 1], 255 & Xt, Xt >> 16, xt, dt + (kt - 1) * p), S != null && (Xt = 3 * pe + Wt + 131074 >> 2, h(S[P + kt - 1], 255 & Xt, Xt >> 16, _t, At + (kt - 1) * p)));
      };
    }
    function jn() {
      rn[Eo] = gf, rn[Io] = Ah, rn[yh] = mf, rn[Bo] = Lh, rn[Oo] = Nh, rn[Da] = Sh, rn[bh] = vf, rn[qa] = Ah, rn[ja] = Lh, rn[Mo] = Nh, rn[Wa] = Sh;
    }
    function Gs(o) {
      return o & -16384 ? 0 > o ? 0 : 255 : o >> yf;
    }
    function Sr(o, h) {
      return Gs((19077 * o >> 8) + (26149 * h >> 8) - 14234);
    }
    function Fr(o, h, p) {
      return Gs((19077 * o >> 8) - (6419 * h >> 8) - (13320 * p >> 8) + 8708);
    }
    function nr(o, h) {
      return Gs((19077 * o >> 8) + (33050 * h >> 8) - 17685);
    }
    function Pr(o, h, p, m, x) {
      m[x + 0] = Sr(o, p), m[x + 1] = Fr(o, h, p), m[x + 2] = nr(o, h);
    }
    function ls(o, h, p, m, x) {
      m[x + 0] = nr(o, h), m[x + 1] = Fr(o, h, p), m[x + 2] = Sr(o, p);
    }
    function hs(o, h, p, m, x) {
      var S = Fr(o, h, p);
      h = S << 3 & 224 | nr(o, h) >> 3, m[x + 0] = 248 & Sr(o, p) | S >> 5, m[x + 1] = h;
    }
    function wi(o, h, p, m, x) {
      var S = 240 & nr(o, h) | 15;
      m[x + 0] = 240 & Sr(o, p) | Fr(o, h, p) >> 4, m[x + 1] = S;
    }
    function Tr(o, h, p, m, x) {
      m[x + 0] = 255, Pr(o, h, p, m, x + 1);
    }
    function Cr(o, h, p, m, x) {
      ls(o, h, p, m, x), m[x + 3] = 255;
    }
    function Vs(o, h, p, m, x) {
      Pr(o, h, p, m, x), m[x + 3] = 255;
    }
    function Sn(o, h, p) {
      b[o] = function(m, x, S, P, T, C, W, tt, pt) {
        for (var U = tt + (-2 & pt) * p; tt != U; ) h(m[x + 0], S[P + 0], T[C + 0], W, tt), h(m[x + 1], S[P + 0], T[C + 0], W, tt + p), x += 2, ++P, ++C, tt += 2 * p;
        1 & pt && h(m[x + 0], S[P + 0], T[C + 0], W, tt);
      };
    }
    function Pi(o, h, p) {
      return p == 0 ? o == 0 ? h == 0 ? 6 : 5 : h == 0 ? 4 : 0 : p;
    }
    function To(o, h, p, m, x) {
      switch (o >>> 30) {
        case 3:
          Wn(h, p, m, x, 0);
          break;
        case 2:
          ar(h, p, m, x);
          break;
        case 1:
          xi(h, p, m, x);
      }
    }
    function us(o, h) {
      var p, m, x = h.M, S = h.Nb, P = o.oc, T = o.pc + 40, C = o.oc, W = o.pc + 584, tt = o.oc, pt = o.pc + 600;
      for (p = 0; 16 > p; ++p) P[T + 32 * p - 1] = 129;
      for (p = 0; 8 > p; ++p) C[W + 32 * p - 1] = 129, tt[pt + 32 * p - 1] = 129;
      for (0 < x ? P[T - 1 - 32] = C[W - 1 - 32] = tt[pt - 1 - 32] = 129 : (r(P, T - 32 - 1, 127, 21), r(C, W - 32 - 1, 127, 9), r(tt, pt - 32 - 1, 127, 9)), m = 0; m < o.za; ++m) {
        var U = h.ya[h.aa + m];
        if (0 < m) {
          for (p = -1; 16 > p; ++p) i(P, T + 32 * p - 4, P, T + 32 * p + 12, 4);
          for (p = -1; 8 > p; ++p) i(C, W + 32 * p - 4, C, W + 32 * p + 4, 4), i(tt, pt + 32 * p - 4, tt, pt + 32 * p + 4, 4);
        }
        var nt = o.Gd, ht = o.Hd + m, xt = U.ad, dt = U.Hc;
        if (0 < x && (i(P, T - 32, nt[ht].y, 0, 16), i(C, W - 32, nt[ht].f, 0, 8), i(tt, pt - 32, nt[ht].ea, 0, 8)), U.Za) {
          var _t = P, At = T - 32 + 16;
          for (0 < x && (m >= o.za - 1 ? r(_t, At, nt[ht].y[15], 4) : i(_t, At, nt[ht + 1].y, 0, 4)), p = 0; 4 > p; p++) _t[At + 128 + p] = _t[At + 256 + p] = _t[At + 384 + p] = _t[At + 0 + p];
          for (p = 0; 16 > p; ++p, dt <<= 2) _t = P, At = T + Ph[p], fn[U.Ob[p]](_t, At), To(dt, xt, 16 * +p, _t, At);
        } else if (_t = Pi(m, x, U.Ob[0]), lr[_t](P, T), dt != 0) for (p = 0; 16 > p; ++p, dt <<= 2) To(dt, xt, 16 * +p, P, T + Ph[p]);
        for (p = U.Gc, _t = Pi(m, x, U.Dd), zn[_t](C, W), zn[_t](tt, pt), dt = xt, _t = C, At = W, 255 & (U = 0 | p) && (170 & U ? gs(dt, 256, _t, At) : Pn(dt, 256, _t, At)), U = tt, dt = pt, 255 & (p >>= 8) && (170 & p ? gs(xt, 320, U, dt) : Pn(xt, 320, U, dt)), x < o.Ub - 1 && (i(nt[ht].y, 0, P, T + 480, 16), i(nt[ht].f, 0, C, W + 224, 8), i(nt[ht].ea, 0, tt, pt + 224, 8)), p = 8 * S * o.B, nt = o.sa, ht = o.ta + 16 * m + 16 * S * o.R, xt = o.qa, U = o.ra + 8 * m + p, dt = o.Ha, _t = o.Ia + 8 * m + p, p = 0; 16 > p; ++p) i(nt, ht + p * o.R, P, T + 32 * p, 16);
        for (p = 0; 8 > p; ++p) i(xt, U + p * o.B, C, W + 32 * p, 8), i(dt, _t + p * o.B, tt, pt + 32 * p, 8);
      }
    }
    function Co(o, h, p, m, x, S, P, T, C) {
      var W = [0], tt = [0], pt = 0, U = C != null ? C.kd : 0, nt = C ?? new rt();
      if (o == null || 12 > p) return 7;
      nt.data = o, nt.w = h, nt.ha = p, h = [h], p = [p], nt.gb = [nt.gb];
      t: {
        var ht = h, xt = p, dt = nt.gb;
        if (t(o != null), t(xt != null), t(dt != null), dt[0] = 0, 12 <= xt[0] && !e(o, ht[0], "RIFF")) {
          if (e(o, ht[0] + 8, "WEBP")) {
            dt = 3;
            break t;
          }
          var _t = Ht(o, ht[0] + 4);
          if (12 > _t || 4294967286 < _t) {
            dt = 3;
            break t;
          }
          if (U && _t > xt[0] - 8) {
            dt = 7;
            break t;
          }
          dt[0] = _t, ht[0] += 12, xt[0] -= 12;
        }
        dt = 0;
      }
      if (dt != 0) return dt;
      for (_t = 0 < nt.gb[0], p = p[0]; ; ) {
        t: {
          var At = o;
          xt = h, dt = p;
          var kt = W, Tt = tt, Zt = ht = [0];
          if ((Xt = pt = [pt])[0] = 0, 8 > dt[0]) dt = 7;
          else {
            if (!e(At, xt[0], "VP8X")) {
              if (Ht(At, xt[0] + 4) != 10) {
                dt = 3;
                break t;
              }
              if (18 > dt[0]) {
                dt = 7;
                break t;
              }
              var Wt = Ht(At, xt[0] + 8), pe = 1 + Bt(At, xt[0] + 12);
              if (2147483648 <= pe * (At = 1 + Bt(At, xt[0] + 15))) {
                dt = 3;
                break t;
              }
              Zt != null && (Zt[0] = Wt), kt != null && (kt[0] = pe), Tt != null && (Tt[0] = At), xt[0] += 18, dt[0] -= 18, Xt[0] = 1;
            }
            dt = 0;
          }
        }
        if (pt = pt[0], ht = ht[0], dt != 0) return dt;
        if (xt = !!(2 & ht), !_t && pt) return 3;
        if (S != null && (S[0] = !!(16 & ht)), P != null && (P[0] = xt), T != null && (T[0] = 0), P = W[0], ht = tt[0], pt && xt && C == null) {
          dt = 0;
          break;
        }
        if (4 > p) {
          dt = 7;
          break;
        }
        if (_t && pt || !_t && !pt && !e(o, h[0], "ALPH")) {
          p = [p], nt.na = [nt.na], nt.P = [nt.P], nt.Sa = [nt.Sa];
          t: {
            Wt = o, dt = h, _t = p;
            var Xt = nt.gb;
            kt = nt.na, Tt = nt.P, Zt = nt.Sa, pe = 22, t(Wt != null), t(_t != null), At = dt[0];
            var we = _t[0];
            for (t(kt != null), t(Zt != null), kt[0] = null, Tt[0] = null, Zt[0] = 0; ; ) {
              if (dt[0] = At, _t[0] = we, 8 > we) {
                dt = 7;
                break t;
              }
              var li = Ht(Wt, At + 4);
              if (4294967286 < li) {
                dt = 3;
                break t;
              }
              var ge = 8 + li + 1 & -2;
              if (pe += ge, 0 < Xt && pe > Xt) {
                dt = 3;
                break t;
              }
              if (!e(Wt, At, "VP8 ") || !e(Wt, At, "VP8L")) {
                dt = 0;
                break t;
              }
              if (we[0] < ge) {
                dt = 7;
                break t;
              }
              e(Wt, At, "ALPH") || (kt[0] = Wt, Tt[0] = At + 8, Zt[0] = li), At += ge, we -= ge;
            }
          }
          if (p = p[0], nt.na = nt.na[0], nt.P = nt.P[0], nt.Sa = nt.Sa[0], dt != 0) break;
        }
        p = [p], nt.Ja = [nt.Ja], nt.xa = [nt.xa];
        t: if (Xt = o, dt = h, _t = p, kt = nt.gb[0], Tt = nt.Ja, Zt = nt.xa, Wt = dt[0], At = !e(Xt, Wt, "VP8 "), pe = !e(Xt, Wt, "VP8L"), t(Xt != null), t(_t != null), t(Tt != null), t(Zt != null), 8 > _t[0]) dt = 7;
        else {
          if (At || pe) {
            if (Xt = Ht(Xt, Wt + 4), 12 <= kt && Xt > kt - 12) {
              dt = 3;
              break t;
            }
            if (U && Xt > _t[0] - 8) {
              dt = 7;
              break t;
            }
            Tt[0] = Xt, dt[0] += 8, _t[0] -= 8, Zt[0] = pe;
          } else Zt[0] = 5 <= _t[0] && Xt[Wt + 0] == 47 && !(Xt[Wt + 4] >> 5), Tt[0] = _t[0];
          dt = 0;
        }
        if (p = p[0], nt.Ja = nt.Ja[0], nt.xa = nt.xa[0], h = h[0], dt != 0) break;
        if (4294967286 < nt.Ja) return 3;
        if (T == null || xt || (T[0] = nt.xa ? 2 : 1), P = [P], ht = [ht], nt.xa) {
          if (5 > p) {
            dt = 7;
            break;
          }
          T = P, U = ht, xt = S, o == null || 5 > p ? o = 0 : 5 <= p && o[h + 0] == 47 && !(o[h + 4] >> 5) ? (_t = [0], Xt = [0], kt = [0], ct(Tt = new R(), o, h, p), an(Tt, _t, Xt, kt) ? (T != null && (T[0] = _t[0]), U != null && (U[0] = Xt[0]), xt != null && (xt[0] = kt[0]), o = 1) : o = 0) : o = 0;
        } else {
          if (10 > p) {
            dt = 7;
            break;
          }
          T = ht, o == null || 10 > p || !wo(o, h + 3, p - 3) ? o = 0 : (U = o[h + 0] | o[h + 1] << 8 | o[h + 2] << 16, xt = 16383 & (o[h + 7] << 8 | o[h + 6]), o = 16383 & (o[h + 9] << 8 | o[h + 8]), 1 & U || 3 < (U >> 1 & 7) || !(U >> 4 & 1) || U >> 5 >= nt.Ja || !xt || !o ? o = 0 : (P && (P[0] = xt), T && (T[0] = o), o = 1));
        }
        if (!o || (P = P[0], ht = ht[0], pt && (W[0] != P || tt[0] != ht))) return 3;
        C != null && (C[0] = nt, C.offset = h - C.w, t(4294967286 > h - C.w), t(C.offset == C.ha - p));
        break;
      }
      return dt == 0 || dt == 7 && pt && C == null ? (S != null && (S[0] |= nt.na != null && 0 < nt.na.length), m != null && (m[0] = P), x != null && (x[0] = ht), 0) : dt;
    }
    function en(o, h, p) {
      var m = h.width, x = h.height, S = 0, P = 0, T = m, C = x;
      if (h.Da = o != null && 0 < o.Da, h.Da && (T = o.cd, C = o.bd, S = o.v, P = o.j, 11 > p || (S &= -2, P &= -2), 0 > S || 0 > P || 0 >= T || 0 >= C || S + T > m || P + C > x)) return 0;
      if (h.v = S, h.j = P, h.va = S + T, h.o = P + C, h.U = T, h.T = C, h.da = o != null && 0 < o.da, h.da) {
        if (!Ut(T, C, p = [o.ib], S = [o.hb])) return 0;
        h.ib = p[0], h.hb = S[0];
      }
      return h.ob = o != null && o.ob, h.Kb = o == null || !o.Sd, h.da && (h.ob = h.ib < 3 * m / 4 && h.hb < 3 * x / 4, h.Kb = 0), 1;
    }
    function kr(o) {
      if (o == null) return 2;
      if (11 > o.S) {
        var h = o.f.RGBA;
        h.fb += (o.height - 1) * h.A, h.A = -h.A;
      } else h = o.f.kb, o = o.height, h.O += (o - 1) * h.fa, h.fa = -h.fa, h.N += (o - 1 >> 1) * h.Ab, h.Ab = -h.Ab, h.W += (o - 1 >> 1) * h.Db, h.Db = -h.Db, h.F != null && (h.J += (o - 1) * h.lb, h.lb = -h.lb);
      return 0;
    }
    function Ys(o, h, p, m) {
      if (m == null || 0 >= o || 0 >= h) return 2;
      if (p != null) {
        if (p.Da) {
          var x = p.cd, S = p.bd, P = -2 & p.v, T = -2 & p.j;
          if (0 > P || 0 > T || 0 >= x || 0 >= S || P + x > o || T + S > h) return 2;
          o = x, h = S;
        }
        if (p.da) {
          if (!Ut(o, h, x = [p.ib], S = [p.hb])) return 2;
          o = x[0], h = S[0];
        }
      }
      m.width = o, m.height = h;
      t: {
        var C = m.width, W = m.height;
        if (o = m.S, 0 >= C || 0 >= W || !(o >= Eo && 13 > o)) o = 2;
        else {
          if (0 >= m.Rd && m.sd == null) {
            P = S = x = h = 0;
            var tt = (T = C * Th[o]) * W;
            if (11 > o || (S = (W + 1) / 2 * (h = (C + 1) / 2), o == 12 && (P = (x = C) * W)), (W = s(tt + 2 * S + P)) == null) {
              o = 1;
              break t;
            }
            m.sd = W, 11 > o ? ((C = m.f.RGBA).eb = W, C.fb = 0, C.A = T, C.size = tt) : ((C = m.f.kb).y = W, C.O = 0, C.fa = T, C.Fd = tt, C.f = W, C.N = 0 + tt, C.Ab = h, C.Cd = S, C.ea = W, C.W = 0 + tt + S, C.Db = h, C.Ed = S, o == 12 && (C.F = W, C.J = 0 + tt + 2 * S), C.Tc = P, C.lb = x);
          }
          if (h = 1, x = m.S, S = m.width, P = m.height, x >= Eo && 13 > x) if (11 > x) o = m.f.RGBA, h &= (T = Math.abs(o.A)) * (P - 1) + S <= o.size, h &= T >= S * Th[x], h &= o.eb != null;
          else {
            o = m.f.kb, T = (S + 1) / 2, tt = (P + 1) / 2, C = Math.abs(o.fa), W = Math.abs(o.Ab);
            var pt = Math.abs(o.Db), U = Math.abs(o.lb), nt = U * (P - 1) + S;
            h &= C * (P - 1) + S <= o.Fd, h &= W * (tt - 1) + T <= o.Cd, h = (h &= pt * (tt - 1) + T <= o.Ed) & C >= S & W >= T & pt >= T, h &= o.y != null, h &= o.f != null, h &= o.ea != null, x == 12 && (h &= U >= S, h &= nt <= o.Tc, h &= o.F != null);
          }
          else h = 0;
          o = h ? 0 : 2;
        }
      }
      return o != 0 || p != null && p.fd && (o = kr(m)), o;
    }
    var cs = 64, Rr = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], Ks = 24, Ti = 32, Oi = 8, fs = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
    E("Predictor0", "PredictorAdd0"), b.Predictor0 = function() {
      return 4278190080;
    }, b.Predictor1 = function(o) {
      return o;
    }, b.Predictor2 = function(o, h, p) {
      return h[p + 0];
    }, b.Predictor3 = function(o, h, p) {
      return h[p + 1];
    }, b.Predictor4 = function(o, h, p) {
      return h[p - 1];
    }, b.Predictor5 = function(o, h, p) {
      return at(at(o, h[p + 1]), h[p + 0]);
    }, b.Predictor6 = function(o, h, p) {
      return at(o, h[p - 1]);
    }, b.Predictor7 = function(o, h, p) {
      return at(o, h[p + 0]);
    }, b.Predictor8 = function(o, h, p) {
      return at(h[p - 1], h[p + 0]);
    }, b.Predictor9 = function(o, h, p) {
      return at(h[p + 0], h[p + 1]);
    }, b.Predictor10 = function(o, h, p) {
      return at(at(o, h[p - 1]), at(h[p + 0], h[p + 1]));
    }, b.Predictor11 = function(o, h, p) {
      var m = h[p + 0];
      return 0 >= Dt(m >> 24 & 255, o >> 24 & 255, (h = h[p - 1]) >> 24 & 255) + Dt(m >> 16 & 255, o >> 16 & 255, h >> 16 & 255) + Dt(m >> 8 & 255, o >> 8 & 255, h >> 8 & 255) + Dt(255 & m, 255 & o, 255 & h) ? m : o;
    }, b.Predictor12 = function(o, h, p) {
      var m = h[p + 0];
      return (Rt((o >> 24 & 255) + (m >> 24 & 255) - ((h = h[p - 1]) >> 24 & 255)) << 24 | Rt((o >> 16 & 255) + (m >> 16 & 255) - (h >> 16 & 255)) << 16 | Rt((o >> 8 & 255) + (m >> 8 & 255) - (h >> 8 & 255)) << 8 | Rt((255 & o) + (255 & m) - (255 & h))) >>> 0;
    }, b.Predictor13 = function(o, h, p) {
      var m = h[p - 1];
      return (jt((o = at(o, h[p + 0])) >> 24 & 255, m >> 24 & 255) << 24 | jt(o >> 16 & 255, m >> 16 & 255) << 16 | jt(o >> 8 & 255, m >> 8 & 255) << 8 | jt(255 & o, 255 & m)) >>> 0;
    };
    var rr = b.PredictorAdd0;
    b.PredictorAdd1 = Qt, E("Predictor2", "PredictorAdd2"), E("Predictor3", "PredictorAdd3"), E("Predictor4", "PredictorAdd4"), E("Predictor5", "PredictorAdd5"), E("Predictor6", "PredictorAdd6"), E("Predictor7", "PredictorAdd7"), E("Predictor8", "PredictorAdd8"), E("Predictor9", "PredictorAdd9"), E("Predictor10", "PredictorAdd10"), E("Predictor11", "PredictorAdd11"), E("Predictor12", "PredictorAdd12"), E("Predictor13", "PredictorAdd13");
    var sr = b.PredictorAdd2;
    qt("ColorIndexInverseTransform", "MapARGB", "32b", function(o) {
      return o >> 8 & 255;
    }, function(o) {
      return o;
    }), qt("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(o) {
      return o;
    }, function(o) {
      return o >> 8 & 255;
    });
    var ds, Er = b.ColorIndexInverseTransform, oi = b.MapARGB, Oa = b.VP8LColorIndexInverseTransformAlpha, Fn = b.MapAlpha, cn = b.VP8LPredictorsAdd = [];
    cn.length = 16, (b.VP8LPredictors = []).length = 16, (b.VP8LPredictorsAdd_C = []).length = 16, (b.VP8LPredictors_C = []).length = 16;
    var Ir, Xs, $s, ps, Br, Or, or, Wn, ar, gs, xi, Pn, Be, Oe, $e, ai, Un, Js, ms, ko, oh, ah, lh, hh, Zs, uh, ch, fh, dh = s(511), ph = s(2041), gh = s(225), mh = s(767), vh = 0, Ma = ph, Ro = gh, Hi = mh, nn = dh, Eo = 0, Io = 1, yh = 2, Bo = 3, Oo = 4, Da = 5, bh = 6, qa = 7, ja = 8, Mo = 9, Wa = 10, tf = [2, 3, 7], ef = [3, 3, 11], wh = [280, 256, 256, 256, 40], nf = [0, 1, 1, 1, 0], rf = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], sf = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], of = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], af = 8, Ua = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], za = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], Qs = null, lf = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], hf = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], xh = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], uf = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], cf = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], ff = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], df = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], lr = [], fn = [], zn = [], pf = 1, _h = 2, hr = [], rn = [];
    bi("UpsampleRgbLinePair", Pr, 3), bi("UpsampleBgrLinePair", ls, 3), bi("UpsampleRgbaLinePair", Vs, 4), bi("UpsampleBgraLinePair", Cr, 4), bi("UpsampleArgbLinePair", Tr, 4), bi("UpsampleRgba4444LinePair", wi, 2), bi("UpsampleRgb565LinePair", hs, 2);
    var gf = b.UpsampleRgbLinePair, mf = b.UpsampleBgrLinePair, Ah = b.UpsampleRgbaLinePair, Lh = b.UpsampleBgraLinePair, Nh = b.UpsampleArgbLinePair, Sh = b.UpsampleRgba4444LinePair, vf = b.UpsampleRgb565LinePair, Do = 16, qo = 1 << Do - 1, to = -227, Ha = 482, yf = 6, Fh = 0, bf = s(256), wf = s(256), xf = s(256), _f = s(256), Af = s(Ha - to), Lf = s(Ha - to);
    Sn("YuvToRgbRow", Pr, 3), Sn("YuvToBgrRow", ls, 3), Sn("YuvToRgbaRow", Vs, 4), Sn("YuvToBgraRow", Cr, 4), Sn("YuvToArgbRow", Tr, 4), Sn("YuvToRgba4444Row", wi, 2), Sn("YuvToRgb565Row", hs, 2);
    var Ph = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], jo = [0, 2, 8], Nf = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], Sf = 1;
    this.WebPDecodeRGBA = function(o, h, p, m, x) {
      var S = Io, P = new $(), T = new de();
      P.ba = T, T.S = S, T.width = [T.width], T.height = [T.height];
      var C = T.width, W = T.height, tt = new ne();
      if (tt == null || o == null) var pt = 2;
      else t(tt != null), pt = Co(o, h, p, tt.width, tt.height, tt.Pd, tt.Qd, tt.format, null);
      if (pt != 0 ? C = 0 : (C != null && (C[0] = tt.width[0]), W != null && (W[0] = tt.height[0]), C = 1), C) {
        T.width = T.width[0], T.height = T.height[0], m != null && (m[0] = T.width), x != null && (x[0] = T.height);
        t: {
          if (m = new Qr(), (x = new rt()).data = o, x.w = h, x.ha = p, x.kd = 1, h = [0], t(x != null), ((o = Co(x.data, x.w, x.ha, null, null, null, h, null, x)) == 0 || o == 7) && h[0] && (o = 4), (h = o) == 0) {
            if (t(P != null), m.data = x.data, m.w = x.w + x.offset, m.ha = x.ha - x.offset, m.put = re, m.ac = Ui, m.bc = yi, m.ma = P, x.xa) {
              if ((o = xr()) == null) {
                P = 1;
                break t;
              }
              if ((function(U, nt) {
                var ht = [0], xt = [0], dt = [0];
                e: for (; ; ) {
                  if (U == null) return 0;
                  if (nt == null) return U.a = 2, 0;
                  if (U.l = nt, U.a = 0, ct(U.m, nt.data, nt.w, nt.ha), !an(U.m, ht, xt, dt)) {
                    U.a = 3;
                    break e;
                  }
                  if (U.xb = _h, nt.width = ht[0], nt.height = xt[0], !xn(ht[0], xt[0], 1, U, null)) break e;
                  return 1;
                }
                return t(U.a != 0), 0;
              })(o, m)) {
                if (m = (h = Ys(m.width, m.height, P.Oa, P.ba)) == 0) {
                  e: {
                    m = o;
                    i: for (; ; ) {
                      if (m == null) {
                        m = 0;
                        break e;
                      }
                      if (t(m.s.yc != null), t(m.s.Ya != null), t(0 < m.s.Wb), t((p = m.l) != null), t((x = p.ma) != null), m.xb != 0) {
                        if (m.ca = x.ba, m.tb = x.tb, t(m.ca != null), !en(x.Oa, p, Bo)) {
                          m.a = 2;
                          break i;
                        }
                        if (!_r(m, p.width) || p.da) break i;
                        if ((p.da || ie(m.ca.S)) && Ge(), 11 > m.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), m.ca.f.kb.F != null && Ge()), m.Pb && 0 < m.s.ua && m.s.vb.X == null && !I(m.s.vb, m.s.Wa.Xa)) {
                          m.a = 1;
                          break i;
                        }
                        m.xb = 0;
                      }
                      if (!un(m, m.V, m.Ba, m.c, m.i, p.o, Qn)) break i;
                      x.Dc = m.Ma, m = 1;
                      break e;
                    }
                    t(m.a != 0), m = 0;
                  }
                  m = !m;
                }
                m && (h = o.a);
              } else h = o.a;
            } else {
              if ((o = new ba()) == null) {
                P = 1;
                break t;
              }
              if (o.Fa = x.na, o.P = x.P, o.qc = x.Sa, An(o, m)) {
                if ((h = Ys(m.width, m.height, P.Oa, P.ba)) == 0) {
                  if (o.Aa = 0, p = P.Oa, t((x = o) != null), p != null) {
                    if (0 < (C = 0 > (C = p.Md) ? 0 : 100 < C ? 255 : 255 * C / 100)) {
                      for (W = tt = 0; 4 > W; ++W) 12 > (pt = x.pb[W]).lc && (pt.ia = C * Nf[0 > pt.lc ? 0 : pt.lc] >> 3), tt |= pt.ia;
                      tt && (alert("todo:VP8InitRandom"), x.ia = 1);
                    }
                    x.Ga = p.Id, 100 < x.Ga ? x.Ga = 100 : 0 > x.Ga && (x.Ga = 0);
                  }
                  (function(U, nt) {
                    if (U == null) return 0;
                    if (nt == null) return ri(U, 2, "NULL VP8Io parameter in VP8Decode().");
                    if (!U.cb && !An(U, nt)) return 0;
                    if (t(U.cb), nt.ac == null || nt.ac(nt)) {
                      nt.ob && (U.L = 0);
                      var ht = jo[U.L];
                      if (U.L == 2 ? (U.yb = 0, U.zb = 0) : (U.yb = nt.v - ht >> 4, U.zb = nt.j - ht >> 4, 0 > U.yb && (U.yb = 0), 0 > U.zb && (U.zb = 0)), U.Va = nt.o + 15 + ht >> 4, U.Hb = nt.va + 15 + ht >> 4, U.Hb > U.za && (U.Hb = U.za), U.Va > U.Ub && (U.Va = U.Ub), 0 < U.L) {
                        var xt = U.ed;
                        for (ht = 0; 4 > ht; ++ht) {
                          var dt;
                          if (U.Qa.Cb) {
                            var _t = U.Qa.Lb[ht];
                            U.Qa.Fb || (_t += xt.Tb);
                          } else _t = xt.Tb;
                          for (dt = 0; 1 >= dt; ++dt) {
                            var At = U.gd[ht][dt], kt = _t;
                            if (xt.Pc && (kt += xt.vd[0], dt && (kt += xt.od[0])), 0 < (kt = 0 > kt ? 0 : 63 < kt ? 63 : kt)) {
                              var Tt = kt;
                              0 < xt.wb && (Tt = 4 < xt.wb ? Tt >> 2 : Tt >> 1) > 9 - xt.wb && (Tt = 9 - xt.wb), 1 > Tt && (Tt = 1), At.dd = Tt, At.tc = 2 * kt + Tt, At.ld = 40 <= kt ? 2 : 15 <= kt ? 1 : 0;
                            } else At.tc = 0;
                            At.La = dt;
                          }
                        }
                      }
                      ht = 0;
                    } else ri(U, 6, "Frame setup failed"), ht = U.a;
                    if (ht = ht == 0) {
                      if (ht) {
                        U.$c = 0, 0 < U.Aa || (U.Ic = Sf);
                        e: {
                          ht = U.Ic, xt = 4 * (Tt = U.za);
                          var Zt = 32 * Tt, Wt = Tt + 1, pe = 0 < U.L ? Tt * (0 < U.Aa ? 2 : 1) : 0, Xt = (U.Aa == 2 ? 2 : 1) * Tt;
                          if ((At = xt + 832 + (dt = 3 * (16 * ht + jo[U.L]) / 2 * Zt) + (_t = U.Fa != null && 0 < U.Fa.length ? U.Kc.c * U.Kc.i : 0)) != At) ht = 0;
                          else {
                            if (At > U.Vb) {
                              if (U.Vb = 0, U.Ec = s(At), U.Fc = 0, U.Ec == null) {
                                ht = ri(U, 1, "no memory during frame initialization.");
                                break e;
                              }
                              U.Vb = At;
                            }
                            At = U.Ec, kt = U.Fc, U.Ac = At, U.Bc = kt, kt += xt, U.Gd = u(Zt, yo), U.Hd = 0, U.rb = u(Wt + 1, Os), U.sb = 1, U.wa = pe ? u(pe, tn) : null, U.Y = 0, U.D.Nb = 0, U.D.wa = U.wa, U.D.Y = U.Y, 0 < U.Aa && (U.D.Y += Tt), t(!0), U.oc = At, U.pc = kt, kt += 832, U.ya = u(Xt, Ms), U.aa = 0, U.D.ya = U.ya, U.D.aa = U.aa, U.Aa == 2 && (U.D.aa += Tt), U.R = 16 * Tt, U.B = 8 * Tt, Tt = (Zt = jo[U.L]) * U.R, Zt = Zt / 2 * U.B, U.sa = At, U.ta = kt + Tt, U.qa = U.sa, U.ra = U.ta + 16 * ht * U.R + Zt, U.Ha = U.qa, U.Ia = U.ra + 8 * ht * U.B + Zt, U.$c = 0, kt += dt, U.mb = _t ? At : null, U.nb = _t ? kt : null, t(kt + _t <= U.Fc + U.Vb), Ds(U), r(U.Ac, U.Bc, 0, xt), ht = 1;
                          }
                        }
                        if (ht) {
                          if (nt.ka = 0, nt.y = U.sa, nt.O = U.ta, nt.f = U.qa, nt.N = U.ra, nt.ea = U.Ha, nt.Vd = U.Ia, nt.fa = U.R, nt.Rc = U.B, nt.F = null, nt.J = 0, !vh) {
                            for (ht = -255; 255 >= ht; ++ht) dh[255 + ht] = 0 > ht ? -ht : ht;
                            for (ht = -1020; 1020 >= ht; ++ht) ph[1020 + ht] = -128 > ht ? -128 : 127 < ht ? 127 : ht;
                            for (ht = -112; 112 >= ht; ++ht) gh[112 + ht] = -16 > ht ? -16 : 15 < ht ? 15 : ht;
                            for (ht = -255; 510 >= ht; ++ht) mh[255 + ht] = 0 > ht ? 0 : 255 < ht ? 255 : ht;
                            vh = 1;
                          }
                          or = _o, Wn = wa, gs = xa, xi = _a, Pn = Ln, ar = xo, Be = No, Oe = So, $e = Po, ai = f, Un = Fo, Js = Nr, ms = w, ko = j, oh = os, ah = Hs, lh = as, hh = Lo, fn[0] = Ta, fn[1] = ns, fn[2] = Fa, fn[3] = Pa, fn[4] = Ca, fn[5] = On, fn[6] = ka, fn[7] = Mn, fn[8] = Ea, fn[9] = Ra, lr[0] = Ao, lr[1] = Aa, lr[2] = La, lr[3] = Na, lr[4] = er, lr[5] = Sa, lr[6] = Ar, zn[0] = Ia, zn[1] = qs, zn[2] = rs, zn[3] = js, zn[4] = Ba, zn[5] = ss, zn[6] = Ws, ht = 1;
                        } else ht = 0;
                      }
                      ht && (ht = (function(we, li) {
                        for (we.M = 0; we.M < we.Va; ++we.M) {
                          var ge, $t = we.Jc[we.M & we.Xb], Mt = we.m, Je = we;
                          for (ge = 0; ge < Je.za; ++ge) {
                            var ce = Mt, Ae = Je, qe = Ae.Ac, gi = Ae.Bc + 4 * ge, Ci = Ae.zc, Ye = Ae.ya[Ae.aa + ge];
                            if (Ae.Qa.Bb ? Ye.$b = yt(ce, Ae.Pa.jb[0]) ? 2 + yt(ce, Ae.Pa.jb[2]) : yt(ce, Ae.Pa.jb[1]) : Ye.$b = 0, Ae.kc && (Ye.Ad = yt(ce, Ae.Bd)), Ye.Za = !yt(ce, 145) + 0, Ye.Za) {
                              var _i = Ye.Ob, ki = 0;
                              for (Ae = 0; 4 > Ae; ++Ae) {
                                var hi, Le = Ci[0 + Ae];
                                for (hi = 0; 4 > hi; ++hi) {
                                  Le = cf[qe[gi + hi]][Le];
                                  for (var Fe = xh[yt(ce, Le[0])]; 0 < Fe; ) Fe = xh[2 * Fe + yt(ce, Le[Fe])];
                                  Le = -Fe, qe[gi + hi] = Le;
                                }
                                i(_i, ki, qe, gi, 4), ki += 4, Ci[0 + Ae] = Le;
                              }
                            } else Le = yt(ce, 156) ? yt(ce, 128) ? 1 : 3 : yt(ce, 163) ? 2 : 0, Ye.Ob[0] = Le, r(qe, gi, Le, 4), r(Ci, 0, Le, 4);
                            Ye.Dd = yt(ce, 142) ? yt(ce, 114) ? yt(ce, 183) ? 1 : 3 : 2 : 0;
                          }
                          if (Je.m.Ka) return ri(we, 7, "Premature end-of-partition0 encountered.");
                          for (; we.ja < we.za; ++we.ja) {
                            if (Je = $t, ce = (Mt = we).rb[Mt.sb - 1], qe = Mt.rb[Mt.sb + Mt.ja], ge = Mt.ya[Mt.aa + Mt.ja], gi = Mt.kc ? ge.Ad : 0) ce.la = qe.la = 0, ge.Za || (ce.Na = qe.Na = 0), ge.Hc = 0, ge.Gc = 0, ge.ia = 0;
                            else {
                              var Ke, Pe;
                              if (ce = qe, qe = Je, gi = Mt.Pa.Xc, Ci = Mt.ya[Mt.aa + Mt.ja], Ye = Mt.pb[Ci.$b], Ae = Ci.ad, _i = 0, ki = Mt.rb[Mt.sb - 1], Le = hi = 0, r(Ae, _i, 0, 384), Ci.Za) var mi = 0, dn = gi[3];
                              else {
                                Fe = s(16);
                                var Ze = ce.Na + ki.Na;
                                if (Ze = Qs(qe, gi[1], Ze, Ye.Eb, 0, Fe, 0), ce.Na = ki.Na = (0 < Ze) + 0, 1 < Ze) or(Fe, 0, Ae, _i);
                                else {
                                  var Mi = Fe[0] + 3 >> 3;
                                  for (Fe = 0; 256 > Fe; Fe += 16) Ae[_i + Fe] = Mi;
                                }
                                mi = 1, dn = gi[0];
                              }
                              var Ee = 15 & ce.la, ui = 15 & ki.la;
                              for (Fe = 0; 4 > Fe; ++Fe) {
                                var Gi = 1 & ui;
                                for (Mi = Pe = 0; 4 > Mi; ++Mi) Ee = Ee >> 1 | (Gi = (Ze = Qs(qe, dn, Ze = Gi + (1 & Ee), Ye.Sc, mi, Ae, _i)) > mi) << 7, Pe = Pe << 2 | (3 < Ze ? 3 : 1 < Ze ? 2 : Ae[_i + 0] != 0), _i += 16;
                                Ee >>= 4, ui = ui >> 1 | Gi << 7, hi = (hi << 8 | Pe) >>> 0;
                              }
                              for (dn = Ee, mi = ui >> 4, Ke = 0; 4 > Ke; Ke += 2) {
                                for (Pe = 0, Ee = ce.la >> 4 + Ke, ui = ki.la >> 4 + Ke, Fe = 0; 2 > Fe; ++Fe) {
                                  for (Gi = 1 & ui, Mi = 0; 2 > Mi; ++Mi) Ze = Gi + (1 & Ee), Ee = Ee >> 1 | (Gi = 0 < (Ze = Qs(qe, gi[2], Ze, Ye.Qc, 0, Ae, _i))) << 3, Pe = Pe << 2 | (3 < Ze ? 3 : 1 < Ze ? 2 : Ae[_i + 0] != 0), _i += 16;
                                  Ee >>= 2, ui = ui >> 1 | Gi << 5;
                                }
                                Le |= Pe << 4 * Ke, dn |= Ee << 4 << Ke, mi |= (240 & ui) << Ke;
                              }
                              ce.la = dn, ki.la = mi, Ci.Hc = hi, Ci.Gc = Le, Ci.ia = 43690 & Le ? 0 : Ye.ia, gi = !(hi | Le);
                            }
                            if (0 < Mt.L && (Mt.wa[Mt.Y + Mt.ja] = Mt.gd[ge.$b][ge.Za], Mt.wa[Mt.Y + Mt.ja].La |= !gi), Je.Ka) return ri(we, 7, "Premature end-of-file encountered.");
                          }
                          if (Ds(we), Mt = li, Je = 1, ge = ($t = we).D, ce = 0 < $t.L && $t.M >= $t.zb && $t.M <= $t.Va, $t.Aa == 0) e: {
                            if (ge.M = $t.M, ge.uc = ce, us($t, ge), Je = 1, ge = (Pe = $t.D).Nb, ce = (Le = jo[$t.L]) * $t.R, qe = Le / 2 * $t.B, Fe = 16 * ge * $t.R, Mi = 8 * ge * $t.B, gi = $t.sa, Ci = $t.ta - ce + Fe, Ye = $t.qa, Ae = $t.ra - qe + Mi, _i = $t.Ha, ki = $t.Ia - qe + Mi, ui = (Ee = Pe.M) == 0, hi = Ee >= $t.Va - 1, $t.Aa == 2 && us($t, Pe), Pe.uc) for (Gi = (Ze = $t).D.M, t(Ze.D.uc), Pe = Ze.yb; Pe < Ze.Hb; ++Pe) {
                              mi = Pe, dn = Gi;
                              var Ri = (Vi = (vi = Ze).D).Nb;
                              Ke = vi.R;
                              var Vi = Vi.wa[Vi.Y + mi], Yi = vi.sa, Di = vi.ta + 16 * Ri * Ke + 16 * mi, Ki = Vi.dd, Me = Vi.tc;
                              if (Me != 0) if (t(3 <= Me), vi.L == 1) 0 < mi && ah(Yi, Di, Ke, Me + 4), Vi.La && hh(Yi, Di, Ke, Me), 0 < dn && oh(Yi, Di, Ke, Me + 4), Vi.La && lh(Yi, Di, Ke, Me);
                              else {
                                var Xi = vi.B, pn = vi.qa, Mr = vi.ra + 8 * Ri * Xi + 8 * mi, Hn = vi.Ha, vi = vi.Ia + 8 * Ri * Xi + 8 * mi;
                                Ri = Vi.ld, 0 < mi && (Oe(Yi, Di, Ke, Me + 4, Ki, Ri), ai(pn, Mr, Hn, vi, Xi, Me + 4, Ki, Ri)), Vi.La && (Js(Yi, Di, Ke, Me, Ki, Ri), ko(pn, Mr, Hn, vi, Xi, Me, Ki, Ri)), 0 < dn && (Be(Yi, Di, Ke, Me + 4, Ki, Ri), $e(pn, Mr, Hn, vi, Xi, Me + 4, Ki, Ri)), Vi.La && (Un(Yi, Di, Ke, Me, Ki, Ri), ms(pn, Mr, Hn, vi, Xi, Me, Ki, Ri));
                              }
                            }
                            if ($t.ia && alert("todo:DitherRow"), Mt.put != null) {
                              if (Pe = 16 * Ee, Ee = 16 * (Ee + 1), ui ? (Mt.y = $t.sa, Mt.O = $t.ta + Fe, Mt.f = $t.qa, Mt.N = $t.ra + Mi, Mt.ea = $t.Ha, Mt.W = $t.Ia + Mi) : (Pe -= Le, Mt.y = gi, Mt.O = Ci, Mt.f = Ye, Mt.N = Ae, Mt.ea = _i, Mt.W = ki), hi || (Ee -= Le), Ee > Mt.o && (Ee = Mt.o), Mt.F = null, Mt.J = null, $t.Fa != null && 0 < $t.Fa.length && Pe < Ee && (Mt.J = si($t, Mt, Pe, Ee - Pe), Mt.F = $t.mb, Mt.F == null && Mt.F.length == 0)) {
                                Je = ri($t, 3, "Could not decode alpha data.");
                                break e;
                              }
                              Pe < Mt.j && (Le = Mt.j - Pe, Pe = Mt.j, t(!(1 & Le)), Mt.O += $t.R * Le, Mt.N += $t.B * (Le >> 1), Mt.W += $t.B * (Le >> 1), Mt.F != null && (Mt.J += Mt.width * Le)), Pe < Ee && (Mt.O += Mt.v, Mt.N += Mt.v >> 1, Mt.W += Mt.v >> 1, Mt.F != null && (Mt.J += Mt.v), Mt.ka = Pe - Mt.j, Mt.U = Mt.va - Mt.v, Mt.T = Ee - Pe, Je = Mt.put(Mt));
                            }
                            ge + 1 != $t.Ic || hi || (i($t.sa, $t.ta - ce, gi, Ci + 16 * $t.R, ce), i($t.qa, $t.ra - qe, Ye, Ae + 8 * $t.B, qe), i($t.Ha, $t.Ia - qe, _i, ki + 8 * $t.B, qe));
                          }
                          if (!Je) return ri(we, 6, "Output aborted.");
                        }
                        return 1;
                      })(U, nt)), nt.bc != null && nt.bc(nt), ht &= 1;
                    }
                    return ht ? (U.cb = 0, ht) : 0;
                  })(o, m) || (h = o.a);
                }
              } else h = o.a;
            }
            h == 0 && P.Oa != null && P.Oa.fd && (h = kr(P.ba));
          }
          P = h;
        }
        S = P != 0 ? null : 11 > S ? T.f.RGBA.eb : T.f.kb.y;
      } else S = null;
      return S;
    };
    var Th = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
  };
  function c(b, H) {
    for (var v = "", F = 0; F < 4; F++) v += String.fromCharCode(b[H++]);
    return v;
  }
  function d(b, H) {
    return b[H + 0] | b[H + 1] << 8;
  }
  function y(b, H) {
    return (b[H + 0] | b[H + 1] << 8 | b[H + 2] << 16) >>> 0;
  }
  function A(b, H) {
    return (b[H + 0] | b[H + 1] << 8 | b[H + 2] << 16 | b[H + 3] << 24) >>> 0;
  }
  new l();
  var g = [0], B = [0], O = [], V = new l(), k = n, J = (function(b, H) {
    var v = {}, F = 0, D = !1, q = 0, it = 0;
    if (v.frames = [], !/** @license
       * Copyright (c) 2017 Dominik Homberger
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      https://webpjs.appspot.com
      WebPRiffParser dominikhlbg@gmail.com
      */
    (function(N, R) {
      for (var z = 0; z < 4; z++) if (N[R + z] != "RIFF".charCodeAt(z)) return !0;
      return !1;
    })(b, H)) {
      for (A(b, H += 4), H += 8; H < b.length; ) {
        var ut = c(b, H), ot = A(b, H += 4);
        H += 4;
        var et = ot + (1 & ot);
        switch (ut) {
          case "VP8 ":
          case "VP8L":
            v.frames[F] === void 0 && (v.frames[F] = {}), (ft = v.frames[F]).src_off = D ? it : H - 8, ft.src_size = q + ot + 8, F++, D && (D = !1, q = 0, it = 0);
            break;
          case "VP8X":
            (ft = v.header = {}).feature_flags = b[H];
            var ct = H + 4;
            ft.canvas_width = 1 + y(b, ct), ct += 3, ft.canvas_height = 1 + y(b, ct), ct += 3;
            break;
          case "ALPH":
            D = !0, q = et + 8, it = H - 8;
            break;
          case "ANIM":
            (ft = v.header).bgcolor = A(b, H), ct = H + 4, ft.loop_count = d(b, ct), ct += 2;
            break;
          case "ANMF":
            var Nt, ft;
            (ft = v.frames[F] = {}).offset_x = 2 * y(b, H), H += 3, ft.offset_y = 2 * y(b, H), H += 3, ft.width = 1 + y(b, H), H += 3, ft.height = 1 + y(b, H), H += 3, ft.duration = y(b, H), H += 3, Nt = b[H++], ft.dispose = 1 & Nt, ft.blend = Nt >> 1 & 1;
        }
        ut != "ANMF" && (H += et);
      }
      return v;
    }
  })(k, 0);
  J.response = k, J.rgbaoutput = !0, J.dataurl = !1;
  var Z = J.header ? J.header : null, Y = J.frames ? J.frames : null;
  if (Z) {
    Z.loop_counter = Z.loop_count, g = [Z.canvas_height], B = [Z.canvas_width];
    for (var vt = 0; vt < Y.length && Y[vt].blend != 0; vt++) ;
  }
  var Ft = Y[0], lt = V.WebPDecodeRGBA(k, Ft.src_off, Ft.src_size, B, g);
  Ft.rgba = lt, Ft.imgwidth = B[0], Ft.imgheight = g[0];
  for (var M = 0; M < B[0] * g[0] * 4; M++) O[M] = lt[M];
  return this.width = B, this.height = g, this.data = O, this;
}
function gp() {
  var n, t = this.internal.__metadata__.metadata, e = unescape(encodeURIComponent(t));
  n = this.internal.__metadata__.rawXml ? e : '<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceUri + '"><jspdf:metadata>' + e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") + "</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>", this.internal.__metadata__.metadataObjectNumber = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + n.length + " >>"), this.internal.write("stream"), this.internal.write(n), this.internal.write("endstream"), this.internal.write("endobj");
}
function mp() {
  this.internal.__metadata__.metadataObjectNumber && this.internal.write("/Metadata " + this.internal.__metadata__.metadataObjectNumber + " 0 R");
}
(function(n) {
  var t, e, i, r, s, u, a, l, c, d = function(N) {
    return N = N || {}, this.isStrokeTransparent = N.isStrokeTransparent || !1, this.strokeOpacity = N.strokeOpacity || 1, this.strokeStyle = N.strokeStyle || "#000000", this.fillStyle = N.fillStyle || "#000000", this.isFillTransparent = N.isFillTransparent || !1, this.fillOpacity = N.fillOpacity || 1, this.font = N.font || "10px sans-serif", this.textBaseline = N.textBaseline || "alphabetic", this.textAlign = N.textAlign || "left", this.lineWidth = N.lineWidth || 1, this.lineJoin = N.lineJoin || "miter", this.lineCap = N.lineCap || "butt", this.path = N.path || [], this.transform = N.transform !== void 0 ? N.transform.clone() : new l(), this.globalCompositeOperation = N.globalCompositeOperation || "normal", this.globalAlpha = N.globalAlpha || 1, this.clip_path = N.clip_path || [], this.currentPoint = N.currentPoint || new u(), this.miterLimit = N.miterLimit || 10, this.lastPoint = N.lastPoint || new u(), this.lineDashOffset = N.lineDashOffset || 0, this.lineDash = N.lineDash || [], this.margin = N.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = N.prevPageLastElemOffset || 0, this.ignoreClearRect = typeof N.ignoreClearRect != "boolean" || N.ignoreClearRect, this;
  };
  n.events.push(["initialized", function() {
    this.context2d = new y(this), t = this.internal.f2, e = this.internal.getCoordinateString, i = this.internal.getVerticalCoordinateString, r = this.internal.getHorizontalCoordinate, s = this.internal.getVerticalCoordinate, u = this.internal.Point, a = this.internal.Rectangle, l = this.internal.Matrix, c = new d();
  }]);
  var y = function(N) {
    Object.defineProperty(this, "canvas", { get: function() {
      return { parentNode: !1, style: !1 };
    } });
    var R = N;
    Object.defineProperty(this, "pdf", { get: function() {
      return R;
    } });
    var z = !1;
    Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
      return z;
    }, set: function(I) {
      z = !!I;
    } });
    var X = !1;
    Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
      return X;
    }, set: function(I) {
      X = !!I;
    } });
    var Q = 0;
    Object.defineProperty(this, "posX", { get: function() {
      return Q;
    }, set: function(I) {
      isNaN(I) || (Q = I);
    } });
    var st = 0;
    Object.defineProperty(this, "posY", { get: function() {
      return st;
    }, set: function(I) {
      isNaN(I) || (st = I);
    } }), Object.defineProperty(this, "margin", { get: function() {
      return c.margin;
    }, set: function(I) {
      var Et;
      typeof I == "number" ? Et = [I, I, I, I] : ((Et = new Array(4))[0] = I[0], Et[1] = I.length >= 2 ? I[1] : Et[0], Et[2] = I.length >= 3 ? I[2] : Et[0], Et[3] = I.length >= 4 ? I[3] : Et[1]), c.margin = Et;
    } });
    var gt = !1;
    Object.defineProperty(this, "autoPaging", { get: function() {
      return gt;
    }, set: function(I) {
      gt = I;
    } });
    var mt = 0;
    Object.defineProperty(this, "lastBreak", { get: function() {
      return mt;
    }, set: function(I) {
      mt = I;
    } });
    var yt = [];
    Object.defineProperty(this, "pageBreaks", { get: function() {
      return yt;
    }, set: function(I) {
      yt = I;
    } }), Object.defineProperty(this, "ctx", { get: function() {
      return c;
    }, set: function(I) {
      I instanceof d && (c = I);
    } }), Object.defineProperty(this, "path", { get: function() {
      return c.path;
    }, set: function(I) {
      c.path = I;
    } });
    var Ct = [];
    Object.defineProperty(this, "ctxStack", { get: function() {
      return Ct;
    }, set: function(I) {
      Ct = I;
    } }), Object.defineProperty(this, "fillStyle", { get: function() {
      return this.ctx.fillStyle;
    }, set: function(I) {
      var Et;
      Et = A(I), this.ctx.fillStyle = Et.style, this.ctx.isFillTransparent = Et.a === 0, this.ctx.fillOpacity = Et.a, this.pdf.setFillColor(Et.r, Et.g, Et.b, { a: Et.a }), this.pdf.setTextColor(Et.r, Et.g, Et.b, { a: Et.a });
    } }), Object.defineProperty(this, "strokeStyle", { get: function() {
      return this.ctx.strokeStyle;
    }, set: function(I) {
      var Et = A(I);
      this.ctx.strokeStyle = Et.style, this.ctx.isStrokeTransparent = Et.a === 0, this.ctx.strokeOpacity = Et.a, Et.a === 0 ? this.pdf.setDrawColor(255, 255, 255) : (Et.a, this.pdf.setDrawColor(Et.r, Et.g, Et.b));
    } }), Object.defineProperty(this, "lineCap", { get: function() {
      return this.ctx.lineCap;
    }, set: function(I) {
      ["butt", "round", "square"].indexOf(I) !== -1 && (this.ctx.lineCap = I, this.pdf.setLineCap(I));
    } }), Object.defineProperty(this, "lineWidth", { get: function() {
      return this.ctx.lineWidth;
    }, set: function(I) {
      isNaN(I) || (this.ctx.lineWidth = I, this.pdf.setLineWidth(I));
    } }), Object.defineProperty(this, "lineJoin", { get: function() {
      return this.ctx.lineJoin;
    }, set: function(I) {
      ["bevel", "round", "miter"].indexOf(I) !== -1 && (this.ctx.lineJoin = I, this.pdf.setLineJoin(I));
    } }), Object.defineProperty(this, "miterLimit", { get: function() {
      return this.ctx.miterLimit;
    }, set: function(I) {
      isNaN(I) || (this.ctx.miterLimit = I, this.pdf.setMiterLimit(I));
    } }), Object.defineProperty(this, "textBaseline", { get: function() {
      return this.ctx.textBaseline;
    }, set: function(I) {
      this.ctx.textBaseline = I;
    } }), Object.defineProperty(this, "textAlign", { get: function() {
      return this.ctx.textAlign;
    }, set: function(I) {
      ["right", "end", "center", "left", "start"].indexOf(I) !== -1 && (this.ctx.textAlign = I);
    } });
    var It = null, Bt = null, Ht = null;
    Object.defineProperty(this, "fontFaces", { get: function() {
      return Ht;
    }, set: function(I) {
      It = null, Bt = null, Ht = I;
    } }), Object.defineProperty(this, "font", { get: function() {
      return this.ctx.font;
    }, set: function(I) {
      var Et;
      if (this.ctx.font = I, (Et = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(I)) !== null) {
        var St = Et[1];
        Et[2];
        var Ut = Et[3], L = Et[4];
        Et[5];
        var G = Et[6], E = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(L)[2];
        L = Math.floor(E === "px" ? parseFloat(L) * this.pdf.internal.scaleFactor : E === "em" ? parseFloat(L) * this.pdf.getFontSize() : parseFloat(L) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(L);
        var K = (function(qt) {
          var Ne, me, se = [], bt = qt.trim();
          if (bt === "") return vl;
          if (bt in ju) return [ju[bt]];
          for (; bt !== ""; ) {
            switch (me = null, Ne = (bt = Uu(bt)).charAt(0)) {
              case '"':
              case "'":
                me = hp(bt.substring(1), Ne);
                break;
              default:
                me = up(bt);
            }
            if (me === null || (se.push(me[0]), (bt = Uu(me[1])) !== "" && bt.charAt(0) !== ",")) return vl;
            bt = bt.replace(/^,/, "");
          }
          return se;
        })(G);
        if (this.fontFaces) {
          var at = (function(qt, Ne) {
            var me = qt.getFontList(), se = JSON.stringify(me);
            if (It === null || Bt !== se) {
              var bt = (function(Se) {
                var Kt = [];
                return Object.keys(Se).forEach(function(ye) {
                  Se[ye].forEach(function(ie) {
                    var ee = null;
                    switch (ie) {
                      case "bold":
                        ee = { family: ye, weight: "bold" };
                        break;
                      case "italic":
                        ee = { family: ye, style: "italic" };
                        break;
                      case "bolditalic":
                        ee = { family: ye, weight: "bold", style: "italic" };
                        break;
                      case "":
                      case "normal":
                        ee = { family: ye };
                    }
                    ee !== null && (ee.ref = { name: ye, style: ie }, Kt.push(ee));
                  });
                }), Kt;
              })(me);
              It = (function(Se) {
                for (var Kt = {}, ye = 0; ye < Se.length; ++ye) {
                  var ie = ml(Se[ye]), ee = ie.family, ke = ie.stretch, de = ie.style, ne = ie.weight;
                  Kt[ee] = Kt[ee] || {}, Kt[ee][ke] = Kt[ee][ke] || {}, Kt[ee][ke][de] = Kt[ee][ke][de] || {}, Kt[ee][ke][de][ne] = ie;
                }
                return Kt;
              })(bt.concat(Ne)), Bt = se;
            }
            return It;
          })(this.pdf, this.fontFaces), Rt = K.map(function(qt) {
            return { family: qt, stretch: "normal", weight: Ut, style: St };
          }), jt = (function(qt, Ne, me) {
            for (var se = (me = me || {}).defaultFontFamily || "times", bt = Object.assign({}, lp, me.genericFontFamilies || {}), Se = null, Kt = null, ye = 0; ye < Ne.length; ++ye) if (bt[(Se = ml(Ne[ye])).family] && (Se.family = bt[Se.family]), qt.hasOwnProperty(Se.family)) {
              Kt = qt[Se.family];
              break;
            }
            if (!(Kt = Kt || qt[se])) throw new Error("Could not find a font-family for the rule '" + Wu(Se) + "' and default family '" + se + "'.");
            if (Kt = (function(ie, ee) {
              if (ee[ie]) return ee[ie];
              var ke = Rl[ie], de = ke <= Rl.normal ? -1 : 1, ne = qu(ee, Gc, ke, de);
              if (!ne) throw new Error("Could not find a matching font-stretch value for " + ie);
              return ne;
            })(Se.stretch, Kt), Kt = (function(ie, ee) {
              if (ee[ie]) return ee[ie];
              for (var ke = Hc[ie], de = 0; de < ke.length; ++de) if (ee[ke[de]]) return ee[ke[de]];
              throw new Error("Could not find a matching font-style for " + ie);
            })(Se.style, Kt), !(Kt = (function(ie, ee) {
              if (ee[ie]) return ee[ie];
              if (ie === 400 && ee[500]) return ee[500];
              if (ie === 500 && ee[400]) return ee[400];
              var ke = ap[ie], de = qu(ee, Vc, ke, ie < 400 ? -1 : 1);
              if (!de) throw new Error("Could not find a matching font-weight for value " + ie);
              return de;
            })(Se.weight, Kt))) throw new Error("Failed to resolve a font for the rule '" + Wu(Se) + "'.");
            return Kt;
          })(at, Rt);
          this.pdf.setFont(jt.ref.name, jt.ref.style);
        } else {
          var Dt = "";
          (Ut === "bold" || parseInt(Ut, 10) >= 700 || St === "bold") && (Dt = "bold"), St === "italic" && (Dt += "italic"), Dt.length === 0 && (Dt = "normal");
          for (var Qt = "", te = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, Ot = 0; Ot < K.length; Ot++) {
            if (this.pdf.internal.getFont(K[Ot], Dt, { noFallback: !0, disableWarning: !0 }) !== void 0) {
              Qt = K[Ot];
              break;
            }
            if (Dt === "bolditalic" && this.pdf.internal.getFont(K[Ot], "bold", { noFallback: !0, disableWarning: !0 }) !== void 0) Qt = K[Ot], Dt = "bold";
            else if (this.pdf.internal.getFont(K[Ot], "normal", { noFallback: !0, disableWarning: !0 }) !== void 0) {
              Qt = K[Ot], Dt = "normal";
              break;
            }
          }
          if (Qt === "") {
            for (var Jt = 0; Jt < K.length; Jt++) if (te[K[Jt]]) {
              Qt = te[K[Jt]];
              break;
            }
          }
          Qt = Qt === "" ? "Times" : Qt, this.pdf.setFont(Qt, Dt);
        }
      }
    } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
      return this.ctx.globalCompositeOperation;
    }, set: function(I) {
      this.ctx.globalCompositeOperation = I;
    } }), Object.defineProperty(this, "globalAlpha", { get: function() {
      return this.ctx.globalAlpha;
    }, set: function(I) {
      this.ctx.globalAlpha = I;
    } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
      return this.ctx.lineDashOffset;
    }, set: function(I) {
      this.ctx.lineDashOffset = I, ft.call(this);
    } }), Object.defineProperty(this, "lineDash", { get: function() {
      return this.ctx.lineDash;
    }, set: function(I) {
      this.ctx.lineDash = I, ft.call(this);
    } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
      return this.ctx.ignoreClearRect;
    }, set: function(I) {
      this.ctx.ignoreClearRect = !!I;
    } });
  };
  y.prototype.setLineDash = function(N) {
    this.lineDash = N;
  }, y.prototype.getLineDash = function() {
    return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
  }, y.prototype.fill = function() {
    Y.call(this, "fill", !1);
  }, y.prototype.stroke = function() {
    Y.call(this, "stroke", !1);
  }, y.prototype.beginPath = function() {
    this.path = [{ type: "begin" }];
  }, y.prototype.moveTo = function(N, R) {
    if (isNaN(N) || isNaN(R)) throw Ie.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
    var z = this.ctx.transform.applyToPoint(new u(N, R));
    this.path.push({ type: "mt", x: z.x, y: z.y }), this.ctx.lastPoint = new u(N, R);
  }, y.prototype.closePath = function() {
    var N = new u(0, 0), R = 0;
    for (R = this.path.length - 1; R !== -1; R--) if (this.path[R].type === "begin" && Te(this.path[R + 1]) === "object" && typeof this.path[R + 1].x == "number") {
      N = new u(this.path[R + 1].x, this.path[R + 1].y);
      break;
    }
    this.path.push({ type: "close" }), this.ctx.lastPoint = new u(N.x, N.y);
  }, y.prototype.lineTo = function(N, R) {
    if (isNaN(N) || isNaN(R)) throw Ie.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
    var z = this.ctx.transform.applyToPoint(new u(N, R));
    this.path.push({ type: "lt", x: z.x, y: z.y }), this.ctx.lastPoint = new u(z.x, z.y);
  }, y.prototype.clip = function() {
    this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), Y.call(this, null, !0);
  }, y.prototype.quadraticCurveTo = function(N, R, z, X) {
    if (isNaN(z) || isNaN(X) || isNaN(N) || isNaN(R)) throw Ie.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
    var Q = this.ctx.transform.applyToPoint(new u(z, X)), st = this.ctx.transform.applyToPoint(new u(N, R));
    this.path.push({ type: "qct", x1: st.x, y1: st.y, x: Q.x, y: Q.y }), this.ctx.lastPoint = new u(Q.x, Q.y);
  }, y.prototype.bezierCurveTo = function(N, R, z, X, Q, st) {
    if (isNaN(Q) || isNaN(st) || isNaN(N) || isNaN(R) || isNaN(z) || isNaN(X)) throw Ie.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
    var gt = this.ctx.transform.applyToPoint(new u(Q, st)), mt = this.ctx.transform.applyToPoint(new u(N, R)), yt = this.ctx.transform.applyToPoint(new u(z, X));
    this.path.push({ type: "bct", x1: mt.x, y1: mt.y, x2: yt.x, y2: yt.y, x: gt.x, y: gt.y }), this.ctx.lastPoint = new u(gt.x, gt.y);
  }, y.prototype.arc = function(N, R, z, X, Q, st) {
    if (isNaN(N) || isNaN(R) || isNaN(z) || isNaN(X) || isNaN(Q)) throw Ie.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
    if (st = !!st, !this.ctx.transform.isIdentity) {
      var gt = this.ctx.transform.applyToPoint(new u(N, R));
      N = gt.x, R = gt.y;
      var mt = this.ctx.transform.applyToPoint(new u(0, z)), yt = this.ctx.transform.applyToPoint(new u(0, 0));
      z = Math.sqrt(Math.pow(mt.x - yt.x, 2) + Math.pow(mt.y - yt.y, 2));
    }
    Math.abs(Q - X) >= 2 * Math.PI && (X = 0, Q = 2 * Math.PI), this.path.push({ type: "arc", x: N, y: R, radius: z, startAngle: X, endAngle: Q, counterclockwise: st });
  }, y.prototype.arcTo = function(N, R, z, X, Q) {
    throw new Error("arcTo not implemented.");
  }, y.prototype.rect = function(N, R, z, X) {
    if (isNaN(N) || isNaN(R) || isNaN(z) || isNaN(X)) throw Ie.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
    this.moveTo(N, R), this.lineTo(N + z, R), this.lineTo(N + z, R + X), this.lineTo(N, R + X), this.lineTo(N, R), this.lineTo(N + z, R), this.lineTo(N, R);
  }, y.prototype.fillRect = function(N, R, z, X) {
    if (isNaN(N) || isNaN(R) || isNaN(z) || isNaN(X)) throw Ie.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
    if (!g.call(this)) {
      var Q = {};
      this.lineCap !== "butt" && (Q.lineCap = this.lineCap, this.lineCap = "butt"), this.lineJoin !== "miter" && (Q.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(N, R, z, X), this.fill(), Q.hasOwnProperty("lineCap") && (this.lineCap = Q.lineCap), Q.hasOwnProperty("lineJoin") && (this.lineJoin = Q.lineJoin);
    }
  }, y.prototype.strokeRect = function(N, R, z, X) {
    if (isNaN(N) || isNaN(R) || isNaN(z) || isNaN(X)) throw Ie.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
    B.call(this) || (this.beginPath(), this.rect(N, R, z, X), this.stroke());
  }, y.prototype.clearRect = function(N, R, z, X) {
    if (isNaN(N) || isNaN(R) || isNaN(z) || isNaN(X)) throw Ie.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
    this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(N, R, z, X));
  }, y.prototype.save = function(N) {
    N = typeof N != "boolean" || N;
    for (var R = this.pdf.internal.getCurrentPageInfo().pageNumber, z = 0; z < this.pdf.internal.getNumberOfPages(); z++) this.pdf.setPage(z + 1), this.pdf.internal.out("q");
    if (this.pdf.setPage(R), N) {
      this.ctx.fontSize = this.pdf.internal.getFontSize();
      var X = new d(this.ctx);
      this.ctxStack.push(this.ctx), this.ctx = X;
    }
  }, y.prototype.restore = function(N) {
    N = typeof N != "boolean" || N;
    for (var R = this.pdf.internal.getCurrentPageInfo().pageNumber, z = 0; z < this.pdf.internal.getNumberOfPages(); z++) this.pdf.setPage(z + 1), this.pdf.internal.out("Q");
    this.pdf.setPage(R), N && this.ctxStack.length !== 0 && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
  }, y.prototype.toDataURL = function() {
    throw new Error("toDataUrl not implemented.");
  };
  var A = function(N) {
    var R, z, X, Q;
    if (N.isCanvasGradient === !0 && (N = N.getColor()), !N) return { r: 0, g: 0, b: 0, a: 0, style: N };
    if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(N)) R = 0, z = 0, X = 0, Q = 0;
    else {
      var st = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(N);
      if (st !== null) R = parseInt(st[1]), z = parseInt(st[2]), X = parseInt(st[3]), Q = 1;
      else if ((st = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(N)) !== null) R = parseInt(st[1]), z = parseInt(st[2]), X = parseInt(st[3]), Q = parseFloat(st[4]);
      else {
        if (Q = 1, typeof N == "string" && N.charAt(0) !== "#") {
          var gt = new Mc(N);
          N = gt.ok ? gt.toHex() : "#000000";
        }
        N.length === 4 ? (R = N.substring(1, 2), R += R, z = N.substring(2, 3), z += z, X = N.substring(3, 4), X += X) : (R = N.substring(1, 3), z = N.substring(3, 5), X = N.substring(5, 7)), R = parseInt(R, 16), z = parseInt(z, 16), X = parseInt(X, 16);
      }
    }
    return { r: R, g: z, b: X, a: Q, style: N };
  }, g = function() {
    return this.ctx.isFillTransparent || this.globalAlpha == 0;
  }, B = function() {
    return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
  };
  y.prototype.fillText = function(N, R, z, X) {
    if (isNaN(R) || isNaN(z) || typeof N != "string") throw Ie.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
    if (X = isNaN(X) ? void 0 : X, !g.call(this)) {
      var Q = et(this.ctx.transform.rotation), st = this.ctx.transform.scaleX;
      F.call(this, { text: N, x: R, y: z, scale: st, angle: Q, align: this.textAlign, maxWidth: X });
    }
  }, y.prototype.strokeText = function(N, R, z, X) {
    if (isNaN(R) || isNaN(z) || typeof N != "string") throw Ie.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
    if (!B.call(this)) {
      X = isNaN(X) ? void 0 : X;
      var Q = et(this.ctx.transform.rotation), st = this.ctx.transform.scaleX;
      F.call(this, { text: N, x: R, y: z, scale: st, renderingMode: "stroke", angle: Q, align: this.textAlign, maxWidth: X });
    }
  }, y.prototype.measureText = function(N) {
    if (typeof N != "string") throw Ie.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
    var R = this.pdf, z = this.pdf.internal.scaleFactor, X = R.internal.getFontSize(), Q = R.getStringUnitWidth(N) * X / R.internal.scaleFactor;
    return new function(st) {
      var gt = (st = st || {}).width || 0;
      return Object.defineProperty(this, "width", { get: function() {
        return gt;
      } }), this;
    }({ width: Q *= Math.round(96 * z / 72 * 1e4) / 1e4 });
  }, y.prototype.scale = function(N, R) {
    if (isNaN(N) || isNaN(R)) throw Ie.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
    var z = new l(N, 0, 0, R, 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(z);
  }, y.prototype.rotate = function(N) {
    if (isNaN(N)) throw Ie.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
    var R = new l(Math.cos(N), Math.sin(N), -Math.sin(N), Math.cos(N), 0, 0);
    this.ctx.transform = this.ctx.transform.multiply(R);
  }, y.prototype.translate = function(N, R) {
    if (isNaN(N) || isNaN(R)) throw Ie.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
    var z = new l(1, 0, 0, 1, N, R);
    this.ctx.transform = this.ctx.transform.multiply(z);
  }, y.prototype.transform = function(N, R, z, X, Q, st) {
    if (isNaN(N) || isNaN(R) || isNaN(z) || isNaN(X) || isNaN(Q) || isNaN(st)) throw Ie.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
    var gt = new l(N, R, z, X, Q, st);
    this.ctx.transform = this.ctx.transform.multiply(gt);
  }, y.prototype.setTransform = function(N, R, z, X, Q, st) {
    N = isNaN(N) ? 1 : N, R = isNaN(R) ? 0 : R, z = isNaN(z) ? 0 : z, X = isNaN(X) ? 1 : X, Q = isNaN(Q) ? 0 : Q, st = isNaN(st) ? 0 : st, this.ctx.transform = new l(N, R, z, X, Q, st);
  };
  var O = function() {
    return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
  };
  y.prototype.drawImage = function(N, R, z, X, Q, st, gt, mt, yt) {
    var Ct = this.pdf.getImageProperties(N), It = 1, Bt = 1, Ht = 1, I = 1;
    X !== void 0 && mt !== void 0 && (Ht = mt / X, I = yt / Q, It = Ct.width / X * mt / X, Bt = Ct.height / Q * yt / Q), st === void 0 && (st = R, gt = z, R = 0, z = 0), X !== void 0 && mt === void 0 && (mt = X, yt = Q), X === void 0 && mt === void 0 && (mt = Ct.width, yt = Ct.height);
    var Et = this.ctx.transform.decompose(), St = et(Et.rotate.shx), Ut = new l(), L = (Ut = (Ut = (Ut = Ut.multiply(Et.translate)).multiply(Et.skew)).multiply(Et.scale)).applyToRectangle(new a(st - R * Ht, gt - z * I, X * It, Q * Bt));
    if (this.autoPaging) {
      for (var G, E = V.call(this, L), K = [], at = 0; at < E.length; at += 1) K.indexOf(E[at]) === -1 && K.push(E[at]);
      Z(K);
      for (var Rt = K[0], jt = K[K.length - 1], Dt = Rt; Dt < jt + 1; Dt++) {
        this.pdf.setPage(Dt);
        var Qt = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], te = Dt === 1 ? this.posY + this.margin[0] : this.margin[0], Ot = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], Jt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], qt = Dt === 1 ? 0 : Ot + (Dt - 2) * Jt;
        if (this.ctx.clip_path.length !== 0) {
          var Ne = this.path;
          G = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = J(G, this.posX + this.margin[3], -qt + te + this.ctx.prevPageLastElemOffset), vt.call(this, "fill", !0), this.path = Ne;
        }
        var me = JSON.parse(JSON.stringify(L));
        me = J([me], this.posX + this.margin[3], -qt + te + this.ctx.prevPageLastElemOffset)[0];
        var se = (Dt > Rt || Dt < jt) && O.call(this);
        se && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Qt, Jt, null).clip().discardPath()), this.pdf.addImage(N, "JPEG", me.x, me.y, me.w, me.h, null, null, St), se && this.pdf.restoreGraphicsState();
      }
    } else this.pdf.addImage(N, "JPEG", L.x, L.y, L.w, L.h, null, null, St);
  };
  var V = function(N, R, z) {
    var X = [];
    R = R || this.pdf.internal.pageSize.width, z = z || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
    var Q = this.posY + this.ctx.prevPageLastElemOffset;
    switch (N.type) {
      default:
      case "mt":
      case "lt":
        X.push(Math.floor((N.y + Q) / z) + 1);
        break;
      case "arc":
        X.push(Math.floor((N.y + Q - N.radius) / z) + 1), X.push(Math.floor((N.y + Q + N.radius) / z) + 1);
        break;
      case "qct":
        var st = ct(this.ctx.lastPoint.x, this.ctx.lastPoint.y, N.x1, N.y1, N.x, N.y);
        X.push(Math.floor((st.y + Q) / z) + 1), X.push(Math.floor((st.y + st.h + Q) / z) + 1);
        break;
      case "bct":
        var gt = Nt(this.ctx.lastPoint.x, this.ctx.lastPoint.y, N.x1, N.y1, N.x2, N.y2, N.x, N.y);
        X.push(Math.floor((gt.y + Q) / z) + 1), X.push(Math.floor((gt.y + gt.h + Q) / z) + 1);
        break;
      case "rect":
        X.push(Math.floor((N.y + Q) / z) + 1), X.push(Math.floor((N.y + N.h + Q) / z) + 1);
    }
    for (var mt = 0; mt < X.length; mt += 1) for (; this.pdf.internal.getNumberOfPages() < X[mt]; ) k.call(this);
    return X;
  }, k = function() {
    var N = this.fillStyle, R = this.strokeStyle, z = this.font, X = this.lineCap, Q = this.lineWidth, st = this.lineJoin;
    this.pdf.addPage(), this.fillStyle = N, this.strokeStyle = R, this.font = z, this.lineCap = X, this.lineWidth = Q, this.lineJoin = st;
  }, J = function(N, R, z) {
    for (var X = 0; X < N.length; X++) switch (N[X].type) {
      case "bct":
        N[X].x2 += R, N[X].y2 += z;
      case "qct":
        N[X].x1 += R, N[X].y1 += z;
      default:
        N[X].x += R, N[X].y += z;
    }
    return N;
  }, Z = function(N) {
    return N.sort(function(R, z) {
      return R - z;
    });
  }, Y = function(N, R) {
    var z = this.fillStyle, X = this.strokeStyle, Q = this.lineCap, st = this.lineWidth, gt = Math.abs(st * this.ctx.transform.scaleX), mt = this.lineJoin;
    if (this.autoPaging) {
      for (var yt, Ct, It = JSON.parse(JSON.stringify(this.path)), Bt = JSON.parse(JSON.stringify(this.path)), Ht = [], I = 0; I < Bt.length; I++) if (Bt[I].x !== void 0) for (var Et = V.call(this, Bt[I]), St = 0; St < Et.length; St += 1) Ht.indexOf(Et[St]) === -1 && Ht.push(Et[St]);
      for (var Ut = 0; Ut < Ht.length; Ut++) for (; this.pdf.internal.getNumberOfPages() < Ht[Ut]; ) k.call(this);
      Z(Ht);
      for (var L = Ht[0], G = Ht[Ht.length - 1], E = L; E < G + 1; E++) {
        this.pdf.setPage(E), this.fillStyle = z, this.strokeStyle = X, this.lineCap = Q, this.lineWidth = gt, this.lineJoin = mt;
        var K = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], at = E === 1 ? this.posY + this.margin[0] : this.margin[0], Rt = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], jt = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], Dt = E === 1 ? 0 : Rt + (E - 2) * jt;
        if (this.ctx.clip_path.length !== 0) {
          var Qt = this.path;
          yt = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = J(yt, this.posX + this.margin[3], -Dt + at + this.ctx.prevPageLastElemOffset), vt.call(this, N, !0), this.path = Qt;
        }
        if (Ct = JSON.parse(JSON.stringify(It)), this.path = J(Ct, this.posX + this.margin[3], -Dt + at + this.ctx.prevPageLastElemOffset), R === !1 || E === 0) {
          var te = (E > L || E < G) && O.call(this);
          te && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], K, jt, null).clip().discardPath()), vt.call(this, N, R), te && this.pdf.restoreGraphicsState();
        }
        this.lineWidth = st;
      }
      this.path = It;
    } else this.lineWidth = gt, vt.call(this, N, R), this.lineWidth = st;
  }, vt = function(N, R) {
    if ((N !== "stroke" || R || !B.call(this)) && (N === "stroke" || R || !g.call(this))) {
      for (var z, X, Q = [], st = this.path, gt = 0; gt < st.length; gt++) {
        var mt = st[gt];
        switch (mt.type) {
          case "begin":
            Q.push({ begin: !0 });
            break;
          case "close":
            Q.push({ close: !0 });
            break;
          case "mt":
            Q.push({ start: mt, deltas: [], abs: [] });
            break;
          case "lt":
            var yt = Q.length;
            if (st[gt - 1] && !isNaN(st[gt - 1].x) && (z = [mt.x - st[gt - 1].x, mt.y - st[gt - 1].y], yt > 0)) {
              for (; yt >= 0; yt--) if (Q[yt - 1].close !== !0 && Q[yt - 1].begin !== !0) {
                Q[yt - 1].deltas.push(z), Q[yt - 1].abs.push(mt);
                break;
              }
            }
            break;
          case "bct":
            z = [mt.x1 - st[gt - 1].x, mt.y1 - st[gt - 1].y, mt.x2 - st[gt - 1].x, mt.y2 - st[gt - 1].y, mt.x - st[gt - 1].x, mt.y - st[gt - 1].y], Q[Q.length - 1].deltas.push(z);
            break;
          case "qct":
            var Ct = st[gt - 1].x + 2 / 3 * (mt.x1 - st[gt - 1].x), It = st[gt - 1].y + 2 / 3 * (mt.y1 - st[gt - 1].y), Bt = mt.x + 2 / 3 * (mt.x1 - mt.x), Ht = mt.y + 2 / 3 * (mt.y1 - mt.y), I = mt.x, Et = mt.y;
            z = [Ct - st[gt - 1].x, It - st[gt - 1].y, Bt - st[gt - 1].x, Ht - st[gt - 1].y, I - st[gt - 1].x, Et - st[gt - 1].y], Q[Q.length - 1].deltas.push(z);
            break;
          case "arc":
            Q.push({ deltas: [], abs: [], arc: !0 }), Array.isArray(Q[Q.length - 1].abs) && Q[Q.length - 1].abs.push(mt);
        }
      }
      X = R ? null : N === "stroke" ? "stroke" : "fill";
      for (var St = !1, Ut = 0; Ut < Q.length; Ut++) if (Q[Ut].arc) for (var L = Q[Ut].abs, G = 0; G < L.length; G++) {
        var E = L[G];
        E.type === "arc" ? M.call(this, E.x, E.y, E.radius, E.startAngle, E.endAngle, E.counterclockwise, void 0, R, !St) : D.call(this, E.x, E.y), St = !0;
      }
      else if (Q[Ut].close === !0) this.pdf.internal.out("h"), St = !1;
      else if (Q[Ut].begin !== !0) {
        var K = Q[Ut].start.x, at = Q[Ut].start.y;
        q.call(this, Q[Ut].deltas, K, at), St = !0;
      }
      X && b.call(this, X), R && H.call(this);
    }
  }, Ft = function(N) {
    var R = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, z = R * (this.pdf.internal.getLineHeightFactor() - 1);
    switch (this.ctx.textBaseline) {
      case "bottom":
        return N - z;
      case "top":
        return N + R - z;
      case "hanging":
        return N + R - 2 * z;
      case "middle":
        return N + R / 2 - z;
      default:
        return N;
    }
  }, lt = function(N) {
    return N + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
  };
  y.prototype.createLinearGradient = function() {
    var N = function() {
    };
    return N.colorStops = [], N.addColorStop = function(R, z) {
      this.colorStops.push([R, z]);
    }, N.getColor = function() {
      return this.colorStops.length === 0 ? "#000000" : this.colorStops[0][1];
    }, N.isCanvasGradient = !0, N;
  }, y.prototype.createPattern = function() {
    return this.createLinearGradient();
  }, y.prototype.createRadialGradient = function() {
    return this.createLinearGradient();
  };
  var M = function(N, R, z, X, Q, st, gt, mt, yt) {
    for (var Ct = ut.call(this, z, X, Q, st), It = 0; It < Ct.length; It++) {
      var Bt = Ct[It];
      It === 0 && (yt ? v.call(this, Bt.x1 + N, Bt.y1 + R) : D.call(this, Bt.x1 + N, Bt.y1 + R)), it.call(this, N, R, Bt.x2, Bt.y2, Bt.x3, Bt.y3, Bt.x4, Bt.y4);
    }
    mt ? H.call(this) : b.call(this, gt);
  }, b = function(N) {
    switch (N) {
      case "stroke":
        this.pdf.internal.out("S");
        break;
      case "fill":
        this.pdf.internal.out("f");
    }
  }, H = function() {
    this.pdf.clip(), this.pdf.discardPath();
  }, v = function(N, R) {
    this.pdf.internal.out(e(N) + " " + i(R) + " m");
  }, F = function(N) {
    var R;
    switch (N.align) {
      case "right":
      case "end":
        R = "right";
        break;
      case "center":
        R = "center";
        break;
      default:
        R = "left";
    }
    var z, X, Q, st = this.pdf.getTextDimensions(N.text), gt = Ft.call(this, N.y), mt = lt.call(this, gt) - st.h, yt = this.ctx.transform.applyToPoint(new u(N.x, gt));
    if (this.autoPaging) {
      var Ct = this.ctx.transform.decompose(), It = new l();
      It = (It = (It = It.multiply(Ct.translate)).multiply(Ct.skew)).multiply(Ct.scale);
      for (var Bt = this.ctx.transform.applyToRectangle(new a(N.x, gt, st.w, st.h)), Ht = It.applyToRectangle(new a(N.x, mt, st.w, st.h)), I = V.call(this, Ht), Et = [], St = 0; St < I.length; St += 1) Et.indexOf(I[St]) === -1 && Et.push(I[St]);
      Z(Et);
      for (var Ut = Et[0], L = Et[Et.length - 1], G = Ut; G < L + 1; G++) {
        this.pdf.setPage(G);
        var E = G === 1 ? this.posY + this.margin[0] : this.margin[0], K = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], at = this.pdf.internal.pageSize.height - this.margin[2], Rt = at - this.margin[0], jt = this.pdf.internal.pageSize.width - this.margin[1], Dt = jt - this.margin[3], Qt = G === 1 ? 0 : K + (G - 2) * Rt;
        if (this.ctx.clip_path.length !== 0) {
          var te = this.path;
          z = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = J(z, this.posX + this.margin[3], -1 * Qt + E), vt.call(this, "fill", !0), this.path = te;
        }
        var Ot = J([JSON.parse(JSON.stringify(Ht))], this.posX + this.margin[3], -Qt + E + this.ctx.prevPageLastElemOffset)[0];
        N.scale >= 0.01 && (X = this.pdf.internal.getFontSize(), this.pdf.setFontSize(X * N.scale), Q = this.lineWidth, this.lineWidth = Q * N.scale);
        var Jt = this.autoPaging !== "text";
        if (Jt || Ot.y + Ot.h <= at) {
          if (Jt || Ot.y >= E && Ot.x <= jt) {
            var qt = Jt ? N.text : this.pdf.splitTextToSize(N.text, N.maxWidth || jt - Ot.x)[0], Ne = J([JSON.parse(JSON.stringify(Bt))], this.posX + this.margin[3], -Qt + E + this.ctx.prevPageLastElemOffset)[0], me = Jt && (G > Ut || G < L) && O.call(this);
            me && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], Dt, Rt, null).clip().discardPath()), this.pdf.text(qt, Ne.x, Ne.y, { angle: N.angle, align: R, renderingMode: N.renderingMode }), me && this.pdf.restoreGraphicsState();
          }
        } else Ot.y < at && (this.ctx.prevPageLastElemOffset += at - Ot.y);
        N.scale >= 0.01 && (this.pdf.setFontSize(X), this.lineWidth = Q);
      }
    } else N.scale >= 0.01 && (X = this.pdf.internal.getFontSize(), this.pdf.setFontSize(X * N.scale), Q = this.lineWidth, this.lineWidth = Q * N.scale), this.pdf.text(N.text, yt.x + this.posX, yt.y + this.posY, { angle: N.angle, align: R, renderingMode: N.renderingMode, maxWidth: N.maxWidth }), N.scale >= 0.01 && (this.pdf.setFontSize(X), this.lineWidth = Q);
  }, D = function(N, R, z, X) {
    z = z || 0, X = X || 0, this.pdf.internal.out(e(N + z) + " " + i(R + X) + " l");
  }, q = function(N, R, z) {
    return this.pdf.lines(N, R, z, null, null);
  }, it = function(N, R, z, X, Q, st, gt, mt) {
    this.pdf.internal.out([t(r(z + N)), t(s(X + R)), t(r(Q + N)), t(s(st + R)), t(r(gt + N)), t(s(mt + R)), "c"].join(" "));
  }, ut = function(N, R, z, X) {
    for (var Q = 2 * Math.PI, st = Math.PI / 2; R > z; ) R -= Q;
    var gt = Math.abs(z - R);
    gt < Q && X && (gt = Q - gt);
    for (var mt = [], yt = X ? -1 : 1, Ct = R; gt > 1e-5; ) {
      var It = Ct + yt * Math.min(gt, st);
      mt.push(ot.call(this, N, Ct, It)), gt -= Math.abs(It - Ct), Ct = It;
    }
    return mt;
  }, ot = function(N, R, z) {
    var X = (z - R) / 2, Q = N * Math.cos(X), st = N * Math.sin(X), gt = Q, mt = -st, yt = gt * gt + mt * mt, Ct = yt + gt * Q + mt * st, It = 4 / 3 * (Math.sqrt(2 * yt * Ct) - Ct) / (gt * st - mt * Q), Bt = gt - It * mt, Ht = mt + It * gt, I = Bt, Et = -Ht, St = X + R, Ut = Math.cos(St), L = Math.sin(St);
    return { x1: N * Math.cos(R), y1: N * Math.sin(R), x2: Bt * Ut - Ht * L, y2: Bt * L + Ht * Ut, x3: I * Ut - Et * L, y3: I * L + Et * Ut, x4: N * Math.cos(z), y4: N * Math.sin(z) };
  }, et = function(N) {
    return 180 * N / Math.PI;
  }, ct = function(N, R, z, X, Q, st) {
    var gt = N + 0.5 * (z - N), mt = R + 0.5 * (X - R), yt = Q + 0.5 * (z - Q), Ct = st + 0.5 * (X - st), It = Math.min(N, Q, gt, yt), Bt = Math.max(N, Q, gt, yt), Ht = Math.min(R, st, mt, Ct), I = Math.max(R, st, mt, Ct);
    return new a(It, Ht, Bt - It, I - Ht);
  }, Nt = function(N, R, z, X, Q, st, gt, mt) {
    var yt, Ct, It, Bt, Ht, I, Et, St, Ut, L, G, E, K, at, Rt = z - N, jt = X - R, Dt = Q - z, Qt = st - X, te = gt - Q, Ot = mt - st;
    for (Ct = 0; Ct < 41; Ct++) Ut = (Et = (It = N + (yt = Ct / 40) * Rt) + yt * ((Ht = z + yt * Dt) - It)) + yt * (Ht + yt * (Q + yt * te - Ht) - Et), L = (St = (Bt = R + yt * jt) + yt * ((I = X + yt * Qt) - Bt)) + yt * (I + yt * (st + yt * Ot - I) - St), Ct == 0 ? (G = Ut, E = L, K = Ut, at = L) : (G = Math.min(G, Ut), E = Math.min(E, L), K = Math.max(K, Ut), at = Math.max(at, L));
    return new a(Math.round(G), Math.round(E), Math.round(K - G), Math.round(at - E));
  }, ft = function() {
    if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
      var N, R, z = (N = this.ctx.lineDash, R = this.ctx.lineDashOffset, JSON.stringify({ lineDash: N, lineDashOffset: R }));
      this.prevLineDash !== z && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = z);
    }
  };
})(Vt.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function(u) {
    var a, l, c, d, y, A, g, B, O, V;
    for (l = [], c = 0, d = (u += a = "\0\0\0\0".slice(u.length % 4 || 4)).length; d > c; c += 4) (y = (u.charCodeAt(c) << 24) + (u.charCodeAt(c + 1) << 16) + (u.charCodeAt(c + 2) << 8) + u.charCodeAt(c + 3)) !== 0 ? (A = (y = ((y = ((y = ((y = (y - (V = y % 85)) / 85) - (O = y % 85)) / 85) - (B = y % 85)) / 85) - (g = y % 85)) / 85) % 85, l.push(A + 33, g + 33, B + 33, O + 33, V + 33)) : l.push(122);
    return (function(k, J) {
      for (var Z = J; Z > 0; Z--) k.pop();
    })(l, a.length), String.fromCharCode.apply(String, l) + "~>";
  }, e = function(u) {
    var a, l, c, d, y, A = String, g = "length", B = 255, O = "charCodeAt", V = "slice", k = "replace";
    for (u[V](-2), u = u[V](0, -2)[k](/\s/g, "")[k]("z", "!!!!!"), c = [], d = 0, y = (u += a = "uuuuu"[V](u[g] % 5 || 5))[g]; y > d; d += 5) l = 52200625 * (u[O](d) - 33) + 614125 * (u[O](d + 1) - 33) + 7225 * (u[O](d + 2) - 33) + 85 * (u[O](d + 3) - 33) + (u[O](d + 4) - 33), c.push(B & l >> 24, B & l >> 16, B & l >> 8, B & l);
    return (function(J, Z) {
      for (var Y = Z; Y > 0; Y--) J.pop();
    })(c, a[g]), A.fromCharCode.apply(A, c);
  }, i = function(u) {
    return u.split("").map(function(a) {
      return ("0" + a.charCodeAt().toString(16)).slice(-2);
    }).join("") + ">";
  }, r = function(u) {
    var a = new RegExp(/^([0-9A-Fa-f]{2})+$/);
    if ((u = u.replace(/\s/g, "")).indexOf(">") !== -1 && (u = u.substr(0, u.indexOf(">"))), u.length % 2 && (u += "0"), a.test(u) === !1) return "";
    for (var l = "", c = 0; c < u.length; c += 2) l += String.fromCharCode("0x" + (u[c] + u[c + 1]));
    return l;
  }, s = function(u) {
    for (var a = new Uint8Array(u.length), l = u.length; l--; ) a[l] = u.charCodeAt(l);
    return (a = Nl(a)).reduce(function(c, d) {
      return c + String.fromCharCode(d);
    }, "");
  };
  n.processDataByFilters = function(u, a) {
    var l = 0, c = u || "", d = [];
    for (typeof (a = a || []) == "string" && (a = [a]), l = 0; l < a.length; l += 1) switch (a[l]) {
      case "ASCII85Decode":
      case "/ASCII85Decode":
        c = e(c), d.push("/ASCII85Encode");
        break;
      case "ASCII85Encode":
      case "/ASCII85Encode":
        c = t(c), d.push("/ASCII85Decode");
        break;
      case "ASCIIHexDecode":
      case "/ASCIIHexDecode":
        c = r(c), d.push("/ASCIIHexEncode");
        break;
      case "ASCIIHexEncode":
      case "/ASCIIHexEncode":
        c = i(c), d.push("/ASCIIHexDecode");
        break;
      case "FlateEncode":
      case "/FlateEncode":
        c = s(c), d.push("/FlateDecode");
        break;
      default:
        throw new Error('The filter: "' + a[l] + '" is not implemented');
    }
    return { data: c, reverseChain: d.reverse().join(" ") };
  };
})(Vt.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  n.loadFile = function(t, e, i) {
    return (function(r, s, u) {
      s = s !== !1, u = typeof u == "function" ? u : function() {
      };
      var a = void 0;
      try {
        a = (function(l, c, d) {
          var y = new XMLHttpRequest(), A = 0, g = function(B) {
            var O = B.length, V = [], k = String.fromCharCode;
            for (A = 0; A < O; A += 1) V.push(k(255 & B.charCodeAt(A)));
            return V.join("");
          };
          if (y.open("GET", l, !c), y.overrideMimeType("text/plain; charset=x-user-defined"), c === !1 && (y.onload = function() {
            y.status === 200 ? d(g(this.responseText)) : d(void 0);
          }), y.send(null), c && y.status === 200) return g(y.responseText);
        })(r, s, u);
      } catch {
      }
      return a;
    })(t, e, i);
  }, n.allowFsRead = void 0, n.loadImageFile = n.loadFile;
})(Vt.API), (function(n) {
  function t() {
    return (ae.html2canvas ? Promise.resolve(ae.html2canvas) : import("./html2canvas.esm-BWVIUcAF.js")).catch(function(a) {
      return Promise.reject(new Error("Could not load html2canvas: " + a));
    }).then(function(a) {
      return a.default ? a.default : a;
    });
  }
  function e() {
    return (ae.DOMPurify ? Promise.resolve(ae.DOMPurify) : import("./purify.es-D1VnxI5i.js")).catch(function(a) {
      return Promise.reject(new Error("Could not load dompurify: " + a));
    }).then(function(a) {
      return a.default ? a.default : a;
    });
  }
  var i = function(a) {
    var l = Te(a);
    return l === "undefined" ? "undefined" : l === "string" || a instanceof String ? "string" : l === "number" || a instanceof Number ? "number" : l === "function" || a instanceof Function ? "function" : a && a.constructor === Array ? "array" : a && a.nodeType === 1 ? "element" : l === "object" ? "object" : "unknown";
  }, r = function(a, l) {
    var c = document.createElement(a);
    for (var d in l.className && (c.className = l.className), l.innerHTML && l.dompurify && (c.innerHTML = l.dompurify.sanitize(l.innerHTML)), l.style) c.style[d] = l.style[d];
    return c;
  }, s = function a(l, c) {
    for (var d = l.nodeType === 3 ? document.createTextNode(l.nodeValue) : l.cloneNode(!1), y = l.firstChild; y; y = y.nextSibling) c !== !0 && y.nodeType === 1 && y.nodeName === "SCRIPT" || d.appendChild(a(y, c));
    return l.nodeType === 1 && (l.nodeName === "CANVAS" ? (d.width = l.width, d.height = l.height, d.getContext("2d").drawImage(l, 0, 0)) : l.nodeName !== "TEXTAREA" && l.nodeName !== "SELECT" || (d.value = l.value), d.addEventListener("load", function() {
      d.scrollTop = l.scrollTop, d.scrollLeft = l.scrollLeft;
    }, !0)), d;
  }, u = function a(l) {
    var c = Object.assign(a.convert(Promise.resolve()), JSON.parse(JSON.stringify(a.template))), d = a.convert(Promise.resolve(), c);
    return (d = d.setProgress(1, a, 1, [a])).set(l);
  };
  (u.prototype = Object.create(Promise.prototype)).constructor = u, u.convert = function(a, l) {
    return a.__proto__ = l || u.prototype, a;
  }, u.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
  } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: !0, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, u.prototype.from = function(a, l) {
    return this.then(function() {
      switch (l = l || (function(c) {
        switch (i(c)) {
          case "string":
            return "string";
          case "element":
            return c.nodeName.toLowerCase() === "canvas" ? "canvas" : "element";
          default:
            return "unknown";
        }
      })(a), l) {
        case "string":
          return this.then(e).then(function(c) {
            return this.set({ src: r("div", { innerHTML: a, dompurify: c }) });
          });
        case "element":
          return this.set({ src: a });
        case "canvas":
          return this.set({ canvas: a });
        case "img":
          return this.set({ img: a });
        default:
          return this.error("Unknown source type.");
      }
    });
  }, u.prototype.to = function(a) {
    switch (a) {
      case "container":
        return this.toContainer();
      case "canvas":
        return this.toCanvas();
      case "img":
        return this.toImg();
      case "pdf":
        return this.toPdf();
      default:
        return this.error("Invalid target.");
    }
  }, u.prototype.toContainer = function() {
    return this.thenList([function() {
      return this.prop.src || this.error("Cannot duplicate - no source HTML.");
    }, function() {
      return this.prop.pageSize || this.setPageSize();
    }]).then(function() {
      var a = { position: "relative", display: "inline-block", width: (typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, l = s(this.prop.src, this.opt.html2canvas.javascriptEnabled);
      l.tagName === "BODY" && (a.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = r("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = r("div", { className: "html2pdf__container", style: a }), this.prop.container.appendChild(l), this.prop.container.firstChild.appendChild(r("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
    });
  }, u.prototype.toCanvas = function() {
    var a = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(a).then(t).then(function(l) {
      var c = Object.assign({}, this.opt.html2canvas);
      return delete c.onrendered, l(this.prop.container, c);
    }).then(function(l) {
      (this.opt.html2canvas.onrendered || function() {
      })(l), this.prop.canvas = l, document.body.removeChild(this.prop.overlay);
    });
  }, u.prototype.toContext2d = function() {
    var a = [function() {
      return document.body.contains(this.prop.container) || this.toContainer();
    }];
    return this.thenList(a).then(t).then(function(l) {
      var c = this.opt.jsPDF, d = this.opt.fontFaces, y = typeof this.opt.width != "number" || isNaN(this.opt.width) || typeof this.opt.windowWidth != "number" || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, A = Object.assign({ async: !0, allowTaint: !0, scale: y, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: !0, proxy: null, removeContainer: !0, foreignObjectRendering: !1, useCORS: !1 }, this.opt.html2canvas);
      if (delete A.onrendered, c.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging, c.context2d.posX = this.opt.x, c.context2d.posY = this.opt.y, c.context2d.margin = this.opt.margin, c.context2d.fontFaces = d, d) for (var g = 0; g < d.length; ++g) {
        var B = d[g], O = B.src.find(function(V) {
          return V.format === "truetype";
        });
        O && c.addFont(O.url, B.ref.name, B.ref.style);
      }
      return A.windowHeight = A.windowHeight || 0, A.windowHeight = A.windowHeight == 0 ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : A.windowHeight, c.context2d.save(!0), l(this.prop.container, A);
    }).then(function(l) {
      this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
      })(l), this.prop.canvas = l, document.body.removeChild(this.prop.overlay);
    });
  }, u.prototype.toImg = function() {
    return this.thenList([function() {
      return this.prop.canvas || this.toCanvas();
    }]).then(function() {
      var a = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
      this.prop.img = document.createElement("img"), this.prop.img.src = a;
    });
  }, u.prototype.toPdf = function() {
    return this.thenList([function() {
      return this.toContext2d();
    }]).then(function() {
      this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
    });
  }, u.prototype.output = function(a, l, c) {
    return (c = c || "pdf").toLowerCase() === "img" || c.toLowerCase() === "image" ? this.outputImg(a, l) : this.outputPdf(a, l);
  }, u.prototype.outputPdf = function(a, l) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      return this.prop.pdf.output(a, l);
    });
  }, u.prototype.outputImg = function(a) {
    return this.thenList([function() {
      return this.prop.img || this.toImg();
    }]).then(function() {
      switch (a) {
        case void 0:
        case "img":
          return this.prop.img;
        case "datauristring":
        case "dataurlstring":
          return this.prop.img.src;
        case "datauri":
        case "dataurl":
          return document.location.href = this.prop.img.src;
        default:
          throw 'Image output type "' + a + '" is not supported.';
      }
    });
  }, u.prototype.save = function(a) {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).set(a ? { filename: a } : null).then(function() {
      this.prop.pdf.save(this.opt.filename);
    });
  }, u.prototype.doCallback = function() {
    return this.thenList([function() {
      return this.prop.pdf || this.toPdf();
    }]).then(function() {
      this.prop.callback(this.prop.pdf);
    });
  }, u.prototype.set = function(a) {
    if (i(a) !== "object") return this;
    var l = Object.keys(a || {}).map(function(c) {
      if (c in u.template.prop) return function() {
        this.prop[c] = a[c];
      };
      switch (c) {
        case "margin":
          return this.setMargin.bind(this, a.margin);
        case "jsPDF":
          return function() {
            return this.opt.jsPDF = a.jsPDF, this.setPageSize();
          };
        case "pageSize":
          return this.setPageSize.bind(this, a.pageSize);
        default:
          return function() {
            this.opt[c] = a[c];
          };
      }
    }, this);
    return this.then(function() {
      return this.thenList(l);
    });
  }, u.prototype.get = function(a, l) {
    return this.then(function() {
      var c = a in u.template.prop ? this.prop[a] : this.opt[a];
      return l ? l(c) : c;
    });
  }, u.prototype.setMargin = function(a) {
    return this.then(function() {
      switch (i(a)) {
        case "number":
          a = [a, a, a, a];
        case "array":
          if (a.length === 2 && (a = [a[0], a[1], a[0], a[1]]), a.length === 4) break;
        default:
          return this.error("Invalid margin array.");
      }
      this.opt.margin = a;
    }).then(this.setPageSize);
  }, u.prototype.setPageSize = function(a) {
    function l(c, d) {
      return Math.floor(c * d / 72 * 96);
    }
    return this.then(function() {
      (a = a || Vt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (a.inner = { width: a.width - this.opt.margin[1] - this.opt.margin[3], height: a.height - this.opt.margin[0] - this.opt.margin[2] }, a.inner.px = { width: l(a.inner.width, a.k), height: l(a.inner.height, a.k) }, a.inner.ratio = a.inner.height / a.inner.width), this.prop.pageSize = a;
    });
  }, u.prototype.setProgress = function(a, l, c, d) {
    return a != null && (this.progress.val = a), l != null && (this.progress.state = l), c != null && (this.progress.n = c), d != null && (this.progress.stack = d), this.progress.ratio = this.progress.val / this.progress.state, this;
  }, u.prototype.updateProgress = function(a, l, c, d) {
    return this.setProgress(a ? this.progress.val + a : null, l || null, c ? this.progress.n + c : null, d ? this.progress.stack.concat(d) : null);
  }, u.prototype.then = function(a, l) {
    var c = this;
    return this.thenCore(a, l, function(d, y) {
      return c.updateProgress(null, null, 1, [d]), Promise.prototype.then.call(this, function(A) {
        return c.updateProgress(null, d), A;
      }).then(d, y).then(function(A) {
        return c.updateProgress(1), A;
      });
    });
  }, u.prototype.thenCore = function(a, l, c) {
    c = c || Promise.prototype.then;
    var d = this;
    a && (a = a.bind(d)), l && (l = l.bind(d));
    var y = Promise.toString().indexOf("[native code]") !== -1 && Promise.name === "Promise" ? d : u.convert(Object.assign({}, d), Promise.prototype), A = c.call(y, a, l);
    return u.convert(A, d.__proto__);
  }, u.prototype.thenExternal = function(a, l) {
    return Promise.prototype.then.call(this, a, l);
  }, u.prototype.thenList = function(a) {
    var l = this;
    return a.forEach(function(c) {
      l = l.thenCore(c);
    }), l;
  }, u.prototype.catch = function(a) {
    a && (a = a.bind(this));
    var l = Promise.prototype.catch.call(this, a);
    return u.convert(l, this);
  }, u.prototype.catchExternal = function(a) {
    return Promise.prototype.catch.call(this, a);
  }, u.prototype.error = function(a) {
    return this.then(function() {
      throw new Error(a);
    });
  }, u.prototype.using = u.prototype.set, u.prototype.saveAs = u.prototype.save, u.prototype.export = u.prototype.output, u.prototype.run = u.prototype.then, Vt.getPageSize = function(a, l, c) {
    if (Te(a) === "object") {
      var d = a;
      a = d.orientation, l = d.unit || l, c = d.format || c;
    }
    l = l || "mm", c = c || "a4", a = ("" + (a || "P")).toLowerCase();
    var y, A = ("" + c).toLowerCase(), g = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
    switch (l) {
      case "pt":
        y = 1;
        break;
      case "mm":
        y = 72 / 25.4;
        break;
      case "cm":
        y = 72 / 2.54;
        break;
      case "in":
        y = 72;
        break;
      case "px":
        y = 0.75;
        break;
      case "pc":
      case "em":
        y = 12;
        break;
      case "ex":
        y = 6;
        break;
      default:
        throw "Invalid unit: " + l;
    }
    var B, O = 0, V = 0;
    if (g.hasOwnProperty(A)) O = g[A][1] / y, V = g[A][0] / y;
    else try {
      O = c[1], V = c[0];
    } catch {
      throw new Error("Invalid format: " + c);
    }
    if (a === "p" || a === "portrait") a = "p", V > O && (B = V, V = O, O = B);
    else {
      if (a !== "l" && a !== "landscape") throw "Invalid orientation: " + a;
      a = "l", O > V && (B = V, V = O, O = B);
    }
    return { width: V, height: O, unit: l, k: y, orientation: a };
  }, n.html = function(a, l) {
    (l = l || {}).callback = l.callback || function() {
    }, l.html2canvas = l.html2canvas || {}, l.html2canvas.canvas = l.html2canvas.canvas || this.canvas, l.jsPDF = l.jsPDF || this, l.fontFaces = l.fontFaces ? l.fontFaces.map(ml) : null;
    var c = new u(l);
    return l.worker ? c : c.from(a).doCallback();
  };
})(Vt.API), Vt.API.addJS = function(n) {
  var t, e, i = (function(r) {
    for (var s = "", u = 0; u < r.length; u++) {
      var a = r[u];
      if (a === "(" || a === ")") {
        for (var l = 0, c = u - 1; c >= 0 && r[c] === "\\"; c--) l++;
        s += l % 2 == 0 ? "\\" + a : a;
      } else s += a;
    }
    return s;
  })(n);
  return this.internal.events.subscribe("postPutResources", function() {
    t = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (t + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + i + ")"), this.internal.out(">>"), this.internal.out("endobj");
  }), this.internal.events.subscribe("putCatalog", function() {
    t !== void 0 && e !== void 0 && this.internal.out("/Names <</JavaScript " + t + " 0 R>>");
  }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t;
  n.events.push(["postPutResources", function() {
    var e = this, i = /^(\d+) 0 obj$/;
    if (this.outline.root.children.length > 0) for (var r = e.outline.render().split(/\r\n/), s = 0; s < r.length; s++) {
      var u = r[s], a = i.exec(u);
      if (a != null) {
        var l = a[1];
        e.internal.newObjectDeferredBegin(l, !1);
      }
      e.internal.write(u);
    }
    if (this.outline.createNamedDestinations) {
      var c = this.internal.pages.length, d = [];
      for (s = 0; s < c; s++) {
        var y = e.internal.newObject();
        d.push(y);
        var A = e.internal.getPageInfo(s + 1);
        e.internal.write("<< /D[" + A.objId + " 0 R /XYZ null null null]>> endobj");
      }
      var g = e.internal.newObject();
      for (e.internal.write("<< /Names [ "), s = 0; s < d.length; s++) e.internal.write("(page_" + (s + 1) + ")" + d[s] + " 0 R");
      e.internal.write(" ] >>", "endobj"), t = e.internal.newObject(), e.internal.write("<< /Dests " + g + " 0 R"), e.internal.write(">>", "endobj");
    }
  }]), n.events.push(["putCatalog", function() {
    var e = this;
    e.outline.root.children.length > 0 && (e.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && e.internal.write("/Names " + t + " 0 R"));
  }]), n.events.push(["initialized", function() {
    var e = this;
    e.outline = { createNamedDestinations: !1, root: { children: [] } }, e.outline.add = function(i, r, s) {
      var u = { title: r, options: s, children: [] };
      return i == null && (i = this.root), i.children.push(u), u;
    }, e.outline.render = function() {
      return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = e, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
    }, e.outline.genIds_r = function(i) {
      i.id = e.internal.newObjectDeferred();
      for (var r = 0; r < i.children.length; r++) this.genIds_r(i.children[r]);
    }, e.outline.renderRoot = function(i) {
      this.objStart(i), this.line("/Type /Outlines"), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, i)), this.objEnd();
    }, e.outline.renderItems = function(i) {
      for (var r = this.ctx.pdf.internal.getVerticalCoordinateString, s = 0; s < i.children.length; s++) {
        var u = i.children[s];
        this.objStart(u), this.line("/Title " + this.makeString(u.title)), this.line("/Parent " + this.makeRef(i)), s > 0 && this.line("/Prev " + this.makeRef(i.children[s - 1])), s < i.children.length - 1 && this.line("/Next " + this.makeRef(i.children[s + 1])), u.children.length > 0 && (this.line("/First " + this.makeRef(u.children[0])), this.line("/Last " + this.makeRef(u.children[u.children.length - 1])));
        var a = this.count = this.count_r({ count: 0 }, u);
        if (a > 0 && this.line("/Count " + a), u.options && u.options.pageNumber) {
          var l = e.internal.getPageInfo(u.options.pageNumber);
          this.line("/Dest [" + l.objId + " 0 R /XYZ 0 " + r(0) + " 0]");
        }
        this.objEnd();
      }
      for (var c = 0; c < i.children.length; c++) this.renderItems(i.children[c]);
    }, e.outline.line = function(i) {
      this.ctx.val += i + `\r
`;
    }, e.outline.makeRef = function(i) {
      return i.id + " 0 R";
    }, e.outline.makeString = function(i) {
      return "(" + e.internal.pdfEscape(i) + ")";
    }, e.outline.objStart = function(i) {
      this.ctx.val += `\r
` + i.id + ` 0 obj\r
<<\r
`;
    }, e.outline.objEnd = function() {
      this.ctx.val += `>> \r
endobj\r
`;
    }, e.outline.count_r = function(i, r) {
      for (var s = 0; s < r.children.length; s++) i.count++, this.count_r(i, r.children[s]);
      return i.count;
    };
  }]);
})(Vt.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = [192, 193, 194, 195, 196, 197, 198, 199];
  n.processJPEG = function(e, i, r, s, u, a) {
    var l, c = this.decode.DCT_DECODE, d = null;
    if (typeof e == "string" || this.__addimage__.isArrayBuffer(e) || this.__addimage__.isArrayBufferView(e)) {
      switch (e = u || e, e = this.__addimage__.isArrayBuffer(e) ? new Uint8Array(e) : e, l = (function(y) {
        for (var A, g = 256 * y.charCodeAt(4) + y.charCodeAt(5), B = y.length, O = { width: 0, height: 0, numcomponents: 1 }, V = 4; V < B; V += 2) {
          if (V += g, t.indexOf(y.charCodeAt(V + 1)) !== -1) {
            A = 256 * y.charCodeAt(V + 5) + y.charCodeAt(V + 6), O = { width: 256 * y.charCodeAt(V + 7) + y.charCodeAt(V + 8), height: A, numcomponents: y.charCodeAt(V + 9) };
            break;
          }
          g = 256 * y.charCodeAt(V + 2) + y.charCodeAt(V + 3);
        }
        return O;
      })(e = this.__addimage__.isArrayBufferView(e) ? this.__addimage__.arrayBufferToBinaryString(e) : e), l.numcomponents) {
        case 1:
          a = this.color_spaces.DEVICE_GRAY;
          break;
        case 4:
          a = this.color_spaces.DEVICE_CMYK;
          break;
        case 3:
          a = this.color_spaces.DEVICE_RGB;
      }
      d = { data: e, width: l.width, height: l.height, colorSpace: a, bitsPerComponent: 8, filter: c, index: i, alias: r };
    }
    return d;
  };
})(Vt.API), Vt.API.processPNG = function(n, t, e, i) {
  if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
    var r, s = Y1(n, { checkCrc: !0 }), u = s.width, a = s.height, l = s.channels, c = s.palette, d = s.depth;
    r = c && l === 1 ? (function(M) {
      for (var b = M.width, H = M.height, v = M.data, F = M.palette, D = M.depth, q = !1, it = [], ut = [], ot = void 0, et = !1, ct = 0, Nt = 0; Nt < F.length; Nt++) {
        var ft = Kh(F[Nt], 4), N = ft[0], R = ft[1], z = ft[2], X = ft[3];
        it.push(N, R, z), X != null && (X === 0 ? (ct++, ut.length < 1 && ut.push(Nt)) : X < 255 && (et = !0));
      }
      if (et || ct > 1) {
        q = !0, ut = void 0;
        var Q = b * H;
        ot = new Uint8Array(Q);
        for (var st = new DataView(v.buffer), gt = 0; gt < Q; gt++) {
          var mt = yl(st, gt, D), yt = Kh(F[mt], 4)[3];
          ot[gt] = yt;
        }
      } else ct === 0 && (ut = void 0);
      return { colorSpace: "Indexed", colorsPerPixel: 1, sMaskBitsPerComponent: q ? 8 : void 0, colorBytes: v, alphaBytes: ot, needSMask: q, palette: it, mask: ut };
    })(s) : l === 2 || l === 4 ? (function(M) {
      for (var b = M.data, H = M.width, v = M.height, F = M.channels, D = M.depth, q = F === 2 ? "DeviceGray" : "DeviceRGB", it = F - 1, ut = H * v, ot = it, et = ut * ot, ct = 1 * ut, Nt = Math.ceil(et * D / 8), ft = Math.ceil(ct * D / 8), N = new Uint8Array(Nt), R = new Uint8Array(ft), z = new DataView(b.buffer), X = new DataView(N.buffer), Q = new DataView(R.buffer), st = !1, gt = 0; gt < ut; gt++) {
        for (var mt = gt * F, yt = 0; yt < ot; yt++) Ju(X, yl(z, mt + yt, D), gt * ot + yt, D);
        var Ct = yl(z, mt + ot, D);
        Ct < (1 << D) - 1 && (st = !0), Ju(Q, Ct, 1 * gt, D);
      }
      return { colorSpace: q, colorsPerPixel: it, sMaskBitsPerComponent: st ? D : void 0, colorBytes: N, alphaBytes: R, needSMask: st };
    })(s) : (function(M) {
      var b = M.data, H = M.channels === 1 ? "DeviceGray" : "DeviceRGB";
      return { colorSpace: H, colorsPerPixel: H === "DeviceGray" ? 1 : 3, colorBytes: b instanceof Uint16Array ? (function(v) {
        for (var F = v.length, D = new Uint8Array(2 * F), q = new DataView(D.buffer, D.byteOffset, D.byteLength), it = 0; it < F; it++) q.setUint16(2 * it, v[it], !1);
        return D;
      })(b) : b, needSMask: !1 };
    })(s);
    var y, A, g, B = r, O = B.colorSpace, V = B.colorsPerPixel, k = B.sMaskBitsPerComponent, J = B.colorBytes, Z = B.alphaBytes, Y = B.needSMask, vt = B.palette, Ft = B.mask, lt = null;
    return i !== Vt.API.image_compression.NONE && typeof Nl == "function" ? (lt = (function(M) {
      var b;
      switch (M) {
        case Vt.API.image_compression.FAST:
          b = 11;
          break;
        case Vt.API.image_compression.MEDIUM:
          b = 13;
          break;
        case Vt.API.image_compression.SLOW:
          b = 14;
          break;
        default:
          b = 12;
      }
      return b;
    })(i), y = this.decode.FLATE_DECODE, A = "/Predictor ".concat(lt, " /Colors ").concat(V, " /BitsPerComponent ").concat(d, " /Columns ").concat(u), n = Vu(J, Math.ceil(u * V * d / 8), V, d, i), Y && (g = Vu(Z, Math.ceil(u * k / 8), 1, k, i))) : (y = void 0, A = void 0, n = J, Y && (g = Z)), (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (g && this.__addimage__.isArrayBuffer(g) || this.__addimage__.isArrayBufferView(g)) && (g = this.__addimage__.arrayBufferToBinaryString(g)), { alias: e, data: n, index: t, filter: y, decodeParameters: A, transparency: Ft, palette: vt, sMask: g, predictor: lt, width: u, height: a, bitsPerComponent: d, sMaskBitsPerComponent: k, colorSpace: O };
  }
}, (function(n) {
  n.processGIF89A = function(t, e, i, r) {
    var s = new pp(t), u = s.width, a = s.height, l = [];
    s.decodeAndBlitFrameRGBA(0, l);
    var c = { data: l, width: u, height: a }, d = new bl(100).encode(c, 100);
    return n.processJPEG.call(this, d, e, i, r);
  }, n.processGIF87A = n.processGIF89A;
})(Vt.API), gn.prototype.parseHeader = function() {
  if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
    var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
    this.palette = new Array(n);
    for (var t = 0; t < n; t++) {
      var e = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), r = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0);
      this.palette[t] = { red: r, green: i, blue: e, quad: s };
    }
  }
  this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, gn.prototype.parseBGR = function() {
  this.pos = this.offset;
  var n = "bit" + this.bitPP, t = this.width * this.height * 4;
  if (t > 536870912) throw new Error("Image dimensions exceed 512MB, which is too large.");
  this.data = new Uint8Array(t);
  try {
    this[n]();
  } catch (e) {
    Ie.log("bit decode error:" + e);
  }
}, gn.prototype.bit1 = function() {
  var n, t = Math.ceil(this.width / 8), e = t % 4;
  for (n = this.height - 1; n >= 0; n--) {
    for (var i = this.bottom_up ? n : this.height - 1 - n, r = 0; r < t; r++) for (var s = this.datav.getUint8(this.pos++, !0), u = i * this.width * 4 + 8 * r * 4, a = 0; a < 8 && 8 * r + a < this.width; a++) {
      var l = this.palette[s >> 7 - a & 1];
      this.data[u + 4 * a] = l.blue, this.data[u + 4 * a + 1] = l.green, this.data[u + 4 * a + 2] = l.red, this.data[u + 4 * a + 3] = 255;
    }
    e !== 0 && (this.pos += 4 - e);
  }
}, gn.prototype.bit4 = function() {
  for (var n = Math.ceil(this.width / 2), t = n % 4, e = this.height - 1; e >= 0; e--) {
    for (var i = this.bottom_up ? e : this.height - 1 - e, r = 0; r < n; r++) {
      var s = this.datav.getUint8(this.pos++, !0), u = i * this.width * 4 + 2 * r * 4, a = s >> 4, l = 15 & s, c = this.palette[a];
      if (this.data[u] = c.blue, this.data[u + 1] = c.green, this.data[u + 2] = c.red, this.data[u + 3] = 255, 2 * r + 1 >= this.width) break;
      c = this.palette[l], this.data[u + 4] = c.blue, this.data[u + 4 + 1] = c.green, this.data[u + 4 + 2] = c.red, this.data[u + 4 + 3] = 255;
    }
    t !== 0 && (this.pos += 4 - t);
  }
}, gn.prototype.bit8 = function() {
  for (var n = this.width % 4, t = this.height - 1; t >= 0; t--) {
    for (var e = this.bottom_up ? t : this.height - 1 - t, i = 0; i < this.width; i++) {
      var r = this.datav.getUint8(this.pos++, !0), s = e * this.width * 4 + 4 * i;
      if (r < this.palette.length) {
        var u = this.palette[r];
        this.data[s] = u.red, this.data[s + 1] = u.green, this.data[s + 2] = u.blue, this.data[s + 3] = 255;
      } else this.data[s] = 255, this.data[s + 1] = 255, this.data[s + 2] = 255, this.data[s + 3] = 255;
    }
    n !== 0 && (this.pos += 4 - n);
  }
}, gn.prototype.bit15 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), e = this.height - 1; e >= 0; e--) {
    for (var i = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
      var s = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var u = (s & t) / t * 255 | 0, a = (s >> 5 & t) / t * 255 | 0, l = (s >> 10 & t) / t * 255 | 0, c = s >> 15 ? 255 : 0, d = i * this.width * 4 + 4 * r;
      this.data[d] = l, this.data[d + 1] = a, this.data[d + 2] = u, this.data[d + 3] = c;
    }
    this.pos += n;
  }
}, gn.prototype.bit16 = function() {
  for (var n = this.width % 3, t = parseInt("11111", 2), e = parseInt("111111", 2), i = this.height - 1; i >= 0; i--) {
    for (var r = this.bottom_up ? i : this.height - 1 - i, s = 0; s < this.width; s++) {
      var u = this.datav.getUint16(this.pos, !0);
      this.pos += 2;
      var a = (u & t) / t * 255 | 0, l = (u >> 5 & e) / e * 255 | 0, c = (u >> 11) / t * 255 | 0, d = r * this.width * 4 + 4 * s;
      this.data[d] = c, this.data[d + 1] = l, this.data[d + 2] = a, this.data[d + 3] = 255;
    }
    this.pos += n;
  }
}, gn.prototype.bit24 = function() {
  for (var n = this.height - 1; n >= 0; n--) {
    for (var t = this.bottom_up ? n : this.height - 1 - n, e = 0; e < this.width; e++) {
      var i = this.datav.getUint8(this.pos++, !0), r = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), u = t * this.width * 4 + 4 * e;
      this.data[u] = s, this.data[u + 1] = r, this.data[u + 2] = i, this.data[u + 3] = 255;
    }
    this.pos += this.width % 4;
  }
}, gn.prototype.bit32 = function() {
  for (var n = this.height - 1; n >= 0; n--) for (var t = this.bottom_up ? n : this.height - 1 - n, e = 0; e < this.width; e++) {
    var i = this.datav.getUint8(this.pos++, !0), r = this.datav.getUint8(this.pos++, !0), s = this.datav.getUint8(this.pos++, !0), u = this.datav.getUint8(this.pos++, !0), a = t * this.width * 4 + 4 * e;
    this.data[a] = s, this.data[a + 1] = r, this.data[a + 2] = i, this.data[a + 3] = u;
  }
}, gn.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  n.processBMP = function(t, e, i, r) {
    var s = new gn(t, !1), u = s.width, a = s.height, l = { data: s.getData(), width: u, height: a }, c = new bl(100).encode(l, 100);
    return n.processJPEG.call(this, c, e, i, r);
  };
})(Vt.API), Qu.prototype.getData = function() {
  return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  n.processWEBP = function(t, e, i, r) {
    var s = new Qu(t), u = s.width, a = s.height, l = { data: s.getData(), width: u, height: a }, c = new bl(100).encode(l, 100);
    return n.processJPEG.call(this, c, e, i, r);
  };
})(Vt.API), Vt.API.processRGBA = function(n, t, e) {
  for (var i = n.data, r = i.length, s = new Uint8Array(r / 4 * 3), u = new Uint8Array(r / 4), a = 0, l = 0, c = 0; c < r; c += 4) {
    var d = i[c], y = i[c + 1], A = i[c + 2], g = i[c + 3];
    s[a++] = d, s[a++] = y, s[a++] = A, u[l++] = g;
  }
  var B = this.__addimage__.arrayBufferToBinaryString(s);
  return { alpha: this.__addimage__.arrayBufferToBinaryString(u), data: B, index: t, alias: e, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: n.width, height: n.height };
}, Vt.API.setLanguage = function(n) {
  return this.internal.languageSettings === void 0 && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[n] !== void 0 && (this.internal.languageSettings.languageCode = n, this.internal.languageSettings.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
  }), this.internal.languageSettings.isSubscribed = !0)), this;
}, ws = Vt.API, ea = ws.getCharWidthsArray = function(n, t) {
  var e, i, r = (t = t || {}).font || this.internal.getFont(), s = t.fontSize || this.internal.getFontSize(), u = t.charSpace || this.internal.getCharSpace(), a = t.widths ? t.widths : r.metadata.Unicode.widths, l = a.fof ? a.fof : 1, c = t.kerning ? t.kerning : r.metadata.Unicode.kerning, d = c.fof ? c.fof : 1, y = t.doKerning !== !1, A = 0, g = n.length, B = 0, O = a[0] || l, V = [];
  for (e = 0; e < g; e++) i = n.charCodeAt(e), typeof r.metadata.widthOfString == "function" ? V.push((r.metadata.widthOfGlyph(r.metadata.characterToGlyph(i)) + u * (1e3 / s) || 0) / 1e3) : (A = y && Te(c[i]) === "object" && !isNaN(parseInt(c[i][B], 10)) ? c[i][B] / d : 0, V.push((a[i] || O) / l + A)), B = i;
  return V;
}, zu = ws.getStringUnitWidth = function(n, t) {
  var e = (t = t || {}).fontSize || this.internal.getFontSize(), i = t.font || this.internal.getFont(), r = t.charSpace || this.internal.getCharSpace();
  return ws.processArabic && (n = ws.processArabic(n)), typeof i.metadata.widthOfString == "function" ? i.metadata.widthOfString(n, e, r) / e : ea.apply(this, arguments).reduce(function(s, u) {
    return s + u;
  }, 0);
}, Hu = function(n, t, e, i) {
  for (var r = [], s = 0, u = n.length, a = 0; s !== u && a + t[s] < e; ) a += t[s], s++;
  r.push(n.slice(0, s));
  var l = s;
  for (a = 0; s !== u; ) a + t[s] > i && (r.push(n.slice(l, s)), a = 0, l = s), a += t[s], s++;
  return l !== s && r.push(n.slice(l, s)), r;
}, Gu = function(n, t, e) {
  e || (e = {});
  var i, r, s, u, a, l, c, d = [], y = [d], A = e.textIndent || 0, g = 0, B = 0, O = n.split(" "), V = ea.apply(this, [" ", e])[0];
  if (l = e.lineIndent === -1 ? O[0].length + 2 : e.lineIndent || 0) {
    var k = Array(l).join(" "), J = [];
    O.map(function(Y) {
      (Y = Y.split(/\s*\n/)).length > 1 ? J = J.concat(Y.map(function(vt, Ft) {
        return (Ft && vt.length ? `
` : "") + vt;
      })) : J.push(Y[0]);
    }), O = J, l = zu.apply(this, [k, e]);
  }
  for (s = 0, u = O.length; s < u; s++) {
    var Z = 0;
    if (i = O[s], l && i[0] == `
` && (i = i.substr(1), Z = 1), A + g + (B = (r = ea.apply(this, [i, e])).reduce(function(Y, vt) {
      return Y + vt;
    }, 0)) > t || Z) {
      if (B > t) {
        for (a = Hu.apply(this, [i, r, t - (A + g), t]), d.push(a.shift()), d = [a.pop()]; a.length; ) y.push([a.shift()]);
        B = r.slice(i.length - (d[0] ? d[0].length : 0)).reduce(function(Y, vt) {
          return Y + vt;
        }, 0);
      } else d = [i];
      y.push(d), A = B + l, g = V;
    } else d.push(i), A += g + B, g = V;
  }
  return c = l ? function(Y, vt) {
    return (vt ? k : "") + Y.join(" ");
  } : function(Y) {
    return Y.join(" ");
  }, y.map(c);
}, ws.splitTextToSize = function(n, t, e) {
  var i, r = (e = e || {}).fontSize || this.internal.getFontSize(), s = function(d) {
    if (d.widths && d.kerning) return { widths: d.widths, kerning: d.kerning };
    var y = this.internal.getFont(d.fontName, d.fontStyle), A = "Unicode";
    return y.metadata[A] ? { widths: y.metadata[A].widths || { 0: 1 }, kerning: y.metadata[A].kerning || {} } : { font: y.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
  }.call(this, e);
  i = Array.isArray(n) ? n : String(n).split(/\r?\n/);
  var u = 1 * this.internal.scaleFactor * t / r;
  s.textIndent = e.textIndent ? 1 * e.textIndent * this.internal.scaleFactor / r : 0, s.lineIndent = e.lineIndent;
  var a, l, c = [];
  for (a = 0, l = i.length; a < l; a++) c = c.concat(Gu.apply(this, [i[a], u, s]));
  return c;
}, (function(n) {
  n.__fontmetrics__ = n.__fontmetrics__ || {};
  for (var t = "0123456789abcdef", e = "klmnopqrstuvwxyz", i = {}, r = {}, s = 0; s < 16; s++) i[e[s]] = t[s], r[t[s]] = e[s];
  var u = function(A) {
    return "0x" + parseInt(A, 10).toString(16);
  }, a = n.__fontmetrics__.compress = function(A) {
    var g, B, O, V, k = ["{"];
    for (var J in A) {
      if (g = A[J], isNaN(parseInt(J, 10)) ? B = "'" + J + "'" : (J = parseInt(J, 10), B = (B = u(J).slice(2)).slice(0, -1) + r[B.slice(-1)]), typeof g == "number") g < 0 ? (O = u(g).slice(3), V = "-") : (O = u(g).slice(2), V = ""), O = V + O.slice(0, -1) + r[O.slice(-1)];
      else {
        if (Te(g) !== "object") throw new Error("Don't know what to do with value type " + Te(g) + ".");
        O = a(g);
      }
      k.push(B + O);
    }
    return k.push("}"), k.join("");
  }, l = n.__fontmetrics__.uncompress = function(A) {
    if (typeof A != "string") throw new Error("Invalid argument passed to uncompress.");
    for (var g, B, O, V, k = {}, J = 1, Z = k, Y = [], vt = "", Ft = "", lt = A.length - 1, M = 1; M < lt; M += 1) (V = A[M]) == "'" ? g ? (O = g.join(""), g = void 0) : g = [] : g ? g.push(V) : V == "{" ? (Y.push([Z, O]), Z = {}, O = void 0) : V == "}" ? ((B = Y.pop())[0][B[1]] = Z, O = void 0, Z = B[0]) : V == "-" ? J = -1 : O === void 0 ? i.hasOwnProperty(V) ? (vt += i[V], O = parseInt(vt, 16) * J, J = 1, vt = "") : vt += V : i.hasOwnProperty(V) ? (Ft += i[V], Z[O] = parseInt(Ft, 16) * J, J = 1, O = void 0, Ft = "") : Ft += V;
    return k;
  }, c = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: l("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, d = { Unicode: { Courier: c, "Courier-Bold": c, "Courier-BoldOblique": c, "Courier-Oblique": c, Helvetica: c, "Helvetica-Bold": c, "Helvetica-BoldOblique": c, "Helvetica-Oblique": c, "Times-Roman": c, "Times-Bold": c, "Times-BoldItalic": c, "Times-Italic": c } }, y = { Unicode: { "Courier-Oblique": l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": l("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": l("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": l("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: l("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: l("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": l("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: l("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": l("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": l("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": l("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": l("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
  n.events.push(["addFont", function(A) {
    var g = A.font, B = y.Unicode[g.postScriptName];
    B && (g.metadata.Unicode = {}, g.metadata.Unicode.widths = B.widths, g.metadata.Unicode.kerning = B.kerning);
    var O = d.Unicode[g.postScriptName];
    O && (g.metadata.Unicode.encoding = O, g.encoding = O.codePages[0]);
  }]);
})(Vt.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function(e) {
    for (var i = e.length, r = new Uint8Array(i), s = 0; s < i; s++) r[s] = e.charCodeAt(s);
    return r;
  };
  n.API.events.push(["addFont", function(e) {
    var i = void 0, r = e.font, s = e.instance;
    if (!r.isStandardFont) {
      if (s === void 0) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + r.postScriptName + "').");
      if (typeof (i = s.existsFileInVFS(r.postScriptName) === !1 ? s.loadFile(r.postScriptName) : s.getFileFromVFS(r.postScriptName)) != "string") throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + r.postScriptName + "').");
      (function(u, a) {
        a = /^\x00\x01\x00\x00/.test(a) ? t(a) : t(na(a)), u.metadata = n.API.TTFFont.open(a), u.metadata.Unicode = u.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, u.metadata.glyIdsUsed = [0];
      })(r, i);
    }
  }]);
})(Vt), Vt.API.addSvgAsImage = function(n, t, e, i, r, s, u, a) {
  if (isNaN(t) || isNaN(e)) throw Ie.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
  if (isNaN(i) || isNaN(r)) throw Ie.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
  var l = document.createElement("canvas");
  l.width = i, l.height = r;
  var c = l.getContext("2d");
  c.fillStyle = "#fff", c.fillRect(0, 0, l.width, l.height);
  var d = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 }, y = this;
  return (ae.canvg ? Promise.resolve(ae.canvg) : import("./index.es-Bl3p-zVH.js")).catch(function(A) {
    return Promise.reject(new Error("Could not load canvg: " + A));
  }).then(function(A) {
    return A.default ? A.default : A;
  }).then(function(A) {
    return A.fromString(c, n, d);
  }, function() {
    return Promise.reject(new Error("Could not load canvg."));
  }).then(function(A) {
    return A.render(d);
  }).then(function() {
    y.addImage(l.toDataURL("image/jpeg", 1), t, e, i, r, u, a);
  });
}, Vt.API.putTotalPages = function(n) {
  var t, e = 0;
  parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (t = new RegExp(n, "g"), e = this.internal.getNumberOfPages()) : (t = new RegExp(this.pdfEscape16(n, this.internal.getFont()), "g"), e = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
  for (var i = 1; i <= this.internal.getNumberOfPages(); i++) for (var r = 0; r < this.internal.pages[i].length; r++) this.internal.pages[i][r] = this.internal.pages[i][r].replace(t, e);
  return this;
}, Vt.API.viewerPreferences = function(n, t) {
  var e;
  n = n || {}, t = t || !1;
  var i, r, s, u = { HideToolbar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideMenubar: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, FitWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, CenterWindow: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: !1, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: !1, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: !1, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: !1, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: !1, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: !1, value: !1, type: "boolean", explicitSet: !1, valueSet: [!0, !1], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: !1, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: !1, valueSet: null, pdfVersion: 1.7 } }, a = Object.keys(u), l = [], c = 0, d = 0, y = 0;
  function A(B, O) {
    var V, k = !1;
    for (V = 0; V < B.length; V += 1) B[V] === O && (k = !0);
    return k;
  }
  if (this.internal.viewerpreferences === void 0 && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(u)), this.internal.viewerpreferences.isSubscribed = !1), e = this.internal.viewerpreferences.configuration, n === "reset" || t === !0) {
    var g = a.length;
    for (y = 0; y < g; y += 1) e[a[y]].value = e[a[y]].defaultValue, e[a[y]].explicitSet = !1;
  }
  if (Te(n) === "object") {
    for (r in n) if (s = n[r], A(a, r) && s !== void 0) {
      if (e[r].type === "boolean" && typeof s == "boolean") e[r].value = s;
      else if (e[r].type === "name" && A(e[r].valueSet, s)) e[r].value = s;
      else if (e[r].type === "integer" && Number.isInteger(s)) e[r].value = s;
      else if (e[r].type === "array") {
        for (c = 0; c < s.length; c += 1) if (i = !0, s[c].length === 1 && typeof s[c][0] == "number") l.push(String(s[c] - 1));
        else if (s[c].length > 1) {
          for (d = 0; d < s[c].length; d += 1) typeof s[c][d] != "number" && (i = !1);
          i === !0 && l.push([s[c][0] - 1, s[c][1] - 1].join(" "));
        }
        e[r].value = "[" + l.join(" ") + "]";
      } else e[r].value = e[r].defaultValue;
      e[r].explicitSet = !0;
    }
  }
  return this.internal.viewerpreferences.isSubscribed === !1 && (this.internal.events.subscribe("putCatalog", function() {
    var B, O = [];
    for (B in e) e[B].explicitSet === !0 && (e[B].type === "name" ? O.push("/" + B + " /" + e[B].value) : O.push("/" + B + " " + e[B].value));
    O.length !== 0 && this.internal.write(`/ViewerPreferences
<<
` + O.join(`
`) + `
>>`);
  }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = e, this;
}, Vt.API.addMetadata = function(n, t) {
  return this.internal.__metadata__ === void 0 && (this.internal.__metadata__ = { metadata: n, namespaceUri: t ?? "http://jspdf.default.namespaceuri/", rawXml: typeof t == "boolean" && t }, this.internal.events.subscribe("putCatalog", mp), this.internal.events.subscribe("postPutResources", gp)), this;
}, (function(n) {
  var t = n.API, e = t.pdfEscape16 = function(s, u) {
    for (var a, l = u.metadata.Unicode.widths, c = ["", "0", "00", "000", "0000"], d = [""], y = 0, A = s.length; y < A; ++y) {
      if (a = u.metadata.characterToGlyph(s.charCodeAt(y)), u.metadata.glyIdsUsed.push(a), u.metadata.toUnicode[a] = s.charCodeAt(y), l.indexOf(a) == -1 && (l.push(a), l.push([parseInt(u.metadata.widthOfGlyph(a), 10)])), a == "0") return d.join("");
      a = a.toString(16), d.push(c[4 - a.length], a);
    }
    return d.join("");
  }, i = function(s) {
    var u, a, l, c, d, y, A;
    for (d = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`, l = [], y = 0, A = (a = Object.keys(s).sort(function(g, B) {
      return g - B;
    })).length; y < A; y++) u = a[y], l.length >= 100 && (d += `
` + l.length + ` beginbfchar
` + l.join(`
`) + `
endbfchar`, l = []), s[u] !== void 0 && s[u] !== null && typeof s[u].toString == "function" && (c = ("0000" + s[u].toString(16)).slice(-4), u = ("0000" + (+u).toString(16)).slice(-4), l.push("<" + u + "><" + c + ">"));
    return l.length && (d += `
` + l.length + ` beginbfchar
` + l.join(`
`) + `
endbfchar
`), d + `endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
  };
  t.events.push(["putFont", function(s) {
    (function(u) {
      var a = u.font, l = u.out, c = u.newObject, d = u.putStream;
      if (a.metadata instanceof n.API.TTFFont && a.encoding === "Identity-H") {
        for (var y = a.metadata.Unicode.widths, A = a.metadata.subset.encode(a.metadata.glyIdsUsed, 1), g = "", B = 0; B < A.length; B++) g += String.fromCharCode(A[B]);
        var O = c();
        d({ data: g, addLength1: !0, objectId: O }), l("endobj");
        var V = c();
        d({ data: i(a.metadata.toUnicode), addLength1: !0, objectId: V }), l("endobj");
        var k = c();
        l("<<"), l("/Type /FontDescriptor"), l("/FontName /" + _s(a.fontName)), l("/FontFile2 " + O + " 0 R"), l("/FontBBox " + n.API.PDFObject.convert(a.metadata.bbox)), l("/Flags " + a.metadata.flags), l("/StemV " + a.metadata.stemV), l("/ItalicAngle " + a.metadata.italicAngle), l("/Ascent " + a.metadata.ascender), l("/Descent " + a.metadata.decender), l("/CapHeight " + a.metadata.capHeight), l(">>"), l("endobj");
        var J = c();
        l("<<"), l("/Type /Font"), l("/BaseFont /" + _s(a.fontName)), l("/FontDescriptor " + k + " 0 R"), l("/W " + n.API.PDFObject.convert(y)), l("/CIDToGIDMap /Identity"), l("/DW 1000"), l("/Subtype /CIDFontType2"), l("/CIDSystemInfo"), l("<<"), l("/Supplement 0"), l("/Registry (Adobe)"), l("/Ordering (" + a.encoding + ")"), l(">>"), l(">>"), l("endobj"), a.objectNumber = c(), l("<<"), l("/Type /Font"), l("/Subtype /Type0"), l("/ToUnicode " + V + " 0 R"), l("/BaseFont /" + _s(a.fontName)), l("/Encoding /" + a.encoding), l("/DescendantFonts [" + J + " 0 R]"), l(">>"), l("endobj"), a.isAlreadyPutted = !0;
      }
    })(s);
  }]), t.events.push(["putFont", function(s) {
    (function(u) {
      var a = u.font, l = u.out, c = u.newObject, d = u.putStream;
      if (a.metadata instanceof n.API.TTFFont && a.encoding === "WinAnsiEncoding") {
        for (var y = a.metadata.rawData, A = "", g = 0; g < y.length; g++) A += String.fromCharCode(y[g]);
        var B = c();
        d({ data: A, addLength1: !0, objectId: B }), l("endobj");
        var O = c();
        d({ data: i(a.metadata.toUnicode), addLength1: !0, objectId: O }), l("endobj");
        var V = c();
        l("<<"), l("/Descent " + a.metadata.decender), l("/CapHeight " + a.metadata.capHeight), l("/StemV " + a.metadata.stemV), l("/Type /FontDescriptor"), l("/FontFile2 " + B + " 0 R"), l("/Flags 96"), l("/FontBBox " + n.API.PDFObject.convert(a.metadata.bbox)), l("/FontName /" + _s(a.fontName)), l("/ItalicAngle " + a.metadata.italicAngle), l("/Ascent " + a.metadata.ascender), l(">>"), l("endobj"), a.objectNumber = c();
        for (var k = 0; k < a.metadata.hmtx.widths.length; k++) a.metadata.hmtx.widths[k] = parseInt(a.metadata.hmtx.widths[k] * (1e3 / a.metadata.head.unitsPerEm));
        l("<</Subtype/TrueType/Type/Font/ToUnicode " + O + " 0 R/BaseFont/" + _s(a.fontName) + "/FontDescriptor " + V + " 0 R/Encoding/" + a.encoding + " /FirstChar 29 /LastChar 255 /Widths " + n.API.PDFObject.convert(a.metadata.hmtx.widths) + ">>"), l("endobj"), a.isAlreadyPutted = !0;
      }
    })(s);
  }]);
  var r = function(s) {
    var u, a = s.text || "", l = s.x, c = s.y, d = s.options || {}, y = s.mutex || {}, A = y.pdfEscape, g = y.activeFontKey, B = y.fonts, O = g, V = "", k = 0, J = "", Z = B[O].encoding;
    if (B[O].encoding !== "Identity-H") return { text: a, x: l, y: c, options: d, mutex: y };
    for (J = a, O = g, Array.isArray(a) && (J = a[0]), k = 0; k < J.length; k += 1) B[O].metadata.hasOwnProperty("cmap") && (u = B[O].metadata.cmap.unicode.codeMap[J[k].charCodeAt(0)]), u || J[k].charCodeAt(0) < 256 && B[O].metadata.hasOwnProperty("Unicode") ? V += J[k] : V += "";
    var Y = "";
    return parseInt(O.slice(1)) < 14 || Z === "WinAnsiEncoding" ? Y = A(V, O).split("").map(function(vt) {
      return vt.charCodeAt(0).toString(16);
    }).join("") : Z === "Identity-H" && (Y = e(V, B[O])), y.isHex = !0, { text: Y, x: l, y: c, options: d, mutex: y };
  };
  t.events.push(["postProcessText", function(s) {
    var u = s.text || "", a = [], l = { text: u, x: s.x, y: s.y, options: s.options, mutex: s.mutex };
    if (Array.isArray(u)) {
      var c = 0;
      for (c = 0; c < u.length; c += 1) Array.isArray(u[c]) && u[c].length === 3 ? a.push([r(Object.assign({}, l, { text: u[c][0] })).text, u[c][1], u[c][2]]) : a.push(r(Object.assign({}, l, { text: u[c] })).text);
      s.text = a;
    } else s.text = r(Object.assign({}, l, { text: u })).text;
  }]);
})(Vt), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */
(function(n) {
  var t = function() {
    return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
  };
  n.existsFileInVFS = function(e) {
    return t.call(this), this.internal.vFS[e] !== void 0;
  }, n.addFileToVFS = function(e, i) {
    return t.call(this), this.internal.vFS[e] = i, this;
  }, n.getFileFromVFS = function(e) {
    return t.call(this), this.internal.vFS[e] !== void 0 ? this.internal.vFS[e] : null;
  };
})(Vt.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */
(function(n) {
  n.__bidiEngine__ = n.prototype.__bidiEngine__ = function(i) {
    var r, s, u, a, l, c, d, y = t, A = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], g = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], B = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, O = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, V = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], k = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), J = !1, Z = 0;
    this.__bidiEngine__ = {};
    var Y = function(v) {
      var F = v.charCodeAt(), D = F >> 8, q = O[D];
      return q !== void 0 ? y[256 * q + (255 & F)] : D === 252 || D === 253 ? "AL" : k.test(D) ? "L" : D === 8 ? "R" : "N";
    }, vt = function(v) {
      for (var F, D = 0; D < v.length; D++) {
        if ((F = Y(v.charAt(D))) === "L") return !1;
        if (F === "R") return !0;
      }
      return !1;
    }, Ft = function(v, F, D, q) {
      var it, ut, ot, et, ct = F[q];
      switch (ct) {
        case "L":
        case "R":
        case "LRE":
        case "RLE":
        case "LRO":
        case "RLO":
        case "PDF":
          J = !1;
          break;
        case "N":
        case "AN":
          break;
        case "EN":
          J && (ct = "AN");
          break;
        case "AL":
          J = !0, ct = "R";
          break;
        case "WS":
        case "BN":
          ct = "N";
          break;
        case "CS":
          q < 1 || q + 1 >= F.length || (it = D[q - 1]) !== "EN" && it !== "AN" || (ut = F[q + 1]) !== "EN" && ut !== "AN" ? ct = "N" : J && (ut = "AN"), ct = ut === it ? ut : "N";
          break;
        case "ES":
          ct = (it = q > 0 ? D[q - 1] : "B") === "EN" && q + 1 < F.length && F[q + 1] === "EN" ? "EN" : "N";
          break;
        case "ET":
          if (q > 0 && D[q - 1] === "EN") {
            ct = "EN";
            break;
          }
          if (J) {
            ct = "N";
            break;
          }
          for (ot = q + 1, et = F.length; ot < et && F[ot] === "ET"; ) ot++;
          ct = ot < et && F[ot] === "EN" ? "EN" : "N";
          break;
        case "NSM":
          if (u && !a) {
            for (et = F.length, ot = q + 1; ot < et && F[ot] === "NSM"; ) ot++;
            if (ot < et) {
              var Nt = v[q], ft = Nt >= 1425 && Nt <= 2303 || Nt === 64286;
              if (it = F[ot], ft && (it === "R" || it === "AL")) {
                ct = "R";
                break;
              }
            }
          }
          ct = q < 1 || (it = F[q - 1]) === "B" ? "N" : D[q - 1];
          break;
        case "B":
          J = !1, r = !0, ct = Z;
          break;
        case "S":
          s = !0, ct = "N";
      }
      return ct;
    }, lt = function(v, F, D) {
      var q = v.split("");
      return D && M(q, D, { hiLevel: Z }), q.reverse(), F && F.reverse(), q.join("");
    }, M = function(v, F, D) {
      var q, it, ut, ot, et, ct = -1, Nt = v.length, ft = 0, N = [], R = Z ? g : A, z = [];
      for (J = !1, r = !1, s = !1, it = 0; it < Nt; it++) z[it] = Y(v[it]);
      for (ut = 0; ut < Nt; ut++) {
        if (et = ft, N[ut] = Ft(v, z, N, ut), q = 240 & (ft = R[et][B[N[ut]]]), ft &= 15, F[ut] = ot = R[ft][5], q > 0) if (q === 16) {
          for (it = ct; it < ut; it++) F[it] = 1;
          ct = -1;
        } else ct = -1;
        if (R[ft][6]) ct === -1 && (ct = ut);
        else if (ct > -1) {
          for (it = ct; it < ut; it++) F[it] = ot;
          ct = -1;
        }
        z[ut] === "B" && (F[ut] = 0), D.hiLevel |= ot;
      }
      s && (function(X, Q, st) {
        for (var gt = 0; gt < st; gt++) if (X[gt] === "S") {
          Q[gt] = Z;
          for (var mt = gt - 1; mt >= 0 && X[mt] === "WS"; mt--) Q[mt] = Z;
        }
      })(z, F, Nt);
    }, b = function(v, F, D, q, it) {
      if (!(it.hiLevel < v)) {
        if (v === 1 && Z === 1 && !r) return F.reverse(), void (D && D.reverse());
        for (var ut, ot, et, ct, Nt = F.length, ft = 0; ft < Nt; ) {
          if (q[ft] >= v) {
            for (et = ft + 1; et < Nt && q[et] >= v; ) et++;
            for (ct = ft, ot = et - 1; ct < ot; ct++, ot--) ut = F[ct], F[ct] = F[ot], F[ot] = ut, D && (ut = D[ct], D[ct] = D[ot], D[ot] = ut);
            ft = et;
          }
          ft++;
        }
      }
    }, H = function(v, F, D) {
      var q = v.split(""), it = { hiLevel: Z };
      return D || (D = []), M(q, D, it), (function(ut, ot, et) {
        if (et.hiLevel !== 0 && d) for (var ct, Nt = 0; Nt < ut.length; Nt++) ot[Nt] === 1 && (ct = V.indexOf(ut[Nt])) >= 0 && (ut[Nt] = V[ct + 1]);
      })(q, D, it), b(2, q, F, D, it), b(1, q, F, D, it), q.join("");
    };
    return this.__bidiEngine__.doBidiReorder = function(v, F, D) {
      if ((function(it, ut) {
        if (ut) for (var ot = 0; ot < it.length; ot++) ut[ot] = ot;
        a === void 0 && (a = vt(it)), c === void 0 && (c = vt(it));
      })(v, F), u || !l || c) if (u && l && a ^ c) Z = a ? 1 : 0, v = lt(v, F, D);
      else if (!u && l && c) Z = a ? 1 : 0, v = H(v, F, D), v = lt(v, F);
      else if (!u || a || l || c) {
        if (u && !l && a ^ c) v = lt(v, F), a ? (Z = 0, v = H(v, F, D)) : (Z = 1, v = H(v, F, D), v = lt(v, F));
        else if (u && a && !l && c) Z = 1, v = H(v, F, D), v = lt(v, F);
        else if (!u && !l && a ^ c) {
          var q = d;
          a ? (Z = 1, v = H(v, F, D), Z = 0, d = !1, v = H(v, F, D), d = q) : (Z = 0, v = H(v, F, D), v = lt(v, F), Z = 1, d = !1, v = H(v, F, D), d = q, v = lt(v, F));
        }
      } else Z = 0, v = H(v, F, D);
      else Z = a ? 1 : 0, v = H(v, F, D);
      return v;
    }, this.__bidiEngine__.setOptions = function(v) {
      v && (u = v.isInputVisual, l = v.isOutputVisual, a = v.isInputRtl, c = v.isOutputRtl, d = v.isSymmetricSwapping);
    }, this.__bidiEngine__.setOptions(i), this.__bidiEngine__;
  };
  var t = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], e = new n.__bidiEngine__({ isInputVisual: !0 });
  n.API.events.push(["postProcessText", function(i) {
    var r = i.text;
    i.x, i.y;
    var s = i.options || {};
    i.mutex, s.lang;
    var u = [];
    if (s.isInputVisual = typeof s.isInputVisual != "boolean" || s.isInputVisual, e.setOptions(s), Object.prototype.toString.call(r) === "[object Array]") {
      var a = 0;
      for (u = [], a = 0; a < r.length; a += 1) Object.prototype.toString.call(r[a]) === "[object Array]" ? u.push([e.doBidiReorder(r[a][0]), r[a][1], r[a][2]]) : u.push([e.doBidiReorder(r[a])]);
      i.text = u;
    } else i.text = e.doBidiReorder(r);
    e.setOptions({ isInputVisual: !0 });
  }]);
})(Vt), Vt.API.TTFFont = (function() {
  function n(t) {
    var e;
    if (this.rawData = t, e = this.contents = new br(t), this.contents.pos = 4, e.readString(4) === "ttcf") throw new Error("TTCF not supported.");
    e.pos = 0, this.parse(), this.subset = new kp(this), this.registerTTF();
  }
  return n.open = function(t) {
    return new n(t);
  }, n.prototype.parse = function() {
    return this.directory = new vp(this.contents), this.head = new bp(this), this.name = new Lp(this), this.cmap = new Kc(this), this.toUnicode = {}, this.hhea = new wp(this), this.maxp = new Np(this), this.hmtx = new Sp(this), this.post = new _p(this), this.os2 = new xp(this), this.loca = new Cp(this), this.glyf = new Fp(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
  }, n.prototype.registerTTF = function() {
    var t, e, i, r, s;
    if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
      var u, a, l, c;
      for (c = [], u = 0, a = (l = this.bbox).length; u < a; u++) t = l[u], c.push(Math.round(t * this.scaleFactor));
      return c;
    }.call(this), this.stemV = 0, this.post.exists ? (i = 255 & (r = this.post.italic_angle), 32768 & (e = r >> 16) && (e = -(1 + (65535 ^ e))), this.italicAngle = +(e + "." + i)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = (s = this.familyClass) === 1 || s === 2 || s === 3 || s === 4 || s === 5 || s === 7, this.isScript = this.familyClass === 10, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), this.italicAngle !== 0 && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
  }, n.prototype.characterToGlyph = function(t) {
    var e;
    return ((e = this.cmap.unicode) != null ? e.codeMap[t] : void 0) || 0;
  }, n.prototype.widthOfGlyph = function(t) {
    var e;
    return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e;
  }, n.prototype.widthOfString = function(t, e, i) {
    var r, s, u, a;
    for (u = 0, s = 0, a = (t = "" + t).length; 0 <= a ? s < a : s > a; s = 0 <= a ? ++s : --s) r = t.charCodeAt(s), u += this.widthOfGlyph(this.characterToGlyph(r)) + i * (1e3 / e) || 0;
    return u * (e / 1e3);
  }, n.prototype.lineHeight = function(t, e) {
    var i;
    return e == null && (e = !1), i = e ? this.lineGap : 0, (this.ascender + i - this.decender) / 1e3 * t;
  }, n;
})();
var bn, br = (function() {
  function n(t) {
    this.data = t ?? [], this.pos = 0, this.length = this.data.length;
  }
  return n.prototype.readByte = function() {
    return this.data[this.pos++];
  }, n.prototype.writeByte = function(t) {
    return this.data[this.pos++] = t;
  }, n.prototype.readUInt32 = function() {
    return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
  }, n.prototype.writeUInt32 = function(t) {
    return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt32 = function() {
    var t;
    return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
  }, n.prototype.writeInt32 = function(t) {
    return t < 0 && (t += 4294967296), this.writeUInt32(t);
  }, n.prototype.readUInt16 = function() {
    return this.readByte() << 8 | this.readByte();
  }, n.prototype.writeUInt16 = function(t) {
    return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
  }, n.prototype.readInt16 = function() {
    var t;
    return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
  }, n.prototype.writeInt16 = function(t) {
    return t < 0 && (t += 65536), this.writeUInt16(t);
  }, n.prototype.readString = function(t) {
    var e, i;
    for (i = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e) i[e] = String.fromCharCode(this.readByte());
    return i.join("");
  }, n.prototype.writeString = function(t) {
    var e, i, r;
    for (r = [], e = 0, i = t.length; 0 <= i ? e < i : e > i; e = 0 <= i ? ++e : --e) r.push(this.writeByte(t.charCodeAt(e)));
    return r;
  }, n.prototype.readShort = function() {
    return this.readInt16();
  }, n.prototype.writeShort = function(t) {
    return this.writeInt16(t);
  }, n.prototype.readLongLong = function() {
    var t, e, i, r, s, u, a, l;
    return t = this.readByte(), e = this.readByte(), i = this.readByte(), r = this.readByte(), s = this.readByte(), u = this.readByte(), a = this.readByte(), l = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ i) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ s) + 65536 * (255 ^ u) + 256 * (255 ^ a) + (255 ^ l) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * i + 4294967296 * r + 16777216 * s + 65536 * u + 256 * a + l;
  }, n.prototype.writeLongLong = function(t) {
    var e, i;
    return e = Math.floor(t / 4294967296), i = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(i >> 24 & 255), this.writeByte(i >> 16 & 255), this.writeByte(i >> 8 & 255), this.writeByte(255 & i);
  }, n.prototype.readInt = function() {
    return this.readInt32();
  }, n.prototype.writeInt = function(t) {
    return this.writeInt32(t);
  }, n.prototype.read = function(t) {
    var e, i;
    for (e = [], i = 0; 0 <= t ? i < t : i > t; i = 0 <= t ? ++i : --i) e.push(this.readByte());
    return e;
  }, n.prototype.write = function(t) {
    var e, i, r, s;
    for (s = [], i = 0, r = t.length; i < r; i++) e = t[i], s.push(this.writeByte(e));
    return s;
  }, n;
})(), vp = (function() {
  var n;
  function t(e) {
    var i, r, s;
    for (this.scalarType = e.readInt(), this.tableCount = e.readShort(), this.searchRange = e.readShort(), this.entrySelector = e.readShort(), this.rangeShift = e.readShort(), this.tables = {}, r = 0, s = this.tableCount; 0 <= s ? r < s : r > s; r = 0 <= s ? ++r : --r) i = { tag: e.readString(4), checksum: e.readInt(), offset: e.readInt(), length: e.readInt() }, this.tables[i.tag] = i;
  }
  return t.prototype.encode = function(e) {
    var i, r, s, u, a, l, c, d, y, A, g, B, O;
    for (O in g = Object.keys(e).length, l = Math.log(2), y = 16 * Math.floor(Math.log(g) / l), u = Math.floor(y / l), d = 16 * g - y, (r = new br()).writeInt(this.scalarType), r.writeShort(g), r.writeShort(y), r.writeShort(u), r.writeShort(d), s = 16 * g, c = r.pos + s, a = null, B = [], e) for (A = e[O], r.writeString(O), r.writeInt(n(A)), r.writeInt(c), r.writeInt(A.length), B = B.concat(A), O === "head" && (a = c), c += A.length; c % 4; ) B.push(0), c++;
    return r.write(B), i = 2981146554 - n(r.data), r.pos = a + 8, r.writeUInt32(i), r.data;
  }, n = function(e) {
    var i, r, s, u;
    for (e = Xc.call(e); e.length % 4; ) e.push(0);
    for (s = new br(e), r = 0, i = 0, u = e.length; i < u; i = i += 4) r += s.readUInt32();
    return 4294967295 & r;
  }, t;
})(), yp = {}.hasOwnProperty, In = function(n, t) {
  for (var e in t) yp.call(t, e) && (n[e] = t[e]);
  function i() {
    this.constructor = n;
  }
  return i.prototype = t.prototype, n.prototype = new i(), n.__super__ = t.prototype, n;
};
bn = (function() {
  function n(t) {
    var e;
    this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents));
  }
  return n.prototype.parse = function() {
  }, n.prototype.encode = function() {
  }, n.prototype.raw = function() {
    return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
  }, n;
})();
var bp = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "head", n.prototype.parse = function(t) {
    return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort();
  }, n.prototype.encode = function(t) {
    var e;
    return (e = new br()).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t), e.writeShort(this.glyphDataFormat), e.data;
  }, n;
})(), tc = (function() {
  function n(t, e) {
    var i, r, s, u, a, l, c, d, y, A, g, B, O, V, k, J, Z;
    switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e + t.readInt(), y = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = this.platformID === 3 && this.encodingID === 1 && this.format === 4 || this.platformID === 0 && this.format === 4, this.codeMap = {}, this.format) {
      case 0:
        for (l = 0; l < 256; ++l) this.codeMap[l] = t.readByte();
        break;
      case 4:
        for (g = t.readUInt16(), A = g / 2, t.pos += 6, s = (function() {
          var Y, vt;
          for (vt = [], l = Y = 0; 0 <= A ? Y < A : Y > A; l = 0 <= A ? ++Y : --Y) vt.push(t.readUInt16());
          return vt;
        })(), t.pos += 2, O = (function() {
          var Y, vt;
          for (vt = [], l = Y = 0; 0 <= A ? Y < A : Y > A; l = 0 <= A ? ++Y : --Y) vt.push(t.readUInt16());
          return vt;
        })(), c = (function() {
          var Y, vt;
          for (vt = [], l = Y = 0; 0 <= A ? Y < A : Y > A; l = 0 <= A ? ++Y : --Y) vt.push(t.readUInt16());
          return vt;
        })(), d = (function() {
          var Y, vt;
          for (vt = [], l = Y = 0; 0 <= A ? Y < A : Y > A; l = 0 <= A ? ++Y : --Y) vt.push(t.readUInt16());
          return vt;
        })(), r = (this.length - t.pos + this.offset) / 2, a = (function() {
          var Y, vt;
          for (vt = [], l = Y = 0; 0 <= r ? Y < r : Y > r; l = 0 <= r ? ++Y : --Y) vt.push(t.readUInt16());
          return vt;
        })(), l = k = 0, Z = s.length; k < Z; l = ++k) for (V = s[l], i = J = B = O[l]; B <= V ? J <= V : J >= V; i = B <= V ? ++J : --J) d[l] === 0 ? u = i + c[l] : (u = a[d[l] / 2 + (i - B) - (A - l)] || 0) !== 0 && (u += c[l]), this.codeMap[i] = 65535 & u;
    }
    t.pos = y;
  }
  return n.encode = function(t, e) {
    var i, r, s, u, a, l, c, d, y, A, g, B, O, V, k, J, Z, Y, vt, Ft, lt, M, b, H, v, F, D, q, it, ut, ot, et, ct, Nt, ft, N, R, z, X, Q, st, gt, mt, yt, Ct, It;
    switch (q = new br(), u = Object.keys(t).sort(function(Bt, Ht) {
      return Bt - Ht;
    }), e) {
      case "macroman":
        for (O = 0, V = (function() {
          var Bt = [];
          for (B = 0; B < 256; ++B) Bt.push(0);
          return Bt;
        })(), J = { 0: 0 }, s = {}, it = 0, ct = u.length; it < ct; it++) J[mt = t[r = u[it]]] == null && (J[mt] = ++O), s[r] = { old: t[r], new: J[t[r]] }, V[r] = J[t[r]];
        return q.writeUInt16(1), q.writeUInt16(0), q.writeUInt32(12), q.writeUInt16(0), q.writeUInt16(262), q.writeUInt16(0), q.write(V), { charMap: s, subtable: q.data, maxGlyphID: O + 1 };
      case "unicode":
        for (F = [], y = [], Z = 0, J = {}, i = {}, k = c = null, ut = 0, Nt = u.length; ut < Nt; ut++) J[vt = t[r = u[ut]]] == null && (J[vt] = ++Z), i[r] = { old: vt, new: J[vt] }, a = J[vt] - r, k != null && a === c || (k && y.push(k), F.push(r), c = a), k = r;
        for (k && y.push(k), y.push(65535), F.push(65535), H = 2 * (b = F.length), M = 2 * Math.pow(Math.log(b) / Math.LN2, 2), A = Math.log(M / 2) / Math.LN2, lt = 2 * b - M, l = [], Ft = [], g = [], B = ot = 0, ft = F.length; ot < ft; B = ++ot) {
          if (v = F[B], d = y[B], v === 65535) {
            l.push(0), Ft.push(0);
            break;
          }
          if (v - (D = i[v].new) >= 32768) for (l.push(0), Ft.push(2 * (g.length + b - B)), r = et = v; v <= d ? et <= d : et >= d; r = v <= d ? ++et : --et) g.push(i[r].new);
          else l.push(D - v), Ft.push(0);
        }
        for (q.writeUInt16(3), q.writeUInt16(1), q.writeUInt32(12), q.writeUInt16(4), q.writeUInt16(16 + 8 * b + 2 * g.length), q.writeUInt16(0), q.writeUInt16(H), q.writeUInt16(M), q.writeUInt16(A), q.writeUInt16(lt), st = 0, N = y.length; st < N; st++) r = y[st], q.writeUInt16(r);
        for (q.writeUInt16(0), gt = 0, R = F.length; gt < R; gt++) r = F[gt], q.writeUInt16(r);
        for (yt = 0, z = l.length; yt < z; yt++) a = l[yt], q.writeUInt16(a);
        for (Ct = 0, X = Ft.length; Ct < X; Ct++) Y = Ft[Ct], q.writeUInt16(Y);
        for (It = 0, Q = g.length; It < Q; It++) O = g[It], q.writeUInt16(O);
        return { charMap: i, subtable: q.data, maxGlyphID: Z + 1 };
    }
  }, n;
})(), Kc = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "cmap", n.prototype.parse = function(t) {
    var e, i, r;
    for (t.pos = this.offset, this.version = t.readUInt16(), r = t.readUInt16(), this.tables = [], this.unicode = null, i = 0; 0 <= r ? i < r : i > r; i = 0 <= r ? ++i : --i) e = new tc(t, this.offset), this.tables.push(e), e.isUnicode && this.unicode == null && (this.unicode = e);
    return !0;
  }, n.encode = function(t, e) {
    var i, r;
    return e == null && (e = "macroman"), i = tc.encode(t, e), (r = new br()).writeUInt16(0), r.writeUInt16(1), i.table = r.data.concat(i.subtable), i;
  }, n;
})(), wp = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "hhea", n.prototype.parse = function(t) {
    return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16();
  }, n;
})(), xp = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "OS/2", n.prototype.parse = function(t) {
    if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = (function() {
      var e, i;
      for (i = [], e = 0; e < 10; ++e) i.push(t.readByte());
      return i;
    })(), this.charRange = (function() {
      var e, i;
      for (i = [], e = 0; e < 4; ++e) i.push(t.readInt());
      return i;
    })(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), this.version > 0 && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = (function() {
      var e, i;
      for (i = [], e = 0; e < 2; e = ++e) i.push(t.readInt());
      return i;
    })(), this.version > 1)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort();
  }, n;
})(), _p = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "post", n.prototype.parse = function(t) {
    var e, i, r;
    switch (t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format) {
      case 65536:
      case 196608:
        break;
      case 131072:
        var s;
        for (i = t.readUInt16(), this.glyphNameIndex = [], s = 0; 0 <= i ? s < i : s > i; s = 0 <= i ? ++s : --s) this.glyphNameIndex.push(t.readUInt16());
        for (this.names = [], r = []; t.pos < this.offset + this.length; ) e = t.readByte(), r.push(this.names.push(t.readString(e)));
        return r;
      case 151552:
        return i = t.readUInt16(), this.offsets = t.read(i);
      case 262144:
        return this.map = function() {
          var u, a, l;
          for (l = [], s = u = 0, a = this.file.maxp.numGlyphs; 0 <= a ? u < a : u > a; s = 0 <= a ? ++u : --u) l.push(t.readUInt32());
          return l;
        }.call(this);
    }
  }, n;
})(), Ap = function(n, t) {
  this.raw = n, this.length = n.length, this.platformID = t.platformID, this.encodingID = t.encodingID, this.languageID = t.languageID;
}, Lp = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "name", n.prototype.parse = function(t) {
    var e, i, r, s, u, a, l, c, d, y, A;
    for (t.pos = this.offset, t.readShort(), e = t.readShort(), a = t.readShort(), i = [], s = 0; 0 <= e ? s < e : s > e; s = 0 <= e ? ++s : --s) i.push({ platformID: t.readShort(), encodingID: t.readShort(), languageID: t.readShort(), nameID: t.readShort(), length: t.readShort(), offset: this.offset + a + t.readShort() });
    for (l = {}, s = d = 0, y = i.length; d < y; s = ++d) r = i[s], t.pos = r.offset, c = t.readString(r.length), u = new Ap(c, r), l[A = r.nameID] == null && (l[A] = []), l[r.nameID].push(u);
    this.strings = l, this.copyright = l[0], this.fontFamily = l[1], this.fontSubfamily = l[2], this.uniqueSubfamily = l[3], this.fontName = l[4], this.version = l[5];
    try {
      this.postscriptName = l[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    } catch {
      this.postscriptName = l[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
    }
    return this.trademark = l[7], this.manufacturer = l[8], this.designer = l[9], this.description = l[10], this.vendorUrl = l[11], this.designerUrl = l[12], this.license = l[13], this.licenseUrl = l[14], this.preferredFamily = l[15], this.preferredSubfamily = l[17], this.compatibleFull = l[18], this.sampleText = l[19];
  }, n;
})(), Np = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "maxp", n.prototype.parse = function(t) {
    return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16();
  }, n;
})(), Sp = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "hmtx", n.prototype.parse = function(t) {
    var e, i, r, s, u, a, l;
    for (t.pos = this.offset, this.metrics = [], e = 0, a = this.file.hhea.numberOfMetrics; 0 <= a ? e < a : e > a; e = 0 <= a ? ++e : --e) this.metrics.push({ advance: t.readUInt16(), lsb: t.readInt16() });
    for (r = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = (function() {
      var c, d;
      for (d = [], e = c = 0; 0 <= r ? c < r : c > r; e = 0 <= r ? ++c : --c) d.push(t.readInt16());
      return d;
    })(), this.widths = function() {
      var c, d, y, A;
      for (A = [], c = 0, d = (y = this.metrics).length; c < d; c++) s = y[c], A.push(s.advance);
      return A;
    }.call(this), i = this.widths[this.widths.length - 1], l = [], e = u = 0; 0 <= r ? u < r : u > r; e = 0 <= r ? ++u : --u) l.push(this.widths.push(i));
    return l;
  }, n.prototype.forGlyph = function(t) {
    return t in this.metrics ? this.metrics[t] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t - this.metrics.length] };
  }, n;
})(), Xc = [].slice, Fp = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "glyf", n.prototype.parse = function() {
    return this.cache = {};
  }, n.prototype.glyphFor = function(t) {
    var e, i, r, s, u, a, l, c, d, y;
    return t in this.cache ? this.cache[t] : (s = this.file.loca, e = this.file.contents, i = s.indexOf(t), (r = s.lengthOf(t)) === 0 ? this.cache[t] = null : (e.pos = this.offset + i, u = (a = new br(e.read(r))).readShort(), c = a.readShort(), y = a.readShort(), l = a.readShort(), d = a.readShort(), this.cache[t] = u === -1 ? new Tp(a, c, y, l, d) : new Pp(a, u, c, y, l, d), this.cache[t]));
  }, n.prototype.encode = function(t, e, i) {
    var r, s, u, a, l;
    for (u = [], s = [], a = 0, l = e.length; a < l; a++) r = t[e[a]], s.push(u.length), r && (u = u.concat(r.encode(i)));
    return s.push(u.length), { table: u, offsets: s };
  }, n;
})(), Pp = (function() {
  function n(t, e, i, r, s, u) {
    this.raw = t, this.numberOfContours = e, this.xMin = i, this.yMin = r, this.xMax = s, this.yMax = u, this.compound = !1;
  }
  return n.prototype.encode = function() {
    return this.raw.data;
  }, n;
})(), Tp = (function() {
  function n(t, e, i, r, s) {
    var u, a;
    for (this.raw = t, this.xMin = e, this.yMin = i, this.xMax = r, this.yMax = s, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], u = this.raw; a = u.readShort(), this.glyphOffsets.push(u.pos), this.glyphIDs.push(u.readUInt16()), 32 & a; ) u.pos += 1 & a ? 4 : 2, 128 & a ? u.pos += 8 : 64 & a ? u.pos += 4 : 8 & a && (u.pos += 2);
  }
  return n.prototype.encode = function() {
    var t, e, i;
    for (e = new br(Xc.call(this.raw.data)), t = 0, i = this.glyphIDs.length; t < i; ++t) e.pos = this.glyphOffsets[t];
    return e.data;
  }, n;
})(), Cp = (function() {
  function n() {
    return n.__super__.constructor.apply(this, arguments);
  }
  return In(n, bn), n.prototype.tag = "loca", n.prototype.parse = function(t) {
    var e, i;
    return t.pos = this.offset, e = this.file.head.indexToLocFormat, this.offsets = e === 0 ? function() {
      var r, s;
      for (s = [], i = 0, r = this.length; i < r; i += 2) s.push(2 * t.readUInt16());
      return s;
    }.call(this) : function() {
      var r, s;
      for (s = [], i = 0, r = this.length; i < r; i += 4) s.push(t.readUInt32());
      return s;
    }.call(this);
  }, n.prototype.indexOf = function(t) {
    return this.offsets[t];
  }, n.prototype.lengthOf = function(t) {
    return this.offsets[t + 1] - this.offsets[t];
  }, n.prototype.encode = function(t, e) {
    for (var i = new Uint32Array(this.offsets.length), r = 0, s = 0, u = 0; u < i.length; ++u) if (i[u] = r, s < e.length && e[s] == u) {
      ++s, i[u] = r;
      var a = this.offsets[u], l = this.offsets[u + 1] - a;
      l > 0 && (r += l);
    }
    for (var c = new Array(4 * i.length), d = 0; d < i.length; ++d) c[4 * d + 3] = 255 & i[d], c[4 * d + 2] = (65280 & i[d]) >> 8, c[4 * d + 1] = (16711680 & i[d]) >> 16, c[4 * d] = (4278190080 & i[d]) >> 24;
    return c;
  }, n;
})(), kp = (function() {
  function n(t) {
    this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33;
  }
  return n.prototype.generateCmap = function() {
    var t, e, i, r, s;
    for (e in r = this.font.cmap.tables[0].codeMap, t = {}, s = this.subset) i = s[e], t[e] = r[i];
    return t;
  }, n.prototype.glyphsFor = function(t) {
    var e, i, r, s, u, a, l;
    for (r = {}, u = 0, a = t.length; u < a; u++) r[s = t[u]] = this.font.glyf.glyphFor(s);
    for (s in e = [], r) (i = r[s]) != null && i.compound && e.push.apply(e, i.glyphIDs);
    if (e.length > 0) for (s in l = this.glyphsFor(e)) i = l[s], r[s] = i;
    return r;
  }, n.prototype.encode = function(t, e) {
    var i, r, s, u, a, l, c, d, y, A, g, B, O, V, k;
    for (r in i = Kc.encode(this.generateCmap(), "unicode"), u = this.glyphsFor(t), g = { 0: 0 }, k = i.charMap) g[(l = k[r]).old] = l.new;
    for (B in A = i.maxGlyphID, u) B in g || (g[B] = A++);
    return d = (function(J) {
      var Z, Y;
      for (Z in Y = {}, J) Y[J[Z]] = Z;
      return Y;
    })(g), y = Object.keys(d).sort(function(J, Z) {
      return J - Z;
    }), O = (function() {
      var J, Z, Y;
      for (Y = [], J = 0, Z = y.length; J < Z; J++) a = y[J], Y.push(d[a]);
      return Y;
    })(), s = this.font.glyf.encode(u, O, g), c = this.font.loca.encode(s.offsets, O), V = { cmap: this.font.cmap.raw(), glyf: s.table, loca: c, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(e) }, this.font.os2.exists && (V["OS/2"] = this.font.os2.raw()), this.font.directory.encode(V);
  }, n;
})();
Vt.API.PDFObject = (function() {
  var n;
  function t() {
  }
  return n = function(e, i) {
    return (Array(i + 1).join("0") + e).slice(-i);
  }, t.convert = function(e) {
    var i, r, s, u;
    if (Array.isArray(e)) return "[" + (function() {
      var a, l, c;
      for (c = [], a = 0, l = e.length; a < l; a++) i = e[a], c.push(t.convert(i));
      return c;
    })().join(" ") + "]";
    if (typeof e == "string") return "/" + e;
    if (e?.isString) return "(" + e + ")";
    if (e instanceof Date) return "(D:" + n(e.getUTCFullYear(), 4) + n(e.getUTCMonth(), 2) + n(e.getUTCDate(), 2) + n(e.getUTCHours(), 2) + n(e.getUTCMinutes(), 2) + n(e.getUTCSeconds(), 2) + "Z)";
    if ({}.toString.call(e) === "[object Object]") {
      for (r in s = ["<<"], e) u = e[r], s.push("/" + r + " " + t.convert(u));
      return s.push(">>"), s.join(`
`);
    }
    return "" + e;
  }, t;
})();
var El = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get BooleanItemBrick() {
    return Gl;
  },
  get CheckItemBrick() {
    return fi;
  },
  get CheckboxItemBrick() {
    return Yl;
  },
  get CompositeBrick() {
    return fe;
  },
  get CustomBrick() {
    return Qc;
  },
  get DocController() {
    return ji;
  },
  get DocOptions() {
    return qi;
  },
  get DrawCanvas() {
    return fa;
  },
  get DropdownBrick() {
    return $l;
  },
  get EmptyBrick() {
    return Ps;
  },
  get EventHandler() {
    return Hl;
  },
  get FlatBoolean() {
    return Vl;
  },
  get FlatCheckbox() {
    return va;
  },
  get FlatComment() {
    return Xl;
  },
  get FlatCustomModel() {
    return Kl;
  },
  get FlatDropdown() {
    return Jl;
  },
  get FlatExpression() {
    return Zl;
  },
  get FlatFile() {
    return En;
  },
  get FlatHTML() {
    return ks;
  },
  get FlatImage() {
    return Ql;
  },
  get FlatImagePicker() {
    return th;
  },
  get FlatMatrix() {
    return Vr;
  },
  get FlatMatrixDynamic() {
    return sh;
  },
  get FlatMatrixMultiple() {
    return mn;
  },
  get FlatMultipleText() {
    return Is;
  },
  get FlatPanelDynamic() {
    return Rs;
  },
  get FlatQuestion() {
    return ve;
  },
  get FlatQuestionDefault() {
    return jl;
  },
  get FlatRadiogroup() {
    return Xr;
  },
  get FlatRanking() {
    return ih;
  },
  get FlatRating() {
    return nh;
  },
  get FlatRepository() {
    return be;
  },
  get FlatSelectBase() {
    return ma;
  },
  get FlatSignaturePad() {
    return Gr;
  },
  get FlatSlider() {
    return rh;
  },
  get FlatSurvey() {
    return Ei;
  },
  get FlatTextbox() {
    return Es;
  },
  get HTMLBrick() {
    return Ul;
  },
  get HorizontalAlign() {
    return Xn;
  },
  get ImageBrick() {
    return zl;
  },
  get LinkBrick() {
    return Jn;
  },
  get PagePacker() {
    return Ts;
  },
  get PdfBrick() {
    return Zi;
  },
  get RadioItemBrick() {
    return sn;
  },
  get RankingItemBrick() {
    return eh;
  },
  get RowlineBrick() {
    return ga;
  },
  get SurveyHelper() {
    return _;
  },
  get SurveyPDF() {
    return kn;
  },
  get TextBoldBrick() {
    return co;
  },
  get TextBrick() {
    return We;
  },
  get TextFieldBrick() {
    return fo;
  },
  get TitlePanelBrick() {
    return Wl;
  },
  get VerticalAlign() {
    return $n;
  }
});
function Lt(n, t, e, i) {
  function r(s) {
    return s instanceof e ? s : new e(function(u) {
      u(s);
    });
  }
  return new (e || (e = Promise))(function(s, u) {
    function a(d) {
      try {
        c(i.next(d));
      } catch (y) {
        u(y);
      }
    }
    function l(d) {
      try {
        c(i.throw(d));
      } catch (y) {
        u(y);
      }
    }
    function c(d) {
      d.done ? s(d.value) : r(d.value).then(a, l);
    }
    c((i = i.apply(n, t || [])).next());
  });
}
class fe {
  constructor(...t) {
    this.bricks = [], this.isPageBreak = !1, this._xLeft = 0, this._xRight = 0, this._yTop = 0, this._yBot = 0, this.addBrick(...t);
  }
  get xLeft() {
    return this._xLeft;
  }
  set xLeft(t) {
    this.shift(t - this.xLeft, 0, 0, 0), this._xLeft = t;
  }
  get xRight() {
    return this._xRight;
  }
  set xRight(t) {
    this.shift(0, t - this.xRight, 0, 0), this._xRight = t;
  }
  get yTop() {
    return this._yTop;
  }
  set yTop(t) {
    this.shift(0, 0, t - this.yTop, 0), this._yTop = t;
  }
  get yBot() {
    return this._yBot;
  }
  set yBot(t) {
    this.shift(0, 0, 0, t - this.yBot), this._yBot = t;
  }
  shift(t, e, i, r) {
    this.bricks.forEach((s) => {
      s.xLeft += t, s.xRight += e, s.yTop += i, s.yBot += r;
    });
  }
  get width() {
    return this.xRight - this.xLeft;
  }
  get height() {
    return this.yBot - this.yTop;
  }
  render() {
    return Lt(this, void 0, void 0, function* () {
      for (let t = 0; t < this.bricks.length; t++)
        yield this.bricks[t].render();
    });
  }
  get isEmpty() {
    return this.bricks.length === 0;
  }
  addBrick(...t) {
    if (t.length != 0) {
      this.bricks.push(...t);
      let e = _.mergeRects(...this.bricks);
      this._xLeft = e.xLeft, this._xRight = e.xRight, this._yTop = e.yTop, this._yBot = e.yBot;
    }
  }
  unfold() {
    const t = [];
    return this.bricks.forEach((e) => {
      t.push(...e.unfold());
    }), t;
  }
  translateX(t) {
    this.bricks.forEach((i) => i.translateX(t));
    const e = t(this.xLeft, this.xRight);
    this._xLeft = e.xLeft, this._xRight = e.xRight;
  }
}
class ga {
  constructor(t, e, i) {
    this.controller = t, this.color = i, this.isPageBreak = !1, this.xLeft = e.xLeft, this.xRight = e.xRight, this.yTop = e.yTop, this.yBot = e.yBot;
  }
  get width() {
    return this.xRight - this.xLeft;
  }
  get height() {
    return this.yBot - this.yTop;
  }
  render() {
    return Lt(this, void 0, void 0, function* () {
      if (this.color !== null) {
        let t = this.controller.doc.getDrawColor();
        this.controller.doc.setDrawColor(this.color), this.controller.doc.line(this.xLeft, this.yTop, this.xRight, this.yTop), this.controller.doc.setDrawColor(t);
      }
    });
  }
  unfold() {
    return [this];
  }
  translateX(t) {
  }
}
class ql {
  constructor(t, e, i, r, s) {
    this.point = t, this.bricks = e, this.controller = i, this.repository = r, this.module = s;
  }
}
class Rp extends ql {
  constructor(t, e, i, r, s, u) {
    super(t, e, r, s, u), this.question = i;
  }
}
class Ep extends ql {
  constructor(t, e, i, r, s, u) {
    super(t, e, r, s, u), this.panel = i;
  }
}
class Ip extends ql {
  constructor(t, e, i, r, s, u) {
    super(t, e, r, s, u), this.page = i;
  }
}
class Ei {
  static generateFlatsPanel(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = [], u = _.clone(r);
      e.pushMargins(), e.margins.left += e.measureText(i.innerIndent).width, u.xLeft += e.measureText(i.innerIndent).width, s.push(...yield this.generateFlatsPagePanel(t, e, i, u)), e.popMargins();
      const a = new Ep(r, s, i, e, be.getInstance(), El);
      return yield t.onRenderPanel.fire(t, a), [...a.bricks];
    });
  }
  static generateFlatsPagePanel(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      if (!i.isVisible)
        return;
      i.onFirstRendering();
      const s = [];
      let u = _.clone(r);
      if (i.getType() !== "page" || t.showPageTitles) {
        const a = new fe();
        if (i.title) {
          if (i instanceof Wh && i.no) {
            const c = yield _.createTitlePanelFlat(u, e, i.no, i.getType() === "page");
            a.addBrick(c), u.xLeft = c.xRight + e.measureText(" ").width;
          }
          const l = yield _.createTitlePanelFlat(u, e, i.locTitle, i.getType() === "page");
          a.addBrick(l), u = _.createPoint(l);
        }
        if (i.description) {
          i.title && (u.yTop += e.unitWidth * Ei.PANEL_DESC_GAP_SCALE);
          const l = yield _.createDescFlat(u, null, e, i.locDescription);
          a.addBrick(l), u = _.createPoint(l);
        }
        if (!a.isEmpty) {
          const l = _.createPoint(a);
          a.addBrick(_.createRowlineFlat(l, e)), s.push(a), u.yTop += e.unitHeight * Ei.PANEL_CONT_GAP_SCALE + _.EPSILON;
        }
      }
      for (const a of i.rows) {
        if (!a.visible)
          continue;
        e.pushMargins();
        const l = _.getPageAvailableWidth(e);
        let c = e.margins.left;
        const d = [], y = a.elements.filter((A) => A.isVisible);
        for (let A = 0; A < y.length; A++) {
          let g = y[A];
          if (!g.isVisible)
            continue;
          const B = _.parseWidth(g.renderWidth, l - (y.length - 1) * e.unitWidth, y.length);
          e.margins.left = c + (A !== 0 ? e.unitWidth : 0), e.margins.right = e.paperWidth - e.margins.left - B, u.xLeft = e.margins.left, c = e.margins.left + B, g instanceof Wh ? d.push(...yield this.generateFlatsPanel(t, e, g, u)) : (yield g.waitForQuestionIsReady(), d.push(...yield _.generateQuestionFlats(t, e, g, u)));
        }
        e.popMargins(), u.xLeft = e.margins.left, d.length !== 0 && (u.yTop = _.mergeRects(...d).yBot, u.xLeft = r.xLeft, u.yTop += e.unitHeight * Ei.QUES_GAP_VERT_SCALE, s.push(...d), s.push(_.createRowlineFlat(u, e)), u.yTop += _.EPSILON);
      }
      return s;
    });
  }
  static popRowlines(t) {
    for (; t.length > 0 && t[t.length - 1] instanceof ga; )
      t.pop();
  }
  static generateFlatTitle(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = new fe();
      if (t.showTitle) {
        if (t.title) {
          const s = yield _.createTitleSurveyFlat(i, e, t.locTitle);
          r.addBrick(s), i = _.createPoint(s);
        }
        t.description && (t.title && (i.yTop += e.unitWidth * Ei.PANEL_DESC_GAP_SCALE), r.addBrick(yield _.createDescFlat(i, null, e, t.locDescription)));
      }
      return r;
    });
  }
  static generateFlatLogoImage(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = _.getLocString(t.locLogo), s = yield _.getCorrectedImageSize(e, { imageLink: r, imageHeight: t.logoHeight, imageWidth: t.logoWidth, defaultImageWidth: "300px", defaultImageHeight: "200px" }), u = yield _.createImageFlat(i, null, e, {
        link: r,
        width: s.width,
        height: s.height
      });
      let a = 0;
      return t.logoPosition === "right" ? a = _.getPageAvailableWidth(e) - u.width : t.logoPosition !== "left" && (a = _.getPageAvailableWidth(e) / 2 - u.width / 2), u.xLeft += a, u.xRight += a, u;
    });
  }
  static generateFlats(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = [];
      if (t.hasLogo)
        if (t.isLogoBefore) {
          const s = yield this.generateFlatLogoImage(t, e, e.leftTopPoint);
          i.push([s]);
          const u = _.createPoint(s, t.logoPosition === "top", t.logoPosition !== "top");
          t.logoPosition !== "top" ? (e.pushMargins(), u.xLeft += e.unitWidth, e.margins.left += s.width + e.unitWidth) : (u.xLeft = e.leftTopPoint.xLeft, u.yTop += e.unitHeight / 2);
          const a = yield this.generateFlatTitle(t, e, u);
          t.logoPosition !== "top" && e.popMargins(), a.isEmpty || i[0].push(a);
        } else if (t.logoPosition === "right") {
          const s = yield this.generateFlatLogoImage(t, e, e.leftTopPoint);
          i.push([s]), e.pushMargins(), e.margins.right += s.width + e.unitWidth;
          const u = yield this.generateFlatTitle(t, e, e.leftTopPoint);
          u.isEmpty || i[0].unshift(u), e.popMargins();
        } else {
          const s = yield this.generateFlatTitle(t, e, e.leftTopPoint);
          let u = e.leftTopPoint;
          s.isEmpty || (i.push([s]), u = _.createPoint(s), u.yTop += e.unitHeight / 2);
          const a = yield this.generateFlatLogoImage(t, e, u);
          i.length !== 0 ? i[0].push(a) : i.push([a]);
        }
      else {
        const s = yield this.generateFlatTitle(t, e, e.leftTopPoint);
        s.isEmpty || i.push([s]);
      }
      let r = e.leftTopPoint;
      i.length !== 0 && (r.yTop = _.createPoint(_.mergeRects(...i[0])).yTop, i[0].push(_.createRowlineFlat(r, e)), r.yTop += e.unitHeight * Ei.PANEL_CONT_GAP_SCALE + _.EPSILON);
      for (let s = 0; s < t.visiblePages.length; s++) {
        t.currentPage = t.visiblePages[s];
        let u = [];
        u.push(...yield this.generateFlatsPagePanel(t, e, t.visiblePages[s], r));
        const a = new Ip(r, u, t.visiblePages[s], e, be.getInstance(), El);
        yield t.onRenderPage.fire(t, a), u = [...a.bricks], s === 0 && i.length !== 0 ? i[0].push(...u) : i.push(u), this.popRowlines(i[i.length - 1]), r.yTop = e.leftTopPoint.yTop;
      }
      return i;
    });
  }
}
Ei.QUES_GAP_VERT_SCALE = 1.5;
Ei.PANEL_CONT_GAP_SCALE = 1;
Ei.PANEL_DESC_GAP_SCALE = 0.25;
class Zi {
  /**
   * An X-coordinate for the left brick edge.
   */
  get xLeft() {
    return this._xLeft;
  }
  set xLeft(t) {
    this.setXLeft(t);
  }
  /**
   * An X-coordinate for the right brick edge.
   */
  get xRight() {
    return this._xRight;
  }
  set xRight(t) {
    this.setXRight(t);
  }
  /**
   * A Y-coordinate for the top brick edge.
   */
  get yTop() {
    return this._yTop;
  }
  set yTop(t) {
    this.setYTop(t);
  }
  /**
   * A Y-coordinate for the bottom brick edge.
   */
  get yBot() {
    return this._yBot;
  }
  set yBot(t) {
    this.setYBottom(t);
  }
  constructor(t, e, i) {
    this.question = t, this.controller = e, this.textColor = _.TEXT_COLOR, this.formBorderColor = _.FORM_BORDER_COLOR, this.isPageBreak = !1, this.xLeft = i.xLeft, this.xRight = i.xRight, this.yTop = i.yTop, this.yBot = i.yBot, this.fontSize = e ? e.fontSize : ji.FONT_SIZE;
  }
  translateX(t) {
    const e = t(this.xLeft, this.xRight);
    this.xLeft = e.xLeft, this.xRight = e.xRight;
  }
  /**
   * The brick's width in pixels.
   */
  get width() {
    return this.xRight - this.xLeft;
  }
  /**
   * The brick's height in pixels.
   */
  get height() {
    return this.yBot - this.yTop;
  }
  getShouldRenderReadOnly() {
    return _.shouldRenderReadOnly(this.question, this.controller);
  }
  render() {
    return Lt(this, void 0, void 0, function* () {
      this.getShouldRenderReadOnly() ? yield this.renderReadOnly() : yield this.renderInteractive(), this.afterRenderCallback && this.afterRenderCallback();
    });
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
    });
  }
  renderReadOnly() {
    return Lt(this, void 0, void 0, function* () {
      yield this.renderInteractive();
    });
  }
  /**
   * Allows you to get a flat array of nested PDF bricks.
   * @returns A flat array of nested PDF bricks.
   */
  unfold() {
    return [this];
  }
  getCorrectedText(t) {
    return this.controller.isRTL ? (t || "").split("").reverse().join("") : t;
  }
  setXLeft(t) {
    this._xLeft = t;
  }
  setXRight(t) {
    this._xRight = t;
  }
  setYTop(t) {
    this._yTop = t;
  }
  setYBottom(t) {
    this._yBot = t;
  }
}
class We extends Zi {
  constructor(t, e, i, r) {
    super(t, e, i), this.text = r, this.align = {
      isInputRtl: !1,
      isOutputRtl: e.isRTL,
      align: e.isRTL ? "right" : "left",
      baseline: "middle"
    };
  }
  escapeText() {
    for (; this.text.indexOf("	") > -1; )
      this.text = this.text.replace("	", Array(5).join(" "));
    return this.text;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      let t = this.alignPoint(this), e = this.controller.fontSize;
      this.controller.fontSize = this.fontSize;
      let i = this.controller.doc.getTextColor();
      this.controller.doc.setTextColor(this.textColor), this.controller.doc.text(this.escapeText(), t.xLeft, t.yTop, this.align), this.controller.doc.setTextColor(i), this.controller.fontSize = e;
    });
  }
  alignPoint(t) {
    return {
      xLeft: this.controller.isRTL ? t.xRight : t.xLeft,
      yTop: t.yTop + (t.yBot - t.yTop) / 2
    };
  }
}
class ve {
  constructor(t, e, i) {
    this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatTitle(t) {
    return Lt(this, void 0, void 0, function* () {
      return yield _.createTitleFlat(t, this.question, this.controller);
    });
  }
  generateFlatDescription(t) {
    return Lt(this, void 0, void 0, function* () {
      return yield _.createDescFlat(t, this.question, this.controller, this.question.locDescription);
    });
  }
  generateFlatHeader(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = yield this.generateFlatTitle(t), i = new fe(e);
      if (this.question.hasDescriptionUnderTitle) {
        const r = _.createPoint(e, !0, !1);
        r.yTop += ve.DESC_GAP_SCALE * this.controller.unitHeight, r.xLeft += this.controller.unitWidth * ve.CONTENT_INDENT_SCALE, i.addBrick(yield this.generateFlatDescription(r));
      }
      return i;
    });
  }
  generateFlatsComment(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = this.question.locCommentText, i = yield _.createTextFlat(t, this.question, this.controller, e, We), r = _.createPoint(i);
      return r.yTop += this.controller.unitHeight * _.GAP_BETWEEN_ROWS, new fe(i, yield _.createCommentFlat(r, this.question, this.controller, {
        fieldName: this.question.id + "_comment",
        rows: _.OTHER_ROWS_COUNT,
        value: this.question.comment !== void 0 && this.question.comment !== null ? this.question.comment : "",
        shouldRenderBorders: Wr.readOnlyCommentRenderMode === "textarea",
        isReadOnly: this.question.isReadOnly,
        isMultiline: !0,
        placeholder: ""
      }));
    });
  }
  generateFlatsComposite(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = this.question.contentPanel;
      return e ? yield Ei.generateFlatsPanel(this.survey, this.controller, e, t) : (this.question = _.getContentQuestion(this.question), yield this.generateFlatsContent(t));
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      return null;
    });
  }
  generateFlatsContentWithOptionalElements(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = [], i = yield this.generateFlatsComposite(t);
      Array.isArray(i) && e.push(...i);
      const r = () => {
        const s = _.clone(t);
        return i !== null && i.length !== 0 && (s.yTop = _.mergeRects(...e).yBot + this.controller.unitHeight * _.GAP_BETWEEN_ROWS), s;
      };
      return this.question.hasComment && e.push(yield this.generateFlatsComment(r())), this.question.hasDescriptionUnderInput && e.push(yield this.generateFlatDescription(r())), e;
    });
  }
  generateFlats(t) {
    return Lt(this, void 0, void 0, function* () {
      this.controller.pushMargins(), this.controller.margins.left += this.controller.measureText(this.question.indent).width;
      const e = {
        xLeft: t.xLeft + this.controller.measureText(this.question.indent).width,
        yTop: t.yTop
      }, i = [];
      let r = this.question.getTitleLocation();
      switch (r = this.question.hasTitle ? r : "hidden", r) {
        case "top":
        case "default": {
          const s = yield this.generateFlatHeader(e);
          let u = _.createPoint(s);
          u.xLeft += this.controller.unitWidth * ve.CONTENT_INDENT_SCALE, s.addBrick(_.createRowlineFlat(_.createPoint(s), this.controller)), u.yTop += this.controller.unitHeight * ve.CONTENT_GAP_VERT_SCALE + _.EPSILON, this.controller.pushMargins(), this.controller.margins.left += this.controller.unitWidth * ve.CONTENT_INDENT_SCALE;
          const a = yield this.generateFlatsContentWithOptionalElements(u);
          this.controller.popMargins(), a !== null && a.length !== 0 && s.addBrick(a.shift()), i.push(s), i.push(...a);
          break;
        }
        case "bottom": {
          const s = _.clone(e);
          this.controller.pushMargins(), s.xLeft += this.controller.unitWidth * ve.CONTENT_INDENT_SCALE, this.controller.margins.left += this.controller.unitWidth * ve.CONTENT_INDENT_SCALE;
          const u = yield this.generateFlatsContentWithOptionalElements(s);
          this.controller.popMargins(), i.push(...u);
          const a = e;
          i.length !== 0 && (a.yTop = i[i.length - 1].yBot), a.yTop += this.controller.unitHeight * ve.CONTENT_GAP_VERT_SCALE, i.push(yield this.generateFlatHeader(a));
          break;
        }
        case "left": {
          this.controller.pushMargins(this.controller.margins.left, this.controller.paperWidth - this.controller.margins.left - _.getPageAvailableWidth(this.controller) * _.MULTIPLETEXT_TEXT_PERS);
          const s = yield this.generateFlatHeader(e), u = _.createPoint(s, !1, !0);
          this.controller.popMargins(), u.xLeft += this.controller.unitWidth * ve.CONTENT_GAP_HOR_SCALE, this.controller.margins.left = u.xLeft;
          const a = yield this.generateFlatsContentWithOptionalElements(u);
          a !== null && a.length !== 0 && s.addBrick(a.shift()), i.push(s), i.push(...a);
          break;
        }
        case "hidden":
        case _.TITLE_LOCATION_MATRIX:
        default: {
          const s = _.clone(e);
          this.controller.pushMargins(), r !== _.TITLE_LOCATION_MATRIX && (s.xLeft += this.controller.unitWidth * ve.CONTENT_INDENT_SCALE, this.controller.margins.left += this.controller.unitWidth * ve.CONTENT_INDENT_SCALE), i.push(...yield this.generateFlatsContentWithOptionalElements(s)), this.controller.popMargins();
          break;
        }
      }
      return this.controller.popMargins(), i;
    });
  }
  get shouldRenderAsComment() {
    return _.shouldRenderReadOnly(this.question, this.controller);
  }
}
ve.CONTENT_GAP_VERT_SCALE = 0.5;
ve.CONTENT_GAP_HOR_SCALE = 1;
ve.CONTENT_INDENT_SCALE = 1;
ve.DESC_GAP_SCALE = 0.0625;
Zn.addProperty("question", {
  name: "readonlyRenderAs",
  default: "auto",
  choices: ["auto", "text", "acroform"],
  visible: !1
});
class jl extends ve {
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      return [yield _.createTextFlat(t, this.question, this.controller, `${this.question.displayValue}`, We)];
    });
  }
}
class be {
  constructor() {
    this.questions = {};
  }
  static getInstance() {
    return be.instance;
  }
  register(t, e) {
    this.questions[t] = e;
  }
  isTypeRegistered(t) {
    return !!this.questions[t];
  }
  getRenderer(t) {
    return this.questions[t];
  }
  create(t, e, i, r) {
    var s;
    const u = typeof r > "u" ? e.getType() : r;
    let a = this.getRenderer(u);
    return a || (!((s = e.customWidget) === null || s === void 0) && s.pdfRender ? a = ve : a = jl), new a(t, e, i);
  }
  static register(t, e) {
    this.getInstance().register(t, e);
  }
  static getRenderer(t) {
    return this.getInstance().getRenderer(t);
  }
}
be.instance = new be();
class co extends We {
  constructor(t, e, i, r) {
    super(t, e, i, r);
  }
  renderInteractive() {
    const t = Object.create(null, {
      renderInteractive: { get: () => super.renderInteractive }
    });
    return Lt(this, void 0, void 0, function* () {
      this.controller.fontStyle = "bold", yield t.renderInteractive.call(this), this.controller.fontStyle = "normal";
    });
  }
}
class Wl extends co {
  constructor(t, e, i, r) {
    super(t, e, i, r);
  }
  renderInteractive() {
    const t = Object.create(null, {
      renderInteractive: { get: () => super.renderInteractive }
    });
    return Lt(this, void 0, void 0, function* () {
      let e = this.controller.fontSize;
      this.controller.fontSize = e * _.TITLE_PANEL_FONT_SIZE_SCALE, yield t.renderInteractive.call(this), this.controller.fontSize = e;
    });
  }
}
class Bp extends We {
  constructor(t, e, i, r) {
    super(t, e, i, r);
  }
}
class Jn extends We {
  constructor(t, e) {
    super(t.question, t.controller, t, t.text), this.link = e, this.textColor = Jn.COLOR;
  }
  renderInteractive() {
    const t = Object.create(null, {
      renderInteractive: { get: () => super.renderInteractive }
    });
    return Lt(this, void 0, void 0, function* () {
      let e = this.controller.doc.getTextColor();
      this.controller.doc.setTextColor(_.BACKGROUND_COLOR);
      let i = this.controller.unitHeight * (this.controller.doc.getLineHeightFactor() - Jn.SCALE_FACTOR_MAGIC), r = this.yTop + (this.yBot - this.yTop) - i;
      this.controller.doc.textWithLink(this.text, this.xLeft, r, { url: this.link }), yield t.renderInteractive.call(this), this.controller.doc.setTextColor(e);
    });
  }
  renderReadOnly() {
    const t = Object.create(null, {
      renderInteractive: { get: () => super.renderInteractive }
    });
    return Lt(this, void 0, void 0, function* () {
      if (_.getReadonlyRenderAs(this.question, this.controller) !== "text")
        return this.renderInteractive();
      yield t.renderInteractive.call(this);
    });
  }
}
Jn.SCALE_FACTOR_MAGIC = 0.955;
Jn.COLOR = "#0000EE";
class Ul extends Zi {
  constructor(t, e, i, r, s = !1) {
    super(t, e, i), this.html = r, s ? this.margins = {
      top: 0,
      bottom: 0
    } : this.margins = {
      top: e.margins.top,
      bottom: e.margins.bot
    };
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      let t = this.controller.fontSize;
      this.controller.fontSize = this.fontSize, yield new Promise((e) => {
        this.controller.doc.fromHTML(this.html, this.xLeft, this.yTop, {
          width: this.width,
          pagesplit: !0
        }, function() {
          [].slice.call(document.querySelectorAll(".sjs-pdf-hidden-html-div")).forEach(function(i) {
            i.parentNode.removeChild(i);
          }), e();
        }, this.margins);
      }), this.controller.fontSize = t;
    });
  }
}
class zl extends Zi {
  constructor(t, e, i, r, s, u, a, l, c) {
    super(t, e, {
      xLeft: r.xLeft,
      xRight: r.xLeft + (s || 0),
      yTop: r.yTop,
      yBot: r.yTop + (u || 0)
    }), this.image = i, this.targetWidth = s, this.targetHeight = u, this.imageWidth = a, this.imageHeight = l, this.imageId = c, this.imageWidth = this.imageWidth || this.targetWidth, this.imageHeight = this.imageHeight || this.targetHeight, this.isPageBreak = this.targetHeight === void 0;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      const t = this.targetWidth > this.imageWidth ? this.xLeft + (this.targetWidth - this.imageWidth) / 2 : this.xLeft, e = this.targetHeight > this.imageHeight ? this.yTop + (this.targetHeight - this.imageHeight) / 2 : this.yTop;
      yield new Promise((i) => {
        try {
          this.controller.doc.addImage(this.image, "PNG", t, e, Math.min(this.imageWidth, this.targetWidth), Math.min(this.imageHeight, this.targetHeight), this.imageId, "MEDIUM");
        } finally {
          i();
        }
      });
    });
  }
}
class Ps extends Zi {
  constructor(t, e = null, i = !1) {
    super(null, e, t), this.controller = e, this.isBorderVisible = !1, this.isBorderVisible = i;
  }
  resizeBorder(t) {
    const e = t ? 1 : -1, i = this.controller.doc.getFontSize() * _.VALUE_READONLY_PADDING_SCALE;
    this.xLeft -= e * i, this.xRight += e * i, this.yBot += e * i;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      this.isBorderVisible && (this.resizeBorder(!0), _.renderFlatBorders(this.controller, this), this.resizeBorder(!1));
    });
  }
}
class fo extends Zi {
  constructor(t, e, i, r) {
    var s, u, a, l;
    super(t, e, i), this.question = t, this.options = r, r.isMultiline = (s = r.isMultiline) !== null && s !== void 0 ? s : !1, r.placeholder = (u = r.placeholder) !== null && u !== void 0 ? u : "", r.inputType = (a = r.inputType) !== null && a !== void 0 ? a : "", r.value = (l = r.value) !== null && l !== void 0 ? l : "", this.question = t;
  }
  renderColorQuestion() {
    let t = this.controller.doc.getFillColor();
    this.controller.doc.setFillColor(this.question.value || "black"), this.controller.doc.rect(this.xLeft, this.yTop, this.width, this.height, "F"), this.controller.doc.setFillColor(t);
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      if (this.options.inputType === "color") {
        this.renderColorQuestion();
        return;
      }
      const t = this.options.inputType === "password" ? new this.controller.doc.AcroFormPasswordField() : new this.controller.doc.AcroFormTextField();
      t.fieldName = this.options.fieldName, t.fontName = this.controller.fontName, t.fontSize = this.fontSize, t.isUnicode = _.isCustomFont(this.controller, t.fontName), this.options.inputType !== "password" ? (t.V = " " + this.getCorrectedText(this.options.value), t.DV = " " + this.getCorrectedText(this.options.placeholder)) : t.value = "", t.multiline = this.options.isMultiline, t.readOnly = this.options.isReadOnly, t.color = this.textColor;
      let e = _.formScale(this.controller, this);
      t.maxFontSize = this.controller.fontSize * e, t.Rect = _.createAcroformRect(_.scaleRect(this, e)), this.controller.doc.addField(t), _.renderFlatBorders(this.controller, this);
    });
  }
  shouldRenderFlatBorders() {
    return this.options.shouldRenderBorders;
  }
  getShouldRenderReadOnly() {
    return _.shouldRenderReadOnly(this.question, this.controller, this.options.isReadOnly);
  }
  get textBrick() {
    return this._textBrick;
  }
  set textBrick(t) {
    this._textBrick = t;
    const e = t.unfold(), i = e.length;
    let r = 0;
    const s = {}, u = (a) => {
      if (this.shouldRenderFlatBorders()) {
        r++;
        const l = this.controller.getCurrentPageIndex();
        if (s[l] || (s[l] = []), s[l].push(a), r >= i) {
          const c = Object.keys(s), d = c.length == 1;
          c.forEach((y) => {
            const A = new fe();
            s[y].forEach((O) => {
              A.addBrick(O);
            });
            const g = this.controller.unitHeight * _.VALUE_READONLY_PADDING_SCALE, B = {
              xLeft: this.xLeft,
              xRight: this.xRight,
              width: this.width,
              yTop: d ? this.yTop : A.yTop - g,
              yBot: d ? this.yBot : A.yBot + g,
              height: d ? this.height : A.height + 2 * g,
              formBorderColor: this.formBorderColor
            };
            this.controller.setPage(Number(y)), _.renderFlatBorders(this.controller, B), this.controller.setPage(l);
          });
        }
      }
    };
    e.forEach((a) => {
      a.afterRenderCallback = u.bind(this, a);
    });
  }
  renderReadOnly() {
    return Lt(this, void 0, void 0, function* () {
      this.controller.pushMargins(this.xLeft, this.controller.paperWidth - this.xRight), this.options.inputType === "color" ? this.renderColorQuestion() : yield this.textBrick.render(), this.controller.popMargins();
    });
  }
  unfold() {
    return this.getShouldRenderReadOnly() && this.options.inputType !== "color" ? this.textBrick.unfold() : super.unfold();
  }
  translateX(t) {
    const e = t(this.xLeft, this.xRight);
    this._xLeft = e.xLeft, this._xRight = e.xRight, this.textBrick && this.textBrick.translateX(t);
  }
  setXLeft(t) {
    const e = t - this._xLeft;
    super.setXLeft(t), this.textBrick && (this.textBrick.xLeft = this.textBrick.xLeft + e);
  }
  setXRight(t) {
    const e = t - this._xRight;
    super.setXRight(t), this.textBrick && (this.textBrick.xRight = this.textBrick.xRight + e);
  }
  setYTop(t) {
    const e = t - this._yTop;
    super.setYTop(t), this.textBrick && (this.textBrick.yTop = this.textBrick.yTop + e);
  }
  setYBottom(t) {
    const e = t - this._yBot;
    super.setYBottom(t), this.textBrick && (this.textBrick.yBot = this.textBrick.yBot + e);
  }
}
class $c {
  constructor() {
    this.hash = {}, this.imageId = 1;
  }
  getImageId() {
    return `image_${this.imageId++}`;
  }
  _getImageInfo(t) {
    return Lt(this, void 0, void 0, function* () {
      return { data: t, width: 0, height: 0, id: this.getImageId() };
    });
  }
  getImageInfo(t) {
    return Lt(this, void 0, void 0, function* () {
      if (!this.hash[t])
        try {
          this.hash[t] = yield this._getImageInfo(t);
        } catch {
          this.hash[t] = this.emptyImage;
        }
      return this.hash[t];
    });
  }
  applyImageFit(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      if (e == "fill")
        return { data: t.data, id: t.id, width: i, height: r };
      if ((e == "contain" || e == "cover") && t.width && t.height && i && i) {
        const s = Math.min(i / t.width, r / t.height);
        return { data: t.data, id: t.id, width: t.width * s, height: t.height * s };
      } else
        return t;
    });
  }
  get emptyImage() {
    return { data: "", width: 0, height: 0, id: "image_0" };
  }
  clear() {
    this.hash = {}, this.imageId = 1;
  }
}
let Jc = new $c();
function wl() {
  return Jc;
}
function Op(n) {
  Jc = n;
}
class _ {
  static parseWidth(t, e, i = 1, r) {
    if (t.indexOf("calc") === 0)
      return e / i;
    const s = parseFloat(t), u = t.replace(/[^A-Za-z%]/g, "") || r;
    let a;
    switch (u) {
      case "pt":
        a = 1;
        break;
      case "mm":
        a = 72 / 25.4;
        break;
      case "cm":
        a = 72 / 2.54;
        break;
      case "in":
        a = 72;
        break;
      case "px":
        a = 72 / 96;
        break;
      case "pc":
        a = 12;
        break;
      case "em":
        a = 12;
        break;
      case "ex":
        a = 6;
        break;
      default:
      case "%":
        a = e / 100;
        break;
    }
    return Math.min(s * a, e);
  }
  static pxToPt(t) {
    return typeof t == "string" ? (isNaN(Number(t)) || (t += "px"), _.parseWidth(t, Number.MAX_VALUE)) : t * 72 / 96;
  }
  static mergeRects(...t) {
    const e = {
      xLeft: t[0].xLeft,
      xRight: t[0].xRight,
      yTop: t[0].yTop,
      yBot: t[0].yBot
    };
    return t.forEach((i) => {
      e.xLeft = Math.min(e.xLeft, i.xLeft), e.xRight = Math.max(e.xRight, i.xRight), e.yTop = Math.min(e.yTop, i.yTop), e.yBot = Math.max(e.yBot, i.yBot);
    }), e;
  }
  static createPoint(t, e = !0, i = !1) {
    return {
      xLeft: e ? t.xLeft : t.xRight,
      yTop: i ? t.yTop : t.yBot
    };
  }
  static createRect(t, e, i) {
    return {
      xLeft: t.xLeft,
      xRight: t.xLeft + e,
      yTop: t.yTop,
      yBot: t.yTop + i
    };
  }
  static createHeaderRect(t) {
    return {
      xLeft: 0,
      xRight: t.paperWidth,
      yTop: 0,
      yBot: t.margins.top
    };
  }
  static createFooterRect(t) {
    return {
      xLeft: 0,
      xRight: t.paperWidth,
      yTop: t.paperHeight - t.margins.bot,
      yBot: t.paperHeight
    };
  }
  static chooseHtmlFont(t) {
    return t.useCustomFontInHtml ? t.fontName : this.STANDARD_FONT;
  }
  static generateCssTextRule(t, e, i) {
    return `"font-size: ${t}pt; font-weight: ${e}; font-family: ${i}; color: ${this.TEXT_COLOR}; margin: 0"`;
  }
  static createHtmlContainerBlock(t, e, i) {
    const r = this.chooseHtmlFont(e);
    return `<div class="__surveypdf_html" style=${this.generateCssTextRule(e.fontSize, e.fontStyle, r)}><style>.__surveypdf_html p { margin: 0; line-height: ${e.fontSize}pt } body { margin: 0; }</style>${t}</div>`;
  }
  static splitHtmlRect(t, e) {
    const i = [], r = e.height, s = t.doc.getFontSize();
    e.yBot = e.yTop + s;
    const u = Math.floor(r / s) - 1;
    i.push(e);
    const a = this.createPoint(e);
    for (let c = 0; c < u; c++)
      i.push(new Ps(this.createRect(a, e.width, s))), a.yTop += s;
    const l = r - (u + 1) * s;
    return l > 0 && i.push(new Ps(this.createRect(a, e.width, l))), new fe(...i);
  }
  static createPlainTextFlat(t, e, i, r, s) {
    const u = i.doc.splitTextToSize(r, i.paperWidth - i.margins.right - t.xLeft), a = this.clone(t), l = new fe();
    return u.forEach((c) => {
      const d = i.measureText(c);
      l.addBrick(new s(e, i, this.createRect(a, d.width, d.height), c)), a.yTop += d.height;
    }), l;
  }
  static createTextFlat(t, e, i, r, s) {
    return Lt(this, void 0, void 0, function* () {
      return typeof r == "string" || !this.hasHtml(r) ? this.createPlainTextFlat(t, e, i, typeof r == "string" ? r : this.getLocString(r), s) : this.splitHtmlRect(i, yield this.createHTMLFlat(t, e, i, this.createHtmlContainerBlock(this.getLocString(r), i, "standard")));
    });
  }
  static hasHtml(t) {
    const e = /<\/?[a-z][\s\S]*>/i;
    return t.hasHtml && (e.test(t.renderedText) || e.test(t.renderedHtml));
  }
  static getHtmlMargins(t, e) {
    const i = t.paperWidth - e.xLeft - t.margins.right;
    return {
      top: t.margins.top,
      bottom: t.margins.bot,
      width: i > t.unitWidth ? i : t.unitWidth
    };
  }
  static createHTMLRect(t, e, i, r) {
    const s = e.paperHeight - e.margins.bot - e.margins.top, u = (e.helperDoc.getNumberOfPages() - 1) * (e.fontSize * Math.floor(s / e.fontSize)) + r - i.top + _.HTML_TAIL_TEXT_SCALE * e.fontSize, a = e.helperDoc.getNumberOfPages();
    e.helperDoc.addPage();
    for (let l = 0; l < a; l++)
      e.helperDoc.deletePage(1);
    return _.createRect(t, i.width, u);
  }
  static createHTMLFlat(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = this.getHtmlMargins(i, t);
      return yield new Promise((u) => {
        i.helperDoc.fromHTML(r, t.xLeft, s.top, {
          pagesplit: !0,
          width: s.width
        }, function(a) {
          const l = _.createHTMLRect(t, i, s, a.y);
          u(new Ul(e, i, l, r));
        }, s);
      });
    });
  }
  static generateFontFace(t, e, i) {
    return `@font-face { font-family: ${t}; src: url(data:application/font-woff;charset=utf-8;base64,${e}) format('woff'); font-weight: ${i}; }`;
  }
  static generateFontFaceWithItalicStyle(t, e, i) {
    return `@font-face { font-family: ${t}; src: url(data:application/font-woff;charset=utf-8;base64,${e}) format('woff'); font-weight: ${i}; font-style: italic}`;
  }
  static htmlToXml(t) {
    const e = document.implementation.createHTMLDocument("");
    return e.write(t.replace(/\#/g, "%23")), e.documentElement.setAttribute("xmlns", e.documentElement.namespaceURI), e.body.style.margin = "unset", new XMLSerializer().serializeToString(e.body).replace(/%23/g, "#");
  }
  static createSvgContent(t, e, i) {
    const r = document.createElement("style");
    r.innerHTML = ".__surveypdf_html p { margin: unset; line-height: 22px; } body { margin: unset; }", document.body.appendChild(r);
    const s = document.createElement("div");
    s.className = "__surveypdf_html", s.style.display = "block", s.style.position = "fixed", s.style.top = "-10000px", s.style.left = "-10000px", s.style.width = e / 72 * 96 + "px", s.style.boxSizing = "initial", s.style.color = "initial", s.style.fontFamily = "initial", s.style.font = "initial", s.style.lineHeight = "initial", s.insertAdjacentHTML("beforeend", t), document.body.appendChild(s);
    const u = s.offsetWidth, a = s.offsetHeight;
    s.remove(), r.remove();
    let l = "";
    return i.useCustomFontInHtml ? l = `<defs><style>${this.generateFontFace(i.fontName, i.base64Normal, "normal")} ${this.generateFontFace(i.fontName, i.base64Bold, "bold")}</style></defs>` : Object.keys(ji.customFonts).forEach((d) => {
      const y = ji.customFonts[d];
      Object.keys(y).forEach((A) => {
        A === "normal" || A === "bold" ? l += `${this.generateFontFace(d, y[A], A)}` : l += `${this.generateFontFaceWithItalicStyle(d, y[A], A === "italic" ? "normal" : "bold")}`;
      }), l = "<defs><style>" + l + "</style></defs>";
    }), { svg: `<svg xmlns="http://www.w3.org/2000/svg" width="${u}px" height="${a}px">` + l + `<style>.__surveypdf_html p { margin: unset; line-height: 22px; }</style><foreignObject width="${u}px" height="${a}px">` + this.htmlToXml(t) + "</foreignObject></svg>", divWidth: u, divHeight: a };
  }
  static setCanvas(t, e, i, r) {
    t.width = e * _.HTML_TO_IMAGE_QUALITY, t.height = i * _.HTML_TO_IMAGE_QUALITY;
    const s = t.getContext("2d");
    s.scale(_.HTML_TO_IMAGE_QUALITY, _.HTML_TO_IMAGE_QUALITY), s.fillStyle = _.BACKGROUND_COLOR, s.fillRect(0, 0, e, i), s.drawImage(r, 0, 0);
  }
  static htmlToImage(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const { svg: r, divWidth: s, divHeight: u } = _.createSvgContent(t, e, i), a = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(r))), l = new Image();
      return l.crossOrigin = "anonymous", l.src = a, new Promise((c) => {
        l.onload = function() {
          const d = document.createElement("canvas");
          _.setCanvas(d, s, u, l);
          const y = d.toDataURL("image/jpeg", _.HTML_TO_IMAGE_QUALITY);
          d.remove(), c({ url: y, aspect: s / u });
        }, l.onerror = function() {
          c({ url: "data:,", aspect: e / this.EPSILON });
        };
      });
    });
  }
  static createBoldTextFlat(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      i.fontStyle = "bold";
      const s = yield this.createTextFlat(t, e, i, r, co);
      return i.fontStyle = "normal", s;
    });
  }
  static createTitleFlat(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = new fe();
      let s = this.clone(t);
      const u = i.fontSize;
      if (i.fontSize *= this.TITLE_FONT_SCALE, e.no) {
        const l = e.no + " ";
        let c;
        this.hasHtml(e.locTitle) ? (i.fontStyle = "bold", i.pushMargins(), i.margins.right = i.paperWidth - i.margins.left - i.measureText(l, "bold").width, c = yield this.createHTMLFlat(s, e, i, this.createHtmlContainerBlock(l, i, "standard")), i.popMargins(), i.fontStyle = "normal") : c = yield this.createBoldTextFlat(s, e, i, l), r.addBrick(c), s.xLeft = c.xRight;
      }
      i.pushMargins(), i.margins.left = s.xLeft;
      const a = yield this.createBoldTextFlat(s, e, i, e.locTitle);
      if (r.addBrick(a), i.popMargins(), e.isRequired) {
        const l = e.requiredText;
        this.hasHtml(e.locTitle) ? (s = this.createPoint(a.unfold()[0], !1, !1), i.fontStyle = "bold", i.pushMargins(), i.margins.right = i.paperWidth - i.margins.left - i.measureText(l, "bold").width, r.addBrick(yield this.createHTMLFlat(s, e, i, this.createHtmlContainerBlock(l, i, "standard"))), i.popMargins(), i.fontStyle = "normal") : (s = this.createPoint(a.unfold().pop(), !1, !0), r.addBrick(yield this.createBoldTextFlat(s, e, i, l)));
      }
      return i.fontSize = u, r;
    });
  }
  static createTitleSurveyPanelFlat(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = e.fontSize;
      e.fontSize = s * r, e.fontStyle = "bold";
      const u = yield this.createTextFlat(t, null, e, i, Wl);
      return e.fontStyle = "normal", e.fontSize = s, u;
    });
  }
  static createTitleSurveyFlat(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      return yield this.createTitleSurveyPanelFlat(t, e, i, this.TITLE_SURVEY_FONT_SIZE_SCALE);
    });
  }
  static createTitlePanelFlat(t, e, i) {
    return Lt(this, arguments, void 0, function* (r, s, u, a = !1) {
      return yield this.createTitleSurveyPanelFlat(r, s, u, a ? this.TITLE_PAGE_FONT_SIZE_SCALE : this.TITLE_PANEL_FONT_SIZE_SCALE);
    });
  }
  static createDescFlat(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = i.fontSize;
      i.fontSize = s * this.DESCRIPTION_FONT_SIZE_SCALE;
      const u = yield this.createTextFlat(t, e, i, r, Bp);
      return i.fontSize = s, u;
    });
  }
  static getReadonlyRenderAs(t, e) {
    return t.readonlyRenderAs === "auto" ? e.readonlyRenderAs : t.readonlyRenderAs;
  }
  static createCommentFlat(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      var s, u;
      r.rows = (s = r.rows) !== null && s !== void 0 ? s : 1, r.value = (u = r.value) !== null && u !== void 0 ? u : "";
      const a = this.createTextFieldRect(t, i, r.rows);
      let l;
      if (_.shouldRenderReadOnly(e, i, r.isReadOnly)) {
        l = yield this.createReadOnlyTextFieldTextFlat(t, i, e, r.value);
        const d = i.unitHeight * this.VALUE_READONLY_PADDING_SCALE;
        l.yBot + d > a.yBot && (a.yBot = l.yBot + d);
      }
      const c = new fo(e, i, a, r);
      return l && (c.textBrick = l), c;
    });
  }
  static get hasDocument() {
    return typeof document < "u";
  }
  static createImageFlat(t, e, i, r, s) {
    return Lt(this, void 0, void 0, function* () {
      const u = wl();
      let a = yield u.getImageInfo(r.link);
      return (s ?? i.applyImageFit) && (a = yield u.applyImageFit(a, r.objectFit || "fill", r.width, r.height)), new zl(e, i, a.data, t, r.width, r.height, a.width, a.height, a.id);
    });
  }
  static canPreviewImage(t, e, i) {
    return t.canPreviewImage(e);
  }
  static createRowlineFlat(t, e, i, r) {
    let s = typeof i > "u" ? e.paperWidth - e.margins.right : t.xLeft + i;
    return s = s > t.xLeft ? s : t.xLeft + this.EPSILON, new ga(e, {
      xLeft: t.xLeft,
      xRight: s,
      yTop: t.yTop + this.EPSILON,
      yBot: t.yTop + this.EPSILON
    }, typeof r > "u" ? null : r);
  }
  static createLinkFlat(t, e, i, r, s) {
    return Lt(this, void 0, void 0, function* () {
      const u = yield this.createTextFlat(t, e, i, r, We), a = new fe();
      return u.unfold().forEach((l) => {
        a.addBrick(new Jn(l, s));
        const c = this.createPoint(a);
        a.addBrick(this.createRowlineFlat(c, i, a.width, Jn.COLOR));
      }), a;
    });
  }
  static createAcroformRect(t) {
    return [
      t.xLeft,
      t.yTop,
      t.xRight - t.xLeft,
      t.yBot - t.yTop
    ];
  }
  static createTextFieldRect(t, e, i = 1) {
    let r = e.paperWidth - t.xLeft - e.margins.right;
    r = Math.max(r, e.unitWidth);
    const s = e.unitHeight * i;
    return this.createRect(t, r, s);
  }
  static createReadOnlyTextFieldTextFlat(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = e.unitWidth * this.VALUE_READONLY_PADDING_SCALE;
      t.yTop += s, t.xLeft += s, e.pushMargins(t.xLeft, e.margins.right + s);
      const u = yield this.createTextFlat(t, i, e, r.toString(), We);
      return e.popMargins(), u;
    });
  }
  static renderFlatBorders(t, e) {
    var i, r, s, u;
    if (!this.FORM_BORDER_VISIBLE)
      return;
    e.rounded = (i = e.rounded) !== null && i !== void 0 ? i : !0, e.outside = (r = e.outside) !== null && r !== void 0 ? r : !1;
    const a = Math.min(e.width, e.height), l = this.getBorderWidth(t), c = t.unitHeight * this.VISIBLE_BORDER_SCALE * this.BORDER_SCALE, d = e.outside ? (a + l) / a - c / a : (a - l) / a + c / a, y = t.doc.getDrawColor();
    t.doc.setDrawColor(e.formBorderColor), t.doc.setLineWidth(c);
    const A = this.scaleRect(e, d);
    if (e.dashStyle) {
      const g = e.dashStyle, B = (Math.abs(A.yTop - A.yBot) + Math.abs(A.xLeft - A.xRight)) * 2, O = g.dashArray[0] + ((s = g.dashArray[1]) !== null && s !== void 0 ? s : g.dashArray[0]), V = g.dashArray[0] + B % O / Math.floor(B / O);
      t.doc.setLineDashPattern([V, (u = g.dashArray[1]) !== null && u !== void 0 ? u : g.dashArray[0]], g.dashPhase);
    }
    if (t.doc.rect(...this.createAcroformRect(A)), e.rounded) {
      const g = t.unitHeight * this.UNVISIBLE_BORDER_SCALE * this.BORDER_SCALE, B = 1 - g / a, O = this.RADIUS_SCALE * g;
      t.doc.setDrawColor(this.BACKGROUND_COLOR), t.doc.setLineWidth(g), t.doc.roundedRect(...this.createAcroformRect(this.scaleRect(e, B)), O, O);
    }
    e.dashStyle && t.doc.setLineDashPattern([]), t.doc.setDrawColor(y);
  }
  static getLocString(t) {
    return this.hasHtml(t) ? t.renderedHtml : t.renderedText || t.renderedHtml;
  }
  static getContentQuestion(t) {
    return t.contentQuestion ? t.contentQuestion : t;
  }
  static getContentQuestionTypeRenderAs(t, e) {
    let i = t.renderAs;
    if (t.getType() === "boolean" && e.options.useLegacyBooleanRendering && (i = "checkbox"), i !== "default") {
      const r = `${t.getType()}-${i}`;
      if (be.getInstance().isTypeRegistered(r))
        return r;
    }
    return t.getType();
  }
  static getContentQuestionType(t, e) {
    return t.customWidget ? t.customWidget.pdfQuestionType : t.contentQuestion ? "custom_model" : this.getContentQuestionTypeRenderAs(t, e);
  }
  static getRatingMinWidth(t) {
    return t.measureText(this.RATING_MIN_WIDTH).width;
  }
  static getRatingItemText(t, e, i) {
    const r = new Df(i.owner, i.useMarkdown);
    return r.text = this.getLocString(i), e === 0 && t.minRateDescription ? r.text = t.locMinRateDescription.text + " " + this.getLocString(i) : e === t.visibleRateValues.length - 1 && t.maxRateDescription && (r.text = this.getLocString(i) + " " + t.locMaxRateDescription.text), r;
  }
  static getPageAvailableWidth(t) {
    return t.paperWidth - t.margins.left - t.margins.right;
  }
  static getImagePickerAvailableWidth(t) {
    const e = this.getPageAvailableWidth(t) - (this.IMAGEPICKER_COUNT - 1) * t.unitHeight;
    return e > 0 ? e : t.unitHeight;
  }
  static getColumnWidth(t, e) {
    return (this.getPageAvailableWidth(t) - (e - 1) * t.unitWidth * this.GAP_BETWEEN_COLUMNS) / e;
  }
  static setColumnMargins(t, e, i) {
    const r = this.getColumnWidth(t, e);
    t.margins.left = t.margins.left + i * (r + t.unitWidth * this.GAP_BETWEEN_COLUMNS), t.margins.right = t.margins.right + (e - i - 1) * (r + t.unitWidth * this.GAP_BETWEEN_COLUMNS);
  }
  static moveRect(t, e = t.xLeft, i = t.yTop) {
    return {
      xLeft: e,
      yTop: i,
      xRight: e + t.xRight - t.xLeft,
      yBot: i + t.yBot - t.yTop
    };
  }
  static scaleRect(t, e) {
    const i = Math.min(t.xRight - t.xLeft, t.yBot - t.yTop) * (1 - e) / 2;
    return {
      xLeft: t.xLeft + i,
      yTop: t.yTop + i,
      xRight: t.xRight - i,
      yBot: t.yBot - i
    };
  }
  static getBorderWidth(t) {
    return 2 * t.unitWidth * this.BORDER_SCALE;
  }
  static formScale(t, e) {
    const i = Math.min(e.width, e.height);
    return (i - this.getBorderWidth(t)) / i;
  }
  static generateQuestionFlats(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = this.getContentQuestionType(i, t), a = yield be.getInstance().create(t, i, e, s).generateFlats(r), l = new Rp(r, a, i, e, be.getInstance(), El);
      return i.customWidget && i.customWidget.isFit(i) && i.customWidget.pdfRender && t.onRenderQuestion.unshift(i.customWidget.pdfRender), yield t.onRenderQuestion.fire(t, l), [...l.bricks];
    });
  }
  static isFontExist(t, e) {
    return t.doc.internal.getFont(e).fontName === e;
  }
  static isCustomFont(t, e) {
    return t.doc.internal.getFont(e).encoding === this.CUSTOM_FONT_ENCODING;
  }
  static fixFont(t) {
    this.isCustomFont(t, t.fontName) && (t.doc.text("load font", 0, 0), t.doc.deletePage(1), t.addPage());
  }
  static clone(t) {
    const e = {};
    for (const i in t)
      t.hasOwnProperty(i) && (e[i] = t[i]);
    return e;
  }
  static shouldRenderReadOnly(t, e, i) {
    return (!!t && t.isReadOnly || i) && _.getReadonlyRenderAs(t, e) !== "acroform" || e?.compress;
  }
  static isSizeEmpty(t) {
    return !t || t === "auto";
  }
  static isHeightEmpty(t) {
    return this.isSizeEmpty(t) || t == "100%";
  }
  static getCorrectedImageSize(t, e) {
    return Lt(this, void 0, void 0, function* () {
      let { imageWidth: i, imageLink: r, imageHeight: s, defaultImageWidth: u, defaultImageHeight: a } = e;
      i = typeof i == "number" ? i.toString() : i, s = typeof s == "number" ? s.toString() : s;
      let l = i && _.parseWidth(i, _.getPageAvailableWidth(t), 1, "px"), c = s && _.parseWidth(s, _.getPageAvailableWidth(t), 1, "px");
      u = typeof u == "number" ? u.toString() : u, a = typeof a == "number" ? a.toString() : a;
      let d = u && _.parseWidth(u, _.getPageAvailableWidth(t), 1, "px"), y = a && _.parseWidth(a, _.getPageAvailableWidth(t), 1, "px");
      if (_.isSizeEmpty(i) || _.isHeightEmpty(s)) {
        const A = yield wl().getImageInfo(r);
        _.isSizeEmpty(i) ? _.isHeightEmpty(s) ? A && A.height && A.width && (c = Math.min(A.height, _.getPageAvailableWidth(t)), l = Math.min(A.width, _.getPageAvailableWidth(t))) : A && A.height && (l = A.width * c / A.height) : A && A.width && (c = A.height * l / A.width);
      }
      return { width: l || d || 0, height: c || y || 0 };
    });
  }
  static clear() {
    wl().clear();
  }
}
_.EPSILON = 2220446049250313e-30;
_.TITLE_SURVEY_FONT_SIZE_SCALE = 1.7;
_.TITLE_PAGE_FONT_SIZE_SCALE = 1.3;
_.TITLE_PANEL_FONT_SIZE_SCALE = 1.3;
_.DESCRIPTION_FONT_SIZE_SCALE = 2 / 3;
_.OTHER_ROWS_COUNT = 2;
_.RATING_MIN_WIDTH = 3;
_.RATING_MIN_HEIGHT = 2;
_.RATING_COLUMN_WIDTH = 5;
_.MATRIX_COLUMN_WIDTH = 5;
_.IMAGEPICKER_COUNT = 4;
_.IMAGEPICKER_RATIO = 4 / 3;
_.MULTIPLETEXT_TEXT_PERS = Math.E / 10;
_.HTML_TAIL_TEXT_SCALE = 0.24;
_.SELECT_ITEM_FLAT_SCALE = 0.95;
_.GAP_BETWEEN_ROWS = 0.25;
_.GAP_BETWEEN_COLUMNS = 1.5;
_.GAP_BETWEEN_ITEM_TEXT = 0.25;
_.FORM_BORDER_VISIBLE = !0;
_.BORDER_SCALE = 0.1;
_.VISIBLE_BORDER_SCALE = 0.8;
_.UNVISIBLE_BORDER_SCALE = 0.2;
_.RADIUS_SCALE = 3;
_.TITLE_FONT_SCALE = 1.1;
_.VALUE_READONLY_PADDING_SCALE = 0.3;
_.HTML_TO_IMAGE_QUALITY = 1;
_.FORM_BORDER_COLOR = "#9f9f9f";
_.TEXT_COLOR = "#404040";
_.BACKGROUND_COLOR = "#FFFFFF";
_.TITLE_LOCATION_MATRIX = "matrix";
_.STANDARD_FONT = "helvetica";
_.CUSTOM_FONT_ENCODING = "Identity-H";
function Mp(n) {
  const t = n.AcroFormAppearance.RadioButton.Circle.YesNormal;
  n.AcroFormAppearance.RadioButton.Circle.YesNormal = function(e) {
    const i = t(e), r = i.stream.split(`
`), s = n.__private__.encodeColorString(e.color);
    return r[0] = r[0] + `
` + s + `
` + s.toUpperCase(), i.stream = r.join(`
`), i;
  };
}
(function(n, t) {
  var e = n.API, i, r = 1;
  function s(L) {
    for (var G = "", E = 0; E < L.length; E++) {
      for (var K = L.charCodeAt(E).toString(16).toUpperCase(); K.length < 4; )
        K = "0" + K;
      G += K;
    }
    return "<FEFF" + G + ">";
  }
  var u = function(L) {
    return L.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
  }, a = function(L) {
    return L.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
  };
  function l(L) {
    for (var G = "[ ", E = 0; E < L.length; E++)
      G += s(L[E]);
    return G += " ]", G;
  }
  var c = function(L) {
    return L.toFixed(2);
  }, d = function(L) {
    return L.toFixed(5);
  };
  e.__acroform__ = {};
  var y = function(L, G) {
    L.prototype = Object.create(G.prototype), L.prototype.constructor = L;
  }, A = function(L) {
    return L * r;
  }, g = function(L) {
    return L / r;
  }, B = function(L) {
    var G = new R(), E = St.internal.getHeight(L) || 0, K = St.internal.getWidth(L) || 0;
    return G.BBox = [0, 0, Number(c(K)), Number(c(E))], G;
  }, O = e.__acroform__.setBit = function(L, G) {
    if (L = L || 0, G = G || 0, isNaN(L) || isNaN(G))
      throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
    var E = 1 << G;
    return L |= E, L;
  }, V = e.__acroform__.clearBit = function(L, G) {
    if (L = L || 0, G = G || 0, isNaN(L) || isNaN(G))
      throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
    var E = 1 << G;
    return L &= ~E, L;
  }, k = e.__acroform__.getBit = function(L, G) {
    if (isNaN(L) || isNaN(G))
      throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
    return (L & 1 << G) === 0 ? 0 : 1;
  }, J = e.__acroform__.getBitForPdf = function(L, G) {
    if (isNaN(L) || isNaN(G))
      throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
    return k(L, G - 1);
  }, Z = e.__acroform__.setBitForPdf = function(L, G) {
    if (isNaN(L) || isNaN(G))
      throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
    return O(L, G - 1);
  }, Y = e.__acroform__.clearBitForPdf = function(L, G) {
    if (isNaN(L) || isNaN(G))
      throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
    return V(L, G - 1);
  }, vt = e.__acroform__.calculateCoordinates = function(L) {
    var G = this.internal.getHorizontalCoordinate, E = this.internal.getVerticalCoordinate, K = L[0], at = L[1], Rt = L[2], jt = L[3], Dt = {};
    return Dt.lowerLeft_X = G(K) || 0, Dt.lowerLeft_Y = E(at + jt) || 0, Dt.upperRight_X = G(K + Rt) || 0, Dt.upperRight_Y = E(at) || 0, [Number(c(Dt.lowerLeft_X)), Number(c(Dt.lowerLeft_Y)), Number(c(Dt.upperRight_X)), Number(c(Dt.upperRight_Y))];
  }, Ft = function(L) {
    if (L.appearanceStreamContent)
      return L.appearanceStreamContent;
    if (!(!L.V && !L.DV)) {
      var G = [], E = L.V || L.DV, K = lt(L, E), at = i.internal.getFont(L.fontName, L.fontStyle).id;
      G.push("/Tx BMC"), G.push("q"), G.push("BT"), G.push(i.__private__.encodeColorString(L.color)), G.push("/" + at + " " + c(K.fontSize) + " Tf"), G.push("1 0 0 1 0 0 Tm"), G.push(K.text), G.push("ET"), G.push("Q"), G.push("EMC");
      var Rt = new B(L);
      return Rt.stream = G.join(`
`), Rt;
    }
  }, lt = function(L, G) {
    L.isUnicode && (G = L.trueValue);
    var E = L.fontSize === 0 ? L.maxFontSize : L.fontSize, K = {
      text: "",
      fontSize: ""
    };
    G = G.substr(0, 1) == "(" ? G.substr(1) : G, G = G.substr(G.length - 1) == ")" ? G.substr(0, G.length - 1) : G;
    var at = G.split(" ");
    at = at.map(function(yi) {
      return yi.split(`
`);
    }), L.multiline || (at = at.map(function(yi) {
      return [yi.join(" ")];
    }));
    var Rt = E, jt = 2, Dt = 2, Qt = St.internal.getHeight(L) || 0;
    Qt = Qt < 0 ? -Qt : Qt;
    var te = St.internal.getWidth(L) || 0;
    te = te < 0 ? -te : te;
    var Ot = function(yi, an, Ii) {
      if (yi + 1 < at.length) {
        var Bi = an + " " + at[yi + 1][0], Ue = M(Bi, L, Ii).width, ni = te - 2 * Dt;
        return Ue <= ni;
      } else
        return !1;
    };
    Rt++;
    t: for (; Rt > 0; ) {
      G = "", Rt--;
      var Jt = M("3", L, Rt).height, qt = L.multiline ? Qt - Rt : (Qt - Jt) / 2;
      qt += jt;
      var Ne, me = qt, se = 0, bt = 0, Se, Kt = 0;
      if (Rt <= 0) {
        Rt = 12, G = `(...) Tj
`, G += "% Width of Text: " + M(G, L, Rt).width + ", FieldWidth:" + te + `
`;
        break;
      }
      var ye = "", ie = 0;
      e: for (var ee = 0; ee < at.length; ee++)
        if (at.hasOwnProperty(ee)) {
          var ke = !1;
          if (at[ee].length !== 1 && Kt !== at[ee].length - 1) {
            if ((Jt + jt) * (ie + 2) + jt > Qt)
              continue t;
            ye += at[ee][Kt], ke = !0, bt = ee, ee--;
          } else {
            ye += at[ee][Kt] + " ", ye = ye.substr(ye.length - 1) == " " ? ye.substr(0, ye.length - 1) : ye;
            var de = parseInt(ee), ne = Ot(de, ye, Rt), xe = ee >= at.length - 1;
            if (ne && !xe) {
              ye += " ", Kt = 0;
              continue;
            } else if (!ne && !xe)
              if (L.multiline) {
                if ((Jt + jt) * (ie + 2) + jt > Qt)
                  continue t;
                bt = de;
              } else
                continue t;
            else if (xe)
              bt = de;
            else if (L.multiline && (Jt + jt) * (ie + 2) + jt > Qt)
              continue t;
          }
          for (var ii = "", Ve = se; Ve <= bt; Ve++) {
            var Fi = at[Ve];
            if (L.multiline) {
              if (Ve === bt) {
                ii += Fi[Kt] + " ", Kt = (Kt + 1) % Fi.length;
                continue;
              }
              if (Ve === se) {
                ii += Fi[Fi.length - 1] + " ";
                continue;
              }
            }
            ii += Fi[0] + " ";
          }
          switch (ii = ii.substr(ii.length - 1) == " " ? ii.substr(0, ii.length - 1) : ii, Se = M(ii, L, Rt).width, L.textAlign) {
            case "right":
              Ne = te - Se - Dt;
              break;
            case "center":
              Ne = (te - Se) / 2;
              break;
            default:
              Ne = Dt;
              break;
          }
          if (G += c(Ne) + " " + c(me) + ` Td
`, L.isUnicode) {
            var Ui = {};
            Ui[i.internal.getFont().id] = i.internal.getFont();
            var re = {
              text: ii,
              x: null,
              y: null,
              options: {
                lang: null
              },
              mutex: {
                pdfEscape: u,
                activeFontKey: i.internal.getFont().id,
                fonts: Ui,
                activeFontSize: L.fontSize
              }
            };
            i.internal.events.publish("postProcessText", re), G += "<" + re.text + `> Tj
`;
          } else
            G += "(" + u(ii) + `) Tj
`;
          G += -c(Ne) + ` 0 Td
`, me = -(Rt + jt), Se = 0, se = ke ? bt : bt + 1, ie++, ye = "";
          continue e;
        }
      break;
    }
    return K.text = G, K.fontSize = Rt, K;
  }, M = function(L, G, E) {
    var K = i.internal.getFont(G.fontName, G.fontStyle), at = i.getStringUnitWidth(L, { font: K, fontSize: parseFloat(E), charSpace: 0 }) * parseFloat(E), Rt = i.getStringUnitWidth("3", { font: K, fontSize: parseFloat(E), charSpace: 0 }) * parseFloat(E) * 1.5;
    return { height: Rt, width: at };
  }, b = {
    fields: [],
    xForms: [],
    /**
    * acroFormDictionaryRoot contains information about the AcroForm
    * Dictionary 0: The Event-Token, the AcroFormDictionaryCallback has
    * 1: The Object ID of the Root
    */
    acroFormDictionaryRoot: null,
    /**
    * After the PDF gets evaluated, the reference to the root has to be
    * reset, this indicates, whether the root has already been printed
    * out
    */
    printedOut: !1,
    internal: null,
    isInitialized: !1
  }, H = function() {
    i.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
    var L = i.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
    for (var G in L)
      if (L.hasOwnProperty(G)) {
        var E = L[G];
        E.objId = void 0, E.hasAnnotation && F.call(i, E);
      }
  }, v = function(L) {
    i.internal.acroformPlugin.printedOut && (i.internal.acroformPlugin.printedOut = !1, i.internal.acroformPlugin.acroFormDictionaryRoot = null), i.internal.acroformPlugin.acroFormDictionaryRoot || ot.call(i), i.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(L);
  }, F = function(L) {
    var G = {
      type: "reference",
      object: L
    }, E = function(K) {
      return K.type === G.type && K.object === G.object;
    };
    i.internal.getPageInfo(L.page).pageContext.annotations.find(E) === void 0 && i.internal.getPageInfo(L.page).pageContext.annotations.push(G);
  }, D = function() {
    if (typeof i.internal.acroformPlugin.acroFormDictionaryRoot < "u")
      i.internal.write("/AcroForm " + i.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
    else
      throw new Error("putCatalogCallback: Root missing.");
  }, q = function() {
    i.internal.events.unsubscribe(i.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete i.internal.acroformPlugin.acroFormDictionaryRoot._eventID, i.internal.acroformPlugin.printedOut = !0;
  }, it = function(L) {
    var G = !L;
    L || (i.internal.newObjectDeferredBegin(i.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), i.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), L = L || i.internal.acroformPlugin.acroFormDictionaryRoot.Kids;
    for (var E in L)
      if (L.hasOwnProperty(E)) {
        var K = L[E], at = [], Rt = K.Rect;
        if (K.Rect && (K.Rect = vt.call(this, K.Rect)), i.internal.newObjectDeferredBegin(K.objId, !0), K.DA = St.createDefaultAppearanceStream(K), typeof K == "object" && typeof K.getKeyValueListForStream == "function" && (at = K.getKeyValueListForStream()), K.Rect = Rt, K.hasAppearanceStream && !K.appearanceStreamContent) {
          var jt = Ft.call(this, K);
          at.push({ key: "AP", value: "<</N " + jt + ">>" }), i.internal.acroformPlugin.xForms.push(jt);
        }
        if (K.appearanceStreamContent) {
          var Dt = "";
          for (var Qt in K.appearanceStreamContent)
            if (K.appearanceStreamContent.hasOwnProperty(Qt)) {
              var te = K.appearanceStreamContent[Qt];
              if (Dt += "/" + Qt + " ", Dt += "<<", Object.keys(te).length >= 1 || Array.isArray(te)) {
                for (var E in te)
                  if (te.hasOwnProperty(E)) {
                    var Ot = te[E];
                    typeof Ot == "function" && (Ot = Ot.call(this, K)), Dt += "/" + E + " " + Ot + " ", i.internal.acroformPlugin.xForms.indexOf(Ot) >= 0 || i.internal.acroformPlugin.xForms.push(Ot);
                  }
              } else
                Ot = te, typeof Ot == "function" && (Ot = Ot.call(this, K)), Dt += "/" + E + " " + Ot, i.internal.acroformPlugin.xForms.indexOf(Ot) >= 0 || i.internal.acroformPlugin.xForms.push(Ot);
              Dt += ">>";
            }
          at.push({ key: "AP", value: `<<
` + Dt + ">>" });
        }
        i.internal.putStream({ additionalKeyValues: at }), i.internal.out("endobj");
      }
    G && ut.call(this, i.internal.acroformPlugin.xForms);
  }, ut = function(L) {
    for (var G in L)
      if (L.hasOwnProperty(G)) {
        var E = G, K = L[G];
        i.internal.newObjectDeferredBegin(K && K.objId, !0), typeof K == "object" && typeof K.putStream == "function" && K.putStream(), delete L[E];
      }
  }, ot = function() {
    if (this.internal !== void 0 && (this.internal.acroformPlugin === void 0 || this.internal.acroformPlugin.isInitialized === !1)) {
      if (i = this, X.FieldNum = 0, this.internal.acroformPlugin = JSON.parse(JSON.stringify(b)), this.internal.acroformPlugin.acroFormDictionaryRoot)
        throw new Error("Exception while creating AcroformDictionary");
      r = i.internal.scaleFactor, i.internal.acroformPlugin.acroFormDictionaryRoot = new z(), i.internal.acroformPlugin.acroFormDictionaryRoot._eventID = i.internal.events.subscribe("postPutResources", q), i.internal.events.subscribe("buildDocument", H), i.internal.events.subscribe("putCatalog", D), i.internal.events.subscribe("postPutPages", it), i.internal.acroformPlugin.isInitialized = !0;
    }
  }, et = e.__acroform__.arrayToPdfArray = function(L) {
    if (Array.isArray(L)) {
      for (var G = "[", E = 0; E < L.length; E++)
        switch (E !== 0 && (G += " "), typeof L[E]) {
          case "boolean":
          case "number":
          case "object":
            G += L[E].toString();
            break;
          case "string":
            L[E].substr(0, 1) !== "/" ? G += "(" + u(L[E].toString()) + ")" : G += L[E].toString();
            break;
        }
      return G += "]", G;
    }
    throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
  };
  function ct(L, G, E) {
    E || (E = 1);
    for (var K = [], at; at = G.exec(L); )
      K.push(at[E]);
    return K;
  }
  var Nt = function(L) {
    var G = [];
    return typeof L == "string" && (G = ct(L, /\((.*?)\)/g)), G;
  }, ft = function(L) {
    return L = L || "", L.toString(), L = "(" + u(L) + ")", L;
  }, N = function() {
    var L;
    Object.defineProperty(this, "objId", {
      configurable: !0,
      get: function() {
        return L || (L = i.internal.newObjectDeferred()), L;
      },
      set: function(G) {
        L = G;
      }
    });
  };
  N.prototype.toString = function() {
    return this.objId + " 0 R";
  }, N.prototype.putStream = function() {
    var L = this.getKeyValueListForStream();
    i.internal.putStream({ data: this.stream, additionalKeyValues: L }), i.internal.out("endobj");
  }, N.prototype.getKeyValueListForStream = function() {
    var L = function(G) {
      var E = [], K = Object.getOwnPropertyNames(G).filter(function(Qt) {
        return Qt != "content" && Qt != "appearanceStreamContent" && Qt.substring(0, 1) != "_";
      });
      for (var at in K) {
        var Rt = Object.getOwnPropertyDescriptor(G, K[at]);
        if (Rt && Rt.configurable === !1) {
          var jt = K[at], Dt = G[jt];
          Dt && (Array.isArray(Dt) ? E.push({ key: jt, value: et(Dt) }) : Dt instanceof N ? E.push({ key: jt, value: Dt.objId + " 0 R" }) : typeof Dt != "function" && E.push({ key: jt, value: Dt }));
        }
      }
      return E;
    };
    return L(this);
  };
  var R = function() {
    N.call(this), Object.defineProperty(this, "Type", {
      value: "/XObject",
      configurable: !1,
      writeable: !0
    }), Object.defineProperty(this, "Subtype", {
      value: "/Form",
      configurable: !1,
      writeable: !0
    }), Object.defineProperty(this, "FormType", {
      value: 1,
      configurable: !1,
      writeable: !0
    });
    var L = [];
    Object.defineProperty(this, "BBox", {
      configurable: !1,
      writeable: !0,
      get: function() {
        return L;
      },
      set: function(E) {
        L = E;
      }
    }), Object.defineProperty(this, "Resources", {
      value: "2 0 R",
      configurable: !1,
      writeable: !0
    });
    var G;
    Object.defineProperty(this, "stream", {
      enumerable: !1,
      configurable: !0,
      set: function(E) {
        G = E.trim();
      },
      get: function() {
        return G || null;
      }
    });
  };
  y(R, N);
  var z = function() {
    N.call(this);
    var L = [];
    Object.defineProperty(this, "Kids", {
      enumerable: !1,
      configurable: !0,
      get: function() {
        if (L.length > 0)
          return L;
      }
    }), Object.defineProperty(this, "Fields", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        return L;
      }
    });
    var G;
    Object.defineProperty(this, "DA", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        if (G)
          return "(" + G + ")";
      },
      set: function(E) {
        G = E;
      }
    });
  };
  y(z, N);
  var X = function() {
    N.call(this);
    var L = 4;
    this.isUnicode = !1, this.trueValue = "", Object.defineProperty(this, "F", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        return L;
      },
      set: function(bt) {
        if (!isNaN(bt))
          L = bt;
        else
          throw new Error('Invalid value "' + bt + '" for attribute F supplied.');
      }
    }), Object.defineProperty(this, "showWhenPrinted", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(L, 3);
      },
      set: function(bt) {
        bt ? this.F = Z(L, 3) : this.F = Y(L, 3);
      }
    });
    var G = 0;
    Object.defineProperty(this, "Ff", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        return G;
      },
      set: function(bt) {
        if (!isNaN(bt))
          G = bt;
        else
          throw new Error('Invalid value "' + bt + '" for attribute Ff supplied.');
      }
    });
    var E = [];
    Object.defineProperty(this, "Rect", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        if (E.length !== 0)
          return E;
      },
      set: function(bt) {
        typeof bt < "u" ? E = bt : E = [];
      }
    }), Object.defineProperty(this, "x", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !E || isNaN(E[0]) ? 0 : g(E[0]);
      },
      set: function(bt) {
        E[0] = A(bt);
      }
    }), Object.defineProperty(this, "y", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !E || isNaN(E[1]) ? 0 : g(E[1]);
      },
      set: function(bt) {
        E[1] = A(bt);
      }
    }), Object.defineProperty(this, "width", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !E || isNaN(E[2]) ? 0 : g(E[2]);
      },
      set: function(bt) {
        E[2] = A(bt);
      }
    }), Object.defineProperty(this, "height", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !E || isNaN(E[3]) ? 0 : g(E[3]);
      },
      set: function(bt) {
        E[3] = A(bt);
      }
    });
    var K = "";
    Object.defineProperty(this, "FT", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return K;
      },
      set: function(bt) {
        switch (bt) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            K = bt;
            break;
          default:
            throw new Error('Invalid value "' + bt + '" for attribute FT supplied.');
        }
      }
    });
    var at = null;
    Object.defineProperty(this, "T", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        if (!at || at.length < 1) {
          if (this instanceof Bt)
            return;
          at = "FieldObject" + X.FieldNum++;
        }
        return "(" + u(at) + ")";
      },
      set: function(bt) {
        at = bt.toString();
      }
    }), Object.defineProperty(this, "fieldName", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return at;
      },
      set: function(bt) {
        at = bt;
      }
    });
    var Rt = "helvetica";
    Object.defineProperty(this, "fontName", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return Rt;
      },
      set: function(bt) {
        Rt = bt;
      }
    });
    var jt = "normal";
    Object.defineProperty(this, "fontStyle", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return jt;
      },
      set: function(bt) {
        jt = bt;
      }
    });
    var Dt = 0;
    Object.defineProperty(this, "fontSize", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return g(Dt);
      },
      set: function(bt) {
        Dt = A(bt);
      }
    });
    var Qt = 50;
    Object.defineProperty(this, "maxFontSize", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return g(Qt);
      },
      set: function(bt) {
        Qt = A(bt);
      }
    });
    var te = "black";
    Object.defineProperty(this, "color", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return te;
      },
      set: function(bt) {
        te = bt;
      }
    });
    var Ot = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        if (!(!Ot || this instanceof Bt || this instanceof I))
          return ft(Ot);
      },
      set: function(bt) {
        bt = bt.toString(), Ot = bt;
      }
    });
    var Jt = null;
    Object.defineProperty(this, "DV", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        if (Jt)
          return this instanceof yt ? Jt : ft(Jt);
      },
      set: function(bt) {
        bt = bt.toString(), this instanceof yt ? Jt = bt : bt.substr(0, 1) === "(" ? Jt = a(bt.substr(1, bt.length - 2)) : Jt = a(bt);
      }
    }), Object.defineProperty(this, "defaultValue", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return this instanceof yt ? a(Jt.substr(1, Jt.length - 1)) : Jt;
      },
      set: function(bt) {
        bt = bt.toString(), this instanceof yt ? Jt = "/" + bt : Jt = bt;
      }
    });
    var qt = null;
    Object.defineProperty(this, "V", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        if (this.isUnicode)
          return qt;
        if (qt)
          return this instanceof yt ? qt : ft(qt);
      },
      set: function(bt) {
        bt = bt.toString(), this.isUnicode ? (qt = s(bt), this.trueValue = bt) : this instanceof yt ? qt = bt : bt.substr(0, 1) === "(" ? qt = a(bt.substr(1, bt.length - 2)) : qt = a(bt);
      }
    }), Object.defineProperty(this, "value", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return this instanceof yt ? a(qt.substr(1, qt.length - 1)) : qt;
      },
      set: function(bt) {
        bt = bt.toString(), this instanceof yt ? qt = "/" + bt : qt = bt;
      }
    }), Object.defineProperty(this, "hasAnnotation", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return this.Rect;
      }
    }), Object.defineProperty(this, "Type", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return this.hasAnnotation ? "/Annot" : null;
      }
    }), Object.defineProperty(this, "Subtype", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return this.hasAnnotation ? "/Widget" : null;
      }
    });
    var Ne = !1;
    Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: !0,
      configurable: !0,
      writeable: !0,
      get: function() {
        return Ne;
      },
      set: function(bt) {
        bt = !!bt, Ne = bt;
      }
    });
    var me;
    Object.defineProperty(this, "page", {
      enumerable: !0,
      configurable: !0,
      writeable: !0,
      get: function() {
        if (me)
          return me;
      },
      set: function(bt) {
        me = bt;
      }
    }), Object.defineProperty(this, "readOnly", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 1);
      },
      set: function(bt) {
        bt ? this.Ff = Z(this.Ff, 1) : this.Ff = Y(this.Ff, 1);
      }
    }), Object.defineProperty(this, "required", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 2);
      },
      set: function(bt) {
        bt ? this.Ff = Z(this.Ff, 2) : this.Ff = Y(this.Ff, 2);
      }
    }), Object.defineProperty(this, "noExport", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 3);
      },
      set: function(bt) {
        bt ? this.Ff = Z(this.Ff, 3) : this.Ff = Y(this.Ff, 3);
      }
    });
    var se = null;
    Object.defineProperty(this, "Q", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        if (se !== null)
          return se;
      },
      set: function(bt) {
        if ([0, 1, 2].indexOf(bt) !== -1)
          se = bt;
        else
          throw new Error('Invalid value "' + bt + '" for attribute Q supplied.');
      }
    }), Object.defineProperty(this, "textAlign", {
      get: function() {
        var bt;
        switch (se) {
          case 0:
          default:
            bt = "left";
            break;
          case 1:
            bt = "center";
            break;
          case 2:
            bt = "right";
            break;
        }
        return bt;
      },
      configurable: !0,
      enumerable: !0,
      set: function(bt) {
        switch (bt) {
          case "right":
          case 2:
            se = 2;
            break;
          case "center":
          case 1:
            se = 1;
            break;
          default:
            se = 0;
        }
      }
    });
  };
  y(X, N);
  var Q = function() {
    X.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
    var L = 0;
    Object.defineProperty(this, "TI", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return L;
      },
      set: function(K) {
        L = K;
      }
    });
    var G = "<< /BG [ 0.975 0.975 0.975 ]  >>";
    Object.defineProperty(this, "MK", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return G;
      },
      set: function(K) {
        G = K;
      }
    }), Object.defineProperty(this, "topIndex", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return L;
      },
      set: function(K) {
        L = K;
      }
    });
    var E = [];
    Object.defineProperty(this, "Opt", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return this.isUnicode ? l(E) : et(E);
      },
      set: function(K) {
        E = Nt(K);
      }
    }), this.getOptions = function() {
      return E;
    }, this.setOptions = function(K) {
      E = K, this.sort && E.sort();
    }, this.addOption = function(K) {
      K = K || "", K = K.toString(), E.push(K), this.sort && E.sort();
    }, this.removeOption = function(K, at) {
      for (at = at || !1, K = K || "", K = K.toString(); E.indexOf(K) !== -1 && (E.splice(E.indexOf(K), 1), at !== !1); )
        ;
    }, Object.defineProperty(this, "combo", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 18);
      },
      set: function(K) {
        K ? this.Ff = Z(this.Ff, 18) : this.Ff = Y(this.Ff, 18);
      }
    }), Object.defineProperty(this, "edit", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 19);
      },
      set: function(K) {
        this.combo === !0 && (K ? this.Ff = Z(this.Ff, 19) : this.Ff = Y(this.Ff, 19));
      }
    }), Object.defineProperty(this, "sort", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 20);
      },
      set: function(K) {
        K ? (this.Ff = Z(this.Ff, 20), E.sort()) : this.Ff = Y(this.Ff, 20);
      }
    }), Object.defineProperty(this, "multiSelect", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 22);
      },
      set: function(K) {
        K ? this.Ff = Z(this.Ff, 22) : this.Ff = Y(this.Ff, 22);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 23);
      },
      set: function(K) {
        K ? this.Ff = Z(this.Ff, 23) : this.Ff = Y(this.Ff, 23);
      }
    }), Object.defineProperty(this, "commitOnSelChange", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 27);
      },
      set: function(K) {
        K ? this.Ff = Z(this.Ff, 27) : this.Ff = Y(this.Ff, 27);
      }
    }), this.hasAppearanceStream = !1;
  };
  y(Q, X);
  var st = function() {
    Q.call(this), this.fontName = "helvetica", this.combo = !1;
  };
  y(st, Q);
  var gt = function() {
    st.call(this), this.combo = !0;
  };
  y(gt, st);
  var mt = function() {
    gt.call(this), this.edit = !0;
  };
  y(mt, gt);
  var yt = function() {
    X.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 15);
      },
      set: function(E) {
        E ? this.Ff = Z(this.Ff, 15) : this.Ff = Y(this.Ff, 15);
      }
    }), Object.defineProperty(this, "radio", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 16);
      },
      set: function(E) {
        E ? this.Ff = Z(this.Ff, 16) : this.Ff = Y(this.Ff, 16);
      }
    }), Object.defineProperty(this, "pushButton", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 17);
      },
      set: function(E) {
        E ? this.Ff = Z(this.Ff, 17) : this.Ff = Y(this.Ff, 17);
      }
    }), Object.defineProperty(this, "radioIsUnison", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 26);
      },
      set: function(E) {
        E ? this.Ff = Z(this.Ff, 26) : this.Ff = Y(this.Ff, 26);
      }
    });
    var L = {};
    Object.defineProperty(this, "MK", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        if (Object.keys(L).length !== 0) {
          var E = [];
          E.push("<<");
          var K;
          for (K in L)
            E.push("/" + K + " (" + L[K] + ")");
          return E.push(">>"), E.join(`
`);
        }
      },
      set: function(E) {
        typeof E == "object" && (L = E);
      }
    }), Object.defineProperty(this, "caption", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return L.CA || "";
      },
      set: function(E) {
        typeof E == "string" && (L.CA = E);
      }
    });
    var G;
    Object.defineProperty(this, "AS", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        return G;
      },
      set: function(E) {
        G = E;
      }
    }), Object.defineProperty(this, "appearanceState", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return G.substr(1, G.length - 1);
      },
      set: function(E) {
        G = "/" + E;
      }
    });
  };
  y(yt, X);
  var Ct = function() {
    yt.call(this), this.pushButton = !0;
  };
  y(Ct, yt);
  var It = function() {
    yt.call(this), this.radio = !0, this.pushButton = !1;
    var L = [];
    Object.defineProperty(this, "Kids", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return L;
      },
      set: function(G) {
        typeof G < "u" ? L = G : L = [];
      }
    });
  };
  y(It, yt);
  var Bt = function() {
    X.call(this);
    var L;
    Object.defineProperty(this, "Parent", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        return L;
      },
      set: function(at) {
        L = at;
      }
    });
    var G;
    Object.defineProperty(this, "optionName", {
      enumerable: !1,
      configurable: !0,
      get: function() {
        return G;
      },
      set: function(at) {
        G = at;
      }
    });
    var E = {};
    Object.defineProperty(this, "MK", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        var at = [];
        at.push("<<");
        var Rt;
        for (Rt in E)
          at.push("/" + Rt + " (" + E[Rt] + ")");
        return at.push(">>"), at.join(`
`);
      },
      set: function(at) {
        typeof at == "object" && (E = at);
      }
    }), Object.defineProperty(this, "caption", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return E.CA || "";
      },
      set: function(at) {
        typeof at == "string" && (E.CA = at);
      }
    });
    var K;
    Object.defineProperty(this, "AS", {
      enumerable: !1,
      configurable: !1,
      get: function() {
        return K;
      },
      set: function(at) {
        K = at;
      }
    }), Object.defineProperty(this, "appearanceState", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return K.substr(1, K.length - 1);
      },
      set: function(at) {
        K = "/" + at;
      }
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = St.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
  };
  y(Bt, X), It.prototype.setAppearance = function(L) {
    if (!("createAppearanceStream" in L && "getCA" in L))
      throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for (var G in this.Kids)
      if (this.Kids.hasOwnProperty(G)) {
        var E = this.Kids[G];
        E.appearanceStreamContent = L.createAppearanceStream(E.optionName), E.caption = L.getCA();
      }
  }, It.prototype.createOption = function(L) {
    var G = new Bt();
    return G.Parent = this, G.optionName = L, this.Kids.push(G), Ut.call(this, G), G;
  };
  var Ht = function() {
    yt.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = St.CheckBox.createAppearanceStream();
  };
  y(Ht, yt);
  var I = function() {
    X.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 13);
      },
      set: function(G) {
        G ? this.Ff = Z(this.Ff, 13) : this.Ff = Y(this.Ff, 13);
      }
    }), Object.defineProperty(this, "fileSelect", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 21);
      },
      set: function(G) {
        G ? this.Ff = Z(this.Ff, 21) : this.Ff = Y(this.Ff, 21);
      }
    }), Object.defineProperty(this, "doNotSpellCheck", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 23);
      },
      set: function(G) {
        G ? this.Ff = Z(this.Ff, 23) : this.Ff = Y(this.Ff, 23);
      }
    }), Object.defineProperty(this, "doNotScroll", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 24);
      },
      set: function(G) {
        G ? this.Ff = Z(this.Ff, 24) : this.Ff = Y(this.Ff, 24);
      }
    }), Object.defineProperty(this, "comb", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 25);
      },
      set: function(G) {
        G ? this.Ff = Z(this.Ff, 25) : this.Ff = Y(this.Ff, 25);
      }
    }), Object.defineProperty(this, "richText", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 26);
      },
      set: function(G) {
        G ? this.Ff = Z(this.Ff, 26) : this.Ff = Y(this.Ff, 26);
      }
    });
    var L = null;
    Object.defineProperty(this, "MaxLen", {
      enumerable: !0,
      configurable: !1,
      get: function() {
        return L;
      },
      set: function(G) {
        L = G;
      }
    }), Object.defineProperty(this, "maxLength", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return L;
      },
      set: function(G) {
        Number.isInteger(G) && (L = G);
      }
    }), Object.defineProperty(this, "hasAppearanceStream", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return this.V || this.DV;
      }
    });
  };
  y(I, X);
  var Et = function() {
    I.call(this), Object.defineProperty(this, "password", {
      enumerable: !0,
      configurable: !0,
      get: function() {
        return !!J(this.Ff, 14);
      },
      set: function(L) {
        L ? this.Ff = Z(this.Ff, 14) : this.Ff = Y(this.Ff, 14);
      }
    }), this.password = !0;
  };
  y(Et, I);
  var St = {
    CheckBox: {
      createAppearanceStream: function() {
        var L = {
          N: {
            On: St.CheckBox.YesNormal
          },
          D: {
            On: St.CheckBox.YesPushDown,
            Off: St.CheckBox.OffPushDown
          }
        };
        return L;
      },
      /**
        * Returns the standard On Appearance for a CheckBox
        * 
        * @returns {AcroFormXObject}
        */
      YesPushDown: function(L) {
        var G = new B(L), E = [], K = i.internal.getFont(L.fontName, L.fontStyle).id, at = i.__private__.encodeColorString(L.color), Rt = lt(L, L.caption);
        return E.push("0.749023 g"), E.push("0 0 " + c(St.internal.getWidth(L)) + " " + c(St.internal.getHeight(L)) + " re"), E.push("f"), E.push("BMC"), E.push("q"), E.push("0 0 1 rg"), E.push("/" + K + " " + c(Rt.fontSize) + " Tf " + at), E.push("BT"), E.push(Rt.text), E.push("ET"), E.push("Q"), E.push("EMC"), G.stream = E.join(`
`), G;
      },
      YesNormal: function(L) {
        var G = new B(L), E = i.internal.getFont(L.fontName, L.fontStyle).id, K = i.__private__.encodeColorString(L.color), at = [], Rt = St.internal.getHeight(L), jt = St.internal.getWidth(L), Dt = lt(L, L.caption);
        return at.push("1 g"), at.push("0 0 " + c(jt) + " " + c(Rt) + " re"), at.push("f"), at.push("q"), at.push("0 0 1 rg"), at.push("0 0 " + c(jt - 1) + " " + c(Rt - 1) + " re"), at.push("W"), at.push("n"), at.push("0 g"), at.push("BT"), at.push("/" + E + " " + c(Dt.fontSize) + " Tf " + K), at.push(Dt.text), at.push("ET"), at.push("Q"), G.stream = at.join(`
`), G;
      },
      /**
        * Returns the standard Off Appearance for a CheckBox
        * 
        * @returns {AcroFormXObject}
        */
      OffPushDown: function(L) {
        var G = new B(L), E = [];
        return E.push("0.749023 g"), E.push("0 0 " + c(St.internal.getWidth(L)) + " " + c(St.internal.getHeight(L)) + " re"), E.push("f"), G.stream = E.join(`
`), G;
      }
    },
    RadioButton: {
      Circle: {
        createAppearanceStream: function(L) {
          var G = {
            D: {
              Off: St.RadioButton.Circle.OffPushDown
            },
            N: {}
          };
          return G.N[L] = St.RadioButton.Circle.YesNormal, G.D[L] = St.RadioButton.Circle.YesPushDown, G;
        },
        getCA: function() {
          return "l";
        },
        YesNormal: function(L) {
          var G = new B(L), E = [], K = St.internal.getWidth(L) <= St.internal.getHeight(L) ? St.internal.getWidth(L) / 4 : St.internal.getHeight(L) / 4;
          K = Number((K * 0.9).toFixed(5));
          var at = St.internal.Bezier_C, Rt = Number((K * at).toFixed(5));
          return E.push("q"), E.push("1 0 0 1 " + d(St.internal.getWidth(L) / 2) + " " + d(St.internal.getHeight(L) / 2) + " cm"), E.push(K + " 0 m"), E.push(K + " " + Rt + " " + Rt + " " + K + " 0 " + K + " c"), E.push("-" + Rt + " " + K + " -" + K + " " + Rt + " -" + K + " 0 c"), E.push("-" + K + " -" + Rt + " -" + Rt + " -" + K + " 0 -" + K + " c"), E.push(Rt + " -" + K + " " + K + " -" + Rt + " " + K + " 0 c"), E.push("f"), E.push("Q"), G.stream = E.join(`
`), G;
        },
        YesPushDown: function(L) {
          var G = new B(L), E = [], K = St.internal.getWidth(L) <= St.internal.getHeight(L) ? St.internal.getWidth(L) / 4 : St.internal.getHeight(L) / 4, K = Number((K * 0.9).toFixed(5)), at = Number((K * 2).toFixed(5)), Rt = Number((at * St.internal.Bezier_C).toFixed(5)), jt = Number((K * St.internal.Bezier_C).toFixed(5));
          return E.push("0.749023 g"), E.push("q"), E.push("1 0 0 1 " + d(St.internal.getWidth(L) / 2) + " " + d(St.internal.getHeight(L) / 2) + " cm"), E.push(at + " 0 m"), E.push(at + " " + Rt + " " + Rt + " " + at + " 0 " + at + " c"), E.push("-" + Rt + " " + at + " -" + at + " " + Rt + " -" + at + " 0 c"), E.push("-" + at + " -" + Rt + " -" + Rt + " -" + at + " 0 -" + at + " c"), E.push(Rt + " -" + at + " " + at + " -" + Rt + " " + at + " 0 c"), E.push("f"), E.push("Q"), E.push("0 g"), E.push("q"), E.push("1 0 0 1 " + d(St.internal.getWidth(L) / 2) + " " + d(St.internal.getHeight(L) / 2) + " cm"), E.push(K + " 0 m"), E.push("" + K + " " + jt + " " + jt + " " + K + " 0 " + K + " c"), E.push("-" + jt + " " + K + " -" + K + " " + jt + " -" + K + " 0 c"), E.push("-" + K + " -" + jt + " -" + jt + " -" + K + " 0 -" + K + " c"), E.push(jt + " -" + K + " " + K + " -" + jt + " " + K + " 0 c"), E.push("f"), E.push("Q"), G.stream = E.join(`
`), G;
        },
        OffPushDown: function(L) {
          var G = new B(L), E = [], K = St.internal.getWidth(L) <= St.internal.getHeight(L) ? St.internal.getWidth(L) / 4 : St.internal.getHeight(L) / 4;
          K = Number((K * 0.9).toFixed(5));
          var at = Number((K * 2).toFixed(5)), Rt = Number((at * St.internal.Bezier_C).toFixed(5));
          return E.push("0.749023 g"), E.push("q"), E.push("1 0 0 1 " + d(St.internal.getWidth(L) / 2) + " " + d(St.internal.getHeight(L) / 2) + " cm"), E.push(at + " 0 m"), E.push(at + " " + Rt + " " + Rt + " " + at + " 0 " + at + " c"), E.push("-" + Rt + " " + at + " -" + at + " " + Rt + " -" + at + " 0 c"), E.push("-" + at + " -" + Rt + " -" + Rt + " -" + at + " 0 -" + at + " c"), E.push(Rt + " -" + at + " " + at + " -" + Rt + " " + at + " 0 c"), E.push("f"), E.push("Q"), G.stream = E.join(`
`), G;
        }
      },
      Cross: {
        /**
          * Creates the Actual AppearanceDictionary-References
          * 
          * @param {string} name
          * @returns {Object}
          * @ignore
          */
        createAppearanceStream: function(L) {
          var G = {
            D: {
              Off: St.RadioButton.Cross.OffPushDown
            },
            N: {}
          };
          return G.N[L] = St.RadioButton.Cross.YesNormal, G.D[L] = St.RadioButton.Cross.YesPushDown, G;
        },
        getCA: function() {
          return "8";
        },
        YesNormal: function(L) {
          var G = new B(L), E = [], K = St.internal.calculateCross(L);
          return E.push("q"), E.push("1 1 " + c(St.internal.getWidth(L) - 2) + " " + c(St.internal.getHeight(L) - 2) + " re"), E.push("W"), E.push("n"), E.push(c(K.x1.x) + " " + c(K.x1.y) + " m"), E.push(c(K.x2.x) + " " + c(K.x2.y) + " l"), E.push(c(K.x4.x) + " " + c(K.x4.y) + " m"), E.push(c(K.x3.x) + " " + c(K.x3.y) + " l"), E.push("s"), E.push("Q"), G.stream = E.join(`
`), G;
        },
        YesPushDown: function(L) {
          var G = new B(L), E = St.internal.calculateCross(L), K = [];
          return K.push("0.749023 g"), K.push("0 0 " + c(St.internal.getWidth(L)) + " " + c(St.internal.getHeight(L)) + " re"), K.push("f"), K.push("q"), K.push("1 1 " + c(St.internal.getWidth(L) - 2) + " " + c(St.internal.getHeight(L) - 2) + " re"), K.push("W"), K.push("n"), K.push(c(E.x1.x) + " " + c(E.x1.y) + " m"), K.push(c(E.x2.x) + " " + c(E.x2.y) + " l"), K.push(c(E.x4.x) + " " + c(E.x4.y) + " m"), K.push(c(E.x3.x) + " " + c(E.x3.y) + " l"), K.push("s"), K.push("Q"), G.stream = K.join(`
`), G;
        },
        OffPushDown: function(L) {
          var G = new B(L), E = [];
          return E.push("0.749023 g"), E.push("0 0 " + c(St.internal.getWidth(L)) + " " + c(St.internal.getHeight(L)) + " re"), E.push("f"), G.stream = E.join(`
`), G;
        }
      }
    },
    /**
      * Returns the standard Appearance
      * 
      * @returns {AcroFormXObject}
      */
    createDefaultAppearanceStream: function(L) {
      var G = i.internal.getFont(L.fontName, L.fontStyle).id, E = i.__private__.encodeColorString(L.color), K = L.fontSize, at = "/" + G + " " + K + " Tf " + E;
      return at;
    }
  };
  St.internal = {
    Bezier_C: 0.551915024494,
    calculateCross: function(L) {
      var G = St.internal.getWidth(L), E = St.internal.getHeight(L), K = Math.min(G, E), at = {
        x1: {
          // upperLeft
          x: (G - K) / 2,
          y: (E - K) / 2 + K
          // height - borderPadding
        },
        x2: {
          // lowerRight
          x: (G - K) / 2 + K,
          y: (E - K) / 2
          // borderPadding
        },
        x3: {
          // lowerLeft
          x: (G - K) / 2,
          y: (E - K) / 2
          // borderPadding
        },
        x4: {
          // upperRight
          x: (G - K) / 2 + K,
          y: (E - K) / 2 + K
          // height - borderPadding
        }
      };
      return at;
    }
  }, St.internal.getWidth = function(L) {
    var G = 0;
    return typeof L == "object" && (G = A(L.Rect[2])), G;
  }, St.internal.getHeight = function(L) {
    var G = 0;
    return typeof L == "object" && (G = A(L.Rect[3])), G;
  };
  var Ut = e.addField = function(L) {
    if (ot.call(this), L instanceof X)
      v.call(this, L);
    else
      throw new Error("Invalid argument passed to jsPDF.addField.");
    return L.page = i.internal.getCurrentPageInfo().pageNumber, this;
  };
  e.addButton = function(L) {
    if (!(L instanceof yt))
      throw new Error("Invalid argument passed to jsPDF.addButton.");
    return Ut.call(this, L);
  }, e.addTextField = function(L) {
    if (!(L instanceof I))
      throw new Error("Invalid argument passed to jsPDF.addTextField.");
    return Ut.call(this, L);
  }, e.addChoiceField = function(L) {
    if (!(L instanceof Q))
      throw new Error("Invalid argument passed to jsPDF.addChoiceField.");
    return Ut.call(this, L);
  }, typeof t == "object" && typeof t.ChoiceField > "u" && typeof t.ListBox > "u" && typeof t.ComboBox > "u" && typeof t.EditBox > "u" && typeof t.Button > "u" && typeof t.PushButton > "u" && typeof t.RadioButton > "u" && typeof t.CheckBox > "u" && typeof t.TextField > "u" && typeof t.PasswordField > "u" && (t.ChoiceField = Q, t.ListBox = st, t.ComboBox = gt, t.EditBox = mt, t.Button = yt, t.PushButton = Ct, t.RadioButton = It, t.CheckBox = Ht, t.TextField = I, t.PasswordField = Et, t.AcroForm = { Appearance: St }), e.AcroFormChoiceField = Q, e.AcroFormListBox = st, e.AcroFormComboBox = gt, e.AcroFormEditBox = mt, e.AcroFormButton = yt, e.AcroFormPushButton = Ct, e.AcroFormRadioButton = It, e.AcroFormCheckBox = Ht, e.AcroFormTextField = I, e.AcroFormPasswordField = Et, e.AcroFormAppearance = St, e.AcroForm = {
    ChoiceField: Q,
    ListBox: st,
    ComboBox: gt,
    EditBox: mt,
    Button: yt,
    PushButton: Ct,
    RadioButton: It,
    CheckBox: Ht,
    TextField: I,
    PasswordField: Et,
    Appearance: St
  }, n.AcroForm = {
    ChoiceField: Q,
    ListBox: st,
    ComboBox: gt,
    EditBox: mt,
    Button: yt,
    PushButton: Ct,
    RadioButton: It,
    CheckBox: Ht,
    TextField: I,
    PasswordField: Et,
    Appearance: St
  };
})(Vt, typeof window < "u" && window || typeof global < "u" && global);
(function(n) {
  var t, e, i, r, s, u, a, l, c, d, y, A, g, B, O, V, k, J, Z, Y;
  t = /* @__PURE__ */ (function() {
    return function(M) {
      return lt.prototype = M, new lt();
    };
    function lt() {
    }
  })(), d = function(M) {
    var b, H, v, F, D, q, it;
    for (H = 0, v = M.length, b = void 0, F = !1, q = !1; !F && H !== v; )
      b = M[H] = M[H].trimLeft(), b && (F = !0), H++;
    for (H = v - 1; v && !q && H !== -1; )
      b = M[H] = M[H].trimRight(), b && (q = !0), H--;
    for (D = /\s+$/g, it = !0, H = 0; H !== v; )
      M[H] != "\u2028" && (b = M[H].replace(/\s+/g, " "), it && (b = b.trimLeft()), b && (it = D.test(b)), M[H] = b), H++;
    return M;
  }, y = function(M, b, H, v) {
    return this.pdf = M, this.x = b, this.y = H, this.settings = v, this.watchFunctions = [], this.init(), this;
  }, A = function(M) {
    var b, H, v;
    for (b = void 0, v = M.split(","), H = v.shift(); !b && H; )
      b = i[H.trim().toLowerCase()], H = v.shift();
    return b;
  }, g = function(M) {
    M = M === "auto" ? "0px" : M, M.indexOf("em") > -1 && !isNaN(Number(M.replace("em", ""))) && (M = Number(M.replace("em", "")) * 18.719 + "px"), M.indexOf("pt") > -1 && !isNaN(Number(M.replace("pt", ""))) && (M = Number(M.replace("pt", "")) * 1.333 + "px");
    var b, H, v;
    return H = void 0, b = 16, v = B[M], v || (v = {
      "xx-small": 9,
      "x-small": 11,
      small: 13,
      medium: 16,
      large: 19,
      "x-large": 23,
      "xx-large": 28,
      auto: 0
    }[M], v !== H || (v = parseFloat(M)) ? B[M] = v / b : (v = M.match(/([\d\.]+)(px)/), Array.isArray(v) && v.length === 3 ? B[M] = parseFloat(v[1]) / b : B[M] = 1));
  }, c = function(M) {
    var b, H, v;
    return v = (function(F) {
      var D;
      return D = (function(q) {
        return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(q, null) : q.currentStyle ? q.currentStyle : q.style;
      })(F), function(q) {
        return q = q.replace(/-\D/g, function(it) {
          return it.charAt(1).toUpperCase();
        }), D[q];
      };
    })(M), b = {}, H = void 0, b["font-family"] = A(v("font-family")) || "times", b["font-style"] = r[v("font-style")] || "normal", b["text-align"] = s[v("text-align")] || "left", H = u[v("font-weight")] || "normal", H === "bold" && (b["font-style"] === "normal" ? b["font-style"] = H : b["font-style"] = H + b["font-style"]), b["font-size"] = g(v("font-size")) || 1, b["line-height"] = g(v("line-height")) || 1, b.display = v("display") === "inline" ? "inline" : "block", H = b.display === "block", b["margin-top"] = H && g(v("margin-top")) || 0, b["margin-bottom"] = H && g(v("margin-bottom")) || 0, b["padding-top"] = H && g(v("padding-top")) || 0, b["padding-bottom"] = H && g(v("padding-bottom")) || 0, b["margin-left"] = H && g(v("margin-left")) || 0, b["margin-right"] = H && g(v("margin-right")) || 0, b["padding-left"] = H && g(v("padding-left")) || 0, b["padding-right"] = H && g(v("padding-right")) || 0, b["page-break-before"] = v("page-break-before") || "auto", b.float = a[v("cssFloat")] || "none", b.clear = l[v("clear")] || "none", b.color = v("color"), b;
  }, O = function(M, b, H) {
    var v, F, D, q, it;
    if (D = !1, F = void 0, q = void 0, v = H["#" + M.id], v)
      if (typeof v == "function")
        D = v(M, b);
      else
        for (F = 0, q = v.length; !D && F !== q; )
          D = v[F](M, b), F++;
    if (v = H[M.nodeName], !D && v)
      if (typeof v == "function")
        D = v(M, b);
      else
        for (F = 0, q = v.length; !D && F !== q; )
          D = v[F](M, b), F++;
    for (it = typeof M.className == "string" ? M.className.split(" ") : [], F = 0; F < it.length; F++)
      if (v = H["." + it[F]], !D && v)
        if (typeof v == "function")
          D = v(M, b);
        else
          for (F = 0, q = v.length; !D && F !== q; )
            D = v[F](M, b), F++;
    return D;
  }, Y = function(M, b) {
    var H, v, F, D, q, it, ut, ot, et;
    H = [], v = [], F = 0, et = 0;
    for (var D = 0; D < M.rows[0].cells.length; D++)
      et += M.rows[0].cells[D].colSpan;
    for (ut = M.clientWidth; F < et; ) {
      ot = M.rows[0].cells[F];
      for (var D = 0; D < ot.colSpan; D++)
        v[F + D] = {
          name: ot.textContent.toLowerCase().replace(/\s+/g, "") + "_" + D,
          prompt: ot.textContent.replace(/\r?\n/g, ""),
          width: ot.clientWidth / ut * b.settings.width / ot.colSpan
        };
      F += D;
    }
    for (F = 1; F < M.rows.length; ) {
      for (it = M.rows[F], q = {}, D = 0; D < it.cells.length; )
        q[v[D].name] = it.cells[D].textContent.replace(/\r?\n/g, ""), D++;
      H.push(q), F++;
    }
    return {
      rows: H,
      headers: v
    };
  };
  var vt = {
    SCRIPT: 1,
    STYLE: 1,
    NOSCRIPT: 1,
    OBJECT: 1,
    EMBED: 1,
    SELECT: 1
  }, Ft = 1;
  e = function(M, b, H) {
    var v, F, D, q, it, ut, ot, et;
    for (F = M.childNodes, v = void 0, D = c(M), it = D.display === "block", it && (b.setBlockBoundary(), b.setBlockStyle(D)), q = 0, ut = F.length; q < ut; ) {
      if (v = F[q], typeof v == "object") {
        if (b.executeWatchFunctions(v), v.nodeType === 1 && v.nodeName === "HEADER") {
          var ct = v, Nt = b.pdf.margins_doc.top;
          b.pdf.internal.events.subscribe("addPage", function(Et) {
            b.y = Nt, e(ct, b, H), b.pdf.margins_doc.top = b.y + 10, b.y += 10;
          }, !1);
        }
        if (v.nodeType === 8 && v.nodeName === "#comment")
          ~v.textContent.indexOf("ADD_PAGE") && (b.pdf.addPage(), b.y = b.pdf.margins_doc.top);
        else if (v.nodeType === 1 && !vt[v.nodeName]) {
          var ft;
          if (v.nodeName === "IMG") {
            var N = v.getAttribute("src");
            ft = V[b.pdf.sHashCode && b.pdf.sHashCode(N) || N];
          }
          if (ft) {
            b.pdf.internal.pageSize.getHeight() - b.pdf.margins_doc.bottom < b.y + v.height && b.y > b.pdf.margins_doc.top && (b.pdf.addPage(), b.y = b.pdf.margins_doc.top, b.executeWatchFunctions(v));
            var R = c(v), z = b.x, X = 12 / b.pdf.internal.scaleFactor, Q = (R["margin-left"] + R["padding-left"]) * X, st = (R["margin-right"] + R["padding-right"]) * X, gt = (R["margin-top"] + R["padding-top"]) * X, mt = (R["margin-bottom"] + R["padding-bottom"]) * X;
            R.float !== void 0 && R.float === "right" ? z += b.settings.width - v.width - st : z += Q, b.pdf.addImage(ft, z, b.y + gt, v.width, v.height), ft = void 0, R.float === "right" || R.float === "left" ? (b.watchFunctions.push(function(Et, St, Ut, L) {
              return b.y >= St ? (b.x += Et, b.settings.width += Ut, !0) : L && L.nodeType === 1 && !vt[L.nodeName] && b.x + L.width > b.pdf.margins_doc.left + b.pdf.margins_doc.width ? (b.x += Et, b.y = St, b.settings.width += Ut, !0) : !1;
            }.bind(this, R.float === "left" ? -v.width - Q - st : 0, b.y + v.height + gt + mt, v.width)), b.watchFunctions.push(function(Et, St, Ut) {
              return b.y < Et && St === b.pdf.internal.getNumberOfPages() ? Ut.nodeType === 1 && c(Ut).clear === "both" ? (b.y = Et, !0) : !1 : !0;
            }.bind(this, b.y + v.height, b.pdf.internal.getNumberOfPages())), b.settings.width -= v.width + Q + st, R.float === "left" && (b.x += v.width + Q + st)) : b.y += v.height + gt + mt;
          } else if (v.nodeName === "TABLE")
            b.pdf.autoTable ? (b.y += 10, b.pdf.autoTable({
              theme: "grid",
              html: v,
              startY: b.y,
              styles: {
                font: b.pdf.getFont().fontName,
                fontSize: b.pdf.getFontSize(),
                textColor: b.pdf.getTextColor()
              },
              margin: {
                top: b.pdf.margins_doc.top,
                left: b.x,
                right: b.pdf.internal.pageSize.getWidth() - (b.x + b.settings.width),
                bottom: b.pdf.margins_doc.bottom
              }
            }), b.y = b.pdf.lastAutoTable.finalY) : (ot = Y(v, b), b.y += 10, b.pdf.table(b.x, b.y, ot.rows, ot.headers, {
              autoSize: !1,
              printHeaders: H.printHeaders,
              margins: b.pdf.margins_doc,
              css: c(v)
            }), b.y = b.pdf.internal.__cell__.lastCell.y + b.pdf.internal.__cell__.lastCell.height);
          else if (v.nodeName === "OL" || v.nodeName === "UL")
            Ft = 1, O(v, b, H) || e(v, b, H), b.y += 10;
          else if (v.nodeName === "LI") {
            var yt = b.x;
            b.x += 20 / b.pdf.internal.scaleFactor, b.y += 3, O(v, b, H) || e(v, b, H), b.x = yt;
          } else v.nodeName === "BR" ? (b.y += D["font-size"] * b.pdf.internal.scaleFactor, b.addText("\u2028", t(D))) : O(v, b, H) || e(v, b, H);
        } else if (v.nodeType === 3) {
          var Ct = v.nodeValue;
          if (v.nodeValue && v.parentNode.nodeName === "LI")
            if (v.parentNode.parentNode.nodeName === "OL")
              Ct = Ft++ + ". " + Ct;
            else {
              var It = D["font-size"], Bt = (3 - It * 0.75) * b.pdf.internal.scaleFactor, Ht = It * 0.75 * b.pdf.internal.scaleFactor, I = It * 1.74 / b.pdf.internal.scaleFactor;
              et = function(St, Ut) {
                this.pdf.circle(St + Bt, Ut + Ht, I, "FD");
              };
            }
          v.ownerDocument.body.compareDocumentPosition(v) & 16 && b.addText(Ct, D);
        } else typeof v == "string" && b.addText(v, D);
      }
      q++;
    }
    if (H.outY = b.y, it)
      return b.setBlockBoundary(et);
  }, V = {}, k = function(M, b, H, v) {
    var F = M.getElementsByTagName("img"), D = F.length, q, it = 0;
    function ut() {
      b.pdf.internal.events.publish("imagesLoaded"), v(q);
    }
    function ot(et, ct, Nt) {
      if (et) {
        var ft = new Image();
        q = ++it, ft.crossOrigin = "", ft.onerror = ft.onload = function() {
          if (ft.complete && (ft.src.indexOf("data:image/") === 0 && (ft.width = ct || ft.width || 0, ft.height = Nt || ft.height || 0), ft.width + ft.height)) {
            var N = b.pdf.sHashCode && b.pdf.sHashCode(et) || et;
            V[N] = V[N] || ft;
          }
          --it || ut();
        }, ft.src = et;
      }
    }
    for (; D--; )
      ot(F[D].getAttribute("src"), F[D].width, F[D].height);
    return it || ut();
  }, J = function(M, b, H) {
    var v = M.getElementsByTagName("footer");
    if (v.length > 0) {
      v = v[0];
      var F = b.pdf.internal.write, D = b.y;
      b.pdf.internal.write = function() {
      }, e(v, b, H);
      var q = Math.ceil(b.y - D) + 5;
      b.y = D, b.pdf.internal.write = F, b.pdf.margins_doc.bottom += q;
      for (var it = function(ct) {
        var Nt = ct !== void 0 ? ct.pageNumber : 1, ft = b.y;
        b.y = b.pdf.internal.pageSize.getHeight() - b.pdf.margins_doc.bottom, b.pdf.margins_doc.bottom -= q;
        for (var N = v.getElementsByTagName("span"), R = 0; R < N.length; ++R)
          (" " + N[R].className + " ").replace(/[\n\t]/g, " ").indexOf(" pageCounter ") > -1 && (N[R].innerHTML = Nt), (" " + N[R].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 && (N[R].innerHTML = "###jsPDFVarTotalPages###");
        e(v, b, H), b.pdf.margins_doc.bottom += q, b.y = ft;
      }, ut = v.getElementsByTagName("span"), ot = 0; ot < ut.length; ++ot)
        (" " + ut[ot].className + " ").replace(/[\n\t]/g, " ").indexOf(" totalPages ") > -1 && b.pdf.internal.events.subscribe("htmlRenderingFinished", b.pdf.putTotalPages.bind(b.pdf, "###jsPDFVarTotalPages###"), !0);
      b.pdf.internal.events.subscribe("addPage", it, !1), it(), vt.FOOTER = 1;
    }
  }, Z = function(M, b, H, v, F, D) {
    if (!b) return !1;
    typeof b != "string" && !b.parentNode && (b = "" + b.innerHTML), typeof b == "string" && (b = (function(Nt) {
      var ft, N, R, z;
      return R = "jsPDFhtmlText" + Date.now().toString() + (Math.random() * 1e3).toFixed(0), z = "position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;", N = document.createElement("div"), N.className = "sjs-pdf-hidden-html-div", N.style.cssText = z, N.innerHTML = '<iframe style="height:1px;width:1px" name="' + R + '" />', document.body.appendChild(N), ft = window.frames[R], ft.document.open(), ft.document.writeln(Nt), ft.document.close(), ft.document.body;
    })(b.replace(/<\/?script[^>]*?>/gi, "")));
    for (var q = Object.keys(M.getFontList()), it = 0; it < q.length; ++it) {
      var ut = q[it], ot = ut.toLowerCase();
      i[ot] || (i[ot] = ut);
    }
    var et = new y(M, H, v, F), ct;
    return k.call(this, b, et, F.elementHandlers, function(Nt) {
      J(b, et, F.elementHandlers), e(b, et, F.elementHandlers), et.pdf.internal.events.publish("htmlRenderingFinished"), ct = et.dispose(), typeof D == "function" ? D(ct) : Nt && console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!");
    }), ct || {
      x: et.x,
      y: et.y
    };
  }, y.prototype.init = function() {
    return this.paragraph = {
      text: [],
      style: []
    }, this.pdf.internal.write("q");
  }, y.prototype.dispose = function() {
    return this.pdf.internal.write("Q"), {
      x: this.x,
      y: this.y,
      ready: !0
    };
  }, y.prototype.executeWatchFunctions = function(lt) {
    var M = !1, b = [];
    if (this.watchFunctions.length > 0) {
      for (var H = 0; H < this.watchFunctions.length; ++H)
        this.watchFunctions[H](lt) === !0 ? M = !0 : b.push(this.watchFunctions[H]);
      this.watchFunctions = b;
    }
    return M;
  }, y.prototype.splitFragmentsIntoLines = function(lt, M) {
    var b, H, v, F, D, q, it, ut, ot, et, ct, Nt, ft;
    H = 12, ot = this.pdf.internal.scaleFactor, v = void 0, ut = void 0, F = void 0, ft = void 0, it = void 0, q = void 0, D = void 0, et = [], ct = [et], b = 0, Nt = this.settings.width;
    const N = this.pdf.getFont().fontName, R = this.pdf.getFont().fontStyle;
    for (; lt.length; )
      if (F = lt.shift(), ft = M.shift(), F)
        if (v = ft["font-family"], ut = ft["font-style"], this.pdf.setFont(v, ut), it = {
          textIndent: b,
          fontSize: ft["font-size"] * H
        }, q = this.pdf.getStringUnitWidth(F, it) * it.fontSize / ot, F == "\u2028")
          et = [], ct.push(et);
        else if (b + q > Nt) {
          for (D = this.pdf.splitTextToSize(F, Nt, it), et.push([D.shift(), ft]); D.length; )
            et = [[D.shift(), ft]], ct.push(et);
          b = this.pdf.getStringUnitWidth(et[0][0], it) * it.fontSize / ot;
        } else
          et.push([F, ft]), b += q;
    if (ft["text-align"] !== void 0 && (ft["text-align"] === "center" || ft["text-align"] === "right" || ft["text-align"] === "justify"))
      for (var z = 0; z < ct.length; ++z) {
        var X = this.pdf.getStringUnitWidth(ct[z][0][0], it) * it.fontSize / ot;
        z > 0 && (ct[z][0][1] = t(ct[z][0][1]));
        var Q = Nt - X;
        if (ft["text-align"] === "right")
          ct[z][0][1]["margin-left"] = Q;
        else if (ft["text-align"] === "center")
          ct[z][0][1]["margin-left"] = Q / 2;
        else if (ft["text-align"] === "justify") {
          var st = ct[z][0][0].split(" ").length - 1;
          ct[z][0][1]["word-spacing"] = Q / st, z === ct.length - 1 && (ct[z][0][1]["word-spacing"] = 0);
        }
      }
    return this.pdf.setFont(N, R), ct;
  }, y.prototype.RenderTextFragment = function(lt, M) {
    var b, H, v;
    if (v = 0, b = 12, this.pdf.internal.pageSize.getHeight() - this.pdf.margins_doc.bottom < this.y + this.pdf.internal.getFontSize()) {
      this.pdf.internal.write("ET", "Q", "Q");
      const ut = this.pdf.getCurrentPageInfo().pageNumber;
      this.pdf.getNumberOfPages() === ut ? this.pdf.addPage() : this.pdf.setPage(ut + 1), this.y = this.pdf.margins_doc.top, this.pdf.internal.write("q", "q", "BT", this.getPdfColor(M.color), this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td"), v = Math.max(v, M["line-height"], M["font-size"]), this.pdf.internal.write(0, (-1 * b * v).toFixed(2), "Td");
    }
    H = this.pdf.internal.getFont(M["font-family"], M["font-style"]);
    var F = this.getPdfColor(M.color);
    F !== this.lastTextColor && (this.pdf.internal.write(F), this.lastTextColor = F), M["word-spacing"] !== void 0 && M["word-spacing"] > 0 && this.pdf.internal.write(M["word-spacing"].toFixed(2), "Tw");
    var D = function(ut, ot) {
      for (var et = ot.metadata.Unicode.widths, ct = ["", "0", "00", "000", "0000"], Nt = [""], ft = 0, N = ut.length, R; ft < N; ++ft) {
        if (R = ot.metadata.characterToGlyph(ut.charCodeAt(ft)), ot.metadata.glyIdsUsed.push(R), ot.metadata.toUnicode[R] = ut.charCodeAt(ft), et.indexOf(R) == -1 && (et.push(R), et.push([parseInt(ot.metadata.widthOfGlyph(R), 10)])), R == "0")
          return Nt.join("");
        R = R.toString(16), Nt.push(ct[4 - R.length], R);
      }
      return Nt.join("");
    }, q = function(et, ot) {
      var et = et || "", ct = "", Nt = 0, ft, N = "", R = ot.encoding;
      if (ot.encoding !== "Identity-H")
        return et;
      for (N = et, Nt = 0; Nt < N.length; Nt += 1)
        ot.metadata.hasOwnProperty("cmap") && (ft = ot.metadata.cmap.unicode.codeMap[N[Nt].charCodeAt(0)]), ft || N[Nt].charCodeAt(0) < 256 && ot.metadata.hasOwnProperty("Unicode") ? ct += N[Nt] : ct += "";
      var z = "";
      return parseInt(ot.id.slice(1)) < 14 || R === "WinAnsiEncoding" ? z = this.pdf.internal.pdfEscape(ct, key).split("").map(function(X) {
        return X.charCodeAt(0).toString(16);
      }).join("") : R === "Identity-H" && (z = D(ct, ot)), z;
    }, it = "";
    H.encoding !== "Identity-H" ? it = "(" + this.pdf.internal.pdfEscape(lt) + ")" : it = "<" + q(lt, H) + ">", this.pdf.internal.write("/" + H.id, (b * M["font-size"]).toFixed(2), "Tf", it + " Tj"), M["word-spacing"] !== void 0 && this.pdf.internal.write(0, "Tw");
  }, y.prototype.getPdfColor = function(lt) {
    var M, b, H, v, F = /rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/, D = F.exec(lt);
    if (D != null)
      b = parseInt(D[1]), H = parseInt(D[2]), v = parseInt(D[3]);
    else {
      if (typeof lt == "string" && lt.charAt(0) != "#") {
        var q = new RGBColor(lt);
        q.ok ? lt = q.toHex() : lt = "#000000";
      }
      b = lt.substring(1, 3), b = parseInt(b, 16), H = lt.substring(3, 5), H = parseInt(H, 16), v = lt.substring(5, 7), v = parseInt(v, 16);
    }
    if (typeof b == "string" && /^#[0-9A-Fa-f]{6}$/.test(b)) {
      var it = parseInt(b.substr(1), 16);
      b = it >> 16 & 255, H = it >> 8 & 255, v = it & 255;
    }
    var ut = this.f3;
    return b === 0 && H === 0 && v === 0 || typeof H > "u" ? M = ut(b / 255) + " g" : M = [ut(b / 255), ut(H / 255), ut(v / 255), "rg"].join(" "), M;
  }, y.prototype.f3 = function(lt) {
    return lt.toFixed(3);
  }, y.prototype.renderParagraph = function(lt) {
    var M, b, H, v, F, D, q, it, ut, ot, et, ct, Nt, ft;
    if (v = d(this.paragraph.text), Nt = this.paragraph.style, M = this.paragraph.blockstyle, this.paragraph.priorblockstyle, this.paragraph = {
      text: [],
      style: [],
      blockstyle: {},
      priorblockstyle: M
    }, !!v.join("").trim()) {
      it = this.splitFragmentsIntoLines(v, Nt), q = void 0, ut = void 0, b = 12, H = b / this.pdf.internal.scaleFactor, this.priorMarginBottom = this.priorMarginBottom || 0, ct = (Math.max((M["margin-top"] || 0) - this.priorMarginBottom, 0) + (M["padding-top"] || 0)) * H, et = ((M["margin-bottom"] || 0) + (M["padding-bottom"] || 0)) * H, this.priorMarginBottom = M["margin-bottom"] || 0, M["page-break-before"] === "always" && (this.pdf.addPage(), this.y = 0, ct = ((M["margin-top"] || 0) + (M["padding-top"] || 0)) * H), ot = this.pdf.internal.write, F = void 0, D = void 0, this.y += ct, ot("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
      for (var N = 0; it.length; ) {
        for (q = it.shift(), ut = 0, F = 0, D = q.length; F !== D; )
          q[F][0].trim() && (ut = Math.max(ut, q[F][1]["line-height"], q[F][1]["font-size"]), ft = q[F][1]["font-size"] * 7), F++;
        var R = 0, z = 0;
        q[0][1]["margin-left"] !== void 0 && q[0][1]["margin-left"] > 0 && (z = this.pdf.internal.getCoordinateString(q[0][1]["margin-left"]), R = z - N, N = z);
        var X = Math.max(M["margin-left"] || 0, 0) * H;
        for (ot(R + X, (-1 * b * ut).toFixed(2), "Td"), F = 0, D = q.length; F !== D; )
          q[F][0] && this.RenderTextFragment(q[F][0], q[F][1]), F++;
        if (this.y += ut * H, this.executeWatchFunctions(q[0][1]) && it.length > 0) {
          var Q = [], st = [];
          it.forEach(function(gt) {
            for (var mt = 0, yt = gt.length; mt !== yt; )
              gt[mt][0] && (Q.push(gt[mt][0] + " "), st.push(gt[mt][1])), ++mt;
          }), it = this.splitFragmentsIntoLines(d(Q), st), ot("ET", "Q"), ot("q", "BT 0 g", this.pdf.internal.getCoordinateString(this.x), this.pdf.internal.getVerticalCoordinateString(this.y), "Td");
        }
      }
      return lt && typeof lt == "function" && lt.call(this, this.x - 9, this.y - ft / 2), ot("ET", "Q"), this.y += et;
    }
  }, y.prototype.setBlockBoundary = function(lt) {
    return this.renderParagraph(lt);
  }, y.prototype.setBlockStyle = function(lt) {
    return this.paragraph.blockstyle = lt;
  }, y.prototype.addText = function(lt, M) {
    return this.paragraph.text.push(lt), this.paragraph.style.push(M);
  }, i = {
    helvetica: "helvetica",
    "sans-serif": "helvetica",
    "times new roman": "times",
    serif: "times",
    times: "times",
    monospace: "courier",
    courier: "courier"
  }, u = {
    100: "normal",
    200: "normal",
    300: "normal",
    400: "normal",
    500: "bold",
    600: "bold",
    700: "bold",
    800: "bold",
    900: "bold",
    normal: "normal",
    bold: "bold",
    bolder: "bold",
    lighter: "normal"
  }, r = {
    normal: "normal",
    italic: "italic",
    oblique: "italic"
  }, s = {
    left: "left",
    right: "right",
    center: "center",
    justify: "justify"
  }, a = {
    none: "none",
    right: "right",
    left: "left"
  }, l = {
    none: "none",
    both: "both"
  }, B = {
    normal: 1
  }, n.fromHTML = function(lt, M, b, H, v, F) {
    return this.margins_doc = F || {
      top: 0,
      bottom: 0
    }, H || (H = {}), H.elementHandlers || (H.elementHandlers = {}), Z(this, lt, isNaN(M) ? 4 : M, isNaN(b) ? 4 : b, H, v);
  };
})(Vt.API);
class qi {
  constructor(t) {
    this._base64Normal = void 0, this._base64Bold = void 0, typeof t.orientation > "u" ? typeof t.format > "u" || t.format[0] < t.format[1] ? this._orientation = "p" : this._orientation = "l" : this._orientation = t.orientation, this._format = t.format || "a4", Array.isArray(this._format) && (this._format = this._format.map((e) => e * qi.MM_TO_PT)), this._fontSize = t.fontSize || qi.FONT_SIZE, t.fontName ? this._fontName = t.fontName : !qi.SEGOE_BOLD && !qi.SEGOE_NORMAL ? this._fontName = _.STANDARD_FONT : this._fontName = "segoe", typeof t.fontName < "u" && (typeof t.base64Normal < "u" || typeof t.base64Bold < "u") ? (this._base64Normal = t.base64Normal || t.base64Bold, this._base64Bold = t.base64Bold || t.base64Normal) : this.fontName === "segoe" && (this._base64Normal = qi.SEGOE_NORMAL, this._base64Bold = qi.SEGOE_BOLD), this._margins = _.clone(t.margins), typeof this._margins > "u" && (this._margins = {}), typeof this._margins.top > "u" && (this._margins.top = 10), typeof this._margins.bot > "u" && (this._margins.bot = 10), typeof this._margins.left > "u" && (this._margins.left = 10), typeof this._margins.right > "u" && (this._margins.right = 10), Object.keys(this._margins).forEach((e) => {
      this._margins[e] = this._margins[e] * qi.MM_TO_PT;
    }), this._htmlRenderAs = t.htmlRenderAs || "auto", this._matrixRenderAs = t.matrixRenderAs || "auto", this._readonlyRenderAs = t.readonlyRenderAs || "auto", this._compress = t.compress || !1, this._applyImageFit = t.applyImageFit || !1, this._useLegacyBooleanRendering = t.useLegacyBooleanRendering || !1, this._isRTL = t.isRTL || !1, this._tagboxSelectedChoicesOnly = t.tagboxSelectedChoicesOnly || !1;
  }
  get leftTopPoint() {
    return {
      xLeft: this.margins.left,
      yTop: this.margins.top
    };
  }
  get fontSize() {
    return this._fontSize;
  }
  get fontName() {
    return this._fontName;
  }
  get base64Normal() {
    return this._base64Normal;
  }
  get base64Bold() {
    return this._base64Bold;
  }
  get useCustomFontInHtml() {
    return this._useCustomFontInHtml;
  }
  get margins() {
    return this._margins;
  }
  get format() {
    return this._format;
  }
  get orientation() {
    return this._orientation;
  }
  get htmlRenderAs() {
    return this._htmlRenderAs;
  }
  get matrixRenderAs() {
    return this._matrixRenderAs;
  }
  get readonlyRenderAs() {
    return this._readonlyRenderAs;
  }
  get compress() {
    return this._compress;
  }
  get applyImageFit() {
    return this._applyImageFit;
  }
  get useLegacyBooleanRendering() {
    return this._useLegacyBooleanRendering;
  }
  get isRTL() {
    return this._isRTL;
  }
  get tagboxSelectedChoicesOnly() {
    return this._tagboxSelectedChoicesOnly;
  }
}
qi.MM_TO_PT = 72 / 25.4;
qi.FONT_SIZE = 14;
class ji extends qi {
  constructor(t = {}) {
    super(t);
    const e = {
      orientation: this.orientation,
      unit: "pt",
      format: this.format,
      compress: this.compress
    };
    this._doc = new Vt(e), typeof this.base64Normal < "u" && !_.isFontExist(this, this.fontName) && (ji.addFont(this.fontName, this.base64Normal, "normal"), ji.addFont(this.fontName, this.base64Bold, "bold"), this._doc = new Vt(e)), Mp(this._doc), this._useCustomFontInHtml = t.useCustomFontInHtml && _.isFontExist(this, this.fontName), this._helperDoc = new Vt(e), this._doc.setFont(this.fontName), this._helperDoc.setFont(this.fontName), this._doc.setFontSize(this.fontSize), this._helperDoc.setFontSize(this.fontSize), this._fontStyle = "normal", this.marginsStack = [];
  }
  /**
   * Adds a custom font to the PDF Generator.
   *
   * [View Demo](https://surveyjs.io/pdf-generator/examples/change-font-in-pdf-form/ (linkStyle))
   * @param fontName A custom name that you will use to apply the custom font.
   * @param base64 The custom font as a Base64-encoded string. To encode your font to Base64, obtain it as a TTF file and use any TTF-to-Base64 online converter.
   * @param fontStyle The style of the custom font: `"normal"`, `"bold"`, `"italic"`, or `"bolditalic"`.
   */
  static addFont(t, e, i) {
    let r = ji.customFonts[t];
    r || (r = {}, ji.customFonts[t] = r), r[i] = e;
    const s = function() {
      const u = ji.customFonts[t];
      if (u && u[i]) {
        const a = `${t}-${i}.ttf`;
        this.addFileToVFS(a, u[i]), this.addFont(a, t, i);
      }
    };
    Vt.API.events.push(["addFonts", s]);
  }
  get doc() {
    return this._doc;
  }
  get helperDoc() {
    return this._helperDoc;
  }
  get fontName() {
    return this._fontName;
  }
  set fontName(t) {
    this._fontName = t, this._doc.setFont(t), this._helperDoc.setFont(t);
  }
  get fontSize() {
    return this._fontSize;
  }
  set fontSize(t) {
    this._fontSize = t, this._doc.setFontSize(t), this._helperDoc.setFontSize(t);
  }
  get fontStyle() {
    return this._fontStyle;
  }
  set fontStyle(t) {
    this._fontStyle = t, this._doc.setFont(this._fontName, t), this._helperDoc.setFont(this._fontName, t);
  }
  measureText(t = 1, e = this._fontStyle, i = this._fontSize) {
    const r = this._helperDoc.getFontSize();
    this._helperDoc.setFontSize(i), this._helperDoc.setFont(this._fontName, e);
    const s = this._helperDoc.getLineHeight() / this._helperDoc.internal.scaleFactor;
    let u = 0;
    return typeof t == "number" ? u = s * t : (t = typeof t == "string" ? t : _.getLocString(t), u = t.split("").reduce((a, l) => a + this._helperDoc.getTextWidth(l), 0)), this._helperDoc.setFontSize(r), this._helperDoc.setFont(this._fontName, "normal"), {
      width: u,
      height: s
    };
  }
  /**
   * The width of one character in pixels.
   */
  get unitWidth() {
    return this.measureText().width;
  }
  /**
   * The heigth of one character in pixels.
   */
  get unitHeight() {
    return this.measureText().height;
  }
  pushMargins(t, e) {
    this.marginsStack.push({ left: this.margins.left, right: this.margins.right }), typeof t < "u" && (this.margins.left = t), typeof e < "u" && (this.margins.right = e);
  }
  popMargins() {
    const t = this.marginsStack.pop();
    this.margins.left = t.left, this.margins.right = t.right;
  }
  /**
   * The width of a PDF page in pixels.
   */
  get paperWidth() {
    return this.doc.internal.pageSize.width;
  }
  /**
   * The height of a PDF page in pixels.
   */
  get paperHeight() {
    return this.doc.internal.pageSize.height;
  }
  getNumberOfPages() {
    return this.doc.getNumberOfPages();
  }
  addPage() {
    this.doc.addPage();
  }
  getCurrentPageIndex() {
    return this.doc.getCurrentPageInfo().pageNumber - 1;
  }
  setPage(t) {
    this.doc.setPage(t + 1);
  }
}
ji.customFonts = {};
function Dp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var mr = {}, xl, ec;
function qp() {
  return ec || (ec = 1, xl = function(t, e, i, r) {
    var s = i ? i.call(r, t, e) : void 0;
    if (s !== void 0)
      return !!s;
    if (t === e)
      return !0;
    if (typeof t != "object" || !t || typeof e != "object" || !e)
      return !1;
    var u = Object.keys(t), a = Object.keys(e);
    if (u.length !== a.length)
      return !1;
    for (var l = Object.prototype.hasOwnProperty.bind(e), c = 0; c < u.length; c++) {
      var d = u[c];
      if (!l(d))
        return !1;
      var y = t[d], A = e[d];
      if (s = i ? i.call(r, y, A, d) : void 0, s === !1 || s === void 0 && y !== A)
        return !1;
    }
    return !0;
  }), xl;
}
var ic;
function jp() {
  if (ic) return mr;
  ic = 1, Object.defineProperty(mr, "__esModule", { value: !0 });
  var n = qp();
  function t(a) {
    return a === void 0 ? -1 : a.height;
  }
  var e = (
    /** @class */
    (function() {
      function a(l, c) {
        this.intervalTree = l, this.records = [], this.height = 0, this.key = c.low, this.max = c.high, this.records.push(c);
      }
      return a.prototype.getNodeHigh = function() {
        for (var l = this.records[0].high, c = 1; c < this.records.length; c++)
          this.records[c].high > l && (l = this.records[c].high);
        return l;
      }, a.prototype.updateHeight = function() {
        this.height = Math.max(t(this.left), t(this.right)) + 1;
      }, a.prototype.updateMaxOfParents = function() {
        if (this !== void 0) {
          var l = this.getNodeHigh();
          this.left !== void 0 && this.right !== void 0 ? this.max = Math.max(Math.max(this.left.max, this.right.max), l) : this.left !== void 0 && this.right === void 0 ? this.max = Math.max(this.left.max, l) : this.left === void 0 && this.right !== void 0 ? this.max = Math.max(this.right.max, l) : this.max = l, this.parent && this.parent.updateMaxOfParents();
        }
      }, a.prototype._updateMaxAfterRightRotate = function() {
        var l = this.parent, c = l.left, d = c.getNodeHigh();
        c.left === void 0 && c.right !== void 0 ? c.max = Math.max(d, c.right.max) : c.left !== void 0 && c.right === void 0 ? c.max = Math.max(d, c.left.max) : c.left === void 0 && c.right === void 0 ? c.max = d : c.max = Math.max(Math.max(c.left.max, c.right.max), d);
        var y = this.getNodeHigh();
        this.left === void 0 && this.right !== void 0 ? this.max = Math.max(y, this.right.max) : this.left !== void 0 && this.right === void 0 ? this.max = Math.max(y, this.left.max) : this.left === void 0 && this.right === void 0 ? this.max = y : this.max = Math.max(Math.max(this.left.max, this.right.max), y), l.max = Math.max(Math.max(l.left.max, l.right.max), l.getNodeHigh());
      }, a.prototype._updateMaxAfterLeftRotate = function() {
        var l = this.parent, c = l.right, d = c.getNodeHigh();
        c.left === void 0 && c.right !== void 0 ? c.max = Math.max(d, c.right.max) : c.left !== void 0 && c.right === void 0 ? c.max = Math.max(d, c.left.max) : c.left === void 0 && c.right === void 0 ? c.max = d : c.max = Math.max(Math.max(c.left.max, c.right.max), d);
        var y = this.getNodeHigh();
        this.left === void 0 && this.right !== void 0 ? this.max = Math.max(y, this.right.max) : this.left !== void 0 && this.right === void 0 ? this.max = Math.max(y, this.left.max) : this.left === void 0 && this.right === void 0 ? this.max = y : this.max = Math.max(Math.max(this.left.max, this.right.max), y), l.max = Math.max(Math.max(l.left.max, c.max), l.getNodeHigh());
      }, a.prototype._leftRotate = function() {
        var l = this.right;
        l.parent = this.parent, l.parent === void 0 ? this.intervalTree.root = l : l.parent.left === this ? l.parent.left = l : l.parent.right === this && (l.parent.right = l), this.right = l.left, this.right !== void 0 && (this.right.parent = this), l.left = this, this.parent = l, this.updateHeight(), l.updateHeight();
      }, a.prototype._rightRotate = function() {
        var l = this.left;
        l.parent = this.parent, l.parent === void 0 ? this.intervalTree.root = l : l.parent.left === this ? l.parent.left = l : l.parent.right === this && (l.parent.right = l), this.left = l.right, this.left !== void 0 && (this.left.parent = this), l.right = this, this.parent = l, this.updateHeight(), l.updateHeight();
      }, a.prototype._rebalance = function() {
        if (t(this.left) >= 2 + t(this.right)) {
          var l = this.left;
          t(l.left) >= t(l.right) ? (this._rightRotate(), this._updateMaxAfterRightRotate()) : (l._leftRotate(), this._rightRotate(), this._updateMaxAfterRightRotate());
        } else if (t(this.right) >= 2 + t(this.left)) {
          var c = this.right;
          t(c.right) >= t(c.left) ? (this._leftRotate(), this._updateMaxAfterLeftRotate()) : (c._rightRotate(), this._leftRotate(), this._updateMaxAfterLeftRotate());
        }
      }, a.prototype.insert = function(l) {
        l.low < this.key ? this.left === void 0 ? (this.left = new a(this.intervalTree, l), this.left.parent = this) : this.left.insert(l) : this.right === void 0 ? (this.right = new a(this.intervalTree, l), this.right.parent = this) : this.right.insert(l), this.max < l.high && (this.max = l.high), this.updateHeight(), this._rebalance();
      }, a.prototype._getOverlappingRecords = function(l, c, d) {
        if (l.key <= d && c <= l.getNodeHigh()) {
          for (var y = [], A = 0; A < l.records.length; A++)
            l.records[A].high >= c && y.push(l.records[A]);
          return y;
        }
        return [];
      }, a.prototype.search = function(l, c) {
        if (this === void 0)
          return [];
        var d = [], y = [], A = [];
        return l > this.max ? [] : (this.left !== void 0 && this.left.max >= l && (d = this.left.search(l, c)), y = this._getOverlappingRecords(this, l, c), c < this.key ? d.concat(y) : (this.right !== void 0 && (A = this.right.search(l, c)), d.concat(y, A)));
      }, a.prototype.searchExisting = function(l) {
        if (this !== void 0) {
          if (this.key === l)
            return this;
          if (l < this.key) {
            if (this.left !== void 0)
              return this.left.searchExisting(l);
          } else if (this.right !== void 0)
            return this.right.searchExisting(l);
        }
      }, a.prototype._minValue = function() {
        return this.left === void 0 ? this : this.left._minValue();
      }, a.prototype.remove = function(l) {
        var c = this.parent;
        if (l.key < this.key)
          return this.left !== void 0 ? this.left.remove(l) : void 0;
        if (l.key > this.key)
          return this.right !== void 0 ? this.right.remove(l) : void 0;
        if (this.left !== void 0 && this.right !== void 0) {
          var d = this.right._minValue();
          return this.key = d.key, this.records = d.records, this.right.remove(this);
        } else {
          if (c.left === this)
            return this.right !== void 0 ? (c.left = this.right, this.right.parent = c) : (c.left = this.left, this.left !== void 0 && (this.left.parent = c)), c.updateMaxOfParents(), c.updateHeight(), c._rebalance(), this;
          if (c.right === this)
            return this.right !== void 0 ? (c.right = this.right, this.right.parent = c) : (c.right = this.left, this.left !== void 0 && (this.left.parent = c)), c.updateMaxOfParents(), c.updateHeight(), c._rebalance(), this;
        }
      }, a;
    })()
  );
  mr.Node = e;
  var i = (
    /** @class */
    (function() {
      function a() {
        this.count = 0;
      }
      return a.prototype.insert = function(l) {
        if (l.low > l.high)
          throw new Error("`low` value must be lower or equal to `high` value");
        if (this.root === void 0)
          return this.root = new e(this, l), this.count++, !0;
        var c = this.root.searchExisting(l.low);
        if (c !== void 0) {
          for (var d = 0; d < c.records.length; d++)
            if (n(c.records[d], l))
              return !1;
          return c.records.push(l), l.high > c.max && (c.max = l.high, c.parent && c.parent.updateMaxOfParents()), this.count++, !0;
        } else
          return this.root.insert(l), this.count++, !0;
      }, a.prototype.search = function(l, c) {
        return this.root === void 0 ? [] : this.root.search(l, c);
      }, a.prototype.remove = function(l) {
        if (this.root === void 0)
          return !1;
        var c = this.root.searchExisting(l.low);
        if (c === void 0)
          return !1;
        if (c.records.length > 1) {
          for (var d = void 0, y = 0; y < c.records.length; y++)
            if (n(c.records[y], l)) {
              d = c.records[y], c.records.splice(y, 1);
              break;
            }
          if (d) {
            if (d = void 0, l.high === c.max) {
              var A = c.getNodeHigh();
              c.left !== void 0 && c.right !== void 0 ? c.max = Math.max(Math.max(c.left.max, c.right.max), A) : c.left !== void 0 && c.right === void 0 ? c.max = Math.max(c.left.max, A) : c.left === void 0 && c.right !== void 0 ? c.max = Math.max(c.right.max, A) : c.max = A, c.parent && c.parent.updateMaxOfParents();
            }
            return this.count--, !0;
          } else
            return !1;
        } else if (c.records.length === 1)
          if (n(c.records[0], l))
            if (this.root.key === c.key) {
              var g = new e(this, { low: l.low, high: l.low });
              g.left = this.root, this.root.parent = g;
              var B = this.root.remove(c);
              return this.root = g.left, this.root !== void 0 && (this.root.parent = void 0), B ? (B = void 0, this.count--, !0) : !1;
            } else {
              var B = this.root.remove(c);
              return B ? (B = void 0, this.count--, !0) : !1;
            }
          else
            return !1;
        else
          return !1;
      }, a.prototype.inOrder = function() {
        return new s(this.root);
      }, a.prototype.preOrder = function() {
        return new u(this.root);
      }, a;
    })()
  );
  mr.IntervalTree = i;
  var r = (
    /** @class */
    (function() {
      function a() {
        this.tree = new i();
      }
      return a.prototype.insert = function(l, c, d) {
        return this.tree.insert({ low: l, high: c, data: d });
      }, a.prototype.remove = function(l, c, d) {
        return this.tree.remove({ low: l, high: c, data: d });
      }, a.prototype.search = function(l, c) {
        return this.tree.search(l, c).map(function(d) {
          return d.data;
        });
      }, a.prototype.inOrder = function() {
        return this.tree.inOrder();
      }, a.prototype.preOrder = function() {
        return this.tree.preOrder();
      }, Object.defineProperty(a.prototype, "count", {
        get: function() {
          return this.tree.count;
        },
        enumerable: !0,
        configurable: !0
      }), a;
    })()
  );
  mr.default = r;
  var s = (
    /** @class */
    (function() {
      function a(l) {
        this.stack = [], l !== void 0 && this.push(l);
      }
      return a.prototype.next = function() {
        return this.currentNode === void 0 ? {
          done: !0,
          value: void 0
        } : this.i < this.currentNode.records.length ? {
          done: !1,
          value: this.currentNode.records[this.i++]
        } : (this.currentNode.right !== void 0 ? this.push(this.currentNode.right) : this.pop(), this.next());
      }, a.prototype.push = function(l) {
        for (this.currentNode = l, this.i = 0; this.currentNode.left !== void 0; )
          this.stack.push(this.currentNode), this.currentNode = this.currentNode.left;
      }, a.prototype.pop = function() {
        this.currentNode = this.stack.pop(), this.i = 0;
      }, a;
    })()
  );
  mr.InOrder = s, typeof Symbol == "function" && (s.prototype[Symbol.iterator] = function() {
    return this;
  });
  var u = (
    /** @class */
    (function() {
      function a(l) {
        this.stack = [], this.i = 0, this.currentNode = l;
      }
      return a.prototype.next = function() {
        return this.currentNode === void 0 ? {
          done: !0,
          value: void 0
        } : this.i < this.currentNode.records.length ? {
          done: !1,
          value: this.currentNode.records[this.i++]
        } : (this.currentNode.right !== void 0 && this.push(this.currentNode.right), this.currentNode.left !== void 0 && this.push(this.currentNode.left), this.pop(), this.next());
      }, a.prototype.push = function(l) {
        this.stack.push(l);
      }, a.prototype.pop = function() {
        this.currentNode = this.stack.pop(), this.i = 0;
      }, a;
    })()
  );
  return mr.PreOrder = u, typeof Symbol == "function" && (u.prototype[Symbol.iterator] = function() {
    return this;
  }), mr;
}
var Wp = jp(), Up = /* @__PURE__ */ Dp(Wp);
class Ts {
  static findBotInterval(t, e, i, r) {
    const s = t.search(e, i);
    return s.push({
      pageIndex: 0,
      xLeft: r.margins.left,
      xRight: r.margins.left,
      yBot: r.margins.top,
      absBot: r.margins.top
    }), s.reduce((u, a) => Math.abs(a.xRight - e) < _.EPSILON || Math.abs(a.xLeft - i) < _.EPSILON || a.pageIndex < u.pageIndex ? u : a.pageIndex > u.pageIndex || a.yBot > u.yBot ? a : u, s[s.length - 1]);
  }
  static addPack(t, e, i) {
    for (let r = t.length; r <= e; r++)
      t.push([]);
    t[e].push(i);
  }
  static pack(t, e) {
    const i = e.paperHeight - e.margins.top - e.margins.bot, r = [];
    t.forEach((l) => {
      r.push([]), l.forEach((c) => {
        c.height > i + _.EPSILON ? r[r.length - 1].push(...c.unfold()) : r[r.length - 1].push(c);
      });
    }), r.forEach((l) => {
      l.sort((c, d) => c.yTop < d.yTop ? -1 : c.yTop > d.yTop || c.xLeft > d.xLeft ? 1 : c.xLeft < d.xLeft ? -1 : 0);
    });
    let s = 0;
    const u = [], a = e.paperHeight - e.margins.bot;
    return r.forEach((l) => {
      const c = new Up();
      let d = 0;
      l.forEach((y) => {
        let { pageIndex: A, yBot: g, absBot: B } = Ts.findBotInterval(c, y.xLeft, y.xRight, e);
        const O = y.height;
        y.yTop = g + y.yTop - B, (Math.abs(y.yTop - e.margins.top) > _.EPSILON && y.yTop + O > a + _.EPSILON || y.isPageBreak) && (y.yTop = e.margins.top, A++, d = Math.max(d, A)), c.insert(y.xLeft, y.xRight, {
          pageIndex: A,
          xLeft: y.xLeft,
          xRight: y.xRight,
          yBot: y.yTop + O,
          absBot: y.yBot
        }), y.yBot = y.yTop + O, Ts.addPack(u, s + A, y);
      }), s += d + 1;
    }), u;
  }
}
var Xn;
(function(n) {
  n.NotSet = "notset", n.Left = "left", n.Center = "center", n.Right = "right";
})(Xn || (Xn = {}));
var $n;
(function(n) {
  n.NotSet = "notset", n.Top = "top", n.Middle = "middle", n.Bottom = "bottom";
})($n || ($n = {}));
class fa {
  constructor(t, e, i, r, s) {
    this.packs = t, this.controller = e, this._rect = i, this._countPages = r, this._pageNumber = s;
  }
  /**
   * A total number of pages in the document.
   */
  get pageCount() {
    return this._countPages;
  }
  get countPages() {
    return this._countPages;
  }
  /**
   * The number of the page that contains the drawing area. Enumeration starts with 1.
   */
  get pageNumber() {
    return this._pageNumber;
  }
  /**
   * An object with coordinates of a rectangle that limits the drawing area. This object contain the following fields: `xLeft`, `xRight`, `yTop`, `yBot`.
   */
  get rect() {
    return this._rect;
  }
  alignRect(t, e) {
    typeof t.margins > "u" ? t.margins = { left: 0, right: 0, top: 0, bot: 0 } : (typeof t.margins.left > "u" && (t.margins.left = 0), typeof t.margins.right > "u" && (t.margins.right = 0), typeof t.margins.top > "u" && (t.margins.top = 0), typeof t.margins.bot > "u" && (t.margins.bot = 0)), typeof t.rect > "u" && ((typeof t.horizontalAlign > "u" || t.horizontalAlign === Xn.NotSet) && (t.horizontalAlign = Xn.Center), (typeof t.verticalAlign > "u" || t.verticalAlign === $n.NotSet) && (t.verticalAlign = $n.Middle));
    const i = _.clone(this.rect);
    if (typeof t.horizontalAlign < "u")
      switch (t.horizontalAlign) {
        case Xn.Left:
          i.xLeft = this.rect.xLeft + t.margins.left, i.xRight = Math.min(this.rect.xRight - t.margins.right, this.rect.xLeft + t.margins.left + e.width);
          break;
        case Xn.Center:
          i.xLeft = Math.max(this.rect.xLeft + t.margins.left, (this.rect.xLeft + this.rect.xRight - e.width) / 2), i.xRight = Math.min(this.rect.xRight - t.margins.right, (this.rect.xLeft + this.rect.xRight + e.width) / 2);
          break;
        case Xn.Right:
          i.xLeft = Math.max(this.rect.xLeft + t.margins.left, this.rect.xRight - t.margins.right - e.width), i.xRight = this.rect.xRight - t.margins.right;
          break;
      }
    else
      i.xLeft = t.rect.xLeft || this.rect.xLeft, i.xRight = t.rect.xRight || this.rect.xRight;
    if (typeof t.verticalAlign < "u")
      switch (t.verticalAlign) {
        case $n.Top:
          i.yTop = this.rect.yTop + t.margins.top, i.yBot = Math.min(this.rect.yBot - t.margins.bot, this.rect.yTop + t.margins.top + e.height);
          break;
        case $n.Middle:
          i.yTop = Math.max(this.rect.yTop + t.margins.top, (this.rect.yTop + this.rect.yBot - e.height) / 2), i.yBot = Math.min(this.rect.yBot - t.margins.bot, (this.rect.yTop + this.rect.yBot + e.height) / 2);
          break;
        case $n.Bottom:
          i.yTop = Math.max(this.rect.yTop + t.margins.top, this.rect.yBot - t.margins.bot - e.height), i.yBot = this.rect.yBot - t.margins.bot;
          break;
      }
    else
      i.yTop = t.rect.yTop || this.rect.yTop, i.yBot = t.rect.yBot || this.rect.yBot;
    return i;
  }
  /**
   * Draws a piece of text within the drawing area.
   *
   * [View Demo](https://surveyjs.io/pdf-generator/examples/customize-header-and-footer-of-pdf-form/ (linkStyle))
   * @param textOptions An [`IDrawTextOptions`](https://surveyjs.io/pdf-generator/documentation/api-reference/idrawtextoptions) object that configures the drawing.
   */
  drawText(t) {
    t = _.clone(t), typeof t.fontSize > "u" && (t.fontSize = qi.FONT_SIZE), typeof t.isBold > "u" && (t.isBold = !1);
    const e = this.controller.measureText(t.text, t.isBold ? "bold" : "normal", t.fontSize), i = this.alignRect(t, e);
    t.isBold ? this.packs.push(new co(null, this.controller, i, t.text)) : this.packs.push(new We(null, this.controller, i, t.text)), this.packs[this.packs.length - 1].fontSize = t.fontSize;
  }
  /**
   * Draws an image within the drawing area.
   *
   * [View Demo](https://surveyjs.io/pdf-generator/examples/customize-header-and-footer-of-pdf-form/ (linkStyle))
   * @param imageOptions An [`IDrawImageOptions`](https://surveyjs.io/pdf-generator/documentation/api-reference/idrawimageoptions) object that configures drawing.
   */
  drawImage(t) {
    return Lt(this, void 0, void 0, function* () {
      t = _.clone(t), typeof t.width > "u" && (t.width = this.rect.xRight - this.rect.xLeft), typeof t.height > "u" && (t.height = this.rect.yBot - this.rect.yTop);
      const e = {
        width: t.width,
        height: t.height
      }, i = this.alignRect(t, e);
      this.controller.pushMargins(0, 0), this.packs.push(yield _.createImageFlat(_.createPoint(i, !0, !0), null, this.controller, {
        link: t.base64,
        width: i.xRight - i.xLeft,
        height: i.yBot - i.yTop,
        objectFit: t.imageFit
      }, !!t.imageFit || this.controller.applyImageFit)), this.controller.popMargins();
    });
  }
}
class vr extends rc {
  unshift(t) {
    this.hasFunc(t) || (this.callbacks == null && (this.callbacks = new Array()), this.callbacks.unshift(t));
  }
  fire(t, e) {
    return Lt(this, void 0, void 0, function* () {
      if (this.callbacks != null)
        for (var i = 0; i < this.callbacks.length; i++)
          yield this.callbacks[i](t, e);
    });
  }
}
class Hl {
  static process_header_events(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      t.haveCommercialLicense || t.onRenderHeader.add((r, s) => {
        s.drawText({
          text: "SurveyJS PDF | Please purchase a SurveyJS PDF developer license to use it in your app | https://surveyjs.io/Buy",
          fontSize: 10
        });
      });
      for (let r = 0; r < i.length; r++)
        yield t.onRenderHeader.fire(t, new fa(i[r], e, _.createHeaderRect(e), i.length, r + 1)), yield t.onRenderFooter.fire(t, new fa(i[r], e, _.createFooterRect(e), i.length, r + 1));
    });
  }
}
class kn extends qf {
  constructor(t, e) {
    super(t), this.onRenderHeader = new vr(), this.onRenderFooter = new vr(), this.onRenderQuestion = new vr(), this.onRenderPanel = new vr(), this.onRenderPage = new vr(), this.onDocControllerCreated = new rc(), this.onRenderCheckItemAcroform = new vr(), this.onRenderRadioGroupWrapAcroform = new vr(), this.onRenderRadioItemAcroform = new vr(), typeof e > "u" && (e = {}), this.questionsOnPageMode == "inputPerPage" && (this.questionsOnPageMode = "standard"), this.options = _.clone(e);
  }
  get haveCommercialLicense() {
    const t = jf;
    return !!t && t(2);
  }
  set haveCommercialLicense(t) {
    console.error("As of v1.9.101, the haveCommercialLicense property is not supported. To activate your license, use the setLicenseKey(key) method as shown on the following page: https://surveyjs.io/remove-alert-banner");
  }
  getUpdatedCheckItemAcroformOptions(t) {
    this.onRenderCheckItemAcroform.fire(this, t);
  }
  getUpdatedRadioGroupWrapOptions(t) {
    this.onRenderRadioGroupWrapAcroform.fire(this, t);
  }
  getUpdatedRadioItemAcroformOptions(t) {
    this.onRenderRadioItemAcroform.fire(this, t);
  }
  correctBricksPosition(t, e) {
    t.isRTL && e.forEach((i) => {
      i.forEach((r) => {
        r.translateX((s, u) => {
          const a = t.paperWidth - s - u;
          return { xLeft: s + a, xRight: u + a };
        });
      });
    });
  }
  renderSurvey(t) {
    return Lt(this, void 0, void 0, function* () {
      this.visiblePages.forEach((r) => r.onFirstRendering());
      const e = yield Ei.generateFlats(this, t);
      this.correctBricksPosition(t, e);
      const i = Ts.pack(e, t);
      yield Hl.process_header_events(this, t, i);
      for (let r = 0; r < i.length; r++)
        for (let s = 0; s < i[r].length; s++)
          t.getNumberOfPages() === r && t.addPage(), t.setPage(r), yield i[r][s].render();
      _.clear();
    });
  }
  /**
   * An asynchronous method that starts to download the generated PDF file in the web browser.
   *
   * [View Demo](https://surveyjs.io/pdf-generator/examples/save-completed-forms-as-pdf-files/ (linkStyle))
   * @param fileName *(Optional)* A file name with the ".pdf" extension. Default value: `"survey_result.pdf"`.
   */
  save() {
    return Lt(this, arguments, void 0, function* (t = "survey_result.pdf") {
      if (kn.currentlySaving)
        kn.saveQueue.push(() => {
          this.save(t);
        });
      else {
        const e = new ji(this.options);
        this.onDocControllerCreated.fire(this, { controller: e }), kn.currentlySaving = !0, _.fixFont(e), yield this.renderSurvey(e);
        const i = e.doc.save(t, { returnPromise: !0 });
        return i.then(() => {
          kn.currentlySaving = !1;
          const r = kn.saveQueue.shift();
          r && r();
        }), i;
      }
    });
  }
  raw(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = new ji(this.options);
      return this.onDocControllerCreated.fire(this, { controller: e }), _.fixFont(e), yield this.renderSurvey(e), e.doc.output(t);
    });
  }
}
kn.currentlySaving = !1;
kn.saveQueue = [];
class fi extends Zi {
  constructor(t, e, i, r) {
    super(r.question, t, e), this.fieldName = i, this.context = r, this.question = this.context.question, this.textColor = this.formBorderColor;
  }
  getShouldRenderReadOnly() {
    return this.context.readOnly && _.getReadonlyRenderAs(this.question, this.controller) !== "acroform" || this.controller.compress;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      var t;
      const e = new this.controller.doc.AcroFormCheckBox(), i = _.formScale(this.controller, this), r = {};
      r.maxFontSize = this.height * i * fi.FONT_SIZE_SCALE, r.caption = fi.CHECKMARK_READONLY_SYMBOL, r.textAlign = "center", r.fieldName = this.fieldName, r.readOnly = this.context.readOnly, r.color = this.formBorderColor, r.value = this.context.checked ? "On" : !1, r.AS = this.context.checked ? "/On" : "/Off", r.context = this.context, r.Rect = _.createAcroformRect(_.scaleRect(this, i)), this.controller.doc.addField(e), (t = this.question.survey) === null || t === void 0 || t.getUpdatedCheckItemAcroformOptions(r), e.maxFontSize = r.maxFontSize, e.caption = r.caption, e.textAlign = r.textAlign, e.fieldName = r.fieldName, e.readOnly = r.readOnly, e.color = r.color, e.value = r.value, e.AS = r.AS, e.Rect = r.Rect, _.renderFlatBorders(this.controller, this);
    });
  }
  renderReadOnly() {
    return Lt(this, void 0, void 0, function* () {
      if (_.renderFlatBorders(this.controller, this), this.context.checked) {
        const t = _.createPoint(this, !0, !0), e = this.controller.fontName;
        this.controller.fontName = fi.CHECKMARK_READONLY_FONT;
        const i = this.controller.fontSize;
        this.controller.fontSize = i * fi.CHECKMARK_READONLY_FONT_SIZE_SCALE;
        const r = this.controller.measureText(fi.CHECKMARK_READONLY_SYMBOL);
        t.xLeft += this.width / 2 - r.width / 2, t.yTop += this.height / 2 - r.height / 2;
        const s = yield _.createTextFlat(t, this.question, this.controller, fi.CHECKMARK_READONLY_SYMBOL, We);
        s.unfold()[0].textColor = this.textColor, this.controller.fontSize = i, yield s.render(), this.controller.fontName = e;
      }
    });
  }
}
fi.FONT_SIZE_SCALE = 0.7;
fi.CHECKMARK_READONLY_SYMBOL = "3";
fi.CHECKMARK_READONLY_FONT = "zapfdingbats";
fi.CHECKMARK_READONLY_FONT_SIZE_SCALE = 1 - Math.E / 10;
class Gl extends fi {
  constructor(t, e, i) {
    super(e, i, t.id, { question: t, readOnly: t.isReadOnly, checked: t.booleanValue });
  }
}
class Zc {
  constructor(t, e, i) {
    this.name = t, this.controller = e, this.context = i;
  }
  addToPdf(t) {
    var e;
    this._radioGroup = new this.controller.doc.AcroFormRadioButton();
    const i = {};
    i.fieldName = this.name, i.readOnly = this.readOnly, i.color = t, i.context = this.context, (e = this.context.question.survey) === null || e === void 0 || e.getUpdatedRadioGroupWrapOptions(i), this._radioGroup.fieldName = i.fieldName, this._radioGroup.readOnly = i.readOnly, this._radioGroup.color = i.color, this._radioGroup.value = "", this.controller.doc.addField(this._radioGroup);
  }
  get radioGroup() {
    return this._radioGroup;
  }
  get readOnly() {
    return this.context.readOnly;
  }
}
class sn extends Zi {
  constructor(t, e, i, r) {
    super(i.question, t, e), this.context = i, this.radioGroupWrap = r, this.textColor = this.formBorderColor;
  }
  getShouldRenderReadOnly() {
    return this.radioGroupWrap.readOnly && _.getReadonlyRenderAs(this.question, this.controller) !== "acroform" || this.controller.compress;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      var t;
      this.context.index == 0 && this.radioGroupWrap.addToPdf(this.formBorderColor);
      const e = {};
      e.fieldName = this.radioGroupWrap.name + "index" + this.context.index;
      let i = _.formScale(this.controller, this);
      e.Rect = _.createAcroformRect(_.scaleRect(this, i)), e.color = this.formBorderColor, e.appearance = this.controller.doc.AcroForm.Appearance.RadioButton.Circle, e.radioGroup = this.radioGroupWrap.radioGroup, e.context = this.context, (t = this.context.question.survey) === null || t === void 0 || t.getUpdatedRadioItemAcroformOptions(e);
      let r = this.radioGroupWrap.radioGroup.createOption(e.fieldName);
      this.context.checked ? (e.AS || (r.AS = "/" + e.fieldName), this.radioGroupWrap.radioGroup.value || (this.radioGroupWrap.radioGroup.value = e.fieldName)) : e.AS || (e.AS = "/Off"), r.Rect = e.Rect, r.color = e.color, _.renderFlatBorders(this.controller, this), this.radioGroupWrap.radioGroup.setAppearance(e.appearance);
    });
  }
  renderReadOnly() {
    return Lt(this, void 0, void 0, function* () {
      if (_.renderFlatBorders(this.controller, this), this.context.checked) {
        const t = _.createPoint(this, !0, !0), e = this.controller.fontSize, i = this.controller.fontName;
        this.controller.fontName = sn.RADIOMARKER_READONLY_FONT, this.controller.fontSize = e * sn.RADIOMARKER_READONLY_FONT_SIZE_SCALE;
        let r = this.controller.measureText(sn.RADIOMARKER_READONLY_SYMBOL);
        t.xLeft += this.width / 2 - r.width / 2, t.yTop += this.height / 2 - r.height / 2;
        let s = yield _.createTextFlat(t, this.question, this.controller, sn.RADIOMARKER_READONLY_SYMBOL, We);
        s.unfold()[0].textColor = this.textColor, yield s.render(), this.controller.fontSize = e, this.controller.fontName = i;
      }
    });
  }
}
sn.RADIOMARKER_READONLY_SYMBOL = "l";
sn.RADIOMARKER_READONLY_FONT = "zapfdingbats";
sn.RADIOMARKER_READONLY_FONT_SIZE_SCALE = 1 - (2 + Math.E) / 10;
class ma extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateItemComment(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = this.question.getCommentTextAreaModel(e);
      return yield _.createCommentFlat(t, this.question, this.controller, {
        fieldName: i.id,
        rows: _.OTHER_ROWS_COUNT,
        value: i.getTextValue(),
        shouldRenderBorders: Wr.readOnlyCommentRenderMode === "textarea",
        isReadOnly: this.question.isReadOnly,
        isMultiline: !0
      });
    });
  }
  generateFlatComposite(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = new fe(), s = _.createRect(t, this.controller.unitWidth, this.controller.unitHeight), u = this.generateFlatItem(_.moveRect(_.scaleRect(s, _.SELECT_ITEM_FLAT_SCALE), t.xLeft), e, i);
      r.addBrick(u);
      const a = _.clone(t);
      if (a.xLeft = u.xRight + this.controller.unitWidth * _.GAP_BETWEEN_ITEM_TEXT, e.locText.renderedHtml !== null && r.addBrick(yield _.createTextFlat(a, this.question, this.controller, e.locText, We)), e.isCommentShowing) {
        const l = _.createPoint(r, !0, !1);
        l.yTop += this.controller.unitHeight * _.GAP_BETWEEN_ROWS, r.addBrick(yield this.generateItemComment(l, e));
      }
      return r;
    });
  }
  getVisibleChoices() {
    return this.question.visibleChoices;
  }
  getColCount() {
    return this.question.colCount;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = this.getColCount(), i = this.getVisibleChoices();
      let r = e;
      if (e == 0)
        r = Math.floor(_.getPageAvailableWidth(this.controller) / this.controller.measureText(_.MATRIX_COLUMN_WIDTH).width) || 1, i.length < r && (r = i.length);
      else if (e > 1 && (r = _.getColumnWidth(this.controller, e) < this.controller.measureText(_.MATRIX_COLUMN_WIDTH).width ? 1 : e, r == e))
        return yield this.generateColumns(t);
      return r == 1 ? yield this.generateVerticallyItems(t, i) : yield this.generateHorisontallyItems(t, r);
    });
  }
  generateRows(t, e) {
    return Lt(this, void 0, void 0, function* () {
      var i;
      const r = this.getVisibleChoices(), s = _.clone(t), u = ((i = e[0]) !== null && i !== void 0 ? i : []).length, a = [];
      for (let l of e) {
        const c = new fe();
        for (let y = 0; y < l.length; y++) {
          const A = l[y];
          this.controller.pushMargins(), _.setColumnMargins(this.controller, u, y), s.xLeft = this.controller.margins.left;
          const g = yield this.generateFlatComposite(s, A, r.indexOf(A));
          c.addBrick(g), this.controller.popMargins();
        }
        const d = _.createRowlineFlat(_.createPoint(c), this.controller);
        s.yTop = d.yBot + _.GAP_BETWEEN_ROWS * this.controller.unitHeight, a.push(c, d);
      }
      return a;
    });
  }
  generateVerticallyItems(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = _.clone(t), r = [];
      for (let s = 0; s < e.length; s++) {
        const u = yield this.generateFlatComposite(i, e[s], s);
        i.yTop = u.yBot + _.GAP_BETWEEN_ROWS * this.controller.unitHeight, r.push(u);
      }
      return r;
    });
  }
  generateColumns(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = this.question.columns, i = e.reduce((s, u) => Math.max(s, u.length), 0), r = [];
      for (let s = 0; s < i; s++) {
        const u = [];
        for (let a of e)
          a[s] && u.push(a[s]);
        r.push(u);
      }
      return yield this.generateRows(t, r);
    });
  }
  generateHorisontallyItems(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = [];
      return this.getVisibleChoices().forEach((s, u) => {
        const a = Math.floor(u / e), l = u % e;
        i[a] || (i[a] = []), i[a][l] = s;
      }), yield this.generateRows(t, i);
    });
  }
}
class Xr extends ma {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  isItemSelected(t, e) {
    return typeof e > "u" ? t === this.question.otherItem ? this.question.isOtherSelected : t.value === this.question.value || typeof this.question.isItemSelected < "u" && this.question.isItemSelected(t) : e;
  }
  generateFlatItem(t, e, i, r, s, u = {}) {
    i === 0 ? (this.radioGroupWrap = new Zc(this.question.id + (typeof r > "u" ? "" : r), this.controller, Object.assign({ readOnly: this.question.isReadOnly, question: this.question }, u)), this.question.pdfRadioGroupWrap = this.radioGroupWrap) : typeof this.radioGroupWrap > "u" && (this.radioGroupWrap = this.question.pdfRadioGroupWrap);
    const a = this.isItemSelected(e, s);
    return new sn(this.controller, t, { question: this.question, index: i, checked: a, item: e }, this.radioGroupWrap);
  }
}
be.getInstance().register("radiogroup", Xr);
be.getInstance().register("buttongroup", Xr);
class Vl extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = new fe(), i = this.controller.unitHeight, r = new Gl(this.question, this.controller, _.moveRect(_.scaleRect(_.createRect(t, i, i), _.SELECT_ITEM_FLAT_SCALE), t.xLeft));
      e.addBrick(r);
      const s = _.clone(t);
      s.xLeft = r.xRight + this.controller.unitWidth * _.GAP_BETWEEN_ITEM_TEXT;
      const u = this.question.isIndeterminate ? null : this.question.booleanValue ? this.question.locLabelTrue : this.question.locLabelFalse;
      return u !== null && u.renderedHtml !== null && e.addBrick(yield _.createTextFlat(s, this.question, this.controller, u, We)), [e];
    });
  }
}
class zp extends Xr {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.buildItems();
  }
  buildItems() {
    const t = this.question, e = new Uh(t.valueFalse !== void 0 ? t.valueFalse : !1), i = new Uh(t.valueTrue !== void 0 ? t.valueTrue : !0);
    e.locOwner = t, e.setLocText(t.locLabelFalse), i.locOwner = t, i.setLocText(t.locLabelTrue), this.items = [e, i];
  }
  getVisibleChoices() {
    return this.items;
  }
  getColCount() {
    return 0;
  }
}
be.getInstance().register("boolean", zp);
be.getInstance().register("boolean-checkbox", Vl);
class Yl extends fi {
  constructor(t, e, i, r, s) {
    super(e, i, t.id + "index" + s, { question: t, readOnly: t.isReadOnly || !r.isEnabled, item: r, checked: t.isItemSelected(r), index: s });
  }
}
class va extends ma {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatItem(t, e, i) {
    return new Yl(this.question, this.controller, t, e, i);
  }
}
class Hp extends va {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  getVisibleChoices() {
    return this.controller.tagboxSelectedChoicesOnly ? this.question.selectedChoices : super.getVisibleChoices();
  }
}
be.getInstance().register("tagbox", Hp);
be.getInstance().register("checkbox", va);
class Kl extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      return be.getInstance().create(this.survey, this.question, this.controller, this.question.getType()).generateFlatsContent(t);
    });
  }
}
be.getInstance().register("custom_model", Kl);
class Xl extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      return [yield _.createCommentFlat(t, this.question, this.controller, {
        rows: this.question.rows,
        isReadOnly: this.question.isReadOnly,
        isMultiline: !0,
        fieldName: this.question.id,
        placeholder: _.getLocString(this.question.locPlaceHolder),
        shouldRenderBorders: Wr.readOnlyCommentRenderMode === "textarea",
        value: this.question.value
      })];
    });
  }
}
be.getInstance().register("comment", Xl);
class $l extends Zi {
  constructor(t, e, i) {
    super(t, e, i), this.controller = e, this.question = t;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      const t = new this.controller.doc.AcroFormComboBox();
      t.fieldName = this.question.id, t.Rect = _.createAcroformRect(_.scaleRect(this, _.formScale(this.controller, this))), t.edit = !1, t.color = this.textColor;
      const e = [];
      this.question.showOptionsCaption && e.push(this.getCorrectedText(this.question.optionsCaption)), this.question.visibleChoices.forEach((i) => {
        e.push(this.getCorrectedText(_.getLocString(i.locText)));
      }), t.setOptions(e), t.fontName = this.controller.fontName, t.fontSize = this.fontSize, t.readOnly = this.question.isReadOnly, t.isUnicode = _.isCustomFont(this.controller, t.fontName), t.V = this.getCorrectedText(this.question.readOnlyText || ""), this.controller.doc.addField(t), _.renderFlatBorders(this.controller, this);
    });
  }
}
class Jl extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateItemComment(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = this.question.getCommentTextAreaModel(this.question.selectedItem);
      return yield _.createCommentFlat(t, this.question, this.controller, {
        fieldName: e.id,
        rows: _.OTHER_ROWS_COUNT,
        value: e.getTextValue(),
        shouldRenderBorders: Wr.readOnlyCommentRenderMode === "textarea",
        isReadOnly: this.question.isReadOnly,
        isMultiline: !0
      });
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = this.shouldRenderAsComment ? yield _.createCommentFlat(t, this.question, this.controller, {
        fieldName: this.question.id,
        shouldRenderBorders: Wr.readOnlyTextRenderMode === "input",
        value: this.question.readOnlyText || "",
        isReadOnly: this.question.isReadOnly,
        placeholder: _.getLocString(this.question.locPlaceholder)
      }) : new $l(this.question, this.controller, _.createTextFieldRect(t, this.controller)), i = new fe(e);
      if (this.question.isShowingChoiceComment) {
        const r = _.createPoint(i);
        r.yTop += this.controller.unitHeight * _.GAP_BETWEEN_ROWS, i.addBrick(yield this.generateItemComment(r));
      }
      return [i];
    });
  }
}
be.getInstance().register("dropdown", Jl);
class Zl extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.question = e;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      return [yield _.createCommentFlat(t, this.question, this.controller, {
        value: this.question.displayValue,
        isReadOnly: !0,
        fieldName: this.question.id,
        shouldRenderBorders: Wr.readOnlyTextRenderMode === "input"
      })];
    });
  }
}
be.getInstance().register("expression", Zl);
class En extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.question = e;
  }
  generateFlatItem(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = new fe(yield _.createLinkFlat(t, this.question, this.controller, e.name === void 0 ? "image" : e.name, typeof e.content == "string" ? e.content : ""));
      if (_.canPreviewImage(this.question, e, e.content)) {
        const r = _.createPoint(i);
        r.yTop += this.controller.unitHeight * En.IMAGE_GAP_SCALE, i.addBrick(yield _.createImageFlat(r, this.question, this.controller, { link: e.content, width: e.imageSize.width, height: e.imageSize.height, objectFit: En.DEFAULT_IMAGE_FIT }));
      }
      return i;
    });
  }
  addLine(t, e, i, r) {
    i !== r.length - 1 && (t[t.length - 1].addBrick(_.createRowlineFlat(e, this.controller)), e.yTop += _.EPSILON, t.push(new fe()));
  }
  getImagePreviewContentWidth(t) {
    return Lt(this, void 0, void 0, function* () {
      return Math.max(t.imageSize.width, En.TEXT_MIN_SCALE * this.controller.unitWidth);
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = this.question.showPreview ? this.question.previewValue : this.question.value;
      if (!e || e.length === 0)
        return [yield _.createTextFlat(t, this.question, this.controller, this.question.noFileChosenCaption, We)];
      const i = [new fe()], r = _.clone(t);
      let s = r.yTop;
      for (let u = 0; u < e.length; u++) {
        let a = Object.assign({}, e[u]);
        const l = _.canPreviewImage(this.question, a, a.content);
        l && (a.imageSize = yield _.getCorrectedImageSize(this.controller, { imageWidth: this.question.imageWidth, imageHeight: this.question.imageHeight, imageLink: e[u].content, defaultImageWidth: 200, defaultImageHeight: 150 }));
        const c = this.controller.paperWidth - this.controller.margins.right - r.xLeft;
        if (l) {
          const d = yield this.getImagePreviewContentWidth(a);
          c < d && (r.xLeft = t.xLeft, r.yTop = s, this.addLine(i, r, u, e)), this.controller.pushMargins(r.xLeft, this.controller.paperWidth - r.xLeft - d);
          const y = yield this.generateFlatItem(r, a);
          i[i.length - 1].addBrick(y), r.xLeft += y.width, s = Math.max(s, y.yBot), this.controller.popMargins();
        } else {
          c < this.controller.unitWidth && (r.xLeft = t.xLeft, r.yTop = s, this.addLine(i, r, u, e));
          const d = yield this.generateFlatItem(r, a);
          i[i.length - 1].addBrick(d), r.xLeft += d.xRight - d.xLeft, s = Math.max(s, d.yBot);
        }
        r.xLeft += this.controller.unitWidth;
      }
      return i;
    });
  }
}
En.IMAGE_GAP_SCALE = 0.195;
En.TEXT_MIN_SCALE = 5;
En.DEFAULT_IMAGE_FIT = "contain";
be.getInstance().register("file", En);
class ks extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t;
  }
  chooseRender(t) {
    return /<[^>]*style[^<]*>/.test(t) || /<[^>]*table[^<]*>/.test(t) || /&\w+;/.test(t) ? "image" : "standard";
  }
  correctHtml(t) {
    return ks.correctHtmlRules.forEach((e) => {
      t = t.replace(e.searchRegExp, e.replaceString);
    }), t;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      let e = this.question.renderAs;
      if (!_.hasDocument)
        return [new Ps(_.createRect(t, 0, 0))];
      e === "auto" && (e = this.controller.htmlRenderAs), e === "auto" && (e = this.chooseRender(_.getLocString(this.question.locHtml)));
      const i = _.createHtmlContainerBlock(_.getLocString(this.question.locHtml), this.controller, e);
      if (e === "image") {
        const r = _.getPageAvailableWidth(this.controller), { url: s, aspect: u } = yield _.htmlToImage(i, r, this.controller), a = r / u;
        return [yield _.createImageFlat(t, this.question, this.controller, { link: s, width: r, height: a })];
      }
      return [_.splitHtmlRect(this.controller, yield _.createHTMLFlat(t, this.question, this.controller, this.correctHtml(i)))];
    });
  }
}
ks.correctHtmlRules = [
  { searchRegExp: /(<\/?br\s*?\/?\s*?>\s*){2,}/g, replaceString: "<br>" }
];
Zn.removeProperty("html", "renderAs");
Zn.addProperty("html", {
  name: "renderAs",
  default: "auto",
  visible: !1,
  choices: ["auto", "standard", "image"]
});
be.getInstance().register("html", ks);
class Ql extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.question = e;
  }
  getCorrectImageSize() {
    return Lt(this, void 0, void 0, function* () {
      return yield _.getCorrectedImageSize(this.controller, { imageWidth: this.question.imageWidth, imageHeight: this.question.imageHeight, imageLink: this.question.imageLink });
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = yield this.getCorrectImageSize();
      return [yield _.createImageFlat(t, this.question, this.controller, { link: this.question.imageLink, width: e.width, height: e.height })];
    });
  }
}
be.getInstance().register("image", Ql);
class th extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.question = e;
  }
  generateFlatItem(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = _.getPageAvailableWidth(this.controller), s = yield _.createImageFlat(t, this.question, this.controller, { link: e.imageLink, width: r, height: r / _.IMAGEPICKER_RATIO, objectFit: this.question.imageFit }), u = new fe(s);
      let a = _.createPoint(u);
      if (this.question.showLabel) {
        let d = yield _.createTextFlat(a, this.question, this.controller, e.text || e.value, We);
        u.addBrick(d), a = _.createPoint(d);
      }
      const l = this.controller.unitHeight, c = _.createRect(a, r, l);
      return this.question.multiSelect ? u.addBrick(new fi(this.controller, c, this.question.id + "index" + i, { readOnly: this.question.isReadOnly || !e.isEnabled, question: this.question, item: e, checked: this.question.value.indexOf(e.value) !== -1, index: i })) : u.addBrick(this.radio.generateFlatItem(c, e, i)), u;
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      this.radio = this.question.multiSelect ? null : new Xr(this.survey, this.question, this.controller);
      const e = [new fe()], i = _.getImagePickerAvailableWidth(this.controller) / _.IMAGEPICKER_COUNT;
      let r = ~~(_.getPageAvailableWidth(this.controller) / i) || 1;
      const s = this.question.visibleChoices.length;
      r = r <= s ? r : s;
      const u = ~~Math.ceil(s / r), a = _.clone(t);
      for (let l = 0; l < u; l++) {
        let c = a.yTop;
        this.controller.pushMargins();
        let d = this.controller.margins.left;
        for (let y = 0; y < r; y++) {
          const A = l * r + y;
          if (A == s)
            break;
          this.controller.margins.left = d, this.controller.margins.right = this.controller.paperWidth - d - i, d = this.controller.paperWidth - this.controller.margins.right + this.controller.unitWidth, a.xLeft = this.controller.margins.left;
          const g = yield this.generateFlatItem(a, this.question.visibleChoices[A], A);
          e[e.length - 1].addBrick(g), c = Math.max(c, g.yBot);
        }
        this.controller.popMargins(), a.xLeft = t.xLeft, a.yTop = c, l !== u - 1 && (e[e.length - 1].addBrick(_.createRowlineFlat(a, this.controller)), a.yTop += _.EPSILON, e.push(new fe()));
      }
      return e;
    });
  }
}
be.getInstance().register("imagepicker", th);
class Rs extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = [], i = _.clone(t);
      for (const r of this.question.panels) {
        const s = yield Ei.generateFlatsPanel(this.survey, this.controller, r, i);
        s.length !== 0 && (i.yTop = _.mergeRects(...s).yBot, i.yTop += this.controller.unitHeight * Rs.GAP_BETWEEN_PANELS, e.push(...s));
      }
      return e;
    });
  }
}
Rs.GAP_BETWEEN_PANELS = 0.75;
be.getInstance().register("paneldynamic", Rs);
class eh extends Zi {
  constructor(t, e, i, r) {
    super(t, e, i), this.mark = r, this.question = t, this.textColor = this.formBorderColor;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      _.renderFlatBorders(this.controller, this);
      const t = _.createPoint(this, !0, !0), e = this.controller.fontSize;
      this.controller.fontSize = e * fi.CHECKMARK_READONLY_FONT_SIZE_SCALE;
      const i = this.controller.measureText(this.mark);
      t.xLeft += this.width / 2 - i.width / 2, t.yTop += this.height / 2 - i.height / 2;
      const r = yield _.createTextFlat(t, this.question, this.controller, this.mark, We);
      r.unfold()[0].textColor = this.textColor, this.controller.fontSize = e, yield r.render();
    });
  }
}
class nc extends Zi {
  constructor(t, e, i, r, s) {
    super(void 0, t, e), this.color = i, this.renderWidth = r, this.renderHeight = s;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      var t, e;
      let i = this.controller.doc.getFillColor();
      this.controller.doc.setFillColor(this.color || "black"), this.controller.doc.rect(this.xLeft, this.yTop, (t = this.renderWidth) !== null && t !== void 0 ? t : this.width, (e = this.renderHeight) !== null && e !== void 0 ? e : this.height, "F"), this.controller.doc.setFillColor(i);
    });
  }
}
class ih extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatComposite(t, e, i) {
    return Lt(this, arguments, void 0, function* (r, s, u, a = !1) {
      const l = _.createRect(r, this.controller.unitWidth, this.controller.unitHeight), c = _.moveRect(_.scaleRect(l, _.SELECT_ITEM_FLAT_SCALE), r.xLeft), d = new eh(this.question, this.controller, c, a ? "-" : this.question.getNumberByIndex(u)), y = _.clone(r);
      y.xLeft = d.xRight + this.controller.unitWidth * _.GAP_BETWEEN_ITEM_TEXT;
      const A = yield _.createTextFlat(y, this.question, this.controller, s.locText, We);
      return new fe(d, A);
    });
  }
  generateChoicesColumn(t, e) {
    return Lt(this, arguments, void 0, function* (i, r, s = !1) {
      const u = _.clone(i), a = [];
      for (let l = 0; l < r.length; l++) {
        const c = yield this.generateFlatComposite(u, r[l], l, s);
        u.yTop = c.yBot + _.GAP_BETWEEN_ROWS * this.controller.unitHeight, a.push(c);
      }
      return a;
    });
  }
  generateSelectToRankItemsVertically(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = _.clone(t), i = [];
      this.question.rankingChoices.length !== 0 && (i.push(...yield this.generateChoicesColumn(e, this.question.rankingChoices)), e.yTop = i[i.length - 1].yBot + 2 * (_.GAP_BETWEEN_ROWS * this.controller.unitHeight));
      const r = _.createRect({
        xLeft: e.xLeft,
        yTop: e.yTop - _.GAP_BETWEEN_ROWS * this.controller.unitHeight - 0.5
      }, this.controller.paperWidth - this.controller.margins.right - e.xLeft, 1);
      return i.push(new nc(this.controller, r, _.FORM_BORDER_COLOR)), i.push(...yield this.generateChoicesColumn(e, this.question.unRankingChoices, !0)), i;
    });
  }
  generateSelectToRankItemsHorizontally(t) {
    return Lt(this, void 0, void 0, function* () {
      const i = _.clone(t), r = [], s = Math.max(this.question.unRankingChoices.length, this.question.rankingChoices.length);
      let u = new fe();
      for (let a = 0; a < s; a++) {
        let l = 0;
        for (let y of [this.question.unRankingChoices[a], this.question.rankingChoices[a]]) {
          if (y) {
            this.controller.pushMargins(this.controller.margins.left, this.controller.margins.right), _.setColumnMargins(this.controller, 2, l), i.xLeft = this.controller.margins.left;
            const A = yield this.generateFlatComposite(i, y, a, l == 0);
            u.addBrick(A), this.controller.popMargins();
          }
          l++;
        }
        const c = _.createRowlineFlat(_.createPoint(u), this.controller);
        r.push(u, c);
        const d = _.createRect({
          xLeft: this.controller.margins.left + _.getPageAvailableWidth(this.controller) / 2 - 0.5,
          yTop: i.yTop
        }, 0, 0);
        u.addBrick(new nc(this.controller, d, _.FORM_BORDER_COLOR, 1, c.yBot - i.yTop + (a !== s - 1 ? _.GAP_BETWEEN_ROWS * this.controller.unitHeight : 0))), i.yTop = c.yBot + _.GAP_BETWEEN_ROWS * this.controller.unitHeight, u = new fe();
      }
      return r;
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      return this.question.selectToRankEnabled ? this.question.selectToRankAreasLayout == "vertical" ? this.generateSelectToRankItemsVertically(t) : this.generateSelectToRankItemsHorizontally(t) : this.generateChoicesColumn(t, this.question.rankingChoices);
    });
  }
}
be.getInstance().register("ranking", ih);
class nh extends Xr {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.questionRating = e;
  }
  generateFlatHorisontalComposite(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = _.getRatingItemText(this.questionRating, i, e.locText);
      this.controller.pushMargins();
      const s = this.controller.unitWidth / 2;
      this.controller.margins.left += s, this.controller.margins.right += s;
      const u = _.clone(t);
      u.xLeft += s;
      const a = new fe(yield _.createBoldTextFlat(u, this.questionRating, this.controller, r));
      this.controller.popMargins();
      let l = a.width;
      l < _.getRatingMinWidth(this.controller) ? (a.xLeft += (_.getRatingMinWidth(this.controller) - l) / 2 - s, l = _.getRatingMinWidth(this.controller)) : l += this.controller.unitWidth;
      const c = _.createPoint(a);
      return c.xLeft = t.xLeft, a.addBrick(this.generateFlatItem(_.createRect(c, l, this.controller.unitHeight), e, i, void 0, this.question.value == e.value)), a;
    });
  }
  generateFlatComposite(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = new fe(), s = _.createRect(t, this.controller.unitHeight, this.controller.unitHeight), u = this.generateFlatItem(_.moveRect(_.scaleRect(s, _.SELECT_ITEM_FLAT_SCALE), t.xLeft), e, i, void 0, this.question.value == e.value);
      r.addBrick(u);
      const a = _.clone(t);
      a.xLeft = u.xRight + this.controller.unitWidth * _.GAP_BETWEEN_ITEM_TEXT;
      const l = _.getRatingItemText(this.questionRating, i, e.locText);
      return l == null || r.addBrick(yield _.createTextFlat(a, this.question, this.controller, l, We)), r;
    });
  }
  generateHorisontallyItems(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = [new fe()], i = _.clone(t);
      for (let r = 0; r < this.questionRating.visibleRateValues.length; r++) {
        const s = yield this.generateFlatHorisontalComposite(i, this.questionRating.visibleRateValues[r], r);
        e[e.length - 1].addBrick(s);
        const u = this.controller.paperWidth - this.controller.margins.right - s.xRight;
        _.getRatingMinWidth(this.controller) <= u + _.EPSILON ? i.xLeft = s.xRight : (i.xLeft = t.xLeft, i.yTop = s.yBot, r !== this.questionRating.visibleRateValues.length - 1 && (e[e.length - 1].addBrick(_.createRowlineFlat(i, this.controller)), i.yTop += _.EPSILON, e.push(new fe())));
      }
      return e;
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      let e = !1;
      for (let i = 0; i < this.questionRating.visibleRateValues.length; i++) {
        const r = _.getRatingItemText(this.questionRating, i, this.questionRating.visibleRateValues[i].locText);
        this.controller.measureText(r).width > this.controller.measureText(_.RATING_COLUMN_WIDTH).width && (e = !0);
      }
      return e ? this.generateVerticallyItems(t, this.questionRating.visibleRateValues) : this.generateHorisontallyItems(t);
    });
  }
}
be.getInstance().register("rating", nh);
class rh extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      let e = _.clone(t);
      if (this.question.sliderType === "single") {
        const i = this.getOptionsByValue(this.question.value);
        return [yield this.generateInputBrick(e, i)];
      }
      if (this.question.sliderType === "range") {
        const i = new fe();
        for (let r = 0; r < this.question.value.length; r++) {
          const s = this.question.value[r], u = this.getOptionsByValue(s), a = yield this.generateColumnInput(e, u, 2, r);
          i.addBrick(a);
        }
        return [i];
      }
    });
  }
  getOptionsByValue(t) {
    const { id: e, isReadOnly: i } = this.question;
    return {
      fieldName: e,
      inputType: "number",
      value: t,
      isReadOnly: i,
      shouldRenderBorders: !0
    };
  }
  generateInputBrick(t, e) {
    return Lt(this, void 0, void 0, function* () {
      if (this.shouldRenderAsComment)
        return yield _.createCommentFlat(t, this.question, this.controller, Object.assign({}, e));
      {
        const i = _.createTextFieldRect(t, this.controller);
        return new fo(this.question, this.controller, i, Object.assign({}, e));
      }
    });
  }
  generateColumnInput(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      this.controller.pushMargins(), _.setColumnMargins(this.controller, i, r);
      const s = _.clone(t);
      s.xLeft = this.controller.margins.left;
      const u = yield this.generateInputBrick(s, e);
      return this.controller.popMargins(), u;
    });
  }
}
be.getInstance().register("slider", rh);
class Gr extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.question = e;
  }
  get signatureSize() {
    if (!this._signatureSize) {
      let t = _.pxToPt(this.question.signatureWidth), e = _.pxToPt(this.question.signatureHeight);
      const i = _.getPageAvailableWidth(this.controller);
      if (t > i) {
        const r = i;
        e *= r / t, t = r;
      }
      this._signatureSize = { width: t, height: e };
    }
    return this._signatureSize;
  }
  generateBackgroundImage(t) {
    return Lt(this, void 0, void 0, function* () {
      return yield _.createImageFlat(t, this.question, this.controller, Object.assign(Object.assign({ link: this.question.backgroundImage }, this.signatureSize), { objectFit: "cover" }), !0);
    });
  }
  getSignImageUrl() {
    return this.question.storeDataAsText || !this.question.loadedData ? this.question.value : this.question.loadedData;
  }
  generateSign(t) {
    return Lt(this, void 0, void 0, function* () {
      let e;
      return this.question.value ? e = yield _.createImageFlat(t, this.question, this.controller, Object.assign({ link: this.getSignImageUrl() }, this.signatureSize), !1) : e = new Ps(_.createRect(t, this.signatureSize.width, this.signatureSize.height)), Gr.BORDER_STYLE !== "none" && (e.afterRenderCallback = () => {
        const i = {
          height: e.width,
          width: e.width,
          yTop: e.yTop,
          yBot: e.yBot,
          xLeft: e.xLeft,
          xRight: e.xRight,
          formBorderColor: e.formBorderColor,
          rounded: !1,
          outside: !0,
          dashStyle: Gr.BORDER_STYLE == "dashed" ? {
            dashArray: [5],
            dashPhase: 0
          } : void 0
        };
        _.renderFlatBorders(this.controller, i);
      }), e;
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = new fe();
      return this.question.backgroundImage && e.addBrick(yield this.generateBackgroundImage(t)), e.addBrick(yield this.generateSign(t)), [e];
    });
  }
}
Gr.BORDER_STYLE = "dashed";
be.getInstance().register("signaturepad", Gr);
class Es extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.question = e;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = {
        fieldName: this.question.id,
        inputType: this.question.inputType,
        value: this.question.inputValue,
        isReadOnly: this.question.isReadOnly,
        shouldRenderBorders: Wr.readOnlyTextRenderMode === "input",
        placeholder: _.getLocString(this.question.locPlaceHolder)
      };
      if (!this.shouldRenderAsComment) {
        const i = _.createTextFieldRect(t, this.controller);
        return [new fo(this.question, this.controller, i, Object.assign({}, e))];
      }
      return [yield _.createCommentFlat(t, this.question, this.controller, Object.assign({ rows: Es.MULTILINE_TEXT_ROWS_COUNT, isMultiline: !0 }, e))];
    });
  }
}
Es.MULTILINE_TEXT_ROWS_COUNT = 1;
be.getInstance().register("text", Es);
class Vr extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  generateFlatsHeader(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = [], i = _.clone(t);
      this.question.hasRows && (i.xLeft += this.rowTitleWidth + this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS);
      for (let s = 0; s < this.question.visibleColumns.length; s++)
        this.controller.pushMargins(), this.controller.margins.left = i.xLeft, this.controller.margins.right += _.getPageAvailableWidth(this.controller) - this.columnWidth, e.push(yield _.createBoldTextFlat(i, this.question, this.controller, this.question.visibleColumns[s].locText)), i.xLeft += this.columnWidth + this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS, this.controller.popMargins();
      const r = new fe(...e);
      return [r, _.createRowlineFlat(_.createPoint(r), this.controller)];
    });
  }
  generateFlatsRows(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = [];
      let r = _.clone(t);
      for (let s = 0; s < this.question.visibleRows.length; s++) {
        const u = "row" + s, a = yield new Gp(this.survey, this.question, this.controller, this.question.visibleRows[s], s, u, s == 0, e, this.rowTitleWidth, this.columnWidth).generateFlatsContent(r);
        r = _.createPoint(_.mergeRects(...a)), r.yTop += this.controller.unitHeight * Vr.GAP_BETWEEN_ROWS, i.push(...a);
      }
      return i;
    });
  }
  calculateColumnsWidthes() {
    const t = _.getPageAvailableWidth(this.controller);
    this.question.hasRows && this.question.rowTitleWidth ? (this.controller.pushMargins(), this.rowTitleWidth = _.parseWidth(this.question.rowTitleWidth, t), this.controller.margins.left += this.rowTitleWidth + this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS, this.columnWidth = _.getColumnWidth(this.controller, this.question.visibleColumns.length), this.controller.popMargins()) : this.columnWidth = this.rowTitleWidth = _.getColumnWidth(this.controller, this.question.visibleColumns.length + (this.question.hasRows ? 1 : 0));
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      this.calculateColumnsWidthes();
      const e = this.question.renderAs === "list" || this.controller.matrixRenderAs === "list" || this.columnWidth < this.controller.measureText(_.MATRIX_COLUMN_WIDTH).width;
      let i = _.clone(t);
      const r = [];
      if (!e && this.question.showHeader && this.question.visibleColumns.length != 0) {
        let s = yield this.generateFlatsHeader(i);
        i = _.createPoint(_.mergeRects(...s)), i.yTop += Vr.GAP_BETWEEN_ROWS * this.controller.unitHeight, r.push(...s);
      }
      return r.push(...yield this.generateFlatsRows(i, e)), r;
    });
  }
}
Vr.GAP_BETWEEN_ROWS = 0.5;
class Gp {
  constructor(t, e, i, r, s, u, a = !1, l = !1, c, d) {
    this.survey = t, this.question = e, this.controller = i, this.row = r, this.rowIndex = s, this.key = u, this.isFirst = a, this.isVertical = l, this.rowTitleWidth = c, this.columnWidth = d;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      return this.isVertical ? yield this.generateFlatsVerticallyCells(t) : yield this.generateFlatsHorizontallyCells(t);
    });
  }
  generateFlatItem(t, e, i, r, s = {}) {
    const u = this.question.id + r, a = this.row.isChecked(e);
    return this.question.isMultiSelect ? new fi(this.controller, t, u + "index" + i, { question: this.question, index: i, checked: a, item: e, readOnly: this.question.isReadOnly }) : (i === 0 ? (this.radioGroupWrap = new Zc(u, this.controller, Object.assign({ readOnly: this.question.isReadOnly, question: this.question }, s)), this.question.pdfRadioGroupWrap = this.radioGroupWrap) : typeof this.radioGroupWrap > "u" && (this.radioGroupWrap = this.question.pdfRadioGroupWrap), new sn(this.controller, t, { question: this.question, index: i, checked: a, item: e }, this.radioGroupWrap));
  }
  generateTextComposite(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = _.clone(t), s = _.createRect(r, _.getPageAvailableWidth(this.controller), this.controller.unitHeight), u = this.generateFlatItem(s, e, i, this.key, { row: this.row, rowIndex: this.rowIndex });
      r.yTop = u.yBot + this.controller.unitHeight * _.GAP_BETWEEN_ITEM_TEXT;
      const a = yield _.createTextFlat(r, this.question, this.controller, this.question.getCellDisplayLocText(this.row.name, e), We);
      return new fe(u, a);
    });
  }
  generateItemComposite(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = _.clone(t), s = _.createRect(r, this.controller.unitHeight, this.controller.unitHeight), u = this.generateFlatItem(_.moveRect(_.scaleRect(s, _.SELECT_ITEM_FLAT_SCALE), s.xLeft), e, i, this.key, { row: this.row, rowIndex: this.rowIndex });
      r.xLeft = u.xRight + this.controller.unitWidth * _.GAP_BETWEEN_ITEM_TEXT;
      const a = yield _.createTextFlat(r, this.question, this.controller, e.locText, We);
      return new fe(u, a);
    });
  }
  generateFlatsHorizontallyCells(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = [], i = _.clone(t);
      this.question.hasRows && (this.controller.pushMargins(), i.xLeft = this.controller.margins.left, this.controller.margins.right += _.getPageAvailableWidth(this.controller) - this.rowTitleWidth, e.push(yield _.createTextFlat(i, this.question, this.controller, this.row.locText, We)), i.xLeft += this.rowTitleWidth + this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS, this.controller.popMargins());
      for (let s = 0; s < this.question.visibleColumns.length; s++) {
        const u = this.question.visibleColumns[s];
        if (this.row.value == u.value, this.controller.pushMargins(), this.controller.margins.left = i.xLeft, this.controller.margins.right += _.getPageAvailableWidth(this.controller) - this.columnWidth, this.question.hasCellText)
          e.push(yield this.generateTextComposite(i, u, s));
        else {
          const a = _.createRect(i, this.controller.unitHeight, this.controller.unitHeight);
          e.push(this.generateFlatItem(_.moveRect(_.scaleRect(a, _.SELECT_ITEM_FLAT_SCALE), i.xLeft), u, s, this.key, { row: this.row, rowIndex: this.rowIndex }));
        }
        i.xLeft += this.columnWidth + this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS, this.controller.popMargins();
      }
      const r = new fe(...e);
      return [r, _.createRowlineFlat(_.createPoint(r), this.controller)];
    });
  }
  generateFlatsVerticallyCells(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = [], i = _.clone(t);
      if (this.question.hasRows) {
        const s = yield _.createTextFlat(i, this.question, this.controller, this.row.locText, We);
        i.yTop = s.yBot + ve.CONTENT_GAP_VERT_SCALE * this.controller.unitHeight, e.push(s);
      }
      e.push(...yield this.generateVerticallyItems(i, this.question.visibleColumns));
      const r = new fe(...e);
      return [r, _.createRowlineFlat(_.createPoint(r), this.controller)];
    });
  }
  generateVerticallyItems(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = _.clone(t), r = [];
      for (let s = 0; s < e.length; s++) {
        const u = yield (this.question.hasCellText ? this.generateTextComposite : this.generateItemComposite).call(this, i, e[s], s);
        i.yTop = u.yBot + _.GAP_BETWEEN_ROWS * this.controller.unitHeight, r.push(u);
      }
      return r;
    });
  }
}
Zn.removeProperty("matrix", "renderAs");
Zn.addProperty("matrix", {
  name: "renderAs",
  default: "auto",
  visible: !1,
  choices: ["auto", "list"]
});
be.getInstance().register("matrix", Vr);
class mn extends ve {
  constructor(t, e, i, r = !0) {
    super(t, e, i), this.survey = t, this.isMultiple = r, this.question = e;
  }
  get visibleRows() {
    return this.visibleRowsValue || (this.visibleRowsValue = this.question.renderedTable.rows.filter((t) => t.visible)), this.visibleRowsValue;
  }
  generateFlatsCellTitle(t, e) {
    return Lt(this, void 0, void 0, function* () {
      const i = new fe();
      return i.addBrick(yield _.createTextFlat(t, this.question, this.controller, e, We)), i;
    });
  }
  generateFlatsCell(t, e, i) {
    return Lt(this, arguments, void 0, function* (r, s, u, a = !0) {
      const l = new fe();
      if (s.hasQuestion) {
        if (!(u == "footer" && !s.question.isAnswered)) if (a && s.isChoice) {
          const c = be.getInstance().create(this.survey, s.question, this.controller, s.question.getType()), d = _.moveRect(_.scaleRect(_.createRect(r, this.controller.unitHeight, this.controller.unitHeight), _.SELECT_ITEM_FLAT_SCALE), r.xLeft);
          l.addBrick(c.generateFlatItem(d, s.item, s.choiceIndex));
        } else
          s.question.titleLocation = _.TITLE_LOCATION_MATRIX, l.addBrick(...yield _.generateQuestionFlats(this.survey, this.controller, s.question, r));
      } else s.hasTitle && (u == "header" ? l.addBrick(yield _.createBoldTextFlat(r, this.question, this.controller, s.locTitle)) : l.addBrick(yield _.createTextFlat(r, this.question, this.controller, s.locTitle, We)));
      return l;
    });
  }
  get hasDetailPanel() {
    return this.visibleRows.some((t) => t.row && this.question.hasDetailPanel(t.row));
  }
  ignoreCell(t, e, i, r = !0) {
    return !r && i == "footer" && t.hasQuestion && !t.question.isAnswered ? !0 : !(t.hasQuestion || t.hasTitle || this.isMultiple && (this.hasDetailPanel ? e == 1 : e == 0));
  }
  getRowLocation(t) {
    return t === this.question.renderedTable.headerRow ? "header" : this.question.renderedTable.footerRow === t ? "footer" : void 0;
  }
  generateFlatsRowHorisontal(t, e, i) {
    return Lt(this, void 0, void 0, function* () {
      const r = new fe(), s = _.clone(t);
      let u = this.controller.paperWidth - this.controller.margins.left + this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS;
      this.controller.pushMargins();
      let a = 0;
      const l = this.getRowLocation(e);
      for (let c = 0; c < e.cells.length; c++) {
        if (this.ignoreCell(e.cells[c], c, l))
          continue;
        this.controller.margins.left = this.controller.paperWidth - u + this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS, this.controller.margins.right = this.controller.paperWidth - this.controller.margins.left - i[a], u = this.controller.margins.right, s.xLeft = this.controller.margins.left;
        const d = yield this.generateFlatsCell(s, e.cells[c], l);
        d.isEmpty || r.addBrick(d), a++;
      }
      return this.controller.popMargins(), r;
    });
  }
  generateFlatsRowVertical(t, e) {
    return Lt(this, void 0, void 0, function* () {
      var i, r;
      const s = new fe(), u = _.clone(t), a = this.getRowLocation(e);
      for (let l = 0; l < e.cells.length; l++)
        this.ignoreCell(e.cells[l], l, a, !1) || (this.question.renderedTable.showHeader && (!this.isMultiple || l > 0) && (!((r = (i = e.cells[l].cell) === null || i === void 0 ? void 0 : i.column) === null || r === void 0) && r.locTitle) && (s.addBrick(yield this.generateFlatsCellTitle(u, e.cells[l].cell.column.locTitle)), u.yTop = s.yBot + mn.GAP_BETWEEN_ROWS * this.controller.unitHeight), s.addBrick(yield this.generateFlatsCell(u, e.cells[l], a, !1)), u.yTop = s.yBot + mn.GAP_BETWEEN_ROWS * this.controller.unitHeight);
      return s;
    });
  }
  getAvalableWidth(t) {
    return _.getPageAvailableWidth(this.controller) - (t - 1) * this.controller.unitWidth * _.GAP_BETWEEN_COLUMNS;
  }
  calculateColumnWidth(t, e) {
    const i = this.getAvalableWidth(e);
    let r = i, s = e;
    const u = [], a = [];
    let l = t[0].cells.filter((d, y) => !this.ignoreCell(d, y));
    for (let d = 0; d < e; d++) {
      const y = _.parseWidth(l[d].width, i, e) || 0;
      r -= y, y !== 0 ? s-- : a.push(l[d]), u.push(y);
    }
    if (s === 0)
      return u;
    const c = this.controller.measureText(_.MATRIX_COLUMN_WIDTH).width;
    return a.sort((d, y) => {
      let A = _.parseWidth(d.minWidth, i, e) || 0;
      return (_.parseWidth(y.minWidth, i, e) || 0) > A ? 1 : -1;
    }).forEach((d) => {
      const y = r / s, A = _.parseWidth(d.minWidth, i, e) || 0;
      A > y && A > c && (r -= A, s--), u[l.indexOf(d)] = Math.max(c, A, y);
    }), u;
  }
  generateOneRow(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      return i ? yield this.generateFlatsRowHorisontal(t, e, r) : yield this.generateFlatsRowVertical(t, e);
    });
  }
  generateFlatsRows(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = _.clone(t), u = [];
      for (let a = 0; a < e.length; a++) {
        let l = yield this.generateOneRow(s, e[a], r, this.calculateColumnWidth(e, i));
        if (!(l.isEmpty && !(e[a].row && e[a].row.hasPanel)) && (l.isEmpty || (a !== e.length - 1 && (s.yTop = l.yBot, l.addBrick(_.createRowlineFlat(s, this.controller))), u.push(l), s.yTop = l.yBot + mn.GAP_BETWEEN_ROWS * this.controller.unitHeight), e[a].row && e[a].row.hasPanel)) {
          e[a].row.showDetailPanel();
          const c = e[a].row.detailPanel;
          for (let A = 0; A < c.questions.length; A++)
            c.questions[A].id += "_" + a;
          const d = yield Ei.generateFlatsPanel(this.survey, this.controller, c, s), y = new fe();
          if (y.addBrick(...d), s.yTop = y.yBot + mn.GAP_BETWEEN_ROWS * this.controller.unitHeight, u.push(y), a !== e.length - 1 && this.question.renderedTable.showHeader && r) {
            const A = yield this.generateOneRow(s, e[0], r, this.calculateColumnWidth(e, i));
            let g = y.yBot;
            A.isEmpty || (g = A.yBot, u.push(A)), s.yTop = g + mn.GAP_BETWEEN_ROWS * this.controller.unitHeight;
          }
        }
      }
      return u;
    });
  }
  calculateIsWide(t, e) {
    const i = [];
    if (t.showHeader && i.push(t.headerRow), i.push(...this.visibleRows), i.length === 0)
      return !0;
    const r = this.calculateColumnWidth(i, e).reduce((s, u) => s += u, 0);
    return this.question.renderAs !== "list" && this.controller.matrixRenderAs !== "list" && Math.floor(r) <= Math.floor(this.getAvalableWidth(e));
  }
  getRowsToRender(t, e, i) {
    const r = [], s = this.visibleRows;
    return t.showHeader && i && r.push(t.headerRow), r.push(...s), t.hasRemoveRows && e && r.pop(), t.showFooter && r.push(t.footerRow), r;
  }
  getColCount(t, e) {
    return e[0] ? e[0].cells.filter((i, r) => !this.ignoreCell(i, r)).length : t.showHeader && t.headerRow ? t.headerRow.cells.length : t.showFooter && t.footerRow ? t.footerRow.cells.length : 0;
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      let e = this.question.renderedTable, i = this.question.columnLayout === "vertical", r = this.getColCount(e, this.visibleRows);
      if (r === 0 && !this.hasDetailPanel)
        return [new fe(_.createRowlineFlat(t, this.controller))];
      const s = this.calculateIsWide(e, r);
      s || (this.question.isMobile = !0, i = !1, e = this.question.renderedTable, this.visibleRowsValue = void 0, r = this.getColCount(e, this.visibleRows));
      const u = this.getRowsToRender(e, i, s);
      return yield this.generateFlatsRows(t, u, r, s);
    });
  }
}
mn.GAP_BETWEEN_ROWS = 0.5;
Zn.removeProperty("matrixdropdown", "renderAs");
Zn.addProperty("matrixdropdown", {
  name: "renderAs",
  default: "auto",
  visible: !1,
  choices: ["auto", "list"]
});
be.getInstance().register("matrixdropdown", mn);
class sh extends mn {
  constructor(t, e, i) {
    super(t, e, i, !1), this.survey = t;
  }
}
Zn.removeProperty("matrixdynamic", "renderAs");
Zn.addProperty("matrixdynamic", {
  name: "renderAs",
  default: "auto",
  visible: !1,
  choices: ["auto", "list"]
});
be.getInstance().register("matrixdynamic", sh);
class Is extends ve {
  constructor(t, e, i) {
    super(t, e, i), this.survey = t, this.controller = i, this.question = e;
  }
  getVisibleRows() {
    return this.question.getRows().filter((t) => t.isVisible);
  }
  generateFlatItem(t, e, i, r) {
    return Lt(this, void 0, void 0, function* () {
      const s = _.getPageAvailableWidth(this.controller);
      this.controller.pushMargins(), this.controller.margins.right = this.controller.paperWidth - this.controller.margins.left - s * _.MULTIPLETEXT_TEXT_PERS;
      const u = new fe(yield _.createBoldTextFlat(t, this.question, this.controller, r.locTitle));
      this.controller.popMargins();
      const a = be.getInstance().create(this.survey, r.editor, this.controller, "text"), l = _.createTextFieldRect({
        xLeft: t.xLeft + s * _.MULTIPLETEXT_TEXT_PERS,
        yTop: t.yTop
      }, this.controller);
      return u.addBrick(...yield a.generateFlatsContent(l)), u;
    });
  }
  generateFlatsContent(t) {
    return Lt(this, void 0, void 0, function* () {
      const e = [], i = _.clone(t), r = this.getVisibleRows();
      for (let s = 0; s < r.length; s++) {
        e.push(new fe());
        let u = i.yTop;
        this.controller.pushMargins();
        for (let a = 0; a < r[s].cells.length; a++) {
          this.controller.pushMargins(), _.setColumnMargins(this.controller, this.question.colCount, a), i.xLeft = this.controller.margins.left;
          const l = yield this.generateFlatItem(i, s, a, r[s].cells[a].item);
          e[e.length - 1].addBrick(l), u = Math.max(u, l.yBot), this.controller.popMargins();
        }
        this.controller.popMargins(), i.xLeft = t.xLeft, i.yTop = u, e[e.length - 1].addBrick(_.createRowlineFlat(i, this.controller)), i.yTop += _.EPSILON, i.yTop += this.controller.unitHeight * Is.ROWS_GAP_SCALE;
      }
      return e;
    });
  }
}
Is.ROWS_GAP_SCALE = 0.195;
be.getInstance().register("multipletext", Is);
class Qc extends Zi {
  constructor(t, e, i) {
    super(t, e, i(e.helperDoc, t, 0, 0)), this.renderFunc = i;
  }
  renderInteractive() {
    return Lt(this, void 0, void 0, function* () {
      yield new Promise((t) => {
        this.renderFunc(this.controller.doc, this.question, this.xLeft, this.yTop), t();
      });
    });
  }
}
Wf("2.5.25", "survey-pdf");
class Vp extends $c {
  _getImageInfo(t) {
    return Lt(this, void 0, void 0, function* () {
      const i = new Image();
      return i.crossOrigin = "anonymous", yield new Promise((s, u) => {
        i.onload = () => {
          const a = document.createElement("canvas"), l = a.getContext("2d");
          a.height = i.naturalHeight, a.width = i.naturalWidth, l?.drawImage(i, 0, 0);
          const c = a.toDataURL();
          s({ data: c, width: i.naturalWidth * 0.75, height: i.naturalHeight * 0.75, id: this.getImageId() });
        }, i.onerror = () => {
          u();
        }, i.src = t;
      });
    });
  }
  getCoverCanvasOptions(t, e, i, r) {
    const s = t / e, u = i / r;
    let a, l;
    return u > s ? (a = i, l = i / s) : (l = r, a = r * s), { canvasWidth: i, canvasHeight: r, imageX: (i - a) / 2, imageY: (r - l) / 2, imageWidth: a, imageHeight: l };
  }
  applyImageFit(t, e, i, r) {
    const s = Object.create(null, {
      applyImageFit: { get: () => super.applyImageFit }
    });
    return Lt(this, void 0, void 0, function* () {
      if (e == "cover")
        try {
          const u = new Image();
          if (!t.width || !t.height || !t.data || !i || !r)
            return t;
          u.src = t.data instanceof Uint8Array ? URL.createObjectURL(new Blob([t.data])) : t.data, yield u.decode();
          const a = this.getCoverCanvasOptions(t.width, t.height, i, r), l = document.createElement("canvas"), c = l.getContext("2d");
          return l.width = a.canvasWidth, l.height = a.canvasHeight, c?.drawImage(u, a.imageX, a.imageY, a.imageWidth, a.imageHeight), { data: l.toDataURL(), width: i, height: r };
        } catch {
          return t;
        }
      else
        return s.applyImageFit.call(this, t, e, i, r);
    });
  }
}
Op(new Vp());
const Kp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BooleanItemBrick: Gl,
  CheckItemBrick: fi,
  CheckboxItemBrick: Yl,
  CompositeBrick: fe,
  CustomBrick: Qc,
  DocController: ji,
  DocOptions: qi,
  DrawCanvas: fa,
  DropdownBrick: $l,
  EmptyBrick: Ps,
  EventHandler: Hl,
  FlatBoolean: Vl,
  FlatCheckbox: va,
  FlatComment: Xl,
  FlatCustomModel: Kl,
  FlatDropdown: Jl,
  FlatExpression: Zl,
  FlatFile: En,
  FlatHTML: ks,
  FlatImage: Ql,
  FlatImagePicker: th,
  FlatMatrix: Vr,
  FlatMatrixDynamic: sh,
  FlatMatrixMultiple: mn,
  FlatMultipleText: Is,
  FlatPanelDynamic: Rs,
  FlatQuestion: ve,
  FlatQuestionDefault: jl,
  FlatRadiogroup: Xr,
  FlatRanking: ih,
  FlatRating: nh,
  FlatRepository: be,
  FlatSelectBase: ma,
  FlatSignaturePad: Gr,
  FlatSlider: rh,
  FlatSurvey: Ei,
  FlatTextbox: Es,
  HTMLBrick: Ul,
  get HorizontalAlign() {
    return Xn;
  },
  ImageBrick: zl,
  LinkBrick: Jn,
  PagePacker: Ts,
  PdfBrick: Zi,
  RadioItemBrick: sn,
  RankingItemBrick: eh,
  RowlineBrick: ga,
  SurveyHelper: _,
  SurveyPDF: kn,
  TextBoldBrick: co,
  TextBrick: We,
  TextFieldBrick: fo,
  TitlePanelBrick: Wl,
  get VerticalAlign() {
    return $n;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  Te as _,
  Kp as s
};
//# sourceMappingURL=survey.pdf-C35MXLTc.js.map
