let firstName = document.getElementById( 'firstName' );
let lastName = document.getElementById( 'lastName' );
let email = document.getElementById( 'email' );
let password = document.getElementById( 'password' );



let form = document.getElementById( 'form' ).addEventListener( 'click', ( event ) => {
    event.preventDefault();
} );

let validarForm = () => {

    let caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ;

    let soloTexto = /^[a-zA-Z\s]*$/;
    
    let firstNameMessage = document.querySelector( '#messageFirstName' );
    let lastNameMessage = document.querySelector( '#messageLastName' );
    let emailMessage = document.querySelector( '#messageEmail' );
    let passwordMessage = document.querySelector( '#messagePassword' );
    // let formMessage = document.querySelector( '#messageForm' );



        // first name

        if( firstName.value !== '' && soloTexto.test( firstName.value ) ) {
            // firstNameMessage.innerHTML = 'OK FirstName';
            firstName.classList.add( 'form__input--okay' );
            firstName.classList.remove( 'form__input--wrong' );
            firstNameMessage.style.visibility = 'hidden';
            lastName.focus();
        }
        else {
            firstNameMessage.innerHTML = 'Please enter only letters';
            firstNameMessage.style.visibility = 'visible';
            firstName.classList.add( 'form__input--wrong' );
        }
        // last name
        if( lastName.value !== '' && soloTexto.test( lastName.value ) ) {
            // lastNameMessage.innerHTML = 'Ok LastName';
            lastName.classList.add( 'form__input--okay' );
            lastName.classList.remove( 'form__input--wrong' );
            lastNameMessage.style.visibility = 'hidden';
            email.focus();
        }
        else {
            lastNameMessage.innerHTML = 'Please enter only letters';
            lastNameMessage.style.visibility = 'visible';
            lastName.classList.add( 'form__input--wrong' );
        }
        // email
        if ( email.value !== '' && caracteres.test( email.value ) ) {
            // emailMessage.innerHTML = 'Correo correcto';
            email.classList.add( 'form__input--okay' );
            email.classList.remove( 'form__input--wrong' );
            emailMessage.style.visibility = 'hidden';
            password.focus();
        }
        else {
            emailMessage.innerHTML = `
            Please, verify that you have written your email correctly`;
            emailMessage.style.visibility = 'visible';
            email.classList.add( 'form__input--wrong' );
            email.innerHTML = `example@gmail.com`;
        }
        // password
        if( password.value !== '' ) {
            // passwordMessage.innerHTML = 'Password oculta';
            password.classList.add( 'form__input--okay' );
            password.classList.remove( 'form__input--wrong' );
            passwordMessage.style.visibility = 'hidden';
            btnSend.focus();
        }
        else {
            passwordMessage.innerHTML = `Please enter only letters and numbers
            `;
            passwordMessage.style.visibility = 'visible';
            password.classList.add( 'form__input--wrong' );
        }
        
        verTexto();
    }

btnSend.addEventListener( 'click', validarForm );