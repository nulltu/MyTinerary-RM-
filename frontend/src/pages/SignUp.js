import React from 'react'
import '../styles/signUp.css'
import { TextInput } from 'react-materialize'
import { Link } from 'react-router-dom'
import TheFooter from '../components/TheFooter'
import { useState } from 'react'
import { useEffect } from 'react'
import { Select,Switch} from 'react-materialize'


function SignUp() {

    const [newUser, setNewUser] = useState({
        picture: '', username: '', firstName: '', lastName: '', password: '', countryOrigin: '', email: ''
    })

    const [countries, setCountries] = useState([])



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

    const sendInfo = e => {
        e.preventDefault()
    }


    return (
        <>
            <div className="title__signUp__signIn">
                <p>Create a new account</p>
            </div>
            <div className="container__signUp container-fluid ">

                <label htmlFor="pic">Link Picture</label><TextInput onChange={readInput} type="text" name="picture" placeholder="for example: http://www.myphoto.image.jpg" />
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
                    <option disabled value="" >Select a country of origin</option>
                    {countries.map(country => {
                        return (<><option>{country.name}</option></>)
                    })}
                </Select>




                <label htmlFor="">Password</label><TextInput onChange={readInput} type="password" name="password" placeholder="Min 6 characters" />
                <div style={{textAlign:'center'}}><button onClick={sendInfo} className="button__signUp">Create account</button></div>
              

            </div>

            <div className="container__signUp__more">
                <span><Link to="/signIn">do you already have an account?</Link> </span>
            </div>

            <div className="center" style={{ marginTop: '3em' }}>
                <Link to="/"><i class="large material-icons itinerary">home</i></Link>
            </div>

            <TheFooter />
        </>
    )
}

export default SignUp