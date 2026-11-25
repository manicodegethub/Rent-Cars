import { Mail, Phone } from 'lucide-react'

const team = [
  { id: 1, name: 'Ahmed Raza', role: 'Founder and CEO', img: 'https://i.pravatar.cc/300?img=12' },
  { id: 2, name: 'Sara Khan', role: 'Sales Manager', img: 'https://i.pravatar.cc/300?img=47' },
  { id: 3, name: 'Usman Ali', role: 'Car Inspector', img: 'https://i.pravatar.cc/300?img=33' },
  { id: 4, name: 'Ayesha Malik', role: 'Customer Support', img: 'https://i.pravatar.cc/300?img=45' },
]

const Ourteam = () => {
  return (
    <section className="bg-black px-4 py-16 text-white">
      <div className="container mx-auto">
        <div className="text-center" data-aos="fade-down">
          <p className="text-sm uppercase tracking-widest text-primary">Our team</p>
          <h2 className="mt-2 text-3xl font-semibold lg:text-4xl">Meet The Experts</h2>
          <p className="mt-3 text-neutral-400">The people who make every deal smooth and safe.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={member.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-xl border border-line bg-surface p-6 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto h-24 w-24 rounded-full border-2 border-primary object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>

              <div className="mt-4 flex justify-center gap-4 text-neutral-400">
                <Mail className="h-5 w-5 hover:text-primary" />
                <Phone className="h-5 w-5 hover:text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ourteam