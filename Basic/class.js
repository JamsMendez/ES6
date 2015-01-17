class Person {

  constructor (name, last_name, status) {
    this.name      = name;
    this.last_name = last_name;
    this.status    = status;
  }

  // Method delete
  delete () {
    console.log('Person with id ' + Person.getId() + ' delete');
  }

  // Method getAttr
  getAttr (key) {
    if(key){
      console.log(this[key]);
    }else{
      console.log(this);
    }
  }

  // Method getId 'static'
  static getId () {
    return 1;
  }

}

var person = new Person('José Angel', 'Mendez Santiago', true);
person.getAttr();
person.delete();
