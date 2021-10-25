import dynamic from "next/dynamic";

const ComponentDynamic = dynamic(
  () => {
    return import("./MapL");
  },
  { ssr: false }
);

const MapLocation = () => {
  return <ComponentDynamic />;
};

export default MapLocation;
