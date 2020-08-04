<template>
  <div id="app">
    <div id="nav">
      <div class="wrap">
        <router-link to="/">Home</router-link>
        <router-link to="/demo">Demo</router-link>
      </div>
    </div>
    <div id="container" class="wrap">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#nav {
  line-height: 40px;
  background: $colorGreen;
  a {
    display: inline-block;
    padding: 0 15px;
    color: $colorWhite;
    &.active {
      color: $colorGreen;
      background: $colorWhite;
    }
  }
}
#container {
  padding: 20px 0;
}
</style>
