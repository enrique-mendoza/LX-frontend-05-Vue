<template>
  <img src="@/assets/bakery.png" alt="bakery" class="logo-bakery" />
  <Request />
  <Footer />
</template>

<script>
import Request from '@/components/chef/Request.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'RequestsView',
  components: { Request, Footer },
};
</script>

<style scoped></style>
