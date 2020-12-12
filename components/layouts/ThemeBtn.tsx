import { IconButton, useColorMode } from "@chakra-ui/react";
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';

const ThemeBtn = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <IconButton 
                aria-label="themebtn"
                icon={colorMode === "dark" ? <RiSunFill /> : <RiMoonClearFill />}
                onClick={toggleColorMode}
            />
        </>
    )
}

export default ThemeBtn;
