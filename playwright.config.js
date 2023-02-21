import { defineConfig } from '@playwright/test';
import path from 'path';

const baseURL = 'http://localhost:5173';

export default defineConfig({
  // look for tests in the folder for the web project that is being tested
  testDir: path.join(process.cwd(), 'tests'),
  // maximum time one test can run for.
  timeout: 30 * 1000,
  expect: {
    /**
     * maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  // run tests in files in parallel
  fullyParallel: true,
  // fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // retry on CI only
  retries: process.env.CI ? 2 : 0,
  // opt out of parallel tests on CI
  workers: process.env.CI ? 1 : undefined,
  // reporter to use
  reporter: [['html', { open: 'never' }]],
  use: {
    // collect trace when retrying the failed test
    trace: 'on-first-retry',
    // take screenshot if one doesn't exist
    screenshot: 'only-on-failure',
    baseURL
  },

  // configure projects for browsers under test
  projects: [
    {
      name: 'Google Chrome',
      use: {
        channel: 'chrome'
      }
    }
  ],

  // run local dev server before starting the tests
  webServer: {
    // start the web server
    command: 'npm run start',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
    // make sure that the command above runs in the context of the web app under test
    cwd: process.cwd(),
    // env variables to control the build output when in visual testing mode
    env: {
      APP_ENV: 'visual_test'
    }
  }
});
