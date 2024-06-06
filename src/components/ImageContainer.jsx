import Title from "antd/es/typography/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCards";

const getData = (search) => {
  return axios.get(`https://api.pexels.com/v1/search?query=${search}`, {
    headers: {
      Authorization: "XksaITrTWFxSh5h4Q52c8OdN47vcPguSMzgjGV1mDYCJCqPi2jUQ5hyS",
    },
  });
};

export const ImageContainer = ({ search }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search.length > 0) {
      getData(search).then((response) => {
        setData(response.data.photos);
      });
    }
  }, [search]);

  console.log(data);

  return (
    <div>
      <Title>Container:</Title>
      <ImageCard photos={data} />
    </div>
  );
};
