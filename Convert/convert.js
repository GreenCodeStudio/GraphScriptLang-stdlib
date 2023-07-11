import {GSLClass} from "GraphScriptLang-core/GSLClass";
import {NativeFunction} from "GraphScriptLang-core/NativeFunction";

export const GSLConvert = new GSLClass('GSL/Convert');
GSLConvert.addFunction('numberToString', function (x) {
    return {string:'' + x.number}
}, {
    pure: true,
    static: true,
    inputs: {number: {type: 'number', name: 'number'}},
    outputs: {string: {type: 'string', name: 'string'}}
});

GSLConvert.addFunction('stringToNumber', function (x) {
    return {number:(+x.string)}
}, {
    pure: true,
    static: true,
    inputs: {string: {type: 'string', name: 'string'}},
    outputs: {number: {type: 'number', name: 'number'}}
});
