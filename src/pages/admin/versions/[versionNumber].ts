import { GetStaticPropsContext, GetStaticPropsResult, GetStaticPathsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import api from '@/api'
import IVersion from '@/interfaces/IVersion'

interface IGetStaticPropsContext extends ParsedUrlQuery {
  versionNumber: string
}

interface IGetStaticPropsResult {
  version: IVersion
}

export const getStaticProps = async (
  context: GetStaticPropsContext<IGetStaticPropsContext>
): Promise<GetStaticPropsResult<IGetStaticPropsResult>> => {
  const { versionNumber } = context.params as IGetStaticPropsContext
  const version = await api.getVersion(versionNumber)

  return {
    props: { version }
  }
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const versions = await api.getVersions()

  const paths = versions.map((version) => ({
    params: {
      versionNumber: version.number
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export { default } from '@/components/pages/admin/AdminVersionPage'
