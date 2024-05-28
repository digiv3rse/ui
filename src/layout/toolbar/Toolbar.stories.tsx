import React from "react";
import { storiesOf } from "@storybook/react";
import { Toolbar } from "./Toolbar";
import { ToolbarItem } from "./ToolbarItem";
import { ToolbarIconButton } from "./ToolbarIconButton";
import { Filler } from "../Filler";
import { DiGiIcon } from "../../icon/DiGiIcon";
import { LogoutIcon } from "../../icon/LogoutIcon";
import { HelpIcon } from "../../icon/HelpIcon";
import { observable } from "mobx";
import { Observer } from "mobx-react";
import styled from "../../styled-components";

let active = observable.box(false);

export const Container = styled.div`
    display: flex;
`;

storiesOf("layout/toolbar/" + Toolbar.displayName, module)
    .addParameters({
        info: {
            inline: false,
            propTablesExclude: [Container, Filler]
        }
    })
    .add("default", () => <Observer>{ () =>
        <Container>
            <Toolbar>
                <ToolbarItem title="Item 1">
                    <ToolbarIconButton Icon={DiGiIcon} />
                </ToolbarItem>
                <ToolbarItem title="Toggle button">
                    <ToolbarIconButton
                        Icon={HelpIcon}
                        active={active.get()}
                        onClick={() => active.set(!active.get()) }
                    />
                </ToolbarItem>
                <Filler />
                <ToolbarItem>
                    <ToolbarIconButton Icon={LogoutIcon} />
                </ToolbarItem>
            </Toolbar>
        </Container>
    }</Observer>);
