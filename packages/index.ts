import xButton from './button/index';
const install: any = (app: any) => {
    app.use(xButton)
}
const XUI: any = {
    install,
}
export {
    xButton
}
export default XUI