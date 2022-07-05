<script lang="ts" setup></script>

<template>
  <header class="bg-transparent border-b border-dark-200">
    <section class="w-full max-w-screen-2xl mx-auto flex flex-row items-center justify-between">
      <div>
        <NuxtLink to="/">
          <img :src="'./logo.png'" class="w-20"/>
        </NuxtLink>
      </div>
      <div class="w-full max-w-xl flex-grow flex flex-row justify-between">
        <NuxtLink to="/" class="font-bold text-gray-200">Home</NuxtLink>
        <NuxtLink to="/" class="font-bold text-gray-200">Collections</NuxtLink>
        <NuxtLink to="/" class="font-bold text-gray-200">Our Blog</NuxtLink>
        <NuxtLink to="/" class="font-bold text-gray-200">Contact Us</NuxtLink>
      </div>
      <WalletButton />
    </section>
  </header>
</template>

<style scoped></style>
