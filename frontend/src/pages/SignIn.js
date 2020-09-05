import React from 'react'
import { TextInput } from 'react-materialize'
import '../styles/signIn.css'
import { Link } from 'react-router-dom'


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
    
            <div className="container__super__SignIn">
                    <div className="img__backgroud__signIn"></div>
                <div className="container__signIn">
                    <p>Sign in to Mytinerary</p>
                    <label htmlFor="">Username</label><TextInput name="user" onChange={this.readInput} />
                    <label htmlFor="">Password</label><TextInput type="password" name="password" onChange={this.readInput} />
                    <div style={{textAlign:'center'}}><button onClick={this.sendInfo} className="button__signIn">Sign in</button></div>
                    <div className="container__signIn__more">
                    <span>New to Mytinerary? <Link to="/signUp">Create an account.</Link> </span>
                    </div>
                </div>
            
            </div>
                <div className="center" style={{ marginTop: '3em' }}>
                    <Link to="/"><i class="large material-icons itinerary">home</i></Link>
                </div>
            </>
        )
    }
}

export default SingIn
