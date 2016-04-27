var Auction = Backbone.Model.extend({
  defaults:{
    name:"",
    title:"",
    description:"",
    style:"",
    timeToComplete:0,
    url:"",
    duration:0,
    endTime:0
    // _timer:function (){
    // var now = new Date(); 
    // var utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    // utc = Date.parse(utc);
    // console.log(utc);
    // $('.timer').html(utc);
    // }
  }

});
