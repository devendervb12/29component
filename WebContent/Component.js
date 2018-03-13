
sap.ui.core.UIComponent.extend("smax.batch29.A2.Component", {
	
	metadata : {
		rootView : "smax.batch29.A2.view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",
				controlAggregation : "pages",
				controlId : "idApp",
				viewType : "XML"
			},
			routes : [ 
				{
					pattern : "",
					name : "rPage1",
					viewName : "smax.batch29.A2.view.Page1"
					
					
				},{
					pattern : "todetails",
					name : "rPage2",
					viewName : "smax.batch29.A2.view.Page2"
					
				}
				
			]
		}
	},
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}
});