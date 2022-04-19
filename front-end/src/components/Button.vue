<template>
    <button class="button">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
    },
}
</script>

<style scoped>
    button {
    border-radius: 15px;
    position: absolute;
    height: 75px;
    left: 8.4%;
    right: 74.86%;
    top: 314px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.017em;
    color: #433E3E;
    }
    button:hover {
        cursor: pointer;
    }
</style>