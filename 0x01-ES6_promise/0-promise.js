function getResponseFromAPI() {
  return new Promise((resolve) => {
  // Simulate an API call
    setTimeout(() => {
      const apiResp = { data: 'Response from API.' };
      // Resolve the Promise with the API response
      resolve(apiResp);
    }, 2000);
  });
}

export default getResponseFromAPI;