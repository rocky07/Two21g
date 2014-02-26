Ext.define('Two21G.view.Settings',{
	extend:'Ext.form.Panel',
	xtype:'settings',
	title:'Settings',
	config: {
		title:'Settings',
        items: [
	        	{xtype:'fieldset',
	        		items:[
					{
					    xtype: 'hiddenfield',
					    name: 'userId'
					},
					{
					    xtype: 'textfield',
					    name: 'name',
					    placeHolder:'name'
					},
			        {
			            xtype: 'textfield',
			            name: 'email',
			            placeHolder:'Email'
			        },
			        {
			            xtype: 'textfield',
			            name: 'token',
			            placeHolder:'Token'
			        }
	        	]
	        	},
	        	{
	                xtype:  'button',
	                text:   'Save',
	                action:'savesettings',
	                ui:'confirm'
	            	}
		        ]
        
	}
})