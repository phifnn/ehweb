app.views.ChallengeView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.collection, 'reset', this.refreshData);
        //this.collection.on('change',this.refreshData,this);
        this.collection.fetch({reset: true});
    },

    render: function () {
        this.$el.html(this.template({data:this.collection.toJSON()}));
        
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
        $('#'+id).prop('checked',true);
        //alert(event.target.value);
        //alert(event.currentTarget.value);
        //alert(event.currentTarget.checked);
        //window.mySlider.next();
    },

    refreshData: function(){
        //console.log(this.collection.toJSON());
        $('#main-container').html(this.render().el);
        app.challengeSlider = Swipe(document.getElementById('eh-clg-slider'));//Start the slider.
    }/*,

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }
*/
});