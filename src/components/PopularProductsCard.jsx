import { star } from "../assets/icons"

const PopularProductsCard = ({ imgURL, name, price}) => {
  return (
    <div className="flex flex-1 w-full max-sm:w-full">

        <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-[8rem] flex flex-col justify-start gap-2.5">
            <img src={star} alt="rating" width={24} height={24} className=""/>
        </div>
    </div>
  )
}

export default PopularProductsCard