define(['lazoSyncher', 'request'], function (LazoSyncher, request) {

    'use strict';

    return LazoSyncher.extend({

        fetch: function (options) {
            options.success([{id:Date.now(), memberName:"bob", memberAction:"did"}]);          
        }
    });

});
