"use strict";

var shallowCompare = require("react-addons-shallow-compare")

function excludeFunctions(obj) {
    var result = {};

    for (var prop in obj) {
        if (typeof obj[prop] !== "function") {
            result[prop] = obj[prop];
        }
    }

    return result;
}

function shouldComponentUpdate(nextProps, nextState) {
    var instance = {
        props: excludeFunctions(this.props),
        state: excludeFunctions(this.state)
    };
    return shallowCompare(instance, excludeFunctions(nextProps), excludeFunctions(nextState));
}

module.exports = shouldComponentUpdate;