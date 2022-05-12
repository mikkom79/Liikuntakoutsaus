import { useEffect, useReducer, useState } from "react";
import Section from "./Section";

const Quiz = ({ setQuizDone, setRecommendCoaching }) => {
  const threshold = 5; //minimum amount of points needed for the coaching to be recommended (5 = maximum amount of points)

  const [nextBtnDisabled, setNextBtnDisabled] = useState(true); // controls the state of the form's next step button

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

  useEffect(() => {
    //check if user has answered current step question, and is able to go to the next step
    const answerIndex = Object.values(answers).indexOf(undefined);
    setNextBtnDisabled(answerIndex + 1 === state.step);
  }, [answers, state.step]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let totalPoints = 0; //calculate the total points; find and compare currently stored answers to the list of answer options
    Object.values(answers).forEach((value, index) => {
      const option = questions[index].answerOptions.find(
        (question) => question.id === value
      );
      if (option.addPoint) {
        totalPoints++;
      } //if addPoint is true, add one point to the total points
    });
    setRecommendCoaching(totalPoints >= threshold);
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
            disabled={nextBtnDisabled}
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
