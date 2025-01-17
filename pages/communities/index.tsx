import Link from 'next/link'

import CommunityGrid from '../../components/molecules/CommunityGrid'
import CommunityTile from '../../components/molecules/CommunityTile'
import Main from '../../components/organisms/Main'
import { Entities } from '../../services/collections'
import { collection, useQuery } from '../../services/firestore'

export default function Communities() {
  const query = collection(Entities.Community).limit(10)
  const docs = useQuery(query) || []

  return (
    <Main>
      <CommunityGrid>
        {docs.map(doc => (
          <Link key={doc.id} href={`communities/${doc.id}`}>
            <a>
              <CommunityTile community={doc.data()} />
            </a>
          </Link>
        ))}
      </CommunityGrid>
    </Main>
  )
}
