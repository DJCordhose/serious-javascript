var SingleLink = Marionette.ItemView.extend({
    tagName: "li",
    template: _.template("<a href='<%-path%>'><%-path%></a>")
});

var ListView = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: SingleLink
});

var list = new Backbone.Collection([
    {path: 'http://google.com'},
    {path: 'http://mojotech.com'}
]);

(new ListView({
    collection: list,
    el: '#link-area'
})).render();