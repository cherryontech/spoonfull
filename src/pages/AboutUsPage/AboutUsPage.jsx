import aboutUsImg from "../../assets/aboutus-img.png"
import pmImg from "../../assets/pm.png";
import designerImg from "../../assets/designer.png";
import devImg from "../../assets/dev.png";
import linkedinIcon from "../../assets/devicon_linkedin.png"
import { getAboutUs } from "../../firebase/firestore";
import AboutUsSingleCard from "./AboutUsSingleCard";
import { useState, useEffect } from "react";


const AboutUsPage = () => {
    const [ creators, setCreators ] = useState([])
    
    useEffect(() => {
        const getCreators = async() => {
            const creatorsData = await getAboutUs();
            setCreators(creatorsData)
        }
        getCreators();
    }, [])

    const icon = <img src={linkedinIcon}/>
    const nameStyling = "text-bold-body text-start"
    const items = "items-center"
    const svgDesigner = <img src={designerImg}/>
    const svgPM = <img src={pmImg}/>
    const svgDev = <img src={devImg}/>


    return (
        <section className="center-column px-4 md:px-[88px] xl:px-[281px] pt-6">
            <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                <h4 className="text-header4 md:pt-6">About Us</h4>
            </div>
            <div className="flex items-center gap-6 md:py-8">
                <p className="text-body py-4 px-[11px]">Inspired by Cherry on Tech lab&apos;s challenge, our team of product managers, designers, and developers launched SpoonFull to help individuals manage their finite energy and prevent burnout in daily activities. Meet our team below.</p>
                <img src={aboutUsImg} className="hidden md:block md:w-[266px] xl:w-[300px]"/>
            </div>
            <div>
                {creators.map(creator => {
                    return ( <AboutUsSingleCard
                            key={creator.id}
                            id={creator.id}
                            title={creator.name}
                            titleStyling={nameStyling}
                            subtitle={creator.title}
                            paragraph={creator.bio}
                            svg={creator.title === 'Product Manager'?
                                   svgPM
                                :
                                creator.title === 'Designer'?
                                    svgDesigner
                                :
                                    svgDev }
                            icon={icon}
                            link={creator.linkedin}
                            items={items}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default AboutUsPage;