app.models.Game = Backbone.Model.extend({
	url:'/assets/data/seed1.json',
	
    initialize:function () {
        //this.reports = new app.models.ReportsCollection();
        //this.reports.parent = this;
    },
/*
    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.employee.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

    fetch: function() {

    }*/

});