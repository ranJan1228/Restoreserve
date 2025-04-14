import React from 'react';
import Navbar from '../components/ResNavbar';
import ManageTable from '../components/ManageTable';
import RegisteredUsers from '../components/RegUsers';
import TableReserved from '../components/TableReserved';

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <ManageTable/>
      <RegisteredUsers/>
      <TableReserved/>
    </>
  );
};

export default UserDashboard;

