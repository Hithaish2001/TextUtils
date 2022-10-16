import React from 'react'

function Alert(props) {
  return (
    <div className='h-12'>
      {props.alert && <div className='alertmsg bg-[#AFF9C9]'>
            <strong>{props.alert.type}</strong> : {props.alert.msg}
    </div>}
    </div>
  )
}

export default Alert