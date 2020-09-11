import React from 'react'
import { TextInput } from 'react-materialize'
import '../styles/signIn.css'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import errorAuth from '../images/error_auth.svg'


class SingIn extends React.Component {

    state = {
        username: "",
        password: "",
        errorInput: null

    }

    

    readInput = e => {
        const textBox = e.target.name
        const value = e.target.value
        this.setState({
            [textBox]: value
        })
    }

    sendInfo = async e => {
        e.preventDefault()
        const dataLogin = { username: this.state.username, password: this.state.password }
        const response = await this.props.logUserIn(dataLogin)
        if (response.data.message) {
            this.setState({ errorInput: response.data.message })
        }
    }

    render() {

        if(this.props.token !== ""){
            setTimeout(() => {
            this.props.history.push('/')
        }, 2000);
        }

        return (
            <>

                <div className="container__super__SignIn">
                    <div className="img__backgroud__signIn"></div>
                    <div className="container__signIn">
                        <p>Sign in to Mytinerary</p>
                        <label htmlFor="">Username</label><TextInput name="username" onChange={this.readInput} />
                        <label htmlFor="">Password</label><TextInput type="password" name="password" onChange={this.readInput} />
                        <div className= "error__authentication">
                        <span id="error__input">{this.state.errorInput}.</span>
                        </div>
                        <div style={{ textAlign: 'center' }}><button onClick={this.sendInfo} className="button__signIn">Sign in</button></div>
                        <div className="container__signIn__more">
                            <span>New to Mytinerary? <Link to="/signUp">Create an account.</Link> </span>
                        </div>
                    </div>

                </div>
                <div className="center" style={{ marginTop: '3em' }}>
                    <Link to="/"><i class="large material-icons itinerary">home</i></Link>
                </div>

                <Footer />
            </>
        )
    }
}


    

const mapStateToProps = state => {
    return {
      token: state.user.token
    }
  }

const mapDispatchToProps = {
    logUserIn: userActions.logUserIn
}

export default connect(mapStateToProps, mapDispatchToProps)(SingIn)
