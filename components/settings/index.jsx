import React, { useState } from "react";
import ChangePasswordComponent from "./changePassword";
import InformationComponent from "./information";

import {
    SettingsWrapper,
    TopBar,
    BackButton,
    BackIcon,
    Panes,
    Pane,
    MainBar,
    ActionBar
} from "./settings.styles";
import { useRouter } from "next/router";

const PaneObject = {
    'Personal Information': <InformationComponent />,
    'Change Password': <ChangePasswordComponent />
}

const SettingsComponent = () => {
    const router = useRouter();

    const [activeIndex, setActive] = useState(0);

    return (
        <SettingsWrapper>
            <TopBar>
                <BackButton onClick={(e) => router.back()}>
                    <BackIcon />
                    Back
                </BackButton>
                <Panes>
                    {Object.keys(PaneObject).map((item, index) => (
                        <Pane
                            key={index}
                            $active={Object.keys(PaneObject)[activeIndex] === item ? 'true' : 'false'}
                            onClick={() => setActive(index)}
                        >
                            {item}
                        </Pane>
                    ))}
                </Panes>
            </TopBar>

            {Object.values(PaneObject)[activeIndex]}
        </SettingsWrapper>
    );
};

export default SettingsComponent;