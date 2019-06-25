<template>
  <div>
    <nav-menu params="route: route"></nav-menu>

    <div id="app" class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <router-view></router-view>
        </div>
      </div>

      <footer class="footer container">
        <div class="row center">
          <div class="col-md-4">
          </div>
          <div class="col-md-4">
            <a href="https://www.linkedin.com/pub/sean-murrihy/8a/1ab/ba0" target="_blank"><img src="../images/linkedinlogo.png" alt="LinkedIn" width="50" height="50"></a>
            <a href="https://twitter.com/code_mke" target="_blank"><img src="../images/twitterlogo.png" alt="@code_mke" width="50" height="50"></a>
          </div>
          <div class="col-md-4">
          </div>
        </div>
        <div class="row center">
          <p>&#169; Sean Murrihy.  All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
  
</template>

<script>
    import NavMenu from './nav-menu'

    export default {
      components: {
        'nav-menu': NavMenu
      },

      data () {
        return {}
      }
    }
</script>

<style>
</style>
