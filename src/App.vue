<template>
  <div id="app">
    <div class="fixedNav">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand >
            <router-link to="/" class="text-white">
              Frontend Test
            </router-link>
          </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>          

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <router-link to="/" class="text-center mx-1 p-2">
              Home
            </router-link>
            <router-link to="/search" class="text-center mx-1 p-2">
              Search a character
            </router-link>
            <router-link to="/addCharacter" class="text-center mx-1 p-2">
              AddCharacter
            </router-link>

          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="py-2"></div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fixedNav{
  position: fixed;
  width: 100%;
  z-index: 1000;
  text-decoration: none;

}
nav {
  padding: 30px;
  text-decoration: none;
}

a{
  text-decoration: none;
}
nav a {
  font-weight: bold;
  color:#f1f1f1;
  text-decoration: none;
}
nav a:hover{
  color:rgba(255, 255, 255, 0.5);
  text-decoration: none;
}
a.router-link-exact-active:hover{
  text-decoration: none;
}
a.router-link-active{
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
