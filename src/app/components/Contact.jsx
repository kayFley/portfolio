"use client";

const Contact = () => {
    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="z-10">
                <h5 className="text-xl sm:text-2xl md:text-sm lg:text-3xl font-semibold text-slate-100 my-2">
                    Status
                </h5>
                <p className="text-lg sm:text-lg md:text-xs lg:text-xl xl:text-xl text-slate-400 mb-4 max-w-md">
                    At this point, I&apos;m willing to consider any and all
                    offers.
                </p>
            </div>
        </section>
    );
};

export default Contact;
