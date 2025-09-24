import React from 'react'
import Card from '@/components/common/Card' 
const home = () => {
  return (
    <div>
        <h1>
            This is the home page
        </h1>
        <Card title="ALX Intranet" content="Access the ALX intranet for resources and information." link="https://alx-intranet.hbtn.io/" />
    </div>
  )
}

export default home