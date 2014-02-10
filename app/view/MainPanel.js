Ext.define('Two21G.view.MainPanel', {
    extend: 'Ext.navigation.View',
    requires:['Two21G.view.Main'],
    xtype:'mainpanel',
    config: {         
            items:[
	             {
	                     xtype:'main'
	             }
             ]
            }
    });