import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class AppValidators {
    static zipcode(control : AbstractControl) : ValidationErrors |null{
      const pattern = /^[0-9]{4,5}$/

      if(control.value){
          if (!pattern.test(control.value))
          {
              return {zipcode: true};
          }
      }
      return null;
}
    static email (requiredDomain? : string) : ValidatorFn{
        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
           return(control : AbstractControl) : ValidationErrors |null=> {
            if(control.value){
                if (!pattern.test(control.value))
                {
                    return {email: true};
                }
                if (requiredDomain){
                    const [,actualDomain] = control.value.split('@')[1];
                    if (actualDomain !== requiredDomain){
                        return { domain :{requiredDomain,actualDomain}}
                    }
                }
            }
            return null;
           }
       
       
    }

}