import React from "react";
import ValueCard from './ValueCard';
import Projects from './Projects.js';

// api will be used to pull and render user information, or we can store it into a usercontext
// will be a private route, along with onboarding

export default function UserDashboard() {
    return (
        <div className="dashboard-container">
            <div className="dashboard-welcome">
                {/* Welcome {user}. View your values and add/edit your projects */}
            </div>
            <div className="dashboard-values">
                <ValueCard />
            </div>
            <div className="dashboard-projects">
                <Projects />
            </div>

        </div>
    )
}