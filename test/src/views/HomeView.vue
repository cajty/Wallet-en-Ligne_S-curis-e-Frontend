

<template>
    <CreateAccount />
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">Accounts Information</h3>

            <div v-if="loading" class="text-center mt-4">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <div v-if="error" class="alert alert-danger mt-4">
                An error occurred: {{ error }}
            </div>

            <div v-if="accounts" class="mt-4">
                <div v-for="account in accounts" :key="account.id" class="card mb-4">
                    <div class="card-body">
                        <p class="card-text"><strong>Account Number:</strong> {{ account.account_number }}</p>
                        <p class="card-text"><strong>Balance:</strong> {{ account.balance }} dh</p>
                        <p class="card-text"><strong>Created At:</strong> {{ account.created_at }}</p>

                        <div class="mt-3">
                            <button @click="performTransaction(account.id, 'transaction')"
                                class="btn btn-primary me-2">Transaction</button>
                            <button @click="performTransaction(account.id, 'send')"
                                class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

import axios from 'axios'
import CreateAccount from '../components/CreatAccount.vue'


export default {
    components: {
        CreateAccount,
    },
    data() {
        return {
            loading: true,
            error: null,
            accounts: null
        };
    },
    mounted() {
        this.getAccount();
    },
    methods: {
        getAccount() {
            const url = 'http://127.0.0.1:8000/api/getaccount';
            let token = localStorage.getItem('token');
            console.log(token);

            axios
                .post(url, {}, {
                    headers: {
                        Authorization:'Bearer '+ token,
                    }
                })
                .then(response => {
                    this.loading = false;
                    this.accounts = response.data.account;
                })
                .catch(error => {
                    this.loading = false;
                    this.error = error;
                });
        }
    }
};
</script>


<style scoped>
.card {
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-body {
    padding: 1.5rem;
}
</style>