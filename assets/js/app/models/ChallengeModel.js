app.models.Challenge = Backbone.Model.extend({
});

app.models.ChallengeCollection = Backbone.Collection.extend({
    model: app.models.Challenge,
    url: 'assets/data/seed1.json',
    viewIndex:0/*,
/*
    initialize:function(){
        this.fetch();
    }//,*/
    /*parse:function(response){
        //var data = parseUserData(response);
        return response;
    }*/
});