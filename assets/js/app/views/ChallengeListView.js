app.views.ChallengeListView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.collection, 'reset', this.refreshData);        
        this.collection.fetch({reset: true});
        this.render();
    },

    render: function () {
        //this.$el.html(this.template({data:this.collection.toJSON()}));
        this.$el.html(this.template());
       // $('.content', this.el).append(this.searchresultsView.render().el);
        app.challengeSlider = Swipe(document.getElementById('eh-clg-slider'),{continuous:false});
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
        this.collection.viewIndex++;
        if(this.collection.viewIndex >= this.collection.length){
            //show the score orientation page.(first time user)

        }else{
            this.refreshData(true);
        }
        
        //alert(event.target.value);
        //alert(event.currentTarget.value);
        //alert(event.currentTarget.checked);
        //window.mySlider.next();
    },

    refreshData: function(advNext){
        var index = this.collection.viewIndex;
        var challenge = this.collection.at(index);
        var newSlide = new app.views.ChallengeView({model:challenge,el:document.getElementById('eh-clg-slider-list'),
                                                    advanceToNext:advNext,answerCount:index});
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
        var template = _.template($('#chlg-template').html(),{challenge:this.model.toJSON(),anscount:this.options.answerCount});
        this.$el.append(template);
        app.challengeSlider.setup();
       // $('.content', this.el).append(this.searchresultsView.render().el);
        if(this.options.advanceToNext){
            app.challengeSlider.next();
        }
        return this;
    }
});