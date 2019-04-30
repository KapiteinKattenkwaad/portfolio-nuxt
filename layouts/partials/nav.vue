<template>
<div>
    
  <b-navbar toggleable="lg" type="" variant="" fixed="top" >
    <b-navbar-brand href="/">
         <img src="~assets/img/logo.png" alt="logo max">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav align="right">
      <b-navbar-nav >
         
            <b-nav-item href="work">Work</b-nav-item> 
            <b-nav-item href="about">About</b-nav-item>
            <b-nav-item href="contact">Contact</b-nav-item>
         
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    
</template>

<script>
export default {

}
</script>

<style>

    .navbar {
        background: transparent;
        color: whitesmoke;
    }

    div#nav-collapse {
         flex-direction: row-reverse;
    }

    a.nav-link {
        margin-left: 3rem;
        color: whitesmoke;
        font-size: 1.8rem;
    }

     li > a:hover {
 box-shadow: 0 4px 0 0 #F15A29 !important; /*** COLOR AND THICKNESS OF THE LINE ON HOVER ***/
 padding-bottom: 15px;
 opacity: 1 !important;
}
 li li a {
 padding-bottom: 6px !important;
}
 li.current-menu-item > a,
.et-fixed-header #top-menu li.current-menu-item > a {
 border: 10px solid #F15A29; /*** COLOR AND THICKNESS OF THE BOX ***/
 padding: 10px;
 margin-bottom: -10px;
}



    .navbar-brand {
        color: 1.8rem;
        color: whitesmoke;
    }

   

    li a {
        padding: 1em 2em;
       
    }

</style>
