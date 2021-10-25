import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.open(`mailto:info@arbore.org?subject=${data.request}&body=${data.message}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <label className="block">
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
              defaultValue={translations.request.select}
              {...register("request", { required: true })}
            >
              <option disabled>{translations.request.options.default}</option>
              <option value="information">{translations.request.options.information}</option>
              <option value="members">{translations.request.options.members}</option>
              <option value="other">{translations.request.options.other}</option>
            </select>
          </label>
          <label className="block">
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
              defaultValue={translations.member.select}
              {...register("member", { required: true })}
            >
              <option disabled>{translations.member.options.default}</option>
              <option value="yes">{translations.member.options.yes}</option>
              <option value="no">{translations.member.options.no}</option>
            </select>
          </label>
          <label className="block">
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
