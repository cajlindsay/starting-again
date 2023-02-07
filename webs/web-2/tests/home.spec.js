// @ts-check
import { test, expect } from '@playwright/test';

test('matches snapshot', async ({ page }) => {
  await page.goto('./');
  expect(await page.screenshot()).toMatchSnapshot();
});

test('click api 1', async ({ page }) => {
  await page.route('./api-1', async route => {
    const json = {
      message: 'this is the mock result from calling api-1'
    };
    await route.fulfill({ json });
  });

  await page.goto('./');
  await page.click('button:has-text("API 1")');
  expect(await page.screenshot()).toMatchSnapshot();
});

test('click api 2', async ({ page }) => {
  await page.route('./api-2', async route => {
    const json = {
      message: 'this is the mock result from calling api-2'
    };
    await route.fulfill({ json });
  });

  await page.goto('./');
  await page.click('button:has-text("API 2")');
  expect(await page.screenshot()).toMatchSnapshot();
});
