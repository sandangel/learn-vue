<template>
    <div>
        <h3>Some User Details</h3>
        <p>ID: {{ $route.params.id }}</p>
        <router-link tag="button"
                     class="btn btn-primary"
                     :to="link">Edit User</router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            link: {
                name: 'userEdit',
                params: { id: this.$route.params.id },
                query: { locale: 'en' },
                hash: '#data'
            }
        }
    }
}
</script>