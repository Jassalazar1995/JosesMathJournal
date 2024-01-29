function Profile({ username, email, points, level  }) {
    console.log(username)
    return ( 
        
        <div className = "flex justify-center items-center h-screen bg-gray-100">
            <div>
            <h1>Profile</h1>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>points: {points} </p>
            <p>level: {level} </p>
            </div>
        </div>
        
     );
}

export default Profile;