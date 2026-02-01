import InterviewCard from "@/components/InterviewCard"
import { Button } from "@/components/ui/button"
import { dummyInterviews } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"


const page = () => {
  return (
    <>
      <section className="card-cta py-2">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Get Interview Ready with AI powered Practice and Feedback
          </h2>
          <p className="text-lg">
            Level up your career with Prep-Up. Practice real interview questions and get instant feedback.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="interview">
              Begin an interview
            </Link>
          </Button>
        </div>

        <Image src="/cyborg.png" alt="cyborg" width={400} height={400} className="max-sm:hidden"/>


      </section>


      <section className="flex flex-col gap-6 mt-8">
        <h2>Your interviews</h2>

      <div className="interviews-section">
        {/* <p>You haven&apos;t taken any interviews yet.</p> */}
        {dummyInterviews.map((interview:Interview):ReactNode=> {
         return <InterviewCard {...interview} key={interview.id}/>
        })}
      </div>


      </section>



      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>
        <div className="interviews-section">
          {/* <p>There are no interviews available.</p> */}
            {dummyInterviews.map((interview:Interview):ReactNode=> {
         return <InterviewCard {...interview} key={interview.id}/>
        })}
        </div>
      </section>
    </>
  )
}

export default page