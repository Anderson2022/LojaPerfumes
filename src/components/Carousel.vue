<template>
  <div class="relative w-full">
    <div ref="carousel" class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      <div v-for="(slide, index) in slides" :key="index" class="flex-shrink-0 w-full snap-center">
        <img :src="slide.image" :alt="slide.alt" class="w-full h-auto object-cover" />
      </div>
    </div>
    <button @click="prev" class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition">
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
    </button>
    <button @click="next" class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition">
      <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      realSlides: [
        {
          image: 'https://iabatheme.com/magento-2/tema-03/pub/media/banners/banner01.jpg',
          alt: 'Banner 1'
        },
        {
          image: 'https://iabatheme.com/magento-2/tema-03/pub/media/banners/banner02.jpg',
          alt: 'Banner 2'
        }
      ],
      currentIndex: 1, // Start at the first real slide
      intervalId: null, // For autoplay
      scrollTimeout: null, // For scrollend fallback
    };
  },
  computed: {
    slides() {
      // Duplicate first and last slides for seamless looping
      if (this.realSlides.length > 1) {
        return [
          this.realSlides[this.realSlides.length - 1],
          ...this.realSlides,
          this.realSlides[0]
        ];
      }
      return this.realSlides;
    }
  },
  mounted() {
    const carousel = this.$refs.carousel;
    // Set initial scroll position to the first real slide
    carousel.scrollLeft = this.currentIndex * carousel.clientWidth;

    // Add event listener for seamless looping
    carousel.addEventListener('scrollend', this.handleScrollEnd);
    // Fallback for older browsers if scrollend is not supported
    carousel.addEventListener('scroll', this.handleScroll);

    // Add scroll-smooth class after initial positioning
    this.$nextTick(() => {
      carousel.classList.add('scroll-smooth');
    });

    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
    const carousel = this.$refs.carousel;
    carousel.removeEventListener('scrollend', this.handleScrollEnd);
    carousel.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    next() {
      const carousel = this.$refs.carousel;
      this.currentIndex++;
      carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
    },
    prev() {
      const carousel = this.$refs.carousel;
      this.currentIndex--;
      carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
    },
    handleScrollEnd() {
      const carousel = this.$refs.carousel;
      if (this.currentIndex === this.slides.length - 1) { // If at duplicated last slide
        carousel.classList.remove('scroll-smooth');
        carousel.scrollLeft = this.realSlides.length * carousel.clientWidth;
        this.currentIndex = this.realSlides.length;
        // Re-enable smooth scrolling after the jump
        this.$nextTick(() => {
          carousel.classList.add('scroll-smooth');
        });
      } else if (this.currentIndex === 0) { // If at duplicated first slide
        carousel.classList.remove('scroll-smooth');
        carousel.scrollLeft = (this.slides.length - 2) * carousel.clientWidth;
        this.currentIndex = this.slides.length - 2;
        // Re-enable smooth scrolling after the jump
        this.$nextTick(() => {
          carousel.classList.add('scroll-smooth');
        });
      }
    },
    // Fallback for browsers that don't support 'scrollend'
    handleScroll() {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.handleScrollEnd();
      }, 100); // Adjust timeout as needed
    },
    startAutoplay() {
      this.intervalId = setInterval(() => {
        this.next();
      }, 5000); // Change slide every 5 seconds
    },
    stopAutoplay() {
      clearInterval(this.intervalId);
    }
  }
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>