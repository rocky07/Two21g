Ext.define('Two21G.model.Qas', {
    extend: 'Ext.data.Model',    
    config: {
        fields: [
            { name: 'id', type: 'int' },    
            { name: 'avatar', type: 'auto' },
            { name: 'question', type: 'auto' },            
            { name: 'created_date', type: 'auto' }
        ]
    }
});
