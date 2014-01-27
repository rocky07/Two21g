Ext.define('Two21G.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			searchAction:'button[action=getStatus]'
        },
        control: {
        	searchAction:{
        		tap:'getStatus'
        	}
        }
    },
    getStatus:function(btn){
    	var formPanel=btn.up('panel');
    	formPanel.submit({
    		url:'https://ceac.state.gov/CEACStatTracker/Status.aspx',    	
    		method: 'POST',
    		success:function(response){
    				var responseData=this.processResponse(response.responseText);
		    		console.log("success"+response);
		    	},
		    failure:function(response){
		    		console.log("failure"+response);
		    	}
    		});
    },
    processResponse:function(responseString){
    	
    }
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
