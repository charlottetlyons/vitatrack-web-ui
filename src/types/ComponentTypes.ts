export type OnClickFunction = () => void;

export type UIButtonProps = {
    text: string;
    type: ButtonType;
    sx?: object | undefined;
    onClick?: OnClickFunction;
};

export type ButtonProps = {
    text: string;
    width?: string;
    sx?: object | undefined;
    onClick?: OnClickFunction;
};

export enum ButtonType {
    PRIMARY,
    SECONDARY,
}
