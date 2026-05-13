import { carta } from "./carta";

export interface mazoCarta {
    cards: Array<carta>;
    deck_id: string;
    remaining: number;
    success: boolean;
}
