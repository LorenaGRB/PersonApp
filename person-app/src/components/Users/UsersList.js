import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = (props) => {

    return (
        <Card className={classes.Users}>
            <ul>
                {props.users.map( user => {
                    <li>
                        {user.name} ({user.age} tears old)
                    </li>
                })}
            </ul>
        </Card>
    )

}

export default UsersList