import React, {Fragment} from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const AboutUs = () => {
    return (
        <Fragment>
            <Header/>
            <div className="container-xl px-3 px-md-5 paragraphs my-5 text-justify">
                <h3>About us</h3>
                <p>
                    Founded by Beimnet Zebene and Nathnael Yewondwosen in September 2020, Wubbet.com is an online
                    furnishing
                    and finishing materials hub located in Addis Ababa, Ethiopia. Wubbet.com was started to solve the
                    problem of lack of market awareness when buying furniture and finishing materials in Ethiopia by
                    providing a huge platform to buy and sell furniture, finishing materials and decorations.
                </p>
                <p>
                    We aim to create the larges database of furniture, finishing materials and decorations in Ethiopia
                    to
                    allow our partners to reach far wider potential buyers. Similarly, we allow our customers to find
                    products, compare prices in the wider market and get the product that suit their preference all
                    without
                    having to leave their home, and save their time and money by avoiding going from store to store to
                    find
                    the perfect offer and product.
                </p>
                <p>
                    We want to grow to be the go-to place in Ethiopia to buy and sell furniture, finishing materials and
                    decorations.
                </p>
                <h4>One market – many companies</h4>
                <p>
                    The products you find here on Wubbet.com come from many reliable manufacturers and retailers of
                    specified products from different parts of the country. We work very hard and close with our
                    partners to
                    satisfy the needs of our esteemed customers.
                </p>
                <p>
                    Here is the list of companies we work with:
                </p>
                <h4>Together we can create a beautiful surrounding indoor and outside</h4>
                <p>
                    We want to inspire as many people as possible to create an inviting environment inside their home,
                    building, office or other properties and make it easy and affordable. We also want to inspire people
                    and
                    help create a green, sustainable and beautiful environment in our country by joining the Green
                    Legacy
                    initiative. We have dedicated 3% of our revenues to the go green campaign.
                </p>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default AboutUs