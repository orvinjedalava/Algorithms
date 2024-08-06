import { galeShapley } from './stableMatching';
import { Hospital, Candidate } from './myObjects';

describe('Testing stable matching functions', () => {
    test('galeShapley: resulting array is equal to expected array',() => {
        let hospitals: Hospital[] = [ new Hospital('A-H', [ 'A-C', 'B-C']), new Hospital('B-H', [ 'A-C', 'B-C'])];
        let candidates: Candidate[] = [ new Candidate('A-C', {'A-H': 1, 'B-H': 2}), new Candidate('B-C', {'A-H':1, 'B-H': 2})];
        let expectedResult: {[key: string]: string} = { 'A-C': 'A-H', 'B-C': 'B-H' };

        expect(galeShapley(hospitals, candidates)).toEqual(expectedResult);
    });
});