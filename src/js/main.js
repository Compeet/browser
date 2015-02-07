/*
 * Copyright (C) 2015 Compeet Team
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
    var module = angular.module("compeet.Main",
            [
                "ngRoute",
                "compeet.home.Home",
                "compeet.registration.Registration"
            ]);

    module.config(["$routeProvider", router]);
    module.controller("compeet.Main.Controller", [
        controller
    ]);

    function router($routeProvider) {
        var PARTIALS = "partials/";

        $routeProvider.
            when(
                "/home", {
                templateUrl: PARTIALS + "home/home.html",
                controller: "compeet.home.Home.Controller"
            }).
            when(
                "/registration", {
                templateUrl: PARTIALS + "registration/registration.html",
                controller: "compeet.registration.Registration.Controller"
            }).
            otherwise({
                redirectTo: "/home"
            });

    }

    function controller() {

    }
})();
