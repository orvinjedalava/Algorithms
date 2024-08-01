import unittest, array
from sort import selectionSort

class TestSort(unittest.TestCase):

    def test_selectionSort(self):
        input = [6,1,4,2,8,9,0]
        result = [0,1,2,4,6,8,9]
        self.assertEqual(result, selectionSort(input))

# when unittest.main() doesn't exist, use the command below to run unit test.
# python -m unittest test_sort.py
if __name__ == '__main__':
    unittest.main()