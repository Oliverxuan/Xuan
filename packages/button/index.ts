import xButton from './index.vue';
xButton.install = (app: any) => {
    app.component(xButton.name, xButton)
}
export default xButton