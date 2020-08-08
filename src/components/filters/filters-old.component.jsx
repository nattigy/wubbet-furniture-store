import React, {useState} from "react";

const FilterOld = props => {

    const [filterList, setFilterList] = useState([]);

    const handleChange = e => {
        let list = filterList;
        list.push(e.target.name);
        setFilterList(list);
        props.appplyFilter(filterList)
    };

    return (
        <div id="aside" className="col-lg-3 px-0">
            <div className="aside">
                <h5 className="aside-title mb-4">CATEGORIES</h5>
                <div className="checkbox-filter">

                    <div className="input-checkbox text-nowrap">
                        <input type="checkbox" id="livingRoom" name="livingRoom"
                               onChange={e => handleChange(e)}
                        />
                        <label htmlFor="livingRoom">
                            <span/>
                            <span className="mx-2 font-14">Living Room</span>
                        </label>
                    </div>

                    <div className="input-checkbox text-nowrap">
                        <input type="checkbox" id="bedRoom" name="bedRoom"
                               onChange={e => handleChange(e)}
                        />
                        <label htmlFor="bedRoom">
                            <span/>
                            <span className="mx-2 font-14">Bed Room</span>
                        </label>
                    </div>

                    <div className="input-checkbox text-nowrap">
                        <input type="checkbox" id="kitchen" name="kitchen"
                               onChange={e => handleChange(e)}
                        />
                        <label htmlFor="kitchen">
                            <span/>
                            <span className="mx-2 font-14">Dinning Room/kitchen</span>
                        </label>
                    </div>

                    <div className="input-checkbox text-nowrap">
                        <input type="checkbox" id="office" name="office"
                               onChange={e => handleChange(e)}
                        />
                        <label htmlFor="office">
                            <span/>
                            <span className="mx-2 font-14">Office</span>
                        </label>
                    </div>

                    <div className="input-checkbox text-nowrap">
                        <input type="checkbox" id="decorations" name="decorations"
                               onChange={e => handleChange(e)}
                        />
                        <label htmlFor="decorations">
                            <span/>
                            <span className="mx-2 font-14">Decorations</span>
                        </label>
                    </div>

                    <div className="input-checkbox text-nowrap">
                        <input type="checkbox" id="finishingMaterials" name="finishingMaterials"
                               onChange={e => handleChange(e)}
                        />
                        <label htmlFor="finishingMaterials">
                            <span/>
                            <span className="mx-2 font-14">Finishing Materials</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterOld;