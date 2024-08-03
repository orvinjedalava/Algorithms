# This exercise is generated based on Brilliant.org 's lesson on Stable Matching
from typing import Dict, List
from myObjects import Hospital, Candidate

def galeShapley(hospitals: List[Hospital], candidates: List[Candidate]) -> Dict[str,str]:
    # TODO: Implement function helper to balance out both sides when needed.

    # Initialize totalCount representing the total number of candidate list of all Hospital objects
    totalCount: int = 0
    
    for hospital in hospitals:
        totalCount += len(hospital.preferredCandidates)

    # Initialize result dictionary per candidate name
    result: Dict[str,str] = {}
    for candidate in candidates:
        result[candidate.name] = ''

    # Initialize offerAccepted dictionaty per hospital name
    offerAccepted: Dict[str, bool] = {}
    for hospital in hospitals:
         offerAccepted[hospital.name] = False

    # start the loop
    while totalCount > 0:
        # Initialize allOffersAccepted
        allOffersAccepted: bool = True

        for hospital in hospitals:
            if offerAccepted[hospital.name] == False:
                # reduce count by 1
                totalCount -= 1
                allOffersAccepted = False

                # get the top preferred candidate of the hospital and remove from the list
                preferredCandidateName: str = hospital.preferredCandidates.pop(0)
                # get the preferred Candidate 
                preferredCandidate: Candidate = next((obj for obj in candidates if obj.name == preferredCandidateName ), None)
                # get the tentative hospital name offer held by preferred Candidate ( returns '' if no offers yet )
                tentativeHospitalName: str = result[preferredCandidateName]

                # if preferred Candidate has no offer on hand yet, OR current Hospital is a better offer for the Candidate, perform logic inside condition
                if tentativeHospitalName == '' or preferredCandidate.preferredHospitals[hospital.name] < preferredCandidate.preferredHospitals[tentativeHospitalName]:
                    # preferred Candidate accepts current Hospital offer
                    result[preferredCandidate.name] = hospital.name
                    offerAccepted[hospital.name] = True
                    # set the previous Hospital offer back to not accepted  
                    if tentativeHospitalName != '':
                        offerAccepted[tentativeHospitalName] = False


        # if all hospital offers have been accepted, stop the loop by setting totalCount = 0 ( short circuit )
        if allOffersAccepted:
            totalCount = 0

    return result 