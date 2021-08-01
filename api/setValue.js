describe("Learning WebdriverIO API", function () {
  it("should input username and password OK", function () {
    // Declare element selector values
    const LOGIN_ICON_HOME_SCREEN = "~Login";
    const EMAIL_TXT_FIELD = "~input-email";
    const PASSWORD_TXT_FIELD = "~input-password";
    const LOGIN_BTN = "~button-LOGIN";

    // 1. Click on Login on Home Screen
    $(LOGIN_ICON_HOME_SCREEN).click();
    console.log("Click success");

    // 2. Fill email text field
    $(EMAIL_TXT_FIELD).setValue("a@a.com");
    console.log("Enter email success");

    // 3. Fill password text field
    $(PASSWORD_TXT_FIELD).setValue("12345678");
    console.log("Enter pass success");

    // 4. Click on Login btn
    $(LOGIN_BTN).click();
    console.log("Click success");

    browser.pause(3000);
  });
});
