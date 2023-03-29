import github from "../../../assets/github.png";
import email from "../../../assets/email.png";

export default function CtaAbout(){
    return( 
        <div className="cta-about">
                     <div className="cta-about-btn-cntr">
                        <button className="cta-about-btn"> Github <img src={github} alt="github logo" style={{ width:20, height:20}}/> </button>
                    </div>
                    <div className="cta-about-btn-cntr">
                        <button className="cta-about-btn"> Contact <img src={email} alt="email icon" style={{ width:20, height:20}}/></button>
                    </div>
        </div>
    )
}