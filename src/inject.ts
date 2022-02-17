import { container } from "./container";
import { ClassOrObject, LooseClass } from "./types";

export function Inject(token: string) {
  return function(target: ClassOrObject, key: string){
    Object.defineProperty(target, key, {
      get: () => container.resolve(token),
      enumerable: true,
      configurable: true
    })
  }
}