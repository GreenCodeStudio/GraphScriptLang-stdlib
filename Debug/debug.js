import {GSLClass} from "GraphScriptLang-core/GSLClass";
import {NativeFunction} from "GraphScriptLang-core/NativeFunction";
import {GSLMath} from "../Math/math";

export const GSLDebug = new GSLClass('GSL/Debug');

GSLDebug.addFunction('print', function (x) {
    GSLDebug.debug(x.value);
}, {
    pure: true,
    static: true,
    inputs: {value: {type: 'string', name: 'value'}}
});

