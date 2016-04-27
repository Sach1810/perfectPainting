var AppModel = Backbone.Model.extend({
  defaults: function(){
    return {
      auctions: new Auctions()
    }
  }
});
