<template>
    <div class="container p-5">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-8 col-sm-10 border rounded mb-2 p-3">
                <div class="row">
                    <div class="col-md-6">
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/wallet-2713549-2261381.png"
                            alt="Image" class="img-fluid grayscale-img" />
                    </div>
                    <div class="col-md-6">
                        <h1 class="text-center">Login</h1>
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" v-model="email" class="form-control" id="email" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" v-model="password" class="form-control" id="password" />
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                        <hr />
                        <p class="text-center">Don't have an account? <router-link to="/signup">Create one</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',

        };
    },
    methods: {
        validateLogin() {
            if (this.email === '' || this.password === '') {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Please fill in all fields',
                    showConfirmButton: false,
                    timer: 1500,
                });
                return false;
            }

            // Validate email format
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.email)) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Please enter a valid email address',
                    showConfirmButton: false,
                    timer: 1500,
                });
                return false;
            }

            // Validate password length
            if (this.password.length < 8) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Password must be at least 8 characters long',
                    showConfirmButton: false,
                    timer: 1500,
                });
                return false;
            }

            // Submit the form or perform the desired action
            // ...
        },
        login() {
            const credentials = {
                email: this.email,
                password: this.password,
            };

            this.validateLogin();

            axios.post('http://127.0.0.1:8000/api/login', credentials)
                .then(response => {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    this.$router.push({ name: 'transactions' });
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    },

};
</script>

<style scoped>
/* Add any necessary styling here */
</style>