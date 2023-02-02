<template>
    <button class="logOut" @click="signOut()">LogOut</button>
</template>

<script setup>
const supabase = useSupabaseClient();

const loading = ref(true);
const user = useSupabaseUser();

async function signOut() {
    try {
        console.log('test');
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
