import React,  { useState }  from 'react'
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {userSignUpSubmit} from '../actions/authActions'

const initialSignUp = {
    username: "uzii",
    phoneNumber: "123456789",
    password: "123415415654",
};

const SignUp = ({ userSignUpSubmit }) => {

    const history = useHistory();
  
    const [form, setForm] = useState(initialSignUp);
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
      console.log("SIGN UP FORM", form);
      userSignUpSubmit(form);
      history.push("/login");
    };
  
    const handleChange = (ev) => {
      const { name, value } = ev.target;
      setForm({
        ...form,
        [name]: value,
      });
      console.log('form', form)
    };
  
    return (
      <section className="signup-page" onSubmit={handleSubmit}>
        <form>
          <h3>USER SIGN UP</h3>
          
          <label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              value={form.username}
              placeholder="USERNAME OVER 4 LETTERS"
              required
            />
          </label>
          <br />
          <label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              placeholder="PASSWORD"
              required
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              value={form.phoneNumber}
              placeholder="PHONE NUMBER"
              required
            />
          </label>
          
          <button>SIGN UP</button>
          <br />
          <button>CANCEL</button>
        </form>
      </section>
    );
  };

  const mapStateToProps = (state) => {
    return state;
  };
  
  export default connect(mapStateToProps, { userSignUpSubmit })(SignUp);
  
