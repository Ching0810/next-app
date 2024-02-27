import Link from 'next/link'
import React from 'react'

const NewPage = () => {
  return (
    <>
      <div>NewPage</div>
      <Link href='/users'>back to users page</Link>
    </>
  )
}

export default NewPage