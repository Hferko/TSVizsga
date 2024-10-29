export class Category {
  constructor(public style: string) {}  
}

export class SolidDance extends Category {  
  public type: string;

  constructor(style: string, type: string) {
    super(style);    
    this.type = type;
  }
}

export class Scientific extends Category {  
  public science: string;

  constructor(style: string, science: string) {
    super(style);      
    this.science = science;
  }
}

type Genre = "rock" | "pop" | "symphony";
export class Concert extends Category {  
  public content: Genre;

  constructor(style: string, content: Genre) {
    super(style);    
    this.content = content;
  }
}