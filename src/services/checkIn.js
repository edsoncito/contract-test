import axios from "axios";
export class CheckInService {
  constructor(endpoint) {
    this.endpoint = endpoint;
    if (!endpoint) {
      endpoint = "http://localhost:8080";
    }
  }

  create = (EstadoPaciente, Descripcion, NumeroAsiento, KeyVenta, KeyVuelo, KeyAsiento, EquipajeDto) => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          this.endpoint + "/checkin/registro",
          {
            EstadoPaciente,
            Descripcion,
            NumeroAsiento,
            KeyVenta,
            KeyVuelo,
            KeyAsiento,
            EquipajeDto,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log("error: " + error);
          reject(error);
        });
    });
  };
}
