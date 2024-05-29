import React from 'react'
import img from "./img1.jpeg"
import img1 from "./img2.jpeg"
import img2 from "./img3.jpeg"
import img3 from "./img4.jpeg"
import img4 from "./img5.jpeg"
import img5 from "./img6.jpeg"

function Banner() {
    return (
        <>
            <div className='banner'>
                <div className='first'>
                    <div className='c'></div>
                    <h1 className='we'>
                        We Help People <br /> Connect With Their <br /> Right Teachers.
                    </h1>
                    <p className='para'>
                        We have the right study plans for any job we will provide you  <br /> the right feture and help you connect with them <br />easily get job effectively
                    </p>
                    <div className='s1'>
                        <div className='help'>
                            <span className=''>Notify Me</span>
                            <div className='g'><span> <i class="fa-solid fa-chevron-right"></i> </span></div>
                        </div>
                        <div className='helps'>
                            <span className=''>Email</span>
                            <span><i class="fa-solid fa-envelope"></i></span>
                        </div>
                        <div className='n'></div>
                    </div>
                    
                </div>

                <div className='second'>
                    <div className='two-img'>
                        <img className='img1' src={img} alt="" />
                        <img className='img2' src={img1} alt="" />
                    </div>
                    <p className='c1'></p>

                    <div className='two-img'>
                        <img className='img5' src={img2} alt="" />
                        <img className='img3' src={img3} alt="" />
                    </div>
                    <div className='two-img'>
                        <img className='img6' src={img4} alt="" />
                        <img className='img7' src={img5} alt="" />
                    </div>

                </div>
            </div>
            {/* <div className='third'>
                <div className='b1'>
                    <img className='nam' src="https://img.freepik.com/premium-photo/ginger-student-with-freckles-eyeglasses-pointing-yellow-free-space-near-her-with-finger-embracing-some-books_129180-5540.jpg" alt="" />
                </div>
                <div className='b2'>
                    <p className='x'> Find Your Study Plans</p>
                    <p className='y'> Stay connected with a monthly or yearly subscription.</p>
                    <br />
                    <br />
                    <div className='x1'>
                        <div className='d1'>
                            <i class="fa-solid fa-envelope-open-text"></i>
                        </div>
                        <div className='d2'>
                            <p className='ringa'>Ring or message your sir anytime.</p>
                            <p className='to'>We have the right  for any job,we will find you to connect with them easily.</p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className='y1'>
                        <div className='d1'>
                            <i class="fa-solid fa-address-book"></i>
                        </div>
                        <div className='d2'>
                            <p className='ringa'>Become a teacher and help out people.</p>
                            <p className='to'>We have the right study plans for any job,we will find you to get a job with them easily.</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='b3'>
                <p>College's Detail</p>
            </div>
            <div className='b9'>
                <p>Counselling Plans</p>
            </div>
            <div className='b10'>
                <p>Decode 360</p>
            </div>
            <div className='b5'>
                <p className='es'>Easy Methods </p>
                <p className='av'>Available helps even <br />through video calls</p>
            </div>
            <div className='b6'>
                <p className='set'><i class="fa-solid fa-video"></i></p>
            </div>
            <div className='b7'>
                <div className='div1'>
                    <div className='ni'>
                        <img className='nit' src="https://marketplace.canva.com/EAFdt9tY_fo/1/0/1600w/canva-blue-modern-business-man-facebook-profile-picture-Kq2gJmFD2wM.jpg" alt="" />
                        <div className='l'>
                            <h3 className='p'>Allen John</h3>
                            <span>UI/UX Mentor</span>
                        </div>
                    </div>
                </div>
                <div className='div2'></div>
                <div className='b8'>
                    <p className='set'><i class="fa-solid fa-phone"></i> Call</p>
                </div>
            </div> */}
        </>
    )
}

export default Banner
