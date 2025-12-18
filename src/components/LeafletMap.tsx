import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix pour les icônes par défaut de Leaflet avec Webpack/Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface LeafletMapProps {
  className?: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    // Initialisation de la carte centrée sur Paris
    const map = L.map(mapRef.current, {
      center: [48.8566, 2.3522],
      zoom: 11,
      minZoom: 9,
      maxZoom: 18,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      touchZoom: true,
      zoomControl: false
    });

    // Ajout de la couche de tuiles OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marqueur principal pour Bondy (siège de l'entreprise)
    L.marker([48.9023, 2.4823])
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center; font-family: Arial, sans-serif;">
          <h3 style="margin: 0 0 8px 0; color: #059669; font-size: 16px;">🏢 Hygiène Protect 3D</h3>
          <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>Siège social</strong></p>
          <p style="margin: 0 0 8px 0; font-size: 13px; color: #666;">Bondy (93140)</p>
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #888;">Service disponible 24h/24 & 7j/7</p>
          <a href="tel:0767393885" style="display: inline-block; background: #059669; color: white; padding: 6px 12px; text-decoration: none; border-radius: 4px; font-size: 12px;">📞 07 67 39 38 85</a>
        </div>
      `)
      .openPopup();

    // Zone de couverture (cercle représentant l'Île-de-France)
    const coverageArea = L.circle([48.8566, 2.3522], {
      color: '#059669',
      fillColor: '#059669',
      fillOpacity: 0.1,
      radius: 20000,
      weight: 2
    }).addTo(map);

    coverageArea.bindTooltip('Zone d\'intervention Île-de-France', {
      permanent: false,
      direction: 'center'
    });

    // Gestionnaire d'événements pour les clics sur la carte
    map.on('click', function(e) {
      const lat = e.latlng.lat.toFixed(4);
      const lng = e.latlng.lng.toFixed(4);
      
      L.popup()
        .setLatLng(e.latlng)
        .setContent(`
          <div style="text-align: center;">
            <p><strong>📍 Localisation</strong></p>
            <p>Lat: ${lat}, Lng: ${lng}</p>
            <a href="tel:0767393885" style="color: #059669;">Contactez-nous pour cette zone</a>
          </div>
        `)
        .openOn(map);
    });

    // Ajout d'un contrôle de couches
    const baseMaps = {
      "OpenStreetMap": L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    };

    const overlayMaps = {
      "Zone de couverture": coverageArea
    };

    // L.control.layers(baseMaps, overlayMaps, {
    //   position: 'topright',
    //   collapsed: false
    // }).addTo(map);

    // Ajout d'un contrôle de zoom personnalisé
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);

    mapInstance.current = map;

    // Nettoyage lors du démontage
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={`w-full ${className}`}
      style={{ height: '100%', minHeight: '400px', zIndex: 1 }}
    />
  );
};

export default LeafletMap;