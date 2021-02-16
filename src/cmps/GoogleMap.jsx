import React from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import { ipService } from "../services/ipService";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class _GoogleMap extends React.Component {
  state = {
    lat: 32.11120415461782,
    lon: 34.841250446024176,
  };
  async componentDidMount() {
    const loc = await ipService.getUserLocation();
    console.log(loc);
    this.setState({ ...loc });
  }
  render() {
    return (
      <div className="map-container main-container">
        <Map
          className="map"
          google={this.props.google}
          zoom={20}
          style={mapStyles}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lon,
          }}
          center={{
            lat: this.state.lat,
            lng: this.state.lon,
          }}
        >
          <Marker position={this.state} name={"Users location"} />

          <InfoWindow position={this.state} visible={true}>
            <div>
              <h3>{this.state.country}</h3>
              <h4>{this.state.city}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export const GoogleMap = GoogleApiWrapper({
  apiKey: "AIzaSyBFWRIVwTbjdTMRJvaO_vMK09AwvT09cHM",
})(_GoogleMap);
