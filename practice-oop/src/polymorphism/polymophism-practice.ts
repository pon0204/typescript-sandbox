interface IAnimal {
  name: string
  shout(): void
}

class Animal {
  shout(animal: IAnimal) {
    animal.shout()
  }
}

class Dog {
  constructor(readonly name: string) {
    this.name = name
  }
  shout() {
    console.log(`${this.name}: ワン!`)
  }
}

class Cat {
  constructor(readonly name: string) {
    this.name = name
  }
  shout() {
    console.log(`${this.name}: ニャー!`)
  }
}

const dog = new Dog('ぽち')
const cat = new Cat('たま')
new Animal().shout(cat)
new Animal().shout(dog)
