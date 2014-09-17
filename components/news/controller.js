define(['app/ctl'], function (Ctl, Model){

    'use strict';



    return Ctl.extend({

        index: function (options) {
            // if (this.needsLogin(options)){
            //     return;
            // }

            var self = this;
            var params = this.ctx.params;


            this.loadCollection('news', {
                // pass controller context parameters to collection
                params: {
                    till: params.till,
                    identity: self.identity()
                },
                success: function (collection) {
                    // this will be presisted between environments
                    // add a reference to the controller context
                    self.ctx.collections.news = collection;
                    var more = collection.length > 0;
                    if (more) {
                        // rinat: is it ok to use params here?
                        self.ctx.params.next = _.last(collection.models).get('id');
                    }
                    options.success('index');
                },
                error: options.error
            });
        },
        more:function(p){
            var self = this;
            console.log("Load: " + p);
            this.loadCollection('news', {
                // pass controller context parameters to collection
                params: {
                    till:p,
                    identity: self.identity()
                },
                success: function (collection) {
                    var news = self.ctx.collections.news;
                    news.add(collection.models);

                    var more = collection.length > 0;
                    if (more) {
                        // rinat: is it ok to use params here?
                        // isn't this already updated by the view?
                        self.ctx.params.next = _.last(collection.models).get('id');
                    }
                    //console.log("Added!");
                },
                error: function(err) {
                    console.log("error: " + err);
                }
            });
        }


    });

});
