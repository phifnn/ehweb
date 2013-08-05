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

    events: {
        "click label.eh-clg-radio":    "choiceSelection",
        //"keypress .search-key": "onkeypress"
    },

    choiceSelection: function (event) {
        //event.currentTarget.checked=true;
        //var s = $(event.currentTarget).val();
        //console.log(event.currentTarget.value);
        var id = $(event.currentTarget).attr('for');
        $('#'+id).trigger('change');
        //alert(event.target.value);
        //alert(event.currentTarget.value);
        //alert(event.currentTarget.checked);
        //window.mySlider.next();
    }/*,

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }
*/
});