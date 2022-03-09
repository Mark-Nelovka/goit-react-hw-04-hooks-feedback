import { useState } from "react";
import "./App.css";
import SectionTitle from "./Components/TitleSec";
import Statistics from "./Components/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions";
import Notification from "./Components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onIncrement = (data) => {
    if (data === "good") {
      setGood((prevState) => prevState + 1);
      return;
    } else if (data === "neutral") {
      setNeutral((prevState) => prevState + 1);
      return;
    } else {
      setBad((prevState) => prevState + 1);
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const totalFeedback = good + neutral + bad;

    let positFeedPerctenger = (good / totalFeedback) * 100;

    return (positFeedPerctenger = positFeedPerctenger
      ? positFeedPerctenger
      : 0);
  };

  return (
    <div className="App">
      <SectionTitle title={"Please leave feedback"}>
        <FeedbackOptions
          onIncrement={onIncrement}
          options={["good", "neutral", "bad"]}
        />
        {good || neutral || bad ? (
          <div>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback(good, neutral, bad)}
              positivePercentage={countPositiveFeedbackPercentage(
                good,
                neutral,
                bad
              )}
            />{" "}
          </div>
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </SectionTitle>
    </div>
  );
}

export default App;
