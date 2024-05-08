import classNames from 'classnames';
import { To } from 'react-router-dom';
import { Link } from '../link/link';
import styles from './partner-card.module.scss';

export interface PartnerCardProps {
    imageSrc: string;
    title: string;
    to: To;
    className?: string;
}

export const PartnerCard = ({ className, title, to, imageSrc }: PartnerCardProps) => {
    return (
        <Link className={classNames(styles.root, className)} to={to}>
            <div className={styles.image} style={{ backgroundImage: `url(${imageSrc})` }} />
            <h3 className={styles.title}>{title}</h3>
        </Link>
    );
};
