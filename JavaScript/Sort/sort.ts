export function selectionSort(arr: number[]): number[] {

    for (let i = 0; i <= arr.length - 2; i++) {
        let minIdx: number = i;

        for(let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }

        let temp: number = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

export function insertionSort(arr: number[]): number[] {
    for(let i = 1; i <= arr.length - 1; i++) {
        let currentIdx: number = i;
        while (currentIdx > 0 && arr[currentIdx - 1] > arr[currentIdx]) {
            let temp: number = arr[currentIdx];
            arr[currentIdx] = arr[currentIdx - 1];
            arr[currentIdx - 1] = temp;
            currentIdx--;
        }
    }
    
    return arr;
}