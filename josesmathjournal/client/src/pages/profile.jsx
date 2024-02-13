function Profile({ username, email, points, level }) {
    const pointsPerLevel = 100; // Points required per level
    // Adjusting calculation for pointsToCurrentLevel
    const pointsToCurrentLevel = (level - 1) * pointsPerLevel; // Subtracting 1 from level so level 1 starts at 0 points
    const pointsToNextLevel = level * pointsPerLevel;
    const progress = ((points - pointsToCurrentLevel) / (pointsPerLevel)) * 100; // Simplifying the progress calculation
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
                <h1 className="text-2xl font-bold mb-4">Profile</h1>
                <div className="space-y-4">
                    <p className="text-md"><span className="font-bold">Username:</span> {username}</p>
                    <p className="text-md"><span className="font-bold">Email:</span> {email}</p>
                    <p className="text-md"><span className="font-bold">Points:</span> {points}</p>
                    <p className="text-md"><span className="font-bold">Level:</span> {level}</p>
                    {/* XP Progress Bar */}
                    <div className="relative w-full bg-gray-300 rounded-full h-4 dark:bg-gray-700">
                        <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${Math.max(progress, 2)}%` }}></div>
                        <p className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-sm font-bold">
                            XP: {points - pointsToCurrentLevel}/{pointsToNextLevel - pointsToCurrentLevel}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
