<script setup>
import Formulario from './components/Formulario.vue'
</script>

<template>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
body{
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
  height: 100%;
}
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;          
  width: 100%;  
}

</style>
