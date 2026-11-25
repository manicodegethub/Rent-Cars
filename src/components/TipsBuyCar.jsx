import { Link } from 'react-router'
import { Car, FileText, Scale, Wrench } from 'lucide-react'

const tips = [
  { id: 1, icon: Car, title: 'Take a Test Drive', text: 'Check the engine, brakes, and steering on the road.' },
  { id: 2, icon: FileText, title: 'Verify the Papers', text: 'Match the registration, token tax, and owner details.' },
  { id: 3, icon: Scale, title: 'Compare Prices', text: 'Look at similar cars to know a fair market rate.' },
  { id: 4, icon: Wrench, title: 'Get an Inspection', text: 'Ask a trusted mechanic to check the car before you pay.' },
]

const TipsBuyCar = () => {
  return (
    <section className="bg-black px-4 py-16 text-white">
      <div className="container mx-auto grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div data-aos="fade-up">
          <p className="text-sm uppercase tracking-widest text-primary">Buying guide</p>
          <h2 className="mt-2 text-3xl font-semibold lg:text-5xl">Smart Tips Before You Buy</h2>
          <p className="mt-4 text-neutral-400">
            A few simple checks can save you money and stress. Follow these steps before
            you close any deal.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-semibold text-black duration-300 hover:bg-primary-dark"
          >
            Talk to Our Team
          </Link>
        </div>

        <div className="space-y-4">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <tip.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{tip.title}</h3>
                <p className="text-sm text-neutral-400">{tip.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TipsBuyCar