import React from "react";
import PropTypes from "prop-types";
import styles from './feedbackOptions.module.css'

const FeedbackOption = ({ onLeaveFeedback }) => {
    return (

        <div className={styles.buttonContainer}>
            <button
                type="button"
                name="good"
                className={styles.button}
                onClick={onLeaveFeedback}
            >Good</button>
            <button
                type="button"
                name="neutral"
                className={styles.button}
                onClick={onLeaveFeedback}
            >Neutral</button>
            <button
                type="button"
                name="bad"
                className={styles.button}
                onClick={onLeaveFeedback}
            >Bad</button>
        </div>

    );
};

FeedbackOption.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;