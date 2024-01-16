sap.ui.define([
    "sap/ui/core/UIComponent"

], function (UIComponent) {

    "use strict";
    return UIComponent.extend("fiorinet.template.Component", {

        /*
        metadata: {
            rootView: {
                "viewName": " fiorinet.template.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            }
        },
        */
        metadata: {
            manifest: "json"
        },


        // Initilization
        init: function () {

            // chama função init da super classe
            UIComponent.prototype.init.apply(this, arguments);
        }

        // Implementação Customizada
        // Implementação Customizada

    });
});