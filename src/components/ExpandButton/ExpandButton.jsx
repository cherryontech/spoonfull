/* eslint-disable react/prop-types */

const ExpandButton = ({ title, subtitle, paragraph, value, setValue, svg, titleStyling, icon, link, items}) => {
    return (
        <button className="w-full py-4 px-2 border-divider border-b-2" onClick={(e) => {e.stopPropagation(); setValue(!value)}}>
            <div className={`flex justify-between ${items} gap-8`}>
                <div>
                    {svg}
                </div>
                <div className="min-w-[186px]">
                    <p className={titleStyling}>{title}</p>
                    <p className="text-body text-start">{subtitle}</p>
                </div>
                <div className={value? "rotate-90" : ""}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M11.6688 23.5314C11.044 22.9065 11.044 21.8935 11.6688 21.2686L16.9375 16L11.6688 10.7314C11.044 10.1065 11.044 9.09347 11.6688 8.46863C12.2937 7.84379 13.3067 7.84379 13.9316 8.46863L20.3316 14.8686C20.9564 15.4935 20.9564 16.5065 20.3316 17.1314L13.9316 23.5314C13.3067 24.1562 12.2937 24.1562 11.6688 23.5314Z" fill="#001111"/>
                    </svg>
                </div>
            </div>
            <div className={value? "" : "hidden"}>
                <p className="text-small-body text-start my-4">{paragraph}</p>
                <div className="w-6">
                    <a href={link} target="_blank" rel="noreferrer noopener">
                        {icon}
                    </a>
                </div>
            </div>
        </button>
    )
}

export default ExpandButton;