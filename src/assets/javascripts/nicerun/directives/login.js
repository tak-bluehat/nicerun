/*
Login Service Directive
%nicerun-login-service
Author: Takashi Tsuruta
Date: 2016-11-26
*/

{
    'use strict';
    class LoginService {
        constructor($translate, PasswordService) {
            this.$translate = $translate;
            this.PasswordService = PasswordService;
            this.locale = 'en';
            this.inputErrorCode = -1;
            this.accessAcceptCode = 200;
            this.accessDeniedCode = 403;
            this.accessErrorCode = 500;
            this.mailAddress = '';
            this.password = '';
            this.errorMessage = '';
        }
        changeLocale() {
            this.$translate.use(this.locale);   
        }
        authentication() {
            this.errorMessage = '';
            if(!this.mailAddress || !this.password) {
                return this.displayError(this.inputErrorCode);
            }
            let resultObject
            this.PasswordService.auth({
                mailAddress:this.mailAddress, password: this.password},
                (response) => {
                    resultObject = response;
                    switch(resultObject.statusCode) {
                        case this.accessAcceptCode:
                            alert('LOGIN SUCCESS');
                            break;
                        case this.accessDeniedCode:
                            this.displayError(this.accessDeniedCode);
                            break;
                        case this.accessAcceptCode:
                            this.displayError(this.accessErrorCode);
	                    break;
                    }
                },
                (error) => {
                    this.displayError(this.accessErrorCode);
                }
            );
        }
        displayError(errorCode) {
            switch(errorCode) {
                case this.accessDeniedCode:
                    this.errorMessage = 'access_denied';
                    break;
                case this.accessErrorCode:
                    this.errorMessage = 'server_error';
                    break;
                case this.inputErrorCode:
                    this.errorMessage = 'input_error';
                    break;
            }
        }
    }
    LoginService.$inject = ['$translate', 'PasswordService'];
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
