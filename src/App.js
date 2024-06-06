import { useState } from "react";
import { ImageContainer } from "./components/ImageContainer";
import { SearchBar } from "./components/searchBar";

function App() {

  const [search, setSearch] = useState('')

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch}/>
      <ImageContainer search={search}/>
    </div>
  );
}

export default App;