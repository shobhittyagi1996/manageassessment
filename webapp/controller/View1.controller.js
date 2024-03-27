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
                        "templeteid": "TEM1101",
                        "templetetitle": "EDD",

                        "assessmenttype": "Standard Prequalification",
                        "active": "true",
                        "createdon": "22-03-2024",
                        "createdby": "danara"

                    },
                    {
                        "templeteid": "TEM1102",
                        "templetetitle": "EDD",

                        "assessmenttype": "Simple Prequalification",
                        "active": "true",
                        "createdon": "25-03-2024",
                        "createdby": "danara"

                    },
                    {
                        "templeteid": "TEM1103",
                        "templetetitle": "Integrity Check",

                        "assessmenttype": "Integrity Screening",
                        "active": "true",
                        "createdon": "27-03-2024",
                        "createdby": "danara"

                    },
                    {
                        "templeteid": "TEM1104",
                        "templetetitle": "SUP12345",
                        "assessmenttype": "Vendor Feedback",
                        "active": "true",
                        "createdon": "27-03-2024",
                        "createdby": "danara"

                    },
                    {
                        "templeteid": "TEM1105",
                        "templetetitle": "SUP00112",
                        "assessmenttype": "Contractor Performance Assessment Process",
                        "active": "true",
                        "createdon": "25-03-2024",
                        "createdby": "danara"

                    },
                    {
                        "templeteid": "TEM1106",
                        "templetetitle": "SUP11232",
                        "assessmenttype": "Enhance due diligence Assessment",
                        "active": "true",
                        "createdon": "23-03-2024",
                        "createdby": "danara"

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
