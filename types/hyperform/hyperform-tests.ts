import * as hyperform from "hyperform";

const form = {};
const arg1 = {};
const arg2 = {};
hyperform(form, arg1, arg2); // $ExpectType any

hyperform.version; // $ExpectType string
hyperform.checkValidity(arg1, arg2); // $ExpectType any

// WIP WIP WIP WIP

// TODO: Remove in next non-patch version
const hook = {};
const action = {};
const position = {};
hyperform.add_hook(hook, action, position); // $ExpectType any
