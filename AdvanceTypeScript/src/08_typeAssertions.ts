let phone = document.getElementById('phone') as HTMLInputElement;

phone.value

// another example

let someValue: any = 'This is my first code';
let strLength: number = (<string>someValue).length;

let someNewValue: any = 'This is myh second code';
let strNewLength: number = (someNewValue as string).length
