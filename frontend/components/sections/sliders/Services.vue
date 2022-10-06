<template>
    <div class="services">
        <div class="container flex-col border-light">
            <div class="services__title">
                <h1>{{ blockData.title }}</h1>
                <p>{{ blockData.caption }}</p>
            </div>
            <div class="dotted-line border-light"></div>
            <SliderServices :card="blockData.card"/>
            <SliderServicesMobile :card="blockData.card"/>
        </div>
    </div>

</template> 

<script>
export default {
    name: "Services",
    props: {
        blockData: Array,
    },
}
</script> 


