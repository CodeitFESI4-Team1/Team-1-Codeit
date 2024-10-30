import {
  Notification as MantineToast,
  NotificationProps as MantineToastProps,
} from '@mantine/core';

export interface ToastProps extends MantineToastProps {
  className?: string;
}

export default function Toast({ className, ...rest }: ToastProps) {
  return <MantineToast {...rest} className={className} />;
}
