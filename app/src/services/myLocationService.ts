/// <reference path="../__all.ts"/>

module ContractAppManager {

  export interface IamLocationService {
    loadAllLocations(): ng.IPromise<Location[]>;
    selectedLocation: Location;
  }

  export class MyLocationService implements IamLocationService {
    static $inject = ['$q'];

    constructor(private $q: ng.IQService) {
    }

    selectedLocation: Location = null;

    loadAllLocations(): ng.IPromise<Location[]> {
      return this.$q.when(this.locations);
    }

    private locations: Location[] = [
      {
        name:"USA",
        states:[
          {
            city:"Chicago",
            industry:"IT"
          },
                    {
            city:"Austin",
            industry:"IT"
          },
          {
            city:"Portland",
            industry:"IT"
          },
          {
            city:"NY",
            industry:"IT"
          },
          {
            city:"San Francisco",
            industry:"IT"
          },
          {
            city:"San Francisco",
            industry:"IT"
          },

        ]
      },{
        name:"India",
        states:[{
          city:"Chennai",
          industry:"manufactoring"
        },{
          city:"Bangalore",
          industry:"IT"
        },{
          city:"Hyderabad",
          industry:"IT"
        }]
      }

    ];
  }
}