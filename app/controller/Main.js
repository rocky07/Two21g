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
    	
    	Ext.Ajax.request({
    		//url:'data.json',
    		url:'https://ceac.state.gov/CEACStatTracker/Status.aspx?App=NIV',    	
    		method: 'POST',
    	    params: {
    		ctl00$ContentPlaceHolder1$ddlApplications:formPanel.getValues().ctl00$ContentPlaceHolder1$ddlApplications,
    		ctl00$ContentPlaceHolder1$ddlLocation:formPanel.getValues().ctl00$ContentPlaceHolder1$ddlLocation,
    		ctl00$ContentPlaceHolder1$txbCase:formPanel.getValues().ctl00$ContentPlaceHolder1$txbCase    		
    	    },
    	    success:function(response){
				var responseData=response.responseText;
				var start=responseData.indexOf("status-content")-12;
				var end=responseData.indexOf("ctl00_ContentPlaceHolder1_ucApplicationStatusView_lnkContactUrl");
	    		var result=responseData.substring(start,start+end);
	    			Ext.create('Ext.Panel', { 
		    		    height : 400, 
		    		    width : 300,
		    		    centered:true,		    		    
		    		    //draggable : true,
		    		    hideOnMaskTap:true,
		    		    modal: true,
		    		    html : result, 
		    		    items : [ 
		    		        { 
		    		        xtype : 'toolbar', 
		    		        docked : 'top', 
		    		        title : 'Status' 
		    		        } 
		    		    ] 
		    		}).show();  
	    	},
	    	failure:function(response){
	    		console.log(response);
	    	}
    	});
    },
    processResponse:function(responseString){
    	
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
