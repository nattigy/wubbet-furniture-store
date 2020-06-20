import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeSubCategoryAction} from "../../store/actions/navActions";

const NavbarSection = props => {
    return (
        <div className="container-fluid bg-white sidenav-cont py-0">
            <div id="modal" onClick={() => props.closeNav()}/>
            <div className="container-lg">
                <div id="mySidenav" className="sidenav">
                    <button className="closebtn btn-light btn bg-transparent border-0"
                            onClick={() => props.closeNav()}>&times;</button>
                    <ul className="list-unstyled mb-0">
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/HOME_FURNITURE/_/livingRoom"
                                  onClick={() => props.changeSubCategory({type: "LIVING_ROOM", sub_cat: "livingRoom"})}
                            >Living room</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/HOME_FURNITURE/_/bedRoom"
                                  onClick={() => props.changeSubCategory({type: "BED_ROOM", sub_cat: "bedRoom"})}
                            >Bed room</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/HOME_FURNITURE/_/kitchen"
                                  onClick={() => props.changeSubCategory({type: "KITCHEN", sub_cat: "kitchen"})}
                            >Dinning room/kitchen</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/COMMERCIAL_FURNITURE/_/office"
                                  onClick={() => props.changeSubCategory({type: "OFFICE", sub_cat: "office"})}
                            >Office</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/FINISHING_MATERIALS/_/decorations"
                                  onClick={() => props.changeSubCategory({type: "DECORATIONS", sub_cat: "decorations"})}
                            >Decorations</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/items/FINISHING_MATERIALS/_/finishingMaterials"
                                  onClick={() => props.changeSubCategory({
                                      type: "FINISHING_MATERIALS",
                                      sub_cat: "finishingMaterials"
                                  })}
                            >Finishing materials</Link></li>
                        <li className="nav-item nav-item-custom px-3">
                            <Link className="pl-0 nav-link-custom"
                                  to="/itemsOTHER/other"
                                  onClick={() => props.changeSubCategory({type: "OTHER", sub_cat: "other"})}
                            >Other</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        changeSubCategory: credentials => dispatch(changeSubCategoryAction(credentials)),
    }
};

export default connect(null, mapDispatchToProps)(NavbarSection);