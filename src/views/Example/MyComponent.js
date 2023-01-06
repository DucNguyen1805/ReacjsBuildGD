import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        // numberone: 'Thuy',
        firstName: '',
        lastName: '',
        ArrayAPI: [
            { id: '1', title: 'InBound' }, // đây là 1 đối tượng
            { id: '2', title: 'OutBound' },
            { id: '3', title: 'IC' },
        ]
    }
    // tuongtacnut = () => {
    //     alert('Hello bạn')
    // }
    // thaydoitrenbanphim = (event) => {
    //     this.setState({
    //         numberone: event.target.value
    //     })
    // }
    changeform = (event) => {
        this.setState({
            firstName: event.target.value,

        })
    }
    changeform2 = (event) => {
        this.setState({

            lastName: event.target.value,
        })
    }
    submit = (event) => {
        event.preventDefault();

        console.log(this.state);
    }
    render() {
        // let name = 'Nguyễn Ngọc Đức';
        return (
            <>
                {/* <div>
                    <input value={this.state.numberone} type="text"
                        onChange={(event) => this.thaydoitrenbanphim(event)}
                    />
                </div>
                <div>
                    <h1> Cái này phải làm sao với hư hỏng nhỉ {this.state.numberone}</h1>
                </div>

                <div>
                    <button onClick={() => this.tuongtacnut()}>Click me</button>
                </div> */}
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" id="fname" value={this.state.firstName} onChange={(event) => this.changeform(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" id="lname" value={this.state.lastName} onChange={(event) => this.changeform2(event)} /><br />
                    <button onClick={(event) => this.submit(event)}>Submit</button>
                </form>
                <ChildComponent name={this.state.firstName} age={'22'} info={this.state.ArrayAPI} />
            </>
        )
    }
}
export default MyComponent;