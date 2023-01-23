import React, {useEffect, useState} from 'react';
import {CarView} from "./CarView";
import {Card, CardContent, Grid, Paper} from "@mui/material";

let initialMark = [
    { value:'1', label: 'Ferrari' },
    { value:'2', label: 'Porsche'},
    { value:'3', label: 'Renault'},
    { value:'4', label: 'Citroen'},
    { value:'5', label: 'Lamborghini'},
    { value:'6', label: 'Peugeot'},
    { value:'7', label: 'Jeep'},
    { value:'8', label: 'BMW'},
    { value:'9', label: 'Mercedes'},
];

export function Car() {
    const [marks, setMarks] = useState([]);
    const [car, setCar] = useState({
        year: null,
        mark: null
    })

    const handleSubmit = async (values) => {
        setCar({
            ...car,
            year: values.year
        });
    };


    const handleChange = async (event) => {
        event.preventDefault();
        setCar({
            ...car,
            mark: event.value
        });
    }

    useEffect(() => {
        // setMarks(  [
        //     ...marks,
        //     initialMark // and one new item at the end
        // ])
        setMarks(initialMark);
    }, [])

    return(
        <Grid container rowSpacing={2}>
            <Grid item xs={4} />
            <Grid item xs={4}>
                <Paper elevation={3} className="content">
                    <CarView marks={marks} car={car}
                             handleChange={handleChange}
                             handleSubmit={handleSubmit}></CarView>
                </Paper>
            </Grid>
            <Grid item xs={4} />
        </Grid>
    );
}