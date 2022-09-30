'use strict'

 const objectFirst = {

        airline : 'LittuIndia',
        iataCode : 'LH',
        bookings: [],
        book(flightNum, name){
            console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum} `);
            this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
        }      
    };



    objectFirst.book(123,'Anjani Singh');
    objectFirst.book(453,'Mohit Sharma');
    
    console.log(objectFirst);


    const objectSecond = {
        airline: 'EuroWings',
        iataCode: 'EW',
        bookings: [],
    }

    const book = objectFirst.book;

    //Does Not Work
    // book(456,'John Williams');

    //Call Method 
    book.call(objectSecond,456,'John Williams');
    console.log(objectSecond)


    //Apply Method
    const flightData  = [587, 'Rahul Gupta'] 
    book.apply(objectSecond,flightData);
    console.log(objectSecond);

    //Note : Apply method does not use anymore in Modern javascript 
    book.call(objectSecond, ...flightData);

    // Summary : These allows us to explicitly define to this keyword in any function that we want but actually there is yet another method that allows us to do same thing, i.e bind method 
