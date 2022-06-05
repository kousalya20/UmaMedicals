import React, {useState,useEffect} from 'react'
import firebase from '../../firebase'
import { Card, Col, Row,Button, Container } from 'react-bootstrap';
import Styles from '../../css/Categories.module.css'
const { Meta } = Card;
function Home() {
    const [categories , setCategories] = useState([]);
    const refThree = firebase.firestore().collection("Devices");

    useEffect(()=>{
        function getCategories() {
            refThree.onSnapshot((querySnapshot)=>{
                const ctgs = [];
                querySnapshot.forEach((doc)=>{
                    ctgs.push(doc.data());
                });
                
            setCategories(ctgs);
            });
        }  
            getCategories();
    },[])
   
    return (
        <div>
            <Container>
          <br/> <h1 style={{textAlign: 'center'}}>DEVICES</h1>
             <Row>  
                {categories.map((category)=>(
                    <Col >
                    <div className={Styles.card} key={category.key}>
                   
                       <img src={category.img} alt={category.name} width={250}/><br/><br/>
                   <h1>{category.name}</h1>
                   <h4>&#8377; {category.price}</h4>
                   <Button className={Styles.btn}>Add to Cart</Button>
                 
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1fc4da" fill-opacity="1" d="M0,288L80,245.3C160,203,320,117,480,112C640,107,800,181,960,186.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

                    </div>
                    </Col>  
             ))}      
        </Row>
        </Container>
        </div>
    )
}

export default Home