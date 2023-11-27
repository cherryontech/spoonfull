import linkImg from "../../assets/link-img.png";
// import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ShareSpoonfull = () => {
    const link = "https://spoonfull-kiwi-kick.netlify.app/"

    const handleCopy = (e) => {
        e.preventDefault();
    }

    return (
        <section className="center-column gap-6 h-[80vh]">
            <h4 className="text-header4">Share SpoonFull</h4>
            <p className="text-body text-text1 w-[256px] text-center">Help Your Loved Ones Prioritize Self-Care for a Better Work-Life Balance!</p>
            <img src={linkImg} alt="illustration with two people holding a big link icon" className="w-[214px] md:w-[330px] xl:w-[342px] my-10"/>
            <CopyToClipboard text={link}>
                <button className="btn-filled" onClick={handleCopy}>Copy Link to Clipboard</button>
            </CopyToClipboard>
        </section>
    )
}

export default ShareSpoonfull;