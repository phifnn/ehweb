var app = {
    views: {},
    models: {},
    routers: {},
    utils: {},
    adapters: {}
};

$(document).on("ready", function () {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load(["HomeView", "ChallengeView", "PlayerView", "StatsView","HelpView"],
        function () {
            app.router = new app.routers.AppRouter();
            Backbone.history.start();
        });
});

$(function() {
    FastClick.attach(document.body);
});