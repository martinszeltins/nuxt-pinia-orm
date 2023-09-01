<template>
    <div>
        {{ users }}
    </div>
</template>

<script setup lang="ts">
    import User from './stores/models/user'
    import { useRepo } from 'pinia-orm'

    const userRepo = useRepo(User)
    const users = userRepo.all()
</script>
