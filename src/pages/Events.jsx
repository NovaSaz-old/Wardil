import EventCard from "../components/EventCard";

export default function Events() {
  return (
    <div className="px-2 py-20 lg:px-10 2xl:px-24">
      <div
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" }}
        className="text-center"
      >
        <h3 className="text-2xl font-medium text-[#293A73]">HELP OTHERS</h3>
        <h2 className="my-4 text-4xl font-semibold 2xl:text-5xl">
          Introducing Our Campaign
        </h2>
        <p className="my-4 text-lg sm:p-4 lg:p-0 2xl:text-xl">
          Join us in creating a brighter future. Your support will make a
          tangible difference in the lives of those in need.
        </p>
      </div>
      <div className="my-20 grid gap-4 sm:p-8 lg:grid-cols-2 lg:gap-10 lg:p-0 2xl:gap-24">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
