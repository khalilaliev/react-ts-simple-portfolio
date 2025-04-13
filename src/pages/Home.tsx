import MapBox from "../components/Mapbox/MapBox";
import DynamicTitle from "../components/DynanicTitle/DynanicTitle";

const Home: React.FC = () => {
  return (
    <>
      <DynamicTitle title="Portfolio | Home" />
      <MapBox />
    </>
  );
};

export default Home;
