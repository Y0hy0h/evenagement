import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Link from 'next/link'
import { useRouter } from 'next/router'

// import CommunityEdit from '../../../components/CommunityEdit'
import Main from '../../../components/organisms/Main'

export default function Communities() {
  const router = useRouter()
  let id = router.query.id
  if (Array.isArray(id)) {
    id = id[0]
  }

  return (
    <Main>
      <Grid container spacing={1}>
        <Link href="/communities">
          <Button startIcon={<ArrowBackIcon />}>Back to Communities</Button>
        </Link>
      </Grid>
      {/* <CommunityEdit id={id} /> */}
    </Main>
  )
}
