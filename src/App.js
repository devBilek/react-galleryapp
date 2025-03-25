import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/banner/banner";
import NavBar from "./components/navBar/navBar";
import MainContent from "./components/mainContent/mainContent";
import usePixabayData from "./hooks/usePixabayData";
import { useState } from "react";

function App() {
  const { pixabayData, loading, error } = usePixabayData();
  const [filterTag, setFilterTag] = useState(0);

  const handleFilterChange = (searchTerm) => {
    setFilterTag(searchTerm);
  };

  return (
    <div className="App">
      <Banner />
      <NavBar onFilterChange={handleFilterChange} />
      <MainContent
        pixabayData={pixabayData}
        loading={loading}
        error={error}
        filterTag={filterTag}
      />
    </div>
  );
}

export default App;
