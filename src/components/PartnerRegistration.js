import React, { useEffect, useState } from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import axios from 'axios';
import swal from 'sweetalert';

const PartnerRegistration = () => {

    const [partnerdetails , setPartnerDetails] = useState({
        name : '',
        phone : '',
        email : '',
        state : '',
        district : '',
        city : '',
        pin : '',
        landmark : '',
        profession : '',
        office_setup : '',
        message : ''
    });

    const [error , setError] = useState({
        name : '',
        phone : '',
        email : '',
    });

    const [result , setResult] = useState(false);

    const onInputChange = (e) => {
        setPartnerDetails({
            ...partnerdetails , [e.target.name] : e.target.value 
        });
    }

    const signUp = async () => {
        setResult(true);
        setError({
            name : '',
            phone : '',
            email : '',
        });
        await axios.post(`/api/partner-registration`,partnerdetails).then((res) => {
            //console.log(res.data.message.email);
            if(res.data.status == 200)
            {

                swal("Success!", res.data.message, "success");

                setPartnerDetails({
                    name : '',
                    phone : '',
                    email : '',
                    state : '',
                    district : '',
                    city : '',
                    pin : '',
                    landmark : '',
                    profession : '',
                    office_setup : '',
                    message : ''
                });
            }
            else if(res.data.status == 404)
            {
                setError(res.data.message);
            }
            else if(res.data.status == 400)
            {
                swal("Oops!", res.data.message, "error");
            }
        });
        setResult(false);
    }

    return (
    <>
    <Header />

    <section className="form-section">
    <div className="container">
        <div className="row">
        <div className="col-md-12">
            <div className="form-module">
            <h2 className="text-center">Partner Registration Form</h2>
            <form>
        <div className="form-row">
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">Name <span className="error">*</span></label>
                <div className="col-md-9">
                <input type="text" className="form-control" name="name" value={partnerdetails.name} 
                onChange={(e) => onInputChange(e)} placeholder="Enter Your Name" autoComplete='off' />
                <span className="text-danger">{error.name}</span>
                </div>
            </div>
            </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">Phone no <span className="error">*</span></label>
                <div className="col-md-9">
                <input type="number" className="form-control" name="phone" value={partnerdetails.phone} 
                onChange={(e) => onInputChange(e)} placeholder="Enter Your Mobile No" autoComplete='off' />
                <span className="text-danger">{error.phone}</span>
                </div>
            </div>
            </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
            <label className="col-md-3 col-form-label">Email <span className="error">*</span></label>
            <div className="col-md-9">
                <input type="email" className="form-control" placeholder="Enter Your Email ID" name="email" 
                value={partnerdetails.email} onChange={(e) => onInputChange(e)} autoComplete='off' />
                <span className="text-danger">{error.email}</span>
            </div>
            </div>
        </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">State</label>
                <div className="col-md-9">
                <select className="form-control" name="state" value={partnerdetails.state} 
                onChange={(e) => onInputChange(e)}>
                <option value="">Select your state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh ">Arunachal Pradesh </option>
                <option value="Andaman and Nicobar">Andaman and Nicobar</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Haryana">Haryana</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                </select>
                </div>
            </div>
        </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">District</label>
                <div className="col-md-9">
                <input type="text" className="form-control" placeholder="Enter Your District" name="district" 
                value={partnerdetails.district} onChange={(e) => onInputChange(e)} autoComplete='off' />
                </div>
            </div>
        </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">city</label>
                <div className="col-md-9">
                <input type="text" className="form-control" placeholder="Enter Your City" name="city" 
                value={partnerdetails.city} onChange={(e) => onInputChange(e)} autoComplete='off' />
                </div>
            </div>
        </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">PIN</label>
                <div className="col-md-9">
                <input type="text" className="form-control" placeholder="Enter Your PIN" name="pin" 
                value={partnerdetails.pin} onChange={(e) => onInputChange(e)} autoComplete='off' />
                </div>
            </div>
        </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">Landmark</label>
                <div className="col-md-9">
                <input type="text" className="form-control" placeholder="Enter Your Landmark" name="landmark" 
                value={partnerdetails.landmark} onChange={(e) => onInputChange(e)} autoComplete='off' />
                </div>
            </div>
        </div>
        </div>

        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">Profession</label>
                <div className="col-md-9">
                <select className="form-control" name="profession" 
                value={partnerdetails.profession} onChange={(e) => onInputChange(e)}>
                    <option value=''>Select</option>
                    <option value="Business">Business</option>
                    <option value="Salaried">Salaried</option>
                </select>
                </div>
            </div>
            </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">Have any office set up?</label>
                <div className="col-md-9">
                <select className="form-control" name="office_setup"
                value={partnerdetails.office_setup} onChange={(e) => onInputChange(e)}>
                    <option value=''>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                </div>
            </div>
            </div>
        </div>
        <div className="col-6">
            <div className="form-group">
            <div className="row">
                <label className="col-md-3 col-form-label">Description</label>
                <div className="col-md-9">
                <textarea className="form-control" name="message" 
                value={partnerdetails.message} onChange={(e) => onInputChange(e)} rows="6" autoComplete='off'></textarea>
                </div>
            </div>
            </div>
        </div>
        <div className="col-12">
            <button className="btn btn-success btn-lg" type="button" onClick={signUp}>
            {
                result ? 'Submitting' : 'Submit'
            }
            </button>
        </div>
        
        </div>
    </form>
            </div>
        </div>
        </div>
    </div>
    </section>

    <Footer />
    </>
    );
}

export default PartnerRegistration;