<script setup lang="ts">
interface Props {
  type: "button" | "submit" | "reset";
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  type: "submit",
  disabled: false,
});

const emit = defineEmits(["click"]);

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit("click", event);
  }
};
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="base-button"
    @click="handleClick"
  >
    <slot default />
  </button>
</template>

<style scoped>
.base-button {
  width: 416px;
  height: 56px;
  color: #fff;
  background-color: #157afe;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-button:hover:not(:disabled) {
  background-color: #0f6cd9;
}

@media (orientation: portrait) {
  .base-button {
    max-width: 100%;
  }
}
</style>
