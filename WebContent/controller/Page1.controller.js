sap.ui.controller("smax.batch29.A2.controller.Page1", {

	onItemSelection : function(){
		this.getOwnerComponent().getRouter().navTo("rPage2");
	}

});