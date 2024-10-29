import Party from "../models/Party.js";
import Parties from "./parties.js";

export default class Subscribe<T> {
  parties: Parties;
  allParties:  Map<number, Party>;  

  constructor() {   
    this.parties = new Parties();
    this.allParties = this.parties.allParties;    
  }

  subscribeToParty(partyId: number): Party | string{    
    let desiredParty: Party | string = this.parties.findPartyById(partyId);    
    if (typeof desiredParty !== "string") {         
      return desiredParty; 
    }  
    else{
      return "Ezen a télen nincs ilyen buli.";
    }  
  }
}
