app.views.ChallengeListView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.collection, 'reset', this.refreshData);
        //this.collection.on('change',this.refreshData,this);
        this.collection.fetch({reset: true});
    },

    render: function () {
        //this.$el.html(this.template({data:this.collection.toJSON()}));
        this.$el.html(this.template());
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
        var index = this.collection.viewIndex;
        var challenge = this.collection.at(index);
        var newSlide = new app.views.ChallengeView({model:challenge});
        newSlide.render();

        //console.log(this.collection.toJSON());
        //$('#main-container').html(this.render().el);
        //app.challengeSlider = Swipe(document.getElementById('eh-clg-slider'),{continuous:false});//Start the slider.
        /*this.collection.each(function(pic){
    var slide = new PictureSlideView({model:pic});
    this.$('.slide-container').append(slide.el);
},this);

this.carousel = new Swipe(this.el.getElementsByClassName('swipe')[0], {
    continuous: false
});*/

// append new slide
//var newModel = new Picture({...});
//var newSlide = new PictureSlideView({model:newModel});
//this.$('.slide-container').append(slide.el);

// run the setup again
//this.carousel.setup();
    }/*,

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }
*/
});
app.views.ChallengeView = Backbone.View.extend({
    
    render: function () {
        //this.$el.html(this.template({data:this.collection.toJSON()}));
        var template = _.template($('#chlg-template').html(),{challenge:this.model.toJSON()});
        this.$('#eh-clg-slider-list').append(template);
        app.challengeSlider.setup();
       // $('.content', this.el).append(this.searchresultsView.render().el);
        return this;
    }
});