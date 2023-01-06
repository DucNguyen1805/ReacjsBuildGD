import React from 'react';

class ChildComponent extends React.Component {
    state = {
        // numberone: 'Thuy',
        firstName: '',
        lastName: ''
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
        console.log(this.props)
        let { name, age, info } = this.props; // đối  với trường hợp có nhiều biến (tên biến phải trùng với biến dc truyền)
        return (
            <>
                <div> Tôi là: {name} - {age} tuổi nha</div>

                <div className='joblists'>
                    <h2>THông tin chức vụ là</h2> <br />
                    {
                        info.map((icon, index) => {
                            return (
                                <div key={icon.id}>
                                    {icon.id} - {icon.title}
                                </div>
                            )

                        })
                    }

                </div>
            </>
        )
    }
}
export default ChildComponent;