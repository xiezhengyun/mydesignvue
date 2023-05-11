import _Button from "./button.vue";
import type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;
// 使用组件的时候想要直接使用 app.use()挂载整个组件库,其实使用 app.use()的时候它会调用传入参数的 install 方法,因此首先我们给每个组件添加一个 install 方法,然后再导出整个组件库
const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
export const Button = withInstall(_Button);
export default Button;
