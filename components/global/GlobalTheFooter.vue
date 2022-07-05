<script lang="ts" setup>
  const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-dark-900 pt-24 pb-8 text-gray-200">
    <section class="w-full max-w-screen-2xl mx-auto flex flex-row gap-16 mb-16">
      <div class="flex flex-col gap-2 w-1/3">
        <img :src="'./logo.png'" class="w-24"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eveniet voluptates, eos dolorum, at totam, porro fuga consequuntur sit consequatur nulla distinctio impedit illo in voluptatem quia. Hic, a ad.</p>
      </div>
      <div class="flex flex-col gap-2 w-1/6">
        <h4 class="font-light font-heading text-gradient text-2xl tracking-widest mb-4">My Account</h4>
        <NuxtLink to="/">Authors</NuxtLink>
        <NuxtLink to="/">Collections</NuxtLink>
        <NuxtLink to="/">Create Item</NuxtLink>
      </div>
      <div class="flex flex-col gap-2 w-1/6">
        <h4 class="font-light font-heading text-gradient text-2xl tracking-widest mb-4">Resources</h4>
        <NuxtLink to="/">Help & Support</NuxtLink>
        <NuxtLink to="/">Documentation</NuxtLink>
        <NuxtLink to="/">Our Blog</NuxtLink>
        <NuxtLink to="/">FAQs</NuxtLink>
      </div>
      <div class="flex flex-col gap-2 w-1/6">
        <h4 class="font-light font-heading text-gradient text-2xl tracking-widest mb-4">Company</h4>
        <NuxtLink to="/">About Us</NuxtLink>
        <NuxtLink to="/">Contact Us</NuxtLink>
        <NuxtLink to="/">Privacy Policy</NuxtLink>
        <NuxtLink to="/">Terms & Conditions</NuxtLink>
      </div>
      <div class="flex flex-col gap-2 w-1/3">
        <h4 class="font-light font-heading text-gradient text-2xl tracking-widest mb-4">Subscribe Us</h4>
        <input type="mail" placeholder="mail@localhost.com" class="p-2 mb-4 border-gradient bg-transparent" />
        <SocialButtons class="flex flex-row gap-2" />
      </div>
    </section>
    <section class="w-full max-w-screen-2xl mx-auto flex flex-col gap-2">
      <hr class="border-b border-gradient">
      <p class="">&copy; Copyright 2022-{{ currentYear }} MintingDAPP.io&reg;. All rights reserved.</p>
    </section>
  </footer>
</template>
