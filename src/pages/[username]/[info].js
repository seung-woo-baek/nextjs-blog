import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';

export default function UsernameInfo() {
  const router = useRouter();
  const {username, info} = router.query;
  return (
    <>
      <h1 className="title">{username}'s {info}</h1>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
// 대괄호를 두개로 묶어 줌으로 slug 값이 없더라도 빈값으로 들어올 수 있게 해준다.
// 대괄호를 한개로 묶을 경우 404