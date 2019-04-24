export class CustomerDetails{
    CustomerId:String;
    CustomerName:String;
    PhoneNo:any
    Status:String;

constructor(CustomerId:String,CustomerName:String,PhoneNo:any,Status:String){
    this.CustomerId=CustomerId;
    this.CustomerName=CustomerName;
    this.PhoneNo=PhoneNo;
    this.Status=Status;
}
}