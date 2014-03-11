Ext.define('Two21G.view.NewQ',{
	extend:'Ext.form.Panel',
	xtype:'newq',
	title:'New Question',
	config: {
		title:'New Question',
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