<template>
    <validation-provider 
        class="form-control"
        v-slot="{errors, classes}"
    >

        <label :for="name">
            <span v-if="required" class="required">*</span>
            {{ label }}:
        </label>

        <router-link v-if="linkLabel" :to="linkHref" class="link">
            {{ linkLabel }}
        </router-link>

        <input 
            :type="type ? type : 'text'" 
            :name="name" 
            :id="name" 
            :placeholder="placeholder"
            :class="`${classes} input`"
            :required="required"
            v-mask=mask
            :inputmode="inputMode"
            v-bind:value="value"
            @input="$emit('input', $event.target.value)"
        >
        <font-awesome-icon class="check-icon" icon="check" />
        
        <span class="error-message">{{ errors[0] }}</span>

    </validation-provider>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { mask } from 'vue-the-mask';

export default {
    name: "CustomInput",
    components: {
        ValidationProvider
    },
    directives: {
        mask: (el, binding) => {
            if (!binding.value) return
            mask(el, binding);
        }
    },
    props: {
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String
        },
        name: {
            type: String
        },
        required: {
            type: Boolean
        },
        type: {
            type: String
        },
        mask: {
            type: String,
            required: false
        },
        inputMode: {
            type: String
        },
        value: {
            type: String,
            required: true
        },
        min: {},
        linkHref: {},
        linkLabel: {}
    }
}
</script>