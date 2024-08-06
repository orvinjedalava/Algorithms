import { Hospital, Candidate } from './myObjects'

export function galeShapley(hospitals: Hospital[], candidates: Candidate[]) : {[key: string]: string} {
    // initialize count
    let totalCount: number = 0;
    // initialize dictionary for hospital offers accepted
    let offerAccepted: {[key: string]: boolean} = {};

    hospitals.forEach(hospital => {
        totalCount += hospital.preferredCandidates.length;
        offerAccepted[hospital.name] = false;
    });

    // initialize result dictionary
    let result: {[key:string]: string} = {};
    candidates.forEach(candidate => {
        result[candidate.name] = '';
    });

    // initialize Are

    // start the matching loop
    while(totalCount > 0) {
        let allOffersAccepted: boolean = true;

        hospitals.forEach(hospital => {

            if (!offerAccepted[hospital.name]) {
                totalCount--;
                allOffersAccepted = false;

                // get the top preferred candidate of the hospital and remove from the list
                let preferredCandidateName: string | undefined = hospital.preferredCandidates.shift();
                if (preferredCandidateName == undefined) {
                    throw new Error('Preferred candidate name does not exists');
                }
                // get the preferred Candidate from the list of Candidate objects
                let preferredCandidate: Candidate | undefined = candidates.find(item => item.name == preferredCandidateName);
                if (preferredCandidate === undefined) {
                    throw new Error('Preferred candidate does not exists');
                }

                // get the tentative hospital name offer held by preferred Candidate ( returns '' if no offers yet )
                let tentativeHospitalName: string = result[preferredCandidateName];

                // get current hospital ranking 
                let currentHospitalRank: number = preferredCandidate.preferredHospitals[hospital.name] ?? Number.MAX_VALUE;
                // get tentative hospital ranking
                let tentativeHospitalRank: number = tentativeHospitalName === '' ? Number.MAX_VALUE : 
                     preferredCandidate?.preferredHospitals[tentativeHospitalName] ?? Number.MAX_VALUE;

                // if preferred Candidate has no offer on hand yet, OR current Hospital is a better offer for the Candidate, perform logic inside condition
                if (tentativeHospitalName === '' || currentHospitalRank < tentativeHospitalRank) {
                    // preferred Candidate accepts current Hospital offer
                    result[preferredCandidate.name] = hospital.name;
                    offerAccepted[hospital.name] = true;
                    // set the previous Hospital offer back to not accepted
                    if (tentativeHospitalName !== '') {
                        offerAccepted[tentativeHospitalName] = false;
                    }
                }
            }
        });
        
        // if all hospitals offers are accepted, short circuit the loop.
        if (allOffersAccepted) {
            totalCount = 0;
        }
    }

    return result;
}