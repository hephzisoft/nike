import { offer } from "../assets/images"
import {arrowRight } from "../assets/icons"

import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>

      
  <div className="flex-1">
  <h2 className=" capitalize font-palanquin text-4xl font-bold lg:max-w-lg">
     
          <span className="text-coral-red">Special </span> Offer
        </h2>
        <p className='mt-4 lf:max-w-lg info-text'>Embark on a shopping journey that redefines your shopping experience with unbeatable deals. From premier selecions to incredible savings, we offer unparalleled value that sets us apart.</p>
    <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibilites designed to fulfull your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
    <div className='mt-11 flex flex-wrap gap-4'>
    <Button label='Shop now'  iconUrl={ arrowRight }/>
    <Button label='Learn more' backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
    </div>
  </div>
    </section>
  )
}

export default SpecialOffer