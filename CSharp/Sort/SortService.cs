using System;

namespace Sort
{
    public class SortService
    {
        /// <summary>
        /// This function was generated using Github Copilot
        /// </summary>
        /// <param name="array"></param>
        /// <returns></returns>
        public int[] InsertionSort(int[] array)
        {
            for (int i = 1; i < array.Length; i++)
            {
                int key = array[i];
                int j = i - 1;

                // Move elements of array[0..i-1], that are greater than key,
                // to one position ahead of their current position
                while (j >= 0 && array[j] > key)
                {
                    array[j + 1] = array[j];
                    j = j - 1;
                }
                array[j + 1] = key;
            }
            return array; 
        }
            
    }
}


