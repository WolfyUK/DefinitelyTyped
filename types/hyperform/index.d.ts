// Type definitions for hyperform 0.9
// Project: https://github.com/hyperform/hyperform
// Definitions by: Marc Woolfson <https://github.com/WolfyUK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var hyperform: {
    (form: any, ...args: any[]): any;
    version: string;
    checkValidity: (...args: any[]) => any;
    reportValidity: (element: any) => any;
    setCustomValidity: (element: any, msg: any) => void;
    stepDown: (element: any, ...args: any[]) => void;
    stepUp: (element: any, ...args: any[]) => void;
    validationMessage: (element: any) => any;
    ValidityState: {
        (element: any): any;
        prototype: {
            [x: string]: any;
        };
        cache: WeakMap<object, any>;
    };
    valueAsDate: (element: any, ...args: any[]) => Date;
    valueAsNumber: (element: any, ...args: any[]) => number;
    willValidate: (element: any) => boolean;
    setLanguage: (lang: any) => any;
    addTranslation: (lang: any, catalog: any) => any;
    setRenderer: (renderer: any, action: any) => any;
    addValidator: (element: any, validator: any) => any;
    setMessage: (element: any, validator: any, message: any) => any;
    addHook: (hook: any, action: any, position: any) => any;
    removeHook: (hook: any, action: any) => any;

    // TODO: Remove in next non-patch version
    set_language: (lang: any) => any;
    add_translation: (lang: any, catalog: any) => any;
    set_renderer: (renderer: any, action: any) => any;
    add_validator: (element: any, validator: any) => any;
    set_message: (element: any, validator: any, message: any) => any;
    add_hook: (hook: any, action: any, position: any) => any;
    remove_hook: (hook: any, action: any) => any;
};

declare module "hyperform" {
    export = hyperform;
}
