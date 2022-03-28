<template>
  <footer class="footer">
    <p>Address: Lorem ipsum dolor sit amet.</p>

    <p>Phone: 654324234</p>

    <p>Opening hours: Monday to sunday. 13:00 - 22:00</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  align-items: center;
  border-top: 2px solid hsl(0, 0%, 100%);
  display: flex;
  gap: 200px;
  justify-content: center;
  margin-top: 50px;
}

p {
  color: hsl(0, 0%, 100%);
}
</style>
