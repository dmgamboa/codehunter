import StyledBanner from "./StyledBanner";

const Banner = () => {
    return (
        <StyledBanner>
            <div className="banner">

                <div className="corners">
                    <div>
                        <div className="button buttonUL upper-left">
                            <span className="head headUL upper-left"></span>
                        </div>
                    </div>

                    <div>
                        <div className="button buttonUR upper-right">
                            <span className="head headUR upper-right"></span>
                        </div>
                    </div>

                    <div>
                        <div className="button buttonLL lower-left">
                            <span className="head headLL lower-left"></span>
                        </div>
                    </div>

                    <div>
                        <div className="button buttonLR lower-right">
                            <span className="head headLR lower-right"></span>
                        </div>
                    </div>
                    <p className="this-is-us">This is Us.</p>
                </div>
            </div>
        </StyledBanner>
    );
};

export default Banner;
