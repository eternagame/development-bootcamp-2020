export {}

let status: HarvestStatus;
status = "HARVEST_DEPLETED";

// Will crash when executing the script
const attackerStatus = AttackStatus.NO_ARROWS;

console.log(MAXIMAL_ARROWS);

import IrcClient from 'irc-framework';

const client = new IrcClient();
const flag = client.send('abc'); // type: boolean
const result = client.send('abc', (x) => console.log(x.status)); // result has a type of void, i.e none