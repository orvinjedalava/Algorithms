from array import array

def selectionSort(arr: array):
    # add implementation here
    for i in range(len(arr)-1):
        minIdx = i

        for j in range(i + 1, len(arr)):
            if (arr[minIdx] > arr[j]):
                minIdx = j

        temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
        
    return arr
