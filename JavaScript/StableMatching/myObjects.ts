export class Hospital {
    constructor(name: string, preferredCandidates: string[]) {
        this.name = name;
        this.preferredCandidates = preferredCandidates;
    }
    name: string ;
    preferredCandidates: string[];
}

export class Candidate {
    constructor(name: string, preferredHospitals: {[key: string]: number}) {
        this.name = name;
        this.preferredHospitals = preferredHospitals;
    }

    name: string = '';
    preferredHospitals: {[key: string]: number} = {}
}