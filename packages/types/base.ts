import { ExtractPropTypes, PropType } from 'vue';

export type ComponentSize = 'large' | 'medium' | 'small' | 'mini';

export type ComponentType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
  | 'text';

export type IShape = 'circle' | 'square';

export interface IBaseProps {
  size?: ComponentSize;
  disabled?: boolean;
}

export const baseProps = {
  size: {
    type: String as PropType<ComponentSize>,
    default: 'medium',
    validator: (val: string) => {
      return ['large', 'medium', 'small', 'mini'].includes(val);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const;

export type BaseProps = ExtractPropTypes<typeof baseProps>;

export interface ILoadingProps {
  fullscreen?: boolean;
  lock?: boolean;
  text?: string;
  color?: string;
  background?: string;
}

export const loadingProps = {
  fullscreen: {
    type: Boolean,
    default: false,
  },
  lock: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  background: {
    type: String,
    default: '',
  },
} as const;

export type LoadingProps = ExtractPropTypes<typeof loadingProps>;

export interface IMessageProps {
  message: string | VNode;
  type?: 'success' | 'warning' | 'info' | 'error';
  duration?: number;
  showClose?: boolean;
  center?: boolean;
  onClose?: () => void;
}

export interface IConfirmProps {
  title?: string;
  content: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'confirm' | 'prompt' | 'alert';
  inputPattern?: RegExp;
  inputErrorMessage?: string;
  onConfirm?: (value?: string) => void;
  onCancel?: () => void;
}

export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface IPopoverProps {
  trigger?: 'hover' | 'click' | 'focus' | 'manual';
  placement?: Placement;
  title?: string;
  content?: string;
  width?: number | string;
  effect?: 'light' | 'dark';
  showArrow?: boolean;
  hideAfter?: number;
  manualMode?: boolean;
}

export const popoverProps = {
  trigger: {
    type: String as PropType<'hover' | 'click' | 'focus' | 'manual'>,
    default: 'hover',
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  title: String,
  content: String,
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '',
  },
  effect: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
} as const;

export type PopoverProps = ExtractPropTypes<typeof popoverProps>;

export interface IDrawerProps {
  title?: string;
  width?: number | string;
  direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
  showClose?: boolean;
  destroyOnClose?: boolean;
  modal?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
}

export const drawerProps = {
  title: String,
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '30%',
  },
  direction: {
    type: String as PropType<'ltr' | 'rtl' | 'ttb' | 'btt'>,
    default: 'rtl',
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  mask: {
    type: Boolean,
    default: true,
  },
  maskClosable: {
    type: Boolean,
    default: true,
  },
} as const;

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;

export interface IModalProps {
  title?: string;
  width?: number | string;
  top?: string;
  center?: boolean;
  footer?: boolean;
  mask?: boolean;
  maskClosable?: boolean;
  closeOnClickModal?: boolean;
  destroyOnClose?: boolean;
  showClose?: boolean;
}

export const modalProps = {
  title: String,
  width: {
    type: [Number, String] as PropType<number | string>,
    default: '50%',
  },
  top: {
    type: String,
    default: '15vh',
  },
  center: {
    type: Boolean,
    default: false,
  },
  footer: {
    type: Boolean,
    default: true,
  },
  mask: {
    type: Boolean,
    default: true,
  },
  maskClosable: {
    type: Boolean,
    default: true,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
} as const;

export type ModalProps = ExtractPropTypes<typeof modalProps>;
