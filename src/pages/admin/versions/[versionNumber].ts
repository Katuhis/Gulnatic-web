interface IContext {
  params: {
    versionNumber : string
  }
}

export const getStaticProps = async (context: IContext) => {
  const { versionNumber } = context.params
  const response = await fetch(`/api/versions/${versionNumber}`)
  const version = await response.json()

  return {
    props: { version }
  }
}

export const getStaticPaths = async () => {
  const response = await fetch('/api/versions')
  const versions = await response.json()

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
