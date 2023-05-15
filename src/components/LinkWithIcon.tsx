function LinkWithIcon({link, icon}:LinkWithIcon) {
    return(
        <a href={link} target="_blank">
            <img src={icon} alt="repositori" />
        </a>
    );
}
export default LinkWithIcon;
export { LinkWithIcon };