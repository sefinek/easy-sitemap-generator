import chalk from 'chalk';

const P_INFO = chalk.blue.bold('[INFO]: ');
const P_SUCCESS = chalk.green.bold('[SUCCESS]: ');
const P_ERROR = chalk.red.bold('[ERROR]: ');
const P_WARN = chalk.yellow.bold('[WARN]: ');

const logInfo = msg => console.log(P_INFO + msg);
const logSuccess = msg => console.log(P_SUCCESS + msg);
const logError = msg => console.error(P_ERROR + msg);
const logWarning = msg => console.warn(P_WARN + msg);

export { logInfo, logSuccess, logError, logWarning };
