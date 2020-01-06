declare type HarvestingStatus = 'OKAY' | 'RESOURECE_DEPLETED';

declare enum AttackingStatus {OK, NO_ARROWS}

declare const MAXIMAL_ARROWS = 500;

declare module 'irc-framework' {
  export default class IrcClient {
    listen(type: 'PRIVMSG', callback: (data: PrivmsgEventArgs) => void): IrcClient;
    listen(type: 'NOTICE', callback: (data: NoticeEventArgs) => void): IrcClient;
    listen(type: 'DISCONNECT', callback: (data: DisconnectEventArgs) => void): IrcClient;
  }

  export interface PrivmsgEventArgs {
    sender: string;
    message: string;
  }
  export interface NoticeEventArgs {
    message: string;
  }
  interface DisconnectEventArgs {
    user: string;
  }
}