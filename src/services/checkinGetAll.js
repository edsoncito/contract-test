import axios from "axios";
export class CheckInServiceGetAll {
  constructor(endpoint) {
    this.endpoint = endpoint;
    if (!endpoint) {
      endpoint = "http://localhost:8080";
    }
  }

  getAll = () => {
    return new Promise((resolve, reject) => {
      axios
        .get(this.endpoint + "/checkin/", {})
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.log("error: " + error);
          reject(error);
        });
    });
  };
}
