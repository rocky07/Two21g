Ext.define('Two21G.view.NewBlog',{
	extend:'Ext.form.Panel',
	xtype:'newblog',
	title:'New Blog',
	config: {
		title:'New Blog',
        items: [
	        	{xtype:'fieldset',
	        		items:[
					
			        {
			            xtype: 'textareafield',
			            name: 'question',
			            placeHolder:'Ask question'
			        }
	        	]
	        	},
	        	{
	                xtype:  'button',
	                text:   'Ask',
	                action:'savenewQ',
	                ui:'confirm'
	            	}
		        ]
        
	}
})