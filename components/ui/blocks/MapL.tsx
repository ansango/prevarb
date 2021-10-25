import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const colorMarker = "#34D399";

const MapL = () => {
  const handleClick = (e: any) => {
    window.open(
      "https://www.google.com/maps/place/%C3%81rbore/@42.2254987,-8.7333908,17z/data=!3m1!4b1!4m5!3m4!1s0xd2f620dd6db62d3:0x2046670ff4675c28!8m2!3d42.2254947!4d-8.7312021",
      "_blank"
    );
  };
  return (
    <MapContainer
      center={[42.2254947, -8.7333908]}
      zoom={17}
      scrollWheelZoom={false}
      className="map-leaf"
    >
      <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5zYW5nbyIsImEiOiJja3Y3NnA2bGcxZjl1Mm9sdW5wcnhiMWtiIn0.h8ZZQEhOYwpQRjW7_DDtfA" />

      <CircleMarker
        center={[42.2254, -8.73115]}
        pathOptions={{ color: colorMarker }}
        eventHandlers={{ click: handleClick }}
      >
        <Tooltip>Arbore</Tooltip>
      </CircleMarker>
    </MapContainer>
  );
};

export default MapL;
