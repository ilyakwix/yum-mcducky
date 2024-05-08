import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './base-card.module.scss';

export interface BaseCardElementsClassNames {
    image?: string;
    content?: string;
}

export interface BaseCardProps {
    children: ReactNode;
    className?: string;
    elementsClassNames?: BaseCardElementsClassNames;
    imageSrc: string;
}

export const BaseCard = ({
    className,
    imageSrc,
    children,
    elementsClassNames = {},
}: BaseCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={classNames(styles.image, elementsClassNames.image)}
                style={{ backgroundImage: `url(${imageSrc})` }}
            />
            <div className={classNames(styles.content, elementsClassNames.content)}>{children}</div>
        </div>
    );
};
