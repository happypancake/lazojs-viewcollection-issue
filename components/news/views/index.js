define(['lazoCollectionView'], function (View) {

    'use strict';

    return View.extend({
      // which view to use for rendering
      itemView: 'item',
      initialize: function() {
        console.log('init');
        this.collection = this.ctl.ctx.collections.news;
        this.listenTo(this.collection, 'add', this.updateNext);
        this.listenTo(this.collection, 'remove', this.updateNext);
      },
      afterRender: function() {
       
      },
   
      events: {
          'click button': 'next'
      },
      updateNext: function() {
        var last = _.last(this.collection.models);
        this.$('#more').attr('data', last.id);
      },
      next: function (e) {
        e.preventDefault();
        var next = this.$("#more").attr('data');

        this.ctl.more(next);
      }
    });
});
