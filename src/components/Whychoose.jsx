import { ShieldCheck, BadgeDollarSign, Zap, Headphones } from 'lucide-react'

const features = [
  { id: 1, icon: ShieldCheck, title: 'Verified Cars', text: 'Every listing is checked before it goes live.' },
  { id: 2, icon: BadgeDollarSign, title: 'Best Prices', text: 'Fair market rates with no hidden charges.' },
  { id: 3, icon: Zap, title: 'Easy Process', text: 'Find, contact, and close a deal in a few steps.' },
  { id: 4, icon: Headphones, title: '24/7 Support', text: 'Our team is ready to help whenever you need.' },
]

const WhyChooseUs = () => {
  return (
    <section className="bg-black px-4 py-16 text-white" >
      <div className="container mx-auto " data-aos="fade-down">
        <div className="text-center" >
          <p className="text-sm uppercase tracking-widest text-primary">Our advantages</p>
          <h2 className="mt-2 text-3xl font-semibold lg:text-4xl">Why Choose Us</h2>
          <p className="mt-3 text-neutral-400">We make buying and selling cars simple and safe.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-xl border border-line bg-surface p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs