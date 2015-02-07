/*
 * Copyright (C) 2015  Compeet Team
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function() {
    var module = angular.module("compeet.registration.Registration",
            [
                "ngRoute"
            ]);

    module.controller("compeet.registration.Registration.Controller", [
        "$scope",
        "compeet.registration.Registration.Service",
        controller
    ]);

    module.constant("compeet.registration.Registration.Config", {
        AS_URL: "http://home.asoftware.cz:8180/Compeet/"
    });

    module.factory("compeet.registration.Registration.Service", [
        "$http",
        "compeet.registration.Registration.Config",
        serviceFactory
    ]);

    function controller($scope, registrationService) {
        $scope.registrant = {};
        $scope.register = register;

        function register() {
            registrationService.register({
                fullName: $scope.registrant.fullName,
                email: $scope.registrant.email,
                nick: $scope.registrant.nick,
                password: $scope.registrant.password
            });
        }
    }

    function serviceFactory($http, config) {

        return {
            /**
             * Register a user.
             *
             * @param {String} userProperties iformation about the user to
             *  register
             * @param {String} userProperties.fullName
             * @param {String} userProperties.email
             * @param {String} userProperties.nick
             * @param {String} userProperties.password
             */
            register: register
        };

        function register(userProperties) {
            var request;

            request = $http({
                url: config.AS_URL + "register",
                method: "POST",
                data: {
                    fullName: userProperties.fullName,
                    email: userProperties.email,
                    nick: userProperties.nick,
                    password: userProperties.password
                }
            }).success(function(data) {
                //TODO
            }).error(function(data, code) {
                //TODO
            });
        }
    }
})();

