import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import "../App.css";


const About = () => {
    const {id} = useParams(); 
    const [data, setData] = useState('');

        useEffect( () => {
            getUser();
        }, []);



        const getUser = async () => {
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(response => response.json())
            .then(data => setData(data));   
        }
    return (
        
        <div>
          {data!==''?
           <div className="aboutUser" >
            <h3>-name:{data.name}</h3>
            <h3>-username:{data.username}</h3>
            <h3>-email:{data.email}</h3>
            <h3>-phone:{data.phone}</h3><h3>-website:{data.website}</h3>
            <h3>-company:{data.company.name}</h3>
            <h3>-address:</h3>
                <ul>
                    <li><h4>street:{data.address.street}</h4></li>
                    <li><h4>suite:{data.address.suite}</h4></li>
                    <li><h4>city:{data.address.city}</h4></li>
                    <li><h4>zipcode:{data.address.zipcode}</h4></li>
                    </ul>
            </div>
            :
            null
    }
            
                
           
        </div>
    )
}

export default  About;