Ext.define("Two21G.view.Qas", {
    extend: 'Ext.List',
    xtype:'qas',
    requires:['Ext.plugin.ListPaging'],
    config:{
            store:'Qas',
            title:'Q&A',
            plugins:[
                     {
                    	 xclass:'Ext.plugin.ListPaging'                    	 
                    	 }
                     ],
	        iconCls:'home',
	        onItemDisclosure:true,
	        itemTpl:'{question}<br>by {avatar}'
                    
    }
}); 