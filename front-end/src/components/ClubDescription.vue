<template>
    <header>
        <p1>{{ title }}</p1>
        <Button text="View Project"/>
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    name: 'ClubDescription',
    props: {
        title: String,
    },
    components: {
        Button,
    },
}
</script>

<style scoped>
    p1 {
    position: absolute;
    height: 116px;
    left: 8.4%;
    right: 49.86%;
    top: 173px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    align-items: left;
    letter-spacing: -0.017em;

    color: #433E3E;
    }
</style>