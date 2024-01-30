import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setProfile } from '../../userSlice';
import axios from 'axios'

const Profile = () => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.user.profile)

    useEffect(()=> {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/api/users/profile', {
                    headers: {
                        Authorization: token
                    }
                });
                dispatch(setProfile(response.data));
            } catch (error) {
                console.log( 'Error fetching profile data:', error )
            }
        }

        fetchProfileData()
    },[dispatch])

    return(
    <>
    
    </>
    )
}