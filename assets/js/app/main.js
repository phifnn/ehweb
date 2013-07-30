var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "LoginView","ChallengeView", "PlayerView", "StatsView","HelpView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
            window.mySwipe = Swipe($('#slider')[0],{auto:5000});
        });
    FastClick.attach(document.body);        
});

//$(window).on("load", function(){
    //window.mySwipe = Swipe($('#slider')[0],{auto:5000});
//});
