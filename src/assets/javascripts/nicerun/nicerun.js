/*
nicerun angular app js
Author: Takashi Tsuruta
Date: 2015-11-26
*/

var nicerunApp = angular.module('nicerunApp',
    [
      'pascalprecht.translate'
    ]
);

// angular-translate settings
nicerunApp.config(['$translateProvider', function($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

}]);
