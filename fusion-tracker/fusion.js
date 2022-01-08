const startRecordingEvent = new Event("startRecording"),
  stopRecordingEventnew = new Event("stopRecording");
var stopfn,
  savedPropertiesSnapshot = {},
  recordingStart = !0,
  sessionRecordingEvents = [],
  firstBitSent = !1,
  api = "http://localhost:3000/";
function generateUserId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = (16 * Math.random()) | 0;
    return ("x" == e ? t : (3 & t) | 8).toString(16);
  });
}
class Fusion {
  setup() {
    new XMLHttpRequest();
    const e = "undefined" != typeof window ? window : {},
      t = e.navigator || { userAgent: "" },
      i = e.document || {},
      r = t.userAgent;
    function s() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          var t = (16 * Math.random()) | 0;
          return ("x" == e ? t : (3 & t) | 8).toString(16);
        }
      );
    }
    function o(e, t) {
      return -1 !== e.indexOf(t);
    }
    function n(e, t, i) {
      return (
        (t = t || ""),
        i || o(e, " OPR/")
          ? o(e, "Mini")
            ? "Opera Mini"
            : "Opera"
          : /(BlackBerry|PlayBook|BB10)/i.test(e)
          ? "BlackBerry"
          : o(e, "IEMobile") || o(e, "WPDesktop")
          ? "Internet Explorer Mobile"
          : o(e, "SamsungBrowser/")
          ? "Samsung Internet"
          : o(e, "Edge") || o(e, "Edg/")
          ? "Microsoft Edge"
          : o(e, "FBIOS")
          ? "Facebook Mobile"
          : o(e, "Chrome")
          ? "Chrome"
          : o(e, "CriOS")
          ? "Chrome iOS"
          : o(e, "UCWEB") || o(e, "UCBrowser")
          ? "UC Browser"
          : o(e, "FxiOS")
          ? "Firefox iOS"
          : o(t, "Apple")
          ? o(e, "Mobile")
            ? "Mobile Safari"
            : "Safari"
          : o(e, "Android")
          ? "Android Mobile"
          : o(e, "Konqueror")
          ? "Konqueror"
          : o(e, "Firefox")
          ? "Firefox"
          : o(e, "MSIE") || o(e, "Trident/")
          ? "Internet Explorer"
          : o(e, "Gecko")
          ? "Mozilla"
          : ""
      );
    }
    var a;
    (this.readCookie = function (e) {
      return i.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")
        ? i.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)").pop()
        : "";
    }),
      (this.createCookie = function (e, t, r) {
        if (r) {
          var s = new Date();
          s.setTime(s.getTime() + 24 * r * 60 * 60 * 1e3);
          var o = "; expires=" + s.toGMTString();
        } else o = "";
        let n = window.location.hostname;
        i.cookie = e + "=" + t + o + "; path=/; domain=" + n;
      }),
      (this.os = /Windows/i.test((a = r))
        ? /Phone/.test(a) || /WPDesktop/.test(a)
          ? "Windows Phone"
          : "Windows"
        : /(iPhone|iPad|iPod)/.test(a)
        ? "iOS"
        : /Android/.test(a)
        ? "Android"
        : /(BlackBerry|PlayBook|BB10)/i.test(a)
        ? "BlackBerry"
        : /Mac/i.test(a)
        ? "Mac OS X"
        : /Linux/.test(a)
        ? "Linux"
        : /CrOS/.test(a)
        ? "Chrome OS"
        : ""),
      (this.browser = n(r, t.vendor, window.opera)),
      localStorage.setItem("browser", this.browser),
      (this.browserVersion = (function (e, t, i) {
        var r = {
          "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
          "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
          Chrome: /Chrome\/(\d+(\.\d+)?)/,
          "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
          "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
          Safari: /Version\/(\d+(\.\d+)?)/,
          "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
          Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
          Firefox: /Firefox\/(\d+(\.\d+)?)/,
          "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
          Konqueror: /Konqueror:(\d+(\.\d+)?)/,
          BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
          "Android Mobile": /android\s(\d+(\.\d+)?)/,
          "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
          "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
          Mozilla: /rv:(\d+(\.\d+)?)/,
        }[n(e, t, i)];
        if (void 0 === r) return null;
        var s = e.match(r);
        return s ? parseFloat(s[s.length - 2]) : null;
      })(r, t.vendor, window.opera)),
      (this.deviceType = (function (e) {
        const t = (function (e) {
          return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
            ? "Windows Phone"
            : /iPad/.test(e)
            ? "iPad"
            : /iPod/.test(e)
            ? "iPod Touch"
            : /iPhone/.test(e)
            ? "iPhone"
            : /(BlackBerry|PlayBook|BB10)/i.test(e)
            ? "BlackBerry"
            : /Android/.test(e) && !/Mobile/.test(e)
            ? "Android Tablet"
            : /Android/.test(e)
            ? "Android"
            : "";
        })(e);
        return "iPad" === t || "Android Tablet" === t
          ? "Tablet"
          : t
          ? "Mobile"
          : "Desktop";
      })(r));
    var d,
      h,
      c,
      l = i.referrer;
    if (
      ((this.referrer = l),
      (this.referrerDomain = (function (e) {
        var t = e.split("/");
        return t.length >= 3 ? t[2] : "";
      })(l)),
      (this.searchKeywords = window.location.search),
      (this.userAgent = t.userAgent),
      (this.browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone),
      (this.screenHeight = window.screen.height),
      (this.screenWidth = window.screen.width),
      (this.userIP = ""),
      (this.city = ""),
      (this.country = ""),
      (this.user_id = ""),
      (this.device_id = ""),
      (this.libraryType = "web"),
      (this.libraryVersion = "1.0.0"),
      (this.userInfoCookieTemplate = {
        user_id: `${this.user_id}`,
        device_id: `${this.device_id}`,
        initial_referrer: `${this.referrer || "direct"}`,
        initial_referring_website: `${this.referrerDomain || "direct"}`,
        referrer: `${this.referrer || "direct"}`,
        referring_website: `${this.referrerDomain || "direct"}`,
        search_keywords: `${this.searchKeywords || "none"}`,
      }),
      (this.userInfoCookie = this.readCookie(`fusion_${this.apiKey}`)
        ? this.readCookie(`fusion_${this.apiKey}`)
        : localStorage.getItem(`fusion_${this.apiKey}`)),
      this.userInfoCookie)
    ) {
      if (
        ((this.userInfoCookie = JSON.parse(
          decodeURIComponent(this.userInfoCookie)
        )),
        (this.userInfoCookie.website = window.location.host),
        (this.userInfoCookie.page = window.location.pathname),
        (this.userInfoCookie.browser = this.browser),
        (this.userInfoCookie.browserVersion = this.browserVersion),
        (this.userInfoCookie.os = this.os),
        (this.userInfoCookie.deviceType = this.deviceType),
        (this.userInfoCookie.screenHeight = this.screenHeight),
        (this.userInfoCookie.screenWidth = this.screenWidth),
        (this.userInfoCookie.ip = this.userIP),
        (this.userInfoCookie.libraryType = this.libraryType),
        (this.userInfoCookie.libraryVersion = this.libraryVersion),
        (this.userInfoCookie.referrer = this.referrer || "direct"),
        (this.userInfoCookie.referring_website =
          this.referrerDomain || "direct"),
        (this.userInfoCookie.search_keywords = this.searchKeywords || "none"),
        (savedPropertiesSnapshot = this.userInfoCookie),
        !sessionStorage.getItem("sessionId"))
      ) {
        let e = s(),
          i = JSON.stringify(savedPropertiesSnapshot),
          r = new URLSearchParams({
            sessionId: e,
            properties: i,
            created_at: new Date().getTime(),
            write_key: this.apiKey,
          });
        t.sendBeacon(`${api}createSession`, r),
          sessionStorage.setItem("sessionId", e);
      }
    } else {
      let e = s(),
        r = s();
      (this.userInfoCookieTemplate.user_id = e),
        (this.userInfoCookieTemplate.device_id = r);
      const o =
        ((d = "utm_source utm_medium utm_campaign utm_content utm_term".split(
          " "
        )),
        (h = {}),
        (c = ""),
        d.forEach((e) => {
          (c = (function (e, t) {
            t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
            var i = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
            if (null === i || (i && "string" != typeof i[1] && i[1].length))
              return "";
            var r = i[1];
            try {
              r = decodeURIComponent(r);
            } catch (e) {
              console.error(
                "Skiped decoding for corrupted query parameter: " + r
              );
            }
            return r.replace(/\+/g, " ");
          })(i.URL, e)).length && (h[e] = `${c}`);
        }),
        h);
      for (const e in o) this.userInfoCookieTemplate[e] = `${o[e]}`;
      let n = JSON.stringify(this.userInfoCookieTemplate);
      if (
        (this.createCookie(`fusion_${this.apiKey}`, encodeURIComponent(n), 730),
        localStorage.setItem(`fusion_${this.apiKey}`, encodeURIComponent(n)),
        (this.userInfoCookieTemplate.website = window.location.host),
        (this.userInfoCookieTemplate.page = window.location.pathname),
        (this.userInfoCookieTemplate.browser = this.browser),
        (this.userInfoCookieTemplate.browserVersion = this.browserVersion),
        (this.userInfoCookieTemplate.os = this.os),
        (this.userInfoCookieTemplate.deviceType = this.deviceType),
        (this.userInfoCookieTemplate.screenHeight = this.screenHeight),
        (this.userInfoCookieTemplate.screenWidth = this.screenWidth),
        (this.userInfoCookieTemplate.ip = this.userIP),
        (this.userInfoCookieTemplate.libraryType = this.libraryType),
        (this.userInfoCookieTemplate.libraryVersion = this.libraryVersion),
        (this.userInfoCookieTemplate.referrer = this.referrer || "direct"),
        (this.userInfoCookieTemplate.referring_website =
          this.referrerDomain || "direct"),
        (this.userInfoCookieTemplate.search_keywords =
          this.searchKeywords || "none"),
        (savedPropertiesSnapshot = this.userInfoCookieTemplate),
        !sessionStorage.getItem("sessionId"))
      ) {
        let e = s(),
          i = JSON.stringify(savedPropertiesSnapshot),
          r = new URLSearchParams({
            sessionId: e,
            properties: i,
            created_at: new Date().getTime(),
            write_key: this.apiKey,
          });
        t.sendBeacon(`${api}createSession`, r),
          sessionStorage.setItem("sessionId", e);
      }
    }
    fetch("https://api64.ipify.org?format=json")
      .then((e) => e.json())
      .then((e) => {
        (this.userIP = e.ip),
          (savedPropertiesSnapshot.ip = e.ip),
          this.track("Pageview", "");
      })
      .catch(() => {
        (this.userIP = ""),
          console.log("sending pagview without location data.."),
          this.track("Pageview", "");
      });
  }
  register(e) {
    (this.propertiesToRegister = e),
      (this.eventPropertyPayload =
        null != this.readCookie(`fusion_${this.apiKey}`) &&
        null != this.readCookie(`fusion_${this.apiKey}`)
          ? JSON.parse(
              decodeURIComponent(this.readCookie(`fusion_${this.apiKey}`))
            )
          : JSON.parse(
              decodeURIComponent(localStorage.getItem(`fusion_${this.apiKey}`))
            ));
    for (const e in this.propertiesToRegister)
      this.eventPropertyPayload[e] = `${this.propertiesToRegister[e]}`;
    (this.eventPropertyPayload.website = window.location.host),
      (this.eventPropertyPayload.page = window.location.pathname),
      (this.eventPropertyPayload.browser = this.browser),
      (this.eventPropertyPayload.browserVersion = this.browserVersion),
      (this.eventPropertyPayload.os = this.os),
      (this.eventPropertyPayload.deviceType = this.deviceType),
      (this.eventPropertyPayload.screenHeight = this.screenHeight),
      (this.eventPropertyPayload.screenWidth = this.screenWidth),
      (this.eventPropertyPayload.ip = this.userIP),
      (this.eventPropertyPayload.libraryType = this.libraryType),
      (this.eventPropertyPayload.libraryVersion = this.libraryVersion),
      (this.eventPropertyPayload.referrer = this.referrer || "direct"),
      (this.eventPropertyPayload.referring_website =
        this.referrerDomain || "direct"),
      (this.eventPropertyPayload.search_keywords =
        this.searchKeywords || "none"),
      (savedPropertiesSnapshot = this.eventPropertyPayload),
      this.createCookie(
        `fusion_${this.apiKey}`,
        encodeURIComponent(JSON.stringify(this.eventPropertyPayload)),
        730
      ),
      localStorage.setItem(
        `fusion_${this.apiKey}`,
        encodeURIComponent(JSON.stringify(this.eventPropertyPayload))
      );
  }
  unregister(e) {
    (this.propertyToUnregister = e),
      (this.savedPropertyPayload =
        null != this.readCookie(`fusion_${this.apiKey}`) &&
        null != this.readCookie(`fusion_${this.apiKey}`)
          ? JSON.parse(
              decodeURIComponent(this.readCookie(`fusion_${this.apiKey}`))
            )
          : JSON.parse(
              decodeURIComponent(localStorage.getItem(`fusion_${this.apiKey}`))
            )),
      delete this.savedPropertyPayload[`${this.propertyToUnregister}`],
      (this.eventPropertyPayload.website = window.location.host),
      (this.eventPropertyPayload.page = window.location.pathname),
      (this.eventPropertyPayload.browser = this.browser),
      (this.eventPropertyPayload.browserVersion = this.browserVersion),
      (this.eventPropertyPayload.os = this.os),
      (this.eventPropertyPayload.deviceType = this.deviceType),
      (this.eventPropertyPayload.screenHeight = this.screenHeight),
      (this.eventPropertyPayload.screenWidth = this.screenWidth),
      (this.eventPropertyPayload.ip = this.userIP),
      (this.eventPropertyPayload.libraryType = this.libraryType),
      (this.eventPropertyPayload.libraryVersion = this.libraryVersion),
      (this.eventPropertyPayload.referrer = this.referrer || "direct"),
      (this.eventPropertyPayload.referring_website =
        this.referrerDomain || "direct"),
      (this.eventPropertyPayload.search_keywords =
        this.searchKeywords || "none"),
      (savedPropertiesSnapshot = this.savedPropertyPayload),
      this.createCookie(
        `fusion_${this.apiKey}`,
        encodeURIComponent(JSON.stringify(this.savedPropertyPayload)),
        730
      ),
      localStorage.setItem(
        `fusion_${this.apiKey}`,
        encodeURIComponent(JSON.stringify(this.savedPropertyPayload))
      );
  }
  track(e, t) {
    if (
      ((this.event = e),
      (this.userDefinedProperties = void 0 === t ? "" : t),
      (this.eventPropertyPayload = savedPropertiesSnapshot),
      void 0 !== t)
    )
      for (const e in this.userDefinedProperties)
        this.eventPropertyPayload[e] = `${this.userDefinedProperties[e]}`;
    (this.eventPropertyPayload.website = window.location.host),
      (this.eventPropertyPayload.page = window.location.pathname),
      (this.eventPropertyPayload.referrer = this.referrer || "direct"),
      (this.eventPropertyPayload.referring_website =
        this.referrerDomain || "direct"),
      (this.eventPropertyPayload.search_keywords =
        this.searchKeywords || "none"),
      (this.propertiesToSend = JSON.stringify(this.eventPropertyPayload));
    new XMLHttpRequest();
    this.time = new Date().getTime();
    let i = new URLSearchParams({
      event: this.event,
      properties: this.propertiesToSend,
      timestamp: new Date().getTime(),
      apiKey: this.apiKey,
    });
    navigator.sendBeacon(`${this.apiHost}/event`, i);
  }
  sessionSend(e) {
    let t = new URLSearchParams({
      recording: JSON.stringify(e),
      sessionId: sessionStorage.getItem("sessionId"),
      time: 1,
    });
    navigator.sendBeacon(`${api}session`, t);
  }
  firstSessionSend(e) {
    let t = {
      recording: JSON.stringify(e),
      sessionId: sessionStorage.getItem("sessionId"),
      time: 0,
    };
    fetch(`${api}session`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(t),
    });
  }
  startRecordingData() {
    stopfn = rrweb.record({
      emit: (e) => {
        !0 === recordingStart
          ? sessionRecordingEvents.length < 15
            ? sessionRecordingEvents.push(e)
            : ((recordingStart = !1),
              this.firstSessionSend(sessionRecordingEvents),
              (sessionRecordingEvents = []),
              setTimeout(() => {
                firstBitSent = !0;
              }, 200))
          : firstBitSent && this.sessionSend(e);
      },
    });
  }
  init(e, t, i, r) {
    (this.apiHost = t),
      (this.apiKey = e),
      this.setup(),
      !0 === r &&
        (document.addEventListener(
          "startRecording",
          (e) => {
            this.startRecordingData();
          },
          !1
        ),
        document.dispatchEvent(startRecordingEvent)),
      !0 === i &&
        (document.addEventListener("click", (e) => {
          const t = e.target.closest("button"),
            i = e.target.closest("a");
          if ((console.log(t, i), t && "fusion-no-capture" !== t.className)) {
            let e = t.innerText,
              i = t.id,
              r = t.className,
              s = e || i || r || "unnamed";
            this.track(`${s} button clicked`, "");
          } else if (i && "fusion-no-capture" !== i.className) {
            let e = i.innerText,
              t = i.id,
              r = i.className,
              s = e || t || r || "unnamed";
            this.track(`${s} link clicked`, "");
          }
        }),
        document.addEventListener("change", (e) => {
          const t = e.target.closest(
            'input:not([type="checkbox"], [type="radio"])'
          );
          if (t && "fusion-no-capture" !== t.className && t.value.length > 0) {
            let e = "",
              i = t.id,
              r = t.className;
            void 0 !== t.attributes.placeholder &&
              (e = t.attributes.placeholder.value);
            let s = e || i || r || "unnamed";
            this.track(`${s} filled`, "");
          }
        }),
        document.addEventListener("click", (e) => {
          const t = e.target.closest('input[type="checkbox"]:checked');
          if (t && "fusion-no-capture" !== t.className) {
            let e = t.value,
              i = t.id,
              r = t.className,
              s = e || i || r || "unnamed";
            this.track(`${s} checked`, "");
          }
        }),
        document.addEventListener("click", (e) => {
          const t = e.target.closest('input[type="radio"]:checked');
          if (t && "fusion-no-capture" !== t.className) {
            let e = t.value,
              i = t.id,
              r = t.className,
              s = e || i || r || "unnamed";
            this.track(`${s} checked`, "");
          }
        }),
        document.addEventListener("change", (e) => {
          const t = e.target.closest("select");
          if (t && "fusion-no-capture" !== t.className) {
            let e = t.value,
              i = t.id,
              r = t.className,
              s = e || i || r || "unnamed";
            this.track(`${s} selected`, "");
          }
        }),
        document.addEventListener("submit", (e) => {
          const t = e.target.closest("form");
          if (t && "fusion-no-capture" !== t.className) {
            let e,
              i,
              r = t.id,
              s = t.className;
            void 0 !== t.attributes.name && (e = t.attributes.name.value),
              void 0 !== t.attributes.action && (i = t.attributes.action.value);
            let o = e || i || r || s || "unnamed";
            this.track(`${o} form submitted`, "");
          }
        }),
        document.addEventListener("click", (e) => {
          const t = e.target.closest('input[type="file"]');
          if (t && "fusion-no-capture" !== t.className) {
            let e = t.value,
              i = t.id,
              r = t.className,
              s = e || i || r || "unnamed";
            this.track(`${s} input clicked`, "");
          }
        }));
  }
}
const fusion = new Fusion();
function getCookie(e) {
  let t = e + "=",
    i = decodeURIComponent(document.cookie).split(";");
  for (let e = 0; e < i.length; e++) {
    let r = i[e];
    for (; " " == r.charAt(0); ) r = r.substring(1);
    if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
  }
  return "";
}
var visibilityHidden, visibilityChange;
void 0 !== document.hidden
  ? ((visibilityHidden = "hidden"), (visibilityChange = "visibilitychange"))
  : void 0 !== document.mozHidden
  ? ((visibilityHidden = "mozHidden"),
    (visibilityChange = "mozvisibilitychange"))
  : void 0 !== document.msHidden
  ? ((visibilityHidden = "msHidden"), (visibilityChange = "msvisibilitychange"))
  : void 0 !== document.webkitHidden &&
    ((visibilityHidden = "webkitHidden"),
    (visibilityChange = "webkitvisibilitychange")),
  document.addEventListener(visibilityChange, function () {
    document.visibilityState === visibilityHidden && fusion.track("PageHide");
  }),
  (window.onbeforeunload = function () {
    fusion.track("Pageleave");
  });
