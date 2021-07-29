/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-empty */

module.exports = class thing
{
  constructor(data = {})
  {

    let a = data.a; 
    this.a = {
      set:(value)=>{
        if(this.events.onChange)
        {
            this.events.onChange({value})
        }
        a = value;
      },
      value:()=>{return a}
    };
    this.events = {};
  }
  
  addEventListener(type, callback=()=>{})
  {
    if(type)
    {
        this.events[type] = callback;
    }
    else
    {
        throw new Error('Event could not find type.');
    }
  }
};