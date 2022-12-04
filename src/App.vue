<template>
  <nav>
  <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">SubWhereMap</a>
    <li v-for="cookie in aaa" v-bind:key="cookie">
    <router-link :to="{ name: 'Query', query: { name: ckName(cookie), prevS: ckPrevS(cookie), nextS: ckNextS(cookie), age: ckAge(cookie) } }">{{ckName(cookie)}}</router-link>
    </li>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">노선 선택</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/line1">1호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line2">2호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line3">3호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line4">4호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line5">5호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line6">6호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line7">7호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line8">8호선</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/line9">9호선</router-link>
          </li>          
        </ul>
      </div>
    </div>
  </div>
</nav>
</nav>
<router-view/>
</template>
<script>

export default {
  data(){
    return {
      aaa: []
    }
  },
  mounted() {    
    if($cookies.keys().join("\n") != null){
      let cookies = $cookies.keys().join("\n")
      this.aaa = cookies.split('\n')
    }
  },
  methods: {
    ckName(cookie) {
      let cookData = $cookies.get(cookie).split(';')
      return cookData[0]
    },
    ckPrevS(cookie) {
      let cookData = $cookies.get(cookie).split(';') 
      return cookData[1]
    },
    ckNextS(cookie) {
      let cookData = $cookies.get(cookie).split(';') 
      return cookData[2]
    },
    ckAge(cookie) {
      let cookData = $cookies.get(cookie).split(';') 
      return cookData[3]
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  font-size: 200%;
  text-decoration: none;
  color: #ffffff;
}

nav a.router-link-exact-active {
  color: #42b983;
}
li {
  list-style-type: none;
}
</style>
