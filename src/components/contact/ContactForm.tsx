"use client";
import { useState } from "react";
import { Variants, motion } from "framer-motion";

const sectionVariants: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 1,
    },
  },
};

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/980f6ec0-1dad-11ee-b0a7-9f000c4c1540";

function useContactForm() {
  const [status, setStatus] = useState<string>();

  const handleFormSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const injectedData: Record<string, string | number> = {
      // Here you can specify anything you need to inject dynamically, outside the form. For example:
      // DYNAMIC_DATA_EXAMPLE: 123,
    };

    const inputs = Array.from(form.elements) as HTMLFormElement[];
    const data = inputs
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {} as Record<string, string>
      );

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot submission, so bypass it to validate via captcha challenge old-school style
        if (response.status === 422) {
          // Append dynamically generated keys back to the form
          Object.keys(injectedData).forEach((key) => {
            const el = document.createElement("input");
            el.type = "hidden";
            el.name = key;
            el.value = injectedData[key].toString();

            form.appendChild(el);
          });

          // Let's submit the form again and spammer/bot will be redirected to another page automatically
          // Submitting via javascript will bypass calling this function again
          form.setAttribute("target", "_blank");
          form.submit();

          throw new Error("Veuillez terminer le défi du captcha.");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("Nous vous contacterons bientôt."))
      .catch((err) => setStatus(err.toString()));
  };

  return { status, handleFormSubmit };
}

// Here goes the rest of the code...

function ContactForm() {
  const { status, handleFormSubmit } = useContactForm();

  if (status) {
    return (
      <div className="md:w-96 md:max-w-full w-full mx-auto">
        <div className="sm:rounded-md p-6 border border-gray-300">
          <div className="text-2xl">Merci!</div>
          <div className="text-md">{status}</div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full h-auto px-[50px] sm:px-[134px] lg:px-[164px] "
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={sectionVariants}
    >
      <form
        method="POST"
        action={FORM_ENDPOINT}
        className="flex flex-col gap-4 items-center mb-20"
      >
        <label className="w-full lg:w-9/12 ">
          <input
            type="text"
            name="name"
            className="w-full h-10 border border-marron pl-4 text-green font-light text-left  text-base lg:text-lg xl:text-xl placeholder:text-green  placeholder:font-thin tracking-wide focus:border-green focus:border-2 focus:outline-none"
            placeholder="Votre nom*"
          />
        </label>
        <label className="w-full lg:w-9/12 ">
          <input
            name="email"
            type="email"
            className="w-full h-10 border border-marron pl-4 text-green font-light text-left  text-base lg:text-lg xl:text-xl placeholder:text-green  placeholder:font-thin tracking-wide focus:border-green focus:border-2 focus:outline-none"
            placeholder="E-mail*"
            required
          />
        </label>
        <label className="w-full lg:w-9/12 ">
          <textarea
            name="message"
            className="w-full h-40 border border-marron pl-4 pt-3 text-green font-light text-left  text-base lg:text-lg xl:text-xl placeholder:text-green  placeholder:font-thin tracking-wide focus:border-green focus:border-2 focus:outline-none"
            rows={3}
            placeholder="Message..."
          ></textarea>
        </label>
        <div className="w-full lg:w-9/12 flex justify-center sm:block">
          <button
            type="submit"
            className="max-[360px]:w-36 w-44 h-12 lg:w-60 lg:h-16 border border-marron p-1 mt-4"
          >
            <div className="bg-marron w-full h-full flex items-center justify-center uppercase tracking-[3px] lg:tracking-[5px] font-light text-white max-[360px]:text-[12px] text-sm lg:text-base ease-in duration-100 hover:bg-white hover:text-marron hover:duration-100 hover:ease-in">
              Envoyer
            </div>
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default ContactForm;
