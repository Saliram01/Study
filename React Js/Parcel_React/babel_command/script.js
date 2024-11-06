// const h2 = <h2 className="heading" id="heading">Using Babel Command for JSX</h2>
// console.log(h2);

function App(){
    return (
        <div>
            <h2>Hello Babel With Command</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); 