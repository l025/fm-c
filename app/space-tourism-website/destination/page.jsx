import file from '../../../public/space-tourism-website/data.json'
import DestinationContent from './content'

export const metadata = {
  title: 'Pick your destination',
}

export default function DestinationPage() {
  const data = file.destinations

  return (
    <>
      <DestinationContent data={data} />
    </>
  )
}
