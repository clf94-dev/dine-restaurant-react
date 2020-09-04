import React, {useState} from 'react'

import {useForm} from 'react-hook-form';
import {Grid, Button, TextField} from '@material-ui/core/';
import ErrorMessage from './ErrorMessage'

export default function Form() {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => console.log(values);

    return (
        <div>
            <Grid container direction='row' className="form-cont">
                <Grid item md={6}></Grid>
                <Grid item md={6} direction='column'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name "
                            style={errors.firstName && {
                            borderColor: "red"
                        }}
                            ref={register({required: true, maxLength: 30})}
                            className="first-name input"/>
                        <ErrorMessage error={errors.firstName}/>

                        <input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            style={errors.email && {
                            borderColor: "red"
                        }}
                            ref={register({required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})}className="email-address input"/>
                        <ErrorMessage error={errors.email}/>

                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            className='date-picker'
                            InputLabelProps={{ shrink: true }}
                        />
                         <TextField
                            id="time"
                            label="Birthday"
                            type="time"
                            defaultValue="09:00"
                            className='date-picker'
                            InputLabelProps={{ shrink: true }}
                        />
                        
                            </form>
                            <Button type="submit" onClick={handleSubmit(onSubmit)}>
                                Make Reservation</Button>

                        </Grid>
                    </Grid>
                </div>);
} 