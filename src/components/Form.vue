<script setup lang="ts">
import { computed, ref } from "vue";
import { useAuthStore } from "@/model/LoginFormState";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

const authStore = useAuthStore();
const isSubmitting = ref(false);

const isShowPassword = ref(false);
const passDisplayType = computed(() =>
  isShowPassword.value ? "text" : "password"
);

const displayedPasswordIcon = computed(() =>
  isShowPassword.value ? "eye-show" : "eye-hide"
);

function togglePasswordDisplay() {
  isShowPassword.value = !isShowPassword.value;
}

async function handleSubmit() {
  isSubmitting.value = true;
  const authResult = await authStore.submitForm();
  if (authResult) {
    // редирект в случае успешной авторизации
  }

  isSubmitting.value = false;
}
</script>
<template>
  <div class="auth-form">
    <h1>Welcome back!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur</p>
    <form class="form">
      <BaseInput
        v-model="authStore.email"
        required
        type="text"
        placeholder="you@example.com"
        prefix-icon="email"
        :error="authStore.errors.email"
      />
      <BaseInput
        v-model="authStore.password"
        required
        placeholder="At least 8 characters"
        :type="passDisplayType"
        minlength="8"
        prefix-icon="password"
        :suffix-icon="displayedPasswordIcon"
        :error="authStore.errors.password"
        @suffix-icon-click="togglePasswordDisplay"
      />
      <p class="forgot-password">Forgot password?</p>
      <BaseButton @click="handleSubmit">Login</BaseButton>
    </form>
    <hr />
  </div>
</template>

<style scoped>
.auth-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 100%;
  user-select: none;
}

.forgot-password {
  color: #157afe;
  cursor: pointer;
  text-align: right;
}

@media (orientation: portrait) {
  .auth-form {
    max-width: 100%;
  }
}
</style>
