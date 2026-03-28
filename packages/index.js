//导入组件
import mButton from "./button/index";
import mInput from "./input/index";
import mTable from "./table/index";
import mSelect from "./select/index";
import mDropdown from "./dropDown/index";
import mRadio from "./radio/index";
import mCheckbox from "./checkbox/index";
import Message from "./message/index";
import Confirm from "./confirm/index";
import mModal from "./modal/index";
import mDrawer from "./drawer/index";
import Loading from "./loading/index";
import mSwitch from "./switch/index";
import mTree from "./tree/index";
import mOptfile from "./optfile/index";
import mTextarea from "./textarea/index";
import mRow from "./mrow/index";
import mCol from "./mcol/index";
import mPagination from "./pagination/index";
import $yuan from "./function/index";
import mDate from "./date/index";
import mBacktop from "./backtop/index";
import mCollapse from "./collapse/index";
import mCollapseItem from "./collapse/item/index";
import mMenu from "./menu/index";
import mTabs from "./tabs/index";
import mSpace from "./Space/index";
import mPopover from './popover/index';
import mProgress from './progress/index'
import mColorPicker from './colorPicker/index'
import mBreadcrumb from './breadcrumb/index'
import mBadge from './badge/index'
import mDivider from './divider/index'


//存在所有组件
const components = [
  { name: 'mButton', component: mButton },
  { name: 'mInput', component: mInput },
  { name: 'mTable', component: mTable },
  { name: 'mSelect', component: mSelect },
  { name: 'mDropdown', component: mDropdown },
  { name: 'mRadio', component: mRadio },
  { name: 'mCheckbox', component: mCheckbox },
  { name: 'mModal', component: mModal },
  { name: 'mDrawer', component: mDrawer },
  { name: 'mSwitch', component: mSwitch },
  { name: 'mTree', component: mTree },
  { name: 'mOptfile', component: mOptfile },
  { name: 'mTextarea', component: mTextarea },
  { name: 'mRow', component: mRow },
  { name: 'mCol', component: mCol },
  { name: 'mPagination', component: mPagination },
  { name: 'mDate', component: mDate },
  { name: 'mBacktop', component: mBacktop },
  { name: 'mCollapse', component: mCollapse },
  { name: 'mCollapseItem', component: mCollapseItem },
  { name: 'mMenu', component: mMenu },
  { name: 'mTabs', component: mTabs },
  { name: 'mSpace', component: mSpace },
  { name: 'mPopover', component: mPopover },
  { name: 'mProgress', component: mProgress },
  { name: 'mColorPicker', component: mColorPicker },
  { name: 'mBreadcrumb', component: mBreadcrumb },
  { name: 'mBadge', component: mBadge },
  { name: 'mDivider', component: mDivider }
];
const install = (app) => {
  components.forEach(({ name, component }) => {
    app.component(name, component)
  })
  app.config.globalProperties.$message = Message
  app.config.globalProperties.$Confirm = Confirm
  app.config.globalProperties.$Loading = Loading
  app.config.globalProperties.$yuan = $yuan
}
const yuanUi = {
  version: '0.4.1',
  install
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install,
  // 以下是具体的组件列表
  mButton,
  mInput,
  mTable,
  mSelect,
  mDropdown,
  mRadio,
  mCheckbox,
  Message,
  Confirm,
  mModal,
  mDrawer,
  Loading,
  mSwitch,
  mTree,
  mOptfile,
  mTextarea,
  mRow,
  mCol,
  mPagination,
  $yuan,
  mDate,
  mBacktop,
  mCollapse,
  mCollapseItem,
  mMenu,
  mTabs,
  mPopover,
  mSpace,
  mProgress,
  mColorPicker,
  mBreadcrumb,
  mBadge,
  mDivider
}
export default yuanUi
