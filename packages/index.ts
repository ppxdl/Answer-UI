import type { App, Plugin } from 'vue';
import type { InstallOptions } from './types/install';

const components = [];

const install = (app: App, options: InstallOptions = {}) => {
  components.forEach((component) => {
    if (component.install) {
      app.use(component as Plugin, options);
    } else if (component.components) {
      Object.entries(component.components).forEach(([name, cmp]) => {
        app.component(name, cmp);
      });
    }
  });

  app.config.globalProperties.$message = message;
  app.config.globalProperties.$Confirm = Confirm;
  app.config.globalProperties.$Loading = Loading;
};

const yuanUi = {
  version: '0.8.8',
  install,
};

export {
  install,
  yuanUi,
};

export default yuanUi;

import message from './message/index';
import Confirm from './confirm/index';
import Loading from './loading/index';

export { message, Confirm, Loading };

import type { InstallOptions } from './types/index';
export type { InstallOptions };
