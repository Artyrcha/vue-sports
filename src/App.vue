<template>
  <div class="app">
    <Header />
    <Sidebar />
    <div class="content">
      <div class="content__container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");
@import "~bootstrap/dist/css/bootstrap.css";

:root {
  --clr-main: #ffc107;
  --clr-main-rgb: rgb(255, 193, 7);
}

#app {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  margin: 0;
  background-color: #efefef;
  min-height: 100vh;
  color: rgba(0, 0, 0, 0.7);
  .content {
    position: relative;
    padding: 50px 0 0 280px;
    &__container {
      padding: 1rem;
    }
  }
  .row {
    --bs-gutter-x: 1rem;
    &.g-0 {
      --bs-gutter-x: 0;
    }
  }
}
.flex-img {
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    flex-shrink: 0;
    max-width: 100%;
    max-height: 100%;
  }
}
.fw-medium {
  font-weight: 500 !important;
}
.fw-600 {
  font-weight: 600 !important;
}
</style>
