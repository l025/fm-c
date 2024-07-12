import file from '../../../public/space-tourism-website/data.json'
import CrewContent from './content'

export const metadata = {
  title: 'Space lunch 101',
}

export default function CrewPage() {
  const data = file.technology

  return (
    <>
      <CrewContent data={data} />
    </>
  )
}
