import type { App, Plugin, VNode, Component } from 'vue';

export type ComponentSize = 'large' | 'medium' | 'small' | 'mini';

export type ComponentType =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'default'
  | 'text';

export interface IBaseProps {
  size?: ComponentSize;
  disabled?: boolean;
}

export interface ILoadingProps {
  fullscreen?: boolean;
  lock?: boolean;
  text?: string;
  color?: string;
  background?: string;
}

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

export interface InstallOptions {
  theme?: Record<string, string>;
  locale?: Record<string, unknown>;
}

export interface YuanUIComponent {
  install: (app: App, options?: InstallOptions) => void;
}

export type WithInstall<T> = T & YuanUIComponent;

export type VueNode = VNode | string | number | boolean | null | undefined;

export function withInstall<T extends Component>(component: T): WithInstall<T>;
