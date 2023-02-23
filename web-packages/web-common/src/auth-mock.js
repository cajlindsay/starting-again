export async function init() {
  return await getBearerToken();
}

export async function getBearerToken() {
  return 'MOCK_BEARER_TOKEN';
}

export async function logOut() {
  // no need to do anything
}
