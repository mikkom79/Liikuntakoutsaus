function App() {
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

  return (
    <div>
      <h1>Liikuntakoutsaus</h1>
    </div>
  );
}

export default App;
