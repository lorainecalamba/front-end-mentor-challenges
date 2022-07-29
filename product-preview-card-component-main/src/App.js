import "./App.scss";
import Button from "./components/Button";
import Info from "./components/Info";
import Price from "./components/Price";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <div className="container__image"></div>
        <div className="container__description">
          <Info />

          <Price />

          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
