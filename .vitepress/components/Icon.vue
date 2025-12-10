<script setup lang="ts">
import { computed } from "vue";
import * as icons from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    name: string;
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    class?: string;
  }>(),
  {
    size: 16,
    strokeWidth: 2,
  }
);

const iconName = computed(() => {
  const name = props.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const result = name.charAt(0).toUpperCase() + name.slice(1);
  return result;
});

const IconComponent = computed(() => {
  const component = (icons as any)[iconName.value];
  if (!component) {
    console.warn(
      `Icon "${props.name}" (${iconName.value}) not found in lucide-vue-next`
    );
    return null;
  }
  return component;
});

const numericSize = computed(() =>
  typeof props.size === "string" ? Number(props.size) : props.size
);

const numericStrokeWidth = computed(() =>
  typeof props.strokeWidth === "string"
    ? Number(props.strokeWidth)
    : props.strokeWidth
);
</script>

<template>
  <component
    v-if="IconComponent"
    :is="IconComponent"
    :size="numericSize"
    :stroke-width="numericStrokeWidth"
    :color="color"
    :class="['inline-icon', props.class]"
    style="display: inline; vertical-align: middle"
  />
  <span v-else class="icon-error">❌</span>
</template>

<style scoped>
.inline-icon {
  display: inline;
  vertical-align: middle;
  margin: 0 0.1em;
}

.icon-error {
  color: red;
  font-size: 0.8em;
}
</style>
