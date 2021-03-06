import React from 'react'
import '../styles/signUp.css'
import { TextInput } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { Select} from 'react-materialize'
import userActions from '../redux/actions/userActions'
import {connect} from 'react-redux'
import Footer from '../components/Footer'


function SignUp(props) {

    const [newUser, setNewUser] = useState({
        urlPhoto: '', username: '', firstName: '', lastName: '', password: '', countryOrigin: '', email: ''
    })

    const [countries, setCountries] = useState([])
    const [errorInput, setErrorInput] = useState(null)
    const [errorTest, setErrorTest] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://restcountries.eu/rest/v2/all')
        const countries = await data.json()
        setCountries(countries)
    }


    const readInput = e => {
        const textBox = e.target.name
        const value = e.target.value
        setNewUser({
            ...newUser,
            [textBox]: value
        })
    }

    const sendInfo = async e => {
       
        e.preventDefault()
        setLoading(true)
        await props.createAccount(newUser)
        const response = await props.createAccount(newUser)
        if(response.data.error){
            setErrorInput(response.data.error)}

          if(response.data.error){
              setErrorTest(response.data.error.message)
          }  
          setLoading(false)
    }
    

    if(props.token !== ""){
        props.history.push('/')
    }

    return (
        <>  
            <div className="container__super__signUp">   
                <div className="text__container__signUp">
                </div>
            <div className="container__signUp">
                <p>Create your account</p>
                <label htmlFor="pic">Link urlPhoto</label><TextInput onChange={readInput} type="text" name="urlPhoto" placeholder="for example: http://www.myphoto.image.jpg" />
                <label htmlFor="">Username</label><TextInput onChange={readInput} type="text" name="username" id="" placeholder="for example: Jhon1010" />
                <label htmlFor="">First Name</label><TextInput onChange={readInput} type="text" name="firstName" placeholder="John" />
                <label htmlFor="">Last Name</label><TextInput onChange={readInput} type="text" name="lastName" placeholder="Wick" />
                <label htmlFor="">Email</label><TextInput email onChange={readInput} type="text" name="email" id="" placeholder="for example: jhon@mytinerary.com"  validate/>
    

                <Select
                    className="select"
                    name="countryOrigin"
                    id="Select-9"
                    multiple={false}
                    onChange={readInput}
                    options={{
                        classes: '',
                        dropdownOptions: {
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250
                        }
                    }}
                    value=""
                >
                    <option classname="option__select"disabled value="" >Select a country of origin</option>
                    {countries.map(country => {
                        return (<><option>{country.name}</option></>)
                    })}
                </Select>

                <label htmlFor="">Password</label><TextInput onChange={readInput} type="password" name="password" placeholder="Min 6 characters" />
                <div className="center"> <label htmlFor="" id="error__input__signUp">{errorInput}</label></div>
               
                <div style={{textAlign:'center'}}><button onClick={sendInfo} disabled={loading} className="button__signUp">Create account</button></div>
                <div className="container__signUp__more">
                <Link to="/signIn">do you already have an account?</Link>
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

const mapStateToProps = state => {
    return {
      token: state.user.token
    }
  }

const mapDispatchToProps = {
    createAccount : userActions.createAccount
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp)