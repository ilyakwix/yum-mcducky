import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps, To } from 'react-router-dom';
import classNames from 'classnames';
import styles from './link.module.scss';

export interface LinkProps
    extends Omit<ReactRouterLinkProps, 'to'>,
        React.RefAttributes<HTMLAnchorElement> {
    to: To;
    children: React.ReactNode;
}

export const Link = ({ className, children, to, ...props }: LinkProps) => {
    return (
        <ReactRouterLink to={to} className={classNames(styles.root, className)} {...props}>
            {children}
        </ReactRouterLink>
    );
};
