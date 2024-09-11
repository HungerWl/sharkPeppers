<template>
  <!-- 公用弹框 -->
  <teleport to="body">
    <div v-if="isVisible" class="modal-overlay" @click="close">
      <div class="modal-container" :style="{ width }" @click.stop>
        <header class="modal-header">
          <h3>{{ title }}</h3>
          <button class="close-button" @click="close">
            X
          </button>
        </header>
        <section class="modal-body">
          <slot />
        </section>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '500px',
  },
})

const emit = defineEmits(['close'])

const isVisible = ref(true)

function close() {
  isVisible.value = false
  emit('close')
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999
}

.modal-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 20px;
    max-height: 80vh;
    overflow-y: auto;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.close-button {
    background: none;
    border: none;
    font-size: 1.2em;
    cursor: pointer;
}

/* Dark mode styles */
html.dark .modal-container {
    background-color: #333;
    color: white;
}

html.dark .modal-header {
    color: white;
}

html.dark .close-button {
    color: white;
}
</style>
