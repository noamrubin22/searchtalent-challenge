import "./App.css";
import "@fontsource/roboto";
import { useState } from "react";
import Box from "@material-ui/core/Box";
import SearchDoctors from "./components/SearchDoctors/SearchDoctors";
import PreviewDoctors from "./components/PreviewDoctors/PreviewDoctors";

function App() {
  const [data, setData] = useState({});
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <Box className="App">
      <SearchDoctors setData={setData} setHasSearched={setHasSearched} />
      {hasSearched && <PreviewDoctors data={data} hasSearched={hasSearched} />}
    </Box>
  );
}

export default App;
