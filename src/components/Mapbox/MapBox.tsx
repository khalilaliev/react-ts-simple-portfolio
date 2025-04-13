import "./style.css";
import { useEffect, useRef, useState } from "react";
import Map, { ViewStateChangeEvent, MapRef } from "react-map-gl";
import { useTheme } from "../../context/ThemeContext";
import { FiNavigation } from "react-icons/fi";
import { flyToCoordinates } from "../../utils/flyToCoordinates";

const MapBox: React.FC = () => {
  const { theme } = useTheme();
  const [mapStyle, setMapStyle] = useState<string>(
    "mapbox://styles/mapbox/light-v11"
  );
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    bearing: 0,
    pitch: 0,
  });
  const mapRef = useRef<MapRef>(null);

  useEffect(() => {
    if (theme === "dark") {
      setMapStyle("mapbox://styles/mapbox/dark-v11");
    } else {
      setMapStyle("mapbox://styles/mapbox/light-v11");
    }

    const timeout = setTimeout(() => {
      flyToCoordinates([8.7241, 47.498], 12, 5000, mapRef);
    }, 500);

    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <div>
      <Map
        ref={mapRef}
        initialViewState={viewport}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={mapStyle}
        projection={{
          name: "globe",
        }}
        onMove={(evt: ViewStateChangeEvent) => setViewport(evt.viewState)}
      />
      <button
        onClick={() => flyToCoordinates([8.7241, 47.498], 12, 3000, mapRef)}
        className="absolute max-md:bottom-8 max-md:left-8 dark:bg-[#f7f7f7] bottom-20 left-10 bg-[#272525] px-4 py-2 rounded-lg transition-all duration-300 hover:border-gray-500 cursor-pointer shadow-lg"
      >
        {theme === "dark" ? (
          <FiNavigation className="text-2xl" />
        ) : (
          <FiNavigation className="text-white text-2xl" />
        )}
      </button>
    </div>
  );
};

export default MapBox;
