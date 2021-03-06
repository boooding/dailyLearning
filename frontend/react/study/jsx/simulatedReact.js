import {REACT_ELEMENT} from "./constants";
import {wrapToVdom} from "./utils";

function createElement(type, config, children) {
    let ref,key;
    if (config) {
        ref = config.ref;
        key = config.key;
        delete config.ref;
        delete config.key;
    }
    let props = {...config};
    if (arguments.length > 3) {
        props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdom);
    } else if (arguments.length === 3) {
        props.children = wrapToVdom(children);
    }
    return {
        $$typeof:REACT_ELEMENT,
        type,
        ref,
        key,
        props
    }
}
const React = {
    createElement
}

export default React;
