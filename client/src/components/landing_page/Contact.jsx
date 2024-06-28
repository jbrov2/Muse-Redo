function Contact() {
  return (
    <>
      <section className="contact my-[80px] xl:mt-[200px]">
        <div className="max-w-[1466px] mb-8 mx-4 xl:mx-auto px-6 xl:px-0 h-[368] items-center">
          <div className="container mx-auto mb-[400px] xl:px-0 ">
            <div className="flex mb-8 flex-col text-left ">
              <h2 className="contact_header h2 mb-8 text-secondary text-left">
                Contact
              </h2>{" "}
              <p className="p">
                Want to send feedback or ask a question? <br />
                <span className="font-bold">Fill out this form. </span>
              </p>
            </div>
            <div className="form outline rounded-xl p-4">
              <form className="flex flex-col " action="">
                <label htmlFor="name">First Name</label>
                <input
                  className="placeholder:italic placeholder:text-accent w-80"
                  type="text"
                  id="name"
                  name="name"
                  minLength={3}
                  size={20}
                  required
                  placeholder="Enter your name..."
                />
                <label htmlFor="email">Email</label>
                <input
                  className="placeholder:italic placeholder:text-accent w-full"
                  type="text"
                  id="email"
                  name="email"
                  minLength={3}
                  required
                  placeholder="Enter your email..."
                />
                <label htmlFor="comments">Comments and Concerns</label>
                <textarea
                  className="placeholder:italic placeholder:text-accent"
                  id="comments"
                  name="comments"
                  rows={3}
                  required
                  placeholder="Enter your comments..."
                />
                <input
                  className="btn bg-accent w-80 flex mt-16 mb-4 hover:cursor-pointer hover:scale-105 transition-all duration-300"
                  type="button"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
