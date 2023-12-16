

const ShoeCard = (imgUrl, changeBigShoeImage, bigshoeImage) => {

    const handleClick=()=>{
        if(bigshoeImage !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe);
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigshoeImage === imgUrl? 'border-coral-red' :'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
        <div>
            <img src={imgUrl.thumbnail} alt="" />
        </div>
    </div>
  )
}

export default ShoeCard