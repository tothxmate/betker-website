<template>
  <div class="home">
    <div id="wrapper">
      <Navbar />
      <!-- Page Content -->
      <div id="page-content-wrapper">
        <Header />
        <About />
        <Gallery />
        <Contact />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Gallery from '@/components/Gallery.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Header,
    About,
    Gallery,
    Contact
  }
}
</script>

<style>
#page-content-wrapper {
  position: absolute;
  padding: 0px;
  margin: 0px;
  width: 100%;
  padding: 0px;
  transition: all 0.5s;
  padding-left: 20vw;
}

#wrapper {
  padding: 0px !important;
  margin: 0px;
}
</style>
