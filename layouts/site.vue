<template>
  <div class="wrap">
    <!-- navigation-bar -->
    <div class="navigation">
      <div class="title left">
        <div class="logo image">
          <img src="@/static/kindpng_546104 2.png" />
        </div>
        <div class="logo white">
          <h4>LOREM</h4>
        </div>
        <div class="logo green">
          <h4>IPSUM</h4>
        </div>
      </div>
      <div class="title main">
        <div class="page">
          <p>LOREM</p>
        </div>
        <div class="page icon">
          <p>LOREM</p>
        </div>
        <div class="page">
          <p>LOREMIPSUM</p>
        </div>
        <div class="page">
          <p>LOREM & IPSUM</p>
        </div>
        <div class="page">
          <p>LOREM</p>
        </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  .navigation {
    display: flex;
    width: 100vw;
    height: 150px;
    border: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left:10%;
    align-items: center;
    gap: 7rem;
    .title {
      display: flex;
      flex-direction: row;
      &.left {
        align-items: center;
        gap: 0.5rem;
      }
      &.main {
        gap: 2rem;
      }
      .logo {
        h4 {
          font-style: italic;
        }
        &.green {
          h4 {
            color: #d9ef0c;
          }
        }
      }
    }
  }
}
</style>
