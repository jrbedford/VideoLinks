(function() {
  'use strict';
  
  angular.module('keyMomentEntry', [])
    .controller('KeyMomentEntryController',KeyMomentEntryController);
    // is this not really how this is supposed to work?
  
  //controllers should   
  function KeyMomentEntryController() {
    var vm = this;
    
    vm.activities = [];
    vm.description = "";
    
    vm.testprop ="this is the test prop contents";
    //angular.module for realtime KeyMoment entry, typically on a mobile device
    
    // create a local object into which to store input data?
    //  then save this object to Parse at the end?
    
    
    // load EventActivity list for dropdown menu
    vm.EventActivity = Parse.Object.extend("EventActivity");
    vm.activityQuery = new Parse.Query(EventActivity);
    
    vm.activityQuery.equalTo("activityType","song");
    vm.activityQuery.ascending("activityName");
    
    vm.activityQuery.find({
      success: function(results) {
        alert("Successfully retrieved " + results.length + " songs.");
        // Do something with the returned Parse.Object values
        vm.activities = results;
        //for (var i = 0; i < results.length; i++) {
        //  var object = results[i];
        //  alert(object.id + ' - ' + object.get('playerName'));
        //}
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
    
    
    // take input for KeyMoment.description
    //  ACTUALLY, in this controller there won't be any "taking input" --
    //  that'll all happen in the template.
    //  Here, I should just handle the data that will be bound to those inputs... 
    //  which may mean setting default values, or normalizing data at some point
    //  eventually, though, i'll need to assemble all of the data into an object to save to Parse 
    
    
    // take input for KeyMoment.timestamp (if manual)
    
    
    // take input for KeyMoment.scope (which should be an array? in case of multiple sections... also thought about making this a separate class, so it'd be FK-ish)
    //  if this is getting the list of possible scopes from another class (MomentScope?), will need to load this info
    
     
    
    
    
    //angular.module for after-the-fact KeyMoment entry
    
    // should include all of the above, and:
    
    // take input for rehearsal date?
    
    // take input for video number (or get a list of video #s from VideoPart?)
    
    // take input for video timestamp
    
    // do some calculation to determine the right datetime for KeyMoment.timestamp
    
    //  KeyMoment.timestamp = VideoPart.startDatetime + this.timestamp 

    
  };
  
  
})();