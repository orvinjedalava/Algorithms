# This exercise is generated based on Brilliant.org 's lesson on Stable Matching
from typing import Dict, List

class Candidate:
    def __init__(self, name: str, dict: Dict[str,int]):
        self.name = name
        self.dict = dict

class Hospital:
    def __init__(self, name, dict):
        self.name = name
        self.dict = dict

def galeShapely(hospitals: List[Hospital], candidates: List[Candidate]) -> Dict[str,str]:
    raise NotImplementedError 