describe("Learning WebdriverIO API", function () {
  it("should Add Value API", function () {
    // Declare element selector values
    const LOGIN_ICON_HOME_SCREEN = "~Login";
    const EMAIL_TXT_FIELD = "~input-email";

    // 1. Click on Login on Home Screen
    $(LOGIN_ICON_HOME_SCREEN).click();

    // 2. Fill email text field by using addValue
    $(EMAIL_TXT_FIELD).addValue("a@");
    $(EMAIL_TXT_FIELD).addValue("a.com");

    browser.pause(3000);
  });
});
