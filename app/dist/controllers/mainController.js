/// <reference path="../__all.ts"/>
var ContractAppManager;
(function (ContractAppManager) {
    var MainController = (function () {
        function MainController(myLocationService, $mdSidenav) {
            this.myLocationService = myLocationService;
            this.$mdSidenav = $mdSidenav;
            this.searchText = '';
            this.locations = null;
            this.selectedLocation = null;
            this.selected = null;
            this.likes = null;
            var self = this;
            this.myLocationService
                .loadAllLocations()
                .then(function (locations) {
                self.locations = locations;
                self.selected = locations[0];
                self.myLocationService.selectedLocation = self.selected;
            });
            this.likes = [];
        }
        MainController.prototype.selectLocation = function (location) {
            this.selectedLocation = location;
            this.selected = location;
        };
        MainController.prototype.addToLike = function (state) {
            console.log("add to like");
            this.likes.push(state);
            console.dir(this.likes);
        };
        MainController.$inject = ['myLocationService', '$mdSidenav'];
        return MainController;
    }());
    ContractAppManager.MainController = MainController;
})(ContractAppManager || (ContractAppManager = {}));
//# sourceMappingURL=mainController.js.map