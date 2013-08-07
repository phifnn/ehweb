app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "home": "home",
        "login":"login",
        "challenge": "challenge",
        "settings": "settings",
        "history": "history",
        "stats": "stats",
        "help":"help",
        "":"home"
    },

    initialize: function () {
        app.slider = {};//new PageSlider($('body'));
    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
        }else{
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#main-container').html(app.homeView.render().el);
        //Reuse the slider
        //if(!app.homeSwipe){
           var bullets = document.getElementById('position').getElementsByTagName('li');
           app.homeSlider = Swipe(document.getElementById('slider'),{auto:2500,callback: function(index, elem) {   
                    var i = bullets.length;
                    while (i--) {
                      bullets[i].className = 'icon-circle-blank';
                    }
                    bullets[index].className += ' icon-circle';
                  }
            }); //Start the slider.
        /*} else{
            app.homeSwipe.setup();
        }  */             
    },

    login: function () {
        // Since the login view never changes, we instantiate it and render it only once
        if (!app.loginView) {
            app.loginView = new app.views.LoginView();            
        } else {
            app.loginView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#main-container').html(app.loginView.render().el);
        //app.slider.slidePage(app.homeView.$el);
    },

    challenge: function () {
        // Since the challenge view never changes, we instantiate it and render it only once
        if (!app.challengeView) {
            app.challengeView = new app.views.ChallengeListView({collection:new app.models.ChallengeCollection()});
            $('#main-container').html(app.challengeView.render().el);
            app.challengeSlider = Swipe(document.getElementById('eh-clg-slider'),{continuous:false});            
        } else {
            app.challengeView.refreshData();
            app.challengeView.delegateEvents(); // delegate events when the view is recycled
        }
        //$('#main-container').html(app.challengeView.render().el);
        
        /*
        challengeList.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                //app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
                $('#main-container').html(new app.views.ChallengeView({model:data}).render().el);
                window.mySlider = Swipe(document.getElementById('eh-clg-slider'));//Start the slider.
            }
        });*/
    },

    settings: function () {
        // Since the settings view never changes, we instantiate it and render it only once
        if (!app.settingsView) {
            app.settingsView = new app.views.SettingsView();            
        } else {
            app.settingsView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#main-container').html(app.settingsView.render().el);    
    },

    stats: function () {
        // Since the stats view never changes, we instantiate it and render it only once
        if (!app.statsView) {
            app.statsView = new app.views.StatsView();            
        } else {
            app.statsView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#main-container').html(app.statsView.render().el);    
    },

    history: function () {
        // Since the history view never changes, we instantiate it and render it only once
        if (!app.historyView) {
            app.historyView = new app.views.HistoryView();            
        } else {
            app.historyView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#main-container').html(app.historyView.render().el);    
    },

    help: function () {
        // Since the help view never changes, we instantiate it and render it only once
        if (!app.helpView) {
            app.helpView = new app.views.HelpView();            
        } else {
            app.helpView.delegateEvents(); // delegate events when the view is recycled
        }
        $('#main-container').html(app.helpView.render().el);        
    }
});