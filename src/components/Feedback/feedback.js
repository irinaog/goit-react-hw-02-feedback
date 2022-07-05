import React, { Component } from "react";
import { Statistics } from "components/Statistics/statistics";
import { FeedbackOptions } from "components/FeedbackOptions/feedbackOptions";
import { Section } from "components/Section/section";
export class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
 
     

    hendleClick = evt => {
        const opt = evt.target.name;
        opt === 'good' && this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };  
        });
        opt === 'neutral' && this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
        opt === 'bad' && this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };    
        
    
    // hendleClickNeutral = evt => {
    //     this.setState(prevState => {
    //         return {
    //             neutral: prevState.neutral + 1,
    //         }
    //     });
    // };
    // hendleClickBad = evt => {
    //     this.setState(prevState => {
    //         return {
    //             bad: prevState.bad + 1,
    //         }
    //     });
    // };

    countTotalFeedback = () => {
        const total = this.state.good + this.state.neutral + this.state.bad;
        return total;
    };
    countPositiveFeedbackPercentage = (value) => {
         this.state.good > 0 ? value = (this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad)).toFixed(0) : value = '0';
        return value;
    };

    render() {
        const { good } = this.state;
        const { neutral } = this.state;
        const { bad } = this.state;

        return (<>
            
           <Section title={'Please leave feedback'}> 
            
            <FeedbackOptions
                options={Object.keys(this.state)}
            onLeaveFeedback={this.hendleClick}
                />
                </Section>

             <Section title={'Statistics'}>
             <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage = { this.countPositiveFeedbackPercentage()}
                /> 
                </Section>
            </>
           
        )
    }
}