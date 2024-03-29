import React from 'react';
import Mouse from './Mouse';
import Cat from './Mouse/Cat';



class WithRender extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={(mouse) => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}

export default WithRender;