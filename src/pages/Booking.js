
import React from 'react'
import sidephoto from '../images/hotel.svg'
import { useState } from 'react'
// import './Booking.css'

const Booking = () => {
    const [useData, setUserData] = useState(
        {
            customerName: ""
            , email: ""
            , PhoneNo: ""
            , StartDate: ""
            , EndDate: ""
            , People: ""
        }

    );
    let name, value;
    const postuserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...useData, [name]: value });

    };

    const submitData = async (event) => {
        event.preventDefault();
        const {customerName
            , email
            , PhoneNo
            , StartDate
            , EndDate
            , People} = useData;

        if (customerName
            && email
            && PhoneNo
            && StartDate
            && EndDate
            && People) {
            const res = await fetch("https://beatch-resto-default-rtdb.firebaseio.com/userDataRecord.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        customerName
                        , email
                        , PhoneNo
                        , StartDate
                        , EndDate
                        , People
                    }),
                }
            );
            if (res) {
                setUserData({
                    customerName: ""
                    , email: ""
                    , PhoneNo: ""
                    , StartDate: ""
                    , EndDate: ""
                    , People: ""
                });
                alert("Booking Successfully...");
            }
        } else {
            alert("Please fill all details !!");
        }
    }

    return (
        <>
            <div className='container'>
                <div className='container-sidephoto'>
                    <img src={sidephoto}></img>
                </div>
                 <div className='container-form'>
                    <form method="POST">
                        <h2 class="heading heading-yellow">Book Your Room...</h2>
                        <div className='form-field'>
                            <p>Your Name : </p>
                            <input type='text' name='customerName' placeholder='Enter your name ' required value={useData.customerName} onChange={postuserData}></input>
                        </div>
                        <div className='form-field'>
                            <p>Your Email : </p>
                            <input type='text' name='email' placeholder='Enter your Email ' value={useData.email} onChange={postuserData}></input>
                        </div>
                        <div className='form-field'>
                            <p>Phone No: </p>
                            <input type='tel' name='PhoneNo' maxlength="10" required value={useData.PhoneNo} onChange={postuserData}></input>
                        </div>
                        <div className='form-field'>
                            <p>Start Date : </p>
                            <input type='date' name='StartDate' required value={useData.StartDate} onChange={postuserData}></input>
                        </div>
                        <div className='form-field'>
                            <p>End Date : </p>
                            <input type='date' name='EndDate' required value={useData.EndDate} onChange={postuserData}></input>
                        </div>
                        <div className='form-field'>
                            <p>How many People : </p>
                            <select name='People' id='#' required value={useData.People} onChange={postuserData}>
                                <option value='1'>1 person</option>
                                <option value='2'>2 person</option>
                                <option value='3'>3 person</option>
                                <option value='4'>4 person</option>
                                <option value='5'>5 person</option>
                                <option value='6'>6 person</option>
                                <option value='7'>7 person</option>
                                <option value='8'>8 person</option>
                                <option value='9'>9 person</option>
                                <option value='10'>10 person</option>
                            </select>
                        </div>
                        <button type="submit" className='btn' onClick={submitData}>Submit</button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Booking;