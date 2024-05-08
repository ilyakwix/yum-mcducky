import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from '../base-button/base-button';
import styles from './button.module.scss';

export interface ButtonProps extends BaseButtonProps {
    variant: 'primary' | 'secondary' | 'unstyled';
    onClick: () => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, children, onClick, ...props }, ref) => {
        return (
            <BaseButton
                className={classNames(styles.root, styles[variant], className)}
                onClick={onClick}
                {...props}
                ref={ref}
            >
                {children}
            </BaseButton>
        );
    }
);
