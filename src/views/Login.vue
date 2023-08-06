<script setup>
import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';

const data = reactive({
    username: '',
    password: ''
});
const router = useRouter();

const isRegistrationDisabled = computed(() => {
  return !(data.username && data.password)
});


const login = async () => {
    try {
        const response = await fetch(`http://localhost:3001/users?username=${data.username}&password=${data.password}`);
        const users = await response.json();
        if (users.length > 0) {
          router.push({ path: '/welcome', query: { username: data.username } });
        } else {
          alert('Login failed. Invalid username or password.');
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
}
</script>

<template>
    <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div
                class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="login()">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="email" id="email" v-model="data.username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 "
                                placeholder="Enter your username" required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" v-model="data.password"
                                placeholder="Enter your password"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
                                required="">
                        </div>
                        <div class="pt-3">
                            <button type="submit" :disabled="isRegistrationDisabled"
                            class="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 
                            py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800
                            disabled:cursor-not-allowed">Sign
                            in</button>
                        </div>

                        <div class="flex items-center justify-between pb-6">
                            <p class="mb-0 mr-2">Don't have an account?</p>
                            <RouterLink  :to="{ name: 'Registration' }">
                                    <button type="button"
                                    class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out 
                                    hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 
                                    focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    Register
                                </button>
                            </RouterLink>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>