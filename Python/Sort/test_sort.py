import unittest, array
from sort import selectionSort, insertionSort

class TestSort(unittest.TestCase):

    def test_selectionSort(self):
        input: array = [6,1,4,2,3,5,0]
        result: array = [0,1,2,3,4,5,6]
        self.assertEqual(result, selectionSort(input))

    def test_insertionSort(self):
        input: array = [6,1,4,2,3,5,0]
        result: array = [0,1,2,3,4,5,6]
        self.assertEqual(result, insertionSort(input))

# when unittest.main() doesn't exist, use the command below to run unit test.
# python -m unittest test_sort.py
if __name__ == '__main__':
    unittest.main()