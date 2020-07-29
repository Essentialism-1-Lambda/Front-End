import React from "react";
import ValueCard from './ValueCard';

// api will be used to pull and render user information, or we can store it into a usercontext
// will be a private route, along with onboarding

export default function UserDashboard() {
    return (
        <div className="dashboard-container">
            {/* I want to display username, values, and projects */}
            <ValueCard />
            {/* <Projects /> */}

        </div>
    )
}