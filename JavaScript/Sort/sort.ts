export function selectionSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length - 2; i++) {
        let minIdx = i;

        for(let j = i + 1; j < arr.length; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}