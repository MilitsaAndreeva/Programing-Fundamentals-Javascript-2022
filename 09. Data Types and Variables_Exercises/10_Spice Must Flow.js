function solve (startingYield){

   let i = startingYield;
   let totalAmound = 0;
   let counter ='0';
   let finalAmound = 0;

   while (i>=100){
      

         
      totalAmound+=i-26;
      i-=10;
      
      counter++;
      finalAmound = totalAmound-26
         }
      
  
   
   console.log(counter);
   console.log(finalAmound);

}

solve (-111)