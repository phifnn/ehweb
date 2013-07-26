app.models.Challenge = Backbone.Model.extend({
});

app.models.ChallengeCollection = Backbone.Collection.extend({
    model: app.models.Challenge,
    url: 'assets/data/seed1.json'//,
    /*initialize:function(){
        this.fetch();
    },*/
    /*parse:function(response){
        //var data = parseUserData(response);
        return response;
    }*/
});