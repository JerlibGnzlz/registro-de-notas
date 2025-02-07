export interface IAdministrador {
    id?: number;
    name: string
    email: string;
    password: string;
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: boolean
}