<template>
<div>
  <div id="header">
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="~assets/programming-ide.mp4" type="video/mp4">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Max Stouten</h1>
        <p class="lead mb-0">Web Developer</p>
      </div>
    </div>
  </div>
</div>


</div>

</template>

<script>


export default {
    
    head() {
      return {
          title: 'Max Stouten | Web Developer',
          meta: [
              { name: 'description', content: 'Antwerp-based Web developer'},
              { name: 'keywords', content: 'web developer, developer, javascript, front end, front end web developer'},
          ]
      }
  }
  }

</script>

<style>

#header {
  position: relative;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

#header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

#header .container {
  position: relative;
  z-index: 2;
}

#header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

@media (pointer: coarse) and (hover: none) {
  #header {
    background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
  }
  #header video {
    display: none;
  }
}

</style>
