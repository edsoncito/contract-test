import { PactV3, MatchersV3 } from "@pact-foundation/pact";
import { describe, it } from "mocha";
import { expect } from "chai";
import { CheckInService } from "../../services/checkIn.js";
import { createCheckInBody, createCheckInResponse } from "../PactResponse.js";
const { like } = MatchersV3;

describe("El API de checkIn", () => {
  let checkInService;
  const provider = new PactV3({
    consumer: "react-client",
    provider: "checkIn-service",
  });

  describe("crear checkIn", () => {
    it("retorna el Id del checkIn creado", () => {
      provider
        .given("crear checkIn")
        .uponReceiving("un registro para hacer un checkIn")
        .withRequest({
          method: "POST",
          path: "/checkin/registro",
          headers: {
            Accept: "application/json",
          },
          body: createCheckInBody,
        })
        .willRespondWith({
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: like(createCheckInResponse),
        });
      return provider.executeTest(async (mockServer) => {
        checkInService = new CheckInService(mockServer.url);
        return checkInService
          .create(
            createCheckInBody.EstadoPaciente,
            createCheckInBody.Descripcion,
            createCheckInBody.NumeroAsiento,
            createCheckInBody.KeyVenta,
            createCheckInBody.KeyVuelo,
            createCheckInBody.KeyAsiento,
            createCheckInBody.EquipajeDto
          )
          .then((response) => {
            console.log(response);
            expect(response).to.be.not.null;
            expect(response).to.be.a.string;
            expect(response.key).equal(createCheckInResponse.key);
          });
      });
    });
  });
});
