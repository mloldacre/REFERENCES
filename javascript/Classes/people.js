class people {
  
  constructor( people = [] ){
    this.people = people;
  }
  
  addPeople( person ){
    this.people.push(person);
  }
  
  getPeople(){
    return this.people;
  }
  
}

module.exports = people;