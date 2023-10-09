export type PasswordParameters = {
    [key: string]: String[];
}

export type Values = {
    [key: string]: boolean;
}

// Prop Types
export type CharacterRangeProps = {
    length: number; 
    setLength: React.Dispatch<React.SetStateAction<number>>;
}

export type CheckboxProps = {
    [key: string]: string;
}