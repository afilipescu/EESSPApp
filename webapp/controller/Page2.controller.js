sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "./utilities",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, Utilities, History) {
        "use strict";
        var PersonDetailsModel = new sap.ui.model.json.JSONModel();
        var EmplDet;
        return BaseController.extend("com.sap.build.standard.eesspApp.controller.Page2", {

           getRouter : function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        },

        onInit: function () {

            var controller = this;
            this.getView().setModel(PersonDetailsModel);
            //this.getOwnerComponent().getRouter().getRoute("Page2").attachPatternMatched(function(oEvent) {
                EmplDet = sap.ui.getCore().getModel("PersonDetailsModel");
                PersonDetailsModel.setData(EmplDet.getData());
                PersonDetailsModel.updateBindings();
                console.log(PersonDetailsModel);
           // });

           var modelPerson = new sap.ui.model.json.JSONModel();
           this.getView().setModel(modelPerson, "modelPerson");
           this._readDataPerson(PersonDetailsModel.oData.id_angajat);
           console.log(modelPerson);
       },

       _readDataPerson: function(id_angajat) {
        var model = this.getView().getModel("modelPerson");
        $.ajax({
            method: "GET",
            url: "http://localhost:8000/person/" + id_angajat,
            async: false,
        })
        .done(function(oResponse) {
            model.setData({
                "Person": oResponse
            });
            model.updateBindings(true);
        })
        .fail(function() {
            alert("error");
        });
    },




});
    }, /* bExport= */true);
