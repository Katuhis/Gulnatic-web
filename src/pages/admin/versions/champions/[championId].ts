import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import api from '@/api'
import IChampion from '@/interfaces/IChampion'

interface IGetStaticPropsContext extends ParsedUrlQuery {
  versionNumber: string
  championId: string
}

interface IGetStaticPropsResult {
  champion: IChampion
}

interface IGetStaticPathsContext {
  params: IGetStaticPropsContext
}

export const getStaticProps = async (
  context: GetStaticPropsContext<IGetStaticPropsContext>
): Promise<GetStaticPropsResult<IGetStaticPropsResult>> => {
  const { versionNumber, championId } = context.params as IGetStaticPropsContext
  const champion = await api.getChampion(versionNumber, championId)

  return {
    props: { champion }
  }
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const versions = await api.getVersions()

  const paths: IGetStaticPathsContext[][] = await Promise.all(
    versions.map(async (version): Promise<IGetStaticPathsContext[]> => {
      const champions = await api.getChampions(version.number)

      return champions.map((champion) => ({
        params: {
          versionNumber: version.number,
          championId: champion.id
        }
      }))
    })
  )

  return {
    paths: paths.flat(),
    fallback: false
  }
}

export { default } from '@/components/pages/admin/AdminChampionPage'
