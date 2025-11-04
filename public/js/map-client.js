// Script Leaflet pour la carte interactive
// Ce fichier doit être dans public/ pour être accessible côté client

window.initializeMap = function(mapId = 'map') {
  // Attendre que Leaflet soit chargé
  if (typeof L === 'undefined') {
    console.error('Leaflet library not loaded');
    return;
  }

  // Configuration pour Bondy (siège social) et zone de couverture
  const bondyCoords = [48.9023, 2.4823]; // Bondy
  const parisCoords = [48.8566, 2.3522]; // Paris centre
  
  // Vérifier que l'élément existe
  const mapElement = document.getElementById(mapId);
  if (!mapElement) {
    console.warn(`Element with ID "${mapId}" not found`);
    return;
  }
  
  // Vérifier si une carte existe déjà sur cet élément
  if (mapElement._leaflet_id) {
    console.warn(`Map already initialized on element ${mapId}`);
    return;
  }
  
  try {
    // Initialiser la carte centrée sur la zone Île-de-France
    const map = L.map(mapId, {
      preferCanvas: true,
      attributionControl: true,
      zoomControl: true
    }).setView(parisCoords, 11);

    // Forcer le redimensionnement de la carte
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    // Ajouter la couche de tuiles OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marqueur pour le siège social à Bondy
    L.marker(bondyCoords).addTo(map)
      .bindPopup('<strong>🏢 Hygiène Protect 3D</strong><br>Bondy (93140)<br><a href="tel:0767393885">📞 07 67 39 38 85</a>')
      .openPopup();

    // Cercle de couverture (30km autour de Paris)
    L.circle(parisCoords, {
      color: '#059669',
      fillColor: '#059669', 
      fillOpacity: 0.1,
      radius: 20000 // 30km en mètres
    }).addTo(map);

    // Quelques marqueurs supplémentaires pour les zones importantes
    L.marker([48.8566, 2.3522]).addTo(map) // Paris centre
      .bindPopup('<strong>Paris Centre</strong><br>Zone d\'intervention prioritaire');
    // Forcer le redimensionnement final de la carte
    setTimeout(() => {
      map.invalidateSize();
    }, 500);

    console.log(`Carte Leaflet initialisée avec succès sur ${mapId}`);
    
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la carte:', error);
  }
};