

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => (
           
        <button key = {option} type='button' name={option} onClick={onLeaveFeedback}>{option}</button>
))}
            {/* <button type='button' onClick={onLeaveFeedback}>Good</button>
            <button type='button' onClick={onLeaveFeedback}>Neutral</button>
            <button type='button' onClick={onLeaveFeedback}>Bad</button> */}
        </>
    )
};

