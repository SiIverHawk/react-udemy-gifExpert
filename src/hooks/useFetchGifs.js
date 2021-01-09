import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({ data: [], loading: true })

    useEffect(() => {
        getGifs(category).then(imgs => setState({...state, data: imgs, loading: false}))
    }, [category, state])

    return state
}