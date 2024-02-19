/* eslint-disable react/prop-types */
import ExpandButton from "../../components/ExpandButton/ExpandButton";
import { useState } from "react";

const FAQSingleCard = ({
    id,
    title,
    paragraph,
    svg,
    titleStyling,
    items
}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <ExpandButton 
            key={id}
            id={id}
            title={title}
            paragraph={paragraph}
            value={isOpen}
            setValue={setIsOpen}
            svg={svg}
            titleStyling={titleStyling}
            items={items}
        />
    )
}

export default FAQSingleCard