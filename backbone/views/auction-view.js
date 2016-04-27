var AuctionView = Backbone.View.extend({
  el: '.listings',

  template: Handlebars.compile($('#auction-template').html()),
  
  initialize: function(){
    this._loop();
    },
   
  _loop:function(auctions){
      var _this = this;
      setInterval(function() {
        _this._timer();
      }, 1000);
    },

  _timer:function (auctions){
    var now = new Date(); 
    var utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    utc = Date.parse(utc);
    var end = this.model.get('endTime');
    var timer = end-utc;
    
    var d, h, m, s;
    s = Math.floor(timer / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    $('.timer').html(d +":" + h +":" + m+":"+ s);
    },

  renderAuction: function(auctions){
    this.$el.append(this.template(this.model.toJSON()));

    return this;
  }
});