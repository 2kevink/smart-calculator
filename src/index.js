class SmartCalculator {
  constructor(initialValue) {
    this.tmp = [initialValue];
    this.operands = ['^','*','/','-','+'];
  }

  add(number) {
    this.tmp.push('+');
    this.tmp.push(number);
    return this;
  }
  
  subtract(number) {
    this.tmp.push('-');
    this.tmp.push(number);
    return this;
  }

  multiply(number) {
    this.tmp.push('*');
    this.tmp.push(number);
    return this;
  }

  devide(number) {
    this.tmp.push('/');
    this.tmp.push(number);
    return this;
  }

  pow(number) {
    this.tmp.push('^');
    this.tmp.push(number);
    return this;
  }
  
  toString(){
    for(var i=0; i<this.operands.length; i++){
      var current = this.operands[i];
      for(var j=0; j<this.tmp.length; j++){
    
        if(this.tmp[j]==current){
        if(this.tmp[j]=='^') {
          this.tmp[j] = Math.pow(this.tmp[j-1],this.tmp[j+1]);
          this.tmp.splice(j + 1, 1);
          this.tmp.splice(j - 1, 1);
          j = 0;
        }
        if(this.tmp[j]=='*'){
          this.tmp[j] = this.tmp[j+1]*this.tmp[j-1];
          this.tmp.splice(j + 1, 1);
          this.tmp.splice(j - 1, 1);
          j = 0;
        }
        if(this.tmp[j]=='/'){
          this.tmp[j] = this.tmp[j-1]/this.tmp[j+1];
          this.tmp.splice(j + 1, 1);
          this.tmp.splice(j - 1, 1);
          j = 0;
        }
        
        if(this.tmp[j]=='-'){
          this.tmp[j] = this.tmp[j-1]-this.tmp[j+1];
          this.tmp.splice(j + 1, 1);
          this.tmp.splice(j - 1, 1);
          j = 0;
        }
        if(this.tmp[j]=='+'){
          this.tmp[j] = this.tmp[j+1]+this.tmp[j-1];
          this.tmp.splice(j + 1, 1);
          this.tmp.splice(j - 1, 1);
          j = 0;
        }
        else{
          continue;
        }
        console.log(this.tmp);
        j=0;
        }
      }
    }
    //console.log(this.tmp);
    return this.tmp[0];
  }
}

module.exports = SmartCalculator;
