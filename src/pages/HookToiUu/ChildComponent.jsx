import React, { memo } from 'react'

const ChildComponent = (props) => {

    console.log("child render")


  return (
    <div>
          <h2>ChildComponent</h2>
        {/* <p>Like: {props.like}</p> */}
          {props.renderLike()}
    </div>
  )
}

// export default memo(ChildComponent)
export default ChildComponent