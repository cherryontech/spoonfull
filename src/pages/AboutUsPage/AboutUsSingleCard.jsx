/* eslint-disable react/prop-types */
import ExpandButton from "../../components/ExpandButton/ExpandButton";
import { useState } from "react";


const AboutUsSingleCard = ({ 
    id,
    title, 
    titleStyling, 
    subtitle, 
    paragraph, 
    svg, 
    icon, 
    link, 
    item }) => {
    const [ isOpen, setIsOpen ] = useState(false);
    
    return (
        <ExpandButton 
            key={id}
            title={title}
            titleStyling={titleStyling}
            subtitle={subtitle}
            paragraph={paragraph}
            value={isOpen}
            setValue={setIsOpen}
            svg={svg}
            icon={icon}
            link={link}
            items={item}
        />
    )
}

export default AboutUsSingleCard;