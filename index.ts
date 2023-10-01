/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

let guestList: Array<any> = [
    "Zia",
    "Ali",
    "Asad",
    "Alamat",
];

// Step 1. Print the name of person who can't make it.

let guestHowCantMakeIt: string = "Alamat"
console.log(`${guestHowCantMakeIt} can't make it to Dinner.`)

// Step 2. Repalce the name of guest who can make it.

let NewGuest: string = "Ubedullah"
let indexOfguestHowCanMakeIt: number = guestList.indexOf(guestHowCantMakeIt)
//console.log(indexOfguestHowCanMakeIt)
if (indexOfguestHowCanMakeIt !== -1) 
{
    guestList[indexOfguestHowCanMakeIt] = NewGuest
}
//console.log(guestList[2])

// Step 3. Print a second set of invitation messages.
console.log("Second set of invitation messages:")
guestList.forEach((guest:string) => {
    console.log(`Dear ${guest}, You are invited to Dinner.`)
})