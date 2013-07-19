app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "challenge": "challenge",
        "player": "player",
        "stats": "stats"
    },

    initialize: function () {
        app.slider = {};//new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
       // if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            $('#main-section').html(app.homeView.render().el);
        /*} else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }*/
        //app.slider.slidePage(app.homeView.$el);
    },

    challenge: function () {
        //app.challengeView = new app.views.ChallengeView();
        //$('#main-section').html(app.challengeView.render().el);
        var game = new app.models.Game();
        game.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                //app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
                $('#main-section').html(new app.views.ChallengeView({model:data}).render().el);
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
    }

});