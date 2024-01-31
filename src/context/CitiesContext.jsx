/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

const CityContext = createContext();

const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const resposne = await fetch(`${BASE_URL}/cities`);
        const data = await resposne.json();
        setCities(data);
      } catch (error) {
        setIsLoading(false);
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCities();
  }, []);
  return (
    <CityContext.Provider value={{ cities, isLoading }}>
      {children}
    </CityContext.Provider>
  );
};

const useCities = () => {
  const context = useContext(CityContext);
  return context;
};

export { CityProvider, useCities };
