<template>
  <nav>
  <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">SubWhereMap</a>
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
          <li class="nav-item">
            <router-link to="/line">10호선</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</nav>
<router-view/>
</template>

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
</style>
