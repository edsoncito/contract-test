import axios from "axios";
export class CheckInServiceGetById {
  constructor(endpoint) {
    this.endpoint = endpoint;
    if (!endpoint) {
      endpoint = "http://localhost:8080";
    }
  }

  getById = (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(this.endpoint + "/checkin/byId/" + id, {})
        .then((response) => {
          console.log("edntroooo", response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log("error: " + error);
          reject(error);
        });
    });
  };
}
