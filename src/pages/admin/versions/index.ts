import { GetStaticPropsResult } from 'next'
import api from '@/api/admin'

type TGetStaticPropsResult = {
  redirect: {
    permanent: boolean
    destination: string
  }
}

export const getStaticProps = async (
): Promise<GetStaticPropsResult<TGetStaticPropsResult>> => {
  const versions = await api.getVersions()
  let destination

  if (versions.length) {
    destination = `/admin/versions/${versions[0].number}`
  } else {
    destination = '/admin/versions/load'
  }

  return {
    redirect: {
      permanent: false,
      destination
    }
  }
}

export { default } from '@/components/pages/admin/AdminVersionsPage'
