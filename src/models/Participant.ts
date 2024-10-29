import Party from "./Party";

export default interface Participiants{
  id: number;
  name: string;
  email: string;
  attendParties?: Party[];
}