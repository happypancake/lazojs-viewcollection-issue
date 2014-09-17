define(['lazoView'], function (View) {

    'use strict';

    return View.extend({
      
      events: {
          'click #get': 'getClicked',
          'click #post': 'postClicked'
      },

      getClicked: function(e) {
        e.preventDefault();
        this.send('GET');
      },
      postClicked: function(e) {
        e.preventDefault();
        this.send('POST');
      },
      send: function (method) {
        var self = this;
        
   
       
        $.ajax({
                type: method,
                data:{username:"name", password:"pass"},
                dataType: 'json',
                // resolves to 'components/login/server/utilActions.js:login'               
                url: '/fn/login/login',
                success: function (resp) {
                 
                  self.$('#result').text(resp)
                  
                }
            });


        //this.ctl.submitLogin(data);
      }

    });

});
