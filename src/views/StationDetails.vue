<template>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" style="font-size: 12px; font-family: &quot;Nanum Gothic&quot;, sans-serif; font-weight: bold; letter-spacing: -1px; cursor: default; transform-origin: 0px 0px; transform: scale(0.8); fill: red; margin: 0 auto" class="mw-subway">
    <g style="visibility: visible;">
        <rect width="2500" height="1500" style="fill: rgb(255, 255, 255); opacity: 0.8;"></rect>
        <g class="line1">
            <path class="mw-link" d="M180,150L300,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <path class="mw-link" d="M300,150L380,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <path class="mw-link" d="M380,150L460,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <path class="mw-link" d="M460,150L775,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <g class="mw-station" transform="translate(250, 150)"><circle r="15" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);"></circle><text style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); display: initial;">
                <tspan x="" y="40">{{$route.query.prevS}}</tspan></text></g>
            <g class="mw-station" transform="translate(400, 100)"><rect class="mw-link" width="200" height="100" x="-22.5" y="-5" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(38, 60, 150); stroke-width: 10;"></rect><text style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); display: initial;">
                <tspan x="75" y="50">{{ $route.query.name }}</tspan></text></g>
            <g class="mw-station" transform="translate(705, 150)"><circle r="15" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);"></circle><text style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); display: initial;">
                <tspan x="" y="40">{{$route.query.nextS}}</tspan></text></g>
            <!-- <g class="mw-station" transform="translate(920, 250)"><rect width="700" height="800" x="-22.5" y="-5" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0); stroke-width: 2;"></rect><text style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); font-weight: 1500; display: initial;">
                <tspan x="75" y="50"></tspan></text></g> -->
        </g>
    </g>    
    <image id='bookmark' v-on:click="bookmark()" :href="imageName" x="700" y="250"></image>
    <image v-on:click="setData()" href="@/assets/cycle.png" x="750" y="250"></image>
    <g transform="translate(200, 300)"><rect width="300" height="40" x="-22.5" y="-5" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(200, 200, 200); stroke-width: 2;"></rect>
      <text style="text-anchor: start; font-size: 20px; fill: rgb(0, 0, 0); display: initial;">
      <tspan x="-5" y="20">{{upLine}}</tspan></text></g>
    
      <g transform="translate(200, 300)"><rect width="300" height="100" x="-22.5" y="50" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(200, 200, 200); stroke-width: 2;"></rect>
      <text style="text-anchor: start; font-weight: 500; font-size: 18px; fill: rgb(0, 0, 0); display: initial;">
      <tspan x="-5" y="80">{{upbs1}}</tspan></text>
      <text style="text-anchor: end; font-weight: 800; font-size: 18px; fill: rgb(60, 90, 255); display: initial;">
      <tspan x="250" y="80">{{upremT1}}</tspan></text>
      
      <text style="text-anchor: start; font-weight: 500; font-size: 18px; fill: rgb(0, 0, 0); display: initial; ">
      <tspan x="-5" y="130">{{upbs2}}</tspan></text>
      <text style="text-anchor: end; font-weight: 800; font-size: 18px; fill: rgb(60, 90, 255); display: initial;">
      <tspan x="250" y="130">{{upremT2}}</tspan></text>
    </g>
    
      <g transform="translate(200, 300)"><rect width="300" height="40" x="285.5" y="-5" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(200, 200, 200); stroke-width: 2;"></rect>
      <text style="text-anchor: start; font-size: 20px; fill: rgb(0, 0, 0); display: initial;">
      <tspan x="310" y="20">{{downLine}}</tspan></text></g>
    
      <g transform="translate(200, 300)"><rect width="300" height="100" x="285.5" y="50" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(200, 200, 200); stroke-width: 2;"></rect>
      <text style="text-anchor: start; font-weight: 500; font-size: 18px; fill: rgb(0, 0, 0); display: initial;">
      <tspan x="310" y="80">{{downbs1}}</tspan></text>
      <text style="text-anchor: end; font-weight: 800; font-size: 18px; fill: rgb(60, 90, 255); display: initial;">
      <tspan x="560" y="80">{{downremT1}}</tspan></text>
      
      <text style="text-anchor: start; font-weight: 500; font-size: 18px; fill: rgb(0, 0, 0); display: initial;">
      <tspan x="310" y="130">{{downbs2}}</tspan></text>
      <text style="text-anchor: end; font-weight: 800; font-size: 18px; fill: rgb(60, 90, 255); display: initial;">
      <tspan x="560" y="130">{{downremT2}}</tspan></text>
    </g>
    </svg>
    
    </div>
</template>

<script>
import axios from 'axios'

export default {
  
  mounted() {
    this.setLineColor();
    this.setData();
    //console.log('mounted')
    //$cookies.keys().forEach(cookie => $cookies.remove(cookie));
    if($cookies.isKey(this.$route.query.name+this.$route.query.age)){
      this.imageName = require('@/assets/starOn.png')
    }else{
      this.imageName = require('@/assets/starOff.png')
    }
  },
  updated() {
    //console.log('updated')
    this.setLineColor()
    this.setData()
    if($cookies.isKey(this.$route.query.name+this.$route.query.age)){
      this.imageName = require('@/assets/starOn.png')
    }else{
      this.imageName = require('@/assets/starOff.png')
    }
  },
  data () {
    return {
      prevS: '',
      stat: '',
      nextS: '',
      upLine: '상행선',
      downLine: '하행선',
      upbs1: '',
      upbs2: '',
      upremT1: '',
      upremT2: '',
      downbs1: '',
      downbs2: '',
      downremT1: '',
      downremT2: '',
      imageName: require('@/assets/starOff.png')
    }
  },
  methods: {
    setLineColor () {
      var ccc = document.querySelectorAll('.mw-link')
      if(this.$route.query.age === '1001') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(38, 60, 150)'        
        }
      }else if(this.$route.query.age === '1002') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(45, 176, 61)'
        this.upLine = '상행(외선)'
        this.downLine = '하행(내선)'
        }
      }else if(this.$route.query.age === '1003') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(226, 143, 73)'
        }
      }else if(this.$route.query.age === '1004') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(9, 148, 203)'
        }
      }else if(this.$route.query.age === '1005') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(144, 49, 195)'
        }
      }else if(this.$route.query.age === '1006') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(152, 92, 68)'
        }
      }else if(this.$route.query.age === '1007') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(124, 137, 45)'
        }
      }else if(this.$route.query.age === '1008') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(229, 30, 110)'
        }
      }else if(this.$route.query.age === '1009') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(206, 164, 58)'
        }
      }
    },
    setData () {
      axios.get('/api/detail/'+this.$route.query.name+'/'+this.$route.query.age, {}).then(res => {
        let ct = 1
        for (let i = 0; i < res.data.length; i++){
          let str = res.data[i].ordkey          
          if (str[0] === '0' && str[1] === '1' && ct === 1){
            this.upbs1 = res.data[i].bstatnNm
            this.upremT1 = this.calcTime(res.data[i].barvlDt)
            ct += 1
          }else if (str[0] === '0' && str[1] === '2' && ct === 2){
            this.upbs2 = res.data[i].bstatnNm
            this.upremT2 = this.calcTime(res.data[i].barvlDt)
            ct += 1
          }else if (str[0] === '1' && str[1] === '1' && (ct === 2 || ct === 3)){
            this.downbs1 = res.data[i].bstatnNm
            this.downremT1 = this.calcTime(res.data[i].barvlDt)
            ct += 1
          }else if (str[0] === '1' && str[1] === '2' && (ct === 3 || ct === 4)){
            this.downbs2 = res.data[i].bstatnNm
            this.downremT2 = this.calcTime(res.data[i].barvlDt)
            ct += 1
          }
        }
      })
        .catch(err => {
          console.log(err)
        })
    },
    calcTime (t) {
      let str = parseInt(t/60) + '분 ' + t%60 + '초'
      return str
    },
    bookmark() {
      let bookCt = $cookies.keys().join("\n")
      let bookCt2 = bookCt.split('\n')
      if (this.imageName == require('@/assets/starOff.png')) {
        if (bookCt2.length < 5) {
          var cookData = this.$route.query.name + ';' + this.$route.query.prevS + ';' + this.$route.query.nextS + ';' + this.$route.query.age
          $cookies.set(this.$route.query.name + this.$route.query.age, cookData)
          this.imageName = require('@/assets/starOn.png')
        } else{
          alert('북마크는 5개까지!!!')
          return
        }
      } else {
        $cookies.remove(this.$route.query.name + this.$route.query.age)
        this.imageName = require('@/assets/starOff.png')
      }
      this.$router.go()
    }

  }
  }
</script>
