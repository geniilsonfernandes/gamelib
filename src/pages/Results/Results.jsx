import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import styles from "./Results.module.scss";
import { useSearch } from "../../Hooks/search/useSearch";

function Results() {
  const { SearchValue } = useSearch();
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = SearchValue(params.id);
    setData(data);
  }, [params.id, SearchValue]);

  return <>{data}</>;
}

export default Results;
