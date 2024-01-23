<!-- <template>
  <div>
    <div w-full h-50px bg-red>Menu Bar</div>
    <div h-500px f-c-c bg-gray>
      <div class="w-30%" b-1 b-solid h-500px m-r-5px bg-yellow></div>
      <div class="w-40%" b-1 b-solid h-500px m-r-5px bg-blue></div>
      <div class="w-30%" b-1 b-solid h-500px bg-green></div>
    </div>
  </div>
</template> -->

<template>
  <TitleBar></TitleBar>
  <!-- <ParameterCreateWindow></ParameterCreateWindow> -->
  <ParameterDirect></ParameterDirect>
  <!-- <ParameterCreateWindow></ParameterCreateWindow> -->
  <!-- <OptParameterConfig></OptParameterConfig> -->
  <!-- <ParameterConfig></ParameterConfig> -->
</template>

<script setup lang="ts">
import OptParameterConfig from './views/OptParameterConfig.vue'
import ParameterCreateWindow from './views/ParameterCreateWindow.vue';
import ParameterDirect from './views/ParameterDirect.vue';
</script>

<style></style>
