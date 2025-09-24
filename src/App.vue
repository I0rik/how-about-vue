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
  <div>
    <div class="icons">
      <label for="" class="input__box">
        <Form />
        <hr />
        <div class="box">
          <div class="fake-btn">
            <img src="./assets/social-yandex.svg" alt="" class="icon" />
            <div>Яндекс</div>
          </div>
          <div class="fake-btn">
            <img src="./assets/social-google.svg" alt="" class="icon" />
            <div>Google</div>
          </div>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped>
.icons {
  position: relative;
  width: 50vw;
  height: 100vh;
  left: 50%;
}
.input__box {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
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
  margin: 1rem 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
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
}

hr {
  width: 100%;
  position: relative;
  overflow: initial;
  height: 0px;
  width: 80%;
  border: solid 1px #f5f5f5;
}

hr::after {
  background-color: #fff;
  color: #969899;
  content: "or";
  padding: 0 6px;
  top: -12px;
  position: relative;
}
</style>
