// import { Component } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import CountChange from "./components/CountChange";
import Results from "./components/Results";
import { setComputerList } from "./redux/actions/computerActions";
import { useEffect } from "react";
import Computer from "./components/Computer";
// import ErrorBoundary from "./components/ErrorBounDary";
// import DoSomething from "./components/DoSomething";

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log("Hello");
//   }
// }
// const a = {
//   name: "A",
//   age: '1'
// }

// const b = {
//   name: "B",
//   age: '1'
// }
// const student = new Person("Nam", 20);
// console.log(student);
// const teacher = new Person("Tuan", 40);
// console.log("teacher", teacher);
// teacher.sayHello();

function App() {
  const dispatch = useDispatch();
  useEffect(async () => {
    const fetchData = async () => {
      const res = await fetch("/data-base/computer.json");
      const dataJson = await res.json();
      dispatch(setComputerList(dataJson));
    };
    fetchData();
  }, []);
  return (
    <>
      {/* <Results />
      <CountChange /> */}
      <Computer />
    </>
  );
}
// class App extends Component {
//   render() {
//     return <>App</>;
//   }
// }

export default App;
