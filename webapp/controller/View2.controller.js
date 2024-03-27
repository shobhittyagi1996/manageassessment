sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
   
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.sap.manageassessment.controller.View2", {
            onInit: function () {

                let vDropdown = [
                    {
                        "text": "Standard Prequalification"
                    },
                    {
                        "text": "Simple Prequalification"
                    },
                    {
                        "text": "Integrity Screening "
                    },
                    {
                        "text": "Vendor Feedback"
                    },
                    {
                        "text": "Enhance due diligence Assessment"
                    },
                    {
                        "text": "Contractor Performance Assessment Process"
                    }];
                    let data = [{

                        "question": "Are there any personal relationships between key personnel of your company or its Affiliates, and KPO Key Personnel?"
                    },
                    {
    
                        "question": "Are you aware of anti-bribery laws applicable to your company in the Republic of Kazakhstan?"
                    },
                    {
    
                        "question": "Does your company have policies to ensure compliance/ethical conduct in accordance with anti-bribery laws?"
                    },
                    {
    
                        "question": "Has your company’s senior management formally approved the compliance/ethical conduct policies?"
                    },
                    {
    
                        "question": "Does your company provide training for all employees in your organization on ethical conduct and anti-corruption?"
                    },
                    {
    
                        "question": "Kindly refer to the KPO Code of Conduct and confirm that your company does business in a manner consistent with KPO’s Code of Conduct?"
                    },
                    {
    
                        "question": "With regards to bribery, corruption or dishonest dealings with third parties, in the last 3 years, has your company been subjected to any external investigation?Has such an investigation been concluded and/or are there currently any outstanding investigations against your company?"
                    }];
                    let sDropdown = [
                        { "responsetype": "Yes/No" },
                        { "responsetype": "Attachment Type" }];

                        let usModel = new JSONModel(sDropdown);
                        this.getView().setModel(usModel, "fModel")
    
                    let Model = new JSONModel(data);
                this.getView().setModel(Model, "uModel")
                let oModel = new JSONModel(vDropdown);
                this.getView().setModel(oModel, "sModel")
                
            }
        });
      }
    );