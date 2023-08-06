<script setup>

</script>

<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h2 class="text-2xl font-semibold mb-4">Welcome, {{ $route.query.username }}!</h2>
      <p>You are now logged in.</p>
      <RouterLink :to="{ name: 'Login'}">
            <button type="button"
                class="rounded border border-red-500 px-6 py-2 text-xs font-medium uppercase leading-normal text-white mt-10">
                Sign out
            </button>
        </RouterLink>
    </div>
</template>
  


