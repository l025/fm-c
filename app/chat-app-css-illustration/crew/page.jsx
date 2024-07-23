import file from '../../../public/space-tourism-website/data.json'
import CrewContent from './content'

export const metadata = {
  title: 'Meet your chrew',
}

export default function CrewPage() {
  const data = file.crew

  return (
    <>
      <CrewContent data={data} />
    </>
  )
}
