import React, {useEffect, useState} from "react"
import Switch from "@material-ui/core/Switch";

const ProductImages = props => {

    const {item} = props;

    const [currentImage, setCurrentImage] = useState(item.images[0]);
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        if (zoom) {
            const el = document.querySelector("#module");
            el.addEventListener("mousemove", (e) => {
                el.style.backgroundPositionX = -e.offsetX + "px";
                el.style.backgroundPositionY = -e.offsetY + "px";
                el.style.backgroundSize = "200%";
            });

            el.addEventListener("mousedown", () => {
                el.style.backgroundPositionX = "100px";
                el.style.backgroundPositionY = "100px";
                el.style.backgroundSize = "200%";
            });

            el.addEventListener("mouseleave", () => {
                el.style.backgroundPositionX = "0px";
                el.style.backgroundPositionY = "0px";
                el.style.backgroundSize = "100%";
            });

            el.addEventListener("touchstart", (e) => {
                el.style.backgroundPositionX = -e.touches[0].clientX + "px";
                el.style.backgroundPositionY = -e.touches[0].clientY + "px";
                document.body.style.overflow = "hidden";
                document.body.style.top = "30%";
                el.style.backgroundSize = "200%";
            });

            el.addEventListener("touchmove", (e) => {
                el.style.backgroundPositionX = -e.touches[0].clientX + "px";
                el.style.backgroundPositionY = -e.touches[0].clientY + "px";
            });

            el.addEventListener("touchend", () => {
                el.style.backgroundPositionX = "0px";
                el.style.backgroundPositionY = "0px";
                document.body.style.overflow = "unset";
                el.style.backgroundSize = "100%";
            });
        }
    }, [zoom])

    return (
        <div className="col-md-7">
            <div>
                <div className="text-right">
                    <span>
                        zoom
                    </span>
                    <Switch
                        onChange={() => setZoom(!zoom)}
                        checked={zoom}
                        name="status"
                        color="primary"
                        inputProps={{'aria-label': 'primary checkbox'}}
                    />
                </div>
                <div className="cont">
                    {
                        zoom ?
                            <div className="module border border-light-custom"
                                 style={{
                                     backgroundImage: `url(${currentImage})`,
                                 }}
                                 id="module">
                            </div> :
                            <div className="w-100 border border-light-custom overflow-hidden">
                                <img className="w-100" src={currentImage} alt=""
                                     onClick={() => setCurrentImage(currentImage)}/>
                            </div>
                    }
                </div>
                <div className="mb-4">
                    <div className="d-flex overflow-auto">
                        {
                            item.images.map(image => (
                                <div className="image-detail-preview border border-light-custom overflow-hidden">
                                    <img className="w-100" src={image} alt=""
                                         onClick={() => setCurrentImage(image)}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductImages;