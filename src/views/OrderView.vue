<template>
  <div class="order">
    <img src="@/assets/bakery.png" alt="bakery" class="logo-bakery" />
    <Form />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/customer/Form.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'OrderView',
  components: {
    Form,
    Footer,
  },
};
</script>

<style scoped>
.logo-bakery {
  margin-bottom: 30px;
}
</style>
