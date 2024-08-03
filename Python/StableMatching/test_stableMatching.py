import unittest
from stableMatching import galeShapley
from typing import Dict, List
from myObjects import Hospital, Candidate

class TestStableMatching(unittest.TestCase):
    def test_galeShapley(self):
        # Initialize hospitals
        hospitals: List[Hospital] = []
        hospitals.append(Hospital('A-H', [ 'A-C', 'B-C' ]))
        hospitals.append(Hospital('B-H', [ 'A-C', 'B-C' ]))

        # Initialize candidates
        candidates: List[Candidate] = []
        candidates.append(Candidate('A-C', { 'A-H': 1, 'B-H': 2 }))
        candidates.append(Candidate('B-C', { 'A-H': 1, 'B-H': 2 }))

        # Expected result ( candidate, hospital )
        expectedResult: Dict[str,str] = {'A-C': 'A-H', 'B-C': 'B-H'}

        self.assertEqual(expectedResult, galeShapley(hospitals, candidates))

# when unittest.main() doesn't exist, use the command below to run unit test.
# python -m unittest test_sort.py
if __name__ == '__main__':
    unittest.main()