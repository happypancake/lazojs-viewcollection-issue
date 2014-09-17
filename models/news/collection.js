define(['lazoCollection', 'models/news/item'], function (Collection, Model) {

   return Collection.extend({
      model: Model,
      modelName : 'newsitem'
   });

});
