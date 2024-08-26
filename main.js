function App() {
  const st1 = {
    color: "white",
    backgroundColor: "#23272F",
    padding: "0 24px 12px",
  };
  const st2 = {
    color: "white",
    backgroundColor: "#343A46",
    borderRadius: "16px",
    padding: "24px",
  };
  return (
    <div className="layer1" style={st1}>
      <h1>Quick Start</h1>
      <p>
        Welcome to the React documentation! This page will give you an
        introduction to the 80% of React concepts that you will use on a daily
        basis.
      </p>
      <div className="layer2" style={st2}>
        <h3>You will learn</h3>
        <ul>
          <li>How to create and nest components</li>
          <li>How to add markup and styles</li>
          <li>How to display data</li>
          <li>How to render conditions and lists</li>
          <li>How to respond to events and update the screen</li>
          <li>How to share data between components</li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
