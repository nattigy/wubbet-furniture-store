import React, {useEffect, useState} from "react"

const ProductImages = props => {

    const {item} = props;

    const [currentImage, setCurrentImage] = useState(item.picture0);

    useEffect(() => {
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
            document.body.style.position = "fixed";
            document.body.style.top = "-30%";
            el.style.backgroundSize = "200%";
        });

        el.addEventListener("touchmove", (e) => {
            el.style.backgroundPositionX = -e.touches[0].clientX + "px";
            el.style.backgroundPositionY = -e.touches[0].clientY + "px";
            el.style.backgroundSize = "200%";
        });

        el.addEventListener("touchend", () => {
            el.style.backgroundPositionX = "0px";
            el.style.backgroundPositionY = "0px";
            document.body.style.position = "unset";
            window.scrollBy(0, 200);
            el.style.backgroundSize = "100%";
        });
    }, []);

    return (
        <div className="col-md-7">
            <div>
                <div className="cont">
                    <div className="module"
                         style={{
                             backgroundImage: `url(${currentImage})`,
                         }}
                         id="module">
                    </div>
                </div>
                <div className="mb-4">
                    <div className="d-flex">
                        <div className="image-detail-preview border border-light-custom overflow-hidden">
                            <img className="w-100" src={item.picture0} alt=""
                                 onClick={() => setCurrentImage(item.picture0)}/>
                        </div>

                        <div className="image-detail-preview border border-light-custom overflow-hidden">
                            <img className="w-100" src={item.picture1} alt=""
                                 onClick={() => setCurrentImage(item.picture1)}/>
                        </div>

                        <div className="image-detail-preview border border-light-custom overflow-hidden">
                            <img className="w-100" src={item.picture2} alt=""
                                 onClick={() => setCurrentImage(item.picture2)}/>
                        </div>

                        <div className="image-detail-preview border border-light-custom overflow-hidden">
                            <img className="w-100" src={item.picture3} alt=""
                                 onClick={() => setCurrentImage(item.picture3)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductImages;