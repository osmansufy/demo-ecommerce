export default class CheckHelper {
  static isEmptyArray(arr: any[]): boolean {
    if (Array.isArray(arr) && arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  static isEmptyObject(obj: any): boolean {
    if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
      return true;
    } else {
      return false;
    }
  }
}
