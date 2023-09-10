export const createCheckInBody = {
  EstadoPaciente: false,
  Descripcion: "0",
  NumeroAsiento: 12,
  KeyVenta: "c9deb166-a2b7-46d9-80c4-23423423432",
  KeyVuelo: "2550fa39-efa6-4923434312-a5a723-234",
  KeyAsiento: "d7a92b9-233-4322b-9905-16c84123b0d6e",
  EquipajeDto: [
    {
      PesoEquipaje: 12.3,
      NumeroEtiqueta: "9fskf99s0",
      Descripcion: "maleta azul",
    },
  ],
};

export const createCheckInResponse = {
  key: "282c3da9-2573-48e2-aa2b-b0b104bfa743",
};

export const getById = "22ce4c2f-510f-4f9b-a6c1-40869a1181de";

export const createCheckInGetByResponse = {
  key: "22ce4c2f-510f-4f9b-a6c1-40869a1181de",
  codigoSeguridad: "1234",
  estadoPaciente: "Sano",
  descripcion: "Sano",
  numeroAsiento: "1",
  keyVuelo: "22ce4c2f-510f-4f9b-a6c1-2343rf232323",
  equipaje: [
    {
      PesoEquipaje: "10",
      NumeroEtiqueta: "1234",
      Descripcion: "maleta azul",
    },
    {
      PesoEquipaje: "3",
      NumeroEtiqueta: "45t43g4",
      Descripcion: "maleta gris",
    },
  ],
};
