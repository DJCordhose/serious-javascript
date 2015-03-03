// alternative is to have more than one view and only re-render output view
var Model = Backbone.Model.extend({
    defaults: {
        greeting: 'Hello'
    }
});

var HelloView = Marionette.ItemView.extend({
    initialize: function () {
        this.model.on('change', this.updateGreeting, this);
    },
    ui: {
        input: '#in',
        output: '#out'
    },

    events: {
        'keyup @ui.input': 'onInputKeypress',
        'click #btn': 'onBtnClick'
    },

    onInputKeypress: function () {
        var greeting = this.ui.input.val().trim();
        this.model.set('greeting', greeting);
    },

    updateGreeting: function() {
        this.ui.input.val(this.model.get('greeting'));
        this.ui.output.html(this.model.get('greeting'));
    },

    onBtnClick: function() {
        this.model.set('greeting', '');
        this.render();
    },
    onRender: function() {
        this.ui.input.focus();
    },

    template: _.template('<input id="in" value="<%-greeting%>"><p><span id="out"><%-greeting%></span>, World</p><input id="btn" type="button" value="Clear">')
});

(new HelloView({
    model: new Model(),
    el: '#example'
})).render();
