import { Bodypart } from "./Bodypart";

export class User {
    id?: number | undefined;
    gender?: number | undefined;
    height?: number | undefined;
    weight?: number | undefined;
    age?: number | undefined;
    measures?: Array<Bodypart> | undefined;
    isActive?: boolean | undefined;
}