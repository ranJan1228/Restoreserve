// import React, { useEffect, useState } from 'react';
// import { format } from 'date-fns';

// const ReservationList = () => {
//   const [reservations, setReservations] = useState([]);
//   const [loading, setLoading] = useState(true);  // State to track loading
//   const [error, setError] = useState(null);  // State to track errors

//   useEffect(() => {
//     // Fetch reservations from the backend
//     fetch('http://localhost:5000/api/reservations')
//       .then((res) => res.json())
//       .then((data) => {
//         setReservations(data);
//         setLoading(false);  // Set loading to false once data is fetched
//       })
//       .catch((err) => {
//         setError('Failed to load reservations');
//         setLoading(false);  // Set loading to false even if there's an error
//         console.error('Fetch error:', err);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading reservations...</p>;  // Show loading text while fetching data
//   }

//   if (error) {
//     return <p>{error}</p>;  // Show error message if something went wrong
//   }

//   return (
//     <div>
//       <h2>All Reservations</h2>
//       <ul>
//         {/* Render reservations */}
//         {reservations.map((r, index) => (
//           <li key={index}>
//             {r.name} - {format(new Date(r.date), 'yyyy-MM-dd HH:mm')} {/* Format the date */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReservationList;
