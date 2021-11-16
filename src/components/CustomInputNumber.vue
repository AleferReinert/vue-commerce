<template>
    <div :class="`custom-input-number ${size}`">
        <button type="button" class="btn btn-default" @click="updateValue(value-1)">
            <font-awesome-icon icon="minus" />
        </button>
        
        <input 
            type="number" 
            min="1"
            :max="max"
            inputmode="numeric" 
            class="input" 
            v-bind:value="value" 
            @input="updateValue($event.target.value)"
        >

        <button type="button" class="btn btn-default" @click="updateValue(value+1)">
            <font-awesome-icon icon="plus" />
        </button>
    </div>
</template>

<script>
export default {
    name: 'CustomInputNumber',
    props: ['value','max','size'],
    methods: {
        updateValue: function (value) {
            this.$emit('input', value);

            if(value <= 0){
                this.$emit('input', 1);
            }

            if(value > this.max){
                this.$emit('input', this.max);
            }
        }
    }
}
</script>

<style lang="scss">
.custom-input-number {
    display: inline-flex;

    .input {
        border-left: 0;
        border-right: 0;
        text-align: center;
        width: 60px;
        letter-spacing: 1px;
        font-weight: 500;
        padding: 0 10px;

        &:focus {
            border-color: $border-color;
        }
    }

    &.small {
        $size: 30px;

        .input {
            width: 40px;
            height: $size;
            line-height: $size;
            padding: 0 5px;
        }

        button {
            padding: 0 10px;
            height: $size;
            line-height: $size;
        }

        svg {
            font-size: $font-10px;
        }
    }
}
</style>