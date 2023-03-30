export const localeCodes = ["en","th"]

export const localeMessages = {
  "en": [],
  "th": [],
}

export const additionalMessages = Object({"en":[],})

export const resolveNuxtI18nOptions = async (context) => {
  const nuxtI18nOptions = Object({})
  const vueI18nOptionsLoader = async (context) => Object({"legacy":false,"locale":"th","messages": Object({"en":{
  "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["home"])};fn.source="home";return fn;})(),
  "events": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["events"])};fn.source="events";return fn;})(),
  "souvenirs": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["souvenirs"])};fn.source="souvenirs";return fn;})(),
  "news": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["news"])};fn.source="news";return fn;})(),
  "login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["login"])};fn.source="login";return fn;})(),
  "register": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["register"])};fn.source="register";return fn;})()
},"th":{
  "home": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["หน้าหลัก"])};fn.source="หน้าหลัก";return fn;})(),
  "events": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["งานแสดง"])};fn.source="งานแสดง";return fn;})(),
  "souvenirs": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ของที่ระลึก"])};fn.source="ของที่ระลึก";return fn;})(),
  "news": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["ข่าวสาร"])};fn.source="ข่าวสาร";return fn;})(),
  "login": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["เข้าสู่ระบบ"])};fn.source="เข้าสู่ระบบ";return fn;})(),
  "register": (()=>{const fn=(ctx) => {const { normalize: _normalize } = ctx;return _normalize(["สมัครสมาชิก"])};fn.source="สมัครสมาชิก";return fn;})()
},}),})
  nuxtI18nOptions.vueI18n = await vueI18nOptionsLoader(context)
  nuxtI18nOptions.locales = [Object({"code":"en","name":"English","icon":"en.png","file":"en.js","path":undefined}),Object({"code":"th","name":"ไทย","icon":"th.png","file":"th.js","path":undefined})]
  nuxtI18nOptions.defaultLocale = "th"
  nuxtI18nOptions.defaultDirection = "ltr"
  nuxtI18nOptions.routesNameSeparator = "___"
  nuxtI18nOptions.trailingSlash = false
  nuxtI18nOptions.defaultLocaleRouteNameSuffix = "default"
  nuxtI18nOptions.strategy = "no_prefix"
  nuxtI18nOptions.lazy = false
  nuxtI18nOptions.langDir = "/locales"
  nuxtI18nOptions.rootRedirect = null
  nuxtI18nOptions.detectBrowserLanguage = Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true})
  nuxtI18nOptions.differentDomains = false
  nuxtI18nOptions.baseUrl = ""
  nuxtI18nOptions.dynamicRouteParams = false
  nuxtI18nOptions.customRoutes = "page"
  nuxtI18nOptions.pages = Object({})
  nuxtI18nOptions.skipSettingLocaleOnNavigate = false
  nuxtI18nOptions.onBeforeLanguageSwitch = (() => "")
  nuxtI18nOptions.onLanguageSwitched = (() => null)
  nuxtI18nOptions.types = undefined
  nuxtI18nOptions.debug = false
  return nuxtI18nOptions
}

export const nuxtI18nOptionsDefault = Object({vueI18n: undefined,locales: [],defaultLocale: "",defaultDirection: "ltr",routesNameSeparator: "___",trailingSlash: false,defaultLocaleRouteNameSuffix: "default",strategy: "prefix_except_default",lazy: false,langDir: null,rootRedirect: null,detectBrowserLanguage: Object({"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true}),differentDomains: false,baseUrl: "",dynamicRouteParams: false,customRoutes: "page",pages: Object({}),skipSettingLocaleOnNavigate: false,onBeforeLanguageSwitch: (() => ""),onLanguageSwitched: (() => null),types: undefined,debug: false})

export const nuxtI18nInternalOptions = Object({__normalizedLocales: [Object({"code":"en","name":"English","icon":"en.png","file":"en.js","path":undefined}),Object({"code":"th","name":"ไทย","icon":"th.png","file":"th.js","path":undefined})]})
export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const isSSG = false
export const isSSR = false
