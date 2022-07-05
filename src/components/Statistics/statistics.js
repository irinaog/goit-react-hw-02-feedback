import React from "react";
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total, positivePercentage, }) => {
    
    return (
        <>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}% </p>
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