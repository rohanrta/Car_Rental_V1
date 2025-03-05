// import React, { useState } from 'react';
// import car1 from '../assets/car1.jpg'
// import luxelogo from '../assets/luxe cars logo.png'
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// const Auth = ({insideRegister}) => {


//   return (
//     <>
//       <MDBContainer className="my-5">

// <MDBCard>
//   <MDBRow className='g-0'>

//     <MDBCol md='6'>
//       <MDBCardImage src={car1} alt="login form" className='rounded-start w-100'/>
//     </MDBCol>

//     <MDBCol md='6'>
//       <MDBCardBody className='d-flex flex-column'>

//         <div className='d-flex flex-row mt-2'>
//           <img src={luxelogo} alt="" height={'150px'} width={'150px'} />
//         </div>

//         <h5 className="fw-5 my-4 pb-3" style={{letterSpacing: '1px',fontSize:'25px'}}>Sign {insideRegister ? 'up':'in'} your account</h5>
//          {insideRegister&&
//              <MDBInput wrapperClass='mb-4' label='User Name' id='formControlLg' type='text' size="lg"/>
//              }
//           <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
//           <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
//         {insideRegister?
//         <>
//         <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Register</MDBBtn>
//         <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already a user ? Please click here to <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>login</Link></p>
//         </>
//          :
//          <>
//          <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
//         <a className="small text-muted" href="#!">Forgot password?</a>
//         <p className="mb-5 pb-lg-2">New user ? Please click here to <Link to={'/register'} style={{textDecoration:'none',color:'black'}}>Register here</Link> </p>
//         </>
//         }


//         <div className='d-flex flex-row justify-content-start'>
//           <a href="#!" className="small text-muted me-1">Terms of use.</a>
//           <a href="#!" className="small text-muted">Privacy policy</a>
//         </div>

//       </MDBCardBody>
//     </MDBCol>

//   </MDBRow>
// </MDBCard>

// </MDBContainer>
//     </>
//   );
// };

// export default Auth;
// import React, { useState, useEffect } from 'react';
// import car1 from '../assets/car1.jpg';
// import luxelogo from '../assets/luxe cars logo.png';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBInput
// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// const Auth = ({ insideRegister }) => {
//   const [otpStep, setOtpStep] = useState(false); // OTP step state
//   const [otp, setOtp] = useState(['', '', '', '', '', '']); // OTP input array
//   const [userDetail,setUserDetail]=useState({
//     name:"",
//     email:"",
//     password:"",
//     phone:"",
//     otp:""
//   })
//   console.log(userDetail);

//   // Reset OTP step when switching to Register page
//   useEffect(() => {
//     setOtpStep(false); 
//   }, [insideRegister]);

//   // Handle OTP input changes
//   const handleOtpChange = (e, index) => {
//     const value = e.target.value;
//     if (/[0-9]/.test(value) || value === '') { // Allow only digits
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//       if (value && index < otp.length - 1) {
//         document.getElementById(`otp-input-${index + 1}`).focus();
//       }
//     }
//   };

//   // Handle login button click
//   const handleLogin = (e) => {
//     e.preventDefault();
//     setOtpStep(true); // Move to OTP step
//   };

//   return (
//     <>
//       <MDBContainer className="my-5">
//         <MDBCard>
//           <MDBRow className="g-0">
//             <MDBCol md="6">
//               <MDBCardImage src={car1} alt="login form" className="rounded-start w-100" />
//             </MDBCol>
//             <MDBCol md="6">
//               <MDBCardBody className="d-flex flex-column">
//                 <div className="d-flex flex-row mt-2">
//                   <img src={luxelogo} alt="" height={'150px'} width={'150px'} />
//                 </div>
//                 <h5 className="fw-5 my-4 pb-3" style={{ letterSpacing: '1px', fontSize: '25px' }}>
//                   Sign {insideRegister ? 'up' : 'in'} to your account
//                 </h5>

//                 {/* Registration Fields */}
//                 {insideRegister && !otpStep && (
//                   <>
//                     <MDBInput wrapperClass="mb-4" label="User Name" id="username" type="text" size="lg" />
//                     <MDBInput wrapperClass="mb-4" label="Phone Number" id="phone" type="tel" size="lg" />
//                   </>
//                 )}

//                 {!otpStep && (
//                   <>
//                     <MDBInput wrapperClass="mb-4" label="Email address" id="email" type="email" size="lg" />
//                     <MDBInput wrapperClass="mb-4" label="Password" id="password" type="password" size="lg" />
//                   </>
//                 )}

//                 {otpStep ? (
//                   // OTP Input Step using small square boxes
//                   <form>
//                     <MDBRow className="justify-content-center">
//                       {otp.map((digit, index) => (
//                         <MDBCol key={index} md="2" className="d-flex justify-content-center mb-4">
//                           <MDBInput
//                             id={`otp-input-${index}`}
//                             type="text"
//                             value={digit}
//                             maxLength="1"
//                             onChange={(e) => handleOtpChange(e, index)}
//                             style={{
//                               width: '50px',
//                               height: '50px',
//                               textAlign: 'center',
//                               fontSize: '18px',
//                               borderRadius: '8px',
//                               borderColor: '#ccc'
//                             }}
//                           />
//                         </MDBCol>
//                       ))}
//                     </MDBRow>
//                     <MDBBtn className="mb-4 px-5" color="dark" size="lg">
//                       Verify OTP
//                     </MDBBtn>
//                   </form>
//                 ) : (
//                   <>
//                     {insideRegister ? (
//                       <>
//                         <MDBBtn className="mb-4 px-5" color="dark" size="lg">
//                           Register
//                         </MDBBtn>
//                         <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
//                           Already a user? Please click here to{' '}
//                           <Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}>
//                             login
//                           </Link>
//                         </p>
//                       </>
//                     ) : (
//                       <>
//                         <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={handleLogin}>
//                           Login
//                         </MDBBtn>
//                         <a className="small text-muted" href="#!">
//                           Forgot password?
//                         </a>
//                         <p className="mb-5 pb-lg-2">
//                           New user? Please click here to{' '}
//                           <Link to={'/register'} style={{ textDecoration: 'none', color: 'black' }}>
//                             Register here
//                           </Link>
//                         </p>
//                       </>
//                     )}
//                   </>
//                 )}

//                 <div className="d-flex flex-row justify-content-start">
//                   <a href="#!" className="small text-muted me-1">
//                     Terms of use.
//                   </a>
//                   <a href="#!" className="small text-muted">
//                     Privacy policy
//                   </a>
//                 </div>
//               </MDBCardBody>
//             </MDBCol>
//           </MDBRow>
//         </MDBCard>
//       </MDBContainer>
//     </>
//   );
// };

// export default Auth;

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import car1 from '../assets/car1.jpg';
import luxelogo from '../assets/luxe cars logo.png';
useContext
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import { loginAPI, registerAPI, verifyOtpAPI } from '../services/allAPI';
import { tokenAuthContext } from '../contextApi/AuthContextAPI';
import { Spinner } from 'react-bootstrap';
// Import API functions
tokenAuthContext
const Auth = ({ insideRegister }) => {
  const {isAuthorized,setIsAuthorized} = useContext(tokenAuthContext)
  const [isLogin,setisLogin]=useState(false)
  const navigate = useNavigate();
  const [otpStep, setOtpStep] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [userDetail, setUserDetail] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
 console.log(userDetail);
 
  // useEffect(() => {
  //   setOtpStep(false);
  // }, [insideRegister]);
  
  
 
  useEffect(() => {
    setTimeout(() => {
      const token = localStorage.getItem("token");
  
      console.log("🔍 Auth Page - Checking Token:", token);
      
      if (token) {
        console.log("✅ User already logged in, redirecting to Home");
        navigate('/', { replace: true });
      }
    }, 300); // Small delay
  }, []); 
  // Handle input changes for all fields
  const handleChange = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  // Handle OTP input changes
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
  
    if (/^[a-zA-Z0-9]?$/.test(value)) { // Allow only single alphanumeric character
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
  
      // Move focus to next field if value is entered
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };
  
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  // Handle login API call
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPI({ email: userDetail.email, password: userDetail.password });

      if (response.status === 200) {
        setisLogin(true)
        setTimeout(()=>{
          
          setisLogin(false)
        },3000)
        
        alert('OTP sent successfully. Please verify.');
        setIsAuthorized(true)
        
        setOtpStep(true);
      }
      else if(response.status === 404){
         alert("User Not Found")
      }
      else if(response.status === 400){
        alert("Invalid Credential")
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  // Handle register API call
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await registerAPI({
        name: userDetail.name,
        email: userDetail.email,
        phone: userDetail.phone,
        password: userDetail.password
      });

      if (response.status === 200) {
        alert('Registration successful! Please log in.');
        setUserDetail({name:'',
          email:'',
          password:'',
          phone:''})
        navigate('/login');
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  // Handle OTP verification API call
  const handleVerifyOtp = async (e) => {
    e.preventDefault()
    const enteredOtp = otp.join('');
    console.log(userDetail.email);
    
    try {
      const result = await verifyOtpAPI({ email: userDetail.email, otp: enteredOtp });
  
      if (result.status === 200) {
        console.log("✅ OTP Verified, Received Data:", result.data);
        
        if (!result.data.token) {
          alert("❌ Token missing from server response!");
          return;
        }
  
        // ✅ Store authentication token & user data
        // sessionStorage.setItem("token", result.data.token);
        // sessionStorage.setItem("user", JSON.stringify(result.data.user));
        const user = result.data.user
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(user));
  
        // ✅ Immediately check if the token is stored
        if(user.role === "admin"){
          navigate("/admin/dashboard")
        }else{
            navigate('/')
        }
       
        // ✅ Navigate after a small delay to ensure sessionStorage update
        // setTimeout(() => {
        //   navigate("/", { replace: true });
        // }, 300);
      }
      else{
        alert('Invalid OTP')
      }
    } catch (error) {
      console.error("❌ OTP Verification Error:", error);
      alert(error.response?.data?.message || 'OTP verification failed');
    }
  };
  
  
  
  
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage src={car1} alt="login form" className="rounded-start w-100" />
          </MDBCol>
          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <img src={luxelogo} alt="" height={'150px'} width={'150px'} />
              </div>
              <h5 className="fw-5 my-4 pb-3" style={{ letterSpacing: '1px', fontSize: '25px' }}>
                Sign {insideRegister ? 'up' : 'in'} to your account
              </h5>

              {/* Registration Fields */}
              {insideRegister && !otpStep && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="User Name"
                    name="name"
                    type="text"
                    size="lg"
                    value={userDetail.name}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    size="lg"
                    value={userDetail.phone}
                    onChange={handleChange}
                  />
                </>
              )}

              {!otpStep && (
                <>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email address"
                    name="email"
                    type="email"
                    size="lg"
                    value={userDetail.email}
                    onChange={handleChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    name="password"
                    type="password"
                    size="lg"
                    value={userDetail.password}
                    onChange={handleChange}
                  />
                </>
              )}

              {otpStep ? (
                // OTP Input Step using small square boxes
                <form>
                  <MDBRow className="justify-content-center">
                    {otp.map((digit, index) => (
                      <MDBCol key={index} md="2" className="d-flex justify-content-center mb-4">
                        <MDBInput
                          id={`otp-input-${index}`}
                          type="text"
                          value={digit}
                          maxLength="1"
                          onChange={(e) => handleOtpChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          style={{
                            width: '50px',
                            height: '50px',
                            textAlign: 'center',
                            fontSize: '18px',
                            borderRadius: '8px',
                            borderColor: '#ccc'
                          }}
                        />
                      </MDBCol>
                    ))}
                  </MDBRow>
                  <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={handleVerifyOtp}>
                    Verify OTP
                  </MDBBtn>
                </form>
              ) : (
                <>
                  {insideRegister ? (
                    <>
                      <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={handleRegister}>
                        Register
                      </MDBBtn>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                        Already a user? Please click here to{' '}
                        <Link to={'/login'} style={{ textDecoration: 'none', color: 'black' }}>
                          login
                        </Link>
                      </p>
                    </>
                  ) : (
                    <>
                      <MDBBtn className="mb-4 px-5" color="dark" size="lg" onClick={handleLogin}>
                        Login{isLogin &&  <Spinner className='ms-1' animation="border" variant="light" />}
                      </MDBBtn>
                      <a className="small text-muted" href="#!">
                        Forgot password?
                      </a>
                      <p className="mb-5 pb-lg-2">
                        New user? Please click here to{' '}
                        <Link to={'/register'} style={{ textDecoration: 'none', color: 'black' }}>
                          Register here
                        </Link>
                      </p>
                    </>
                  )}
                </>
              )}

              <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Auth;



