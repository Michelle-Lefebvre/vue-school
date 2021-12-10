// register components locally
let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: { type: String, required: true },
        selected: { type: Boolean, default: false }
    },

    methods: {
        select() {
            // custom event to alert parent
            this.$emit('select', this.name)
        }
    }
}

let PlanPickerComponent = {
    components: { 'plan-item': PlanPickerItemComponent },
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict'],
            // store the selected plan
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan
        }
    }

}

Vue.createApp({
    components: { 'plan-picker': PlanPickerComponent }
})

.mount('#app')
