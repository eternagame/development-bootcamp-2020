import IrcClient from "irc-framework";

export {}

const status: HarvestingStatus = "RESOURECE_DEPLETED";

console.log(MAXIMAL_ARROWS);

const client = new IrcClient();

client.listen('DISCONNECT', (data) => console.log(data.user));
client.listen('NOTICE', (data) => console.log(data.message));