var Model = Backbone.Model.extend({
    defaults: {
        greeting: 'Hello'
    }
});

var HelloView = Marionette.ItemView.extend({
    ui: {
        input: '#in',
        output: '#out'
    },

    events: {
        'click #btn': 'onBtnClick'
    },

    bindings: {
        '#in': 'greeting',
        '#out': 'greeting'
    },

    onBtnClick: function () {
        this.model.set('greeting', '');
        this.ui.input.focus();
    },

    onRender: function () {
        this.stickit();
    },

    template: _.template('<input id="in"><p><span id="out"></span>, World</p><input id="btn" type="button" value="Clear">')
});

(new HelloView({
    model: new Model(),
    el: '#example'
})).render();
