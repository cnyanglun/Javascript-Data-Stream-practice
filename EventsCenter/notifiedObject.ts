class notifiedObject{
    public name: string;

    constructor(name:string){
        this.name = name;
    }


    public notify(){
        console.log(this.name, ' has been notified');
    }
}

export default notifiedObject;