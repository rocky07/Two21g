Ext.define('Two21G.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	title: 'Check Status',
                iconCls: 'action',
            	xtype:'statusform'
            },
            {
            	title: 'Blogs',
                iconCls: 'star',
            	xtype:'blogs'
            },
            {
            	title: 'Q&As',
                iconCls: 'star',
            	xtype:'qas'
            }
            
        ]
    }
});
