function NoReturn(...args: string[]): void{
    console.log(args.join (" "))
}
const person ={
    name:"Fulano",
    LastName:"Barcelos",

    DisplayName(): void{
        console.log(this.name + " " + this.LastName)
    }

}
person.DisplayName()
export { person }
