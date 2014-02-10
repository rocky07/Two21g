Ext.define("Two21G.view.Blogs", {
    extend: 'Ext.List',
    xtype:'blogs',
    requires:['Ext.plugin.ListPaging'],
    config:{
            store:'Blogs',
            title:'Blogs',
            plugins:[
                     {
                    	 xclass:'Ext.plugin.ListPaging'                    	 
                    	 }
                     ],
	        iconCls:'home',
	        onItemDisclosure:true,
	        itemTpl:'{title}<br>by {avatar}'
                    
    }
}); 