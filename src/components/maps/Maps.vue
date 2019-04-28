<template>
  <div id="map" />
</template>

<script>
import mapsInit from './maps'
import style from './style'

export default {
  name: 'Maps',
  async mounted () {
    try {
      const center = {lat: -6.89060785, lng: 107.61032348};
      this.google = await mapsInit();
      this.map = new this.google.maps.Map(document.querySelector('#map'), {zoom: 22, center, disableDefaultUI: true});
      const styledMapType = new this.google.maps.StyledMapType(style);

      this.map.mapTypes.set('styled_map', styledMapType);
      this.map.setMapTypeId('styled_map');

      let self = this
      let marker = new this.google.maps.Marker({
        position: center,
        map: self.map,
        title: 'Hello World!'
      });
    } catch (error) {
      throw(error);
    }
  }
}
</script>

<style lang="scss" scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
