import { usePluginRealtime as sr, definePlugin as rs } from "/api/plugins/runtime-shim/@selfhelp/shared/plugin-sdk";
import { jsx as s, jsxs as u, Fragment as or } from "/api/plugins/runtime-shim/react/jsx-runtime";
import { useMemo as ae, useState as j, useRef as se, useEffect as R, useCallback as L, forwardRef as ss, createElement as He } from "/api/plugins/runtime-shim/react";
import { useMantineTheme as os, useComputedColorScheme as as, Alert as B, Stack as I, Loader as ce, Text as x, Group as M, Button as J, Box as ar, Paper as ye, Title as Z, TextInput as Pe, Tooltip as W, ActionIcon as oe, Badge as N, Card as le, Menu as P, Table as y, Modal as Te, Code as re, SimpleGrid as ts, Tabs as H, Select as Ar, Checkbox as ns, ScrollArea as is, Anchor as ls } from "/api/plugins/runtime-shim/@mantine/core";
const fe = "/api/plugins/sh2-shp-survey-js", cs = "X-SurveyJs-License-Key";
function Me() {
  if (typeof document > "u")
    return {};
  const e = document.cookie.split("; ").find((r) => r.startsWith("sh_csrf="))?.slice(8);
  return e ? { "X-CSRF-Token": decodeURIComponent(e) } : {};
}
function ds(e) {
  if (!e) return {};
  try {
    return { "X-SurveyJs-Runtime-Config": JSON.stringify(e) };
  } catch {
    return {};
  }
}
async function Se(e) {
  if (!e.ok) {
    let r = null;
    try {
      r = await e.json();
    } catch {
    }
    const o = r?.reason, a = new Error(`HTTP ${e.status}`);
    throw a.status = e.status, a.reason = o, a.body = r, a;
  }
  return await e.json();
}
async function us(e, r, o) {
  const a = new URL(`${fe}/published/${encodeURIComponent(e)}`, window.location.origin);
  if (o)
    for (const [c, d] of Object.entries(o))
      a.searchParams.set(`extraParams[${c}]`, String(d));
  const t = await fetch(a.toString(), {
    credentials: "include",
    headers: {
      Accept: "application/json",
      ...ds(r)
    }
  }), i = t.headers.get(cs);
  if (typeof window < "u") {
    const c = window;
    typeof i == "string" && i !== "" ? c.__SURVEYJS_LICENSE_KEY = i : delete c.__SURVEYJS_LICENSE_KEY;
  }
  return (await Se(t)).data;
}
async function ps(e, r, o) {
  const a = await fetch(`${fe}/published/${encodeURIComponent(e)}/submit`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...Me()
    },
    body: JSON.stringify({ answers: r, enforce: o ?? {} })
  });
  return (await Se(a)).data;
}
async function gs(e, r) {
  const o = new URL(
    `${fe}/published/${encodeURIComponent(e)}/progress`,
    window.location.origin
  );
  r && o.searchParams.set("responseId", r);
  const a = await fetch(o.toString(), {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return (await Se(a)).data;
}
async function bs(e, r) {
  const o = await fetch(`${fe}/published/${encodeURIComponent(e)}/progress`, {
    method: "PUT",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...Me()
    },
    body: JSON.stringify(r)
  });
  return (await Se(o)).data;
}
async function fs(e, r) {
  const o = new URL(
    `${fe}/published/${encodeURIComponent(e)}/progress`,
    window.location.origin
  );
  r && o.searchParams.set("responseId", r);
  const a = await fetch(o.toString(), {
    method: "DELETE",
    credentials: "include",
    headers: { Accept: "application/json", ...Me() }
  });
  if (!a.ok)
    throw new Error(`HTTP ${a.status}`);
}
async function ms(e, r) {
  const o = new URL(
    `${fe}/published/${encodeURIComponent(e)}/edit`,
    window.location.origin
  );
  o.searchParams.set("responseId", r);
  const a = await fetch(o.toString(), {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return a.status === 404 ? null : (await Se(a)).data;
}
async function ys(e, r) {
  const o = new FormData();
  o.append("responseId", r.responseId), o.append("questionName", r.questionName), o.append("file", r.file, r.file.name);
  const a = await fetch(`${fe}/published/${encodeURIComponent(e)}/files`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      ...Me()
    },
    body: o
  });
  return (await Se(a)).data;
}
async function js(e, r) {
  const o = await fetch(
    `${fe}/published/${encodeURIComponent(e)}/files/${r}`,
    {
      method: "DELETE",
      credentials: "include",
      headers: { Accept: "application/json", ...Me() }
    }
  );
  if (!o.ok && o.status !== 404)
    throw new Error(`HTTP ${o.status}`);
}
function Nr() {
  const e = /* @__PURE__ */ new Date(), r = typeof window > "u";
  return {
    startedAt: e.toISOString(),
    locale: !r && typeof navigator < "u" ? navigator.language : "en",
    userAgent: !r && typeof navigator < "u" ? navigator.userAgent : "",
    timeZone: r ? null : hs(),
    screen: !r && typeof window < "u" && window.screen ? {
      width: window.screen.width,
      height: window.screen.height,
      dpr: window.devicePixelRatio ?? 1
    } : null,
    viewport: !r && typeof window < "u" ? { width: window.innerWidth, height: window.innerHeight } : null,
    language: !r && typeof navigator < "u" ? navigator.language : "en"
  };
}
function hs() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? null;
  } catch {
    return null;
  }
}
const vs = /* @__PURE__ */ new Set([
  "resultId",
  "responseId",
  "record_id",
  "record-id"
]);
function xs() {
  if (typeof window > "u") return {};
  const e = {};
  return new URL(window.location.href).searchParams.forEach((o, a) => {
    vs.has(a) || (e[a] = o);
  }), e;
}
const ke = ":__latest";
class ws {
  constructor(r) {
    this.namespace = r;
  }
  namespace;
  save(r) {
    if (!this.isAvailable()) return;
    const o = {
      ...r,
      savedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    try {
      window.localStorage.setItem(this.key(r.responseId), JSON.stringify(o)), window.localStorage.setItem(this.namespace + ke, r.responseId);
    } catch {
    }
  }
  loadLatest() {
    if (!this.isAvailable()) return null;
    const r = window.localStorage.getItem(this.namespace + ke);
    return r ? this.load(r) : null;
  }
  load(r) {
    if (!this.isAvailable()) return null;
    const o = window.localStorage.getItem(this.key(r));
    if (!o) return null;
    try {
      const a = JSON.parse(o);
      if (a && typeof a == "object" && typeof a.responseId == "string")
        return a;
    } catch {
    }
    try {
      window.localStorage.removeItem(this.key(r));
    } catch {
    }
    return null;
  }
  clear(r) {
    if (this.isAvailable())
      try {
        window.localStorage.removeItem(this.key(r)), window.localStorage.getItem(this.namespace + ke) === r && window.localStorage.removeItem(this.namespace + ke);
      } catch {
      }
  }
  clearAll() {
    if (this.isAvailable())
      try {
        const r = `${this.namespace}:`, o = [];
        for (let a = 0; a < window.localStorage.length; a++) {
          const t = window.localStorage.key(a);
          t && t.startsWith(r) && o.push(t);
        }
        o.push(this.namespace + ke);
        for (const a of o)
          window.localStorage.removeItem(a);
      } catch {
      }
  }
  key(r) {
    return `${this.namespace}:${r}`;
  }
  isAvailable() {
    return typeof window < "u" && typeof window.localStorage < "u";
  }
}
class Ss {
  constructor(r) {
    this.options = r;
  }
  options;
  endsAt = null;
  timer = null;
  start() {
    this.endsAt = Date.now() + this.options.durationMs, this.scheduleTick();
  }
  cancel() {
    this.timer !== null && (clearTimeout(this.timer), this.timer = null), this.endsAt = null;
  }
  remainingMs() {
    return this.endsAt === null ? 0 : Math.max(0, this.endsAt - Date.now());
  }
  scheduleTick() {
    const r = this.options.tickMs ?? 1e3;
    this.timer = setTimeout(() => {
      if (this.timer = null, this.remainingMs() <= 0) {
        this.cancel(), this.options.onExpire();
        return;
      }
      this.scheduleTick();
    }, r);
  }
}
const ks = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function Cs(e) {
  return e.replace(/[&<>"']/g, (r) => ks[r] ?? r);
}
function ur(e) {
  let r = Cs(e);
  return r = r.replace(/(^|[^`])`([^`\r\n]+?)`(?!`)/g, "$1<code>$2</code>"), r = r.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), r = r.replace(/(^|[^*])\*([^*]+)\*(?!\*)/g, "$1<em>$2</em>"), r = r.replace(
    /\[([^\]]+)\]\(((?:https?:|mailto:|tel:|\/)[^)]+)\)/g,
    '<a href="$2" rel="noopener noreferrer">$1</a>'
  ), r;
}
function Ts(e) {
  return e ? e.replace(/\r\n/g, `
`).split(/\n{2,}/).map((o) => {
    const a = o.trim();
    return a === "" ? "" : /^(- |\* )/.test(a) ? `<ul>${a.split(/\n/).filter((i) => /^(- |\* )/.test(i)).map((i) => `<li>${ur(i.replace(/^(- |\* )/, ""))}</li>`).join("")}</ul>` : `<p>${ur(a).replace(/\n/g, "<br>")}</p>`;
  }).join("") : "";
}
function zs({
  componentCollection: e,
  richTextEditor: r
}) {
  e.Instance.add({
    name: "rich-text",
    title: "Rich text",
    iconName: "icon-richtext",
    questionJSON: {
      type: "comment",
      rows: 6,
      placeholder: "Type here…"
    },
    onLoaded(o) {
      const a = o;
      a.setPropertyValue("renderAs", "rich-text-editor"), r && a.setPropertyValue("richTextEditorAdapter", "host");
    }
  });
}
const pr = {
  en: "Please watch the entire mandatory video segment before continuing.",
  de: "Bitte schauen Sie das gesamte vorgeschriebene Videosegment, bevor Sie fortfahren.",
  fr: "Veuillez regarder le segment vidéo obligatoire avant de continuer.",
  it: "Guarda l'intero segmento video obbligatorio prima di continuare."
};
function Es({ componentCollection: e, serializer: r }) {
  Ps(r), e.Instance.add({
    name: "video",
    title: "Video reply",
    iconName: "icon-video",
    questionJSON: {
      type: "expression",
      displayStyle: "none"
    },
    onLoaded(o) {
      o.setPropertyValue("renderAs", "sh2-video-question");
    }
  });
}
function Ps(e) {
  Ce(e, "video", { name: "videoUrl:url", category: "general" }), Ce(e, "video", { name: "startTime:number", default: 0, category: "layout" }), Ce(e, "video", { name: "endTime:number", default: 0, category: "layout" }), Ce(e, "video", { name: "autoStart:boolean", default: !1, category: "layout" }), Ce(e, "video", { name: "requiredWatchMessage", default: "", category: "validation" });
}
function Ce(e, r, o) {
  e.getProperty(r, String(o.name).split(":")[0] ?? "") || e.addProperty(r, o);
}
function Ms(e, r, o) {
  const a = String(o.getPropertyValue("videoUrl") ?? "");
  if (!a) {
    r.innerHTML = '<p class="sh2-video-placeholder">No video URL configured.</p>';
    return;
  }
  const t = Number(o.getPropertyValue("startTime") ?? 0), i = Number(o.getPropertyValue("endTime") ?? 0), n = !!(o.getPropertyValue("autoStart") ?? !1), c = String(o.getPropertyValue("requiredWatchMessage") ?? "").trim(), d = !!o.isRequired;
  r.innerHTML = "";
  const l = document.createElement("video");
  l.src = a, l.controls = !o.readOnly, l.preload = "metadata", !o.readOnly && n && (l.autoplay = !0, l.muted = !0), r.appendChild(l);
  const g = [];
  let p = t || 0, m = !d || i <= t;
  l.addEventListener("loadedmetadata", () => {
    if (t > 0)
      try {
        l.currentTime = t;
      } catch {
      }
  }), l.addEventListener("timeupdate", () => {
    const E = l.currentTime;
    if (E > p) {
      const v = g[g.length - 1];
      v && Math.abs(v.end - p) < 0.5 ? v.end = E : g.push({ start: p, end: E }), p = E;
    }
    if (i > t && E >= i) {
      l.pause();
      try {
        l.currentTime = i;
      } catch {
      }
      m = !0, C();
    }
  }), l.addEventListener("ended", () => {
    m = !0, C();
  }), l.addEventListener("seeking", () => {
    p = l.currentTime;
  });
  const b = (e.locale || "en").slice(0, 2), f = c !== "" ? c : pr[b] ?? pr.en ?? "", k = () => {
    !d || m || typeof window < "u" && f && alert(f);
  };
  r.addEventListener("click", k, !0);
  function C() {
    const E = {
      url: a,
      startTime: t,
      endTime: i,
      autoStart: n,
      watched: g,
      completedAt: m ? (/* @__PURE__ */ new Date()).toISOString() : null
    }, v = e;
    typeof v.setValue == "function" ? v.setValue(o.name, E) : e.data = { ...e.data, [o.name]: E };
  }
}
function Is({ componentCollection: e, serializer: r }) {
  Rs(r, "gpx", { name: "maxSampledPoints:number", default: 100, category: "general" }), e.Instance.add({
    name: "gpx",
    title: "GPX track",
    iconName: "icon-gpx",
    questionJSON: {
      type: "file",
      acceptedTypes: ".gpx,application/gpx+xml,application/xml",
      storeDataAsText: !1,
      allowMultiple: !1,
      maxSize: 25 * 1024 * 1024
    },
    onLoaded(o) {
      o.setPropertyValue("renderAs", "sh2-gpx-question");
    }
  });
}
function Rs(e, r, o) {
  e.getProperty(r, String(o.name).split(":")[0] ?? "") || e.addProperty(r, o);
}
function $s(e, r = 100) {
  if (typeof DOMParser > "u")
    return { sampledPoints: [], distanceMeters: 0, pointCount: 0 };
  const o = new DOMParser().parseFromString(e, "application/xml"), a = Array.from(o.getElementsByTagName("trkpt"));
  if (a.length === 0)
    return { sampledPoints: [], distanceMeters: 0, pointCount: 0 };
  const t = a.map((c) => ({
    lat: Number.parseFloat(c.getAttribute("lat") ?? "NaN"),
    lon: Number.parseFloat(c.getAttribute("lon") ?? "NaN"),
    ele: Number.parseFloat(c.getElementsByTagName("ele")[0]?.textContent ?? "NaN")
  })).filter((c) => Number.isFinite(c.lat) && Number.isFinite(c.lon)), i = As(t, r);
  let n = 0;
  for (let c = 1; c < t.length; c++) {
    const d = t[c - 1], l = t[c];
    d && l && (n += Ns(d, l));
  }
  return { sampledPoints: i, distanceMeters: n, pointCount: t.length };
}
function As(e, r) {
  if (e.length <= r) return e.slice();
  const o = (e.length - 1) / (r - 1), a = [];
  for (let t = 0; t < r; t++) {
    const i = Math.round(t * o), n = e[i];
    n !== void 0 && a.push(n);
  }
  return a;
}
function Ns(e, r) {
  const a = Ae(r.lat - e.lat), t = Ae(r.lon - e.lon), i = Ae(e.lat), n = Ae(r.lat), c = Math.sin(a / 2) ** 2 + Math.cos(i) * Math.cos(n) * Math.sin(t / 2) ** 2;
  return 2 * 6371e3 * Math.asin(Math.min(1, Math.sqrt(c)));
}
function Ae(e) {
  return e * (Math.PI / 180);
}
async function Ds(e, r, o) {
  e.innerHTML = "";
  const a = document.createElement("div");
  a.className = "sh2-gpx-question", e.appendChild(a);
  const t = document.createElement("div");
  t.className = "sh2-gpx-question__map", t.style.minHeight = "320px", t.style.height = "320px";
  const i = document.createElement("div");
  if (i.className = "sh2-gpx-question__meta", !r.readOnly) {
    const c = document.createElement("input");
    c.type = "file", c.accept = ".gpx,application/gpx+xml,application/xml", a.appendChild(c), c.addEventListener("change", async () => {
      const d = c.files?.[0];
      if (d)
        try {
          const l = await d.text(), g = $s(l, Number(r.getPropertyValue("maxSampledPoints") ?? 100)), p = await o.uploadFile(r.name, d);
          o.setAnswer({
            url: p.downloadUrl,
            fileId: p.id,
            filename: p.filename,
            sampledPoints: g.sampledPoints,
            distanceMeters: g.distanceMeters,
            pointCount: g.pointCount
          }), gr(t, g), br(i, g);
        } catch (l) {
          i.textContent = `Failed to parse GPX: ${l.message}`;
        }
    });
  }
  a.appendChild(t), a.appendChild(i);
  const n = r.value;
  if (n?.sampledPoints?.length) {
    const c = {
      sampledPoints: n.sampledPoints.map((d) => ({ lat: d.lat, lon: d.lon })),
      distanceMeters: Number(n.distanceMeters ?? 0),
      pointCount: n.sampledPoints.length
    };
    gr(t, c), br(i, c);
  }
}
async function gr(e, r) {
  if (typeof window > "u" || r.sampledPoints.length === 0) return;
  const o = r.sampledPoints[0];
  if (o)
    try {
      const a = await import("./leaflet-src-D753uetq.js").then((n) => n.l), t = a.map(e);
      t.setView([o.lat, o.lon], 13), a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap"
      }).addTo(t);
      const i = a.polyline(
        r.sampledPoints.map((n) => [n.lat, n.lon]),
        { color: "#1976d2", weight: 3 }
      ).addTo(t);
      t.fitBounds(i.getBounds());
    } catch {
      e.textContent = "Leaflet map unavailable.";
    }
}
function br(e, r) {
  const o = r.distanceMeters >= 1e3 ? `${(r.distanceMeters / 1e3).toFixed(2)} km` : `${Math.round(r.distanceMeters)} m`;
  e.innerHTML = `<small>${r.pointCount} GPS points · sampled ${r.sampledPoints.length} · ${o}</small>`;
}
function _s({ componentCollection: e, serializer: r }) {
  Ls(r, "microphone", {
    name: "maxDurationSeconds:number",
    default: 60,
    category: "general"
  }), e.Instance.add({
    name: "microphone",
    title: "Voice recording",
    iconName: "icon-microphone",
    questionJSON: {
      type: "file",
      acceptedTypes: "audio/*",
      storeDataAsText: !1,
      allowMultiple: !1
    },
    onLoaded(o) {
      o.setPropertyValue("renderAs", "sh2-microphone-question");
    }
  });
}
function Ls(e, r, o) {
  e.getProperty(r, String(o.name).split(":")[0] ?? "") || e.addProperty(r, o);
}
async function Fs(e, r, o) {
  e.innerHTML = "";
  const a = document.createElement("div");
  a.className = "sh2-microphone-question", e.appendChild(a);
  const t = document.createElement("div");
  t.className = "sh2-microphone-question__status", t.textContent = "Ready.";
  const i = document.createElement("audio");
  i.controls = !0, i.preload = "metadata";
  const n = document.createElement("button");
  n.type = "button", n.textContent = "Record", n.disabled = r.readOnly;
  const c = document.createElement("button");
  c.type = "button", c.textContent = "Stop", c.disabled = !0, a.appendChild(n), a.appendChild(c), a.appendChild(t), a.appendChild(i);
  let d = null, l = null, g = [], p = 0;
  const m = Math.max(5, Number(r.getPropertyValue("maxDurationSeconds") ?? 60));
  n.addEventListener("click", async () => {
    g = [];
    try {
      l = await navigator.mediaDevices.getUserMedia({ audio: !0 });
    } catch (f) {
      t.textContent = `Microphone unavailable: ${f.message}`;
      return;
    }
    d = new MediaRecorder(l, { mimeType: "audio/webm" }), d.addEventListener("dataavailable", (f) => {
      f.data.size > 0 && g.push(f.data);
    }), d.addEventListener("stop", async () => {
      const f = new Blob(g, { type: d?.mimeType ?? "audio/webm" }), k = Date.now() - p;
      l?.getTracks().forEach((v) => v.stop()), l = null, d = null;
      const C = `recording-${Date.now()}.webm`, E = new File([f], C, { type: f.type });
      try {
        const v = await o.uploadFile(r.name, E);
        o.setAnswer({
          url: v.downloadUrl,
          fileId: v.id,
          filename: v.filename,
          durationMs: k,
          mimeType: f.type
        }), i.src = v.downloadUrl, t.textContent = `Recorded ${(k / 1e3).toFixed(1)} s.`;
      } catch (v) {
        t.textContent = `Upload failed: ${v.message}`;
      }
    }), d.start(), p = Date.now(), n.disabled = !0, c.disabled = !1, t.textContent = "Recording…", m > 0 && window.setTimeout(() => {
      d && d.state === "recording" && d.stop();
    }, m * 1e3);
  }), c.addEventListener("click", () => {
    d && d.state === "recording" && d.stop(), c.disabled = !0, n.disabled = r.readOnly;
  });
  const b = r.value;
  (b?.url ?? b?.downloadUrl) && (i.src = b.downloadUrl ?? b.url);
}
let fr = !1;
async function Dr(e) {
  if (fr)
    return;
  const r = await import("./survey-core-BYbqeafP.js"), { ComponentCollection: o, Serializer: a } = r;
  e.flags.richText && zs({ componentCollection: o, richTextEditor: e.richTextEditor }), e.flags.video && Es({ componentCollection: o, serializer: a }), e.flags.gpx && Is({ componentCollection: o, serializer: a }), e.flags.microphone && _s({ componentCollection: o, serializer: a }), fr = !0;
}
function Os(e, r) {
  e.onAfterRenderQuestion.add((o, a) => {
    const t = a.question, i = t.getType(), n = (c) => {
      const d = o;
      typeof d.setValue == "function" ? d.setValue(t.name, c) : d.data = { ...d.data, [t.name]: c };
    };
    switch (i) {
      case "video":
        Ms(o, a.htmlElement, t);
        break;
      case "gpx":
        Ds(a.htmlElement, t, {
          setAnswer: n,
          uploadFile: (c, d) => r.uploadFile(c, d).then((l) => ({
            id: l.id,
            downloadUrl: l.downloadUrl,
            filename: l.filename
          }))
        });
        break;
      case "microphone":
        Fs(a.htmlElement, t, {
          setAnswer: n,
          uploadFile: (c, d) => r.uploadFile(c, d).then((l) => ({
            id: l.id,
            downloadUrl: l.downloadUrl,
            filename: l.filename
          }))
        });
        break;
    }
  }), e.onUploadFiles.add((o, a) => {
    const t = Array.isArray(a.files) ? a.files : [];
    if (t.length === 0) {
      a.callback("error");
      return;
    }
    const i = r.responseIdProvider(), n = a.question, c = a.name ?? n?.name ?? "file";
    Promise.all(t.map((d) => r.uploadFile(c, d).then((l) => ({ file: d, entry: l })))).then((d) => {
      a.callback(
        "success",
        d.map(({ file: l, entry: g }) => ({
          file: l,
          content: JSON.stringify({
            id: g.id,
            url: g.downloadUrl,
            filename: g.filename,
            mimeType: g.mimeType,
            sizeBytes: g.sizeBytes,
            sha256: g.sha256,
            responseId: i
          })
        }))
      );
    }).catch(() => {
      a.callback("error");
    });
  }), e.onDownloadFile.add((o, a) => {
    const t = a.content, i = typeof t == "string" ? t : t?.url ?? t?.content;
    if (typeof i == "string" && i !== "") {
      a.callback("success", i);
      return;
    }
    a.callback("error");
  }), e.onClearFiles.add((o, a) => {
    const t = a.value, i = [], n = (c) => {
      if (c && typeof c == "object" && "id" in c) {
        const d = c.id;
        typeof d == "number" && Number.isFinite(d) && i.push(d);
      } else if (typeof c == "string")
        try {
          n(JSON.parse(c));
        } catch {
        }
    };
    if (Array.isArray(t) ? t.forEach((c) => n(c)) : n(t), i.length === 0) {
      a.callback("success");
      return;
    }
    Promise.all(i.map((c) => r.deleteFile(c).catch(() => {
    }))).then(() => a.callback("success")).catch(() => a.callback("error"));
  });
}
let _r = null;
function Bs(e) {
  _r = e;
}
function Lr() {
  return _r;
}
var mr = {
  themeName: "default-light",
  iconSet: "v2",
  isLight: !0,
  cssVariables: {}
}, yr = {
  themeName: "default-dark",
  iconSet: "v2",
  isLight: !1,
  cssVariables: {
    "--sjs2-base-unit-size": "8px",
    "--sjs2-base-unit-spacing": "8px",
    "--sjs2-base-unit-radius": "8px",
    "--sjs2-base-unit-border-width": "1px",
    "--sjs2-base-unit-font-size": "8px",
    "--sjs2-base-unit-line-height": "8px",
    "--sjs2-base-unit-opacity": "1%",
    "--sjs2-base-unit-scale": "1%",
    "--sjs2-scale-x000": "calc(var(--sjs2-base-unit-scale) * 0)",
    "--sjs2-scale-x025": "calc(var(--sjs2-base-unit-scale) * 25)",
    "--sjs2-scale-x050": "calc(var(--sjs2-base-unit-scale) * 50)",
    "--sjs2-scale-x075": "calc(var(--sjs2-base-unit-scale) * 75)",
    "--sjs2-scale-x095": "calc(var(--sjs2-base-unit-scale) * 95)",
    "--sjs2-scale-x100": "calc(var(--sjs2-base-unit-scale) * 100)",
    "--sjs2-scale-x200": "calc(var(--sjs2-base-unit-scale) * 200)",
    "--sjs2-size-x000": "calc(var(--sjs2-base-unit-size) * 0)",
    "--sjs2-size-x025": "calc(var(--sjs2-base-unit-size) * 0.25)",
    "--sjs2-size-x050": "calc(var(--sjs2-base-unit-size) * 0.50)",
    "--sjs2-size-x075": "calc(var(--sjs2-base-unit-size) * 0.75)",
    "--sjs2-size-x100": "calc(var(--sjs2-base-unit-size) * 1)",
    "--sjs2-size-x150": "calc(var(--sjs2-base-unit-size) * 1.50)",
    "--sjs2-size-x200": "calc(var(--sjs2-base-unit-size) * 2)",
    "--sjs2-size-x250": "calc(var(--sjs2-base-unit-size) * 2.50)",
    "--sjs2-size-x300": "calc(var(--sjs2-base-unit-size) * 3)",
    "--sjs2-size-x350": "calc(var(--sjs2-base-unit-size) * 3.50)",
    "--sjs2-size-x400": "calc(var(--sjs2-base-unit-size) * 4)",
    "--sjs2-size-x500": "calc(var(--sjs2-base-unit-size) * 5)",
    "--sjs2-size-x600": "calc(var(--sjs2-base-unit-size) * 6)",
    "--sjs2-size-x700": "calc(var(--sjs2-base-unit-size) * 7)",
    "--sjs2-size-x800": "calc(var(--sjs2-base-unit-size) * 8)",
    "--sjs2-size-x900": "calc(var(--sjs2-base-unit-size) * 9)",
    "--sjs2-size-x1000": "calc(var(--sjs2-base-unit-size) * 10)",
    "--sjs2-size-x1100": "calc(var(--sjs2-base-unit-size) * 11)",
    "--sjs2-size-x1200": "calc(var(--sjs2-base-unit-size) * 12)",
    "--sjs2-size-x1300": "calc(var(--sjs2-base-unit-size) * 13)",
    "--sjs2-size-x1400": "calc(var(--sjs2-base-unit-size) * 14)",
    "--sjs2-size-x1500": "calc(var(--sjs2-base-unit-size) * 15)",
    "--sjs2-radius-x000": "calc(var(--sjs2-base-unit-radius) * 0)",
    "--sjs2-radius-x025": "calc(var(--sjs2-base-unit-radius) * 0.25)",
    "--sjs2-radius-x050": "calc(var(--sjs2-base-unit-radius) * 0.50)",
    "--sjs2-radius-x075": "calc(var(--sjs2-base-unit-radius) * 0.75)",
    "--sjs2-radius-x100": "calc(var(--sjs2-base-unit-radius) * 1)",
    "--sjs2-radius-x150": "calc(var(--sjs2-base-unit-radius) * 1.50)",
    "--sjs2-radius-x200": "calc(var(--sjs2-base-unit-radius) * 2)",
    "--sjs2-radius-x250": "calc(var(--sjs2-base-unit-radius) * 2.50)",
    "--sjs2-radius-x300": "calc(var(--sjs2-base-unit-radius) * 3)",
    "--sjs2-radius-x400": "calc(var(--sjs2-base-unit-radius) * 4)",
    "--sjs2-radius-x500": "calc(var(--sjs2-base-unit-radius) * 5)",
    "--sjs2-radius-x600": "calc(var(--sjs2-base-unit-radius) * 6)",
    "--sjs2-radius-x700": "calc(var(--sjs2-base-unit-radius) * 7)",
    "--sjs2-radius-x800": "calc(var(--sjs2-base-unit-radius) * 8)",
    "--sjs2-radius-round": "9999px",
    "--sjs2-spacing-x000": "calc(var(--sjs2-base-unit-spacing) * 0)",
    "--sjs2-spacing-x025": "calc(var(--sjs2-base-unit-spacing) * 0.25)",
    "--sjs2-spacing-x050": "calc(var(--sjs2-base-unit-spacing) * 0.50)",
    "--sjs2-spacing-x075": "calc(var(--sjs2-base-unit-spacing) * 0.75)",
    "--sjs2-spacing-x100": "calc(var(--sjs2-base-unit-spacing) * 1)",
    "--sjs2-spacing-x150": "calc(var(--sjs2-base-unit-spacing) * 1.5)",
    "--sjs2-spacing-x200": "calc(var(--sjs2-base-unit-spacing) * 2)",
    "--sjs2-spacing-x250": "calc(var(--sjs2-base-unit-spacing) * 2.50)",
    "--sjs2-spacing-x300": "calc(var(--sjs2-base-unit-spacing) * 3)",
    "--sjs2-spacing-x400": "calc(var(--sjs2-base-unit-spacing) * 4)",
    "--sjs2-spacing-x500": "calc(var(--sjs2-base-unit-spacing) * 5)",
    "--sjs2-spacing-x550": "calc(var(--sjs2-base-unit-spacing) * 5.5)",
    "--sjs2-spacing-x600": "calc(var(--sjs2-base-unit-spacing) * 6)",
    "--sjs2-spacing-x700": "calc(var(--sjs2-base-unit-spacing) * 7)",
    "--sjs2-spacing-x800": "calc(var(--sjs2-base-unit-spacing) * 8)",
    "--sjs2-spacing-negative-x025": "calc(var(--sjs2-base-unit-spacing) * -0.25)",
    "--sjs2-spacing-negative-x050": "calc(var(--sjs2-base-unit-spacing) * -0.50)",
    "--sjs2-spacing-negative-x075": "calc(var(--sjs2-base-unit-spacing) * -0.75)",
    "--sjs2-spacing-negative-x100": "calc(var(--sjs2-base-unit-spacing) * -1)",
    "--sjs2-spacing-negative-x150": "calc(var(--sjs2-base-unit-spacing) * -1.5)",
    "--sjs2-spacing-negative-x200": "calc(var(--sjs2-base-unit-spacing) * -2)",
    "--sjs2-spacing-negative-x250": "calc(var(--sjs2-base-unit-spacing) * -2.50)",
    "--sjs2-spacing-negative-x300": "calc(var(--sjs2-base-unit-spacing) * -3)",
    "--sjs2-spacing-negative-x400": "calc(var(--sjs2-base-unit-spacing) * -4)",
    "--sjs2-spacing-negative-x500": "calc(var(--sjs2-base-unit-spacing) * -5)",
    "--sjs2-spacing-negative-x600": "calc(var(--sjs2-base-unit-spacing) * -6)",
    "--sjs2-spacing-negative-x700": "calc(var(--sjs2-base-unit-spacing) * -7)",
    "--sjs2-spacing-negative-x800": "calc(var(--sjs2-base-unit-spacing) * -8)",
    "--sjs2-opacity-x000": "calc(var(--sjs2-base-unit-opacity) * 0)",
    "--sjs2-opacity-x005": "calc(var(--sjs2-base-unit-opacity) * 5)",
    "--sjs2-opacity-x010": "calc(var(--sjs2-base-unit-opacity) * 10)",
    "--sjs2-opacity-x015": "calc(var(--sjs2-base-unit-opacity) * 15)",
    "--sjs2-opacity-x020": "calc(var(--sjs2-base-unit-opacity) * 20)",
    "--sjs2-opacity-x025": "calc(var(--sjs2-base-unit-opacity) * 25)",
    "--sjs2-opacity-x030": "calc(var(--sjs2-base-unit-opacity) * 30)",
    "--sjs2-opacity-x035": "calc(var(--sjs2-base-unit-opacity) * 35)",
    "--sjs2-opacity-x040": "calc(var(--sjs2-base-unit-opacity) * 40)",
    "--sjs2-opacity-x045": "calc(var(--sjs2-base-unit-opacity) * 45)",
    "--sjs2-opacity-x050": "calc(var(--sjs2-base-unit-opacity) * 50)",
    "--sjs2-opacity-x055": "calc(var(--sjs2-base-unit-opacity) * 55)",
    "--sjs2-opacity-x060": "calc(var(--sjs2-base-unit-opacity) * 60)",
    "--sjs2-opacity-x065": "calc(var(--sjs2-base-unit-opacity) * 65)",
    "--sjs2-opacity-x070": "calc(var(--sjs2-base-unit-opacity) * 70)",
    "--sjs2-opacity-x075": "calc(var(--sjs2-base-unit-opacity) * 75)",
    "--sjs2-opacity-x080": "calc(var(--sjs2-base-unit-opacity) * 80)",
    "--sjs2-opacity-x085": "calc(var(--sjs2-base-unit-opacity) * 85)",
    "--sjs2-opacity-x090": "calc(var(--sjs2-base-unit-opacity) * 90)",
    "--sjs2-opacity-x095": "calc(var(--sjs2-base-unit-opacity) * 95)",
    "--sjs2-opacity-x100": "calc(var(--sjs2-base-unit-opacity) * 100)",
    "--sjs2-border-width-x000": "calc(var(--sjs2-base-unit-border-width) * 0)",
    "--sjs2-border-width-x100": "calc(var(--sjs2-base-unit-border-width) * 1)",
    "--sjs2-border-width-x200": "calc(var(--sjs2-base-unit-border-width) * 2)",
    "--sjs2-border-width-x400": "calc(var(--sjs2-base-unit-border-width) * 4)",
    "--sjs2-font-weight-regular": "400",
    "--sjs2-font-weight-medium": "500",
    "--sjs2-font-weight-semibold": "600",
    "--sjs2-font-weight-bold": "700",
    "--sjs2-font-size-x000": "calc(var(--sjs2-base-unit-font-size) * 0)",
    "--sjs2-font-size-x100": "calc(var(--sjs2-base-unit-font-size) * 1)",
    "--sjs2-font-size-x150": "calc(var(--sjs2-base-unit-font-size) * 1.5)",
    "--sjs2-font-size-x200": "calc(var(--sjs2-base-unit-font-size) * 2)",
    "--sjs2-font-size-x250": "calc(var(--sjs2-base-unit-font-size) * 2.5)",
    "--sjs2-font-size-x300": "calc(var(--sjs2-base-unit-font-size) * 3)",
    "--sjs2-font-size-x350": "calc(var(--sjs2-base-unit-font-size) * 3.5)",
    "--sjs2-font-size-x400": "calc(var(--sjs2-base-unit-font-size) * 4)",
    "--sjs2-font-size-x500": "calc(var(--sjs2-base-unit-font-size) * 5)",
    "--sjs2-font-size-x600": "calc(var(--sjs2-base-unit-font-size) * 6)",
    "--sjs2-line-height-x000": "calc(var(--sjs2-base-unit-line-height) * 0)",
    "--sjs2-line-height-x100": "calc(var(--sjs2-base-unit-line-height) * 1)",
    "--sjs2-line-height-x200": "calc(var(--sjs2-base-unit-line-height) * 2)",
    "--sjs2-line-height-x300": "calc(var(--sjs2-base-unit-line-height) * 3)",
    "--sjs2-line-height-x400": "calc(var(--sjs2-base-unit-line-height) * 4)",
    "--sjs2-line-height-x500": "calc(var(--sjs2-base-unit-line-height) * 5)",
    "--sjs2-line-height-x600": "calc(var(--sjs2-base-unit-line-height) * 6)",
    "--sjs2-text-case-default": "none",
    "--sjs2-text-case-uppercase": "uppercase",
    "--sjs2-palette-gray-100": "#F5F5F5",
    "--sjs2-palette-gray-150": "#EDEDED",
    "--sjs2-palette-gray-200": "#E5E5E5",
    "--sjs2-palette-gray-250": "#D4D4D4",
    "--sjs2-palette-gray-300": "#CDCDCD",
    "--sjs2-palette-gray-400": "#B3B2B2",
    "--sjs2-palette-gray-500": "#8E8E8E",
    "--sjs2-palette-gray-600": "#5F5E61",
    "--sjs2-palette-gray-700": "#424146",
    "--sjs2-palette-gray-750": "#36353C",
    "--sjs2-palette-gray-800": "#2D2C33",
    "--sjs2-palette-gray-900": "#1C1B20",
    "--sjs2-palette-gray-950": "#161519",
    "--sjs2-palette-gray-999": "#111014",
    "--sjs2-palette-gray-000": "#fff",
    "--sjs2-palette-red-400": "#ff6e84",
    "--sjs2-palette-red-600": "#E50A3E",
    "--sjs2-palette-red-700": "#C30935",
    "--sjs2-palette-green-400": "#15CDAB",
    "--sjs2-palette-green-600": "#19B394",
    "--sjs2-palette-green-700": "#15947A",
    "--sjs2-palette-blue-400": "#66B4FC",
    "--sjs2-palette-blue-600": "#437FD9",
    "--sjs2-palette-blue-700": "#2A6CD0",
    "--sjs2-palette-yellow-400": "#FEC64A",
    "--sjs2-palette-yellow-600": "#FF9814",
    "--sjs2-palette-yellow-700": "#F08700",
    "--sjs2-palette-violet-400": "#C36FF4",
    "--sjs2-palette-violet-600": "#A62CEC",
    "--sjs2-palette-violet-700": "#9614E1",
    "--sjs2-palette-olive-400": "#6FC648",
    "--sjs2-palette-olive-600": "#4FAF24",
    "--sjs2-palette-olive-700": "#41901E",
    "--sjs2-palette-purple-400": "#A190FA",
    "--sjs2-palette-purple-600": "#6E5BD1",
    "--sjs2-palette-purple-700": "#5640C9",
    "--sjs2-palette-indianred-400": "#F9786A",
    "--sjs2-palette-indianred-600": "#AF496B",
    "--sjs2-palette-indianred-700": "#973F5C",
    "--sjs2-layout-control-formbox-small-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-formbox-small-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-formbox-small-gap": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-formbox-medium-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-formbox-medium-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-formbox-medium-gap": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-message-small-spacer": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-message-small-horizontal": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-message-small-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-message-small-gap": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-message-medium-spacer": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-message-medium-horizontal": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-message-medium-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-message-medium-gap": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-small-content-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-input-small-content-horizontal": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-small-swatch-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-input-small-swatch-left": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-small-swatch-right": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-input-small-icon-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-input-small-icon-left": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-input-small-icon-right": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-input-small-label-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-input-small-label-horizontal": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-small-group-gap": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-input-small-limit-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-small-limit-left": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-small-limit-right": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-content-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-content-horizontal": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-input-medium-swatch-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-swatch-left": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-input-medium-swatch-right": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-input-medium-icon-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-icon-left": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-icon-right": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-input-medium-label-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-label-horizontal": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-input-medium-group-gap": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-input-medium-limit-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-limit-left": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-input-medium-limit-right": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-action-xx-small-label-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-xx-small-label-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-xx-small-icon-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-xx-small-icon-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-xx-small-box-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-xx-small-box-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-xx-small-box-gap": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-xx-small-addon-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-xx-small-addon-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-x-small-label-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-x-small-label-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-x-small-icon-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-x-small-icon-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-x-small-box-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-x-small-box-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-x-small-box-gap": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-x-small-addon-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-x-small-addon-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-small-label-horizontal": "var(--sjs2-spacing-x075)",
    "--sjs2-layout-control-action-small-label-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-small-icon-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-small-icon-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-small-box-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-action-small-box-horizontal": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-action-small-box-gap": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-small-addon-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-small-addon-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-medium-label-horizontal": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-action-medium-label-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-medium-icon-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-medium-icon-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-medium-box-vertical": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-action-medium-box-horizontal": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-action-medium-box-gap": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-medium-addon-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-medium-addon-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-large-label-horizontal": "var(--sjs2-spacing-x150)",
    "--sjs2-layout-control-action-large-label-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-large-icon-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-large-icon-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-large-box-vertical": "var(--sjs2-spacing-x200)",
    "--sjs2-layout-control-action-large-box-horizontal": "var(--sjs2-spacing-x200)",
    "--sjs2-layout-control-action-large-box-gap": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-action-large-addon-vertical": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-action-large-addon-horizontal": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-caption-small-box-left": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-small-box-right": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-caption-small-box-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-small-box-gap": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-caption-small-group-gap": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-small-description-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-small-description-top": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-small-description-bottom": "var(--sjs2-spacing-x200)",
    "--sjs2-layout-control-caption-small-caption-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-small-caption-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-control-caption-medium-box-left": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-medium-box-right": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-caption-medium-box-vertical": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-medium-box-gap": "var(--sjs2-spacing-x050)",
    "--sjs2-layout-control-caption-medium-group-gap": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-medium-description-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-medium-description-top": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-medium-description-bottom": "var(--sjs2-spacing-x200)",
    "--sjs2-layout-control-caption-medium-caption-horizontal": "var(--sjs2-spacing-x000)",
    "--sjs2-layout-control-caption-medium-caption-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-container-drop-horizontal": "var(--sjs2-spacing-x100)",
    "--sjs2-layout-container-drop-vertical": "var(--sjs2-spacing-x100)",
    "--sjs2-size-semantic-xx-small": "var(--sjs2-size-x300)",
    "--sjs2-size-semantic-x-small": "var(--sjs2-size-x400)",
    "--sjs2-size-semantic-small": "var(--sjs2-size-x500)",
    "--sjs2-size-semantic-medium": "var(--sjs2-size-x600)",
    "--sjs2-size-semantic-large": "var(--sjs2-size-x700)",
    "--sjs2-size-icon-small": "var(--sjs2-size-x200)",
    "--sjs2-size-icon-medium": "var(--sjs2-size-x300)",
    "--sjs2-size-icon-large": "var(--sjs2-size-x400)",
    "--sjs2-is-panelless": "false",
    "--sjs2-radius-semantic-form": "var(--sjs2-radius-x100)",
    "--sjs2-radius-semantic-form-item": "var(--sjs2-radius-x050)",
    "--sjs2-radius-control-action": "var(--sjs2-radius-semantic-form)",
    "--sjs2-radius-control-action-icon": "var(--sjs2-radius-semantic-form)",
    "--sjs2-radius-control-button": "var(--sjs2-radius-semantic-form)",
    "--sjs2-radius-control-menu-item": "var(--sjs2-radius-semantic-form)",
    "--sjs2-radius-control-drop-item": "var(--sjs2-radius-x100)",
    "--sjs2-radius-control-checkbox": "var(--sjs2-radius-semantic-form-item)",
    "--sjs2-radius-control-rating": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-ranking": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-boolean": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-boolean-item": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-toggle": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-toggle-thumb": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-track": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-track-item": "var(--sjs2-radius-round)",
    "--sjs2-radius-control-track-thumb": "var(--sjs2-radius-round)",
    "--sjs2-radius-container-panel": "var(--sjs2-radius-x150)",
    "--sjs2-radius-container-panel-nested": "var(--sjs2-radius-x100)",
    "--sjs2-radius-container-drop": "var(--sjs2-radius-x200)",
    "--sjs2-radius-container-modal": "var(--sjs2-radius-x300)",
    "--sjs2-radius-container-notifier": "var(--sjs2-radius-x200)",
    "--sjs2-radius-container-tooltip": "var(--sjs2-radius-x050)",
    "--sjs2-radius-container-drag": "var(--sjs2-radius-semantic-form)",
    "--sjs2-typography-font-family-text": "Open Sans",
    "--sjs2-typography-font-family-code": "DM Mono",
    "--sjs2-typography-font-size-small": "var(--sjs2-font-size-x150)",
    "--sjs2-typography-font-size-default": "var(--sjs2-font-size-x200)",
    "--sjs2-typography-font-size-medium": "var(--sjs2-font-size-x300)",
    "--sjs2-typography-font-size-large": "var(--sjs2-font-size-x400)",
    "--sjs2-typography-line-height-small": "var(--sjs2-line-height-x200)",
    "--sjs2-typography-line-height-default": "var(--sjs2-line-height-x300)",
    "--sjs2-typography-line-height-medium": "var(--sjs2-line-height-x400)",
    "--sjs2-typography-line-height-large": "var(--sjs2-line-height-x500)",
    "--sjs2-typography-font-weight-basic": "var(--sjs2-font-weight-regular)",
    "--sjs2-typography-font-weight-strong": "var(--sjs2-font-weight-semibold)",
    "--sjs2-color-project-brand-400": "hsl(from var(--sjs2-color-project-brand-600) h s calc(l * 1.1))",
    "--sjs2-color-project-brand-600": "#19B394",
    "--sjs2-color-project-brand-700": "lch(from var(--sjs2-color-project-brand-600) calc(l * 0.85) c h)",
    "--sjs2-color-project-accent-400": "hsl(from var(--sjs2-color-project-accent-600) h s calc(l * 1.1))",
    "--sjs2-color-project-accent-600": "#19B394",
    "--sjs2-color-project-accent-700": "lch(from var(--sjs2-color-project-accent-600) calc(l * 0.85) c h)",
    "--sjs2-color-utility-body": "var(--sjs2-palette-gray-999)",
    "--sjs2-color-utility-sheet": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-utility-a11y": "rgba(from var(--sjs2-palette-blue-400) r g b / var(--sjs2-opacity-x040))",
    "--sjs2-color-utility-scrollbar": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-utility-overlay": "rgba(from var(--sjs2-palette-gray-700) r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-utility-shadow-surface-default": "rgba(from var(--sjs2-palette-gray-999) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-utility-shadow-surface-hovered": "rgba(from var(--sjs2-palette-gray-999) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-utility-shadow-surface-pressed": "rgba(from var(--sjs2-palette-gray-999) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-utility-shadow-surface-focused": "rgba(from var(--sjs2-palette-gray-999) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-utility-shadow-surface-disabled": "rgba(from var(--sjs2-palette-gray-999) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-utility-shadow-surface-dragging": "rgba(from #004C44 r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-utility-shadow-elevated-default": "rgba(from var(--sjs2-palette-gray-999) r g b / var(--sjs2-opacity-x040))",
    "--sjs2-color-utility-shadow-floating-default": "rgba(from var(--sjs2-palette-gray-999) r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-utility-chrome-toolbox": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-utility-chrome-property-grid": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-utility-chrome-tabs": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-utility-surface-survey": "#161519",
    "--sjs2-color-utility-surface-designer": "#161519",
    "--sjs2-color-utility-surface-presets-manager": "#1c1b200d",
    "--sjs2-color-utility-surface-dashboard": "var(--sjs2-color-utility-surface-survey)",
    "--sjs2-color-utility-surface-preview": "var(--sjs2-color-utility-surface-survey)",
    "--sjs2-color-utility-surface-themes": "var(--sjs2-color-utility-surface-survey)",
    "--sjs2-color-utility-surface-logic": "var(--sjs2-color-utility-surface-designer)",
    "--sjs2-color-utility-surface-json-editor": "var(--sjs2-color-utility-surface-designer)",
    "--sjs2-color-utility-surface-translations": "var(--sjs2-color-utility-surface-designer)",
    "--sjs2-color-utility-surface-embed-survey": "var(--sjs2-color-utility-surface-designer)",
    "--sjs2-color-utility-surface-embed-creator": "var(--sjs2-color-utility-surface-designer)",
    "--sjs2-color-border-basic-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-basic-secondary": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-border-basic-secondary-overlay": "rgba(from var(--sjs2-palette-gray-900) r g b / var(--sjs2-opacity-x020))",
    "--sjs2-color-border-neutral-primary": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-border-neutral-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-brand-primary": "var(--sjs2-color-project-brand-600)",
    "--sjs2-color-border-brand-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-accent-primary": "var(--sjs2-color-project-accent-600)",
    "--sjs2-color-border-accent-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-note-primary": "var(--sjs2-palette-blue-600)",
    "--sjs2-color-border-note-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-positive-primary": "var(--sjs2-palette-green-600)",
    "--sjs2-color-border-positive-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-warning-primary": "var(--sjs2-palette-yellow-600)",
    "--sjs2-color-border-warning-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-alert-primary": "var(--sjs2-palette-red-600)",
    "--sjs2-color-border-alert-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-static-1-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-border-static-2-primary": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-bg-basic-primary": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-bg-basic-secondary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x005))",
    "--sjs2-color-bg-basic-tertiary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-basic-primary-dim": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x005))",
    "--sjs2-color-bg-basic-secondary-dim": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-basic-tertiary-dim": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-basic-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-neutral-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-bg-neutral-secondary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-neutral-tertiary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x000))",
    "--sjs2-color-bg-neutral-primary-dim": "var(--sjs2-palette-gray-100)",
    "--sjs2-color-bg-neutral-secondary-dim": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x020))",
    "--sjs2-color-bg-neutral-tertiary-dim": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-neutral-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-brand-primary": "var(--sjs2-color-project-brand-600)",
    "--sjs2-color-bg-brand-secondary": "rgba(from var(--sjs2-color-project-brand-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-brand-tertiary": "rgba(from var(--sjs2-color-project-brand-600) r g b / var(--sjs2-opacity-x000))",
    "--sjs2-color-bg-brand-primary-dim": "var(--sjs2-color-project-brand-700)",
    "--sjs2-color-bg-brand-secondary-dim": "rgba(from var(--sjs2-color-project-brand-600) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-brand-tertiary-dim": "rgba(from var(--sjs2-color-project-brand-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-brand-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-accent-primary": "var(--sjs2-color-project-accent-600)",
    "--sjs2-color-bg-accent-secondary": "rgba(from var(--sjs2-color-project-accent-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-accent-tertiary": "rgba(from var(--sjs2-color-project-accent-600) r g b / var(--sjs2-opacity-x000))",
    "--sjs2-color-bg-accent-primary-dim": "var(--sjs2-color-project-accent-700)",
    "--sjs2-color-bg-accent-secondary-dim": "rgba(from var(--sjs2-color-project-accent-600) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-accent-tertiary-dim": "rgba(from var(--sjs2-color-project-accent-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-accent-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-note-primary": "var(--sjs2-palette-blue-600)",
    "--sjs2-color-bg-note-secondary": "rgba(from var(--sjs2-palette-blue-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-note-tertiary": "rgba(from var(--sjs2-palette-blue-600) r g b / var(--sjs2-opacity-x000))",
    "--sjs2-color-bg-note-primary-dim": "var(--sjs2-palette-blue-700)",
    "--sjs2-color-bg-note-secondary-dim": "rgba(from var(--sjs2-palette-blue-600) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-note-tertiary-dim": "rgba(from var(--sjs2-palette-blue-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-note-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-positive-primary": "var(--sjs2-palette-green-600)",
    "--sjs2-color-bg-positive-secondary": "rgba(from var(--sjs2-palette-green-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-positive-tertiary": "rgba(from var(--sjs2-palette-green-600) r g b / var(--sjs2-opacity-x000))",
    "--sjs2-color-bg-positive-primary-dim": "var(--sjs2-palette-green-700)",
    "--sjs2-color-bg-positive-secondary-dim": "rgba(from var(--sjs2-palette-green-600) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-positive-tertiary-dim": "rgba(from var(--sjs2-palette-green-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-positive-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-warning-primary": "var(--sjs2-palette-yellow-600)",
    "--sjs2-color-bg-warning-secondary": "rgba(from var(--sjs2-palette-yellow-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-warning-tertiary": "rgba(from var(--sjs2-palette-yellow-600) r g b / var(--sjs2-opacity-x000))",
    "--sjs2-color-bg-warning-primary-dim": "var(--sjs2-palette-yellow-700)",
    "--sjs2-color-bg-warning-secondary-dim": "rgba(from var(--sjs2-palette-yellow-600) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-warning-tertiary-dim": "rgba(from var(--sjs2-palette-yellow-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-warning-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-alert-primary": "var(--sjs2-palette-red-600)",
    "--sjs2-color-bg-alert-secondary": "rgba(from var(--sjs2-palette-red-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-alert-tertiary": "rgba(from var(--sjs2-palette-red-600) r g b / var(--sjs2-opacity-x000))",
    "--sjs2-color-bg-alert-primary-dim": "var(--sjs2-palette-red-700)",
    "--sjs2-color-bg-alert-secondary-dim": "rgba(from var(--sjs2-palette-red-600) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-alert-tertiary-dim": "rgba(from var(--sjs2-palette-red-600) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-alert-primary-disabled": "var(--sjs2-palette-gray-750)",
    "--sjs2-color-bg-static-1-primary": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-bg-static-1-secondary": "rgba(from var(--sjs2-palette-gray-900) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-static-1-primary-dim": "var(--sjs2-palette-gray-700)",
    "--sjs2-color-bg-static-1-secondary-dim": "rgba(from var(--sjs2-palette-gray-900) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-bg-static-2-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-bg-static-2-secondary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x010))",
    "--sjs2-color-bg-static-2-primary-dim": "hsl(from var(--sjs2-palette-gray-100) h s calc(l * 1.1))",
    "--sjs2-color-bg-static-2-secondary-dim": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x015))",
    "--sjs2-color-fg-basic-primary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x085))",
    "--sjs2-color-fg-basic-primary-muted": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x085))",
    "--sjs2-color-fg-basic-secondary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-fg-basic-tertiary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x040))",
    "--sjs2-color-fg-basic-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-neutral-primary": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x085))",
    "--sjs2-color-fg-neutral-primary-muted": "rgba(from var(--sjs2-palette-gray-000) r g b / var(--sjs2-opacity-x085))",
    "--sjs2-color-fg-neutral-on-primary": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-fg-neutral-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-brand-primary": "var(--sjs2-color-project-brand-400)",
    "--sjs2-color-fg-brand-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-fg-brand-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-accent-primary": "var(--sjs2-color-project-accent-400)",
    "--sjs2-color-fg-accent-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-fg-accent-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-note-primary": "var(--sjs2-palette-blue-400)",
    "--sjs2-color-fg-note-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-fg-note-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-positive-primary": "var(--sjs2-palette-green-400)",
    "--sjs2-color-fg-positive-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-fg-positive-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-warning-primary": "var(--sjs2-palette-yellow-400)",
    "--sjs2-color-fg-warning-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-fg-warning-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-alert-primary": "var(--sjs2-palette-red-400)",
    "--sjs2-color-fg-alert-on-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-fg-alert-primary-disabled": "var(--sjs2-palette-gray-300)",
    "--sjs2-color-fg-static-1-primary": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-fg-static-2-primary": "var(--sjs2-palette-gray-900)",
    "--sjs2-color-control-formbox-default-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-formbox-default-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-formbox-disabled-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-formbox-disabled-border": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-formbox-readonly-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-formbox-readonly-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-formbox-focused-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-formbox-focused-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-formbox-invalid-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-formbox-invalid-border": "var(--sjs2-color-border-alert-primary)",
    "--sjs2-color-control-formbox-highlighted-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-formbox-highlighted-border": "var(--sjs2-color-border-basic-primary)",
    "--sjs2-color-control-formbox-design-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-formbox-design-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-formbox-hovered-bg": "var(--sjs2-palette-gray-100)",
    "--sjs2-color-control-formbox-hovered-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-input-default-line": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-input-default-value": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-control-input-default-placeholder": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-input-default-label": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-input-default-limit": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-input-default-icon": "var(--sjs2-color-fg-basic-tertiary)",
    "--sjs2-color-control-input-default-description": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-input-disabled-line": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-input-disabled-value": "var(--sjs2-palette-gray-250)",
    "--sjs2-color-control-input-disabled-placeholder": "var(--sjs2-palette-gray-600)",
    "--sjs2-color-control-input-disabled-label": "var(--sjs2-palette-gray-600)",
    "--sjs2-color-control-input-disabled-limit": "var(--sjs2-palette-gray-600)",
    "--sjs2-color-control-input-disabled-icon": "var(--sjs2-palette-gray-250)",
    "--sjs2-color-control-input-disabled-description": "var(--sjs2-palette-gray-250)",
    "--sjs2-color-control-input-readonly-line": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-input-readonly-value": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-control-input-readonly-placeholder": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-input-readonly-label": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-input-readonly-limit": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-input-readonly-icon": "var(--sjs2-color-fg-basic-tertiary)",
    "--sjs2-color-control-input-readonly-description": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-check-false-default-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-check-false-default-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-check-false-disabled-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-check-false-disabled-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-check-false-readonly-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-check-false-readonly-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-check-false-focused-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-check-false-focused-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-check-false-hovered-bg": "var(--sjs2-color-bg-basic-secondary-dim)",
    "--sjs2-color-control-check-false-hovered-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-check-false-design-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-check-false-design-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-check-true-default-bg": "var(--sjs2-color-bg-brand-primary)",
    "--sjs2-color-control-check-true-default-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-check-true-default-icon": "var(--sjs2-color-fg-static-1-primary)",
    "--sjs2-color-control-check-true-disabled-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-check-true-disabled-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-check-true-disabled-icon": "var(--sjs2-palette-gray-400)",
    "--sjs2-color-control-check-true-readonly-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-check-true-readonly-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-check-true-readonly-icon": "var(--sjs2-palette-gray-400)",
    "--sjs2-color-control-check-true-focused-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-check-true-focused-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-check-true-focused-icon": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-check-true-hovered-bg": "var(--sjs2-color-bg-brand-primary-dim)",
    "--sjs2-color-control-check-true-hovered-border": "var(--sjs2-color-bg-brand-primary-dim)",
    "--sjs2-color-control-check-true-hovered-icon": "var(--sjs2-color-fg-static-1-primary)",
    "--sjs2-color-control-segmented-false-default-bg": "rgba(from var(--sjs2-color-bg-basic-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-segmented-false-default-border": "rgba(from var(--sjs2-color-border-basic-secondary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-segmented-false-default-value": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-segmented-false-disabled-bg": "rgba(from var(--sjs2-color-bg-basic-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-segmented-false-disabled-border": "rgba(from var(--sjs2-color-border-basic-secondary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-segmented-false-disabled-value": "var(--sjs2-palette-gray-250)",
    "--sjs2-color-control-segmented-false-readonly-bg": "rgba(from var(--sjs2-color-bg-basic-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-segmented-false-readonly-border": "rgba(from var(--sjs2-color-border-basic-secondary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-segmented-false-readonly-value": "var(--sjs2-palette-gray-400)",
    "--sjs2-color-control-segmented-false-focused-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-segmented-false-focused-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-segmented-false-focused-value": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-control-segmented-false-hovered-bg": "var(--sjs2-color-bg-basic-secondary-dim)",
    "--sjs2-color-control-segmented-false-hovered-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-segmented-false-hovered-value": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-control-segmented-true-default-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-segmented-true-default-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-segmented-true-default-value": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-segmented-true-disabled-bg": "var(--sjs2-color-bg-basic-primary-dim)",
    "--sjs2-color-control-segmented-true-disabled-border": "rgba(from var(--sjs2-color-border-basic-secondary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-segmented-true-disabled-value": "var(--sjs2-palette-gray-400)",
    "--sjs2-color-control-segmented-true-readonly-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-segmented-true-readonly-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-segmented-true-readonly-value": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-control-segmented-true-focused-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-segmented-true-focused-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-segmented-true-focused-value": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-toggle-false-default-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-toggle-false-default-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-toggle-false-default-thumb": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-toggle-false-disabled-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-toggle-false-disabled-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-toggle-false-disabled-thumb": "var(--sjs2-color-fg-basic-tertiary)",
    "--sjs2-color-control-toggle-false-readonly-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-toggle-false-readonly-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-toggle-false-readonly-thumb": "var(--sjs2-color-fg-basic-tertiary)",
    "--sjs2-color-control-toggle-false-focused-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-toggle-false-focused-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-toggle-false-focused-thumb": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-toggle-false-hovered-bg": "var(--sjs2-palette-gray-800)",
    "--sjs2-color-control-toggle-false-hovered-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-toggle-false-hovered-thumb": "var(--sjs2-color-fg-basic-secondary)",
    "--sjs2-color-control-toggle-true-default-bg": "var(--sjs2-color-bg-brand-primary)",
    "--sjs2-color-control-toggle-true-default-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-toggle-true-default-thumb": "var(--sjs2-color-fg-static-1-primary)",
    "--sjs2-color-control-toggle-true-disabled-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-toggle-true-disabled-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-toggle-true-disabled-thumb": "var(--sjs2-color-fg-static-1-primary)",
    "--sjs2-color-control-toggle-true-readonly-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-toggle-true-readonly-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-toggle-true-readonly-thumb": "var(--sjs2-color-fg-static-1-primary)",
    "--sjs2-color-control-toggle-true-focused-bg": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-toggle-true-focused-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-toggle-true-focused-thumb": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-toggle-true-hovered-bg": "var(--sjs2-color-bg-brand-primary-dim)",
    "--sjs2-color-control-toggle-true-hovered-border": "var(--sjs2-color-border-brand-primary)",
    "--sjs2-color-control-toggle-true-hovered-thumb": "var(--sjs2-color-fg-static-1-primary)",
    "--sjs2-color-control-message-error-bg": "var(--sjs2-color-bg-alert-secondary)",
    "--sjs2-color-control-message-error-icon": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-message-error-text": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-control-message-info-bg": "var(--sjs2-color-bg-note-secondary)",
    "--sjs2-color-control-message-info-icon": "var(--sjs2-color-fg-note-primary)",
    "--sjs2-color-control-message-info-text": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-control-track-default-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-track-default-fg": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-track-default-thumb": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-default-dot": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-track-default-thumb-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-track-disabled-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-track-disabled-fg": "var(--sjs2-color-fg-basic-tertiary)",
    "--sjs2-color-control-track-disabled-thumb": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-disabled-dot": "var(--sjs2-color-fg-state-common-disabled)",
    "--sjs2-color-control-track-disabled-thumb-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-track-readonly-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-track-readonly-fg": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-track-readonly-thumb": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-readonly-dot": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-readonly-thumb-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-track-focused-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-track-focused-fg": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-track-focused-thumb": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-focused-dot": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-track-focused-thumb-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-track-invalid-bg": "var(--sjs2-color-bg-alert-secondary)",
    "--sjs2-color-control-track-invalid-fg": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-track-invalid-thumb": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-invalid-dot": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-track-invalid-thumb-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-track-design-bg": "var(--sjs2-color-bg-basic-secondary)",
    "--sjs2-color-control-track-design-fg": "var(--sjs2-color-fg-basic-tertiary)",
    "--sjs2-color-control-track-design-thumb": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-design-dot": "var(--sjs2-color-bg-basic-primary)",
    "--sjs2-color-control-track-design-thumb-border": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-control-action-alert-primary-default-bg": "var(--sjs2-color-bg-alert-primary)",
    "--sjs2-color-control-action-alert-primary-default-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-primary-default-icon": "var(--sjs2-color-fg-alert-on-primary)",
    "--sjs2-color-control-action-alert-primary-default-label": "var(--sjs2-color-fg-alert-on-primary)",
    "--sjs2-color-control-action-alert-primary-hovered-bg": "var(--sjs2-color-bg-alert-primary-dim)",
    "--sjs2-color-control-action-alert-primary-hovered-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-primary-hovered-icon": "var(--sjs2-color-fg-alert-on-primary)",
    "--sjs2-color-control-action-alert-primary-hovered-label": "var(--sjs2-color-fg-alert-on-primary)",
    "--sjs2-color-control-action-alert-primary-pressed-bg": "var(--sjs2-color-bg-alert-primary)",
    "--sjs2-color-control-action-alert-primary-pressed-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-primary-pressed-icon": "var(--sjs2-color-fg-alert-on-primary)",
    "--sjs2-color-control-action-alert-primary-pressed-label": "var(--sjs2-color-fg-alert-on-primary)",
    "--sjs2-color-control-action-alert-primary-disabled-bg": "var(--sjs2-color-bg-alert-primary-disabled)",
    "--sjs2-color-control-action-alert-primary-disabled-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-primary-disabled-icon": "var(--sjs2-color-fg-alert-primary-disabled)",
    "--sjs2-color-control-action-alert-primary-disabled-label": "var(--sjs2-color-fg-alert-primary-disabled)",
    "--sjs2-color-control-action-alert-secondary-default-bg": "var(--sjs2-color-bg-alert-secondary)",
    "--sjs2-color-control-action-alert-secondary-default-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-secondary-default-icon": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-secondary-default-label": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-secondary-hovered-bg": "var(--sjs2-color-bg-alert-secondary-dim)",
    "--sjs2-color-control-action-alert-secondary-hovered-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-secondary-hovered-icon": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-secondary-hovered-label": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-secondary-pressed-bg": "var(--sjs2-color-bg-alert-secondary)",
    "--sjs2-color-control-action-alert-secondary-pressed-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-secondary-pressed-icon": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-secondary-pressed-label": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-secondary-disabled-bg": "var(--sjs2-color-bg-alert-primary-disabled)",
    "--sjs2-color-control-action-alert-secondary-disabled-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-secondary-disabled-icon": "var(--sjs2-color-fg-alert-primary-disabled)",
    "--sjs2-color-control-action-alert-secondary-disabled-label": "var(--sjs2-color-fg-alert-primary-disabled)",
    "--sjs2-color-control-action-alert-tertiary-default-bg": "var(--sjs2-color-bg-alert-tertiary)",
    "--sjs2-color-control-action-alert-tertiary-default-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-tertiary-default-icon": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-tertiary-default-label": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-tertiary-hovered-bg": "var(--sjs2-color-bg-alert-tertiary-dim)",
    "--sjs2-color-control-action-alert-tertiary-hovered-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-tertiary-hovered-icon": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-tertiary-hovered-label": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-tertiary-pressed-bg": "var(--sjs2-color-bg-alert-tertiary-dim)",
    "--sjs2-color-control-action-alert-tertiary-pressed-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-tertiary-pressed-icon": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-tertiary-pressed-label": "var(--sjs2-color-fg-alert-primary)",
    "--sjs2-color-control-action-alert-tertiary-disabled-bg": "rgba(from var(--sjs2-color-bg-alert-tertiary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-tertiary-disabled-border": "rgba(from var(--sjs2-color-border-alert-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-alert-tertiary-disabled-icon": "var(--sjs2-color-fg-alert-primary-disabled)",
    "--sjs2-color-control-action-alert-tertiary-disabled-label": "var(--sjs2-color-fg-alert-primary-disabled)",
    "--sjs2-color-control-action-brand-primary-default-bg": "var(--sjs2-color-bg-brand-primary)",
    "--sjs2-color-control-action-brand-primary-default-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-primary-default-icon": "var(--sjs2-color-fg-brand-on-primary)",
    "--sjs2-color-control-action-brand-primary-default-label": "var(--sjs2-color-fg-brand-on-primary)",
    "--sjs2-color-control-action-brand-primary-hovered-bg": "var(--sjs2-color-bg-brand-primary-dim)",
    "--sjs2-color-control-action-brand-primary-hovered-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-primary-hovered-icon": "var(--sjs2-color-fg-brand-on-primary)",
    "--sjs2-color-control-action-brand-primary-hovered-label": "var(--sjs2-color-fg-brand-on-primary)",
    "--sjs2-color-control-action-brand-primary-pressed-bg": "var(--sjs2-color-bg-brand-primary)",
    "--sjs2-color-control-action-brand-primary-pressed-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-primary-pressed-icon": "var(--sjs2-color-fg-brand-on-primary)",
    "--sjs2-color-control-action-brand-primary-pressed-label": "var(--sjs2-color-fg-brand-on-primary)",
    "--sjs2-color-control-action-brand-primary-disabled-bg": "var(--sjs2-color-bg-brand-primary-disabled)",
    "--sjs2-color-control-action-brand-primary-disabled-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-primary-disabled-icon": "var(--sjs2-color-fg-brand-primary-disabled)",
    "--sjs2-color-control-action-brand-primary-disabled-label": "var(--sjs2-color-fg-brand-primary-disabled)",
    "--sjs2-color-control-action-brand-secondary-default-bg": "var(--sjs2-color-bg-brand-secondary)",
    "--sjs2-color-control-action-brand-secondary-default-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-secondary-default-icon": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-secondary-default-label": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-secondary-hovered-bg": "var(--sjs2-color-bg-brand-secondary-dim)",
    "--sjs2-color-control-action-brand-secondary-hovered-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-secondary-hovered-icon": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-secondary-hovered-label": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-secondary-pressed-bg": "var(--sjs2-color-bg-brand-secondary)",
    "--sjs2-color-control-action-brand-secondary-pressed-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-secondary-pressed-icon": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-secondary-pressed-label": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-secondary-disabled-bg": "var(--sjs2-color-bg-brand-primary-disabled)",
    "--sjs2-color-control-action-brand-secondary-disabled-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-secondary-disabled-icon": "var(--sjs2-color-fg-brand-primary-disabled)",
    "--sjs2-color-control-action-brand-secondary-disabled-label": "var(--sjs2-color-fg-brand-primary-disabled)",
    "--sjs2-color-control-action-brand-tertiary-default-bg": "var(--sjs2-color-bg-brand-tertiary)",
    "--sjs2-color-control-action-brand-tertiary-default-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-tertiary-default-icon": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-tertiary-default-label": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-tertiary-hovered-bg": "var(--sjs2-color-bg-brand-tertiary-dim)",
    "--sjs2-color-control-action-brand-tertiary-hovered-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-tertiary-hovered-icon": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-tertiary-hovered-label": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-tertiary-pressed-bg": "var(--sjs2-color-bg-brand-tertiary-dim)",
    "--sjs2-color-control-action-brand-tertiary-pressed-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-tertiary-pressed-icon": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-tertiary-pressed-label": "var(--sjs2-color-fg-brand-primary)",
    "--sjs2-color-control-action-brand-tertiary-disabled-bg": "rgba(from var(--sjs2-color-bg-brand-tertiary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-tertiary-disabled-border": "rgba(from var(--sjs2-color-border-brand-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-brand-tertiary-disabled-icon": "var(--sjs2-color-fg-brand-primary-disabled)",
    "--sjs2-color-control-action-brand-tertiary-disabled-label": "var(--sjs2-color-fg-brand-primary-disabled)",
    "--sjs2-color-control-action-accent-primary-default-bg": "var(--sjs2-color-bg-accent-primary)",
    "--sjs2-color-control-action-accent-primary-default-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-primary-default-icon": "var(--sjs2-color-fg-accent-on-primary)",
    "--sjs2-color-control-action-accent-primary-default-label": "var(--sjs2-color-fg-accent-on-primary)",
    "--sjs2-color-control-action-accent-primary-hovered-bg": "var(--sjs2-color-bg-accent-primary-dim)",
    "--sjs2-color-control-action-accent-primary-hovered-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-primary-hovered-icon": "var(--sjs2-color-fg-accent-on-primary)",
    "--sjs2-color-control-action-accent-primary-hovered-label": "var(--sjs2-color-fg-accent-on-primary)",
    "--sjs2-color-control-action-accent-primary-pressed-bg": "var(--sjs2-color-bg-accent-primary)",
    "--sjs2-color-control-action-accent-primary-pressed-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-primary-pressed-icon": "var(--sjs2-color-fg-accent-on-primary)",
    "--sjs2-color-control-action-accent-primary-pressed-label": "var(--sjs2-color-fg-accent-on-primary)",
    "--sjs2-color-control-action-accent-primary-disabled-bg": "var(--sjs2-color-bg-accent-primary-disabled)",
    "--sjs2-color-control-action-accent-primary-disabled-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-primary-disabled-icon": "var(--sjs2-color-fg-accent-primary-disabled)",
    "--sjs2-color-control-action-accent-primary-disabled-label": "var(--sjs2-color-fg-accent-primary-disabled)",
    "--sjs2-color-control-action-accent-secondary-default-bg": "var(--sjs2-color-bg-accent-secondary)",
    "--sjs2-color-control-action-accent-secondary-default-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-secondary-default-icon": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-secondary-default-label": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-secondary-hovered-bg": "var(--sjs2-color-bg-accent-secondary-dim)",
    "--sjs2-color-control-action-accent-secondary-hovered-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-secondary-hovered-icon": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-secondary-hovered-label": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-secondary-pressed-bg": "var(--sjs2-color-bg-accent-secondary)",
    "--sjs2-color-control-action-accent-secondary-pressed-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-secondary-pressed-icon": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-secondary-pressed-label": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-secondary-disabled-bg": "var(--sjs2-color-bg-accent-primary-disabled)",
    "--sjs2-color-control-action-accent-secondary-disabled-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-secondary-disabled-icon": "var(--sjs2-color-fg-accent-primary-disabled)",
    "--sjs2-color-control-action-accent-secondary-disabled-label": "var(--sjs2-color-fg-accent-primary-disabled)",
    "--sjs2-color-control-action-accent-tertiary-default-bg": "var(--sjs2-color-bg-accent-tertiary)",
    "--sjs2-color-control-action-accent-tertiary-default-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-tertiary-default-icon": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-tertiary-default-label": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-tertiary-hovered-bg": "var(--sjs2-color-bg-accent-tertiary-dim)",
    "--sjs2-color-control-action-accent-tertiary-hovered-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-tertiary-hovered-icon": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-tertiary-hovered-label": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-tertiary-pressed-bg": "var(--sjs2-color-bg-accent-tertiary-dim)",
    "--sjs2-color-control-action-accent-tertiary-pressed-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-tertiary-pressed-icon": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-tertiary-pressed-label": "var(--sjs2-color-fg-accent-primary)",
    "--sjs2-color-control-action-accent-tertiary-disabled-bg": "rgba(from var(--sjs2-color-bg-accent-tertiary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-tertiary-disabled-border": "rgba(from var(--sjs2-color-border-accent-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-accent-tertiary-disabled-icon": "var(--sjs2-color-fg-accent-primary-disabled)",
    "--sjs2-color-control-action-accent-tertiary-disabled-label": "var(--sjs2-color-fg-accent-primary-disabled)",
    "--sjs2-color-control-action-neutral-primary-default-bg": "var(--sjs2-color-bg-neutral-primary)",
    "--sjs2-color-control-action-neutral-primary-default-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-primary-default-icon": "var(--sjs2-color-fg-neutral-on-primary)",
    "--sjs2-color-control-action-neutral-primary-default-label": "var(--sjs2-color-fg-neutral-on-primary)",
    "--sjs2-color-control-action-neutral-primary-hovered-bg": "var(--sjs2-color-bg-neutral-primary-dim)",
    "--sjs2-color-control-action-neutral-primary-hovered-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-primary-hovered-icon": "var(--sjs2-color-fg-neutral-on-primary)",
    "--sjs2-color-control-action-neutral-primary-hovered-label": "var(--sjs2-color-fg-neutral-on-primary)",
    "--sjs2-color-control-action-neutral-primary-pressed-bg": "var(--sjs2-color-bg-neutral-primary)",
    "--sjs2-color-control-action-neutral-primary-pressed-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-primary-pressed-icon": "var(--sjs2-color-fg-neutral-on-primary)",
    "--sjs2-color-control-action-neutral-primary-pressed-label": "var(--sjs2-color-fg-neutral-on-primary)",
    "--sjs2-color-control-action-neutral-primary-disabled-bg": "var(--sjs2-color-bg-neutral-primary-disabled)",
    "--sjs2-color-control-action-neutral-primary-disabled-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-primary-disabled-icon": "var(--sjs2-color-fg-neutral-primary-disabled)",
    "--sjs2-color-control-action-neutral-primary-disabled-label": "var(--sjs2-color-fg-neutral-primary-disabled)",
    "--sjs2-color-control-action-neutral-secondary-default-bg": "var(--sjs2-color-bg-neutral-secondary)",
    "--sjs2-color-control-action-neutral-secondary-default-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-secondary-default-icon": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-secondary-default-label": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-secondary-hovered-bg": "var(--sjs2-color-bg-neutral-secondary-dim)",
    "--sjs2-color-control-action-neutral-secondary-hovered-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-secondary-hovered-icon": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-secondary-hovered-label": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-secondary-pressed-bg": "var(--sjs2-color-bg-neutral-secondary)",
    "--sjs2-color-control-action-neutral-secondary-pressed-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-secondary-pressed-icon": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-secondary-pressed-label": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-secondary-disabled-bg": "var(--sjs2-color-bg-neutral-primary-disabled)",
    "--sjs2-color-control-action-neutral-secondary-disabled-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-secondary-disabled-icon": "var(--sjs2-color-fg-neutral-primary-disabled)",
    "--sjs2-color-control-action-neutral-secondary-disabled-label": "var(--sjs2-color-fg-neutral-primary-disabled)",
    "--sjs2-color-control-action-neutral-tertiary-default-bg": "var(--sjs2-color-bg-neutral-tertiary)",
    "--sjs2-color-control-action-neutral-tertiary-default-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-tertiary-default-icon": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-tertiary-default-label": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-tertiary-hovered-bg": "var(--sjs2-color-bg-neutral-tertiary-dim)",
    "--sjs2-color-control-action-neutral-tertiary-hovered-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-tertiary-hovered-icon": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-tertiary-hovered-label": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-tertiary-pressed-bg": "var(--sjs2-color-bg-neutral-tertiary-dim)",
    "--sjs2-color-control-action-neutral-tertiary-pressed-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-tertiary-pressed-icon": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-tertiary-pressed-label": "var(--sjs2-color-fg-neutral-primary)",
    "--sjs2-color-control-action-neutral-tertiary-disabled-bg": "rgba(from var(--sjs2-color-bg-neutral-tertiary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-tertiary-disabled-border": "rgba(from var(--sjs2-color-border-neutral-primary) r g b / var(--sjs2-opacity-hidden))",
    "--sjs2-color-control-action-neutral-tertiary-disabled-icon": "var(--sjs2-color-fg-neutral-primary-disabled)",
    "--sjs2-color-control-action-neutral-tertiary-disabled-label": "var(--sjs2-color-fg-neutral-primary-disabled)",
    "--sjs2-color-data-chart-bg-color-1": "#84CAD4",
    "--sjs2-color-data-chart-bg-color-2": "#3A99FB",
    "--sjs2-color-data-chart-bg-color-3": "#FF6771",
    "--sjs2-color-data-chart-bg-color-4": "#1DB496",
    "--sjs2-color-data-chart-bg-color-5": "#FFC152",
    "--sjs2-color-data-chart-bg-color-6": "#ABA1FF",
    "--sjs2-color-data-chart-bg-color-7": "#7D8CA5",
    "--sjs2-color-data-chart-bg-color-8": "#4FC46C",
    "--sjs2-color-data-chart-bg-color-9": "#E87BCB",
    "--sjs2-color-data-chart-bg-color-10": "#4E6198",
    "--sjs2-color-data-chart-bg-color-1-tinted": "rgba(from #84CAD4 r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-2-tinted": "rgba(from #3A99FB r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-3-tinted": "rgba(from #FF6771 r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-4-tinted": "rgba(from #1DB496 r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-5-tinted": "rgba(from #FFC152 r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-6-tinted": "rgba(from #ABA1FF r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-7-tinted": "rgba(from #7D8CA5 r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-8-tinted": "rgba(from #4FC46C r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-9-tinted": "rgba(from #E87BCB r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-bg-color-10-tinted": "rgba(from #4E6198 r g b / var(--sjs2-opacity-x060))",
    "--sjs2-color-data-chart-fg-on-color-1": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-2": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-3": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-4": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-5": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-6": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-7": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-8": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-9": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-fg-on-color-10": "var(--sjs2-palette-gray-000)",
    "--sjs2-color-data-chart-border-color-1": "#84CAD4",
    "--sjs2-color-data-chart-border-color-2": "#3A99FB",
    "--sjs2-color-data-chart-border-color-3": "#FF6771",
    "--sjs2-color-data-chart-border-color-4": "#1DB496",
    "--sjs2-color-data-chart-border-color-5": "#FFC152",
    "--sjs2-color-data-chart-border-color-6": "#ABA1FF",
    "--sjs2-color-data-chart-border-color-7": "#7D8CA5",
    "--sjs2-color-data-chart-border-color-8": "#4FC46C",
    "--sjs2-color-data-chart-border-color-9": "#E87BCB",
    "--sjs2-color-data-chart-border-color-10": "#4E6198",
    "--sjs2-color-data-grid-fg-label": "var(--sjs2-color-fg-basic-primary)",
    "--sjs2-color-data-grid-border-line": "var(--sjs2-color-border-basic-secondary)",
    "--sjs2-color-data-grid-border-axis": "var(--sjs2-color-border-basic-primary)",
    "--sjs2-opacity-visible": "var(--sjs2-opacity-x100)",
    "--sjs2-opacity-hovered": "var(--sjs2-opacity-x100)",
    "--sjs2-opacity-pressed": "var(--sjs2-opacity-x100)",
    "--sjs2-opacity-disabled": "var(--sjs2-opacity-x025)",
    "--sjs2-opacity-hidden": "var(--sjs2-opacity-x000)",
    "--sjs2-border-width-default": "var(--sjs2-border-width-x100)",
    "--sjs2-border-width-a11y": "var(--sjs2-border-width-x400)",
    "--sjs2-border-spread-form-default": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-form-hovered": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-form-pressed": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-form-focused": "var(--sjs2-border-width-x200)",
    "--sjs2-border-spread-form-highlighted": "var(--sjs2-border-width-x200)",
    "--sjs2-border-spread-form-disabled": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-form-invalid": "var(--sjs2-border-width-x200)",
    "--sjs2-border-spread-form-readonly": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-form-design": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-trigger-default": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-trigger-hovered": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-trigger-pressed": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-trigger-focused": "var(--sjs2-border-width-x200)",
    "--sjs2-border-spread-trigger-disabled": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-trigger-design": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-surface-default": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-surface-hovered": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-surface-pressed": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-surface-focused": "var(--sjs2-border-width-x200)",
    "--sjs2-border-spread-surface-disabled": "var(--sjs2-border-width-x100)",
    "--sjs2-border-spread-surface-dragging": "4px",
    "--sjs2-border-spread-elevated-default": "0px",
    "--sjs2-border-spread-floating-default": "0px",
    "--sjs2-border-blur-form-default": "0px",
    "--sjs2-border-blur-form-hovered": "0px",
    "--sjs2-border-blur-form-pressed": "0px",
    "--sjs2-border-blur-form-focused": "0px",
    "--sjs2-border-blur-form-highlighted": "0px",
    "--sjs2-border-blur-form-disabled": "0px",
    "--sjs2-border-blur-form-invalid": "0px",
    "--sjs2-border-blur-form-readonly": "0px",
    "--sjs2-border-blur-form-design": "0px",
    "--sjs2-border-blur-trigger-default": "0px",
    "--sjs2-border-blur-trigger-hovered": "0px",
    "--sjs2-border-blur-trigger-pressed": "0px",
    "--sjs2-border-blur-trigger-focused": "0px",
    "--sjs2-border-blur-trigger-disabled": "0px",
    "--sjs2-border-blur-trigger-design": "0px",
    "--sjs2-border-blur-surface-default": "4px",
    "--sjs2-border-blur-surface-hovered": "4px",
    "--sjs2-border-blur-surface-pressed": "4px",
    "--sjs2-border-blur-surface-focused": "0px",
    "--sjs2-border-blur-surface-disabled": "0px",
    "--sjs2-border-blur-surface-dragging": "12px",
    "--sjs2-border-blur-elevated-default": "8px",
    "--sjs2-border-blur-floating-default": "12px",
    "--sjs2-border-offset-x-form-default": "0px",
    "--sjs2-border-offset-x-form-hovered": "0px",
    "--sjs2-border-offset-x-form-pressed": "0px",
    "--sjs2-border-offset-x-form-focused": "0px",
    "--sjs2-border-offset-x-form-highlighted": "0px",
    "--sjs2-border-offset-x-form-disabled": "0px",
    "--sjs2-border-offset-x-form-invalid": "0px",
    "--sjs2-border-offset-x-form-readonly": "0px",
    "--sjs2-border-offset-x-form-design": "0px",
    "--sjs2-border-offset-x-trigger-default": "0px",
    "--sjs2-border-offset-x-trigger-hovered": "0px",
    "--sjs2-border-offset-x-trigger-pressed": "0px",
    "--sjs2-border-offset-x-trigger-focused": "0px",
    "--sjs2-border-offset-x-trigger-disabled": "0px",
    "--sjs2-border-offset-x-trigger-design": "0px",
    "--sjs2-border-offset-x-surface-default": "0px",
    "--sjs2-border-offset-x-surface-hovered": "0px",
    "--sjs2-border-offset-x-surface-pressed": "0px",
    "--sjs2-border-offset-x-surface-focused": "0px",
    "--sjs2-border-offset-x-surface-disabled": "0px",
    "--sjs2-border-offset-x-surface-dragging": "0px",
    "--sjs2-border-offset-x-elevated-default": "0px",
    "--sjs2-border-offset-x-floating-default": "0px",
    "--sjs2-border-offset-y-form-default": "0px",
    "--sjs2-border-offset-y-form-hovered": "0px",
    "--sjs2-border-offset-y-form-pressed": "0px",
    "--sjs2-border-offset-y-form-focused": "0px",
    "--sjs2-border-offset-y-form-highlighted": "0px",
    "--sjs2-border-offset-y-form-disabled": "0px",
    "--sjs2-border-offset-y-form-invalid": "0px",
    "--sjs2-border-offset-y-form-readonly": "0px",
    "--sjs2-border-offset-y-form-design": "0px",
    "--sjs2-border-offset-y-trigger-default": "0px",
    "--sjs2-border-offset-y-trigger-hovered": "0px",
    "--sjs2-border-offset-y-trigger-pressed": "0px",
    "--sjs2-border-offset-y-trigger-focused": "0px",
    "--sjs2-border-offset-y-trigger-disabled": "0px",
    "--sjs2-border-offset-y-trigger-design": "0px",
    "--sjs2-border-offset-y-surface-default": "2px",
    "--sjs2-border-offset-y-surface-hovered": "2px",
    "--sjs2-border-offset-y-surface-pressed": "2px",
    "--sjs2-border-offset-y-surface-focused": "0px",
    "--sjs2-border-offset-y-surface-disabled": "0px",
    "--sjs2-border-offset-y-surface-dragging": "6px",
    "--sjs2-border-offset-y-elevated-default": "4px",
    "--sjs2-border-offset-y-floating-default": "6px"
  }
};
const Fr = {
  mode: "light",
  background: "#f8f9fa",
  surface: "#ffffff",
  text: "#212529",
  primary: "#228be6",
  primaryText: "#ffffff",
  border: "#dee2e6",
  surfaceMuted: "#f1f3f5",
  primarySoft: "#d0ebff"
}, Us = {
  mode: "dark",
  background: "#000000",
  surface: "#111111",
  text: "#ffffff",
  primary: "#ffd43b",
  primaryText: "#000000",
  border: "#ffffff",
  surfaceMuted: "#1a1a1a",
  primarySoft: "#fff3bf"
}, Vs = {
  mode: "light",
  background: "#f1f3f5",
  surface: "#ffffff",
  text: "#1c2025",
  primary: "#7950f2",
  primaryText: "#ffffff",
  border: "#e9ecef",
  surfaceMuted: "#f8f9fa",
  primarySoft: "#e5dbff"
}, Js = {
  default: Fr,
  modern: Vs,
  "high-contrast": Us
};
function Or() {
  const e = os(), r = as("light", {
    getInitialValueInEffect: !0
  });
  return ae(() => {
    const o = r === "dark", a = e.primaryColor, t = e.colors[a] ?? e.colors.blue, i = e.colors.gray, n = e.colors.dark;
    return {
      mode: o ? "dark" : "light",
      primary: t[6],
      primaryText: e.white,
      primarySoft: o ? t[8] : t[1],
      background: o ? n[7] : e.white,
      surface: o ? n[6] : e.white,
      surfaceMuted: o ? n[5] : i[0],
      text: o ? n[0] : i[9],
      border: o ? n[4] : i[3]
    };
  }, [r, e]);
}
function Br(e, r) {
  return e === "default" && r ? r : Js[e] ?? r ?? Fr;
}
function Ur(e, r = null) {
  const o = Br(e, r);
  return {
    cssVariables: {
      "--sjs-primary-backcolor": o.primary,
      "--sjs-primary-backcolor-light": o.primarySoft,
      "--sjs-primary-backcolor-dark": o.primary,
      "--sjs-primary-forecolor": o.primaryText,
      "--sjs-general-backcolor": o.background,
      "--sjs-general-backcolor-dark": o.surface,
      "--sjs-general-backcolor-dim": o.surfaceMuted,
      "--sjs-general-backcolor-dim-light": o.surface,
      "--sjs-general-forecolor": o.text,
      "--sjs-general-forecolor-light": o.text,
      "--sjs-border-default": o.border,
      "--sjs-border-light": o.border,
      "--sjs-corner-radius": "8px",
      "--sjs-base-unit": "8px",
      "--sjs-font-family": 'var(--mantine-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)'
    },
    themeName: e,
    isPanelless: !1
  };
}
function Hs(e, r = null) {
  const o = Br(e, r);
  return e === "default" && o.mode === "dark" ? {
    ...yr,
    cssVariables: {
      ...yr.cssVariables,
      "--ctr-font-family": 'var(--mantine-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)'
    }
  } : e === "default" && o.mode === "light" ? {
    ...mr,
    cssVariables: {
      ...mr.cssVariables,
      "--ctr-font-family": 'var(--mantine-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)'
    }
  } : {
    themeName: `mantine-${e}`,
    cssVariables: {
      "--ctr-font-family": 'var(--mantine-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif)',
      "--ctr-surface-background-color": o.surface,
      "--ctr-surface-background-color-muted": o.surfaceMuted,
      "--ctr-surface-background-color-dim": o.background,
      "--ctr-foreground": o.text,
      "--ctr-foreground-disabled": o.border,
      "--ctr-border": o.border,
      "--ctr-border-light": o.border,
      "--ctr-corner-radius-medium": "8px",
      "--ctr-corner-radius-small": "6px",
      "--ctr-button-action-background-color-default": o.primary,
      "--ctr-button-action-background-color-hovered": o.primary,
      "--ctr-button-action-background-color-pressed": o.primary,
      "--ctr-button-action-text-color-default": o.primaryText,
      "--ctr-button-action-text-color-hovered": o.primaryText,
      "--ctr-button-default-background-color-default": o.surface,
      "--ctr-button-default-background-color-hovered": o.surfaceMuted,
      "--ctr-button-default-text-color-default": o.text,
      "--ctr-button-default-border-color-default": o.border,
      "--ctr-toolbox-background-color": o.surface,
      "--ctr-toolbox-tool-background-color-hovered": o.surfaceMuted,
      "--ctr-toolbox-tool-background-color-selected": o.primarySoft,
      "--ctr-toolbox-tool-text-color-default": o.text,
      "--ctr-toolbox-tool-text-color-selected": o.primary,
      "--ctr-property-grid-background-color": o.surface,
      "--ctr-property-grid-header-background-color": o.surfaceMuted,
      "--ctr-property-grid-foreground": o.text,
      "--ctr-element-selected-border-color": o.primary,
      "--ctr-element-selected-background-color": o.primarySoft,
      "--ctr-tab-background-color": o.surface,
      "--ctr-tab-background-color-hovered": o.surfaceMuted,
      "--ctr-tab-foreground": o.text,
      "--ctr-tab-foreground-selected": o.primary,
      "--ctr-tab-indicator-background-color": o.primary
    }
  };
}
async function Ks() {
  const [e, r] = await Promise.all([
    import("./survey-core-BYbqeafP.js"),
    import("./survey-react-ui-BCkGMmg5.js")
  ]);
  return {
    Survey: r.Survey,
    Model: e.Model,
    setLicenseKey: e.setLicenseKey,
    Serializer: e.Serializer
  };
}
function qs({
  style: e,
  section: r,
  styleProps: o,
  cssClass: a
}) {
  const t = r ?? e, i = ae(() => ie(t, "survey-js"), [t]), n = ae(() => ie(t, "survey-js-theme"), [t]), c = ae(() => oo(t), [t]), d = Or(), [l, g] = j(null), [p, m] = j(null), [b, f] = j({ kind: "loading" }), [k, C] = j(null), E = se(null), v = se(null), D = se(null), S = se(null), O = se(!1), V = se(null);
  R(() => {
    let _ = !1;
    return (async () => {
      try {
        const h = await Ks();
        if (_) return;
        eo(h);
        const z = Lr(), F = (G, Y) => {
          if (!z || typeof z.isFeatureEnabled != "function") return Y;
          try {
            return z.isFeatureEnabled(G);
          } catch {
            return Y;
          }
        };
        if (await Dr({
          flags: {
            gpx: F("gpx", !1),
            video: F("video", !1),
            microphone: F("microphone", !1),
            richText: F("rich-text", !0)
          },
          richTextEditor: z?.richTextEditor ?? null
        }), _) return;
        g(h);
      } catch (h) {
        _ || f({ kind: "error", message: `SurveyJS runtime failed to load: ${h.message}` });
      }
    })(), () => {
      _ = !0;
    };
  }, []), R(() => {
    if (!i) return;
    let _ = !1;
    const h = c.urlParams ? xs() : {};
    return us(i, Zs(c), h).then((z) => {
      if (_) return;
      m(z), E.current = new ws(`sh2-shp-survey-js:${z.surveyId}`);
      const F = xr("record_id") ?? xr("responseId");
      if (V.current = F, z.state.lockoutReason && !F) {
        f({
          kind: "locked",
          label: z.runtimeConfig.labelSurveyDone,
          reason: z.state.lockoutReason.reason
        });
        return;
      }
      if (Xs(z.runtimeConfig)) {
        f({
          kind: "not-active",
          label: z.runtimeConfig.labelSurveyNotActive
        });
        return;
      }
      f({ kind: "ready" });
    }).catch((z) => {
      _ || f({ kind: "error", message: `Survey not available: ${z.message}` });
    }), () => {
      _ = !0;
    };
  }, [i, c]), R(() => {
    if (!l || !p || b.kind !== "ready") return;
    let _ = !1;
    const h = new l.Model(p.definition);
    h.applyTheme(
      Ur(
        n ?? p.themeCode ?? "default",
        d
      )
    );
    const z = { ...p.tokens, ...p.extraParams };
    for (const [A, ee] of Object.entries(z))
      h.setVariable(A, ee);
    if (Os(h, {
      surveyKey: p.surveyId,
      responseIdProvider: () => D.current ?? "",
      uploadFile: async (A, ee) => {
        const X = Y();
        return ys(p.surveyId, {
          responseId: X,
          questionName: A,
          file: ee
        });
      },
      deleteFile: async (A) => {
        await js(p.surveyId, A);
      }
    }), c.savePdf && p.runtimeConfig.savePdf) {
      const A = Vr();
      A && l.setLicenseKey(A), ro(h, l);
    }
    Ws(h, {
      published: p,
      config: c,
      draftStore: E.current,
      editModeResponseId: V.current,
      assignResponseId(A) {
        D.current = A;
      },
      captureMeta(A) {
        v.current = A;
      }
    });
    const F = p.runtimeConfig.autoSaveIntervalSeconds * 1e3;
    let G = null;
    return F > 0 && (G = setInterval(() => {
      je(h, "updated");
    }, F)), h.onCurrentPageChanged.add(() => {
      je(h, "updated");
    }), h.onValueChanged.add(() => {
      const A = Y(), ee = v.current;
      E.current?.save({
        responseId: A,
        pageNo: h.currentPageNo,
        data: h.data,
        meta: ee
      });
    }), p.runtimeConfig.timeoutMinutes > 0 && (S.current = new Ss({
      durationMs: p.runtimeConfig.timeoutMinutes * 60 * 1e3,
      onExpire: () => {
        _ || O.current || (f({
          kind: "timed-out",
          label: p.runtimeConfig.labelSurveyNotActive
        }), E.current && D.current && E.current.clear(D.current), fs(p.surveyId, D.current ?? void 0).catch(() => {
        }));
      }
    }), S.current.start()), h.onComplete.add((A) => {
      O.current = !0, f({ kind: "submitting" });
      const ee = Ys(c, D.current, {
        pageNo: A.currentPageNo,
        triggerType: "finished",
        meta: v.current,
        editMode: V.current !== null
      });
      ps(p.surveyId, A.data, ee).then((X) => {
        _ || (O.current = !1, D.current = X.responseId, E.current && E.current.clearAll(), c.oncePerUser || c.oncePerSchedule ? f({
          kind: "locked",
          label: p.runtimeConfig.labelSurveyDone,
          reason: c.oncePerUser ? "already_submitted_once" : "already_submitted_in_window"
        }) : f({
          kind: "submitted",
          responseId: X.responseId,
          submittedAt: X.submittedAt
        }), c.redirectAtEnd && typeof window < "u" && window.location.assign(c.redirectAtEnd));
      }).catch((X) => {
        if (O.current = !1, _) return;
        const te = X.reason ?? "";
        if (te === "already_submitted_once" || te === "already_submitted_in_window") {
          f({
            kind: "locked",
            label: p.runtimeConfig.labelSurveyDone,
            reason: te
          });
          return;
        }
        f({
          kind: "error",
          message: `Survey submission failed: ${X.message}`
        });
      });
    }), C(h), () => {
      _ = !0, G && clearInterval(G), S.current?.cancel(), S.current = null;
    };
    function Y() {
      return D.current === null && (D.current = `R_${Qe(8)}`), D.current;
    }
    async function je(A, ee) {
      if (!p) return;
      const X = Y(), te = v.current, ue = {
        responseId: X,
        pageNo: A.currentPageNo,
        data: A.data,
        meta: te
      };
      E.current?.save(ue);
      try {
        await bs(p.surveyId, {
          responseId: X,
          pageNo: A.currentPageNo,
          payload: {
            data: A.data,
            meta: te,
            triggerType: ee,
            locale: A.locale
          }
        });
      } catch {
      }
    }
  }, [l, p, n, d, c]);
  const T = L(() => {
    !p || !k || (E.current && D.current && E.current.clear(D.current), D.current = null, v.current = Nr(), k.clear(!0, !0));
  }, [p, k]);
  if (!i)
    return /* @__PURE__ */ s(B, { color: "yellow", title: "Configuration error", children: "The SurveyJS style is missing a selected survey on this section." });
  if (b.kind === "error")
    return /* @__PURE__ */ s(B, { color: "red", title: "Survey unavailable", children: b.message });
  if (b.kind === "not-active")
    return Ke(
      b.label,
      "gray"
    );
  if (b.kind === "locked")
    return Ke(
      b.label,
      "blue"
    );
  if (b.kind === "timed-out")
    return Ke(
      b.label,
      "orange"
    );
  if (b.kind === "loading" || !l || !p || !k)
    return /* @__PURE__ */ u(I, { align: "center", gap: "xs", py: "md", children: [
      /* @__PURE__ */ s(ce, { size: "md" }),
      /* @__PURE__ */ s(x, { children: "Loading survey…" })
    ] });
  if (b.kind === "submitting")
    return /* @__PURE__ */ u(I, { align: "center", gap: "xs", py: "md", children: [
      /* @__PURE__ */ s(ce, { size: "md" }),
      /* @__PURE__ */ s(x, { children: "Submitting your response…" })
    ] });
  if (b.kind === "submitted")
    return /* @__PURE__ */ u(I, { children: [
      /* @__PURE__ */ u(B, { color: "green", title: "Response recorded", children: [
        "Thank you — your response was recorded at ",
        b.submittedAt,
        "."
      ] }),
      /* @__PURE__ */ s(M, { children: /* @__PURE__ */ s(J, { variant: "default", onClick: T, children: "Start a new response" }) })
    ] });
  const q = l.Survey;
  return /* @__PURE__ */ s(
    ar,
    {
      className: ["surveyjs-runtime-host", a].filter(Boolean).join(" "),
      ...o,
      children: /* @__PURE__ */ s(q, { model: k })
    }
  );
}
function Ke(e, r) {
  const o = Gs(e);
  return o === null ? null : /* @__PURE__ */ s(B, { color: r, children: /* @__PURE__ */ s(ar, { dangerouslySetInnerHTML: { __html: o } }) });
}
function Gs(e) {
  const r = e?.trim() ?? "";
  if (r === "")
    return null;
  if (r.startsWith("<") && r.endsWith(">"))
    return jr(r) ? r : null;
  const o = Ts(r);
  return jr(o) ? o : null;
}
function jr(e) {
  return e.replace(/<!--[\s\S]*?-->/g, "").replace(/<br\s*\/?>/gi, "").replace(/<[^>]+>/g, "").replace(/&nbsp;/gi, " ").trim() !== "";
}
async function Ws(e, r) {
  const { published: o, config: a, draftStore: t, editModeResponseId: i, assignResponseId: n, captureMeta: c } = r;
  if (c(Nr()), i) {
    const l = await ms(o.surveyId, i).catch(() => null);
    if (l) {
      n(l.responseId), e.data = { ...l.answers };
      return;
    }
  }
  if (a.restartOnRefresh) {
    const l = `R_${Qe(8)}`;
    n(l);
    return;
  }
  let d = null;
  try {
    const l = await gs(
      o.surveyId,
      o.state.draft?.responseId
    );
    l && (d = {
      responseId: l.responseId,
      pageNo: l.pageNo,
      data: Qs(l.payload)
    });
  } catch {
  }
  if (!d && !o.state.completedResponseId && t !== null) {
    const l = t.loadLatest();
    l && (d = { responseId: l.responseId, pageNo: l.pageNo, data: l.data });
  }
  d ? (n(d.responseId), e.data = { ...d.data }, Number.isInteger(d.pageNo) && d.pageNo >= 0 && (e.currentPageNo = d.pageNo)) : n(`R_${Qe(8)}`);
}
function Qs(e) {
  const r = e.data;
  return r && typeof r == "object" && !Array.isArray(r) ? r : {};
}
function Vr() {
  return typeof window > "u" ? "" : window.__SURVEYJS_LICENSE_KEY ?? "";
}
function Ys(e, r, o) {
  const a = e.oncePerSchedule ? Jr(e.startTime, e.endTime) : null;
  return {
    oncePerUser: e.oncePerUser,
    oncePerSchedule: e.oncePerSchedule,
    allowAnonymous: e.allowAnonymous,
    windowStart: a?.start ?? null,
    windowEnd: a?.end ?? null,
    responseId: r ?? void 0,
    editMode: o.editMode ?? !1,
    progress: {
      pageNo: o.pageNo,
      triggerType: o.triggerType,
      meta: o.meta
    }
  };
}
function Jr(e, r) {
  const o = hr(e), a = hr(r);
  if (!o || !a) return null;
  const t = /* @__PURE__ */ new Date(), i = new Date(t);
  i.setHours(o.hour, o.minute, 0, 0);
  const n = new Date(t);
  return n.setHours(a.hour, a.minute, 0, 0), i.getTime() > n.getTime() && (n.getTime() > t.getTime() ? i.setDate(i.getDate() - 1) : n.setDate(n.getDate() + 1)), {
    start: i.toISOString(),
    end: n.toISOString()
  };
}
function hr(e) {
  if (!e || !/^\d{1,2}:\d{2}$/.test(e)) return null;
  const r = e.split(":").map((o) => Number.parseInt(o, 10));
  return {
    hour: r[0] ?? 0,
    minute: r[1] ?? 0
  };
}
function Xs(e) {
  if (!e.startTime || !e.endTime || e.startTime === "00:00" && e.endTime === "00:00") return !1;
  const r = /* @__PURE__ */ new Date(), o = vr(e.startTime), a = vr(e.endTime);
  if (o === null || a === null) return !1;
  const t = r.getHours() * 60 + r.getMinutes();
  return o <= a ? t < o || t > a : t > a && t < o;
}
function vr(e) {
  if (!e || !/^\d{1,2}:\d{2}$/.test(e)) return null;
  const r = e.split(":").map((t) => Number.parseInt(t, 10)), o = r[0] ?? 0, a = r[1] ?? 0;
  return o * 60 + a;
}
function xr(e) {
  if (typeof window > "u") return null;
  const r = new URL(window.location.href).searchParams.get(e);
  return r !== null && r !== "" ? r : null;
}
function Qe(e) {
  const r = new Uint8Array(e);
  if (typeof crypto < "u" && typeof crypto.getRandomValues == "function")
    crypto.getRandomValues(r);
  else
    for (let o = 0; o < e; o++) r[o] = Math.floor(Math.random() * 256);
  return Array.from(r, (o) => o.toString(16).padStart(2, "0")).join("").toUpperCase();
}
function Zs(e) {
  const r = e.oncePerSchedule ? Jr(e.startTime, e.endTime) : null;
  return {
    restartOnRefresh: e.restartOnRefresh,
    autoSaveIntervalSeconds: e.autoSaveIntervalSeconds,
    timeoutMinutes: e.timeoutMinutes,
    savePdf: e.savePdf,
    closeModalAtEnd: e.closeModalAtEnd,
    redirectAtEnd: e.redirectAtEnd,
    urlParams: e.urlParams,
    startTime: e.startTime,
    endTime: e.endTime,
    oncePerUser: e.oncePerUser,
    oncePerSchedule: e.oncePerSchedule,
    ownEntriesOnly: e.ownEntriesOnly,
    allowAnonymous: e.allowAnonymous,
    windowStart: r?.start ?? null,
    windowEnd: r?.end ?? null,
    labelSurveyDone: e.labelSurveyDone,
    labelSurveyNotActive: e.labelSurveyNotActive,
    dataConfig: e.dataConfig,
    dynamicReplacement: e.dynamicReplacement
  };
}
function eo(e) {
  e.Serializer.getProperty("page", "resetOnBack") || e.Serializer.addProperty("page", {
    name: "resetOnBack:boolean",
    default: !1,
    category: "general"
  });
}
function ro(e, r) {
  typeof window > "u" || e.addNavigationItem({
    id: "sh2-save-pdf",
    title: "Save as PDF",
    action: () => {
      so(e, r, Vr());
    }
  });
}
async function so(e, r, o) {
  try {
    o && r.setLicenseKey(o);
    const a = await import("./survey.pdf-C35MXLTc.js").then((c) => c.s), t = e, i = t.jsonObj ?? t.toJSON?.(), n = new a.SurveyPDF(i, void 0);
    n.data = e.data, n.save(`survey-${Date.now()}.pdf`);
  } catch {
    typeof window < "u" && typeof window.print == "function" && window.print();
  }
}
function oo(e) {
  return {
    restartOnRefresh: be(e, "restart_on_refresh", !1),
    autoSaveIntervalSeconds: wr(e, "auto_save_interval", 0),
    timeoutMinutes: wr(e, "timeout", 0),
    savePdf: be(e, "save_pdf", !1),
    closeModalAtEnd: be(e, "close_modal_at_end", !1),
    redirectAtEnd: ie(e, "redirect_at_end"),
    urlParams: be(e, "url_params", !1),
    startTime: ie(e, "start_time"),
    endTime: ie(e, "end_time"),
    oncePerUser: be(e, "once_per_user", !1),
    oncePerSchedule: be(e, "once_per_schedule", !1),
    ownEntriesOnly: be(e, "own_entries_only", !1),
    allowAnonymous: be(e, "allow_anonymous", !0),
    labelSurveyDone: ie(e, "label_survey_done"),
    labelSurveyNotActive: ie(e, "label_survey_not_active"),
    dataConfig: Sr(e, "data_config"),
    dynamicReplacement: Sr(e, "dynamic_replacement")
  };
}
function ie(e, r) {
  const o = e?.fields?.[r] ?? e?.[r];
  if (typeof o == "string" && o.trim() !== "") return o.trim();
  if (typeof o == "number" && Number.isFinite(o)) return String(o);
  if (o && typeof o == "object" && "content" in o && (typeof o.content == "string" || typeof o.content == "number")) {
    const a = o.content;
    return String(a).trim() || null;
  }
  return null;
}
function be(e, r, o) {
  const a = ie(e, r);
  return a === null ? o : a === "1" || a.toLowerCase() === "true";
}
function wr(e, r, o) {
  const a = ie(e, r);
  if (a === null) return o;
  const t = Number.parseInt(a, 10);
  return Number.isFinite(t) ? t : o;
}
function Sr(e, r) {
  const o = ie(e, r);
  if (!o) return {};
  try {
    const a = JSON.parse(o);
    if (a && typeof a == "object" && !Array.isArray(a))
      return a;
  } catch {
  }
  return {};
}
const ao = qs;
function to({ style: e, section: r, styleProps: o, cssClass: a }) {
  const i = no(r ?? e), n = se(null);
  return R(() => {
    if (!i) return;
    let c = null, d = !1;
    return (async () => {
      const g = await import("./leaflet-src-D753uetq.js").then((b) => b.l).catch((b) => (console.warn("[gpxMap] leaflet not available", b), null));
      if (!g || d || !n.current) return;
      const p = g.default ?? g, m = p.map(n.current).setView([46.95, 7.45], 13);
      c = m, p.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap contributors"
      }).addTo(m);
      try {
        const b = await fetch(i).then((k) => k.text()), f = io(b);
        if (f.length > 0) {
          const k = p.polyline(f, { color: "#228be6" }).addTo(m);
          m.fitBounds(k.getBounds());
        }
      } catch (b) {
        console.warn("[gpxMap] failed to load GPX", b);
      }
    })(), () => {
      d = !0, c && c.remove();
    };
  }, [i]), i ? /* @__PURE__ */ s(
    "div",
    {
      ref: n,
      className: a,
      style: { width: "100%", height: 400, borderRadius: 4 },
      ...o
    }
  ) : /* @__PURE__ */ s("div", { role: "alert", style: { padding: 12, border: "1px solid #fab005", borderRadius: 4 }, children: "No GPX URL configured on this section." });
}
function no(e) {
  const r = { ...e ?? {}, ...e?.fields ?? {} };
  for (const o of ["gpx_url", "gpxUrl"]) {
    const a = r[o];
    if (typeof a == "string" && a.trim() !== "") return a.trim();
    if (a && typeof a == "object" && "content" in a && typeof a.content == "string")
      return (a.content ?? "").trim() || null;
  }
  return null;
}
function io(e) {
  const o = new DOMParser().parseFromString(e, "application/xml"), a = [], t = o.getElementsByTagName("trkpt");
  for (let i = 0; i < t.length; i++) {
    const n = Number(t[i]?.getAttribute("lat")), c = Number(t[i]?.getAttribute("lon"));
    !Number.isNaN(n) && !Number.isNaN(c) && a.push([n, c]);
  }
  return a;
}
var lo = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
const U = (e, r, o, a) => {
  const t = ss(
    ({ color: i = "currentColor", size: n = 24, stroke: c = 2, title: d, className: l, children: g, ...p }, m) => He(
      "svg",
      {
        ref: m,
        ...lo[e],
        width: n,
        height: n,
        className: ["tabler-icon", `tabler-icon-${r}`, l].join(" "),
        strokeWidth: c,
        stroke: i,
        ...p
      },
      [
        d && He("title", { key: "svg-title" }, d),
        ...a.map(([b, f]) => He(b, f)),
        ...Array.isArray(g) ? g : [g]
      ]
    )
  );
  return t.displayName = `${o}`, t;
};
const co = [["path", { d: "M3 6a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2", key: "svg-0" }], ["path", { d: "M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10", key: "svg-1" }], ["path", { d: "M10 12l4 0", key: "svg-2" }]], kr = U("outline", "archive", "Archive", co);
const uo = [["path", { d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6", key: "svg-0" }], ["path", { d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10", key: "svg-1" }], ["path", { d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14", key: "svg-2" }], ["path", { d: "M4 20h14", key: "svg-3" }]], ze = U("outline", "chart-bar", "ChartBar", uo);
const po = [["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }]], Hr = U("outline", "check", "Check", po);
const go = [["path", { d: "M15 6l-6 6l6 6", key: "svg-0" }]], bo = U("outline", "chevron-left", "ChevronLeft", go);
const fo = [["path", { d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2", key: "svg-0" }], ["path", { d: "M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2", key: "svg-1" }], ["path", { d: "M9 12l.01 0", key: "svg-2" }], ["path", { d: "M13 12l2 0", key: "svg-3" }], ["path", { d: "M9 16l.01 0", key: "svg-4" }], ["path", { d: "M13 16l2 0", key: "svg-5" }]], mo = U("outline", "clipboard-list", "ClipboardList", fo);
const yo = [["path", { d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", key: "svg-0" }], ["path", { d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", key: "svg-1" }]], Cr = U("outline", "copy", "Copy", yo);
const jo = [["path", { d: "M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }], ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }], ["path", { d: "M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], ho = U("outline", "dots", "Dots", jo);
const vo = [["path", { d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", key: "svg-0" }], ["path", { d: "M7 11l5 5l5 -5", key: "svg-1" }], ["path", { d: "M12 4l0 12", key: "svg-2" }]], Ye = U("outline", "download", "Download", vo);
const xo = [["path", { d: "M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1", key: "svg-0" }], ["path", { d: "M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415", key: "svg-1" }], ["path", { d: "M16 5l3 3", key: "svg-2" }]], _e = U("outline", "edit", "Edit", xo);
const wo = [["path", { d: "M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }], ["path", { d: "M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-1" }], ["path", { d: "M11 6h5a2 2 0 0 1 2 2v8", key: "svg-2" }], ["path", { d: "M14 9l-3 -3l3 -3", key: "svg-3" }], ["path", { d: "M13 18h-5a2 2 0 0 1 -2 -2v-8", key: "svg-4" }], ["path", { d: "M10 15l3 3l-3 3", key: "svg-5" }]], So = U("outline", "git-compare", "GitCompare", wo);
const ko = [["path", { d: "M12 8l0 4l2 2", key: "svg-0" }], ["path", { d: "M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5", key: "svg-1" }]], Fe = U("outline", "history", "History", ko);
const Co = [["path", { d: "M9 6l11 0", key: "svg-0" }], ["path", { d: "M9 12l11 0", key: "svg-1" }], ["path", { d: "M9 18l11 0", key: "svg-2" }], ["path", { d: "M5 6l0 .01", key: "svg-3" }], ["path", { d: "M5 12l0 .01", key: "svg-4" }], ["path", { d: "M5 18l0 .01", key: "svg-5" }]], To = U("outline", "list", "List", Co);
const zo = [["path", { d: "M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4", key: "svg-0" }], ["path", { d: "M13.5 6.5l4 4", key: "svg-1" }]], Xe = U("outline", "pencil", "Pencil", zo);
const Eo = [["path", { d: "M12 5l0 14", key: "svg-0" }], ["path", { d: "M5 12l14 0", key: "svg-1" }]], Po = U("outline", "plus", "Plus", Eo);
const Mo = [["path", { d: "M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4", key: "svg-0" }], ["path", { d: "M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4", key: "svg-1" }]], Ue = U("outline", "refresh", "Refresh", Mo);
const Io = [["path", { d: "M3.06 13a9 9 0 1 0 .49 -4.087", key: "svg-0" }], ["path", { d: "M3 4.001v5h5", key: "svg-1" }], ["path", { d: "M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }]], Ro = U("outline", "restore", "Restore", Io);
const $o = [["path", { d: "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", key: "svg-0" }], ["path", { d: "M21 21l-6 -6", key: "svg-1" }]], Ao = U("outline", "search", "Search", $o);
const No = [["path", { d: "M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065", key: "svg-0" }], ["path", { d: "M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0", key: "svg-1" }]], Ze = U("outline", "settings", "Settings", No);
const Do = [["path", { d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14", key: "svg-0" }], ["path", { d: "M3 10h18", key: "svg-1" }], ["path", { d: "M10 3v18", key: "svg-2" }]], _o = U("outline", "table", "Table", Do);
const Lo = [["path", { d: "M4 7l16 0", key: "svg-0" }], ["path", { d: "M10 11l0 6", key: "svg-1" }], ["path", { d: "M14 11l0 6", key: "svg-2" }], ["path", { d: "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", key: "svg-3" }], ["path", { d: "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", key: "svg-4" }]], er = U("outline", "trash", "Trash", Lo);
const Fo = [["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }], ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4", key: "svg-1" }], ["path", { d: "M15 19l2 2l4 -4", key: "svg-2" }]], Oe = U("outline", "user-check", "UserCheck", Fo);
const Oo = [["path", { d: "M18 6l-12 12", key: "svg-0" }], ["path", { d: "M6 6l12 12", key: "svg-1" }]], Kr = U("outline", "x", "X", Oo), K = "/api/admin/plugins/sh2-shp-survey-js";
function me() {
  if (typeof document > "u")
    return {};
  const e = document.cookie.split("; ").find((r) => r.startsWith("sh_csrf="))?.slice(8);
  return e ? { "X-CSRF-Token": decodeURIComponent(e) } : {};
}
async function Q(e) {
  const r = await e.json().catch(() => ({}));
  if (!e.ok)
    throw new Error(r.error ?? `HTTP ${e.status}`);
  if (r.data === void 0)
    throw new Error("Response missing data envelope.");
  return r.data;
}
async function qr() {
  const e = await fetch(`${K}/surveys`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(e);
}
async function xe(e) {
  const r = await fetch(`${K}/surveys/${e}`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(r);
}
async function Gr(e) {
  const r = await fetch(`${K}/surveys`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...me()
    },
    body: JSON.stringify(e)
  });
  return Q(r);
}
async function Wr(e, r = {}) {
  const o = await fetch(`${K}/surveys/${e}/versions`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...me()
    },
    body: JSON.stringify(r)
  });
  return Q(o);
}
async function Tr(e, r) {
  const o = await fetch(`${K}/surveys/${e}/draft`, {
    method: "PUT",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...me()
    },
    body: JSON.stringify(r)
  });
  return Q(o);
}
async function Bo(e) {
  const r = await fetch(`${K}/surveys/${e}/versions`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(r);
}
async function zr(e, r) {
  const o = await fetch(`${K}/surveys/${e}/versions/${r}`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(o);
}
async function Uo(e, r) {
  const o = await fetch(`${K}/surveys/${e}/versions/${r}/restore`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      ...me()
    }
  });
  return Q(o);
}
async function Ne(e, r) {
  const o = await fetch(`${K}/surveys/${e}/presence`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...me()
    },
    body: JSON.stringify({ state: r })
  });
  return Q(o);
}
async function tr() {
  const e = await fetch(`${K}/license-key`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(e);
}
async function Be(e, r) {
  const o = await fetch(`${K}/surveys/${e}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...me()
    },
    body: JSON.stringify(r)
  });
  return Q(o);
}
async function Vo(e) {
  const r = await fetch(`${K}/surveys/${e}`, {
    method: "DELETE",
    credentials: "include",
    headers: { Accept: "application/json", ...me() }
  });
  return Q(r);
}
async function Jo(e) {
  const r = `${e.name} (copy)`, o = e.definition ?? { pages: [] }, a = await Gr({ name: r, definition: o });
  return Object.keys(o).length > 0 && await Wr(a.id, { definition: o, force: !0 }), a;
}
async function Ho(e, r = {}) {
  const o = new URLSearchParams();
  r.page && o.set("page", String(r.page)), r.limit && o.set("limit", String(r.limit));
  const a = o.toString() ? `?${o.toString()}` : "", t = await fetch(`${K}/surveys/${e}/responses${a}`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(t);
}
async function Ko(e) {
  const r = await fetch(`${K}/surveys/${e}/dashboard`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(r);
}
async function qo(e, r = {}) {
  const o = new URLSearchParams();
  r.limit && o.set("limit", String(r.limit));
  const a = o.toString() ? `?${o.toString()}` : "", t = await fetch(`${K}/surveys/${e}/dashboard/results${a}`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(t);
}
function we(e, r) {
  return `${K}/surveys/${e}/responses/export/${r}`;
}
async function Go(e, r) {
  const o = await fetch(`${K}/surveys/${e}/responses/${encodeURIComponent(r)}`, {
    method: "DELETE",
    credentials: "include",
    headers: { Accept: "application/json", ...me() }
  });
  if (!o.ok)
    throw new Error(`HTTP ${o.status}`);
}
async function Wo(e, r) {
  const o = await fetch(`${K}/surveys/${e}/responses/${r}`, {
    credentials: "include",
    headers: { Accept: "application/json" }
  });
  return Q(o);
}
const Er = "__sh2_shp_survey_js_tiptap_registered__", Qo = [
  { name: "description", format: "sanitized-html" },
  { name: "title", format: "sanitized-html" },
  { name: "html", format: "sanitized-html" },
  { name: "correctAnswerText", format: "sanitized-html" }
];
function Yo(e) {
  return !e || typeof e != "object" ? !1 : e.richTextEditor === !0;
}
function Xo(e, r) {
  if (!e?.PropertyGridEditorCollection)
    return;
  const o = e;
  if (o[Er] === !0)
    return;
  o[Er] = !0;
  const a = r.richTextEditor;
  if (a)
    for (const t of Qo) {
      const i = {
        fit: (n) => n?.name === t.name && (n.type === "string" || n.type === "text" || n.type === void 0),
        getJSON: () => ({
          type: "comment",
          rows: 6
        }),
        onCreated: (n, c, d) => {
          queueMicrotask(() => {
            const g = d?.editorContainer;
            if (!g) return;
            const p = g.querySelector("textarea");
            if (!p) return;
            const m = document.createElement("div");
            m.style.minHeight = "120px", p.style.display = "none", p.parentElement?.insertBefore(m, p);
            const b = {
              format: t.format,
              content: typeof p.value == "string" ? p.value : ""
            }, f = a.mount(m, {
              format: t.format,
              initialValue: b,
              onChange: (C) => {
                p.value = C.content ?? "", p.dispatchEvent(new Event("change", { bubbles: !0 })), p.dispatchEvent(new Event("input", { bubbles: !0 }));
              }
            }), k = new MutationObserver(() => {
              document.body.contains(m) || (f.destroy(), k.disconnect());
            });
            k.observe(document.body, { childList: !0, subtree: !0 });
          });
        }
      };
      e.PropertyGridEditorCollection.register(i);
    }
}
function Ee(e) {
  return e === null || typeof e != "object" ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map((o) => Ee(o)).join(",")}]` : `{${Object.keys(e).sort().map((o) => `${JSON.stringify(o)}:${Ee(e[o])}`).join(",")}}`;
}
function De(e, r) {
  return e.title && typeof e.title == "string" ? e.title : e.name && typeof e.name == "string" ? e.name : `Question #${r + 1}`;
}
function qe(e, r) {
  return e.title && typeof e.title == "string" ? e.title : e.name && typeof e.name == "string" ? e.name : `Page #${r + 1}`;
}
function Pr(e, r) {
  return e.name && typeof e.name == "string" ? `name:${e.name}` : `idx:${r}`;
}
function Mr(e, r) {
  return e.name && typeof e.name == "string" ? `name:${e.name}` : `idx:${r}`;
}
function Ir(e) {
  const r = {};
  for (const o of Object.keys(e))
    o !== "name" && (r[o] = e[o]);
  return Ee(r);
}
function Le(e, r) {
  const o = e ?? {}, a = r ?? {}, t = [], i = Array.isArray(o.pages) ? o.pages : [], n = Array.isArray(a.pages) ? a.pages : [], c = /* @__PURE__ */ new Map();
  i.forEach((m, b) => {
    c.set(Mr(m, b), { page: m, index: b });
  });
  const d = /* @__PURE__ */ new Map();
  n.forEach((m, b) => {
    d.set(Mr(m, b), { page: m, index: b });
  });
  for (const [m, { page: b, index: f }] of c.entries())
    d.has(m) || t.push({
      kind: "removed",
      path: `pages[${f}]`,
      label: qe(b, f),
      detail: "page removed"
    });
  for (const [m, { page: b, index: f }] of d.entries()) {
    const k = c.get(m);
    if (!k) {
      t.push({
        kind: "added",
        path: `pages[${f}]`,
        label: qe(b, f),
        detail: "page added"
      });
      continue;
    }
    k.index !== f && t.push({
      kind: "moved",
      path: `pages[${f}]`,
      label: qe(b, f),
      detail: `page moved from #${k.index + 1} to #${f + 1}`
    }), Zo(k.page, b, f, t);
  }
  const l = /* @__PURE__ */ new Set(["pages"]), g = /* @__PURE__ */ new Set([
    ...Object.keys(o).filter((m) => !l.has(m)),
    ...Object.keys(a).filter((m) => !l.has(m))
  ]);
  for (const m of g) {
    const b = o[m], f = a[m];
    Ee(b) !== Ee(f) && t.push({
      kind: "settings",
      path: `settings.${m}`,
      label: m,
      detail: "setting changed",
      oldValue: b,
      newValue: f
    });
  }
  const p = {
    added: 0,
    removed: 0,
    modified: 0,
    moved: 0,
    settings: 0
  };
  for (const m of t)
    p[m.kind] = (p[m.kind] ?? 0) + 1;
  return {
    entries: t,
    counts: p,
    totalChanges: t.length,
    hasChanges: t.length > 0
  };
}
function Zo(e, r, o, a) {
  const t = Array.isArray(e.elements) ? e.elements : [], i = Array.isArray(r.elements) ? r.elements : [], n = /* @__PURE__ */ new Map();
  t.forEach((d, l) => n.set(Pr(d, l), { question: d, index: l }));
  const c = /* @__PURE__ */ new Map();
  i.forEach((d, l) => c.set(Pr(d, l), { question: d, index: l }));
  for (const [d, { question: l, index: g }] of n.entries())
    c.has(d) || a.push({
      kind: "removed",
      path: `pages[${o}].elements[${g}]`,
      label: De(l, g),
      detail: typeof l.type == "string" ? `(${l.type}) removed` : "question removed"
    });
  for (const [d, { question: l, index: g }] of c.entries()) {
    const p = n.get(d);
    if (!p) {
      a.push({
        kind: "added",
        path: `pages[${o}].elements[${g}]`,
        label: De(l, g),
        detail: typeof l.type == "string" ? `(${l.type}) added` : "question added"
      });
      continue;
    }
    p.index !== g && a.push({
      kind: "moved",
      path: `pages[${o}].elements[${g}]`,
      label: De(l, g),
      detail: `moved from position ${p.index + 1} to ${g + 1}`
    });
    const m = Ir(p.question), b = Ir(l);
    m !== b && a.push({
      kind: "modified",
      path: `pages[${o}].elements[${g}]`,
      label: De(l, g),
      detail: typeof l.type == "string" ? `(${l.type}) modified` : "question modified"
    });
  }
}
function ea(e) {
  if (!e.hasChanges) return "No changes since last publish";
  const r = [];
  return e.counts.added && r.push(`${e.counts.added} added`), e.counts.removed && r.push(`${e.counts.removed} removed`), e.counts.modified && r.push(`${e.counts.modified} modified`), e.counts.moved && r.push(`${e.counts.moved} moved`), e.counts.settings && r.push(`${e.counts.settings} setting(s)`), r.join(", ");
}
async function ra() {
  const e = await import("./survey-creator-react-DJSXYH6o.js");
  return {
    SurveyCreatorComponent: e.SurveyCreatorComponent,
    SurveyCreator: e.SurveyCreator,
    rawModule: e
  };
}
function sa({ surveyId: e, onSurveyChanged: r } = {}) {
  const [o, a] = j(null), [t, i] = j(null), [n, c] = j(null), [d, l] = j(null), [g, p] = j(null), [m, b] = j(null), [f, k] = j(!1), [C, E] = j(!1), [v, D] = j({}), [S, O] = j(!1), [V, T] = j(0), [q, _] = j(!1), [h, z] = j(""), [F, G] = j(!1), Y = se(null), je = Or(), A = t?.themeCode ?? "default", ee = sr({
    pluginId: "sh2-shp-survey-js",
    topic: "surveys/{surveyId}/editing",
    topicParams: e ? { surveyId: String(e) } : {},
    enabled: !!e
  });
  R(() => {
    let w = !1;
    return ra().then(($) => {
      w || a($);
    }).catch(($) => l(`Creator failed to load: ${$.message}`)), () => {
      w = !0;
    };
  }, []), R(() => {
    if (!e) {
      i(null), c(null), O(!1), T(0), p(null);
      return;
    }
    let w = !1;
    return i(null), c(null), O(!1), T(0), p(null), xe(e).then(($) => {
      w || (i($), r?.($));
    }).catch(($) => l(`Failed to load survey: ${$.message}`)), () => {
      w = !0;
    };
  }, [r, e]), R(() => {
    if (!e) return;
    Ne(e, "editing").catch(() => {
    });
    const w = window.setInterval(() => {
      Ne(e, document.hidden ? "idle" : "editing").catch(() => {
      });
    }, 3e4), $ = () => {
      Ne(e, document.hidden ? "idle" : "editing").catch(() => {
      });
    };
    return document.addEventListener("visibilitychange", $), () => {
      window.clearInterval(w), document.removeEventListener("visibilitychange", $), Ne(e, "left").catch(() => {
      });
    };
  }, [e]), R(() => {
    const w = ee.data;
    !w || w.type !== "presence" || !w.userId || !w.userName || !w.at || D(($) => {
      const ne = { ...$ };
      return w.state === "left" ? (delete ne[w.userId], ne) : (ne[w.userId] = {
        name: w.userName,
        at: w.at,
        state: w.state ?? "editing"
      }, ne);
    });
  }, [ee.data]);
  const X = ae(
    () => Object.values(v).filter((w) => Date.now() - new Date(w.at).getTime() < 9e4),
    [v]
  ), te = L(async () => {
    if (!e) return null;
    const w = await xe(e);
    return i(w), r?.(w), w;
  }, [r, e]), ue = L(() => {
    if (!n) return { pages: [] };
    const w = n.JSON;
    return Object.keys(w).length === 0 ? { pages: [] } : w;
  }, [n]), nr = L(() => {
    if (!t) {
      O(!1), T(0);
      return;
    }
    const w = ue(), $ = t.publishedDefinition ?? null, ne = Le($, w);
    O(ne.hasChanges), T(ne.totalChanges);
  }, [ue, t]), Ie = L((w) => {
    const $ = w;
    $.applyTheme?.(Ur(A, je)), $.applyCreatorTheme?.(Hs(A, je));
  }, [je, A]);
  R(() => {
    q && Y.current && (Y.current.focus(), Y.current.select());
  }, [q]);
  const ir = L(() => {
    t && (z(t.name), _(!0));
  }, [t]), Re = L(() => {
    _(!1), z("");
  }, []), lr = L(async () => {
    if (!t) return;
    const w = h.trim();
    if (w === "" || w === t.name) {
      Re();
      return;
    }
    G(!0), p(null);
    try {
      await Be(t.id, { name: w });
      const $ = await xe(t.id);
      i($), r?.($), _(!1), z("");
    } catch ($) {
      p(`Rename failed: ${$.message}`);
    } finally {
      G(!1);
    }
  }, [Re, r, t, h]), Yr = L(async (w = !1) => {
    if (!e || !t) return !1;
    k(!0), p(null);
    try {
      const $ = await Tr(e, {
        definition: ue(),
        expectedDraftHash: t.draftHash,
        force: w
      });
      return i($), r?.($), !0;
    } catch ($) {
      return p(`Save failed: ${$.message}`), !1;
    } finally {
      k(!1);
    }
  }, [ue, r, t, e]), Xr = L(async () => {
    if (!(!e || !t)) {
      E(!0), p(null);
      try {
        await Wr(e, {
          definition: ue(),
          expectedDraftHash: t.draftHash
        }), await te();
      } catch (w) {
        p(`Publish failed: ${w.message}`);
      } finally {
        E(!1);
      }
    }
  }, [ue, te, t, e]);
  if (R(() => {
    if (!o) return;
    let w = !1;
    return (async () => {
      const ne = await tr().catch(() => ({ licenseKey: null, configured: !1 }));
      if (w) return;
      b(!!ne.configured);
      const cr = {
        showLogicTab: !0,
        isAutoSave: !1,
        showThemeTab: !0,
        showJSONEditorTab: !0
      };
      ne.licenseKey && (cr.licenseKey = ne.licenseKey);
      const pe = new o.SurveyCreator(cr);
      Ie(pe), t?.definition && (pe.JSON = t.definition);
      try {
        const de = o.rawModule.Serializer ?? (await import("./survey-core-BYbqeafP.js")).Serializer;
        de && typeof de.addProperty == "function" && !de.getProperty?.("survey", "richTextEditor") && de.addProperty("survey", {
          name: "richTextEditor:boolean",
          category: "general",
          default: !1,
          displayName: "Rich-text editor (Tiptap)"
        });
      } catch {
      }
      const he = Lr();
      he && Yo(t?.definition ?? {}) && Xo(o.rawModule, he);
      const $e = (de, ge) => {
        if (!he || typeof he.isFeatureEnabled != "function") return ge;
        try {
          return he.isFeatureEnabled(de);
        } catch {
          return ge;
        }
      };
      await Dr({
        flags: {
          gpx: $e("gpx", !1),
          video: $e("video", !1),
          microphone: $e("microphone", !1),
          richText: $e("rich-text", !0)
        },
        richTextEditor: he?.richTextEditor ?? null
      });
      const es = async (de, ge) => {
        if (!e) {
          ge(!1);
          return;
        }
        try {
          const ve = pe.JSON;
          await Tr(e, {
            definition: ve,
            expectedDraftHash: t?.draftHash
          }), await te(), ge(!0);
        } catch (ve) {
          p(`Save failed: ${ve.message}`), ge(!1);
        }
      };
      pe.saveSurveyFunc = es;
      const Ve = pe.onModified;
      Ve && typeof Ve.add == "function" && Ve.add(() => {
        const de = pe.JSON, ge = t?.publishedDefinition ?? null, ve = Le(ge, de);
        O(ve.hasChanges), T(ve.totalChanges);
      }), c(pe);
      const Je = pe.JSON, dr = Le(
        t?.publishedDefinition ?? null,
        Je && Object.keys(Je).length > 0 ? Je : { pages: [] }
      );
      O(dr.hasChanges), T(dr.totalChanges);
    })(), () => {
      w = !0;
    };
  }, [Ie, o, te, t, e]), R(() => {
    n && Ie(n);
  }, [Ie, n]), R(() => {
    !n || !t || nr();
  }, [n, nr, t]), d)
    return /* @__PURE__ */ s(B, { color: "red", title: "Survey Designer", children: d });
  if (!e)
    return /* @__PURE__ */ s(
      ye,
      {
        withBorder: !0,
        p: "md",
        style: {
          position: "sticky",
          top: 0,
          zIndex: 20
        },
        children: /* @__PURE__ */ u(I, { gap: "xs", children: [
          /* @__PURE__ */ s(Z, { order: 3, children: "Survey Designer" }),
          /* @__PURE__ */ s(x, { c: "dimmed", children: "Select a survey from the list to start designing." })
        ] })
      }
    );
  if (!o || !n)
    return /* @__PURE__ */ s(
      ye,
      {
        withBorder: !0,
        p: "md",
        style: {
          position: "sticky",
          top: 0,
          zIndex: 20
        },
        children: /* @__PURE__ */ u(I, { align: "center", gap: "xs", children: [
          /* @__PURE__ */ s(ce, { size: "md" }),
          /* @__PURE__ */ s(x, { children: "Loading designer…" })
        ] })
      }
    );
  const Zr = o.SurveyCreatorComponent;
  return /* @__PURE__ */ u(I, { gap: "sm", children: [
    /* @__PURE__ */ s(
      ye,
      {
        withBorder: !0,
        p: "md",
        style: {
          position: "sticky",
          top: 0,
          zIndex: 20
        },
        children: /* @__PURE__ */ u(M, { justify: "space-between", align: "center", wrap: "nowrap", children: [
          /* @__PURE__ */ u(I, { gap: 2, style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ u(M, { gap: "xs", wrap: "nowrap", children: [
              q ? /* @__PURE__ */ u(M, { gap: "xs", wrap: "nowrap", style: { flex: 1 }, children: [
                /* @__PURE__ */ s(
                  Pe,
                  {
                    ref: Y,
                    size: "sm",
                    value: h,
                    onChange: (w) => z(w.currentTarget.value),
                    onKeyDown: (w) => {
                      w.key === "Enter" ? (w.preventDefault(), lr()) : w.key === "Escape" && (w.preventDefault(), Re());
                    },
                    disabled: F,
                    style: { flex: 1, maxWidth: 360 },
                    "aria-label": "Rename survey"
                  }
                ),
                /* @__PURE__ */ s(W, { label: "Save (Enter)", children: /* @__PURE__ */ s(
                  oe,
                  {
                    size: "sm",
                    color: "green",
                    variant: "filled",
                    onClick: () => {
                      lr();
                    },
                    loading: F,
                    "aria-label": "Save rename",
                    children: /* @__PURE__ */ s(Hr, { size: 14 })
                  }
                ) }),
                /* @__PURE__ */ s(W, { label: "Cancel (Esc)", children: /* @__PURE__ */ s(
                  oe,
                  {
                    size: "sm",
                    variant: "subtle",
                    onClick: Re,
                    disabled: F,
                    "aria-label": "Cancel rename",
                    children: /* @__PURE__ */ s(Kr, { size: 14 })
                  }
                ) })
              ] }) : /* @__PURE__ */ u(or, { children: [
                /* @__PURE__ */ s(Z, { order: 4, onDoubleClick: ir, title: "Double-click to rename", children: t?.name ?? "Survey Designer" }),
                /* @__PURE__ */ s(W, { label: "Rename (double-click title)", children: /* @__PURE__ */ s(oe, { size: "sm", variant: "subtle", onClick: ir, "aria-label": "Rename survey", children: /* @__PURE__ */ s(_e, { size: 14 }) }) })
              ] }),
              t?.currentRevision ? /* @__PURE__ */ u(N, { color: "green", variant: "light", children: [
                "Published v",
                t.currentRevision
              ] }) : /* @__PURE__ */ s(N, { color: "yellow", variant: "light", children: "Draft only" }),
              S && /* @__PURE__ */ s(W, { label: "Unpublished changes vs the last published version", children: /* @__PURE__ */ u(N, { color: "orange", variant: "filled", children: [
                V,
                " unpublished ",
                V === 1 ? "change" : "changes"
              ] }) })
            ] }),
            /* @__PURE__ */ u(x, { size: "sm", c: "dimmed", children: [
              "Save drafts while editing. Publish when the survey is ready for respondents.",
              !S && t?.currentRevision && " Publish is disabled until you make changes."
            ] })
          ] }),
          /* @__PURE__ */ u(M, { gap: "xs", wrap: "nowrap", children: [
            /* @__PURE__ */ s(J, { variant: "default", onClick: () => {
              Yr();
            }, loading: f, children: "Save draft" }),
            /* @__PURE__ */ s(
              W,
              {
                label: S ? `Publish a new revision (${V} change${V === 1 ? "" : "s"})` : "No changes to publish",
                children: /* @__PURE__ */ u(
                  J,
                  {
                    color: "orange",
                    onClick: () => {
                      Xr();
                    },
                    loading: C,
                    disabled: !S,
                    children: [
                      "Publish",
                      S ? ` (${V})` : ""
                    ]
                  }
                )
              }
            )
          ] })
        ] })
      }
    ),
    X.length > 0 && /* @__PURE__ */ u(B, { color: "yellow", title: "Multiple editors are working on this survey", children: [
      X.map((w) => w.name).join(", "),
      " also has this Designer open. Save/publish conflicts are checked before overwriting the draft."
    ] }),
    ee.error && /* @__PURE__ */ s(B, { color: "yellow", title: "Editing presence unavailable", children: "Realtime editing status is disconnected. Draft conflict checks still protect saves." }),
    m === !1 && /* @__PURE__ */ u(B, { color: "yellow", title: "SurveyJS license key not configured", children: [
      "Editing and publishing still work. SurveyJS will show its upstream watermark until",
      /* @__PURE__ */ s("code", { children: "SURVEYJS_LICENSE_KEY" }),
      " is configured in the backend environment."
    ] }),
    g && /* @__PURE__ */ s(B, { color: "red", title: "Survey Designer", children: g }),
    /* @__PURE__ */ s(ye, { withBorder: !0, p: 0, className: "surveyjs-creator-shell", children: /* @__PURE__ */ s(Zr, { creator: n }) })
  ] });
}
function oa({ surveyId: e } = {}) {
  const [r, o] = j(null), [a, t] = j(0), [i, n] = j(null), [c, d] = j(!1), [l, g] = j(null), [p, m] = j(""), [b, f] = j(null), k = sr({
    pluginId: "sh2-shp-survey-js",
    topic: "surveys/{surveyId}/responses",
    topicParams: e ? { surveyId: String(e) } : {},
    enabled: !!e
  }), C = L(async () => {
    if (e) {
      d(!0), n(null);
      try {
        const S = await Ho(e, { page: 1, limit: 200 });
        o(S.items), t(S.total), g(null);
      } catch (S) {
        n(S.message);
      } finally {
        d(!1);
      }
    }
  }, [e]);
  R(() => {
    (k.data?.type === "response_submitted" || k.data?.type === "response_deleted") && C();
  }, [k.data, C]);
  const E = L(async () => {
    if (!(!e || !b)) {
      d(!0);
      try {
        await Go(e, b.responseId), f(null), await C();
      } catch (S) {
        n(S.message);
      } finally {
        d(!1);
      }
    }
  }, [b, C, e]);
  R(() => {
    C();
  }, [C]);
  const v = ae(
    () => {
      const S = (r ?? []).slice().sort(
        (V, T) => new Date(T.startedAt).getTime() - new Date(V.startedAt).getTime()
      );
      if (p.trim() === "") return S;
      const O = p.trim().toLowerCase();
      return S.filter((V) => [
        V.responseId,
        V.status,
        V.userId === null ? "anon" : String(V.userId),
        String(V.revision)
      ].join(" ").toLowerCase().includes(O));
    },
    [p, r]
  ), D = ae(() => e ? {
    csv: we(e, "csv"),
    xlsx: we(e, "xlsx"),
    json: we(e, "json")
  } : null, [e]);
  return e ? i ? /* @__PURE__ */ s(B, { color: "red", title: "Could not load responses", children: i }) : r === null ? /* @__PURE__ */ u(M, { gap: "xs", justify: "center", py: "md", children: [
    /* @__PURE__ */ s(ce, { size: "sm" }),
    /* @__PURE__ */ s(x, { children: "Loading responses…" })
  ] }) : /* @__PURE__ */ u(I, { gap: "sm", children: [
    /* @__PURE__ */ u(M, { justify: "space-between", children: [
      /* @__PURE__ */ u(M, { gap: "xs", children: [
        /* @__PURE__ */ s(Z, { order: 4, children: "Responses" }),
        /* @__PURE__ */ u(N, { variant: "light", children: [
          a,
          " total"
        ] }),
        k.error ? /* @__PURE__ */ s(N, { color: "yellow", variant: "light", children: "Realtime offline" }) : /* @__PURE__ */ s(N, { color: "green", variant: "light", children: "Realtime live" })
      ] }),
      /* @__PURE__ */ u(M, { gap: "xs", children: [
        /* @__PURE__ */ s(
          Pe,
          {
            leftSection: /* @__PURE__ */ s(Ao, { size: 14 }),
            placeholder: "Filter responses…",
            value: p,
            onChange: (S) => m(S.currentTarget.value),
            size: "xs"
          }
        ),
        D !== null && /* @__PURE__ */ u(P, { shadow: "md", withinPortal: !0, children: [
          /* @__PURE__ */ s(P.Target, { children: /* @__PURE__ */ s(J, { size: "xs", variant: "light", leftSection: /* @__PURE__ */ s(Ye, { size: 14 }), children: "Export" }) }),
          /* @__PURE__ */ u(P.Dropdown, { children: [
            /* @__PURE__ */ s(P.Item, { component: "a", href: D.csv, target: "_blank", rel: "noopener noreferrer", children: "CSV" }),
            /* @__PURE__ */ s(P.Item, { component: "a", href: D.xlsx, target: "_blank", rel: "noopener noreferrer", children: "Excel (XLSX)" }),
            /* @__PURE__ */ s(P.Item, { component: "a", href: D.json, target: "_blank", rel: "noopener noreferrer", children: "JSON" })
          ] })
        ] }),
        /* @__PURE__ */ s(W, { label: "Reload", children: /* @__PURE__ */ s(
          oe,
          {
            variant: "subtle",
            onClick: () => {
              C();
            },
            loading: c,
            "aria-label": "Reload",
            children: /* @__PURE__ */ s(Ue, { size: 16 })
          }
        ) })
      ] })
    ] }),
    v.length === 0 ? /* @__PURE__ */ s(le, { withBorder: !0, p: "lg", children: /* @__PURE__ */ u(I, { gap: "xs", align: "center", children: [
      /* @__PURE__ */ s(x, { c: "dimmed", children: "No responses recorded yet." }),
      /* @__PURE__ */ s(J, { variant: "subtle", onClick: () => {
        C();
      }, children: "Refresh" })
    ] }) }) : /* @__PURE__ */ s(ye, { withBorder: !0, children: /* @__PURE__ */ u(y, { verticalSpacing: "sm", highlightOnHover: !0, children: [
      /* @__PURE__ */ s(y.Thead, { children: /* @__PURE__ */ u(y.Tr, { children: [
        /* @__PURE__ */ s(y.Th, { children: "Response ID" }),
        /* @__PURE__ */ s(y.Th, { children: "Status" }),
        /* @__PURE__ */ s(y.Th, { children: "Revision" }),
        /* @__PURE__ */ s(y.Th, { children: "User" }),
        /* @__PURE__ */ s(y.Th, { children: "Started" }),
        /* @__PURE__ */ s(y.Th, { children: "Completed" }),
        /* @__PURE__ */ s(y.Th, { style: { width: 60 } })
      ] }) }),
      /* @__PURE__ */ s(y.Tbody, { children: v.map((S) => /* @__PURE__ */ u(
        y.Tr,
        {
          onClick: () => {
            Wo(e, S.responseId).then(g).catch((O) => n(O.message));
          },
          style: { cursor: "pointer" },
          children: [
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", ff: "monospace", children: S.responseId }) }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(
              N,
              {
                variant: "light",
                color: S.status === "completed" ? "green" : "yellow",
                children: S.status
              }
            ) }),
            /* @__PURE__ */ u(y.Td, { children: [
              "v",
              S.revision
            ] }),
            /* @__PURE__ */ s(y.Td, { children: S.userId ?? /* @__PURE__ */ s(x, { c: "dimmed", children: "anon" }) }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", children: new Date(S.startedAt).toLocaleString() }) }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", children: S.completedAt ? new Date(S.completedAt).toLocaleString() : "—" }) }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ u(M, { gap: 4, children: [
              /* @__PURE__ */ s(W, { label: "Open PDF", children: /* @__PURE__ */ s(
                oe,
                {
                  variant: "subtle",
                  "aria-label": "Open response PDF",
                  component: "a",
                  href: `/api/admin/plugins/sh2-shp-survey-js/surveys/${e}/responses/${encodeURIComponent(S.responseId)}/pdf`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  onClick: (O) => O.stopPropagation(),
                  children: /* @__PURE__ */ s(Ye, { size: 14 })
                }
              ) }),
              /* @__PURE__ */ s(W, { label: "Delete response", children: /* @__PURE__ */ s(
                oe,
                {
                  color: "red",
                  variant: "subtle",
                  "aria-label": "Delete response",
                  onClick: (O) => {
                    O.stopPropagation(), f(S);
                  },
                  children: /* @__PURE__ */ s(er, { size: 14 })
                }
              ) })
            ] }) })
          ]
        },
        S.id
      )) })
    ] }) }),
    /* @__PURE__ */ s(
      Te,
      {
        opened: b !== null,
        onClose: () => f(null),
        title: "Delete response?",
        centered: !0,
        children: /* @__PURE__ */ u(I, { gap: "sm", children: [
          /* @__PURE__ */ u(x, { size: "sm", children: [
            "Deleting response",
            " ",
            /* @__PURE__ */ s(x, { component: "span", ff: "monospace", children: b?.responseId }),
            " ",
            "also removes any draft and uploaded files associated with it. This cannot be undone."
          ] }),
          /* @__PURE__ */ u(M, { justify: "flex-end", gap: "xs", children: [
            /* @__PURE__ */ s(J, { variant: "default", onClick: () => f(null), disabled: c, children: "Cancel" }),
            /* @__PURE__ */ s(J, { color: "red", onClick: () => {
              E();
            }, loading: c, children: "Delete" })
          ] })
        ] })
      }
    ),
    l && /* @__PURE__ */ s(le, { withBorder: !0, padding: "lg", children: /* @__PURE__ */ u(I, { gap: "sm", children: [
      /* @__PURE__ */ u(M, { justify: "space-between", children: [
        /* @__PURE__ */ u(Z, { order: 5, children: [
          "Response ",
          l.responseId
        ] }),
        /* @__PURE__ */ u(N, { variant: "light", children: [
          l.answers.length,
          " answers"
        ] })
      ] }),
      l.answers.length === 0 ? /* @__PURE__ */ s(x, { c: "dimmed", size: "sm", children: "No answer links were recorded for this run." }) : /* @__PURE__ */ u(y, { verticalSpacing: "xs", children: [
        /* @__PURE__ */ s(y.Thead, { children: /* @__PURE__ */ u(y.Tr, { children: [
          /* @__PURE__ */ s(y.Th, { children: "Question" }),
          /* @__PURE__ */ s(y.Th, { children: "Type" }),
          /* @__PURE__ */ s(y.Th, { children: "Value" })
        ] }) }),
        /* @__PURE__ */ s(y.Tbody, { children: l.answers.map((S) => /* @__PURE__ */ u(y.Tr, { children: [
          /* @__PURE__ */ s(y.Td, { children: S.questionName }),
          /* @__PURE__ */ s(y.Td, { children: S.questionType }),
          /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", lineClamp: 3, children: S.value || "—" }) })
        ] }, S.questionName)) })
      ] })
    ] }) })
  ] }) : /* @__PURE__ */ s(le, { withBorder: !0, p: "lg", children: /* @__PURE__ */ u(I, { gap: "xs", align: "center", children: [
    /* @__PURE__ */ s(Oe, { size: 32 }),
    /* @__PURE__ */ s(Z, { order: 4, children: "No survey selected" }),
    /* @__PURE__ */ s(x, { c: "dimmed", size: "sm", children: "Pick a survey from the list to see its responses." })
  ] }) });
}
const rr = [
  "record_id",
  "response_id",
  "date",
  "id_users",
  "visitor_id",
  "page_no",
  "trigger_type",
  "status",
  "revision"
];
async function aa() {
  try {
    return await import("./tabulator_esm-CubK_WT2.js");
  } catch {
    return null;
  }
}
function ta({ surveyId: e, results: r, onSelectResponse: o }) {
  const a = se(null), [t, i] = j(null), [n, c] = j(!1), d = se(null), l = `sh2-shp-survey-js:dashboard:${e}`, g = ae(() => na(r), [r]);
  return R(() => {
    let p = !1;
    return aa().then((m) => {
      if (!p) {
        if (m === null) {
          c(!0);
          return;
        }
        i(m);
      }
    }), () => {
      p = !0;
    };
  }, []), R(() => {
    if (!t || !a.current) return;
    const p = da(l), m = ia(g, p), b = (k) => {
      ua(l, k.map((C) => String(C.field ?? "")));
    }, f = new t.Tabulator(a.current, {
      data: r.rows,
      columns: m,
      layout: "fitDataStretch",
      movableColumns: !0,
      pagination: "local",
      paginationSize: 50,
      paginationSizeSelector: [25, 50, 100, 200],
      persistence: !1,
      columnMoved: (k, C) => b(C),
      rowClick: (k, C) => {
        const E = C.getData(), v = String(E.response_id ?? "");
        v !== "" && o && o(v);
      }
    });
    return d.current = f, () => {
      f.destroy(), d.current = null;
    };
  }, [t]), R(() => {
    d.current && d.current.replaceData(r.rows);
  }, [r]), n ? /* @__PURE__ */ s(pa, { results: r }) : t ? /* @__PURE__ */ s("div", { ref: a, style: { minHeight: 320 } }) : /* @__PURE__ */ s(x, { c: "dimmed", size: "sm", children: "Loading dashboard table…" });
}
function na(e) {
  const r = /* @__PURE__ */ new Set();
  for (const o of e.rows)
    for (const a of Object.keys(o))
      rr.includes(a) || r.add(a);
  return [
    ...rr.map((o) => ({
      title: Qr(o),
      field: o,
      sorter: "string",
      headerFilter: "input"
    })),
    ...Array.from(r).sort().map((o) => ({
      title: la(e.definition, o) ?? o,
      field: o,
      sorter: "string",
      headerFilter: "input",
      formatter: (a) => ca(a.getValue())
    }))
  ];
}
function ia(e, r) {
  if (r.length === 0) return e;
  const o = /* @__PURE__ */ new Map();
  e.forEach((t) => o.set(String(t.field ?? ""), t));
  const a = [];
  for (const t of r) {
    const i = o.get(t);
    i && (a.push(i), o.delete(t));
  }
  return o.forEach((t) => a.push(t)), a;
}
function la(e, r) {
  const o = e.pages ?? [];
  for (const a of o) {
    const t = a.elements ?? [];
    for (const i of t)
      if (i.name === r) {
        const n = i.title;
        if (typeof n == "string") return n;
        if (n && typeof n == "object") {
          const c = n.default ?? n.en;
          if (typeof c == "string") return c;
        }
      }
  }
  return null;
}
function Qr(e) {
  return e.replace(/_/g, " ").replace(/\b\w/g, (r) => r.toUpperCase());
}
function ca(e) {
  if (e == null) return "";
  if (typeof e == "string")
    return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/cms-api") ? `<a href="${e}" target="_blank" rel="noopener noreferrer">${e.split("/").pop() ?? e}</a>` : Ge(e);
  if (typeof e == "number" || typeof e == "boolean")
    return String(e);
  if (typeof e == "object") {
    const r = e;
    return typeof r.url == "string" && typeof r.mimeType == "string" ? r.mimeType.startsWith("audio/") ? `<audio controls preload="metadata" src="${r.url}"></audio>` : `<a href="${r.url}" target="_blank" rel="noopener noreferrer">${Ge(String(r.filename ?? "file"))}</a>` : Ge(JSON.stringify(e));
  }
  return "";
}
function Ge(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function da(e) {
  if (typeof window > "u") return [];
  try {
    const r = window.localStorage.getItem(e);
    if (!r) return [];
    const o = JSON.parse(r);
    if (Array.isArray(o) && o.every((a) => typeof a == "string"))
      return o;
  } catch {
    return [];
  }
  return [];
}
function ua(e, r) {
  if (!(typeof window > "u"))
    try {
      window.localStorage.setItem(e, JSON.stringify(r));
    } catch {
    }
}
function pa({ results: e }) {
  const r = ae(() => {
    const o = new Set(rr);
    for (const a of e.rows)
      for (const t of Object.keys(a)) o.add(t);
    return Array.from(o);
  }, [e]);
  return e.rows.length === 0 ? /* @__PURE__ */ s(B, { color: "gray", title: "No responses yet", children: "Once participants submit responses they will appear here." }) : /* @__PURE__ */ u(y, { verticalSpacing: "sm", striped: !0, highlightOnHover: !0, withTableBorder: !0, children: [
    /* @__PURE__ */ s(y.Thead, { children: /* @__PURE__ */ s(y.Tr, { children: r.map((o) => /* @__PURE__ */ s(y.Th, { children: Qr(o) }, o)) }) }),
    /* @__PURE__ */ s(y.Tbody, { children: e.rows.map((o, a) => /* @__PURE__ */ s(y.Tr, { children: r.map((t) => /* @__PURE__ */ s(y.Td, { children: String(o[t] ?? "") }, t)) }, String(o.response_id ?? a))) })
  ] });
}
async function ga() {
  try {
    const [e, r] = await Promise.all([
      import("./survey-core-BYbqeafP.js"),
      import("./survey.analytics-DwLvw6eg.js")
    ]);
    return {
      Model: e.Model,
      setLicenseKey: e.setLicenseKey,
      VisualizationPanel: r.VisualizationPanel
    };
  } catch {
    return null;
  }
}
function ba({ results: e }) {
  const r = se(null), [o, a] = j(null), [t, i] = j(!1), [n, c] = j(null);
  return R(() => {
    let d = !1;
    return Promise.all([
      ga(),
      tr().catch(() => ({ licenseKey: null, configured: !1 }))
    ]).then(([l, g]) => {
      if (!d) {
        if (l === null) {
          i(!0);
          return;
        }
        c(!!g.configured), g.licenseKey && l.setLicenseKey(g.licenseKey), a(l);
      }
    }), () => {
      d = !0;
    };
  }, []), R(() => {
    if (!o || !r.current || n !== !0) return;
    const d = new o.Model(e.definition), l = new o.VisualizationPanel(
      d.getAllQuestions(),
      e.rows,
      { showHeader: !0, allowDynamicLayout: !0 }
    );
    return l.render(r.current), () => l.destroy();
  }, [o, e, n]), t ? /* @__PURE__ */ s(B, { color: "yellow", title: "Charts package not installed", children: /* @__PURE__ */ s(I, { gap: "xs", children: /* @__PURE__ */ u(x, { size: "sm", children: [
    "Install ",
    /* @__PURE__ */ s(re, { children: "survey-analytics" }),
    " (commercial) to enable per-question chart visualizations. The table tab still gives full access to the response data."
  ] }) }) }) : n === !1 ? /* @__PURE__ */ s(B, { color: "yellow", title: "SurveyJS Dashboard license not configured", children: /* @__PURE__ */ s(I, { gap: "xs", children: /* @__PURE__ */ u(x, { size: "sm", children: [
    "The charts view uses ",
    /* @__PURE__ */ s(re, { children: "survey-analytics" }),
    ", which requires a SurveyJS developer license. Configure ",
    /* @__PURE__ */ s(re, { children: "SURVEYJS_LICENSE_KEY" }),
    " in the backend environment to enable charts."
  ] }) }) }) : /* @__PURE__ */ s("div", { ref: r, style: { minHeight: 320 } });
}
function fa({ surveyId: e } = {}) {
  const [r, o] = j(null), [a, t] = j(null), [i, n] = j(null), [c, d] = j(!1), [l, g] = j("table"), p = sr({
    pluginId: "sh2-shp-survey-js",
    topic: "surveys/{surveyId}/responses",
    topicParams: r ? { surveyId: String(r.id) } : {},
    enabled: !!r
  }), m = L(async () => {
    if (e) {
      d(!0), n(null);
      try {
        const [f, k] = await Promise.all([
          Ko(e),
          qo(e, { limit: 5e3 })
        ]);
        o({
          id: f.id,
          surveyId: f.surveyId,
          completedResponses: f.completedResponses,
          totalResponses: f.totalResponses,
          currentVersionRevision: f.currentVersionRevision
        }), t(k);
      } catch (f) {
        n(f.message);
      } finally {
        d(!1);
      }
    }
  }, [e]);
  R(() => {
    m();
  }, [m]), R(() => {
    p.data?.type === "response_submitted" && m();
  }, [p.data, m]);
  const b = ae(() => e ? {
    csv: we(e, "csv"),
    xlsx: we(e, "xlsx"),
    json: we(e, "json")
  } : null, [e]);
  return e ? i ? /* @__PURE__ */ s(B, { color: "red", title: "Could not load dashboard", children: i }) : !r || !a ? /* @__PURE__ */ u(M, { gap: "xs", justify: "center", py: "md", children: [
    /* @__PURE__ */ s(ce, { size: "sm" }),
    /* @__PURE__ */ s(x, { children: "Loading dashboard…" })
  ] }) : /* @__PURE__ */ u(I, { gap: "md", children: [
    /* @__PURE__ */ u(M, { justify: "space-between", children: [
      /* @__PURE__ */ s(Z, { order: 4, children: "Dashboard" }),
      /* @__PURE__ */ u(M, { gap: "xs", children: [
        p.error ? /* @__PURE__ */ s(N, { color: "yellow", variant: "light", children: "Realtime offline" }) : /* @__PURE__ */ s(N, { color: "green", variant: "light", children: "Realtime live" }),
        /* @__PURE__ */ s(W, { label: "Reload", children: /* @__PURE__ */ s(
          oe,
          {
            variant: "subtle",
            onClick: () => {
              m();
            },
            loading: c,
            "aria-label": "Reload",
            children: /* @__PURE__ */ s(Ue, { size: 16 })
          }
        ) }),
        b !== null && /* @__PURE__ */ u(P, { shadow: "md", withinPortal: !0, children: [
          /* @__PURE__ */ s(P.Target, { children: /* @__PURE__ */ s(J, { leftSection: /* @__PURE__ */ s(Ye, { size: 16 }), variant: "light", children: "Export" }) }),
          /* @__PURE__ */ u(P.Dropdown, { children: [
            /* @__PURE__ */ s(P.Item, { component: "a", href: b.csv, target: "_blank", rel: "noopener noreferrer", children: "CSV" }),
            /* @__PURE__ */ s(P.Item, { component: "a", href: b.xlsx, target: "_blank", rel: "noopener noreferrer", children: "Excel (XLSX)" }),
            /* @__PURE__ */ s(P.Item, { component: "a", href: b.json, target: "_blank", rel: "noopener noreferrer", children: "JSON" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u(ts, { cols: { base: 1, sm: 3 }, spacing: "md", children: [
      /* @__PURE__ */ s(We, { label: "Completed responses", value: r.completedResponses }),
      /* @__PURE__ */ s(We, { label: "Total responses", value: r.totalResponses }),
      /* @__PURE__ */ s(
        We,
        {
          label: "Current revision",
          value: r.currentVersionRevision === null ? "—" : `v${r.currentVersionRevision}`
        }
      )
    ] }),
    /* @__PURE__ */ u(H, { value: l, onChange: g, keepMounted: !1, children: [
      /* @__PURE__ */ u(H.List, { children: [
        /* @__PURE__ */ s(H.Tab, { value: "table", leftSection: /* @__PURE__ */ s(_o, { size: 14 }), children: "Table" }),
        /* @__PURE__ */ s(H.Tab, { value: "charts", leftSection: /* @__PURE__ */ s(ze, { size: 14 }), children: "Charts" })
      ] }),
      /* @__PURE__ */ s(H.Panel, { value: "table", pt: "md", children: /* @__PURE__ */ s(ta, { surveyId: e, results: a }) }),
      /* @__PURE__ */ s(H.Panel, { value: "charts", pt: "md", children: /* @__PURE__ */ s(ba, { results: a }) })
    ] })
  ] }) : /* @__PURE__ */ s(le, { withBorder: !0, p: "lg", children: /* @__PURE__ */ u(I, { gap: "xs", align: "center", children: [
    /* @__PURE__ */ s(ze, { size: 32 }),
    /* @__PURE__ */ s(Z, { order: 4, children: "No survey selected" }),
    /* @__PURE__ */ s(x, { c: "dimmed", size: "sm", children: "Pick a survey from the list to see its dashboard." })
  ] }) });
}
function We({ label: e, value: r }) {
  return /* @__PURE__ */ s(le, { withBorder: !0, padding: "lg", children: /* @__PURE__ */ u(I, { gap: 4, children: [
    /* @__PURE__ */ s(x, { c: "dimmed", size: "sm", tt: "uppercase", children: e }),
    /* @__PURE__ */ s(x, { size: "xl", fw: 700, children: typeof r == "number" ? r.toLocaleString() : r })
  ] }) });
}
function ma({ surveyId: e, onSurveyChanged: r }) {
  const [o, a] = j(null), [t, i] = j(""), [n, c] = j("default"), [d, l] = j(!1), [g, p] = j(null);
  R(() => {
    let b = !1;
    return xe(e).then((f) => {
      b || (a(f), i(f.name), c(f.themeCode ?? "default"));
    }).catch((f) => p(f.message)), () => {
      b = !0;
    };
  }, [e]);
  const m = async () => {
    if (o) {
      l(!0), p(null);
      try {
        const b = await Be(o.id, {
          name: t.trim(),
          themeCode: n === "default" ? null : n
        }), f = await xe(b.id);
        a(f), i(f.name), c(f.themeCode ?? "default"), r?.(f);
      } catch (b) {
        p(b.message);
      } finally {
        l(!1);
      }
    }
  };
  return /* @__PURE__ */ u(I, { gap: "md", children: [
    /* @__PURE__ */ s(Z, { order: 4, children: "Survey settings" }),
    /* @__PURE__ */ s(le, { withBorder: !0, padding: "lg", children: /* @__PURE__ */ u(I, { gap: "sm", children: [
      /* @__PURE__ */ s(Z, { order: 5, children: "Identity and public presentation" }),
      o === null ? /* @__PURE__ */ u(M, { gap: "xs", children: [
        /* @__PURE__ */ s(ce, { size: "xs" }),
        /* @__PURE__ */ s(x, { size: "sm", children: "Loading survey settings…" })
      ] }) : /* @__PURE__ */ u(or, { children: [
        /* @__PURE__ */ s(
          Pe,
          {
            label: "Name",
            value: t,
            onChange: (b) => i(b.currentTarget.value),
            disabled: d
          }
        ),
        /* @__PURE__ */ u(x, { size: "sm", c: "dimmed", children: [
          "Survey ID: ",
          /* @__PURE__ */ s(re, { children: o.surveyId }),
          ". It does not change when the survey is renamed and is the value stored by the CMS survey selector."
        ] }),
        /* @__PURE__ */ s(
          Ar,
          {
            label: "Theme",
            description: "Theme applied when this specific survey is embedded on a page.",
            data: [
              { value: "default", label: "Default (Mantine)" },
              { value: "modern", label: "Modern" },
              { value: "high-contrast", label: "High contrast" }
            ],
            value: n,
            onChange: (b) => c(b ?? "default"),
            disabled: d
          }
        ),
        g && /* @__PURE__ */ s(B, { color: "red", title: "Could not save settings", children: g }),
        /* @__PURE__ */ s(M, { justify: "flex-end", children: /* @__PURE__ */ s(J, { onClick: () => {
          m();
        }, loading: d, disabled: t.trim() === "", children: "Save settings" }) })
      ] })
    ] }) })
  ] });
}
function ya({ surveyId: e, onRestored: r } = {}) {
  const [o, a] = j(null), [t, i] = j(null), [n, c] = j(!1), [d, l] = j(null), [g, p] = j({ baseId: null, targetId: null }), [m, b] = j(!1), [f, k] = j(!1), [C, E] = j(null), [v, D] = j(null), S = L(async () => {
    if (e) {
      i(null);
      try {
        const h = await Bo(e);
        a(h);
      } catch (h) {
        i(h.message);
      }
    }
  }, [e]);
  R(() => {
    S();
  }, [S]);
  const O = L(async () => {
    if (!(!e || !d)) {
      c(!0);
      try {
        await Uo(e, d.id), l(null), await S(), r?.();
      } catch (h) {
        i(h.message);
      } finally {
        c(!1);
      }
    }
  }, [r, d, S, e]), V = L((h) => {
    p((z) => z.baseId === h ? { baseId: null, targetId: z.targetId } : z.targetId === h ? { baseId: z.baseId, targetId: null } : z.baseId === null ? { ...z, baseId: h } : z.targetId === null ? { ...z, targetId: h } : { baseId: z.targetId, targetId: h });
  }, []), T = g.baseId !== null && g.targetId !== null && g.baseId !== g.targetId, q = L(async () => {
    if (!e || !T) return;
    const h = g.baseId, z = g.targetId;
    if (!(h === null || z === null)) {
      k(!0), E(null), b(!0);
      try {
        const [F, G] = await Promise.all([
          zr(e, h),
          zr(e, z)
        ]), Y = Le(F.definition, G.definition);
        D({
          base: F,
          target: G,
          entries: Y.entries,
          summary: ea(Y)
        });
      } catch (F) {
        E(F.message), D(null);
      } finally {
        k(!1);
      }
    }
  }, [T, g.baseId, g.targetId, e]), _ = ae(() => {
    if (g.baseId === null && g.targetId === null)
      return "Select two versions to compare";
    const h = (z) => {
      if (z === null) return "?";
      const F = o?.find((G) => G.id === z);
      return F ? `v${F.revision}` : `#${z}`;
    };
    return g.baseId !== null && g.targetId === null ? `Base: ${h(g.baseId)}. Select a second version to compare.` : g.baseId === null && g.targetId !== null ? `Compare: ${h(g.targetId)}. Select a base version.` : `Comparing ${h(g.baseId)} → ${h(g.targetId)}`;
  }, [g.baseId, g.targetId, o]);
  return e ? /* @__PURE__ */ u(I, { gap: "md", children: [
    /* @__PURE__ */ u(M, { justify: "space-between", children: [
      /* @__PURE__ */ u(I, { gap: 2, children: [
        /* @__PURE__ */ s(Z, { order: 4, children: "Version history" }),
        /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: "Each publish creates an immutable revision. Compare two revisions to see exactly what changed; restore an older revision to publish it as the new current version." })
      ] }),
      /* @__PURE__ */ u(M, { gap: "xs", children: [
        /* @__PURE__ */ s(W, { label: "Reload version list", children: /* @__PURE__ */ s(
          J,
          {
            variant: "subtle",
            leftSection: /* @__PURE__ */ s(Ue, { size: 14 }),
            onClick: () => {
              S();
            },
            children: "Reload"
          }
        ) }),
        /* @__PURE__ */ s(W, { label: T ? "Open structural diff" : _, children: /* @__PURE__ */ s(
          J,
          {
            leftSection: /* @__PURE__ */ s(So, { size: 14 }),
            disabled: !T,
            onClick: () => {
              q();
            },
            children: "Compare selected"
          }
        ) })
      ] })
    ] }),
    t && /* @__PURE__ */ s(B, { color: "red", title: "Could not load versions", children: t }),
    o === null ? /* @__PURE__ */ u(M, { justify: "center", py: "md", gap: "xs", children: [
      /* @__PURE__ */ s(ce, { size: "sm" }),
      /* @__PURE__ */ s(x, { size: "sm", children: "Loading versions…" })
    ] }) : o.length === 0 ? /* @__PURE__ */ s(B, { color: "gray", title: "No published versions yet", children: "Publish the survey from the Designer to create the first revision." }) : /* @__PURE__ */ u(le, { withBorder: !0, p: 0, children: [
      /* @__PURE__ */ u(M, { justify: "space-between", px: "md", py: "xs", children: [
        /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: _ }),
        (g.baseId !== null || g.targetId !== null) && /* @__PURE__ */ s(
          J,
          {
            variant: "subtle",
            size: "compact-xs",
            onClick: () => p({ baseId: null, targetId: null }),
            children: "Clear selection"
          }
        )
      ] }),
      /* @__PURE__ */ u(y, { verticalSpacing: "sm", striped: !0, highlightOnHover: !0, children: [
        /* @__PURE__ */ s(y.Thead, { children: /* @__PURE__ */ u(y.Tr, { children: [
          /* @__PURE__ */ s(y.Th, { style: { width: 60 }, children: "Compare" }),
          /* @__PURE__ */ s(y.Th, { children: "Revision" }),
          /* @__PURE__ */ s(y.Th, { children: "Published at" }),
          /* @__PURE__ */ s(y.Th, { children: "By" }),
          /* @__PURE__ */ s(y.Th, { children: "SHA-256" }),
          /* @__PURE__ */ s(y.Th, { style: { width: 110 } })
        ] }) }),
        /* @__PURE__ */ s(y.Tbody, { children: o.map((h, z) => {
          const F = g.baseId === h.id, G = g.targetId === h.id;
          return /* @__PURE__ */ u(y.Tr, { children: [
            /* @__PURE__ */ u(y.Td, { children: [
              /* @__PURE__ */ s(
                ns,
                {
                  checked: F || G,
                  onChange: () => V(h.id),
                  "aria-label": `Select v${h.revision} for comparison`
                }
              ),
              F && /* @__PURE__ */ s(N, { size: "xs", color: "blue", variant: "light", children: "base" }),
              G && /* @__PURE__ */ s(N, { size: "xs", color: "orange", variant: "light", children: "target" })
            ] }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ u(M, { gap: "xs", children: [
              /* @__PURE__ */ u(N, { variant: "light", children: [
                "v",
                h.revision
              ] }),
              z === 0 && /* @__PURE__ */ s(N, { color: "green", variant: "light", children: "current" })
            ] }) }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", children: new Date(h.createdAt).toLocaleString() }) }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: h.createdByUserId === null ? "system" : `user #${h.createdByUserId}` }) }),
            /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(W, { label: h.definitionSha256, children: /* @__PURE__ */ u(re, { style: { fontSize: 11 }, children: [
              h.definitionSha256.slice(0, 12),
              "…"
            ] }) }) }),
            /* @__PURE__ */ s(y.Td, { children: z !== 0 && /* @__PURE__ */ s(
              J,
              {
                size: "xs",
                variant: "light",
                leftSection: /* @__PURE__ */ s(Ro, { size: 14 }),
                onClick: () => l(h),
                children: "Restore"
              }
            ) })
          ] }, h.id);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ s(
      Te,
      {
        opened: d !== null,
        onClose: () => l(null),
        title: d ? `Restore v${d.revision}?` : "",
        centered: !0,
        children: /* @__PURE__ */ u(I, { gap: "sm", children: [
          /* @__PURE__ */ u(x, { size: "sm", children: [
            "Restoring will publish the definition stored in v",
            d?.revision,
            " as a new current revision. Existing responses remain attached to the revision they were collected against."
          ] }),
          /* @__PURE__ */ s(B, { color: "yellow", title: "What restore actually does", children: /* @__PURE__ */ s(x, { size: "sm", children: "Restore is non-destructive. The current published revision is preserved in the history. A new revision will be created whose definition matches the one you are restoring. Already-collected responses keep pointing to their original revision, so existing answers and aggregations are not affected." }) }),
          /* @__PURE__ */ u(M, { justify: "flex-end", gap: "xs", children: [
            /* @__PURE__ */ s(J, { variant: "default", onClick: () => l(null), disabled: n, children: "Cancel" }),
            /* @__PURE__ */ s(J, { color: "orange", onClick: () => {
              O();
            }, loading: n, children: "Restore as new revision" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ s(
      Te,
      {
        opened: m,
        onClose: () => {
          b(!1), D(null), E(null);
        },
        title: v ? `Compare v${v.base.revision} → v${v.target.revision}` : "Compare versions",
        size: "xl",
        centered: !0,
        children: /* @__PURE__ */ s(I, { gap: "md", children: f ? /* @__PURE__ */ u(M, { justify: "center", py: "md", gap: "xs", children: [
          /* @__PURE__ */ s(ce, { size: "sm" }),
          /* @__PURE__ */ s(x, { size: "sm", children: "Loading definitions…" })
        ] }) : C ? /* @__PURE__ */ s(B, { color: "red", title: "Could not compare versions", children: C }) : v ? /* @__PURE__ */ u(or, { children: [
          /* @__PURE__ */ u(M, { gap: "xs", children: [
            /* @__PURE__ */ u(N, { color: "blue", variant: "light", children: [
              "base v",
              v.base.revision
            ] }),
            /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: new Date(v.base.createdAt).toLocaleString() }),
            /* @__PURE__ */ s(x, { size: "sm", children: "→" }),
            /* @__PURE__ */ u(N, { color: "orange", variant: "light", children: [
              "target v",
              v.target.revision
            ] }),
            /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: new Date(v.target.createdAt).toLocaleString() })
          ] }),
          /* @__PURE__ */ s(x, { size: "sm", children: v.summary }),
          v.entries.length === 0 ? /* @__PURE__ */ s(B, { color: "green", title: "Identical", children: "Both definitions are structurally identical." }) : /* @__PURE__ */ s(is, { h: 420, children: /* @__PURE__ */ u(y, { verticalSpacing: "xs", striped: !0, children: [
            /* @__PURE__ */ s(y.Thead, { children: /* @__PURE__ */ u(y.Tr, { children: [
              /* @__PURE__ */ s(y.Th, { children: "Type" }),
              /* @__PURE__ */ s(y.Th, { children: "Where" }),
              /* @__PURE__ */ s(y.Th, { children: "What" }),
              /* @__PURE__ */ s(y.Th, { children: "Detail" })
            ] }) }),
            /* @__PURE__ */ s(y.Tbody, { children: v.entries.map((h, z) => /* @__PURE__ */ u(y.Tr, { children: [
              /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(ja, { kind: h.kind }) }),
              /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(re, { style: { fontSize: 11 }, children: h.path }) }),
              /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", children: h.label }) }),
              /* @__PURE__ */ u(y.Td, { children: [
                /* @__PURE__ */ s(x, { size: "xs", c: "dimmed", children: h.detail ?? "" }),
                h.kind === "settings" && /* @__PURE__ */ u(I, { gap: 2, children: [
                  /* @__PURE__ */ u(x, { size: "xs", c: "red", children: [
                    "-",
                    " ",
                    /* @__PURE__ */ s(re, { style: { fontSize: 10 }, children: JSON.stringify(h.oldValue)?.slice(0, 80) })
                  ] }),
                  /* @__PURE__ */ u(x, { size: "xs", c: "teal", children: [
                    "+",
                    " ",
                    /* @__PURE__ */ s(re, { style: { fontSize: 10 }, children: JSON.stringify(h.newValue)?.slice(0, 80) })
                  ] })
                ] })
              ] })
            ] }, `${h.path}-${z}`)) })
          ] }) })
        ] }) : null })
      }
    )
  ] }) : /* @__PURE__ */ s(le, { withBorder: !0, p: "lg", children: /* @__PURE__ */ u(I, { gap: "xs", align: "center", children: [
    /* @__PURE__ */ s(Fe, { size: 32 }),
    /* @__PURE__ */ s(Z, { order: 4, children: "No survey selected" }),
    /* @__PURE__ */ s(x, { c: "dimmed", size: "sm", children: "Pick a survey to inspect its version history." })
  ] }) });
}
function ja({ kind: e }) {
  switch (e) {
    case "added":
      return /* @__PURE__ */ s(N, { color: "green", variant: "light", children: "added" });
    case "removed":
      return /* @__PURE__ */ s(N, { color: "red", variant: "light", children: "removed" });
    case "modified":
      return /* @__PURE__ */ s(N, { color: "orange", variant: "light", children: "modified" });
    case "moved":
      return /* @__PURE__ */ s(N, { color: "blue", variant: "light", children: "moved" });
    case "settings":
      return /* @__PURE__ */ s(N, { color: "violet", variant: "light", children: "setting" });
    default:
      return /* @__PURE__ */ s(N, { variant: "light", children: e });
  }
}
const ha = /* @__PURE__ */ new Set([
  "designer",
  "responses",
  "dashboard",
  "versions",
  "settings"
]);
function Rr() {
  if (typeof window > "u")
    return { view: "list", surveyId: null };
  const e = new URLSearchParams(window.location.search), r = e.get("view") ?? "list", o = ["list", "designer", "responses", "dashboard", "versions", "settings"].includes(
    r
  ) ? r : "list", a = e.get("id"), t = a && /^\d+$/.test(a) ? Number(a) : null;
  return { view: o, surveyId: t };
}
function va(e) {
  if (typeof window > "u") return;
  const r = new URLSearchParams(window.location.search);
  e.view === "list" ? r.delete("view") : r.set("view", e.view), e.surveyId === null ? r.delete("id") : r.set("id", String(e.surveyId));
  const o = r.toString(), a = `${window.location.pathname}${o ? `?${o}` : ""}`;
  window.history.replaceState(null, "", a);
}
function xa() {
  const [{ view: e, surveyId: r }, o] = j(() => Rr()), a = L((i, n) => {
    o((c) => ({
      view: i,
      surveyId: n === void 0 ? c.surveyId : n
    }));
  }, []);
  R(() => {
    const i = () => o(Rr());
    return window.addEventListener("popstate", i), () => window.removeEventListener("popstate", i);
  }, []);
  const t = ae(() => ha.has(e) && r === null ? "list" : e, [e, r]);
  return R(() => {
    va({ view: t, surveyId: t === e ? r : null });
  }, [t, r, e]), /* @__PURE__ */ u(I, { gap: "md", p: "md", children: [
    /* @__PURE__ */ u(M, { justify: "space-between", align: "flex-end", children: [
      /* @__PURE__ */ u(I, { gap: 2, children: [
        /* @__PURE__ */ s(Z, { order: 2, children: "SurveyJS" }),
        /* @__PURE__ */ s(x, { c: "dimmed", size: "sm", children: "Manage SurveyJS surveys: design, publish, view responses, and configure the plugin." })
      ] }),
      t !== "list" && /* @__PURE__ */ s(
        J,
        {
          variant: "light",
          leftSection: /* @__PURE__ */ s(bo, { size: 16 }),
          onClick: () => a("list", null),
          children: "Back to list"
        }
      )
    ] }),
    /* @__PURE__ */ u(
      H,
      {
        value: t,
        onChange: (i) => a(i ?? "list"),
        keepMounted: !1,
        children: [
          /* @__PURE__ */ u(H.List, { children: [
            /* @__PURE__ */ s(H.Tab, { value: "list", leftSection: /* @__PURE__ */ s(To, { size: 14 }), children: "Surveys list" }),
            /* @__PURE__ */ s(
              H.Tab,
              {
                value: "designer",
                leftSection: /* @__PURE__ */ s(Xe, { size: 14 }),
                disabled: r === null,
                children: "Designer"
              }
            ),
            /* @__PURE__ */ s(
              H.Tab,
              {
                value: "responses",
                leftSection: /* @__PURE__ */ s(Oe, { size: 14 }),
                disabled: r === null,
                children: "Responses"
              }
            ),
            /* @__PURE__ */ s(
              H.Tab,
              {
                value: "dashboard",
                leftSection: /* @__PURE__ */ s(ze, { size: 14 }),
                disabled: r === null,
                children: "Dashboard"
              }
            ),
            /* @__PURE__ */ s(
              H.Tab,
              {
                value: "versions",
                leftSection: /* @__PURE__ */ s(Fe, { size: 14 }),
                disabled: r === null,
                children: "Versions"
              }
            ),
            /* @__PURE__ */ s(H.Tab, { value: "settings", leftSection: /* @__PURE__ */ s(Ze, { size: 14 }), disabled: r === null, children: "Settings" })
          ] }),
          /* @__PURE__ */ s(H.Panel, { value: "list", pt: "md", children: /* @__PURE__ */ s(wa, { onOpen: (i, n) => a(n, i) }) }),
          /* @__PURE__ */ s(H.Panel, { value: "designer", pt: "md", children: r !== null && /* @__PURE__ */ s(sa, { surveyId: r }) }),
          /* @__PURE__ */ s(H.Panel, { value: "responses", pt: "md", children: r !== null && /* @__PURE__ */ s(oa, { surveyId: r }) }),
          /* @__PURE__ */ s(H.Panel, { value: "dashboard", pt: "md", children: r !== null && /* @__PURE__ */ s(fa, { surveyId: r }) }),
          /* @__PURE__ */ s(H.Panel, { value: "versions", pt: "md", children: r !== null && /* @__PURE__ */ s(ya, { surveyId: r }) }),
          /* @__PURE__ */ s(H.Panel, { value: "settings", pt: "md", children: r !== null && /* @__PURE__ */ s(ma, { surveyId: r }) })
        ]
      }
    )
  ] });
}
function wa({ onOpen: e }) {
  const [r, o] = j(null), [a, t] = j(null), [i, n] = j(!1), [c, d] = j(!1), [l, g] = j(null), [p, m] = j(null), [b, f] = j(""), k = se(null), C = L(async () => {
    t(null);
    try {
      const T = await qr();
      o(T);
    } catch (T) {
      t(T.message);
    }
  }, []);
  R(() => {
    C();
  }, [C]), R(() => {
    p !== null && k.current && (k.current.focus(), k.current.select());
  }, [p]);
  const E = L((T) => {
    m(T.id), f(T.name), t(null);
  }, []), v = L(() => {
    m(null), f("");
  }, []), D = L(async () => {
    if (p === null) return;
    const T = b.trim();
    if (T === "") {
      v();
      return;
    }
    const q = r?.find((_) => _.id === p);
    if (q && q.name === T) {
      v();
      return;
    }
    n(!0);
    try {
      await Be(p, { name: T }), await C(), m(null), f("");
    } catch (_) {
      t(`Rename failed: ${_.message}`);
    } finally {
      n(!1);
    }
  }, [v, r, C, b, p]), S = L(
    async (T, q) => {
      n(!0);
      try {
        await Be(T.id, { archived: q }), await C();
      } catch (_) {
        t(_.message);
      } finally {
        n(!1);
      }
    },
    [C]
  ), O = L(
    async (T) => {
      n(!0);
      try {
        const q = await xe(T.id);
        await Jo(q), await C();
      } catch (q) {
        t(q.message);
      } finally {
        n(!1);
      }
    },
    [C]
  ), V = L(async () => {
    if (l !== null) {
      n(!0);
      try {
        await Vo(l.id), g(null), await C();
      } catch (T) {
        t(T.message);
      } finally {
        n(!1);
      }
    }
  }, [l, C]);
  return /* @__PURE__ */ u(I, { gap: "sm", children: [
    /* @__PURE__ */ u(M, { justify: "space-between", children: [
      /* @__PURE__ */ u(M, { gap: "xs", children: [
        /* @__PURE__ */ s(J, { leftSection: /* @__PURE__ */ s(Po, { size: 16 }), onClick: () => d(!0), children: "New Survey" }),
        /* @__PURE__ */ s(W, { label: "Reload", children: /* @__PURE__ */ s(oe, { variant: "subtle", onClick: () => {
          C();
        }, "aria-label": "Reload", children: /* @__PURE__ */ s(Ue, { size: 16 }) }) })
      ] }),
      r !== null && /* @__PURE__ */ u(x, { size: "sm", c: "dimmed", children: [
        r.length,
        " surveys"
      ] })
    ] }),
    a && /* @__PURE__ */ s(B, { color: "red", title: "Failed to load surveys", children: a }),
    r === null ? /* @__PURE__ */ u(M, { gap: "xs", justify: "center", py: "md", children: [
      /* @__PURE__ */ s(ce, { size: "sm" }),
      /* @__PURE__ */ s(x, { children: "Loading surveys…" })
    ] }) : r.length === 0 ? /* @__PURE__ */ s(le, { withBorder: !0, p: "lg", children: /* @__PURE__ */ u(I, { gap: "xs", align: "center", children: [
      /* @__PURE__ */ s(mo, { size: 32 }),
      /* @__PURE__ */ s(Z, { order: 4, children: "No surveys yet" }),
      /* @__PURE__ */ u(x, { c: "dimmed", ta: "center", size: "sm", children: [
        "Click ",
        /* @__PURE__ */ s("strong", { children: "New Survey" }),
        " to create your first one. The Designer opens once the survey row exists."
      ] })
    ] }) }) : /* @__PURE__ */ s(ye, { withBorder: !0, children: /* @__PURE__ */ u(y, { verticalSpacing: "sm", highlightOnHover: !0, children: [
      /* @__PURE__ */ s(y.Thead, { children: /* @__PURE__ */ u(y.Tr, { children: [
        /* @__PURE__ */ s(y.Th, { children: "Name" }),
        /* @__PURE__ */ s(y.Th, { children: "Revision" }),
        /* @__PURE__ */ s(y.Th, { children: "Responses" }),
        /* @__PURE__ */ s(y.Th, { children: "Updated" }),
        /* @__PURE__ */ s(y.Th, { children: "State" }),
        /* @__PURE__ */ s(y.Th, { style: { width: 60 } })
      ] }) }),
      /* @__PURE__ */ s(y.Tbody, { children: r.map((T) => /* @__PURE__ */ s(
        Sa,
        {
          survey: T,
          busy: i,
          renaming: p === T.id,
          renameValue: b,
          renameInputRef: k,
          onOpen: e,
          onStartRename: E,
          onCancelRename: v,
          onCommitRename: () => {
            D();
          },
          onRenameChange: f,
          onDuplicate: () => {
            O(T);
          },
          onArchive: () => {
            S(T, !T.archived);
          },
          onDelete: () => g(T)
        },
        T.id
      )) })
    ] }) }),
    /* @__PURE__ */ s(
      Ta,
      {
        opened: c,
        onClose: () => d(!1),
        onCreated: async (T) => {
          d(!1), await C(), e(T, "designer");
        }
      }
    ),
    /* @__PURE__ */ s(Ca, {}),
    /* @__PURE__ */ s(
      Te,
      {
        opened: l !== null,
        onClose: () => g(null),
        title: "Delete survey?",
        centered: !0,
        children: /* @__PURE__ */ u(I, { gap: "sm", children: [
          /* @__PURE__ */ u(x, { children: [
            "This will permanently delete ",
            /* @__PURE__ */ s("strong", { children: l?.name }),
            " and all its responses. This action cannot be undone."
          ] }),
          /* @__PURE__ */ u(M, { justify: "flex-end", gap: "xs", children: [
            /* @__PURE__ */ s(J, { variant: "default", onClick: () => g(null), disabled: i, children: "Cancel" }),
            /* @__PURE__ */ s(J, { color: "red", onClick: () => {
              V();
            }, loading: i, children: "Delete" })
          ] })
        ] })
      }
    )
  ] });
}
function Sa({
  survey: e,
  busy: r,
  renaming: o,
  renameValue: a,
  renameInputRef: t,
  onOpen: i,
  onStartRename: n,
  onCancelRename: c,
  onCommitRename: d,
  onRenameChange: l,
  onDuplicate: g,
  onArchive: p,
  onDelete: m
}) {
  const [b, f] = j(!1), [k, C] = j(null), E = L((v) => {
    v.preventDefault(), C({ x: v.clientX, y: v.clientY }), f(!0);
  }, []);
  return /* @__PURE__ */ u(y.Tr, { onContextMenu: E, style: { cursor: o ? "text" : "default" }, children: [
    /* @__PURE__ */ u(y.Td, { children: [
      o ? /* @__PURE__ */ u(M, { gap: "xs", wrap: "nowrap", children: [
        /* @__PURE__ */ s(
          Pe,
          {
            ref: t,
            size: "xs",
            value: a,
            onChange: (v) => l(v.currentTarget.value),
            onKeyDown: (v) => {
              v.key === "Enter" ? (v.preventDefault(), d()) : v.key === "Escape" && (v.preventDefault(), c());
            },
            disabled: r,
            style: { flex: 1 },
            "aria-label": "Rename survey"
          }
        ),
        /* @__PURE__ */ s(W, { label: "Save (Enter)", children: /* @__PURE__ */ s(
          oe,
          {
            size: "sm",
            color: "green",
            variant: "filled",
            onClick: d,
            loading: r,
            "aria-label": "Save rename",
            children: /* @__PURE__ */ s(Hr, { size: 14 })
          }
        ) }),
        /* @__PURE__ */ s(W, { label: "Cancel (Esc)", children: /* @__PURE__ */ s(
          oe,
          {
            size: "sm",
            variant: "subtle",
            onClick: c,
            disabled: r,
            "aria-label": "Cancel rename",
            children: /* @__PURE__ */ s(Kr, { size: 14 })
          }
        ) })
      ] }) : /* @__PURE__ */ u(M, { gap: "xs", wrap: "nowrap", children: [
        /* @__PURE__ */ s(ls, { onClick: () => i(e.id, "designer"), title: "Open in Designer", children: e.name }),
        /* @__PURE__ */ s(W, { label: "Rename (or right-click)", children: /* @__PURE__ */ s(
          oe,
          {
            size: "xs",
            variant: "subtle",
            onClick: (v) => {
              v.stopPropagation(), n(e);
            },
            "aria-label": "Rename survey",
            children: /* @__PURE__ */ s(_e, { size: 12 })
          }
        ) })
      ] }),
      /* @__PURE__ */ u(x, { size: "xs", c: "dimmed", children: [
        "Survey ID: ",
        /* @__PURE__ */ s(re, { children: e.surveyId })
      ] })
    ] }),
    /* @__PURE__ */ s(y.Td, { children: e.currentRevision === null ? /* @__PURE__ */ s(x, { c: "dimmed", children: "draft" }) : /* @__PURE__ */ u(N, { variant: "light", children: [
      "v",
      e.currentRevision
    ] }) }),
    /* @__PURE__ */ s(y.Td, { children: e.responseCount }),
    /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ s(x, { size: "sm", children: new Date(e.updatedAt).toLocaleString() }) }),
    /* @__PURE__ */ s(y.Td, { children: e.archived ? /* @__PURE__ */ s(N, { color: "gray", variant: "light", children: "archived" }) : /* @__PURE__ */ s(N, { color: "green", variant: "light", children: "active" }) }),
    /* @__PURE__ */ s(y.Td, { children: /* @__PURE__ */ u(P, { shadow: "md", position: "bottom-end", withinPortal: !0, children: [
      /* @__PURE__ */ s(P.Target, { children: /* @__PURE__ */ s(
        oe,
        {
          variant: "subtle",
          "aria-label": "Survey actions",
          disabled: r || o,
          children: /* @__PURE__ */ s(ho, { size: 16 })
        }
      ) }),
      /* @__PURE__ */ u(P.Dropdown, { children: [
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(Xe, { size: 14 }),
            onClick: () => i(e.id, "designer"),
            children: "Open Designer"
          }
        ),
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(_e, { size: 14 }),
            onClick: () => n(e),
            children: "Rename…"
          }
        ),
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(Oe, { size: 14 }),
            onClick: () => i(e.id, "responses"),
            children: "Responses"
          }
        ),
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(ze, { size: 14 }),
            onClick: () => i(e.id, "dashboard"),
            children: "Dashboard"
          }
        ),
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(Fe, { size: 14 }),
            onClick: () => i(e.id, "versions"),
            children: "Versions"
          }
        ),
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(Ze, { size: 14 }),
            onClick: () => i(e.id, "settings"),
            children: "Settings"
          }
        ),
        /* @__PURE__ */ s(P.Divider, {}),
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(Cr, { size: 14 }),
            onClick: g,
            children: "Duplicate"
          }
        ),
        /* @__PURE__ */ s(
          P.Item,
          {
            leftSection: /* @__PURE__ */ s(kr, { size: 14 }),
            onClick: p,
            children: e.archived ? "Unarchive" : "Archive"
          }
        ),
        /* @__PURE__ */ s(
          P.Item,
          {
            color: "red",
            leftSection: /* @__PURE__ */ s(er, { size: 14 }),
            onClick: m,
            children: "Delete…"
          }
        )
      ] })
    ] }) }),
    b && k && /* @__PURE__ */ u(
      ka,
      {
        position: k,
        onClose: () => f(!1),
        children: [
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(Xe, { size: 14 }),
              onClick: () => {
                i(e.id, "designer"), f(!1);
              },
              children: "Open Designer"
            }
          ),
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(_e, { size: 14 }),
              onClick: () => {
                n(e), f(!1);
              },
              children: "Rename"
            }
          ),
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(Oe, { size: 14 }),
              onClick: () => {
                i(e.id, "responses"), f(!1);
              },
              children: "Responses"
            }
          ),
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(ze, { size: 14 }),
              onClick: () => {
                i(e.id, "dashboard"), f(!1);
              },
              children: "Dashboard"
            }
          ),
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(Fe, { size: 14 }),
              onClick: () => {
                i(e.id, "versions"), f(!1);
              },
              children: "Versions"
            }
          ),
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(Ze, { size: 14 }),
              onClick: () => {
                i(e.id, "settings"), f(!1);
              },
              children: "Settings"
            }
          ),
          /* @__PURE__ */ s(P.Divider, {}),
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(Cr, { size: 14 }),
              onClick: () => {
                g(), f(!1);
              },
              children: "Duplicate"
            }
          ),
          /* @__PURE__ */ s(
            P.Item,
            {
              leftSection: /* @__PURE__ */ s(kr, { size: 14 }),
              onClick: () => {
                p(), f(!1);
              },
              children: e.archived ? "Unarchive" : "Archive"
            }
          ),
          /* @__PURE__ */ s(
            P.Item,
            {
              color: "red",
              leftSection: /* @__PURE__ */ s(er, { size: 14 }),
              onClick: () => {
                m(), f(!1);
              },
              children: "Delete…"
            }
          )
        ]
      }
    )
  ] });
}
function ka({ position: e, onClose: r, children: o }) {
  return R(() => {
    const a = (i) => {
      const n = i.target;
      n && n.closest("[data-survey-context-menu]") || r();
    }, t = (i) => {
      i.key === "Escape" && r();
    };
    return window.addEventListener("mousedown", a), window.addEventListener("keydown", t), () => {
      window.removeEventListener("mousedown", a), window.removeEventListener("keydown", t);
    };
  }, [r]), /* @__PURE__ */ s(
    ar,
    {
      "data-survey-context-menu": !0,
      style: {
        position: "fixed",
        left: e.x,
        top: e.y,
        zIndex: 1e3,
        minWidth: 180,
        background: "var(--mantine-color-body)",
        border: "1px solid var(--mantine-color-default-border)",
        borderRadius: "var(--mantine-radius-sm)",
        boxShadow: "var(--mantine-shadow-md)",
        padding: 4
      },
      role: "menu",
      children: o
    }
  );
}
function Ca() {
  const [e, r] = j(null);
  return R(() => {
    tr().then((o) => r({ configured: o.configured })).catch(() => r({ configured: !1 }));
  }, []), /* @__PURE__ */ s(le, { withBorder: !0, padding: "lg", children: /* @__PURE__ */ u(I, { gap: "sm", children: [
    /* @__PURE__ */ u(M, { justify: "space-between", align: "center", children: [
      /* @__PURE__ */ u(I, { gap: 2, children: [
        /* @__PURE__ */ s(Z, { order: 4, children: "Plugin configuration" }),
        /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: "These settings affect the SurveyJS plugin as a whole, not one survey." })
      ] }),
      e === null ? /* @__PURE__ */ s(ce, { size: "xs" }) : e.configured ? /* @__PURE__ */ s(N, { color: "green", variant: "light", children: "License configured" }) : /* @__PURE__ */ s(N, { color: "yellow", variant: "light", children: "License not configured" })
    ] }),
    e !== null && !e.configured && /* @__PURE__ */ u(B, { color: "yellow", title: "SurveyJS license", children: [
      "Set ",
      /* @__PURE__ */ s(re, { children: "SURVEYJS_LICENSE_KEY" }),
      " in the backend environment to remove the SurveyJS watermark from the Designer and runtime forms."
    ] }),
    /* @__PURE__ */ s(ye, { withBorder: !0, p: "md", children: /* @__PURE__ */ u(I, { gap: 4, children: [
      /* @__PURE__ */ s(x, { fw: 600, children: "Developer live reload" }),
      /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: "One-time backend attach registers routes, tables, permissions, and the bundle. Keep the runtime server open while editing plugin UI code." }),
      /* @__PURE__ */ u(re, { block: !0, children: [
        "node scripts/install-local.mjs --symlink",
        `
`,
        "npm --prefix frontend run dev:runtime"
      ] }),
      /* @__PURE__ */ u(x, { size: "xs", c: "dimmed", children: [
        "Full docs: ",
        /* @__PURE__ */ s(re, { children: "plugins/sh2-shp-survey-js/docs/install.md" }),
        " and",
        " ",
        /* @__PURE__ */ s(re, { children: "sh-selfhelp_backend/docs/plugins/runtime-frontend-loading.md" })
      ] })
    ] }) })
  ] }) });
}
function Ta({ opened: e, onClose: r, onCreated: o }) {
  const [a, t] = j(""), [i, n] = j(!1), [c, d] = j(null);
  R(() => {
    e || (t(""), d(null), n(!1));
  }, [e]);
  const l = async () => {
    if (d(null), a.trim() === "") {
      d("Name is required.");
      return;
    }
    n(!0);
    try {
      const g = await Gr({
        name: a.trim(),
        definition: { pages: [] }
      });
      await o(g.id);
    } catch (g) {
      d(g.message);
    } finally {
      n(!1);
    }
  };
  return /* @__PURE__ */ s(Te, { opened: e, onClose: r, title: "New survey", centered: !0, children: /* @__PURE__ */ u(I, { gap: "sm", children: [
    /* @__PURE__ */ s(
      Pe,
      {
        label: "Name",
        placeholder: "Customer feedback Q3",
        required: !0,
        value: a,
        onChange: (g) => t(g.currentTarget.value),
        disabled: i
      }
    ),
    /* @__PURE__ */ s(x, { size: "sm", c: "dimmed", children: "SelfHelp will generate a stable survey ID automatically. You can rename the survey and change its theme later from Settings." }),
    c && /* @__PURE__ */ s(B, { color: "red", title: "Could not create survey", children: c }),
    /* @__PURE__ */ u(M, { justify: "flex-end", gap: "xs", children: [
      /* @__PURE__ */ s(J, { variant: "default", onClick: r, disabled: i, children: "Cancel" }),
      /* @__PURE__ */ s(J, { onClick: () => {
        l();
      }, loading: i, children: "Create & Open Designer" })
    ] })
  ] }) });
}
function za({
  fieldId: e,
  value: r,
  onChange: o,
  disabled: a
}) {
  const [t, i] = j([]), [n, c] = j(!0), [d, l] = j(null), [g, p] = j("");
  return R(() => {
    let m = !1;
    return c(!0), qr().then((b) => {
      m || (i(b), l(null));
    }).catch((b) => {
      m || l(b.message);
    }).finally(() => {
      m || c(!1);
    }), () => {
      m = !0;
    };
  }, []), R(() => {
    const m = t.find((b) => b.surveyId === r);
    p(m ? m.surveyId : "");
  }, [r, t]), /* @__PURE__ */ s(
    Ar,
    {
      data: t.map((m) => ({
        value: m.surveyId,
        label: `${m.name} (${m.surveyId})${m.currentRevision ? ` · v${m.currentRevision}` : " · draft only"}`
      })),
      value: g,
      onChange: (m) => {
        const b = m ?? "";
        p(b), o(b);
      },
      placeholder: d ? "Could not load surveys" : "Search and select a SurveyJS survey...",
      searchable: !0,
      clearable: !0,
      disabled: a || n,
      error: d ?? void 0,
      nothingFoundMessage: n ? "Loading surveys..." : "No surveys found"
    },
    e
  );
}
const $r = "sh2-shp-survey-js", Ea = "0.2.18", $a = (e) => (Bs(e), rs({
  id: $r,
  version: Ea,
  pluginApiVersion: "1.1",
  styles: [
    {
      name: "surveyjs",
      description: "Embeds a published SurveyJS survey at runtime.",
      category: "forms",
      frontendOnly: !0,
      canHaveChildren: !1,
      component: ao
    },
    {
      name: "gpxMap",
      description: "Standalone Leaflet-based map renderer for a GPX answer field.",
      category: "media",
      frontendOnly: !0,
      canHaveChildren: !1,
      component: to
    }
  ],
  fieldRenderers: [
    {
      fieldType: "select-survey-js",
      component: za
    }
  ],
  adminPages: [
    // The host plugin route is single-segment (`/admin/plugins-host
    // /<plugin-id>/<slug>`), so the plugin uses one consolidated
    // page that swaps between the list / Designer / Responses /
    // Dashboard / Settings views internally via `?view=` and
    // `?id=` query params. When the host upgrades to a catch-all
    // route, we can split these back into separate registrations.
    {
      slug: "surveys",
      title: "SurveyJS",
      permission: "surveyjs.surveys.manage",
      component: xa
    }
  ],
  menuItems: [
    {
      key: "surveyjs.surveys",
      label: "SurveyJS",
      icon: "tabler-clipboard-list",
      href: "/admin/plugins-host/sh2-shp-survey-js/surveys",
      permission: "surveyjs.surveys.manage",
      position: { section: "admin", order: 300 }
    }
  ],
  featureFlags: [
    { key: "gpx", label: "GPX question type", defaultEnabled: !1 },
    { key: "video", label: "Video question type", defaultEnabled: !1 },
    { key: "microphone", label: "Microphone (audio recording) question type", defaultEnabled: !1 },
    {
      key: "rich-text",
      label: "Tiptap rich-text (runtime + Creator property editors)",
      defaultEnabled: !0
    },
    { key: "pdf-export", label: "PDF export of responses", defaultEnabled: !1 },
    { key: "dashboard", label: "Response dashboard", defaultEnabled: !0 },
    {
      key: "collab-editing",
      label: "Collaborative-edit notifications",
      defaultEnabled: !0
    }
  ],
  realtimeTopics: [
    {
      key: "surveys/{surveyId}/editing",
      requiredPermission: "surveyjs.surveys.manage"
    },
    {
      key: "surveys/{surveyId}/responses",
      requiredPermission: "surveyjs.surveys.view-responses"
    }
  ],
  healthChecks: [
    {
      key: "surveyjs.license",
      label: "SurveyJS license configured",
      severity: "warning",
      run: async () => {
        try {
          const r = await fetch(
            `/api/admin/plugins/${$r}/license-key`,
            {
              credentials: "include",
              headers: { Accept: "application/json" }
            }
          );
          return r.ok ? (await r.json()).data?.configured ? { status: "ok" } : {
            status: "warn",
            detail: "No SURVEYJS_LICENSE_KEY set; running unlicensed."
          } : { status: "warn", detail: "License endpoint not reachable." };
        } catch (r) {
          return {
            status: "warn",
            detail: `License health check failed: ${r.message}`
          };
        }
      }
    }
  ]
}));
export {
  $r as PLUGIN_ID,
  Ea as PLUGIN_VERSION,
  $a as default,
  $a as register
};
//# sourceMappingURL=plugin.esm.js.map
