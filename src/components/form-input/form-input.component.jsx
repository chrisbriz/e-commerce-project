import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handlChange, label, ...otherProps }) => (
    <div className='group'>
        <input
            type='text'
            className='form-input'
            onChange={handlChange}
            {...otherProps}
        />
        {
            label ? (
                <label
                    className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
    </div>
)

export default FormInput;