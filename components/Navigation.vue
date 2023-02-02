<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/" active-class="active">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about" active-class="active">About</NuxtLink>
                </li>
                <li v-if="user">
                    <NuxtLink to="/profile/edit" active-class="active"
                        >Edit Profil</NuxtLink
                    >
                </li>
                <li v-else>
                    <NuxtLink to="/login" active-class="active">LogIn</NuxtLink>
                </li>
                <li v-if="user">
                    <button
                        class="logOut"
                        @click="signOut()"
                        :disabled="loading"
                    >
                        LogOut
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const loading = ref(true);
async function signOut() {
    try {
        loading.value = true;
        let { error } = await supabase.auth.signOut();
        console.log('tes');
        if (error) throw error;
        user.value = null;
    } catch (error) {
        alert(error.message);
    } finally {
        loading.value = false;
    }
}
</script>
