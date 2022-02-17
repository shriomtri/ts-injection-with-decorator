import { container } from "./container";
import { LooseClass } from "./types";

export function Injectable(token: string): Function {
  return function (target: LooseClass): void {
    container.reserve(token, target);
  }
}