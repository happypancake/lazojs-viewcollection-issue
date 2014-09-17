define(['request'], function (request) {

  'use strict';

  return {

    login: function (req, options) {      
      var form = {
        login : req.query.username,
        pass : req.query.password,
        message : "ack"
      };
      options.success(form);
    }
  };
});