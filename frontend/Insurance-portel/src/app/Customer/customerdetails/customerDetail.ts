export class CustomerDetail{
    customerId:String;
    customerName:String;
    phone:any
    status:String;

constructor(CustomerId:String,CustomerName:String,PhoneNo:any,Status:String){
    this.customerId=CustomerId;
    this.customerName=CustomerName;
    this.phone=PhoneNo;
    this.status=Status;
}

}