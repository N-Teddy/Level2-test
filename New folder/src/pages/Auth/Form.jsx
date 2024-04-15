import './assets/form.css'
import './assets/google 2.png'
import './assets/t2-ladies.png'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '../../database'
import { authContext } from '../../context/AuthProvider'



export default function Form() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // initiate useNavigate
    const nav = useNavigate();

    const { updateUser } = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Add login logic here
        const user = users.find(user => { return user.userName === username && user.password === password })
        if (user) {
            updateUser(user);
            nav('/home')
        } else {
            alert("user not found")
        }
        
    };

    return (
        <section className="form_main">
            <section className="form_container">
                <div className="image"></div>
                <section className="main">
                    <section className="main_head">
                        <h1>Join us today 👋</h1>
                        <h2>Clarity gives you the blacks and components you <br /> need to create a truly professional website.</h2>
                        <button className="btn google_btn">
                            <div className='logo_goo' alt="google logo"></div>
                            <p>Sign up with Google</p>
                        </button>
                    </section>
                    <form className='Form' action="submit" onSubmit={handleSubmit}>
                        <label>
                            <h3>User Name</h3>
                            <input type="name"
                                placeholder="i.e Enter your name"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <label>
                            <h3>Password</h3>
                            <input type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </label>
                        <label>
                            <input type="checkbox" className="rem" /><h3 className="me">Remember me</h3>
                        </label>
                        <button className="btn account_btn" type='submit'  >
                            <p>Create Account</p>
                        </button>
                    </form>
                    <section className="main_foot">
                        <h3>Already have an account <a href="/home">Sign in</a></h3>
                    </section>
                </section>
            </section>
        </section>
    )
}
