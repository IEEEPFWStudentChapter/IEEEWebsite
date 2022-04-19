<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name: 'ClubHeader',
    props: {
        title: String,
    },
}
</script>

<style scoped>
    h1 {
    position: absolute;
    height: 58px;
    left: 8.47%;
    right: 64.72%;
    top: 90px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: -0.017em;

    color: #3F3D56;
    }
</style>