// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');
const { JUnitXmlReporter } = require('jasmine-reporters');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: !process.env.SELENIUM_URL,
  baseUrl: '',
  seleniumAddress: process.env.SELENIUM_URL,
  chromeDriver: !process.env.SELENIUM_URL ? require('chromedriver').path : null,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: StacktraceOption.PRETTY
      }
    }));
    jasmine.getEnv().addReporter(new JUnitXmlReporter({
      filePrefix: 'test-e2e',
      savePath: require('path').join(__dirname, '../dist/reports/smart-estimator')
    }));
  }
};
