import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        inputValue.trim().length > 0  && setCategory(cats => [inputValue, ...cats])
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory
