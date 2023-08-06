<script setup>

import { ref, reactive, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const registration = reactive({
    username: '',
    password: '',
    confirm_password: ''
});
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const isRegistrationDisabled = computed(() => {
  return !(
    registration.username &&
    registration.password &&
    registration.confirm_password &&
    registration.password === registration.confirm_password
  );
});

const router = useRouter();

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const register = async () => {
    if (registration.password !== registration.confirm_password) {
        alert("Password and Confirm Password don't match. Please try again.");
        return;
    }
    const newUser = {
        username: registration.username,
        password: registration.password,
    };
    if(!newUser.username) {
        alert("");
        return;
    }
    try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          alert('Registration successful!');
          router.push({ name: 'Login' });
        } else {
          alert('Registration failed. Please try again.');
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
                        Register your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="register()">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input type="text" name="email" id="email" v-model="registration.username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Please enter your username" required="">
                        </div>
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div class="relative">
                                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="registration.password" required placeholder="Please enter your password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <button type="button" @click="togglePasswordVisibility" class="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <i :class="showPassword ? 'far fa-eye' : 'far fa-eye-slash'"></i>
                                    </button>
                                </div>
                        </div>

                        <div>
                            <label for="conform_password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <div class="relative">
                                    <input :type="showConfirmPassword ? 'text' : 'password'" id="confirm_password" v-model="registration.confirm_password" required placeholder="Please enter your password"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <button type="button" @click="toggleConfirmPasswordVisibility" class="absolute right-2 top-1/2 transform -translate-y-1/2">
                                        <i :class="showConfirmPassword ? 'far fa-eye' : 'far fa-eye-slash'"></i>
                                    </button>
                                </div>
                        </div>

                        <button type="submit" :disabled="isRegistrationDisabled"
                            class="w-full text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 disabled:cursor-not-allowed">
                            Register</button>

                        <div class="flex items-center justify-between pb-6">
                            <p class="mb-0 mr-2">Already have an account?</p>
                           <RouterLink :to="{ name: 'Login'}">
                                <button type="button"
                                    class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out 
                                    hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 
                                    focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    Sign in
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