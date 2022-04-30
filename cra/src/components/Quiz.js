import { useEffect, useReducer, useState } from "react";
import Section from "./Section";

const Quiz = ({ setQuizDone, setRecommendCoaching }) => {
  const threshold = 5; //minimum amount of points needed for the coaching to be recommended

  const [btnDisabled, setBtnDisabled] = useState(true); //controls the state of the submit form button

  const iconNext = ""; //insert hds icon here
  const iconPrev = ""; //insert hds icon here

  const initialState = { step: 1 };

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return { step: state.step + 1 };
      case "previous":
        return { step: state.step - 1 };
      default:
        throw new Error();
    } //controls which quiz page the user is currently on
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const questions = [
    {
      questionTitle:
        "Haluaisitko liikunta-alan ammattilaisen tukea matkallesi kohti aktiivisempaa arkea?",
      answerOptions: [
        {
          id: "1A",
          optionText: "En, haluan vain treenivinkit",
          addPoint: false,
        },
        {
          id: "1B",
          optionText:
            "Kyllä, tarvitsen tukea liikunnan aloittamisessa tai lisäämisessä",
          addPoint: true,
        },
        {
          id: "1C",
          optionText: "En osaa sanoa",
          addPoint: true,
        },
      ],
    },
    {
      questionTitle:
        "Huomaatko jaksamisen olevan vähäistä työpäivän jälkeen? Kaipaatko lisäenergiaa?",
      answerOptions: [
        {
          id: "2A",
          optionText: "Työt vievät kaiken energiani",
          addPoint: true,
        },
        {
          id: "2B",
          optionText:
            "Olen energinen työpäivän jälkeen, harvoin jään sohvalle makoilemaan",
          addPoint: false,
        },
        {
          id: "2C",
          optionText: "Joskus jään sohvalle",
          addPoint: true,
        },
      ],
    },
    {
      questionTitle: "Tällä hetkellä liikun...",
      answerOptions: [
        {
          id: "3A",
          optionText: "En lainkaan",
          addPoint: true,
        },
        {
          id: "3B",
          optionText: "Satunnaisesti",
          addPoint: true,
        },
        {
          id: "3C",
          optionText: "Kerran viikossa",
          addPoint: true,
        },
        {
          id: "3D",
          optionText: "Säännöllisesti 2 kertaa viikossa (tai useammin)",
          addPoint: false,
        },
      ],
    },
    {
      questionTitle: "Arki- ja hyötyliikuntaa on arjessani...",
      answerOptions: [
        {
          id: "4A",
          optionText: "Niin paljon, etten koe muulle liikunnalle tarvetta",
          addPoint: false,
        },
        {
          id: "4B",
          optionText: "Riittävästi, mutta kaipaan muuta liikuntaa",
          addPoint: true,
        },
        {
          id: "4C",
          optionText: "Satunnaisesti, kaipaisin lisää",
          addPoint: true,
        },
        {
          id: "4D",
          optionText: "Liian vähän",
          addPoint: true,
        },
      ],
    },
    {
      questionTitle:
        "Oletko pohtinut liikkumistottumuksiasi ja koet, että haluat niihin muutosta?",
      answerOptions: [
        {
          id: "5A",
          optionText: "Ehdottomasti",
          addPoint: true,
        },
        {
          id: "5B",
          optionText: "Ehkä",
          addPoint: true,
        },
        {
          id: "5C",
          optionText: "Olen tyytyväinen tottumuksiini",
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

  const jumpTo = (index) => {
    //calculate the amount of steps "backwards" needed, using the index (key) of the item that has been clicked (Summary.js)

    const jump = state.step - index - 1;

    for (let i = 0; i < jump; i++) {
      dispatch({ type: "previous" });
    } //iterate the amount of jumps (dispatch type "previous") needed, in order to navigate to the unanswered question
  };

  useEffect(() => {
    //every time [answers]-state changes, go through current answers and check if any are undefined
    const emptyAnswer = Object.values(answers).some(
      (value) => value === undefined
    );
    if (emptyAnswer) {
      return; //If an empty answer is found, return instantly.
    }
    setBtnDisabled(false); //if no answer is currently undefined, enable the submit button
  }, [answers]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let totalPoints = 0; //calculate the total points; find and compare currently stored answers to the list of answer options
    Object.values(answers).map((value, index) => {
      const option = questions[index].answerOptions.find(
        (question) => question.id === value
      );
      if (option?.addPoint) {
        totalPoints++;
      } //if addPoint is true, add one point to the total points
    });
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
        jumpTo={jumpTo}
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
          <button type="submit" id="main-quiz-submit" disabled={btnDisabled}>
            Lähetä vastaukset
          </button>
        )}
      </div>
    </form>
  );
};

export default Quiz;
