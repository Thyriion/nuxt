<template>
    <button class="button block" @click="signOut" :disabled="loading">
        LogOut
    </button>
</template>

<script setup>
const supabase = useSupabaseClient();

const loading = ref(true);

async function signOut() {
    try {
        loading.value = true;
        let { error } = await supabase.auth.signOut();
        if (error) throw error;
        user.value = null;
    } catch (error) {
        alert(error.message);
    } finally {
        loading.value = false;
    }
}
</script>
