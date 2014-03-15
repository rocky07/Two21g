Ext.define('Two21G.store.Qas', {
        extend:'Ext.data.Store',
    config:{
            id:'Qas',
         model: 'Two21G.model.Qas',
         autoLoad: true,
         proxy: {
         type: 'ajax',
         url : 'http://usvisastatus.in/qas.php',
         reader: {
	         type: 'json'
	         }
         }
         }
});