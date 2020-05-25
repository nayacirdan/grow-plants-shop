import React from 'react';


const InCartIcon =(props)=> {

    const {inCart} = props;

    return (
        <div className='icon-container'>
            {inCart?
                <svg  className='icon--checked' viewBox="0 -65 424.032 424"  xmlns="http://www.w3.org/2000/svg"><path d="m146.660156 293.367188c-4.09375 0-8.191406-1.558594-11.304687-4.695313l-130.667969-130.667969c-6.25-6.25-6.25-16.382812 0-22.632812s16.382812-6.25 22.636719 0l119.359375 119.359375 250.027344-250.027344c6.25-6.25 16.382812-6.25 22.632812 0s6.25 16.386719 0 22.636719l-261.332031 261.332031c-3.160157 3.136719-7.253907 4.695313-11.351563 4.695313zm0 0"/></svg>

                :null
            }
        </div>
    );
}


export default InCartIcon;