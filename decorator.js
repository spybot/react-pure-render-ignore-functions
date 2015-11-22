"use strict";

var shouldComponentUpdate = require("./lib/shouldComponentUpdate");

module.exports = function(target) {
    target.prototype.shouldComponentUpdate = shouldComponentUpdate;
}