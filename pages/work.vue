<template>
    <div class="container">

      <!-- Page Heading -->
      <h1 class="my-4">Work
      </h1>

      <!-- Project One -->
      <div class="row">
        <div class="col-md-7">
          
            <img class="img-fluid rounded mb-3 mb-md-0" src="~assets/img/wedding-min.png" alt="">
         
        </div>
        <div class="col-md-5">
          <h3>WEDDING SITE</h3>
          <p>A website for my best friend's wedding (and provided copy for) using HTML, CSS (Sass & Bulma) and custom JavaScript.</p> <icon name="envelope"></icon>
          <a class="btn btn-primary" href="#"> <i class="fas fa-external-link-alt"></i> View website</a>
          <a class="btn btn-secondary" href="#">View code</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Two -->
      <div class="row">
        <div class="col-md-7">
         
            <img class="img-fluid rounded mb-3 mb-md-0" src="~assets/img/etch-a-sketch.png" alt="">
       
        </div>
        <div class="col-md-5">
          <h3>ETCH A SKETCH</h3>
          <p>To help you throw it back to your childhood, I created this game with Vanilla JS.</p>
          <a class="btn btn-primary" href="#">View website</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Three -->
      <div class="row">
        <div class="col-md-7">
         
            <img class="img-fluid rounded mb-3 mb-md-0" src="~assets/img/twitch.png" alt="">
       
        </div>
        <div class="col-md-5">
          <h3>STREAMING ON TWITCH</h3>
          <p>I created this list of Twitch streamers. With the help of the Twitch API I can display who is online or offline using jQuery to call the ajax request.</p>
          <a class="btn btn-primary" href="#">View website</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Four -->
      <div class="row">

        <div class="col-md-7">
        
            <img class="img-fluid rounded mb-3 mb-md-0" src="~assets/img/de-ark-min.png" alt="">
         
        </div>
        <div class="col-md-5">
          <h3>SCHOOL WEBSITE</h3>
          <p>I created this full website for the school I work at. I used custom CSS and Javascript</p>
          <a class="btn btn-primary" href="#">View Project</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

     

    </div>
</template>

<script>
export default {

}
</script>

<style>

    .container {
      
        margin: 5em;
        margin-top: 10em;
    }

    h1 {
        margin-bottom: 2em;

    }

    .row {
        margin-top: 8rem;
    }

    .col-md-5:hover img {
        transform: scale(1.1);
    }
</style>




