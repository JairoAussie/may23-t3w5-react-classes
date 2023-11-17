//Media class as a generic starting point
// Then we can have videogames, books, movies, etc.

//Blueprint of data
class Media {
    constructor(){
        this.name = "Default generic media";

        Media.count++;
    }

    // count of all Media that exist
    static count = 0;

    getMediaName(){
        if (this.name){
            return this.name;
        } else {
            return "Media doesn't have a name";
        }
        
    }

    static version(){
        return "class version 0.0.1";
    }

    version(){
        return "instance version 0.0.1";
    }
}
// instances of the blueprint
let media1 = new Media();
media1.name = "A cool book about programming";
console.log(media1.getMediaName());
console.log(media1.version());

let media2 = new Media();
console.log(media2.name);

console.log(Media.count);
console.log(Media.version());
console.log(Media.prototype.version());
console.log(Media.prototype.getMediaName());