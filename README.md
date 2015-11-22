# react-pure-render-ignore-functions
PureRenderMixin for react.js that ignores functions when comparing state and props. Available both as a mixin and a ES7 decorator.

#Installation
    npm install react-pure-render-ignore-functions react-addons-shallow-compare

#Usage
As a mixin:

    var PureRenderIgnoreFunctionsMixin = require("react-pure-render-ignore-functions");

    React.createClass({
        mixins: [PureRenderIgnoreFunctionsMixin]
    })

As a decorator:

    var PureRenderIgnoreFunctionsDecorator = require("react-pure-render-ignore-functions/decorator");
    
    @PureRenderIgnoreFunctionsDecorator
    class comp extends React.Component {}