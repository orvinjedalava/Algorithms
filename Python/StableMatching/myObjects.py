from typing import Dict, List

class Candidate:
    def __init__(self, name: str, preferredHospitals: Dict[str,int]):
        self.name: str = name
        self.preferredHospitals: Dict[str,int] = preferredHospitals

# ASSUMPTION: candidates are ordered by priority
class Hospital:
    def __init__(self, name: str, preferredCandidates: List[str]):
        self.name: str = name
        self.preferredCandidates: List[str] = preferredCandidates