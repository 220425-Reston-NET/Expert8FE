import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CreateAccount.css";
import { Patient } from "../../models/Patient";
import "../dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/counter";

function CreateAccount() {

  const dispatch = useDispatch();
  const [customer, setcustomer] = useState({} as Patient);
  const [ishidden, sethidden] = useState(false);
  const [isfailed, setfailed] = useState(false);
  // const { firsd } = useSelector((state) => state.counter);

  function insertFirstName(e: any) {
    customer.firstName = e.target.value;
  }
  function insertLastName(e: any) {
    customer.lastName = e.target.value;
  }
  function insertEmail(e: any) {
    customer.email = e.target.value;
  }
  function insertPhone(e: any) {
    customer.phone = e.target.value;

    if (customer.phone.length == 10) {
      setfailed(false);
    } else {
      setfailed(true);
    }
  }
  function insertAddress(e: any) {
    customer.address = e.target.value;
  }
  function insertCity(e: any) {
    customer.city = e.target.value;
  }
  function insertState(e: any) {
    customer.state = e.target.value;
    console.log(customer.state);

    if (customer.state == "---Select State---") {
      setfailed(true);
    } else {
      setfailed(false);
    }
  }
  function insertZip(e: any) {
    customer.zip = e.target.value;
    if (customer.zip.length == 5) {
      setfailed(false);
    } else {
      setfailed(true);
    }
  }
  function insertPassword(e: any) {
    customer.password = e.target.value;
    if (customer.password.length > 7) {
      setfailed(false);
    } else {
      setfailed(true);
    }
  }

  async function onSubmit(e: any) {
    e.preventDefault();

    await fetch(
      "http://expert8env-env.eba-q62pjcac.us-east-1.elasticbeanstalk.com/AddPatient",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: customer.firstName,
          lastName: customer.lastName,
          email: customer.email,
          phone: customer.phone,
          address: customer.address,
          city: customer.city,
          state: customer.state,
          zip: customer.zip,
          password: customer.password,
          services: [],
        }),
      }
    )
      .then((response) => {
        if (response.status == 201) {
          return response.json();
        } else {
          setfailed(true);

          throw `error with status ${response.status}`;
        }
      })

      .then(
        (data) => {
          // change/ attached user to user id in db

          setfailed(false);

          setcustomer(data);
          sethidden(true);
          dispatch(addUser(data));
          console.log(data);

          gotologin();
        },
        () => {
          sethidden(false);
        }
      );
  }

  const navigate = useNavigate();
  

  const gotologin = () => {
    console.log("transfer works");
    navigate(`/dashboard/${customer.firstName}`, {
      state: {
        ...customer
      },
    });
  };

  return (
    <div>
      
      <div className="create-account-page-container">
        
        <form className="create-account-container" onSubmit={onSubmit}>
          <h1 className="tell-us">
            <b>Tell us about yourself</b>
          </h1>

          <div className="name-container">
            <div className="name">
              <label htmlFor="" className="form-label label-container">
                First Name
              </label>
              <input
                type="name"
                className="form-control"
                placeholder="John"
                onChange={insertFirstName}
                aria-describedby="nameHelp"
              />
              {isfailed && (
                <span style={{ color: "red" }}>
                  Enter a valid first name (Under 50 characters)
                </span>
              )}
            </div>
            <div className="name">
              <label htmlFor="" className="form-label label-container">
                Last Name
              </label>
              <input
                type="name"
                className="form-control"
                placeholder="Doe"
                onChange={insertLastName}
                aria-describedby="nameHelp"
              />
              {isfailed && (
                <span style={{ color: "red" }}>
                  Enter a valid last name (Under 50 characters)
                </span>
              )}
            </div>
          </div>

          <label htmlFor="" className="form-label label-container">
            Email address
          </label>
          <input
            type=""
            className="form-control"
            placeholder="johndoe@gmail.com"
            onChange={insertEmail}
            aria-describedby=""
          />
          {isfailed && (
            <span style={{ color: "red" }}>
              Enter a valid Email Address (Under 50 characters)
            </span>
          )}

          <label htmlFor="" className="form-label label-container">
            Phone Number
          </label>
          <input
            type="number"
            min="0"
            className="form-control"
            placeholder="5555551234"
            onChange={insertPhone}
            aria-describedby=""
          />
          {isfailed && (
            <span style={{ color: "red" }}>
              Phone number must be 10 positive digits
            </span>
          )}

          <div className="address-container-a">
            <div className="street-city">
              <label htmlFor="" className="form-label label-container">
                Street Address
              </label>
              <input
                type="address"
                className="form-control"
                placeholder="123 Main St"
                onChange={insertAddress}
                aria-describedby=""
              />
              {isfailed && (
                <span style={{ color: "red" }}>
                  Enter a valid address (Under 50 characters)
                </span>
              )}
            </div>
            <div className="street-city">
              <label htmlFor="" className="form-label label-container">
                City
              </label>
              <input
                type="address"
                className="form-control"
                placeholder="Louisville"
                onChange={insertCity}
                aria-describedby=""
              />
              {isfailed && (
                <span style={{ color: "red" }}>
                  Enter a valid ciy (Under 50 characters)
                </span>
              )}
            </div>
          </div>

          <div className="address-container-b">
            <div className="state-zip">
              <label htmlFor="" className="form-label label-container">
                State
              </label>
              {/* <input type="state" name='state' className="form-control" placeholder="Kentucky" onChange={insertState}   aria-describedby=""/> */}
              <select
                name="state"
                className="form-control"
                onChange={insertState}
              >
                <option>---Select State---</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>District of Columbia</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
              </select>
              {isfailed && (
                <span style={{ color: "red" }}>
                  Please select a valid state
                </span>
              )}
            </div>
            <div className="state-zip">
              <label htmlFor="" className="form-label label-container">
                Zipcode
              </label>
              <input
                type="number"
                min="0"
                className="form-control"
                placeholder="55555"
                onChange={insertZip}
                aria-describedby=""
              />
              {isfailed && (
                <span style={{ color: "red" }}>
                  Please select a zip (5 digits only)
                </span>
              )}
            </div>
          </div>

          <label htmlFor="password" className="form-label label-container">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={insertPassword}
            aria-describedby=""
          />
          {isfailed && (
            <span style={{ color: "red" }}>
              Password must be 8 characters or more
            </span>
          )}

          <div style={{ textAlign: "center" }}>
            
            <button
              style={{ marginBottom: 20 }}
              type="submit"
              disabled={isfailed}
              className="btn button-container btn-lg"
            >
              Submit
            </button>
           
          </div>
        </form>
      </div>

      {/* {
      ishidden &&
      
      <div className="form-label label-container transfer-container " >
        <h4>You successfully created an account with us!</h4>
        <h5>Please use your email and password to log in</h5>
        <button type="submit" className="btn button-container btn-lg" style={{ marginTop: 20 }}> <div onClick={gotologin}>Go to log in</div></button>
        <div><button type="submit" className="btn button-container btn-lg" style={{ marginTop: 20 }}> <div onClick={gotowelcome}>Back to home page</div></button></div>
      </div>
    } */}
    </div>
  ); //end of return
} //end of CreateAccount()

export default CreateAccount;
