<script setup>

</script>

<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 class="text-7xl font-semibold text-white">404 Page Not Found 🙏</h1>
        <RouterLink :to="{ name: 'Login'}">
            <button type="button"
                class="rounded border px-6 py-2 text-xs font-medium uppercase leading-normal text-white mt-10">
                Back
            </button>
        </RouterLink>
    </div>
</template>