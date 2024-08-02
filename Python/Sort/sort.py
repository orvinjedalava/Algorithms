from array import array

def selectionSort(arr: array):
    for i in range(len(arr)-1):
        minIdx = i

        for j in range(i + 1, len(arr)):
            if (arr[minIdx] > arr[j]):
                minIdx = j

        temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp
        
    return arr

def insertionSort(arr: array):
    for i in range(1, len(arr)):
        currentIdx = i
        while currentIdx > 0 and arr[currentIdx-1] > arr[currentIdx]:
            temp = arr[currentIdx]
            arr[currentIdx] = arr[currentIdx-1]
            arr[currentIdx-1] = temp

            currentIdx -= 1

    return arr
