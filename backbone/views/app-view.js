var AppView = Backbone.View.extend({

  el: 'body',

  events:{
    'click #seller-submit': 'collectAuctionData'
  },

  initialize: function(){
    this.listenTo(this.model.get('auctions'), 'add', this.appendAuctions)
  },

  _endTime: function(){
    var now = new Date(); 
    var utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    utc = Date.parse(utc);

    var hours = $('#auction-duration').val();
    var mins = hours * 60; 
    var secs = mins * 60;
    var millisecs = secs *1000;

    var endTime = utc + millisecs;

    return endTime
  },

  collectAuctionData: function(){
    var name = $('#artists-name').val();

    this.model.get('auctions').add({
      name:$('#artists-name').val(),
      title:$('#artwork-name').val(),
      description:$('#artwork-description').val(),
      style:$('#artwork-style').val(),
      timeToComplete:$('#completion-time').val(),
      url:$('#image-url').val(),
      duration:$('#auction-duration').val(),
      endTime: this._endTime()
    });
 

    $('#create-auction').trigger("reset");
  },

  appendAuctions: function(auctions){
    var auctionView = new AuctionView({model:auctions});
    this.$('#listings').append(auctionView.renderAuction().el);

  }
  
});