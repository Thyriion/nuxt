<template>
    <form class="row flex-center flex" @submit.prevent="handleLogin">
        <div class="col-6 form-widget">
            <h1 class="header">Supabase + Nuxt 3</h1>
            <p class="desription">
                Einloggen via Magic Link mit Deiner Mailadresse
            </p>
            <div>
                <input
                    type="email"
                    class="inputField"
                    placeholder="Your email"
                    v-model="email"
                />
            </div>
            <div>
                <input
                    type="submit"
                    :value="loading ? 'Loading' : 'Magic Link versenden'"
                    :disabled="loading"
                    class="button block"
                />
            </div>
        </div>
    </form>
</template>

<script setup>
const supabase = useSupabaseClient();

const loading = ref(false);
const email = ref('');

async function handleLogin() {
    try {
        loading.value = true;
        const { error } = await supabase.auth.signInWithOtp({
            email: email.value,
        });
        console.log(error);
        if (error) throw error;
        alert('Checke Deine Mail für den Magic Link');
    } catch (error) {
        alert(error.error_description || error.message);
    } finally {
        loading.value = false;
    }
}
</script>
