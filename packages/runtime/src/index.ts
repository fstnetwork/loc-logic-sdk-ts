import { AggregatorContext, GenericContext } from './context';
import { Runtime } from './runtime';

export {
  Database,
  DatabaseAgent,
  DatabaseClient,
  Event,
  EventAgent,
  FileStorageAgent,
  FileStorageAgentClient,
  HttpAgent,
  HttpAgentClient,
  LocalStorageAgent,
  LoggingAgent,
  IResultAgent,
  ResultAgent,
  SessionStorageAgent,
  Mail,
  MailAgent,
  MailAgentClient,
  LogicVariable,
} from './agent';
export type { AggregatorContext, GenericContext } from './context';
export type { Railway, RailwayError, Task } from './primitive';
export type {
  VersionedIdentityContext,
  Pattern,
  PatternResult,
  Search,
  SearchResult,
} from './types/event';
export type {
  IdentityContextFor_Uuid as NonVersionedIdentityContext,
  EventPayload,
  HttpPayload,
  MessagePayload,
  Payload,
} from './types/payload';

Object.assign(globalThis, {
  AggregatorContext,
  GenericContext,
});

// eslint-disable-next-line import/no-mutable-exports
export let runtime: Runtime<AggregatorContext | GenericContext>;

export function genericLogic() {
  const context = new GenericContext();
  runtime = new Runtime(context);
}

export function aggregatorLogic() {
  const context = new AggregatorContext();
  runtime = new Runtime(context);
}
