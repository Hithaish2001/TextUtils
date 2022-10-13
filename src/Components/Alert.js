import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className='alertmsg bg-[#AFF9C9]'>
            <strong>{props.alert.type}</strong> : {props.alert.msg}
    </div>
  )
}

export default Alert