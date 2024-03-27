sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.manageassessment.controller.View1", {
            onInit: function () {
                let aDropdown = [
                    {
                        "templeteid": "345289",
                        "templetetitle": "EDD",

                        "assessmenttype": "Standard Prequalification",
                        "active": "true",
                        "createdon": "22-03-2024",
                        "createdby": "alex"

                    },
                    {
                        "templeteid": "562234",
                        "templetetitle": "EDD",

                        "assessmenttype": "Simple Prequalification",
                        "active": "true",
                        "createdon": "25-03-2024",
                        "createdby": "Austin"

                    },
                    {
                        "templeteid": "156224",
                        "templetetitle": "Integrity Check",

                        "assessmenttype": "Integrity Screening",
                        "active": "true",
                        "createdon": "27-03-2024",
                        "createdby": "john"

                    },
                    {
                        "templeteid": "356234",
                        "templetetitle": "SUP12345",
                        "assessmenttype": "Vendor Feedback",
                        "active": "true",
                        "createdon": "27-03-2024",
                        "createdby": "james"

                    },
                ];

                let amodel = new JSONModel(aDropdown);
                this.getView().setModel(amodel, "myModel");

            },
            onCreateVendor: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
        });
    });
