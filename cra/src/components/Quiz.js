import useState from "react";
import Radiobutton from "./Radiobutton";

const Quiz = ( { currentQuestion } ) => {

    const questions = [
        {
          questionTitle: "Elit sint tempor ex adipisicing non reprehenderit.",
          answerOptions: [
            { optionText: "Cillum veniam et nostrud est amet.", addPoint: false },
            { optionText: "Nostrud aute dolor ut eu voluptate sit eu ea mollit velit", addPoint: true },
            { optionText: "Adipisicing commodo eiusmod velit cupidatat adipisicing quis", addPoint: true },
          ],
        },
        {
          questionTitle: "Elit sint tempor ex adipisicing non reprehenderit.",
          answerOptions: [
            { optionText: "Cillum veniam et nostrud est amet.", addPoint: false },
            { optionText: "Nostrud aute dolor ut eu voluptate sit eu ea mollit velit", addPoint: true },
            { optionText: "Adipisicing commodo eiusmod velit cupidatat adipisicing quis", addPoint: false },
          ],
        },
        {
          questionTitle: "Elit sint tempor ex adipisicing non reprehenderit.",
          answerOptions: [
            { optionText: "Cillum veniam et nostrud est amet.", addPoint: true },
            { optionText: "Nostrud aute dolor ut eu voluptate sit eu ea mollit velit", addPoint: false },
            { optionText: "Adipisicing commodo eiusmod velit cupidatat adipisicing quis", addPoint: true },
          ],
        },
    
      ];

      const [questionAnswer1, setquestionAnswer1] = useState("");
      const [questionAnswer2, setquestionAnswer2] = useState("");
      const [questionAnswer3, setquestionAnswer3] = useState("");


    return ( 
        
            <ul className="quiz-list">
                <span>1/{questions.length}</span>
        
                <li><Radiobutton label={"Radio button"} value={"yay"}/></li>

            </ul>
        
     );
}
 
export default Quiz;



