sap.ui.controller("smax.batch29.A2.controller.Page1", {

	onItemSelection : function(oEvent){
		debugger;
		// get selected pid
		this.getOwnerComponent().getRouter().navTo("rPage2", {pid : oEvent.getSource().getTitle()});
	}

});