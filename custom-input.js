function parseInput(input) {
    var line = 0;
    // Read the number of test cases from the first line.
    var numCases = Number(input[line++]);
    var testData = [];
    for (var testNumber = 1; testNumber <= numCases; ++testNumber) {
        // The first line of each test case contains the number of candyBags
        // and the number of kids. The first number isn't needed.
        var numKids = Number(input[line++].split(' ')[1]);
        // The second line of each test contains the number of candies in each
        // bag.
        var candyBags = input[line++].split(' ').map(function (str) { return Number(str); });
        testData.push({ testNumber: testNumber, numKids: numKids, candyBags: candyBags });
    }
    return testData;
}
function runTestCase(data) {
    // Get sum of candies
    var candySum = data.candyBags.reduce(function (acc, curr) { return acc + curr; }, 0);
    var leftCandies = candySum % data.numKids;
    return "Case #".concat(data.testNumber, ": ").concat(leftCandies);
}
process.stdin.on('data', function (data) {
    var input = data.toString();
    console.log(input);
    var res = parseInput(input);
    console.log(res);
    process.stdout.write(res + '');
    process.exit();
});
//# sourceMappingURL=custom-input.js.map