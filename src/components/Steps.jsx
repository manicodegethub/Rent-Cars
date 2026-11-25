const steps = [
  { id: 1, title: 'Browse Cars', text: 'Search by make, price, and year to find your match.' },
  { id: 2, title: 'Contact Seller', text: 'Talk to the seller and book a time to see the car.' },
  { id: 3, title: 'Buy or Sell', text: 'Close the deal, or list your own car for sale.' },
]

const Steps = () => {
  return (
    <section className="bg-black px-4 py-16 text-white" >
      <div className="container mx-auto" data-aos="fade-down">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-primary">Simple process</p>
          <h2 className="mt-2 text-3xl font-semibold lg:text-4xl">How It Works</h2>
          <p className="mt-3 text-neutral-400">Buying or selling a car takes three easy steps.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.id} className="rounded-xl border border-line bg-surface p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-black">
                {step.id}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps