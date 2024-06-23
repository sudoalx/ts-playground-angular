interface Character {
  name: string;
  hp: number;
  skills: string[];
  residence?: string;
}

const hero: Character = {
  name: "Iron Man",
  hp: 100,
  skills: ["Fly", "Supersonic"],
};

hero.residence = "New York";

console.table(hero);
