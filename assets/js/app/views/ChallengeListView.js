app.views.ChallengeListView = Backbone.View.extend({
    initialize: function () {
        var test = '';
        this.listenTo(this.collection, 'reset', _.partial(this.refreshData,false));        
        this.collection.fetch({reset: true,headers:{"hSessionId":test}});
        this.render();
    },

    render: function () {
        //this.$el.html(this.template({data:this.collection.toJSON()}));
        this.$el.html(this.template());
        var dheight = document.documentElement.clientHeight;
        $('#out-container').css('min-height',dheight+'px');
        $('#content-container').css('height',(dheight-54)+'px');
       // $('.content', this.el).append(this.searchresultsView.render().el);
        
        return this;
    },

    events: {
        //"click label.eh-clg-radio":    "choiceSelection",
        //"keypress .search-key": "onkeypress"
        'change input[type="radio"]':    "choiceSelection"
    },

    choiceSelection: function (event) {
        //event.currentTarget.checked=true;
        //var s = $(event.currentTarget).val();
        //console.log(event.currentTarget.value);
        console.log(event.type);
        //var id = $(event.currentTarget).attr('for');
        //$('#'+id).prop('checked',true);
        this.collection.viewIndex++;
        if(this.collection.viewIndex >= this.collection.length){
            //show the score orientation page.(first time user)
            this.showChallengeEnd();

        }else{
            this.refreshData(true);
            this.$('p.cnt-text').html(this.collection.viewIndex);
        }
        
        //alert(event.target.value);
        //alert(event.currentTarget.value);
        //alert(event.currentTarget.checked);
        //window.mySlider.next();
    },

    showChallengeEnd: function(){
        var newSlide = new app.views.ChallengeEndView({el:document.getElementById('eh-clg-slider-list')});
        newSlide.render();
        this.$('div.eh-clg-report').hide();
        this.$('div.eh-clg-cnter').hide();
    },

    refreshData: function(advNext){
        var index = this.collection.viewIndex;
        var challenge = this.collection.at(index);
        app.challengeSlider = Swipe(document.getElementById('eh-clg-slider'),{continuous:false,transitionEnd: function(index, elem) {
            console.log("the index is:"+index);
            if(index >= 1){
                app.challengeSlider.kill();                
                $('#eh-clg-slider-list li').eq(index-1).remove();  
                //app.challengeSlider.setup();               
            }            
        }});
        var newSlide = new app.views.ChallengeView({model:challenge,el:document.getElementById('eh-clg-slider-list'),
                                                    advanceToNext:advNext});
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
        this.$el.append(template);
        //this.$el.prepend(template);
        app.challengeSlider.setup();
       // $('.content', this.el).append(this.searchresultsView.render().el);
        if(this.options.advanceToNext){
            //$.when(app.challengeSlider.next()).done(function(){
              //  this.$('#eh-clg-slider-list').find('li:first').remove();
                //app.challengeSlider.setup();
            //}); 
            app.challengeSlider.next(); 
            //app.challengeSlider.setup();          
        }//else{
            //app.challengeSlider.setup();
       // }

        return this;
    }
});
app.views.ChallengeEndView = Backbone.View.extend({
    render: function () {
        //this.$el.html(this.template({data:this.collection.toJSON()}));
        var template = _.template($('#chlg-end-template').html());
        this.$el.append(template);
        app.challengeSlider.setup();
        app.challengeSlider.next();
        return this;
    }
});