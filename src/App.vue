<style lang="scss">
  @import "@/assets/scss/global";
  @import "@/assets/scss/booger";
</style>

<script setup>
import BoogerLogo from './components/BoogerLogo.vue';
</script>

<template>
  <section class="booger-wrap">
    <div class="booger__container">
      <BoogerLogo />
      <blockquote class="booger__blockquote">
        Hello, hello!!!
        <br>
        Nice to meet you.
        <br>
        My name is <b class="booger__name">DruD</b>
        <br>
        <br>
        And I am a <b class="booger__booger">Booger</b>
      </blockquote>
    </div>
  </section>
</template>
