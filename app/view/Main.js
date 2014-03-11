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
                iconCls: 'plane',
            	xtype:'statusform'
            },
            {
            	title: 'Blogs',
                iconCls: 'pencil',
            	xtype:'blogs'
            },
            {
            	title: 'Q&As',
                iconCls: 'chat2',
            	xtype:'qas'
            },
            {
            	title: 'Settings',
                iconCls: 'settings2',
            	xtype:'settings'
            }
            
        ]
    }
});
