Ext.define('Two21G.model.Settings', {
    extend: 'Ext.data.Model',    
    config: {
        fields: [
            { name: 'userId', type: 'int' },
            { name: 'name', type: 'auto' },            
            { name: 'email', type: 'auto' },
            { name: 'token', type: 'auto' } 
        ],
        proxy: {
            type: 'localstorage',
            id  : 'settings-storage'
        }
    }
});
