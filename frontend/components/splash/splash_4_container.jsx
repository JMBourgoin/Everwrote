import React from 'react';
import SignUpContainer from '../session/signup2_container';

export const Splash4Container = () => {
    return (
        <div className="splash4-outer-container">
            <div className="splash4-inner-container">
                <div>
                    <h3 className="sb1">Sign up for Everwrote Today</h3>
                    <h6 className="sb2">Capture ideas and inspiration from anywhere and manage tasks with ease.</h6>
                </div>
                <SignUpContainer className="bottom-signup" />
            </div>
        </div>
    )
}