import { BaseCard, type BaseCardProps } from '../base-card/base-card';
import classNames from 'classnames';
import styles from './category-card.module.scss';

export interface CategoryCardProps extends Omit<BaseCardProps, 'children'> {
    places: number;
    title: string;
}

export const CategoryCard = ({ className, places, title, ...props }: CategoryCardProps) => {
    const label = places === 1 ? 'place' : 'places';
    return (
        <BaseCard
            className={classNames(styles.root, className)}
            elementsClassNames={{ image: styles.baseCardImage }}
            {...props}
        >
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.counterContainer}>
                {places} {label}
            </span>
        </BaseCard>
    );
};
