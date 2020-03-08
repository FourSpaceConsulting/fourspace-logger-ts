import { Logger } from "./logger-api";

export type LoggerImplementation = (name: string) => Logger;

