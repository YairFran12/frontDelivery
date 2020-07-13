import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  map: any;

  constructor() { }

  ngOnInit(): void {
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
      center: myLatLng,
      zoom: 12,
    });


    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');

      const marker = {
        position: {
          lat: 17.285589,
          lng: -96.901597,
        },
        title: 'Hola bola',
      };
    });
  }

}
