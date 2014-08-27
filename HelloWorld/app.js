"use strict";

Ext.application({
    name: 'Hello World',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Hello World',
                    html : '<h1>Hello</h1>'
                }
            ]
        });
    }
});
