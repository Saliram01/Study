import { Component } from "react";

class OldCounter extends Component {
    constructor() {
        super();
        this.state = {
            count : 0,
        }
    }

        // console.log("Constructor")
    // }
    //  componentDidMount() {
    //     // console.log("ConponentDidMount")

    //     // this.timerId = setInterval(() => {
    //     //     console.log("Hello")
    //     // },1000)
    //  }

    //  componentDidUpdate() {
    //     // console.log("ComponentWillUpdate")
    //  }

    //  componentWillUnmount() {
    //     // console.log("ComponentWillUnmount")
    //     // clearInterval(this.timerId);
    //  }

     

    render() {
        // console.log("Render")
        return  <>
            <h1 className="text-center mt-6">Old Counter</h1>
            <div className='pt-4 flex items-center justify-center gap-4'>
            <button className='bg-gray-400 p-1 rounded w-[50px]' 
            onClick={() => this.setState({count : this.state.count - 1})}>-</button>
            <h1 className='text-2xl w-[20px] text-center'>{this.state.count}</h1>
            <button className='bg-green-400 p-1 rounded w-[50px]' 
            onClick={function () {
                this.setState({count: this.state.count + 1})
            }.bind(this)}>+</button>
            </div>
        </>
    }
}

export default OldCounter;