/*
nicerun angular app js
Author: Takashi Tsuruta
Date: 2015-11-26
*/

var niceRunApp = angular.module('niceRunApp',
    [
      'pascalprecht.translate'
    ]
);

// angular-translate settings
niceRunApp.config(['$translateProvider', function($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

}]);
