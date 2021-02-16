export const ipService = {
  getUserLocation,
};

async function getUserLocation() {
  var request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    request.open(
      "GET",
      "https://api.ipdata.co/?api-key=dcb19aafdd3accd0ca61b014f91a6cc5888d57f4f703a9758da3751e",
      true
    );

    request.setRequestHeader("Accept", "application/json");
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        const res = JSON.parse(this.responseText);
        const user = {
          lat: res.latitude,
          lon: res.longitude,
          city: res.city,
          country: res.country_name,
        };
        resolve(user);
      }
    };

    request.send();
  });
}
