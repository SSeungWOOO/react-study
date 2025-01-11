import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent name="황근출" favoriteNumber={3}>
        {" "}
        박철곤{" "}
      </MyComponent>
    </div>
  );
}

export default App;
