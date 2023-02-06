import { Component } from 'react';
import style from './feedback.module.css';
import Section from "../Section/Section.jsx";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions.jsx";
import Notification from "../Notification/Notification.jsx";
import Statistics from '../Statistics/Statistics.jsx';

export default class Feedback extends Component {
state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const result = Math.round((good * 100) / this.countTotalFeedback());
    return result;
};
  
  render() {
    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;

    return (
      <div className={style.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.handleChange} />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
};