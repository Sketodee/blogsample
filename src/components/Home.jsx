import React from 'react'
import SuccessBadge from './SuccessBadge'

const Home = () => {

// const onCancelClick = () => {
//   console.log("working")
// }

  return (
    <SuccessBadge message={"Thank You"} color={"#FF0000"} showIcon={false} onCancelClick={true}/>

  )
}

export default Home