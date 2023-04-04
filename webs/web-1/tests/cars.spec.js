// @ts-check
import { test, expect } from '@playwright/test';

const mockCars = [
  { make: 'Foo', model: 'Bar' },
  { make: 'Valiant', model: 'Regal' },
  { make: 'Chevrolet', model: 'Nova' }
];

test('navigate to cars page', async ({ page }) => {
  await page.route('./api-1/cars', (route) => {
    return route.fulfill({ json: mockCars });
  });

  await page.goto('./cars');
  expect(await page.screenshot()).toMatchSnapshot();
});

test('accepts user input', async ({ page }) => {
  // mock api call for page load
  await page.route('./api-1/cars', async (route) => {
    const method = route.request().method();
    expect(method).toBe('GET');
    return route.fulfill({ json: mockCars });
  });

  // navigate to the cars page
  await page.goto('./cars');

  // fill out the form fields
  await page.fill('.make-input input', 'Toyota');
  await page.fill('.model-input input', 'Corolla');

  // assert
  expect(await page.screenshot()).toMatchSnapshot();
});

test('add a new car', async ({ page }) => {
  // mock api call for page load
  await page.route('./api-1/cars', async (route) => {
    const method = route.request().method();
    expect(method).toBe('GET');
    return route.fulfill({ json: mockCars });
  });

  // navigate to the cars page
  await page.goto('./cars');

  // fill out the form fields
  await page.fill('.make-input input', 'Toyota');
  await page.fill('.model-input input', 'Corolla');

  // re-mock api calls
  await page.route('./api-1/cars', async (route) => {
    const request = route.request();
    const method = request.method();

    // mock the POST request
    if (method === 'POST') {
      const body = request.postDataJSON();
      expect(body).toStrictEqual({ make: 'Toyota', model: 'Corolla' });
      return route.fulfill({ status: 200 });
    }
    // mock the subsequent GET request
    else if (method === 'GET') {
      return route.fulfill({ json: [...mockCars, { make: 'Toyota', model: 'Corolla' }] });
    }
    // throw error if anything else
    else {
      throw new Error('unexpected request method');
    }
  });

  // click submit button
  await page.click('input:has-text("Submit")');

  // assert
  expect(await page.screenshot()).toMatchSnapshot();
});
