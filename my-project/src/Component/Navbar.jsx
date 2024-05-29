import React from 'react'


function Navbar() {
    return (
        <>
            <div className='main'>
                <div className='logo'>
                    <p className='mentor'>Dcode</p>
                    <span className='path'>PATHSHALA</span>
                </div>
                <div className='home'>
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <select>
                        <option>Features</option>
                        <option>College's Details</option>
                        <option>School's Details</option>
                        <option>Dcode 360</option>
                        <option>Exams</option>
                        <option>Counnselling Plans</option>
                    </select>
                </div>
                <div className='social'>
                    <p>Follow Us</p>
                    <a href="https://www.facebook.com/profile.php?id=61559054327553" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/company/dcode-pathshala/" target="_blank">
                        <i class="fa-brands fa-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/dcodepathshala/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCmw8gV545IIVgWnk0mzDRrw" target="_blank">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
