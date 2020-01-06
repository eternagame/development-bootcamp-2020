// This type will be automatically imported to all ts files
declare type HarvestStatus = 'OKAY' | 'HARVEST_DEPLETED';

declare enum AttackStatus { OK, NO_ARROWS };

// You can also export variables, to show they are loaded globally
// NOTE: the variables have to be loaded globally from JS - otherwise you'll get an error when *running*
declare const MAXIMAL_ARROWS = 500;

// Declaring modules is useful if we have a javascript module, but we want to import it form typescript

// Everything exported from here will be used when you write:
// import IrcClient, { NamedExports } from 'irc-framework
declare module 'irc-framework' {
  export default class IrcClient {
    send(message: string): boolean;
    // ONLY in declaration files, we can have multiple overrides of the same function!
    send(message: string, callback: (error: CallbackParams) => void): void;
  }

  // We can export TS-only things which don't appear in the original javascript module
  export interface CallbackParams {
    error?: string;
    status: number;
  }
}