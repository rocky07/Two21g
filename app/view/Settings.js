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
					    //placeHolder:'name'
					    label:'Name'
					},
			        {
			            xtype: 'textfield',
			            name: 'email',
			            label:'Email'
			            //placeHolder:'Email'
			        },
			        {
			            xtype: 'hiddenfield',
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