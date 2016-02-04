(function() {
  'use strict';
  
//  angular.module('eventVideoLinks', ['keyMomentEntry'])
//    .controller('EventVideoLinksController',EventVideoLinksController);
  var app = angular.module('eventVideoLinks',[]);
  
  app.controller('EventVideoLinksController', EventVideoLinksController);
  
  EventVideoLinksController.$inject = ['$scope'];
  
  function EventVideoLinksController ($scope) {
  // function EventVideoLinksController ($scope) {
    //Parse.initialize("1HkffPOwi6w1EX2U65C2TRSlGm7ut3omOqfxjeZs", "RI5TiK66heyNra1ul37eJosljJto7p3yUKR4hkkr");

    //var testprop = "test";
    var vm = this;
    vm.vmprop = "vmproptest";
    vm.selectedActivity = null;
    
    vm.testResults = [
      { objectId: "2", activityName: "Come Fly With Me" },
      { objectId: "3", activityName: "Come What May" }
    ];
    
    
    vm.activities = [];
    
    vm.description = "desc";
    
    //vm.getActivities = getActivities;
    
    
    activate();
    
    //angular.module for realtime KeyMoment entry, typically on a mobile device
    
    // create a local object into which to store input data?
    //  then save this object to Parse at the end?
    
    function activate() {
      getActivities();
      // getActivities();
    }
    
    // load EventActivity list for dropdown menu
    function getActivities() {
      var EventActivity = Parse.Object.extend("EventActivity");
      var activityQuery = new Parse.Query(EventActivity);
      
      //activityQuery.equalTo("activityType","song");
      activityQuery.select("activityName");
      activityQuery.ascending("activityName");
      
      activityQuery
        .find()
        .then(function(results) {
          vm.activities = results;
          $scope.$apply();
        });
      // activityQuery.find({
      //   success: function(results) {
      //     // Do something with the returned Parse.Object values
      //     // $scope.$apply(vm.activities = results);
      //     vm.activities = results;
      //     //return results;
      //     // for (var i = 0; i < results.length; i++) {
      //       // vm.activities[i] = results[i];
      //     //  alert(object.id + ' - ' + object.get('playerName'));
      //     // }

      //     //alert("Successfully retrieved " + results.length + " songs.");
      //     //alert(results);
      //   },
      //   error: function(error) {
      //     alert("Error: " + error.code + " " + error.message);
      //   }
      // });

    }
    
    
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