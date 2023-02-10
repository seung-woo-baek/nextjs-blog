import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useState } from 'react'

export default function MyInfo() {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <h1 className="title">My Info</h1>
    </>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
