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

  capabilities: [
    {
      platformName: "Android",
      deviceName: "QV7011B61E",
      appPackage: "com.wdiodemoapp",
      appActivity: "com.wdiodemoapp.MainActivity",
    },
  ],
};
