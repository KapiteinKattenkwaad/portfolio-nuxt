<template>
  <div class="container">
      <h1 class="my-4">About
      </h1>
      <p class="highlight">
      My name’s Max,
      and I’m a front-end web developer
      who’s passionate about creating user-friendly websites.
      I'd love to work with you.
    </p>

     
        <img src="~assets/img/profile.png" fluid alt="max stouten">
  

    <p class="explanation">
        I love mastering new technologies, building websites and exploring ways to make them more user-friendly. 
        When I'm not coding, you’ll find me discovering fine beers, hiking high things, and eating new foods. 
        I’m very easy-going, so please reach out if you’d like  <b-link class="contact" href="/contact">to chat about any of the above.</b-link> 
    </p>
   
        
   
  </div>
 
</template>

<style>

 
    section {
        margin-top: 5em;
    }

    .my-4 {
        font-family: sans-serif;
    }

    .highlight {
            border-left: 7px solid maroon;
            padding-left: 20px;
            color: maroon;
            font-size: 1.6em;
            font-weight: bold;
    }

    .explanation {
        font-size: 1.6em;
        letter-spacing: 3px;
        padding-top: 2em;
    }

    img {
        margin: 2em 2em 2em 0;
        max-width: 100%;
        height: auto;
        padding: 1rem;
        border-radius: 50%;
        shape-outside: margin-box;
        float: left;
   
    }

   .contact{
        color: maroon;
    }

    .contact:hover {
        color: #F15A29;
    }

    .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>


<script>


export default {
  head() {
      return {
          title: 'About | Max Stouten',
          meta: [
              { name: 'description', content: 'Antwerp-based Web developer'},
              { name: 'keywords', content: 'web developer, developer, javascript, front end, front end web developer'},
          ]
      }
  }


}
</script>
