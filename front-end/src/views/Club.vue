<template>
    <div>
        <header>
            <Line/>
            <ClubHeader title="Electric Vehicles'"/>
            <ClubDescription title="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta "/>
        </header>
        <body>
            
        </body>
    </div>
</template>

<script>
import Line from '../components/Line'
import ClubHeader from '../components/ClubHeader.vue'
import ClubDescription from '../components/ClubDescription.vue'

export default {
    name: 'Club',
    components: {
        Line,
        ClubHeader,
        ClubDescription,
    },
}
</script>

<style scoped>
    Club{
        display: flex;
        justify-content: space-between;
        align-content: center;
        margin-bottom: 20px;
    }

    /* body {
        position: absolute;
        width: 1440px;
        height: 822px;
        left: 0px;
        top: 1024px;

        background: #E5E5E5;
    } */
</style>