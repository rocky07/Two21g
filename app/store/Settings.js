Ext.define('Two21G.store.Settings', {
        extend:'Ext.data.Store',
        model: 'Two21G.model.Settings',
    config:{
            id:'settings',
         model: 'Two21G.model.Settings',
         autoLoad: true        
         }
});