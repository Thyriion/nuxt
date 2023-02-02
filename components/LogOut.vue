<template>
    <button class="logOut" @click="signOut" :disabled="loading">LogOut</button>
</template>

<script setup>
const supabase = useSupabaseClient();

const loading = ref(true);

const signOut = async () => {
    try {
        loading.value = true;
        const user = useSupabaseUser();
        let { error } = await supabase.auth.signOut();
        console.log(user);
        if (error) throw error;
        user.value = null;
    } catch (error) {
        alert(error.message);
    } finally {
        loading.value = false;
    }
};
</script>
