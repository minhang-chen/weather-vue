<template>
  <div class="weather-wrapper">
    <div class="img-wrapper">
      <img src="../images/1.jpg" alt="">
      <div class="wrapper-left">
        <div><i class="location iconfont icon-dingwei"></i></div>
        <div class="place-name">
          <span>中国</span>
          <span>北京</span>
        </div>
        <div class="time">
          20:15 pm
        </div>
      </div>
      <div class="travle-name">
        故宫
      </div>
    </div>
    <div class="weather-item">
      <div class="u-item">
        <div class="item-list details">
          <div class="temperature">
            26°
          </div>
          <div class="time time-bg">
            MONDAY 27
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        times: []
      }
    },
    mounted: function () {
      this.getWeather()
    },
    methods: {
      getWeather: function () {
        axios({
          method: 'get',
          url: '/api/app/weather/listWeather?cityIds=101240101'
        }).then(function (response) {
          console.log(response)
        }, function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .weather-wrapper{
    width: 950px;
    height: 661px;
    margin:auto;
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 10px;
    .img-wrapper{
      position: relative;
      height: 439px;
      overflow: hidden;
      img{
        width: 100%;
      }
      .wrapper-left{
        position: absolute;
        top: 36px;
        left: 55px;
        text-align: center;
        .location{
          font-size: 60px;
        }
        .place-name{
          margin-top: 10px;
        }
        .time{
          margin-top: 10px;
        }

      }
      .travle-name{
        position: absolute;
        top: 36px;
        right: 55px;
        font-size: 35px;
      }
    }
    .weather-item{
      width: 100%;
      height: 190px;
      background: rgba(255,255,255,.4);
      font-size: 0;
      .u-item{
        display:inline-block;
        height: 100%;
        vertical-align: middle;
        font-size: 14px;
        .item-list{
          height: 100%;
          text-align: center;
          border-right:solid 1px #000000;
          &.details{
            box-sizing: border-box;
            padding: 24px;
          }
          .temperature{
            font-size: 85px;
          }
          .time-bg{
            line-height: 23px;
            padding: 0 20px;
            background: rgba(0,0,0,.5);
            color: #fff;
            border-radius: 20px;

          }
        }

      }
    }
  }
</style>
