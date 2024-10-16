import { useEffect } from "react"
import { useState } from "react"
import JobInfo from "./JobInfo"
import BtnContainer from "./BtnContainer"

const url = "https://www.course-api.com/react-tabs-project"

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])

  const jobData = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    setJobs(data)
    setIsLoading(false)
  }

  useEffect(() => {
    jobData()
  }, [])

  // console.log(jobs)

  if (isLoading) {
    return (
      <main className='jobs-center'>
        <div className='loading'></div>
      </main>
    )
  }

  return (
    <main className='jobs-center'>
      {/*//* button containder */}
      <BtnContainer jobs={jobs} />

      {/*//* job info */}
      <JobInfo jobs={jobs} />
    </main>
  )
}
export default App
