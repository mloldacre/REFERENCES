function checkThis() {
    console.log(this);
}

checkThis();

console.log('2nd this:', {this:this});

console.log('3rd this:', this.document);