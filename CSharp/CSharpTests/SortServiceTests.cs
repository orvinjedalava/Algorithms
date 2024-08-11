using Xunit;
using Sort;

namespace CSharpTests
{
    public class SortServiceTests
    {
        private readonly SortService _sortService;
        public SortServiceTests()
        {
            _sortService = new SortService();
        }

        [Theory]
        [InlineData(new int[] { 5, 2, 4, 6, 1, 3 }, new int[] { 1, 2, 3, 4, 5, 6 })]
        public void InsertionSort_Tests(int[] input, int[] expected)
        {
            int[] result = _sortService.InsertionSort(input);
            Assert.Equal(expected, result);
        }
    }
}


