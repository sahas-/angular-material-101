/// <reference path="./__all.ts"/>

module ContractAppManager {
    export class Location{
        public name: string;
        public states: State[];
    }
    export class State{
        public city: string;
        public industry: string;
    }
}