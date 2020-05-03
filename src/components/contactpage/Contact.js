import React from 'react';
import Title from '../Title';


export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact us"></Title>
                    <form className="mt-5" action="https://formspree.io/kzahid416@gmail.com"
                        method="POST">
                        {/* {first name} */}
                        <div className="form-group">
                            <input type="text" name="firstname" className="form-control"
                            placeholder="Muhammad Zahid"></input>
                        </div>
                        {/* {email} */}
                        <div className="form-group">
                            <input type="email" name="email" className="form-control"
                            placeholder="email@email.com"></input>
                        </div>
                        {/* {subject} */}
                        <div className="form-group">
                            <input type="text" name="subject" className="form-control"
                            placeholder="important!!!"></input>
                        </div>
                        {/* {Message} */}
                        <div className="form-group">
                            <textarea name="message" className="form-control"
                            rows="10" placeholder="hello there buddy">

                            </textarea>
                        </div>
                        <div className="form-group mt-3">
                            <input type="submit" className="form-control bg-primary text-white"
                            value="Send"></input>
                        </div>
                    </form>

                </div>

            </div>

        </section>
    )
}
