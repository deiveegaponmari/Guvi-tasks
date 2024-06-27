class movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;

    }
    static getPG(data) {
        return data.filter(movie=>movie.rating=="PG");

    }
}
const movies = [
    new movie("Theri", "studio A", "PG"),
    new movie("amman", "studio B", "PG-23"),
    new movie("visil", "studio C", "PG-36"),
    new movie("vallavan", "studio D", "PG"),
];
const casinoRoyale = new movie(
    "Casino Royale",
    "Eon Productions",
    "PG­13");
    const output=movie.getPG(movies);
    console.log(output);
/* const film=new movie(
    "kamali from nadukaveri",
    "Avm studio",
    "PG");

    const film2=new movie(
        "Casino Royale",
        "Eon Productions",
        "PG­13"
    ); */
    //console.log(film.getPG());
    //console.log(film2.getPG());
    //const data=[film,film2];
//console.log(data);
//const output=getPG(data);
//console.log(output)