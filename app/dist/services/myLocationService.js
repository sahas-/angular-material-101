/// <reference path="../__all.ts"/>
var ContractAppManager;
(function (ContractAppManager) {
    var MyLocationService = (function () {
        function MyLocationService($q) {
            this.$q = $q;
            this.selectedLocation = null;
            this.locations = [
                {
                    name: "USA",
                    states: [
                        {
                            city: "Chicago",
                            industry: "IT"
                        },
                        {
                            city: "Austin",
                            industry: "IT"
                        },
                        {
                            city: "Portland",
                            industry: "IT"
                        },
                        {
                            city: "NY",
                            industry: "IT"
                        },
                        {
                            city: "San Francisco",
                            industry: "IT"
                        },
                        {
                            city: "San Francisco",
                            industry: "IT"
                        },
                    ]
                }, {
                    name: "India",
                    states: [{
                            city: "Chennai",
                            industry: "manufactoring"
                        }, {
                            city: "Bangalore",
                            industry: "IT"
                        }, {
                            city: "Hyderabad",
                            industry: "IT"
                        }]
                }
            ];
        }
        MyLocationService.prototype.loadAllLocations = function () {
            return this.$q.when(this.locations);
        };
        MyLocationService.$inject = ['$q'];
        return MyLocationService;
    }());
    ContractAppManager.MyLocationService = MyLocationService;
})(ContractAppManager || (ContractAppManager = {}));
//# sourceMappingURL=myLocationService.js.map