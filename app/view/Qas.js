Ext.define("Two21G.view.Qas", {
    extend: 'Ext.List',
    xtype:'qas',
    id:'qas',
    requires:['Ext.plugin.ListPaging'],
    config:{
            store:'Qas',
            title:'Q&A',
            plugins:[
                     {
                    	 xclass:'Ext.plugin.ListPaging'                    	 
                    	 }
                     ],
             items:[{
				    xtype:'toolbar',
				    docked:'top',
				    items:[
				           {
				           //text:'Ask',
				           iconCls:'add',
				           action:'askQ'
				           }
				           ]
				    }],        
	        iconCls:'home',
	        onItemDisclosure:true,
	        itemTpl:'{question}<br>by {avatar}'
                    
    }
}); 