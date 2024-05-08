import { BaseCard, BaseCardElementsClassNames, BaseCardProps } from '../base-card/base-card';
import classNames from 'classnames';
import styles from './business-card.module.scss';

export interface BusinessCardElementsClassNames extends BaseCardElementsClassNames {
    footer?: string;
}

export interface BusinessCardProps extends Omit<BaseCardProps, 'children'> {
    title: string;
    description?: string;
    price: string;
    currency: '$' | 'ֱֳִֵֵֶַַָָֻ₪';
    rating: number;
    deliveryTime: string;
    deliveryTimeUnits: string;
    elementsClassNames?: BusinessCardElementsClassNames;
}

export const BusinessCard = ({
    className,
    elementsClassNames = {},
    title,
    description,
    price,
    currency,
    rating,
    deliveryTime,
    deliveryTimeUnits,
    ...props
}: BusinessCardProps) => {
    return (
        <BaseCard
            className={classNames(styles.root, className)}
            elementsClassNames={{ content: styles.baseCardContent, image: styles.baseCardImage }}
            {...props}
        >
            <div className={classNames(styles.content, elementsClassNames.content)}>
                <div className={styles.restaurantDetailsContainer}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.description}>{description}</span>
                </div>
                <div className={styles.deliveryTimeContainer}>
                    <span className={styles.time}>{deliveryTime} </span>
                    <span className={styles.units}>{deliveryTimeUnits}</span>
                </div>
            </div>
            <footer className={classNames(styles.footer, elementsClassNames.footer)}>
                <span className={styles.deliveryPrice}>
                    <span>{currency}</span>
                    {price}
                </span>
                <span className={styles.satisfactionScore}>{rating}</span>
            </footer>
        </BaseCard>
    );
};
