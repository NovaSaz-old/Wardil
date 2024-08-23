import newsImg from "../assets/images/news1.png";

export default function NewsCard() {
  return (
    <div className="grid grid-cols-1 rounded-xl bg-white pb-8 shadow-md drop-shadow-sm zf:w-64 ss2:w-9/12 ss3:w-10/12 sms:w-[22rem]">
      <div className="h-54">
        <img
          className="w-full rounded-b-none rounded-t-xl bg-cover object-cover"
          src={newsImg}
        />
      </div>
      <div className="mt-4 px-4">
        <h4
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
          className="text-3xl font-medium"
        >
          What our clients say about charity
        </h4>
        <p className="my-4">
          I donated to HopeRaiser Charity Organization and was impressed by
          their transparency and efficiency. The donation process was seamless,
          and I had lots of fun doing it.
        </p>
        <button className="mt-2 rounded bg-blue-600 px-4 py-2 text-white">
          Read More
        </button>
      </div>
    </div>
  );
}
