sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) {

    "use strict";
    return Controller.extend("fiorinet.template.controller.App", {

        ///EVENTOS PADRÃO EQUIVALENTE ABAP
        //INITIALIZATION
        onInit: function () {
            //alert("on init");

            //define objeto de dados
            var oMsg = {
                MsgInicial: "Seja bem vindo!"
            };

            //cria modelo json
            var oMsgModel = new JSONModel();

            //atribui objeto de dados ao modelo
            oMsgModel.setData(oMsg);

            //Data Binding
            // Adiciona os dados à view
            //this.getView().setModel(oMsgModel, "messages");
            var view = this.getView();
            view.setModel(oMsgModel, "messages");

            // Modelo 2
            // Cria um novo modelo ja definindo o objeto
            var oPessoaModel = new JSONModel({
                nome: "Steven",
                sobrenome: "Job",
                habilitado: true,
                endereco: {
                    rua: "Avenida Victor Hugo 156",
                    cidade: "Paris",
                    cep: "12345",
                    pais: "França"
                }
            });

            // Atribui o modelo à view 
            this.getView().setModel(oPessoaModel, "pessoa");


            // cria array (lista de registros)
            var oFuncionarios = {
                Funcionarios: [
                    {
                        nome: "Steven",
                        sobrenome: "Job",
                        habilitado: true,
                    },
                    {
                        nome: "Burt",
                        sobrenome: "Preynolds",
                        habilitado: false,
                    },
                    {
                        nome: "Mike",
                        sobrenome: "Taison",
                        habilitado: true,
                    }
                ]
            };


            //cria um novo modelo ja com objeto definido
            var oFunModel = new JSONModel(oFuncionarios);
            this.getView().setModel(oFunModel, "empregados")

        },

        onFuncionarioSelected: function (oEvent) {
            var oSelectedItem = oEvent.getSource();
            //se não for modelo default, informar nome do modelo. 
            //Ex:getBindingContext("pessoa");
            var oContext = oSelectedItem.getBindingContext("empregados");
            var sPath = oContext.getPath();
            var oPanel = this.byId("detalhePanel");
            oPanel.bindElement({
                path: sPath,
                // se não for modelo default, preencher nome do modelo
                model: "empregados"
        //opcional. se tiver associação com outra entidade, pode ser informado 
        //propriedade de navegação
                //expand: 'endereco'
            }
            );
        },

        //MODULE PBO = AT SELECTION SCREEN OUTPUT
        onBeforeRendering: function () {
            //alert("onBeforeRendering");
        },

        //MODULE PAI = AT SELECION SCREEN
        onAfterRendering: function () {
            //alert("onAfterRendering");
        },

        //AT EXIT COMMAND
        onExit: function () {
            //alert("on Exit");
        },


        // Implementar Metodos Customizados
        onClique: function () {
            /*
            // Mostrar alerta usando Javascript nativo 
            MessageToast.show("Olá pelo Controller");
            */

            //coletar o modelo que está na tela 
            var oModel = this.getView().getModel("messages");

            //coletar os dados do modelo
            var oDados = oModel.getData();

            MessageToast.show(oDados.MsgInicial);
        }
        // Implementar Metodos Customizados

    });
});