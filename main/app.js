function addTokens(input, tokens){
    if(typeof input!='string'){
        throw new Error('Invalid input');
    }
    if(input.length < 6)
    {
        throw new Error('Input should have at least 6 characters');
    }
    
   for(var i in tokens)
   {
       if(typeof tokens[i].tokenName!=='string')
       {
           throw new Error('Invalid array format');
       }
       else
       {
           if(input.includes('...'))
           {
                input=input.replace('...','${'+tokens[i].tokenName+'}');
                return input;
           }
           else
           {
               return input;
           }
       }
   }
}

const app = {
    addTokens: addTokens
}

module.exports = app;