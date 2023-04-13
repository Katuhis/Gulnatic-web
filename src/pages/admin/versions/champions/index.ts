interface IContext {
  params: {
    number : string
  }
}

export const getStaticProps = async (context: IContext) => {
  const { versionNumber } = context.params
  const response = await fetch(`/api/versions/${versionNumber}/champions`)
  const champions = await response.json()

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
    props: {}
  }
}

export { default } from '@/components/pages/admin/AdminChampionsPage'
