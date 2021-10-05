export class Transport{
    constructor(public Title:string,
        public Type:string,
        public Description:string,
        public Veight:number,
        public Length:number,
        public Height:number){
            this.Title = Title;
            this.Type = Type;
            this.Description = Description;
            this.Veight = Veight;
            this.Length = Length;
            this.Height = Height;
    }
}