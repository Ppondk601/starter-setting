<template>
  <div class="container">
    <div class="wrapper">
      <div class="section hero">
        <div class="content left">
          <div class="topic white">
            <h1>LOREM</h1>
          </div>
          <div class="topic green">
            <h1>IPSUM</h1>
          </div>
          <div class="description top">
            <p>
              Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
            </p>
          </div>
          <div class="description bottom">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
        <div class="content right">
          <img src="@/static/Bicycle-PNG-Image 1.png" />
        </div>
      </div>
      <!-- แก้เป็น swiper หน้าจอ vw 100vw แทน -->
      <div class="section swiper"> 
        <div class="header">
          <div class="heading white">
            <h2>LOREM IPSUM</h2>
          </div>
          <div class="heading green">
            <h2>LOREM</h2>
          </div>
        </div>
        <div class="image">
          <img src="@/static/Ellipse 10.png" />
        </div>
        <div class="title">
          <p>Lorem Ipsum is simply</p>
        </div>
        <div class="description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div class="section show-product">
        <div class="header">
          <h2>LOREM IPSUM</h2>
        </div>
        <div class="product-list">
          <div
            class="card"
            v-for="product in $store.state.products.products"
            :key="product.id"
          >
            <div class="card-image">
              <img :src="product.thumbnail" />
            </div>
            <div class="card-title">
              <p>{{ product.title }}</p>
              <div class="card-description">
                <p>{{ product.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section contact">
        <div class="content left">
          <img src="@/static/Bicycle-PNG-Image 1.png" />
        </div>
        <div class="content right">
          <div class="header-form">
            <h2>ติดต่อเรา</h2>
          </div>
          <form>
            <input name="name" placeholder="ชื่อ-นามสกุล" type="text" />
            <input name="tel" placeholder="เบอร์ติดต่อ" type="text" />
            <input name="email" placeholder="อีเมล" type="email" />
            <input name="date" placeholder="วันที่" type="date" />
            <p>
              Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy te
            </p>
            <button>LOREM</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "site",
  data() {
    return {};
  },
  async fetch() {
    try {
      this.$store.dispatch("fetchProduct");
    } catch (error) {
      alert(error);
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: max-content;
  width: max-content;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    .section {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 80vw;
      border: 1px solid white;
      &.hero {
        width: 80vw;
        flex-direction: row;
        .content {
          display: flex;
          flex-direction: column;
          &.left {
            width: 50%;
            padding-left: 8%;
          }
          &.right {
            margin-right: 5%;
            display: flex;
            flex: 1;
          }
          .topic {
            margin-bottom: 1rem;
            width: max-content;
            h1 {
              text-shadow: 0px 4px 30px #21612f;
            }
            &.green {
              margin-bottom: 4rem;
              h1 {
                color: #d9ef0c;
                text-shadow: 0px 4px 30px #21612f;
              }
            }
          }
          .description {
            margin-bottom: 1rem;
            display: flex;
            width: 80%;
            &.top {
              p {
                font-weight: 600;
              }
            }
            &.bottom {
              p {
                font-weight: 400;
                color: darken(white, 10%);
              }
            }
          }
        }
      }
      &.swiper {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        .header {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          margin-bottom: 2rem;
          .heading {
            &.green {
              h2 {
                color: #d9ef0c;
              }
            }
          }
        }
        .image {
          margin: 2rem;
        }
        .title {
          p {
            font-weight: 600;
            font-size: 26px;
          }
        }
        .description {
          display: flex;
          width: 50%;
          p {
            text-align: center;
          }
        }
      }
      &.show-product {
        background-color: #d9ef0c;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        gap: 3.5rem;
        padding-bottom: 3.5rem;
        .header {
          h2 {
            color: black;
          }
        }
        .product-list {
          width: 80vw;
          display: grid;
          grid-template-columns: 28% 28% 28%;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            width: 420px;
            aspect-ratio: 1/1;
            border-radius: 4px;
            box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.6);
            .card-image {
              width: 100%;
              aspect-ratio: 2/1;
              border-bottom: 1px solid black;
              img {
                width: 100%;
                height: 100%;
                border-radius: 4px 4px 0px 0px;
              }
            }
            .card-title {
              display: flex;
              flex-direction: column;
              width: 100%;
              aspect-ratio: 2/1;
              background-color: #fff;
              border-radius: 0px 0px 4px 4px;
              padding: 10%;
              p {
                color: black;
                font-weight: 700;
                font-size: 26px;
              }
              .card-description {
                margin-top: 1rem;
                p {
                  font-size: 18px;
                  font-weight: 400;
                }
              }
            }
          }
        }
      }
      &.contact{
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap:2rem;
        .content{
          display:flex;
          &.right{
            flex-direction: column;
            height:100%;
            justify-content: center;
            gap:2rem;
            form{
              display:flex;
              flex-direction: column;
              gap:1rem;
            }
          }
          &.left{
            display:flex;
            flex:1;
          }
        }
      }
    }
  }
}
</style>
