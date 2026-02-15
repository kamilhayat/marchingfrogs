'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindowF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 20.0,
  lng: 75.0,
};

// We use the libraries prop to ensure 'marker' is included
const libraries: (
  | 'marker'
  | 'drawing'
  | 'geometry'
  | 'places'
  | 'visualization'
)[] = ['marker'];

interface InteractiveMapProps {
  locations: Array<{
    city: string;
    position: { lat: number; lng: number };
  }>;
}

const InteractiveMap = ({ locations }: InteractiveMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || '',
    libraries,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const [activeMarker, setActiveMarker] = React.useState<string | null>(null);

  // References to store AdvancedMarkerElements
  const markersRef = React.useRef<{ [key: string]: any }>({});

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
    setMap(null);
    // Cleanup markers
    Object.values(markersRef.current).forEach((marker) => {
      marker.map = null;
    });
    markersRef.current = {};
  }, []);

  // Update/Create Advanced Markers when map is loaded and locations change
  React.useEffect(() => {
    if (!map || !isLoaded || !window.google) return;

    // Advanced Markers require a mapId (can be anything for basic use, but usually configured in Cloud Console)
    // If you haven't set up a Map ID in the console, "DEMO_MAP_ID" can sometimes work for testing
    // but a real Map ID is recommended.

    locations.forEach((loc) => {
      if (markersRef.current[loc.city]) {
        markersRef.current[loc.city].position = loc.position;
      } else {
        // Create custom element for marker
        const pinElement = document.createElement('div');
        pinElement.className = 'custom-pin';
        pinElement.innerHTML = `
          <div style="background: var(--primary, #3b82f6); width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 10px rgba(0,0,0,0.3); cursor: pointer;"></div>
        `;

        const marker = new google.maps.marker.AdvancedMarkerElement({
          map,
          position: loc.position,
          title: `${loc.city} Hub`,
          content: pinElement,
        });

        marker.addListener('click', () => {
          setActiveMarker(loc.city);
        });

        markersRef.current[loc.city] = marker;
      }
    });
  }, [map, isLoaded, locations]);

  if (!isLoaded) {
    return (
      <div className='w-full h-full flex items-center justify-center bg-secondary/10'>
        <div className='flex flex-col items-center gap-4 text-center p-8'>
          <div className='w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin' />
          <p className='text-sm font-medium text-muted-foreground'>
            Initializing Globe...
          </p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        mapTypeId: 'roadmap',
        // Advanced markers RECOMMEND a mapId. If you have one, put it here.
        mapId: 'bf5d3973c7f905fb', // Example ID or use your own from Google Cloud Console
      }}
    >
      {/* We keep the InfoWindow functionality if needed, though Advanced Markers handle interaction well */}
      {activeMarker && (
        <InfoWindowF
          position={locations.find((l) => l.city === activeMarker)?.position}
          onCloseClick={() => setActiveMarker(null)}
        >
          <div className='p-2'>
            <h4 className='font-bold text-sm text-black'>{activeMarker} Hub</h4>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default InteractiveMap;
