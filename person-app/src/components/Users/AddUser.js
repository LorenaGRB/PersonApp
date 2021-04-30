import React, { useState , useRef} from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import Wrapper from '../Helpers/Wrapper'
const AddUser = (props) => {
    //refs
    const refNameEntered = useRef()
    const refAgeEntered = useRef()

    //states
    const [ error , seterror ] = useState('');

    //Close the error modal
    const errorHandler = () => {
        seterror(null);
    }

    //Click on submit
    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredNameFromRef = refNameEntered.current.value;
        const enteredAgeFromRef = refAgeEntered.current.value;

        if( enteredNameFromRef.trim().length === 0 || enteredAgeFromRef.trim().length === 0){
            seterror({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return
        }
        if( +enteredAgeFromRef < 1 ){
            seterror({
                title: 'Invalid input',
                message: 'Please enter a valid age.'
            })
            return;
        }
        props.onAddUser( enteredNameFromRef,enteredAgeFromRef )
        refNameEntered.current.value=''
        refAgeEntered.current.value=''
    }

    return(
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} closeModal={errorHandler}/> }
            <Card className = { classes.input }>
                <form onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Username" ref={refNameEntered}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="text" placeholder="Age" ref={refAgeEntered}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser
