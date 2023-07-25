export default function loadBalancer(chinaDownload, USDownload) {
    const chinaServer = "China Server";
    const usServer = "US Server";
  
    return new Promise((resolve, reject) => {
      // Simulate asynchronous requests to the China and US servers
      const chinaRequest = fetch(chinaDownload);
      const usRequest = fetch(USDownload);
  
      // Use Promise.race to determine which server responds first
      Promise.race([chinaRequest, usRequest])
        .then((response) => {
          // If the China server responded first
          if (response === chinaRequest) {
            resolve({
              server: chinaServer,
              response: response,
            });
          } else {
            // If the US server responded first
            resolve({
              server: usServer,
              response: response,
            });
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  