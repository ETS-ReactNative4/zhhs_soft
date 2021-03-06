import ActionCell from "layouts/ecommerce/products/products-list/components/ActionCell";

export default {
  columns: [
    { Header: "MEDICINE NAME", accessor: "mName", width: "25%" },
    { Header: "MEDICINE TYPE", accessor: "mType", width: "20%" },
    { Header: "MEDICINE EXPIRY", accessor: "mExpiry" },
    { Header: "MEDICINE COUNT", accessor: "mCount" },
    { Header: "MEDICINE PRICE (Rs)", accessor: "mPrice" },
    { Header: "ACTION", accessor: "pCheck", width: "9%" },
  ],

  rows: [
    {
      mName: "Panadal",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 42,
      mPrice: "20",
      pCheck: <ActionCell />,
    },

    {
      mName: "Flagyl",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 47,
      mPrice: "25",
      pCheck: <ActionCell />,
    },
    {
      mName: "Majoon Specific 1",
      mType: "Self",
      mExpiry: "4/11/2021",
      mCount: "-",
      mPrice: "-",
      pCheck: <ActionCell />,
    },
    {
      mName: "Entamizole",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 25,
      mPrice: "75",
      pCheck: <ActionCell />,
    },
    {
      mName: "Co-Easy Day",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 57,
      mPrice: "125",
      pCheck: <ActionCell />,
    },
    {
      mName: "Sharbat Specific 1",
      mType: "Self",
      mExpiry: "4/11/2021",
      mCount: "-",
      mPrice: "-",
      pCheck: <ActionCell />,
    },
    {
      mName: "Covam",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 56,
      mPrice: "225",
      pCheck: <ActionCell />,
    },
    {
      mName: "HCQ-200",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 31,
      mPrice: "350",
      pCheck: <ActionCell />,
    },
    {
      mName: "Majoon Specific 2",
      mType: "Self",
      mExpiry: "4/11/2021",
      mCount: "-",
      mPrice: "-",
      pCheck: <ActionCell />,
    },
    {
      mName: "My Fol",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 50,
      mPrice: "150",
      pCheck: <ActionCell />,
    },
    {
      mName: "Citotrexate",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 19,
      mPrice: "125",
      pCheck: <ActionCell />,
    },
    {
      mName: "Disprin",
      mType: "Shelf",
      mExpiry: "4/11/2021",
      mCount: 56,
      mPrice: "5",
      pCheck: <ActionCell />,
    },
  ],
};
