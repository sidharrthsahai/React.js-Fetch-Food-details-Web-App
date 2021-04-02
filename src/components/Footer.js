import React from 'react'
import { Card, CardBody } from "reactstrap";
import styles from "../modules/Footer.module.css";

const Footer = () => {
    return (
           
        <div>  
             <br></br>
             <br></br>
             <br></br>  
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
                     
            <Card className = {styles.colour}>
                <CardBody>
                    <h6 className = "text-center my-3">2021 Copyright &copy; Evocco, Inc. </h6>
                </CardBody>
            </Card>  
        </div>
    )
}

export default Footer