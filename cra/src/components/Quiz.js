import { useReducer, useState } from "react";
import Section from "./Section";

const Quiz = ({ setQuizDone, setRecommendCoaching, setShowErrorModal }) => {
  const threshold = 3; //minimum amount of points needed for the coaching to be recommended

  const initialState = { step: 1 };
  //controls which quiz page the user is currently on

  const iconNext = ">";
  const iconPrev = "<";

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return { step: state.step + 1 };
      case "previous":
        return { step: state.step - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const questions = [
    {
      questionTitle:
        "Mollit excepteur voluptate adipisicing sint occaecat labore et eiusmod labore.",
      answerOptions: [
        {
          id: "1A",
          optionText:
            "Adipisicing ipsum minim enim aliquip eiusmod reprehenderit",
          addPoint: true,
        },
        {
          id: "1B",
          optionText: "Exercitation ut qui non irure quis excepteur",
          addPoint: false,
        },
        {
          id: "1C",
          optionText:
            "Aliqua laboris officia non sunt cillum sint commodo fugiat labore qui velit laboris",
          addPoint: false,
        },
      ],
    },
    {
      questionTitle: "Kysymys Kaksi",
      answerOptions: [
        {
          id: "2A",
          optionText: "Ullamco fugiat consectetur ex laborum non duis",
          addPoint: true,
        },
        {
          id: "2B",
          optionText:
            "Pariatur laboris tempor deserunt nisi aliquip ut in eiusmod quis nostrud est",
          addPoint: false,
        },
        {
          id: "2C",
          optionText: "Velit cillum eiusmod elit eu nulla",
          addPoint: false,
        },
        {
          id: "2D",
          optionText: "Et eiusmod pariatur mollit commodo",
          addPoint: false,
        },
      ],
    },
    {
      questionTitle: "Kysymys Kolme",
      answerOptions: [
        {
          id: "3A",
          optionText:
            "Consectetur do nisi adipisicing eiusmod consectetur anim magna",
          addPoint: true,
        },
        {
          id: "3B",
          optionText: "Nulla dolore Lorem nisi dolore",
          addPoint: false,
        },
        {
          id: "3C",
          optionText: "Veniam irure deserunt ut aliqua in consectetur",
          addPoint: false,
        },
      ],
    },
    {
      questionTitle: "Kysymys Neljä",
      answerOptions: [
        {
          id: "4A",
          optionText: "Officia excepteur nisi velit proident officia",
          addPoint: true,
        },
        {
          id: "4B",
          optionText: "Esse sunt sint exercitation dolor sit",
          addPoint: false,
        },
        {
          id: "4C",
          optionText:
            "Reprehenderit esse ad cupidatat fugiat aliqua sit ut amet ea ipsum",
          addPoint: false,
        },
        {
          id: "4D",
          optionText: "Veniam irure deserunt ut aliqua in consectetur",
          addPoint: false,
        },
      ],
    },
    {
      questionTitle: "Kysymys Viisi",
      answerOptions: [
        {
          id: "5A",
          optionText: "Cupidatat non cupidatat quis ullamco elit",
          addPoint: true,
        },
        {
          id: "5B",
          optionText: "Incididunt magna occaecat voluptate eu velit est culpa",
          addPoint: false,
        },
        {
          id: "5C",
          optionText:
            "Sit nisi esse ad est voluptate irure occaecat exercitation aute amet",
          addPoint: false,
        },
      ],
    },
  ];

  const [answers, setAnswers] = useState({
    //used to store the answer IDs (=values)
    answer1: undefined,
    answer2: undefined,
    answer3: undefined,
    answer4: undefined,
    answer5: undefined,
  });

  const [answersText, setAnswersText] = useState({
    //used to store the answer labels (=option text that is rendered to user)
    answerText1: undefined,
    answerText2: undefined,
    answerText3: undefined,
    answerText4: undefined,
    answerText5: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let isComplete = true; //defaults to true

    Object.values(answers).map((value) => {
      if (!value) {
        isComplete = false;
      }
    });
    if (!isComplete) {
      //if any of answers is undefined, do not calculate points, and show error
      setShowErrorModal(true);
      return;
    }
    let totalPoints = 0;
    Object.values(answers).map((value, index) => {
      const option = questions[index].answerOptions.find(
        (question) => question.id === value
      );
      if (option?.addPoint) {
        totalPoints++;
      } //calculate the total points; find and compare currently stored answers to the list of answer options => if addPoint is true, add one point to the total points
    });
    console.log(`${totalPoints} out of ${threshold} points`);
    setRecommendCoaching(totalPoints >= threshold ? true : false);
    setQuizDone(true);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <Section
        step={state.step}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        answersText={answersText}
        setAnswersText={setAnswersText}
      />

      <div className="buttons-container">
        {state.step > 1 && (
          <button
            data-icon={iconPrev}
            className="secondary prev"
            type="button"
            id="prev"
            onClick={() => dispatch({ type: "previous" })}
          >
            Edellinen
          </button>
        )}

        {state.step <= questions.length && (
          <button
            data-icon={iconNext}
            className="primary next"
            type="button"
            id="next"
            onClick={() => dispatch({ type: "next" })}
          >
            Seuraava
          </button>
        )}
        {state.step > questions.length && (
          <button type="submit" id="main-quiz-submit">
            Lähetä vastaukset
          </button>
        )}
      </div>
    </form>
  );
};

export default Quiz;
