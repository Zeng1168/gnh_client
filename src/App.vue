<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


html,body,#app{
  height:100%;
  margin: 0;
  padding: 0;
}

.selector-for-some-widget {
  box-sizing: content-box;
}

::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: #fff;
}

::-webkit-scrollbar-thumb {
    border-radius:5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: rgba(0, 0, 0, .1)
}
</style>
