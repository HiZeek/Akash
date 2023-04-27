import Button from "../../ui/Button";

const ContactForm = () => {
  return (
    <form className="mt-10 w-[628px]">
      <div className="flex gap-12 mb-10">
        <div>
          <label htmlFor="name" className="text-[22px]">
            Enter Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-[290px] border-b-2 border-black border-opacity-20 outline-none bg-transparent text-formGray focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-[22px]">
            Enter Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-[290px] border-b-2 border-black border-opacity-20 outline-none bg-transparent text-formGray focus:border-green-500"
            placeholder=""
          />
        </div>
      </div>
      <div className="flex gap-12 mb-10">
        <div>
          <label htmlFor="country" className="text-[22px]">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            className="w-[290px] border-b-2 border-black border-opacity-20 outline-none bg-transparent text-formGray focus:border-green-500"
          />
        </div>
        <div>
          <label htmlFor="Contact" className="text-[22px]">
            Contact number
          </label>
          <input
            id="Contact"
            name="Contact"
            type="tel"
            className="w-[290px] border-b-2 border-black border-opacity-20 outline-none bg-transparent text-formGray focus:border-green-500"
          />
        </div>
      </div>
      <div className="mb-10">
        <label htmlFor="Contact" className="text-[22px]">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-6 text-sm border-b-2 border-black border-opacity-20 outline-none bg-transparent text-formGray focus:border-green-500 resize-none"
        />
      </div>
      <div className="flex justify-center">
        <Button className="font-normal bg-white py-[26px] px-[111px] drop-shadow-[0px_21px_35px_rgba(0,0,0,0.13)]">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
