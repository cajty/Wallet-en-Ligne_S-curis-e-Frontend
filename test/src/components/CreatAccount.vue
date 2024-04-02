<template>
    <div>
        <h1>Create Account</h1>
        <form @submit.prevent="createAccount">
            <div>
                <label for="balance">Balance:</label>
                <input type="number" id="balance" v-model="balance" />
            </div>
            <button type="submit">Create Account</button>
        </form>
    </div>
</template>

<script >
import axios from 'axios'


export default {
    data() {
        return {
            balance: 0
        };
    },
    methods: {
        createAccount() {
            let token = localStorage.getItem('token');
            axios
                .post('http://127.0.0.1:8000/api/account', { balance: this.balance },{
                    headers: {
                        Authorization:'Bearer '+ token,
                    }
                })
                .then(response => {
                    console.log(response.data);
                    // Handle the response
                })
                .catch(error => {
                    console.error(error);
                    // Handle the error
                });
        }
    }
};
</script>