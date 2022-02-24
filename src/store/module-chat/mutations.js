import { DeepstreamClient } from "@deepstream/client";

export function iniciaCliente(state) {
  // state.cliente = new DeepstreamClient("localhost:6020");
  // state.cliente.login().then(() => {
  //   state.record = state.cliente.record.getRecord("ChatQS");
  // });
}

export function enviar(state, datos) {
  // state.record.set("palabras", datos);
}

export function escuchar(state) {
  // state.record.subscribe("palabras", (val) => {
  //   state.datosChat = val;
  // });
}
