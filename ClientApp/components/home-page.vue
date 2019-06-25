<template>
  <div>
    <b-carousel id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img"
             class="d-block img-fluid w-100"
             width="1024"
             height="480"
             src="https://picsum.photos/1024/480/?image=55"
             alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <div class="container contentContainer">
      <div class="row text-center">
        <div class="col-md-12">
          <p class="lead">CodeMKE is intended to be a resource for software developers.</p>
        </div>
      </div>

      <hr />

      <div class="row text-center">
        <div class="col-md-4">
          <a href="/webdev"><img class="rounded-circle" src="../images/webdev.png" alt="Web Development" width="140" height="140"></a>
          <h2>Web Development</h2>
          <p>Software Developer that is learning web development.  Check out web projects that I have worked on.</p>
        </div>
        <div class="col-md-4">
          <a href="/tutorials"><img class="rounded-circle" src="../images/tutorialcircle.png" alt="Tutorials" width="140" height="140"></a>
          <h2>Tutorials</h2>
          <p>There are a lot of tutorials out there, and some are easy to follow, and some are confusing and assume a lot.  As I learn new things in my day to day career, I intend to write small tutorials using real world examples.</p>
        </div>
        <div class="col-md-4">
          <a href="/blog"><img class="rounded-circle" src="../images/blogcircle.png" alt="Blog" width="140" height="140"></a>
          <h2>Blog</h2>
          <p>A collection of experiences, and the things that I have gone through in my career as a Software Developer.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
</style>
