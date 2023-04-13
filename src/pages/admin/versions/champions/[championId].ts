interface IContext {
  params: {
    versionNumber : string
    championId: string
  }
}

export const getStaticProps = async (context: IContext) => {
  const { versionNumber, championId } = context.params
  const response = await fetch(`/api/versions/${versionNumber}/champions/${championId}`)
  const champion = await response.json()

  return {
    props: { champion }
  }
}

export const getStaticPaths = async () => {
  const response = await fetch('/api/versions')
  const versions = await response.json()

  const paths = versions.map(async (version) => {
    const response = await fetch(`/api/versions/${version.number}/champions`)
    const champions = await response.json()

    return champions.map((champion) => ({
      params: {
        versionNumber: version.number,
        championId: champion.id
      }
    }))
  }).flat()

  return {
    paths,
    fallback: false
  }
}

export { default } from '@/components/pages/admin/AdminChampionPage'
