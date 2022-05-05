import React from "React";
import PropTypes from "prop-types";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useMercadopago } from "react-sdk-mercadopago";

let idpago = " ";

export default function cuenta(parametros: any) {
  const { idCliente } = useParams();
  const [cuenta, setCuenta] = useState([]);
  const [totalcuenta, setTotalCuenta] = useState();
  const token = parametros.usuario.accesstoken;
  const key = parametros.usuario.publikey;
}
