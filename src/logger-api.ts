import { LoggerImplementation } from './logger-implementation';
import { LoggerBindingManagerImpl } from './logger-binding-manager';

export interface Logger {
  trace(...messages: any[]): void;
  debug(...messages: any[]): void;
  info(...messages: any[]): void;
  warn(...messages: any[]): void;
  error(...messages: any[]): void;
  fatal(...messages: any[]): void;
  isTraceEnabled(): boolean;
  isDebugEnabled(): boolean;
  isInfoEnabled(): boolean;
  isWarnEnabled(): boolean;
  isErrorEnabled(): boolean;
  isFatalEnabled(): boolean;
}

export interface LoggerFactory {
  getLogger(name: string): Logger;
}

export interface LoggerBinding {
  loggerImplementation: LoggerImplementation;
  vendor: string;
}

export const LogBindingManager = new LoggerBindingManagerImpl();
export const LogFactory = LogBindingManager.LoggerFactory;
