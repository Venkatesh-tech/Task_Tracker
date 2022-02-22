import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  const name = "Venkatesh";

  return (
    <div className="container">
      <Header />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from React</h1>;
//   }
// }

export default App;
