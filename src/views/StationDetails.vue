<template>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="200" style="font-size: 12px; font-family: &quot;Nanum Gothic&quot;, sans-serif; font-weight: bold; letter-spacing: -1px; cursor: default; transform-origin: 0px 0px; transform: scale(0.8); fill: red; margin: 0 auto" class="mw-subway">
    <g style="visibility: visible;">
        <rect width="2500" height="1500" style="fill: rgb(255, 255, 255); opacity: 0.8;"></rect>
        <g class="line1">
            <path class="mw-link" d="M180,150L300,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <path class="mw-link" d="M300,150L380,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <path class="mw-link" d="M380,150L460,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <path class="mw-link" d="M460,150L775,150" style="fill: none; stroke: rgb(38, 60, 150); stroke-width: 20"></path>
            <g class="mw-station" transform="translate(300, 150)"><circle r="15" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);"></circle><text transform="rotate(0)" style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); display: initial;">
                <tspan x="" y="40">{{prevS}}</tspan></text></g>
            <g class="mw-station" transform="translate(400, 100)"><rect class="mw-link" width="200" height="100" x="-22.5" y="-5" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(38, 60, 150); stroke-width: 10;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); font-weight: 1800; pointer-events: none; display: initial;">
                <tspan x="75" y="50">{{ $route.query.name }}</tspan></text></g>
            <g class="mw-station" transform="translate(655, 150)"><circle r="15" style="fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0);"></circle><text transform="rotate(0)" style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); display: initial;">
                <tspan x="" y="40">{{nextS}}</tspan></text></g>
            <!-- <g class="mw-station" transform="translate(920, 250)"><rect width="700" height="800" x="-22.5" y="-5" style="rx: 15; fill: rgb(255, 255, 255); stroke: rgb(0, 0, 0); stroke-width: 2;"></rect><text transform="rotate(0)" style="text-anchor: middle; font-size: 20px; fill: rgb(0, 0, 0); font-weight: 1500; pointer-events: none; display: initial;">
                <tspan x="75" y="50"></tspan></text></g> -->
        </g>
    </g>
    </svg>
    </div>

</template>

<script>
import axios from 'axios'

export default { 
  mounted() {
    console.log(this.$route.query.name);
    console.log(this.$route.query.age);
    this.setLineColor();  
  },
  data () {
    return {
      prevS: '',
      stat: '',
      nextS: ''
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
        }
      }else if(this.$route.query.age === '1003') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(226, 143, 73)'
        }
      }else if(this.$route.query.age === 1004) {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(9, 148, 203)'
        }
      }else if(this.$route.query.age === 1005) {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(144, 49, 195)'
        }
      }else if(this.$route.query.age === 1006) {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(152, 92, 68)'
        }
      }else if(this.$route.query.age === 1007) {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(124, 137, 45)'
        }
      }else if(this.$route.query.age === 1008) {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(229, 30, 110)'
        }
      }else if(this.$route.query.age === '1009') {
        for (let i = 0; i < ccc.length; i++) {
        ccc[i].style.stroke = 'rgb(206, 164, 58)'
        }
      }
    },
    upLine () {
      this.clearTrain()
      axios.get('/api/line9', {}).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          var trSt = res.data[i].trainSttus
          if (res.data[i].trainSttus !== '0' && res.data[i].trainSttus !== '1') {
            trSt = '2'
          }
          var str = res.data[i].statnId + res.data[i].updnLine + trSt
          var ta = document.getElementById(str)
          if (res.data[i].updnLine === '0') {
            ta.style.display = 'initial'
            if (res.data[i].directAt === '1') {
              ta.lastChild.style.display = 'initial'
            }
          }
        }
      })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
