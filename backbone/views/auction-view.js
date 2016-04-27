var AuctionView = Backbone.View.extend({
  el: '.listings',

  template: Handlebars.compile($('#auction-template').html()),
  
  renderAuction: function(auctions){
    console.log(this.model.toJSON);
    this.$el.append(this.template(this.model.toJSON()));

    return this;
  }
});