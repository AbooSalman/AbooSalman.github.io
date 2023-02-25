import React, { useEffect } from 'react'

const Wrapper = ({ children }) => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <div className="pt-[120px]">{children}</div>
    )
}

export default Wrapper