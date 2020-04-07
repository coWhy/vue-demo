<template>
  <div id="app">
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <app-header></app-header>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">

          <app-slider></app-slider>

        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- <app-list></app-list> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from './components/common/AppHeader'
import appSlider from './components/common/AppSlider'
import heroList from './components/list/hero/HeroList'
export default {
  name: 'App',
  components: {
    appHeader,
    appSlider,
    heroList
  }
}
</script>
