<template>
  <div class="form">
    <h1>Your order</h1>
    <form @submit="onSubmit">
      <div class="products">
        <Cakes />

        <Garnishes />
      </div>

      <div class="field">
        <label for="name" class="field__label">Name</label>
        <input type="text" v-model="$store.state.data.name" id="name" class="field__field" />
      </div>

      <div class="field">
        <label for="phone" class="field__label">Phone</label>
        <input type="tel" v-model="$store.state.data.phone" id="phone" class="field__field" />
      </div>

      <div class="field">
        <label for="email" class="field__label">E-mail</label>
        <input type="email" v-model="$store.state.data.email" id="email" class="field__field" />
      </div>

      <div class="field">
        <label for="description" class="field__label">Description</label>
        <textarea
          id="description"
          v-model="$store.state.data.description"
          class="field__field field__field--textarea"
        ></textarea>
      </div>

      <div class="field">
        <input type="submit" value="Order" class="btn" @click="$store.commit('send')" />
      </div>
    </form>
  </div>
</template>

<script>
import Cakes from './Cakes.vue';
import Garnishes from './Garnishes.vue';

export default {
  name: 'Form',
  components: { Cakes, Garnishes },
};
</script>

<style scoped>
.form {
  border: 2px solid hsl(0, 0%, 100%);
  border-radius: 3px;
  height: 100%;
  margin: 0 auto;
  padding: 20px 50px;
  width: 50%;
}

.products {
  display: flex;
  gap: 80px;
  justify-content: center;
  margin-bottom: 50px;
}

.field {
  display: flex;
  margin-bottom: 20px;
}

.field__label {
  color: hsl(0, 0%, 100%);
  font-size: 17px;
  font-weight: bold;
  flex: 0 0 105px;
  padding-right: 20px;
  text-align: right;
}

.field__field,
.field__field--textarea {
  border-radius: 4px;
}

.field__field {
  border: 1px solid hsl(0, 0%, 100%);
  width: 75%;
}

.field__field--textarea {
  height: 200px;
}

.btn {
  background-color: hsl(348, 100%, 12%);
  border: none;
  border-radius: 3%;
  color: hsl(0, 0%, 100%);
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  margin: 0 auto;
  padding: 10px 30px;
  text-align: center;
}
</style>
