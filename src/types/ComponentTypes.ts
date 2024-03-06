export type OnClickFunction = () => void;

export type UIButtonProps = {
    text: string;
    type: ButtonType;
    styleOverride?: object | undefined;
    onClick?: OnClickFunction;
};

export type ButtonProps = {
    text: string;
    width?: string;
    styleOverride?: object | undefined;
    onClick?: OnClickFunction;
};

export enum ButtonType {
    PRIMARY,
    SECONDARY,
}
