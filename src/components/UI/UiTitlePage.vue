<template>
  <h1 class="title-1">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "UiTitlePage",
};
</script>

<style lang="scss" scoped>
.title-1 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
}
</style>
