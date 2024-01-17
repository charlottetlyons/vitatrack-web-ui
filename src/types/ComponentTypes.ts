export type OnClickFunction = () => void;

export type UIButtonProps = {
    text: string;
    type: ButtonType;
    onClick?: OnClickFunction;
};

export type ButtonProps = {
    text: string;
    onClick?: OnClickFunction;
};

export enum ButtonType {
    PRIMARY,
    SECONDARY,
}
