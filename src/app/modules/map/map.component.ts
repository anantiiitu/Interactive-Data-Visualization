import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
// import 'leaflet.markercluster';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

// API KEY =
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private markerLayer!: L.LayerGroup;
  private googleTileLayer!: L.TileLayer;
  private satelliteTileLayer!: L.TileLayer;

  ngOnInit(): void {
    this.initializeMap();
    this.addGeolocation();
  }

  initializeMap(): void {
    this.map = L.map('map', {
      center: [25.346251, 76.636383],
      attributionControl: false,
      zoom: 6.5,
      worldCopyJump: true,
    }); // Set initial map center coordinates and zoom level
    this.map.zoomControl.setPosition('bottomright');

    this.googleTileLayer = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );

    this.satelliteTileLayer = L.tileLayer(
      'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
      {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }
    );

    // Add the Google tile layer by default
    this.googleTileLayer.addTo(this.map);

    const toggleButtonContainer = L.DomUtil.get('toggle-button-container');
    if (toggleButtonContainer) {
      toggleButtonContainer.style.position = 'absolute';
      toggleButtonContainer.style.top = '10px';
      toggleButtonContainer.style.left = '10px';
      this.map.getContainer().appendChild(toggleButtonContainer);
    }
    this.markerLayer = L.layerGroup().addTo(this.map);
  }

  toggleTileLayer(): void {
    if (this.map.hasLayer(this.googleTileLayer)) {
      this.map.removeLayer(this.googleTileLayer);
      this.satelliteTileLayer.addTo(this.map);
    } else {
      this.map.removeLayer(this.satelliteTileLayer);
      this.googleTileLayer.addTo(this.map);
    }
  }

  addGeolocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          const marker = L.marker([lat, lng]).addTo(this.markerLayer);
          this.map.setView([lat, lng], 13);
        },
        (error) => {
          console.log('Geolocation error:', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.log('Geolocation is not supported by your browser.');
    }
  }
}
