import * as React from "react";
import { DiGiIcon } from "../../icon/DiGiIcon";
import { HoverState } from "../../util/react/HoverState";
import { IconButton } from "../../control/IconButton";

export interface IDiGiIconButtonProps {
}

export class DiGiIconButton extends React.Component<IDiGiIconButtonProps> {
    render() {
        return (
            <HoverState>
                {(hover) =>
                    <IconButton Icon={DiGiIcon} color={
                        theme => hover ? theme.colors.toolbarDiGiIconHover : theme.colors.toolbarDiGiIcon
                    } />
                }
            </HoverState>
        );
    }
}
