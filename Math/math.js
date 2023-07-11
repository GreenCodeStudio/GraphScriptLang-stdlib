import {GSLClass} from "GraphScriptLang-core/GSLClass";
import {NativeFunction} from "GraphScriptLang-core/NativeFunction";

export const GSLMath = new GSLClass('GSL/Math');
GSLMath.addFunction('add', function ({a, b}) {
    return {result: a + b}
}, {
    pure: true,
    static: true,
    inputs: {a: {type: 'number', name: 'a'}, b: {type: 'number', name: 'b'}},
    outputs: {result: {type: 'number', name: 'result'}}
});

GSLMath.addFunction('subtract', function ({a, b}) {
    return {result: a - b}
}, {
    pure: true,
    static: true,
    inputs: {a: {type: 'number', name: 'a'}, b: {type: 'number', name: 'b'}},
    outputs: {result: {type: 'number', name: 'result'}}
});

GSLMath.addFunction('multiply', function ({a, b}) {
    return {result: a * b}
}, {
    pure: true,
    static: true,
    inputs: {a: {type: 'number', name: 'a'}, b: {type: 'number', name: 'b'}},
    outputs: {result: {type: 'number', name: 'result'}}
});

GSLMath.addFunction('divide', function ({a, b}) {
    return {result: a / b}
}, {
    pure: true,
    static: true,
    inputs: {a: {type: 'number', name: 'a'}, b: {type: 'number', name: 'b'}},
    outputs: {result: {type: 'number', name: 'result'}}
});

