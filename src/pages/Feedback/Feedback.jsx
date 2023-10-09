

const Feedback = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Provide your feedback</h1>
        </div>
        <div className="card flex-shrink-0 w-full  lg:w-[600px] shadow-2xl bg-base-100">
          <form className="card-body w-full">
            <div className="form-control">
              <label className="label">
                <span className="text-base">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base">Your Feedback</span>
              </label>
              <textarea
                className="textarea textarea-secondary"
                placeholder="Bio"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
