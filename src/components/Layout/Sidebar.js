import { LuUser } from "react-icons/lu";
import {
  MdOutlineDashboard,
  MdOutlineEngineering,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { GoGear } from "react-icons/go";
import { BiDoorOpen } from "react-icons/bi";
import { RiSurveyLine } from "react-icons/ri";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { VscTools } from "react-icons/vsc";

import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

const menuItems = [
  {
    label: (
      <Link style={{ textDecoration: "none" }} to="/dashboard">
        Dashboard
      </Link>
    ),
    key: "dashboard",
    icon: <MdOutlineDashboard style={{ fontSize: "20px" }} />,
  },
  {
    label: "Employees",
    key: "employees",
    icon: <MdOutlineEngineering style={{ fontSize: "20px" }} />,
    children: [
      {
        label: <Link to="/employees">Employees Details</Link>,
        key: "emp",
      },
      {
        label: <Link to="/employees/manage">Create Employees</Link>,
        key: "createEmployee",
      },
      {
        label: <Link to="/employees/manage">Employees Attendence</Link>,
        key: "empAttendence",
      },
    ],
  },
  {
    label: "Customers",
    key: "customers",
    icon: <LuUser style={{ fontSize: "20px" }} />,
    children: [
      {
        label: (
          <Link style={{ textDecoration: "none" }} to="/customers">
            Customer Details
          </Link>
        ),
        key: "custDetails",
      },
      {
        label: (
          <Link style={{ textDecoration: "none" }} to="/customers/manage">
            Create Customer
          </Link>
        ),
        key: "createCustomer",
      },
    ],
  },
  {
    label: "Items",
    key: "items",
    icon: <MdOutlineProductionQuantityLimits style={{ fontSize: "20px" }} />,
    children: [
      {
        label: <Link to="/items">Item Details</Link>,
        key: "itemDetails",
      },
      {
        label: <Link to="/items/manage">Create Items</Link>,
        key: "createItems",
      },
    ],
  },
  {
    label: "AMCs",
    key: "amcs",
    icon: <VscTools style={{ fontSize: "20px" }} />,
    children: [
      {
        label: <Link to="/amcs">AMC Deatails</Link>,
        key: "amcManagement",
      },
      {
        label: <Link to="/amcs/manage">Create AMC</Link>,
        key: "amcCreate",
      },
    ],
  },
  {
    label: "Quotation",
    key: "quotation",
    icon: <HiOutlineCurrencyDollar style={{ fontSize: "20px" }} />,
    children: [
      {
        label: <Link to="/quotations">Quotation Details</Link>,
        key: "quotationDetails",
      },
      {
        label: <Link to="/quotations/manage">Create Quotation</Link>,
        key: "createQuotation",
      },
    ],
  },
  {
    label: "Visits",
    key: "visits",
    icon: <BiDoorOpen style={{ fontSize: "20px" }} />,
    children: [
      {
        label: (
          <Link style={{ textDecoration: "none" }} to="/visits">
            Visit Details
          </Link>
        ),
        key: "visitDetails",
      },
      {
        label: (
          <Link style={{ textDecoration: "none" }} to="/visits/Manage">
            Create Visit
          </Link>
        ),
        key: "createVisit",
      },
    ],
  },
  {
    label: (
      <Link style={{ textDecoration: "none" }} to="/surveys">
        Surveys
      </Link>
    ),
    key: "surveys",
    icon: <RiSurveyLine style={{ fontSize: "20px" }} />,
  },
  {
    label: (
      <Link style={{ textDecoration: "none" }} to="/settings">
        Settings
      </Link>
    ),
    key: "settings",
    icon: <GoGear style={{ fontSize: "20px" }} />,
  },
];

const SiteSidebar = ({ active }) => {
  console.log(active);
  return (
    <Sider width={250} breakpoint="lg" collapsedWidth="0">
      <Menu
        mode="inline"
        defaultSelectedKeys={active}
        style={{ height: "100%", borderRight: 0, backgroundColor: "#fffaf7" }}
        items={menuItems}
      />
    </Sider>
  );
};

export default SiteSidebar;
