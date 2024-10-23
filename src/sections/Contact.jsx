import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    // service_n38yccv
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            emailjs.send('service_n38yccv', 'template_ap4bopw',
                {
                    from_name: form.email,
                    to_name: 'Anurag',
                    from_email: form.email,
                    to_email: 'ak0375451@gmail.com',
                    message: form.message,
                },
                'qu7ft7frnW5d3tlVT'
            )

            setLoading(false);

            alert("Your message has been sent!");

            setForm({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong!")
        }

    }

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col" id="contact">
                <img src="/assets/terminal.png" alt="bg" className="absolute lg:block sm:hidden min-h-screen" />

                <div className="contact-container">
                    <h3 className="head-text">Contact Me</h3>
                    <p className="text-white-600 mt-3 text-lg">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input type="text" name="name" value={form.name} className="field-input" placeholder="John Doe" onChange={handleChange} required />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" value={form.email} className="field-input" placeholder="example@xyz.com" onChange={handleChange} required />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea name="message" value={form.message} rows={5} className="field-input" placeholder="Hi, you're so talented, so let's talk....." onChange={handleChange} required />
                        </label>

                        <button type="submit" className="field-btn" disabled={loading}>{loading ? "Sending ..." : "Send Message"}
                            <img src='/assets/arrow-up.png' alt="arroe-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact