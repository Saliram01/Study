function BuggyComponent({ triggerError }) {
    if (triggerError) {
      throw new Error("Simulated error!");
    }
  
    return <div>All is well in BuggyComponent!</div>;
  }

  export default BuggyComponent;