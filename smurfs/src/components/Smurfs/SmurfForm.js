import React, { useState } from 'react';

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({});

    const handleChanges = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = props => {

    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>
                    Name:
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={smurf.name}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor='name'>
                    Name:
                    <input
                        type='text'
                        id='age'
                        name='age'
                        value={smurf.age}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor='height'>
                    Name:
                    <input
                        type='text'
                        id='height'
                        name='height'
                        value={smurf.height}
                        onChange={handleChanges}
                    />
                </label>
                <button>Add Smurf</button>
            </form>
        </>
    )
}