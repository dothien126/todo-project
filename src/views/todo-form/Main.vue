<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Form Layout Todo 👻</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div class="intro-y col-span-12 lg:col-span-6">
        <!-- BEGIN: Form Layout -->
        <div class="intro-y box p-5">
          <div>
            <label for="crud-form-1" class="form-label">Todo Title</label>
            <input
              id="crud-form-1"
              type="text"
              class="form-control w-full"
              placeholder="Input text"
            />
          </div>
          <div class="mt-3">
            <label for="crud-form-2" class="form-label">Classification</label>
            <TomSelect id="crud-form-2" v-model="categories" class="w-full" multiple>
              <option value="1">Learn</option>
              <option value="2">Work</option>
              <option value="3">Preactice</option>
            </TomSelect>
          </div>

          <div class="mt-3">
            <label>Active Status</label>
            <div class="form-switch mt-2">
              <input type="checkbox" class="form-check-input" />
            </div>
          </div>
          <div class="mt-3">
            <label>Description</label>
            <div class="mt-2">
              <ClassicEditor v-model="editorData" :config="editorConfig" />
            </div>
          </div>
          <div class="text-right mt-5">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
            <button type="button" class="btn btn-primary w-24">Save</button>
          </div>
        </div>
        <!-- END: Form Layout -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const editorConfig = {
  toolbar: {
    items: ['bold', 'italic', 'link'],
  },
};
const editorData = ref('<p>Content of the editor.</p>');
</script>
