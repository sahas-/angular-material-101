/// <reference path="../__all.ts"/>

module ContractAppManager {
    export class MainController {
        static $inject = ['myLocationService', '$mdSidenav'];
        constructor(
            private myLocationService: IamLocationService,
            private $mdSidenav: angular.material.ISidenavService
        ) {
            var self = this;
            this.myLocationService
                .loadAllLocations()
                .then((locations: Location[]) => {
                    self.locations = locations;
                    self.selected = locations[0];
                    self.myLocationService.selectedLocation = self.selected;
                });
            this.likes=[];
        }
        searchText: String='';
        locations: Location[] = null;        
        selectedLocation: Location = null;
        selected: Location = null;
        likes: State[]=null;

        selectLocation(location:Location){
            this.selectedLocation = location;
            this.selected = location;
        }
        addToLike(state: State){
            console.log("add to like");
            this.likes.push(state);
            console.dir(this.likes);
        }

    }
}