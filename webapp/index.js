sap.ui.define([

    //"sap/m/Text",
    //"sap/m/Button",
    //"sap/m/Label"
    //"sap/ui/core/mvc/XMLView",
    "sap/ui/core/ComponentContainer"

], function (ComponentContainer) {
    "use strict";

    //alert("UI5 is ready");

    /*
    new Text({
        text: "Olá Mundo pelo Index"
    }).placeAt("content");

    new Button({
        text: "Clicar"
    }).placeAt("content");

    new Button({
        text: "Não Clicar"
    }).placeAt("content");
    */

    /*
    XMLView.create({
        viewName: "fiorinet.template.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
    */

    
    new ComponentContainer({
        name: "fiorinet.template",
        settings: {
            id: "template"
        },
        async: true
    }).placeAt("content");



});