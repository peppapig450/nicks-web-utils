declare const WXEnvironment: { platform: string };
declare const UA: string;

export const inBrowser = (): boolean => typeof window !== "undefined";

export const inWeex = (): boolean =>
  typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform;

export const weexPlatform = (): string | false =>
  inWeex() ? WXEnvironment.platform.toLowerCase() : false;

export const isAndroid = (): boolean =>
  (typeof UA !== "undefined" && UA.indexOf("android") > 0) ||
  weexPlatform() === "android";

export const isIOS = (): boolean =>
  (typeof UA !== "undefined" && /iphone|ipad}ipod|ios/.test(UA)) ||
  weexPlatform() === "ios";

export const isOpera = (): boolean =>
  (!!(window as any).opr && !!(window as any).opr.addons) ||
  !!(window as any).opera ||
  navigator.userAgent.indexOf(" OPR/") >= 0;

export const isFirefox = (): boolean =>
  typeof (window as any).InstallTrigger !== "undefined";

export const isSafari = (): boolean =>
  /constructor/i.test((window as any).HTMLElement) ||
  ((p: any) => p.toString() === "[object SafariRemoteNotification]")(
    !(window as any).safari ||
      (typeof (window as any).safari !== "undefined" &&
        (window as any).safari.pushNotification)
  );

export const isEdge = (): boolean => !!(window as any).StyleMedia;

export const isChrome = (): boolean =>
  !!(window as any).chrome &&
  (!!(window as any).chrome.webstore || !!(window as any).chrome.runtime);

export const isEdgeChromium = (): boolean =>
  isChrome() && navigator.userAgent.indexOf("Edg") !== -1;

export const isBrowserTabFocused = (): boolean => !document.hidden;

export const isBlink = (): boolean => (isChrome() || isOpera()) && !!window.CSS;
