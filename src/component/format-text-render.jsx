import React, { useEffect, useState } from 'react'

import { formatText } from '../../hooks/useHelper'

const FormatTextRender = ({data, len}) => {
    
    const [textString, setTextString] = useState("")

    useEffect(() => {
       
        if(data) 
        setTextString(formatText(data, len))

    }, [data])

  return (
    <div>{textString}</div>
  )
}

export default FormatTextRender