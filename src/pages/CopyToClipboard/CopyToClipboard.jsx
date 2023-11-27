import linkImg from "../../assets/link-img.png";

const CopyToClipboard = () => {
    return (
        <section className="center-column gap-6 h-[80vh]">
            <h4 className="text-header4">Share SpoonFull</h4>
            <p className="text-body text-text1 w-[256px] text-center">Help Your Loved Ones Prioritize Self-Care for a Better Work-Life Balance!</p>
            <img src={linkImg} alt="illustration with two people holding a big link icon" className="w-[214px] md:w-[330px] xl:w-[342px] my-10"/>
            <button className="btn-filled">Copy Link to Clipboard</button>
        </section>
    )
}

export default CopyToClipboard;