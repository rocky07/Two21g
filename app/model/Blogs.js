Ext.define('Two21G.model.Blogs', {
    extend: 'Ext.data.Model',    
    config: {
        fields: [
            { name: 'avatar', type: 'auto' },
            { name: 'title', type: 'auto' },
            { name: 'blog', type: 'auto' } ,
            { name: 'date_created', type: 'auto' }
        ]
    }
});
