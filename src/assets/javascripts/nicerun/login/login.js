/*
Login Service Directive
%nicerun-login-service
Author: Takashi Tsuruta
Date: 2016-11-26
*/

{
    'use strict';
    class LoginService {
        constructor($translate) {
            this.$translate = $translate;
            this.locale = 'en';
        }
        changeLocale() {
            this.$translate.use(this.locale);   
        }
    }
    LoginService.$inject = ['$translate'];
    const directive = () => {
        return {
             restrict: 'E',
             controller: LoginService,
             controllerAs: 'loginCtrl',
             templateUrl: '/assets/login-service.html'
        };
    };
    angular.module('nicerunApp').directive('nicerunLoginService', directive);
}
