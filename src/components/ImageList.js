import ImageItem from "./ImageItem";

function ImageList({ imagesPlaceholder })
{
    return (
        <div className="imageList">
            {imagesPlaceholder.map((image) =>
            {
                return <ImageItem image={image} key={image.id} />;
            })}
        </div>
    );
}

export default ImageList;
