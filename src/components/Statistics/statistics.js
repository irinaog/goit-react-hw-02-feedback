import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage, }) => {
    
    return (
        <>  
            <ul className={css.statList}>
            <li className={css.statItem}>Good: <span className={css.statValue}>{good}</span></li>
            <li className={css.statItem}>Neutral: <span className={css.statValue}>{neutral}</span></li>
            <li className={css.statItem}>Bad: <span className={css.statValue}>{bad}</span></li>
            <li className={css.statItem}>Total: <span className={css.statValue}>{total}</span></li>
            <li className={css.statItem}>Positive feedback: <span className={css.statValue}>{positivePercentage}%</span></li>
            </ul>
            </>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};