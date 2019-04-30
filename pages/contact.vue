<template>
  <div class="container">

  <h1>Contact</h1>
 
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
         
          type="email"
          size="lg"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          required
          size="lg"
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your Message:" label-for="input-3">
          
        <b-form-textarea
          id="input-3"
          required
          size="lg"
        ></b-form-textarea>
      </b-form-group>


      <b-button id="send" type="submit" variant="primary">Send</b-button>
    </b-form>
    
  
       <p>Or contact me at <a class="contact" href="mailto:info@maxstouten.com">info@maxstouten.com</a> </p>
   
 

    
  </div>

</template>

<script>
  export default {
  }

</script>

<style>

   
    h1 {
        margin-bottom: 2em;
        font-family: 'Libre Franklin', sans-serif;
    }

  #input-1, #input-2, #input-3 {
      background: transparent;
      border: none;
      border-bottom: 2px solid maroon;
      color: maroon;
  }

  #input-1::placeholder, #input-2::placeholder, #input-3::placeholder {
      color: maroon;
      opacity: 0.4;
  }

  ::placeholder {
      color: maroon;
  }

   #input-1:focus, #input-2:focus, #input-3:focus {
       border: none;
   }

    #send {
        background-color: maroon;
        width: 3.2em;
        height: 2em;
        font-size: 2em;
        margin: 0.8em 0 1em 0;
    }

    #send:hover {
        transform: scale(1.1);
        animation-duration: 0.1s;
        background-color: #bf0000;
    }

     .contact{
        color: maroon;
    }

    .contact:hover {
        color: #F15A29;
    }

</style>

