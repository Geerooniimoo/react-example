import './Contact.css';

const Contact = () => {

    const showAlert = e => {
        let target = e.target;
        let alert = document.getElementById('alert');
        console.log('target: ',target.value);

        if(target.id=='Email' && !target.value.match(/.+@.+\..+/)) alert.innerText = target.id + ' not valid!!!';
        if(!target.value) alert.innerText = target.id + ' is required!!!';
        alert.style.display = 'block';
        setTimeout(() => { alert.innerText = '' }, 2000);
    };

    return (
        <div className='contact'>
            <h1>Contact</h1>
            <h4>Name:</h4>
            <input id='Name' onBlur={e => showAlert(e)} />
            <h4>Email address:</h4>
            <input id='Email' onBlur={e => showAlert(e)} />
            <h4>Message:</h4>
            <textarea id='Message' onBlur={e => showAlert(e)} />
            <h4 id='alert'></h4>
            <button>Submit</button>
        </div>
    );
}

export default Contact;