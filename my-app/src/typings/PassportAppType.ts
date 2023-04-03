interface User {
  name: string;
  dateOfBirth: Date;
  nrcNumber: string;
  email: string;
  phoneNumber: string;
}

export interface PassportAppType {
  date: Date | null;
  time: number | null;
  user: User | null;
  handleUpdate: (data: any) => void;
}
