import _ from 'lodash';
import chalk from 'chalk';

const a = [1, 2, 3];
const b = [4, 5, 6];

const diff = _.merge(a, b);

console.log(chalk.red.bold(diff));