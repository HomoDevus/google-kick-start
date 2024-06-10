function parseInput(input: string[]) {
  let line: number = 0;
  // Read the number of test cases from the first line.
  const numCases = Number(input[line++]);

  const testData: TestData[] = [];
  for (let testNumber = 1; testNumber <= numCases; ++testNumber) {
    // The first line of each test case contains the number of candyBags
    // and the number of kids. The first number isn't needed.
    const numKids = Number(input[line++].split(' ')[1]);

    // The second line of each test contains the number of candies in each
    // bag.
    const candyBags = input[line++].split(' ').map((str) => Number(str));

    testData.push({testNumber, numKids, candyBags});
  }
  return testData;
}

function runTestCase(data: TestData) {
  // Get sum of candies
  let candySum = data.candyBags.reduce((acc, curr) => acc + curr, 0)

  let leftCandies = candySum % data.numKids

  return `Case #${data.testNumber}: ${leftCandies}`
}

process.stdin.on('data', data => {
  let input = data.toString()
  console.log(input)
  let res = parseInput(input);
  console.log(res)
  process.stdout.write(res + '');
  process.exit();
});