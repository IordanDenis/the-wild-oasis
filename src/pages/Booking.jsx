import BookingDetail from "../features/bookings/BookingDetail";

// A page should not fetch data or should not have any side effects. Although it is not a hard rule, this leaves the pages folder cleaner and leave the development work in the features folder
function Booking() {
  return <BookingDetail />;
}

export default Booking;
