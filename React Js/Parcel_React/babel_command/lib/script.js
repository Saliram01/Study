// const h2 = <h2 className="heading" id="heading">Using Babel Command for JSX</h2>
// console.log(h2);

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hello Babel With Command"));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));