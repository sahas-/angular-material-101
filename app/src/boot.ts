/// <reference path="__all.ts"/>
module ContractAppManager{
    angular.module('contractAppManager',['ngMaterial','ngMdIcons'])
        .service('myLocationService', MyLocationService)
        .controller('mainController',MainController)
        .config(($mdIconProvider: angular.material.IIconProvider,
                $mdThemingProvider: angular.material.IThemingProvider)=>{
            //set the icons                    
            $mdIconProvider.icon('logo','./src/assets/svg/target.svg',24);
            $mdIconProvider.icon('avatar','./src/assets/svg/avatar.svg',24);
            $mdIconProvider.icon('settings','./src/assets/svg/settings.svg',24);
            $mdIconProvider.icon('logout','./src/assets/svg/logout-outline.svg',24);
            $mdIconProvider.icon('location','./src/assets/svg/location.svg',128);
            $mdIconProvider.icon('home','./src/assets/svg/home.svg',24);
            $mdIconProvider.icon('email','./src/assets/svg/email.svg',24);
            $mdIconProvider.icon('like','./src/assets/svg/like.svg');
            $mdIconProvider.icon('expand','./src/assets/svg/expand-button.svg');            

            //set the theme
            $mdThemingProvider.theme('default')
                .primaryPalette('deep-purple')
                .accentPalette('yellow');
        });

}