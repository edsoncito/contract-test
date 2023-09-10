import { PactV3, MatchersV3 } from "@pact-foundation/pact";
import { describe, it } from "mocha";
import { expect } from "chai";
import { CheckInServiceGetAll } from "../../services/checkinGetAll.js";
import { checkInGetAll } from "../PactResponse.js";
const { like } = MatchersV3;

describe("El API de checkIn", () => {
  const provider = new PactV3({
    consumer: "react-client",
    provider: "checkInGetAll-service",
  });

  describe("obtiene todo el historial de los checkIn", () => {
    it("retorna un array de los chechIn", () => {
      provider
        .given("obtiene un array checkIn")
        .uponReceiving("un registro para hacer un checkIn")
        .withRequest({
          method: "GET",
          path: "/checkin/",
        })
        .willRespondWith({
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
          body: like(checkInGetAll),
        });
      return provider.executeTest(async (mockServer) => {
        let checkInService = new CheckInServiceGetAll(mockServer.url);
        return checkInService.getAll().then((response) => {
          console.log("aqui", response);
          expect(response).to.be.not.null;
          expect(response).to.deep.equal(checkInGetAll);
        });
      });
    });
  });
});
