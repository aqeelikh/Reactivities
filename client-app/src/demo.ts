export interface Duck{
    name: string,
    numLegs: number,
    makeSounds: (sound: string) => void
}

const duck1: Duck = {
    name: "alrnold",
    numLegs: 2,
    makeSounds: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: "dewey",
    numLegs: 2,
    makeSounds: (sound: any) => console.log(sound)
}

duck1.makeSounds("quick");
duck2.makeSounds("mew");

export const ducks = [duck1, duck2]