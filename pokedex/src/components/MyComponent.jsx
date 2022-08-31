import React, { useState, useEffect } from 'react';
import API from './../config/api'

export const MyComponent = (props) => {
    const {name, setName} = props
    const [trainer, setTrainer] = useState([{
       nombre: 'paul' 
    }])

    console.log(name)
    useEffect(() => {
        console.log('testing')
        getTrainers()
    }, [])

    setName('Messi')
    const getTrainers = async () => {
        const entrenador = await API.get('/entrenador');
        const { data } = entrenador
        setTrainer(data.trainers)
        console.log('Testing', trainer)
    };

    return (
        <div>
            <h1>Hello World {trainer[0]?.nombre}</h1>
        </div>
    )
}