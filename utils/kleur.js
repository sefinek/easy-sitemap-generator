const kleur = require('kleur');

const P_INFO = kleur.blue().bold('[INFO]: ');
const P_SUCCESS = kleur.green().bold('[SUCCESS]: ');
const P_ERROR = kleur.red().bold('[ERROR]: ');
const P_WARN = kleur.yellow().bold('[WARN]: ');

const logInfo = msg => console.log(P_INFO + msg);
const logSuccess = msg => console.log(P_SUCCESS + msg);
const logError = msg => console.error(P_ERROR + msg);
const logWarning = msg => console.warn(P_WARN + msg);
const logInfoStart = msg => process.stdout.write(P_INFO + msg);
const logInfoAppend = msg => process.stdout.write(`\r\x1b[K${P_INFO}${msg}\n`);

module.exports = { logInfo, logSuccess, logError, logWarning, logInfoStart, logInfoAppend };