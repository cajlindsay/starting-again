export async function mockGetDevices(page, items = []) {
  await page.route('./api-1/devices', (route) => {
    return route.fulfill({ json: items });
  });
}

export async function mockGetPeople(page, items = []) {
  await page.route('./api-1/people', (route) => {
    return route.fulfill({ json: items });
  });
}

export async function mockGetCars(page, items = []) {
  await page.route('./api-1/cars', (route) => {
    return route.fulfill({ json: items });
  });
}
