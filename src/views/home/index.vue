<template src='./index.html'></template>

<script>
  import axios from 'axios';
  import search from '../../components/search.vue';
  import url from '../../api/url.js';

  export default {
    data () {
      return {
        time: '',
        date: '',
        times: [],
        placeId: ' 101010100',
        display: false,
        placeName: '北京',
        acronym:''
      };
    },
    mounted: function () {
      const _this = this;
      this.getWeather();
      this.getTime();
      setInterval(function () {
        _this.getTime();
      }, 1000);
    },
    components: {
      'search-model': search
    },
    watch: {
      placeName: {
        handler: function () {
          this.getWeather();
        },
        deep: true
      }
    },
    methods: {
      getWeather: function () {
        axios({
          method: 'get',
          url: url.getCityWeather + this.placeId
        }).then(function (response) {
          console.log(response);
        }, function (error) {
          console.log(error);
        });
      },
      getTime: function () {
        const oDate = new Date();
        const hour = oDate.getHours();
        const minute = ((oDate.getMinutes()).toString()).length === 1 ? '0' + oDate.getMinutes() : oDate.getMinutes();
        this.date = oDate.getFullYear() + '年' + (oDate.getMonth() + 1) + '月' + oDate.getDate() + '日';
        if(hour > 12){
          this.acronym = 'pm';
        }else{
          this.acronym = 'am'
        }
        this.time = hour + ':' + minute;
      },
      searchBlock: function () {
        this.display = true;
      },
      searchNone: function () {
        this.display = false;
      },
      getPlaceName: function (data) {
        this.placeName = data;
      },
      getPlaceId: function (data) {
        this.placeId = data;
        console.log(this.placeId);
      }
    }
  };
</script>

<style lang="scss" src='./index.scss'></style>
