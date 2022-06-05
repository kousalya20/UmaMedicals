import React, {useState,useEffect} from 'react'
import firebase from '../firebase'
import { Card, Col, Row,Button, Container } from 'react-bootstrap';
import Styles from '../css/Home.module.css'
import Bg from '../Images/bg.png'
const { Meta } = Card;
function Home() {
    const [categories , setCategories] = useState([]);
    const refThree = firebase.firestore().collection("meds");

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
            <img src={Bg} width={1519} alt="Background"></img>
            <Container>
          <br/> <h1 style={{textAlign: 'center'}}>PICK DEMANDS</h1>
             <Row>  
                {categories.map((category)=>(
                    <Col >
                    <div className={Styles.card} key={category.key}>
                   
                       <a href={category.path}><img src={category.img} alt={category.name} width={250}/><br/><br/></a>
                   <h1>{category.name}</h1>
                   <p>{category.desc}</p>
                    
                    </div>
                    </Col>  
             ))}      
        </Row>
        </Container>
        </div>
    )
}

export default Home