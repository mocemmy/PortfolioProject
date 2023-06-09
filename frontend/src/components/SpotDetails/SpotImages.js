import ImageCreator from "./ImageCreator";
const SpotImages = ({imageArr}) => {
  if(!imageArr) return <h1>image creator did not load</h1>;
    return (
        <>
        <div className="main-image"
            style={{
                backgroundImage: `url("${imageArr[0].url}")`,
                backgroundSize: 'cover'
            }}
        >
        </div>
        <div className="secondary-image-container">
          {imageArr.slice(1).map((img) => (
            <ImageCreator key={img.id} imageUrl={img.url} />
          ))}
        </div>
        </>
    )
}

export default SpotImages;