exports.config = {
  runner: "local",
  host: "localhost",
  port: 4723,
  path: "/wd/hub",
  logLevel: "info",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    require: ["@babel/register"],
    timeout: 600000,
  },
  maxInstances: 1,
  sync: true,
  specs: ["./api/addValue.js"],

  // deviceName: "QV7011B61E",

  capabilities: [
    {
      platformName: "Android",
      automationName: "UiAutomator2",
      udid: "emulator-5554",
      appPackage: "com.wdiodemoapp",
      appActivity: ".MainActivity",
      noReset: false,
    },
  ],
};
