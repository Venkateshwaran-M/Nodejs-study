import * as readline from 'node:readline';

import { stdin as input, stdout as output } from 'node:process';

const r1 = readline.createInterface({ input, output, terminal: true });

r1.question('What do you think of node.js?', (answer) => {
    console.log(`Thankyou for your feed back: ${answer}`);
});