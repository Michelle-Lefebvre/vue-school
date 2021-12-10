Vue.createApp({
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict']
        }
    }
})
.component('plan', {
    template: '#plan-template',
    props:['name']
})
.mount('#app')
