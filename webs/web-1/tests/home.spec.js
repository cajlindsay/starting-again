// @ts-check
import { test, expect } from '@playwright/test';

test('matches snapshot', async ({ page }) => {
  await page.goto('http://localhost:5173');
  expect(await page.screenshot()).toMatchSnapshot();
});

test('click api 1', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('button:has-text("API 1")');
  expect(await page.screenshot()).toMatchSnapshot();
});

test('click api 2', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await page.click('button:has-text("API 2")');
  expect(await page.screenshot()).toMatchSnapshot();
});
