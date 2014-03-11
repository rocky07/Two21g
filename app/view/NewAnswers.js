Ext.define('Two21G.view.NewAnswers',{
	extend:'Ext.form.Panel',
	xtype:'newanswers',
	title:'New Answers',
	config: {
		title:'New Answers',
        items: [
	        	{xtype:'fieldset',
		        		items:[						
						        {
						            xtype: 'textareafield',
						            name: 'answer',
						            placeHolder:'Reply'
						        }
				        	]
	        	},
	        	{
	                xtype:  'button',
	                text:   'Reply',
	                action:'savenewanswers',
	                ui:'confirm'
	            	}
		        ]
        
	}
})