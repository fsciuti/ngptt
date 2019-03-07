export interface Task {
    id: number;
    name: string;
    start: Date;
    duration: number;
    isBillable: boolean;
}