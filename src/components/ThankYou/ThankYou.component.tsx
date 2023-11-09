import {BsWhatsapp, BsCheck} from 'react-icons/bs'

const ThankYou = () => {


    return (
        <section className="bg-white flex flex-col px-20 max-md:px-5">
            <div className="self-center flex w-full max-w-[993px] flex-col mb-32 max-md:max-w-full max-md:my-10">
                <div className="w-32 h-32 md:w-72 md:h-72 flex justify-center items-center self-center">
                    <BsCheck className="h-full w-full" />
                </div>
                <h1 className="text-black text-2xl md:text-3xl font-bold self-center max-md:max-w-full">
                    ¡Listo, nos vemos en la cita que agendaste!
                </h1>
                <p className="text-black text-base md:text-xl font-bold self-stretch mt-10 max-md:max-w-full max-md:mt-8">
                    Envíanos mensaje por WhatsApp para confirmar tu asistencia y recibir nuestro E-book “La era Dorada del MLM” con la propuesta de valor de Top X, el cuál deberás leer antes de nuestra reunión.
                </p>
                <p className="text-black text-xl md:text-2xl font-bold self-center mt-10 max-md:max-w-full max-md:mt-8">
                    Los grandes se preparan para las grandes oportunidades.
                </p>
                <a
                    href="https://wa.link/o9ssxl"
                    target="_blank"
                    className="
                        flex
                        justify-center
                        items-center
                        border
                        bg-amber-300
                        self-center
                        w-[479px]
                        max-w-full
                        gap-2.5
                        mt-8
                        p-2.5
                        rounded-md
                        border-solid
                        border-amber-300
                        md:flex-wrap
                        md:mt-10"
                    >
                        <BsWhatsapp className="text-3xl" />
                        <h1 className="text-black text-xl font-bold whitespace-nowrap shrink basis-auto md:text-3xl">
                            Confirmar mi asistencia
                        </h1>
                    </a>
            </div>
        </section>
    );
}

export default ThankYou;