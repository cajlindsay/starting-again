// @ts-check
import { test, expect } from '@playwright/test';

test('matches snapshot', async ({ page }) => {
  await page.goto('./');
  expect(await page.screenshot()).toMatchSnapshot();
});

test('click roll dice', async ({ page }) => {
  await page.route('./graphql-server', async (route) => {
    const json = {
      message: 'this is the mock result from calling graphql-server'
    };
    await route.fulfill({ json });
  });

  await page.goto('./');
  await page.click('button:has-text("Roll dice")');
  expect(await page.screenshot()).toMatchSnapshot();
});
