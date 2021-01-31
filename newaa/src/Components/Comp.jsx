import {React, Component} from 'react';

const Comp = ({onRouteChange}) => {
        return (
           <div> 
                <button onClick= {onRouteChange} className = 'f3 link dim ba ph3 pv2 mb2 dib dark-blue'
                style={{
                   position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}> Lets get Started </button>   
            </div>
        )
}        



export default Comp;