import { LoggerFactory, Logger } from './logger-api';
import { LoggerImplementation } from './logger-implementation';
import { DefaultLogger } from './default-logger';

function DefaultImplementation(name: string) {
  return new DefaultLogger();
}

export class LogFactoryImpl implements LoggerFactory {
  private _implementation: LoggerImplementation;
  constructor() {
    this._implementation = DefaultImplementation;
  }
  public bindLogger(implementation: LoggerImplementation) {
    this._implementation = implementation;
  }
  public getLogger(name: string): Logger {
    return this._implementation(name);
  }
}
