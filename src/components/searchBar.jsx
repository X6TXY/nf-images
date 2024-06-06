import { Input } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

export function SearchBar({ search, setSearch }) {
  return (
    <div>
      <Title>Search bar:</Title>
      <Input
        placeholder="Enter the topic of images"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></Input>
    </div>
  );
}
