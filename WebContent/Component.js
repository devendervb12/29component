
sap.ui.core.UIComponent.extend("smax.batch29.A2.Component", {
	
	metadata : {
		manifest : "json"
	},
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}
});