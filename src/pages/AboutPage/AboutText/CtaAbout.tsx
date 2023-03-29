import github from "../../../assets/github.png";
import email from "../../../assets/email.png";

export default function CtaAbout(){
    return( 
        <div className="cta-about">
                     <div className="cta-about-btn-cntr">
                        <button className="cta-about-btn">  <a href="https://github.com/pivilartisant" target="_blank"> Github <img src={github} alt="github logo" style={{ width:20, height:20}}/></a> </button>
                    </div>
                    <div className="cta-about-btn-cntr">
                        <button className="cta-about-btn"><a href="mailto:lartisantpv@gmail.com"> Contact <img src={email} alt="email icon" style={{ width:20, height:20}}/> </a> </button>
                    </div>
        </div>
    )
}