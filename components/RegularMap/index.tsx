import React from 'react';
import {
  GoogleMap,
  LoadScriptNext,
} from '@react-google-maps/api';
import { useRouter } from 'next/router';

const containerStyle = {
  width: '90%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

type RegularMapProps = {
  onClick: (e: google.maps.MapMouseEvent) => void;
};

const RegularMap: React.FC<RegularMapProps> = ({ onClick }) => {
  const router = useRouter();
  const handleMapClick = onClick;

  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}
      id={'google-map-script'}
      language={router.locale}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleMapClick}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScriptNext>
  );
};

export default React.memo(RegularMap);
