<script setup lang="ts">
import { computed } from "vue";
import RawIcon from "@/components/RawIcon.vue";

interface Props {
  modelValue: string;
  error?: string;
  prefixIcon?: string;
  suffixIcon?: string;
}
const props = defineProps<Props>();

defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits(["update:modelValue", "suffix-icon-click"]);

const isValid = computed(() => !props.error);

function onInput(e: Event) {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}

function suffixIconClick() {
  emit("suffix-icon-click");
}
</script>

<template>
  <div class="input-wrapper" :class="{ error: !isValid }">
    <div v-if="prefixIcon" class="prefix-icon">
      <RawIcon class="icon" :name="prefixIcon" />
    </div>

    <input
      class="base-input"
      :value="modelValue"
      @input="onInput"
      v-bind="$attrs"
    />

    <div v-if="suffixIcon" class="suffix-icon" @click="suffixIconClick">
      <RawIcon class="icon" :name="suffixIcon" />
    </div>

    <div v-if="!isValid" class="error-message">{{ error }}</div>
  </div>
</template>

<style scoped>
.input-wrapper {
  max-width: 416px;
  height: 56px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  color: #000;
  border-radius: 10px;
  margin: 16px 0;
  padding: 4px 8px;
  background-color: #f5f7f9;
}

.input-wrapper.error {
  border-color: #f45236ff;
}

input {
  background-color: inherit;
  color: #000;
  height: 100%;
}

.base-input {
  border: none;
  outline: none;
  flex: 1;
  padding: 0 4px;
}

.prefix-icon,
.suffix-icon {
  display: flex;
  align-items: center;
}
.suffix-icon {
  cursor: pointer;
}
.icon {
  color: #818e9c;
  width: 24px;
  height: 24px;
  margin: 16px 14px 16px;
}

.error-message {
  color: #f45236ff;
  font-size: 12px;
  margin-top: 4px;
}

@media (orientation: portrait) {
  .input-wrapper {
    max-width: 100%;
  }
}
</style>
