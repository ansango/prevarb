import { FormEvent } from 'react';

const ContactForm = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submitted");
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <label className="block">
                        <select className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  ">
                            <option disabled selected>Tipo de consulta</option>
                            <option>Información</option>
                            <option>Socios</option>
                            <option>Otra</option>
                        </select>
                    </label>
                    <label className="block">
                        <select className="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  ">
                            <option selected disabled>Eres cliente</option>
                            <option>Si</option>
                            <option>No</option>
                        </select>
                    </label>
                    <label className="block">
                        <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="Nombre*" />
                    </label>
                    <label className="block">
                        <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="Apellidos*" />
                    </label>
                    <label className="block">
                        <input type="email" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="Email*" />
                    </label>
                    <label className="block">
                        <input type="text" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="Teléfono*" />
                    </label>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-5">
                    <label className="block">
                        <textarea className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="Tu mensaje*"></textarea>
                    </label>
                    <div className="block">
                        <div className="mt-2">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="
                          rounded
                          border-gray-300
                          text-indigo-600
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                        "  />
                                    <span className="ml-2">He leido y acepto los términos y condiciones de uso</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center md:justify-end py-8"><button type="submit" className="bg-gray-200 px-8 py-2 rounded-md">Enviar</button></div>
            </div>
        </ form>
    )
}

export default ContactForm
