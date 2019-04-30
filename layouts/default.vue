<template>

  <div>
    <Nav />
    <nuxt />
    <Portfolio />
  </div>
</template>

<style>

body {
  color: whitesmoke;
 
       background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
   

}

.container {
        margin: 5em;
        margin-top: 10em;
    }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }

  p {
    font-size: 1.2em;
  }

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


</style>

<script>

import Nav from './partials/nav';
export default {
  components: {
    Nav,
  }
}

</script>

