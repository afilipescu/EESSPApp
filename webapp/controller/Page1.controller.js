sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "./utilities",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, Utilities, History) {
        "use strict";

        return BaseController.extend("com.sap.build.standard.eesspApp.controller.Page1", {

            handleRouteMatched: function (oEvent) {

              var oParams = {}; 

              if (oEvent.mParameters.data.context) { 
                  this.sContext = oEvent.mParameters.data.context;
                  var oPath; 
                  if (this.sContext) { 
                      oPath = {path: "/" + this.sContext, parameters: oParams}; 
                      this.getView().bindObject(oPath);
                  } 
              }
          },

          onInit: function () {

            // this.mBindingOptions = {};
            // this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // this.oRouter.getTarget("Page1").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

            var modelPersons = new sap.ui.model.json.JSONModel();
            this.getView().setModel(modelPersons, "modelPersons");
            this.readData();


        },
        
        readData : function () {

            this._readDataPersons();

        },
         //GET Employees
         _readDataPersons: function() {
            var model = this.getView().getModel("modelPersons");
            $.ajax({
                method: "GET",
                url: "http://localhost:8000/person",
            })
            .done(function(oResponse) {
                model.setData({
                    "Persons": oResponse
                });
                model.updateBindings(true);
            })
            .fail(function() {
                alert("error");
            });
        },




    });
    }, /* bExport= */true);
