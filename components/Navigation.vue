<template>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li v-if="user">
                    <NuxtLink to="/editProfil">Edit Profil</NuxtLink>
                </li>
                <li v-else>
                    <NuxtLink to="/login">LogIn</NuxtLink>
                </li>
                <li v-if="user">
                    <LogOut />
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
const user = useSupabaseUser();
</script>
