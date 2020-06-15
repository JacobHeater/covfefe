import { isAndroid, isIOS } from "tns-core-modules/platform";

export class PlatformSniffer {
  static get isIos(): boolean {
    return isIOS;
  }

  static get isAndroid(): boolean {
    return isAndroid;
  }
}
