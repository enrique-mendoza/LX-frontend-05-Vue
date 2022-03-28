<template>
  <div class="options">
    <h2 class="title">Select garnish</h2>
    <div class="garnishes">
      <div class="select-dropdown">
        <select v-model="$store.state.data.selectedGarnish">
          <option disabled value="">Please select one</option>
          <option v-for="garnish in $store.state.data.garnishes" v-bind:key="garnish" v-bind:value="garnish.price">
            {{ garnish.name }}
          </option>
        </select>
      </div>
      <span>Price: {{ $store.state.data.selectedGarnish }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Garnishes',
};
</script>

<style scoped>
.options {
  margin-top: 50px;
}

.title {
  margin-bottom: 25px;
  text-align: start;
}

.garnishes {
  align-items: center;
  display: flex;
  gap: 30px;
  justify-content: center;
}

.select-dropdown,
.select-dropdown * {
  margin: 0;
  padding: 0;
  position: relative;
  box-sizing: border-box;
}

.select-dropdown {
  position: relative;
  background-color: hsl(0, 0%, 100%);
  border-radius: 4px;
}

.select-dropdown select {
  color: hsl(348, 100%, 12%);
  font-size: 17px;
  font-weight: normal;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.select-dropdown select:active,
.select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}

.select-dropdown:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid hsl(0, 0%, 67%);
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
</style>
