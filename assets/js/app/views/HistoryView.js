app.views.HistoryView = Backbone.View.extend({
/*
    initialize: function () {
        this.searchResults = new app.models.EmployeeCollection();
        this.searchresultsView = new app.views.EmployeeListView({model: this.searchResults});
    },
*/
    render: function () {
        this.$el.html(this.template());
        //$('.content', this.el).append('<span>Hello</span>');
        return this;
    }/*,

    events: {
        "click #btn-home-play":    "startPlay"
        //"keypress .search-key": "onkeypress"
    },

    startPlay: function (event) {
        //var key = $('.search-key').val();
        //this.searchResults.fetch({reset: true, data: {name: key}});
        app.router.navigate("login", {trigger: true});
    },*/
/*
    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }
*/
});