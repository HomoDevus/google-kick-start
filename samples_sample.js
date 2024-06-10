var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
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
function runAllTests(input) {
    // Parse the input into TestData objects.
    var testCases = parseInput(input);
    // Run each test case.
    testCases.forEach(runTestCase);
}
// Read the input data and run all test cases.
var lines = [];
rl.on('line', function (line) { return lines.push(line); }).on('close', function () { return runAllTests(lines); });
//# sourceMappingURL=samples_sample.js.map