import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import MainLayout from "./components/Layout/MainLayout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
import ManageEmployee from "./features/employee/ManageEmployees";
import EmployeeDetails from "./features/employee/EmployeeDetails";
import Customers from "./pages/Customers";
import ManageCustomer from "./features/customers/ManageCustomers";
import CustomerDetails from "./features/customers/CustomerDetails";
import Items from "./pages/Items";
import ManageItems from "./features/items/ManageItems";
import ItemDetails from "./features/items/ItemDetails";
import Quotations from "./pages/Quotations";
import AMCs from "./pages/AMCs";
import Visits from "./pages/Visits";
import Surveys from "./pages/Surveys";
import ManageVisits from "./features/visits/ManageVisits";
import VisitDetails from "./features/visits/VisitDetails";
import ManageAMCs from "./features/amc/ManageAMCs";
import AmcDetails from "./features/amc/AmcDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout active="dashboard">
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/customers"
          element={
            <MainLayout active="customers">
              <Customers />
            </MainLayout>
          }
        />

        <Route
          path="/customers/manage"
          element={
            <MainLayout active="customers">
              <ManageCustomer />
            </MainLayout>
          }
        />
        <Route
          path="/customers/manage/:customerId"
          element={
            <MainLayout active="customers">
              <ManageCustomer isEdit />
            </MainLayout>
          }
        />
        <Route
          path="/customers/:customerId"
          element={
            <MainLayout active="customers">
              <CustomerDetails />
            </MainLayout>
          }
        />
        <Route
          path="/employees"
          element={
            <MainLayout active="employees">
              <Employees />
            </MainLayout>
          }
        />
        <Route
          path="/employees/manage"
          element={
            <MainLayout active="employees">
              <ManageEmployee />
            </MainLayout>
          }
        />
        <Route
          path="/employees/manage/:empId"
          element={
            <MainLayout active="employees">
              <ManageEmployee isEdit />
            </MainLayout>
          }
        />
        <Route
          path="/employees/:empId"
          element={
            <MainLayout active="employees">
              <EmployeeDetails />
            </MainLayout>
          }
        />
        <Route
          path="/items"
          element={
            <MainLayout active="items">
              <Items />
            </MainLayout>
          }
        />
        <Route
          path="/items/:id"
          element={
            <MainLayout active="items">
              <ItemDetails />
            </MainLayout>
          }
        />
        <Route
          path="/items/manage"
          element={
            <MainLayout active="items">
              <ManageItems />
            </MainLayout>
          }
        />
        <Route
          path="/items/manage/:id"
          element={
            <MainLayout active="items">
              <ManageItems isEdit />
            </MainLayout>
          }
        />
        <Route
          path="/quotations"
          element={
            <MainLayout active="quotations">
              <Quotations />
            </MainLayout>
          }
        />
        <Route
          path="/amcs"
          element={
            <MainLayout active="amcs">
              <AMCs />
            </MainLayout>
          }
        />
        <Route
          path="/amcs/:id"
          element={
            <MainLayout active="amcs">
              <AmcDetails />
            </MainLayout>
          }
        />
        <Route
          path="/amcs/manage"
          element={
            <MainLayout active="amcs">
              <ManageAMCs />
            </MainLayout>
          }
        />
        <Route
          path="/amcs/manage/:id"
          element={
            <MainLayout active="amcs">
              <ManageAMCs isEdit />
            </MainLayout>
          }
        />
        <Route
          path="/visits"
          element={
            <MainLayout active="visits">
              <Visits />
            </MainLayout>
          }
        />
        <Route
          path="/visits/:id"
          element={
            <MainLayout active="visits">
              <VisitDetails />
            </MainLayout>
          }
        />
        <Route
          path="/visits/manage"
          element={
            <MainLayout active="visits">
              <ManageVisits />
            </MainLayout>
          }
        />
        <Route
          path="/visits/manage/:id"
          element={
            <MainLayout active="visits">
              <ManageVisits isEdit />
            </MainLayout>
          }
        />
        <Route
          path="/surveys"
          element={
            <MainLayout active="surveys">
              <Surveys />
            </MainLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <MainLayout active="settings">
              <Settings />
            </MainLayout>
          }
        />

        <Route path="/:notfound" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
