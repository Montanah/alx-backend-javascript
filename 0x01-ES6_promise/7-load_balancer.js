export default function loadBalancer(chinaDownload, USDownload) {
    return new Promise((resolve) => {
      chinaDownload.then((china) => {
        USDownload.then((US) => {
          if (china > US) {
            resolve(china);
          } else {
            resolve(US);
          }
        });
      });
    });
  }
  