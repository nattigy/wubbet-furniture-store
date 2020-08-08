import React from "react";

const Item = () => (
    <div>

    </div>
);

const ShopByCategory = () => {
    return (
        <div className="container-xl px-2 my-5">
            <h1 className="section-title">SHOP BY CATEGORY</h1>
            <div className="pt-3 d-flex overflow-auto">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    );
};

export default ShopByCategory;