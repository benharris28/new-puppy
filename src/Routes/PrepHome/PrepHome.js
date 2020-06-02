import React from 'react';

class PrepHome extends React.Component {
    render() {
        return (
            <div>
                <h1>Prepare your home</h1>
                <div>
                    Main content section
                </div>
                <div className="next-checkpoint-box">
                    <button>
                        Mark Complete
                    </button>
                    <button>
                        Up next: Pick up pup
                    </button>
                </div>
            </div>
        )
    }
}

export default PrepHome;