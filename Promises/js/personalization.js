/*! Oracle 16-09-2022 */
define("personalization", function () {
  const d = [
      "article",
      "asset",
      "keyword",
      "product",
      "region",
      "recent",
      "country",
      "ui",
    ],
    p = ["site", "global"];
  let o = null,
    i = R(window.btoa("salt")),
    r = R(window.btoa("initializationVector")),
    a = null,
    n = null;
  const t = 864e5,
    u = 7776e6;
  let g = null,
    s = !1,
    m = {};
  const y = 50,
    w = 20;
  let c = null,
    f = !1,
    v = null;
  const l = /^(?=.{3,50}$)([a-z0-9 -]*)$/,
    F = 100,
    h = "ORA_CONTENT_INFO",
    e = {
      mysites: {
        storageKey: "ORA_CONTENT_INFO",
        isEncryptionRequired: !0,
        isCustomAttributes: !0,
      },
      securesites: {
        storageKey: "ORA_CONTENT_INFO",
        isEncryptionRequired: !0,
        isCustomAttributes: !1,
      },
      orasites: {
        storageKey: "ORA_CONTENT_INFO_ANON",
        isEncryptionRequired: !1,
      },
      mybuilder: {
        storageKey: "ORA_CONTENT_INFO",
        isEncryptionRequired: !0,
        isCustomAttributes: !1,
      },
      orabuilder: {
        storageKey: "ORA_CONTENT_INFO_ANON",
        isEncryptionRequired: !1,
      },
      default: {
        storageKey: "ORA_CONTENT_INFO_ANON",
        isEncryptionRequired: !1,
      },
    },
    S = "Failed to Retrieve IDCS Details",
    z = "The provided type is not correct",
    q = "The provided scope is not correct",
    _ = "The provided name is not correct",
    k = "The provided label is not correct",
    O = "The provided value is not correct";
  function L() {
    return a ? !!a.includes("@oracle.com") : null;
  }
  function M() {
    return !!a;
  }
  function N() {
    return 0 === o
      ? (
          navigator.doNotTrack ||
          window.doNotTrack ||
          null === navigator.doNotTrack
            ? "1" === window.doNotTrack ||
              "1" === navigator.doNotTrack ||
              "yes" === navigator.doNotTrack
            : (console.log("personalization.js Do Not track is not supported"),
              1)
        )
        ? 1
        : 3
      : o;
  }
  async function U() {
    return !(
      (await ((e = localStorage.getItem(g.storageKey))
        ? ((e = await C(R(e))), JSON.parse(e).idcsExpiryTs)
        : null)) > Date.now()
    );
    var e;
  }
  function E() {
    return String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ""
    );
  }
  function I(e, t, a, o, i) {
    let r = !0;
    return (
      (m.validationErrors = {}),
      (e = e),
      d.includes(e) || ((r = !1), (m.validationErrors.type = z)),
      (e = o),
      p.includes(e) || ((r = !1), (m.validationErrors.scope = q)),
      (t && ("string" == typeof t || "object" == typeof t)) ||
        ((r = !1), (m.validationErrors.value = O)),
      i && !l.test(i) && ((r = !1), (m.validationErrors.name = _)),
      !a || a.length < F || ((r = !1), (m.validationErrors.label = k)),
      r
    );
  }
  function b(e) {
    return 0 === Object.keys(e).length;
  }
  function D(e) {
    let t = JSON.stringify(e);
    return t
      .replace(/\\n/g, "\\n")
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");
  }
  async function G(a, o, i, r, n) {
    if (3 !== N())
      return Promise.reject({
        message: "Failed to set the Data as user does not have valid Consent",
      });
    if (!I(a, o, i, r, n)) return Promise.reject(m);
    {
      if ("object" == typeof o) {
        var e = D(o);
        try {
          o = JSON.parse(e);
        } catch (e) {
          return (
            console.log("personalization.js" + e),
            (m.validationErrors = {}),
            (m.validationErrors.value = O),
            Promise.reject(m)
          );
        }
      }
      let t = localStorage.getItem(g.storageKey);
      if (!t && g.storageKey === h && !f)
        try {
          await P(), (t = localStorage.getItem(g.storageKey));
        } catch (e) {
          return Promise.reject({ message: m.serverErrorMessage });
        }
      if (
        (((!t && g.storageKey !== h) || (!t && f && g.storageKey === h)) &&
          (g.isEncryptionRequired
            ? ((e = await K({})), localStorage.setItem(g.storageKey, A(e)))
            : localStorage.setItem(g.storageKey, JSON.stringify({})),
          (t = localStorage.getItem(g.storageKey))),
        t)
      )
        try {
          var s = g.isEncryptionRequired ? await C(R(t)) : t;
          let e = b(s) ? s : JSON.parse(s);
          var c,
            l = "global" === r ? r : "site-" + v;
          return (
            e["implicit-data"]
              ? (e["implicit-data"].push({
                  key: E(),
                  type: a,
                  value: o,
                  label: i || "",
                  scope: l,
                  name: n || "",
                  expires: Date.now() + u,
                }),
                (e["implicit-data"] = (function (e) {
                  let t = e.filter((e) => {
                      if ("global" === e.scope) return e;
                    }),
                    a = e.filter((e) => {
                      if ("global" !== e.scope) return e;
                    });
                  t.length > y &&
                    (t.sort(function (e, t) {
                      return t.expires - e.expires;
                    }),
                    (t = [...t.slice(0, y)]));
                  a.length > w &&
                    (a.sort(function (e, t) {
                      return t.expires - e.expires;
                    }),
                    (a = [...a.slice(0, w)]));
                  return [...t, ...a];
                })(e["implicit-data"])))
              : (e["implicit-data"] = [
                  {
                    key: E(),
                    type: a,
                    value: o,
                    label: i || "",
                    scope: l,
                    name: n || "",
                    expires: Date.now() + u,
                  },
                ]),
            g.isEncryptionRequired
              ? ((c = await K(e)), localStorage.setItem(g.storageKey, A(c)))
              : localStorage.setItem(g.storageKey, JSON.stringify(e)),
            "Data has been saved successfully in Local Storage"
          );
        } catch (e) {
          return Promise.reject({
            message: "Failed to set the Data in Local Storage",
          });
        }
    }
  }
  async function B(t, a, o) {
    if (3 !== N())
      return Promise.reject({
        message:
          "Failed to update the Data as user does not have valid Consent",
      });
    if (
      !(
        (2 === arguments.length && I(d[0], a, o, p[0])) ||
        (3 === arguments.length && I(d[0], a, o, p[0]))
      )
    )
      return Promise.reject(m);
    if ("object" == typeof a) {
      var i = D(a);
      try {
        a = JSON.parse(i);
      } catch (e) {
        return (
          console.log("personalization.js" + e),
          (m.validationErrors = {}),
          (m.validationErrors.value = O),
          Promise.reject(m)
        );
      }
    }
    i = localStorage.getItem(g.storageKey);
    if (i)
      try {
        var r,
          n,
          s,
          c,
          l = g.isEncryptionRequired ? await C(R(i)) : i;
        let e = b(l) ? l : JSON.parse(l);
        if (e["implicit-data"])
          return -1 !== (r = e["implicit-data"].findIndex((e) => e.key === t))
            ? ((n = {
                ...e["implicit-data"][r],
                value: a,
                label: 2 === arguments.length ? e["implicit-data"][r].label : o,
              }),
              (s = [
                ...e["implicit-data"].slice(0, r),
                n,
                ...e["implicit-data"].slice(r + 1),
              ]),
              (e["implicit-data"] = s),
              g.isEncryptionRequired
                ? ((c = await K(e)), localStorage.setItem(g.storageKey, A(c)))
                : localStorage.setItem(g.storageKey, JSON.stringify(e)),
              "Data has been updated successfully from Local Storage")
            : Promise.reject({
                message:
                  "Failed to update the Data from Local Storage.The provided key is incorrect",
              });
      } catch (e) {
        return Promise.reject({
          message: "Failed to update the Data from Local Storage",
        });
      }
  }
  async function $() {
    let t = localStorage.getItem(g.storageKey);
    if (!t && g.storageKey === h && !f)
      try {
        await P(), (t = localStorage.getItem(g.storageKey));
      } catch (e) {
        return Promise.reject({ message: m.serverErrorMessage });
      }
    if (t)
      try {
        var a,
          o,
          i = g.isEncryptionRequired ? await C(R(t)) : t;
        let e = b(i) ? i : JSON.parse(i);
        return (
          e["implicit-data"] &&
            ((a = e["implicit-data"].filter((e) => {
              if ("global" === e.scope) return e;
            })),
            (o = e["implicit-data"].filter((e) => {
              if (e.scope.split("site-")[1] === v) return e;
            })),
            (e["implicit-data"] = [...a, ...o])),
          e
        );
      } catch (e) {
        return Promise.reject({
          message: "Faliled to get the Data from Local Storage",
        });
      }
    return null;
  }
  async function H(t) {
    if (3 !== N())
      return Promise.reject({
        message:
          "Failed to remove the Data as user does not have valid Consent",
      });
    var a = localStorage.getItem(g.storageKey);
    if (a)
      try {
        var o = g.isEncryptionRequired ? await C(R(a)) : a;
        let e = JSON.parse(o);
        var i,
          r = e["implicit-data"].filter((e) => {
            if (e.key !== t) return e;
          });
        return r.length === e["implicit-data"].length
          ? Promise.reject({
              message:
                "Failed to remove the Data from Local Storage.The provided key is incorrect",
            })
          : ((e["implicit-data"] = [...r]),
            g.isEncryptionRequired
              ? ((i = await K(e)), localStorage.setItem(g.storageKey, A(i)))
              : localStorage.setItem(g.storageKey, JSON.stringify(e)),
            "Data has been removed successfully from Local Storage");
      } catch (e) {
        return Promise.reject({
          message: "Failed to remove the Data from Local Storage",
        });
      }
  }
  async function T() {
    var e = a + n;
    let t = new TextEncoder();
    return window.crypto.subtle.importKey(
      "raw",
      t.encode(e),
      { name: "PBKDF2" },
      !1,
      ["deriveBits", "deriveKey"]
    );
  }
  async function j(e, t) {
    return window.crypto.subtle.deriveKey(
      { name: "PBKDF2", salt: t, iterations: 1e5, hash: "SHA-256" },
      e,
      { name: "AES-GCM", length: 256 },
      !0,
      ["encrypt", "decrypt"]
    );
  }
  async function K(e) {
    var t = await j(await T(), i),
      e = (function (e) {
        console.log("personalization.js" + JSON.stringify(e));
        let t = new TextEncoder();
        return t.encode(JSON.stringify(e));
      })(e);
    return await window.crypto.subtle.encrypt({ name: "AES-GCM", iv: r }, t, e);
  }
  async function C(t) {
    var a = await j(await T(), i);
    try {
      var o = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv: r },
        a,
        t
      );
      let e = new TextDecoder();
      return (
        console.log("personalization.js Decrypted Text"),
        console.log("personalization.js" + e.decode(o)),
        e.decode(o)
      );
    } catch (e) {
      return console.log("personalization.js" + e), Promise.reject(e);
    }
  }
  async function x() {
    try {
      let e = await fetch("/system/api/v1/me?includeRealmUserGUID=True");
      return await e.json();
    } catch (e) {
      console.log("personalization.js" + e);
    }
  }
  function V() {
    var e = {
      PrivacyManagerAPI: {
        action: "getConsentDecision",
        timestamp: new Date().getTime(),
        self: self.location.host,
      },
    };
    window.top.postMessage(JSON.stringify(e), "*"),
      window.addEventListener("message", (e, t) => {
        try {
          e.data &&
            (t = JSON.parse(e.data)) &&
            (t = t.PrivacyManagerAPI) &&
            t.capabilities &&
            "getConsentDecision" == t.action &&
            ((o = oracle.truste.api.getConsentDecision().consentDecision),
            console.log("personalization.js" + o),
            s &&
              (3 !== N() &&
                (async () => {
                  await J();
                })(),
              (a = new CustomEvent("trustArcChange", {
                detail: {},
                bubbles: !0,
                cancelable: !0,
                composed: !1,
              })),
              document.dispatchEvent(a)));
        } catch (e) {
          console.log("personalization.js Trust Arc Error" + e);
        }
        var a;
      });
  }
  async function P() {
    if (!localStorage.getItem(g.storageKey) || (await U()))
      try {
        c || ((c = await x()), (a = c.email), (n = c.realmUserGUID));
        var e = await K({
          firstName: c?.firstName,
          lastName: c?.lastName,
          email: c?.email,
          idcsExpiryTs: Date.now() + t,
        });
        localStorage.setItem(g.storageKey, A(e));
      } catch (e) {
        (m.serverErrorMessage = S), console.log("personalization.js" + e);
      }
  }
  function A(e) {
    return window.btoa(
      new Uint8Array(e).reduce((e, t) => e + String.fromCharCode(t), "")
    );
  }
  function R(e) {
    let t = window.atob(e);
    var a = t.length;
    let o = new Uint8Array(a);
    for (var i = 0; i < a; i++) o[i] = t.charCodeAt(i);
    return o.buffer;
  }
  async function J() {
    var t = localStorage.getItem(g.storageKey);
    if (t)
      try {
        var a,
          o = g.isEncryptionRequired ? await C(R(t)) : t;
        let e = JSON.parse(o);
        e["implicit-data"] &&
          (delete e["implicit-data"],
          g.isEncryptionRequired
            ? ((a = await K(e)), localStorage.setItem(g.storageKey, A(a)))
            : localStorage.setItem(g.storageKey, JSON.stringify(e)));
      } catch (e) {
        return Promise.reject("Failed to Delete the Data");
      }
  }
  async function Q() {
    var t = localStorage.getItem(g.storageKey);
    if (t)
      try {
        var a,
          o,
          i = g.isEncryptionRequired ? await C(R(t)) : t;
        let e = JSON.parse(i);
        e["implicit-data"] &&
          ((a = e["implicit-data"].filter((e) => {
            if (e.expires > Date.now()) return e;
          })),
          (e["implicit-data"] = [...a]),
          g.isEncryptionRequired
            ? ((o = await K(e)), localStorage.setItem(g.storageKey, A(o)))
            : localStorage.setItem(g.storageKey, JSON.stringify(e)));
      } catch (e) {
        return (
          console.log("personalization.js" + e),
          Promise.reject("Failed to Delete the Expired Data")
        );
      }
  }
  async function W() {
    if (
      void 0 ===
      (o = oracle?.truste?.api?.getConsentDecision()?.consentDecision)
    )
      return (
        console.log("personalization.js Trust Arc is not Implemented."),
        Promise.reject("Trust Arc is not Implemented")
      );
    try {
      if (
        (window.vb
          ? ((f = !0),
            (v = window.vbInitConfig.APP_ID),
            (g =
              -1 < window.location.host.indexOf("mybuilder-prodapp") ||
              -1 < window.location.host.indexOf("mybuildertest-prodapp")
                ? window?.vbInitConfig?.INJECTED?.security?.user?.email &&
                  window?.vbInitConfig?.INJECTED?.security?.user?.id
                  ? ((a = window.vbInitConfig.INJECTED.security.user.email),
                    (n = window.vbInitConfig.INJECTED.security.user.id),
                    e.mybuilder)
                  : e.default
                : e.orabuilder))
          : window.SCS
          ? ((v = window.SCS.siteInfo.properties.siteName),
            (-1 < window.location.host.indexOf("myoracle-prodapp") ||
              -1 < window.location.host.indexOf("mysites.oracle.com") ||
              -1 < window.location.host.indexOf("oradocs-prodapp") ||
              -1 < window.location.host.indexOf("oradocstest-prodapp") ||
              -1 < window.location.host.indexOf("mysites-test.oracle.com") ||
              -1 < window.location.host.indexOf("oradocsdev-prodapp")) &&
              (g = e.mysites),
            (-1 < window.location.host.indexOf("analystconnect.oracle.com") ||
              -1 < window.location.host.indexOf("securesites.oracle.com") ||
              -1 <
                window.location.host.indexOf(
                  "analystconnect-test.oracle.com"
                ) ||
              -1 < window.location.host.indexOf("securesites-prodapp") ||
              -1 < window.location.host.indexOf("securesitestest-prodapp") ||
              -1 <
                window.location.host.indexOf("securesites-test.oracle.com") ||
              -1 < window.location.host.indexOf("securesitesdev-prodapp")) &&
              (g = e.securesites),
            (-1 < window.location.host.indexOf("sites.oracle.com") ||
              -1 < window.location.host.indexOf("orasites-prodapp") ||
              -1 < window.location.host.indexOf("orasitestest-prodapp") ||
              -1 < window.location.host.indexOf("sites-test.oracle.com") ||
              -1 < window.location.host.indexOf("orasitesdev-prodapp")) &&
              (g = e.orasites))
          : (g = e.default),
        g.storageKey === h && !f)
      )
        try {
          try {
            (c = await x()), (a = c.email), (n = c.realmUserGUID);
          } catch (e) {
            (m.serverErrorMessage = S), console.log("personalization.js" + e);
          }
          await 0, await P();
        } catch (e) {
          console.log("personalization.js" + e);
        }
      V(), 3 !== N() && (await J()), await Q();
    } catch (e) {
      return console.log("personalization.js" + e), Promise.reject(e);
    }
  }
  return new Promise(function (e, t) {
    (async () => {
      try {
        await W(),
          (s = !0),
          e({
            setImplicitData: G,
            getImplicitData: $,
            updateImplicitData: B,
            removeImplicitData: H,
            getConsentLevel: N,
            isEmployee: L,
            isLoggedIn: M,
          });
      } catch (e) {
        t("Personalization Library could not be loaded" + e);
      }
    })();
  });
});
//# sourceMappingURL=personalization.js.map
