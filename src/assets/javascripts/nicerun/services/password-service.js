/*
Password Service - es6
Author: Takashi Tsuruta
Date: 2016-11-27
*/

{
    'use strict';
    class PasswordService {
        constructor($resource) {
            this.$resource = $resource;
            this.authenticationEndpoint = '/apis/password/authentication';
            return this.$resource(
                this.authenticationEndpoint,
                null,
                {
                    auth: {
                        method:'POST'
                    }
                }
            );
        }
    }
    PasswordService.$inject = ['$resource'];
    angular.module('nicerunApp').factory('PasswordService', PasswordService);
}
