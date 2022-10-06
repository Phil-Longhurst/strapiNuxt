<template>
    <div class="contact">
        <form class="container contact__container jsb">
            <InputDropdown v-model="enquiry" :options="optionsArray" :tabindex="0"/>
            <input v-model="name" placeholder="Your name"/>
            <input v-model="email" placeholder="Your email"/>
            <input v-model="phone" placeholder="Your phone number"/>
            <!-- <Arrow /> -->
            <div class="contact__container__button">
                <button class="btn-two" type="submit" @click="send()">Send</button>
            </div>
        </form>
        <div class="container center flex-col">
            <p>or give us a call on <strong>+44 020 3927 7377</strong></p>
        </div>
    </div>

</template>

<script>
// import axios from 'axios';
export default {
    name: 'Contact',
    props: {
        blockData: Array,
    },
    data(){
        return {
            optionsArray: ['options 1', 'options 2', 'options 3', 'options 4', 'options 5'],
            email: '',
            phone: '',
            name: '',
        }
    },
    methods: {
        send() {
            console.log("sen email")
            this.$mail.send({
                from: this.email,
                subject: 'Contact form message',
                text: this.name + this.phone,
            })
        }
    }
}
</script>


