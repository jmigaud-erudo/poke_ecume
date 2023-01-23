import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {CustomTextField} from "./component/CustomTextField";
import Select from "react-select";
import {Button, Grid, TextField, Typography} from "@mui/material";
const validationSchema = Yup.object().shape({
    year: Yup.number()
        // .max(2030, "Valeur top haute")
        // .min(1, "Valeur top basse")
        .required("Ce champ est obligatoire"),
});

const initialValues = { year: 2020 };

export function CarView({marks, car, handleSubmit, handleChange}) {
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}
                validationSchema={validationSchema}>
            {({values, errors, setFieldValue, setFieldTouched,
                  touched}) => (
                <Form>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Année "
                                value={values.year}
                                name="year"
                                />
                            <ErrorMessage name="year"
                                          component="div"
                                          className="invalid-feedback"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Select
                                options={marks}
                                onChange={handleChange}
                                name="mark"
                                value={marks.filter(function(mark) {
                                    return mark.value === values.mark;
                                })}
                                label="Marque de voiture"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" type="submit">Valider</Button>
                        </Grid>
                        <Grid item xs={12}>
                            Résultat voiture : {JSON.stringify(car)}
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>

    )
}