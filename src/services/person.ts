import Participiants from "../models/Participant";
import Subscribe from "./subscribe";

export default class Persons { 
  private persons: Participiants[] = []; 
  public _id: number;
  private _name: string;
  private _email: string;

  constructor() {
    this._id = this.personId;
    this._name = this.name;
    this._email = this.email;   
  }

  public get personList(): Participiants[] {
    return this.persons;
  }

  public set personLista(ersonList: Participiants[]) {
    if (this._id && this._name && this._email) {
      this.persons.push({id: this._id, name:this.name, email:this.email});
    }
    else{
      console.log("Helytelen adatokat kaptam !");
    }    
  }  
  
  public set personId(id : number) {  
    if (typeof id ==="number" && id > this.persons.length) {
      this._id = id;      
    } 
    else {
      console.error(`${this.persons.length}-től nagyobb számot kérek!`);
      return;
    }
  }  

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName && newName.length > 0) {
      this._name = newName;
    } 
    else {
      console.error("Nem ér a neved...");
      return;
    }
  }

  get email(): string {
    return this._email;
  }

  set email(newEmail: string) {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    if (newEmail && newEmail.length > 0 && regex.test(newEmail)) {
      this._email = newEmail;
    } else {
      console.error("Helytelen email cím.");
      return;
    }
  }

  findtGuyById(id: number): Participiants | string{
    let guy = this.persons.find((guy) => guy.id === id);
    if (guy) {      
       return guy;
    }
    else{
      return "Nincs ilyen jelentkező";
    }   
  }

  subscription(id: number, partyId: number){
    const subscribe = new Subscribe();
    let wantedEvent = subscribe.subscribeToParty(partyId);
   
    let fellow = this.findtGuyById(id);
    if (typeof fellow !== "string") {
      fellow.attendParties = [];

      if (typeof wantedEvent !== "string") {
        fellow.attendParties.push(wantedEvent)
        console.log(`${fellow.name} ezekre a bulikra jelentkezett: `);
        console.log(fellow.attendParties);
      }
    }    
    else{
      console.log("Kölcsönzés sikertelen");
    }
  }

  deleteSubscribe(id: number, partyId: number){
    let fellow = this.findtGuyById(id);
    if (typeof fellow !== "string" && fellow.attendParties?.length !== 0) {
      fellow.attendParties = fellow.attendParties?.filter(party => party.partyId !== partyId)
    }
  }
}
