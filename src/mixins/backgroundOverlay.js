
export default {
    name: 'backgroundOverlay',
    data(){
        return {
            backgroundOverlay: false
        }
    },
    methods: {
        showBackgroundOverlay(){
            this.backgroundOverlay = true;
        },
        closeBackgroundOverlay(){
            this.backgroundOverlay = false;
        }
    }
}