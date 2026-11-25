import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const info = [
  { id: 1, icon: MapPin, title: 'Address', text: 'Blue Area, Islamabad' },
  { id: 2, icon: Phone, title: 'Phone', text: '+92 300 0000000' },
  { id: 3, icon: Mail, title: 'Email', text: 'info@autodeal.com' },
  { id: 4, icon: Clock, title: 'Opening Hours', text: 'Mon to Sat, 10 AM to 8 PM' },
]

const Location = () => {
  return (
    <section className="bg-black px-4 py-16 text-white">
      <div className="container mx-auto">
        <div className="text-center" data-aos="fade-down">
          <p className="text-sm uppercase tracking-widest text-primary">Visit us</p>
          <h2 className="mt-2 text-3xl font-semibold lg:text-4xl">Find Our Showroom</h2>
          <p className="mt-3 text-neutral-400">Come see the cars in person and talk to our team.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {info.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <iframe
            src="https://www.google.com/maps?q=Blue+Area+Islamabad&output=embed"
            title="Showroom location"
            loading="lazy"
            data-aos="zoom-in"
            className="h-80 w-full rounded-xl border border-line lg:h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Location