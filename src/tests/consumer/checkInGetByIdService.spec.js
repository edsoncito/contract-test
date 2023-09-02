import { PactV3, MatchersV3 } from "@pact-foundation/pact";
import { describe, it } from "mocha";
import { expect } from "chai";
import { getById, createCheckInGetByResponse } from "../PactResponse.js";
import { CheckInServiceGetById } from "../../services/checkInGetByIdService.js";
const { like } = MatchersV3;

describe("El API de checkIn", () => {
  const provider = new PactV3({
    consumer: "react-client",
    provider: "checkInById-service",
  });

  describe("obtiene un registro", () => {
    it("retorna un objeto del checkIn que ya fue creado", () => {
      provider
        .given("obtiene checkIn")
        .uponReceiving("un registro para hacer un checkIn")
        .withRequest({
          method: "GET",
          path: "/checkin/key",
          query: {
            key: getById,
          },
        })
        .willRespondWith({
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: like(createCheckInGetByResponse),
        });
      return provider.executeTest(async (mockServer) => {
        let checkInService = new CheckInServiceGetById(mockServer.url);
        return checkInService.getById(getById).then((response) => {
          console.log(response);
          expect(response).to.be.not.null;
          expect(response.codigoSeguridad).equal(createCheckInGetByResponse.codigoSeguridad);
        });
      });
    });
  });
});
