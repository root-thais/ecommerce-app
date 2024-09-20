declare namespace Express {
  export interface Request {
    user?: {
      user_id: number,
      name: string,
      email: string,
      document_cpf: string,
      date_of_birth: string,
      phone_number: string,
      gender: string,
      password: string,
      type: string,
      created_at: string,
      updated_at: string,
      deleted_at: string
    }
  }
}

