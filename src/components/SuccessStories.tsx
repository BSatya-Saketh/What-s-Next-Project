import { useState } from 'react'

interface SuccessStory {
  id: string
  name: string
  career: string
  education: string
  currentRole: string
  company?: string
  story: string
  advice: string
  image?: string
}

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null)

  const stories: SuccessStory[] = [
    {
      id: "1",
      name: "Priya Sharma",
      career: "Computer Science Engineering",
      education: "B.Tech from IIT Delhi",
      currentRole: "Senior Software Engineer",
      company: "Google",
      story: "After completing my 12th grade with PCM, I was confused between engineering and medicine. My parents suggested I explore both fields. I attended career counseling sessions and discovered my passion for programming during a summer workshop. I prepared for JEE and secured admission at IIT Delhi. The journey was challenging, but the support from my family and mentors kept me going.",
      advice: "Don't be afraid to explore different fields before making a decision. Take up internships and workshops to understand what truly interests you. Hard work combined with the right guidance can take you places."
    },
    {
      id: "2",
      name: "Rahul Verma",
      career: "MBBS",
      education: "MBBS from AIIMS New Delhi",
      currentRole: "Cardiologist",
      company: "AIIMS Delhi",
      story: "I always wanted to serve people, and medicine seemed like the perfect path. The NEET preparation was intense - studying for 12-14 hours daily for two years. But the feeling of saving lives makes it all worth it. My journey from a small town to AIIMS taught me that determination knows no bounds.",
      advice: "Medical field requires immense dedication and patience. Focus on understanding concepts rather than rote learning. Stay consistent with your preparation and never lose sight of your goal."
    },
    {
      id: "3",
      name: "Ananya Patel",
      career: "CA (Chartered Accountancy)",
      education: "B.Com + CA",
      currentRole: "Finance Manager",
      company: "Deloitte",
      story: "I wasn't sure about my career path after 12th commerce. I started with B.Com and simultaneously began CA preparation. It took me 5 years to clear all CA levels, with multiple failures along the way. But each failure taught me something new. Today, I lead a team at one of the Big 4 firms.",
      advice: "Professional courses like CA test your patience. Don't let failures discourage you. Learn from them and come back stronger. Consistency and perseverance are key to success."
    },
    {
      id: "4",
      name: "Vikram Singh",
      career: "MBA",
      education: "B.Tech + MBA from IIM Ahmedabad",
      currentRole: "Product Manager",
      company: "Microsoft",
      story: "After engineering, I realized I was more interested in business strategy than coding. I worked for 2 years to gain industry experience, then prepared for CAT while working. The work-study balance was tough, but it gave me a unique perspective. My engineering background combined with MBA opened doors I never imagined.",
      advice: "Work experience before MBA adds immense value to your learning. Don't rush into higher education immediately after graduation. Real-world experience helps you make the most of academic programs."
    },
    {
      id: "5",
      name: "Sneha Reddy",
      career: "Civil Services",
      education: "BA Political Science + UPSC",
      currentRole: "IAS Officer",
      company: "Government of India",
      story: "I was an average student in school, but I was passionate about public service. After graduation, I dedicated 3 years to UPSC preparation. My first two attempts failed, but I didn't give up. I analyzed my mistakes, worked on my weaknesses, and finally cracked it in my third attempt. Today, I serve as an IAS officer in my home state.",
      advice: "Civil services exam is a marathon, not a sprint. Stay patient and consistent. Surround yourself with positive influences and never underestimate the power of self-belief."
    },
    {
      id: "6",
      name: "Arjun Mehta",
      career: "Polytechnic Diploma",
      education: "Diploma in Mechanical Engineering",
      currentRole: "Plant Manager",
      company: "Tata Motors",
      story: "I couldn't afford engineering college after 10th, so I opted for a polytechnic diploma. The hands-on training gave me practical skills that engineering graduates often lack. I started as a technician and worked my way up through dedication and continuous learning. Today, I manage an entire manufacturing plant.",
      advice: "Don't let financial constraints limit your dreams. Diploma courses offer excellent practical training. Skills and experience matter more than degrees in the long run. Keep learning and upgrading your skills."
    }
  ]

  return (
    <div className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[var(--accent-primary)] mb-6">Success Stories</h2>
      
      {!selectedStory ? (
        <>
          <p className="text-[var(--text-secondary)] mb-6">
            Read inspiring stories from individuals who successfully navigated their career paths. Their journeys can provide valuable insights and motivation for your own career decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stories.map(story => (
              <div
                key={story.id}
                onClick={() => setSelectedStory(story)}
                className="bg-[var(--bg-primary)] p-5 rounded-lg cursor-pointer hover:bg-[var(--bg-tertiary)] transition-all border-2 border-[var(--border-color)] hover:border-[var(--accent-secondary)] shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-secondary)] flex items-center justify-center text-white font-bold text-xl">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--accent-primary)]">{story.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{story.currentRole}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{story.career}</p>
                <p className="text-xs text-[var(--accent-secondary)]">{story.education}</p>
                <div className="mt-3 text-[var(--accent-primary)] text-sm font-medium">
                  Read full story →
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedStory(null)}
            className="px-4 py-2 bg-[var(--accent-secondary)] text-white rounded-full font-medium hover:bg-[var(--accent-tertiary)] transition-all"
          >
            ← Back to All Stories
          </button>

          <div className="bg-[var(--bg-primary)] p-6 rounded-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)] flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                {selectedStory.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[var(--accent-primary)]">{selectedStory.name}</h3>
                <p className="text-lg text-[var(--text-primary)] font-medium">{selectedStory.currentRole}</p>
                {selectedStory.company && (
                  <p className="text-[var(--accent-secondary)]">{selectedStory.company}</p>
                )}
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-medium">Career Path:</span> {selectedStory.career}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-medium">Education:</span> {selectedStory.education}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-[var(--accent-primary)] mb-2">My Journey</h4>
                <p className="text-[var(--text-primary)] leading-relaxed">{selectedStory.story}</p>
              </div>

              <div className="bg-[var(--bg-tertiary)] p-4 rounded-lg border-l-4 border-[var(--accent-yellow)]">
                <h4 className="font-bold text-[var(--accent-primary)] mb-2">My Advice</h4>
                <p className="text-[var(--text-primary)] italic leading-relaxed">"{selectedStory.advice}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuccessStories
