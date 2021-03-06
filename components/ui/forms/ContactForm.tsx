import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { postContactForm } from "services";

type Inputs = {
  request: string;
  member: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
};

type Props = {
  translations: any;
};

const ContactForm: FC<Props> = ({ translations }) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const {
      data: { message },
    } = await postContactForm(formData);
    alert(message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <label className="block">
            <span className="text-sm font-medium leading-5 text-gray-700">
              {translations.request.options.default}
            </span>
            <select
              className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
              {...register("request", { required: true })}
            >
              <option value="information">{translations.request.options.information}</option>
              <option value="members">{translations.request.options.members}</option>
              <option value="other">{translations.request.options.other}</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium leading-5 text-gray-700">
              {translations.member.options.default}
            </span>
            <select
              className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
              {...register("member", { required: true })}
            >
              <option value="yes">{translations.member.options.yes}</option>
              <option value="no">{translations.member.options.no}</option>
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-medium leading-5 text-gray-700">
              {translations.firstName}
            </span>
            <input
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
              placeholder={translations.firstName}
              {...register("firstName", { required: true, maxLength: 20 })}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium leading-5 text-gray-700">
              {translations.lastName}
            </span>
            <input
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
              placeholder={translations.lastName}
              {...register("lastName", { required: true, maxLength: 20 })}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium leading-5 text-gray-700">
              {translations.email}
            </span>
            <input
              type="email"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
              placeholder={translations.email}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium leading-5 text-gray-700">
              {translations.phone}
            </span>
            <input
              type="text"
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
              placeholder={translations.phone}
              {...register("phone", { required: true, maxLength: 20 })}
            />
          </label>
        </div>
        <div className="grid grid-cols-1 gap-2 pt-5">
          <label className="block">
            <span className="text-sm font-medium leading-5 text-gray-700">
              {translations.message}
            </span>
            <textarea
              className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50
                  "
              placeholder={translations.message}
              {...register("message", { required: true, maxLength: 1000 })}
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="
                          rounded
                          border-gray-300
                          text-primary
                          shadow-sm
                          focus:border-primary
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-primary
                          focus:ring-opacity-50
                        "
                    {...register("privacy", { required: true })}
                  />
                  <span className="ml-2">{translations.privacy}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end py-8">
          <button type="submit" className="bg-gray-200 px-8 py-2 rounded-md">
            {translations.send}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
