export interface Patient{
    pid : number;
    firstName : string;
    lastName : string;
    email : string;
    phone : string;
    address : string;
    city : string;
    state : string;
    zip : string;
    password : string;
    services : [
        {
            sid : number;
            serviceName : string;
            prices : [
                {
                    prID : number;
                    servicePrice : number;
                }
            ]
        }
    ]
    

}