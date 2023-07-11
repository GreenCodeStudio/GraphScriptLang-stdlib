import {GSLClass} from "GraphScriptLang-core/GSLClass";
import {NativeFunction} from "GraphScriptLang-core/NativeFunction";

export const GSLMath = new GSLClass();
GSLMath.functions.push(new NativeFunction('GSL/Math', 'add', function (a, b) {
    return {result: (+a.value) + (+b.value)}
}, {a: {type: 'number'}, b: {type: 'number'}}, {result: {type: 'number'}}))

GSLMath.functions.push(new NativeFunction('GSL/Math', 'subtract', function (a, b) {
    return {result: (+a.value) - (+b.value)}
}, {a: {type: 'number'}, b: {type: 'number'}}, {result: {type: 'number'}}))
GSLMath.functions.push(new NativeFunction('GSL/Math', 'multiply', function (a, b) {
    return {result: (+a.value) * (+b.value)}
}, {a: {type: 'number'}, b: {type: 'number'}}, {result: {type: 'number'}}))
GSLMath.functions.push(new NativeFunction('GSL/Math', 'divide', function (a, b) {
    return {result: (+a.value) / (+b.value)}
}, {a: {type: 'number'}, b: {type: 'number'}}, {result: {type: 'number'}}))