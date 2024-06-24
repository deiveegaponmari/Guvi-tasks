class movie{
    constructor(title,studio,rating=PG){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
    const data=[this.title,this.studio,this,rating]
    getPG(){
        return this.rating=="PG";

    }
}
const film=new movie(
    "kamali from nadukaveri",
    "Avm studio",
    "PG");

    const film2=new movie(
        "Casino Royale",
        "Eon Productions",
        "PG­13"
    );
    console.log(film.getPG());
    console.log(film2.getPG());