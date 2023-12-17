import { star } from "../assets/icons"

const PopularProductsCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col items-center w-full max-sm:w-full">

        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-8 flex flex-row justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} className=""/>
            <p className=" font-montserrat text-slate-gray leading-normal text-xl">(4.5)</p>
        
        </div>  
      <h3 className="leading-noraml mt-2 font-semibold font-palanquin text-2xl">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductsCard