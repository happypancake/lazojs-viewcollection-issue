define(['l!lazoCtl'], function (Ctl, request){

    'use strict';
    // base controller class. Nothing to do here for now.
    return Ctl.extend({
      identity: function() {
         return this.ctx.getCookie("hpc_token");
      }

     
    });

});
