
import {GSLClass} from "GraphScriptLang-core/GSLClass";
import {NativeFunction} from "GraphScriptLang-core/NativeFunction";

export const GSLDebug=new GSLClass();
GSLDebug.functions.push(new NativeFunction('GSL/Debug', 'print',function (a) {console.log('printing', a)}, {value:{type:'string'}}))