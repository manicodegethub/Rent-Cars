import Cars from '../components/Cars'
import TipsBuyCar from '../components/TipsBuyCar'

const Product = () => {
  return (
    <div className="bg-black text-white">
      <section className="px-4 pt-16 text-center">
        <div className="container mx-auto" data-aos="fade-down">
          <p className="text-sm uppercase tracking-widest text-primary">Our inventory</p>
          <h1 className="mt-2 text-4xl font-semibold lg:text-6xl">
            Buy Your <span className="text-primary">Dream Car</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Browse our collection of verified cars. Search by name or brand, check the
            details, and contact the seller directly.
          </p>
        </div>
      </section>

      <Cars />

      <TipsBuyCar/>
    </div>
  )
}

export default Product