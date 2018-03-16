sap.ui.controller("smax.batch29.A2.controller.Page2", {

	onInit : function(){
	    var oRouter = this.getOwnerComponent().getRouter();
	    
	    oRouter.getRoute("rPage2").attachPatternMatched(function(oEvent){
	    	debugger;
	    	var pid = oEvent.getParameters().arguments.pid;
	    	
	    	//now call /ProductSet('+pid+') 
	    	this.getView().bindElement("/ProductSet('"+pid+"')");
	    	
	    }, this);
	    
	    
	    
	},
	
	goBack : function(){
		this.getOwnerComponent().getRouter().navTo("rPage1");
	}
});