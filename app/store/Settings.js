Ext.define('Two21G.store.Settings', {
        extend:'Ext.data.Store',
    config:{
            id:'settings',
         model: 'Two21G.model.Settings',
         autoLoad: true        
         }
});