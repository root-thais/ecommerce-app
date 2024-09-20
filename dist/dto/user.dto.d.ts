export declare class UserDto {
    name: string;
    email: string;
    password: string;
    document_cpf: string;
    date_of_birth: string;
    address?: string;
    phone_number: string;
    gender: string;
    type: 'admin' | 'seller' | 'client';
}
