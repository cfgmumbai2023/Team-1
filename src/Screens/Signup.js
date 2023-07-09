import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../Components/Assets/jeet.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import { Dropdown } from 'bootstrap/dist/js/bootstrap.bundle';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

export default function Signup() {
    const [credentials, setcredentials] = useState({firstname:"",lastname:"", email:"", password:"", UDISE:""});


    const handleSubmit =async(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({firstname:credentials.firstname, lastname:credentials.lastname, email:credentials.email, password:credentials.password, UDISE:credentials.UDISE}))
        const response = await fetch("http://localhost:5000/add_user",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({firstname:credentials.firstname, lastname:credentials.lastname, email:credentials.email, password:credentials.password, UDISE:credentials.UDISE})
        });
        const json = await response.json()
        console.log(json);
           console.log(json.success);
        if(!json.success)
        {
            alert("Enter Valid Credentials");
        }
    }

    const handleChange = (event) =>{
        setcredentials({...credentials, [event.target.name]:event.target.value})
    }


  return (
    <Carousel showThumbs={false} className="custom-carousel">
      {/* ...carousel slides... */}

      <div>
       
        <div className='container-fluid'>
          <section className="text-black">
            <div className="container h-80">
            <div className="row d-flex justify-content-center align-items-center h-60" style={{minWidth:"100%"}}>
      <div className="col-lg-10 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
              <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                {/* ...form fields... */}
                <div className="d-flex flex-row align-items-center mb-2">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="form3Example1c"
                      className="form-control"
                      name='firstname'
                      value={credentials.firstname}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form3Example1c">
                      First Name
                    </label>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="form3Example1c"
                      className="form-control"
                      name='lastname'
                      value={credentials.lastname}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form3Example1c">
                      Last Name
                    </label>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="email"
                      id="form3Example3c"
                      className="form-control"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form3Example3c">
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                </div>

                </div>



                <div className="d-flex flex-row align-items-center mb-2">
                  <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="password"
                      id="form3Example4c"
                      className="form-control"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form3Example4c">
                      Password
                    </label>
                  </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <input
                      type="text"
                      id="form3Example1c"
                      className="form-control"
                      placeholder='For student only'
                      name='UDISE'
                      value={credentials.UDISE}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form3Example1c">
                      UDISE
                    </label>
                  </div>
                </div>

                <div className="form-check d-flex justify-content-center align-items-center">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                      Content Creator
                  </label>
                </div>

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button type="submit" className="btn">
                    Register
                  </button>
                  <Link to="/login" className='m-3 btn btn-lg btn-danger '>Already a User?</Link>
                  </div>

                </form>

              </div>
              <div class="col-md-9 col-lg-6 col-xl-5">
        <img src={image}
          class="img-fluid shadow-4-strong" alt="Sample image" style={{borderRadius: "10%", minHeight:"60vh", minWidth:"30vh"}}/>
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

    </div>
    </div>

    </Carousel>
  );
}

