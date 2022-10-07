import {
  AggregatorContext,
  GenericContext,
  RailwayError,
} from '@fstnetwork/runtime';

export {
  EventPayload,
  MessagePayload,
  HttpPayload,
  Database,
} from '@fstnetwork/runtime';

export abstract class AbstractLogic {
  abstract run(): Promise<void>;
  abstract handleError(error: RailwayError): Promise<void>;
}

export abstract class AggregatorLogic extends AbstractLogic {
  protected get context() {
    return Saffron.runtime.context as AggregatorContext;
  }
}

export abstract class GenericLogic extends AbstractLogic {
  protected get context() {
    return Saffron.runtime.context as GenericContext;
  }
}

export function Logic(): ClassDecorator {
  return (target: object) => {
    const logic = new (target as new () => AbstractLogic)();
    Saffron.runtime.registerMain(logic.run.bind(logic));
    Saffron.runtime.registerErrorHandler(logic.handleError.bind(logic));
  };
}

export function Context(): PropertyDecorator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (target: Object, propertyKey: string | symbol) => {
    Object.defineProperty(target, propertyKey, {
      get() {
        return Saffron.runtime.context;
      },
    });
  };
}
