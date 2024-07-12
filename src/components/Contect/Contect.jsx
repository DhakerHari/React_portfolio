import React from 'react'
import './contect1.css'
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contect = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "0c6a77a3-ddc2-454a-9c1b-4e9fd4db1cd3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert(res.message);
        }
    };
    return (
        <div id='contect' className='contect1'>
            <div className="contect-title">
                <h1>Get In Touch</h1>
                <img src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="lagani baki he" />
            </div>
            <div className="contect-section">
                <div className="contect-left">
                    <h1>Let's Talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum hic voluptas deleniti fugit consequuntur.</p>
                    <div className="contect-details">
                        <div className="contect-detail">
                            <img src={mail_icon} alt="" />
                            <p>hariprasaddhaker0@gmail.com</p>
                        </div>
                        <div className="contect-detail">
                            <img src={call_icon} alt="" />
                            <p>6378552278</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contect-right'>
                    <div><label for="name">Enter your name</label>
                    <input type="text" name="name" id='label'/></div>
                    <div><label for="email">Enter your Email</label>
                    <input type="email" name="email" id='email' /></div>
                    <div><label for="msg">Any message for me</label>
                    <textarea name="message" id='msg'></textarea></div>
                    <button type="submit" className='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contect
