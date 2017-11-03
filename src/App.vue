<template>
  <div id="app">
    <side-menu :name='curName' />
    <div class="hz-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideMenu from './components/menu'
export default {
  name: 'app',
  data () {
    return {
      curName: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (v) {
        this.curName = v.name
      }
    }
  },
  components: {
    SideMenu
  }
}
</script>

<style lang='scss'>
@import './styles/reset.scss';
#app {
  height: 100%;
  display: flex;
  .hz-content {
    flex: 1;
    padding: 15px;
    overflow: auto;
  }
}
</style>
