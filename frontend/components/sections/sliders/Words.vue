<template>
    <div class="words">
        <div class="words__container container">
            <p class="subtitle">It starts with a</p>
            <div class="words__container__slider"> 
                <h2>Hello</h2>
                <SliderWords />
            </div>
        </div>
    </div>

</template>

<script>
import SliderWords from '../../ui/sliders/SliderWords.vue';
export default {
    name: "Words",
    props: {
        blockData: Array,
    },
    components: { SliderWords }
}
</script>


