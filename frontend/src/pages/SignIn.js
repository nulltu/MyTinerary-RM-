import React from 'react'
import logo from '../images/airplane.svg'
import { TextInput } from 'react-materialize'
import '../styles/signIn.css'
import { Link } from 'react-router-dom'
import TheFooter from '../components/TheFooter'

class SingIn extends React.Component {

    state = {
        username: "",
        password: ""
    }

    readInput = e => {
        const textBox = e.target.name
        const value = e.target.value
        this.setState({
            [textBox]: value
        })
    }

    sendInfo = e => {
        e.preventDefault()
        const userLogin = { user: this.state.user, password: this.state.password }
        console.log(userLogin)
    }

    render() {
        return (
            <>
                <div className="title__signUp__signIn">
                    <p >Sign in to Mytinerary</p>
                </div>
                <div className="container">
                    <img src={logo} alt="" />
                </div>

                <div className="container__signIn">
                    <label htmlFor="">Username</label><TextInput name="user" onChange={this.readInput} />
                    <label htmlFor="">Password</label><TextInput type="password" name="password" onChange={this.readInput} />
                    <button onClick={this.sendInfo} className="button__signIn">Sign in</button>
                </div>

                <div className="container__signIn">
                    <span>New to Mytinerary? <Link to="/signUp">Create an account.</Link> </span>
                </div>
                <div className="center" style={{ marginTop: '3em' }}>
                    <Link to="/"><i class="large material-icons itinerary">home</i></Link>
                </div>
                <TheFooter />
            </>
        )
    }
}

export default SingIn
