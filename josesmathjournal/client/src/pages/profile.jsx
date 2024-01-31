function Profile({ username, email, points, level }) {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <div className="space-y-2">
                    <p className="text-md"><span className="font-bold">Username:</span> {username}</p>
                    <p className="text-md"><span className="font-bold">Email:</span> {email}</p>
                    <p className="text-md"><span className="font-bold">Points:</span> {points}</p>
                    <p className="text-md"><span className="font-bold">Level:</span> {level}</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;