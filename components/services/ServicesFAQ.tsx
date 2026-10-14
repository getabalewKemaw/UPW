"use client";


const FAQS = [
  {
    question: "How does your service delivery process work from start to finish?",
    answer:
      "All services follow a structured 3-step delivery workflow: (1) Discovery Call — We start with a focused call to deeply understand what you want, your target users, and technical goals. (2) Affordable Pricing Agreement — We establish a clear, milestone-based budget with zero hidden fees, so you pay only as real progress is delivered. (3) Agile Delivery — We build in rapid 1-to-2 week Agile sprints with interactive live demos, fast feedback loops, and complete hands-on team software training upon launch.",
  },
  {
    question: "Do you also teach complete beginners, or only experienced engineers?",
    answer:
      "Yes! I teach complete beginners from the ground up. As an active instructor at AllCan Technologies, I train students starting from foundational programming logic, Git version control, and modern JavaScript/TypeScript, guiding them step-by-step through building and deploying their first scalable full-stack applications with clear, structured milestones.",
  },
  {
    question: "What is your typical turnaround timeline for custom software projects?",
    answer:
      "Most production MVPs and core web platforms are delivered within 2 to 6 weeks, structured across 1-week iterative Agile sprints. Every sprint concludes with a testable live demo deployment and updated automated QA verification.",
  },
  {
    question: "How do you handle payment gateways and business automation in Ethiopia and globally?",
    answer:
      "For Ethiopian clients, I specialize in direct Chapa Payment Gateway and Telebirr API integrations with cryptographic HMAC webhook validation. For international clients, I build with Stripe and PayPal, backed by resilient database state machines preventing race conditions.",
  },
  {
    question: "How is the beginner & mid-level engineering mentorship structured?",
    answer:
      "Mentorship sessions are highly personalized. I cover line-by-line pull request code reviews, PostgreSQL EXPLAIN query plan optimizations, system architecture design, and real-world production debugging. Sessions can be 1-on-1 or group workshops.",
  },
  {
    question: "Can you collaborate across different timezones?",
    answer:
      "Yes. I am based in Addis Ababa, Ethiopia (UTC+3 / EAT) and routinely collaborate with teams across US, UK, European, and Dubai timezones with overlapping synchronous working hours.",
  },
];

export function ServicesFAQ() {
  return (
    <section
      id="faq"
      aria-label="Frequently Answered Questions"
      className="w-full flex flex-col gap-8 sm:gap-10 pt-8 sm:pt-12 text-left items-start"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col gap-3 text-left items-start w-full">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-light text-theme-muted">/</span>
          <span className="text-xl sm:text-2xl font-light text-theme-muted tracking-tight">
            frequently answered questions
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-light tracking-tight text-theme-primary leading-tight">
          Working Together & Engagement Models
        </h2>
      </div>

      {/* Clean Editorial Q&A Roster - Full Width, Open, Visible, Zero Horizontal Line Clutter */}
      <div className="w-full flex flex-col gap-8 sm:gap-10 pt-2">
        {FAQS.map((faq, idx) => (
          <article
            key={idx}
            className="flex flex-col gap-2.5 w-full text-left items-start"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-theme-primary tracking-tight leading-snug w-full">
              {faq.question}
            </h3>
            <p className="text-xl sm:text-2xl font-light text-theme-narrative leading-relaxed w-full">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
