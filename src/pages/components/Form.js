import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import "../../css/Form.css"
import { Link } from 'react-router-dom';


function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({
        mode: "onTouched",
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const [message, setMessage] = useState(false);

    // Please update the Access Key in the .env
    const apiKey = process.env.PUBLIC_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: apiKey,
        settings: {
            from_name: "Acme Inc",
            subject: "New Contact Message from your Website",
        },
        onSuccess: (msg, data) => {
            setIsSuccess(true);
            setMessage(msg);
            reset();
        },
        onError: (msg, data) => {
            setIsSuccess(false);
            setMessage(msg);
        },
    });

    return (
        <div className="container is-max-widescreen">

            <div className="section is-small">

                <h1 className="title google-font-pd is-size-1 has-text-centered">Get in Touch</h1>
                <p className="google-font-ss is-size-5 has-text-centered">We know that finding the right attorney to represent you is a choice not to be taken lightly.
                    Thats why we offer consultations to walk you through your needs, the scope of your goals, and your budget.
                    <br></br><strong><Link to="/ContactUs"> Book a Consultation Today</Link></strong></p>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="field">
                        <input
                            type="checkbox"
                            id=""
                            className="is-hidden"
                            {...register("botcheck")}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="full_name" className="label">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            autoComplete="off"
                            className={`input ${errors.name ? "is-danger" : ""
                                }`}
                            {...register("name", {
                                required: "Full name is required",
                                maxLength: 80,
                            })}
                        />
                        {errors.name && (
                            <p className="help is-danger">{errors.name.message}</p>
                        )}
                    </div>
                    <div className="field">
                        <label htmlFor="phone_number" className="label">
                            Phone Number
                        </label>
                        <input
                            id="phone_number"
                            type="tel"
                            placeholder="Phone Number"
                            name="phone"
                            autoComplete="off"
                            className={`input ${errors.phone ? "is-danger" : ""
                                }`}
                            {...register("phone", {
                                required: "Enter your phone number",
                                pattern: {
                                    value: /^[0-9]{10}$/i,
                                    message: "Please enter a valid phone number",
                                },
                            })}
                        />
                        {errors.phone && (
                            <p className="help is-danger">{errors.phone.message}</p>
                        )}
                    </div>

                    <div className="field">
                        <label htmlFor="email_address" className="label">
                            Email Address
                        </label>
                        <input
                            id="email_address"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            autoComplete="off"
                            className={`input ${errors.email ? "is-danger" : ""
                                }`}
                            {...register("email", {
                                required: "Enter your email",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Please enter a valid email",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="help is-danger">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="field">
                        <label htmlFor="message" className="label">
                            How Can We Help You?
                        </label>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className={`textarea ${errors.message ? "is-danger" : ""
                                }`}
                            {...register("message", {
                                required: "Enter your Message",
                            })}
                        />
                        {errors.message && (
                            <p className="help is-danger">{errors.message.message}</p>
                        )}
                    </div>
                    <div className="p-3">
                        <label className="checkbox">
                            <input type="checkbox" />
                            &nbsp;<span>By checking this box, I understand that no attorney-client relationship is being created.</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className={`button is-link ${isSubmitting ? "is-loading" : ""
                            }`}>
                        {isSubmitting ? (
                            <span className="icon">
                                <i className="fas fa-circle-notch fa-spin"></i>
                            </span>
                        ) : (
                            "Send Message"
                        )}
                    </button>

                </form>

                {isSubmitSuccessful && isSuccess && (
                    <div className="mt-3 has-text-success">
                        {message || "Success. Message sent successfully"}
                    </div>
                )}
                {isSubmitSuccessful && !isSuccess && (
                    <div className="mt-3 has-text-danger">
                        {message || "Something went wrong. Please try later."}
                    </div>
                )}
            </div>

        </div>
    );
}

export default Form
