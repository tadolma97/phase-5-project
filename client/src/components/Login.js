import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
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
            console.log(user);
            navigate("/home")
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
            navigate("/newhome")
          });
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
 
   if (authMode === "signin") {
     return (
       <div className="Auth-form-container">
         <form className="Auth-form" onSubmit={handleSubmit}>
           <div className="Auth-form-content">
             <h3 className="Auth-form-title">Sign In</h3>
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
         </form>
       </div>
     )
   }
 
   return (
     <div className="Auth-form-container">
       <form className="Auth-form" onSubmit={handleSignUp}>
         <div className="Auth-form-content">
           <h3 className="Auth-form-title">Sign Up</h3>
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
       </form>
     </div>
   )
 }

export default Login