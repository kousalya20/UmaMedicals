import React from 'react'
import Styles from '../css/Footer.module.css'
import {Row,Col,Container} from 'react-bootstrap'
import {ImLocation} from  'react-icons/im'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTwitter,BsInstagram,BsTelephone} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

function Footer() {
  return (
    <div>
        <div className={Styles.footer}>
            <br></br>
            <br></br>
            <p style={{textAlign:"center"}}>&copy; all rights reserved by Uma Medicals</p>
            <br></br>
            <Container>
            <div className={Styles.outline}>
            <Row>
<Col>
            <ul>
                <li style={{fontSize:'25px',fontWeight:'bolder'}}>Quick Links</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
</Col>

<Col>
            <ul>
                <li style={{fontSize:'25px',fontWeight:'bolder'}}>Uma Medicals</li>
                <br></br>
                <Row >
                <Col className={Styles.icons}><BsTwitter size={30}></BsTwitter></Col>
                <Col className={Styles.icons}><BsInstagram size={30}></BsInstagram></Col>
                <Col className={Styles.icons}><BsWhatsapp size={30}></BsWhatsapp></Col>
                <Col className={Styles.icons}><SiGmail size={30}></SiGmail></Col>
                <Col className={Styles.icons}><BsTelephone size={30}></BsTelephone></Col>
                </Row>
                
            </ul>
</Col>

<Col>
<div className={Styles.loc}>
            <Row>

            <Col>
            <ImLocation size={30}  style={{textAlign:'center'}} ></ImLocation>

                <p>7,VenkataKrishna rd,<br/> Gandhi Nagar,<br/> Udumalaipettai, Tamil Nadu 642128</p>
            </Col>
            
          
        </Row>
</div>
</Col>
            </Row>
            </div>



            </Container>
            
        </div>


   
    </div>
  )
}

export default Footer
