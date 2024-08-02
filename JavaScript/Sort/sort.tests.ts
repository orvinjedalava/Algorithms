import { selectionSort } from './sort';

describe('testing selectionSort function', () => {
    test('resulting array is not equal to expected array', () => {
        expect(selectionSort([5,1,4,0,2,3])).toEqual([0,1,2,3,4,5]);
    });
});