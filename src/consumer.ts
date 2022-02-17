import { Inject } from "./inject";
import { Injectable } from "./injectable";

@Injectable('timeService')
export class TimeService {
  public getCurrentDate(): Date {
    return new Date(Date.now())
  }
}

@Injectable('consumer')
export class Consumer {

  @Inject('timeService')
  private timeService : TimeService

  public currentDate: string;

  constructor() {
    this.currentDate = this.timeService.getCurrentDate().toISOString();
  }
}
