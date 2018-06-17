'use strict'
var routerApp = angular.module("routerApp", ["ui.router"]);
routerApp.config(
    ["$stateProvider", "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {

            $stateProvider.state("index", {
                url: "/home",
                views: {'menu':{
                        templateUrl: "view1/menu.html",
                        controller: "myCtrl1"
                    },'icon':{
                        templateUrl: "view1/icon1.html",
                        controller: "myIcon"
                    },'v1':{
                        templateUrl: "view1/home.html",
                        controller: "myCtrl"
                    }
                }
            }).state("home", {
                views: {'v1': {
                        url: "/home",
                        templateUrl: "view1/home.html",
                        controller: "myCtrl",
                    },'icon':{
                        templateUrl: "view1/icon1.html",
                        controller: "myIcon"
                    },'menu':{

                        templateUrl: "view1/menu.html",
                        controller: "myCtrl1"
                    },
                }
            }).state("about",    {

                views: {'menu':{
                        controller: "myCtrl1",
                        url: "/menu",
                        templateUrl: "view2/menu.html",

                    },'icon':{
                    templateUrl: "view2/icon.html",
                    controller: "myIcon"
                },'v1':{
                        templateUrl: "view2/about.html",
                        controller: "myCtrl"
                    }
                }
            }).state("causes",    {

                views: {'menu':{

                        controller: "myCtrl1",
                        url: "/menu",
                        templateUrl: "view2/menu.html",

                    },'icon':{
                        templateUrl: "view2/icon.html",
                        controller: "myIcon"
                    },'v1':{
                        templateUrl: "view4/causes.html",
                        controller: "myCtrl"
                    }
                }
            }) .state("gallery",    {

                views: {'menu':{

                        controller: "myCtrl1",
                        url: "/menu",
                        templateUrl: "view2/menu.html",

                    },'icon':{
                        templateUrl: "view2/icon.html",
                        controller: "myIcon"
                    },'v1':{
                        templateUrl: "view5/gallery.html",
                        controller: "myCtrl"
                    }
                }
            }).state("contact",    {

                views: {'menu':{

                        controller: "myCtrl1",
                        url: "/menu",
                        templateUrl: "view2/menu.html",

                    },'icon':{
                        templateUrl: "view2/icon.html",
                        controller: "myIcon"
                    },'v1':{
                        templateUrl: "view3/contact.html",
                        controller: "myCtrl"
                    }
                }
            }).state("causes-single",    {

                views: {'menu':{

                        controller: "myCtrl1",
                        url: "/menu",
                        templateUrl: "view2/menu.html",

                    },'icon':{
                        templateUrl: "view2/icon.html",
                        controller: "myIcon"
                    },'v1':{
                        templateUrl: "view6/causes-single.html",
                        controller: "myCtrl"
                    }
                }
            });

            $urlRouterProvider.otherwise("/home");

        }
    ]);

routerApp.controller("myCtrl", ["$scope",
    function($scope) {

    }
]);
routerApp.controller("myCtrl1", ["$scope",
    function($scope) {

    }
]);
routerApp.controller("myIcon", ["$scope",
    function($scope) {

    }
]);