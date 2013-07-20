app.views.ChallengeView = Backbone.View.extend({
/*
    initialize: function () {
        this.challengeList = new app.models.ChallengeCollection();
        this.challengeList.fetch({
            success: function (data) {
                //$('#main-section').html(new app.views.ChallengeView({model:data}).render().el);
                render();
            }
            });
    },*/

    render: function () {
        this.$el.html(this.template({data:this.model.toJSON()}));
       // $('.content', this.el).append(this.searchresultsView.render().el);
        return this;
    },
/*
    events: {
        "keyup .search-key":    "search",
        "keypress .search-key": "onkeypress"
    },

    search: function (event) {
        var key = $('.search-key').val();
        this.searchResults.fetch({reset: true, data: {name: key}});
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }
*/
});