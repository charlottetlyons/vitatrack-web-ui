export type UIButtonProps = {
    text: string;
    type: ButtonType;
};

export type ButtonProps = {
    text: string;
}

export enum ButtonType { PRIMARY, SECONDARY };