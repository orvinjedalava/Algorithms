import { galeShapley } from './stableMatching';
import { Hospital, Candidate } from './myObjects';

describe('Testing stable matching functions', () => {
    test('galeShapley: resulting array is equal to expected array',() => {
        let hospitals: Hospital[] = [];
        let candidates: Candidate[] = [];

        let expectedResult: {[key: string]: string} = { 'A-C': 'A-H', 'B-C': 'B-H' };
        expect(galeShapley(hospitals, candidates)).toEqual(expectedResult);
    });
});