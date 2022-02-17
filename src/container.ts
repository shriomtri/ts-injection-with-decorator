import { find } from "lodash";
import { LooseObject } from "./types";

export class Container {
  private _providers: LooseObject = {}

  public resolve(token: string){
    const matchedProvider = find(
      this._providers,
      (_provider, key) => key === token
    );
    
    if(matchedProvider){
      return matchedProvider
    } else {
      throw new Error(`No provider found for ${token}`)
    }
  }
}

export const container = new Container()