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
					    xtype: 'hiddenfield',
					    name: 'id'
					},
					{
					    xtype: 'textfield',
					    name: 'title',
					    placeHolder:'title'
					},
			        {
			            xtype: 'textareafield',
			            name: 'blog',
			            placeHolder:'blog'
			        }
	        	]
	        	},
	        	{
	                xtype:  'button',
	                text:   'Save',
	                action:'savenewblog',
	                ui:'confirm'
	            	}
		        ]
        
	}
})