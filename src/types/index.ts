export type IASRImage = Pick<HTMLImageElement, "src" | "alt">;

export interface Milestone {
    date?: string;
    description: string;
    image?: IASRImage;
    title: string;
}
