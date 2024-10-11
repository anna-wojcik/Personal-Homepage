import { useSelector } from "react-redux";
import { Paragraph, LoadingIconLight, LoadingIconDark, RotatingIcon } from "./styled";
import { selectIsDark } from "../../ThemeSwitch/themeSlice";

export const Loading = () => {
    const isDark = useSelector(selectIsDark);

    return (
        <>
            <Paragraph>Please wait, projects are being loaded...</Paragraph>
            <RotatingIcon>
                {isDark ? <LoadingIconDark /> : <LoadingIconLight />}
            </RotatingIcon>
        </>
    );
};

export default Loading;