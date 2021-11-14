import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "./Card";
import { Header } from "./Header";

export const SingleJob = () => {
  const params = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const { data } = await axios.get(`http://localhost:8000/jobs/${params.id}`);
    setData(data);
  }
  return (
    <div>
      <Header />
      <h1>You have arrived to Job id {params.id}</h1>
      <section className="details">
        <Card {...data} />
      </section>
    </div>
  );
};
