<template>
  <div class="request">
    <h2>New Request</h2>

    <p>
      Request by: <span>{{ $store.state.data.newRequest.name }}</span>
    </p>

    <div class="info">
      <p>
        Phone: <span>{{ $store.state.data.newRequest.phone }}</span>
      </p>

      <p>
        E-mail: <span>{{ $store.state.data.newRequest.email }}</span>
      </p>
    </div>

    <p>
      Description: <span>{{ $store.state.data.newRequest.description }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Request',
};
</script>

<style scoped>
h2,
p,
span {
  color: hsl(348, 100%, 12%);
}

h2 {
  margin-bottom: 10px;
}

.request {
  background-color: white;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  width: 50%;
}

.info {
  display: flex;
  gap: 300px;
}
</style>
