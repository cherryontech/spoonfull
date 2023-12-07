import ExpandButton from "../../components/ExpandButton/ExpandButton";
import { useState } from "react";
import aboutUsImg from "../../assets/aboutus-img.png"
import pmImg from "../../assets/pm.png";
import designerImg from "../../assets/designer.png";
import devImg from "../../assets/dev.png";
import linkedinIcon from "../../assets/devicon_linkedin.png"

const AboutUsPage = () => {
    const [amy, setAmy] = useState(false)
    const [clavia, setClavia] = useState(false)
    const [kat, setKat] = useState(false)
    const [mary, setMary] = useState(false)
    const [tanya, setTanya] = useState(false)
    const [vandana, setVandana] = useState(false)
    
    const creatorsArray = [
        {
            id: 1,
            svg: <img src={pmImg}/>,
            name: "Amy La",
            title: "Product Manager",
            bio: "Bachelor in Health Promotion and Disease Prevention with a minor in Web Development. Design enthusiast with a passion for solving challenging problems that create meaningful impact.",
            linkedin: "https://www.linkedin.com/in/amylalai/",
            value: amy,
            setValue: setAmy,
        },
        {
            id: 2,
            svg: <img src={designerImg}/>,
            name: "Clavia Castilhos",
            title: "Designer",
            bio: "Bachelor in Industrial Design and UX Designer. I'm a problem-solving and hands-on person who works on bringing important ideas and projects to life.",
            linkedin: "https://www.linkedin.com/in/clavia-castilhos/",
            value: clavia,
            setValue: setClavia,
        },
        {
            id: 3,
            svg: <img src={devImg}/>,
            name: "Kat Kowalik",
            title: "Developer",
            bio: "Healthcare and beauty professional turned software developer, navigating the tech world to create solutions that simplify and empower.",
            linkedin: "https://www.linkedin.com/in/kat-kowalik/",
            value: kat,
            setValue: setKat,
        },
        {
            id: 4,
            svg: <img src={pmImg}/>,
            name: "Mary Allen",
            title: "Product Manager",
            bio: "Student working on bachelor’s in Management Information Systems. Passionate about utilizing technology to create innovative solutions that leave a meaningful impact.",
            linkedin: "https://www.linkedin.com/in/mary-l-allen-/",
            value: mary,
            setValue: setMary,
        },
        {
            id: 5,
            svg: <img src={devImg}/>,
            name: "Tanya Piña ",
            title: "Developer",
            bio: "Software developer with a background in libraries, community work, and anthropology. I am passionate about creating inclusive tech spaces that are by and for underrepresented communities.",
            linkedin: "https://www.linkedin.com/in/tanyapina/",
            value: tanya,
            setValue: setTanya,
        },
        {
            id: 6,
            svg: <img src={designerImg}/>,
            name: "Vandana Kala",
            title: "Designer",
            bio: "Engineer turned UX enthusiast, I blend methodology with personal investment in crafting meaningful user experiences. Collaborating to transform ideas into valuable products.",
            linkedin: "https://www.linkedin.com/in/vandana-kala/",
            value: vandana,
            setValue: setVandana,
        }
    ]

    const icon = <img src={linkedinIcon}/>
    const nameStyling = "text-bold-body text-start"
    const items = "items-center"


    return (
        <section className="center-column px-4 md:px-[88px] xl:px-[281px] pt-6">
            <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                <h4 className="text-header4 md:pt-6">About Us</h4>
            </div>
            <div className="flex items-center gap-6 md:py-8">
                <p className="text-body py-4 px-[11px]">Inspired by Cherry on Tech lab&apos;s challenge, our team of product managers, designers, and developers launched SpoonFul to help individuals manage their finite energy and prevent burnout in daily activities. Meet our team below.</p>
                <img src={aboutUsImg} className="hidden md:block md:w-[266px] xl:w-[300px]"/>
            </div>
            <div>
                {creatorsArray.map(creator => {
                    return ( <ExpandButton
                            key={creator.id}
                            title={creator.name}
                            titleStyling={nameStyling}
                            subtitle={creator.title}
                            paragraph={creator.bio}
                            value={creator.value}
                            setValue={creator.setValue}
                            svg={creator.svg}
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