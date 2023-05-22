import {
    type_log
} from './constant.js'

function logger(log, type = 'log') {
    console[type](log);
}
export default logger;