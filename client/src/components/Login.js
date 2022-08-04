import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

function Login({setUser}) {
   let navigate = useNavigate();
   const [first_name, setFirst_Name] = useState("");
   const [last_name, setLast_Name] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errors, setErrors] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   let [authMode, setAuthMode] = useState("signin")
   

   console.log(first_name, last_name, email, password)

   const changeAuthMode = () => {
     setAuthMode(authMode === "signin" ? "signup" : "signin")
   }

   function handleClick(){
    navigate("/home")
   }

   function handleSubmit(e) {
      e.preventDefault();
      console.log(e);
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
            handleClick();
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    function handleSignUp(e){
      e.preventDefault();
      console.log(e);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ first_name, last_name, email, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
            console.log(user);
            navigate("/newhome")
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
 
     return (
      <div className="maincontainer">
      <div class="container-fluid">
          <div class="row no-gutter">
             
              <div class="col-md-6 d-md-flex bg-image">
              <Player autoplay loop
                                src="https://assets7.lottiefiles.com/packages/lf20_mfwsp8vy.json"
                                style={{ height: "100%", width: '100%' }}
                    
                        >
                          <Controls  visible={false} buttons={['play', 'hover', 'frame', 'debug']} />
                          </Player> 

              </div>
              
              <div class="col-md-6 bg-light">
                  <div class="login d-flex align-items-center py-5">
                     
                      <div class="container">
                          <div class="row">
                          <div className="Auth-form-container">
                            {authMode === "signin"?
                            <form className="Auth-form" onSubmit={(e)=>handleSubmit(e)}>
                              <div className="Auth-form-content">
                                <h3 className="Auth-form-title" align='center'>Sign In</h3>
                                <div className="text-center">
                                  Not registered yet?{" "}
                                  <span className="link-primary" onClick={changeAuthMode}>
                                    Sign Up
                                  </span>
                                </div>
                                <div className="form-group mt-3">
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                                <div className="form-group mt-3">
                                  <label>Password</label>
                                  <input
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                </div>
                                <div className="d-grid gap-2 mt-3">
                                  <button type="submit" className="btn btn-primary">
                                  {isLoading ? "Loading..." : "Login"}
                                  </button>
                                      <div class="error-message">{errors}</div>
                                </div>
                              </div>
                            </form>:
                            <form className="Auth-form" onSubmit={handleSignUp}>
                            <div className="Auth-form-content">
                              <h3 className="Auth-form-title" align='center'>Sign Up</h3>
                              <div className="text-center">
                                Already registered?{" "}
                                <span className="link-primary" onClick={changeAuthMode}>
                                  Sign In
                                </span>
                              </div>
                              <div className="form-group mt-3">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter Your First Name"
                                    value={first_name}
                                    onChange={(e) => setFirst_Name(e.target.value)}
                                  />
                                </div>
                                <div className="form-group mt-3">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter Your Last Name"
                                    value={last_name}
                                    onChange={(e) => setLast_Name(e.target.value)}
                                  />
                                </div>
                                <div className="form-group mt-3">
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                                <div className="form-group mt-3">
                                  <label>Password</label>
                                  <input
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                  />
                                </div>
                              <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                  Sign Up
                                </button>
                              </div>
                            </div>
                          </form>}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          )
        }
export default Login