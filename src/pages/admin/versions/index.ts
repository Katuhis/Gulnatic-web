export const getStaticProps = async () => {
  const response = await fetch(`/api/versions`)
  const versions = await response.json()
  let destination

  if (versions.length) {
    destination = `/versions/${versions[0].number}`
  } else {
    destination = `/versions/load`
  }

  return {
    redirect: {
      permanent: false,
      destination
    }
  }
}

export { default } from '@/components/pages/admin/AdminVersionsPage'
