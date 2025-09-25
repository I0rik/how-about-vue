<script setup lang="ts">
import Form from "./components/Form.vue";

// Сюда допишу.
// Не стал делать полноценную проверку на почту по regexp и тост.
// И без того тестовое много времени заняло, честно говоря.
// Сейчас валидация браузерная, нативная, через form по submit
// Адаптивность тоже прикрутил постольку-поскольку. Дизайна для адаптивки нет
// Понимаю, что пинью попросили, чтоб увидеть, что я имею хоть какое-то представление
// как я могу ей пользоваться, но, как по мне, composable функций тут хватило бы
// с головой. И его запас бы остался. Да и чище всё вышло бы, честно говоря.
// В принципе, тут тоже валидацию отдельно можно вынести, но, как я уже говорил
// и без того много времени на тестовое потратил.
</script>

<template>
  <div class="app-container">
    <div class="left-content-container">
      <div>
        <img src="./assets/vue.svg" alt="" class="vue-icon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
    </div>
    <div class="icons">
      <label for="" class="input__box">
        <Form />
        <hr />
        <div class="box">
          <div class="fake-btn-container">
            <div class="fake-btn">
              <img src="./assets/social-yandex.svg" alt="" class="icon" />
              <div>Яндекс</div>
            </div>
            <div class="fake-btn">
              <img src="./assets/social-google.svg" alt="" class="icon" />
              <div>Google</div>
            </div>
          </div>
          <div class="sign-Up">
            <p>Don’t you have an account?</p>
            <a href="">Sign Up</a>
          </div>
        </div>
      </label>
      <p class="rights">© 2022 ALL RIGHTS RESERVED</p>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
  grid-template-columns: auto 800px;
  height: 100%;
}
.icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 800px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}
.input__box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 16px;
  gap: 0.5rem;

  & input {
    background-color: transparent;
    border: 0;
    color: #cacccd;
  }
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.fake-btn-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2.75rem;
}

.fake-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 199px;
  height: 56px;
  border-radius: 10px;
  border: 2px solid #f5f5f5;
  cursor: pointer;
}

.fake-btn img {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
}

.fake-btn div {
  font-weight: 700;
}

.sign-Up {
  display: flex;
  align-items: center;
  font-size: 1em;
}

.sign-Up a {
  width: 4.625em;
}

.rights {
  position: absolute;
  bottom: 48px;
  width: fit-content;
  font-size: 0.875em;
}

hr {
  width: 100%;
  position: relative;
  overflow: initial;
  height: 0px;
  width: 80%;
  border: solid 1px #f5f5f5;
  margin: 2.75rem 0;
}

hr::after {
  background-color: #fff;
  color: #969899;
  content: "or";
  padding: 0 6px;
  top: -12px;
  position: relative;
}

.left-content-container {
  padding: 194px 0 48px 83px;
}

.left-content-container > div {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.left-content-container > div > p {
  width: 24.875em;
  font-size: 1em;
}

.vue-icon {
  width: 4.5em;
  height: 4.5em;
}

@media (orientation: portrait) {
  .icons {
    position: relative;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  .input__box {
    align-items: center;
    justify-content: center;
  }

  .left-content-container {
    display: none;
  }
}
</style>
