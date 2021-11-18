import React from "react";
import { useLocation, useParams } from "react-router";
//import styles from "./Results.module.scss";

function Results() {
  const params = useParams();
  const location = useLocation();
  console.log(params, location);
  return <>results, {params.id}</>;
}

export default Results;
