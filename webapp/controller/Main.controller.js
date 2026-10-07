sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ama.s32.s32modelaggrsort.controller.Main", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("/data/oscar.json");
			this.getView().setModel(oModel);
		},

		onFilter: function (oEvent) {
			var oInput = this.getView().byId("inp01");
			var sYear = oInput.getValue();
			var oFilter = new sap.ui.model.Filter("oscYear", 
													sap.ui.model.FilterOperator.GE, 
													sYear);
			var oTable = this.getView().byId("tbl01");
			oTable.getBinding("rows").filter([oFilter]);
		},

		onSort: function (oEvent) {
			var oSorter = new sap.ui.model.Sorter("oscBestDir", false);
			var oTable = this.getView().byId("tbl01");
			oTable.getBinding("rows").sort([oSorter]);
		},
		
		onReset: function (oEvent) {
			var oTable = this.getView().byId("tbl01");
			oTable.getBinding("rows").sort(null);
			oTable.getBinding("rows").filter(null);
			var oInput = this.getView().byId("inp01");
			oInput.setValue(null);
		}
    });
});