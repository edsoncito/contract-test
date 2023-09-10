import axios from "axios";
export class CheckInService {
  constructor(endpoint) {
    this.endpoint = endpoint;
    if (!endpoint) {
      endpoint = "http://localhost:8080";
    }
  }
  create = (
    key,
    codigoSeguridad,
    estadoPaciente,
    descripcion,
    numeroAsiento,
    keyVuelo,
    equipaje
  ) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          this.endpoint + "/checkin/registro",
          {
            key,
            codigoSeguridad,
            estadoPaciente,
            descripcion,
            numeroAsiento,
            keyVuelo,
            equipaje,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
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
