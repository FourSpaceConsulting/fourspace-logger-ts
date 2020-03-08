import { LoggerBinding, LoggerFactory } from './logger-api';
import { LogFactoryImpl } from './logger-factory';

export interface LoggerBindingManager {
  registerBinding(binding: LoggerBinding): void;
}

export class LoggerBindingManagerImpl implements LoggerBindingManager {
  private readonly loggerFactory: LogFactoryImpl;
  constructor() {
    this.loggerFactory = new LogFactoryImpl();
  }
  public registerBinding(binding: LoggerBinding) {
    // tslint:disable-next-line:no-console
    console.log('Registered log binding:' + binding.vendor);
    this.loggerFactory.bindLogger(binding.loggerImplementation);
  }
  public get LoggerFactory(): LoggerFactory {
    return this.loggerFactory;
  }
}
