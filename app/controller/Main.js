Ext.define('Two21G.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			searchAction:'button[action=getStatus]',
			mainPanel:'mainpanel',
			newBlog:'button[action=newBlog]',
			dosaveblog:'button[action=savenewblog]',
			settingsButton:'button[action=settings]',
			saveSettingsButton:'button[action=savesettings]',
			settingsPanel:'settings'
				
        },
        control: {
        	searchAction:{
        		tap:'getStatus'
        	},
        	'blogs':{
        		disclose:'showBlogs'
        	},
        	'qas':{
        		disclose:'showAnswers'
        	},
        	newBlog:{
        		tap:'showNewBlog'
        	},
        	dosaveblog:{
        		tap:'doSaveBlog'
        	},
        	settingsButton:{
        		tap:'doLoadSettings'
        	},
        	saveSettingsButton:{
        		tap:'doSaveSettings'
        	}
        }
    },
    getStatus:function(btn){
    	var formPanel=btn.up('panel');
    	
    	Ext.Ajax.request({
    		url:'data.json',
    	//	url:'https://ceac.state.gov/CEACStatTracker/Status.aspx?App=NIV',    	
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
    showBlogs:function(list,record){
    	this.getMainPanel().push({
            xtype:'panel',
            scrollable: {
                direction: 'both',
                directionLock: true
            },
            styleHtmlContent:true,
            title: record.get('title'),
            html:record.get('blog'),
            button:[{
		            	text:'Edit',
		            	action:'editBlog'
		            }
                    ]
            });
			//this.getBlogDetails().setData(record.getData())
    },
    showAnswers:function(list,record){
    	var me=this;
    	Ext.Ajax.request({
    		url:'server/listanswers.php',    		    
    		method: 'POST',
    	    params: {
    			questionId:record.get('id')
    		},
    	    success:function(response){
				var responseData=response.responseText;
				me.getMainPanel().push({
		            xtype:'dataview',		            
		            store:{
						fields:['id','avatar','answer'],
						data:responseData
							},
		            scrollable: {
		                direction: 'both',
		                directionLock: true
		            },
		            styleHtmlContent:true,
		            title: record.get('question'),		            
		            itemTpl:'<div>{answer}</div>by{avatar}<br/><br/><br/>'
		            });
				
    	    },
    	    failure:function(){
    	    	console.log("request failed");
    	    }
    	});
		
    },
    showNewBlog:function(){
    	this.getMainPanel().push({xtype:'newblog',
    			title:'New Blog'
    	});
    },
    doSaveBlog:function(btn){
    	var formPanel=btn.up('panel');    	
    	var userId=Ext.getStore('Settings').getAt(0).get('userId')
    	formPanel.submit({
    		url:'server/saveblog.php',
    		params:{
    			userId:userId
    		},
    		success:function(response){
    			console.log(response.responseText);
    		},
    		failure:function(){
    			console.log('server error');
    		}
    	})
	},
	doLoadSettings:function(btn){
		var store=Ext.getStore('Settings').getAt(0);
		this.getMainPanel().push({xtype:'settings',
			title:'Settings'
			});
		if(store){
			this.getSettingsPanel().setValues(store.data);
		}
	},
	doSaveSettings:function(btn){
		var formPanel=btn.up('panel');
		formPanel.submit({
		    url: 'server/savesettings.php',
		    method: 'POST',
		    success: function(response,data) {
				responseObj=data;				
		        if(responseObj.success){
		        	var store=Ext.getStore('Settings');		    		
		    		store.removeAll();
		    		var item=formPanel.getValues();
		    		item.token=responseObj.token;		    		
		    		store.add(data);		
		    		store.sync();	
		    		Ext.Msg.alert('Updated','Settings updated !');
		        }
		    }
		});		
	},
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
