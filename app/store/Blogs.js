Ext.define('Two21G.store.Blogs', {
        extend:'Ext.data.Store',
    config:{
            id:'Blogs',
         model: 'Two21G.model.Blogs',
         autoLoad: true,
         proxy: {
         type: 'ajax',
         url : 'http://usvisastatus.in/listblogs.php',
         reader: {
	         type: 'json'
	         }
         }
         }
});