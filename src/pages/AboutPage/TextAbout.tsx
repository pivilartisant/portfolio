import CtaAbout from "./CtaAbout";



export default function TextAbout(){
    return( 
        <div className="text-about">
                <div className="text-about-cntr">
                    <header className="text-about-title">
                        <p className="text-about-header">I believe in making it <em> simple not simplistic</em> </p>
                    </header>
                    <main className="text-about-content">
                        <p className="text-about-p">With a keen eye for design and the use of next generation technologies, I create  <em> digital experiences built to last. </em> </p>
                        <p className="text-about-p">I have hands on experience building websites and applications <em>for young creatives eager to make an impact.</em></p>
                        <p className="text-about-p">From <em>portfolio’s to digital platforms</em> nothing falls out of my scope of interest.</p>
                    </main>
                </div>

                <CtaAbout/>
        </div>
    )
}