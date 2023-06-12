import React, { createContext, useContext, useState } from "react";

const ControllerContext = createContext({});

export function ProvideController({ children }) {
  const provider = useHook();
  return (
    <ControllerContext.Provider value={provider}>
      {children}
    </ControllerContext.Provider>
  );
}

export const useController = () => {
  return useContext(ControllerContext);
};

function useHook() {
  /*
   *useState
   */
  const [galleryImages, setGalleryImages] = useState([]);
  const [menuLinksData, setMenuLinksData] = useState([]);
  const [accessibilitiesData, setAccessibilitiesData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  /*
   *functions
   */

  const loadGalleryImages = async () => {
    const response = await fetch(
      "https://0kbeg1cv46.execute-api.us-east-1.amazonaws.com/Production/accessibilities"
    );
    let jsonData = await response.json();
    setGalleryImages(jsonData);
    return galleryImages;
  };
  const loadMenuLinksData = async () => {
    const response = await fetch(
      "https://0kbeg1cv46.execute-api.us-east-1.amazonaws.com/Production/menuLinks"
    );
    let jsonData = await response.json();
    setMenuLinksData(jsonData);
    return menuLinksData;
  };
  const loadAccessibilitiesData = async () => {
    const response = await fetch(
      "https://0kbeg1cv46.execute-api.us-east-1.amazonaws.com/Production/accessibilities"
    );
    let jsonData = await response.json();
    setAccessibilitiesData(jsonData);
    return accessibilitiesData;
  };
  const loadServicesData = async () => {
    const response = await fetch(
      "https://0kbeg1cv46.execute-api.us-east-1.amazonaws.com/Production/services"
    );
    let jsonData = await response.json();
    setServicesData(jsonData);
    return servicesData;
  };
  return {
    loadGalleryImages,
    galleryImages,
    loadMenuLinksData,
    menuLinksData,
    loadAccessibilitiesData,
    accessibilitiesData,
    loadServicesData,
    servicesData,
  };
}
