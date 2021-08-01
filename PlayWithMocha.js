// Specifying for a test suite
describe("Account Feature", function () {
  before(function () {
    console.log("BEFORE ALL TEST CASES");
  });

  this.beforeEach(function () {
    console.log("Before each test case");
  });
  this.afterEach(function () {
    console.log("After each test case");
  });

  // Specify for a test case
  it("should show error when missing email:", function () {
    console.log("First Test Case");
  });
  it("should create an account success", function () {
    console.log("Second Test Case");
  });

  after(function () {
    console.log("AFTER ALL TEST CASES");
  });
});
