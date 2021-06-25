import "./styles.css";
import { connect } from "react-redux";
import * as actions from "./redux/actions/testActions";
function App(props) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <p>Counter : {props.myValue}</p>
      <button onClick={props.increaseNumber}>+</button>
      <button onClick={props.decreaseNumber}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myValue: state.value
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseNumber: () => dispatch(actions.increaseNumber()),
    decreaseNumber: () => dispatch(actions.decreaseNumber())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
