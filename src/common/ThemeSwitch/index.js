import { Wrapper, Button, Box } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark, selectIsDark } from "../themeSlice";
import { ReactComponent as SunLight } from "../../images/sunLight.svg";
import { ReactComponent as SunDark } from "../../images/sunDark.svg";
import { useWindowDimensions } from "../useWindowDimensions";

export const ThemeSwitch = () => {
    const isDark = useSelector(selectIsDark);
    const dispatch = useDispatch();
    const width = useWindowDimensions();

    return (
        <Wrapper>
            <div>
                {width > 767 ? `DARK MODE ${isDark ? "ON" : "OFF"}` : ""}
            </div>
            <Button onClick={() => dispatch(toggleDark())}>
                <Box $flicker $move={isDark}></Box>
                <Box $sun $move={isDark}>
                    {isDark ? <SunDark /> : <SunLight />}
                </Box>
            </Button>
        </Wrapper>
    );
};

export default ThemeSwitch;