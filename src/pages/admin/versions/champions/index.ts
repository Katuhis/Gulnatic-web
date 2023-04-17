import { GetStaticPropsContext, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import api from '@/api'

interface IGetStaticPropsContext extends ParsedUrlQuery {
  versionNumber: string
}

type TGetStaticPropsResult = {
  message: string
}

export const getStaticProps = async (
  context: GetStaticPropsContext<IGetStaticPropsContext>
): Promise<GetStaticPropsResult<TGetStaticPropsResult>> => {
  const { versionNumber } = context.params as IGetStaticPropsContext
  const champions = await api.getChampions(versionNumber)

  if (champions.length) {
    const destination = `/versions/${versionNumber}/champions/${champions[0].id}`

    return {
      redirect: {
        permanent: true,
        destination
      }
    }
  }

  return {
    props: {
      message: 'no champions in this version'
    }
  }
}

export { default } from '@/components/pages/admin/AdminChampionsPage'
