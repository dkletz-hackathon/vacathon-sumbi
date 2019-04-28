<template>
  <div id="map" />
</template>

<script>
import mapsInit from './maps'
import style from './style'

export default {
  name: 'Maps',
  props: {
    lat: Number,
    long: Number
  },
  async mounted () {
    try {
      const center = {lat: this.$props.lat, lng: this.$props.long};
      this.google = await mapsInit();
      this.map = new this.google.maps.Map(document.querySelector('#map'), {zoom: 15, center, disableDefaultUI: true});
      const styledMapType = new this.google.maps.StyledMapType(style);

      this.map.mapTypes.set('styled_map', styledMapType);
      this.map.setMapTypeId('styled_map');

      let self = this
      new this.google.maps.Marker({
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
