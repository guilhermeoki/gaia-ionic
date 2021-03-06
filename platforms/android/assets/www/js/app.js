// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller("GaiaController", function($scope, $cordovaLocalNotification, $ionicPlatform) {
     
    $ionicPlatform.ready(function () {

      notificationId = '09384274961378216';

      $cordovaLocalNotification.isScheduled(notificationId).then(function(isScheduled) {
        console.log("Já está sendo observado? R:"+isScheduled);
        $scope.assisted = isScheduled; //not working
      });

      $scope.notifyMe = function () {
        $cordovaLocalNotification.schedule({
          id: notificationId,
          title: 'Gaia',
          text: 'Ei! Não se esqueça de regar seu alecrim !!! ;)',
          every: 'minute',
          icon: 'file://assets/www/img/logo.png'
        }).then(function (result) {
          console.log('Notificação lançada');
          $scope.assisted = true;
        });
      };      
         
        // $scope.updateSingleNotification = function () {
        //   $cordovaLocalNotification.update({
        //     id: 2,
        //     title: 'Warning Update',
        //     text: 'This is updated text!'
        //   }).then(function (result) {
        //     console.log('Notification 1 Updated');
        //   });
        // };  
 
        // $scope.cancelSingleNotification = function () {
        //   $cordovaLocalNotification.cancel(3).then(function (result) {
        //     console.log('Notification 3 Canceled');
        //   });
        // };      
         
    });
});