app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "home": "home",
        "login":"login",
        "challenge": "challenge",
        "player": "player",
        "stats": "stats",
        "help":"help",
        "":"home"
    },

    initialize: function () {
        app.slider = {};//new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
       // if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            $('#main-container').html(app.homeView.render().el);
            var bullets = document.getElementById('position').getElementsByTagName('li');
            window.mySwipe = Swipe(document.getElementById('slider'),{auto:2500,callback: function(index, elem) {   
                    var i = bullets.length;
                    while (i--) {
                      bullets[i].className = 'icon-circle-blank';
                    }
                    bullets[index].className += ' icon-circle';
                  }
              });//Start the slider.
        /*} else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }*/
        //app.slider.slidePage(app.homeView.$el);
    },

    login: function () {
        // Since the home view never changes, we instantiate it and render it only once
       // if (!app.homeView) {
            app.loginView = new app.views.LoginView();
            $('#main-container').html(app.loginView.render().el);
        /*} else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }*/
        //app.slider.slidePage(app.homeView.$el);
    },

    challenge: function () {
        //app.challengeView = new app.views.ChallengeView();
        //$('#main-section').html(app.challengeView.render().el);
        var challengeList = new app.models.ChallengeCollection();
        challengeList.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                //app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
                $('#main-container').html(new app.views.ChallengeView({model:data}).render().el);
            }
        });
    },

    player: function (id) {
        var employee = new app.models.Employee({id: id});
        employee.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.ReportsView({model: data}).render().$el);
            }
        });
    },

    stats: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);
    },

    help: function () {
        // Since the home view never changes, we instantiate it and render it only once
       // if (!app.homeView) {
            app.helpView = new app.views.HelpView();
            $('#main-container').html(app.helpView.render().el);        
    }

});