import { selectionSort, insertionSort } from './sort';

describe('testing sort functions', () => {
    test('selectionSort: resulting array is equal to expected array', () => {
        expect(selectionSort([5,1,4,0,2,3])).toEqual([0,1,2,3,4,5]);
    });
    test('insertionSort: resulting array is equal to expected array', () => {
        expect(insertionSort([5,1,4,0,2,3])).toEqual([0,1,2,3,4,5]);
    });
});