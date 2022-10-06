<template>
    <div class="map-accordion">
        <div class="line"></div>
       <!-- <img :src="this.$store.state.apiroute.url + mapBackground" :alt="mapBackgroundAlt" />
        <img class="logo-map" :src="this.$store.state.apiroute.url + mapLogoUrl" :alt="mapLogoAlt" /> -->
        <div class="map-accordion__open"></div>
        <v-expansion-panels>
            <v-expansion-panel popout>
                <v-expansion-panel-header
                    :class="[
                        this.active == true ? 'active' : '',
                    ]">
                > 
                            <img class="default map" :src="this.$store.state.apiroute.url + mapBackground" :alt="mapBackgroundAlt" />
                            <img class="logo-map default" :src="this.$store.state.apiroute.url + mapLogoUrl" :alt="mapLogoAlt" />
                            <Cross />
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                <GMap
                    ref="gMap"
                    :cluster="{ options: { styles: clusterStyle } }"
                    :center="{ lat: locations[0].lat, lng: locations[0].lng }"
                    :options="{
                        fullscreenControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        zoomControl: true,
                        gestureHandling: 'cooperative',
                        styles: mapStyle,
                    }"
                    :zoom="6"
                    @bounds_changed="checkForMarkers"
                    >
                    <GMapMarker
                        v-for="location in locations"
                        :key="location.id"
                        :position="{ lat: location.lat, lng: location.lng }"
                        :options="{
                        icon: location === currentLocation ? pins.selected : pins.notSelected,
                        }"
                        @click="currentLocation = location"
                    >
                    <GMapInfoWindow visible>
                        <br /><p>Find us at:</p>
                        <br /><p>Unit 23, 326 City Road, London, EC1V 2SD</p>
                    </GMapInfoWindow>
                    </GMapMarker>
                    </GMap> 
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name: 'MapAccordion',
    props: {
        mapBackground: String,
        mapBackgroundAlt: String,
        mapLogoAlt: String,
        mapLogoUrl: String,
        map: String
    },
    data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: "",
      locations: [
        {
          lat: 51.5301186,
          lng: -0.1032183,
          name: "Onqor",
        }
      ],
      pins: {
        selected:
          this.$store.state.apiroute.url + "/uploads/Map_marker_1_dff3a9449c.svg?updated_at=2022-10-05T12:04:44.963Z",
        notSelected:
          this.$store.state.apiroute.url + "/uploads/Map_marker_1_dff3a9449c.svg?updated_at=2022-10-05T12:04:44.963Z",
      },
      clusterStyle: [
        {
          url:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#00aaff",
        },
      ],
      mapStyle: [
       {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
      ],
    };
  },
methods: {
        returnToCenter() {
            this.$refs.gMap.map.setCenter(this.locations[0]);
            },

            checkForMarkers() {
            this.locations.forEach((location, i) => {
                location.visible = this.$refs.gMap.map
                .getBounds()
                .contains(this.$refs.gMap.markers[i].getPosition());
            });

            this.locationsVisibleOnMap = this.locations
                .filter((l) => l.visible)
                .map((l) => l.name)
                .join(", ");
            },
        },
    }
</script>

