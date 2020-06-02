import React from 'react';

class PickUpPup extends React.Component {
    render() {
        return (
            <div>
                <h1>Pick Up Pup</h1>
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

export default PickUpPup;