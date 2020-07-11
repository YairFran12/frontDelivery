import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit {
  map: any;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  origin = { lat: 17.285589, lng: -96.901597 };
  // Parque la 93
  destination = { lat: 17.300715, lng: -96.906364 };

  constructor() {}

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    const indicatorsEle: HTMLElement = document.getElementById('indicators');
    // create LatLng object
    const myLatLng = { lat: 17.285589, lng: -96.901597 };
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.origin,
      zoom: 12,
    });

    this.directionsDisplay.setMap(this.map);
    this.directionsDisplay.setPanel(indicatorsEle);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');

      const marker = {
        position: {
          lat: 17.285589,
          lng: -96.901597,
        },
        title: 'Hola bola',
      };

      // this.addMarker(marker);
      this.calculateRoute();
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title,
    });
  }

  private calculateRoute() {
    this.directionsService.route(
      {
        origin: this.origin,
        destination: this.destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        } else {
          alert('Could not display directions due to: ' + status);
        }
      }
    );
  }
}

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}
