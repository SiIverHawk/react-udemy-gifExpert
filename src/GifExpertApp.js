import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Shingeki no Kyojin'])
    // setCategories(cats => [...cats, 'Shingeki no Kyojin'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories} />
            <hr />
            {categories.map(category => (
                    <GifGrid 
                    key={category}
                    category={category} />
                ))
            }
            <ul></ul>
        </>
    )
}

export default GifExpertApp
