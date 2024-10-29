import Party from "../models/Party";

export default class Parties{
  private events: Map<number, Party> = new Map();  

  constructor(){ }
  
  public get allParties() : Map<number, Party> {
    return this.events;
  }  

  addParty(party: Party): void {    
    this.events.set(party.partyId, party);
  }

  removeParty(partyId: number) {
    this.events.delete(partyId);    
  }  

  findPartyById(partyId: number): Party | string { 
    let desiredEvent: Party | undefined = this.events.get(partyId); 
   
    if (desiredEvent) {
      return desiredEvent;
    } 
    else {
      return "Nincs meghírdetve ilyen rendezvény";
    }
  }

  listAllParties(): void {    
    if (this.events.size > 0) {
      this.events.forEach((value, key) => {       
        console.log(key, value);
      });
    } 
    else {
     console.log("Ezen a télen nincs már több rendezvény");
    }
  }
}