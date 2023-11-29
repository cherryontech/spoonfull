import linkImg from "../../assets/link-img.png";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

const ShareSpoonfull = () => {
    const [copiedLink, setCopiedLink] = useState(false)
    const link = "https://spoonfull-kiwi-kick.netlify.app/"

    const handleCopy = (e) => {
        e.preventDefault();
        setCopiedLink(true)
        toast.success("The link was copied to the clipboard!", { theme: "colored", style: { backgroundColor: "#41993F", textAlign: 'center' }, toastId: "successCopy" });
    }

    return (
        <section className="center-column gap-6 h-[80vh]">
            <ToastContainer 
                position="top-center"
                autoClose={3000}
            />
            <h4 className="text-header4">Share SpoonFull</h4>
            <p className="text-body text-text1 w-[256px] text-center">Help Your Loved Ones Prioritize Self-Care for a Better Work-Life Balance!</p>
            <img src={linkImg} alt="illustration with two people holding a big link icon" className="w-[214px] md:w-[330px] xl:w-[342px] my-10"/>
            <CopyToClipboard text={link}>
            {
                copiedLink ?
                    <button className="btn-filled bg-primary hover:bg-primary hover:border-none active:bg-primary active:border-none">Link copied!</button>
                    :
                    <button className="btn-filled" onClick={handleCopy}>Copy Link to Clipboard</button>
                }
            </CopyToClipboard>
        </section>
    )
}

export default ShareSpoonfull;