Ext.define('Two21G.model.Settings', {
    extend: 'Ext.data.Model',    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'userId', type: 'auto' },
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
