import { DestinyProps } from "@/pages";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

interface MapProps {
  destinyLatLng?: DestinyProps;
}

const Map = ({ destinyLatLng }: MapProps) => {
  return (
    <div className="w-1/2 min-h-full">
      <GoogleMap
        zoom={10}
        center={destinyLatLng}
        mapContainerClassName="w-full h-full"
      >
        {destinyLatLng && <Marker position={destinyLatLng} />}
      </GoogleMap>
    </div>
  );
};

export default Map;
