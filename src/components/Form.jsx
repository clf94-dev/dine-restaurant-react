import React, {useState} from 'react'

import {useForm} from 'react-hook-form';
import {Grid, Button, TextField} from '@material-ui/core/';
import ErrorMessage from './ErrorMessage'

import './styles/App.css'

export default function Form() {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => console.log(values);
    const [people, setPeople] = useState(2);

    const handlePeoplePicker = (e) => setPeople(e.target.value);

    return (
        <div>
            <Grid container direction='row' className="form-cont" data-aos="fade-left" data-aos-duration="1500">
                <Grid item md={6}></Grid>
                <Grid item md={6} direction='column' className='form-col'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Name "
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
                        <Grid container direction='row' className='date'>
                            <Grid item md={5} xs={12}>
                                <label className='pick-label'>
                                    Pick a Date</label>
                            </Grid>
                            <Grid item md={7} xs={12}><TextField
                                id="date"
                                label="Date"
                                required
                                type="date"
                                name='date'
                                defaultValue="--"
                                style={errors.date && {
            borderColor: "red"
        }}
                                ref={register({required: true, pattern: /^[0-9]/i})}
                                className='date-picker'
                                InputLabelProps={{
            shrink: true
        }}/>
                                <ErrorMessage error={errors.date}/></Grid>
                        </Grid>

                        <Grid container direction='row' className='date'>
                            <Grid item md={5} xs={12}>
                                <label className='pick-label'>
                                    Pick a Time</label>
                            </Grid>
                            <Grid item md={7} xs={12}>
                                <TextField
                                    id="time"
                                    label="Time"
                                    required
                                    type="time"
                                    name='time'
                                    defaultValue=":"
                                    className='date-picker'
                                    style={errors.time && {
                                    borderColor: "red"
                                }}
                                    ref={register({required: true, pattern: /^[0-9]/i})}
                                    InputLabelProps={{
                                    shrink: true
                                }}/>
                                <ErrorMessage error={errors.time}/></Grid>

                            <TextField
                                id="standard-number"
                                label="Nº of People"
                                value={people}
                                onChange={handlePeoplePicker}
                                type="number"
                                className='people-picker'
                                InputLabelProps={{
                                shrink: true
                            }}
                                margin="normal"/>
                        </Grid>

                    </form>
                    <Button type="submit" onClick={handleSubmit(onSubmit)}>
                        Make Reservation</Button>

                </Grid>
            </Grid>
        </div>
    );
}