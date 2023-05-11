 //Type assertion --------------------
 
 let emni : any;
 emni = "Web level";
 (emni as string).length;
 <string> emni;


 function KgToGram(param:string|number): string|number|undefined {
    if(typeof param === "string") {
        const value = parseFloat(param)*1000;
        return `The Convert result is ${value} gram`;
    }
    if(typeof param === 'number'){
        const value = param*1000;
        return value;
    }
 }

//  const result = KgToGram(100) as number;
//  const result1 = KgToGram('100') as string;

 const result =<number> KgToGram(100);
 const result1 =<string> KgToGram('100');
 console.log(result);
 console.log(result1);

 //Custom Error type handle------------

 type CustomErrorType = {
    message: string;
 }
 try {

 }catch(err){
    console.log((err as CustomErrorType).message);
 }